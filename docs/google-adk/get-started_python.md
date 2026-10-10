---
title: "Python - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/get-started/python/
date: 2026-10-10T19:16:34.296Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../)
        
        Get Started
        
        -    Python [Python](./)
            
            Table of contents
            
            -   [Installation](#installation)
            -   [Create an agent project](#create-an-agent-project)
                
                -   [Explore the agent project](#explore-the-agent-project)
                
            -   [Update your agent project](#update-your-agent-project)
                
                -   [Set your API key](#set-your-api-key)
                
            -   [Run your agent](#run-your-agent)
                
                -   [Run with command-line interface](#run-with-command-line-interface)
                -   [Run with web interface](#run-with-web-interface)
                
            -   [Next: Build your agent](#next-build-your-agent)
            
        -   [TypeScript](../typescript/)
        -   [Go](../go/)
        -   [Java](../java/)
        -   [Kotlin](../kotlin/)
        -   [Agents CLI](../agents-cli/)
        -   [Installation](../installation/)
        -   [Google Cloud](../google-cloud/)
        -   [Migrate to ADK](../migrate/)
        
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

-   [Installation](#installation)
-   [Create an agent project](#create-an-agent-project)
    
    -   [Explore the agent project](#explore-the-agent-project)
    
-   [Update your agent project](#update-your-agent-project)
    
    -   [Set your API key](#set-your-api-key)
    
-   [Run your agent](#run-your-agent)
    
    -   [Run with command-line interface](#run-with-command-line-interface)
    -   [Run with web interface](#run-with-web-interface)
    
-   [Next: Build your agent](#next-build-your-agent)

1.  [Home](../..)
2.  [Build Agents](../)
3.  [Get Started](../)

[](https://github.com/google/adk-docs/edit/main/docs/get-started/python.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Python Quickstart for ADK[¶](#python-quickstart-for-adk "Permanent link")

This guide shows you how to get up and running with Agent Development Kit (ADK) for Python. Before you start, make sure you have the following installed:

-   Python 3.10 or later
-   `pip` for installing packages

## Installation[¶](#installation "Permanent link")

Install ADK by running the following command:

`[](#__codelineno-0-1)pip install google-adk`

Recommended: create and activate a Python virtual environment

Create a Python virtual environment:

`[](#__codelineno-1-1)python3 -m venv .venv`

Activate the Python virtual environment:

Windows Command PromptWindows PowerShellMacOS / Linux

`[](#__codelineno-2-1).venv\Scripts\activate.bat`

`[](#__codelineno-3-1).venv\Scripts\Activate.ps1`

`[](#__codelineno-4-1)source .venv/bin/activate`

## Create an agent project[¶](#create-an-agent-project "Permanent link")

Run the `adk create` command to start a new agent project.

`[](#__codelineno-5-1)adk create my_agent`

### Explore the agent project[¶](#explore-the-agent-project "Permanent link")

The created agent project has the following structure, with the `agent.py` file containing the main control code for the agent.

`[](#__codelineno-6-1)my_agent/     [](#__codelineno-6-2)    agent.py      # main agent code    [](#__codelineno-6-3)    .env          # API keys or project IDs    [](#__codelineno-6-4)    __init__.py`

## Update your agent project[¶](#update-your-agent-project "Permanent link")

The `agent.py` file contains a `root_agent` definition which is the only required element of an ADK agent. You can also define tools for the agent to use. Update the generated `agent.py` code to include a `get_current_time` tool for use by the agent, as shown in the following code:

`[](#__codelineno-7-1)from google.adk.agents.llm_agent import Agent [](#__codelineno-7-2)[](#__codelineno-7-3)# Mock tool implementation [](#__codelineno-7-4)def get_current_time(city: str) -> dict:     [](#__codelineno-7-5)    """Returns the current time in a specified city."""    [](#__codelineno-7-6)    return {"status": "success", "city": city, "time": "10:30 AM"} [](#__codelineno-7-7)[](#__codelineno-7-8)root_agent = Agent(     [](#__codelineno-7-9)    model='gemini-flash-latest',    [](#__codelineno-7-10)    name='root_agent',    [](#__codelineno-7-11)    description="Tells the current time in a specified city.",    [](#__codelineno-7-12)    instruction="You are a helpful assistant that tells the current time in cities. Use the 'get_current_time' tool for this purpose.",    [](#__codelineno-7-13)    tools=[get_current_time], [](#__codelineno-7-14))`

### Set your API key[¶](#set-your-api-key "Permanent link")

This project uses the Gemini API, which requires an API key. If you don't already have Gemini API key, create a key in Google AI Studio on the [API Keys](https://aistudio.google.com/app/apikey) page.

In a terminal window, write your API key into an `.env` file as an environment variable:

MacOS / LinuxWindows PowerShellWindows Command Prompt

Update: my\_agent/.env

`[](#__codelineno-8-1)echo 'GOOGLE_API_KEY="YOUR_API_KEY"' > .env`

Update: my\_agent/.env

`[](#__codelineno-9-1)echo 'GOOGLE_API_KEY="YOUR_API_KEY"' > .env`

Update: my\_agent/.env

`[](#__codelineno-10-1)echo GOOGLE_API_KEY="YOUR_API_KEY" > .env`

Using other AI models with ADK

ADK supports the use of many generative AI models. For more information on configuring other models in ADK agents, see [Models & Authentication](/agents/models).

## Run your agent[¶](#run-your-agent "Permanent link")

You can run your ADK agent with an interactive command-line interface using the `adk run` command or the ADK web user interface provided by the ADK using the `adk web` command. Both these options allow you to test and interact with your agent.

### Run with command-line interface[¶](#run-with-command-line-interface "Permanent link")

Run your agent using the `adk run` command-line tool.

`[](#__codelineno-11-1)adk run my_agent`

![adk-run.png](./images/img_f9a50d7d12.png)

### Run with web interface[¶](#run-with-web-interface "Permanent link")

The ADK framework provides web interface you can use to test and interact with your agent. You can start the web interface using the following command:

`[](#__codelineno-12-1)adk web --port 8000`

Note

Run this command from the **parent directory** that contains your `my_agent/` folder. For example, if your agent is inside `agents/my_agent/`, run `adk web` from the `agents/` directory.

This command starts a web server with a chat interface for your agent. You can access the web interface at `http://localhost:8000`. Select the agent at the upper left corner and type a request.

![adk-web-dev-ui-chat.png](./images/img_2b1b63903e.png)

Caution: ADK Web for development only

ADK Web is ***not meant for use in production deployments***. You should use ADK Web for development and debugging purposes only.

## Next: Build your agent[¶](#next-build-your-agent "Permanent link")

Now that you have ADK installed and your first agent running, try building your own agent with our build guides:

-   [Build your agent](/tutorials/)

Back to top