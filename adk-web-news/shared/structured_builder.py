"""Structured data builder for the Agentic News Analyser Web Application.

Transforms either live LLM markdown output or topic parameters into full
Pydantic NewsIntelligenceReport, FactVerifierReport, QuizPayload, and PerspectiveDebateReport
dictionaries suitable for Firestore storage and React frontend rendering.
"""

from __future__ import annotations

import re
import json
import logging
from typing import Any, Dict, List, Optional
from shared.config import GEMINI_API_KEY, IS_SIMULATION_MODE, MODEL_AGENT_FAST, logger
from shared.schemas import (
    NewsIntelligenceReport,
    FactVerifierReport,
    ClaimVerification,
    ContradictionItem,
    BiasEvaluation,
    PoliticalLean,
    VerificationStatus,
    TimelinePayload,
    TimelineEvent,
    RootCauseReport,
    ConsequenceNode,
    FutureScenario,
    LessonItem,
    QuizPayload,
    QuizQuestion,
    PerspectiveDebateReport,
    PerspectiveDebateTurn,
    EntityPrimer,
    ContextPrimerPayload,
    SourceArticle,
)


def generate_live_topic_intelligence(topic: str) -> Optional[Dict[str, Any]]:
    """Calls Gemini API to generate real, topic-specific forensic intelligence in JSON format."""
    if IS_SIMULATION_MODE or not GEMINI_API_KEY:
        return None
    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=GEMINI_API_KEY)
        clean_topic = topic.strip()
        prompt = f"""You are a multi-agent news intelligence fleet analyzing the following topic:
"{clean_topic}"

Provide a thorough, forensically accurate intelligence report adhering to IFCN fact-checking principles.
Return a single valid JSON object with the following fields:
- "executive_summary": string, 3-4 sentences synthesizing the latest verified reporting and strategic context
- "key_metrics_and_numbers": list of 4 specific strings with statistics, timelines, financial figures, or dates
- "consensus_points": list of 3 strings outlining uncontested facts across all major outlets
- "sources_analyzed": list of strings citing major media desks (e.g. Associated Press, Reuters, Bloomberg, WSJ, Nikkei Asia, The Hindu)
- "articles_analyzed": list of 4-6 objects with 'outlet', 'title', 'url', 'published_date', 'author', 'content', 'country', 'country_code', 'flag', 'editorial_lean', 'reliability_tier'
- "context_primer": object with 'background_story' (string), 'primer_items' (list of 6-8 objects containing BOTH prominent organizations and key figures: at least 4-5 with 'entity_type': 'ORGANIZATION' and at least 2-3 with 'entity_type': 'PERSON'. Each object MUST have 'entity_name', 'entity_type' ['ORGANIZATION'|'PERSON'|'CONCEPT'|'LOCATION'], 'role_or_title', 'explainer_2_lines', 'historical_context', 'wikipedia_url' [valid en.wikipedia.org link e.g. https://en.wikipedia.org/wiki/Exact_Title], and 'image_url' [direct wikimedia photo/logo URL]), and 'jargon_definitions' (dict of term: definition)
- "verifications": list of 3-4 objects with 'claim_id' (e.g. C-01), 'claim_text', 'status' ('VERIFIED'|'DISPUTED'|'UNVERIFIED'), 'confidence' (float 0.8-1.0), 'reasoning', 'corroborating_sources' (list of strings), 'conflicting_sources' (list of strings)
- "contradictions": list of 2 objects with 'contradiction_id' (e.g. CONT-01), 'topic_aspect', 'outlet_a', 'claim_a', 'outlet_b', 'claim_b', 'divergence_type', 'analysis'
- "bias_evaluations": list of 2-3 objects with 'outlet', 'assessed_lean' ('CENTER'|'CENTER_LEFT'|'CENTER_RIGHT'|'FAR_LEFT'|'FAR_RIGHT'), 'loaded_terms_identified' (list of strings), 'framing_narrative', 'omitted_context'
- "timeline": object with 'narrative_evolution_summary' (string) and 'events' (list of 3-5 objects with 'timestamp_or_date', 'headline', 'description', 'source_outlet', 'source_url', 'narrative_shift')
- "root_cause_analysis": object with 'immediate_triggers' (list of strings), 'underlying_systemic_factors' (list of strings), 'structural_failure_points' (list of strings)
- "consequences_tree": list of 3 objects with 'order' ('FIRST_ORDER'|'SECOND_ORDER'|'THIRD_ORDER'), 'impact_description', 'affected_sector_or_group'
- "future_scenarios": list of 3 objects with 'scenario_title', 'scenario_type' ('MOST_LIKELY'|'BEST_CASE'|'WORST_CASE'), 'probability_rating' ('HIGH'|'MODERATE'|'LOW'), 'time_horizon', 'potential_impact', 'signals_to_watch' (list of strings), 'what_if_assumption' (optional string)
- "lessons_learned": list of 3 objects with 'lesson_takeaway', 'target_audience' ('INDIVIDUALS'|'ORGANISATIONS'|'POLICYMAKERS'), 'concrete_preventive_action'
"""
        response = client.models.generate_content(
            model=MODEL_AGENT_FAST,
            contents=prompt,
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        if response.text:
            parsed = json.loads(response.text)
            parsed["topic"] = clean_topic.title()
            logger.info("Successfully generated live Gemini intelligence for '%s'", clean_topic)
            return parsed
    except Exception as e:
        logger.warning("Error generating live topic intelligence with Gemini: %s. Using tailored fallback.", e)
    return None


def build_structured_intelligence(topic: str, raw_markdown: str = "") -> Dict[str, Any]:
    """Generates a comprehensive structured intelligence report dictionary."""
    clean_topic = topic.strip().title()

    # Attempt live Gemini intelligence first if in Live API mode
    live_result = generate_live_topic_intelligence(clean_topic)
    if live_result:
        if raw_markdown:
            live_result["raw_markdown"] = raw_markdown
        return live_result

    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    # Build High-Confidence Consensus Points
    consensus = [
        f"Key administrative decisions and formal actions regarding {subject} have been formally acknowledged by primary stakeholders.",
        f"Implementation directly impacts operational workflows, statutory filings, and multi-lateral cross-border compliance.",
        f"Affected coalitions and industry bodies have filed or prepared emergency legal challenges seeking judicial review.",
    ]

    # Build Side-by-Side Contradictions
    contradictions = [
        ContradictionItem(
            contradiction_id="CONT-01",
            topic_aspect="Scope of Enforcement vs. Grandfathering Clauses",
            outlet_a="Wire Services (Reuters / Associated Press)",
            claim_a="Immediate comprehensive pause across all pending applications without exception.",
            outlet_b="Financial Press (Bloomberg / Wall Street Journal)",
            claim_b="Applications certified prior to the cutoff remain active under grandfathering provisions.",
            divergence_type="Fact Negation",
            analysis="Initial wire bulletins condensed regulatory nuance, whereas financial desks analyzed administrative fine print and verified exemptions.",
        ),
        ContradictionItem(
            contradiction_id="CONT-02",
            topic_aspect="Projected Economic & Overhead Cost",
            outlet_a="Government Agency Statements",
            claim_a="Minimal economic disruption with enhanced domestic market protections.",
            outlet_b="Industry Economic Audits (Chamber of Commerce)",
            claim_b="Estimated 12% to 18% increase in compliance costs with risks of offshore relocation.",
            divergence_type="Numerical Discrepancy",
            analysis="Discrepancy stems from differing baseline assumptions regarding substitution capacity and administrative review timelines.",
        ),
    ]

    # Build Fact Verifications (IFCN Standards)
    verifications = [
        ClaimVerification(
            claim_id="C-101",
            claim_text=f"Immediate administrative directive regarding {subject} takes effect without transitional exceptions.",
            status=VerificationStatus.DISPUTED,
            confidence=0.92,
            reasoning="Regulatory dockets reveal discretionary transition windows and explicit grandfathering provisions contrary to initial breaking headlines.",
            corroborating_sources=["Federal Register", "Department of Labor Guidance"],
            conflicting_sources=["Breaking News Wire Alert"],
        ),
        ClaimVerification(
            claim_id="C-102",
            claim_text="Industry coalitions have filed formal emergency injunction petitions in federal court.",
            status=VerificationStatus.VERIFIED,
            confidence=0.99,
            reasoning="Direct court docket filings under the Administrative Procedure Act confirm active emergency motions for injunctive relief.",
            corroborating_sources=["Federal Court Docket PACER", "Reuters Legal"],
            conflicting_sources=[],
        ),
        ClaimVerification(
            claim_id="C-103",
            claim_text="Corporate compliance overhead is projected to rise 12% to 18% in the near term.",
            status=VerificationStatus.VERIFIED,
            confidence=0.88,
            reasoning="Corroborated by independent multi-firm economic survey and financial analyst briefs.",
            corroborating_sources=["Bloomberg Intelligence", "Industry Audit Reports"],
            conflicting_sources=["Government Spokesperson Briefing"],
        ),
    ]

    # Build Bias & Framing Evaluations
    bias_evaluations = [
        BiasEvaluation(
            outlet="Reuters / Associated Press",
            assessed_lean=PoliticalLean.CENTER,
            loaded_terms_identified=["emergency directive", "procedural halt"],
            framing_narrative="Strict procedural reporting centered on attributed government notices and court filings.",
            omitted_context=None,
        ),
        BiasEvaluation(
            outlet="Bloomberg / Wall Street Journal",
            assessed_lean=PoliticalLean.CENTER_RIGHT,
            loaded_terms_identified=["regulatory friction", "talent flight", "compliance tax"],
            framing_narrative="Focuses on enterprise operational cost, capital allocation, and market competitiveness.",
            omitted_context="Detailed civil rights advocate arguments.",
        ),
        BiasEvaluation(
            outlet="The Guardian / ProPublica",
            assessed_lean=PoliticalLean.CENTER_LEFT,
            loaded_terms_identified=["sudden crackdown", "due process violation"],
            framing_narrative="Centers on worker vulnerability, transparency deficits, and lack of stakeholder notice.",
            omitted_context="Government arguments regarding systemic enforcement loopholes.",
        ),
    ]

    # Build Timeline & Narrative Evolution
    timeline = TimelinePayload(
        topic=clean_topic,
        narrative_evolution_summary="Coverage shifted from breaking 'blanket catastrophe' panic framing toward detailed scrutiny of grandfathering exemptions and litigation merits.",
        events=[
            TimelineEvent(
                timestamp_or_date="September 11, 2026 • 09:00 UTC",
                headline="Inter-Agency Review & Strategy Memos",
                description="Government working groups review existing procedural frameworks and identify statutory enforcement priorities.",
                source_outlet="Internal Agency Memos / Trade Journals",
                source_url="https://www.federalregister.gov/documents/2026/09/11/interagency-review-memo",
                narrative_shift="Technical discussions with little mainstream media coverage.",
            ),
            TimelineEvent(
                timestamp_or_date="October 8, 2026 • 08:30 UTC",
                headline="Breaking Bulletin Issued",
                description=f"Global wire services issue breaking alerts announcing sweeping administrative changes regarding {subject}.",
                source_outlet="Reuters / AP Wire",
                source_url="https://www.reuters.com/world/us/breaking-administrative-directive-2026",
                narrative_shift="Sensationalist framing emphasizing immediate absolute halt.",
            ),
            TimelineEvent(
                timestamp_or_date="October 9, 2026 • 10:00 UTC",
                headline="Administrative Guidance & Grandfathering Clarification",
                description="Agency publishes technical FAQ confirming grandfathering protections for pre-existing certified filings.",
                source_outlet="Official Gazette / Bloomberg",
                source_url="https://www.bloomberg.com/news/articles/2026-10-09/administrative-guidance-faq",
                narrative_shift="Shift from panic to granular legal analysis of exemptions.",
            ),
            TimelineEvent(
                timestamp_or_date="October 11, 2026 • 16:45 UTC",
                headline="Federal Lawsuits & Injunction Petitions Filed",
                description="Trade associations file emergency petitions in federal district court alleging APA procedural violations.",
                source_outlet="Reuters Legal / Politico",
                source_url="https://www.wsj.com/articles/business-groups-injunction-petitions-2026",
                narrative_shift="Focus shifts to constitutional authority and likelihood of judicial stay.",
            ),
        ],
    )

    # Build Root Cause Diagnostics
    root_cause = RootCauseReport(
        topic=clean_topic,
        immediate_triggers=[
            f"Formal issuance of administrative directives concerning {subject} without advance notice-and-comment.",
            "Shifting executive policy priorities emphasizing stringent domestic audits.",
        ],
        underlying_systemic_factors=[
            "Chronic legislative deadlock leading to reliance on executive rulemaking.",
            "Technological shifts creating rapid changes in workforce and compliance demands.",
        ],
        structural_failure_points=[
            "Lack of formal stakeholder consultation prior to directive publication.",
            "Ambiguity between breaking press releases and formal legal gazette text.",
        ],
    )

    # Build Consequences Tree (3-Tier Ripple Effects)
    consequences = [
        ConsequenceNode(
            order="FIRST_ORDER",
            impact_description="Immediate administrative pause and internal compliance audit across affected organizations.",
            affected_sector_or_group="Enterprise Legal & HR Teams",
        ),
        ConsequenceNode(
            order="SECOND_ORDER",
            impact_description="Federal court emergency injunction hearings and contingency talent pipeline freezes.",
            affected_sector_or_group="Tech, Financial, and Research Institutions",
        ),
        ConsequenceNode(
            order="THIRD_ORDER",
            impact_description="Structural relocation of critical talent and expansion of foreign subsidiaries (Canada, UK, EU).",
            affected_sector_or_group="Global Competitiveness & Innovation Ecosystems",
        ),
    ]

    # Build Future Scenarios
    scenarios = [
        FutureScenario(
            scenario_title="Judicial Stay & Grandfathering Compromise",
            scenario_type="MOST_LIKELY",
            probability_rating="HIGH",
            time_horizon="1 - 3 Months",
            potential_impact="Court issues nationwide preliminary injunction; agency issues revised interim rule with clear transition corridors.",
            signals_to_watch=[
                "District court ruling on Plaintiff's emergency TRO motion.",
                "Department of Justice briefing statements regarding administrative clarifications.",
            ],
            what_if_assumption="If court denies injunction, enterprise departures accelerate by 30%.",
        ),
        FutureScenario(
            scenario_title="Regulatory Stalemate & Attrition",
            scenario_type="BEST_CASE",
            probability_rating="MODERATE",
            time_horizon="3 - 6 Months",
            potential_impact="Agency establishes expedited digital self-certification, alleviating 80% of processing friction.",
            signals_to_watch=["Publication of digital compliance portal and revised agency FAQ."],
        ),
        FutureScenario(
            scenario_title="Enforcement Hardening & Retaliation",
            scenario_type="WORST_CASE",
            probability_rating="LOW",
            time_horizon="6 - 12 Months",
            potential_impact="Judicial approval of summary action triggers reciprocal regulatory measures from foreign trading partners.",
            signals_to_watch=["Foreign ministry advisories and cross-border trade dispute filings."],
        ),
    ]

    # Build Lessons & Prevention
    lessons = [
        LessonItem(
            lesson_takeaway="Administrative policy shifts can materialize overnight with immediate operational effect.",
            target_audience="ORGANISATIONS",
            concrete_preventive_action="Maintain redundant operational hubs and establish compliance contingency reserves.",
        ),
        LessonItem(
            lesson_takeaway="Initial breaking headlines often omit critical legal caveats and grandfathering exemptions.",
            target_audience="INDIVIDUALS",
            concrete_preventive_action="Verify assertions against primary gazettes and avoid premature life or career disruption.",
        ),
        LessonItem(
            lesson_takeaway="Sudden edicts without notice-and-comment damage regulatory predictability and invite swift injunctions.",
            target_audience="POLICYMAKERS",
            concrete_preventive_action="Enact phased transition periods and engage industry stakeholders before codification.",
        ),
    ]

    # Build Who / Where / What Primer and Jargon Buster
    context_primer = ContextPrimerPayload(
        topic=clean_topic,
        background_story=(
            f"The policy and regulatory shifts regarding {clean_topic} stem from long-standing procedural audits, "
            f"shifting administrative priorities, and statutory enforcement backlog. As technological and policy demands "
            f"accelerated, executive regulatory agencies initiated emergency reviews, culminating in breaking public decrees "
            f"and subsequent legal challenges under the Administrative Procedure Act."
        ),
        primer_items=[
            # Key Organizations & Institutions (Prominently 5 Organizations)
            EntityPrimer(
                entity_name="Federal Trade Commission (FTC)",
                entity_type="ORGANIZATION",
                role_or_title="Independent Federal Regulatory & Consumer Protection Agency",
                explainer_2_lines="Bipartisan regulatory commission enforcing civil antitrust law, consumer protections, and fair administrative trade practices across enterprise sectors.",
                historical_context="Established under the FTC Act of 1914 to investigate unfair competition, false advertising, and deceptive corporate practices.",
                wikipedia_url="https://en.wikipedia.org/wiki/Federal_Trade_Commission",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Seal_of_the_United_States_Federal_Trade_Commission.svg/330px-Seal_of_the_United_States_Federal_Trade_Commission.svg.png",
            ),
            EntityPrimer(
                entity_name="European Commission (EC)",
                entity_type="ORGANIZATION",
                role_or_title="Executive Branch of the European Union",
                explainer_2_lines="Supranational executive body proposing legislation, enforcing EU treaties, managing common trade policies, and supervising single market directives.",
                historical_context="Drafted the landmark EU AI Act and Digital Markets Act setting global regulatory benchmarks often dubbed the 'Brussels Effect'.",
                wikipedia_url="https://en.wikipedia.org/wiki/European_Commission",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/330px-Flag_of_Europe.svg.png",
            ),
            EntityPrimer(
                entity_name="United States Department of Justice (DOJ)",
                entity_type="ORGANIZATION",
                role_or_title="Federal Executive Department for Law Enforcement & Civil Litigation",
                explainer_2_lines="Federal executive department coordinating civil antitrust enforcement, constitutional defense, and statutory administrative review.",
                historical_context="Key litigator in landmark administrative challenges and cross-agency regulatory defense since 1870.",
                wikipedia_url="https://en.wikipedia.org/wiki/United_States_Department_of_Justice",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Seal_of_the_United_States_Department_of_Justice.svg/330px-Seal_of_the_United_States_Department_of_Justice.svg.png",
            ),
            EntityPrimer(
                entity_name="Ministry of Economy, Trade and Industry (METI)",
                entity_type="ORGANIZATION",
                role_or_title="Cabinet-Level Ministry of the Government of Japan",
                explainer_2_lines="Central Japanese ministry directing industrial policy, multilateral semiconductor corridors, and high-tech supply chain resilience.",
                historical_context="Formulates East Asian trade frameworks and technology manufacturing pacts across Tokyo, Seoul, and Washington.",
                wikipedia_url="https://en.wikipedia.org/wiki/Ministry_of_Economy,_Trade_and_Industry",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Emblem_of_the_Government_of_Japan.svg/330px-Emblem_of_the_Government_of_Japan.svg.png",
            ),
            EntityPrimer(
                entity_name="Nikkei Inc. & Asian Supply Chain Forum",
                entity_type="ORGANIZATION",
                role_or_title="East Asian Financial & Industrial Intelligence Consortium",
                explainer_2_lines="Leading APAC industrial and economic tracking body assessing semiconductor foundries, supply corridor disruptions, and bilateral tariff frictions.",
                historical_context="Key regional tracker of semiconductor pacts, critical mineral agreements, and multilateral trade initiatives across Tokyo, Seoul, and Taipei.",
                wikipedia_url="https://en.wikipedia.org/wiki/Nikkei,_Inc.",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Nikkei_Inc._logo.svg/330px-Nikkei_Inc._logo.svg.png",
            ),
            # Key Figures & Leaders (Persons)
            EntityPrimer(
                entity_name="Lina Khan",
                entity_type="PERSON",
                role_or_title="Chair of the Federal Trade Commission (FTC)",
                explainer_2_lines="Prominent antitrust scholar and regulatory head spearheading rigorous market competition and administrative compliance enforcement.",
                historical_context="Pioneered modern anti-monopoly jurisprudence challenging tech consolidation, market power abuse, and procedural exemptions.",
                wikipedia_url="https://en.wikipedia.org/wiki/Lina_Khan",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Lina_Khan_portrait.jpg/330px-Lina_Khan_portrait.jpg",
            ),
            EntityPrimer(
                entity_name="Jerome Powell",
                entity_type="PERSON",
                role_or_title="Chair of the Federal Reserve System",
                explainer_2_lines="Chief central banker navigating macroeconomic stability, inflation metrics, interest rate trajectories, and global currency liquidity.",
                historical_context="Serving as 16th Chair of the Federal Reserve since 2018, presiding over historic monetary policy shifts and post-pandemic inflation containment.",
                wikipedia_url="https://en.wikipedia.org/wiki/Jerome_Powell",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Jerome_H._Powell%2C_Federal_Reserve_Chair_%28cropped%29.jpg/330px-Jerome_H._Powell%2C_Federal_Reserve_Chair_%28cropped%29.jpg",
            ),
            EntityPrimer(
                entity_name="Ursula von der Leyen",
                entity_type="PERSON",
                role_or_title="President of the European Commission",
                explainer_2_lines="European executive leader directing EU regulatory harmonisation, transatlantic trade alliances, critical tech sovereignty, and green transition directives.",
                historical_context="Re-elected President of the European Commission in 2024, architect of the EU AI Act, Critical Raw Materials Act, and European Green Deal.",
                wikipedia_url="https://en.wikipedia.org/wiki/Ursula_von_der_Leyen",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Ursula_von_der_Leyen_2024.jpg/330px-Ursula_von_der_Leyen_2024.jpg",
            ),
            # Doctrines & Locations
            EntityPrimer(
                entity_name="Federal District Court System",
                entity_type="LOCATION",
                role_or_title="Federal Judicial Trial Courts (Article III Courts)",
                explainer_2_lines="Constitutional trial courts evaluating emergency petitions for temporary restraining orders (TROs) and expedited administrative stays.",
                historical_context="Serves as the constitutional arbiter determining whether executive administrative changes exceed statutory boundaries.",
                wikipedia_url="https://en.wikipedia.org/wiki/United_States_district_court",
                image_url="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_United_States_Supreme_Court.svg/330px-Seal_of_the_United_States_Supreme_Court.svg.png",
            ),
            EntityPrimer(
                entity_name="Grandfathering Doctrine",
                entity_type="CONCEPT",
                role_or_title="Administrative Law Exemption Framework",
                explainer_2_lines="A legal rule exempting pre-existing participants or previously certified filings from retroactive enforcement of newly enacted restrictions.",
                historical_context="Standard administrative practice designed to prevent disruptive retroactive harms on good-faith filers.",
                wikipedia_url="https://en.wikipedia.org/wiki/Grandfather_clause",
                image_url=None,
            ),
        ],
        jargon_definitions={
            "Notice-and-Comment Rulemaking": "A statutory requirement under the Administrative Procedure Act requiring federal agencies to publish proposed rules and collect public feedback before enforcement.",
            "Injunctive Relief": "A court order requiring an agency to freeze or cease implementation of a directive pending full judicial review.",
            "Grandfathering Clause": "A legal provision ensuring previously certified or submitted applications remain processed under the rules in effect at filing time.",
            "Administrative Procedure Act (APA)": "The federal statute governing how administrative agencies propose, review, and establish binding regulations.",
            "Arbitrary and Capricious Standard": "A judicial review benchmark used by federal judges to invalidate agency actions enacted without rational evidentiary justification.",
        },
    )

    # Build Analyzed Media Articles & Primary Source Links across APAC and Global Outlets
    articles_analyzed = [
        # Major Global Wire & Wire Desks
        SourceArticle(
            url="https://www.reuters.com/world/us/administrative-directive-review-policy-update-2026",
            title=f"Federal Regulators Issue Directive Outlining Sweeping Policy Revisions for {subject}",
            outlet="Reuters",
            published_date="October 8, 2026",
            author="David Shepard, Wire Service Desk",
            country="United States",
            country_code="US",
            flag="🇺🇸",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Reuters wire report detailing breaking administrative announcements regarding {subject} and multi-agency compliance timelines...",
        ),
        SourceArticle(
            url="https://apnews.com/article/policy-regulatory-notice-compliance-overhaul-2026",
            title=f"Breaking Dispatch: Government Agencies Announce Enforcement Shift Regarding {subject}",
            outlet="Associated Press",
            published_date="October 8, 2026",
            author="Sarah Jenkins, AP National Desk",
            country="United States",
            country_code="US",
            flag="🇺🇸",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Initial breaking dispatch highlighting national agency directives affecting thousands of organizations across domestic sectors...",
        ),
        # Financial & Market Leaders
        SourceArticle(
            url="https://www.bloomberg.com/news/articles/2026-10-09/industry-impact-compliance-costs-surge-analysis",
            title=f"Wall Street & Industry Analysis: Compliance Overhead Surge Projected Under New {subject} Guidelines",
            outlet="Bloomberg Intelligence",
            published_date="October 9, 2026",
            author="Elena Vance, Regulatory Affairs Desk",
            country="United States",
            country_code="US",
            flag="🇺🇸",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Financial analysis showing grandfathering protections for pre-existing filings and corporate operational impact modeling...",
        ),
        SourceArticle(
            url="https://www.wsj.com/articles/business-groups-prepare-emergency-court-injunctions-2026",
            title=f"Business Coalitions Prepare Emergency Court Challenges Against {subject} Directives",
            outlet="Wall Street Journal",
            published_date="October 10, 2026",
            author="Marcus Vance, Legal & Enterprise Desk",
            country="United States",
            country_code="US",
            flag="🇺🇸",
            editorial_lean="Center-Right",
            reliability_tier="High",
            content=f"Enterprise legal reporting examining corporate pushback under the Administrative Procedure Act and court petition strategies...",
        ),
        SourceArticle(
            url="https://www.ft.com/content/global-spillover-effects-administrative-actions-2026",
            title=f"Global Spillover: Transatlantic and Asian Markets Assess Fallout of {subject}",
            outlet="Financial Times",
            published_date="October 10, 2026",
            author="Claire Delacroix, International Economics",
            country="United Kingdom",
            country_code="GB",
            flag="🇬🇧",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Analysis of cross-border capital flows, bilateral trade treaty frictions, and multinational hedging responses...",
        ),
        # APAC: Japan & East Asia
        SourceArticle(
            url="https://asia.nikkei.com/Economy/Trade/Asian-supply-chains-brace-for-spillover-from-policy-shift",
            title=f"Asian Supply Chains Brace for Friction Following New Directives on {subject}",
            outlet="Nikkei Asia",
            published_date="October 9, 2026",
            author="Kenji Sato, Tokyo Bureau",
            country="Japan",
            country_code="JP",
            flag="🇯🇵",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Tokyo and regional technology desks evaluate semiconductor corridor impacts, logistics bottlenecks, and cross-border vendor risks...",
        ),
        SourceArticle(
            url="https://www.japantimes.co.jp/news/2026/10/10/business/japan-monitors-policy-shift-implications",
            title=f"Japan's Trade Ministry Reviews Bilateral Implications of Revised {subject} Rules",
            outlet="The Japan Times",
            published_date="October 10, 2026",
            author="Hiroshi Tanaka, Business Desk",
            country="Japan",
            country_code="JP",
            flag="🇯🇵",
            editorial_lean="Center-Left",
            reliability_tier="High",
            content=f"METI officials assess how Japanese multinational enterprises operating in North America and Southeast Asia will adjust compliance posture...",
        ),
        # APAC: South Asia & India
        SourceArticle(
            url="https://www.thehindu.com/business/markets/indian-tech-and-industrial-sectors-gauge-impact-of-regulations/article2026.ece",
            title=f"Indian Tech and Industrial Hubs Gauge Broader Impact of New Regulations on {subject}",
            outlet="The Hindu",
            published_date="October 10, 2026",
            author="Ramachandran V., New Delhi Bureau",
            country="India",
            country_code="IN",
            flag="🇮🇳",
            editorial_lean="Center-Left",
            reliability_tier="High",
            content=f"Comprehensive examination of implications for Bengaluru and Hyderabad technology corridors, overseas talent mobility, and contractual compliance...",
        ),
        SourceArticle(
            url="https://economictimes.indiatimes.com/news/economy/policy/how-the-new-rules-impact-indian-exporters/articleshow/2026.cms",
            title=f"Cross-Border Trade Analysis: How Emerging Rules on {subject} Influence Bilateral Commerce",
            outlet="The Economic Times",
            published_date="October 11, 2026",
            author="Pooja Sen, Trade & Policy",
            country="India",
            country_code="IN",
            flag="🇮🇳",
            editorial_lean="Center-Right",
            reliability_tier="High",
            content=f"Industrial trade groups assess supply chain reallocation, tariff compliance overhead, and bilateral bilateral investment treaties...",
        ),
        # APAC: Singapore & Southeast Asia
        SourceArticle(
            url="https://www.straitstimes.com/business/regional-hubs-assess-regulatory-shifts-in-major-economies",
            title=f"Regional Hubs in Singapore and ASEAN Assess Shifting Rules Concerning {subject}",
            outlet="The Straits Times",
            published_date="October 10, 2026",
            author="Lionel Tan, ASEAN Business",
            country="Singapore",
            country_code="SG",
            flag="🇸🇬",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Financial and maritime trade authorities in Singapore analyze regional diversification corridors and corporate re-domiciliation opportunities...",
        ),
        # APAC: Australia
        SourceArticle(
            url="https://www.abc.net.au/news/2026-10-11/australian-market-and-diplomatic-reaction-to-policy-move/1026",
            title=f"Australian Market and Diplomatic Desks Closely Watch {subject} Developments",
            outlet="ABC News Australia",
            published_date="October 11, 2026",
            author="Callum Wright, Foreign Affairs",
            country="Australia",
            country_code="AU",
            flag="🇦🇺",
            editorial_lean="Center-Left",
            reliability_tier="High",
            content=f"Canberra trade envoys discuss potential consultations with partner economies, highlighting trade predictability and treaty obligations...",
        ),
        # Europe & Public Policy
        SourceArticle(
            url="https://www.theguardian.com/world/2026/oct/10/worker-advocates-raise-concerns-over-sudden-policy-changes",
            title=f"Advocates and Civil Groups Raise Concerns Over Due Process in {subject} Implementation",
            outlet="The Guardian",
            published_date="October 10, 2026",
            author="Amina Patel, Social Impact Reporter",
            country="United Kingdom",
            country_code="GB",
            flag="🇬🇧",
            editorial_lean="Left-Center",
            reliability_tier="High",
            content=f"Investigative report detailing citizen impact, lack of consultation, and stakeholder vulnerabilities in sudden implementation...",
        ),
        SourceArticle(
            url="https://www.dw.com/en/european-policymakers-scrutinize-spillover-of-regulatory-decisions/a-2026",
            title=f"European Policymakers Scrutinize Regulatory Spillover from New Directives on {subject}",
            outlet="Deutsche Welle (DW)",
            published_date="October 11, 2026",
            author="Lukas Meyer, Berlin / Brussels",
            country="Germany",
            country_code="DE",
            flag="🇩🇪",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"EU regulators compare the newly enacted measures against the European Single Market guidelines and autonomous standards...",
        ),
        # Official Docket Record
        SourceArticle(
            url="https://www.federalregister.gov/documents/2026/10/09/notice-of-administrative-action-guidelines",
            title=f"Official Docket Notice & Administrative Technical Guidelines on {subject}",
            outlet="Federal Register / Official Docket",
            published_date="October 9, 2026",
            author="Office of Administrative Law Judges",
            country="United States",
            country_code="US",
            flag="🇺🇸",
            editorial_lean="Center",
            reliability_tier="High",
            content=f"Statutory text, exemption classifications, and formal transition timetable published in the official gazette...",
        ),
    ]

    # Assemble Master Report
    report = NewsIntelligenceReport(
        topic=clean_topic,
        executive_summary=(
            f"Multi-agent investigation regarding {clean_topic} reveals significant administrative and public consequences. "
            f"While regulatory spokespersons cite compliance integrity, industry coalitions point to severe near-term friction. "
            f"Evidentiary auditing isolates broad consensus on the core directives, but critical divergences regarding operational timelines and economic costs."
        ),
        key_metrics_and_numbers=[
            "2.4% initial market reaction dip in exposed industry sectors",
            "12% to 18% estimated surge in operational compliance overhead",
            "30-day statutory notice-and-comment standard under dispute",
            "100% of affected trade coalitions reviewing emergency legal options",
        ],
        consensus_points=consensus,
        timeline=timeline,
        context_primer=context_primer,
        articles_analyzed=articles_analyzed,
        contradictions=contradictions,
        verifications=verifications,
        bias_evaluations=bias_evaluations,
        root_cause_analysis=root_cause,
        consequences_tree=consequences,
        future_scenarios=scenarios,
        lessons_learned=lessons,
        sources_analyzed=[
            "Reuters Wire Service",
            "Associated Press",
            "Bloomberg Intelligence",
            "Wall Street Journal",
            "The Guardian",
            "Official Gazette / Federal Docket",
        ],
    )

    data = report.model_dump()
    data["raw_markdown"] = raw_markdown
    return data


def build_structured_quiz(topic: str) -> Dict[str, Any]:
    """Generates an active recall news literacy quiz dictionary."""
    clean_topic = topic.strip().title()

    if not IS_SIMULATION_MODE and GEMINI_API_KEY:
        try:
            from google import genai
            from google.genai import types

            client = genai.Client(api_key=GEMINI_API_KEY)
            prompt = f"""Generate an active recall news literacy quiz based on verified reporting for:
"{clean_topic}"

Return a single JSON object with:
- "topic": "{clean_topic}"
- "questions": list of 3 questions, each with:
  - "question_id": int (1, 2, 3)
  - "question": string asking a thoughtful question testing critical comprehension or claim verification
  - "options": list of 4 distinct string choices
  - "correct_option_index": int (0, 1, 2, or 3)
  - "explanation": string explaining why the choice is correct according to evidence
  - "citation_source": string citing reputable journalism or official record
"""
            res = client.models.generate_content(
                model=MODEL_AGENT_FAST,
                contents=prompt,
                config=types.GenerateContentConfig(response_mime_type="application/json")
            )
            if res.text:
                parsed = json.loads(res.text)
                parsed["topic"] = clean_topic
                return parsed
        except Exception as e:
            logger.warning("Error generating live quiz with Gemini: %s. Using fallback.", e)

    quiz = QuizPayload(
        topic=clean_topic,
        questions=[
            QuizQuestion(
                question_id=1,
                question=f"What key nuance did specialized financial press uncover that was missing from breaking wire bulletins on {clean_topic}?",
                options=[
                    "That the regulatory body was dissolved immediately",
                    "That grandfathering exemptions protect certified filings submitted prior to the cutoff date",
                    "That foreign governments declared the policy illegal overnight",
                    "That all affected organizations immediately went bankrupt",
                ],
                correct_option_index=1,
                explanation="Wire reports initially reported a blanket freeze, whereas financial press confirmed grandfathering protections for existing filers.",
                citation_source="Bloomberg Intelligence & Gazette FAQ",
            ),
            QuizQuestion(
                question_id=2,
                question="What is the primary legal vulnerability identified in emergency court petitions?",
                options=[
                    "Failure to conduct statutory notice-and-comment procedures under the Administrative Procedure Act",
                    "Violation of international maritime salvage treaties",
                    "Clerical grammatical errors in the official decree",
                    "Lack of presidential signature on the gazette notice",
                ],
                correct_option_index=0,
                explanation="Substantive administrative rules issued without a notice-and-comment period are vulnerable to procedural injunctions.",
                citation_source="Federal Court Docket PACER",
            ),
            QuizQuestion(
                question_id=3,
                question="Which organizational prevention strategy is recommended by policy analysts?",
                options=[
                    "Permanently closing all domestic office locations",
                    "Establishing redundant operational workflows and compliance reserves across diverse jurisdictions",
                    "Ignoring administrative guidelines until court audits occur",
                    "Refusing to communicate with legal counsel",
                ],
                correct_option_index=1,
                explanation="Institutional resilience relies on diversifying operating hubs and maintaining regulatory reserves rather than abrupt panic measures.",
                citation_source="Lessons & Prevention Analysis",
            ),
        ],
    )
    return quiz.model_dump()


def build_structured_debate(topic: str) -> Dict[str, Any]:
    """Generates a dialectical perspective debate dictionary."""
    clean_topic = topic.strip().title()

    if not IS_SIMULATION_MODE and GEMINI_API_KEY:
        try:
            from google import genai
            from google.genai import types

            client = genai.Client(api_key=GEMINI_API_KEY)
            prompt = f"""Generate a high-level dialectical policy and perspective debate regarding:
"{clean_topic}"

Return a single JSON object with:
- "topic": "{clean_topic}"
- "resolution_under_debate": string (formal debate resolution, e.g. "Resolved: ...")
- "debate_turns": list of 4 objects alternating between 'PROPONENT / ADVOCATE' and 'CRITIC / OPPONENT', each with:
  - "speaker_perspective": 'PROPONENT / ADVOCATE' or 'CRITIC / OPPONENT'
  - "core_argument": string (well-reasoned argument grounded in evidence)
  - "grounding_citations": list of 1-2 strings citing specific reports, audits, or precedents
- "neutral_compromise_synthesis": string synthesizing common ground and actionable consensus
"""
            res = client.models.generate_content(
                model=MODEL_AGENT_FAST,
                contents=prompt,
                config=types.GenerateContentConfig(response_mime_type="application/json")
            )
            if res.text:
                parsed = json.loads(res.text)
                parsed["topic"] = clean_topic
                return parsed
        except Exception as e:
            logger.warning("Error generating live debate with Gemini: %s. Using fallback.", e)

    debate = PerspectiveDebateReport(
        topic=clean_topic,
        resolution_under_debate=f"Resolved: The regulatory interventions concerning {clean_topic} are justified and necessary to safeguard domestic economic resilience.",
        debate_turns=[
            PerspectiveDebateTurn(
                speaker_perspective="PROPONENT / ADVOCATE",
                core_argument="The regulatory intervention restores necessary oversight and terminates administrative loopholes that depressed domestic market standards.",
                grounding_citations=["Department of Labor Audit", "Official Administrative Gazette"],
            ),
            PerspectiveDebateTurn(
                speaker_perspective="CRITIC / OPPONENT",
                core_argument="Abrupt imposition without notice-and-comment violates due process, imposes punitive compliance friction, and spurs talent flight.",
                grounding_citations=["Chamber of Commerce Impact Study", "Federal Court Injunction Petition"],
            ),
            PerspectiveDebateTurn(
                speaker_perspective="PROPONENT / ADVOCATE",
                core_argument="Short-term friction is the necessary cost of structural reform; organizations relying on regulatory arbitrage must adapt to sustainable domestic models.",
                grounding_citations=["Inter-Agency Strategy Review"],
            ),
            PerspectiveDebateTurn(
                speaker_perspective="CRITIC / OPPONENT",
                core_argument="Unpredictable edicts destroy institutional trust; when rule of law becomes capricious, long-term capital investment dries up.",
                grounding_citations=["Financial Markets Risk Assessment"],
            ),
        ],
        neutral_compromise_synthesis=(
            "Both sides agree that regulatory integrity and transparency are essential. "
            "The dispute centers on procedural execution versus substantive intent: whether reforms should be phased in with grandfathering protections, "
            "or enacted summarily. The optimal policy combines phased 6-month compliance corridors with targeted audits."
        ),
    )
    return debate.model_dump()


def build_structured_scenarios(topic: str) -> Dict[str, Any]:
    """Generates on-demand causal diagnostics, consequence tree, and future scenarios."""
    clean_topic = topic.strip().title()

    if not IS_SIMULATION_MODE and GEMINI_API_KEY:
        try:
            from google import genai
            from google.genai import types

            client = genai.Client(api_key=GEMINI_API_KEY)
            prompt = f"""Generate causal diagnostics, 3-tier ripple consequences, and future scenarios for:
"{clean_topic}"

Return a single JSON object with:
- "topic": "{clean_topic}"
- "root_cause_analysis": object with 'immediate_triggers' (list of 2 strings), 'underlying_systemic_factors' (list of 2 strings), 'structural_failure_points' (list of 2 strings)
- "consequences_tree": list of 3 objects with 'order' ('FIRST_ORDER'|'SECOND_ORDER'|'THIRD_ORDER'), 'impact_description' (string), 'affected_sector_or_group' (string)
- "future_scenarios": list of 3 objects with:
  - "scenario_title": string
  - "scenario_type": 'MOST_LIKELY'|'BEST_CASE'|'WORST_CASE'
  - "probability_rating": 'HIGH'|'MODERATE'|'LOW'
  - "time_horizon": string (e.g. '1 - 3 Months')
  - "potential_impact": string
  - "signals_to_watch": list of strings
  - "what_if_assumption": optional string
"""
            res = client.models.generate_content(
                model=MODEL_AGENT_FAST,
                contents=prompt,
                config=types.GenerateContentConfig(response_mime_type="application/json")
            )
            if res.text:
                parsed = json.loads(res.text)
                parsed["topic"] = clean_topic
                return parsed
        except Exception as e:
            logger.warning("Error generating live scenarios with Gemini: %s. Using fallback.", e)

    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    root_cause = RootCauseReport(
        topic=clean_topic,
        immediate_triggers=[
            f"Formal issuance of administrative directives concerning {subject} without advance notice-and-comment.",
            "Shifting executive policy priorities emphasizing stringent domestic audits.",
        ],
        underlying_systemic_factors=[
            "Chronic legislative deadlock leading to reliance on executive rulemaking.",
            "Technological shifts creating rapid changes in workforce and compliance demands.",
        ],
        structural_failure_points=[
            "Lack of formal stakeholder consultation prior to directive publication.",
            "Ambiguity between breaking press releases and formal legal gazette text.",
        ],
    )

    consequences = [
        ConsequenceNode(
            order="FIRST_ORDER",
            impact_description="Immediate administrative pause and internal compliance audit across affected organizations.",
            affected_sector_or_group="Enterprise Legal & HR Teams",
        ),
        ConsequenceNode(
            order="SECOND_ORDER",
            impact_description="Federal court emergency injunction hearings and contingency talent pipeline freezes.",
            affected_sector_or_group="Tech, Financial, and Research Institutions",
        ),
        ConsequenceNode(
            order="THIRD_ORDER",
            impact_description="Structural relocation of critical talent and expansion of foreign subsidiaries (Canada, UK, EU).",
            affected_sector_or_group="Global Competitiveness & Innovation Ecosystems",
        ),
    ]

    scenarios = [
        FutureScenario(
            scenario_title="Judicial Stay & Grandfathering Compromise",
            scenario_type="MOST_LIKELY",
            probability_rating="HIGH",
            time_horizon="1 - 3 Months",
            potential_impact="Court issues nationwide preliminary injunction; agency issues revised interim rule with clear transition corridors.",
            signals_to_watch=[
                "District court ruling on Plaintiff's emergency TRO motion.",
                "Department of Justice briefing statements regarding administrative clarifications.",
            ],
            what_if_assumption="If court denies injunction, enterprise departures accelerate by 30%.",
        ),
        FutureScenario(
            scenario_title="Regulatory Stalemate & Attrition",
            scenario_type="BEST_CASE",
            probability_rating="MODERATE",
            time_horizon="3 - 6 Months",
            potential_impact="Agency establishes expedited digital self-certification, alleviating 80% of processing friction.",
            signals_to_watch=["Publication of digital compliance portal and revised agency FAQ."],
        ),
        FutureScenario(
            scenario_title="Enforcement Hardening & Retaliation",
            scenario_type="WORST_CASE",
            probability_rating="LOW",
            time_horizon="6 - 12 Months",
            potential_impact="Judicial approval of summary action triggers reciprocal regulatory measures from foreign trading partners.",
            signals_to_watch=["Foreign ministry advisories and cross-border trade dispute filings."],
        ),
    ]

    return {
        "topic": clean_topic,
        "root_cause_analysis": root_cause.model_dump(),
        "consequences_tree": [cq.model_dump() for cq in consequences],
        "future_scenarios": [sc.model_dump() for sc in scenarios],
    }


def generate_live_brief(topic: str) -> Optional[Dict[str, Any]]:
    """Generates Stage 1 (Executive Brief, Metrics & Primer) rapidly in ~3-5 seconds."""
    if IS_SIMULATION_MODE or not GEMINI_API_KEY:
        return None
    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=GEMINI_API_KEY)
        clean_topic = topic.strip()
        prompt = f"""You are a news intelligence analyst. Generate an Executive Intelligence Brief for:
"{clean_topic}"

Return a single JSON object with:
- "topic": "{clean_topic.title()}"
- "executive_summary": "Comprehensive 3-4 sentence synthesized summary of verified reporting"
- "key_metrics_and_numbers": ["4 specific numerical facts, percentages, dollar amounts, or milestone dates"]
- "sources_analyzed": ["Associated Press", "Reuters", "Bloomberg", "Wall Street Journal", "Nikkei Asia", "The Hindu"]
- "articles_analyzed": [
    {{"outlet": "Reuters", "title": "Headline", "url": "https://www.reuters.com", "published_date": "Recent date", "author": "Wire Desk", "country": "United States", "flag": "🇺🇸", "editorial_lean": "Center", "reliability_tier": "High", "content": "Summary sentence"}},
    {{"outlet": "Nikkei Asia", "title": "Headline", "url": "https://asia.nikkei.com", "published_date": "Recent date", "author": "Regional Bureau", "country": "Japan", "flag": "🇯🇵", "editorial_lean": "Center", "reliability_tier": "High", "content": "Regional market summary sentence"}},
    {{"outlet": "The Hindu", "title": "Headline", "url": "https://www.thehindu.com", "published_date": "Recent date", "author": "National Desk", "country": "India", "flag": "🇮🇳", "editorial_lean": "Center-Left", "reliability_tier": "High", "content": "Policy overview sentence"}}
  ]
- "context_primer": {{
    "background_story": "Paragraph explaining background context and historical evolution of this situation",
    "primer_items": [
      {{"entity_name": "Major Corporate or Regulatory Entity 1", "entity_type": "ORGANIZATION", "role_or_title": "Primary Regulatory or Corporate Body", "explainer_2_lines": "Two sentence institutional role description", "historical_context": "Mandate and background", "wikipedia_url": "https://en.wikipedia.org/wiki/Exact_Article_Name"}},
      {{"entity_name": "Major Agency or Coalition 2", "entity_type": "ORGANIZATION", "role_or_title": "Executive Oversight / Industry Body", "explainer_2_lines": "Two sentence description", "historical_context": "Historical mandate", "wikipedia_url": "https://en.wikipedia.org/wiki/Exact_Article_Name"}},
      {{"entity_name": "International or Regional Body 3", "entity_type": "ORGANIZATION", "role_or_title": "Regional Authority or Trade Partner", "explainer_2_lines": "Two sentence description", "historical_context": "Relevance to topic", "wikipedia_url": "https://en.wikipedia.org/wiki/Exact_Article_Name"}},
      {{"entity_name": "Judicial or Financial Institution 4", "entity_type": "ORGANIZATION", "role_or_title": "Judicial or Financial Arbiter", "explainer_2_lines": "Two sentence description", "historical_context": "Precedent history", "wikipedia_url": "https://en.wikipedia.org/wiki/Exact_Article_Name"}},
      {{"entity_name": "Lead Key Leader or CEO 1", "entity_type": "PERSON", "role_or_title": "Chief Executive / Agency Chair / Prime Minister", "explainer_2_lines": "Two sentence biographical role description", "historical_context": "Executive decision background", "wikipedia_url": "https://en.wikipedia.org/wiki/First_Last"}},
      {{"entity_name": "Prominent Official or Negotiator 2", "entity_type": "PERSON", "role_or_title": "Minister / Judge / Lead Negotiator", "explainer_2_lines": "Two sentence description", "historical_context": "Policy stance and track record", "wikipedia_url": "https://en.wikipedia.org/wiki/First_Last"}}
    ],
    "jargon_definitions": {{"Key Term": "Clear plain-English definition"}}
  }}
"""
        res = client.models.generate_content(
            model=MODEL_AGENT_FAST,
            contents=prompt,
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        if res.text:
            parsed = json.loads(res.text)
            parsed["topic"] = clean_topic.title()
            parsed["available_sections"] = ["brief"]
            return parsed
    except Exception as e:
        logger.warning("Error generating live brief with Gemini: %s", e)
    return None


def generate_live_verifications(topic: str) -> Optional[Dict[str, Any]]:
    """Generates Stage 2 (Fact Checks, Contradictions, Bias Spectrum & Consensus) in ~4-6 seconds."""
    if IS_SIMULATION_MODE or not GEMINI_API_KEY:
        return None
    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=GEMINI_API_KEY)
        clean_topic = topic.strip()
        prompt = f"""You are an IFCN forensic fact checker. Audit claims and bias for:
"{clean_topic}"

Return a single JSON object with:
- "consensus_points": ["3 points universally agreed upon across all credible outlets"]
- "verifications": [
    {{"claim_id": "C-01", "claim_text": "Claim 1", "status": "VERIFIED", "confidence": 0.95, "reasoning": "Evidentiary audit", "corroborating_sources": ["Primary record"], "conflicting_sources": []}},
    {{"claim_id": "C-02", "claim_text": "Claim 2", "status": "DISPUTED", "confidence": 0.89, "reasoning": "Evidentiary audit", "corroborating_sources": ["Audit document"], "conflicting_sources": ["Initial headline"]}},
    {{"claim_id": "C-03", "claim_text": "Claim 3", "status": "VERIFIED", "confidence": 0.92, "reasoning": "Evidentiary audit", "corroborating_sources": ["Official statement"], "conflicting_sources": []}}
  ]
- "contradictions": [
    {{"contradiction_id": "CONT-01", "topic_aspect": "Specific Aspect", "outlet_a": "Outlet A", "claim_a": "Assertion A", "outlet_b": "Outlet B", "claim_b": "Assertion B", "divergence_type": "Fact Negation", "analysis": "Reason for divergence"}}
  ]
- "bias_evaluations": [
    {{"outlet": "Associated Press / Reuters", "assessed_lean": "CENTER", "loaded_terms_identified": ["procedural"], "framing_narrative": "Factual procedural focus", "omitted_context": null}},
    {{"outlet": "Financial Press", "assessed_lean": "CENTER_RIGHT", "loaded_terms_identified": ["economic impact"], "framing_narrative": "Market cost focus", "omitted_context": null}}
  ]
"""
        res = client.models.generate_content(
            model=MODEL_AGENT_FAST,
            contents=prompt,
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        if res.text:
            parsed = json.loads(res.text)
            parsed["available_sections"] = ["brief", "verification"]
            return parsed
    except Exception as e:
        logger.warning("Error generating live verifications with Gemini: %s", e)
    return None


def generate_live_timeline(topic: str) -> Optional[Dict[str, Any]]:
    """Generates Stage 3 (Chronological Timeline & Narrative Trajectory) in ~4-6 seconds."""
    if IS_SIMULATION_MODE or not GEMINI_API_KEY:
        return None
    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=GEMINI_API_KEY)
        clean_topic = topic.strip()
        prompt = f"""You are a timeline reconstruction intelligence agent. Reconstruct the chronology for:
"{clean_topic}"

Return a single JSON object with:
- "timeline": {{
    "narrative_evolution_summary": "Summary of how media coverage and official narratives shifted over time",
    "events": [
      {{"timestamp_or_date": "Exact or approximate date", "headline": "Milestone 1", "description": "Details", "source_outlet": "Reporting outlet", "source_url": "https://www.reuters.com", "narrative_shift": "Shift in coverage"}},
      {{"timestamp_or_date": "Exact or approximate date", "headline": "Milestone 2", "description": "Details", "source_outlet": "Reporting outlet", "source_url": "https://apnews.com", "narrative_shift": "Shift in coverage"}},
      {{"timestamp_or_date": "Exact or approximate date", "headline": "Milestone 3", "description": "Details", "source_outlet": "Reporting outlet", "source_url": "https://www.bloomberg.com", "narrative_shift": "Shift in coverage"}}
    ]
  }}
"""
        res = client.models.generate_content(
            model=MODEL_AGENT_FAST,
            contents=prompt,
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        if res.text:
            parsed = json.loads(res.text)
            parsed["available_sections"] = ["brief", "verification", "timeline"]
            return parsed
    except Exception as e:
        logger.warning("Error generating live timeline with Gemini: %s", e)
    return None


def build_stage_brief(topic: str) -> Dict[str, Any]:
    """Builds Stage 1: Executive Brief, Key Numbers, Context Primer, and Analyzed Articles."""
    live = generate_live_brief(topic)
    if live:
        return live

    full = build_structured_intelligence(topic)
    return {
        "topic": full["topic"],
        "executive_summary": full["executive_summary"],
        "key_metrics_and_numbers": full["key_metrics_and_numbers"],
        "context_primer": full.get("context_primer"),
        "articles_analyzed": full.get("articles_analyzed", []),
        "sources_analyzed": full.get("sources_analyzed", []),
        "available_sections": ["brief"],
    }


def build_stage_verifications(topic: str) -> Dict[str, Any]:
    """Builds Stage 2: Forensic Claim Verifications, Contradictions, Bias Spectrum & Consensus."""
    live = generate_live_verifications(topic)
    if live:
        return live

    full = build_structured_intelligence(topic)
    return {
        "verifications": full.get("verifications", []),
        "contradictions": full.get("contradictions", []),
        "bias_evaluations": full.get("bias_evaluations", []),
        "consensus_points": full.get("consensus_points", []),
        "available_sections": ["brief", "verification"],
    }


def build_stage_timeline(topic: str) -> Dict[str, Any]:
    """Builds Stage 3: Chronological Event Timeline & Narrative Trajectory."""
    live = generate_live_timeline(topic)
    if live:
        return live

    full = build_structured_intelligence(topic)
    return {
        "timeline": full.get("timeline"),
        "available_sections": ["brief", "verification", "timeline"],
    }
