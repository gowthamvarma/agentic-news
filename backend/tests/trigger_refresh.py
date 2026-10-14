import urllib.request
import json
import sys
import time

sys.stdout.reconfigure(encoding="utf-8")

print("Triggering /api/topics/suggestions/refresh with improved Google News feed strategy...")
t0 = time.time()
req = urllib.request.Request("http://127.0.0.1:8080/api/topics/suggestions/refresh", data=b"{}", headers={"Content-Type": "application/json"})

with urllib.request.urlopen(req, timeout=90) as resp:
    data = json.loads(resp.read().decode("utf-8"))
    elapsed = time.time() - t0
    print(f"Refresh completed in {elapsed:.2f}s!")

countries = data.get("countries", [])
print(f"Total countries generated: {len(countries)}\n")

with open("tests/improved_topics.json", "w", encoding="utf-8") as f:
    json.dump(countries, f, indent=2, ensure_ascii=False)

for c in countries:
    name = c.get("name")
    code = c.get("code")
    topics = c.get("topics", [])
    print(f"==================================================")
    print(f"{name} ({code}) - {len(topics)} Topics")
    print(f"==================================================")
    for idx, t in enumerate(topics, 1):
        cat = t.get("category", "General")
        title = t.get("topic", "")
        badge = t.get("badge", "")
        print(f"  {idx}. [{cat} | {badge}] {title}")
    print()
