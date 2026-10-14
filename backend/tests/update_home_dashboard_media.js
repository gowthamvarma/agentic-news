/**
 * Targeted Script: Update Page 1 (Home Dashboard & Dynamic 5-Country Breaking Feeds)
 * 
 * Scrolls down (top: 380) so that the country selector bar, active feed header,
 * and breaking topic cards are completely visible in full fidelity before capturing.
 * 
 * Only updates:
 * 1. docs/submission/assets/hero-overview.png
 * 2. docs/submission/assets/home-countries.gif
 * 3. docs/submission/assets/app-walkthrough.gif (uses existing tab screenshots)
 * 
 * Does NOT modify any other tab screenshots or GIFs.
 */

const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ASSETS_DIR = path.resolve(__dirname, '../../docs/submission/assets');
const TEMP_DIR = path.resolve(__dirname, 'temp_frames');

if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

function patchGifMultiDelay(gifPath, delays100ths) {
  const data = fs.readFileSync(gifPath);
  let gceIndex = 0;
  let i = 0;
  const out = Buffer.from(data);

  while (i < out.length - 7) {
    if (out[i] === 0x21 && out[i + 1] === 0xF9 && out[i + 2] === 0x04) {
      const delay = delays100ths[gceIndex % delays100ths.length];
      out[i + 4] = delay & 0xFF;
      out[i + 5] = (delay >> 8) & 0xFF;
      gceIndex++;
      i += 7;
    } else {
      i++;
    }
  }

  let finalBuf = out;
  if (!out.includes(Buffer.from('NETSCAPE2.0'))) {
    const firstGce = out.indexOf(Buffer.from([0x21, 0xF9, 0x04]));
    if (firstGce !== -1) {
      const netscapeExt = Buffer.from([
        0x21, 0xFF, 0x0B, 0x4E, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2E, 0x30, 0x03, 0x01, 0x00, 0x00, 0x00
      ]);
      finalBuf = Buffer.concat([out.subarray(0, firstGce), netscapeExt, out.subarray(firstGce)]);
    }
  }

  fs.writeFileSync(gifPath, finalBuf);
}

function buildGifFromFrames(framePaths, targetGif, delays, width = 880, height = 550) {
  const framesArg = framePaths.map(p => `'${p.replace(/'/g, "''")}'`).join(',');
  const psScript = `
    Add-Type -AssemblyName System.Drawing
    $frames = @(${framesArg})
    $target = '${targetGif.replace(/'/g, "''")}'

    $sourceImages = @()
    foreach ($f in $frames) {
        $orig = [System.Drawing.Image]::FromFile($f)
        $bmp = New-Object System.Drawing.Bitmap ${width}, ${height}
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($orig, 0, 0, ${width}, ${height})
        $g.Dispose()
        $orig.Dispose()
        $sourceImages += $bmp
    }

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/gif" }
    $encParamsFirst = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsFirst.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::MultiFrame)
    $encParamsAdd = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsAdd.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::FrameDimensionTime)
    $encParamsFlush = New-Object System.Drawing.Imaging.EncoderParameters 1
    $encParamsFlush.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::SaveFlag, [long][System.Drawing.Imaging.EncoderValue]::Flush)

    $first = $sourceImages[0]
    $first.Save($target, $codec, $encParamsFirst)
    for ($i = 1; $i -lt $sourceImages.Count; $i++) {
        $first.SaveAdd($sourceImages[$i], $encParamsAdd)
    }
    $first.SaveAdd($encParamsFlush)
    foreach ($img in $sourceImages) { $img.Dispose() }
  `;

  return new Promise((resolve, reject) => {
    const child = spawn('powershell', ['-NoProfile', '-Command', psScript]);
    child.on('close', code => {
      if (code === 0) {
        patchGifMultiDelay(targetGif, delays);
        const sizeKb = (fs.statSync(targetGif).size / 1024).toFixed(1);
        console.log(`  -> Generated ${path.basename(targetGif)} (${sizeKb} KB, infinite loop)`);
        resolve();
      } else {
        reject(new Error(`PowerShell GIF assembly failed with code ${code}`));
      }
    });
  });
}

class ChromeClient {
  constructor(port = 9375) {
    this.port = port;
    this.chromeProcess = null;
    this.ws = null;
    this.msgId = 1;
  }

