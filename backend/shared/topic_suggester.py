"""Dynamic Country-Grouped Topic Suggestions Generator.

Ingests real-time Google News RSS feeds for 16 core countries and generates
structured, forensic investigative topic suggestions using Gemini API
(with resilient live RSS headline heuristic fallback).
Stored in Firestore for instant page loads with a 24-hour validity window.
"""

from __future__ import annotations

import json
import logging
import re
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from shared.config import GEMINI_API_KEY, IS_SIMULATION_MODE, MODEL_AGENT_FAST, logger

BROWSER_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)

# Supported 16 Core Country Configurations in prioritized order
COUNTRY_CONFIGS = [
    {
        "code": "IN",
        "name": "India",
        "flag": "🇮🇳",
        "rss_url": "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-IN&gl=IN&ceid=IN:en",
            "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-IN&gl=IN&ceid=IN:en",
        ],
    },
    {
        "code": "US",
        "name": "United States",
        "flag": "🇺🇸",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "CA",
        "name": "Canada",
        "flag": "🇨🇦",
        "rss_url": "https://news.google.com/rss?hl=en-CA&gl=CA&ceid=CA:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-CA&gl=CA&ceid=CA:en",
            "https://news.google.com/rss?hl=en-CA&gl=CA&ceid=CA:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-CA&gl=CA&ceid=CA:en",
        ],
    },
    {
        "code": "CN",
        "name": "China",
        "flag": "🇨🇳",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=CN&ceid=CN:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=China+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Beijing+OR+%22Chinese+economy%22+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "RU",
        "name": "Russia",
        "flag": "🇷🇺",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=RU&ceid=RU:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=Russia+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Moscow+OR+Kremlin+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "GB",
        "name": "United Kingdom",
        "flag": "🇬🇧",
        "rss_url": "https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-GB&gl=GB&ceid=GB:en",
            "https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-GB&gl=GB&ceid=GB:en",
        ],
    },
    {
        "code": "FR",
        "name": "France",
        "flag": "🇫🇷",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=FR&ceid=FR:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=France+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Paris+OR+%22French+government%22+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "DE",
        "name": "Germany",
        "flag": "🇩🇪",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=DE&ceid=DE:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=Germany+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Berlin+OR+%22German+economy%22+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "AE",
        "name": "United Arab Emirates",
        "flag": "🇦🇪",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=AE&ceid=AE:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=UAE+OR+%22United+Arab+Emirates%22+OR+Dubai+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=%22Abu+Dhabi%22+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "SA",
        "name": "Saudi Arabia",
        "flag": "🇸🇦",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=SA&ceid=SA:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=%22Saudi+Arabia%22+OR+Riyadh+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Aramco+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "IL",
        "name": "Israel",
        "flag": "🇮🇱",
        "rss_url": "https://news.google.com/rss?hl=en-IL&gl=IL&ceid=IL:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=Israel+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Knesset+OR+Netanyahu+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "JP",
        "name": "Japan",
        "flag": "🇯🇵",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=JP&ceid=JP:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=Japan+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Tokyo+OR+%22Bank+of+Japan%22+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "SG",
        "name": "Singapore",
        "flag": "🇸🇬",
        "rss_url": "https://news.google.com/rss?hl=en-SG&gl=SG&ceid=SG:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-SG&gl=SG&ceid=SG:en",
            "https://news.google.com/rss?hl=en-SG&gl=SG&ceid=SG:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-SG&gl=SG&ceid=SG:en",
        ],
    },
    {
        "code": "ID",
        "name": "Indonesia",
        "flag": "🇮🇩",
        "rss_url": "https://news.google.com/rss?hl=en-ID&gl=ID&ceid=ID:en",
        "rss_urls": [
            "https://news.google.com/rss/search?q=Indonesia+when:3d&hl=en-US&gl=US&ceid=US:en",
            "https://news.google.com/rss/search?q=Jakarta+OR+Prabowo+when:3d&hl=en-US&gl=US&ceid=US:en",
        ],
    },
    {
        "code": "MY",
        "name": "Malaysia",
        "flag": "🇲🇾",
        "rss_url": "https://news.google.com/rss?hl=en-MY&gl=MY&ceid=MY:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-MY&gl=MY&ceid=MY:en",
            "https://news.google.com/rss?hl=en-MY&gl=MY&ceid=MY:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-MY&gl=MY&ceid=MY:en",
        ],
    },
    {
        "code": "AU",
        "name": "Australia",
        "flag": "🇦🇺",
        "rss_url": "https://news.google.com/rss?hl=en-AU&gl=AU&ceid=AU:en",
        "rss_urls": [
            "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-AU&gl=AU&ceid=AU:en",
            "https://news.google.com/rss?hl=en-AU&gl=AU&ceid=AU:en",
            "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-AU&gl=AU&ceid=AU:en",
        ],
    },
]

