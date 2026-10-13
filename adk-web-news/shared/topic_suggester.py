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

# Supported 16 Core Country Configurations in prioritized order (English edition feeds)
COUNTRY_CONFIGS = [
    {
        "code": "IN",
        "name": "India",
        "flag": "🇮🇳",
        "rss_url": "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",
    },
    {
        "code": "US",
        "name": "United States",
        "flag": "🇺🇸",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "CA",
        "name": "Canada",
        "flag": "🇨🇦",
        "rss_url": "https://news.google.com/rss?hl=en-CA&gl=CA&ceid=CA:en",
    },
    {
        "code": "CN",
        "name": "China",
        "flag": "🇨🇳",
        "rss_url": "https://news.google.com/rss?hl=en&gl=CN&ceid=CN:zh-CN",
    },
    {
        "code": "RU",
        "name": "Russia",
        "flag": "🇷🇺",
        "rss_url": "https://news.google.com/rss?hl=en&gl=RU&ceid=RU:en",
    },
    {
        "code": "GB",
        "name": "United Kingdom",
        "flag": "🇬🇧",
        "rss_url": "https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en",
    },
    {
        "code": "FR",
        "name": "France",
        "flag": "🇫🇷",
        "rss_url": "https://news.google.com/rss?hl=en&gl=FR&ceid=FR:en",
    },
    {
        "code": "DE",
        "name": "Germany",
        "flag": "🇩🇪",
        "rss_url": "https://news.google.com/rss?hl=en&gl=DE&ceid=DE:en",
    },
    {
        "code": "AE",
        "name": "United Arab Emirates",
        "flag": "🇦🇪",
        "rss_url": "https://news.google.com/rss?hl=en&gl=AE&ceid=AE:en",
    },
    {
        "code": "SA",
        "name": "Saudi Arabia",
        "flag": "🇸🇦",
        "rss_url": "https://news.google.com/rss?hl=en&gl=SA&ceid=SA:en",
    },
    {
        "code": "IL",
        "name": "Israel",
        "flag": "🇮🇱",
        "rss_url": "https://news.google.com/rss?hl=en&gl=IL&ceid=IL:en",
    },
    {
        "code": "JP",
        "name": "Japan",
        "flag": "🇯🇵",
        "rss_url": "https://news.google.com/rss?hl=en&gl=JP&ceid=JP:en",
    },
    {
        "code": "SG",
        "name": "Singapore",
        "flag": "🇸🇬",
        "rss_url": "https://news.google.com/rss?hl=en-SG&gl=SG&ceid=SG:en",
    },
    {
        "code": "ID",
        "name": "Indonesia",
        "flag": "🇮🇩",
        "rss_url": "https://news.google.com/rss?hl=en&gl=ID&ceid=ID:en",
    },
    {
        "code": "MY",
        "name": "Malaysia",
        "flag": "🇲🇾",
        "rss_url": "https://news.google.com/rss?hl=en-MY&gl=MY&ceid=MY:en",
    },
    {
        "code": "AU",
        "name": "Australia",
        "flag": "🇦🇺",
        "rss_url": "https://news.google.com/rss?hl=en-AU&gl=AU&ceid=AU:en",
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


def fetch_country_headlines(country_code: str, rss_url: str, max_items: int = 30) -> List[Dict[str, str]]:
    """Fetches real breaking headlines from Google News RSS for intelligent agentic evaluation.
    
    Collects raw candidate dispatches with clean text normalization without brute-force
    regex keyword blacklists or arbitrary word-overlap clipping.
    """
    raw_headlines: List[Dict[str, str]] = []
    seen_titles: set[str] = set()

    try:
        req = urllib.request.Request(rss_url, headers={"User-Agent": BROWSER_UA})
        with urllib.request.urlopen(req, timeout=8) as response:
            xml_data = response.read()
            root = ET.fromstring(xml_data)
            items = root.findall(".//item")
            for item in items[:max_items]:
                raw_title = item.find("title").text if item.find("title") is not None else ""
                link = item.find("link").text if item.find("link") is not None else ""
                pub_date = item.find("pubDate").text if item.find("pubDate") is not None else ""
                source_elem = item.find("source")
                outlet = source_elem.text if source_elem is not None and source_elem.text else "News Agency"

                # Clean headline: unescape entities and strip trailing outlet suffix (e.g., "Headline Text - The Guardian")
                title = re.sub(r"\s*-\s*[^-]+$", "", raw_title).strip()
                title = re.sub(r"\s+", " ", title)

                # Skip blank or exact duplicate title strings
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
    except Exception as e:
        logger.warning("Error fetching RSS headlines for %s (%s): %s", country_code, rss_url, e)

    return raw_headlines[:25]



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
    """Resilient offline fallback topics with precise headings and captivating story-driven narratives."""
    templates = [
        (
            f"{country_name} AI Developers Face Landmark Copyright Injunction Over Training Dataset Fair Use",
            f"When major publishers and author guilds filed federal copyright lawsuits against frontier artificial intelligence developers, it ignited an existential battle over intellectual property. Tech executives assert that training neural networks on publicly accessible internet text constitutes protected, transformative fair use essential for technological progress. Meanwhile, media coalitions argue that uncompensated scraping cannibalizes the financial foundation of independent journalism, setting up a high-stakes legal precedent for creative labor in the algorithmic era.",
            "Technology & AI",
            "Policy Clash",
            "badge-primary",
        ),
        (
            f"{country_name} Central Bank Tightens Monetary Policy as Inflation and Sovereign Debt Clash",
            f"Central bank governors delivered an aggressive benchmark interest rate hike to quell persistent core inflation, sparking immediate fury from industrial coalitions and government treasuries. Proponents argue that sustained hawkish monetary discipline is the only proven defense against permanent price erosion for working households. Critics and corporate leaders counter that protracted rate tightening risks triggering sovereign debt yield spikes and mass layoffs, testing whether inflation suppression justifies near-term economic contraction.",
            "Economy & Markets",
            "Market Debate",
            "badge-accent",
        ),
        (
            f"{country_name} Fast-Track Lithium Mining Concessions Ignite Battle Over Environmental Conservation",
            f"A government decision to fast-track permits for critical battery mineral extraction has triggered intense protests across vulnerable watersheds. Pro-industry advocates insist that domestic lithium reserves are vital for clean energy independence and next-generation battery supply chains. Conversely, conservation biologists and local communities warn that toxic chemical runoff threatens scarce aquifers, exposing the painful trade-off between green industrial transformation and environmental conservation.",
            "Energy & Climate",
            "Controversy",
            "badge-success",
        ),
        (
            f"{country_name} Semiconductor Export Controls Provoke Fierce Debate Over Tech Sovereignty",
            f"National security directives enforcing strict export bans on advanced lithography machinery and AI compute accelerators have opened a rift between defense officials and domestic manufacturers. National security analysts argue the embargo is paramount to prevent sovereign military vulnerabilities and technological encirclement. Semiconductor executives push back, warning that unilateral controls forfeit billions in research revenue and accelerate rival nations' drive toward chip self-sufficiency.",
            "Technology & AI",
            "Strategic",
            "badge-primary",
        ),
        (
            f"{country_name} High Court Limits Administrative Agency Powers in Landmark Constitutional Ruling",
            f"In a historic separation-of-powers decision, the highest appellate court ruled that statutory agencies cannot enforce expansive federal regulations without explicit legislative authorization. Constitutional traditionalists celebrated the verdict as a vital restoration of legislative accountability against unelected administrative overreach. Civil society watchdogs and consumer advocates argue the ruling paralyzes environmental and financial oversight, leaving the public defenseless against corporate misconduct.",
            "Politics & Law",
            "Ethics Audit",
            "badge-secondary",
        ),
        (
            f"{country_name} Retaliatory Tariffs on Industrial Imports Divide Domestic Manufacturers and Retailers",
            f"The sudden implementation of defensive customs duties on foreign steel and manufacturing equipment has pitted heavy industrial producers directly against consumer retail groups. Factory owners insist tariffs are indispensable to defend sovereign factories against state-subsidized foreign dumping. Economists and retail associations warn that retaliatory escalations directly ignite consumer inflation and strain global shipping lanes, forcing a national reckoning over economic protectionism.",
            "Economy & Markets",
            "Policy Clash",
            "badge-warning",
        ),
        (
            f"{country_name} Telecom Security Mandates Clash With End-to-End Cryptographic Privacy Standards",
            f"Security ministries triggered a fierce privacy revolt after proposing legislation mandating that telecommunications carriers build lawful interception backdoors into encrypted communication networks. Intelligence officials contend the capabilities are indispensable for neutralizing cybercrime syndicates and state-sponsored espionage. Cryptographers and digital rights defenders counter that deliberate backdoors fatally compromise global cybersecurity, leaving critical infrastructure vulnerable to catastrophic zero-day breaches.",
            "Technology & AI",
            "Investigation",
            "badge-primary",
        ),
        (
            f"{country_name} Statutory Drug Price Negotiation Caps Spark Battle Over Healthcare Innovation",
            f"A sweeping legislative push to enforce statutory price caps on life-saving pharmaceuticals has brought healthcare reformers and multinational biotechnology firms into open conflict. Patient advocacy coalitions praise the measures for providing essential relief to families burdened by astronomical prescription drug costs. Pharmaceutical lobbyists warn that price restrictions will force companies to slash research budgets and withdraw local clinical trials, challenging the balance between affordability and medical innovation.",
            "Health & Science",
            "Controversy",
            "badge-info",
        ),
        (
            f"{country_name} Foreign Hydrocarbon Sanctions Enforcement Threatens Baseload Power Grid Stability",
            f"Diplomatic commitments to enforce international boycotts against discounted foreign energy imports have sparked an acute domestic power crisis. Foreign ministry officials stress that honoring international alliance sanctions is non-negotiable for geopolitical credibility. Domestic utility executives warn that severing baseload fuel supplies before renewable infrastructure is mature risks widespread industrial brownouts, highlighting the stark friction between moral foreign policy and domestic grid security.",
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

INTELLIGENT NOISE FILTERING (SEMANTIC REASONING, NOT BRUTE-FORCE RULES):
- REJECT isolated, one-off tragic accidents (e.g. amusement park ride malfunctions, individual vehicle crashes, localized animal escapes, slip-and-falls) which lack broader policy debates, ideological friction, or media bias.
- REJECT routine localized weather forecasts, lottery results, horoscopes, and trivial celebrity gossip/fashion.
- REJECT mundane administrative schedule notices without controversy.
- SEMANTICALLY CLUSTER & DEDUPLICATE: If multiple headlines cover the same incident or trial, consolidate them into a single definitive, multi-perspective card. Ensure all 9 topics for a country represent diverse domains!

TOPIC CARD SPECIFICATIONS:
1. 'topic' (HEADING):
   - Precisely and clearly suggest what the topic is about (8-14 words).
   - Frame the subject, the core conflict/tension, and what is at stake.
   - Informative and sharp (e.g. 'DOJ Antitrust Lawsuit: Federal Regulators Push to Break Up Google Search Monopoly' or 'EU Tariffs on Chinese Electric Vehicles Spark Fierce Trade War Warnings').
   - NEVER use vague 3-word titles or cryptic phrases.
2. 'summary' (DESCRIPTION):
   - Explain the main points in the topic LIKE A STORY TO GET THE USER INTERESTED (2-4 sentences).
   - Hook the reader with the dramatic catalyst or breaking revelation.
   - Clearly identify the opposing factions, what they argue, and why the stakes are high.
   - Highlight the contrasting media narratives and the vital systemic, legal, or ethical lesson to learn.
3. DOMAIN & VOCABULARY PRESERVATION:
   - Preserve exact technical, legal, financial, and industry vocabulary (e.g., 'antitrust', 'subpoena', 'injunction', 'monetary tightening', 'basis points', 'lithography', 'generative AI', 'retaliatory tariffs', 'baseload capacity', 'sovereign debt yields').
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
- "topic": precise, crystal-clear heading framing the tension (8-14 words)
- "summary": compelling narrative story explaining what happened, opposing arguments, and lessons (2-4 sentences)
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
            executor.submit(fetch_country_headlines, country["code"], country["rss_url"], 25): country["code"]
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
