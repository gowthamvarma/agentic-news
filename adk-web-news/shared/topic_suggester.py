"""Dynamic Country-Grouped Topic Suggestions Generator.

Ingests real-time Google News RSS feeds for 20 global countries and generates
structured, forensic investigative topic suggestions using Gemini API
(with resilient live RSS headline heuristic fallback).
Stored in Firestore for instant page loads with a 4-hour validity window.
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

# Supported 34 Country Configurations across 6 continents
COUNTRY_CONFIGS = [
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
        "code": "MX",
        "name": "Mexico",
        "flag": "🇲🇽",
        "rss_url": "https://news.google.com/rss/search?q=Mexico+economy+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "BR",
        "name": "Brazil",
        "flag": "🇧🇷",
        "rss_url": "https://news.google.com/rss/search?q=Brazil+economy+trade&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "AR",
        "name": "Argentina",
        "flag": "🇦🇷",
        "rss_url": "https://news.google.com/rss/search?q=Argentina+economy+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "CL",
        "name": "Chile",
        "flag": "🇨🇱",
        "rss_url": "https://news.google.com/rss/search?q=Chile+economy+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "DE",
        "name": "Germany",
        "flag": "🇩🇪",
        "rss_url": "https://news.google.com/rss/search?q=Germany+news&hl=en-US&gl=US&ceid=US:en",
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
        "rss_url": "https://news.google.com/rss/search?q=France+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "CH",
        "name": "Switzerland",
        "flag": "🇨🇭",
        "rss_url": "https://news.google.com/rss/search?q=Switzerland+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "IT",
        "name": "Italy",
        "flag": "🇮🇹",
        "rss_url": "https://news.google.com/rss/search?q=Italy+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "ES",
        "name": "Spain",
        "flag": "🇪🇸",
        "rss_url": "https://news.google.com/rss/search?q=Spain+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "NL",
        "name": "Netherlands",
        "flag": "🇳🇱",
        "rss_url": "https://news.google.com/rss/search?q=Netherlands+economy+technology&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "PL",
        "name": "Poland",
        "flag": "🇵🇱",
        "rss_url": "https://news.google.com/rss/search?q=Poland+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "RU",
        "name": "Russia",
        "flag": "🇷🇺",
        "rss_url": "https://news.google.com/rss/search?q=Russia+sanctions+geopolitics&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "CN",
        "name": "China",
        "flag": "🇨🇳",
        "rss_url": "https://news.google.com/rss/search?q=China+economy+technology&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "IN",
        "name": "India",
        "flag": "🇮🇳",
        "rss_url": "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",
    },
    {
        "code": "JP",
        "name": "Japan",
        "flag": "🇯🇵",
        "rss_url": "https://news.google.com/rss/search?q=Japan+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "KR",
        "name": "South Korea",
        "flag": "🇰🇷",
        "rss_url": "https://news.google.com/rss/search?q=South+Korea+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "TW",
        "name": "Taiwan",
        "flag": "🇹🇼",
        "rss_url": "https://news.google.com/rss/search?q=Taiwan+semiconductors+policy&hl=en-US&gl=US&ceid=US:en",
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
        "rss_url": "https://news.google.com/rss/search?q=Indonesia+news&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "MY",
        "name": "Malaysia",
        "flag": "🇲🇾",
        "rss_url": "https://news.google.com/rss/search?q=Malaysia+news+economy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "TH",
        "name": "Thailand",
        "flag": "🇹🇭",
        "rss_url": "https://news.google.com/rss/search?q=Thailand+news+economy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "VN",
        "name": "Vietnam",
        "flag": "🇻🇳",
        "rss_url": "https://news.google.com/rss/search?q=Vietnam+economy+manufacturing&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "SA",
        "name": "Saudi Arabia",
        "flag": "🇸🇦",
        "rss_url": "https://news.google.com/rss/search?q=Saudi+Arabia+Vision+2030+energy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "AE",
        "name": "United Arab Emirates",
        "flag": "🇦🇪",
        "rss_url": "https://news.google.com/rss/search?q=UAE+Dubai+Abu+Dhabi+business&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "IL",
        "name": "Israel",
        "flag": "🇮🇱",
        "rss_url": "https://news.google.com/rss/search?q=Israel+news+diplomacy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "TR",
        "name": "Turkey",
        "flag": "🇹🇷",
        "rss_url": "https://news.google.com/rss/search?q=Turkey+economy+diplomacy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "ZA",
        "name": "South Africa",
        "flag": "🇿🇦",
        "rss_url": "https://news.google.com/rss?hl=en-ZA&gl=ZA&ceid=ZA:en",
    },
    {
        "code": "NG",
        "name": "Nigeria",
        "flag": "🇳🇬",
        "rss_url": "https://news.google.com/rss?hl=en-NG&gl=NG&ceid=NG:en",
    },
    {
        "code": "EG",
        "name": "Egypt",
        "flag": "🇪🇬",
        "rss_url": "https://news.google.com/rss/search?q=Egypt+news+economy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "KE",
        "name": "Kenya",
        "flag": "🇰🇪",
        "rss_url": "https://news.google.com/rss/search?q=Kenya+news+economy&hl=en-US&gl=US&ceid=US:en",
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


def fetch_country_headlines(country_code: str, rss_url: str, max_items: int = 15) -> List[Dict[str, str]]:
    """Fetches real breaking headlines from Google News RSS for a country."""
    headlines: List[Dict[str, str]] = []
    try:
        req = urllib.request.Request(rss_url, headers={"User-Agent": BROWSER_UA})
        with urllib.request.urlopen(req, timeout=7) as response:
            xml_data = response.read()
            root = ET.fromstring(xml_data)
            items = root.findall(".//item")
            for item in items[:max_items]:
                raw_title = item.find("title").text if item.find("title") is not None else ""
                link = item.find("link").text if item.find("link") is not None else ""
                pub_date = item.find("pubDate").text if item.find("pubDate") is not None else ""
                source_elem = item.find("source")
                outlet = source_elem.text if source_elem is not None and source_elem.text else "News Agency"

                # Strip outlet suffix (e.g., "Headline Text - The Guardian")
                title = re.sub(r"\s*-\s*[^-]+$", "", raw_title).strip()
                if title:
                    headlines.append({
                        "title": title,
                        "raw_title": raw_title,
                        "outlet": outlet,
                        "link": link,
                        "pub_date": pub_date,
                    })
    except Exception as e:
        logger.warning("Error fetching RSS headlines for %s (%s): %s", country_code, rss_url, e)
    return headlines


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
        return "General Investigation", "Breaking", "badge-info"


def _generate_heuristic_topics_for_country(
    country_code: str, country_name: str, headlines: List[Dict[str, str]]
) -> List[Dict[str, Any]]:
    """Heuristic fallback to convert live RSS headlines into structured topic cards (guaranteed 9 articles)."""
    topics: List[Dict[str, Any]] = []
    for idx, h in enumerate(headlines[:9]):
        category, badge, badge_color = _categorize_headline(h["title"])
        summary = (
            f"Forensic cross-source analysis examining primary reporting, regulatory stakes, "
            f"and socioeconomic implications regarding {h['title'][:70]}."
        )
        topics.append({
            "id": f"{country_code.lower()}-{idx + 1}",
            "topic": h["title"],
            "summary": summary,
            "category": category,
            "badge": badge,
            "badge_color": badge_color,
            "source_headline": h["title"],
            "source_outlet": h.get("outlet", f"{country_name} Wire"),
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

    # If still fewer than 9, synthetically generate structured templates
    while len(topics) < 9:
        idx = len(topics) + 1
        topics.append({
            "id": f"{country_code.lower()}-{idx}",
            "topic": f"{country_name} Strategic Development & Sovereign Policy Initiative #{idx}",
            "summary": f"In-depth investigation auditing institutional compliance, fiscal projections, and cross-outlet perspectives in {country_name}.",
            "category": "Economy & Markets" if idx % 2 == 0 else "Technology & AI",
            "badge": "Investigation",
            "badge_color": BADGE_COLORS[idx % len(BADGE_COLORS)],
            "source_headline": f"National Overview for {country_name}",
            "source_outlet": f"{country_name} Monitor",
            "url": "",
        })

    return topics[:9]


def _get_offline_defaults_for_country(country_code: str, country_name: str) -> List[Dict[str, Any]]:
    """Resilient offline fallback topics (9 topics per country)."""
    # 9 core templates tailored to country_name
    templates = [
        (f"{country_name} Clean Energy Grid & Critical Transition Goals", "Regulatory timelines, renewable integration targets, and domestic infrastructure subsidies.", "Energy & Climate", "Climate", "badge-success"),
        (f"{country_name} Sovereign AI Compute & High-Tech Export Standards", "National compute clusters, algorithmic transparency guidelines, and domestic innovation funding.", "Technology & AI", "Tech Shift", "badge-primary"),
        (f"{country_name} Central Bank Monetary Trajectory & Inflation Metrics", "Fiscal policy balancing benchmark interest rates, consumer purchasing power, and trade flows.", "Economy & Markets", "Financial", "badge-accent"),
        (f"{country_name} Strategic Border Defense & Regional Bilateral Accords", "Security modernization programs, diplomatic dialogues, and cross-border defense pacts.", "Geopolitics", "Strategic", "badge-warning"),
        (f"{country_name} Public Healthcare Diagnostic Modernization & Research", "Healthcare infrastructure audits, pharma procurement transparency, and medical innovation pilots.", "Health & Science", "Scientific", "badge-info"),
        (f"{country_name} Logistics & High-Speed Freight Corridor Modernization", "Supply chain resilience audits, port expansions, and inter-city connectivity investments.", "Infrastructure", "Trending", "badge-secondary"),
        (f"{country_name} Digital ID & Financial Data Governance Framework", "Consumer data privacy protections, digital payments standards, and cross-border data treaties.", "Technology & AI", "Policy Shift", "badge-primary"),
        (f"{country_name} Agricultural Food Security & Water Resource Audits", "Drought resilience strategies, agricultural subsidy restructuring, and domestic grain reserves.", "Agriculture", "Investigation", "badge-warning"),
        (f"{country_name} Parliamentary Ethics & Public Procurement Oversight", "Auditing regulatory compliance, public tender awards, and government transparency safeguards.", "Politics & Law", "Policy Shift", "badge-secondary"),
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
            "source_outlet": "Forensic Desk",
            "url": "",
        })
    return res


def synthesize_with_gemini(all_country_headlines: Dict[str, List[Dict[str, str]]]) -> Optional[Dict[str, List[Dict[str, Any]]]]:
    """Uses Gemini API to synthesize real RSS headlines into 9 investigative topic suggestions per country."""
    if IS_SIMULATION_MODE or not GEMINI_API_KEY:
        return None

    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=GEMINI_API_KEY)

        # Build prompt containing real headlines per country
        headlines_summary = []
        for country in COUNTRY_CONFIGS:
            code = country["code"]
            c_headlines = all_country_headlines.get(code, [])
            titles = [f"- {h['title']} (Source: {h['outlet']})" for h in c_headlines[:10]]
            headlines_summary.append(f"### {country['name']} ({code}):\n" + "\n".join(titles))

        context_block = "\n\n".join(headlines_summary)

        prompt = f"""You are a senior investigative news editor and intelligence analyst.
