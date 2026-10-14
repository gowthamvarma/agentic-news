import urllib.request
import urllib.parse
import json
import time
import threading

print("--- 1. CHECKING BACKEND HEALTH ---")
with urllib.request.urlopen("http://127.0.0.1:8080/api/health", timeout=5) as resp:
    health_res = json.loads(resp.read().decode("utf-8"))
    print("Backend Health:", health_res)

print("\n--- 2. CHECKING FRONTEND HTTP STATUS ---")
with urllib.request.urlopen("http://localhost:5173/", timeout=5) as resp:
    print(f"Frontend HTTP Status: {resp.status} OK")

print("\n--- 3. CHECKING TOPIC SUGGESTIONS ENDPOINT ---")
t0 = time.time()
req = urllib.request.Request("http://127.0.0.1:8080/api/topics/suggestions")
with urllib.request.urlopen(req, timeout=5) as resp:
    res = json.loads(resp.read().decode("utf-8"))
    elapsed = time.time() - t0
    countries = res.get("countries", [])
    print(f"First call to /api/topics/suggestions: {elapsed:.3f}s. Countries count: {len(countries)}")

t0 = time.time()
with urllib.request.urlopen(req, timeout=5) as resp:
    res_cached = json.loads(resp.read().decode("utf-8"))
    cached_elapsed = time.time() - t0
    print(f"Second call (cached in memory): {cached_elapsed:.4f}s")

print("\n--- 4. CONCURRENT TAB SIMULATION ---")
tab1_started = threading.Event()
tab1_done = threading.Event()
tab2_result = {}

def simulate_tab1():
    print("[Tab 1] Starting news analysis streaming GET request...")
    topic_param = urllib.parse.quote("Artificial Intelligence")
    url = f"http://127.0.0.1:8080/api/analyze/stream?topic={topic_param}"
    req = urllib.request.Request(url, headers={"Accept": "text/event-stream"})
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            print("[Tab 1] Connected to SSE stream. Receiving chunks...")
            tab1_started.set()
            for line in resp:
                # Keep consuming stream
                pass
    except Exception as e:
        print("[Tab 1] Streaming Exception:", e)
    finally:
        tab1_done.set()
        print("[Tab 1] Analysis finished streaming.")

def simulate_tab2():
    tab1_started.wait(timeout=10)
    time.sleep(1.0) # Ensure Tab 1 is mid-stream in its analysis stages
    print("[Tab 2] Tab 1 is actively streaming! Tab 2 now requesting /api/topics/suggestions...")
    start = time.time()
    req = urllib.request.Request("http://127.0.0.1:8080/api/topics/suggestions")
    with urllib.request.urlopen(req, timeout=5) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        dur = time.time() - start
        tab2_result["duration"] = dur
        tab2_result["countries"] = len(data.get("countries", []))
        print(f"[Tab 2] SUCCESS! Received response in {dur:.4f}s with {tab2_result['countries']} countries while Tab 1 is streaming!")

t1 = threading.Thread(target=simulate_tab1)
t2 = threading.Thread(target=simulate_tab2)

t1.start()
t2.start()

t2.join(timeout=10)
t1.join(timeout=65)

print("\n--- 5. FINAL TEST VERIFICATION ---")
dur = tab2_result.get("duration", 999.0)
print(f"Tab 2 load time during Tab 1 analysis: {dur:.4f}s")
assert dur < 0.5, f"Tab 2 was blocked or took too long: {dur:.4f}s"
print("SUCCESS: Tab 2 loaded topic suggestions near-instantaneously without any blocking!")
