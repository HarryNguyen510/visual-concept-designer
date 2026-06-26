# Example: Blog Article Series Plan

Input: a 4-section article "Stop Buying AI Tools Before Fixing Your Workflow" (see `examples/input/article-cover.md` for the cover brief).

## Image Plan (shown to the user before generating)

| # | Role | Section | Labels | Filename |
| --- | --- | --- | --- | --- |
| 1 | cover (WEC) | whole article | `Stop Buying AI Tools` / `Fix your workflow first` | 01-cover |
| 2 | illustration (SB) | Why tools fail without process | `Tools amplify workflow`, `Good or bad` | 02-why-tools-fail |
| 3 | illustration (SB) | Map your workflow first | `Map current steps`, `Find bottleneck` | 03-map-workflow-first |
| 4 | illustration (SB) | Then choose tools | `Tool fits process`, `Not reverse` | 04-then-choose-tools |

Consistency: body style SB (blue ballpoint notebook), palette `warm white paper, navy blue ink`, aspect 16:9, signature `#signature` bottom-right on every image.

## Manifest (returned with the set)

```json
{
  "series": "stop-buying-ai-tools",
  "style": "SB",
  "cover_style": "WEC",
  "palette": "warm white paper, navy blue ink",
  "aspect": "16:9",
  "images": [
    { "id": 1, "role": "cover", "section": "(whole article)", "filename": "01-cover", "labels": ["Stop Buying AI Tools", "Fix your workflow first"] },
    { "id": 2, "role": "illustration", "section": "Why tools fail without process", "filename": "02-why-tools-fail", "labels": ["Tools amplify workflow", "Good or bad"] },
    { "id": 3, "role": "illustration", "section": "Map your workflow first", "filename": "03-map-workflow-first", "labels": ["Map current steps", "Find bottleneck"] },
    { "id": 4, "role": "illustration", "section": "Then choose tools", "filename": "04-then-choose-tools", "labels": ["Tool fits process", "Not reverse"] }
  ]
}
```

The same 16:9 set is reused as blog inline images, slide visuals, and social posts without regeneration.

