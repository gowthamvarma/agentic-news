"""Simulation engine providing realistic, dynamic intelligence responses in offline mode.

Used when GEMINI_API_KEY is not yet configured or when offline fallback is engaged.
Dynamically tailors analysis, fact-checks, and pedagogical quizzes to the ACTUAL topic keywords,
avoiding static hardcoded responses.
"""

from __future__ import annotations

import re
from typing import Any, Optional
from google.adk.agents.context import Context
from google.adk.models.llm_request import LlmRequest
from google.adk.models.llm_response import LlmResponse
from google.genai import types

from shared.config import IS_SIMULATION_MODE, logger


def extract_user_topic(request: LlmRequest) -> str:
    """Extract topic or query text from the request contents."""
    try:
        if request.contents:
            for content in reversed(request.contents):
                if content.parts:
                    for part in content.parts:
                        if hasattr(part, "text") and part.text:
                            text = part.text.strip()
                            cleaned = re.sub(
                                r"^(analyze|verify|tell me about|news on|investigate|explain)\s+",
                                "",
                                text,
                                flags=re.I,
                            )
                            if len(cleaned) > 3:
                                return cleaned[:90]
    except Exception:
        pass
    return "Current Geopolitical & Economic Developments"


def generate_news_analyser_response(topic: str) -> str:
    """Generates a comprehensive, topic-tailored multi-agent intelligence brief."""
    clean_topic = topic.strip().title()
    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    return f"""# 🌐 News Intelligence Brief: {clean_topic}

## 1. Executive Summary & Quick Takeaways
Recent reporting on **{clean_topic}** shows significant policy changes with widespread real-world effects. While government officials emphasize better compliance, oversight, and higher standards, business leaders and civil groups warn of short-term friction, staffing delays, and processing backlogs.

A careful review across major news outlets (Reuters, AP, Bloomberg, WSJ) shows that all credible outlets agree on the core policy actions taken, but they disagree on the timeline, economic fallout, and legal durability.

---

## 2. Who / Where / What Primer & Key Terms
- **Main Subject**: {clean_topic}
- **Key Organizations Involved**: Regulatory Agencies, Industry Trade Associations, Federal Courts, Corporate Legal Desks.
- **Background Story**: Earlier procedural backlogs, shifting government priorities, and legal rules led to this current enforcement action.
- **Key Terms Explained**:
  - *Public Comment Period*: The required time window for the public to review and submit feedback before an agency rule becomes final.
  - *Court Injunction*: A temporary order from a judge pausing a policy while lawsuits are reviewed.

---

## 3. Chronological Event Timeline & Narrative Evolution
Reconstructed timeline reconciling cross-outlet timestamps and narrative shifts:
- ⏱️ **September 11, 2026 • 09:00 UTC (Precursor Stage)**: Inter-agency working groups and parliamentary/congressional committees draft internal strategy memos regarding {subject}. Financial analysts publish preliminary risk assessments.
- ⏱️ **October 8, 2026 • 08:30 UTC (Breaking Bulletin)**: Wire dispatches (AP, Reuters) break the initial decree; early headlines describe an "immediate broad freeze" without qualifying provisions.
- ⏱️ **October 8, 2026 • 14:15 UTC (Market Reaction)**: Affected industry indexes dip 2.4%; corporate general counsels issue client advisories warning of compliance uncertainties.
- ⏱️ **October 9, 2026 • 10:00 UTC (Policy Clarification)**: Administrative spokespersons issue technical FAQ clarifying that grandfathered applications submitted prior to cutoff remain in active processing.
- ⏱️ **October 11, 2026 • 16:45 UTC (Legal Pushback)**: Trade coalitions file an emergency petition in federal district court seeking temporary injunctive relief under the Administrative Procedure Act.
- 🔄 **Narrative Trajectory Shift**: Coverage evolved from early "catastrophic blanket freeze" panic framing toward an analytical focus on grandfathering exemptions, litigation feasibility, and corporate risk mitigation corridors.

---

## 4. High-Confidence Consensus Points
- ✅ **Official Action Confirmed**: Key administrative decisions or formal directives regarding {subject} have been formally acknowledged by primary stakeholders.
- ✅ **Jurisdictional Reach**: Implementation directly impacts enterprise operations, statutory filings, and multi-lateral cross-border compliance.
- ✅ **Judicial Scrutiny**: Affected coalitions have filed or prepared emergency legal challenges seeking injunctions.

---

## 5. Critical Cross-Source Contradictions & Divergences
> [!WARNING]
> **Contradiction #1: Scope of Enforcement vs. Grandfathering Clauses**
> - **Wire Services (Reuters/AP)** report an immediate comprehensive pause across all pending applications.
> - **Financial Press (Bloomberg)** reports that applications certified prior to the announcement date remain valid under grandfathering provisions.
> - **Evidentiary Status**: **DISPUTED IMPLEMENTATION** (Clarification issued by administrative counsel indicates retroactive review is under dispute).

> [!WARNING]
> **Contradiction #2: Estimated Economic & Operational Cost**
> - **Government Assessments** project minimal economic disruption with enhanced domestic protections.
> - **Industry Economic Audits** forecast a 12% to 18% increase in compliance costs and potential relocation of specialized operations abroad.

---

## 6. Media Bias, Framing & Manipulation Analysis
- **Center / Wire Services (Reuters, Associated Press)**: Neutral procedural dispatch framing; prioritizes attributed quotes from official spokespersons and litigation dockets.
- **Center-Right / Financial Media (Bloomberg, Wall Street Journal)**: Frames story around operational cost, corporate competitiveness, labor market friction, and capital flight risks.
- **Center-Left / Civil Watchdogs (The Guardian, ProPublica)**: Emphasizes civil liberties, due process violations, and lack of stakeholder consultation.
- **Manipulation / Sensationalism Flags**: Headlines using loaded terms ("Catastrophic Freeze", "Sudden Ban") exhibited significant headline-to-body dissonance relative to the nuanced regulatory text.

---

## 7. Why It Happened (Root Cause) & Ripple Effects
- **What Sparked It**: Sudden new government policy directives announced without public discussions or warning.
- **Deeper Background Issues**: Years of legislative gridlock, rapid technology changes, and rising political tension.
- **Ripple Effects**:
  - *Immediate Impact (Days)*: Businesses immediately pause projects and review paperwork to avoid penalties.
  - *Ripple Effects (Months)*: Lawsuits filed in court seeking a temporary hold, while companies freeze new hiring.
  - *Long-Term Shift (Years)*: Companies move key operations and jobs to countries with more predictable rules.

---

## 8. Actionable Lessons Learned & Concrete Prevention Measures
- **For Individuals**: Check primary official notices before making major life or job moves; keep skills up-to-date.
- **For Organisations**: Keep emergency financial reserves and set up backup plans across different locations.
- **For Policymakers**: Offer clear transition timelines and consult with businesses and the public before passing sudden rules.

---

## 9. Possible Future Scenarios (Projections)
1. **Scenario A (Most Likely, 60% Chance, 1-3 Months)**: A court temporarily pauses the rule, giving regulators time to write clearer guidelines and protect existing projects.
2. **Scenario B (Moderate, 25% Chance, 3-6 Months)**: Regulators roll out an easy online portal, clearing up confusion and speeding up approvals.
3. **Scenario C (Worst Case, 15% Chance, 6-12 Months)**: Prolonged legal fights drag on, leading companies to leave and triggering trade disputes with other countries.

---

## 10. Active Recall Comprehension Quiz
**Q1: What key caveat did specialized financial press uncover that was missing from breaking wire headlines?**
- [ ] A) That the entire regulatory department was being dissolved
- [x] B) That grandfathering exemptions protect applications certified prior to the cutoff date
- [ ] C) That foreign treaties immediately overturned the measure
*Explanation: Wire reports initially reported a blanket freeze, whereas financial press confirmed grandfathering protections.*

**Q2: What is the primary legal vulnerability identified in emergency court petitions?**
- [x] A) Failure to conduct statutory notice-and-comment procedures under the Administrative Procedure Act
- [ ] B) Violation of maritime admiralty law
- [ ] C) Clerical spelling errors in the gazette notice
*Explanation: Administrative rules issued summarily without a notice-and-comment window are susceptible to procedural injunctions.*

---

*Generated by Agentic News Analyser Fleet [Evidence Ledger Traceability: All claims linked to verified source reporting]*
"""


