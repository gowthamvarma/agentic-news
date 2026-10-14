import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

# Test configuration of improved RSS strategy
COUNTRIES = [
    {"code": "IN", "name": "India", "strategy": "edition_nation", "edition": "en-IN", "ceid": "IN:en"},
    {"code": "US", "name": "United States", "strategy": "edition_nation", "edition": "en-US", "ceid": "US:en"},
    {"code": "GB", "name": "United Kingdom", "strategy": "edition_nation", "edition": "en-GB", "ceid": "GB:en"},
    {"code": "CA", "name": "Canada", "strategy": "edition_nation", "edition": "en-CA", "ceid": "CA:en"},
    {"code": "AU", "name": "Australia", "strategy": "edition_nation", "edition": "en-AU", "ceid": "AU:en"},
    {"code": "SG", "name": "Singapore", "strategy": "edition_nation", "edition": "en-SG", "ceid": "SG:en"},
    {"code": "MY", "name": "Malaysia", "strategy": "edition_nation", "edition": "en-MY", "ceid": "MY:en"},
    {"code": "JP", "name": "Japan", "strategy": "search", "query": "Japan when:3d"},
    {"code": "DE", "name": "Germany", "strategy": "search", "query": "Germany when:3d"},
    {"code": "FR", "name": "France", "strategy": "search", "query": "France when:3d"},
    {"code": "CN", "name": "China", "strategy": "search", "query": "China when:3d"},
    {"code": "RU", "name": "Russia", "strategy": "search", "query": "Russia when:3d"},
    {"code": "SA", "name": "Saudi Arabia", "strategy": "search", "query": '"Saudi Arabia" OR Aramco when:3d'},
    {"code": "AE", "name": "United Arab Emirates", "strategy": "search", "query": 'UAE OR "United Arab Emirates" OR Dubai when:3d'},
    {"code": "IL", "name": "Israel", "strategy": "search", "query": "Israel when:3d"},
    {"code": "ID", "name": "Indonesia", "strategy": "search", "query": "Indonesia when:3d"},
]

def fetch_feed(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=8) as resp:
        root = ET.fromstring(resp.read())
        items = root.findall(".//item")
        titles = []
        for it in items[:10]:
            t = it.find("title").text if it.find("title") is not None else ""
            t = re.sub(r"\s*-\s*[^-]+$", "", t).strip()
            if t:
                titles.append(t)
        return titles

print("=== TESTING IMPROVED RSS HARVESTING STRATEGY ===")
for c in COUNTRIES:
    if c["strategy"] == "edition_nation":
        url = f"https://news.google.com/rss/headlines/section/topic/NATION?hl={c['edition']}&gl={c['code']}&ceid={c['ceid']}"
    else:
        url = f"https://news.google.com/rss/search?q={urllib.parse.quote(c['query'])}&hl=en-US&gl=US&ceid=US:en"
    
    titles = fetch_feed(url)
    print(f"\n[{c['code']}] {c['name']} (Strategy: {c['strategy']}, Feed items: {len(titles)}):")
    for idx, t in enumerate(titles[:4], 1):
        print(f"  {idx}. {t}")