BADGE_COLORS = [
    "badge-primary",
    "badge-secondary",
    "badge-accent",
    "badge-info",
    "badge-warning",
    "badge-success",
]


def fetch_country_headlines(country_code: str, rss_urls: str | List[str], max_items: int = 35) -> List[Dict[str, str]]:
    """Fetches real breaking headlines from Google News RSS for intelligent agentic evaluation.
    
    Supports multiple feed URLs per country (e.g. NATION section + Home feed or targeted searches)
    and deduplicates across feeds by normalized title.
    """
    raw_headlines: List[Dict[str, str]] = []
    seen_titles: set[str] = set()
    urls = [rss_urls] if isinstance(rss_urls, str) else list(rss_urls)

    for feed_url in urls:
        if len(raw_headlines) >= max_items:
            break
        try:
            req = urllib.request.Request(feed_url, headers={"User-Agent": BROWSER_UA})
            with urllib.request.urlopen(req, timeout=8) as response:
                xml_data = response.read()
                root = ET.fromstring(xml_data)
                items = root.findall(".//item")
                for item in items:
                    raw_title = item.find("title").text if item.find("title") is not None else ""
                    link = item.find("link").text if item.find("link") is not None else ""
                    pub_date = item.find("pubDate").text if item.find("pubDate") is not None else ""
                    source_elem = item.find("source")
                    outlet = source_elem.text if source_elem is not None and source_elem.text else "News Agency"

                    # Clean headline: unescape entities and strip trailing outlet suffix
                    title = re.sub(r"\s*-\s*[^-]+$", "", raw_title).strip()
                    title = re.sub(r"\s+", " ", title)

                    norm_key = title.lower()
                    if title and norm_key not in seen_titles:
                        seen_titles.add(norm_key)
                        raw_headlines.append({
                            "title": title,
                            "raw_title": raw_title,
                            "outlet": outlet,
                            "link": link,
                            "pub_date": pub_date,
                        })
                        if len(raw_headlines) >= max_items:
                            break
        except Exception as e:
            logger.warning("Error fetching RSS headlines for %s (%s): %s", country_code, feed_url, e)

    return raw_headlines[:max_items]



def _categorize_headline(title: str) -> tuple[str, str, str]:
    """Infers category, badge, and DaisyUI badge color based on keywords."""
    lower = title.lower()
    if any(k in lower for k in ["ai", "tech", "chip", "semiconductor", "cyber", "software", "apple", "google", "microsoft", "nvidia"]):
        return "Technology & AI", "Tech Shift", "badge-primary"
    elif any(k in lower for k in ["election", "vote", "parliament", "congress", "senate", "minister", "president", "court", "law", "policy"]):
        return "Politics & Law", "Policy Shift", "badge-secondary"
    elif any(k in lower for k in ["market", "economy", "trade", "inflation", "tariff", "bank", "rate", "gdp", "stock", "fiscal"]):
        return "Economy & Markets", "Financial", "badge-accent"
    elif any(k in lower for k in ["war", "strike", "treaty", "diplomacy", "nato", "border", "security", "defense", "missile", "military"]):
        return "Geopolitics", "Strategic", "badge-warning"
    elif any(k in lower for k in ["climate", "energy", "carbon", "storm", "wildfire", "green", "oil", "nuclear", "solar", "renewable"]):
        return "Energy & Climate", "Climate", "badge-success"
    elif any(k in lower for k in ["health", "virus", "fda", "hospital", "pharma", "vaccine", "biotech"]):
        return "Health & Science", "Scientific", "badge-info"
    else:
        return "Controversy", "Investigation", "badge-info"


