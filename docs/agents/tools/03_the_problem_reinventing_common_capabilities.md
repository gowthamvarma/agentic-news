# The Problem: Reinventing Common Capabilities

## Introduction: From Custom Tools to Built-In Capabilities

### Your Journey in Module 1

- **Lesson 1:** Understood tools fundamentally and built custom function tools.
- **Lesson 2:** Leveraging production-ready tools provided directly by ADK.

> **The Shift:** Instead of writing complex plumbing code from scratch, you import and use pre-built, production-grade tools maintained directly by ADK.

---

## Reinventing Common Capabilities

Suppose you want to add web search capabilities to your agent:

```python
# How would you implement web search from scratch?
def search_web(query: str) -> dict:
    """Search the web for information."""
    # How do we actually implement this?
    # - Need to integrate a search API (which provider? how to authenticate?)
    # - Parse and format unstructured search results for LLM consumption
    # - Handle rate limits, retries, and edge cases
    # - Keep external API integrations maintained across deprecations
    # - Optimize context window payload for the model
    # This involves massive engineering overhead!
    pass
```

---

## Issues with Building Everything Yourself

| Challenge | Impact |
| :--- | :--- |
| **Complex Implementation** | Managing API integrations, secret keys, authentication headers, and network errors. |
| **Maintenance Burden** | Tracking upstream API version shifts, payload changes, and library deprecations. |
| **Suboptimal Formatting** | Raw API responses often contain noisy HTML/JSON that burns token windows unless sanitized for LLMs. |
| **Missing Production Features** | Lack of built-in rate limiting, intelligent caching, latency management, and telemetry. |
| **Time-Consuming** | Wasting days or weeks reinventing capabilities that should take minutes to configure. |

---

## The Root Problem

Common capabilities like **web search** and **code execution** require significant engineering effort to implement, secure, and maintain reliably in production.
