#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
STAGE="$DIST/staging/visual-concept-designer"
ZIP="$DIST/visual-concept-designer-skill.zip"

rm -rf "$DIST/staging" "$ZIP"
mkdir -p "$STAGE"

cp "$ROOT/SKILL.md" "$STAGE/"
cp -R "$ROOT/agents" "$STAGE/"
cp -R "$ROOT/assets" "$STAGE/"
cp -R "$ROOT/references" "$STAGE/"
cp -R "$ROOT/styles" "$STAGE/"

(cd "$DIST/staging" && zip -r "$ZIP" visual-concept-designer)
rm -rf "$DIST/staging"
echo "Created $ZIP"