def _generate_heuristic_topics_for_country(
    country_code: str, country_name: str, headlines: List[Dict[str, str]]
) -> List[Dict[str, Any]]:
    """Dynamic story-driven heuristic fallback when live LLM synthesis is offline."""
    topics: List[Dict[str, Any]] = []
    for idx, h in enumerate(headlines[:9]):
        category, badge, badge_color = _categorize_headline(h["title"])
        raw_t = h["title"].strip()
        topic_heading = raw_t if len(raw_t.split()) <= 14 else " ".join(raw_t.split()[:12]) + "..."
        outlet_name = h.get("outlet", f"{country_name} Wire")
        summary = (
            f"A developing controversy reported via {outlet_name} has pushed '{topic_heading}' to the forefront of national debate. "
            f"Key stakeholders and regulatory bodies remain sharply divided over long-term policy fallout, with opposing factions clashing over economic impact and oversight. "
            f"Diverging media coverage highlights how partisan and financial narratives spin the crisis, underscoring essential lessons in transparency and institutional accountability."
        )
        topics.append({
            "id": f"{country_code.lower()}-{idx + 1}",
            "topic": topic_heading,
            "summary": summary,
            "category": category,
            "badge": badge,
            "badge_color": badge_color,
            "source_headline": h["title"],
            "source_outlet": outlet_name,
            "url": h.get("link", ""),
        })

    # If fewer than 9 headlines, backfill from offline defaults
    if len(topics) < 9:
        defaults = _get_offline_defaults_for_country(country_code, country_name)
        existing_topics = {t["topic"].lower() for t in topics}
        for d in defaults:
            if d["topic"].lower() not in existing_topics:
                topics.append(d)
            if len(topics) >= 9:
                break

    return topics[:9]


def _get_offline_defaults_for_country(country_code: str, country_name: str) -> List[Dict[str, Any]]:
    """Resilient offline fallback topics written in clear, accessible everyday English."""
    templates = [
        (
            f"{country_name} AI Developers Face Lawsuits Over Using Online Articles to Train AI Models",
            f"Major book publishers and news organizations filed lawsuits against leading AI companies for copying copyrighted work without permission. AI companies argue that learning from public online text is fair and necessary to build smart tools. Publishers counter that scraping their work without payment threatens the future of independent journalism.",
            "Technology & AI",
            "Policy Clash",
            "badge-primary",
        ),
        (
            f"{country_name} Central Bank Raises Interest Rates Again as Inflation and Debt Collide",
            f"The central bank announced another interest rate hike to fight rising consumer prices, sparking pushback from business leaders. Regulators argue that higher rates are the only proven way to bring everyday costs down. Critics and employers warn that higher borrowing costs hurt small businesses and risk causing layoffs.",
            "Economy & Markets",
            "Market Debate",
            "badge-accent",
        ),
        (
            f"{country_name} Fast-Track Lithium Mining Plans Spark Fierce Debate Over Water Safety",
            f"A government plan to speed up permits for mining battery minerals has triggered major protests from local communities. Supporters say domestic lithium is urgently needed to build electric vehicles and reduce oil dependence. Conservation groups and residents warn that chemical runoff could pollute vital drinking water supplies.",
            "Energy & Climate",
            "Controversy",
            "badge-success",
        ),
        (
            f"{country_name} New Computer Chip Export Bans Trigger Rift Between Tech Firms and Defense Officials",
            f"Strict trade bans preventing advanced computer chips and manufacturing gear from being sold abroad have divided defense leaders and tech companies. Security officials argue the limits prevent sensitive military technologies from leaking. Tech executives warn the rules cost billions in research revenue and push foreign rivals to build their own chips.",
            "Technology & AI",
            "Strategic",
            "badge-primary",
        ),
        (
            f"{country_name} High Court Limits Government Agency Powers in Historic Ruling",
            f"The top court ruled that government regulatory agencies cannot enforce major new rules without direct approval from elected lawmakers. Supporters praised the decision for keeping power in the hands of elected representatives. Consumer advocates worry the ruling weakens environmental protections and financial oversight.",
            "Politics & Law",
            "Ethics Audit",
            "badge-secondary",
        ),
        (
            f"{country_name} Import Taxes on Foreign Steel and Parts Divide Local Factories and Retailers",
            f"Sudden new taxes on imported steel and machinery have divided domestic businesses. Local factory owners argue the taxes protect jobs from cheap foreign competition. Retailers and economists warn that higher import costs will quickly lead to higher prices for everyday shoppers.",
            "Economy & Markets",
            "Policy Clash",
            "badge-warning",
        ),
        (
            f"{country_name} Proposed Law to Add Backdoors to Encrypted Apps Sparks Privacy Backlash",
            f"Security officials sparked fierce backlash after proposing rules requiring tech companies to build access backdoors into secure messaging apps. Officials say the capability is essential to catch criminals and foreign spies. Privacy advocates and cybersecurity experts counter that any backdoor makes everyone's personal data vulnerable to hackers.",
            "Technology & AI",
            "Investigation",
            "badge-primary",
        ),
        (
            f"{country_name} Government Caps on Prescription Drug Prices Trigger Fight Over Medical Research",
            f"New proposals to cap the price of life-saving medicines have brought patient advocacy groups and drugmakers into conflict. Families and health advocates say price caps provide desperately needed relief from soaring medical bills. Drug companies warn that price restrictions will force them to cut back on research for new cures.",
            "Health & Science",
            "Controversy",
            "badge-info",
        ),
        (
            f"{country_name} Energy Import Bans Threaten Power Grid Reliability as Winter Approaches",
            f"A government decision to halt energy imports from sanctioned foreign nations has raised urgent concerns over electricity supplies. Officials emphasize that boycotts are necessary to support international alliances and human rights. Power plant operators warn that cutting off fuel before clean energy alternatives are ready could trigger blackouts.",
            "Geopolitics",
            "Strategic",
            "badge-warning",
        ),
    ]

    res = []
    for idx, (top, sm, cat, bdg, col) in enumerate(templates):
        res.append({
            "id": f"{country_code.lower()}-{idx + 1}",
            "topic": top,
            "summary": sm,
            "category": cat,
            "badge": bdg,
            "badge_color": col,
            "source_headline": top,
            "source_outlet": f"{country_name} National Wire",
            "url": "",
        })
    return res


