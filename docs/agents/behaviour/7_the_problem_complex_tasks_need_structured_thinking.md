# The Problem: Complex Tasks Need Structured Thinking

## Introduction: From Reactive to Thoughtful Agents

In previous modules, your agents responded immediately:

```python
# From Modules 1-3
# Note: Ensure `from google.adk.agents import LlmAgent` is imported

agent = LlmAgent(
    model="gemini-flash-latest",
    name="basic_problem_solver",
    description="A simple agent that responds directly to user queries",
    instruction="Solve problems for users"
)

# User: "Plan a trip to Japan for 2 weeks with a $5000 budget"
# Agent immediately generates response - might miss considerations
```

This works for simple tasks, but complex problems benefit from structured thinking:

- No step-by-step problem decomposition.
- No consideration of alternatives.
- No internal reasoning visible to debug.
- Might jump to conclusions without planning.

---

### What Qualifies as a “Complex Problem”?

Complex problems require multiple considerations, trade-off analysis, or sequential reasoning:

*Select each item to learn more.*

- **Business strategy:** “How can I reduce cloud costs by 30% without impacting performance?” (requires analyzing cost drivers, performance requirements, and creating a phased approach).
- **Technical decisions:** “Should I use microservices or monolithic architecture for my startup MVP?” (requires weighing trade-offs: speed vs. scalability, team size, future growth).
- **Multi-step planning:** “Plan a 2-week Japan trip for a family of 4 on a $5000 budget” (requires coordinating flights, hotels, activities, meals—all within budget constraints).

---

### Simple Problems That Don’t Need Planning

*Select each card to learn more.*

- **Direct factual questions:** “What is the capital of France?”
- **Single calculations:** “Convert 100 USD to EUR.”
- **Straightforward tasks:** “Greet the user warmly.”

---

### Planning Versus Multi-Agent Approaches

Use planning when a single agent needs to reason through multiple steps or trade-offs within their domain. Use multiple agents (covered in course 5) when the problem requires distinct specialized skills that should be divided among separate agents. This module focuses on adding planning to improve a single agent’s reasoning capabilities.

In this module, we’ll add ADK's `BuiltInPlanner` on Agent Platform to enable multi-step reasoning.

---

## Complex Tasks Need Structured Thinking

Without planning, agents struggle with multi-step problems:

```python
# No planning - agent tries to solve immediately
problem_solver = LlmAgent(
    model="gemini-flash-latest",
    name="unplanned_solver",
    description="Attempts to answer complex multi-step problems without a planner",
    instruction="Help users solve complex problems"
)

# User: "How can I reduce my company's cloud costs by 30% without impacting performance?"
# Agent might:
# - Miss important considerations
# - Provide surface-level suggestions
# - Not think through trade-offs
# - Jump to conclusions
```

---

## The Root Problem

Complex tasks require breaking down the problem, considering options, and planning an approach before responding.

Within Agent Platform, configuring explicit planning mechanisms ensures reasoning chains are inspectable, auditable, and aligned with enterprise governance requirements.
