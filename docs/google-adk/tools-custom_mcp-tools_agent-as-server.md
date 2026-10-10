---
title: "Agent as MCP server - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/mcp-tools/agent-as-server/
date: 2026-10-10T19:17:02.947Z
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
            -    Agent as MCP server [Agent as MCP server](./)
                
                Table of contents
                
                -   [Get started](#get-started)
                -   [Expose individual ADK Tools](#expose-individual-adk-tools)
                -   [Build the MCP server with ADK tools](#build-the-mcp-server-with-adk-tools)
                -   [Connection and transport modes](#connection-and-transport-modes)
                -   [Test your custom MCP server with an ADK Agent](#test-your-custom-mcp-server-with-an-adk-agent)
                -   [MCP Servers for Google Cloud Genmedia](#mcp-servers-for-google-cloud-genmedia)
                
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

-   [Get started](#get-started)
-   [Expose individual ADK Tools](#expose-individual-adk-tools)
-   [Build the MCP server with ADK tools](#build-the-mcp-server-with-adk-tools)
-   [Connection and transport modes](#connection-and-transport-modes)
-   [Test your custom MCP server with an ADK Agent](#test-your-custom-mcp-server-with-an-adk-agent)
-   [MCP Servers for Google Cloud Genmedia](#mcp-servers-for-google-cloud-genmedia)

1.  [Home](../../..)
2.  [Components](../../../get-started/about/)
3.  [Custom Tools](../../)
4.  [MCP tools](../)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/mcp-tools/agent-as-server.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Configure ADK agents as MCP servers[¶](#configure-adk-agents-as-mcp-servers "Permanent link")

You can make your ADK agent's capabilities accessible to external MCP clients, such as Antigravity, Claude Code, or custom agents, by hosting your ADK agent's capabilities within an MCP server. There are two primary ways to achieve this:

-   **Expose an entire Agent:** Wraps the full multi-turn agent reasoning and internal tool execution into a server using a simple one-line conversion.
    
-   **Expose individual Tools:** Involves manually building a lightweight MCP server to wrap specific, standalone ADK tools (like a `FunctionTool`) without the agent's reasoning loop.
    

## Get started[¶](#get-started "Permanent link")

The most powerful approach is to expose an entire `LlmAgent`. By using the `to_mcp_server()` utility, you can convert your agent into a standard FastMCP server. This allows external clients to interact with the agent's full cognitive capabilities and its internal toolkit.

`[](#__codelineno-0-1)from google.adk.agents import LlmAgent [](#__codelineno-0-2)from google.adk.tools.load_web_page import load_web_page [](#__codelineno-0-3)from google.adk.tools.mcp_tool import to_mcp_server [](#__codelineno-0-4)[](#__codelineno-0-5)# 1. Define your ADK agent [](#__codelineno-0-6)agent = LlmAgent(     [](#__codelineno-0-7)    model="gemini-flash-latest",    [](#__codelineno-0-8)    name="web_reader_agent",    [](#__codelineno-0-9)    instruction="Fetch and summarize web content for the user.",    [](#__codelineno-0-10)    tools=[load_web_page],  [](#__codelineno-0-11)) [](#__codelineno-0-12)[](#__codelineno-0-13)# 2. Convert the agent into an MCP server [](#__codelineno-0-14)app = to_mcp_server(agent) [](#__codelineno-0-15)[](#__codelineno-0-16)if __name__ == "__main__":     [](#__codelineno-0-17)    # Runs the agent as a standard stdio MCP server    [](#__codelineno-0-18)    app.run()`

## Expose individual ADK Tools[¶](#expose-individual-adk-tools "Permanent link")

If you only want to expose individual capabilities (like a specific `FunctionTool`) without the full agent reasoning loop, you must manually build an MCP server.

**Prerequisites:** You must install the MCP Server library in your ADK environment:

`[](#__codelineno-1-1)pip install mcp`

**Implementation Steps:**

1.  **Initialize the Tool:** Instantiate the ADK tool you want to expose, such as: `FunctionTool(load_web_page)`.
2.  **List Tools Handler:** Implement the MCP server's `@app.list_tools()` handler to advertise the tool. You use the `adk_to_mcp_tool_type` utility from `google.adk.tools.mcp_tool.conversion_utils` to convert the ADK tool definition into the MCP schema format.
3.  **Call Tool Handler:** Implement the `@app.call_tool()` handler to receive client requests. This handler must identify if the request matches your wrapped tool, execute the ADK tool's `.run_async()` method (passing `tool_context=None`), and format the response into an MCP-compliant structure, for example `mcp.types.TextContent`.

## Build the MCP server with ADK tools[¶](#build-the-mcp-server-with-adk-tools "Permanent link")

1.  Create a new Python file for your MCP server, for example: `my_adk_mcp_server.py`.
2.  Implement server logic with the following code to your new file. This following script sets up an MCP server that exposes the ADK `load_web_page` tool.

`[](#__codelineno-2-1)import asyncio [](#__codelineno-2-2)import json [](#__codelineno-2-3)import os [](#__codelineno-2-4)from dotenv import load_dotenv [](#__codelineno-2-5)[](#__codelineno-2-6)# MCP Server Imports [](#__codelineno-2-7)from mcp import types as mcp_types [](#__codelineno-2-8)from mcp.server.lowlevel import Server, NotificationOptions [](#__codelineno-2-9)from mcp.server.models import InitializationOptions [](#__codelineno-2-10)import mcp.server.stdio  [](#__codelineno-2-11)[](#__codelineno-2-12)# ADK Tool Imports [](#__codelineno-2-13)from google.adk.tools.function_tool import FunctionTool [](#__codelineno-2-14)from google.adk.tools.load_web_page import load_web_page  [](#__codelineno-2-15)from google.adk.tools.mcp_tool.conversion_utils import adk_to_mcp_tool_type [](#__codelineno-2-16)[](#__codelineno-2-17)load_dotenv() [](#__codelineno-2-18)[](#__codelineno-2-19)# 1. Prepare the ADK Tool [](#__codelineno-2-20)adk_tool_to_expose = FunctionTool(load_web_page) [](#__codelineno-2-21)[](#__codelineno-2-22)# 2. Create the MCP Server instance [](#__codelineno-2-23)app = Server("adk-tool-exposing-mcp-server") [](#__codelineno-2-24)[](#__codelineno-2-25)# 3. Implement the list_tools handler [](#__codelineno-2-26)@app.list_tools() [](#__codelineno-2-27)async def list_mcp_tools() -> list[mcp_types.Tool]:     [](#__codelineno-2-28)    mcp_tool_schema = adk_to_mcp_tool_type(adk_tool_to_expose)    [](#__codelineno-2-29)    return [mcp_tool_schema] [](#__codelineno-2-30)[](#__codelineno-2-31)# 4. Implement the call_tool handler [](#__codelineno-2-32)@app.call_tool() [](#__codelineno-2-33)async def call_mcp_tool(name: str, arguments: dict) -> list[mcp_types.Content]:     [](#__codelineno-2-34)    if name == adk_tool_to_expose.name:        [](#__codelineno-2-35)        try:            [](#__codelineno-2-36)            # Execute the ADK tool            [](#__codelineno-2-37)            adk_tool_response = await adk_tool_to_expose.run_async(                [](#__codelineno-2-38)                args=arguments,                [](#__codelineno-2-39)                tool_context=None,            [](#__codelineno-2-40)            )            [](#__codelineno-2-41)            # Format into MCP TextContent            [](#__codelineno-2-42)            response_text = json.dumps(adk_tool_response, indent=2)            [](#__codelineno-2-43)            return [mcp_types.TextContent(type="text", text=response_text)]        [](#__codelineno-2-44)        except Exception as e:            [](#__codelineno-2-45)            error_text = json.dumps({"error": str(e)})            [](#__codelineno-2-46)            return [mcp_types.TextContent(type="text", text=error_text)]    [](#__codelineno-2-47)    else:        [](#__codelineno-2-48)        error_text = json.dumps({"error": f"Tool '{name}' not found."})        [](#__codelineno-2-49)        return [mcp_types.TextContent(type="text", text=error_text)] [](#__codelineno-2-50)[](#__codelineno-2-51)# 5. MCP Server Runner (Stdio) [](#__codelineno-2-52)async def run_mcp_stdio_server():     [](#__codelineno-2-53)    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):        [](#__codelineno-2-54)        await app.run(            [](#__codelineno-2-55)            read_stream,            [](#__codelineno-2-56)            write_stream,            [](#__codelineno-2-57)            InitializationOptions(                [](#__codelineno-2-58)                server_name=app.name,                [](#__codelineno-2-59)                server_version="0.1.0",                [](#__codelineno-2-60)                capabilities=app.get_capabilities(                    [](#__codelineno-2-61)                    notification_options=NotificationOptions(),                    [](#__codelineno-2-62)                    experimental_capabilities={},                [](#__codelineno-2-63)                ),            [](#__codelineno-2-64)            ),        [](#__codelineno-2-65)        ) [](#__codelineno-2-66)[](#__codelineno-2-67)if __name__ == "__main__":     [](#__codelineno-2-68)    asyncio.run(run_mcp_stdio_server())`

## Connection and transport modes[¶](#connection-and-transport-modes "Permanent link")

When exposing your ADK capabilities via these MCP servers, you typically run them using a standard input/output connection (`mcp.server.stdio`). This connection allows the external client application, running as a parent process, to spawn your script and communicate with it directly over the stdio streams, keeping the connection self-contained and isolated.

## Test your custom MCP server with an ADK Agent[¶](#test-your-custom-mcp-server-with-an-adk-agent "Permanent link")

To test your custom server, you need to build an ADK agent that acts as a client. This agent uses the `McpToolset` to establish a connection to the server script you just created.

1.  Set up your agent in a new directory such as `./adk_agent_samples/mcp_client_agent/`. Create an `agent.py` file and include an `__init__.py` alongside it to make it discoverable.

`[](#__codelineno-3-1)from google.adk.agents import LlmAgent [](#__codelineno-3-2)from google.adk.tools.mcp_tool import McpToolset [](#__codelineno-3-3)from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams [](#__codelineno-3-4)from mcp import StdioServerParameters [](#__codelineno-3-5)[](#__codelineno-3-6)# IMPORTANT: Provide the absolute path to the server script you built previously [](#__codelineno-3-7)MCP_SERVER_SCRIPT = "/path/to/your/my_adk_mcp_server.py" [](#__codelineno-3-8)[](#__codelineno-3-9)root_agent = LlmAgent(     [](#__codelineno-3-10)    model='gemini-flash-latest',    [](#__codelineno-3-11)    name='web_reader_mcp_client_agent',    [](#__codelineno-3-12)    instruction="Use the 'load_web_page' tool to fetch content from a URL provided by the user.",    [](#__codelineno-3-13)    tools=[        [](#__codelineno-3-14)        McpToolset(            [](#__codelineno-3-15)            connection_params=StdioConnectionParams(                [](#__codelineno-3-16)                server_params=StdioServerParameters(                    [](#__codelineno-3-17)                    command='python3',                    [](#__codelineno-3-18)                    args=[MCP_SERVER_SCRIPT],                [](#__codelineno-3-19)                )            [](#__codelineno-3-20)            )        [](#__codelineno-3-21)        )    [](#__codelineno-3-22)    ], [](#__codelineno-3-23))`

1.  Navigate to your agent's parent directory in the terminal:

`[](#__codelineno-4-1)cd ./adk_agent_samples [](#__codelineno-4-2)adk web`

1.  Open the ADK Web UI and select the web\_reader\_mcp\_client\_agent.
2.  Test the connection with a prompt such as: *Load the content from "https://example.com"*.

## MCP Servers for Google Cloud Genmedia[¶](#mcp-servers-for-google-cloud-genmedia "Permanent link")

[MCP Tools for Genmedia Services](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia) is a set of open-source MCP servers that enable you to integrate Google Cloud generative media services—such as Imagen, Veo, Chirp 3 HD voices, and Lyria—into your AI applications.

Agent Development Kit (ADK) and [Genkit](https://genkit.dev/) provide built-in support for these MCP tools, allowing your AI agents to effectively orchestrate generative media workflows. For implementation guidance, refer to the [ADK example agent](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia/sample-agents/adk) and the [Genkit example](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia/sample-agents/genkit).

Back to top