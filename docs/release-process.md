# Release Process

## Gate (all must pass before tagging a release)

1. **Structural checks**: `node scripts/run-evals.mjs` — exit 0 required. Validates eval case files, template assets, reference links, and style-code consistency.
2. **Skill validation**: `scripts/validate-skill.ps1` or `scripts/validate-skill.sh`.
3. **Behavioral grading**:
   - `node scripts/run-evals.mjs packet` → grade each case through the installed skill.
   - Record results in `evals/results/v{version}-results.json` (see `example-results.json`).
   - `node scripts/run-evals.mjs score evals/results/v{version}-results.json`.
4. **Gallery**: regenerate the standard scenarios into `evals/gallery/v{version}/` and compare with the previous version.

## Steps

1. Run the gate above.
2. Update `CHANGELOG.md` — include the eval score line from the `score` command.
3. Package the skill (`scripts/package-skill.ps1` / `.sh`).
4. Commit, push, create a GitHub release.
5. Attach gallery samples to the release notes when rights are clear.

## Versioning

- `0.x`: early skill behavior and style changes
- `1.x`: stable public skill contract

A release that lowers the eval score must explain why in the CHANGELOG or be blocked.