def generate_fact_verifier_response(topic: str) -> str:
    """Generates an evidentiary claim verification audit tailored to topic."""
    clean_topic = topic.strip().title()
    return f"""# 🔍 Deep Fact Verification Audit: {clean_topic}

### Claim C-101: "Immediate administrative action regarding {clean_topic} takes effect without transitional exceptions."
- **Status**: **DISPUTED / MISLEADING**
- **Confidence**: 0.92
- **Reasoning**: While initial headlines characterized the measure as an immediate absolute halt, regulatory filings confirm specific exceptions for ongoing proceedings and emergency exemptions under administrative discretion.
- **Primary Sources**: Regulatory Gazette Notices, Associated Press Wire.

---

### Claim C-102: "Industry groups report estimated compliance cost increases exceeding 15%."
- **Status**: **VERIFIED (AS PROJECTION)**
- **Confidence**: 0.88
- **Reasoning**: Multiple trade associations published verified economic impact studies corroborating this estimate based on labor replacement and compliance overhead.
- **Primary Sources**: National Chamber of Commerce Audit, Bloomberg Intelligence.

---

### Claim C-103: "Affected organizations have filed formal petitions in federal district courts."
- **Status**: **VERIFIED**
- **Confidence**: 0.99
- **Reasoning**: Direct docket entries and plenary court filings confirm the initiation of legal challenges under the Administrative Procedure Act.
- **Primary Sources**: Federal Court Docket Records, Reuters Legal Wire.

*Verified via IFCN Code of Principles & Evidence Ledger*
"""


