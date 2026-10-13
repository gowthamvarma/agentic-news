"""Dynamic Country-Grouped Topic Suggestions Generator.

Ingests real-time Google News RSS feeds for diverse countries and generates
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

# Supported Country Configurations
COUNTRY_CONFIGS = [
    {
        "code": "GLOBAL",
        "name": "Global",
        "flag": "🌐",
        "rss_url": "https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "US",
        "name": "United States",
        "flag": "🇺🇸",
        "rss_url": "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "IN",
        "name": "India",
        "flag": "🇮🇳",
        "rss_url": "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",
    },
    {
        "code": "GB",
        "name": "United Kingdom",
        "flag": "🇬🇧",
        "rss_url": "https://news.google.com/rss?hl=en-GB&gl=GB&ceid=GB:en",
    },
    {
        "code": "SG",
        "name": "Singapore & ASEAN",
        "flag": "🇸🇬",
        "rss_url": "https://news.google.com/rss?hl=en-SG&gl=SG&ceid=SG:en",
    },
    {
        "code": "EU",
        "name": "European Union",
        "flag": "🇪🇺",
        "rss_url": "https://news.google.com/rss/search?q=Europe+European+Union+policy&hl=en-US&gl=US&ceid=US:en",
    },
    {
        "code": "AU",
        "name": "Australia",
        "flag": "🇦🇺",
        "rss_url": "https://news.google.com/rss?hl=en-AU&gl=AU&ceid=AU:en",
    },
    {
        "code": "CA",
        "name": "Canada",
        "flag": "🇨🇦",
        "rss_url": "https://news.google.com/rss?hl=en-CA&gl=CA&ceid=CA:en",
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


def fetch_country_headlines(country_code: str, rss_url: str, max_items: int = 8) -> List[Dict[str, str]]:
    """Fetches real breaking headlines from Google News RSS for a country."""
    headlines: List[Dict[str, str]] = []
    try:
        req = urllib.request.Request(rss_url, headers={"User-Agent": BROWSER_UA})
        with urllib.request.urlopen(req, timeout=6) as response:
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
    if any(k in lower for k in ["ai", "tech", "chip", "semiconductor", "cyber", "software", "apple", "google", "microsoft"]):
        return "Technology & AI", "Tech Shift", "badge-primary"
    elif any(k in lower for k in ["election", "vote", "parliament", "congress", "senate", "minister", "president", "court", "law"]):
        return "Politics & Law", "Policy Shift", "badge-secondary"
    elif any(k in lower for k in ["market", "economy", "trade", "inflation", "tariff", "bank", "rate", "gdp", "stock"]):
        return "Economy & Markets", "Financial", "badge-accent"
    elif any(k in lower for k in ["war", "strike", "treaty", "diplomacy", "nato", "border", "un ", "security", "defense"]):
        return "Geopolitics", "Strategic", "badge-warning"
    elif any(k in lower for k in ["climate", "energy", "carbon", "storm", "wildfire", "green", "oil", "nuclear"]):
        return "Energy & Climate", "Climate", "badge-success"
    elif any(k in lower for k in ["health", "virus", "fda", "hospital", "pharma", "vaccine"]):
        return "Health & Science", "Scientific", "badge-info"
    else:
        return "General Investigation", "Trending", "badge-info"


def _generate_heuristic_topics_for_country(
    country_code: str, country_name: str, headlines: List[Dict[str, str]]
) -> List[Dict[str, Any]]:
    """Heuristic fallback to convert live RSS headlines into structured topic cards."""
    topics: List[Dict[str, Any]] = []
    for idx, h in enumerate(headlines[:5]):
        category, badge, badge_color = _categorize_headline(h["title"])
        summary = (
            f"Cross-media reporting from {h['outlet']} examining national and multilateral impact "
            f"regarding {h['title'][:70]}."
        )
        topics.append({
            "id": f"{country_code.lower()}-{idx + 1}",
            "topic": h["title"],
            "summary": summary,
            "category": category,
            "badge": badge,
            "badge_color": badge_color,
            "source_headline": h["title"],
            "source_outlet": h.get("outlet", "News Agency"),
            "url": h.get("link", ""),
        })

    # If no live headlines were fetched (offline fallback)
    if not topics:
        defaults = _get_offline_defaults_for_country(country_code, country_name)
        return defaults

    return topics


def _get_offline_defaults_for_country(country_code: str, country_name: str) -> List[Dict[str, Any]]:
    """Resilient offline fallback topics per country if network is completely unreachable."""
    data = {
        "GLOBAL": [
            ("Global Climate Accord Implementation & Energy Transition", "Cross-nation enforcement mechanisms and carbon border tax negotiations.", "Energy & Climate", "Multilateral", "badge-success"),
            ("International AI Governance & Model Safety Standards", "UN and G7 consultative framework on frontier foundation model evaluations.", "Technology & AI", "Policy Shift", "badge-primary"),
            ("Global Supply Chain Diversification & Critical Minerals", "Multilateral treaties ensuring semiconductor manufacturing stability.", "Economy & Markets", "Strategic", "badge-accent"),
            ("WHO Pandemic Preparedness & Cross-Border Genomic Surveillance", "International response protocols for emerging infectious disease vectors.", "Health & Science", "Scientific", "badge-info"),
        ],
        "US": [
            ("U.S. Administration Halting PERM Program for Tech Companies H-1B", "Labor department regulatory review of immigration filings and tech hiring pipelines.", "Politics & Law", "Policy Shift", "badge-secondary"),
            ("Federal Reserve Interest Rate Policy & Liquidity Projections", "Monetary policy decisions balancing inflation persistence and employment metrics.", "Economy & Markets", "Financial", "badge-accent"),
            ("NASA Artemis Lunar Architecture & Commercial Space Integration", "Deep-space flight systems, booster stage evaluations, and milestone timelines.", "Technology & AI", "Breaking", "badge-primary"),
            ("Clean Energy Tax Incentives & Domestic Manufacturing Hubs", "State-level deployment of federal subsidy allocations for battery and solar infrastructure.", "Energy & Climate", "Climate", "badge-success"),
        ],
        "IN": [
            ("India Semiconductor Mission & Fab Infrastructure Grants", "Domestic manufacturing plants and global foundry co-investment approvals.", "Technology & AI", "Tech Shift", "badge-primary"),
            ("Renewable Energy Transmission Corridors & Green Hydrogen Goals", "Large-scale grid integration and clean export target timelines across western states.", "Energy & Climate", "Climate", "badge-success"),
            ("Digital Public Infrastructure & Cross-Border UPI Interoperability", "Bilateral payments integration treaties across Southeast Asia and the Gulf.", "Economy & Markets", "Financial", "badge-accent"),
            ("National High-Speed Rail & Logistics Corridor Expansion", "Freight corridor progress and inter-city connectivity infrastructure updates.", "Infrastructure", "Strategic", "badge-info"),
        ],
        "GB": [
            ("UK Industrial Strategy & Clean Power 2030 Roadmap", "National grid decarbonisation targets and offshore wind farm contract allocations.", "Energy & Climate", "Policy Shift", "badge-success"),
            ("Bank of England Inflation Benchmarks & Sovereign Debt Issuance", "Monetary policy committee assessments on wage growth and consumer sentiment.", "Economy & Markets", "Financial", "badge-accent"),
            ("NHS Digital Transformation & AI Diagnostic Tool Pilot", "Clinical workflow integration of automated triage models across regional trusts.", "Health & Science", "Tech Shift", "badge-info"),
            ("UK-EU Trade and Regulatory Alignment Discussions", "Sanitary and phytosanitary protocols and services sector mobility framework review.", "Politics & Law", "Diplomatic", "badge-secondary"),
        ],
        "SG": [
            ("Singapore National AI Strategy 2.0 & Compute Infrastructure", "Regional AI hub development, sovereign compute clusters, and talent development programs.", "Technology & AI", "Tech Shift", "badge-primary"),
            ("ASEAN Grid Interconnection & Regional Green Power Trading", "Cross-border electricity trade agreements connecting Laos, Malaysia, and Singapore.", "Energy & Climate", "Climate", "badge-success"),
            ("Monetary Authority of Singapore Digital Asset Regulatory Standards", "Stablecoin compliance frameworks and asset tokenization sandbox trials.", "Economy & Markets", "Financial", "badge-accent"),
            ("Maritime Decarbonization Hub & Alternative Marine Fuel Bunkering", "Port infrastructure readiness for green ammonia and methanol bunkering.", "Maritime & Trade", "Strategic", "badge-info"),
        ],
        "EU": [
            ("EU AI Act Enforcement Guidelines & High-Risk Model Audits", "European Commission compliance schedules for frontier foundation model deployers.", "Technology & AI", "Policy Shift", "badge-primary"),
            ("European Critical Raw Materials Act Supply Chains", "Strategic mining partnerships and domestic refining quota enforcement.", "Economy & Markets", "Strategic", "badge-accent"),
            ("Cross-Border High-Speed Rail Network Integration", "European transport corridor funding and ticket interoperability mandates.", "Infrastructure", "Trending", "badge-info"),
            ("EU Carbon Border Adjustment Mechanism (CBAM) Full Phase-In", "Emission reporting requirements for steel, aluminum, and fertilizer imports.", "Energy & Climate", "Climate", "badge-success"),
        ],
        "AU": [
            ("Future Made in Australia Act Clean Energy Production Incentives", "Government co-investment packages for critical minerals processing and solar manufacturing.", "Energy & Climate", "Climate", "badge-success"),
            ("Reserve Bank of Australia Cash Rate Trajectory & Housing Supply", "Mortgage repayment pressures and federal dwelling construction target reviews.", "Economy & Markets", "Financial", "badge-accent"),
            ("National Cyber Security Strategy & Critical Infrastructure Defense", "Mandatory ransomware reporting mandates for enterprise systems and utilities.", "Technology & AI", "Tech Shift", "badge-primary"),
            ("Pacific Regional Maritime Surveillance & Security Accords", "Trilateral maritime cooperation agreements across the Southwest Pacific basin.", "Geopolitics", "Strategic", "badge-warning"),
        ],
        "CA": [
            ("Canada Clean Energy Investment Tax Credits & Nuclear Deployment", "Small modular reactor rollouts and clean electricity investment credit guidelines.", "Energy & Climate", "Climate", "badge-success"),
            ("Bank of Canada Monetary Easing & Housing Affordability Metrics", "Interest rate reduction cycles and mortgage refinancing renewal trends.", "Economy & Markets", "Financial", "badge-accent"),
            ("Pan-Canadian Artificial Intelligence Strategy & Compute Access", "Public research supercomputing access and sovereign compute cluster initiatives.", "Technology & AI", "Tech Shift", "badge-primary"),
            ("Arctic Sovereignty & Critical Infrastructure Modernization", "Northern radar replacement initiatives and deep-water port infrastructure upgrades.", "Geopolitics", "Strategic", "badge-warning"),
        ],
    }

    raw_items = data.get(country_code, data["GLOBAL"])
    res = []
    for idx, (top, sm, cat, bdg, col) in enumerate(raw_items):
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
    """Uses Gemini API to synthesize real RSS headlines into investigative topic suggestions."""
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
            titles = [f"- {h['title']} (Source: {h['outlet']})" for h in c_headlines[:6]]
            headlines_summary.append(f"### {country['name']} ({code}):\n" + "\n".join(titles))

        context_block = "\n\n".join(headlines_summary)

        prompt = f"""You are a senior investigative news editor and intelligence analyst.
