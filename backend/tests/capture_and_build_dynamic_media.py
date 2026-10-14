"""Automated capture and compilation of dynamic looping GIFs with infinite looping and sufficient transition time.

Generates:
1. `home-countries.gif`: Cycles through 5 countries (India, US, UK, Japan, Germany) at 2.8s per frame.
2. `tab-01-brief.gif`: Cycles top metrics and scrolled entity primer / consensus points.
3. `tab-02-sources.gif`: Cycles top ideological bias spectrum and scrolled reliability / gaps.
4. `tab-03-verification.gif`: Cycles claim verifications and scrolled side-by-side contradiction matrix.
5. `tab-04-timeline.gif`: Cycles timeline start and scrolled milestone evolution.
6. `tab-05-insights.gif`: Cycles 5-whys root cause and scrolled 3-tier consequence cascades / scenarios.
7. `tab-06-quiz.gif`: Cycles quiz question overview and scrolled options / explanations.
8. `tab-07-debate.gif`: Cycles pro/con perspective debate and neutral synthesis.
9. `tab-08-copilot.gif`: Cycles copilot chat and grounded evidence citations.
10. `history-archive.gif`: Cycles archive grid overview and filterable cards.
11. `app-walkthrough.gif`: Full multi-page tour.

All GIFs are patched with:
- 2.8s delay per frame (sufficient transition time)
- Netscape 2.0 infinite loop extension (0x00 0x00 = infinite loop)
"""

import os
import subprocess
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

CHROME_EXE = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ASSETS_DIR = Path(r"C:\tools\github\agentic-news\docs\submission\assets")
TEMP_DIR = Path(r"C:\tools\github\agentic-news\backend\tests\temp_frames")

TEMP_DIR.mkdir(parents=True, exist_ok=True)
ASSETS_DIR.mkdir(parents=True, exist_ok=True)


def capture_screenshot(url: str, output_path: Path, wait_ms: int = 3000):
    cmd = [
        CHROME_EXE,
        "--headless",
        "--hide-scrollbars",
        "--window-size=1440,900",
        f"--virtual-time-budget={wait_ms}",
        f"--screenshot={output_path}",
        url,
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)


def patch_gif_infinite_loop_and_delay(gif_path: Path, delay_100ths: int = 280):
    """Patches GIF binary with Netscape 2.0 infinite loop extension and custom frame delay."""
    with open(gif_path, "rb") as f:
        data = bytearray(f.read())

    # 1. Update delay in all Graphic Control Extensions (0x21 0xF9 0x04)
    low_byte = delay_100ths & 0xFF
    high_byte = (delay_100ths >> 8) & 0xFF
    i = 0
    while i < len(data) - 7:
        if data[i] == 0x21 and data[i + 1] == 0xF9 and data[i + 2] == 0x04:
            data[i + 4] = low_byte
            data[i + 5] = high_byte
            i += 7
        else:
            i += 1

    # 2. Inject Netscape 2.0 loop extension if not present
    netscape_ext = b"\x21\xFF\x0BNETSCAPE2.0\x03\x01\x00\x00\x00"
    if b"NETSCAPE2.0" not in data:
        first_gce = data.find(b"\x21\xF9\x04")
        if first_gce != -1:
            data = data[:first_gce] + netscape_ext + data[first_gce:]

    with open(gif_path, "wb") as f:
        f.write(data)


def build_gif_from_frames(frame_paths: list[Path], target_gif: Path, delay_100ths: int = 280):
    """Uses PowerShell System.Drawing to assemble frames into a GIF, then patches infinite loop."""
    frames_arg = ",".join(f"'{p}'" for p in frame_paths)
    ps_script = f"""
    Add-Type -AssemblyName System.Drawing
    $frames = @({frames_arg})
    $target = '{target_gif}'

    $sourceImages = @()
    foreach ($f in $frames) {{
        $orig = [System.Drawing.Image]::FromFile($f)
        $bmp = New-Object System.Drawing.Bitmap 960, 600
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($orig, 0, 0, 960, 600)
        $g.Dispose()
        $orig.Dispose()
        $sourceImages += $bmp
    }}

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {{ $_.MimeType -eq "image/gif" }}
    $encParamsFirst = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsFirst.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::MultiFrame)
    $encParamsAdd = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsAdd.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::FrameDimensionTime)
    $encParamsFlush = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsFlush.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::Flush)

    $first = $sourceImages[0]
    $first.Save($target, $codec, $encParamsFirst)
    for ($i = 1; $i -lt $sourceImages.Count; $i++) {{
        $first.SaveAdd($sourceImages[$i], $encParamsAdd)
    }}
    $first.SaveAdd($encParamsFlush)
    foreach ($img in $sourceImages) {{ $img.Dispose() }}
    """
    subprocess.run(["powershell", "-NoProfile", "-Command", ps_script], check=True)
    patch_gif_infinite_loop_and_delay(target_gif, delay_100ths)
    size_kb = target_gif.stat().st_size / 1024
    print(f"Generated {target_gif.name} ({size_kb:.1f} KB, infinite loop, {delay_100ths/100:.1f}s delay)")


