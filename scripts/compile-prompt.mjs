#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const skillDir = path.join(root, "skill", "visual-concept-designer");

// Simple CLI arguments parser
const args = {};
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg.startsWith("--")) {
    const key = arg.slice(2);
    const val = process.argv[i + 1];
    if (val && !val.startsWith("--")) {
      args[key] = val;
      i++;
    } else {
      args[key] = true;
    }
  }
}

const { style, title, subtitle, labels, model = "dalle3", signature } = args;

if (!style) {
  console.error("Error: --style parameter is required (e.g. --style BGL, --style SBS, --style SB)");
  process.exit(1);
}

// 1. Load Style Spec YAML
const stylePath = path.join(skillDir, "styles", `${style.toUpperCase()}.yaml`);
if (!fs.existsSync(stylePath)) {
  console.error(`Error: Style config not found at ${stylePath}`);
  process.exit(1);
}

const styleContent = fs.readFileSync(stylePath, "utf8");
const parseYaml = (yaml) => {
  const obj = {};
  let currentKey = null;
  yaml.split("\n").forEach((line) => {
    if (line.trim().startsWith("#") || !line.trim()) return;
    const match = line.match(/^([\w_]+):\s*(.*)$/);
    if (match) {
      currentKey = match[1].trim();
      let val = match[2].trim();
      if (val) {
        if (val.startsWith("[") && val.endsWith("]")) {
          val = val.slice(1, -1).split(",").map(x => x.replace(/['"]/g, "").trim());
        } else if (val.startsWith('"') && val.endsWith('"')) {
          val = val.slice(1, -1);
        }
        obj[currentKey] = val;
      } else {
        obj[currentKey] = {};
      }
    } else if (line.startsWith("  ") && currentKey) {
      const subMatch = line.match(/^\s+([\w_]+):\s*(.*)$/);
      if (subMatch) {
        const subKey = subMatch[1].trim();
        let subVal = subMatch[2].trim();
        if (subVal.startsWith('"') && subVal.endsWith('"')) {
          subVal = subVal.slice(1, -1);
        }
        if (typeof obj[currentKey] === "object") {
          obj[currentKey][subKey] = subVal;
        }
      }
    }
  });
  return obj;
};

const styleSpec = parseYaml(styleContent);

// 2. Load Model Adapter Spec YAML
const adapterPath = path.join(skillDir, "styles", "adapters", `${model.toLowerCase()}.yaml`);
let adapterSpec = {};
if (fs.existsSync(adapterPath)) {
  adapterSpec = parseYaml(fs.readFileSync(adapterPath, "utf8"));
}

// 3. Compile the Prompt
const formatSection = (val) => {
  if (typeof val === "object" && !Array.isArray(val)) {
    return Object.entries(val).map(([k, v]) => `\n  - ${k}: ${v}`).join("");
  }
  return val;
};

const paletteDesc = formatSection(styleSpec.palette || "");
const lineQuality = styleSpec.line_quality || "";
const composition = formatSection(styleSpec.composition || "");
const defaultAspect = adapterSpec.default_aspect || "16:9";

let textContent = "";
if (title) textContent += `\nTitle at the top: "${title}"`;
if (subtitle) textContent += `\nSubtitle: "${subtitle}"`;

if (labels) {
  const labelList = labels.split(",").map(l => l.trim());
  textContent += `\nKey Labels to include verbatim:\n` + labelList.map((l, idx) => `  - "${l}"`).join("\n");
}

let signatureBlock = "";
if (signature) {
  signatureBlock = `\nSignature: "${signature}" at the bottom corner, small, low-contrast, faded ink.`;
}

let compiledPrompt = `Create a ${defaultAspect} visual graphic in style ${styleSpec.name} (${styleSpec.code}).
Line Quality: ${lineQuality}
Composition & Layout: ${composition}
Palette Specs: ${paletteDesc}
${textContent}
${signatureBlock}
`;

// Add Model Specific Additions
if (model.toLowerCase() === "midjourney") {
  const arParam = adapterSpec.aspect_ratio_param || "--ar";
  const suffix = adapterSpec.suffix || "";
  const negative = adapterSpec.default_negative ? `${adapterSpec.negative_prompt_param || "--no"} ${adapterSpec.default_negative}` : "";
  compiledPrompt += `\n${arParam} ${defaultAspect} ${suffix} ${negative}`;
} else if (model.toLowerCase() === "dalle3") {
  const suffix = adapterSpec.suffix || "";
  const negative = adapterSpec.default_negative ? `Avoid: ${adapterSpec.default_negative}` : "";
  compiledPrompt += `\nInstructions: ${suffix}. ${negative}`;
}

console.log("\n================ COMPILED PROMPT ================");
console.log(compiledPrompt.trim());
console.log("=================================================\n");
