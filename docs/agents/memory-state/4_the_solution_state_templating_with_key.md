# The Solution: State Templating with `{key}`

> **Reference:** ADK Documentation - Accessing Session State in Agent Instructions

> "When working with `LlmAgent` instances, you can directly inject session state values into the agent's instruction string using a simple templating syntax. This allows you to create dynamic and context-aware instructions without relying solely on natural language directives."
>
> — ADK docs

---

## How It Works

```python
# State contains user information
session.state["user_name"] = "Alex"

# Agent uses templating
agent = LlmAgent(
    name="greeter",
    model="gemini-flash-latest",
    instruction="Hello {user_name}, how can I help you today?"
)

# Before LLM sees the instruction, ADK automatically:
# 1. Looks up session.state["user_name"]
# 2. Replaces {user_name} with "Alex"
# 3. Sends resolved instruction to LLM: "Hello Alex, how can I help you today?"
```

### Complete Example

```python
from google.adk.agents import LlmAgent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService

# Setup
session_service = InMemorySessionService()
session = session_service.create_session(app_name="app", user_id="user1")

# Manually set state (simulating previous interaction or external data)
session.state["user_name"] = "Alex"
session.state["user_language"] = "Spanish"

# Agent with templating
agent = LlmAgent(
    name="localized_greeter",
    model="gemini-flash-latest",
    instruction="Hello {user_name}. Please respond in {user_language}."
)

# When agent runs:
# LLM receives: "Hello Alex. Please respond in Spanish."
```

---

## Core Concepts

### 1. State Templating Syntax: `{key}`

> **Reference:** ADK documentation - Using {key} templating
>
> “To inject a value from the session state, enclose the key of the desired state variable within curly braces: `{key}`. The framework will automatically replace this placeholder with the corresponding value from `session.state` before passing the instruction to the LLM.”
>
> — ADK docs

**Basic syntax:**

```python
instruction="Process {variable_name}"

# ADK automatically:
# 1. Scans instruction for {key} patterns
# 2. Looks up session.state["variable_name"]
# 3. Replaces {variable_name} with actual value
# 4. Sends resolved instruction to LLM
```

**Example:**

```python
# State contains:
session.state["topic"] = "quantum computing"

agent = LlmAgent(
    name="topic_agent",
    model="gemini-flash-latest",
    instruction="Provide an overview of {topic}"
)

# Before LLM call, instruction becomes:
# "Provide an overview of quantum computing"
```

**Key points:**
- Templating happens before each agent invocation.
- Variables are replaced with their current state values.
- Works with any state key.
- Case-sensitive: `{name}` ≠ `{Name}`.

---

### 2. Optional Templating: `{key?}`

> **Reference:** ADK Documentation - Important Considerations
>
> “Ensure that the key you reference in the instruction string exists in the `session.state`. If the key is missing, the agent will throw an error. To use a key that may or may not be present, you can include a question mark (`?`) after the key (e.g. `{topic?}`).”
>
> — ADK docs

**Why you need it:**

```python
# Without optional syntax - errors if key missing
instruction="Greet {user_name}"
# If state["user_name"] doesn't exist → Error!

# With optional syntax - no error if key missing
instruction="Greet {user_name?}"
# If state["user_name"] doesn't exist → resolves to "Greet "
```

**Syntax variations:**

```python
# Basic optional - empty if missing
"{key?}"
# Result if var missing: "" (empty string)

# Optional with default text
"{key?default text}"
# Result if var="value": "value"
# Result if var missing: "default text"

# Conditional text block
"{premium_user?You have premium access.}"
# Result if premium_user exists and truthy: "You have premium access."
# Result if premium_user missing or falsy: "" (empty string)
```

**Practical example:**

```python
agent = LlmAgent(
    name="assistant",
    model="gemini-flash-latest",
    instruction="""
    You are a helpful assistant.

    User preferences:
    - Name: {user_name?Guest}
    - Language: {user_language?English}

    {premium_user?✨ Premium features are enabled.}

    Respond to the user's question.
    """
)

# If user_name not in state, defaults to "Guest"
# If premium_user not in state, that line disappears entirely
```

---

### 3. How Templating Works with State

**Pattern:**

**Execution flow:**

```python
# 1. State is set (from previous turn or manually)
session.state["user_name"] = "Alex"
session.state["topic"] = "quantum computing"

# 2. Agent has templated instruction
agent = LlmAgent(
    name="tutor",
    model="gemini-flash-latest",
    instruction="Hello {user_name}. Let's discuss {topic}."
)

# 3. When agent runs, ADK resolves templates:
# Before: "Hello {user_name}. Let's discuss {topic}."
# After: "Hello Alex. Let's discuss quantum computing."

# 4. LLM receives resolved instruction
# 5. LLM generates response based on resolved instruction
```

> **Key insight:** Templating makes instructions dynamic based on state, without changing agent code.

---

## Hands-On Example: Building a Personalized Greeting Agent

