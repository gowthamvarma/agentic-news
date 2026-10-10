# The Problem: Agents Limited by Training Data

## Introduction: From Agent Fundamentals to Tools

You've learned the core agent equation:

$$\text{Agent} = \text{Model} + \text{Tools} + \text{Orchestration}$$

This course completes the core agent equation by teaching you to equip agents with tools—the capabilities that transform agents from intelligent responders into action-capable assistants.

---

## Agents Limited by Training Data

Let's revisit an agent from the *Optimize Agent Behavior* course:

```python
# From Optimize Agent Behavior course - sophisticated agent without tools
from google.adk.agents import LlmAgent

agent = LlmAgent(
    model="gemini-flash-latest",
    instruction="""
    You are a helpful assistant that provides users with current information.
    Always be accurate and up-to-date in your responses.
    """,
)
```

Now consider these sample user requests:

- *"What's the weather in Tokyo right now?"*
- *"Calculate the shipping cost for a 5kg package to Canada"*
- *"Look up order #ORD12345 in our system"*

---

## The Fundamental Limitations

| Limitation | Impact |
| :--- | :--- |
| **LLM only knows training data** | Information is frozen at training time; cannot access real-time or current data. |
| **Cannot perform calculations** | While LLMs can reason about math, they cannot reliably execute precise computations. |
| **Cannot access external systems** | No built-in ability to query databases, invoke APIs, or interact with external services. |
| **Cannot take actions** | Can only generate text; cannot perform operations or execute side-effects in the real world. |

---

## The Root Problem

The agent is limited to what the LLM knows from its training data. For current information, external data, or real-world actions, you need **tools**.
