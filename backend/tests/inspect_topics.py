import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding="utf-8")

req = urllib.request.Request("http://127.0.0.1:8080/api/topics/suggestions")
with urllib.request.urlopen(req, timeout=10) as resp:
    data = json.loads(resp.read().decode("utf-8"))

countries = data.get("countries", [])
with open("tests/current_topics.json", "w", encoding="utf-8") as f:
    json.dump(countries, f, indent=2, ensure_ascii=False)

for c in countries[:8]:
    name = c.get("name")
    code = c.get("code")
    topics = c.get("topics", [])
    print(f"=== {name} ({code}) - {len(topics)} Topics ===")
    for idx, t in enumerate(topics, 1):
        cat = t.get("category", "General")
        title = t.get("topic", "")
        print(f"  {idx}. [{cat}] {title}")
    print()
