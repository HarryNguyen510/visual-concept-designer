$ErrorActionPreference = "Stop"
$skillPath = Join-Path $PSScriptRoot "..\skill\visual-concept-designer"
$skillFile = Join-Path $skillPath "SKILL.md"
if (!(Test-Path $skillFile)) { throw "Missing SKILL.md" }
$content = Get-Content $skillFile -Raw
if ($content -notmatch "(?s)^---\s*\nname:\s*visual-concept-designer") { throw "Missing or invalid skill name frontmatter" }
if ($content -notmatch "description:") { throw "Missing description frontmatter" }
$required = @("assets", "references", "agents")
foreach ($name in $required) {
  if (!(Test-Path (Join-Path $skillPath $name))) { throw "Missing folder: $name" }
}
Write-Host "Skill validation passed: $skillPath"