def main():
    print("Starting automated screenshot & GIF generation...")
    analysis_base = "http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614"

    # 1. Capture 5 countries for Home Page
    print("\n[1/5] Capturing 5 Countries on Home Dashboard...")
    countries = [
        ("IN", "India 🇮🇳"),
        ("US", "United States 🇺🇸"),
        ("GB", "United Kingdom 🇬🇧"),
        ("JP", "Japan 🇯🇵"),
        ("DE", "Germany 🇩🇪"),
    ]
    country_frames = []
    for code, label in countries:
        frame_file = TEMP_DIR / f"home_country_{code}.png"
        print(f"  Capturing {label} (country={code})...")
        capture_screenshot(f"http://localhost:5173/?country={code}", frame_file, wait_ms=2500)
        country_frames.append(frame_file)

    build_gif_from_frames(country_frames, ASSETS_DIR / "home-countries.gif", delay_100ths=280)
    # Also save static default hero overview
    capture_screenshot("http://localhost:5173/?country=IN", ASSETS_DIR / "hero-overview.png", wait_ms=2500)

    # 2. Capture multi-section GIFs for each analysis tab
    print("\n[2/5] Capturing Multi-Section Analysis Tabs...")
    tabs = [
        ("tab-01-brief", "#brief", 0, 450),
        ("tab-02-sources", "#sources", 0, 500),
        ("tab-03-verification", "#verification", 0, 520),
        ("tab-04-timeline", "#timeline", 0, 450),
        ("tab-05-insights", "#insights", 0, 550),
        ("tab-06-quiz", "#quiz", 0, 420),
        ("tab-07-debate", "#debate", 0, 450),
        ("tab-08-copilot", "#copilot", 0, 400),
    ]

    walkthrough_frames = [ASSETS_DIR / "hero-overview.png"]

    for name, hash_tab, scroll1, scroll2 in tabs:
        print(f"  Processing {name} ({hash_tab})...")
        f1 = TEMP_DIR / f"{name}_top.png"
        f2 = TEMP_DIR / f"{name}_scrolled.png"

        capture_screenshot(f"{analysis_base}{hash_tab}", f1, wait_ms=2500)
        capture_screenshot(f"{analysis_base}?scroll={scroll2}{hash_tab}", f2, wait_ms=2500)

        # Also overwrite the crisp static PNG
        capture_screenshot(f"{analysis_base}{hash_tab}", ASSETS_DIR / f"{name}.png", wait_ms=2500)

        # Build dynamic tab GIF (Top view <-> Scrolled view)
        build_gif_from_frames([f1, f2], ASSETS_DIR / f"{name}.gif", delay_100ths=300)
        walkthrough_frames.append(f1)

    # 3. History Archive
    print("\n[3/5] Capturing History Archive...")
    h1 = TEMP_DIR / "history_top.png"
    h2 = TEMP_DIR / "history_scrolled.png"
    capture_screenshot("http://localhost:5173/history", h1, wait_ms=2500)
    capture_screenshot("http://localhost:5173/history?scroll=350", h2, wait_ms=2500)
    capture_screenshot("http://localhost:5173/history", ASSETS_DIR / "history-archive.png", wait_ms=2500)
    build_gif_from_frames([h1, h2], ASSETS_DIR / "history-archive.gif", delay_100ths=280)
    walkthrough_frames.insert(1, h1)

    # 4. Master App Walkthrough
    print("\n[4/5] Building Master App Walkthrough GIF...")
    build_gif_from_frames(walkthrough_frames, ASSETS_DIR / "app-walkthrough.gif", delay_100ths=280)

    # 5. Cleanup temp files
    print("\n[5/5] Cleaning up temporary frames...")
    for f in TEMP_DIR.glob("*.png"):
        try:
            f.unlink()
        except Exception:
            pass
    try:
        TEMP_DIR.rmdir()
    except Exception:
        pass

    print("\n All dynamic infinite-loop GIFs generated successfully!")


if __name__ == "__main__":
    main()
