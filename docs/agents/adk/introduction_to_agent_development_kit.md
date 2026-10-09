# Introduction to Agent Development Kit (ADK)

**Source URL:** [Google Skills - Agent Development Kit](https://www.skills.google/paths/4525/course_templates/1504/documents/637114)

---

## Overview & Introduction

The **Agent Development Kit (ADK)** is an open-source, flexible, and modular framework for developing, evaluating, and deploying AI Agents. It shifts agent creation from basic prompt engineering to a more structured, code-first software development approach, providing developers with the precise control needed to build complex, enterprise-ready multi-agent systems.

In this lesson, you learn more about ADK's core features and benefits.

---

## 1. Core Features and Benefits of ADK

ADK was built to simplify the end-to-end development of agents, making it feel more like traditional software development. It can be used with popular LLMs and open-source generative AI tools and is designed with a focus on tight integration with the Google ecosystem and Gemini models.

ADK's features are designed around core pillars, providing the stability and control required for production-ready applications.

### Precision and Control

* **Flexible Orchestration:**  
  ADK helps you precisely control how your agents work. You can set up predictable pipelines using workflow agents (sequential agents, parallel agents, and loop agents). For complex situations, you can leverage LLM-driven dynamic routing, which allows the agent to dynamically adapt its strategy based on real-time information.

* **Multi-Agent Architecture:**  
  Instead of a single complex agent, you can create multiple specialized agents and organize them in a hierarchy with ADK. This allows a primary agent to delegate tasks based on each agent's specific, specialized role, making the whole system more reliable and easier to scale.

* **Rich Tool Ecosystem:**  
  Agents can utilize pre-built tools (e.g., Google Search, Code Execution), integrate with custom APIs and enterprise systems, or incorporate functions from third-party libraries (like LangChain). The system also supports using other agents as tools for a highly modular design.

---

## 2. Integrated Developer Experience

ADK accelerates the development lifecycle with essential developer tools:

* **Code-First and Modular Design:**  
  Agent logic, tools, and orchestration are defined directly in code (Python, Go, or Java), promoting modularity, testability, and version control.

* **Integrated Tooling:**  
  ADK includes a command-line interface (CLI) tool and a web-based UI so developers can easily run, test, and debug agents locally.

* **Built-in Evaluation:**  
  ADK includes tools to test your agent's performance against predefined scenarios. The built-in feature evaluates the quality of the final answer and the step-by-step reasoning (also known as execution trajectory) which the agent used to reach that answer.

---

## 3. Open Ecosystem

ADK is designed for flexibility and future-proofing:

* **Model Flexibility:**  
  Works with various LLMs using a base interface.

* **Interoperability:**  
  Integrates well with other popular agent frameworks.

* **Agent Communication Protocols:**  
  Supports the Model Context Protocol (MCP) and the Agent-to-Agent (A2A) protocol for secure, standardized communication between agents from different vendors.

---

## 4. Deployment Ready

ADK ensures your agent is robust and can handle enterprise-level traffic and complexity by providing the necessary stability and scalability:

* **Deployment Options:**  
  ADK agents are containerized, giving developers three primary pathways for deployment:
  * **Managed Runtime:** Deploying to the Vertex AI Agent Engine offers a fully managed, auto-scaling service specifically built for agents, minimizing operational overhead.
  * **Serverless:** Deploying to Cloud Run provides a scalable, serverless container platform for more custom needs.
  * **Custom Infrastructure:** Deploying to Google Kubernetes Engine (GKE) or any other container platform gives maximum control over the environment.

* **Native Streaming:**  
  ADK offers built-in support for bidirectional audio and video streaming, which means it can easily handle sending and receiving live video and sound in both directions at once. This makes the interactions feel very natural and human-like, which is necessary for the best apps.

* **Safety and Security:**  
  ADK allows developers to implement necessary security and safety patterns directly within the agent's design. This defense includes explicit authorization for actions and using in-tool guardrails to strictly limit system access. It also enables sandboxed code execution and uses network controls to prevent data exfiltration.

---

## 5. Key Takeaway

ADK is an open-source, enterprise-grade framework that elevates AI Agent creation from simple prompting to structured software development by focusing on multi-agent systems. It provides developers with the essential toolkit to build fast through integrated developer experiences while maintaining an open and flexible approach to models and third-party frameworks.
