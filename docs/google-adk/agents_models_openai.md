---
title: "OpenAI - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/openai/
date: 2026-10-10T19:16:25.953Z
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
        -    OpenAI [OpenAI](./)
            
            Table of contents
            
            -   [Get started](#get-started)
            -   [Chat Completions API](#chat-completions-api)
            -   [Supported features](#supported-features)
            -   [Limitations](#limitations)
            -   [Configuration options](#configuration-options)
            -   [OpenAI model authentication](#openai-model-authentication)
            
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

-   [Get started](#get-started)
-   [Chat Completions API](#chat-completions-api)
-   [Supported features](#supported-features)
-   [Limitations](#limitations)
-   [Configuration options](#configuration-options)
-   [OpenAI model authentication](#openai-model-authentication)

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/openai.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# OpenAI models for ADK agents[¶](#openai-models-for-adk-agents "Permanent link")

Supported in ADKGo v2.1.0Experimental

Experimental

The `openaimodel` package is experimental and its behavior may change or be removed in the future. We welcome your [feedback](https://github.com/google/adk-go/issues/new?template=feature_request.md)!

You can use OpenAI models with ADK. How you connect depends on the language:

-   **Go — native support:** ADK Go provides a direct `openaimodel` package that implements the `model.LLM` interface, targeting the OpenAI Responses API or the [Chat Completions API](#chat-completions-api). [Get started](#get-started).
-   **Python — via LiteLLM:** ADK Python accesses OpenAI models (and many other providers) through the LiteLLM connector. See [LiteLLM](/agents/models/litellm/).

## Get started[¶](#get-started "Permanent link")

The `openaimodel` package provides a client for interacting with OpenAI's API. It implements the `model.LLM` interface and uses the OpenAI Responses API by default, or the [Chat Completions API](#chat-completions-api) when `ClientConfig.API` selects it. The following code example shows a basic implementation for using OpenAI models in your agents:

Go

Responses APIChat Completions API

`[](#__codelineno-0-1)import (     [](#__codelineno-0-2)    "context"    [](#__codelineno-0-3)    "log" [](#__codelineno-0-4)    [](#__codelineno-0-5)    "github.com/openai/openai-go/v3"    [](#__codelineno-0-6)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-0-7)    "google.golang.org/adk/v2/model/openaimodel" [](#__codelineno-0-8)) [](#__codelineno-0-9)[](#__codelineno-0-10)// Instantiate the model [](#__codelineno-0-11)llm, err := openaimodel.NewModel(context.Background(), openai.ChatModelGPT4oMini, &openaimodel.ClientConfig{}) [](#__codelineno-0-12)if err != nil {   [](#__codelineno-0-13)  log.Fatal(err) [](#__codelineno-0-14)} [](#__codelineno-0-15)[](#__codelineno-0-16)// Create the agent [](#__codelineno-0-17)agent, err := llmagent.New(llmagent.Config{   [](#__codelineno-0-18)  Name:        "openai_agent",  [](#__codelineno-0-19)  Model:       llm,  [](#__codelineno-0-20)  Instruction: "You are a helpful AI assistant.", [](#__codelineno-0-21)}) [](#__codelineno-0-22)if err != nil {   [](#__codelineno-0-23)  log.Fatal(err) [](#__codelineno-0-24)}`

For a complete, runnable sample, see [examples/openai/responses/](https://github.com/google/adk-go/tree/main/examples/openai/responses) in the ADK Go repository.

Requires ADK Go v2.5.0 or later.

`[](#__codelineno-1-1)import (     [](#__codelineno-1-2)    "context"    [](#__codelineno-1-3)    "log"    [](#__codelineno-1-4)    "os" [](#__codelineno-1-5)    [](#__codelineno-1-6)    "github.com/openai/openai-go/v3"    [](#__codelineno-1-7)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-1-8)    "google.golang.org/adk/v2/model/openaimodel" [](#__codelineno-1-9)) [](#__codelineno-1-10)[](#__codelineno-1-11)// Instantiate the model on the Chat Completions API [](#__codelineno-1-12)llm, err := openaimodel.NewModel(context.Background(), openai.ChatModelGPT4oMini, &openaimodel.ClientConfig{   [](#__codelineno-1-13)  APIKey: os.Getenv("OPENAI_API_KEY"),  [](#__codelineno-1-14)  API:    openaimodel.APIChatCompletions, [](#__codelineno-1-15)}) [](#__codelineno-1-16)if err != nil {   [](#__codelineno-1-17)  log.Fatal(err) [](#__codelineno-1-18)} [](#__codelineno-1-19)[](#__codelineno-1-20)// Create the agent [](#__codelineno-1-21)agent, err := llmagent.New(llmagent.Config{   [](#__codelineno-1-22)  Name:        "openai_agent",  [](#__codelineno-1-23)  Model:       llm,  [](#__codelineno-1-24)  Instruction: "You are a helpful AI assistant.", [](#__codelineno-1-25)}) [](#__codelineno-1-26)if err != nil {   [](#__codelineno-1-27)  log.Fatal(err) [](#__codelineno-1-28)}`

For a complete, runnable sample, see [examples/openai/completions/](https://github.com/google/adk-go/tree/main/examples/openai/completions) in the ADK Go repository.

## Chat Completions API[¶](#chat-completions-api "Permanent link")

Supported in ADKGo v2.5.0Experimental

By default, `openaimodel` sends requests to the OpenAI [Responses API](https://platform.openai.com/docs/api-reference/responses) (`POST /v1/responses`). Nearly every OpenAI-compatible provider implements the [Chat Completions API](https://platform.openai.com/docs/api-reference/chat) (`POST /v1/chat/completions`), and some implement only that one. To use it, set the `API` field of `ClientConfig` to `openaimodel.APIChatCompletions`, as the Chat Completions API tab under [Get started](#get-started) shows. Agents, tools, and the runner work the same way with either API.

Set the API key for other providers

To reach another OpenAI-compatible provider, set `BaseURL` to its endpoint and `APIKey` to its key. When `APIKey` is empty, the `openai-go` SDK falls back to the `OPENAI_API_KEY` environment variable and sends that key to `BaseURL`.

The two APIs support the same features, with these differences:

-   **Generation settings:** `StopSequences`, `FrequencyPenalty`, `PresencePenalty`, and `Seed` are sent to the Chat Completions API. The Responses API has no equivalent fields and returns an error for them.
-   **Reasoning output:** The Chat Completions API does not return reasoning text, so responses contain no thought parts, and `ThinkingConfig.IncludeThoughts` is ignored. Reasoning effort and reasoning-token counts work with both APIs.
-   **Output token limit:** `MaxOutputTokens` is sent as `max_completion_tokens`. Some compatible servers honor only the older `max_tokens` field, so the limit has no effect there.

## Supported features[¶](#supported-features "Permanent link")

-   Text generation (streaming and non-streaming)
-   Function (tool) calling
-   Structured output via `OutputSchema` (JSON schema)
-   Reasoning models (e.g. o-series), including reasoning-token accounting
-   Token logprobs

## Limitations[¶](#limitations "Permanent link")

-   **Text only** — multimodal input (images, audio, files) is not supported.
-   **Function tools only** — built-in tools (Google Search, code execution, etc.) are not supported.
-   **Structured output uses OpenAI strict mode** — every field declared in an `OutputSchema` is treated as required.
-   Some `GenerateContentConfig` options return an error rather than being silently ignored: `TopK`, multiple candidates, request labels, and safety settings. The Responses API also rejects stop sequences, frequency/presence penalties, and seed, which the [Chat Completions API](#chat-completions-api) supports.

## Configuration options[¶](#configuration-options "Permanent link")

The `ClientConfig` provides several options for configuring the client:

-   `APIKey`: Your OpenAI API key.
-   `BaseURL`: Custom endpoint URL, which can be useful for OpenAI-compatible endpoints.
-   `HTTPClient`: A custom `*http.Client`.
-   `Options`: Advanced `openai-go` request options (`[]option.RequestOption`).
-   `API`: The OpenAI API to call: `openaimodel.APIResponses` (the default) or `openaimodel.APIChatCompletions`. See [Chat Completions API](#chat-completions-api).

If `APIKey` or `BaseURL` are left empty, they will automatically fall back to the `OPENAI_API_KEY` and `OPENAI_BASE_URL` environment variables, handled by the default behavior of the underlying `openai-go` SDK.

## OpenAI model authentication[¶](#openai-model-authentication "Permanent link")

When using OpenAI models, you must provide an API key to authenticate with the OpenAI API. The most direct way to provide this information is to use environment variables or an `.env` file.

The `openaimodel` package also supports OpenAI-compatible endpoints (such as local models served via Ollama, LM Studio, or vLLM) by configuring the base URL. If the endpoint does not serve the Responses API, also set `API` to `openaimodel.APIChatCompletions`, as described in [Chat Completions API](#chat-completions-api).

OpenAI APIOpenAI-compatible Endpoint

`[](#__codelineno-2-1)# .env configuration file [](#__codelineno-2-2)OPENAI_API_KEY="PASTE_YOUR_OPENAI_API_KEY_HERE"`

`[](#__codelineno-3-1)# .env configuration file [](#__codelineno-3-2)OPENAI_API_KEY="api-key-if-required" [](#__codelineno-3-3)OPENAI_BASE_URL="http://localhost:11434/v1" # example: local Ollama endpoint`

Back to top