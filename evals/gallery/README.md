# Eval Gallery

Visual regression record: drop representative generated images here per released version so quality can be compared across releases.

```text
evals/gallery/
├── v0.4.0/
│   ├── 01-cover-wec.png
│   ├── 02-sb-recap.png
│   └── ...
├── v0.5.0/
│   └── (same scenarios regenerated)
└── ...
```

Rules:

- Regenerate the **same scenarios** each version (use inputs from `examples/input/`) so comparisons are apples-to-apples.
- Include at least: one WEC cover, one Vietnamese-text image, one series set sample.
- Keep images at generation resolution; do not edit or upscale.
- Note the backend used (GPT Image 2 / Nano Banana 2) in the filename or a small `notes.md` per folder.
