import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

# Load current app topics
with open("tests/current_topics.json", "r", encoding="utf-8") as f:
    app_countries = json.load(f)

app_topics_by_country = {c["code"]: c for c in app_countries}

print("=== SIDE-BY-SIDE EVALUATION: APP TOPICS vs GOOGLE NEWS ===")

results = []

for c in app_countries:
    code = c["code"]
    name = c["name"]
    app_topics = [t["topic"] for t in c.get("topics", [])]
    
    # 1. Fetch current Google News headlines
    # If the country has an English edition, fetch its edition feed; otherwise search for country
    google_headlines = []
    feed_url = f"https://news.google.com/rss?hl=en-{code}&gl={code}&ceid={code}:en"
    
    try:
        req = urllib.request.Request(feed_url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=6) as resp:
            root = ET.fromstring(resp.read())
            items = root.findall(".//item")
            for it in items[:15]:
                t = it.find("title").text if it.find("title") is not None else ""
                t = re.sub(r"\s*-\s*[^-]+$", "", t).strip()
                if t:
                    google_headlines.append(t)
    except Exception as e:
        pass
    
    # Also fetch Google News Search for this country to see local relevance
    search_url = f"https://news.google.com/rss/search?q={urllib.parse.quote(name + ' when:3d')}&hl=en-US&gl=US&ceid=US:en"
    search_headlines = []
    try:
        req = urllib.request.Request(search_url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=6) as resp:
            root = ET.fromstring(resp.read())
            items = root.findall(".//item")
            for it in items[:15]:
                t = it.find("title").text if it.find("title") is not None else ""
                t = re.sub(r"\s*-\s*[^-]+$", "", t).strip()
                if t:
                    search_headlines.append(t)
    except Exception as e:
        pass

    print(f"\n=======================================================")
    print(f"COUNTRY: {name} ({code})")
    print(f"=======================================================")
    print(f"--- Top 5 App Topics Suggested: ---")
    for idx, at in enumerate(app_topics[:5], 1):
        print(f"  {idx}. {at}")
        
    print(f"--- Top 5 Live Google News Edition Headlines: ---")
    for idx, gh in enumerate(google_headlines[:5], 1):
        print(f"  {idx}. {gh}")
        
    print(f"--- Top 5 Live Google News Country-Specific Search Headlines: ---")
    for idx, sh in enumerate(search_headlines[:5], 1):
        print(f"  {idx}. {sh}")

    results.append({
        "code": code,
        "name": name,
        "app_topics": app_topics,
        "google_edition": google_headlines[:10],
        "google_search": search_headlines[:10],
    })

with open("tests/comparison_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("\nComparison results written to tests/comparison_results.json")
