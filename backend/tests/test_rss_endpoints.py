import urllib.request
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding="utf-8")

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

test_urls = [
    ("India Home", "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en"),
    ("India NATION", "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-IN&gl=IN&ceid=IN:en"),
    ("Japan Home (current)", "https://news.google.com/rss?hl=en&gl=JP&ceid=JP:en"),
    ("Japan NATION", "https://news.google.com/rss/headlines/section/topic/NATION?hl=en&gl=JP&ceid=JP:en"),
    ("Japan GEO", "https://news.google.com/rss/headlines/section/geo/Japan?hl=en&gl=JP&ceid=JP:en"),
    ("Germany Home (current)", "https://news.google.com/rss?hl=en&gl=DE&ceid=DE:en"),
    ("Germany NATION", "https://news.google.com/rss/headlines/section/topic/NATION?hl=en&gl=DE&ceid=DE:en"),
    ("Germany GEO", "https://news.google.com/rss/headlines/section/geo/Germany?hl=en&gl=DE&ceid=DE:en"),
]

for label, url in test_urls:
    print(f"\n--- {label} ({url}) ---")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=8) as resp:
            root = ET.fromstring(resp.read())
            items = root.findall(".//item")
            print(f"Total items returned: {len(items)}")
            for item in items[:5]:
                t = item.find("title").text if item.find("title") is not None else ""
                print(f"  * {t}")
    except Exception as e:
        print(f"  Error: {e}")
