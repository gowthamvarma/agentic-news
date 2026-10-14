# Automated Headless Chrome Screenshot Capture for Judge Documentation
$ErrorActionPreference = "Stop"

$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chromePath)) {
    Write-Error "Chrome executable not found at $chromePath"
}

$outputDir = Resolve-Path "docs\submission\assets"
Write-Host "Saving screenshots to: $outputDir"

$targets = @(
    @{ Name = "hero-overview.png"; Url = "http://localhost:5173/"; Wait = 3500 },
    @{ Name = "history-archive.png"; Url = "http://localhost:5173/history"; Wait = 3000 },
    @{ Name = "tab-01-brief.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#brief"; Wait = 3000 },
    @{ Name = "tab-02-sources.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#sources"; Wait = 3000 },
    @{ Name = "tab-03-verification.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#verification"; Wait = 3000 },
    @{ Name = "tab-04-timeline.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#timeline"; Wait = 3000 },
    @{ Name = "tab-05-insights.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#insights"; Wait = 3000 },
    @{ Name = "tab-06-quiz.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#quiz"; Wait = 3000 },
    @{ Name = "tab-07-debate.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#debate"; Wait = 3000 },
    @{ Name = "tab-08-copilot.png"; Url = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614#copilot"; Wait = 3000 }
)

foreach ($target in $targets) {
    $outFile = Join-Path $outputDir $target.Name
    $url = $target.Url
    $waitMs = $target.Wait
    Write-Host "Capturing $($target.Name) from $url (wait: ${waitMs}ms)..."
    
    $cmd = "`"$chromePath`" --headless --hide-scrollbars --window-size=1440,900 --virtual-time-budget=$waitMs --screenshot=`"$outFile`" `"$url`""
    cmd.exe /c $cmd | Out-Null
    
    if (Test-Path $outFile) {
        $size = (Get-Item $outFile).Length
        Write-Host "  -> Saved: $($target.Name) ($([math]::Round($size / 1KB, 1)) KB)"
    } else {
        Write-Warning "  -> FAILED to create $outFile"
    }
}

Write-Host "Generating animated walkthrough GIF..."
Add-Type -AssemblyName System.Drawing

# Select key frames for walkthrough GIF
$gifFrames = @(
    "hero-overview.png",
    "history-archive.png",
    "tab-01-brief.png",
    "tab-02-sources.png",
    "tab-03-verification.png",
    "tab-04-timeline.png",
    "tab-05-insights.png",
    "tab-06-quiz.png",
    "tab-07-debate.png"
)

# Build GIF using System.Drawing
$gifTarget = Join-Path $outputDir "app-walkthrough.gif"

# GIF encoding helper
$sourceImages = @()
foreach ($fn in $gifFrames) {
    $fp = Join-Path $outputDir $fn
    if (Test-Path $fp) {
        # Scale to 960x600 for optimal GIF size (< 2MB)
        $orig = [System.Drawing.Image]::FromFile($fp)
        $bmp = New-Object System.Drawing.Bitmap 960, 600
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($orig, 0, 0, 960, 600)
        $g.Dispose()
        $orig.Dispose()
        $sourceImages += $bmp
    }
}

if ($sourceImages.Count -gt 0) {
    # Netscape loop extension bytes
    # Frame delay: 180 (1.8s per frame)
    # Write frames into multi-frame GIF
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/gif" }
    $encParamsFirst = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsFirst.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::MultiFrame)
    
    $encParamsAdd = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsAdd.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::FrameDimensionTime)
    
    $encParamsFlush = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsFlush.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::Flush)

    $first = $sourceImages[0]
    $first.Save($gifTarget, $codec, $encParamsFirst)
    
    for ($i = 1; $i -lt $sourceImages.Count; $i++) {
        $first.SaveAdd($sourceImages[$i], $encParamsAdd)
    }
    $first.SaveAdd($encParamsFlush)
    
    foreach ($img in $sourceImages) {
        $img.Dispose()
    }
    
    $gifSize = (Get-Item $gifTarget).Length
    Write-Host "Animated GIF created: $gifTarget ($([math]::Round($gifSize / 1KB, 1)) KB)"
}

Write-Host "Media capture complete!"
