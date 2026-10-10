---
title: "Deployment - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/mcp-tools/deployment/
date: 2026-10-10T19:17:03.286Z
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
            -    Deployment [Deployment](./)
                
                Table of contents
                
                -   [Critical Deployment Requirement: Synchronous Agent Definition](#critical-deployment-requirement-synchronous-agent-definition)
                -   [Quick Deployment Commands](#quick-deployment-commands)
                    
                    -   [Agent Runtime](#agent-runtime)
                    -   [Cloud Run](#cloud-run)
                    
                -   [Deployment Patterns](#deployment-patterns)
                    
                    -   [Pattern 1: Self-Contained Stdio MCP Servers](#pattern-1-self-contained-stdio-mcp-servers)
                    -   [Pattern 2: Remote MCP Servers (Streamable HTTP)](#pattern-2-remote-mcp-servers-streamable-http)
                    -   [Pattern 3: Sidecar MCP Servers (GKE)](#pattern-3-sidecar-mcp-servers-gke)
                    
                -   [Connection management considerations](#connection-management-considerations)
                    
                    -   [Stdio connections](#stdio-connections)
                    -   [SSE/HTTP connections](#ssehttp-connections)
                    
                -   [Production deployment guidelines](#production-deployment-guidelines)
                    
                    -   [Connection lifecycle](#connection-lifecycle)
                    -   [Resource management](#resource-management)
                    -   [Security](#security)
                    -   [Monitoring and observability](#monitoring-and-observability)
                    
                
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

-   [Critical Deployment Requirement: Synchronous Agent Definition](#critical-deployment-requirement-synchronous-agent-definition)
-   [Quick Deployment Commands](#quick-deployment-commands)
    
    -   [Agent Runtime](#agent-runtime)
    -   [Cloud Run](#cloud-run)
    
-   [Deployment Patterns](#deployment-patterns)
    
    -   [Pattern 1: Self-Contained Stdio MCP Servers](#pattern-1-self-contained-stdio-mcp-servers)
    -   [Pattern 2: Remote MCP Servers (Streamable HTTP)](#pattern-2-remote-mcp-servers-streamable-http)
    -   [Pattern 3: Sidecar MCP Servers (GKE)](#pattern-3-sidecar-mcp-servers-gke)
    
-   [Connection management considerations](#connection-management-considerations)
    
    -   [Stdio connections](#stdio-connections)
    -   [SSE/HTTP connections](#ssehttp-connections)
    
-   [Production deployment guidelines](#production-deployment-guidelines)
    
    -   [Connection lifecycle](#connection-lifecycle)
    -   [Resource management](#resource-management)
    -   [Security](#security)
    -   [Monitoring and observability](#monitoring-and-observability)
    

1.  [Home](../../..)
2.  [Components](../../../get-started/about/)
3.  [Custom Tools](../../)
4.  [MCP tools](../)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/mcp-tools/deployment.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Deploy Agents with MCP Tools[¶](#deploy-agents-with-mcp-tools "Permanent link")

When deploying ADK agents that use MCP tools to production environments like Cloud Run, GKE, or Agent Runtime, you need to consider how MCP connections will work in containerized and distributed environments.

## Critical Deployment Requirement: Synchronous Agent Definition[¶](#critical-deployment-requirement-synchronous-agent-definition "Permanent link")

Warning

When deploying agents with MCP tools, the agent and its McpToolset must be defined **synchronously** in your `agent.py` file. While `adk web` allows for asynchronous agent creation, deployment environments require synchronous instantiation.

`[](#__codelineno-0-1)# CORRECT: Synchronous agent definition for deployment [](#__codelineno-0-2)import os [](#__codelineno-0-3)from google.adk.agents.llm_agent import LlmAgent [](#__codelineno-0-4)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-0-5)from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams [](#__codelineno-0-6)from mcp import StdioServerParameters [](#__codelineno-0-7)[](#__codelineno-0-8)_allowed_path = os.path.dirname(os.path.abspath(__file__)) [](#__codelineno-0-9)[](#__codelineno-0-10)root_agent = LlmAgent(     [](#__codelineno-0-11)    model='gemini-flash-latest',    [](#__codelineno-0-12)    name='enterprise_assistant',    [](#__codelineno-0-13)    instruction=f'Help user accessing their file systems. Allowed directory: {_allowed_path}',    [](#__codelineno-0-14)    tools=[        [](#__codelineno-0-15)        McpToolset(            [](#__codelineno-0-16)            connection_params=StdioConnectionParams(                [](#__codelineno-0-17)                server_params=StdioServerParameters(                    [](#__codelineno-0-18)                    command='npx',                    [](#__codelineno-0-19)                    args=['-y', '@modelcontextprotocol/server-filesystem', _allowed_path],                [](#__codelineno-0-20)                ),                [](#__codelineno-0-21)                timeout=5,  # Configure appropriate timeouts            [](#__codelineno-0-22)            ),            [](#__codelineno-0-23)            # Filter tools for security in production            [](#__codelineno-0-24)            tool_filter=[                [](#__codelineno-0-25)                'read_file', 'read_multiple_files', 'list_directory',                [](#__codelineno-0-26)                'directory_tree', 'search_files', 'get_file_info',                [](#__codelineno-0-27)                'list_allowed_directories',            [](#__codelineno-0-28)            ],        [](#__codelineno-0-29)        )    [](#__codelineno-0-30)    ], [](#__codelineno-0-31))`

`[](#__codelineno-1-1)# WRONG: Asynchronous patterns don't work in deployment [](#__codelineno-1-2)async def get_agent():  # This won't work for deployment     [](#__codelineno-1-3)    toolset = await create_mcp_toolset_async()    [](#__codelineno-1-4)    return LlmAgent(tools=[toolset])`

## Quick Deployment Commands[¶](#quick-deployment-commands "Permanent link")

### Agent Runtime[¶](#agent-runtime "Permanent link")

`[](#__codelineno-2-1)uv run adk deploy agent_engine \   [](#__codelineno-2-2)  --project=<your-gcp-project-id> \  [](#__codelineno-2-3)  --region=<your-gcp-region> \  [](#__codelineno-2-4)  --display_name="My MCP Agent" \  [](#__codelineno-2-5)  ./path/to/your/agent_directory`

### Cloud Run[¶](#cloud-run "Permanent link")

`[](#__codelineno-3-1)uv run adk deploy cloud_run \   [](#__codelineno-3-2)  --project=<your-gcp-project-id> \  [](#__codelineno-3-3)  --region=<your-gcp-region> \  [](#__codelineno-3-4)  --service_name=<your-service-name> \  [](#__codelineno-3-5)  ./path/to/your/agent_directory`

## Deployment Patterns[¶](#deployment-patterns "Permanent link")

### Pattern 1: Self-Contained Stdio MCP Servers[¶](#pattern-1-self-contained-stdio-mcp-servers "Permanent link")

For MCP servers that can be packaged as npm packages or Python modules (like `@modelcontextprotocol/server-filesystem`), you can include them directly in your agent container:

**Container Requirements:**

`[](#__codelineno-4-1)# Example for npm-based MCP servers [](#__codelineno-4-2)FROM python:3.13-slim [](#__codelineno-4-3)[](#__codelineno-4-4)# Install Node.js and npm for MCP servers [](#__codelineno-4-5)RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/* [](#__codelineno-4-6)[](#__codelineno-4-7)# Install your Python dependencies [](#__codelineno-4-8)COPY requirements.txt . [](#__codelineno-4-9)RUN pip install -r requirements.txt [](#__codelineno-4-10)[](#__codelineno-4-11)# Copy your agent code [](#__codelineno-4-12)COPY . . [](#__codelineno-4-13)[](#__codelineno-4-14)# Your agent can now use StdioConnectionParams with 'npx' commands [](#__codelineno-4-15)CMD ["python", "main.py"]`

**Agent Configuration:**

`[](#__codelineno-5-1)# This works in containers because npx and the MCP server run in the same environment [](#__codelineno-5-2)McpToolset(     [](#__codelineno-5-3)    connection_params=StdioConnectionParams(        [](#__codelineno-5-4)        server_params=StdioServerParameters(            [](#__codelineno-5-5)            command='npx',            [](#__codelineno-5-6)            args=["-y", "@modelcontextprotocol/server-filesystem", "/app/data"],        [](#__codelineno-5-7)        ),    [](#__codelineno-5-8)    ), [](#__codelineno-5-9))`

### Pattern 2: Remote MCP Servers (Streamable HTTP)[¶](#pattern-2-remote-mcp-servers-streamable-http "Permanent link")

For production deployments requiring scalability, deploy MCP servers as separate services and connect via Streamable HTTP:

**MCP Server Deployment (Cloud Run):**

`[](#__codelineno-6-1)# deploy_mcp_server.py - Separate Cloud Run service using Streamable HTTP [](#__codelineno-6-2)import contextlib [](#__codelineno-6-3)import logging [](#__codelineno-6-4)from collections.abc import AsyncIterator [](#__codelineno-6-5)from typing import Any [](#__codelineno-6-6)[](#__codelineno-6-7)import mcp.types as types [](#__codelineno-6-8)from mcp.server.lowlevel import Server [](#__codelineno-6-9)from mcp.server.streamable_http_manager import StreamableHTTPSessionManager [](#__codelineno-6-10)from starlette.applications import Starlette [](#__codelineno-6-11)from starlette.routing import Mount [](#__codelineno-6-12)from starlette.types import Receive, Scope, Send [](#__codelineno-6-13)[](#__codelineno-6-14)logger = logging.getLogger(__name__) [](#__codelineno-6-15)[](#__codelineno-6-16)def create_mcp_server():     [](#__codelineno-6-17)    """Create and configure the MCP server."""    [](#__codelineno-6-18)    app = Server("adk-mcp-streamable-server") [](#__codelineno-6-19)    [](#__codelineno-6-20)    @app.call_tool()    [](#__codelineno-6-21)    async def call_tool(name: str, arguments: dict[str, Any]) -> list[types.ContentBlock]:        [](#__codelineno-6-22)        """Handle tool calls from MCP clients."""        [](#__codelineno-6-23)        # Example tool implementation - replace with your actual ADK tools        [](#__codelineno-6-24)        if name == "example_tool":            [](#__codelineno-6-25)            result = arguments.get("input", "No input provided")            [](#__codelineno-6-26)            return [                [](#__codelineno-6-27)                types.TextContent(                    [](#__codelineno-6-28)                    type="text",                    [](#__codelineno-6-29)                    text=f"Processed: {result}"                [](#__codelineno-6-30)                )            [](#__codelineno-6-31)            ]        [](#__codelineno-6-32)        else:            [](#__codelineno-6-33)            raise ValueError(f"Unknown tool: {name}") [](#__codelineno-6-34)    [](#__codelineno-6-35)    @app.list_tools()    [](#__codelineno-6-36)    async def list_tools() -> list[types.Tool]:        [](#__codelineno-6-37)        """List available tools."""        [](#__codelineno-6-38)        return [            [](#__codelineno-6-39)            types.Tool(                [](#__codelineno-6-40)                name="example_tool",                [](#__codelineno-6-41)                description="Example tool for demonstration",                [](#__codelineno-6-42)                inputSchema={                    [](#__codelineno-6-43)                    "type": "object",                    [](#__codelineno-6-44)                    "properties": {                        [](#__codelineno-6-45)                        "input": {                            [](#__codelineno-6-46)                            "type": "string",                            [](#__codelineno-6-47)                            "description": "Input text to process"                        [](#__codelineno-6-48)                        }                    [](#__codelineno-6-49)                    },                    [](#__codelineno-6-50)                    "required": ["input"]                [](#__codelineno-6-51)                }            [](#__codelineno-6-52)            )        [](#__codelineno-6-53)        ] [](#__codelineno-6-54)    [](#__codelineno-6-55)    return app [](#__codelineno-6-56)[](#__codelineno-6-57)def main(port: int = 8080, json_response: bool = False):     [](#__codelineno-6-58)    """Main server function."""    [](#__codelineno-6-59)    logging.basicConfig(level=logging.INFO) [](#__codelineno-6-60)    [](#__codelineno-6-61)    app = create_mcp_server() [](#__codelineno-6-62)    [](#__codelineno-6-63)    # Create session manager with stateless mode for scalability    [](#__codelineno-6-64)    session_manager = StreamableHTTPSessionManager(        [](#__codelineno-6-65)        app=app,        [](#__codelineno-6-66)        event_store=None,        [](#__codelineno-6-67)        json_response=json_response,        [](#__codelineno-6-68)        stateless=True,  # Important for Cloud Run scalability    [](#__codelineno-6-69)    ) [](#__codelineno-6-70)    [](#__codelineno-6-71)    async def handle_streamable_http(scope: Scope, receive: Receive, send: Send) -> None:        [](#__codelineno-6-72)        await session_manager.handle_request(scope, receive, send) [](#__codelineno-6-73)    [](#__codelineno-6-74)    @contextlib.asynccontextmanager    [](#__codelineno-6-75)    async def lifespan(app: Starlette) -> AsyncIterator[None]:        [](#__codelineno-6-76)        """Manage session manager lifecycle."""        [](#__codelineno-6-77)        async with session_manager.run():            [](#__codelineno-6-78)            logger.info("MCP Streamable HTTP server started!")            [](#__codelineno-6-79)            try:                [](#__codelineno-6-80)                yield            [](#__codelineno-6-81)            finally:                [](#__codelineno-6-82)                logger.info("MCP server shutting down...") [](#__codelineno-6-83)    [](#__codelineno-6-84)    # Create ASGI application    [](#__codelineno-6-85)    starlette_app = Starlette(        [](#__codelineno-6-86)        debug=False,  # Set to False for production        [](#__codelineno-6-87)        routes=[            [](#__codelineno-6-88)            Mount("/mcp", app=handle_streamable_http),        [](#__codelineno-6-89)        ],        [](#__codelineno-6-90)        lifespan=lifespan,    [](#__codelineno-6-91)    ) [](#__codelineno-6-92)    [](#__codelineno-6-93)    import uvicorn    [](#__codelineno-6-94)    uvicorn.run(starlette_app, host="0.0.0.0", port=port) [](#__codelineno-6-95)[](#__codelineno-6-96)if __name__ == "__main__":     [](#__codelineno-6-97)    main()`

**Agent Configuration for Remote MCP:**

PythonJavaKotlin

`[](#__codelineno-7-1)# Your ADK agent connects to the remote MCP service via Streamable HTTP [](#__codelineno-7-2)McpToolset(     [](#__codelineno-7-3)    connection_params=StreamableHTTPConnectionParams(        [](#__codelineno-7-4)        url="https://your-mcp-server-url.run.app/mcp",        [](#__codelineno-7-5)        headers={"Authorization": "Bearer your-auth-token"}    [](#__codelineno-7-6)    ), [](#__codelineno-7-7))`

`[](#__codelineno-8-1)import java.util.Map; [](#__codelineno-8-2)import com.google.adk.tools.mcp.StreamableHttpServerParameters; [](#__codelineno-8-3)import com.google.adk.tools.mcp.McpToolset; [](#__codelineno-8-4)[](#__codelineno-8-5)// Your ADK agent connects to the remote MCP service via Streamable HTTP [](#__codelineno-8-6)StreamableHttpServerParameters streamableParams = StreamableHttpServerParameters.builder()         [](#__codelineno-8-7)        .url("https://your-mcp-server-url.run.app/mcp")        [](#__codelineno-8-8)        .headers(Map.of("Authorization", "Bearer your-auth-token"))        [](#__codelineno-8-9)        .build(); [](#__codelineno-8-10)[](#__codelineno-8-11)McpToolset toolset = new McpToolset(streamableParams);`

`[](#__codelineno-9-1)import com.google.adk.kt.tools.mcp.McpConnectionParameters [](#__codelineno-9-2)import com.google.adk.kt.tools.mcp.McpToolset [](#__codelineno-9-3)[](#__codelineno-9-4)// Your ADK agent connects to the remote MCP service via Streamable HTTP [](#__codelineno-9-5)// headerProvider is suspend, so fetchToken() can await a fresh token per request; [](#__codelineno-9-6)// it also disables session reuse, so use StreamableHttp(headers = ...) for a fixed one. [](#__codelineno-9-7)val toolset =     [](#__codelineno-9-8)    McpToolset.McpToolsetConfig(        [](#__codelineno-9-9)        streamableHttpConnectionParams =            [](#__codelineno-9-10)            McpConnectionParameters.StreamableHttp(                [](#__codelineno-9-11)                url = "https://your-mcp-server-url.run.app/mcp",            [](#__codelineno-9-12)            ),    [](#__codelineno-9-13)    ).toToolset(headerProvider = { mapOf("Authorization" to "Bearer ${fetchToken()}") })`

### Pattern 3: Sidecar MCP Servers (GKE)[¶](#pattern-3-sidecar-mcp-servers-gke "Permanent link")

In Kubernetes environments, you can deploy MCP servers as sidecar containers:

`[](#__codelineno-10-1)# deployment.yaml - GKE with MCP sidecar [](#__codelineno-10-2)apiVersion: apps/v1 [](#__codelineno-10-3)kind: Deployment [](#__codelineno-10-4)metadata:   [](#__codelineno-10-5)  name: adk-agent-with-mcp [](#__codelineno-10-6)spec:   [](#__codelineno-10-7)  template:    [](#__codelineno-10-8)    spec:      [](#__codelineno-10-9)      containers:      [](#__codelineno-10-10)      # Main ADK agent container      [](#__codelineno-10-11)      - name: adk-agent        [](#__codelineno-10-12)        image: your-adk-agent:latest        [](#__codelineno-10-13)        ports:        [](#__codelineno-10-14)        - containerPort: 8080        [](#__codelineno-10-15)        env:        [](#__codelineno-10-16)        - name: MCP_SERVER_URL          [](#__codelineno-10-17)          value: "http://localhost:8081" [](#__codelineno-10-18)      [](#__codelineno-10-19)      # MCP server sidecar      [](#__codelineno-10-20)      - name: mcp-server        [](#__codelineno-10-21)        image: your-mcp-server:latest        [](#__codelineno-10-22)        ports:        [](#__codelineno-10-23)        - containerPort: 8081`

## Connection management considerations[¶](#connection-management-considerations "Permanent link")

Choose your connection type based on your scaling and infrastructure needs.

### Stdio connections[¶](#stdio-connections "Permanent link")

-   **Pros:** Simple setup, process isolation, and works well in containers.
-   **Cons:** Process overhead; not suitable for high-scale deployments.
-   **Best for:** Development, single-tenant deployments, and simple MCP servers.

### SSE/HTTP connections[¶](#ssehttp-connections "Permanent link")

-   **Pros:** Network-based, scalable, and handles multiple clients.
-   **Cons:** Requires network infrastructure and authentication complexity.
-   **Best for:** Production deployments, multi-tenant systems, external MCP services, and high-volume traffic.

## Production deployment guidelines[¶](#production-deployment-guidelines "Permanent link")

Follow these core guidelines when deploying agents with MCP tools to production environments.

### Connection lifecycle[¶](#connection-lifecycle "Permanent link")

-   Clean up MCP connections properly using standard exit stack patterns.
-   Configure appropriate timeouts for connection establishment and requests.
-   Implement retry logic to handle transient connection failures gracefully.

### Resource management[¶](#resource-management "Permanent link")

-   Monitor memory usage closely for stdio MCP servers, as each connection spawns a new process.
-   Configure appropriate CPU and memory limits for MCP server processes.
-   Implement connection pooling for remote MCP servers to optimize resource consumption.

### Security[¶](#security "Permanent link")

Security Best Practices

-   Use strict authentication headers for all remote MCP connections.
-   Restrict network access tightly between ADK agents and MCP servers.
-   Filter MCP tools using `tool_filter` to strictly limit exposed functionality.
-   Validate all MCP tool inputs to prevent prompt or command injection attacks.
-   Use restrictive, absolute file paths for filesystem MCP servers (for example, `os.path.dirname(os.path.abspath(__file__))`).
-   Apply read-only tool filters in production environments whenever possible.

### Monitoring and observability[¶](#monitoring-and-observability "Permanent link")

-   Log all MCP connection establishment and teardown events.
-   Monitor MCP tool execution times and overall success rates.
-   Set up automated alerts for recurring MCP connection failures.

Back to top