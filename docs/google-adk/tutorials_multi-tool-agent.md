---
title: "Multi-tool agent - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tutorials/multi-tool-agent/
date: 2026-10-10T19:17:05.447Z
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
        
    -   [Build your Agent](../)
        
        Build your Agent
        
        -    Multi-tool agent [Multi-tool agent](./)
            
            Table of contents
            
            -   [1\. Set up Environment & Install ADK](#set-up-environment-install-adk)
            -   [Create a new Go module](#create-a-new-go-module)
            -   [Install ADK](#install-adk)
            -   [2\. Create Agent Project](#create-agent-project)
                
                -   [Project structure](#project-structure)
                -   [\_\_init\_\_.py](#__init__py)
                -   [agent.py](#agentpy)
                -   [.env](#env)
                -   [agent.ts](#agentts)
                -   [.env](#env_1)
                -   [agent.go](#agentgo)
                -   [.env](#env_2)
                -   [Create MultiToolAgent.java](#create-multitoolagentjava)
                -   [Create MultiToolAgent.kt](#create-multitoolagentkt)
                
            -   [3\. Set up the model](#set-up-the-model)
                
                -   [Model connection and authentication](#model-connection-and-authentication)
                
            -   [4\. Run Your Agent](#run-your-agent)
                
                -   [Run your Agent](#run-your-agent_1)
                -   [📝 Example prompts to try](#example-prompts-to-try)
                
            -   [🎉 Congratulations!](#congratulations)
            -   [🛣️ Next steps](#next-steps)
            
        -   [Agent team](../agent-team/)
        -   [Code with AI](../coding-with-ai/)
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

-   [1\. Set up Environment & Install ADK](#set-up-environment-install-adk)
-   [Create a new Go module](#create-a-new-go-module)
-   [Install ADK](#install-adk)
-   [2\. Create Agent Project](#create-agent-project)
    
    -   [Project structure](#project-structure)
    -   [\_\_init\_\_.py](#__init__py)
    -   [agent.py](#agentpy)
    -   [.env](#env)
    -   [agent.ts](#agentts)
    -   [.env](#env_1)
    -   [agent.go](#agentgo)
    -   [.env](#env_2)
    -   [Create MultiToolAgent.java](#create-multitoolagentjava)
    -   [Create MultiToolAgent.kt](#create-multitoolagentkt)
    
-   [3\. Set up the model](#set-up-the-model)
    
    -   [Model connection and authentication](#model-connection-and-authentication)
    
-   [4\. Run Your Agent](#run-your-agent)
    
    -   [Run your Agent](#run-your-agent_1)
    -   [📝 Example prompts to try](#example-prompts-to-try)
    
-   [🎉 Congratulations!](#congratulations)
-   [🛣️ Next steps](#next-steps)

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Build your Agent](../)

[](https://github.com/google/adk-docs/edit/main/docs/tutorials/multi-tool-agent.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Build a multi-tool agent[¶](#build-a-multi-tool-agent "Permanent link")

Supported in ADKPython v0.1.0TypeScript v0.2.0Go v0.1.0Java v0.1.0Kotlin v0.1.0

This quickstart guides you through installing Agent Development Kit (ADK), setting up a basic agent with multiple tools, and running it locally either in the terminal or in the interactive, browser-based dev UI.

This quickstart assumes a local IDE (VS Code, PyCharm, IntelliJ IDEA, etc.) with Python 3.10+ or Java 17+ and terminal access. This method runs the application entirely on your machine and is recommended for internal development.

## 1\. Set up Environment & Install ADK[¶](#set-up-environment-install-adk "Permanent link")

PythonTypeScriptGoJavaKotlin

Create & Activate Virtual Environment (Recommended):

`[](#__codelineno-0-1)# Create [](#__codelineno-0-2)python3 -m venv .venv [](#__codelineno-0-3)# Activate (each new terminal) [](#__codelineno-0-4)# macOS/Linux: source .venv/bin/activate [](#__codelineno-0-5)# Windows CMD: .venv\Scripts\activate.bat [](#__codelineno-0-6)# Windows PowerShell: .venv\Scripts\Activate.ps1`

Install ADK:

`[](#__codelineno-1-1)pip install google-adk`

Create a new project directory, initialize it, and install dependencies:

`[](#__codelineno-2-1)mkdir my-adk-agent [](#__codelineno-2-2)cd my-adk-agent [](#__codelineno-2-3)npm init -y [](#__codelineno-2-4)npm install @google/adk @google/adk-devtools [](#__codelineno-2-5)npm install -D typescript`

Create a `tsconfig.json` file with the following content. This configuration ensures your project correctly handles modern Node.js modules.

tsconfig.json

`[](#__codelineno-3-1){   [](#__codelineno-3-2)  "compilerOptions": {    [](#__codelineno-3-3)    "target": "es2020",    [](#__codelineno-3-4)    "module": "nodenext",    [](#__codelineno-3-5)    "moduleResolution": "nodenext",    [](#__codelineno-3-6)    "esModuleInterop": true,    [](#__codelineno-3-7)    "strict": true,    [](#__codelineno-3-8)    "skipLibCheck": true,    [](#__codelineno-3-9)    // set to false to allow CommonJS module syntax:    [](#__codelineno-3-10)    "verbatimModuleSyntax": false  [](#__codelineno-3-11)  } [](#__codelineno-3-12)}`

## Create a new Go module[¶](#create-a-new-go-module "Permanent link")

If you are starting a new project, you can create a new Go module:

`[](#__codelineno-4-1)mkdir my-adk-agent [](#__codelineno-4-2)cd my-adk-agent [](#__codelineno-4-3)go mod init example.com/my-agent`

## Install ADK[¶](#install-adk "Permanent link")

To add the ADK to your project, run the following command:

`[](#__codelineno-5-1)go get google.golang.org/adk/v2`

This will add the ADK as a dependency to your `go.mod` file.

To install ADK Java and set up the environment, see the [Java Quickstart](/get-started/java/).

To install ADK Kotlin and set up the environment, see the [Kotlin Quickstart](/get-started/kotlin/).

## 2\. Create Agent Project[¶](#create-agent-project "Permanent link")

### Project structure[¶](#project-structure "Permanent link")

PythonTypeScriptGoJavaKotlin

You will need to create the following project structure:

`[](#__codelineno-6-1)parent_folder/     [](#__codelineno-6-2)    multi_tool_agent/        [](#__codelineno-6-3)        __init__.py        [](#__codelineno-6-4)        agent.py        [](#__codelineno-6-5)        .env`

Create the folder `multi_tool_agent`:

`[](#__codelineno-7-1)mkdir multi_tool_agent/`

Note for Windows users

When using ADK on Windows for the next few steps, we recommend creating Python files using File Explorer or an IDE because the following commands (`mkdir`, `echo`) typically generate files with null bytes and/or incorrect encoding.

### `__init__.py`[¶](#__init__py "Permanent link")

Now create an `__init__.py` file in the folder:

`[](#__codelineno-8-1)echo "from . import agent" > multi_tool_agent/__init__.py`

Your `__init__.py` should now look like this:

multi\_tool\_agent/\_\_init\_\_.py

`[](#__codelineno-9-1)from . import agent`

### `agent.py`[¶](#agentpy "Permanent link")

Create an `agent.py` file in the same folder:

OS X & LinuxWindows

`[](#__codelineno-10-1)touch multi_tool_agent/agent.py`

`[](#__codelineno-11-1)type nul > multi_tool_agent/agent.py`

Copy and paste the following code into `agent.py`:

multi\_tool\_agent/agent.py

`[](#__codelineno-12-1)# Copyright 2026 Google LLC [](#__codelineno-12-2)# [](#__codelineno-12-3)# Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-12-4)# you may not use this file except in compliance with the License. [](#__codelineno-12-5)# You may obtain a copy of the License at [](#__codelineno-12-6)# [](#__codelineno-12-7)#     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-12-8)# [](#__codelineno-12-9)# Unless required by applicable law or agreed to in writing, software [](#__codelineno-12-10)# distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-12-11)# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-12-12)# See the License for the specific language governing permissions and [](#__codelineno-12-13)# limitations under the License. [](#__codelineno-12-14)[](#__codelineno-12-15)import datetime [](#__codelineno-12-16)from zoneinfo import ZoneInfo [](#__codelineno-12-17)from google.adk.agents import Agent [](#__codelineno-12-18)[](#__codelineno-12-19)def get_weather(city: str) -> dict:     [](#__codelineno-12-20)    """Retrieves the current weather report for a specified city. [](#__codelineno-12-21)    [](#__codelineno-12-22)    Args:        [](#__codelineno-12-23)        city (str): The name of the city for which to retrieve the weather report. [](#__codelineno-12-24)    [](#__codelineno-12-25)    Returns:        [](#__codelineno-12-26)        dict: status and result or error msg.    [](#__codelineno-12-27)    """    [](#__codelineno-12-28)    if city.lower() == "new york":        [](#__codelineno-12-29)        return {            [](#__codelineno-12-30)            "status": "success",            [](#__codelineno-12-31)            "report": (                [](#__codelineno-12-32)                "The weather in New York is sunny with a temperature of 25 degrees"                [](#__codelineno-12-33)                " Celsius (77 degrees Fahrenheit)."            [](#__codelineno-12-34)            ),        [](#__codelineno-12-35)        }    [](#__codelineno-12-36)    else:        [](#__codelineno-12-37)        return {            [](#__codelineno-12-38)            "status": "error",            [](#__codelineno-12-39)            "error_message": f"Weather information for '{city}' is not available.",        [](#__codelineno-12-40)        } [](#__codelineno-12-41) [](#__codelineno-12-42)[](#__codelineno-12-43)def get_current_time(city: str) -> dict:     [](#__codelineno-12-44)    """Returns the current time in a specified city. [](#__codelineno-12-45)    [](#__codelineno-12-46)    Args:        [](#__codelineno-12-47)        city (str): The name of the city for which to retrieve the current time. [](#__codelineno-12-48)    [](#__codelineno-12-49)    Returns:        [](#__codelineno-12-50)        dict: status and result or error msg.    [](#__codelineno-12-51)    """ [](#__codelineno-12-52)    [](#__codelineno-12-53)    if city.lower() == "new york":        [](#__codelineno-12-54)        tz_identifier = "America/New_York"    [](#__codelineno-12-55)    else:        [](#__codelineno-12-56)        return {            [](#__codelineno-12-57)            "status": "error",            [](#__codelineno-12-58)            "error_message": (                [](#__codelineno-12-59)                f"Sorry, I don't have timezone information for {city}."            [](#__codelineno-12-60)            ),        [](#__codelineno-12-61)        } [](#__codelineno-12-62)    [](#__codelineno-12-63)    tz = ZoneInfo(tz_identifier)    [](#__codelineno-12-64)    now = datetime.datetime.now(tz)    [](#__codelineno-12-65)    report = (        [](#__codelineno-12-66)        f'The current time in {city} is {now.strftime("%Y-%m-%d %H:%M:%S %Z%z")}'    [](#__codelineno-12-67)    )    [](#__codelineno-12-68)    return {"status": "success", "report": report} [](#__codelineno-12-69) [](#__codelineno-12-70)[](#__codelineno-12-71)root_agent = Agent(     [](#__codelineno-12-72)    name="weather_time_agent",    [](#__codelineno-12-73)    model="gemini-flash-latest",    [](#__codelineno-12-74)    description=(        [](#__codelineno-12-75)        "Agent to answer questions about the time and weather in a city."    [](#__codelineno-12-76)    ),    [](#__codelineno-12-77)    instruction=(        [](#__codelineno-12-78)        "You are a helpful agent who can answer user questions about the time and weather in a city."    [](#__codelineno-12-79)    ),    [](#__codelineno-12-80)    tools=[get_weather, get_current_time], [](#__codelineno-12-81))`

### `.env`[¶](#env "Permanent link")

Create a `.env` file in the same folder:

OS X & LinuxWindows

`[](#__codelineno-13-1)touch multi_tool_agent/.env`

`[](#__codelineno-14-1)type nul > multi_tool_agent\.env`

More instructions about this file are described in the next section on [Set up the model](#set-up-the-model).

You will need to create the following project structure in your `my-adk-agent` directory:

`[](#__codelineno-15-1)my-adk-agent/     [](#__codelineno-15-2)    agent.ts    [](#__codelineno-15-3)    .env    [](#__codelineno-15-4)    package.json    [](#__codelineno-15-5)    tsconfig.json`

### `agent.ts`[¶](#agentts "Permanent link")

Create an `agent.ts` file in your project folder:

OS X & LinuxWindows

`[](#__codelineno-16-1)touch agent.ts`

`[](#__codelineno-17-1)type nul > agent.ts`

Copy and paste the following code into `agent.ts`:

agent.ts

``[](#__codelineno-18-1)import 'dotenv/config'; [](#__codelineno-18-2)import { FunctionTool, LlmAgent } from '@google/adk'; [](#__codelineno-18-3)import { z } from 'zod'; [](#__codelineno-18-4)[](#__codelineno-18-5)const getWeather = new FunctionTool({   [](#__codelineno-18-6)  name: 'get_weather',  [](#__codelineno-18-7)  description: 'Retrieves the current weather report for a specified city.',  [](#__codelineno-18-8)  parameters: z.object({    [](#__codelineno-18-9)    city: z.string().describe('The name of the city for which to retrieve the weather report.'),  [](#__codelineno-18-10)  }),  [](#__codelineno-18-11)  execute: ({ city }) => {    [](#__codelineno-18-12)    if (city.toLowerCase() === 'new york') {      [](#__codelineno-18-13)      return {        [](#__codelineno-18-14)        status: 'success',        [](#__codelineno-18-15)        report:          [](#__codelineno-18-16)          'The weather in New York is sunny with a temperature of 25 degrees Celsius (77 degrees Fahrenheit).',      [](#__codelineno-18-17)      };    [](#__codelineno-18-18)    } else {      [](#__codelineno-18-19)      return {        [](#__codelineno-18-20)        status: 'error',        [](#__codelineno-18-21)        error_message: `Weather information for '${city}' is not available.`,      [](#__codelineno-18-22)      };    [](#__codelineno-18-23)    }  [](#__codelineno-18-24)  }, [](#__codelineno-18-25)}); [](#__codelineno-18-26)[](#__codelineno-18-27)const getCurrentTime = new FunctionTool({   [](#__codelineno-18-28)  name: 'get_current_time',  [](#__codelineno-18-29)  description: 'Returns the current time in a specified city.',  [](#__codelineno-18-30)  parameters: z.object({    [](#__codelineno-18-31)    city: z.string().describe("The name of the city for which to retrieve the current time."),  [](#__codelineno-18-32)  }),  [](#__codelineno-18-33)  execute: ({ city }) => {    [](#__codelineno-18-34)    let tz_identifier: string;    [](#__codelineno-18-35)    if (city.toLowerCase() === 'new york') {      [](#__codelineno-18-36)      tz_identifier = 'America/New_York';    [](#__codelineno-18-37)    } else {      [](#__codelineno-18-38)      return {        [](#__codelineno-18-39)        status: 'error',        [](#__codelineno-18-40)        error_message: `Sorry, I don't have timezone information for ${city}.`,      [](#__codelineno-18-41)      };    [](#__codelineno-18-42)    } [](#__codelineno-18-43)    [](#__codelineno-18-44)    const now = new Date();    [](#__codelineno-18-45)    const report = `The current time in ${city} is ${now.toLocaleString('en-US', { timeZone: tz_identifier })}`; [](#__codelineno-18-46)    [](#__codelineno-18-47)    return { status: 'success', report: report };  [](#__codelineno-18-48)  }, [](#__codelineno-18-49)}); [](#__codelineno-18-50)[](#__codelineno-18-51)export const rootAgent = new LlmAgent({   [](#__codelineno-18-52)  name: 'weather_time_agent',  [](#__codelineno-18-53)  model: 'gemini-flash-latest',  [](#__codelineno-18-54)  description: 'Agent to answer questions about the time and weather in a city.',  [](#__codelineno-18-55)  instruction: 'You are a helpful agent who can answer user questions about the time and weather in a city.',  [](#__codelineno-18-56)  tools: [getWeather, getCurrentTime], [](#__codelineno-18-57)});``

### `.env`[¶](#env_1 "Permanent link")

Create a `.env` file in the same folder:

OS X & LinuxWindows

`[](#__codelineno-19-1)touch .env`

`[](#__codelineno-20-1)type nul > .env`

More instructions about this file are described in the next section on [Set up the model](#set-up-the-model).

You will need to create the following project structure:

`[](#__codelineno-21-1)my-adk-agent/     [](#__codelineno-21-2)    agent.go    [](#__codelineno-21-3)    .env    [](#__codelineno-21-4)    go.mod`

### `agent.go`[¶](#agentgo "Permanent link")

Create an `agent.go` file in your project folder:

OS X & LinuxWindows

`[](#__codelineno-22-1)touch agent.go`

`[](#__codelineno-23-1)type nul > agent.go`

Copy and paste the following code into `agent.go`:

agent.go

``[](#__codelineno-24-1)package main [](#__codelineno-24-2)[](#__codelineno-24-3)import (     [](#__codelineno-24-4)    "context"    [](#__codelineno-24-5)    "log"    [](#__codelineno-24-6)    "os"    [](#__codelineno-24-7)    "strings"    [](#__codelineno-24-8)    "time" [](#__codelineno-24-9)    [](#__codelineno-24-10)    "google.golang.org/genai" [](#__codelineno-24-11)    [](#__codelineno-24-12)    "google.golang.org/adk/v2/agent"    [](#__codelineno-24-13)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-24-14)    "google.golang.org/adk/v2/cmd/launcher"    [](#__codelineno-24-15)    "google.golang.org/adk/v2/cmd/launcher/full"    [](#__codelineno-24-16)    "google.golang.org/adk/v2/model/gemini"    [](#__codelineno-24-17)    "google.golang.org/adk/v2/tool"    [](#__codelineno-24-18)    "google.golang.org/adk/v2/tool/functiontool" [](#__codelineno-24-19)) [](#__codelineno-24-20)[](#__codelineno-24-21)type CityArgs struct {     [](#__codelineno-24-22)    City string `json:"city"` [](#__codelineno-24-23)} [](#__codelineno-24-24)[](#__codelineno-24-25)func main() {     [](#__codelineno-24-26)    ctx := context.Background() [](#__codelineno-24-27)    [](#__codelineno-24-28)    // 1. Setup the model.    [](#__codelineno-24-29)    // Note: Authentication is handled via GOOGLE_API_KEY environment variable.    [](#__codelineno-24-30)    model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{        [](#__codelineno-24-31)        APIKey: os.Getenv("GOOGLE_API_KEY"),    [](#__codelineno-24-32)    })    [](#__codelineno-24-33)    if err != nil {        [](#__codelineno-24-34)        log.Fatalf("Failed to create model: %v", err)    [](#__codelineno-24-35)    } [](#__codelineno-24-36)    [](#__codelineno-24-37)    weatherTool, err := functiontool.New[CityArgs, map[string]any](        [](#__codelineno-24-38)        functiontool.Config{            [](#__codelineno-24-39)            Name:        "get_weather",            [](#__codelineno-24-40)            Description: "Retrieves the current weather report for a specified city.",        [](#__codelineno-24-41)        },        [](#__codelineno-24-42)        func(ctx agent.Context, args CityArgs) (map[string]any, error) {            [](#__codelineno-24-43)            if strings.EqualFold(args.City, "new york") {                [](#__codelineno-24-44)                return map[string]any{                    [](#__codelineno-24-45)                    "status": "success",                    [](#__codelineno-24-46)                    "report": "The weather in New York is sunny with a temperature of 25 degrees Celsius (77 degrees Fahrenheit).",                [](#__codelineno-24-47)                }, nil            [](#__codelineno-24-48)            }            [](#__codelineno-24-49)            return map[string]any{                [](#__codelineno-24-50)                "status":        "error",                [](#__codelineno-24-51)                "error_message": "Weather information for '" + args.City + "' is not available.",            [](#__codelineno-24-52)            }, nil        [](#__codelineno-24-53)        },    [](#__codelineno-24-54)    )    [](#__codelineno-24-55)    if err != nil {        [](#__codelineno-24-56)        log.Fatalf("Failed to create get_weather tool: %v", err)    [](#__codelineno-24-57)    } [](#__codelineno-24-58)    [](#__codelineno-24-59)    currentTimeTool, err := functiontool.New[CityArgs, map[string]any](        [](#__codelineno-24-60)        functiontool.Config{            [](#__codelineno-24-61)            Name:        "get_current_time",            [](#__codelineno-24-62)            Description: "Returns the current time in a specified city.",        [](#__codelineno-24-63)        },        [](#__codelineno-24-64)        func(ctx agent.Context, args CityArgs) (map[string]any, error) {            [](#__codelineno-24-65)            var tzIdentifier string            [](#__codelineno-24-66)            if strings.EqualFold(args.City, "new york") {                [](#__codelineno-24-67)                tzIdentifier = "America/New_York"            [](#__codelineno-24-68)            } else {                [](#__codelineno-24-69)                return map[string]any{                    [](#__codelineno-24-70)                    "status":        "error",                    [](#__codelineno-24-71)                    "error_message": "Sorry, I don't have timezone information for " + args.City + ".",                [](#__codelineno-24-72)                }, nil            [](#__codelineno-24-73)            } [](#__codelineno-24-74)            [](#__codelineno-24-75)            tz, err := time.LoadLocation(tzIdentifier)            [](#__codelineno-24-76)            if err != nil {                [](#__codelineno-24-77)                return nil, err            [](#__codelineno-24-78)            } [](#__codelineno-24-79)            [](#__codelineno-24-80)            now := time.Now().In(tz)            [](#__codelineno-24-81)            report := "The current time in " + args.City + " is " + now.Format("2006-01-02 15:04:05 MST-0700")            [](#__codelineno-24-82)            return map[string]any{                [](#__codelineno-24-83)                "status": "success",                [](#__codelineno-24-84)                "report": report,            [](#__codelineno-24-85)            }, nil        [](#__codelineno-24-86)        },    [](#__codelineno-24-87)    )    [](#__codelineno-24-88)    if err != nil {        [](#__codelineno-24-89)        log.Fatalf("Failed to create get_current_time tool: %v", err)    [](#__codelineno-24-90)    } [](#__codelineno-24-91)    [](#__codelineno-24-92)    // 2. Define the agent.    [](#__codelineno-24-93)    a, err := llmagent.New(llmagent.Config{        [](#__codelineno-24-94)        Name:        "weather_time_agent",        [](#__codelineno-24-95)        Model:       model,        [](#__codelineno-24-96)        Description: "Agent to answer questions about the time and weather in a city.",        [](#__codelineno-24-97)        Instruction: "You are a helpful agent who can answer user questions about the time and weather in a city.",        [](#__codelineno-24-98)        Tools: []tool.Tool{            [](#__codelineno-24-99)            weatherTool,            [](#__codelineno-24-100)            currentTimeTool,        [](#__codelineno-24-101)        },    [](#__codelineno-24-102)    })    [](#__codelineno-24-103)    if err != nil {        [](#__codelineno-24-104)        log.Fatalf("Failed to create agent: %v", err)    [](#__codelineno-24-105)    } [](#__codelineno-24-106)    [](#__codelineno-24-107)    // 3. Configure the launcher and run.    [](#__codelineno-24-108)    config := &launcher.Config{        [](#__codelineno-24-109)        AgentLoader: agent.NewSingleLoader(a),    [](#__codelineno-24-110)    } [](#__codelineno-24-111)    [](#__codelineno-24-112)    l := full.NewLauncher()    [](#__codelineno-24-113)    if err = l.Execute(ctx, config, os.Args[1:]); err != nil {        [](#__codelineno-24-114)        log.Fatalf("Run failed: %v\n\n%s", err, l.CommandLineSyntax())    [](#__codelineno-24-115)    } [](#__codelineno-24-116)}``

### `.env`[¶](#env_2 "Permanent link")

Create a `.env` file in the same folder:

OS X & LinuxWindows

`[](#__codelineno-25-1)touch .env`

`[](#__codelineno-26-1)type nul > .env`

Java projects generally feature the following project structure:

`[](#__codelineno-27-1)project_folder/ [](#__codelineno-27-2)├── pom.xml (or build.gradle) [](#__codelineno-27-3)├── src/ [](#__codelineno-27-4)├── └── main/ [](#__codelineno-27-5)│       └── java/ [](#__codelineno-27-6)│           └── agents/ [](#__codelineno-27-7)│               └── multitool/ [](#__codelineno-27-8)└── test/`

### Create `MultiToolAgent.java`[¶](#create-multitoolagentjava "Permanent link")

Create a `MultiToolAgent.java` source file in the `agents.multitool` package in the `src/main/java/agents/multitool/` directory.

Copy and paste the following code into `MultiToolAgent.java`:

agents/multitool/MultiToolAgent.java

`[](#__codelineno-28-1)package agents.multitool; [](#__codelineno-28-2)[](#__codelineno-28-3)import com.google.adk.agents.BaseAgent; [](#__codelineno-28-4)import com.google.adk.agents.LlmAgent; [](#__codelineno-28-5)import com.google.adk.events.Event; [](#__codelineno-28-6)import com.google.adk.runner.InMemoryRunner; [](#__codelineno-28-7)import com.google.adk.sessions.Session; [](#__codelineno-28-8)import com.google.adk.tools.Annotations.Schema; [](#__codelineno-28-9)import com.google.adk.tools.FunctionTool; [](#__codelineno-28-10)import com.google.genai.types.Content; [](#__codelineno-28-11)import com.google.genai.types.Part; [](#__codelineno-28-12)import io.reactivex.rxjava3.core.Flowable; [](#__codelineno-28-13)import java.nio.charset.StandardCharsets; [](#__codelineno-28-14)import java.text.Normalizer; [](#__codelineno-28-15)import java.time.ZoneId; [](#__codelineno-28-16)import java.time.ZonedDateTime; [](#__codelineno-28-17)import java.time.format.DateTimeFormatter; [](#__codelineno-28-18)import java.util.Map; [](#__codelineno-28-19)import java.util.Scanner; [](#__codelineno-28-20)[](#__codelineno-28-21)public class MultiToolAgent { [](#__codelineno-28-22)    [](#__codelineno-28-23)    private static String USER_ID = "student";    [](#__codelineno-28-24)    private static String NAME = "multi_tool_agent"; [](#__codelineno-28-25)    [](#__codelineno-28-26)    // The run your agent with Dev UI, the ROOT_AGENT should be a global public static final variable.    [](#__codelineno-28-27)    public static final BaseAgent ROOT_AGENT = initAgent(); [](#__codelineno-28-28)    [](#__codelineno-28-29)    public static BaseAgent initAgent() {        [](#__codelineno-28-30)        return LlmAgent.builder()            [](#__codelineno-28-31)            .name(NAME)            [](#__codelineno-28-32)            .model("gemini-flash-latest")            [](#__codelineno-28-33)            .description("Agent to answer questions about the time and weather in a city.")            [](#__codelineno-28-34)            .instruction(                [](#__codelineno-28-35)                "You are a helpful agent who can answer user questions about the time and weather"                    [](#__codelineno-28-36)                    + " in a city.")            [](#__codelineno-28-37)            .tools(                [](#__codelineno-28-38)                FunctionTool.create(MultiToolAgent.class, "getCurrentTime"),                [](#__codelineno-28-39)                FunctionTool.create(MultiToolAgent.class, "getWeather"))            [](#__codelineno-28-40)            .build();    [](#__codelineno-28-41)    } [](#__codelineno-28-42)    [](#__codelineno-28-43)    public static Map<String, String> getCurrentTime(        [](#__codelineno-28-44)        @Schema(name = "city",                [](#__codelineno-28-45)                description = "The name of the city for which to retrieve the current time")        [](#__codelineno-28-46)        String city) {        [](#__codelineno-28-47)        String normalizedCity =            [](#__codelineno-28-48)            Normalizer.normalize(city, Normalizer.Form.NFD)                [](#__codelineno-28-49)                .trim()                [](#__codelineno-28-50)                .toLowerCase()                [](#__codelineno-28-51)                .replaceAll("(\\p{IsM}+|\\p{IsP}+)", "")                [](#__codelineno-28-52)                .replaceAll("\\s+", "_"); [](#__codelineno-28-53)        [](#__codelineno-28-54)        return ZoneId.getAvailableZoneIds().stream()            [](#__codelineno-28-55)            .filter(zid -> zid.toLowerCase().endsWith("/" + normalizedCity))            [](#__codelineno-28-56)            .findFirst()            [](#__codelineno-28-57)            .map(                [](#__codelineno-28-58)                zid ->                    [](#__codelineno-28-59)                    Map.of(                        [](#__codelineno-28-60)                        "status",                        [](#__codelineno-28-61)                        "success",                        [](#__codelineno-28-62)                        "report",                        [](#__codelineno-28-63)                        "The current time in "                            [](#__codelineno-28-64)                            + city                            [](#__codelineno-28-65)                            + " is "                            [](#__codelineno-28-66)                            + ZonedDateTime.now(ZoneId.of(zid))                            [](#__codelineno-28-67)                            .format(DateTimeFormatter.ofPattern("HH:mm"))                            [](#__codelineno-28-68)                            + "."))            [](#__codelineno-28-69)            .orElse(                [](#__codelineno-28-70)                Map.of(                    [](#__codelineno-28-71)                    "status",                    [](#__codelineno-28-72)                    "error",                    [](#__codelineno-28-73)                    "report",                    [](#__codelineno-28-74)                    "Sorry, I don't have timezone information for " + city + "."));    [](#__codelineno-28-75)    } [](#__codelineno-28-76)    [](#__codelineno-28-77)    public static Map<String, String> getWeather(        [](#__codelineno-28-78)        @Schema(name = "city",                [](#__codelineno-28-79)                description = "The name of the city for which to retrieve the weather report")        [](#__codelineno-28-80)        String city) {        [](#__codelineno-28-81)        if (city.toLowerCase().equals("new york")) {            [](#__codelineno-28-82)            return Map.of(                [](#__codelineno-28-83)                "status",                [](#__codelineno-28-84)                "success",                [](#__codelineno-28-85)                "report",                [](#__codelineno-28-86)                "The weather in New York is sunny with a temperature of 25 degrees Celsius (77 degrees"                    [](#__codelineno-28-87)                    + " Fahrenheit)."); [](#__codelineno-28-88)        [](#__codelineno-28-89)        } else {            [](#__codelineno-28-90)            return Map.of(                [](#__codelineno-28-91)                "status", "error", "report", "Weather information for " + city + " is not available.");        [](#__codelineno-28-92)        }    [](#__codelineno-28-93)    } [](#__codelineno-28-94)    [](#__codelineno-28-95)    public static void main(String[] args) throws Exception {        [](#__codelineno-28-96)        InMemoryRunner runner = new InMemoryRunner(ROOT_AGENT); [](#__codelineno-28-97)        [](#__codelineno-28-98)        Session session =            [](#__codelineno-28-99)            runner                [](#__codelineno-28-100)                .sessionService()                [](#__codelineno-28-101)                .createSession(NAME, USER_ID)                [](#__codelineno-28-102)                .blockingGet(); [](#__codelineno-28-103)        [](#__codelineno-28-104)        try (Scanner scanner = new Scanner(System.in, StandardCharsets.UTF_8)) {            [](#__codelineno-28-105)            while (true) {                [](#__codelineno-28-106)                System.out.print("\nYou > ");                [](#__codelineno-28-107)                String userInput = scanner.nextLine(); [](#__codelineno-28-108)                [](#__codelineno-28-109)                if ("quit".equalsIgnoreCase(userInput)) {                    [](#__codelineno-28-110)                    break;                [](#__codelineno-28-111)                } [](#__codelineno-28-112)                [](#__codelineno-28-113)                Content userMsg = Content.fromParts(Part.fromText(userInput));                [](#__codelineno-28-114)                Flowable<Event> events = runner.runAsync(USER_ID, session.id(), userMsg); [](#__codelineno-28-115)                [](#__codelineno-28-116)                System.out.print("\nAgent > ");                [](#__codelineno-28-117)                events.blockingForEach(event -> System.out.println(event.stringifyContent()));            [](#__codelineno-28-118)            }        [](#__codelineno-28-119)        }    [](#__codelineno-28-120)    } [](#__codelineno-28-121)}`

Kotlin projects generally feature the following project structure:

`[](#__codelineno-29-1)project_folder/ [](#__codelineno-29-2)├── build.gradle.kts [](#__codelineno-29-3)├── src/ [](#__codelineno-29-4)├── └── main/ [](#__codelineno-29-5)│       └── kotlin/ [](#__codelineno-29-6)│           └── agents/ [](#__codelineno-29-7)│               └── multitool/`

### Create `MultiToolAgent.kt`[¶](#create-multitoolagentkt "Permanent link")

Create a `MultiToolAgent.kt` source file in the `src/main/kotlin/agents/multitool/` directory.

Copy and paste the following code into `MultiToolAgent.kt`:

src/main/kotlin/agents/multitool/MultiToolAgent.kt

``[](#__codelineno-30-1)package agents.multitool [](#__codelineno-30-2)[](#__codelineno-30-3)import com.google.adk.kt.agents.Instruction [](#__codelineno-30-4)import com.google.adk.kt.agents.LlmAgent [](#__codelineno-30-5)import com.google.adk.kt.annotations.Param [](#__codelineno-30-6)import com.google.adk.kt.annotations.Tool [](#__codelineno-30-7)import com.google.adk.kt.models.Gemini [](#__codelineno-30-8)import com.google.adk.kt.runners.InMemoryRunner [](#__codelineno-30-9)import com.google.adk.kt.sessions.InMemorySessionService [](#__codelineno-30-10)import com.google.adk.kt.sessions.SessionKey [](#__codelineno-30-11)import com.google.adk.kt.types.Content [](#__codelineno-30-12)import com.google.adk.kt.types.Part [](#__codelineno-30-13)import com.google.adk.kt.types.Role [](#__codelineno-30-14)import kotlinx.coroutines.flow.toList [](#__codelineno-30-15)import kotlinx.coroutines.runBlocking [](#__codelineno-30-16)import java.text.Normalizer [](#__codelineno-30-17)import java.time.ZoneId [](#__codelineno-30-18)import java.time.ZonedDateTime [](#__codelineno-30-19)import java.time.format.DateTimeFormatter [](#__codelineno-30-20)import java.util.Scanner [](#__codelineno-30-21)[](#__codelineno-30-22)class MultiToolService {     [](#__codelineno-30-23)    @Tool    [](#__codelineno-30-24)    fun getCurrentTime(        [](#__codelineno-30-25)        @Param("The name of the city for which to retrieve the current time") city: String,    [](#__codelineno-30-26)    ): Map<String, String> {        [](#__codelineno-30-27)        val normalizedCity =            [](#__codelineno-30-28)            Normalizer.normalize(city, Normalizer.Form.NFD)                [](#__codelineno-30-29)                .trim()                [](#__codelineno-30-30)                .lowercase()                [](#__codelineno-30-31)                .replace(Regex("(\\p{IsM}+|\\p{IsP}+)"), "")                [](#__codelineno-30-32)                .replace(Regex("\\s+"), "_") [](#__codelineno-30-33)        [](#__codelineno-30-34)        val zoneId =            [](#__codelineno-30-35)            ZoneId.getAvailableZoneIds()                [](#__codelineno-30-36)                .firstOrNull { it.lowercase().endsWith("/$normalizedCity") } [](#__codelineno-30-37)        [](#__codelineno-30-38)        return if (zoneId != null) {            [](#__codelineno-30-39)            val time =                [](#__codelineno-30-40)                ZonedDateTime.now(ZoneId.of(zoneId))                    [](#__codelineno-30-41)                    .format(DateTimeFormatter.ofPattern("HH:mm"))            [](#__codelineno-30-42)            mapOf(                [](#__codelineno-30-43)                "status" to "success",                [](#__codelineno-30-44)                "report" to "The current time in $city is $time.",            [](#__codelineno-30-45)            )        [](#__codelineno-30-46)        } else {            [](#__codelineno-30-47)            mapOf(                [](#__codelineno-30-48)                "status" to "error",                [](#__codelineno-30-49)                "report" to "Sorry, I don't have timezone information for $city.",            [](#__codelineno-30-50)            )        [](#__codelineno-30-51)        }    [](#__codelineno-30-52)    } [](#__codelineno-30-53)    [](#__codelineno-30-54)    @Tool    [](#__codelineno-30-55)    fun getWeather(        [](#__codelineno-30-56)        @Param("The name of the city for which to retrieve the weather report") city: String,    [](#__codelineno-30-57)    ): Map<String, String> {        [](#__codelineno-30-58)        return if (city.lowercase() == "new york") {            [](#__codelineno-30-59)            mapOf(                [](#__codelineno-30-60)                "status" to "success",                [](#__codelineno-30-61)                "report" to "The weather in New York is sunny with a temperature of " +                    [](#__codelineno-30-62)                    "25 degrees Celsius (77 degrees Fahrenheit).",            [](#__codelineno-30-63)            )        [](#__codelineno-30-64)        } else {            [](#__codelineno-30-65)            mapOf(                [](#__codelineno-30-66)                "status" to "error",                [](#__codelineno-30-67)                "report" to "Weather information for $city is not available.",            [](#__codelineno-30-68)            )        [](#__codelineno-30-69)        }    [](#__codelineno-30-70)    } [](#__codelineno-30-71)} [](#__codelineno-30-72)[](#__codelineno-30-73)fun main() =     [](#__codelineno-30-74)    runBlocking {        [](#__codelineno-30-75)        val model = Gemini(name = "gemini-flash-latest") [](#__codelineno-30-76)        [](#__codelineno-30-77)        val agent =            [](#__codelineno-30-78)            LlmAgent(                [](#__codelineno-30-79)                name = "multi_tool_agent",                [](#__codelineno-30-80)                model = model,                [](#__codelineno-30-81)                description = "Agent to answer questions about the time and weather in a city.",                [](#__codelineno-30-82)                instruction =                    [](#__codelineno-30-83)                    Instruction(                        [](#__codelineno-30-84)                        "You are a helpful agent who can answer user questions about the " +                            [](#__codelineno-30-85)                            "time and weather in a city.",                    [](#__codelineno-30-86)                    ),                [](#__codelineno-30-87)                tools = MultiToolService().generatedTools(),            [](#__codelineno-30-88)            ) [](#__codelineno-30-89)        [](#__codelineno-30-90)        val sessionService = InMemorySessionService()        [](#__codelineno-30-91)        val runner =            [](#__codelineno-30-92)            InMemoryRunner(                [](#__codelineno-30-93)                agent = agent,                [](#__codelineno-30-94)                appName = "multi_tool_app",                [](#__codelineno-30-95)                sessionService = sessionService,            [](#__codelineno-30-96)            ) [](#__codelineno-30-97)        [](#__codelineno-30-98)        val userId = "student"        [](#__codelineno-30-99)        val sessionId = "session_1" [](#__codelineno-30-100)        [](#__codelineno-30-101)        sessionService.createSession(SessionKey("multi_tool_app", userId, sessionId)) [](#__codelineno-30-102)        [](#__codelineno-30-103)        val scanner = Scanner(System.`in`)        [](#__codelineno-30-104)        while (true) {            [](#__codelineno-30-105)            print("\nYou > ")            [](#__codelineno-30-106)            val userInput = scanner.nextLine()            [](#__codelineno-30-107)            if (userInput.lowercase() == "quit") break [](#__codelineno-30-108)            [](#__codelineno-30-109)            val userContent = Content(role = Role.USER, parts = listOf(Part(text = userInput)))            [](#__codelineno-30-110)            val events =                [](#__codelineno-30-111)                runner.runAsync(                    [](#__codelineno-30-112)                    userId = userId,                    [](#__codelineno-30-113)                    sessionId = sessionId,                    [](#__codelineno-30-114)                    newMessage = userContent,                [](#__codelineno-30-115)                ).toList() [](#__codelineno-30-116)            [](#__codelineno-30-117)            print("\nAgent > ")            [](#__codelineno-30-118)            for (event in events) {                [](#__codelineno-30-119)                event.content?.parts?.forEach { part ->                    [](#__codelineno-30-120)                    part.text?.let { print(it) }                [](#__codelineno-30-121)                }            [](#__codelineno-30-122)            }            [](#__codelineno-30-123)            println()        [](#__codelineno-30-124)        }    [](#__codelineno-30-125)    }``

![intro_components.png](./images/img_7b6bfe8096.png)

## 3\. Set up the model[¶](#set-up-the-model "Permanent link")

Your agent's ability to understand user requests and generate responses is powered by a generative AI model or Large Language Model (LLM). This guide uses Gemini models as examples, but ADK is compatible with many AI models from Google and other providers. For more information on available models and how to configure them, see [AI Models for ADK agents](/agents/models/).

### Model connection and authentication[¶](#model-connection-and-authentication "Permanent link")

When using an AI model through a service, such as the Gemini API or Gemini Enterprise Agent Platform on Google Cloud, you must provide an API key or authenticate with the service. The most direct way to provide this information is to use environment variables or an `.env` file. The following examples show the most common way to configure an agent for use with the Gemini API or Gemini Enterprise Agent Platform.

Gemini APIGoogle Cloud Agent Platform

`[](#__codelineno-31-1)# .env configuration file [](#__codelineno-31-2)GOOGLE_API_KEY="PASTE_YOUR_GEMINI_API_KEY_HERE"`

`[](#__codelineno-32-1)# .env configuration file [](#__codelineno-32-2)GOOGLE_CLOUD_PROJECT=your-project-id [](#__codelineno-32-3)GOOGLE_CLOUD_LOCATION=location-code        # example: us-central1 [](#__codelineno-32-4)GOOGLE_GENAI_USE_ENTERPRISE=True`

For more details on connecting ADK agents to Google Cloud hosted models and services, including Gemini Enterprise Agent Platform, see the [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/) guide.

## 4\. Run Your Agent[¶](#run-your-agent "Permanent link")

PythonTypeScriptGoJavaKotlin

Using the terminal, navigate to the parent directory of your agent project (e.g. using `cd ..`):

`[](#__codelineno-33-1)parent_folder/      <-- navigate to this directory     [](#__codelineno-33-2)    multi_tool_agent/        [](#__codelineno-33-3)        __init__.py        [](#__codelineno-33-4)        agent.py        [](#__codelineno-33-5)        .env`

There are multiple ways to interact with your agent:

Dev UI (adk web)Terminal (adk run)API Server (adk api\_server)

Authentication Setup for Agent Platform Users

If you selected **"Gemini - Google Cloud Agent Platform"** in the previous step, you must authenticate with Google Cloud before launching the dev UI.

Run this command and follow the prompts:

`[](#__codelineno-34-1)gcloud auth application-default login`

**Note:** Skip this step if you're using "Gemini - Google AI Studio".

Run the following command to launch the **dev UI**.

`[](#__codelineno-35-1)adk web`

Caution: ADK Web for development only

ADK Web is ***not meant for use in production deployments***. You should use ADK Web for development and debugging purposes only.

Note for Windows users

When hitting the `_make_subprocess_transport NotImplementedError`, consider using `adk web --no-reload` instead.

**Step 1:** Open the URL provided (usually `http://localhost:8000` or `http://127.0.0.1:8000`) directly in your browser.

**Step 2.** In the top-left corner of the UI, you can select your agent in the dropdown. Select "multi\_tool\_agent".

Troubleshooting

If you do not see "multi\_tool\_agent" in the dropdown menu, make sure you are running `adk web` in the **parent folder** of your agent folder (i.e. the parent folder of multi\_tool\_agent).

**Step 3.** Now you can chat with your agent using the textbox:

![adk-web-dev-ui-chat.png](./images/img_2b1b63903e.png)

**Step 4.** By using the `Events` tab at the left, you can inspect individual function calls, responses and model responses by clicking on the actions:

![adk-web-dev-ui-function-call.png](./images/img_756d048eef.png)

On the `Events` tab, you can also click the `Trace` button to see the trace logs for each event that shows the latency of each function calls:

![adk-web-dev-ui-trace.png](./images/img_bf0e6cd0b0.png)

**Step 5.** You can also enable your microphone and talk to your agent:

Model support for voice/video streaming

In order to use voice/video streaming in ADK, you will need to use Gemini models that support the Live API. You can find the **model ID(s)** that supports the Gemini Live API in the documentation:

-   [Google AI Studio: Gemini Live API](https://ai.google.dev/gemini-api/docs/models#live-api)
-   [Agent Platform: Gemini Live API](https://cloud.google.com/vertex-ai/generative-ai/docs/live-api)

You can then replace the `model` string in `root_agent` in the `agent.py` file you created earlier ([jump to section](#agentpy)). Your code should look something like:

`[](#__codelineno-36-1)root_agent = Agent(     [](#__codelineno-36-2)    name="weather_time_agent",    [](#__codelineno-36-3)    model="replace-me-with-model-id", #e.g. gemini-live-2.5-flash-native-audio    [](#__codelineno-36-4)    ...`

![adk-web-dev-ui-audio.png](./images/img_1bd9ade367.png)

Tip

When using `adk run` you can inject prompts into the agent to start by piping text to the command like so:

`[](#__codelineno-37-1)echo "Please start by listing files" | adk run multi_tool_agent`

Run the following command, to chat with your Weather agent.

`[](#__codelineno-38-1)adk run multi_tool_agent`

![adk-run.png](./images/img_f9a50d7d12.png)

To exit, use Cmd/Ctrl+C.

`adk api_server` enables you to create a local FastAPI server in a single command, enabling you to test local cURL requests before you deploy your agent.

![adk-api-server.png](./images/img_441f27b57d.png)

To learn how to use `adk api_server` for testing, refer to the [documentation on using the API server](/runtime/api-server/).

Using the terminal, navigate to your agent project directory:

`[](#__codelineno-39-1)my-adk-agent/      <-- navigate to this directory     [](#__codelineno-39-2)    agent.ts    [](#__codelineno-39-3)    .env    [](#__codelineno-39-4)    package.json    [](#__codelineno-39-5)    tsconfig.json`

There are multiple ways to interact with your agent:

Dev UI (adk web)Terminal (adk run)API Server (adk api\_server)

Run the following command to launch the **dev UI**.

`[](#__codelineno-40-1)npx adk web`

**Step 1:** Open the URL provided (usually `http://localhost:8000` or `http://127.0.0.1:8000`) directly in your browser.

**Step 2.** In the top-left corner of the UI, select your agent from the dropdown. The agents are listed by their filenames, so you should select "agent".

Troubleshooting

If you do not see "agent" in the dropdown menu, make sure you are running `npx adk web` in the directory containing your `agent.ts` file.

**Step 3.** Now you can chat with your agent using the textbox:

![adk-web-dev-ui-chat.png](./images/img_2b1b63903e.png)

**Step 4.** By using the `Events` tab at the left, you can inspect individual function calls, responses and model responses by clicking on the actions:

![adk-web-dev-ui-function-call.png](./images/img_756d048eef.png)

On the `Events` tab, you can also click the `Trace` button to see the trace logs for each event that shows the latency of each function calls:

![adk-web-dev-ui-trace.png](./images/img_bf0e6cd0b0.png)

Run the following command to chat with your agent.

`[](#__codelineno-41-1)npx adk run agent.ts`

![adk-run.png](./images/img_f9a50d7d12.png)

To exit, use Cmd/Ctrl+C.

`npx adk api_server` enables you to create a local Express.js server in a single command, enabling you to test local cURL requests before you deploy your agent.

![adk-api-server.png](./images/img_441f27b57d.png)

To learn how to use `api_server` for testing, refer to the [documentation on testing](/runtime/api-server/).

Using the terminal, navigate to your agent project directory:

`[](#__codelineno-42-1)my-adk-agent/      <-- navigate to this directory     [](#__codelineno-42-2)    agent.go    [](#__codelineno-42-3)    .env    [](#__codelineno-42-4)    go.mod`

There are multiple ways to interact with your agent:

Dev UI (web)Terminal (console)

Run the following command to launch the **dev UI**. You must specify which sub-launchers to activate (e.g., `webui`, `api`).

`[](#__codelineno-43-1)go run agent.go web webui api`

**Step 1:** Open the URL provided (usually `http://localhost:8080`) directly in your browser.

**Step 2.** In the top-left corner of the UI, select your agent from the dropdown. It should be "weather\_time\_agent".

**Step 3.** Now you can chat with your agent using the textbox.

Run the following command to chat with your agent in the terminal.

`[](#__codelineno-44-1)go run agent.go console`

**Note:** If `console` is the first sublauncher in your code (as it is with `full.NewLauncher()`), you can also just run `go run agent.go`.

To exit, use Cmd/Ctrl+C.

Using the terminal, navigate to the parent directory of your agent project (e.g. using `cd ..`):

`[](#__codelineno-45-1)project_folder/                <-- navigate to this directory [](#__codelineno-45-2)├── pom.xml (or build.gradle) [](#__codelineno-45-3)├── src/ [](#__codelineno-45-4)├── └── main/ [](#__codelineno-45-5)│       └── java/ [](#__codelineno-45-6)│           └── agents/ [](#__codelineno-45-7)│               └── multitool/ [](#__codelineno-45-8)│                   └── MultiToolAgent.java [](#__codelineno-45-9)└── test/`

Dev UIMavenGradle

Run the following command from the terminal to launch the Dev UI.

**DO NOT change the main class name of the Dev UI server.**

terminal

`[](#__codelineno-46-1)mvn exec:java \     [](#__codelineno-46-2)    -Dexec.mainClass="com.google.adk.web.AdkWebServer" \    [](#__codelineno-46-3)    -Dexec.args="--adk.agents.source-dir=src/main/java" \    [](#__codelineno-46-4)    -Dexec.classpathScope="compile"`

**Step 1:** Open the URL provided (usually `http://localhost:8080` or `http://127.0.0.1:8080`) directly in your browser.

**Step 2.** In the top-left corner of the UI, you can select your agent in the dropdown. Select "multi\_tool\_agent".

Troubleshooting

If you do not see "multi\_tool\_agent" in the dropdown menu, make sure you are running the `mvn` command at the location where your Java source code is located (usually `src/main/java`).

**Step 3.** Now you can chat with your agent using the textbox:

![adk-web-dev-ui-chat.png](./images/img_2b1b63903e.png)

**Step 4.** You can also inspect individual function calls, responses and model responses by clicking on the actions:

![adk-web-dev-ui-function-call.png](./images/img_756d048eef.png)

Caution: ADK Web for development only

ADK Web is ***not meant for use in production deployments***. You should use ADK Web for development and debugging purposes only.

With Maven, run the `main()` method of your Java class with the following command:

terminal

`[](#__codelineno-47-1)mvn compile exec:java -Dexec.mainClass="agents.multitool.MultiToolAgent"`

With Gradle, the `build.gradle` or `build.gradle.kts` build file should have the following Java plugin in its `plugins` section:

`[](#__codelineno-48-1)plugins {     [](#__codelineno-48-2)    id('java')    [](#__codelineno-48-3)    // other plugins [](#__codelineno-48-4)}`

Then, elsewhere in the build file, at the top-level, create a new task to run the `main()` method of your agent:

`[](#__codelineno-49-1)tasks.register('runAgent', JavaExec) {     [](#__codelineno-49-2)    classpath = sourceSets.main.runtimeClasspath    [](#__codelineno-49-3)    mainClass = 'agents.multitool.MultiToolAgent' [](#__codelineno-49-4)}`

Finally, on the command-line, run the following command:

`[](#__codelineno-50-1)gradle runAgent`

Using the terminal, navigate to your agent project directory:

`[](#__codelineno-51-1)project_folder/                <-- navigate to this directory [](#__codelineno-51-2)├── build.gradle.kts [](#__codelineno-51-3)├── src/ [](#__codelineno-51-4)├── └── main/ [](#__codelineno-51-5)│       └── kotlin/ [](#__codelineno-51-6)│           └── agents/ [](#__codelineno-51-7)│               └── multitool/ [](#__codelineno-51-8)│                   └── MultiToolAgent.kt`

### Run your Agent[¶](#run-your-agent_1 "Permanent link")

You can run the `main()` method of your Kotlin class using Gradle:

`[](#__codelineno-52-1)./gradlew run`

Or if you are using IntelliJ IDEA, you can just click the green run arrow next to the `main()` function.

### 📝 Example prompts to try[¶](#example-prompts-to-try "Permanent link")

-   What is the weather in New York?
-   What is the time in New York?
-   What is the weather in Paris?
-   What is the time in Paris?

## 🎉 Congratulations![¶](#congratulations "Permanent link")

You've successfully created and interacted with your first agent using ADK!

* * *

## 🛣️ Next steps[¶](#next-steps "Permanent link")

-   **Go to the tutorial**: Learn how to add memory, session, state to your agent: [tutorial](/tutorials/).
-   **Delve into advanced configuration:** Explore the [setup](/get-started/installation/) section for deeper dives into project structure, configuration, and other interfaces.
-   **Understand Core Concepts:** Learn about [agents concepts](/agents/).

Back to top