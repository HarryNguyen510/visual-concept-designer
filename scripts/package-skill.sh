#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
mkdir -p "$ROOT/dist"
rm -f "$ROOT/dist/visual-concept-designer-skill.zip"
(cd "$ROOT/skill" && zip -r "$ROOT/dist/visual-concept-designer-skill.zip" visual-concept-designer)
echo "Created $ROOT/dist/visual-concept-designer-skill.zip"
