import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding="utf-8")

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

queries = [
    ("Japan Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("Japan when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
    ("Germany Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("Germany when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
    ("China Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("China when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
    ("France Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("France when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
    ("Russia Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("Russia when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
    ("Israel Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("Israel when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
    ("Saudi Arabia Search Query", "https://news.google.com/rss/search?q=" + urllib.parse.quote("Saudi Arabia when:2d") + "&hl=en-US&gl=US&ceid=US:en"),
]

for label, url in queries:
    print(f"\n=== {label} ===")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=8) as resp:
            root = ET.fromstring(resp.read())
            items = root.findall(".//item")
            print(f"Total items: {len(items)}")
            for item in items[:6]:
                t = item.find("title").text if item.find("title") is not None else ""
                print(f"  * {t}")
    except Exception as e:
        print(f"  Error: {e}")
