---
title: "Sub-agent delegation - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/mcp-tools/agent-managed/
date: 2026-10-10T19:17:03.184Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../../../get-started/)
        
        Get Started
        
        -   [Python](../../../get-started/python/)
        -   [TypeScript](../../../get-started/typescript/)
        -   [Go](../../../get-started/go/)
        -   [Java](../../../get-started/java/)
        -   [Kotlin](../../../get-started/kotlin/)
        -   [Agents CLI](../../../get-started/agents-cli/)
        -   [Installation](../../../get-started/installation/)
        -   [Google Cloud](../../../get-started/google-cloud/)
        -   [Migrate to ADK](../../../get-started/migrate/)
        
    -   [Build your Agent](../../../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../../../tutorials/multi-tool-agent/)
        -   [Agent team](../../../tutorials/agent-team/)
        -   [Code with AI](../../../tutorials/coding-with-ai/)
        -   [Agent Config](../../../agents/config/)
        
    -   [Agents](../../../agents/)
        
        Agents
        
        -   [Simple agents](../../../agents/llm-agents/)
        -   [Managed agents](../../../agents/managed-agents/)
        
    -   [Graph Workflows](../../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../../graphs/routes/)
        -   [Data handling](../../../graphs/data-handling/)
        -   [Human input](../../../graphs/human-input/)
        -   [Dynamic workflows](../../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../../workflows/collaboration/)
        -   [Template workflows](../../../agents/workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../../../agents/workflow-agents/sequential-agents/)
            -   [Loop workflow](../../../agents/workflow-agents/loop-agents/)
            -   [Parallel workflow](../../../agents/workflow-agents/parallel-agents/)
            -   [Custom template workflows](../../../agents/custom-agents/)
            
        -   [Agent routing](../../../agents/routing/)
        -   [Workflow patterns](../../../workflows/patterns/)
        
    -   [Models for Agents](../../../agents/models/)
        
        Models for Agents
        
        -   [Gemini](../../../agents/models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../../../agents/models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../../../agents/models/google-gemma/)
        -   [Claude](../../../agents/models/anthropic/)
        -   [Agent Platform hosted](../../../agents/models/agent-platform/)
        -   [Apigee AI Gateway](../../../agents/models/apigee/)
        -   [Model routing](../../../agents/models/routing/)
        -   [OpenAI](../../../agents/models/openai/)
        -   [Ollama](../../../agents/models/ollama/)
        -   [vLLM](../../../agents/models/vllm/)
        -   [LiteLLM](../../../agents/models/litellm/)
        -   [LiteRT-LM](../../../agents/models/litert-lm/)
        
    
-    Run Agents
    
    Run Agents
    
    -   [Agent Runtime](../../../runtime/)
        
        Agent Runtime
        
        -   [Web Interface](../../../runtime/web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../../../visual-builder/)
            
        -   [Command Line](../../../runtime/command-line/)
        -   [API Server](../../../runtime/api-server/)
        -   [Ambient Agents](../../../runtime/ambient-agents/)
        -   [Resume Agents](../../../runtime/resume/)
        -   [Cancel Agent Runs](../../../runtime/cancel/)
        -   [Runtime Config](../../../runtime/runconfig/)
        -   [Event Loop](../../../runtime/event-loop/)
        
    -   [Deployment](../../../deploy/)
        
        Deployment
        
        -   [Agent Runtime](../../../deploy/agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../../../deploy/agent-runtime/deploy/)
            -   [agents-cli](../../../deploy/agent-runtime/agents-cli/)
            -   [Test deployed agents](../../../deploy/agent-runtime/test/)
            
        -   [Cloud Run](../../../deploy/cloud-run/)
        -   [GKE](../../../deploy/gke/)
        
    -   [Observability](../../../observability/)
        
        Observability
        
        -   [Logging](../../../observability/logging/)
        -   [Metrics](../../../observability/metrics/)
        -   [Traces](../../../observability/traces/)
        
    -   [Evaluation](../../../evaluate/)
        
        Evaluation
        
        -   [Criteria](../../../evaluate/criteria/)
        -   [User Simulation](../../../evaluate/user-sim/)
        -   [Environment Simulation](../../../evaluate/environment_simulation/)
        -   [Custom Metrics](../../../evaluate/custom_metrics/)
        -   [Optimization](../../../optimize/)
        
    -   [Safety and Security](../../../safety/)
        
        Safety and Security
        
    
