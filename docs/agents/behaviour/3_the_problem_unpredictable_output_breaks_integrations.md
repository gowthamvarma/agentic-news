# Structured Output — The Problem: Unpredictable Output Breaks Integrations

> **Source URL:** [Google Skills - Bundle 651787](https://www.skills.google/paths/4525/course_templates/1564/html_bundles/651787)

---

## Introduction: From Text to Structured Data

In **Course 2, Module 1**, your agents returned free-form text:

```python
from google.adk.agents import LlmAgent

# From previous modules
agent = LlmAgent(
    model="gemini-flash-latest",
    name="product_extractor",
    description="Extracts product details from customer input",
    instruction="Extract product information from user messages"
)
```

### Example Interaction

- **User:** `"I want the iPhone 15 Pro with 256GB"`
- **Agent Response:** `"The user is interested in an iPhone 15 Pro with 256GB storage."`

This works for human readers, but causes severe problems for systems:

- **No guaranteed format:** Responses vary every time.
- **Hard to parse:** Natural language text processing is error-prone.
- **No validation:** Missing fields go unnoticed.
- **Can't integrate easily:** Databases and downstream enterprise systems need consistent structure.

In this module, we’ll use ADK’s `output_schema` (backed by Pydantic and native Gemini controlled generation on Agent Platform) to enforce structured JSON responses that systems can rely on.

---

## Unpredictable Output Breaks Integrations

> **Reference:** Structured output

Without structured output, even good instructions produce inconsistent results:

```python
# No output schema - unpredictable format
text_agent = LlmAgent(
    model="gemini-flash-latest",
    name="unstructured_product_agent", 
    description="Attempts to extract product information without schema enforcement",
    instruction="Extract product name, price, and storage from the user's message"
)
```

### What Happens Across Multiple Runs?

When a user sends:

> **User:** `"I want iPhone 15 Pro 256GB for $999"`

The agent produces varying formats across different runs:

- **Run 1:** `"Product: iPhone 15 Pro, Price: $999, Storage: 256GB"`
- **Run 2:** `"The iPhone 15 Pro costs $999 and has 256GB storage"`
- **Run 3:** `"iPhone 15 Pro - $999 - 256GB"`

---

## The Root Problem

Your application cannot reliably parse these varying formats. Downstream code relying on regular expressions, substring matching, or custom string parsing will inevitably break when wording changes.

You need **guaranteed JSON structure enforced at the model schema level** (via `output_schema`) rather than relying solely on natural-language prompt instructions.