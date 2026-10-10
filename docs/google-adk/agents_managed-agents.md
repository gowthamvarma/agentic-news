---
title: "Managed agents - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/managed-agents/
date: 2026-10-10T19:16:24.261Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../../get-started/)
        
        Get Started
        
        -   [Python](../../get-started/python/)
        -   [TypeScript](../../get-started/typescript/)
        -   [Go](../../get-started/go/)
        -   [Java](../../get-started/java/)
        -   [Kotlin](../../get-started/kotlin/)
        -   [Agents CLI](../../get-started/agents-cli/)
        -   [Installation](../../get-started/installation/)
        -   [Google Cloud](../../get-started/google-cloud/)
        -   [Migrate to ADK](../../get-started/migrate/)
        
    -   [Build your Agent](../../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../../tutorials/multi-tool-agent/)
        -   [Agent team](../../tutorials/agent-team/)
        -   [Code with AI](../../tutorials/coding-with-ai/)
        -   [Agent Config](../config/)
        
    -   [Agents](../)
        
        Agents
        
        -   [Simple agents](../llm-agents/)
        -    Managed agents [Managed agents](./)
            
            Table of contents
            
            -   [What are managed agents?](#what-are-managed-agents)
            -   [When to use managed agents vs. building your own](#when-to-use-managed-agents-vs-building-your-own)
            -   [Prerequisites](#prerequisites)
                
                -   [Gemini API backend](#gemini-api-backend)
                -   [Agent Platform backend](#agent-platform-backend)
                
            -   [Get started](#get-started)
            -   [How it works](#how-it-works)
                
                -   [Local session vs. remote state](#local-session-vs-remote-state)
                
            -   [Limitations](#limitations)
            -   [Next steps](#next-steps)
            
        
    -   [Graph Workflows](../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../graphs/routes/)
        -   [Data handling](../../graphs/data-handling/)
        -   [Human input](../../graphs/human-input/)
        -   [Dynamic workflows](../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../workflows/collaboration/)
        -   [Template workflows](../workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../workflow-agents/sequential-agents/)
            -   [Loop workflow](../workflow-agents/loop-agents/)
            -   [Parallel workflow](../workflow-agents/parallel-agents/)
            -   [Custom template workflows](../custom-agents/)
            
        -   [Agent routing](../routing/)
        -   [Workflow patterns](../../workflows/patterns/)
        
    -   [Models for Agents](../models/)
        
        Models for Agents
        
        -   [Gemini](../models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../models/google-gemma/)
        -   [Claude](../models/anthropic/)
        -   [Agent Platform hosted](../models/agent-platform/)
        -   [Apigee AI Gateway](../models/apigee/)
        -   [Model routing](../models/routing/)
        -   [OpenAI](../models/openai/)
        -   [Ollama](../models/ollama/)
        -   [vLLM](../models/vllm/)
        -   [LiteLLM](../models/litellm/)
        -   [LiteRT-LM](../models/litert-lm/)
        
    
-    Run Agents
    
    Run Agents
    
    -   [Agent Runtime](../../runtime/)
        
        Agent Runtime
        
        -   [Web Interface](../../runtime/web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../../visual-builder/)
            
        -   [Command Line](../../runtime/command-line/)
        -   [API Server](../../runtime/api-server/)
        -   [Ambient Agents](../../runtime/ambient-agents/)
        -   [Resume Agents](../../runtime/resume/)
        -   [Cancel Agent Runs](../../runtime/cancel/)
        -   [Runtime Config](../../runtime/runconfig/)
        -   [Event Loop](../../runtime/event-loop/)
        
    -   [Deployment](../../deploy/)
        
        Deployment
        
        -   [Agent Runtime](../../deploy/agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../../deploy/agent-runtime/deploy/)
            -   [agents-cli](../../deploy/agent-runtime/agents-cli/)
            -   [Test deployed agents](../../deploy/agent-runtime/test/)
            
        -   [Cloud Run](../../deploy/cloud-run/)
        -   [GKE](../../deploy/gke/)
        
    -   [Observability](../../observability/)
        
        Observability
        
        -   [Logging](../../observability/logging/)
        -   [Metrics](../../observability/metrics/)
        -   [Traces](../../observability/traces/)
        
    -   [Evaluation](../../evaluate/)
        
        Evaluation
        
        -   [Criteria](../../evaluate/criteria/)
        -   [User Simulation](../../evaluate/user-sim/)
        -   [Environment Simulation](../../evaluate/environment_simulation/)
        -   [Custom Metrics](../../evaluate/custom_metrics/)
        -   [Optimization](../../optimize/)
        
    -   [Safety and Security](../../safety/)
        
        Safety and Security
        
    
-    Components
    
    Components
    
    -   [Technical Overview](../../get-started/about/)
    -   [Custom Tools](../../tools-custom/)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../../tools-custom/function-tools/)
            -   [Tool performance](../../tools-custom/performance/)
            -   [Action confirmations](../../tools-custom/confirmation/)
            
        -   [MCP tools](../../tools-custom/mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../../tools-custom/mcp-tools/advanced/)
            -   [Deployment](../../tools-custom/mcp-tools/deployment/)
            -   [Agent as MCP server](../../tools-custom/mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../../tools-custom/mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../../tools-custom/openapi-tools/)
        -   [Authentication](../../tools-custom/authentication/)
        -   [Tool limitations](../../tools/limitations/)
        
    -   [Artifacts](../../artifacts/)
        
        Artifacts
        
    -   [Skills for Agents](../../skills/)
        
        Skills for Agents
        
    -   [App management](../../apps/)
        
        App management
        
        -   [Callbacks](../../callbacks/)
            
            Callbacks
            
            -   [Types of callbacks](../../callbacks/types-of-callbacks/)
            -   [Callback patterns](../../callbacks/design-patterns-and-best-practices/)
            
        -   [Plugins](../../plugins/)
        
    -   [Agent context](../../context/)
        
        Agent context
        
        -   [Conversational context](../../sessions/)
        -   [Sessions](../../sessions/session/)
            
            Sessions
            
            -   [Rewind sessions](../../sessions/session/rewind/)
            -   [Migrate sessions](../../sessions/session/migrate/)
            
        -   [State](../../sessions/state/)
        -   [Events](../../events/)
        -   [Memory](../../sessions/memory/)
        -   [Context compression](../../context/compaction/)
        -   [Model context caching](../../context/caching/)
        
    -   [A2A Protocol](../../a2a/)
        
        A2A Protocol
        
        -   [Introduction to A2A](../../a2a/intro/)
        -    A2A Quickstart (Exposing)
            
            A2A Quickstart (Exposing)
            
            -   [Python](../../a2a/quickstart-exposing/)
            -   [Go](../../a2a/quickstart-exposing-go/)
            -   [Java](../../a2a/quickstart-exposing-java/)
            
        -    A2A Quickstart (Consuming)
            
            A2A Quickstart (Consuming)
            
            -   [Python](../../a2a/quickstart-consuming/)
            -   [Go](../../a2a/quickstart-consuming-go/)
            -   [Java](../../a2a/quickstart-consuming-java/)
            -   [Kotlin](../../a2a/quickstart-consuming-kotlin/)
            
        -   [A2A Extension](../../a2a/a2a-extension/)
        
    -   [Live and Voice Agents](../../live/)
        
        Live and Voice Agents
        
        -   [Get started](../../live/get-started/)
            
            Get started
            
            -   [Python](../../live/get-started/streaming-python/)
            -   [Java](../../live/get-started/streaming-java/)
            
        -    Building
            
            Building
            
            -   [Workflows](../../live/workflows/)
            -   [Tools](../../live/tools/)
            -   [Sessions](../../live/sessions/)
            -   [Events](../../live/events/)
            -   [Audio and video](../../live/audio-video/)
            -   [Configuration](../../live/configuration/)
            
        -    Production
            
            Production
            
            -   [Guardrails](../../live/guardrails/)
            -   [Evaluation](../../live/evaluation/)
            -   [Build a custom server](../../live/custom-server/)
            
        -   [Supported models](../../live/models/)
        
    -   [Grounding](../../grounding/)
        
        Grounding
        
        -   [Google Search Grounding](../../grounding/google_search_grounding/)
        -   [Grounding with Search](../../grounding/grounding_with_search/)
        
    
-   [Integrations](../../integrations/)
    
    Integrations
    
-    Reference
    
    Reference
    
    -   [API Reference](../../api-reference/)
        
        API Reference
        
        -   [Python ADK](../../api-reference/python/)
        -   [TypeScript ADK](../../api-reference/typescript/)
        -    Go ADK
            
            Go ADK
            
            -   [Go v2.x](https://pkg.go.dev/google.golang.org/adk/v2)
            -   [Go v1.x](https://pkg.go.dev/google.golang.org/adk)
            
        -   [Java ADK](../../api-reference/java/)
        -   [Kotlin ADK](../../api-reference/kotlin/)
        -   [CLI Reference](../../api-reference/cli/)
        -   [Agent Config Reference](../../api-reference/agentconfig/)
        -   [REST API](../../api-reference/rest/)
        
    -   [Release Notes](../../release-notes/)
    
-   [Community](../../community/)
    
    Community
    
    -   [Contributing Guide](../../community/contributing-guide/)
    
-   [ADK 2.0](../../2.0/)
    
    ADK 2.0
    

Table of contents

-   [What are managed agents?](#what-are-managed-agents)
-   [When to use managed agents vs. building your own](#when-to-use-managed-agents-vs-building-your-own)
-   [Prerequisites](#prerequisites)
    
    -   [Gemini API backend](#gemini-api-backend)
    -   [Agent Platform backend](#agent-platform-backend)
    
-   [Get started](#get-started)
-   [How it works](#how-it-works)
    
    -   [Local session vs. remote state](#local-session-vs-remote-state)
    
-   [Limitations](#limitations)
-   [Next steps](#next-steps)

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/managed-agents.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Managed agents[¶](#managed-agents "Permanent link")

Supported in ADKPython v2.4.0Preview

Managed agents let you use Google's first-party, out-of-the-box agents, backed by the Managed Agents API, from within your ADK flows. Managed agents are available through the [Gemini API](https://ai.google.dev/gemini-api/docs/agents) and [Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents). The `ManagedAgent` class connects to a managed agent (such as the Antigravity agent) that runs in a specialized, server-side execution environment, so you get powerful built-in capabilities without managing sandboxes or writing client-side function declarations.

`ManagedAgent` implements the same `BaseAgent` contract as other ADK agents, so you can use it standalone or drop it directly into an ADK flow. It is a good fit when you want a robust, server-hosted agent with specialized built-in tools rather than building and operating that environment yourself.

## What are managed agents?[¶](#what-are-managed-agents "Permanent link")

A *managed agent* is an agent whose reasoning, tools, and execution environment are hosted and operated by Google through the Managed Agents API, rather than run by your own ADK process. Instead of issuing standard `generate_content` calls, `ManagedAgent` creates server-side *interactions* and streams the results back into your ADK flow. Managed agents provide several built-in advantages:

-   **First-party, out-of-the-box agents:** Connect to ready-made agents (for example, the Antigravity agent) by referencing their `agent_id`.
-   **Built-in, server-side execution:** Capabilities such as web search and code execution run in a managed sandbox on the server, with no local sandbox to provision or secure.
-   **No client-side function declarations:** Server-side tools are configured on the managed agent, so you don't declare or execute them locally.

## When to use managed agents vs. building your own[¶](#when-to-use-managed-agents-vs-building-your-own "Permanent link")

Managed agents and ADK agents solve different problems. Choosing between them is mostly a trade-off between out-of-the-box power and fine-grained control.

-   **Managed agents** give you a powerful agent out of the box, but with limited flexibility. The toolset is predefined and server-side, the agent runs only in the managed environment, and client-side or MCP tools are not supported.
-   **ADK agents** (such as [`LlmAgent`](/agents/llm-agents/)) give you fine-grained control over the model, instructions, tools (including custom function tools and MCP tools), and where execution happens.

## Prerequisites[¶](#prerequisites "Permanent link")

`ManagedAgent` supports two backends. Complete the prerequisites for the backend you plan to use: obtain credentials and an `agent_id`.

### Gemini API backend[¶](#gemini-api-backend "Permanent link")

-   **Authentication:** Obtain a Gemini API key and set it as the `GEMINI_API_KEY` environment variable.
-   **Agent ID:** You need an `agent_id` to connect to. You can either:
    -   Create a new agent by following the [Gemini API Agents documentation](https://ai.google.dev/gemini-api/docs/agents).
    -   Use an out-of-the-box agent ID, such as `antigravity-preview-05-2026`, which is used in the examples below.

### Agent Platform backend[¶](#agent-platform-backend "Permanent link")

-   **Authentication:** Agent Platform requires Google Cloud credentials. Follow the [Agent Platform setup instructions](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/create-manage#before-you-begin) to authenticate your local environment (for example, with `gcloud auth application-default login`).
-   **Location:** The Managed Agents API is served only from the `global` location. `ManagedAgent` enforces a connection to `global` on the Agent Platform backend.
-   **Agent ID:** As with the Gemini API, you need an `agent_id`. Create one using the [Create and manage agents guide](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/create-manage), or use an out-of-the-box agent ID available to your project.

## Get started[¶](#get-started "Permanent link")

The following example creates two managed agents: one that answers questions using web search, and one that solves computational questions by running code server-side. Both run their tools in the managed environment (`environment={'type': 'remote'}`).

Python

`[](#__codelineno-0-1)import os [](#__codelineno-0-2)from google.adk.agents import ManagedAgent [](#__codelineno-0-3)from google.adk.tools import google_search [](#__codelineno-0-4)from google.genai import types [](#__codelineno-0-5)[](#__codelineno-0-6)# Ensure you have the MANAGED_AGENT_ID and the proper environment config [](#__codelineno-0-7)_AGENT_ID = os.environ.get('MANAGED_AGENT_ID', 'antigravity-preview-05-2026') [](#__codelineno-0-8)[](#__codelineno-0-9)managed_search_agent = ManagedAgent(     [](#__codelineno-0-10)    name='managed_search_agent',    [](#__codelineno-0-11)    description='Answers questions that need fresh, grounded information from the web.',    [](#__codelineno-0-12)    agent_id=_AGENT_ID,    [](#__codelineno-0-13)    environment={'type': 'remote'},    [](#__codelineno-0-14)    tools=[google_search], [](#__codelineno-0-15)) [](#__codelineno-0-16)[](#__codelineno-0-17)# A managed code execution agent using raw types.Tool [](#__codelineno-0-18)managed_code_execution_agent = ManagedAgent(     [](#__codelineno-0-19)    name='managed_code_execution_agent',    [](#__codelineno-0-20)    description='Solves computational questions by running code server-side.',    [](#__codelineno-0-21)    agent_id=_AGENT_ID,    [](#__codelineno-0-22)    environment={'type': 'remote'},    [](#__codelineno-0-23)    tools=[types.Tool(code_execution=types.ToolCodeExecution())], [](#__codelineno-0-24))`

## How it works[¶](#how-it-works "Permanent link")

When you invoke a `ManagedAgent`, ADK sends your request to the managed agent via the [Interactions API](https://ai.google.dev/gemini-api/docs/interactions-overview) and streams the results, both partial and final, back into your ADK flow in real time. The reasoning, tools, and execution all run in Google's managed environment rather than in your ADK process.

How `ManagedAgent` maps to the Managed Agents API

An ADK `ManagedAgent` does not create or register a new managed agent resource. It connects to an agent that already exists on the backend (the one named by `agent_id`) and applies its configuration (such as `tools` and `environment`) as per-interaction overrides at runtime. In Managed Agents API terms, ADK works entirely on the *data plane* (the Interactions API) and leaves the *control plane* (the Agents API, which creates and manages agent resources) untouched. For how these two planes differ, see the [Managed Agents API system architecture](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents).

### Local session vs. remote state[¶](#local-session-vs-remote-state "Permanent link")

`ManagedAgent` keeps almost no state locally. The ADK session persists only two values on the events it emits: the `previous_interaction_id` and the sandbox `environment_id`. On each new turn the agent recovers both by scanning prior session events, then reuses them so the conversation and its sandbox continue.

Everything else lives server-side. The Managed Agents API owns the sandbox environment and the full interaction history, and that remote interaction, not the local session, is the source of truth for continuing a conversation. Response text appears in both the local ADK events and the remote interaction history, but ADK stores only the IDs it needs to recover and reuse the remote state; it never re-sends prior turns.

## Limitations[¶](#limitations "Permanent link")

-   **Location pinned (Agent Platform only):** For the Agent Platform backend, the Managed Agents API is currently served only from the `global` location. Regional endpoints raise an error.
-   **Server-side tools only:** Client-executed tools (Python functions, callables) and MCP tools are not supported and raise a `NotImplementedError`.
-   **Streaming only:** The agent uses streaming interactions (`stream=True`). Background-polling execution and strictly non-streaming connections are not yet fully supported.
-   **Backend differences:** The Gemini API and Agent Platform backends currently exhibit slightly different behavioral patterns. Test against the specific backend you intend to use.

## Next steps[¶](#next-steps "Permanent link")

-   **Samples:** [Managed Agent Basic](https://github.com/google/adk-python/tree/main/contributing/samples/managed_agent/basic) and [Managed Agent Code Execution](https://github.com/google/adk-python/tree/main/contributing/samples/managed_agent/code_execution).
-   **Backend documentation:** [Gemini API Agents](https://ai.google.dev/gemini-api/docs/agents) and [Agent Platform Managed Agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents).
-   **Related ADK topics:** [Models for agents](/agents/models/), [Multi-agent workflows](/workflows/), and [Custom tools](/tools-custom/).

Back to top