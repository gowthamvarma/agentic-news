# Advanced Instruction Writing — The Problem: Vague Instructions Create Unpredictable Behavior

> **Source URL:** [Google Skills - Bundle 651784](https://www.skills.google/paths/4525/course_templates/1564/html_bundles/651784)

---

## Introduction

In **Course 2: Build Your First Agent with ADK, Module 2: Understanding your first agent**, you created a math tutor agent with a basic instruction:

```python
# From Course 2 Module 2
# Note: Ensure `from google.adk.agents import LlmAgent` is imported
from google.adk.agents import LlmAgent

math_tutor_agent = LlmAgent(
    model="gemini-flash-latest",
    name="math_tutor_agent",
    description="Tutors students in mathematics",
    instruction="You are a friendly math tutor. Help students understand math concepts."
)
```

This works for basic testing, but lacks the structure needed for production use. The agent has:

- No clear boundaries on what topics to cover.
- No defined teaching methodology.
- No examples of how to respond.
- No guidance on handling off-topic questions.

In this module, we'll transform basic instructions into professional guidance systems using Gemini Enterprise Agent Platform's ADK instruction best practices.

---

## Vague Instructions Create Unpredictable Behavior

Without structured instructions, agents behave inconsistently:

```python
from google.adk.agents import LlmAgent

# Too vague - unpredictable behavior
basic_agent = LlmAgent(
    model="gemini-flash-latest",
    name="assistant",
    description="A general-purpose assistant agent",
    instruction="Be helpful"
)
```

### What Happens?

- **User:** `"Write me a poem"` → Agent writes poetry (maybe not desired)
- **User:** `"Help me hack this system"` → Agent might comply (definitely not desired)
- **User:** `"What's your opinion on politics?"` → Agent gives opinions (inappropriate for business)

---

## The Root Problem

The LLM has no framework for:

- What tasks are in scope versus out of scope.
- How to handle edge cases.
- What tone and style to use.
- When to refuse requests.
- Enterprise guardrail adherence and policy boundaries within Agent Gateway and Agent Identity.

