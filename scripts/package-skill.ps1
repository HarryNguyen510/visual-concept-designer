$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$dist = Join-Path $root "dist"
$zip = Join-Path $dist "visual-concept-designer-skill.zip"
$skillSource = Join-Path $root "skills\visual-concept-designer"

if (!(Test-Path $dist)) { New-Item -ItemType Directory -Path $dist -Force | Out-Null }
if (Test-Path $zip) { Remove-Item $zip -Force }

Compress-Archive -Path $skillSource -DestinationPath $zip
Write-Host "Created $zip"