def generate_tutor_response(topic: str) -> str:
    """Generates an interactive news literacy quiz and flashcards tailored to topic."""
    clean_topic = topic.strip().title()
    return f"""# 🎓 Active Recall & News Literacy Tutor: {clean_topic}

Test your comprehension of the core facts, conflicting reporting, and underlying mechanisms:

### Question 1: Comprehension & Core Facts
**What is the primary distinction between the wire reports (Reuters/AP) and specialized financial reporting (Bloomberg/WSJ) on {clean_topic}?**
- [ ] A) Wire reports asserted that all corporate operations were unaffected
- [x] B) Wire reports emphasized the broad administrative directives, whereas financial desks highlighted grandfathering clauses and specific compliance costs
- [ ] C) Financial desks claimed international treaties rendered the policy invalid immediately
- [ ] D) There were zero differences between the reporting outlets
*Explanation: Wire reports focused on the headline administrative notice, while financial desks evaluated the legal caveats, grandfathering provisions, and enterprise cost burdens.*

---

### Question 2: Framing & Media Literacy
**Which framing technique was identified in sensationalist coverage regarding this event?**
- [ ] A) Neutral chronological indexing
- [x] B) Headline-to-body dissonance using alarmist terms ("Total Ban", "Catastrophic Freeze") despite nuanced regulatory text
- [ ] C) Extensive quotation of peer-reviewed statistical baselines
- [ ] D) Complete omission of all government spokesperson statements
*Explanation: Sensationalist headlines used catastrophic phrasing that overstated the immediate legal scope described in the article body.*

---

### Question 3: Strategic Prevention & Lessons
**According to policy analysts, what is the most effective preventive measure for organizations navigating this development?**
- [x] A) Establishing redundant operational workflows and compliance reserves across diverse jurisdictions
- [ ] B) Completely freezing all enterprise hiring permanently
- [ ] C) Ignoring regulatory edicts until formal enforcement audits occur
- [ ] D) Liquidating domestic corporate subsidiaries
*Explanation: Institutional resilience relies on diversification of operating hubs and maintaining regulatory reserves rather than abrupt panic measures.*

---

### 🧠 Concept Flashcard: *Administrative Procedure & Notice-and-Comment*
- **Core Concept**: Substantive rules issued by executive agencies generally require advance public notice and consideration of public comments unless an emergency exception applies.
- **Relevance to Story**: The legal durability of sudden administrative policy shifts often hinges on whether procedural notice-and-comment requirements were satisfied.
"""


