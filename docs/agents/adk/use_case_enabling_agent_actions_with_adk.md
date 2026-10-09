# Use case: Enabling agent actions with ADK

**Source URL:** [Google Skills - Use case: Enabling agent actions with ADK](https://www.skills.google/paths/4525/course_templates/1504/documents/637116)

---

## Overview & Context

Cymbal Labs is a fictional biotechnology company that manages dozens of research and development projects simultaneously. Each project team is competing for a limited annual budget and the process of allocating funds and forecasting cash flow is reactive and slow.

In this lesson, you'll learn about how the **Agent Development Kit (ADK)** is used to define the core logic and build custom tools for specialized, high-code agents, enabling precise control over complex, orchestrated workflows.

---

## The Challenge: Inaccurate Resource Allocation

At Cymbal Labs, finance managers rely on static spreadsheets that don't easily integrate with real-time operational data including information like actual equipment usage or sudden vendor cost changes.

The lack of updated information often leads to under- or over-funding projects, creating budget overruns in some areas and unnecessary delays in others.

---

## The Solution: Building an Agent with ADK

Cymbal Labs needs an agent capable of more than simple data lookups. The agent must execute proprietary resource allocation formulas, handle conditional budget logic (e.g., funding shifts based on a project stage change), and securely orchestrate data flow between different data systems. ADK can provide developers with the capabilities they need for precise control.

---

## Technical Pillars

### 1. Defining Logic
ADK is essential for writing the complex, auditable rules that govern financial allocation and forecasting.

* **Custom business rules:** Finance developers use the ADK to write high-code logic that dictates how the Financial Resource Management (FRM) Agent handles specific financial scenarios. For instance, the exact formula for *"optimally redistributing resources"* (Step 2) is a proprietary algorithm written directly in the ADK, ensuring the calculation is precise and reproducible for audit.
* **Integrated scenario testing:** ADK is used to define the sophisticated function that processes the Gemini-powered scenario test. For the question:
  > *"If we double the spending on materials... how much longer does that extend the available budget?"*
  
  The ADK ensures the agent correctly executes the multi-step logic across various systems before passing the result to Gemini for final summary.

### 2. Orchestration
ADK can help control the flow of sensitive data between systems.

* **Delegated tool calls:** ADK can be used to orchestrate the process of **real-time budget tracking and alerting**. The custom agent can delegate the task of pulling real-time spending data to a specific, internal **data retrieval agent** tool that has authorized, secure access to the ERP (Enterprise Resource Planning) tool. This compartmentalization ensures that the primary agent only receives clean data and never directly accesses the sensitive financial database credentials.
* **Conditional logic handoff:** The ADK manages the complex decision flow for optimized resource allocation. It defines the rules:
  $$\text{IF (Project A budget is freed) AND (Project B meets success criteria) THEN (Execute reallocation)}$$
  This multi-conditional workflow is precisely defined and managed using the ADK's orchestration APIs.

### 3. Integrations
ADK enables the creation of specific tools needed to interface with unique systems.

* **Building custom connectors:** While Agent Garden provides common connectors, ADK is used to build custom tools that interface with Cymbal Labs' specific legacy ERP system or proprietary internal budget tracking software, ensuring the agent can pull live expense data that generic tools cannot access. This ability to integrate unique data sources is essential for accurate resource management.

---

## Key Takeaway

By leveraging ADK, Cymbal Labs builds an auditable, precise custom agent capable of enforcing proprietary allocation logic and securely orchestrating real-time financial data flows. This custom approach ensures the agent is robust, accurate, and trustworthy for important business decisions.
