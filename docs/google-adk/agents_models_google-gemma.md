---
title: "Gemma - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/google-gemma/
date: 2026-10-10T19:16:25.560Z
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
            
        -    Gemma [Gemma](./)
            
            Table of contents
            
            -   [Gemini API Example](#gemini-api-example)
            -   [vLLM Example](#vllm-example)
                
                -   [Setup](#setup)
                -   [Code](#code)
                
            -   [Build a food tour agent with Gemma 4, ADK, and Google Maps MCP](#build-a-food-tour-agent-with-gemma-4-adk-and-google-maps-mcp)
                
                -   [Prerequisites](#prerequisites)
                -   [Project structure](#project-structure)
                -   [Environment variables](#environment-variables)
                -   [Example usage](#example-usage)
                
            
        -   [Claude](../anthropic/)
        -   [Agent Platform hosted](../agent-platform/)
        -   [Apigee AI Gateway](../apigee/)
        -   [Model routing](../routing/)
        -   [OpenAI](../openai/)
        -   [Ollama](../ollama/)
        -   [vLLM](../vllm/)
        -   [LiteLLM](../litellm/)
        -   [LiteRT-LM](../litert-lm/)
        
    
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

-   [Gemini API Example](#gemini-api-example)
-   [vLLM Example](#vllm-example)
    
    -   [Setup](#setup)
    -   [Code](#code)
    
-   [Build a food tour agent with Gemma 4, ADK, and Google Maps MCP](#build-a-food-tour-agent-with-gemma-4-adk-and-google-maps-mcp)
    
    -   [Prerequisites](#prerequisites)
    -   [Project structure](#project-structure)
    -   [Environment variables](#environment-variables)
    -   [Example usage](#example-usage)
    

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/google-gemma.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Google Gemma models for ADK agents[¶](#google-gemma-models-for-adk-agents "Permanent link")

Supported in ADKPython v0.1.0

ADK agents can use the [Google Gemma](https://ai.google.dev/gemma/docs) family of generative AI models that offer a wide range of capabilities. ADK supports many Gemma features, including [Tool Calling](/tools-custom/) and [Structured Output](/agents/llm-agents/#data-handling).

You can use Gemma 4 through the [Gemini API](https://ai.google.dev/gemini-api/docs), or with one of many self-hosting options on Google Cloud: [Agent Platform](https://console.cloud.google.com/vertex-ai/publishers/google/model-garden/gemma4), [Google Kubernetes Engine](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [Cloud Run](https://docs.cloud.google.com/run/docs/run-gemma-on-cloud-run).

Gemma 3 needs a different model class than the Gemma 4 examples below. It has no native function calling or system instruction support, so ADK supplies workarounds in dedicated classes: use `Gemma(model="gemma-3-27b-it")` for the Gemini API and `Gemma3Ollama()` for Ollama, both from `google.adk.models`. `Gemma3Ollama` is only defined when [LiteLLM](/agents/models/litellm/) is installed (`litellm>=1.84`).

## Gemini API Example[¶](#gemini-api-example "Permanent link")

Create an API key in [Google AI Studio](https://aistudio.google.com/app/apikey).

PythonJava

`[](#__codelineno-0-1)# Set GEMINI_API_KEY environment variable to your API key [](#__codelineno-0-2)# export GEMINI_API_KEY="YOUR_API_KEY" [](#__codelineno-0-3)[](#__codelineno-0-4)from google.adk.agents import LlmAgent [](#__codelineno-0-5)from google.adk.models import Gemini [](#__codelineno-0-6)[](#__codelineno-0-7)# Simple tool to try [](#__codelineno-0-8)def get_weather(location: str) -> str:     [](#__codelineno-0-9)    return f"Location: {location}. Weather: sunny, 76 degrees Fahrenheit, 8 mph wind." [](#__codelineno-0-10)[](#__codelineno-0-11)root_agent = LlmAgent(     [](#__codelineno-0-12)    model=Gemini(model="gemma-4-31b-it"),    [](#__codelineno-0-13)    name="weather_agent",    [](#__codelineno-0-14)    instruction="You are a helpful assistant that can provide current weather.",    [](#__codelineno-0-15)    tools=[get_weather] [](#__codelineno-0-16))`

`[](#__codelineno-1-1)// Set GEMINI_API_KEY environment variable to your API key [](#__codelineno-1-2)// export GEMINI_API_KEY="YOUR_API_KEY" [](#__codelineno-1-3)[](#__codelineno-1-4)import com.google.adk.agents.LlmAgent; [](#__codelineno-1-5)import com.google.adk.tools.Annotations.Schema; [](#__codelineno-1-6)import com.google.adk.tools.FunctionTool; [](#__codelineno-1-7)[](#__codelineno-1-8)LlmAgent weatherAgent = LlmAgent.builder()     [](#__codelineno-1-9)    .model("gemma-4-31b-it")    [](#__codelineno-1-10)    .name("weather_agent")    [](#__codelineno-1-11)    .instruction("""        [](#__codelineno-1-12)        You are a helpful assistant that can provide current weather.    [](#__codelineno-1-13)    """)    [](#__codelineno-1-14)    .tools(FunctionTool.create(this, "getWeather"))    [](#__codelineno-1-15)    .build(); [](#__codelineno-1-16)[](#__codelineno-1-17)@Schema(name = "getWeather",          [](#__codelineno-1-18)        description = "Retrieve the weather forecast for a given location") [](#__codelineno-1-19)public Map<String, String> getWeather(     [](#__codelineno-1-20)    @Schema(name = "location",            [](#__codelineno-1-21)            description = "The location for the weather forecast")    [](#__codelineno-1-22)    String location) {    [](#__codelineno-1-23)    return Map.of("forecast", "Location: " + location        [](#__codelineno-1-24)        + ". Weather: sunny, 76 degrees Fahrenheit, 8 mph wind."); [](#__codelineno-1-25)}`

## vLLM Example[¶](#vllm-example "Permanent link")

To access Gemma 4 endpoints in these services, you can use vLLM models through the [LiteLLM](/agents/models/litellm/) library for Python, and through [LangChain4j](https://docs.langchain4j.dev/) for Java.

The following example shows how to use a Gemma 4 vLLM endpoint with ADK agents.

### Setup[¶](#setup "Permanent link")

1.  **Deploy Model:** Deploy your chosen model using [Agent Platform](https://console.cloud.google.com/vertex-ai/publishers/google/model-garden/gemma4), [Google Kubernetes Engine](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), or [Cloud Run](https://docs.cloud.google.com/run/docs/run-gemma-on-cloud-run), and use its OpenAI-compatible API endpoint. Note that the API base URL includes `/v1` (e.g., `https://your-vllm-endpoint.run.app/v1`).
    -   *Important for ADK Tools:* When deploying, ensure the serving tool supports and enables compatible tool/function calling and reasoning parsers.
2.  **Authentication:** Determine how your endpoint handles authentication (e.g., API key, bearer token).

### Code[¶](#code "Permanent link")

PythonJava

`[](#__codelineno-2-1)import subprocess [](#__codelineno-2-2)from google.adk.agents import LlmAgent [](#__codelineno-2-3)from google.adk.models.lite_llm import LiteLlm [](#__codelineno-2-4)[](#__codelineno-2-5)# --- Example Agent using a model hosted on a vLLM endpoint --- [](#__codelineno-2-6)[](#__codelineno-2-7)# Endpoint URL provided by your model deployment [](#__codelineno-2-8)api_base_url = "https://your-vllm-endpoint.run.app/v1" [](#__codelineno-2-9)[](#__codelineno-2-10)# Model name as recognized by *your* vLLM endpoint configuration [](#__codelineno-2-11)model_name_at_endpoint = "openai/google/gemma-4-31B-it" [](#__codelineno-2-12)[](#__codelineno-2-13)# Simple tool to try [](#__codelineno-2-14)def get_weather(location: str) -> str:     [](#__codelineno-2-15)    return f"Location: {location}. Weather: sunny, 76 degrees Fahrenheit, 8 mph wind." [](#__codelineno-2-16)[](#__codelineno-2-17)# Authentication (Example: using gcloud identity token for a Cloud Run deployment) [](#__codelineno-2-18)# Adapt this based on your endpoint's security [](#__codelineno-2-19)try:     [](#__codelineno-2-20)    gcloud_token = subprocess.check_output(        [](#__codelineno-2-21)        ["gcloud", "auth", "print-identity-token", "-q"]    [](#__codelineno-2-22)    ).decode().strip()    [](#__codelineno-2-23)    auth_headers = {"Authorization": f"Bearer {gcloud_token}"} [](#__codelineno-2-24)except Exception as e:     [](#__codelineno-2-25)    print(f"Warning: Could not get gcloud token - {e}.")    [](#__codelineno-2-26)    auth_headers = None # Or handle error appropriately [](#__codelineno-2-27)[](#__codelineno-2-28)root_agent = LlmAgent(     [](#__codelineno-2-29)    model=LiteLlm(        [](#__codelineno-2-30)        model=model_name_at_endpoint,        [](#__codelineno-2-31)        api_base=api_base_url,        [](#__codelineno-2-32)        # Pass authentication headers if needed        [](#__codelineno-2-33)        extra_headers=auth_headers,        [](#__codelineno-2-34)        # Alternatively, if endpoint uses an API key:        [](#__codelineno-2-35)        # api_key="YOUR_ENDPOINT_API_KEY",        [](#__codelineno-2-36)        extra_body={            [](#__codelineno-2-37)            "chat_template_kwargs": {                [](#__codelineno-2-38)                "enable_thinking": True # Enable thinking            [](#__codelineno-2-39)            },            [](#__codelineno-2-40)            "skip_special_tokens": False # Should be set to False        [](#__codelineno-2-41)        },    [](#__codelineno-2-42)    ),    [](#__codelineno-2-43)    name="weather_agent",    [](#__codelineno-2-44)    instruction="You are a helpful assistant that can provide current weather.",    [](#__codelineno-2-45)    tools=[get_weather] # Tools! [](#__codelineno-2-46))`

To use Gemma hosted on vLLM, you must use an OpenAI compatible library. LangChain4j offers an OpenAI dependency that you can add to your `pom.xml`:

`[](#__codelineno-3-1)<!-- LangChain4j to ADK bridge --> [](#__codelineno-3-2)<dependency>     [](#__codelineno-3-3)    <groupId>com.google.adk</groupId>    [](#__codelineno-3-4)    <artifactId>google-adk-langchain4j</artifactId>    [](#__codelineno-3-5)    <version>${adk.version}</version> [](#__codelineno-3-6)</dependency> [](#__codelineno-3-7)<!-- Core LangChain4j library --> [](#__codelineno-3-8)<dependency>     [](#__codelineno-3-9)    <groupId>dev.langchain4j</groupId>    [](#__codelineno-3-10)    <artifactId>langchain4j-core</artifactId>    [](#__codelineno-3-11)    <version>${langchain4j.version}</version> [](#__codelineno-3-12)</dependency> [](#__codelineno-3-13)<!-- OpenAI compatible model --> [](#__codelineno-3-14)<dependency>     [](#__codelineno-3-15)    <groupId>dev.langchain4j</groupId>    [](#__codelineno-3-16)    <artifactId>langchain4j-open-ai</artifactId>    [](#__codelineno-3-17)    <version>${langchain4j.version}</version> [](#__codelineno-3-18)</dependency>`

Create an OpenAI compatible chat model (streaming or non-streaming), wrap it with the `LangChain4j` wrapper, then pass it to the `LlmAgent`:

`[](#__codelineno-4-1)import com.google.adk.agents.LlmAgent; [](#__codelineno-4-2)import com.google.adk.tools.Annotations.Schema; [](#__codelineno-4-3)import com.google.adk.tools.FunctionTool; [](#__codelineno-4-4)import dev.langchain4j.model.chat.StreamingChatModel; [](#__codelineno-4-5)import dev.langchain4j.model.openai.OpenAiStreamingChatModel; [](#__codelineno-4-6)[](#__codelineno-4-7)// Endpoint URL provided by your model deployment [](#__codelineno-4-8)String apiBaseUrl = "https://your-vllm-endpoint.run.app/v1"; [](#__codelineno-4-9)[](#__codelineno-4-10)// Model name as recognized by *your* vLLM endpoint configuration [](#__codelineno-4-11)String gemmaModelName = "gg-hf-gg/gemma-4-31b-it"; [](#__codelineno-4-12)[](#__codelineno-4-13)// First, define an OpenAI compatible chat model with LangChain4j [](#__codelineno-4-14)StreamingChatModel model =     [](#__codelineno-4-15)    OpenAiStreamingChatModel.builder()        [](#__codelineno-4-16)        .modelName(gemmaModelName)        [](#__codelineno-4-17)        // If your endpoint requires an API key        [](#__codelineno-4-18)        // .apiKey("YOUR_ENDPOINT_API_KEY")        [](#__codelineno-4-19)        .baseUrl(apiBaseUrl)        [](#__codelineno-4-20)        .customParameters(            [](#__codelineno-4-21)            Map.of(                [](#__codelineno-4-22)                "skip_special_tokens", false,                [](#__codelineno-4-23)                "chat_template_kwargs", Map.of("enable_thinking", true)            [](#__codelineno-4-24)            )        [](#__codelineno-4-25)        )        [](#__codelineno-4-26)        .build(); [](#__codelineno-4-27)[](#__codelineno-4-28)// Configure the agent with the LangChain4j wrapper model [](#__codelineno-4-29)LlmAgent weatherAgent = LlmAgent.builder()     [](#__codelineno-4-30)    .model(new LangChain4j(model))    [](#__codelineno-4-31)    .name("weather_agent")    [](#__codelineno-4-32)    .instruction("""        [](#__codelineno-4-33)        You are a helpful assistant that can provide the current weather.    [](#__codelineno-4-34)    """)    [](#__codelineno-4-35)    .tools(FunctionTool.create(this, "getWeather"))    [](#__codelineno-4-36)    .build(); [](#__codelineno-4-37)[](#__codelineno-4-38)@Schema(name = "getWeather",          [](#__codelineno-4-39)        description = "Retrieve the weather forecast for a given location") [](#__codelineno-4-40)public Map<String, String> getWeather(     [](#__codelineno-4-41)    @Schema(name = "location",            [](#__codelineno-4-42)            description = "The location for the weather forecast")    [](#__codelineno-4-43)    String location) {    [](#__codelineno-4-44)    return Map.of("forecast", "Location: " + location        [](#__codelineno-4-45)        + ". Weather: sunny, 76 degrees Fahrenheit, 8 mph wind."); [](#__codelineno-4-46)}`

## Build a food tour agent with Gemma 4, ADK, and Google Maps MCP[¶](#build-a-food-tour-agent-with-gemma-4-adk-and-google-maps-mcp "Permanent link")

This sample shows how to build a personalized food tour agent using Gemma 4, ADK, and the Google Maps MCP server. The agent takes a user’s dish photo or text description, a location, and an optional budget, then recommends places to eat and organizes them into a walking route.

### Prerequisites[¶](#prerequisites "Permanent link")

-   Get an API key in [Google AI Studio](https://aistudio.google.com/app/apikey). Set `GEMINI_API_KEY` environment variable to your Gemini API key.
-   Enable [Google Maps API](https://console.cloud.google.com/maps-api/) on Google Cloud Console.
-   Create a [Google Maps Platform API key](https://console.cloud.google.com/maps-api/credentials). Set `MAPS_API_KEY` environment variable to your API key.
-   Install ADK and configure it in your Python environment or configure the Java dependencies in your Java project.

### Project structure[¶](#project-structure "Permanent link")

`[](#__codelineno-5-1)food_tour_app/ [](#__codelineno-5-2)├── __init__.py [](#__codelineno-5-3)└── agent.py`

`agent.py`

``[](#__codelineno-6-1)import os [](#__codelineno-6-2)import dotenv [](#__codelineno-6-3)from google.adk.agents import LlmAgent [](#__codelineno-6-4)from google.adk.models import Gemini [](#__codelineno-6-5)from google.adk.tools.mcp_tool.mcp_toolset import McpToolset [](#__codelineno-6-6)from google.adk.tools.mcp_tool.mcp_session_manager import StreamableHTTPConnectionParams [](#__codelineno-6-7)[](#__codelineno-6-8)dotenv.load_dotenv() [](#__codelineno-6-9)[](#__codelineno-6-10)system_instruction = """ [](#__codelineno-6-11)You are an expert personalized food tour guide. [](#__codelineno-6-12)Your goal is to build a culinary tour based on the user's inputs: a photo of a dish (or a text description), a location, and a budget. [](#__codelineno-6-13)[](#__codelineno-6-14)Follow these 4 rigorous steps: [](#__codelineno-6-15)1. **Identify the Cuisine/Dish:** Analyze the user's provided description or image URL to determine the primary cuisine or specific dish. [](#__codelineno-6-16)2. **Find the Best Spots:** Use the `search_places` tool to find highly rated restaurants, stalls, or cafes serving that cuisine/dish in the user's specified location.    [](#__codelineno-6-17)   **CRITICAL RULE FOR PLACES:** `search_places` returns AI-generated place data summaries along with `place_id`, latitude/longitude coordinates, and map links for each place, but may lack a direct, explicit name field. You must carefully associate each described place to its provided `place_id` or `lat_lng`. [](#__codelineno-6-18)3. **Build the Route:** Use the `compute_routes` tool to structure a walking-optimized route between the selected spots.    [](#__codelineno-6-19)   **CRITICAL ROUTING RULE:** To avoid hallucinating, you MUST provide the `origin` and `destination` using the exact `place_id` string OR `lat_lng` object returned by `search_places`. Do NOT guess or hallucinate an `address` or `place_id` if you do not know the exact name. [](#__codelineno-6-20)4. **Insider Tips:** Provide specific "order this, skip that" insider tips for each location on the tour. [](#__codelineno-6-21)[](#__codelineno-6-22)Structure your response clearly and concisely. If the user provides a budget, ensure your suggestions align with it. [](#__codelineno-6-23)""" [](#__codelineno-6-24)[](#__codelineno-6-25)MAPS_MCP_URL = "https://mapstools.googleapis.com/mcp" [](#__codelineno-6-26)[](#__codelineno-6-27)def get_maps_mcp_toolset():     [](#__codelineno-6-28)    dotenv.load_dotenv()    [](#__codelineno-6-29)    maps_api_key = os.getenv("MAPS_API_KEY")    [](#__codelineno-6-30)    if not maps_api_key:        [](#__codelineno-6-31)        print("Warning: MAPS_API_KEY environment variable not found.")        [](#__codelineno-6-32)        maps_api_key = "no_api_found" [](#__codelineno-6-33)    [](#__codelineno-6-34)    tools = McpToolset(        [](#__codelineno-6-35)        connection_params=StreamableHTTPConnectionParams(            [](#__codelineno-6-36)            url=MAPS_MCP_URL,            [](#__codelineno-6-37)            headers={                [](#__codelineno-6-38)                "X-Goog-Api-Key": maps_api_key            [](#__codelineno-6-39)            }        [](#__codelineno-6-40)        )    [](#__codelineno-6-41)    )    [](#__codelineno-6-42)    print("Google Maps MCP Toolset configured.")    [](#__codelineno-6-43)    return tools [](#__codelineno-6-44)[](#__codelineno-6-45)maps_toolset = get_maps_mcp_toolset() [](#__codelineno-6-46)[](#__codelineno-6-47)root_agent = LlmAgent(     [](#__codelineno-6-48)    model=Gemini(model="gemma-4-31b-it"),    [](#__codelineno-6-49)    name="food_tour_agent",    [](#__codelineno-6-50)    instruction=system_instruction,    [](#__codelineno-6-51)    tools=[maps_toolset], [](#__codelineno-6-52))``

### Environment variables[¶](#environment-variables "Permanent link")

Set the required environment variables before running the agent.

`[](#__codelineno-7-1)export MAPS_API_KEY="YOUR_GOOGLE_MAPS_API_KEY" [](#__codelineno-7-2)export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"`

### Example usage[¶](#example-usage "Permanent link")

To test out the capabilities of the Food Tour Agent, try pasting one of these prompts into the chat:

-   *"I want to do a ramen tour in Toronto. My budget is $60 for the day. Give me a walking route for the top 3 spots and tell me what I should order at each."*
-   *"I have this photo of a deep dish pizza \[insert image URL\]. I want to find the best places for this around Navy Pier in Chicago. Structure a walking tour and tell me what the must-have slice is at each stop."*
-   *"I'm in Downtown Austin looking for an authentic BBQ tour. Let's keep the budget under $100. Build a walking route between 3 highly-rated spots and give me insider tips on the best cuts of meat to get."*

The agent will:

1.  Infer the likely cuisine or dish style
2.  Search for relevant places using Google Maps MCP tools
3.  Compute a walking route between selected stops
4.  Return a structured food tour with recommendations and insider tips

Back to top