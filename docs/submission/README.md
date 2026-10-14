# Agentic News Analyser — Official Hackathon Submission Portal
## Google Cloud AI Builder Cup 2026 — *Media, Content & Digital Experiences*

> **Project Name**: Agentic News Analyser  
> **Frameworks**: Google Agent Development Kit (ADK 2.0+ Python), Google Gemini (Flash & Pro), React 19, Firebase Firestore  
> **Development Platform**: Built & Orchestrated with Google Antigravity CLI  
> **Live Local Application**: [`http://localhost:5173/`](http://localhost:5173/)  
> **Featured Golden Investigation**: [`http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614`](http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614) (*Elon Musk Starlink India Issue*)  

---

![Platform Walkthrough](./assets/app-walkthrough.gif)

---

## 1. Executive Summary: What We Built & Why It Wins

The **Agentic News Analyser** is an autonomous news intelligence bureau powered by a **25-agent Google ADK fleet**. 

While conventional AI news summarizers act as crude text compressors that flatten contested facts and hallucinate false consensus, our platform conducts **forensic evidentiary auditing**:
* **Decomposes breaking news** into isolated atomic factual claims.
* **Detects cross-outlet contradictions** side-by-side with divergence classifications (Numerical, Timeline, Fact Negation).
* **Evaluates media bias and manipulation** across a 7-point ideological spectrum.
* **Performs 5-Whys root cause diagnosis** and models **3-tier consequence cascades** (1st, 2nd, and 3rd order ripple effects).
* **Reinforces cognitive retention** through adaptive comprehension quizzes and dialectical perspective debates.

---

## 2. Complete Submission Dossier Index

This submission packet has been organized into five deep-dive architectural dossiers:

| Dossier | Title & Core Topics | Key Judge Takeaway |
| :--- | :--- | :--- |
| [**Document 01**](./01-problem-statement-and-differentiation.md) | **Problem Statement & Competitive Differentiation**<br/>• The epistemic crisis of news<br/>• Why generic LLM summarizers fail<br/>• 8-dimension competitive matrix vs. Perplexity, Ground News & ChatGPT | Shows why this platform represents a true paradigm shift over basic text summarizers. |
| [**Document 02**](./02-tech-stack-and-antigravity.md) | **Tech Stack & Antigravity CLI Engineering Journey**<br/>• React 19, Vite 6, Tailwind, DaisyUI<br/>• Why ADK 2.0 & Python backend was chosen<br/>• Firebase Firestore cloud & local emulator<br/>• Development with Antigravity CLI | Demonstrates full-stack technical mastery, modern framework selection, and rapid AI-assisted development. |
| [**Document 03**](./03-system-architecture-and-technical-design.md) | **Technical Design & System Architecture**<br/>• End-to-end topological architecture<br/>• Reactive data flow & sequence diagrams<br/>• Pydantic v2 strict structured JSON builder<br/>• Concurrency with `asyncio.gather` (81.6% speedup)<br/>• Enterprise Guardrail Plugins | Deep technical architecture with zero hand-waving, type safety, and real-time streaming. |
| [**Document 04**](./04-multi-agent-ecosystem-and-orchestration.md) | **Multi-Agent Ecosystem & Orchestration**<br/>• Complete 25-agent fleet across 6 stages<br/>• Main vs. sub-agent orchestration pattern<br/>• Agent-to-UI component mapping matrix<br/>• Adherence to the 5-Pillar Architecture Standard | Proof of enterprise-grade multi-agent engineering compliant with official Google ADK best practices. |
| [**Document 05**](./05-user-and-evaluator-guide.md) | **User & Evaluator Guide with Visual Media Tour**<br/>• 3-minute fast-track evaluator checklist<br/>• UI page walkthroughs & problem-solving sections<br/>• Comprehensive tour of all 8 analysis tabs<br/>• Visual screenshots & animated walkthrough | Makes evaluating the application effortless, clear, and visually delightful for the judges. |

---

## 3. Hackathon Rubric Alignment

| Judging Criteria | How Agentic News Analyser Excels | Referenced Document |
| :--- | :--- | :--- |
| **Innovation & Concept (25%)** | Replaces passive text summarization with an autonomous, 6-stage news intelligence bureau. First system to introduce side-by-side contradiction auditing, consequence cascade modeling, and active recall pedagogical testing into news consumption. | [Doc 01](./01-problem-statement-and-differentiation.md) |
| **Technical Architecture & Google ADK (25%)** | 25 specialized agents orchestrated via Google ADK 2.0 with strict context window isolation. Powered by Gemini 3.8 Flash (fast extraction) and Gemini 3.1 Pro (deep reasoning). Parallel fan-out via `asyncio.gather` delivers an 81.6% latency reduction. | [Doc 02](./02-tech-stack-and-antigravity.md) & [Doc 03](./03-system-architecture-and-technical-design.md) |
| **Adherence to Best Practices (20%)** | Strict compliance with the 5-Pillar Standard: 5-pattern structured prompts, 100% Pydantic v2 output schemas, grounded evidence tools, progressive skills, and audit plugins (`EvidenceLedgerPlugin`, `TokenTrackerPlugin`). | [Doc 04](./04-multi-agent-ecosystem-and-orchestration.md) |
| **UI/UX & Visual Polish (15%)** | Responsive React 19 SPA with DaisyUI themes (Dark, Light, Cyberpunk), custom SVG agent avatars, interactive milestone timelines, side-by-side contradiction cards, and responsive drawer navigation. | [Doc 05](./05-user-and-evaluator-guide.md) |
| **Real-World Impact & Utility (15%)** | Empowers policy analysts, journalists, and citizens to navigate contentious breaking events, defeat algorithmic echo chambers, and retain verifiable knowledge. | [Doc 01](./01-problem-statement-and-differentiation.md) |

---

## 4. Quickstart: Run the Application Locally

```bash
# 1. Start the Python Backend (Port 8080)
python backend/api_server.py

# 2. Start the React Frontend (Port 5173)
cd frontend
npm run dev

# 3. Open in Browser
http://localhost:5173/analysis/09c0dbae-2b01-4852-83de-ddc89fdb6614
```

---

*Authored with Google Antigravity CLI for the Google Cloud AI Builder Cup 2026.*
