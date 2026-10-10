---
title: "Migrate to ADK - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/get-started/migrate/
date: 2026-10-10T19:16:33.989Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../)
        
        Get Started
        
        -   [Python](../python/)
        -   [TypeScript](../typescript/)
        -   [Go](../go/)
        -   [Java](../java/)
        -   [Kotlin](../kotlin/)
        -   [Agents CLI](../agents-cli/)
        -   [Installation](../installation/)
        -   [Google Cloud](../google-cloud/)
        -    Migrate to ADK [Migrate to ADK](./)
            
            Table of contents
            
            -   [Migrate with Agents CLI](#migrate-with-agents-cli)
            -   [Prerequisites](#prerequisites)
            -   [Migration workflow](#migration-workflow)
                
                -   [Open your coding agent in the existing project](#open-your-coding-agent-in-the-existing-project)
                -   [Brainstorm a migration plan](#brainstorm-a-migration-plan)
                -   [Map agent patterns to ADK](#map-agent-patterns-to-adk)
                -   [Convert code with evaluation](#convert-code-with-evaluation)
                -   [Verify and evaluate](#verify-and-evaluate)
                
            -   [Next steps](#next-steps)
            
        
    -   [Build your Agent](../../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../../tutorials/multi-tool-agent/)
        -   [Agent team](../../tutorials/agent-team/)
        -   [Code with AI](../../tutorials/coding-with-ai/)
        -   [Agent Config](../../agents/config/)
        
    -   [Agents](../../agents/)
        
        Agents
        
        -   [Simple agents](../../agents/llm-agents/)
        -   [Managed agents](../../agents/managed-agents/)
        
    -   [Graph Workflows](../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../graphs/routes/)
        -   [Data handling](../../graphs/data-handling/)
        -   [Human input](../../graphs/human-input/)
        -   [Dynamic workflows](../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../workflows/collaboration/)
        -   [Template workflows](../../agents/workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../../agents/workflow-agents/sequential-agents/)
            -   [Loop workflow](../../agents/workflow-agents/loop-agents/)
            -   [Parallel workflow](../../agents/workflow-agents/parallel-agents/)
            -   [Custom template workflows](../../agents/custom-agents/)
            
        -   [Agent routing](../../agents/routing/)
        -   [Workflow patterns](../../workflows/patterns/)
        
    -   [Models for Agents](../../agents/models/)
        
        Models for Agents
        
        -   [Gemini](../../agents/models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../../agents/models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../../agents/models/google-gemma/)
        -   [Claude](../../agents/models/anthropic/)
        -   [Agent Platform hosted](../../agents/models/agent-platform/)
        -   [Apigee AI Gateway](../../agents/models/apigee/)
        -   [Model routing](../../agents/models/routing/)
        -   [OpenAI](../../agents/models/openai/)
        -   [Ollama](../../agents/models/ollama/)
        -   [vLLM](../../agents/models/vllm/)
        -   [LiteLLM](../../agents/models/litellm/)
        -   [LiteRT-LM](../../agents/models/litert-lm/)
        
    
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
    
    -   [Technical Overview](../about/)
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

-   [Migrate with Agents CLI](#migrate-with-agents-cli)
-   [Prerequisites](#prerequisites)
-   [Migration workflow](#migration-workflow)
    
    -   [Open your coding agent in the existing project](#open-your-coding-agent-in-the-existing-project)
    -   [Brainstorm a migration plan](#brainstorm-a-migration-plan)
    -   [Map agent patterns to ADK](#map-agent-patterns-to-adk)
    -   [Convert code with evaluation](#convert-code-with-evaluation)
    -   [Verify and evaluate](#verify-and-evaluate)
    
-   [Next steps](#next-steps)

1.  [Home](../..)
2.  [Build Agents](../)
3.  [Get Started](../)

[](https://github.com/google/adk-docs/edit/main/docs/get-started/migrate.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Migrate existing agents to ADK[¶](#migrate-existing-agents-to-adk "Permanent link")

This guide shows you how to migrate an existing agent codebase to Agent Development Kit (ADK) using Agents CLI and your coding agent. Migrating to ADK lets you standardize your agent architecture across multiple languages, use built-in evaluation tools, and deploy directly to Google Cloud.

## Migrate with Agents CLI[¶](#migrate-with-agents-cli "Permanent link")

Instead of manually rewriting state objects, node graphs, and execution loops line by line, you can use Agents CLI to plan and execute the migration with your coding agent.

Agents CLI installs ADK development skills into coding agents such as Antigravity, Claude Code, Cursor, and Codex. When you open your coding agent in an existing project, it can:

-   Analyze your current agent structure, tools, state, and routing rules.
-   Map existing components to native ADK classes and graph workflows.
-   Propose architecture options with trade-offs.
-   Convert tools, agent definitions, and session handling incrementally.
-   Generate evaluation datasets to verify behavior before and after migration.

For more information on using Agents CLI, see the [Agents CLI](https://google.github.io/agents-cli/) documentation.

## Prerequisites[¶](#prerequisites "Permanent link")

Before starting your migration, make sure you have the following installed:

-   Python 3.11 or later
-   The [`uv`](https://docs.astral.sh/uv/getting-started/installation/) package manager
-   A supported coding agent

Install Agents CLI and its ADK skills into your coding agent:

`[](#__codelineno-0-1)uvx google-agents-cli setup`

To verify the installation:

`[](#__codelineno-1-1)agents-cli info`

## Migration workflow[¶](#migration-workflow "Permanent link")

Follow this process to migrate an existing agent to ADK:

1.  [Open your coding agent in the existing project](#open-your-coding-agent-in-the-existing-project)
2.  [Brainstorm a migration plan](#brainstorm-a-migration-plan)
3.  [Map agent patterns to ADK](#map-agent-patterns-to-adk)
4.  [Convert code with evaluation](#convert-code-with-evaluation)
5.  [Verify and evaluate](#verify-and-evaluate)

### Open your coding agent in the existing project[¶](#open-your-coding-agent-in-the-existing-project "Permanent link")

Open your terminal or IDE in the root directory of your existing agent project, and start your coding agent. Confirm that the agent detects the ADK skills installed by Agents CLI.

### Brainstorm a migration plan[¶](#brainstorm-a-migration-plan "Permanent link")

Ask your coding agent to inspect your current codebase and brainstorm the target ADK architecture. Since the agent has ADK Skills loaded through Agents CLI, it understands ADK state management, graph workflows, and orchestration patterns. Use a prompt in your coding agent similar to the following:

Code agent prompt

`[](#__codelineno-2-1)I want to migrate this existing agent codebase to Google Agent Development Kit (ADK). [](#__codelineno-2-2)Please inspect our current files, state schema, tools, and control flow. [](#__codelineno-2-3)Propose 2-3 target ADK architecture options with trade-offs, and recommend the cleanest approach. [](#__codelineno-2-4)Include an evaluation plan to verify behavior using agents-cli eval.`

Your coding agent analyzes the following items:

-   **Execution flow:** Single tool-calling loop, deterministic graph workflow, dynamic router, or multi-agent team.
-   **Tools:** Functions, parameter signatures, docstrings, and external API calls.
-   **Memory and retrieval:** Knowledge stores, vector search integrations, or conversational memory.
-   **State:** Variables tracked across turns, scratchpad keys, and session storage.
-   **Target classes:** Which ADK classes, such as `Agent` or `Workflow`, fit best.
-   **Evaluation strategy:** How to convert existing test cases into evaluation datasets to benchmark the migrated agent.

Once you review the proposed approaches, approve the architecture that matches your requirements.

### Map agent patterns to ADK[¶](#map-agent-patterns-to-adk "Permanent link")

ADK replaces custom dispatch loops and state handlers with declarative classes and graph workflows. Use the following mapping as a guide during migration:

Existing pattern

ADK equivalent

Description

Custom tool schemas or wrappers

Native Python functions or `FunctionTool`

Plain Python functions with type hints and docstrings. ADK automatically derives tool declarations.

Custom agent loops or runners

`Agent`

Declarative agent definition specifying model, instructions, tools, and sub-agents.

Memory and retrieval

`BaseMemoryService` implementations and retrieval tools

Built-in memory services (`InMemoryMemoryService`, `VertexAiMemoryBankService`, `VertexAiRagMemoryService`) plus retrieval tools for session and document grounding.

State dictionaries or scratchpads

`session.state` via `ToolContext`

Shared, mutable session state accessible inside tools, callbacks, and agent instructions.

Multi-agent workflows and pipelines

`google.adk.workflow.Workflow`

Explicit graph nodes with conditional routes, loops, and parallel branching.

Multi-agent handoffs

`Agent(sub_agents=[...])`

Hierarchical delegation where a coordinator agent delegates to specialized sub-agents.

Remote agent communication

A2A Protocol

Inter-agent communication over HTTP using the Agent-to-Agent standard.

### Convert code with evaluation[¶](#convert-code-with-evaluation "Permanent link")

A reliable migration is test-driven. Your coding agent can set up evaluation datasets and test suites alongside the new ADK code to verify that the migrated agent produces the same outcomes as your original implementation.

1.  **Set up evaluation test cases:** Have your coding agent convert existing test cases or recorded conversations into evaluation cases under `eval/`.
2.  **Port tools and agent logic:** Replace custom dispatch loops and tool wrappers with typed Python functions and an ADK `Agent` or `Workflow`.

`[](#__codelineno-3-1)# agent.py [](#__codelineno-3-2)from google.adk.agents import Agent [](#__codelineno-3-3)from google.adk.tools import ToolContext [](#__codelineno-3-4)[](#__codelineno-3-5)def lookup_customer(customer_id: str) -> str:     [](#__codelineno-3-6)    """Retrieve account tier and status for a customer."""    [](#__codelineno-3-7)    return "Tier: Premium, Status: Active" [](#__codelineno-3-8)[](#__codelineno-3-9)def calculate_discount(amount: float, rate: float = 0.1) -> float:     [](#__codelineno-3-10)    """Calculate discounted total for a transaction."""    [](#__codelineno-3-11)    return amount * (1.0 - rate) [](#__codelineno-3-12)[](#__codelineno-3-13)root_agent = Agent(     [](#__codelineno-3-14)    name="customer_support_agent",    [](#__codelineno-3-15)    model="gemini-flash-latest",    [](#__codelineno-3-16)    instruction="Assist customers with account inquiries and discounts using your tools.",    [](#__codelineno-3-17)    tools=[lookup_customer, calculate_discount], [](#__codelineno-3-18))`

### Verify and evaluate[¶](#verify-and-evaluate "Permanent link")

Run the evaluation suite to compare the migrated agent against your baseline test cases:

`[](#__codelineno-4-1)agents-cli eval run`

You can also test queries directly or interactively:

`[](#__codelineno-5-1)# Test a single prompt [](#__codelineno-5-2)agents-cli run "Look up customer cust_101 and apply a 10% discount on $100." [](#__codelineno-5-3)[](#__codelineno-5-4)# Start the interactive web UI [](#__codelineno-5-5)agents-cli playground`

## Next steps[¶](#next-steps "Permanent link")

-   Read the [Multi-tool agent tutorial](/tutorials/multi-tool-agent/) to learn more about ADK tool patterns.
-   Explore [Graph workflows](/graphs/) for multi-agent routing and state coordination.
-   Deploy your agent using the [Deployment guide](/deploy/).

Back to top