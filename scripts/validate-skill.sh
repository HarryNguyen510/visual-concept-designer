#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILL="$ROOT/skill/visual-concept-designer"
test -f "$SKILL/SKILL.md"
grep -q "^name: visual-concept-designer" "$SKILL/SKILL.md"
grep -q "description:" "$SKILL/SKILL.md"
test -d "$SKILL/assets"
test -d "$SKILL/references"
test -d "$SKILL/agents"
echo "Skill validation passed: $SKILL"
