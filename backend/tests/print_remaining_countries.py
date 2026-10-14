import json
import sys

sys.stdout.reconfigure(encoding="utf-8")

with open("tests/current_topics.json", "r", encoding="utf-8") as f:
    countries = json.load(f)

for c in countries[8:]:
    name = c.get("name")
    code = c.get("code")
    topics = c.get("topics", [])
    print(f"=== {name} ({code}) - {len(topics)} Topics ===")
    for idx, t in enumerate(topics, 1):
        cat = t.get("category", "General")
        title = t.get("topic", "")
        badge = t.get("badge", "")
        print(f"  {idx}. [{cat} | {badge}] {title}")
    print()
