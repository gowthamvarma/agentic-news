# The Problem: Not All State Should Persist Equally

## Introduction

### Where You Are Now

In Modules 1 and 2, you learned:

- Session state is a dictionary accessible via `session.state` on Agent Platform.
- `output_key` automatically saves agent responses to state.
- `{key}` templating injects state values into instructions.

You can now:

```python
from google.adk.agents import LlmAgent

# Save data with output_key
agent = LlmAgent(
    name="topic_extractor",
    model="gemini-flash-latest",
    instruction="Extract the main topic",
    output_key="topic"
)

# Use templating to inject state values
agent = LlmAgent(
    name="overview_agent",
    model="gemini-flash-latest",
    instruction="Provide an overview of {topic}"
)
```

### The Next Question

How long does state persist?

```python
# All are written to state, but how long do they live?
session.state["processing_step"] = "validation"
session.state["user_language"] = "Spanish"
session.state["api_endpoint"] = "https://api.example.com"
```

### The Answer

State namespaces control persistence scope.

---

## Not All State Should Persist Equally

Consider different types of data an agent needs:

```python
# These have VERY different lifetime requirements:
state["current_step"] = "validating"       # Only need right now
state["conversation_topic"] = "refunds"    # Need this conversation only
state["user_theme"] = "dark"               # Need across all conversations
state["api_url"] = "https://api.com"       # Global for all users
```

---

## Problems Without Namespaces

*Select each item to learn more.*

- **Temporary data persists forever:** Memory leak over time.
- **User preferences lost when session ends:** User must re-configure every time.
- **Global config stored per-session:** Wasteful duplication.
- **Key collisions within complex workflows:** Sub-agents and tools accidentally overwrite each other's state keys.

---

## What You Need

Different persistence scopes for different data types.
