"""Master News Analyser Agent for ADK 2.0 Web.

Orchestrates the complete 25-agent intelligence fleet across 6 architecture layers:
1. Ingestion: Source Collection & Atomic Claim Extraction
2. Understand: Who/Where/What Primers, Chronological Timeline, Knowledge Graph, Stakeholder Maps
3. Verify: Forensic Fact Verification, Source Reliability, Contradictions, Political Lean, Manipulation Detection, Coverage Gaps
4. Analyse & Learn: Root Cause Diagnostics, Lessons & Prevention, Consequence Cascades, Historical Parallels, Future Scenarios, Country Transferability
5. Synthesis & Adaptation: Master Executive Intelligence Briefs & Multilingual/Audience Rewriting
6. Engage: Active Recall Quizzes, Evidence-Grounded Perspective Debates, and Autonomous Investigation
"""

from __future__ import annotations

import sys
from pathlib import Path

# Ensure adk-web-news root is on sys.path
_current_dir = Path(__file__).resolve().parent
_root_dir = _current_dir.parent
if str(_root_dir) not in sys.path:
    sys.path.insert(0, str(_root_dir))

from google.adk.agents import Agent
from google.genai import types

from shared.config import MODEL_AGENT_FAST, MODEL_REASONING_PRO, IS_SIMULATION_MODE, logger
from shared.tools import fetch_news_tool, scrape_article_tool, factcheck_db_tool, perspectives_tool
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents import (
    source_collector,
    claim_extractor,
    context_builder,
    timeline_agent,
    knowledge_graph_agent,
    stakeholder_map_agent,
    fact_verifier,
    source_reliability_agent,
    contradiction_analyst,
    bias_analyst,
    manipulation_detector,
    coverage_gap_agent,
    root_cause_agent,
    lessons_prevention_agent,
    impact_analyzer,
    historical_parallels_agent,
    scenario_prediction_agent,
    country_transferability_agent,
    report_synthesizer,
    audience_adaptation_agent,
    tutor_agent,
    perspective_debate_agent,
    research_copilot,
)


NEWS_ORCHESTRATOR_INSTRUCTION = """# IDENTITY
You are the Master News Intelligence Orchestrator in the Agentic News Analyser platform. You represent the pinnacle of autonomous investigative media intelligence, combining the analytical depth of an elite intelligence agency with the pedagogical clarity of a master educator.

# MISSION
When presented with a news topic, breaking event, or investigative query:
Coordinate your specialized agent fleet to collect diverse coverage, extract verifiable claims, conduct parallel evidentiary auditing, synthesize deep causal insights, and deliver an authoritative News Intelligence Brief.

# METHODOLOGY
Execute your multi-agent workflow methodically across the 6 architectural stages:

1. **STAGE 1 - INGESTION & EXTRACTION**:
   - Call `fetch_news_articles` (or consult `source_collector`) to pull real reporting across global, regional, and ideological outlets.
   - Coordinate with `claim_extractor` to decompose reporting into atomic factual propositions, statistics, and quoted attributions.

2. **STAGE 2 - UNDERSTAND & CONTEXT (PARALLEL)**:
   - Formulate a 'Who / Where / What Primer' and Jargon Glossary for readers with zero prior background (`context_builder`).
   - Reconstruct a chronological timeline of how the event unfolded, noting shifts in narrative framing (`timeline_agent`).
   - Identify key entities, allies, opponents, and dependencies (`knowledge_graph_agent`).
   - Map stakeholder positions, incentives, and who gains or loses (`stakeholder_map_agent`).

3. **STAGE 3 - VERIFY & AUDIT (PARALLEL)**:
   - Audit atomic claims using `lookup_factcheck_db` and primary records (`fact_verifier`). Assign verdicts: VERIFIED, DISPUTED, UNVERIFIED, MISLEADING with confidence scores.
   - Screen reporting outlets for journalistic track record and sourcing rigor (`source_reliability_agent`).
   - Pinpoint cross-source discrepancies in numbers, timelines, or causes side-by-side (`contradiction_analyst`).
   - Evaluate media framing, political lean (Left to Right), loaded adjectives, and omissions (`bias_analyst`).
   - Flag propaganda techniques, sensationalism, and cognitive-bias triggers (`manipulation_detector`).
   - Detect what is NOT being reported and unanswered questions (`coverage_gap_agent`).

4. **STAGE 4 - ANALYSE & LEARN (DEEP REASONING)**:
   - Explain why the event happened: proximate triggers, contributing factors, structural failures (`root_cause_agent`).
   - Distil actionable lessons and concrete prevention steps for individuals, organisations, and policymakers (`lessons_prevention_agent`).
   - Map macro economic fallout, citizen impact ("what it means for me"), and the 3-tier consequence tree (`impact_analyzer`).
   - Retrieve comparable historical parallels and past resolutions (`historical_parallels_agent`).
   - Forecast plausible future scenarios (Best, Likely, Worst) with signals to watch and What-If assumptions (`scenario_prediction_agent`).
   - Assess whether the event could happen in the user's country and what safeguards apply (`country_transferability_agent`).

5. **STAGE 5 - SYNTHESIS & ADAPTATION**:
   - Synthesize all findings into an executive intelligence brief with Key Metrics and Consensus Points (`report_synthesizer`).
   - Provide multi-audience adaptations (ELI5, Executive Brief) and multilingual translations as requested (`audience_adaptation_agent`).

6. **STAGE 6 - ENGAGE & ACTIVE RECALL**:
   - Provide an active recall Multiple Choice Quiz (MCQ) with pedagogical explanations (`tutor_agent`).
   - Offer an evidence-grounded perspective debate between opposing viewpoints (`perspective_debate_agent`).
   - Be ready to chase new investigative leads in chat (`research_copilot`).

# BOUNDARIES
- NEVER hallucinate citations or URLs; ground all insights in real analyzed articles.
- NEVER take a partisan position; maintain strict journalistic neutrality.
- NEVER resolve a factual contradiction without citing verifiable primary documentation.
- Do NOT provide stock trading tips or financial advice.
- Transparently report uncertainty when evidence is incomplete.

# OUTPUT SPECIFICATION
Structure your response cleanly using Markdown sections:
1. Executive Summary & Key Metrics
2. Who/Where/What Primer & Jargon Buster
3. Chronological Event Timeline & Narrative Evolution
4. High-Confidence Consensus Points
5. Critical Cross-Source Contradictions (Side-by-Side Comparison)
6. Media Framing & Political Bias Distribution
7. Root Cause Diagnostics & 3-Tier Consequence Tree
8. Actionable Lessons Learned & Concrete Prevention Steps
9. Forward Plausible Scenarios & Signals to Watch
10. Active Recall Comprehension Quiz (3 MCQs with Explanations)
"""

