# Series Mode

Turn one article, slide deck outline, or long post into a consistent set of images: 1 cover + 1 illustration per section/key idea. One set at 16:9 serves blog, slides, and social — never regenerate per channel.

## When Series Mode Activates

- The user asks for a set, series, carousel, "bộ ảnh", "minh họa từng phần", or images for each section/slide.
- The user provides a multi-section article and asks to illustrate it (not just one image or a cover).

Single-image requests never trigger series mode.

## Workflow

1. **Distill per section.** Split the article by H2 headings or key ideas. Run `content-distillation.md` per section, each within the chosen style's keypoint budget. Run one global distillation for the cover (title + subtitle only).
2. **Build the image plan.** A short table: number, role (cover/illustration), section, key labels, filename.
3. **Lock consistency** (see rules below).
4. **Show the plan first.** Present the image plan briefly and generate after the user confirms — unless the user already asked to generate everything in one go.
5. **Generate sequentially.** Apply the text verify loop from the default workflow to every image.
6. **Return the manifest** and the labels used per image.

## Consistency Rules

- **One style** for all body illustrations. The cover follows `cover-spec.md` (WEC by default) and may differ from the body style.
- **Lock the palette**: name the exact same hues in every prompt of the set.
- **Copy the style paragraph verbatim** into every prompt — same paper, same line weight, same ink description. Do not paraphrase between images.
- **Recurring element**: if the style has a guide character or motif (FBW robot, watercolor wash family), repeat it across the set.
- **Uniform aspect**: 16:9 for the entire set.
- **Filenames**: `{NN}-{section-slug}` with `01` as the cover.
- **Signature** on every image per the SKILL.md Signature rule.

## Manifest Format

Return alongside the images:

```json
{
  "series": "article-or-deck-title-slug",
  "style": "SB",
  "cover_style": "WEC",
  "palette": "warm white paper, navy ink, soft blue wash",
  "aspect": "16:9",
  "images": [
    {
      "id": 1,
      "role": "cover",
      "section": "(whole article)",
      "filename": "01-cover",
      "labels": ["<title>", "<subtitle>"]
    },
    {
      "id": 2,
      "role": "illustration",
      "section": "<H2 heading>",
      "filename": "02-<section-slug>",
      "labels": ["<label>", "<label>"]
    }
  ]
}
```

## Set Size

- Default: 1 cover + one illustration per H2, capped at 8 images total.
- If the article has more sections than the cap, merge the weakest sections in the plan and note the merge.
