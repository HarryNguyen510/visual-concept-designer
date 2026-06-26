# Troubleshooting

## Vietnamese text has wrong accents

The skill verifies rendered text and regenerates up to 2 times automatically. If accents are still wrong:

1. Paste the exact correct spelling in quotes and say: `Regenerate. Render this text exactly, character for character: "7 điểm chính từ buổi Cafe Talk Online"`.
2. Shorten the label — long Vietnamese phrases break more often. Aim for 2-5 words (`references/vietnamese-text-guidelines.md`).
3. Ask for `prompt only`, check the prompt spells your text verbatim, then generate in your image tool and retry there.
4. Last resort: ask for the image without text, add text in Canva/Figma with a real font.

## The image is cluttered or off-message

- Ask: `Revise. Keep the style, reduce text, one message only.`
- Check the keypoints listed with the result — if the skill distilled the wrong points, say which keypoints to use instead.
- For long articles, state your core message explicitly: `Core message: ...`

## Wrong style was chosen

Name the style directly: `Use style WEC` (see the decision list in README). The style stays locked for revisions unless you change it.

## A cover came back with body text on it

Covers must contain only title + subtitle (+ small meta). Say: `This is a cover. Title: ... Subtitle: ... Nothing else.` The rules live in `references/cover-spec.md`.

## My agent cannot generate images

Ask for `prompt only`. The skill returns a copy-ready prompt you can paste into ChatGPT, Gemini, or any image tool. This is a supported mode, not a workaround.

## The signature hashtag appears and I don't want it

Signatures are omitted by default. If a signature was explicitly requested and you want to remove it, simply omit the signature parameter from your request.

## Series images look inconsistent

- Confirm all images used one style and one backend (`references/series-mode.md`).
- If one image drifts, ask to regenerate just that image, quoting its prompt from the manifest.

## Skill doesn't load at all

- Verify the folder sits directly in your runtime's skills directory (see `docs/installation.md`) and you restarted the agent.
- Run `node scripts/run-evals.mjs` in the repo — if structural checks fail, the copy may be incomplete.
