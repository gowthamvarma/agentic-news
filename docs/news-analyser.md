# Agentic News Analyser — Project Concept & Technical Specification

> **Hackathon Submission**: [Google Cloud AI Builder Cup 2026](file:///C:/tools/github/agentic-news/docs/ai-builder-cup.md)  
> **Theme**: Media, Content & Digital Experiences  
> **Stack**: Google Agent Development Kit (ADK), Gemini Models, Google Cloud Run / Firebase  

---

## 1. Executive Summary

In today's fast-paced digital information landscape, breaking news stories are reported simultaneously across hundreds of outlets with varying editorial perspectives, incomplete facts, and implicit biases. Readers and researchers face severe **information overload, echo chambers, and fragmented reporting**, making it difficult to discern the objective truth and broader implications of a news event.

The **Agentic News Analyser** is an autonomous, multi-agent intelligence application. When given a news topic or breaking event query, it autonomously:
1. Searches and gathers coverage from diverse global and local news publications.
2. Extracts and deduplicates core claims, quotes, and timeline elements.
3. Conducts multi-dimensional comparative analysis across sources.
4. Generates deep, actionable insights and transparent synthesis with traceable citations.

Built using the **Google Agent Development Kit (ADK)** and powered by **Google Gemini**, the application transforms how digital news is discovered, critically examined, and consumed.

---

## 2. Alignment with AI Builder Cup 2026

The project is purpose-built to address the hackathon guidelines specified in [`docs/ai-builder-cup.md`](file:///C:/tools/github/agentic-news/docs/ai-builder-cup.md):

| Hackathon Requirement | How Agentic News Analyser Aligns |
| :--- | :--- |
| **Theme**: *Media, Content & Digital Experiences* | Directly addresses digital news publishing, content discovery, narrative understanding, and reader comprehension. |
| **Technical Merit (40%)** | Leverages Google ADK for multi-agent orchestration, stateful workflows, tool execution, and Gemini models for complex reasoning and structured multi-source synthesis. |
| **Problem Alignment & Impact (25%)** | Solves critical societal problems: media bias polarization, misinformation, fatigue from redundant articles, and lack of cross-source verification. |
| **Innovation & Creativity (25%)** | Moves beyond single-prompt summarization into an autonomous investigative multi-agent research pipeline that highlights consensus, contradictions, and narrative framing. |
| **UX & Solution Design (10%)** | Interactive web dashboard featuring visual narrative breakdowns, timeline views, bias spectra, source reliability tags, and executive summaries. |
| **Google Cloud Stack** | Orchestrated via Google ADK, powered by Gemini, backend hosted on Cloud Run, and frontend/realtime data managed with Firebase. |

---

## 3. Core System Architecture

The application adopts an agentic multi-agent architecture built on **Google ADK (Python)**:

```mermaid
flowchart TD
    User([User / News Query]) --> WebUI[Web Interface / Dashboard]
    WebUI --> Orchestrator[ADK News Orchestrator Agent]

    subgraph Collection Pipeline
        Orchestrator --> QueryExpander[Query Expansion & Source Planner]
        QueryExpander --> SearchAgent[Multi-Source Search & Ingestion Agent]
        SearchAgent --> Scraper[Content Extraction & Sanitization Engine]
    end

    subgraph Processing & Deduplication
        Scraper --> ProcessingAgent[Deduplication & Claim Extractor]
    end

    subgraph Deep Analysis Engine
        ProcessingAgent --> AnalysisAgent[Comparative & Deep Insights Agent]
        AnalysisAgent --> Gemini[Google Gemini Models]
        AnalysisAgent --> DeepInsights[Custom Insights Framework<br/><i>(To Be Discussed)</i>]
    end

    subgraph Presentation & Storage
        DeepInsights --> Synthesizer[Synthesis & Report Agent]
        Synthesizer --> CloudRun[Google Cloud Run API]
        CloudRun --> Firebase[(Firebase / Firestore State)]
        Firebase --> WebUI
    end
```

---

## 4. Agent Roles & Responsibilities

### 4.1 Orchestrator Agent (`NewsOrchestrator`)
- Coordinates the end-to-end research lifecycle using Google ADK session and workflow primitives.
- Manages user intent, clarifies ambiguity in the query if required, and establishes the search perimeter (time window, geographies, language).

### 4.2 Ingestion & Discovery Agent (`SourceCollectorAgent`)
- Generates diverse search terms to prevent single-narrative retrieval bias.
- Queries search APIs, news aggregators, RSS feeds, and open web sources.
- Fetches article HTML/content, parses body text, extracts publication metadata (author, date, publisher, original URL).

### 4.3 Fact & Claim Extraction Agent (`ClaimExtractorAgent`)
- Identifies the central event, core factual assertions, statistical figures, and official statements.
- Clusters articles covering identical sub-events and removes duplicate syndicated stories.

### 4.4 Deep Insights & Analysis Engine (`InsightAnalysisAgent`)
- Performs cross-source synthesis across multiple dimensions.
- Interfaces with the modular **Deep Insights Framework** (detailed below and open for upcoming expansion).

### 4.5 Report Synthesis Agent (`ReportSynthesizerAgent`)
- Formats findings into intuitive, high-impact deliverables:
  - Executive TL;DR & key takeaways.
  - Interactive multi-perspective breakdown with direct source citations.
  - Structured JSON schema payloads for client rendering and downstream feeds.

---

## 5. Deep Insights Framework *(Foundational Blueprint)*

> *Note: This section establishes the extensible foundation. Specific analytical modules and proprietary scoring algorithms will be expanded in upcoming discussions.*

The analysis engine is architected as a pluggable pipeline capable of generating multi-layered intelligence:

```mermaid
graph LR
    Articles[Processed Articles] --> D1[Consensus & Discrepancy]
    Articles --> D2[Perspective & Framing Analysis]
    Articles --> D3[Chronological Timeline]
    Articles --> D4[Stakeholder & Impact Matrix]
    Articles --> D5[Custom Insights Modules<br/><i>(Discussion Pending)</i>]
    
    D1 & D2 & D3 & D4 & D5 --> UnifiedInsight[Comprehensive Intelligence Report]
```

### Potential Deep Insight Dimensions:
1. **Consensus vs. Divergence**:
   - What facts are universally confirmed by all reporting outlets?
   - Where do sources diverge or present conflicting numbers, timelines, or causes?
2. **Editorial Framing & Tone**:
   - How do different publications frame the same event (e.g., economic impact vs. human interest vs. political accountability)?
   - Identification of emotionally charged language and editorial spin.
3. **Timeline & Narrative Evolution**:
   - Chronological sequencing of how the story unfolded from first alert to latest developments.
4. **Stakeholder & Actor Mapping**:
   - Key entities involved, their public positions, and conflicting interests.
5. **Impact Forecasting & Unanswered Questions**:
   - What questions remain unaddressed by current media coverage?
   - Near-term implications for industries, markets, or communities.

---

## 6. Technology Stack & Implementation Plan

### 6.1 Gen AI & Agentic Layer
- **Google Agent Development Kit (ADK)**: Python runtime for agent definition, state machines, tools, and execution loop.
- **Google Gemini (Gemini 1.5 Pro / Flash)**:
  - Gemini Flash: High-speed ingestion, filtering, and initial extraction.
  - Gemini Pro: In-depth cross-source reasoning, nuanced semantic comparison, and final synthesis.

### 6.2 Data & Retrieval Layer
- **Search & News Gathering**: News search APIs (e.g., Google Custom Search / News APIs), RSS feed parsers, headless content parsers (e.g., `trafilatura` / `newspaper3k` / `BeautifulSoup`).
- **Data Persistence**: Cloud Firestore for persistent caching, historical analyses, and real-time frontend subscriptions.

### 6.3 Deployment & Infrastructure (GCP)
- **Backend Service**: Containerized Python ADK service deployed on **Google Cloud Run**.
- **Frontend / Delivery**: Web app hosted on **Firebase App Hosting** / **Firebase Hosting** with reactive updates.
- **Observability**: Cloud Logging and Monitoring for agent telemetry and token tracking.

---

## 7. Next Discussion Points & Roadmap

The following design decisions are slated for upcoming collaboration:
- [ ] **Custom Insight Definitions**: Finalize the specific deep insights, metrics, and intelligence outputs to prioritize.
- [ ] **Data Sources & API Integrations**: Select specific news APIs, search backends, and scraping fallbacks.
- [ ] **User Experience & Interaction**: Design the input flow (topic prompt vs. URL input) and visualization layout (web dashboard vs. chat companion).
- [ ] **ADK Agent Architecture Configuration**: Define concrete agent tools, schemas, and memory strategies in accordance with `docs/google-adk/`.
