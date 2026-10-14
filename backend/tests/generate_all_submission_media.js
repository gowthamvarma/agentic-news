/**
 * Master Script: Automated Capture and Generation of Dynamic Submission Media
 * 
 * Features:
 * 1. Pixel-perfect screenshots using modern Chrome CDP (headless=new).
 * 2. Sticky Navbar & Sticky Sidebar preserved (no blank top regions!).
 * 3. Smooth multi-frame scrolling animations for all 8 analysis tabs and History archive.
 * 4. Infinite looping (Netscape 2.0 loop extension injected into all GIFs).
 * 5. Generates both crisp static PNGs and looping GIFs under 10 MB total.
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

function buildGifFromFrames(framePaths, targetGif, delays, width = 960, height = 600) {
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
  constructor(port = 9345) {
    this.port = port;
    this.chromeProcess = null;
    this.ws = null;
    this.msgId = 1;
  }

  async start() {
    const userData = path.join(os.tmpdir(), 'chrome_media_' + Date.now());
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
  console.log(' Automated Media Generator: High-Fidelity Looping GIFs & Static Assets');
  console.log('================================================================');

  const client = new ChromeClient(9346);
  await client.start();

  try {
    // -------------------------------------------------------------
    // 1. Home Dashboard: 5 Countries Looping GIF
    // -------------------------------------------------------------
    console.log('\n[1/4] Capturing 5-Country Regional Dashboard...');
    const countries = [
      { code: 'IN', label: 'India 🇮🇳' },
      { code: 'US', label: 'United States 🇺🇸' },
      { code: 'GB', label: 'United Kingdom 🇬🇧' },
      { code: 'JP', label: 'Japan 🇯🇵' },
      { code: 'DE', label: 'Germany 🇩🇪' }
    ];

    const countryFrames = [];
    for (const c of countries) {
      console.log(`  Capturing ${c.label} (?country=${c.code})...`);
      await client.navigate(`http://localhost:5173/?country=${c.code}`, 2200);
      const framePath = path.join(TEMP_DIR, `home_country_${c.code}.png`);
      await client.screenshot(framePath);
      countryFrames.push(framePath);
    }

    // Static default hero overview
    fs.copyFileSync(countryFrames[0], path.join(ASSETS_DIR, 'hero-overview.png'));
    await buildGifFromFrames(
      countryFrames,
      path.join(ASSETS_DIR, 'home-countries.gif'),
      [280, 280, 280, 280, 280]
    );

    // -------------------------------------------------------------
    // 2. 8 Analysis Tabs: Smooth Multi-Frame Scrolling GIFs
    // -------------------------------------------------------------
    console.log('\n[2/4] Capturing 8 Multi-Section Analysis Tabs with Smooth Scrolling...');
    const analysisUrl = 'http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614';

    const tabs = [
      { name: 'tab-01-brief', hash: '#brief', maxScroll: 660 },
      { name: 'tab-02-sources', hash: '#sources', maxScroll: 620 },
      { name: 'tab-03-verification', hash: '#verification', maxScroll: 660 },
      { name: 'tab-04-timeline', hash: '#timeline', maxScroll: 600 },
      { name: 'tab-05-insights', hash: '#insights', maxScroll: 650 },
      { name: 'tab-06-quiz', hash: '#quiz', maxScroll: 520 },
      { name: 'tab-07-debate', hash: '#debate', maxScroll: 560 },
      { name: 'tab-08-copilot', hash: '#copilot', maxScroll: 480 },
    ];

    const walkthroughFrames = [path.join(ASSETS_DIR, 'hero-overview.png')];

    // Load analysis page once, then switch hashes
    await client.navigate(`${analysisUrl}#brief`, 2500);

    for (const tab of tabs) {
      console.log(`\n  Processing ${tab.name} (${tab.hash})...`);

      // Switch tab and wait for tab transition
      await client.evaluate(`
        window.location.hash = '${tab.hash}';
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        window.scrollTo({ top: 0, behavior: 'instant' });
      `);
      await new Promise(r => setTimeout(r, 700));

      // 1. Capture Top Resting View (Scroll 0)
      const topFrame = path.join(TEMP_DIR, `${tab.name}_top.png`);
      await client.screenshot(topFrame);
      // Save crisp static PNG for documentation
      fs.copyFileSync(topFrame, path.join(ASSETS_DIR, `${tab.name}.png`));
      walkthroughFrames.push(topFrame);

      // 2. Determine actual full document scroll height dynamically
      const rHeight = await client.evaluate(`document.documentElement.scrollHeight - window.innerHeight`);
      const maxScroll = Math.max(0, rHeight.result?.value || tab.maxScroll || 0);

      // Determine gradual steps based on total page length
      let stepsDown = 8;
      if (maxScroll <= 500) stepsDown = 4;
      else if (maxScroll <= 1200) stepsDown = 6;

      const scrollSteps = [{ pos: 0, delay: 240 }]; // Top resting pause (2.4s)

      // Gradual scroll steps all the way down to the bottom of the page
      for (let i = 1; i <= stepsDown; i++) {
        const pos = Math.round((maxScroll * i) / stepsDown);
        const isBottom = i === stepsDown;
        scrollSteps.push({
          pos,
          delay: isBottom ? 250 : 22 // 2.5s pause at bottom, 0.22s per gradual downward step
        });
      }

      // Smooth gradual return back up to top
      const stepsUp = Math.min(3, Math.floor(stepsDown / 2));
      for (let k = stepsUp; k >= 1; k--) {
        const pos = Math.round((maxScroll * k) / (stepsUp + 1));
        scrollSteps.push({ pos, delay: 14 }); // 0.14s per return step
      }

      console.log(`    maxScroll: ${maxScroll}px across ${scrollSteps.length} gradual frames (bottom reached at frame ${stepsDown})`);

      const tabFrames = [topFrame];

      for (let i = 1; i < scrollSteps.length; i++) {
        const step = scrollSteps[i];
        await client.evaluate(`window.scrollTo({ top: ${step.pos}, behavior: 'instant' });`);
        await new Promise(r => setTimeout(r, 100));
        const fPath = path.join(TEMP_DIR, `${tab.name}_step_${i}.png`);
        await client.screenshot(fPath);
        tabFrames.push(fPath);
      }

      // Reset scroll to top
      await client.evaluate(`window.scrollTo({ top: 0, behavior: 'instant' });`);
      await new Promise(r => setTimeout(r, 100));

      // Build gradual scrolling GIF
      const delays = scrollSteps.map(s => s.delay);
      await buildGifFromFrames(tabFrames, path.join(ASSETS_DIR, `${tab.name}.gif`), delays, 880, 550);
    }

    // -------------------------------------------------------------
    // 3. History Archive: Multi-Frame Scrolling GIF & Static PNG
    // -------------------------------------------------------------
    console.log('\n[3/4] Capturing History Investigation Archive...');
    await client.navigate('http://localhost:5173/history', 2200);

    const historyTop = path.join(TEMP_DIR, 'history_top.png');
    await client.screenshot(historyTop);
    fs.copyFileSync(historyTop, path.join(ASSETS_DIR, 'history-archive.png'));
    walkthroughFrames.push(historyTop);

    const histHeight = await client.evaluate(`document.documentElement.scrollHeight - window.innerHeight`);
    const histMaxScroll = Math.max(0, histHeight.result?.value || 300);

    const histSteps = [
      { pos: 0, delay: 240 },
      { pos: Math.round(histMaxScroll * 0.25), delay: 22 },
      { pos: Math.round(histMaxScroll * 0.50), delay: 22 },
      { pos: Math.round(histMaxScroll * 0.75), delay: 22 },
      { pos: histMaxScroll, delay: 250 }, // Bottom pause
      { pos: Math.round(histMaxScroll * 0.50), delay: 16 }
    ];

    const histFrames = [historyTop];
    for (let i = 1; i < histSteps.length; i++) {
      const step = histSteps[i];
      await client.evaluate(`window.scrollTo({ top: ${step.pos}, behavior: 'instant' });`);
      await new Promise(r => setTimeout(r, 100));
      const fPath = path.join(TEMP_DIR, `history_step_${i}.png`);
      await client.screenshot(fPath);
      histFrames.push(fPath);
    }

    await buildGifFromFrames(
      histFrames,
      path.join(ASSETS_DIR, 'history-archive.gif'),
      histSteps.map(s => s.delay),
      880,
      550
    );

    // -------------------------------------------------------------
    // 4. Full App Walkthrough Tour
    // -------------------------------------------------------------
    console.log('\n[4/4] Building Multi-Page App Walkthrough Tour GIF...');
    const walkthroughDelays = walkthroughFrames.map(() => 260); // 2.6s per key screen
    await buildGifFromFrames(
      walkthroughFrames,
      path.join(ASSETS_DIR, 'app-walkthrough.gif'),
      walkthroughDelays
    );

    console.log('\n================================================================');
    console.log(' All media successfully generated with smooth scrolling & infinite loops!');
    console.log('================================================================\n');

  } finally {
    client.close();
  }
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
