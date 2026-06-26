# Gallery Prompts - v0.6.0

Standard scenarios for visual regression. Paste each prompt into ChatGPT (GPT Image 2) as-is, one per image. Save results into this folder with the listed filename, and note any text errors in a `notes.md`.

Re-run these SAME scenarios each release so versions compare apples-to-apples.

---

## 01-wec-cover-vietnamese.png (WEC + Vietnamese text — the critical scenario)

```text
Create a 16:9 elegant watercolor editorial cover on warm white paper (#FAF7F0).

Layout: center text band, roughly 60% of width. Title in large navy (#1E3A5F) hand-lettered ink across two lines, render exactly character for character including Vietnamese diacritics:

"7 điểm chính từ buổi"
"Cafe Talk Online"

Subtitle in smaller, lighter ink below, render exactly: "Ngày 28/05/2026".

Motifs: soft blue (#A9C6DE) and cream (#E8DCC8) watercolor washes in the corners fading toward the center, plus a thin botanical branch along the top-left edge. Nothing behind the text zone.

Signature: "#signature" at the bottom-right corner, small, low-contrast faded ink.

All text in Vietnamese with correct diacritics — do not translate, do not alter accents. Avoid: extra text, placeholder text, people, characters, busy scenes, logos, heavy gradients, tiny unreadable text, clutter near the text zone.
```

## 02-acd-before-after.png (ACD)

```text
Create a 16:9 cinematic split-screen image with a hard vertical divide, photorealistic with dramatic lighting.

Left side (warm orange #D97B29, chaotic): an overwhelmed team copying customer questions into messy spreadsheets, papers and sticky notes everywhere, dim cluttered office. Small label: "Manual copy-paste".

Right side (blue-cyan #2D9CDB, calm and systematic): a clean dashboard where an AI assistant tags questions, routes them to owners, and a tidy weekly report appears. Small label: "AI tags & routes".

Headline (one short bold line, high contrast, top center): "Stop losing follow-ups".

Signature: "#signature" at the bottom-right corner, small, low-contrast.

Render all text exactly as written. Avoid: more than one headline, equal-looking sides, exaggerated promises, sketch or watercolor elements, tiny unreadable text.
```

## 03-sbs-single-insight.png (SBS)

```text
Create a 16:9 sketchnote in navy blue ballpoint pen (#1F3C88) on white paper, handwritten typography, generous whitespace.

One central metaphor only: a small figure climbing a sturdy staircase labeled "Systems", while a fragile ladder labeled "Goals" leans unused against the wall.

Handwritten quote across the top in two short lines: "You fall to the level" / "of your systems."

Signature: "#signature" at the bottom-right corner, small, faded ink.

Render all text exactly as written. Avoid: multiple metaphors, filled whitespace, printed-looking fonts, any color other than navy ink on white.
```

## 04-sb-lessons-recap.png (SB)

```text
Create a 16:9 notebook-page sketchnote in navy blue ballpoint pen (#1F3C88) on white paper, hand-drawn.

Handwritten title at top: "5 lessons from year one of B2B SaaS".

Below, five bullets in reading order, each with one small metaphor icon:
1. "Founders sell first" - handshake icon
2. "Niche down" - magnifying glass icon
3. "Onboarding beats features" - welcome door icon
4. "Case studies close deals" - open book icon
5. "Raise prices sooner" - small upward stairs icon

Signature: "#signature" at the bottom-right corner, small, faded ink.

Render all text exactly as written. Avoid: more than 6 bullets, long sentences, meaningless decorative icons, dense layout, mixed ink colors.
```

## 05-fbw-workflow.png (FBW)

```text
Create a 16:9 soft watercolor educational illustration on cream paper (#FAF6EE), soft blue (#4A90C4) with orange (#F2A33C) and yellow (#F7C948) accents, light ink outlines, warm and friendly.

A friendly little robot guide walks along a horizontal left-to-right workflow of four steps connected by arrows:
1. "Thu thập câu hỏi" - inbox icon
2. "AI gắn nhãn" - tag icon
3. "Chuyển đúng người" - arrow-to-person icon
4. "Báo cáo tuần" - report icon

Title at top in rounded handwriting: "Quy trình xử lý câu hỏi".

Signature: "#signature" at the bottom-right corner, small, faded ink.

All text in Vietnamese with correct diacritics, render exactly as written. Avoid: steps out of order, backward arrows, more than 6 steps, cold corporate look.
```

## 06-bld-framework.png (BLD)

```text
Create a 16:9 minimal business line diagram on white paper. Black (#1A1A1A) hand-drawn line art with even stroke weight; one small orange (#E8762C) accent, at most 5% of the image.

A clean operating-system map titled "Operating System for AI Adoption": left-to-right flow of five connected blocks: "Strategy", "Process", "People", "Tools", "Measurement". Place "Tools" after "Process". Add a small lever icon near "Process" and a dashboard icon near "Measurement".

One takeaway line under the flow: "Tools amplify the workflow you already have".

Signature: "#signature" at the bottom-right corner, small, faded.

Render all text exactly as written. Avoid: photorealism, gradients, shadows, crossing connectors, decorative icons without meaning, tiny labels.
```

## 07-vtk-knowledge-map.png (VTK)

```text
Create a 16:9 hand-drawn black ink (#222222) knowledge map on white paper with one orange accent (#E8762C) for emphasis only.

Bold hand-lettered headline at top: "Why content goes viral".

Central node (orange accent circle): "Emotion drives sharing".

Five connected branches with handwritten labels and one small icon each:
- "High-arousal emotions" - lightning icon, sub-note: "awe, anger, anxiety"
- "Practical value" - toolbox icon, sub-note: "helpful looks good"
- "Social currency" - badge icon, sub-note: "sharing signals identity"
- "Stories beat facts" - book icon
- "Daily triggers" - calendar icon

Vary line weight for hierarchy: headline thickest, branches medium, sub-notes thin.

Signature: "#signature" at the bottom-right corner, small, faded ink.

Render all text exactly as written. Avoid: disconnected branches, text walls without icons, more than one accent color, more than 7 branches.
```

---

## Grading

After generating, check each image: text exact (especially Vietnamese diacritics in 01 and 05), style matches, signature subtle. Record pass/fail per scenario in `notes.md` here, and overall scores via `evals/results/`.

