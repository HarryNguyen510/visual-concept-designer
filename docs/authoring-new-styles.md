# Authoring New Styles

A new style ships only when ALL of these exist:

- Short code, for example `MAP` or `INK`
- Template asset in `skill/visual-concept-designer/assets/`
- Machine-readable spec `skill/visual-concept-designer/styles/{CODE}.yaml` with: `code`, `name`, `template`, `use_for`, `palette` (hex values), `typography`, `composition`, `text_density`, `line_quality`, `failure_modes`
- Entry in `references/style-library.md` (human overview) and the SKILL.md style-selection table
- Keypoint budget row in `references/content-distillation.md`
- At least one eval case in `evals/cases/style-selection.json`
- Example input in `examples/input/` and example prompt in `examples/prompts/`
- Golden example image in `evals/gallery/` for the release that introduces the style

Checklist of files to touch:

- `skill/visual-concept-designer/SKILL.md` — add a row to the **style-selection table** (most-forgotten step)
- `skill/visual-concept-designer/styles/{CODE}.yaml`
- `skill/visual-concept-designer/references/style-library.md`
- `skill/visual-concept-designer/references/content-distillation.md`
- `evals/cases/style-selection.json`
- `examples/input/`, `examples/prompts/`

Run `node scripts/run-evals.mjs` afterward — it verifies the YAML spec, template asset, and style-code consistency automatically.