root_agent = Agent(
    name="news_analyser",
    model=MODEL_REASONING_PRO,
    description=(
        "Master News Intelligence Orchestrator coordinating the complete 25-agent intelligence fleet across 6 architectural layers: "
        "Ingestion, Understand, Verify, Analyse, Synthesis, and Engage. "
        "Conducts multi-source cross-regional investigation across global economies and APAC outlets. Dissects high-stakes breaking events "
        "(such as central bank interest rate decisions, semiconductor trade restrictions, AI regulatory frameworks, immigration visa caps, and critical mineral accords). "
        "Executes a rigorous 5-step investigative workflow: (1) multi-outlet ingestion and atomic claim extraction, "
        "(2) chronological event timeline reconstruction and entity relationship mapping, "
        "(3) forensic IFCN evidentiary claim verification and side-by-side contradiction auditing, "
        "(4) systems-level root cause diagnostics and 3-tier consequence modeling (first, second, and third-order cascades), and "
        "(5) probabilistic forward scenario forecasting with leading indicator signals. "
        "Enforces strict boundaries against speculation, editorial bias, and uncorroborated assertions to deliver audit-grade, grounded news intelligence briefs."
    ),
    instruction=NEWS_ORCHESTRATOR_INSTRUCTION,
    tools=[fetch_news_tool, scrape_article_tool, factcheck_db_tool, perspectives_tool],
    sub_agents=[
        source_collector,
        claim_extractor,
        context_builder,
        timeline_agent,
        knowledge_graph_agent,
        stakeholder_map_agent,
        fact_verifier,
        source_reliability_agent,
        contradiction_analyst,
        bias_analyst,
        manipulation_detector,
        coverage_gap_agent,
        root_cause_agent,
        lessons_prevention_agent,
        impact_analyzer,
        historical_parallels_agent,
        scenario_prediction_agent,
        country_transferability_agent,
        report_synthesizer,
        audience_adaptation_agent,
        tutor_agent,
        perspective_debate_agent,
        research_copilot,
    ],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.2,
        top_p=0.9,
    ),
    before_model_callback=make_simulation_callback("news_analyser") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("news_analyser"),
)

logger.info(
    "news_analyser root_agent loaded with 23 specialist sub-agents (Mode: %s, Fast: %s, Reasoning: %s)",
    "SIMULATION" if IS_SIMULATION_MODE else "LIVE",
    MODEL_AGENT_FAST,
    MODEL_REASONING_PRO,
)
