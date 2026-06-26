# Changelog

## 0.7.0 - 2026-06-16

- Added EIS - Educational Infographic Sketchnote for cheat sheets, educational concept explainers, technical/business terminology guides, and 6-9 card knowledge posters.
- Added EIS machine-readable style spec, template asset requirement, style routing, content-distillation budget, prompt pattern, example input/prompt, and style-selection eval case.
- Updated docs to describe eight style families and clarify when EIS should beat BLD or VTK.

## 0.6.0 - 2026-06-13

Usability release driven by a 4-persona first-time-user review (Codex founder, non-technical Vietnamese marketer, OSS contributor, non-Codex agent user).

- Fixed: shell scripts had UTF-8 BOM + CRLF (broken on Linux/macOS); added `.gitattributes` enforcing LF for `.sh`/`.mjs`/`.yaml`/`.json`.
- README overhaul: How It Works, style decision list, install paths for Codex + Claude Code + other agents, verify step, Support section.
- Added `docs/troubleshooting.md`: Vietnamese accent recovery, clutter/style/cover fixes, prompt-only fallback, signature opt-out.
- `docs/installation.md` rewritten multi-platform; clarified `agents/openai.yaml` is Codex-only metadata.
- `docs/usage.md`: Vietnamese blog-cover quick start + accent warning up top.
- Example coverage now 7/7 styles: added ACD, SBS, SB, VTK prompt pairs and a Vietnamese blog-cover input+prompt pair.
- Eval harness: new check that the keypoint budget table covers every style.
- Gallery seeded: `evals/gallery/v0.6.0/prompts-to-generate.md` — 7 standard paste-ready prompts (incl. Vietnamese-text scenarios) for manual generation in ChatGPT.

## 0.5.0 - 2026-06-13

- Added machine-readable style specs `skill/sketchnote-creator/styles/{CODE}.yaml` for all 7 styles: exact palette hex, typography, composition, text-density limits, line quality, failure modes. SKILL.md now instructs reading the YAML before writing the final prompt — no more improvised colors.
- Eval harness extended: verifies every style has a YAML spec with required fields, matching code, and a valid template path.
- New-style authoring requirements tightened: a style ships only with YAML spec + eval case + examples + golden gallery image (`docs/authoring-new-styles.md`).
- Structural eval score at release: all checks pass.

## 0.4.0 - 2026-06-13

- Added runnable eval harness `scripts/run-evals.mjs` (zero-dependency Node): structural checks (case schema, BOM, template assets, reference links, style-code consistency), grading-packet generation for behavioral cases, and results scoring.
- Added `evals/results/` with results template; generated grading packet is gitignored.
- Added `evals/gallery/` for per-version visual regression comparison with standard scenarios.
- Release gate formalized in `docs/release-process.md`: structural checks + skill validation + behavioral grading + gallery comparison; eval score recorded in CHANGELOG; score regressions must be explained or blocked.

## 0.3.0 - 2026-06-13

- Added series mode: one article ? 1 cover + per-section illustrations as a consistent 16:9 set reused across blog, slides, and social (`references/series-mode.md`).
- Series consistency rules: one body style, locked palette, verbatim style paragraph, recurring motif, 8-image cap with merge notes, JSON manifest output.
- Added model adapters: prompt adjustments for GPT Image 2 vs Nano Banana 2, one-backend-per-series rule (`references/model-adapters.md`).
- Added series-mode eval cases and rubric row; series plan + manifest example.

## 0.2.0 - 2026-06-13

- Added content distillation step: long content is reduced to a core message, ranked keypoints, and exact in-image labels before prompting (`references/content-distillation.md`).
- Added WEC-class cover specification: composition zones, text budget, abstract motif library, palette, aspect variants, negative list (`references/cover-spec.md`).
- Added post-generation text verify loop: generated images are read back and compared against distilled labels, with up to 2 corrective regenerations.
- Declared image backend: GPT Image 2 (`gpt-image-2` / `gpt-5.5`) primary, Gemini Nano Banana 2 fallback, prompt-only when the host cannot generate.
- Added default signature `#signature` (bottom corner, small, faded; opt-out supported).
- Added eval cases for distillation and cover compliance; extended rubric.
- Added article-cover example prompt; resolved asset license status (AI-generated templates).

## 0.1.0 - 2026-06-12

- Initial public repository scaffold.
- Added installable `sketchnote-creator` skill package.
- Added seven style template assets.
- Added references, examples, docs, eval stubs, and packaging scripts.