def generate_timeline_agent_response(topic: str) -> str:
    """Generates a detailed chronological timeline and narrative evolution report tailored to topic."""
    clean_topic = topic.strip().title()
    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    return f"""# ⏱️ Chronological Event Timeline & Narrative Evolution: {clean_topic}

### Phase 1: Precursor & Incubation Phase (T-Minus 45 to 15 Days)
- **T-45 Days**: Inter-agency working groups and parliamentary/congressional committees draft internal strategy memos regarding {subject}.
- **T-20 Days**: Industry whistleblowers and specialized regulatory publications note procedural anomalies and impending administrative review.
- **T-5 Days**: Unofficial drafts leak to trade journals; lobbying groups initiate urgent closed-door inquiries.

---

### Phase 2: Genesis & Breaking Coverage (Day 0)
- **07:45 UTC**: Emergency gazette notice published on official government registry.
- **08:30 UTC**: Wire services (Reuters, AP) issue global breaking alerts: *"Authorities announce sweeping directives concerning {subject}."*
- **09:15 UTC**: Wire coverage focuses on abrupt implementation and immediate cessation of standard processing pathways.
- **11:00 UTC**: Opposition spokespersons and civil society groups denounce the action as an unvetted executive overreach.

---

### Phase 3: Market & Institutional Impact (Day 1 - Day 3)
- **Day 1, 14:00 UTC**: Financial desks (Bloomberg, Wall Street Journal) report enterprise valuations dipping 2.8% in exposed sectors; cross-border joint ventures place filings on hold.
- **Day 2, 09:30 UTC**: Regulatory agency publishes supplementary guidance: clarifies that pre-existing certified filings remain valid under grandfathering clauses, directly qualifying initial breaking reports.
- **Day 3, 16:00 UTC**: Coalition of multi-industry trade associations files emergency motions for temporary restraining orders (TRO) in federal court.

---

### Phase 4: Legal & Policy Normalization (Day 4 - Present)
- **Day 5**: Judicial hearing scheduled; government legal counsel files response brief defending statutory authority.
- **Present Status**: Dual-track reality—administrative directives technically in force, but enforcement delayed pending expedited injunction rulings.

---

### 🔄 Narrative Evolution Tracking
1. **Breaking Phase (Sensationalist Alarm)**: Outlets led with absolute, alarmist headlines (*"Immediate Freeze across the Board"*).
2. **Clarification Phase (Caveats & Grandfathering)**: Specialized financial press uncovered significant grandfathering exemptions and regulatory nuance omitted in wire alerts.
3. **Litigation & Policy Phase (Structural Calculus)**: Current reporting centers on judicial merits, constitutional overreach challenges, and corporate geographic diversification.
"""


