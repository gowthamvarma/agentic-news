---
title: "Java - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/get-started/java/
date: 2026-10-10T19:16:33.793Z
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
        -    Java [Java](./)
            
            Table of contents
            
            -   [Create an agent project](#create-an-agent-project)
                
                -   [Define the agent code](#define-the-agent-code)
                -   [Configure project and dependencies](#configure-project-and-dependencies)
                -   [Set your API key](#set-your-api-key)
                -   [Create an agent command-line interface](#create-an-agent-command-line-interface)
                
            -   [Run your agent](#run-your-agent)
                
                -   [Run with command-line interface](#run-with-command-line-interface)
                -   [Run with web interface](#run-with-web-interface)
                
            -   [Next: Build your agent](#next-build-your-agent)
            
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

-   [Create an agent project](#create-an-agent-project)
    
    -   [Define the agent code](#define-the-agent-code)
    -   [Configure project and dependencies](#configure-project-and-dependencies)
    -   [Set your API key](#set-your-api-key)
    -   [Create an agent command-line interface](#create-an-agent-command-line-interface)
    
-   [Run your agent](#run-your-agent)
    
    -   [Run with command-line interface](#run-with-command-line-interface)
    -   [Run with web interface](#run-with-web-interface)
    
-   [Next: Build your agent](#next-build-your-agent)

1.  [Home](../..)
2.  [Build Agents](../)
3.  [Get Started](../)

[](https://github.com/google/adk-docs/edit/main/docs/get-started/java.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Java Quickstart for ADK[¶](#java-quickstart-for-adk "Permanent link")

This guide shows you how to get up and running with Agent Development Kit for Java. Before you start, make sure you have the following installed:

-   Java 17 or later
-   Maven 3.9 or later

## Create an agent project[¶](#create-an-agent-project "Permanent link")

Create an agent project with the following files and directory structure:

`[](#__codelineno-0-1)my_agent/     [](#__codelineno-0-2)    src/main/java/com/example/agent/                        [](#__codelineno-0-3)                        HelloTimeAgent.java # main agent code                        [](#__codelineno-0-4)                        AgentCliRunner.java # command-line interface    [](#__codelineno-0-5)    pom.xml                                 # project configuration    [](#__codelineno-0-6)    .env                                    # API keys or project IDs`

Create this project structure using the command line

WindowsMacOS / Linux

`[](#__codelineno-1-1)mkdir my_agent\src\main\java\com\example\agent [](#__codelineno-1-2)type nul > my_agent\src\main\java\com\example\agent\HelloTimeAgent.java [](#__codelineno-1-3)type nul > my_agent\src\main\java\com\example\agent\AgentCliRunner.java [](#__codelineno-1-4)type nul > my_agent\pom.xml [](#__codelineno-1-5)type nul > my_agent\.env`

`[](#__codelineno-2-1)mkdir -p my_agent/src/main/java/com/example/agent && \     [](#__codelineno-2-2)    touch my_agent/src/main/java/com/example/agent/HelloTimeAgent.java && \    [](#__codelineno-2-3)    touch my_agent/src/main/java/com/example/agent/AgentCliRunner.java && \    [](#__codelineno-2-4)    touch my_agent/pom.xml my_agent/.env`

### Define the agent code[¶](#define-the-agent-code "Permanent link")

Create the code for a basic agent, including a simple implementation of an ADK [Function Tool](/tools-custom/function-tools/), called `getCurrentTime()`. Add the following code to the `HelloTimeAgent.java` file in your project directory:

my\_agent/src/main/java/com/example/agent/HelloTimeAgent.java

`[](#__codelineno-3-1)package com.example.agent; [](#__codelineno-3-2)[](#__codelineno-3-3)import com.google.adk.agents.BaseAgent; [](#__codelineno-3-4)import com.google.adk.agents.LlmAgent; [](#__codelineno-3-5)import com.google.adk.tools.Annotations.Schema; [](#__codelineno-3-6)import com.google.adk.tools.FunctionTool; [](#__codelineno-3-7)[](#__codelineno-3-8)import java.util.Map; [](#__codelineno-3-9)[](#__codelineno-3-10)public class HelloTimeAgent { [](#__codelineno-3-11)    [](#__codelineno-3-12)    public static BaseAgent ROOT_AGENT = initAgent(); [](#__codelineno-3-13)    [](#__codelineno-3-14)    private static BaseAgent initAgent() {        [](#__codelineno-3-15)        return LlmAgent.builder()            [](#__codelineno-3-16)            .name("hello-time-agent")            [](#__codelineno-3-17)            .description("Tells the current time in a specified city")            [](#__codelineno-3-18)            .instruction("""                [](#__codelineno-3-19)                You are a helpful assistant that tells the current time in a city.                [](#__codelineno-3-20)                Use the 'getCurrentTime' tool for this purpose.                [](#__codelineno-3-21)                """)            [](#__codelineno-3-22)            .model("gemini-flash-latest")            [](#__codelineno-3-23)            .tools(FunctionTool.create(HelloTimeAgent.class, "getCurrentTime"))            [](#__codelineno-3-24)            .build();    [](#__codelineno-3-25)    } [](#__codelineno-3-26)    [](#__codelineno-3-27)    /** Mock tool implementation */    [](#__codelineno-3-28)    @Schema(description = "Get the current time for a given city")    [](#__codelineno-3-29)    public static Map<String, String> getCurrentTime(        [](#__codelineno-3-30)        @Schema(name = "city", description = "Name of the city to get the time for") String city) {        [](#__codelineno-3-31)        return Map.of(            [](#__codelineno-3-32)            "city", city,            [](#__codelineno-3-33)            "forecast", "The time is 10:30am."        [](#__codelineno-3-34)        );    [](#__codelineno-3-35)    } [](#__codelineno-3-36)}`

Caution: Gemini 3 compatibility

ADK Java v0.3.0 and lower is not compatible with [Gemini 3 Pro Preview](https://ai.google.dev/gemini-api/docs/models#gemini-3-pro) due to thought signature changes for function calling. Use Gemini 2.5 or lower models instead.

### Configure project and dependencies[¶](#configure-project-and-dependencies "Permanent link")

An ADK agent project requires this dependency in your `pom.xml` project file:

my\_agent/pom.xml (partial)

`[](#__codelineno-4-1)<dependencies>     [](#__codelineno-4-2)    <dependency>        [](#__codelineno-4-3)        <groupId>com.google.adk</groupId>        [](#__codelineno-4-4)        <artifactId>google-adk</artifactId>        [](#__codelineno-4-5)        <version>1.11.0</version>    [](#__codelineno-4-6)    </dependency> [](#__codelineno-4-7)</dependencies>`

Update the `pom.xml` project file to include this dependency and additional settings with the following configuration code:

Complete `pom.xml` configuration for project

The following code shows a complete `pom.xml` configuration for this project:

my\_agent/pom.xml

`[](#__codelineno-5-1)<?xml version="1.0" encoding="UTF-8"?> [](#__codelineno-5-2)<project xmlns="http://maven.apache.org/POM/4.0.0"         [](#__codelineno-5-3)        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"        [](#__codelineno-5-4)        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">    [](#__codelineno-5-5)    <modelVersion>4.0.0</modelVersion> [](#__codelineno-5-6)    [](#__codelineno-5-7)    <groupId>com.example.agent</groupId>    [](#__codelineno-5-8)    <artifactId>adk-agents</artifactId>    [](#__codelineno-5-9)    <version>1.0-SNAPSHOT</version> [](#__codelineno-5-10)    [](#__codelineno-5-11)    <!-- Specify the version of Java you'll be using -->    [](#__codelineno-5-12)    <properties>        [](#__codelineno-5-13)        <maven.compiler.source>17</maven.compiler.source>        [](#__codelineno-5-14)        <maven.compiler.target>17</maven.compiler.target>        [](#__codelineno-5-15)        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>    [](#__codelineno-5-16)    </properties> [](#__codelineno-5-17)    [](#__codelineno-5-18)    <dependencies>        [](#__codelineno-5-19)        <!-- The ADK core dependency -->        [](#__codelineno-5-20)        <dependency>            [](#__codelineno-5-21)            <groupId>com.google.adk</groupId>            [](#__codelineno-5-22)            <artifactId>google-adk</artifactId>            [](#__codelineno-5-23)            <version>1.11.0</version>        [](#__codelineno-5-24)        </dependency>        [](#__codelineno-5-25)        <!-- The ADK dev web UI to debug your agent -->        [](#__codelineno-5-26)        <dependency>            [](#__codelineno-5-27)            <groupId>com.google.adk</groupId>            [](#__codelineno-5-28)            <artifactId>google-adk-dev</artifactId>            [](#__codelineno-5-29)            <version>1.11.0</version>        [](#__codelineno-5-30)        </dependency>    [](#__codelineno-5-31)    </dependencies> [](#__codelineno-5-32)[](#__codelineno-5-33)</project>`

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

### Create an agent command-line interface[¶](#create-an-agent-command-line-interface "Permanent link")

Create a `AgentCliRunner.java` class to allow you to run and interact with `HelloTimeAgent` from the command line. This code shows how to create a `RunConfig` object to run the agent and a `Session` object to interact with the running agent.

my\_agent/src/main/java/com/example/agent/AgentCliRunner.java

`[](#__codelineno-9-1)package com.example.agent; [](#__codelineno-9-2)[](#__codelineno-9-3)import com.google.adk.agents.RunConfig; [](#__codelineno-9-4)import com.google.adk.events.Event; [](#__codelineno-9-5)import com.google.adk.runner.InMemoryRunner; [](#__codelineno-9-6)import com.google.adk.sessions.Session; [](#__codelineno-9-7)import com.google.genai.types.Content; [](#__codelineno-9-8)import com.google.genai.types.Part; [](#__codelineno-9-9)import io.reactivex.rxjava3.core.Flowable; [](#__codelineno-9-10)import java.util.Scanner; [](#__codelineno-9-11)[](#__codelineno-9-12)import static java.nio.charset.StandardCharsets.UTF_8; [](#__codelineno-9-13)[](#__codelineno-9-14)public class AgentCliRunner { [](#__codelineno-9-15)    [](#__codelineno-9-16)    public static void main(String[] args) {        [](#__codelineno-9-17)        RunConfig runConfig = RunConfig.builder().build();        [](#__codelineno-9-18)        InMemoryRunner runner = new InMemoryRunner(HelloTimeAgent.ROOT_AGENT); [](#__codelineno-9-19)        [](#__codelineno-9-20)        Session session = runner                [](#__codelineno-9-21)                .sessionService()                [](#__codelineno-9-22)                .createSession(runner.appName(), "user1234")                [](#__codelineno-9-23)                .blockingGet(); [](#__codelineno-9-24)        [](#__codelineno-9-25)        try (Scanner scanner = new Scanner(System.in, UTF_8)) {            [](#__codelineno-9-26)            while (true) {                [](#__codelineno-9-27)                System.out.print("\nYou > ");                [](#__codelineno-9-28)                String userInput = scanner.nextLine();                [](#__codelineno-9-29)                if ("quit".equalsIgnoreCase(userInput)) {                    [](#__codelineno-9-30)                    break;                [](#__codelineno-9-31)                } [](#__codelineno-9-32)                [](#__codelineno-9-33)                Content userMsg = Content.fromParts(Part.fromText(userInput));                [](#__codelineno-9-34)                Flowable<Event> events = runner.runAsync(session.userId(), session.id(), userMsg, runConfig); [](#__codelineno-9-35)                [](#__codelineno-9-36)                System.out.print("\nAgent > ");                [](#__codelineno-9-37)                events.blockingForEach(event -> {                    [](#__codelineno-9-38)                    if (event.finalResponse()) {                        [](#__codelineno-9-39)                        System.out.println(event.stringifyContent());                    [](#__codelineno-9-40)                    }                [](#__codelineno-9-41)                });            [](#__codelineno-9-42)            }        [](#__codelineno-9-43)        }    [](#__codelineno-9-44)    } [](#__codelineno-9-45)}`

## Run your agent[¶](#run-your-agent "Permanent link")

You can run your ADK agent using the interactive command-line interface `AgentCliRunner` class you defined or the ADK web user interface provided by the ADK using the `AdkWebServer` class. Both these options allow you to test and interact with your agent.

### Run with command-line interface[¶](#run-with-command-line-interface "Permanent link")

Run your agent with the command-line interface `AgentCliRunner` class using the following Maven command:

`[](#__codelineno-10-1)# Remember to load keys and settings: source .env OR env.bat [](#__codelineno-10-2)mvn compile exec:java -Dexec.mainClass="com.example.agent.AgentCliRunner"`

![adk-run.png](./images/img_f9a50d7d12.png)

### Run with web interface[¶](#run-with-web-interface "Permanent link")

Run your agent with the ADK web interface using the following Maven command:

`[](#__codelineno-11-1)# Remember to load keys and settings: source .env OR env.bat [](#__codelineno-11-2)mvn compile exec:java \     [](#__codelineno-11-3)    -Dexec.mainClass="com.google.adk.web.AdkWebServer" \    [](#__codelineno-11-4)    -Dexec.args="--adk.agents.source-dir=target --server.port=8000"`

This command starts a web server with a chat interface for your agent. You can access the web interface at `http://localhost:8000`. Select your agent at the upper left corner and type a request.

![adk-web-dev-ui-chat.png](./images/img_2b1b63903e.png)

Caution: ADK Web for development only

ADK Web is ***not meant for use in production deployments***. You should use ADK Web for development and debugging purposes only.

## Next: Build your agent[¶](#next-build-your-agent "Permanent link")

Now that you have ADK installed and your first agent running, try building your own agent with our build guides:

-   [Build your agent](/tutorials/)

Back to top