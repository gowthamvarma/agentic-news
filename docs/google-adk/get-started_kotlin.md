---
title: "Kotlin - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/get-started/kotlin/
date: 2026-10-10T19:16:33.945Z
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
        -    Kotlin [Kotlin](./)
            
            Table of contents
            
            -   [Create an agent project](#create-an-agent-project)
                
                -   [Define the agent code](#define-the-agent-code)
                -   [Configure project and dependencies](#configure-project-and-dependencies)
                -   [Set your API key](#set-your-api-key)
                -   [Create an entry point](#create-an-entry-point)
                
            -   [Run your agent](#run-your-agent)
                
                -   [Run with command-line interface](#run-with-command-line-interface)
                -   [Run with web interface](#run-with-web-interface)
                
            -   [Next: Build your agent](#next-build-your-agent)
            
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

-   [Create an agent project](#create-an-agent-project)
    
    -   [Define the agent code](#define-the-agent-code)
    -   [Configure project and dependencies](#configure-project-and-dependencies)
    -   [Set your API key](#set-your-api-key)
    -   [Create an entry point](#create-an-entry-point)
    
-   [Run your agent](#run-your-agent)
    
    -   [Run with command-line interface](#run-with-command-line-interface)
    -   [Run with web interface](#run-with-web-interface)
    
-   [Next: Build your agent](#next-build-your-agent)

1.  [Home](../..)
2.  [Build Agents](../)
3.  [Get Started](../)

[](https://github.com/google/adk-docs/edit/main/docs/get-started/kotlin.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Kotlin Quickstart for ADK[¶](#kotlin-quickstart-for-adk "Permanent link")

This guide shows you how to get up and running with Agent Development Kit for Kotlin. Before you start, make sure you have the following installed:

-   Java 17 or later
-   Gradle 8.0 or later

Building for Android?

This quickstart covers Kotlin on the JVM. If you're building an Android app, complete this quickstart first to learn the agent API, then see [Build ADK agents for Android](https://developer.android.com/ai/adk) for Android-specific project setup and on-device models.

## Create an agent project[¶](#create-an-agent-project "Permanent link")

Create an agent project with the following files and directory structure:

`[](#__codelineno-0-1)my_agent/     [](#__codelineno-0-2)    src/main/kotlin/com/example/agent/                        [](#__codelineno-0-3)                        HelloTimeAgent.kt   # agent definition + tool                        [](#__codelineno-0-4)                        Main.kt             # entry point    [](#__codelineno-0-5)    build.gradle.kts                        # project configuration    [](#__codelineno-0-6)    .env                                    # API keys or project IDs`

Create this project structure using the command line

WindowsMacOS / Linux

`[](#__codelineno-1-1)mkdir my_agent\src\main\kotlin\com\example\agent [](#__codelineno-1-2)type nul > my_agent\src\main\kotlin\com\example\agent\HelloTimeAgent.kt [](#__codelineno-1-3)type nul > my_agent\src\main\kotlin\com\example\agent\Main.kt [](#__codelineno-1-4)type nul > my_agent\build.gradle.kts [](#__codelineno-1-5)type nul > my_agent\.env`

`[](#__codelineno-2-1)mkdir -p my_agent/src/main/kotlin/com/example/agent && \     [](#__codelineno-2-2)    touch my_agent/src/main/kotlin/com/example/agent/HelloTimeAgent.kt && \    [](#__codelineno-2-3)    touch my_agent/src/main/kotlin/com/example/agent/Main.kt && \    [](#__codelineno-2-4)    touch my_agent/build.gradle.kts my_agent/.env`

### Define the agent code[¶](#define-the-agent-code "Permanent link")

Create the code for a basic agent, including a simple implementation of an ADK [Function Tool](/tools-custom/function-tools/), called `getCurrentTime()`. Add the following code to the `HelloTimeAgent.kt` file in your project directory:

my\_agent/src/main/kotlin/com/example/agent/HelloTimeAgent.kt

`[](#__codelineno-3-1)package com.example.agent [](#__codelineno-3-2)[](#__codelineno-3-3)import com.google.adk.kt.agents.Instruction [](#__codelineno-3-4)import com.google.adk.kt.agents.LlmAgent [](#__codelineno-3-5)import com.google.adk.kt.annotations.Param [](#__codelineno-3-6)import com.google.adk.kt.annotations.Tool [](#__codelineno-3-7)import com.google.adk.kt.models.Gemini [](#__codelineno-3-8)[](#__codelineno-3-9)class TimeService {     [](#__codelineno-3-10)    /** Mock tool implementation */    [](#__codelineno-3-11)    @Tool    [](#__codelineno-3-12)    fun getCurrentTime(        [](#__codelineno-3-13)        @Param("Name of the city to get the time for") city: String    [](#__codelineno-3-14)    ): Map<String, String> {        [](#__codelineno-3-15)        return mapOf("city" to city, "time" to "The time is 10:30am.")    [](#__codelineno-3-16)    } [](#__codelineno-3-17)} [](#__codelineno-3-18)[](#__codelineno-3-19)object HelloTimeAgent {     [](#__codelineno-3-20)    @JvmField    [](#__codelineno-3-21)    val rootAgent = LlmAgent(        [](#__codelineno-3-22)        name = "hello_time_agent",        [](#__codelineno-3-23)        description = "Tells the current time in a specified city.",        [](#__codelineno-3-24)        model = Gemini(            [](#__codelineno-3-25)            name = "gemini-flash-latest",            [](#__codelineno-3-26)            apiKey = System.getenv("GOOGLE_API_KEY")                [](#__codelineno-3-27)                ?: error("GOOGLE_API_KEY environment variable not set."),        [](#__codelineno-3-28)        ),        [](#__codelineno-3-29)        instruction = Instruction(            [](#__codelineno-3-30)            "You are a helpful assistant that tells the current time in a city. "                [](#__codelineno-3-31)                + "Use the 'getCurrentTime' tool for this purpose."        [](#__codelineno-3-32)        ),        [](#__codelineno-3-33)        tools = TimeService().generatedTools(),    [](#__codelineno-3-34)    ) [](#__codelineno-3-35)}`

About `@Tool` and KSP

The `@Tool` annotation marks a function as a tool that the agent can call. At compile time, a KSP (Kotlin Symbol Processing) annotation processor generates the `.generatedTools()` extension function used above. This is a zero-reflection approach to function tool registration. The required KSP plugin and processor dependency are included in the `build.gradle.kts` configuration below.

### Configure project and dependencies[¶](#configure-project-and-dependencies "Permanent link")

An ADK Kotlin agent project requires the following dependencies in your `build.gradle.kts` project file:

my\_agent/build.gradle.kts (partial)

`[](#__codelineno-4-1)dependencies {     [](#__codelineno-4-2)    implementation("com.google.adk:google-adk-kotlin-core:1.3.1")    [](#__codelineno-4-3)    ksp("com.google.adk:google-adk-kotlin-processor:1.3.1") [](#__codelineno-4-4)}`

Complete `build.gradle.kts` configuration for project

The following code shows a complete `build.gradle.kts` configuration for this project:

my\_agent/build.gradle.kts

``[](#__codelineno-5-1)plugins {     [](#__codelineno-5-2)    kotlin("jvm") version "2.1.20"    [](#__codelineno-5-3)    id("com.google.devtools.ksp") version "2.1.20-2.0.1"    [](#__codelineno-5-4)    application [](#__codelineno-5-5)} [](#__codelineno-5-6)[](#__codelineno-5-7)repositories {     [](#__codelineno-5-8)    mavenCentral() [](#__codelineno-5-9)} [](#__codelineno-5-10)[](#__codelineno-5-11)dependencies {     [](#__codelineno-5-12)    implementation("com.google.adk:google-adk-kotlin-core:1.3.1")    [](#__codelineno-5-13)    implementation("com.google.adk:google-adk-kotlin-webserver:1.3.1")    [](#__codelineno-5-14)    ksp("com.google.adk:google-adk-kotlin-processor:1.3.1") [](#__codelineno-5-15)} [](#__codelineno-5-16)[](#__codelineno-5-17)kotlin {     [](#__codelineno-5-18)    jvmToolchain(17) [](#__codelineno-5-19)} [](#__codelineno-5-20)[](#__codelineno-5-21)application {     [](#__codelineno-5-22)    mainClass.set(        [](#__codelineno-5-23)        project.findProperty("mainClass") as? String            [](#__codelineno-5-24)            ?: "com.example.agent.MainKt"    [](#__codelineno-5-25)    ) [](#__codelineno-5-26)} [](#__codelineno-5-27)[](#__codelineno-5-28)tasks.named<JavaExec>("run") {     [](#__codelineno-5-29)    standardInput = System.`in` [](#__codelineno-5-30)}``

### Set your API key[¶](#set-your-api-key "Permanent link")

This project uses the Gemini API, which requires an API key. If you don't already have Gemini API key, create a key in Google AI Studio on the [API Keys](https://aistudio.google.com/app/apikey) page.

In a terminal window, write your API key into your `.env` file of your project to set environment variables:

MacOS / LinuxWindows PowerShellWindows Command Prompt

Update: my\_agent/.env

`[](#__codelineno-6-1)echo 'export GOOGLE_API_KEY="YOUR_API_KEY"' > .env`

Update: my\_agent/env.bat

`[](#__codelineno-7-1)echo 'set GOOGLE_API_KEY="YOUR_API_KEY"' > env.bat`

Update: my\_agent/env.bat

`[](#__codelineno-8-1)echo set GOOGLE_API_KEY="YOUR_API_KEY" > env.bat`

Using other AI models with ADK

ADK supports the use of many generative AI models. For more information on configuring other models in ADK agents, see [Models & Authentication](/agents/models).

### Create an entry point[¶](#create-an-entry-point "Permanent link")

Create a `Main.kt` file to run and interact with `HelloTimeAgent` from the command line. `ReplRunner` provides a built-in interactive REPL that handles user input, agent responses, and tool confirmation prompts.

my\_agent/src/main/kotlin/com/example/agent/Main.kt

`[](#__codelineno-9-1)package com.example.agent [](#__codelineno-9-2)[](#__codelineno-9-3)import com.google.adk.kt.runners.ReplRunner [](#__codelineno-9-4)[](#__codelineno-9-5)fun main() {     [](#__codelineno-9-6)    ReplRunner(HelloTimeAgent.rootAgent).start() [](#__codelineno-9-7)}`

## Run your agent[¶](#run-your-agent "Permanent link")

You can run your ADK agent using the interactive command-line REPL or the ADK web user interface provided by `AdkDevServer`. Both options allow you to test and interact with your agent.

### Run with command-line interface[¶](#run-with-command-line-interface "Permanent link")

Run your agent with the command-line interface using the Gradle `run` task:

`[](#__codelineno-10-1)# Remember to load keys and settings: source .env OR env.bat [](#__codelineno-10-2)gradle run`

The agent starts an interactive session. Type a message and press Enter:

`[](#__codelineno-11-1)Agent hello_time_agent is ready. Type 'exit' to quit. [](#__codelineno-11-2)[](#__codelineno-11-3)You > What time is it in New York? [](#__codelineno-11-4)[](#__codelineno-11-5)hello_time_agent > The current time in New York is 10:30am. [](#__codelineno-11-6)[](#__codelineno-11-7)You > exit [](#__codelineno-11-8)Exiting agent.`

![adk-run.png](./images/img_f9a50d7d12.png)

### Run with web interface[¶](#run-with-web-interface "Permanent link")

To run your agent with the ADK web interface, add the webserver dependency to your `build.gradle.kts`:

my\_agent/build.gradle.kts (add to dependencies)

`[](#__codelineno-12-1)dependencies {     [](#__codelineno-12-2)    implementation("com.google.adk:google-adk-kotlin-core:1.3.1")    [](#__codelineno-12-3)    implementation("com.google.adk:google-adk-kotlin-webserver:1.3.1")    [](#__codelineno-12-4)    ksp("com.google.adk:google-adk-kotlin-processor:1.3.1") [](#__codelineno-12-5)}`

Then create a `WebMain.kt` file alongside your `Main.kt`:

my\_agent/src/main/kotlin/com/example/agent/WebMain.kt

`[](#__codelineno-13-1)package com.example.agent [](#__codelineno-13-2)[](#__codelineno-13-3)import com.google.adk.kt.webserver.AdkServerConfig [](#__codelineno-13-4)import com.google.adk.kt.webserver.dev.AdkDevServer [](#__codelineno-13-5)[](#__codelineno-13-6)fun main() {     [](#__codelineno-13-7)    // inMemory() supplies the agent loader and the session and artifact    [](#__codelineno-13-8)    // services, keeping their state in the process.    [](#__codelineno-13-9)    val server = AdkDevServer(AdkServerConfig.inMemory(HelloTimeAgent.rootAgent)) [](#__codelineno-13-10)    [](#__codelineno-13-11)    println("Starting ADK dev server on http://localhost:8080")    [](#__codelineno-13-12)    server.start(wait = true) [](#__codelineno-13-13)}`

Run the web server using the `-PmainClass` property to select the web entry point:

`[](#__codelineno-14-1)# Remember to load keys and settings: source .env OR env.bat [](#__codelineno-14-2)gradle run -PmainClass=com.example.agent.WebMainKt`

This command starts a web server with a chat interface for your agent. You can access the web interface at `http://localhost:8080`. Select your agent at the upper left corner and type a request.

![adk-web-dev-ui-chat.png](./images/img_2b1b63903e.png)

Caution: ADK Web for development only

ADK Web is ***not meant for use in production deployments***. You should use ADK Web for development and debugging purposes only. For more information, see ADK [Web Interface](/runtime/web-interface/).

## Next: Build your agent[¶](#next-build-your-agent "Permanent link")

Now that you have ADK installed and your first agent running, try building your own agent with our build guides:

-   [Build your agent](/tutorials/)
-   [Build ADK agents for Android](https://developer.android.com/ai/adk)

Back to top