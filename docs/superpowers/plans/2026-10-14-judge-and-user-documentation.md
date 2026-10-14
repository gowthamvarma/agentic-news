# Judge and User Documentation Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Author an authoritative 5-part hackathon documentation suite and evaluator guide in `docs/submission/`, complete with high-resolution UI screenshots and an animated walkthrough captured from the live application, articulating why Agentic News Analyser wins over basic news summarizers.

**Architecture:** A dedicated, numbered documentation dossier under `docs/submission/` backed by automated headless Chrome screenshot capture of `http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`, structured Pydantic diagrams, Mermaid sequence flows, and strict compliance with the 5-Pillar Agent Standards.

**Tech Stack:** Markdown (GitHub Flavored), Mermaid.js, Headless Google Chrome, Python 3.12, Pillow, React 19, Google ADK 2.0, FastAPI, Firebase Firestore.

## Global Constraints
- Target directory: `docs/submission/`
- Media directory: `docs/submission/assets/`
- Target URL for analysis screenshots: `http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`
- Total media assets weight: strictly < 5 MB for Git repository performance
- All documents must feature clickable relative file links and Mermaid diagrams where applicable
- Preservation of existing project code, comments, and structure

---

### Task 1: Setup Directories & Media Capture Pipeline

**Files:**
- Create: `backend/tests/capture_screenshots.py`
- Create: `docs/submission/assets/` (directory)
- Test: verify captured files exist and are valid PNG/GIFs under 5 MB total

**Interfaces:**
- Produces: `docs/submission/assets/hero-overview.png`, `docs/submission/assets/history-archive.png`, `tab-01-brief.png` through `tab-08-copilot.png`, and `docs/submission/assets/app-walkthrough.gif`.

- [ ] **Step 1: Write the automated headless Chrome capture script**
Create `backend/tests/capture_screenshots.py` using Chrome headless (`--headless=new`, `--window-size=1440,900`) and Python `urllib`/`PIL` to capture and optimize screenshots of:
1. Home page (`http://localhost:5173/`)
2. History page (`http://localhost:5173/history`)
3. Analysis Detail page tabs (`http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614?tab=<tab_name>`)
4. Generate `app-walkthrough.gif` combining key tab frames into an animated loop under 3 MB.

- [ ] **Step 2: Run the script to capture and optimize media**
Run: `python backend/tests/capture_screenshots.py`
Expected: Output images in `docs/submission/assets/` totaling < 5 MB.

- [ ] **Step 3: Verify media assets and size**
Check directory listing and sizes:
Run: `Get-ChildItem docs/submission/assets | Measure-Object -Property Length -Sum`

- [ ] **Step 4: Commit assets and capture script**
```bash
git add backend/tests/capture_screenshots.py docs/submission/assets/
git commit -m "docs: generate optimized UI screenshots and walkthrough animation"
```

---

### Task 2: Author Document 1 (Problem Statement & Competitive Differentiation)

**Files:**
- Create: `docs/submission/01-problem-statement-and-differentiation.md`

**Interfaces:**
- Consumes: Target analysis workflows and pain points in news consumption
- Produces: Complete competitive dossier contrasting Agentic News with Perplexity, Ground News, and ChatGPT.

- [ ] **Step 1: Write `docs/submission/01-problem-statement-and-differentiation.md`**
Cover:
1. The Epistemic Crisis of Modern News (Speed over accuracy, information overload, filter bubbles).
2. The 4 Structural Failures of Conventional LLM Summarizers (Flattening of contested claims, single-perspective vulnerability, zero evidentiary auditability, passive consumption).
3. The Agentic News Analyser Paradigm: Autonomous Multi-Agent Intelligence Agency vs text summarizer.
4. Comprehensive 8-Dimension Competitive Matrix (Decomposition, Contradictions, 3-Tier Consequences, Bias Spectrum, Active Recall, Copilot Chat, etc.).
5. Target Personas & Real-World Use Cases.

- [ ] **Step 2: Verify formatting, tables, and internal links**
Check file content and table rendering.

- [ ] **Step 3: Commit Document 1**
```bash
git add docs/submission/01-problem-statement-and-differentiation.md
git commit -m "docs: add 01-problem-statement-and-differentiation.md"
```

---

### Task 3: Author Document 2 (Tech Stack & Antigravity CLI Journey)

**Files:**
- Create: `docs/submission/02-tech-stack-and-antigravity.md`

