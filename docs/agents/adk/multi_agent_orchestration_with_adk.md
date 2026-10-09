# Multi-agent Orchestration with ADK

**Source URL:** [Google Skills - Multi-agent Orchestration with ADK](https://www.skills.google/paths/4525/course_templates/1504/documents/637115)

---

## Overview

Unlike older frameworks built around a single, reactive agent, ADK is multi-agent native, prioritizing complex coordination and delegation. This allows developers to build systems that mimic real-world teams, where specialized agents work together under a coordinator. In this lesson, you learn more about how ADK supports multi-agent orchestration and hierarchical design.

---

## ADK Orchestration

With ADK, you can control multi-agent workflows using two distinct strategies:

* **Deterministic workflow patterns:** Used for structured, predictable paths like order fulfillment or database queries, implementing deterministic workflow patterns handled by specialized workflow agents that do not use an LLM for routing decisions.
* **Generative AI dynamic routing:** Offers flexible agent coordination when the next step is uncertain, such as managing a live customer chat escalation or orchestrating a collaborative content creation team.

### Deterministic Workflow Patterns

| Agent Type | Purpose | Use Case |
| :--- | :--- | :--- |
| **Sequential agent** | Runs a list of sub-agents in a fixed, linear order. | A fixed process like "validate input → retrieve data → generate report." |
| **Parallel agent** | Runs multiple independent sub-agents concurrently. | Fetching financial data, market news, and competitor analysis simultaneously to minimize latency. |
| **Loop agent** | Runs a sub-agent repeatedly until a specific condition is met or a maximum iteration count is reached. | Iteratively refining a piece of generated code based on unit test feedback. |

---

## LLM-Driven Dynamic Routing

The primary agent for intelligent decision-making is the [LLM Agent](https://google.github.io/adk-docs/agents/llm-agents/).

* **Dynamic delegation:** When the LLM Agent receives a user request, it uses the LLM for reasoning. Based on its instructions and the user's query, the LLM dynamically decides which tool or which specialized sub-agent to delegate the task to.
* **Hierarchical composition:** Agents can contain other agents, allowing for nested, multi-level delegation. For example, a Root Agent might delegate a research task to a Research Agent, which then uses a `ParallelAgent` to execute multiple searches concurrently.

---

## Mixing Deterministic Code with Gen AI

An important feature of ADK is its ability to create hybrid applications that separate non-deterministic gen AI decisions from more stable, deterministic application logic. This separation ensures that developers can leverage both the adaptability of large language models as well as the production-grade reliability required for critical enterprise tasks.

ADK achieves this distinction by providing specialized agent types:

### Specialized Agent Types

#### LLM Agent
> The LLM Agent is used for non-deterministic tasks that benefit from generative AI's flexibility and ambiguity tolerance. This includes comprehending unclear user requests (like "Fix this issue"), generating creative content, summarizing information, or performing dynamic planning and tool selection.

#### Workflow Agent
> Deterministic agents like workflow agents are reserved for actions that require guaranteed outcomes and control. This is essential for executing secure tasks like financial transactions or database writes, or for applying mandatory business rules like regulatory compliance and security guardrails.

By wrapping these actions as simple agents, ADK can inject reliable, pre-approved Python code directly into the workflow without relying on the LLM's non-deterministic reasoning. This structured approach means that critical infrastructure logic, like calling a secured API or validating a calculation, is contained within predictable, testable Python code.

The LLM's role is narrowed to interpreting the initial request and handing off the execution to the correct, reliable code block, significantly improving the stability and safety of the overall system.

---

## Multi-Agent Systems (Video & Transcript)

> *ADK's core design allows you to isolate non-deterministic LLM decisions from stable application logic.*

### Video Transcript

A multi-agent system is when individual agents work together. To really understand it, let's break it into three key ideas:

1. **Decentralized Control:** There's no single boss, each agent just decides for itself. Think of it like a flock of birds swirling in the sky. There's no leader, but together they form amazing, incredible patterns.
2. **Local View:** Each agent only knows what's around it, but not the whole system. Imagine yourself standing in a crowded stadium: you can only see and react to the people nearby, but not the entire crowd.
3. **Emergent Behavior:** This is where the magic happens. From single local rules, amazing global patterns emerge. Agents work together to solve a complex problem that a single agent can't solve easily.

#### How ADK supports multi-agent systems:
Google Agent Development Kit (ADK) was built with multi-agent support in mind. It provides three main types of agents:
* **LLM Agent:** The brain. Uses large language models like Gemini to understand user input and reason about what tool to pick and what to do next.
* **Workflow Agent:** The manager. Orchestrates how agents work together (Sequential, Parallel, Loop).
* **Custom Agent:** The specialists. Write your own Python logic by inheriting from a base agent when full control is required.

#### Agent Hierarchy:
Agents form a hierarchy like an organizational chart with parent agents and sub-agents. Each sub-agent follows a single-parent rule. The root agent acts like a CEO, and sub-agents act as VPs, managers, and workers.

---

## Integration with Open-Source Ecosystems

ADK is built with openness in mind, ensuring it can operate alongside and leverage capabilities from other popular frameworks and data standards.

### Open-Source Integrations

#### Integrations with Tools and Libraries
> ADK is designed to consume tools written in other popular open-source frameworks for developing LLM applications like LangChain, LangGraph, Crew.ai, and LlamaIndex.
> * **Tool wrapping:** Developers can take a tool or an agent and wrap it using ADK's `AgentTool` class.
> * **Native functionality:** Once wrapped, this external library's capability functions as a native tool within the ADK environment, allowing ADK's orchestrating agents to discover and use it in their dynamic decision-making process.

#### Agent2Agent (A2A) Protocol
> This open communication protocol provides a common language and structure for agents, regardless of their underlying framework, to collaborate. An ADK agent can publish its capabilities, and a LangChain agent can call upon those capabilities via the A2A protocol, fostering cross-framework collaboration.

#### Model Context Protocol (MCP)
> ADK supports MCP, which standardizes how agents can access and leverage external data sources, connecting them to existing enterprise data and knowledge systems that adhere to the same standard.

---

## Key Takeaway

ADK excels at multi-agent orchestration by combining predictable, deterministic workflows—like sequential and parallel processing—with dynamic, flexible task delegation driven by the LLM Agent's reasoning. This hybrid architecture is critical for production readiness because it ensures stability and security by strictly separating the uncertain logic of generative AI from reliable, testable deterministic code for control and execution. Also, ADK is designed for broad interoperability, allowing it to seamlessly integrate external tools and collaborate with other agent platforms using open standards such as the A2A Protocol.
