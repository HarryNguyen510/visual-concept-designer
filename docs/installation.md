# Installation

The installable skill is the folder `skill/visual-concept-designer`. It follows the standard agent-skill format — `SKILL.md` with YAML frontmatter — so any runtime supporting that format can load it. Installation is always the same: copy the folder into your runtime's skills directory and restart the agent.

## Codex

Windows PowerShell (`$HOME` expands to `C:\Users\<you>`):

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.agents\skills\visual-concept-designer
```

macOS / Linux:

```bash
cp -R skill/visual-concept-designer ~/.agents/skills/visual-concept-designer
```

## Claude Code

```powershell
Copy-Item -Recurse .\skill\visual-concept-designer $HOME\.claude\skills\visual-concept-designer
```

```bash
cp -R skill/visual-concept-designer ~/.claude/skills/visual-concept-designer
```

## Other Agents (Gemini CLI, etc.)

Copy `skill/visual-concept-designer` into the skills directory your runtime documents. Only `SKILL.md` plus its `references/`, `styles/`, and `assets/` folders are required.

## Verify the Install

Restart your agent, then ask:

```text
Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."
```

If the skill loads, it will pick the SBS style and generate (or return a prompt).

## Notes per Platform

- **Image backend**: the skill prefers GPT Image 2 and falls back to Gemini Nano Banana 2 (`references/model-adapters.md`). If your agent cannot generate images, ask for "prompt only" and paste the prompt into any image tool.
- **`agents/openai.yaml`** is display metadata for Codex only. Other runtimes ignore it safely — `SKILL.md` frontmatter is the portable contract.
- **Non-technical users**: ask whoever manages your agent setup to run the one copy command above for your platform, then restart the agent.

## If a Non-Technical Colleague Asks You

Forward them this: "Copy the `skill/visual-concept-designer` folder from the visual-concept-designer repository into the agent's skills directory (`~/.agents/skills` for Codex, `~/.claude/skills` for Claude Code) and restart the agent."
