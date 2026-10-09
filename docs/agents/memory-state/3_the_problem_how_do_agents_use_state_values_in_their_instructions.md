# The Problem: How Do Agents Use State Values in Their Instructions?

## Introduction

### Where You Are Now

You learned:

- Session state is a dictionary accessible via `session.state` on Agent Platform.
- `output_key` automatically saves agent responses to state.
- You can access state from outside the agent using `session.state.get("key")`.

You can now:

```python
from google.adk.agents import LlmAgent

# Agent that saves its response
agent = LlmAgent(
    name="name_extractor",
    model="gemini-flash-latest",
    instruction="Extract the user's name",
    output_key="user_name"
)

# After running: session.state["user_name"] contains the extracted name
```

### The Next Step

Learn how to use those saved values inside agent instructions, making your agents dynamic and context-aware.

---

## How Do Agents Use State Values in Their Instructions?

You know how to save data to state, but how do you tell the agent to use that data?

```python
from google.adk.agents import LlmAgent

# Imagine state already has user information
# session.state["user_name"] = "Alex"
# session.state["user_language"] = "Spanish"

# How do you tell the agent to USE these values?
agent = LlmAgent(
    name="greeter",
    model="gemini-flash-latest",
    instruction="Respond to the user"  # Too generic! # How do we say: "Respond to Alex in Spanish"?
)
```

*Select each card to learn more.*

### The Challenge

You want instructions to adapt based on state values. You want the agent to automatically use “Alex” and “Spanish” without hard-coding them.

### What You Need

A way to inject `state["user_name"]` and `state["user_language"]` into the instruction automatically.