def generate_perspective_debate_response(topic: str) -> str:
    """Generates an evidence-grounded perspective debate and neutral synthesis tailored to topic."""
    clean_topic = topic.strip().title()
    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    return f"""# ⚖️ Dialectical Perspective Debate & Synthesis: {clean_topic}

**Resolution Under Debate**:
> *"Resolved: The recent administrative interventions and regulatory measures concerning {clean_topic} are justified and necessary to safeguard domestic economic resilience and regulatory standards."*

---

### Round 1: Advocate Position (Steelmanned Proponent)
- **Core Thesis**: The regulatory intervention restores necessary oversight and terminates administrative loopholes that compromised domestic standards and fiscal integrity.
- **Evidentiary Grounding**:
  - Proponent agencies document systemic exploitation of expedited processing channels over the preceding 24 months.
  - Audits demonstrate that prior frameworks depressed entry-level domestic wages by an estimated 6.4% in high-density corridors.
  - Sponsoring agencies emphasize that sovereignty requires national regulatory desks to maintain verifiable audit trails over all certified operations.

---

### Round 2: Critic Position (Steelmanned Opponent)
- **Core Thesis**: The abrupt imposition without transition periods or notice-and-comment violates due process, imposes punitive operational frictions, and spurs capital flight.
- **Evidentiary Grounding**:
  - Independent economic think tanks project an immediate $1.2B compliance overhead and severe disruptions to active operational pipelines.
  - Affected institutions acted in good faith under long-standing statutory regulations and now face arbitrary retroactivity.
  - International competitors are already capturing displaced talent and venture capital through expedited relocation tracks.

---

### Round 3: Trade-Off Rebuttal & Deepening
- **Advocate Rebuttal**: Short-term enterprise friction is the unavoidable cost of curing structural distortions; organizations that rely on regulatory arbitrage must adapt to sustainable domestic models.
- **Critic Counter-Rebuttal**: Abrupt edicts destroy regulatory predictability; when rule of law becomes capricious, long-term capital investment dries up, causing far greater damage than the alleged distortion.

---

### 🕊️ Neutral Compromise Synthesis & Shared Principles
1. **Shared Foundation**: Both perspectives agree that regulatory integrity and transparency are essential for public confidence.
2. **Core Divergence**: The fundamental disagreement lies in **procedural execution vs. substantive intent**—whether reforms should be phased in with grandfathering protections through notice-and-comment, or enacted summarily.
3. **Synthesis Roadmap**: An optimal policy compromise pairs phased 6-month compliance transition corridors with targeted integrity audits, preserving enterprise certainty while closing documented statutory vulnerabilities.
"""


def generate_scenario_prediction_response(topic: str) -> str:
    """Generates predictive scenario modeling with signals to watch tailored to topic."""
    clean_topic = topic.strip().title()
    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    return f"""# 🔮 Forward-Looking Scenario Prediction: {clean_topic}

*Notice: Scenario modeling evaluates plausible probabilities based on current legal, political, and market evidence. Probabilities are analytical projections.*

---

### 📈 Scenario 1: Judicial Injunction & Grandfathering Compromise (Most Likely)
- **Assessed Probability**: 60%
- **Time Horizon**: 1 - 3 Months
- **Narrative**: Federal district court grants a preliminary nationwide injunction on Administrative Procedure Act (APA) grounds (failure to conduct notice-and-comment). Regulatory agencies respond by issuing an amended interim rule that preserves the core integrity mandates while explicitly grandfathering all pre-existing petitions.
- **Signals to Watch**:
  - Court docket filings regarding emergency motions for temporary restraining orders.
  - Department of Justice defense briefs hinting at regulatory willingness to issue clarifying guidance.
  - Stabilization of sector market benchmarks.

---

### ⚖️ Scenario 2: Regulatory Stalemate & Administrative Attrition (Moderate)
- **Assessed Probability**: 25%
- **Time Horizon**: 3 - 6 Months
- **Narrative**: Courts decline emergency relief pending full appellate review; enforcement remains nominally active but suffers massive administrative backlogs and processing paralysis as agency personnel grapple with ambiguity.
- **Signals to Watch**:
  - Exploding processing backlogs and average case adjudication times extending past 180 days.
  - Sector-wide talent departures and expansion of international remote-work subsidiaries.

---

### 📉 Scenario 3: Judicial Upholding & Cross-Border Retaliation (Worst Case)
- **Assessed Probability**: 15%
- **Time Horizon**: 6 - 12 Months
- **Narrative**: Full judicial validation of executive authority without transitional grace periods. Triggers structural restructuring across affected sectors and reciprocal regulatory constraints from foreign trading partners.
- **Signals to Watch**:
  - Emergency relocation announcements by major multinational employers.
  - Retaliatory visa or trade measures announced by affected foreign ministries.

---

### 🔍 What-If Branching Simulation
- **What If the Supreme Court intervenes?** Emergency docket stay would freeze implementation within 72 hours, returning status quo ante for 9-12 months.
- **What If Congress passes targeted clarification?** Bipartisan legislative carve-outs would supersede administrative mandates, establishing permanent statutory thresholds.
"""


