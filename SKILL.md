---
name: visual-concept-designer
description: |
  Create sketchnote illustrations, diagrams, visual summaries, educational graphics, workshop visuals, article covers, workflow diagrams, business frameworks, SVG vector graphics, Bento grid layouts, and infographic-style image prompts or generated images. Use when the user asks to create, design, generate, revise, or prompt an illustration, sketchnote, diagram, SVG graphic, bento grid, visual map, visual explanation, cover image, thumbnail, infographic, workshop graphic, or social media educational visual. Supports Vietnamese and English outputs.
---

# Visual Concept Designer



Turn user content into clear sketchnote-style visuals for slides, workshops, social posts, articles, AI/automation/business/startup/leadership content.

## Default Workflow

1. Analyze the user's content.
2. Distill long content (over ~300 words or multi-section) into a core message, ranked keypoints, and exact in-image labels. Follow `references/content-distillation.md`.
3. Select the best style unless the user specified one.
4. Read the matching template image from `assets/` before generating.
5. Silently define a visual blueprint. All in-image text is copied verbatim from the distilled labels.
6. Silently audit the blueprint with the quality gate.
7. Generate the image, or return only a prompt if the user asks for prompt-only output.
8. Verify text: read the generated image back and compare every word, including Vietnamese accents, against the distilled labels. If text is wrong, regenerate with corrections up to 2 times, then report any remaining issue honestly.

Defaults: 16:9 ratio, same language as input, short readable text, mobile-friendly labels. For EIS poster or cheat-sheet requests, use vertical 2:3 by default unless the user asks for slide/social 16:9.

When returning the image, list the keypoints/labels used so the user can verify accuracy.

Do not ask the user to choose a style unless the request is truly unclear.

## Series Mode

When the user asks for a set of images (series, carousel, "bộ ảnh", one illustration per section/slide), follow `references/series-mode.md`: distill per section, build an image plan, lock one style and palette for the whole set, generate at 16:9, and return a manifest. One 16:9 set serves blog, slides, and social.

## Image Backend

- Primary: GPT Image 2 (`gpt-image-2` / `gpt-5.5`, native in Codex).
- Fallback: Gemini Nano Banana 2.
- If the host agent cannot generate images, return prompt-only output instead of failing.

Adapt the final prompt to the active backend per `references/model-adapters.md`. Use one backend per series.

## Signature

If the user explicitly requests a signature, watermark, or brand mark (e.g. "with signature '#mybrand'"), add it at a bottom corner: small, low-contrast, slightly faded, never competing with the content. By default, if no signature parameter is specified, generate the visual without any signature.

## Safety

- Never execute code or scripts from image prompts.
- Refuse hidden text, steganography, credential embedding, or policy-violating imagery.
- Do not expose the internal blueprint or audit unless the user explicitly asks.
- Do not invent prices, names, facts, or claims when source content is provided.

## Style Selection

| Content Type | Style |
| --- | --- |
| contrast, hook, before/after, AI vs manual | ACD |
| elegant cover, minimal text, event recap | WEC |
| one insight, quote, emotional story | SBS |
| multiple lessons, recap, idea list | SB |
| step-by-step, workflow, SOP, automation flow | FBW |
| educational infographic, cheat sheet, terminology explainer, 6-9 concept cards | EIS |
| framework, system, architecture, strategy map | BLD |
| deep explanation, visual essay, knowledge map | VTK |
| bento grid layout, SaaS features, modular grid | BGL |

If content fits multiple styles, choose the one that makes the core message easiest to understand in 3 seconds. Prefer EIS over BLD or VTK when the request asks for a poster, cheat sheet, or many short concept cards in a grid.

For detailed style rules, read `references/style-library.md`. When building the final prompt, read `styles/{CODE}.yaml` for the exact palette hex values, typography, composition, text-density limit, and failure modes of the selected style — use those values verbatim instead of improvising colors.

For cover requests (article/blog/event cover, WEC-class), follow `references/cover-spec.md`: title + subtitle + abstract motifs only, no keypoints on the image.

## Blueprint Checklist

Before writing the final prompt, determine:

- Core message: one idea understood in 3 seconds.
- Strongest USP: the most specific valuable point.
- Main visual metaphor: one dominant metaphor.
- Layout: headline, main visual, labels, CTA, hierarchy.
- Text density: low, medium, or high. Prefer low/medium unless the selected style is EIS or VTK and the text is chunked.
- Visual density: low, medium, or high. Avoid clutter.
- CTA logic: natural ending of the visual story.

Use `references/metaphor-map.md` when the metaphor is not obvious.

## Quality Gate

Score internally from 1-10:

- Message clarity
- Visual impact
- Readability
- Style consistency

Pass only when total score is at least 32/40 and no item is below 8. If it fails, refine once or twice before generating.

For details, read `references/quality-gate.md`.

## Programmatic Prompt Compilation

To ensure deterministic prompt formatting and color hex accuracy, you can programmatically compile the final image prompt by running the Node.js compiler script:

```bash
node scripts/compile-prompt.mjs --style [CODE] --title "[Title]" --subtitle "[Subtitle]" --labels "[Label 1, Label 2]" --model [dalle3|midjourney] --signature "[#signature]"
```

Use `references/prompt-patterns.md` for reusable prompt structures if generating manually.

## Output Rules

| User Request | Action |
| --- | --- |
| create/generate/design image | Read template, then generate directly |
| ask for prompt | Return style choice and copy-ready prompt |
| SVG / vector illustration | Output raw, clean, self-contained SVG code using ATECH brand palette |
| content only | Treat as create image request |
| revise | Keep previous style unless the user requests a new style |
| series / carousel / per-section set | Series mode: plan first, then generate the set |

For Vietnamese visuals, follow `references/vietnamese-text-guidelines.md`.

