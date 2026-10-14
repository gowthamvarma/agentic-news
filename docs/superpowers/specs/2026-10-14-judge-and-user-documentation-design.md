# Design Specification: Judge and User Documentation Suite

**Date**: 2026-10-14  
**Project**: Agentic News Analyser (`agentic-news`)  
**Target Audience**: Google Cloud AI Builder Cup 2026 Judges, Hackathon Evaluators, Technical Developers, and End Users  
**Status**: Approved by User  

---

## 1. Executive Summary & Goals

The goal of this initiative is to create an authoritative, production-grade documentation suite in `docs/submission/` that articulates the strategic value, architectural rigor, and competitive superiority of the **Agentic News Analyser**. 

Unlike conventional news summarizers that simply compress text and exacerbate hallucinations, this application deploys a **25-agent Google ADK fleet** to perform deep evidentiary claim auditing, side-by-side contradiction detection, political bias classification, root cause analysis, 3-tier consequence forecasting, and active recall learning.

---

## 2. Directory Hierarchy & Deliverables

All documentation files and visual assets will be contained in `docs/submission/`:

```
docs/submission/
├── README.md                                      # Executive Submission Portal & Quick Navigation for Judges
├── 01-user-and-evaluator-guide.md                 # End-to-End Evaluator Guide with Live UI Walkthrough
├── 02-problem-statement-and-differentiation.md    # Problem, Vision & Why This Beats Generic Summarizers
├── 03-tech-stack-and-antigravity.md               # Stack Rationale, ADK 2.0 Python Choice & Antigravity CLI Journey
├── 04-system-architecture-and-technical-design.md # End-to-End System Design, Concurrency, Pydantic & Firestore
├── 05-multi-agent-ecosystem-and-orchestration.md  # 25-Agent Fleet, Hierarchy, UI Mapping & 5-Pillar Best Practices
└── assets/                                        # Optimized visual media (<5MB total for Git performance)
    ├── hero-overview.png                          # High-resolution home view & region feed
    ├── history-archive.png                        # Filterable Firestore archive grid
    ├── tab-01-brief.png                           # Executive brief, metrics, context primer
    ├── tab-02-sources.png                         # Source diversity, political spectrum & reliability
    ├── tab-03-verification.png                    # Fact-check verdicts, contradictions & framing
    ├── tab-04-timeline.png                        # Chronological event reconstruction & narrative evolution
    ├── tab-05-insights.png                        # Root cause 5-whys, consequence cascades, scenarios
    ├── tab-06-quiz.png                            # Active recall MCQ test & explanations
    ├── tab-07-debate.png                          # Multi-perspective dialectical debate
    ├── tab-08-copilot.png                         # Evidence-grounded research copilot chat
    └── app-walkthrough.gif                        # Lightweight animated sequence of live UI
```

---

## 3. Document Specifications

### Document 1: User & Evaluator Guide
- **File**: `docs/submission/01-user-and-evaluator-guide.md`
- **Core Narrative**:
  - 3-Minute Quickstart for Judges: Local launch commands, one-click analysis URLs, and testing pre-populated analyses.
  - UI Navigation & Layout Tour:
    - Global controls (Theme picker, drawer navigation, search).
    - Home Page (8-country regional breaking news feed, trending topic chips, real-time agent execution pipeline stepper).
    - History Archive (Firestore filterable grid, search, tags, favorites).
  - Deep Dive into the 8 Analysis Tabs (Illustrated with real screenshots from `http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`):
    - Tab 1: Executive Brief & Entity Primer.

### Document 2: Problem Statement & Competitive Differentiation
- **File**: `docs/submission/02-problem-statement-and-differentiation.md`
- **Core Narrative**:
  - The breakdown of trust in online news: algorithmic echo chambers, speed-over-accuracy publishing, and conflicting claims during fast-moving events.
  - The 4 structural failures of basic LLM summarizers:
    1. *Flattening of Contested Realities*: Presenting contested or unverified numbers as uncontested truth.
    2. *Single-Perspective Vulnerability*: Summarizing only whichever article happens to be fed in.
    3. *Zero Evidentiary Traceability*: Inability to audit claims back to atomic primary records.
    4. *The Passive Consumption Trap*: Lack of cognitive retention or actionable learning.
  - The Agentic Intelligence Shift: Replacing single-shot text compression with a multi-layered investigative bureau.
  - Competitive Analysis Matrix: Side-by-side comparison with Perplexity AI, Ground News, ChatGPT Web, and SmartNews across 8 rigorous dimensions.
  - Target Impact Personas: Policy analysts, investigative journalists, financial researchers, and everyday citizens.

### Document 3: Technology Stack & Antigravity CLI Journey
- **File**: `docs/submission/03-tech-stack-and-antigravity.md`
- **Core Narrative**:
  - Frontend Stack: React 19, TypeScript 5, Vite 6, Tailwind CSS 3.4, DaisyUI 4 (with reactive multi-theme switching, zero-dependency SVG avatar generators, and responsive mobile drawers).
  - Backend Stack: Python 3.12, FastAPI, Uvicorn, Pydantic v2, Google Cloud Firestore AsyncClient.
  - Why Google ADK 2.0 + Python:
    - Python is Google's tier-1 foundation for ADK, receiving first-class agent abstractions, runners, streaming callbacks, and the latest `google-genai` 2.x SDK capabilities.
    - Native `asyncio.gather` concurrency enables high-throughput parallel multi-agent evaluation.
  - Firebase Architecture:
    - Firestore NoSQL structure (`analyses`, `fact_checks`, `quizzes`, `debates`, `evidence_ledger`).
    - Local Firestore Emulator support for fast, zero-cost development and CI/CD resilience with in-memory fallback.
  - Built with Antigravity CLI:
    - Rapid scaffolding of multi-agent modules and typed Pydantic contracts.
    - Continuous simulation and test automation with live verification.

