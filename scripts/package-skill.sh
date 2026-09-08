#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
ZIP="$DIST/visual-concept-designer-skill.zip"

rm -f "$ZIP"
mkdir -p "$DIST"

(cd "$ROOT/skills" && zip -r "$ZIP" visual-concept-designer)
echo "Created $ZIP"
