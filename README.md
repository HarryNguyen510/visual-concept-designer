# Visual Concept Designer

<p align="left">
  <b>English</b> •
  <a href="README.vi.md">Tiếng Việt</a> •
  <a href="README.es.md">Español</a> •
  <a href="README.ja.md">日本語</a> •
  <a href="README.zh.md">简体中文</a>
</p>

---

Visual Concept Designer is an agent skill that turns notes, articles, frameworks, workflows, and business ideas into clear sketchnote-style illustrations, Bento grids, and minimal article covers — as generated images, SVGs, or copy-ready prompts.

It is designed for:

- Visual summaries of long-form content (blog, slides, social posts)
- Minimal article covers: title + subtitle + abstract motifs
- Workshop and presentation graphics
- Business frameworks and strategy maps
- Vietnamese and English outputs (with strict diacritics handling)

## How It Works

You paste content and ask. The skill then:

1. **Distills** long content into one core message and style-fit exact labels (no invented facts)
2. **Picks a style** from the 8 styles below (or uses the one you name)
3. **Generates** the image from the style's machine-readable spec (exact palette, layout, negative list)
4. **Verifies** the rendered text — including Vietnamese accents — and regenerates with corrections if wrong

You can also ask for the prompt only and paste it into any image tool yourself.

## Which Style Do I Need?

- **Blog/article cover (title + subtitle only)?** → `WEC`
- **Before/after, manual vs AI hook?** → `ACD`
- **One quote or single insight?** → `SBS`
- **List of lessons or tips?** → `SB`
- **Step-by-step workflow / SOP?** → `FBW`
- **Educational cheat sheet / many concept cards?** → `EIS`
- **Business framework / system map?** → `BLD`
- **Deep-dive knowledge map?** → `VTK`

| Code | Style | Best for |
| --- | --- | --- |
| ACD | AI Contrast Drama | Hooks, covers, before/after, manual vs AI |
| WEC | Watercolor Editorial Cover | Calm covers, event recaps, premium banners |
| SBS | Sketchnote Blue Story | One insight, quote, reflective lesson |
| SB | Sketchnote Blue | Multiple lessons, recap, idea list |
| FBW | FlowBot Watercolor | Workflows, SOPs, automation flows |
| EIS | Educational Infographic Sketchnote | Cheat sheets, concept explainers, educational posters |
| BLD | Business Line Diagram | Frameworks, systems, architecture maps |
| VTK | Visual Thinking Knowledge | Deep analysis and knowledge maps |

You don't have to choose — the skill picks the best fit automatically.

## Install

The installable skill lives in `skill/visual-concept-designer` and follows the standard agent-skill format (`SKILL.md` with YAML frontmatter), so it works on any runtime that supports that format.

**Codex** (Windows PowerShell — `$HOME` expands to `C:\Users\<you>`):

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.agents\skills\visual-concept-designer
```

**Claude Code:**

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.claude\skills\visual-concept-designer
```

**Other agents (Gemini CLI, etc.):** copy `skill/visual-concept-designer` into your runtime's skills directory.

Restart your agent after installing. To verify, ask it: `Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."`

Image backends: GPT Image 2 first, Gemini Nano Banana 2 as fallback; if your agent cannot generate images at all, the skill returns a copy-ready prompt or raw SVG code instead. See `docs/installation.md` for details.

## Quick Use

Generate an image:

```text
Use visual-concept-designer to create an illustration for this business framework: ...
```

Vietnamese blog cover (copy, replace title/subtitle):

```text
Use visual-concept-designer to create a minimal cover for my blog post.
Title: 7 điểm chính từ buổi Cafe Talk Online
Subtitle: Ngày 28/05/2026
```

Prompt only (paste into ChatGPT or any image tool yourself):

```text
Use visual-concept-designer and return only the image prompt for this article: ...
```

A full set for one article (cover + one illustration per section):

```text
Use visual-concept-designer to create a cover plus one illustration per section for this article: ...
```

More patterns: `docs/usage.md`. Sample inputs: `examples/input/`. Sample prompts: `examples/prompts/`.

## Support

- Something looks wrong (Vietnamese accents, layout, style)? → `docs/troubleshooting.md`
- Questions or bugs → open a GitHub issue
- Want to add a style? → `docs/authoring-new-styles.md` and `CONTRIBUTING.md`

## Repository Status

Active development. Each release is gated by structural checks and an eval rubric — see `docs/release-process.md` and `CHANGELOG.md`.

## License

Code and documentation are MIT licensed. Template assets are AI-generated and covered by `ASSET_LICENSE.md`.
