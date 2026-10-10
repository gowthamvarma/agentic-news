---
title: "Advanced configuration - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/mcp-tools/advanced/
date: 2026-10-10T19:17:02.917Z
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
            
            -    Advanced configuration [Advanced configuration](./)
                
                Table of contents
                
                -   [Advanced configuration patterns](#advanced-configuration-patterns)
                -   [Dynamic authentication and per-user headers (header\_provider)](#dynamic-authentication-and-per-user-headers-header_provider)
                -   [Human-in-the-loop and tool confirmations (require\_confirmation)](#human-in-the-loop-and-tool-confirmations-require_confirmation)
                -   [Real-time progress tracking (progress\_callback)](#real-time-progress-tracking-progress_callback)
                    
                    -   [Option A: Global callback function](#option-a-global-callback-function)
                    -   [Option B: Per-tool callback factory (Session-Aware)](#option-b-per-tool-callback-factory-session-aware)
                    
                -   [Standalone runner execution (Outside adk web)](#standalone-runner-execution-outside-adk-web)
                -   [Name collisions and tool namespacing (tool\_name\_prefix)](#name-collisions-and-tool-namespacing-tool_name_prefix)
                -   [Bi-directional protocol hooks: sampling and elicitation](#bi-directional-protocol-hooks-sampling-and-elicitation)
                -   [Diagnostic logging and error streams (errlog)](#diagnostic-logging-and-error-streams-errlog)
                -   [Render interactive UI widgets](#render-interactive-ui-widgets)
                    
                    -   [How it works](#how-it-works)
                    
                -   [Next Steps](#next-steps)
                
            -   [Deployment](../deployment/)
            -   [Agent as MCP server](../agent-as-server/)
            -   [Sub-agent delegation](../agent-managed/)
            
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

-   [Advanced configuration patterns](#advanced-configuration-patterns)
-   [Dynamic authentication and per-user headers (header\_provider)](#dynamic-authentication-and-per-user-headers-header_provider)
-   [Human-in-the-loop and tool confirmations (require\_confirmation)](#human-in-the-loop-and-tool-confirmations-require_confirmation)
-   [Real-time progress tracking (progress\_callback)](#real-time-progress-tracking-progress_callback)
    
    -   [Option A: Global callback function](#option-a-global-callback-function)
    -   [Option B: Per-tool callback factory (Session-Aware)](#option-b-per-tool-callback-factory-session-aware)
    
-   [Standalone runner execution (Outside adk web)](#standalone-runner-execution-outside-adk-web)
-   [Name collisions and tool namespacing (tool\_name\_prefix)](#name-collisions-and-tool-namespacing-tool_name_prefix)
-   [Bi-directional protocol hooks: sampling and elicitation](#bi-directional-protocol-hooks-sampling-and-elicitation)
-   [Diagnostic logging and error streams (errlog)](#diagnostic-logging-and-error-streams-errlog)
-   [Render interactive UI widgets](#render-interactive-ui-widgets)
    
    -   [How it works](#how-it-works)
    
-   [Next Steps](#next-steps)

1.  [Home](../../..)
2.  [Components](../../../get-started/about/)
3.  [Custom Tools](../../)
4.  [MCP tools](../)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/mcp-tools/advanced.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Advanced MCP configuration[¶](#advanced-mcp-configuration "Permanent link")

Supported in ADKPython v0.1.0

This guide covers advanced integration patterns for the Model Context Protocol (MCP) in ADK. It provides production patterns for dynamic per-user authentication, human-in-the-loop approvals, long-running progress tracking, custom runtime execution, and enterprise cloud deployments.

## Advanced configuration patterns[¶](#advanced-configuration-patterns "Permanent link")

Use the matrix below to select the right configuration mechanism for your production workload:

Developer Requirement

Recommended Mechanism

Primary API / Parameter

Typical Scenario

**Inject per-user credentials or dynamic session tokens**

Dynamic Header Provider

`header_provider=...`

Multi-tenant apps, per-user JWTs/OAuth tokens

**Require approval before dangerous tool calls**

Tool Confirmation

`require_confirmation=...`

Database mutations, destructive shell/file ops

**Stream real-time progress for long operations**

Progress Callback & Factory

`progress_callback=...`

Heavy SQL queries, web scraping, data indexing

**Run agents in FastAPI / backend services without `adk web`**

Programmatic Runner Lifecycle

`Runner` + `await toolset.close()`

Custom microservices, CLI tools, worker queues

**Resolve tool naming collisions across servers**

Tool Namespacing & Filtering

`tool_name_prefix`, `tool_filter`

Aggregating multiple MCP servers (DB + GitHub)

**Handle server-requested sampling or auth challenges**

Bi-directional Protocol Callbacks

`sampling_callback`, `elicitation_callback`

Server-initiated LLM generation & auth prompts

**Inspect raw STDERR diagnostic streams**

Diagnostic Stream Logging

`errlog=sys.stderr`

Troubleshooting MCP subprocess crashes

**Render rich, interactive visual widgets in chat**

Experimental UI Rendering

`meta.ui.resourceUri`

Maps, charts, weather cards, or custom forms

* * *

## Dynamic authentication and per-user headers (`header_provider`)[¶](#dynamic-authentication-and-per-user-headers-header_provider "Permanent link")

In multi-tenant or user-facing systems, hardcoding credentials into connection parameters is insecure. `McpToolset` supports `header_provider`, an asynchronous or synchronous callable that receives the active `ReadonlyContext` to dynamically construct authentication headers on every tool invocation.

`[](#__codelineno-0-1)from google.adk.agents import LlmAgent [](#__codelineno-0-2)from google.adk.agents.readonly_context import ReadonlyContext [](#__codelineno-0-3)from google.adk.tools.mcp_tool import McpToolset, StreamableHTTPConnectionParams [](#__codelineno-0-4)[](#__codelineno-0-5)async def extract_per_user_headers(context: ReadonlyContext) -> dict[str, str]:     [](#__codelineno-0-6)    """Dynamically extracts session state or per-user token on every turn."""    [](#__codelineno-0-7)    user_token = context.state.get("user_access_token", "ANONYMOUS_TOKEN")    [](#__codelineno-0-8)    return {        [](#__codelineno-0-9)        "Authorization": f"Bearer {user_token}",        [](#__codelineno-0-10)        "X-User-ID": context.user_id,        [](#__codelineno-0-11)        "X-Session-ID": context.session.id,  # Fixed: access session.id    [](#__codelineno-0-12)    } [](#__codelineno-0-13)[](#__codelineno-0-14)toolset = McpToolset(     [](#__codelineno-0-15)    connection_params=StreamableHTTPConnectionParams(        [](#__codelineno-0-16)        url="https://mcp-server.example.com/mcp",        [](#__codelineno-0-17)        timeout=5,        [](#__codelineno-0-18)        sse_read_timeout=300,    [](#__codelineno-0-19)    ),    [](#__codelineno-0-20)    header_provider=extract_per_user_headers, [](#__codelineno-0-21))`

* * *

## Human-in-the-loop and tool confirmations (`require_confirmation`)[¶](#human-in-the-loop-and-tool-confirmations-require_confirmation "Permanent link")

MCP servers can expose high-impact capabilities, for example: database schema modifications or record deletions. You can enforce confirmation globally across all tools in the toolset or conditionally via a predicate function that inspects tool arguments.

`[](#__codelineno-1-1)from typing import Any [](#__codelineno-1-2)from google.adk.agents import LlmAgent [](#__codelineno-1-3)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-1-4)from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams [](#__codelineno-1-5)from mcp import StdioServerParameters [](#__codelineno-1-6)[](#__codelineno-1-7)def should_require_approval(query: str = "", **kwargs) -> bool:     [](#__codelineno-1-8)    query_str = str(query).lower()    [](#__codelineno-1-9)    destructive_keywords = ["drop", "delete", "truncate", "alter", "update"]    [](#__codelineno-1-10)    return any(keyword in query_str for keyword in destructive_keywords) [](#__codelineno-1-11)[](#__codelineno-1-12)toolset = McpToolset(     [](#__codelineno-1-13)    connection_params=StdioConnectionParams(        [](#__codelineno-1-14)        server_params=StdioServerParameters(            [](#__codelineno-1-15)            command="npx",            [](#__codelineno-1-16)            args=["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/db"],        [](#__codelineno-1-17)        ),        [](#__codelineno-1-18)        timeout=5,    [](#__codelineno-1-19)    ),    [](#__codelineno-1-20)    require_confirmation=should_require_approval,  # Can also be a boolean (True) [](#__codelineno-1-21)) [](#__codelineno-1-22)[](#__codelineno-1-23)root_agent = LlmAgent(     [](#__codelineno-1-24)    model="gemini-flash-latest",    [](#__codelineno-1-25)    name="db_administrator",    [](#__codelineno-1-26)    instruction="Execute database queries safely with explicit approval for mutations.",    [](#__codelineno-1-27)    tools=[toolset], [](#__codelineno-1-28))`

* * *

## Real-time progress tracking (`progress_callback`)[¶](#real-time-progress-tracking-progress_callback "Permanent link")

Long-running MCP operations, such as scraping large websites or training jobs, send intermediate progress notifications over the `notifications/progress` channel.

### Option A: Global callback function[¶](#option-a-global-callback-function "Permanent link")

Assign a shared callback for simple logging or progress reporting:

`[](#__codelineno-2-1)async def on_mcp_progress(progress: float, total: float | None, message: str | None) -> None:     [](#__codelineno-2-2)    percentage = (progress / total * 100) if total else progress    [](#__codelineno-2-3)    print(f"[MCP Progress] {percentage:.1f}% complete: {message or 'Working...'}") [](#__codelineno-2-4)[](#__codelineno-2-5)toolset = McpToolset(     [](#__codelineno-2-6)    connection_params=...,    [](#__codelineno-2-7)    progress_callback=on_mcp_progress, [](#__codelineno-2-8))`

### Option B: Per-tool callback factory (Session-Aware)[¶](#option-b-per-tool-callback-factory-session-aware "Permanent link")

Use `ProgressCallbackFactory` to inject tool-specific callbacks with write access to `ToolContext.state`:

`[](#__codelineno-3-1)from google.adk.tools.tool_context import ToolContext [](#__codelineno-3-2)[](#__codelineno-3-3)def create_tool_progress_tracker(tool_name: str, callback_context: ToolContext, **kwargs):     [](#__codelineno-3-4)    """Generates custom progress handlers and updates active agent session state."""    [](#__codelineno-3-5)    async def progress_handler(progress: float, total: float | None, message: str | None):        [](#__codelineno-3-6)        callback_context.state[f"{tool_name}_status"] = message        [](#__codelineno-3-7)        callback_context.state[f"{tool_name}_progress"] = progress    [](#__codelineno-3-8)    return progress_handler [](#__codelineno-3-9)[](#__codelineno-3-10)toolset = McpToolset(     [](#__codelineno-3-11)    connection_params=...,    [](#__codelineno-3-12)    progress_callback=create_tool_progress_tracker, [](#__codelineno-3-13))`

* * *

## Standalone runner execution (Outside `adk web`)[¶](#standalone-runner-execution-outside-adk-web "Permanent link")

When embedding ADK agents into custom FastAPI applications, background workers, or standalone CLI scripts, instantiate `Runner` and manage lifecycle teardown explicitly via `await toolset.close()`.

`[](#__codelineno-4-1)import asyncio [](#__codelineno-4-2)import os [](#__codelineno-4-3)from google.genai import types [](#__codelineno-4-4)from google.adk.agents import LlmAgent [](#__codelineno-4-5)from google.adk.runners import Runner [](#__codelineno-4-6)from google.adk.sessions import InMemorySessionService [](#__codelineno-4-7)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-4-8)from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams [](#__codelineno-4-9)from mcp import StdioServerParameters [](#__codelineno-4-10)[](#__codelineno-4-11)async def run_standalone_mcp_agent():     [](#__codelineno-4-12)    # 1. Define McpToolset and Agent synchronously    [](#__codelineno-4-13)    toolset = McpToolset(        [](#__codelineno-4-14)        connection_params=StdioConnectionParams(            [](#__codelineno-4-15)            server_params=StdioServerParameters(                [](#__codelineno-4-16)                command="npx",                [](#__codelineno-4-17)                args=["-y", "@modelcontextprotocol/server-filesystem", os.path.abspath("./data")],            [](#__codelineno-4-18)            ),            [](#__codelineno-4-19)            timeout=5,        [](#__codelineno-4-20)        ),        [](#__codelineno-4-21)        tool_filter=["list_directory", "read_file"],    [](#__codelineno-4-22)    ) [](#__codelineno-4-23)    [](#__codelineno-4-24)    agent = LlmAgent(        [](#__codelineno-4-25)        model="gemini-flash-latest",        [](#__codelineno-4-26)        name="filesystem_assistant",        [](#__codelineno-4-27)        instruction="Assist users with file management.",        [](#__codelineno-4-28)        tools=[toolset],    [](#__codelineno-4-29)    ) [](#__codelineno-4-30)    [](#__codelineno-4-31)    # 2. Setup Session and Runner    [](#__codelineno-4-32)    session_service = InMemorySessionService()    [](#__codelineno-4-33)    session = await session_service.create_session(        [](#__codelineno-4-34)        app_name="standalone_mcp_app",        [](#__codelineno-4-35)        user_id="user_001",    [](#__codelineno-4-36)    ) [](#__codelineno-4-37)    [](#__codelineno-4-38)    runner = Runner(        [](#__codelineno-4-39)        app_name="standalone_mcp_app",        [](#__codelineno-4-40)        agent=agent,        [](#__codelineno-4-41)        session_service=session_service,    [](#__codelineno-4-42)    ) [](#__codelineno-4-43)    [](#__codelineno-4-44)    try:        [](#__codelineno-4-45)        # 3. Stream agent execution        [](#__codelineno-4-46)        user_message = types.Content(            [](#__codelineno-4-47)            role="user",            [](#__codelineno-4-48)            parts=[types.Part(text="List the files available in the directory.")],        [](#__codelineno-4-49)        ) [](#__codelineno-4-50)        [](#__codelineno-4-51)        async for event in runner.run_async(            [](#__codelineno-4-52)            session_id=session.id,            [](#__codelineno-4-53)            user_id=session.user_id,            [](#__codelineno-4-54)            new_message=user_message,        [](#__codelineno-4-55)        ):            [](#__codelineno-4-56)            if event.content and event.content.parts:                [](#__codelineno-4-57)                for part in event.content.parts:                    [](#__codelineno-4-58)                    if part.text:                        [](#__codelineno-4-59)                        print(part.text, end="", flush=True)    [](#__codelineno-4-60)    finally:        [](#__codelineno-4-61)        # 4. Gracefully terminate subprocesses and network connections        [](#__codelineno-4-62)        print("\nTerminating MCP connection...")        [](#__codelineno-4-63)        await toolset.close() [](#__codelineno-4-64)[](#__codelineno-4-65)if __name__ == "__main__":     [](#__codelineno-4-66)    asyncio.run(run_standalone_mcp_agent())`

* * *

## Name collisions and tool namespacing (`tool_name_prefix`)[¶](#name-collisions-and-tool-namespacing-tool_name_prefix "Permanent link")

When you connect to multiple MCP servers, tool names such as `query` or `search` can conflict. Use `tool_name_prefix` to automatically namespace discovered tools:

`[](#__codelineno-5-1)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-5-2)from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams [](#__codelineno-5-3)from mcp import StdioServerParameters [](#__codelineno-5-4)[](#__codelineno-5-5)postgres_toolset = McpToolset(     [](#__codelineno-5-6)    connection_params=StdioConnectionParams(        [](#__codelineno-5-7)        server_params=StdioServerParameters(            [](#__codelineno-5-8)            command="npx",            [](#__codelineno-5-9)            args=["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/db"],        [](#__codelineno-5-10)        )    [](#__codelineno-5-11)    ),    [](#__codelineno-5-12)    tool_name_prefix="pg_",  # Generates pg_query, pg_list_tables [](#__codelineno-5-13)) [](#__codelineno-5-14)[](#__codelineno-5-15)github_toolset = McpToolset(     [](#__codelineno-5-16)    connection_params=StdioConnectionParams(        [](#__codelineno-5-17)        server_params=StdioServerParameters(            [](#__codelineno-5-18)            command="npx",            [](#__codelineno-5-19)            args=["-y", "@modelcontextprotocol/server-github"],        [](#__codelineno-5-20)        )    [](#__codelineno-5-21)    ),    [](#__codelineno-5-22)    tool_name_prefix="gh_",  # Generates gh_search_repositories, gh_create_issue [](#__codelineno-5-23))`

* * *

## Bi-directional protocol hooks: sampling and elicitation[¶](#bi-directional-protocol-hooks-sampling-and-elicitation "Permanent link")

The Model Context Protocol supports bi-directional interaction where servers can request actions from clients: - **Sampling (`sampling_callback`)**: Allows the MCP server to ask the ADK host to generate an LLM completion. - **Elicitation (`elicitation_callback`)**: Allows the MCP server to request out-of-band user interactions or authentication flows.

`[](#__codelineno-6-1)from mcp import SamplingCapability [](#__codelineno-6-2)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-6-3)[](#__codelineno-6-4)async def handle_server_sampling(params):     [](#__codelineno-6-5)    """Processes server-initiated LLM generation requests."""    [](#__codelineno-6-6)    return {        [](#__codelineno-6-7)        "role": "assistant",        [](#__codelineno-6-8)        "content": {"type": "text", "text": "Generated response from ADK"},    [](#__codelineno-6-9)    } [](#__codelineno-6-10)[](#__codelineno-6-11)async def handle_server_elicitation(params):     [](#__codelineno-6-12)    """Handles authentication or interactive challenges from the server."""    [](#__codelineno-6-13)    print(f"Elicitation requested: {params}")    [](#__codelineno-6-14)    return {"action": "approved"} [](#__codelineno-6-15)[](#__codelineno-6-16)toolset = McpToolset(     [](#__codelineno-6-17)    connection_params=...,    [](#__codelineno-6-18)    sampling_callback=handle_server_sampling,    [](#__codelineno-6-19)    sampling_capabilities=SamplingCapability(),    [](#__codelineno-6-20)    elicitation_callback=handle_server_elicitation, [](#__codelineno-6-21))`

* * *

## Diagnostic logging and error streams (`errlog`)[¶](#diagnostic-logging-and-error-streams-errlog "Permanent link")

By default, MCP subprocess errors are logged to standard error. You can redirect STDERR streams to an external file or diagnostic buffer for root-cause debugging:

`[](#__codelineno-7-1)import sys [](#__codelineno-7-2)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-7-3)[](#__codelineno-7-4)error_file = open("mcp_server_errors.log", "a") [](#__codelineno-7-5)try:     [](#__codelineno-7-6)    toolset = McpToolset(connection_params=..., errlog=error_file)    [](#__codelineno-7-7)    # Run agent... [](#__codelineno-7-8)finally:     [](#__codelineno-7-9)    await toolset.close()    [](#__codelineno-7-10)    error_file.close()`

## Render interactive UI widgets[¶](#render-interactive-ui-widgets "Permanent link")

Standard MCP tools return plain text or JSON output. This feature enables MCP tools to return rich, interactive visual widgets, such as maps, charts, or forms, directly inside the chat interface.

```
sequenceDiagram
    autonumber
    participant Tool as MCP Server Tool
    participant ADK as ADK Framework
    participant UI as Client UI (adk web / Frontend)

    Tool-->>ADK: Returns result + metadata (meta.ui.resourceUri = "ui://widgets/map")
    ADK->>ADK: Detects meta.ui.resourceUri annotation
    ADK-->>UI: Emits Event with UI rendering signal & Resource URI
    UI->>Tool: Fetches UI bundle from Resource URI
    UI-->>UI: Renders interactive widget in chat interface
```

### How it works[¶](#how-it-works "Permanent link")

1.  **Tool Registration**: The MCP tool declares a UI resource link in its schema definition metadata during `tools/list`: `meta.ui.resourceUri = "ui://widgets/weather-card"`.
2.  **ADK Detection**: ADK reads the schema definition to detect `meta.ui.resourceUri` and knows this tool supports an interactive UI.
3.  **Client Display**: Upon tool execution, ADK signals the web UI (`adk web` or custom frontend) to fetch the UI resource and render an interactive widget instead of plain text.

`[](#__codelineno-8-1)from mcp import types as mcp_types [](#__codelineno-8-2)from mcp.server.lowlevel import Server [](#__codelineno-8-3)[](#__codelineno-8-4)app = Server("weather-mcp-server") [](#__codelineno-8-5) [](#__codelineno-8-6)[](#__codelineno-8-7)@app.list_tools() [](#__codelineno-8-8)async def list_mcp_tools() -> list[mcp_types.Tool]:   [](#__codelineno-8-9)  """Declares the tool and attaches UI rendering metadata."""  [](#__codelineno-8-10)  return [      [](#__codelineno-8-11)      mcp_types.Tool(          [](#__codelineno-8-12)          name="get_weather",          [](#__codelineno-8-13)          description="Get weather forecast for a city.",          [](#__codelineno-8-14)          inputSchema={              [](#__codelineno-8-15)              "type": "object",              [](#__codelineno-8-16)              "properties": {"city": {"type": "string"}},              [](#__codelineno-8-17)              "required": ["city"],          [](#__codelineno-8-18)          },          [](#__codelineno-8-19)          meta={"ui": {"resourceUri": "ui://widgets/weather-card"}},      [](#__codelineno-8-20)      )  [](#__codelineno-8-21)  ] [](#__codelineno-8-22) [](#__codelineno-8-23)[](#__codelineno-8-24)@app.call_tool() [](#__codelineno-8-25)async def call_mcp_tool(name: str, arguments: dict) -> list[mcp_types.Content]:   [](#__codelineno-8-26)  """Executes the tool and returns standard text/data content."""  [](#__codelineno-8-27)  if name == "get_weather":    [](#__codelineno-8-28)    city = arguments.get("city", "Unknown")    [](#__codelineno-8-29)    return [        [](#__codelineno-8-30)        mcp_types.TextContent(            [](#__codelineno-8-31)            type="text", text=f"Weather in {city}: 72°F Sunny"        [](#__codelineno-8-32)        )    [](#__codelineno-8-33)    ]  [](#__codelineno-8-34)  return [      [](#__codelineno-8-35)      mcp_types.TextContent(type="text", text=f"Unknown tool: '{name}'")  [](#__codelineno-8-36)  ]`

* * *

## Next Steps[¶](#next-steps "Permanent link")

-   Return to the [Model Context Protocol Overview](../) for basic setup.
-   Explore [Custom Function Tools](../../function-tools/) for in-process Python tools.
-   Read the [ADK Deployment Guide](../../../deploy/) for full cloud configuration options.

Back to top