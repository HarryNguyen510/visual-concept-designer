# Model Adapters

The same blueprint renders differently across image models. Adjust the final prompt per backend; never change the distilled labels.

## GPT Image 2 (`gpt-image-2` / `gpt-5.5`) — primary

- Follows long structured prompts well: keep the full layout description, exact text list, and negative list.
- State text instructions as: "Render this text exactly, character for character, including Vietnamese diacritics:" followed by each label on its own line in quotes.
- Declare aspect ratio via the API size parameter, and repeat "16:9 wide composition" in the prompt.
- Tends to over-decorate: keep the negative list explicit (no extra text, no extra icons, no borders).

## Gemini Nano Banana 2 — fallback

- Supports reference images: attach the style template from `assets/` as an image input and say "match the visual style of the reference image" instead of long style prose.
- Prefers shorter prompts: lead with the core message and exact text, then style, then negatives.
- Re-state the language explicitly ("all text in Vietnamese with correct diacritics") — it may otherwise translate labels.

## Prompt-Only Hosts

When the host agent cannot generate images, return the GPT Image 2 variant of the prompt by default and note that the template image path is a style reference for models that accept image inputs.

## Series Note

Within one series, use one backend for the whole set. Switching models mid-series breaks visual consistency; if a fallback becomes necessary, regenerate the whole set or warn the user about style drift.
