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
* **Powers an On-Demand Article Studio** generating publication-ready journalism across 7 distinct editorial styles with 50+ language translations and audio speech narration.
* **Features an On-Demand Image Studio** producing photorealistic and conceptual editorial imagery powered by Imagen 3 / Gemini with Cloud Storage persistence.

---

## 2. Complete Submission Dossier Index

This submission packet has been organized into five deep-dive architectural dossiers:

| Dossier | Title & Core Topics | Key Judge Takeaway |
| :--- | :--- | :--- |
| [**Document 01**](./01-user-and-evaluator-guide.md) | **User & Evaluator Guide with Visual Media Tour**<br/>• 3-minute fast-track evaluator checklist<br/>• UI page walkthroughs & problem-solving sections<br/>• Comprehensive tour of all 10 analysis tabs<br/>• Generative Article & Image Studio deep-dives<br/>• Visual screenshots & animated walkthroughs | Makes evaluating the application effortless, clear, and visually delightful for the judges. |
| [**Document 02**](./02-problem-statement-and-differentiation.md) | **Problem Statement & Competitive Differentiation**<br/>• The epistemic crisis of news<br/>• Why generic LLM summarizers fail<br/>• 8-dimension competitive matrix vs. Perplexity, Ground News & ChatGPT<br/>• Multimodal editorial synthesis advantages | Shows why this platform represents a true paradigm shift over basic text summarizers. |
| [**Document 03**](./03-tech-stack-and-antigravity.md) | **Tech Stack & Antigravity CLI Engineering Journey**<br/>• React 19, Vite 6, Tailwind, DaisyUI<br/>• Why ADK 2.0 & Python backend was chosen<br/>• Google Cloud Storage & Firestore persistence<br/>• Development with Antigravity CLI | Demonstrates full-stack technical mastery, modern framework selection, and rapid AI-assisted development. |
| [**Document 04**](./04-system-architecture-and-technical-design.md) | **Technical Design & System Architecture**<br/>• End-to-end topological architecture<br/>• Reactive data flow across all 10 tabs<br/>• Pydantic v2 strict structured JSON builder<br/>• Concurrency with `asyncio.gather` (81.6% speedup)<br/>• Generative Media Studio REST endpoints | Deep technical architecture with zero hand-waving, type safety, and real-time streaming. |
| [**Document 05**](./05-multi-agent-ecosystem-and-orchestration.md) | **Multi-Agent Ecosystem & Orchestration**<br/>• Complete 25-agent fleet across 6 stages<br/>• Main vs. sub-agent orchestration pattern<br/>• Agent-to-UI component mapping matrix (all 10 tabs)<br/>• Adherence to the 5-Pillar Architecture Standard | Proof of enterprise-grade multi-agent engineering compliant with official Google ADK best practices. |

---

## 3. Hackathon Rubric Alignment

| Judging Criteria | How Agentic News Analyser Excels | Referenced Document |
| :--- | :--- | :--- |
| **Innovation & Concept (25%)** | Replaces passive text summarization with an autonomous, 6-stage news intelligence bureau. First system to integrate side-by-side contradiction auditing, consequence cascade modeling, active recall pedagogical testing, and automated multi-style article/image publishing into a single platform. | [Doc 02](./02-problem-statement-and-differentiation.md) |
| **Technical Architecture & Google ADK (25%)** | 25 specialized agents orchestrated via Google ADK 2.0 with strict context window isolation. Powered by Gemini 3.8 Flash (fast extraction) and Gemini 3.1 Pro (deep reasoning). Parallel fan-out via `asyncio.gather` delivers an 81.6% latency reduction. Integrated Google Cloud Storage and Firestore real-time caching. | [Doc 03](./03-tech-stack-and-antigravity.md) & [Doc 04](./04-system-architecture-and-technical-design.md) |
| **Adherence to Best Practices (20%)** | Strict compliance with the 5-Pillar Standard: 5-pattern structured prompts, 100% Pydantic v2 output schemas, grounded evidence tools, progressive skills, and audit plugins (`EvidenceLedgerPlugin`, `TokenTrackerPlugin`). | [Doc 05](./05-multi-agent-ecosystem-and-orchestration.md) |
| **UI/UX & Visual Polish (15%)** | Responsive React 19 SPA with DaisyUI themes (Dark, Light, Cyberpunk), custom SVG agent avatars, interactive milestone timelines, side-by-side contradiction cards, 10-tab navigation with bidirectional Previous/Next controls, and auto-switching table/card history archive. | [Doc 01](./01-user-and-evaluator-guide.md) |
| **Real-World Impact & Utility (15%)** | Empowers policy analysts, journalists, and citizens to navigate contentious breaking events, defeat algorithmic echo chambers, retain verifiable knowledge, and produce publication-ready media instantly. | [Doc 02](./02-problem-statement-and-differentiation.md) |

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