-    Components
    
    Components
    
    -   [Technical Overview](../../../get-started/about/)
    -   [Custom Tools](../../)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../../function-tools/)
            -   [Tool performance](../../performance/)
            -   [Action confirmations](../../confirmation/)
            
        -   [MCP tools](../)
            
            MCP tools
            
            -   [Advanced configuration](../advanced/)
            -   [Deployment](../deployment/)
            -   [Agent as MCP server](../agent-as-server/)
            -    Sub-agent delegation [Sub-agent delegation](./)
                
                Table of contents
                
                -   [Get started](#get-started)
                -   [Architectural role and tool adaptation](#architectural-role-and-tool-adaptation)
                -   [Tool scoping and cognitive filtering (tool\_filter)](#tool-scoping-and-cognitive-filtering-tool_filter)
                -   [Connection Transport Modes](#connection-transport-modes)
                -   [Definition and lifecycle rules](#definition-and-lifecycle-rules)
                
            
        -   [OpenAPI tools](../../openapi-tools/)
        -   [Authentication](../../authentication/)
        -   [Tool limitations](../../../tools/limitations/)
        
    -   [Artifacts](../../../artifacts/)
        
        Artifacts
        
    -   [Skills for Agents](../../../skills/)
        
        Skills for Agents
        
    -   [App management](../../../apps/)
        
        App management
        
        -   [Callbacks](../../../callbacks/)
            
            Callbacks
            
            -   [Types of callbacks](../../../callbacks/types-of-callbacks/)
            -   [Callback patterns](../../../callbacks/design-patterns-and-best-practices/)
            
        -   [Plugins](../../../plugins/)
        
    -   [Agent context](../../../context/)
        
        Agent context
        
        -   [Conversational context](../../../sessions/)
        -   [Sessions](../../../sessions/session/)
            
            Sessions
            
            -   [Rewind sessions](../../../sessions/session/rewind/)
            -   [Migrate sessions](../../../sessions/session/migrate/)
            
        -   [State](../../../sessions/state/)
        -   [Events](../../../events/)
        -   [Memory](../../../sessions/memory/)
        -   [Context compression](../../../context/compaction/)
        -   [Model context caching](../../../context/caching/)
        
    -   [A2A Protocol](../../../a2a/)
        
        A2A Protocol
        
        -   [Introduction to A2A](../../../a2a/intro/)
        -    A2A Quickstart (Exposing)
            
            A2A Quickstart (Exposing)
            
            -   [Python](../../../a2a/quickstart-exposing/)
            -   [Go](../../../a2a/quickstart-exposing-go/)
            -   [Java](../../../a2a/quickstart-exposing-java/)
            
        -    A2A Quickstart (Consuming)
            
            A2A Quickstart (Consuming)
            
            -   [Python](../../../a2a/quickstart-consuming/)
            -   [Go](../../../a2a/quickstart-consuming-go/)
            -   [Java](../../../a2a/quickstart-consuming-java/)
            -   [Kotlin](../../../a2a/quickstart-consuming-kotlin/)
            
        -   [A2A Extension](../../../a2a/a2a-extension/)
        
    -   [Live and Voice Agents](../../../live/)
        
        Live and Voice Agents
        
        -   [Get started](../../../live/get-started/)
            
            Get started
            
            -   [Python](../../../live/get-started/streaming-python/)
            -   [Java](../../../live/get-started/streaming-java/)
            
        -    Building
            
            Building
            
            -   [Workflows](../../../live/workflows/)
            -   [Tools](../../../live/tools/)
            -   [Sessions](../../../live/sessions/)
            -   [Events](../../../live/events/)
            -   [Audio and video](../../../live/audio-video/)
            -   [Configuration](../../../live/configuration/)
            
        -    Production
            
            Production
            
            -   [Guardrails](../../../live/guardrails/)
            -   [Evaluation](../../../live/evaluation/)
            -   [Build a custom server](../../../live/custom-server/)
            
        -   [Supported models](../../../live/models/)
        
    -   [Grounding](../../../grounding/)
        
        Grounding
        
        -   [Google Search Grounding](../../../grounding/google_search_grounding/)
        -   [Grounding with Search](../../../grounding/grounding_with_search/)
        
    
-   [Integrations](../../../integrations/)
    
    Integrations
    
-    Reference
    
    Reference
    
    -   [API Reference](../../../api-reference/)
        
        API Reference
        
        -   [Python ADK](../../../api-reference/python/)
        -   [TypeScript ADK](../../../api-reference/typescript/)
        -    Go ADK
            
            Go ADK
            
            -   [Go v2.x](https://pkg.go.dev/google.golang.org/adk/v2)
            -   [Go v1.x](https://pkg.go.dev/google.golang.org/adk)
            
        -   [Java ADK](../../../api-reference/java/)
        -   [Kotlin ADK](../../../api-reference/kotlin/)
        -   [CLI Reference](../../../api-reference/cli/)
        -   [Agent Config Reference](../../../api-reference/agentconfig/)
        -   [REST API](../../../api-reference/rest/)
        
    -   [Release Notes](../../../release-notes/)
    
-   [Community](../../../community/)
    
    Community
    
    -   [Contributing Guide](../../../community/contributing-guide/)
    
-   [ADK 2.0](../../../2.0/)
    
    ADK 2.0
    

Table of contents

-   [Get started](#get-started)
-   [Architectural role and tool adaptation](#architectural-role-and-tool-adaptation)
-   [Tool scoping and cognitive filtering (tool\_filter)](#tool-scoping-and-cognitive-filtering-tool_filter)
-   [Connection Transport Modes](#connection-transport-modes)
-   [Definition and lifecycle rules](#definition-and-lifecycle-rules)

1.  [Home](../../..)
2.  [Components](../../../get-started/about/)
3.  [Custom Tools](../../)
4.  [MCP tools](../)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/mcp-tools/agent-managed.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Manage MCP with Sub-Agents[¶](#manage-mcp-with-sub-agents "Permanent link")

You have already seen how to connect your agent to external resources using **Direct MCP Tool Integration** and how to serve your agent to outside clients via an **Agent-Exposed MCP Server**. However, as your ADK multi-agent capabilities grow, you may need a way to isolate complex, multi-step reasoning without overloading a single model's context window.

## Get started[¶](#get-started "Permanent link")

`[](#__codelineno-0-1)import os [](#__codelineno-0-2)from google.adk.agents.llm_agent import LlmAgent [](#__codelineno-0-3)from google.adk.tools.agent_tool import AgentTool [](#__codelineno-0-4)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-0-5)from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams [](#__codelineno-0-6)from mcp import StdioServerParameters [](#__codelineno-0-7)[](#__codelineno-0-8)# Step 1: Initialize your MCP connection  [](#__codelineno-0-9)mcp_connection = StdioConnectionParams(     [](#__codelineno-0-10)    server_params=StdioServerParameters(        [](#__codelineno-0-11)        command='npx',        [](#__codelineno-0-12)        args=['-y', '@modelcontextprotocol/server-postgres', 'postgres://user:pass@localhost:5432/db'],    [](#__codelineno-0-13)    ) [](#__codelineno-0-14)) [](#__codelineno-0-15)[](#__codelineno-0-16)# Step 2: Create the child Sub-Agent and attach the McpToolset [](#__codelineno-0-17)database_sub_agent = LlmAgent(     [](#__codelineno-0-18)    name="database_sub_agent",    [](#__codelineno-0-19)    model="gemini-flash-latest",    [](#__codelineno-0-20)    description="Delegates tasks to a database specialist...",    [](#__codelineno-0-21)    instruction="You are a SQL expert...",    [](#__codelineno-0-22)    tools=[McpToolset(connection_params=mcp_connection, tool_filter=['query_db', 'list_tables'])] [](#__codelineno-0-23)) [](#__codelineno-0-24)database_tool = AgentTool(agent=database_sub_agent) [](#__codelineno-0-25) [](#__codelineno-0-26)[](#__codelineno-0-27)# Step 3: Provide the AgentTool to your primary root agent [](#__codelineno-0-28)root_agent = LlmAgent(     [](#__codelineno-0-29)    name="primary_orchestrator",    [](#__codelineno-0-30)    model="gemini-pro-latest",    [](#__codelineno-0-31)    instruction="You are the main assistant. You have access to specialized agents. Delegate data retrieval tasks to your database tool.",    [](#__codelineno-0-32)    tools=[database_tool] [](#__codelineno-0-33))`

## Architectural role and tool adaptation[¶](#architectural-role-and-tool-adaptation "Permanent link")

In the ADK framework, `AgentTool` wraps an `LlmAgent` to expose it as a native tool to a parent orchestrator. The child agent consumes tools via `McpToolset`, which connects to the underlying MCP server (via `list_tools`), converts the external MCP tool definitions into ADK-compatible `BaseTool` instances, and proxies all execution calls (`call_tool`) asynchronously.

## Tool scoping and cognitive filtering (`tool_filter`)[¶](#tool-scoping-and-cognitive-filtering-tool_filter "Permanent link")

When assigning an `McpToolset` to a specialized sub-agent, you can restrict the exact tools made available to that agent using the `tool_filter` parameter: \* **Cognitive Focus:** Exposes only the specific actions relevant to the sub-agent's mandate, such as, 'read\_file', 'list\_directory'. \* **Security and sandboxing:** Prevents unintended access to dangerous tools exposed by the MCP server, isolating the execution surface from unpredictable inputs.

## Connection Transport Modes[¶](#connection-transport-modes "Permanent link")

The sub-agent's `McpToolset` must be configured with one of two primary connection modes depending on deployment architecture: \* **Local Subprocess (`StdioConnectionParams`):** Spawns a local executable or process, for example, via `npx` or `python`, communicating over standard input/output. Best for self-contained single-container environments. \* **Remote Network (`StreamableHTTPConnectionParams` / `SseConnectionParams`):** Connects over HTTP/SSE with headers, such as `X-Goog-Api-Key` or `Authorization`. Best for scalable, multi-tenant, or independently managed MCP backends.

## Definition and lifecycle rules[¶](#definition-and-lifecycle-rules "Permanent link")

-   **Synchronous Instantiation for Production:** When deploying multi-agent setups, Cloud Run, GKE, Agent Engine, both the sub-agent and its `McpToolset` must be instantiated synchronously in `agent.py` rather than inside an async factory function.
-   **Session Persistence and restoration:** `McpToolset` supports serialization via `getstate` and `setstate`. While session state is preserved across lifecycle events, MCP socket/stdio connections are re-initialized dynamically when the agent process restores.
-   **Cleanup Management:** When running outside `adk web` in custom runtimes, explicit teardown via `toolset.close()` or an exit stack ensures that background server subprocesses and network connections are terminated cleanly.

Back to top