**Interfaces:**
- Consumes: Codebase architecture (`backend/`, `frontend/`, `firebase/`)
- Produces: Technical stack documentation detailing React 19, FastAPI, ADK 2.0 Python rationale, and Antigravity CLI workflow.

- [ ] **Step 1: Write `docs/submission/02-tech-stack-and-antigravity.md`**
Cover:
1. Architectural Layering: Modern Web UI + Python Async Intelligence Engine + Firebase Cloud Data Store.
2. Frontend Architecture: React 19, Vite 6, Tailwind CSS 3.4, DaisyUI 4 (theme engine, SVG avatars, drawer navigation).
3. Backend Architecture: Python 3.12, FastAPI, Uvicorn, Pydantic v2.
4. Why Google ADK 2.0 & Python:
   - Python as Google's premier ADK tier-1 runtime (Agents, Runners, Sessions, Callbacks).
   - `asyncio.gather` parallel evaluation speedup.
   - Latest `google-genai` 2.x SDK multimodal and reasoning capabilities.
5. Firebase Cloud & Local Emulator: Firestore collections (`analyses`, `fact_checks`, `quizzes`, `debates`, `evidence_ledger`) and offline in-memory fallback.
6. Development Acceleration with Google Antigravity CLI:
   - Rapid scaffolding and orchestration of agents.
   - Live debugging, prompt engineering, and test harness automation.

- [ ] **Step 2: Verify technical accuracy and links**
Check file content and references to code files.

- [ ] **Step 3: Commit Document 2**
```bash
git add docs/submission/02-tech-stack-and-antigravity.md
git commit -m "docs: add 02-tech-stack-and-antigravity.md"
```

---

### Task 4: Author Document 3 (Technical Design & System Architecture)

**Files:**
- Create: `docs/submission/03-system-architecture-and-technical-design.md`

**Interfaces:**
- Consumes: `backend/shared/schemas.py`, `backend/shared/structured_builder.py`, `backend/shared/plugins/`, `backend/api_server.py`
- Produces: Comprehensive system design document with Mermaid architecture and sequence diagrams.

- [ ] **Step 1: Write `docs/submission/03-system-architecture-and-technical-design.md`**
Cover:
1. End-to-End System Architecture Diagram (Mermaid `flowchart TD`).
2. Reactive Data Flow Sequence (Mermaid `sequenceDiagram` from User Click to Firestore Persistence and React Re-rendering).
3. Pydantic v2 Structured JSON Engineering:
   - Strict Schema Definitions (`NewsIntelligenceReport`, `ClaimVerification`, `ContradictionItem`, `RootCauseReport`, `QuizPayload`, `PerspectiveDebateReport`).
   - Bulletproof parsing: `model_validate`, markdown code-fence sanitizers, schema repair callbacks.
4. Concurrency & Performance Engine:
   - Fan-out evaluation using `asyncio.gather` reducing multi-agent evaluation latency from 45s to ~8s.
5. Enterprise Guardrails & Plugins:
   - `EvidenceLedgerPlugin`, `TokenTrackerPlugin`, `NewsGuardrailPlugin`.

- [ ] **Step 2: Verify Mermaid diagrams and schema code blocks**
Check rendering and syntax.

- [ ] **Step 3: Commit Document 3**
```bash
git add docs/submission/03-system-architecture-and-technical-design.md
git commit -m "docs: add 03-system-architecture-and-technical-design.md"
```

---

### Task 5: Author Document 4 (Multi-Agent Ecosystem & Orchestration)

**Files:**
- Create: `docs/submission/04-multi-agent-ecosystem-and-orchestration.md`

**Interfaces:**
- Consumes: `backend/news_analyser/agent.py`, `backend/shared/agents/`, `docs/best-agents-architecture-guide.md`
- Produces: Detailed agent breakdown across 6 layers, orchestration hierarchy, UI mapping, and 5-Pillar best practices adherence.

- [ ] **Step 1: Write `docs/submission/04-multi-agent-ecosystem-and-orchestration.md`**
Cover:
1. Master Fleet Overview: 25 agents across 6 architectural stages.
2. Detailed Agent Profiles (Mission, Model, Tools, Inputs, Outputs for each agent across Ingestion, Understand, Verify, Analyse, Synthesis, and Engage).
3. Main Orchestrator vs. Sub-Agent Coordination Pattern: Context boundary preservation and delegated tasks.
4. Agent-to-UI Component Mapping Matrix: Every agent mapped to backend file, React component, and UI section.
5. The 5-Pillar Standards from `docs/best-agents-architecture-guide.md`:
   - Pillar 1: 5-Pattern Structured Instructions (Identity, Mission, Methodology, Boundaries, Few-Shot).
   - Pillar 2: Strict Structured Output with Pydantic.
   - Pillar 3: Grounded Evidence Tools (`fetch_news_tool`, `factcheck_db_tool`, `perspectives_tool`).
   - Pillar 4: Progressive Skills & Heuristics.
   - Pillar 5: Callbacks, Guardrails & Simulation engine.