**What you’ll build:** An agent that uses state templating to create personalized responses based on user information stored in state.

### Step 1: Create the Project

```bash
adk create personalized_greeter
cd personalized_greeter
```

### Step 2: Write the Agent

Replace the contents of `agent.py` with:

```python
"""
Personalized Greeter - Demonstrates State Templating
Shows how {key} templating injects state values into instructions.

Reference: https://adk.dev/sessions/state/
"""

from google.adk.agents import LlmAgent

# Agent with state templating
root_agent = LlmAgent(
    model="gemini-flash-latest",
    name="personalized_greeter",
    instruction="""
    You are a friendly assistant.

    User information:
    - Name: {user_name?there}
    - Preferred language: {user_language?English}
    - Membership: {membership_tier?free}

    {membership_tier?Your membership level is: {membership_tier}}

    Greet the user warmly and offer assistance.
    Respond in {user_language?English}.
    """
)
```

**Code walkthrough:**

**Templated instruction:**
- Uses `model="gemini-flash-latest"` for optimal response generation.
- `{user_name?there}` - Uses “there” if `user_name` not in state.
- `{user_language?English}` - Defaults to “English” if not set.
- `{membership_tier?free}` - Shows “free” if not specified.
- Conditional line only appears if `membership_tier` exists.
- Instruction adapts based on available state.

### Step 3: Test with Runner

Create `test_templating.py`:

```python
"""
Test state templating with different state values.
Run with: python test_templating.py
"""

from agent import root_agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai.types import Content, Part

# Setup
session_service = InMemorySessionService()
session = session_service.create_session(
    app_name="greeter_app",
    user_id="user1",
    session_id="session1"
)

runner = Runner(
    agent=root_agent,
    app_name="greeter_app",
    session_service=session_service
)

# Test 1: No state set (all defaults)
print("=== Test 1: No state (all defaults) ===")
result1 = runner.run(
    user_id="user1",
    session_id="session1",
    new_message=Content(parts=[Part(text="Hello")])
)

for event in result1:
    if event.is_final_response():
        print(f"Agent: {event.content.parts[0].text}\n")

# Test 2: Set user name only
print("=== Test 2: With user name ===")
session.state["user_name"] = "Alex"

result2 = runner.run(
    user_id="user1",
    session_id="session1",
    new_message=Content(parts=[Part(text="Hello again")])
)

for event in result2:
    if event.is_final_response():
        print(f"Agent: {event.content.parts[0].text}\n")

# Test 3: Set all state values
print("=== Test 3: With all state values ===")
session.state["user_name"] = "Alex"
session.state["user_language"] = "Spanish"
session.state["membership_tier"] = "premium"

result3 = runner.run(
    user_id="user1",
    session_id="session1",
    new_message=Content(parts=[Part(text="Hola de nuevo")])
)

for event in result3:
    if event.is_final_response():
        print(f"Agent: {event.content.parts[0].text}\n")

print("=== Current state ===")
print(session.state)
```

Run it:

```bash
python test_templating.py
```

**Expected output:**

```text
=== Test 1: No state (all defaults) ===
Agent: Hello there! I'm here to help you with anything you need. How can I assist you today?

=== Test 2: With user name ===
Agent: Hello Alex! Great to see you again. How can I help you today?

=== Test 3: With all state values ===
Agent: ¡Hola Alex! Tu nivel de membresía es: premium. ¿En qué puedo ayudarte hoy?

=== Current state ===
{'user_name': 'Alex', 'user_language': 'Spanish', 'membership_tier': 'premium'}
```

**What to notice:**
- Test 1: All defaults used (`{user_name?there}` → “there”).
- Test 2: Partial state (`{user_name}` → “Alex”, others default).
- Test 3: Full state, Spanish response, membership shown.
- Instruction adapts dynamically based on available state.

---

## Key Takeaways

### State Templating Enables Dynamic Instructions
- Use `{key}` syntax to inject state values into instructions.
- ADK resolves templates before sending them to LLM.
- Works with any state key.
- Makes agents context-aware without code changes.

### Optional Syntax Prevents Errors
- `{key}` → Errors if missing (strict mode).
- `{key?}` → Empty if missing (optional mode).
- `{key?default}` → Uses default text if missing.
- `{key?Conditional text}` → Shows text only if var exists.

### Common Pattern

```python
# 1. State is set (from previous turn or external data)
session.state["user_name"] = "Alex"

# 2. Agent uses templating
agent = LlmAgent(
    name="greeter",
    model="gemini-flash-latest",
    instruction="Hello {user_name?there}"
)

# 3. Instruction resolves automatically
# LLM receives: "Hello Alex"
```

### When to Use Templating
- When instructions need to adapt based on state.
- When personalizing agent behavior.
- When injecting exact values from your application.
- When making instructions context-aware on Agent Platform.

---

## Next Part

You’ll learn about state namespaces (`temp:`, `user:`, `app:`) that control how long state values persist.
