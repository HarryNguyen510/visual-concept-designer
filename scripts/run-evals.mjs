#!/usr/bin/env node
// Eval harness for visual-concept-designer. Zero dependencies, Node 18+.
//
// Modes:
//   node scripts/run-evals.mjs               structural checks (deterministic, CI-safe)
//   node scripts/run-evals.mjs packet        write a grading packet for behavioral cases
//   node scripts/run-evals.mjs score <file>  summarize a filled results JSON
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = path.join(root, "skill", "visual-concept-designer");
const casesDir = path.join(root, "evals", "cases");
const resultsDir = path.join(root, "evals", "results");

// One expectation field is required per case; schema varies by case family.
const EXPECTATION_FIELDS = ["expect", "expected", "expected_style", "checks", "required_fields"];

const read = (p) => fs.readFileSync(p, "utf8");
let failures = 0;
const fail = (msg) => { failures++; console.error("  FAIL " + msg); };
const ok = (msg) => console.log("  ok   " + msg);

function loadCases() {
  const all = [];
  for (const file of fs.readdirSync(casesDir).filter((f) => f.endsWith(".json"))) {
    const raw = read(path.join(casesDir, file));
    if (raw.charCodeAt(0) === 0xfeff) { fail(`${file}: has UTF BOM (breaks strict parsers)`); continue; }
    let cases;
    try { cases = JSON.parse(raw); } catch (e) { fail(`${file}: invalid JSON (${e.message})`); continue; }
    if (!Array.isArray(cases)) { fail(`${file}: root must be an array`); continue; }
    const seen = new Set();
    for (const c of cases) {
      if (!c.name) fail(`${file}: case missing "name"`);
      else if (seen.has(c.name)) fail(`${file}: duplicate case name "${c.name}"`);
      else seen.add(c.name);
      if (!EXPECTATION_FIELDS.some((f) => c[f] !== undefined))
        fail(`${file}: "${c.name}" has no expectation field (${EXPECTATION_FIELDS.join("/")})`);
    }
    all.push({ file, cases });
  }
  return all;
}