### Document 4: Technical Design & System Architecture
- **File**: `docs/submission/04-system-architecture-and-technical-design.md`
- **Core Narrative**:
  - Hybrid Orchestration Architecture: Deterministic collection/extraction coupled with dynamic parallel fan-out supervisor.
  - End-to-end data flow with Mermaid diagrams: User Query $\rightarrow$ FastAPI $\rightarrow$ ADK Runner $\rightarrow$ Gemini 3.8 Flash / 3.1 Pro $\rightarrow$ Pydantic Schema Validation $\rightarrow$ Firestore AsyncClient $\rightarrow$ React UI.
  - Structured JSON Response Engineering with Pydantic v2:
    - Type safety, field constraints, schema repair callbacks, and regex-assisted markdown parsing fallback.
    - Detailed breakdown of `NewsIntelligenceReport`, `ClaimVerification`, `ContradictionItem`, `RootCauseReport`, `QuizPayload`, and `PerspectiveDebateReport`.
  - Concurrency & Performance: Parallel fan-out via `asyncio.gather` reducing multi-agent evaluation latency from 45s to ~8s.
  - Guardrail Plugins: `EvidenceLedgerPlugin`, `TokenTrackerPlugin`, `NewsGuardrailPlugin`.

### Document 5: Multi-Agent Ecosystem & Orchestration
- **File**: `docs/submission/05-multi-agent-ecosystem-and-orchestration.md`
- **Core Narrative**:
  - The 6 Architectural Layers:
    1. *Ingestion*: `source_collector`, `claim_extractor`.
    2. *Understand*: `context_builder`, `timeline_agent`, `knowledge_graph_agent`, `stakeholder_map_agent`.
    3. *Verify*: `fact_verifier`, `source_reliability_agent`, `contradiction_analyst`, `bias_analyst`, `manipulation_detector`, `coverage_gap_agent`.
    4. *Analyse & Learn*: `root_cause_agent`, `lessons_prevention_agent`, `impact_analyzer`, `historical_parallels_agent`, `scenario_prediction_agent`, `country_transferability_agent`.
    5. *Synthesis & Adaptation*: `report_synthesizer`, `audience_adaptation_agent`.
    6. *Engage*: `tutor_agent`, `perspective_debate_agent`, `research_copilot`.
  - Main vs. Sub-Agent Orchestration: Single responsibility, context window preservation, and hierarchical aggregation.
  - Agent-to-UI Mapping Matrix: Clear table linking each agent to its exact backend module, React component, and UI tab.
  - Alignment with `docs/best-agents-architecture-guide.md` (The 5 Pillars):
    - Pillar 1: 5-Pattern Structured Instructions (Identity, Mission, Methodology, Boundaries, Few-Shot).
    - Pillar 2: Strict Structured Output with Pydantic (`output_schema`).
    - Pillar 3: Grounded Evidence Tools (`fetch_news_tool`, `factcheck_db_tool`, `perspectives_tool`).
    - Pillar 4: Progressive Skills & Toolsets (Fact-verification heuristics, media framing heuristics).
    - Pillar 5: Callbacks, Guardrails & Simulation engine.
    - Tab 2: Sources, Diversity & Ideological Spectrum.
    - Tab 3: Fact-Check Verdicts & Cross-Source Contradictions.
    - Tab 4: Chronological Event Timeline & Narrative Evolution.
    - Tab 5: Root Cause Diagnostics, Consequence Cascades & Scenarios.
    - Tab 6: Active Recall Comprehension Quiz.
    - Tab 7: Dialectical Perspective Debate.
    - Tab 8: Grounded Research Copilot Chat.
  - Productivity Features: PDF export, Speech synthesis / audio reader, researcher notes, and bookmarks.

### Document 0: Executive Submission Portal
- **File**: `docs/submission/README.md`
- **Core Narrative**:
  - Executive summary and table of contents linking all 5 documents.
  - Hackathon judging rubric alignment (Innovation, Architecture, Impact, Agent Quality).
  - Quick links to video walkthrough and live local instance.

---

## 4. Media Capture Pipeline
- Viewport: 1440x900, DPR 1.0 (crisp desktop resolution).
- Tooling: Automated script invoking Google Chrome headless (`--headless=new`).
- Assets: WebP/PNG for screenshots (<200KB each); GIF/WebM for animated walkthrough (<3.5MB).
- Total media weight: Strictly < 5MB to respect repository performance.

---

## 5. Review & Verification Criteria
- [x] All 5 core questions in user prompt addressed in dedicated, comprehensive markdown dossiers.
- [x] Clear explanation of ADK 2.0 Python choice and Antigravity CLI development journey.
- [x] Explicit mapping of all 25 agents to UI subsections.
- [x] Integration with `docs/best-agents-architecture-guide.md`.
- [x] High-resolution, lightweight visual screenshots of `http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`.
