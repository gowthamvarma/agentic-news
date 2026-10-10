---
title: "LiteRT-LM - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/litert-lm/
date: 2026-10-10T19:16:25.650Z
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
        -   [Agent Config](../../config/)
        
    -   [Agents](../../)
        
        Agents
        
        -   [Simple agents](../../llm-agents/)
        -   [Managed agents](../../managed-agents/)
        
    -   [Graph Workflows](../../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../../graphs/routes/)
        -   [Data handling](../../../graphs/data-handling/)
        -   [Human input](../../../graphs/human-input/)
        -   [Dynamic workflows](../../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../../workflows/collaboration/)
        -   [Template workflows](../../workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../../workflow-agents/sequential-agents/)
            -   [Loop workflow](../../workflow-agents/loop-agents/)
            -   [Parallel workflow](../../workflow-agents/parallel-agents/)
            -   [Custom template workflows](../../custom-agents/)
            
        -   [Agent routing](../../routing/)
        -   [Workflow patterns](../../../workflows/patterns/)
        
    -   [Models for Agents](../)
        
        Models for Agents
        
        -   [Gemini](../google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../google-gemini/deferred-schedule/)
            
        -   [Gemma](../google-gemma/)
        -   [Claude](../anthropic/)
        -   [Agent Platform hosted](../agent-platform/)
        -   [Apigee AI Gateway](../apigee/)
        -   [Model routing](../routing/)
        -   [OpenAI](../openai/)
        -   [Ollama](../ollama/)
        -   [vLLM](../vllm/)
        -   [LiteLLM](../litellm/)
        -    LiteRT-LM [LiteRT-LM](./)
            
            Table of contents
            
            -   [Python](#python)
                
                -   [Install resources](#install-resources)
                    
                    -   [Install lit CLI tool](#install-lit-cli-tool)
                    -   [Download a model](#download-a-model)
                    
                -   [Configure your agent](#configure-your-agent)
                -   [Running the LiteRT-LM server](#running-the-litert-lm-server)
                    
                    -   [Run the server](#run-the-server)
                    -   [Debugging](#debugging)
                    
                
            -   [Kotlin](#kotlin)
                
                -   [Install resources](#install-resources_1)
                    
                    -   [Install LiteRT-LM CLI](#install-litert-lm-cli)
                    -   [Download a model](#download-a-model_1)
                    
                -   [Add dependencies](#add-dependencies)
                -   [Configure agent model](#configure-agent-model)
                -   [Run your agent](#run-your-agent)
                
            
        
    
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
    -   [Custom Tools](../../../tools-custom/)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../../../tools-custom/function-tools/)
            -   [Tool performance](../../../tools-custom/performance/)
            -   [Action confirmations](../../../tools-custom/confirmation/)
            
        -   [MCP tools](../../../tools-custom/mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../../../tools-custom/mcp-tools/advanced/)
            -   [Deployment](../../../tools-custom/mcp-tools/deployment/)
            -   [Agent as MCP server](../../../tools-custom/mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../../../tools-custom/mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../../../tools-custom/openapi-tools/)
        -   [Authentication](../../../tools-custom/authentication/)
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

-   [Python](#python)
    
    -   [Install resources](#install-resources)
        
        -   [Install lit CLI tool](#install-lit-cli-tool)
        -   [Download a model](#download-a-model)
        
    -   [Configure your agent](#configure-your-agent)
    -   [Running the LiteRT-LM server](#running-the-litert-lm-server)
        
        -   [Run the server](#run-the-server)
        -   [Debugging](#debugging)
        
    
-   [Kotlin](#kotlin)
    
    -   [Install resources](#install-resources_1)
        
        -   [Install LiteRT-LM CLI](#install-litert-lm-cli)
        -   [Download a model](#download-a-model_1)
        
    -   [Add dependencies](#add-dependencies)
    -   [Configure agent model](#configure-agent-model)
    -   [Run your agent](#run-your-agent)
    

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/litert-lm.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# LiteRT-LM model host for ADK agents[¶](#litert-lm-model-host-for-adk-agents "Permanent link")

Supported in ADKPython v0.1.0Kotlin v0.4.0

You can use the [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) library to efficiently run language models locally on various compute devices without requiring specialized processors such as graphics processing units (GPU) or tensor processing units (TPU). LiteRT-LM supports many models, including Google Gemma models as well as third-party models. This guide provides instructions for setting up LiteRT-LM with ADK for the following languages:

-   [Python](#python)
-   [Kotlin](#kotlin)

## Python[¶](#python "Permanent link")

These instructions describe how to use LiteRT-LM server with ADK in Python with a Gemma open weights model, including using LiteRT-LM 's local hosting model server `lit`.

### Install resources[¶](#install-resources "Permanent link")

You need to download a model to use with LiteRT-LM, and the `lit` CLI tool to help you find a model download it.

#### Install `lit` CLI tool[¶](#install-lit-cli-tool "Permanent link")

Download and install the `lit` CLI tool by following these [instructions](https://github.com/google-ai-edge/LiteRT-LM?tab=readme-ov-file#desktop-cli-lit) in the LiteRT-LM GitHub repository.

#### Download a model[¶](#download-a-model "Permanent link")

Before you start the server, you need to download a model. You'll need a *Hugging Face* user access token to download a LiteRT-LM model using `lit`. You can get a token for your *Hugging Face* account [here](https://huggingface.co/settings/tokens).

To see a list of models available for download, use the `lit list` command:

`[](#__codelineno-0-1)lit list --show_all`

Download a model using the `lit pull` command:

`[](#__codelineno-1-1)export HUGGING_FACE_HUB_TOKEN="**your Hugging Face token**" [](#__codelineno-1-2)lit pull gemma3n-e2b`

### Configure your agent[¶](#configure-your-agent "Permanent link")

Configure your agent to connect to LiteRT-LM and a hosted model. When running Gemma models with LiteRT-LM, you configure a `Gemini` model class with the model identifier and local network address.

To use LiteRT-LM with ADK and a Gemma model:

1.  Set `base_url` to the LiteRT-LM server URL, including the scheme, for example: `http://localhost:8001`.
2.  Set `model` to the LiteRT-LM model name, for example: `gemma3n-e2b`.

The following example code shows how to configure an agent to connect to the locally hosted LiteRT-LM instance serving the Gemma model configuration described above:

`[](#__codelineno-2-1)from google.adk.agents import Agent [](#__codelineno-2-2)from google.adk.models import Gemini [](#__codelineno-2-3)[](#__codelineno-2-4)root_agent = Agent(     [](#__codelineno-2-5)    model=Gemini(        [](#__codelineno-2-6)        model="gemma3n-e2b",        [](#__codelineno-2-7)        base_url="http://localhost:8001",    [](#__codelineno-2-8)    ),    [](#__codelineno-2-9)    name="dice_agent",    [](#__codelineno-2-10)    description=(        [](#__codelineno-2-11)        "hello world agent that can roll a die of 8 sides and check prime"        [](#__codelineno-2-12)        " numbers."    [](#__codelineno-2-13)    ),    [](#__codelineno-2-14)    instruction="""      [](#__codelineno-2-15)      You roll dice and answer questions about the outcome of the dice rolls.    [](#__codelineno-2-16)    """,    [](#__codelineno-2-17)    tools=[        [](#__codelineno-2-18)        roll_die,        [](#__codelineno-2-19)        check_prime,    [](#__codelineno-2-20)    ], [](#__codelineno-2-21))`

Then run the agent as usual:

`[](#__codelineno-3-1)adk web`

### Running the LiteRT-LM server[¶](#running-the-litert-lm-server "Permanent link")

The LiteRT-LM server is a separate process that serves LiteRT-LM models. It is started by the LiteRT-LM CLI tool `lit`.

#### Run the server[¶](#run-the-server "Permanent link")

After downloading a model, start the LiteRT-LM server locally by running the following command:

`[](#__codelineno-4-1)lit serve --port 8001`

Local Server Port Number

You may choose any port number for the LiteRT-LM server as long as it matches the `base_url` you set in the `Gemini` class in your agent code.

#### Debugging[¶](#debugging "Permanent link")

To see incoming requests to the LiteRT-LM server and the exact input sent to the model, use the `--verbose` flag:

`[](#__codelineno-5-1)lit serve --port 8001 --verbose`

## Kotlin[¶](#kotlin "Permanent link")

These instructions describe how to use LiteRT-LM with ADK in Kotlin using the `com.google.adk.kt.litertlm` package.

### Install resources[¶](#install-resources_1 "Permanent link")

You need to download a model to use with LiteRT-LM, and the `litert-lm` CLI tool to help you find a model download it.

#### Install LiteRT-LM CLI[¶](#install-litert-lm-cli "Permanent link")

Prerequisites: Python 3.10 or higher

To install the CLI, run:

`[](#__codelineno-6-1)pip install --upgrade litert-lm`

For additional installation methods, such as using uv, see [LiteRT-LM CLI Installation Guide](https://developers.google.com/edge/litert-lm/cli/installation).

#### Download a model[¶](#download-a-model_1 "Permanent link")

Download a model compatible with LiteRT-LM to use the `litert-lm` CLI tool. Use `litert-lm` to download models directly from Hugging Face:

`[](#__codelineno-7-1)litert-lm import \   [](#__codelineno-7-2)  --from-huggingface-repo litert-community/gemma-4-E2B-it-litert-lm \  [](#__codelineno-7-3)  gemma-4-E2B-it.litertlm`

Once downloaded, the model is stored locally at:

`[](#__codelineno-8-1)~/.litert-lm/models/gemma-4-E2B-it.litertlm/model.litertlm`

For more details about `litert-lm`, refer to the [LiteRT-LM CLI Usage Guide](https://developers.google.com/edge/litert-lm/cli/usage).

### Add dependencies[¶](#add-dependencies "Permanent link")

ADK Kotlin works with LiteRT-LM through an adapter package, `com.google.adk:google-adk-kotlin-litertlm`.

In your `build.gradle.kts`, add `com.google.adk:google-adk-kotlin-litertlm` and `com.google.ai.edge.litertlm:litertlm-jvm` to your dependencies:

`[](#__codelineno-9-1)repositories {     [](#__codelineno-9-2)    mavenCentral()    [](#__codelineno-9-3)    google() [](#__codelineno-9-4)} [](#__codelineno-9-5)[](#__codelineno-9-6)dependencies {     [](#__codelineno-9-7)    implementation("com.google.adk:google-adk-kotlin-core:1.3.1")    [](#__codelineno-9-8)    implementation("com.google.adk:google-adk-kotlin-litertlm:1.3.1")    [](#__codelineno-9-9)    implementation("com.google.ai.edge.litertlm:litertlm-jvm:0.13.1")    [](#__codelineno-9-10)    // other dependencies... [](#__codelineno-9-11)}`

### Configure agent model[¶](#configure-agent-model "Permanent link")

Run a local model for your agent with LiteRT-LM by configuring a `LiteRtLmModel` object as part of your `LlmAgent` object. If you do not already have a ADK Kotlin project, follow the [Kotlin Quickstart for ADK](/get-started/kotlin/) getting started guide. The following code example shows you how to configure an `LlmAgent`, and set the `model` parameter to a `LiteRtLmModel`:

 `[](#__codelineno-10-1) object HelloTimeAgent { [](#__codelineno-10-2)    [](#__codelineno-10-3)    // Get model path from environment variable.    [](#__codelineno-10-4)    private val modelPath: String by lazy {        [](#__codelineno-10-5)        System.getenv("LITERT_LM_MODEL_PATH")            [](#__codelineno-10-6)            ?: throw IllegalStateException(                [](#__codelineno-10-7)                "LITERT_LM_MODEL_PATH environment variable must be set pointing to a .litertlm file."            [](#__codelineno-10-8)            )    [](#__codelineno-10-9)    } [](#__codelineno-10-10)    [](#__codelineno-10-11)    @JvmField    [](#__codelineno-10-12)    val rootAgent =        [](#__codelineno-10-13)        LlmAgent(            [](#__codelineno-10-14)            name = "hello_time_agent",            [](#__codelineno-10-15)            description = "Tells the current time in a specified city.",            [](#__codelineno-10-16)            model =                [](#__codelineno-10-17)                LiteRtLmModel.create(                    [](#__codelineno-10-18)                    EngineConfig(modelPath = modelPath, backend = Backend.CPU())                [](#__codelineno-10-19)                ),            [](#__codelineno-10-20)            instruction =                [](#__codelineno-10-21)                Instruction(                    [](#__codelineno-10-22)                    "You are a helpful assistant that tells the current time in a city. " +                        [](#__codelineno-10-23)                        "Use the 'getCurrentTime' tool for this purpose."                [](#__codelineno-10-24)                ),            [](#__codelineno-10-25)            tools = TimeService().generatedTools(),        [](#__codelineno-10-26)        ) [](#__codelineno-10-27)}`

In this example, the path to the LiteRT-LM model file is read from the environment variable `LITERT_LM_MODEL_PATH`. The model will be run on the CPU. You can run the model on a GPU by setting `backend = Backend.GPU()`.

When you run the agent, set `LITERT_LM_MODEL_PATH` to the location of the model file, for example: `~/.litert-lm/models/gemma-4-E2B-it.litertlm/model.litertlm`.

### Run your agent[¶](#run-your-agent "Permanent link")

If you followed the [Kotlin Quickstart for ADK](/get-started/kotlin/) with the above modifications, you can run your ADK agent using the command-line REPL with the environment variable `LITERT_LM_MODEL_PATH` set to the path of the model file:

`[](#__codelineno-11-1)LITERT_LM_MODEL_PATH=~/.litert-lm/models/gemma-4-E2B-it.litertlm/model.litertlm ./gradlew run`

Example interaction:

`[](#__codelineno-12-1)Agent hello_time_agent is ready. Type 'exit' to quit. [](#__codelineno-12-2)[](#__codelineno-12-3)You > what's your name? [](#__codelineno-12-4)[](#__codelineno-12-5)hello_time_agent > I am Gemma 4, a Large Language Model developed by Google DeepMind. [](#__codelineno-12-6)[](#__codelineno-12-7)You > what time is it in paris? [](#__codelineno-12-8)[](#__codelineno-12-9)hello_time_agent > calls tool: getCurrentTime [](#__codelineno-12-10)[](#__codelineno-12-11)hello_time_agent > The time in Paris is 10:30 am.`

Back to top