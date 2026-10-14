# Agentic News Analyser

> **Google Cloud AI Builder Cup 2026 Submission**  
> **Theme**: Media, Content & Digital Experiences  
> **Stack**: Google Agent Development Kit (ADK), Google Gemini, FastAPI, Cloud Firestore, Firebase Hosting

---

## 📚 Comprehensive Application & Architecture Guide

> **Want to understand how Agentic News Analyser works?**  
> Explore our complete 5-part deep dive covering the problem space, technology choices, technical architecture, 25-agent orchestration fleet, and interactive user guide with visual tours:

| Document                                                                             | Title & Focus Area                                  | Description                                                                                                                                                                                              |
| :----------------------------------------------------------------------------------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚀 [**Executive Architecture Overview**](docs/submission/README.md)                  | **Application Overview & System Summary**          | Executive summary, hackathon alignment, feature breakdown, quickstart instructions, and live tour.                                                                                                       |
| 📖 [**Document 01**](docs/submission/01-user-and-evaluator-guide.md)                 | **User Guide & Visual Media Tour**                  | Step-by-step user guide, UI page breakdowns, deep dive into each of the 8 analysis tabs with high-res screenshots and an animated walkthrough GIF.                                                      |
| 🔍 [**Document 02**](docs/submission/02-problem-statement-and-differentiation.md)    | **Problem Statement & Competitive Differentiation** | Why generic LLM news summarizers fail (hallucinated consensus, single-perspective bias, lack of evidence) and an 8-dimension competitive matrix vs. Perplexity, Ground News, and ChatGPT.                |
| 🛠️ [**Document 03**](docs/submission/03-tech-stack-and-antigravity.md)               | **Tech Stack & Antigravity CLI Journey**            | Full-stack rationale (React 19, FastAPI, DaisyUI), why Google ADK 2.0 & Python was chosen (tier-1 ADK launchpad, `asyncio.gather`), Firebase Firestore resilience, and development with Antigravity CLI. |
| 🏛️ [**Document 04**](docs/submission/04-system-architecture-and-technical-design.md) | **Technical Design & System Architecture**          | End-to-end topological architecture, Mermaid sequence flows, Pydantic v2 structured JSON engine, 81.6% latency reduction via parallel fan-out, and enterprise guardrail plugins.                         |
| 🤖 [**Document 05**](docs/submission/05-multi-agent-ecosystem-and-orchestration.md)  | **Multi-Agent Ecosystem & Orchestration**           | Deep dive into the 25-agent fleet across 6 stages, Editor-in-Chief orchestration pattern, agent-to-UI component mapping matrix, and 5-Pillar best practices compliance.                                  |

### 🎬 Live Platform Walkthrough

![Platform Walkthrough](docs/submission/assets/app-walkthrough.gif)

---

## 1. Quickstart with Local Firebase Simulator

The project supports local development with the **Firebase Emulator Suite** and an **in-memory fallback**.

### Run Everything with One Command

#### Windows

Double-click or run:

```bat
start_dev.bat
```

#### macOS

Run in Terminal:

```bash
chmod +x start_dev_mac.sh start_dev.sh
./start_dev_mac.sh
```

> **Tip**: `start_dev_mac.sh` spawns the Emulator, Backend, and Frontend in separate Terminal windows/tabs. Alternatively, run `./start_dev.sh` to run all services within a single terminal with graceful `Ctrl+C` shutdown.

#### Linux

Run in Terminal:

```bash
chmod +x start_dev_linux.sh start_dev.sh
./start_dev_linux.sh
```

> **Tip**: `start_dev_linux.sh` opens separate windows if a desktop terminal (GNOME Terminal, Konsole, etc.) is detected, or seamlessly runs all services concurrently in the current terminal. You can also run `./start_dev.sh` directly in any shell (including WSL & headless environments).

#### What Gets Started Automatically:

1. **Firebase Firestore Emulator**: `http://localhost:8085` (Emulator UI: `http://localhost:4000`)
2. **FastAPI ADK Backend**: `http://localhost:8080` (Docs: `http://localhost:8080/docs`)
3. **React Vite Web Dashboard**: `http://localhost:5173`

---

## 2. Manual Step-by-Step Execution

### Step 1: Start the Local Firestore Emulator

```bash
cd firebase
npx firebase-tools emulators:start --only firestore --project agentic-news-dev --import=./emulator-data --export-on-exit=./emulator-data
```

### Step 2: Start the FastAPI Backend

**Windows:**

```cmd
cd backend
set FIRESTORE_EMULATOR_HOST=127.0.0.1:8085
set FIREBASE_PROJECT_ID=agentic-news-dev
python api_server.py
```

**Linux / macOS:**

```bash
cd backend
export FIRESTORE_EMULATOR_HOST=127.0.0.1:8085
export FIREBASE_PROJECT_ID=agentic-news-dev
python3 api_server.py
```

### Step 3: Start the Web Dashboard

```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 3. Architecture & Features

- **25 Specialized Agents** across 6 layers (`Ingestion`, `Understand`, `Verify`, `Analyse`, `Synthesis`, `Engage`).
- **IFCN Claim Verification**: Confidence scores and primary source links.
- **Cross-Source Contradictions**: Side-by-side discrepancy inspector.
- **Interactive Chronological Timeline**: Tracks narrative framing shifts.
- **Active Recall Comprehension Tutor**: Generates MCQs and provides real-time scoring.
- **Dialectical Perspective Debate**: Steelmanned proponent vs. critic positions with neutral compromise synthesis.
- **Research Copilot Chat**: Autonomous investigation mode.
- **Production Firestore Rules & Indexes**: Validated and ready for deployment.