def _synthesize_batch_with_gemini(
    client: Any,
    batch: List[Dict[str, Any]],
    all_country_headlines: Dict[str, List[Dict[str, str]]]
) -> Dict[str, List[Dict[str, Any]]]:
    """Intelligently evaluates candidate news dispatches with Gemini, filtering noise and curating tool-worthy, story-driven cards."""
    country_codes = [c["code"] for c in batch]
    headlines_summary = []
    for c in batch:
        code = c["code"]
        c_headlines = all_country_headlines.get(code, [])
        titles = [f"- {h['title']} (Source: {h['outlet']})" for h in c_headlines[:20]]
        headlines_summary.append(f"### {c['name']} ({code}):\n" + ("\n".join(titles) if titles else "- Breaking national dispatches"))

    context_block = "\n\n".join(headlines_summary)

    prompt = f"""You are the Senior Editorial Director and Lead Media Bias Investigator for Agentic News, an autonomous multi-agent forensic news intelligence engine.
Below are live candidate news dispatches from Google News RSS feeds for {len(batch)} countries ({', '.join(country_codes)}):

{context_block}

MISSION & TOOL-WORTHINESS AUDIT:
Our platform deploys a 25-agent intelligence fleet (bias analysts, contradiction detectives, fact-checkers, debate simulators, root-cause diagnosticians).
Your task is to evaluate all incoming dispatches and curate exactly 9 topics per country that are PRIME CANDIDATES for multi-agent investigation.

4-PILLAR TOOL-WORTHINESS EVALUATION CRITERIA:
1. TRENDING & HIGH PUBLIC INTEREST: Major national or international developments with significant political, economic, legal, technological, or societal consequences that citizens and observers care deeply about.
2. MULTI-PERSPECTIVE & DEBATABLE: High-stakes issues with genuine ideological, ethical, or policy tension between competing factions (e.g., regulators vs innovators, national security hawks vs civil liberties advocates, labor unions vs corporate leadership, aggressive climate transition vs industrial baseload reliability).
3. STARK MEDIA BIAS & NARRATIVE DIVERGENCE: Controversies where partisan, state-backed, financial, or alternative media outlets frame the narrative through conflicting ideological filters, selective omissions, or loaded language.
4. INSTITUTIONAL LESSONS TO LEARN: Complex crises or policy dilemmas that offer profound governance, regulatory, or ethical takeaways rather than being dead-end isolated incidents.

INTELLIGENT NOISE FILTERING & STRICT GEOGRAPHIC RELEVANCE:
- STRICT NATIONAL RELEVANCE: Every topic curated for a country MUST directly focus on that specific country's domestic affairs, policies, laws, economy, leadership, companies, infrastructure, or direct international actions.
- ZERO FOREIGN SPILLOVER: NEVER assign headlines from a different nation (e.g., US local political controversies, French municipal incidents, British court cases) to another country (such as Germany, Japan, China, Russia, Saudi Arabia) unless that country is directly and centrally involved.
- REJECT isolated, one-off tragic accidents (e.g. amusement park ride malfunctions, individual vehicle crashes, localized animal escapes, slip-and-falls) which lack broader policy debates, ideological friction, or media bias.
- REJECT routine localized weather forecasts, lottery results, horoscopes, and trivial celebrity gossip/fashion.
- REJECT mundane administrative schedule notices without controversy.
- SEMANTICALLY CLUSTER & DEDUPLICATE: If multiple headlines cover the same incident or trial, consolidate them into a single definitive, multi-perspective card. Ensure all 9 topics for a country represent diverse domains!

TOPIC CARD SPECIFICATIONS (CASUAL-READER ACCESSIBILITY STANDARD):
1. 'topic' (HEADING):
   - Write clear, punchy, and conversational headings in everyday English (8-14 words).
   - Clearly state what happened and what the core tension is in plain terms that any reader can instantly grasp (e.g. 'Government Moves to Break Up Google Over Search Monopoly Fears' or 'New Tariffs on Chinese Electric Cars Trigger Warnings of Trade War').
   - Avoid dense academic or bureaucratic phrasing.
2. 'summary' (DESCRIPTION):
   - Write in clear, engaging, and accessible English (~8th-grade reading level) in 2-4 sentences.
   - Hook the reader with what happened and why it matters to everyday people or businesses.
   - Clearly explain both sides of the debate in simple, relatable terms.
   - Conclude with the main takeaway or question observers are watching.
3. ACCESSIBILITY & CLARITY:
   - Use straightforward language rather than dense corporate or legal terms (e.g. explain that 'injunction' means a court freeze, or use 'interest rate hikes' rather than 'hawkish monetary policy tightening').
   - Keep sentences active, crisp, and easy to read.
   - Ensure the 9 topics span varied categories:
     * Technology & AI
     * Economy & Markets
     * Politics & Law
     * Geopolitics
     * Energy & Climate
     * Health & Science

OUTPUT FORMAT:
Return a STRICT JSON OBJECT with country codes as keys ({', '.join(country_codes)}).
Under each key, provide an array of exactly 9 topic objects with:
- "id": string (e.g., "{country_codes[0].lower()}-1", "{country_codes[0].lower()}-2", ...)
- "topic": clear, conversational heading framing the tension in plain English (8-14 words)
- "summary": compelling narrative story in accessible everyday English explaining what happened, opposing arguments, and lessons (2-4 sentences)
- "category": e.g., "Technology & AI", "Economy & Markets", "Politics & Law", "Geopolitics", "Energy & Climate", "Health & Science"
- "badge": 1-2 words e.g. "Policy Clash", "Media Bias", "Controversy", "Market Debate", "Strategic", "Ethics Audit"
- "badge_color": one of ["badge-primary", "badge-secondary", "badge-accent", "badge-info", "badge-warning", "badge-success"]
- "source_headline": the original headline
- "source_outlet": source outlet name
- "url": source url if present

OUTPUT ONLY VALID JSON:
{{
  "{country_codes[0]}": [ ... 9 topics ... ]
}}
"""

    try:
        from google.genai import types
        response = client.models.generate_content(
            model=MODEL_AGENT_FAST,
            contents=prompt,
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        if response.text:
            parsed = json.loads(response.text)
            if isinstance(parsed, dict):
                return parsed
    except Exception as e:
        logger.warning("Batch synthesis failed for %s: %s", country_codes, e)

    return {}


def synthesize_with_gemini(all_country_headlines: Dict[str, List[Dict[str, str]]]) -> Optional[Dict[str, List[Dict[str, Any]]]]:
    """Uses Gemini API to synthesize trending, recognizable topics across all countries using parallel batching."""
    if IS_SIMULATION_MODE or not GEMINI_API_KEY:
        return None

    try:
        import concurrent.futures
        from google import genai

        client = genai.Client(api_key=GEMINI_API_KEY)

        batch_size = 4
        batches = [COUNTRY_CONFIGS[i:i + batch_size] for i in range(0, len(COUNTRY_CONFIGS), batch_size)]

        all_synthesized: Dict[str, List[Dict[str, Any]]] = {}
        with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
            future_to_batch = {
                executor.submit(_synthesize_batch_with_gemini, client, b, all_country_headlines): b
                for b in batches
            }
            for future in concurrent.futures.as_completed(future_to_batch):
                try:
                    res = future.result()
                    if isinstance(res, dict):
                        all_synthesized.update(res)
                except Exception as e:
                    logger.warning("Error processing country batch: %s", e)

        logger.info("Successfully synthesized Gemini trending topics for %d/%d countries.", len(all_synthesized), len(COUNTRY_CONFIGS))
        return all_synthesized if all_synthesized else None
    except Exception as e:
        logger.warning("Gemini synthesis for country topics failed: %s. Using heuristic synthesis.", e)

    return None



def generate_country_topic_suggestions() -> Dict[str, Any]:
    """Main orchestration function to fetch RSS and produce country-grouped topic suggestions (9 per country)."""
    start_time = time.time()
    logger.info("Starting country-grouped topic suggestions generation for %d countries...", len(COUNTRY_CONFIGS))

    # 1. Fetch live RSS headlines for each country concurrently
    import concurrent.futures

    all_country_headlines: Dict[str, List[Dict[str, str]]] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_code = {
            executor.submit(fetch_country_headlines, country["code"], country.get("rss_urls") or country.get("rss_url"), 35): country["code"]
            for country in COUNTRY_CONFIGS
        }
        for future in concurrent.futures.as_completed(future_to_code):
            code = future_to_code[future]
            try:
                all_country_headlines[code] = future.result()
            except Exception as e:
                logger.warning("Error fetching RSS for %s: %s", code, e)
                all_country_headlines[code] = []

    # 2. Attempt Gemini synthesis
    gemini_topics_by_country = synthesize_with_gemini(all_country_headlines)

    # 3. Assemble final country groups
    country_groups: List[Dict[str, Any]] = []
    for country in COUNTRY_CONFIGS:
        code = country["code"]
        name = country["name"]
        flag = country["flag"]

        topics_for_country: List[Dict[str, Any]] = []
        if gemini_topics_by_country and code in gemini_topics_by_country and len(gemini_topics_by_country[code]) >= 5:
            topics_for_country = gemini_topics_by_country[code][:9]
            # If Gemini returned fewer than 9, backfill
            if len(topics_for_country) < 9:
                c_headlines = all_country_headlines.get(code, [])
                extra = _generate_heuristic_topics_for_country(code, name, c_headlines)
                for item in extra:
                    if len(topics_for_country) >= 9:
                        break
                    if not any(t["topic"].lower() == item["topic"].lower() for t in topics_for_country):
                        topics_for_country.append(item)
        else:
            # Fall back to live RSS heuristic conversion
            c_headlines = all_country_headlines.get(code, [])
            topics_for_country = _generate_heuristic_topics_for_country(code, name, c_headlines)

        country_groups.append({
            "code": code,
            "name": name,
            "flag": flag,
            "topics": topics_for_country[:9],
        })

    now = time.time()
    now_iso = datetime.now(timezone.utc).isoformat()
    duration = time.time() - start_time
    logger.info("Generated topic suggestions across %d countries in %.2fs", len(country_groups), duration)

    return {
        "id": "latest",
        "created_at": now,
        "created_at_iso": now_iso,
        "updated_at": now,
        "expires_at": now + (24 * 3600),
        "cache_duration_seconds": 24 * 3600,
        "countries": country_groups,
    }
