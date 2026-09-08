<#
.SYNOPSIS
    One-click installer for visual-concept-designer skill.
.DESCRIPTION
    Automatically detects Codex, Claude Code, Antigravity, and other agent skill directories
    and installs the visual-concept-designer skill into them.
#>
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$sourceSkill = Join-Path $root "skills\visual-concept-designer"

if (!(Test-Path (Join-Path $sourceSkill "SKILL.md"))) {
    Write-Error "Error: Cannot find skills/visual-concept-designer/SKILL.md at $sourceSkill"
    exit 1
}

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "   Visual Concept Designer - Skill Installer    " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

$destinations = @()

# 1. Codex (.agents\skills)
$codexDir = Join-Path $HOME ".agents\skills"
if ((Test-Path $codexDir) -or (Test-Path (Join-Path $HOME ".agents"))) {
    $destinations += [PSCustomObject]@{ Name = "Codex"; Path = (Join-Path $codexDir "visual-concept-designer") }
}

# 2. Claude Code (.claude\skills)
$claudeDir = Join-Path $HOME ".claude\skills"
if ((Test-Path $claudeDir) -or (Test-Path (Join-Path $HOME ".claude"))) {
    $destinations += [PSCustomObject]@{ Name = "Claude Code"; Path = (Join-Path $claudeDir "visual-concept-designer") }
}

# 3. Antigravity / Gemini CLI (.gemini\config\skills)
$agyDir = Join-Path $HOME ".gemini\config\skills"
if (Test-Path (Join-Path $HOME ".gemini")) {
    $destinations += [PSCustomObject]@{ Name = "Antigravity / Gemini"; Path = (Join-Path $agyDir "visual-concept-designer") }
}

# Default fallback if no agents detected yet: install to Codex and Claude Code
if ($destinations.Count -eq 0) {
    $destinations += [PSCustomObject]@{ Name = "Codex (default)"; Path = (Join-Path $codexDir "visual-concept-designer") }
    $destinations += [PSCustomObject]@{ Name = "Claude Code (default)"; Path = (Join-Path $claudeDir "visual-concept-designer") }
}

$installedCount = 0
foreach ($dest in $destinations) {
    $parent = Split-Path $dest.Path -Parent
    if (!(Test-Path $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    Copy-Item -Path $sourceSkill -Destination $dest.Path -Recurse -Force
    Write-Host "[OK] Installed to $($dest.Name): $($dest.Path)" -ForegroundColor Green
    $installedCount++
}

Write-Host ""
Write-Host "Successfully installed visual-concept-designer to $installedCount environment(s)!" -ForegroundColor Green
Write-Host "Next step: Restart your agent and run:" -ForegroundColor Yellow
Write-Host '  Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."' -ForegroundColor White
Write-Host ""