- [ ] **Step 2: Verify agent names, mappings, and references**
Cross-check against `backend/news_analyser/agent.py`.

- [ ] **Step 3: Commit Document 4**
```bash
git add docs/submission/04-multi-agent-ecosystem-and-orchestration.md
git commit -m "docs: add 04-multi-agent-ecosystem-and-orchestration.md"
```

---

### Task 6: Author Document 5 (User & Evaluator Guide with Visual Walkthrough)

**Files:**
- Create: `docs/submission/05-user-and-evaluator-guide.md`

**Interfaces:**
- Consumes: Captured screenshots from `docs/submission/assets/` and UI behavior
- Produces: Practical, illustrated evaluator guide for navigating every section and feature of the application.

- [ ] **Step 1: Write `docs/submission/05-user-and-evaluator-guide.md`**
Cover:
1. 3-Minute Quickstart for Evaluators (Local URLs, sample pre-analyzed topic `http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`).
2. Global Shell & Navigation (Theme switcher, responsive drawer, search bar).
3. Home Page Tour (8-region breaking feeds, trending chips, live agent progress pipeline) with `hero-overview.png`.
4. History & Archive Page Tour with `history-archive.png`.
5. Deep-Dive Tour of the 8 Analysis Tabs (with embedded screenshots and explanations of what problem each tab solves):
   - Tab 1: Executive Brief (`tab-01-brief.png`).
   - Tab 2: Sources & Bias (`tab-02-sources.png`).
   - Tab 3: Verification & Contradictions (`tab-03-verification.png`).
   - Tab 4: Chronological Timeline (`tab-04-timeline.png`).
   - Tab 5: Insights & Cascades (`tab-05-insights.png`).
   - Tab 6: Active Recall Quiz (`tab-06-quiz.png`).
   - Tab 7: Perspective Debate (`tab-07-debate.png`).
   - Tab 8: Research Copilot (`tab-08-copilot.png`).
6. Interactive Animated Walkthrough (`app-walkthrough.gif`).
7. Power Features: PDF Export, Speech synthesis, notes taking, and bookmarks.

- [ ] **Step 2: Verify image links and rendering**
Ensure all relative markdown links resolve to `assets/`.

- [ ] **Step 3: Commit Document 5**
```bash
git add docs/submission/05-user-and-evaluator-guide.md
git commit -m "docs: add 05-user-and-evaluator-guide.md"
```

---

### Task 7: Author Submission Portal & Executive Hub

**Files:**
- Create: `docs/submission/README.md`

**Interfaces:**
- Consumes: Documents 1 through 5
- Produces: Judge's Executive Submission Hub linking all dossiers with scoring rubric alignment.

- [ ] **Step 1: Write `docs/submission/README.md`**
Cover:
1. Executive Submission Brief & Project Pitch.
2. Quick Navigation Index to all 5 documents.
3. Hackathon Judging Rubric Cross-Reference (Innovation, Technical Execution, Architecture, User Experience, Impact).
4. Direct Links to live demo and recorded walkthrough.

- [ ] **Step 2: Verify links across the entire documentation suite**
Check relative links from `docs/submission/README.md` to all sub-documents.

- [ ] **Step 3: Commit Submission Portal**
```bash
git add docs/submission/README.md
git commit -m "docs: add submission README and navigation portal"
```

---

### Task 8: Verification & Final Polish

**Files:**
- Review: `docs/submission/`
- Test: Verify image sizes, link integrity, and git status

- [ ] **Step 1: Check total repository size impact of docs/submission/**
Run: `Get-ChildItem -Recurse docs/submission | Measure-Object -Property Length -Sum`
Ensure total size < 5 MB.

- [ ] **Step 2: Verify git status is clean and all commits are formatted**
Run: `git status -s`

- [ ] **Step 3: Final confirmation review**
Review rendered markdown structure and verify all requirements from user prompt are satisfied.