Below are real-time breaking headlines fetched from live Google News RSS feeds across {len(COUNTRY_CONFIGS)} countries:

{context_block}

TASK:
For EACH of the {len(COUNTRY_CONFIGS)} countries ({', '.join([c['code'] for c in COUNTRY_CONFIGS])}), formulate EXACTLY 9 high-value, forensically interesting investigative topics suitable for deep multi-agent fact-checking and media intelligence analysis.
Topics must reflect current real events from the headlines above, formatted with journalistic precision.

Return a STRICT JSON OBJECT with country codes as keys ({', '.join([c['code'] for c in COUNTRY_CONFIGS])}).
Under each key, provide a list of exactly 9 topic objects with:
- "id": string (e.g., "us-1", "us-2", ..., "us-9")
- "topic": concise, professional, investigative topic title (10-14 words max)
- "summary": 1-2 sentence explainer in simple, clear English explaining the controversy, policy stake, or forensic significance
- "category": e.g., "Technology & AI", "Economy & Markets", "Politics & Law", "Geopolitics", "Energy & Climate", "Health & Science"
- "badge": 1-2 words e.g. "Trending", "Breaking", "Policy Shift", "Investigation", "Market Alert", "Strategic"
- "badge_color": one of ["badge-primary", "badge-secondary", "badge-accent", "badge-info", "badge-warning", "badge-success"]
- "source_headline": the original live headline that inspired this topic
- "source_outlet": the source outlet name

OUTPUT ONLY VALID JSON:
{{
  "US": [ ... 9 topics ... ],
  "CA": [ ... 9 topics ... ],
  ...
}}
"""
        response = client.models.generate_content(
            model=MODEL_AGENT_FAST,
            contents=prompt,
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )

        if response.text:
            parsed = json.loads(response.text)
            logger.info("Successfully synthesized live Gemini country topic suggestions for %d countries.", len(parsed))
            return parsed
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
            executor.submit(fetch_country_headlines, country["code"], country["rss_url"], 15): country["code"]
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
        "expires_at": now + (4 * 3600),
        "cache_duration_seconds": 4 * 3600,
        "countries": country_groups,
    }
