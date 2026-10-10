# The Problem: Capabilities Beyond What's Built In

## Introduction: From Built-In Tools to Ecosystem Tools

### Your Journey Across Modules

- **Module 1:** Understood tools fundamentally and built your first tool-enabled agent.
- **Module 2:** Used production-ready built-in tools (Google Search, Code Execution) provided directly by ADK.
- **Module 3:** Connecting agents to external tool servers via a standardized protocol.

> **The Shift:** Instead of being restricted solely to tools built natively into ADK or building bespoke wrappers from scratch, you connect your agents to pre-existing, standardized tool servers maintained by the community and ecosystem.

---

## Capabilities Beyond What's Built In

Built-in tools provide essential primitives, but real-world agentic applications require access to broader systems:

```python
# Real-world agents require capabilities like:
# - Local filesystem access & directory traversal
# - Direct relational & NoSQL database connections
# - Third-party developer & SaaS platforms (GitHub, Slack, Notion, Jira)
# - Specialized domain-specific engines and protocols
#
# These are NOT built directly into ADK core!
# Do you have to write custom integrations for each from scratch?
```

---

## Issues with Building Everything from Scratch

| Challenge | Reality |
| :--- | :--- |
| **Not Built into ADK Core** | A single framework cannot natively maintain connectors for every SaaS service, database, and OS interface. |
| **Duplicate Community Effort** | Thousands of developers have already written and debugged reliable connectors for tools like GitHub and PostgreSQL. |
| **High Protocol Complexity** | Robust integrations require complex state machines, connection pooling, authentication handshakes, and transport safety. |
| **Domain Maintenance** | Dedicated vendors and open-source maintainers update tools much faster than generalist wrapper scripts can keep up with. |

---

## The Root Problem

There is an enormous ecosystem of external tools, services, and APIs. How do we connect our ADK agents to them **without writing custom glue code for every individual integration?**
