#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -f "$ROOT/SKILL.md" ]; then
    echo "Error: Cannot find SKILL.md at $ROOT" >&2
    exit 1
fi

echo "================================================="
echo "   Visual Concept Designer - Skill Installer    "
echo "================================================="
echo ""

installed=0

# Helper to install
install_to() {
    local name="$1"
    local target="$2"
    mkdir -p "$target"
    rm -rf "$target"
    mkdir -p "$target"
    cp "$ROOT/SKILL.md" "$target/"
    for dir in agents assets references styles; do
        if [ -d "$ROOT/$dir" ]; then
            cp -R "$ROOT/$dir" "$target/"
        fi
    done
    echo "[OK] Installed to $name: $target"
    installed=$((installed + 1))
}

# 1. Codex
if [ -d "$HOME/.agents" ]; then
    install_to "Codex" "$HOME/.agents/skills/visual-concept-designer"
fi

# 2. Claude Code
if [ -d "$HOME/.claude" ]; then
    install_to "Claude Code" "$HOME/.claude/skills/visual-concept-designer"
fi

# 3. Antigravity / Gemini CLI
if [ -d "$HOME/.gemini" ]; then
    install_to "Antigravity / Gemini" "$HOME/.gemini/config/skills/visual-concept-designer"
fi

# Default fallback if no directory existed yet
if [ $installed -eq 0 ]; then
    install_to "Codex (default)" "$HOME/.agents/skills/visual-concept-designer"
    install_to "Claude Code (default)" "$HOME/.claude/skills/visual-concept-designer"
fi

echo ""
echo "Successfully installed visual-concept-designer to $installed environment(s)!"
echo "Next step: Restart your agent and run:"
echo '  Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."'
echo ""