function checkStructure() {
  console.log("Eval case files:");
  const files = loadCases();
  for (const { file, cases } of files) ok(`${file} (${cases.length} cases)`);

  console.log("Template assets referenced in style-library.md:");
  const styleLib = read(path.join(skillDir, "references", "style-library.md"));
  for (const m of styleLib.matchAll(/assets\/[\w.-]+/g)) {
    const rel = m[0];
    fs.existsSync(path.join(skillDir, rel)) ? ok(rel) : fail(`${rel} missing from skill assets`);
  }

  console.log("Reference files mentioned in SKILL.md:");
  const skillMd = read(path.join(skillDir, "SKILL.md"));
  for (const m of new Set([...skillMd.matchAll(/references\/[\w-]+\.md/g)].map((x) => x[0]))) {
    fs.existsSync(path.join(skillDir, m)) ? ok(m) : fail(`${m} mentioned but missing`);
  }

  console.log("Orphan references (not mentioned in SKILL.md or style-library.md):");
  const mentioned = skillMd + styleLib;
  for (const f of fs.readdirSync(path.join(skillDir, "references")).filter((f) => f.endsWith(".md"))) {
    if (!mentioned.includes(`references/${f}`)) console.warn(`  warn ${f} is never mentioned (orphan?)`);
  }

  console.log("Style codes consistent between SKILL.md and style-library.md:");
  const codes = [...styleLib.matchAll(/^## (\w{2,4}) - /gm)].map((m) => m[1]);
  if (codes.length === 0) fail("no style codes found in style-library.md");
  for (const code of codes) {
    new RegExp(`\\b${code}\\b`).test(skillMd) ? ok(code) : fail(`style ${code} missing from SKILL.md`);
  }

  console.log("Keypoint budget table covers every style (content-distillation.md):");
  const distill = read(path.join(skillDir, "references", "content-distillation.md"));
  for (const code of codes) {
    // Table rows may carry a suffix, e.g. "| WEC (cover) |"
    new RegExp(`^\\| ${code}\\b`, "m").test(distill) ? ok(code) : fail(`style ${code} missing from keypoint budget table`);
  }

  console.log("Machine-readable style specs (styles/{CODE}.yaml):");
  const requiredYamlFields = ["code:", "name:", "template:", "use_for:", "palette:", "typography:", "composition:", "text_density:", "line_quality:", "failure_modes:"];
  for (const code of codes) {
    const specPath = path.join(skillDir, "styles", `${code}.yaml`);
    if (!fs.existsSync(specPath)) { fail(`styles/${code}.yaml missing`); continue; }
    const spec = read(specPath);
    const missing = requiredYamlFields.filter((f) => !spec.includes(f));
    if (missing.length) { fail(`styles/${code}.yaml missing fields: ${missing.join(" ")}`); continue; }
    if (!spec.includes(`code: ${code}`)) { fail(`styles/${code}.yaml code field does not match filename`); continue; }
    const tpl = /template:\s*(\S+)/.exec(spec)?.[1];
    if (!tpl || !fs.existsSync(path.join(skillDir, tpl))) { fail(`styles/${code}.yaml template path invalid: ${tpl}`); continue; }
    ok(`styles/${code}.yaml`);
  }

  console.log(failures ? `\n${failures} structural check(s) failed.` : "\nAll structural checks passed.");
  process.exit(failures ? 1 : 0);
}

// Behavioral cases need an LLM/human to run the skill and judge the output.
// The packet lists every case as a checklist for that grading pass.
function writePacket() {
  const version = /## (\d+\.\d+\.\d+)/.exec(read(path.join(root, "CHANGELOG.md")))?.[1] ?? "unknown";
  const lines = [
    `# Grading Packet - v${version}`,
    "",
    "Run each input through the installed skill, judge against the expectation,",
    "then record pass/fail in a results JSON (see evals/results/example-results.json)",
    "and summarize with: node scripts/run-evals.mjs score <results-file>",
    "",
  ];
  for (const { file, cases } of loadCases()) {
    lines.push(`## ${file}`, "");
    for (const c of cases) {
      const expectation = EXPECTATION_FIELDS.filter((f) => c[f] !== undefined)
        .map((f) => `${f}: ${JSON.stringify(c[f])}`).join("; ");
      lines.push(`- [ ] **${c.name}**`);
      if (c.input) lines.push(`  - input: ${c.input}`);
      lines.push(`  - ${expectation}`, "");
    }
  }
  fs.mkdirSync(resultsDir, { recursive: true });
  const out = path.join(resultsDir, "grading-packet.md");
  fs.writeFileSync(out, lines.join("\n"), "utf8");
  console.log("Grading packet written to " + path.relative(root, out));
}

function score(file) {
  if (!file) { console.error("Usage: node scripts/run-evals.mjs score <results.json>"); process.exit(1); }
  const r = JSON.parse(read(path.resolve(root, file)));
  const total = r.results.length;
  const passed = r.results.filter((x) => x.pass).length;
  const pct = total ? Math.round((passed / total) * 100) : 0;
  console.log(`Version: ${r.version}  Graded by: ${r.graded_by ?? "?"}`);
  console.log(`Eval score: ${passed}/${total} (${pct}%)`);
  const failing = r.results.filter((x) => !x.pass);
  if (failing.length) {
    console.log("Failing cases:");
    for (const f of failing) console.log(`  - ${f.case}${f.note ? ": " + f.note : ""}`);
  }
  console.log(`\nCHANGELOG line: Eval score ${passed}/${total} (${pct}%).`);
}

const [mode, arg] = process.argv.slice(2);
if (mode === "packet") writePacket();
else if (mode === "score") score(arg);
else checkStructure();
