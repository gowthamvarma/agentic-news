# Document 05: User & Evaluator Guide
## Step-by-Step Evaluator Walkthrough, UI Navigation, Problem-Solving Sections & Visual Media Tour

> **Submission Track**: Google Cloud AI Builder Cup 2026 — *Media, Content & Digital Experiences*  
> **Target System**: [Agentic News Analyser](../../README.md)  
> **Primary Evaluation URL**: `http://localhost:5173/`  
> **Sample Pre-Audited Investigation URL**: [`http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`](http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614)  

---

## 1. Fast-Track Evaluator Checklist (3 Minutes)

Evaluators and judges can explore the complete live platform in under 3 minutes:

1. **Launch Verification**: Ensure both servers are active:
   * **Backend API**: `http://localhost:8080/` (or run `python backend/api_server.py`)
   * **Frontend UI**: `http://localhost:5173/` (or run `cd frontend && npm run dev`)
2. **Instant Golden Test Case**: Open [`http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`](http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614) to load the pre-audited intelligence dossier for **"Elon Musk Starlink India Issue"**.
3. **Tab Tour**: Click across the 8 investigation tabs on the left sidebar:
   * **Executive Brief** $\rightarrow$ **Verified Sources** $\rightarrow$ **Fact Checks & Contradictions** $\rightarrow$ **Timeline** $\rightarrow$ **Causal & Scenarios** $\rightarrow$ **Active Recall Tutor** $\rightarrow$ **Perspective Debate** $\rightarrow$ **Research Copilot**.
4. **Interactive Test**: Go to the **Active Recall Tutor** tab and answer Question 1 to see the instant feedback badge and pedagogical explanation.

---

## 2. Animated Platform Walkthrough

Below is an interactive animated tour showing the end-to-end investigative workflow—from global breaking feeds to deep contradiction auditing, causal consequence trees, and active recall learning. All GIFs play continuously in an **infinite loop** with a relaxed **2.8 to 3.0-second transition pace** so you can comfortably absorb each screen:

![Live Platform Walkthrough](./assets/app-walkthrough.gif)

---

## 3. UI Navigation & Global Shell Architecture

The user interface was built to deliver the responsiveness of a high-end financial terminal with the visual polish of a modern media publication.

### Global Header Controls
* **Brain Logo & Fleet Status**: Shows active connectivity to the 25-agent Google ADK fleet.
* **Top Navigation**: Direct access to `Search & Live Fleet` (`/`) and `History Archive` (`/history`).
* **Firestore Sync Indicator**: Real-time badge indicating whether reports are persisting to Google Cloud Firestore or the local emulator.
* **DaisyUI Multi-Theme Switcher**: Instant switching between `Dark`, `Light`, `Cyberpunk`, and `Synthwave` themes.
* **Responsive Drawer**: Mobile-friendly sidebar drawer on smaller viewports.

---

## 4. UI Page Deep Dives: What Problem Each Section Solves

### Page 1: Home Dashboard & Dynamic 5-Country Breaking Feeds (`/`)

![Home Dashboard Dynamic Country Tour](./assets/home-countries.gif)

* **Problem It Solves**: In breaking news, users suffer from information silos and delayed awareness of international developments.
* **Dynamic Multi-Country Tour (Infinite Loop)**:
  * The animated preview above demonstrates live topic selection across 5 sovereign regions: **India 🇮🇳 (`?country=IN`)**, **United States 🇺🇸 (`?country=US`)**, **United Kingdom 🇬🇧 (`?country=GB`)**, **Japan 🇯🇵 (`?country=JP`)**, and **Germany 🇩🇪 (`?country=DE`)**.
  * Each feed automatically curates local breaking headlines and trending investigation chips with country flag tags.
* **Key Features**:
  1. **Investigative Search Bar**: Accepts any breaking news topic, contentious claim, or URL.
  2. **16-Country Regional Switcher**: Quick-switch across global news hubs with custom flag icons.
  3. **Trending Intelligence Chips**: Pre-curated, high-stakes topics updated continuously.
  4. **Multi-Agent Pipeline Stepper**: When a new analysis begins, an animated stepper visualizes the 6-stage fleet progress in real time (Ingestion $\rightarrow$ Understand $\rightarrow$ Verify $\rightarrow$ Analyse $\rightarrow$ Synthesis $\rightarrow$ Engage).

---

### Page 2: History & Archive Repository (`/history`)

![History & Archive Grid](./assets/history-archive.gif)

* **Problem It Solves**: Loss of past research and inability to audit historical claims over time.
* **Dynamic Multi-Section View**:
  * Cycles between the top filterable search bar and the scrolled archive cards showing tags, contradiction counts, and date metadata.
* **Key Features**:
  1. **Instant Search & Topic Filtering**: Query past investigations by title or keyword.
  2. **Favorites Bookmark System**: Star key investigations for rapid access.
  3. **Metadata Badges**: Displays source count, contradiction count, and time of analysis.
  4. **Instant Rehydration**: Sub-100ms loading from Firestore cache without re-running models.