Below are real-time breaking headlines fetched from live Google News RSS feeds across different countries and regions:

{context_block}

TASK:
For EACH of the countries ({', '.join([c['code'] for c in COUNTRY_CONFIGS])}), formulate 4 to 5 high-value, forensically interesting investigative topics suitable for deep multi-agent fact-checking and analysis.
Topics must reflect current real events from the headlines above, formatted with journalistic precision.

Return a STRICT JSON OBJECT with country codes as keys (GLOBAL, US, IN, GB, SG, EU, AU, CA).
Under each key, provide a list of 4 to 5 topic objects with:
- "id": string (e.g., "us-1", "in-2")
- "topic": concise, professional, investigative topic title (10-14 words max)
- "summary": 1-2 sentence explainer in simple, clear English explaining the controversy, policy stake, or forensic significance
- "category": e.g., "Technology & AI", "Economy & Markets", "Politics & Law", "Geopolitics", "Energy & Climate", "Health & Science"
- "badge": 1-2 words e.g. "Trending", "Breaking", "Policy Shift", "Investigation", "Market Alert", "Strategic"
- "badge_color": one of ["badge-primary", "badge-secondary", "badge-accent", "badge-info", "badge-warning", "badge-success"]
- "source_headline": the original live headline that inspired this topic

OUTPUT ONLY VALID JSON:
{{
  "GLOBAL": [ ... ],
  "US": [ ... ],
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
            logger.info("Successfully synthesized live Gemini country topic suggestions.")
            return parsed
    except Exception as e:
        logger.warning("Gemini synthesis for country topics failed: %s. Using heuristic synthesis.", e)

    return None


def generate_country_topic_suggestions() -> Dict[str, Any]:
    """Main orchestration function to fetch RSS and produce country-grouped topic suggestions.

    Guaranteed to return high quality results either via Gemini synthesis or
    live RSS heuristic conversion.
    """
    start_time = time.time()
    logger.info("Starting country-grouped topic suggestions generation...")

    # 1. Fetch live RSS headlines for each country concurrently
    import concurrent.futures

    all_country_headlines: Dict[str, List[Dict[str, str]]] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        future_to_code = {
            executor.submit(fetch_country_headlines, country["code"], country["rss_url"], 8): country["code"]
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
        if gemini_topics_by_country and code in gemini_topics_by_country and gemini_topics_by_country[code]:
            topics_for_country = gemini_topics_by_country[code]
        else:
            # Fall back to live RSS heuristic conversion
            c_headlines = all_country_headlines.get(code, [])
            topics_for_country = _generate_heuristic_topics_for_country(code, name, c_headlines)

        country_groups.append({
            "code": code,
            "name": name,
            "flag": flag,
            "topics": topics_for_country,
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