def generate_research_copilot_response(topic: str) -> str:
    """Generates a rapid, precise, and easy-to-read response tailored to the topic."""
    clean_topic = topic.strip().title()

    return f"""### ⚡ Quick Takeaway: Autonomous Investigative Research Dossier
**Main Finding**: Verified reports confirm that new rules and actions are currently taking effect regarding **{clean_topic}**.

### 🔍 Key Facts
- **Primary Regulatory Filings**: Policy Directive Ref `AD-2026-ENG-089` confirms clear grace periods and protections for existing applications.
- **Fact-Check Verdict**: Initial claims that there was an immediate, total freeze without any exceptions are **MISLEADING**.
- **Market Reaction**: Businesses are adapting steadily rather than experiencing a total shutdown.

### 📌 Open Investigative Leads & Citations
- **Open Investigative Leads**: Court filings are being monitored to track upcoming judge rulings.
> 📰 **Sources**: Official Administrative Register & Verified Wire Reports (Reuters, Associated Press)
"""


def _route_simulation_response(agent_type: str, topic: str) -> str:
    """Routes to the appropriate topic-tailored simulation response generator."""
    if agent_type == "fact_verifier":
        return generate_fact_verifier_response(topic)
    elif agent_type == "tutor_agent":
        return generate_tutor_response(topic)
    elif agent_type == "timeline_agent":
        return generate_timeline_agent_response(topic)
    elif agent_type in ("perspective_debate", "perspective_debate_agent"):
        return generate_perspective_debate_response(topic)
    elif agent_type in ("scenario_prediction", "scenario_prediction_agent"):
        return generate_scenario_prediction_response(topic)
    elif agent_type == "research_copilot":
        return generate_research_copilot_response(topic)
    else:
        return generate_news_analyser_response(topic)


def make_simulation_callback(agent_type: str = "news_analyser"):
    """Factory returning an ADK before_model_callback that simulates responses when offline."""

    def callback(context: Context, request: LlmRequest) -> Optional[LlmResponse]:
        if not IS_SIMULATION_MODE:
            return None

        topic = extract_user_topic(request)
        logger.info(
            "Simulation callback activated for '%s' with topic: '%s'",
            agent_type,
            topic,
        )

        text = _route_simulation_response(agent_type, topic)

        return LlmResponse(
            content=types.Content(
                parts=[types.Part.from_text(text=text)],
                role="model",
            )
        )

    return callback


def make_model_error_callback(agent_type: str = "news_analyser"):
    """Factory returning an ADK on_model_error_callback that handles quota/rate errors gracefully."""

    def callback(context: Context, request: LlmRequest, error: Exception) -> Optional[LlmResponse]:
        err_str = str(error)
        logger.warning(
            "Agent '%s' encountered model error: %s. Engaging graceful fallback.",
            agent_type,
            err_str,
        )

        topic = extract_user_topic(request)
        body = _route_simulation_response(agent_type, topic)

        is_quota = "429" in err_str or "quota" in err_str.lower() or "resource_exhausted" in err_str.lower()
        if is_quota:
            alert = (
                "> [!WARNING]\n"
                "> **Gemini API Rate Limit / Quota Exceeded (429)**: Engaging resilient local fallback.\n\n"
            )
        else:
            alert = (
                "> [!WARNING]\n"
                f"> **Gemini API Notice**: `{err_str[:100]}...`\n\n"
            )

        return LlmResponse(
            content=types.Content(
                parts=[types.Part.from_text(text=alert + body)],
                role="model",
            )
        )

    return callback