---

## 5. The 8 Analysis Report Tabs in Detail

*(Demonstrated using live sample: `http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`)*

### Tab 1: Executive Intelligence Brief (`#brief`)

![Tab 1: Executive Brief Multi-Section Tour](./assets/tab-01-brief.gif)

* **Problem It Solves**: Readers need an immediate, verified baseline before diving into technical details.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: Audited source count, verified claims tally, consensus score, and authoritative executive summary.
  * **Scrolled View**: High-confidence Consensus Points, Key Figures & Institutional Primer cards, and Jargon Buster with direct Wikipedia links.

---

### Tab 2: Verified Sources & Media Bias (`#sources`)

![Tab 2: Verified Sources Multi-Section Tour](./assets/tab-02-sources.gif)

* **Problem It Solves**: Selective exposure bias and blindness to ideological framing.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: 7-Point Political Spectrum distribution (*Far Left* to *Far Right*) across reporting outlets.
  * **Scrolled View**: Detailed Outlet Reliability Tiers, transparency scores, and **Coverage Gaps** listing critical questions left unanswered by the press.

---

### Tab 3: Fact Checks & Contradictions (`#verification`)

![Tab 3: Verification & Contradictions Multi-Section Tour](./assets/tab-03-verification.gif)

* **Problem It Solves**: The dangerous flattening of conflicting figures and unchecked misinformation.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: IFCN Claim Verification audit cards with color-coded badges (`VERIFIED`, `DISPUTED`, `MISLEADING`, `UNVERIFIED`) and confidence percentages.
  * **Scrolled View**: The **Side-by-Side Contradictions Matrix** directly contrasting Outlets A vs. B with divergence classifications (`Numerical Discrepancy`, `Timeline Divergence`, `Fact Negation`) and manipulation tactics flags.

---

### Tab 4: Chronological Event Timeline (`#timeline`)

![Tab 4: Chronological Timeline Multi-Section Tour](./assets/tab-04-timeline.gif)

* **Problem It Solves**: In fast-moving events, readers lose track of the sequence of cause and effect.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: Interactive milestone timeline from proximate trigger to latest status.
  * **Scrolled View**: Detailed narrative evolution markers tracking the exact moments media framing shifted from regulatory procedure to political conflict.

---

### Tab 5: Causal & Scenarios (`#insights`)

![Tab 5: Causal & Scenarios Multi-Section Tour](./assets/tab-05-insights.gif)

* **Problem It Solves**: Traditional news reports focus only on surface symptoms without explaining *why* it happened or *what comes next*.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: 5-Whys Root Cause Diagnostics deconstructing proximate triggers, contributing factors, and structural failure points.
  * **Scrolled View**: **3-Tier Consequence Cascades** (1st-order immediate, 2nd-order industry, 3rd-order macroeconomic), **Best/Likely/Worst Future Scenarios** with leading indicator signals, and actionable prevention directives.

---

### Tab 6: Active Recall Comprehension Quiz (`#quiz`)

![Tab 6: Active Recall Quiz Multi-Section Tour](./assets/tab-06-quiz.gif)

* **Problem It Solves**: The passive reading trap where 70% of news is forgotten within 24 hours.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: Adaptive multiple-choice questions testing core facts, contradictions, and causal drivers.
  * **Scrolled View**: Instant feedback evaluation with pedagogical explanations citing verified source evidence.

---

### Tab 7: Dialectical Perspective Debate (`#debate`)

![Tab 7: Perspective Debate Multi-Section Tour](./assets/tab-07-debate.gif)

* **Problem It Solves**: Polarization and inability to understand the legitimate arguments of opposing sides.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: Steel-manned Pro vs. Con arguments from competing stakeholder viewpoints (e.g., Global Satellite Operators vs. Domestic Terrestrial Telcos).
  * **Scrolled View**: Objective compromise synthesis explaining how regulators and policymakers reconcile opposing interests.

---

### Tab 8: Research Copilot (`#copilot`)

![Tab 8: Research Copilot Multi-Section Tour](./assets/tab-08-copilot.gif)

* **Problem It Solves**: Users cannot interrogate a static news article or ask follow-up questions.
* **Dynamic Multi-Section Coverage**:
  * **Top View**: Interactive investigative chat interface for open-ended queries.
  * **Scrolled View**: Answers grounded strictly in the session's verified **Evidence Ledger** with direct citations.

---

## 6. Power Features & Productivity Utilities

* **PDF Export**: Generate a printable, professionally formatted PDF brief of the entire investigation with a single click.
* **Text-to-Speech Audio Reader**: Listen to the executive summary with built-in voice playback.
* **Researcher Notes**: Take private notes directly on the investigation card, saved automatically to Firestore.
* **Direct Share & Bookmark Link**: Share permanent URLs (e.g., `/analysis/<uuid>#verification`) linking directly to specific tabs.
