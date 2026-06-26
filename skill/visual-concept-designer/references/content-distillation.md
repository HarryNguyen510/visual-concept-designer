# Content Distillation

Turn long or messy source content into a small set of exact, image-ready text elements before writing any prompt. Distillation is what keeps sketchnotes accurate: the prompt step copies labels verbatim from here and never invents text.

## When to Distill

- Always when source content is longer than ~300 words or has multiple sections.
- Always when the user pastes a full article, transcript, or slide deck.
- Skip only when the input is already a short list of labels or a single sentence.

## Distillation Output

Produce silently, in this order:

1. **Core message** — one sentence the viewer must understand in 3 seconds.
2. **Ranked keypoints** — style-fit items, most important first.
3. **Exact in-image labels** — the final text exactly as it will appear in the image. Apply `vietnamese-text-guidelines.md` for Vietnamese (2-5 words per label, correct accents).
4. **Dropped-content note** — what was deliberately left out, so a revision can bring it back.

## Keypoint Budget per Style

| Style | Budget |
| --- | --- |
| ACD | 1 contrast pair (left vs right) + 1 short headline |
| WEC (cover) | Title + subtitle only — keypoints never appear on a cover |
| SBS | 1 insight only |
| SB | 3-6 bullets |
| FBW | 3-6 steps |
| EIS | 6-9 concept cards, each with title + 1-3 short lines |
| BLD | 3-7 blocks |
| VTK | 3-7 branches |
| BGL | 4-6 cards, each with title + short metric or 1-2 line description |


If keypoints exceed the budget: merge related points or drop the weakest. Never shrink text or add density to fit more.

## Anti-Hallucination Rules

- Every label must trace back to a sentence in the source content. No invented facts, prices, names, numbers, or claims.
- Copy numbers, prices, and dates exactly as written in the source.
- If a label you need is missing from the source, use a neutral generic word. Do not guess specifics.
- Keep the source language unless the user asks for translation.

## Display Rules

- Distill silently. Do not show working notes or the ranking process.
- When returning the generated image, print the keypoints/labels used so the user can verify accuracy at a glance.
- Ask the user first only when the source is truly ambiguous: no identifiable topic, or directly contradictory points.