  async start() {
    const userData = path.join(os.tmpdir(), 'chrome_home_capture_' + Date.now());
    this.chromeProcess = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
      '--headless=new',
      `--remote-debugging-port=${this.port}`,
      '--window-size=1440,900',
      '--hide-scrollbars',
      `--user-data-dir=${userData}`,
      'about:blank'
    ]);

    await new Promise(r => setTimeout(r, 2000));

    const targets = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${this.port}/json`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const target = targets.find(t => t.type === 'page');
    if (!target) throw new Error('No page target found in Chrome');

    this.ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve) => this.ws.onopen = resolve);
    await this.send('Page.enable');
  }

  send(method, params = {}) {
    return new Promise((resolve) => {
      const id = this.msgId++;
      const handler = (evt) => {
        const resp = JSON.parse(evt.data);
        if (resp.id === id) {
          this.ws.removeEventListener('message', handler);
          resolve(resp.result);
        }
      };
      this.ws.addEventListener('message', handler);
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async navigate(url, waitMs = 2500) {
    await this.send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, waitMs));
  }

  async evaluate(expression) {
    return await this.send('Runtime.evaluate', { expression, returnByValue: true });
  }

  async screenshot(filePath) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
  }

  close() {
    try { if (this.ws) this.ws.close(); } catch (_) {}
    try { if (this.chromeProcess) this.chromeProcess.kill(); } catch (_) {}
  }
}

async function main() {
  console.log('================================================================');
  console.log(' Updating Page 1: Home Dashboard & 5-Country Breaking Feeds');
  console.log(' (Scrolled to show breaking topic cards in full fidelity)');
  console.log('================================================================');

  const client = new ChromeClient(9376);
  await client.start();

  try {
    const countries = [
      { code: 'IN', label: 'India 🇮🇳' },
      { code: 'US', label: 'United States 🇺🇸' },
      { code: 'GB', label: 'United Kingdom 🇬🇧' },
      { code: 'JP', label: 'Japan 🇯🇵' },
      { code: 'DE', label: 'Germany 🇩🇪' }
    ];

    const countryFrames = [];
    const scrollY = 380; // Perfectly positions country bar & full topic cards

    for (const c of countries) {
      console.log(`  Capturing ${c.label} (?country=${c.code}) scrolled to topics...`);
      await client.navigate(`http://localhost:5173/?country=${c.code}`, 2200);

      // Scroll a little to reveal breaking topic cards completely
      await client.evaluate(`window.scrollTo({ top: ${scrollY}, behavior: 'instant' });`);
      await new Promise(r => setTimeout(r, 200));

      const framePath = path.join(TEMP_DIR, `home_country_scrolled_${c.code}.png`);
      await client.screenshot(framePath);
      countryFrames.push(framePath);
    }

    // 1. Update hero-overview.png with clear topic visibility
    console.log('\n[1/3] Updating hero-overview.png...');
    fs.copyFileSync(countryFrames[0], path.join(ASSETS_DIR, 'hero-overview.png'));
    console.log('  -> Updated hero-overview.png');

    // 2. Rebuild home-countries.gif with full topic cards and 2.8s per country
    console.log('\n[2/3] Building home-countries.gif with full topics...');
    await buildGifFromFrames(
      countryFrames,
      path.join(ASSETS_DIR, 'home-countries.gif'),
      [280, 280, 280, 280, 280],
      880,
      550
    );

    // 3. Rebuild app-walkthrough.gif incorporating updated hero-overview.png and existing untouched tab PNGs
    console.log('\n[3/3] Rebuilding app-walkthrough.gif with updated Home view...');
    const walkthroughFrames = [
      path.join(ASSETS_DIR, 'hero-overview.png'),
      path.join(ASSETS_DIR, 'tab-01-brief.png'),
      path.join(ASSETS_DIR, 'tab-02-sources.png'),
      path.join(ASSETS_DIR, 'tab-03-verification.png'),
      path.join(ASSETS_DIR, 'tab-04-timeline.png'),
      path.join(ASSETS_DIR, 'tab-05-insights.png'),
      path.join(ASSETS_DIR, 'tab-06-quiz.png'),
      path.join(ASSETS_DIR, 'tab-07-debate.png'),
      path.join(ASSETS_DIR, 'tab-08-copilot.png'),
      path.join(ASSETS_DIR, 'history-archive.png'),
    ];

    const walkthroughDelays = walkthroughFrames.map(() => 260); // 2.6s per key screen
    await buildGifFromFrames(
      walkthroughFrames,
      path.join(ASSETS_DIR, 'app-walkthrough.gif'),
      walkthroughDelays,
      880,
      550
    );

    console.log('\n================================================================');
    console.log(' Home Dashboard media updated successfully! Other screenshots untouched.');
    console.log('================================================================\n');

  } finally {
    client.close();
  }
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
