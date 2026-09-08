$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$dist = Join-Path $root "dist"
$zip = Join-Path $dist "visual-concept-designer-skill.zip"
$stage = Join-Path $dist "staging\visual-concept-designer"

if (Test-Path (Join-Path $dist "staging")) { Remove-Item -Recurse -Force (Join-Path $dist "staging") }
if (!(Test-Path $stage)) { New-Item -ItemType Directory -Path $stage -Force | Out-Null }
if (Test-Path $zip) { Remove-Item $zip -Force }

Copy-Item (Join-Path $root "SKILL.md") -Destination $stage
Copy-Item -Recurse (Join-Path $root "agents") -Destination $stage
Copy-Item -Recurse (Join-Path $root "assets") -Destination $stage
Copy-Item -Recurse (Join-Path $root "references") -Destination $stage
Copy-Item -Recurse (Join-Path $root "styles") -Destination $stage

Compress-Archive -Path $stage -DestinationPath $zip
Remove-Item -Recurse -Force (Join-Path $dist "staging")
Write-Host "Created $zip"
