---
title: "Model routing - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/routing/
date: 2026-10-10T19:16:26.009Z
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
        -    Model routing [Model routing](./)
            
            Table of contents
            
            -   [How routing works](#how-routing-works)
            -   [Basic usage](#basic-usage)
            
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

-   [How routing works](#how-routing-works)
-   [Basic usage](#basic-usage)

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/routing.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Route between models[¶](#route-between-models "Permanent link")

Supported in ADKTypeScript v1.0.0Experimental

Experimental

Model routing is experimental and may change in future releases. We welcome your [feedback](https://github.com/google/adk-js/issues/new?template=feature_request.md)!

An `LlmAgent` uses a single model by default. When you need to dynamically select between different models for each request, you can define a routing function that chooses which model to use. `RoutedLlm` provides this capability, enabling model fallback on error, A/B testing between models, and auto-routing by input complexity. If the selected model fails before producing any output, the routing function is called again with error context so it can select a different model.

Pass a `RoutedLlm` as an `LlmAgent`'s `model` parameter. Use `RoutedLlm` when only the model varies between routes. If you also need to switch instructions, tools, or sub-agents, use [`RoutedAgent`](../../routing/) instead.

## How routing works[¶](#how-routing-works "Permanent link")

The `LlmRouter` function receives the map of available models and the current `LlmRequest`, and returns the key of the model to use:

TypeScript

`[](#__codelineno-0-1)type LlmRouter = (   [](#__codelineno-0-2)  models: Readonly<Record<string, BaseLlm>>,  [](#__codelineno-0-3)  request: LlmRequest,  [](#__codelineno-0-4)  errorContext?: { failedKeys: ReadonlySet<string>; lastError: unknown }, [](#__codelineno-0-5)) => Promise<string | undefined> | string | undefined;`

The `models` parameter accepts either a `Record<string, BaseLlm>` with explicit keys, or an array of `BaseLlm` instances. If an array is provided, each model's name is used as its key.

Failover follows the same rules as [`RoutedAgent`](../../routing/#how-routing-works): the router is re-called with `errorContext` only if the selected model fails before yielding any response. After yielding, errors propagate without retry. The router can return `undefined` to stop retrying and propagate the last error.

**Live connections:** `RoutedLlm.connect()` selects the model at connection time. Once a live connection is established, the model cannot be switched mid-stream.

## Basic usage[¶](#basic-usage "Permanent link")

The following example creates a `RoutedLlm` that tries a primary model first and falls back to a secondary model if the primary fails. The router checks `errorContext.failedKeys` to avoid re-selecting the failed model:

TypeScript

`[](#__codelineno-1-1)import {   [](#__codelineno-1-2)  BaseLlm,  [](#__codelineno-1-3)  Gemini,  [](#__codelineno-1-4)  LlmRequest,  [](#__codelineno-1-5)  LlmAgent,  [](#__codelineno-1-6)  RoutedLlm,  [](#__codelineno-1-7)  InMemoryRunner, [](#__codelineno-1-8)} from '@google/adk'; [](#__codelineno-1-9)[](#__codelineno-1-10)const primaryModel = new Gemini({ model: 'gemini-flash-latest' }); [](#__codelineno-1-11)const fallbackModel = new Gemini({ model: 'gemini-pro-latest' }); [](#__codelineno-1-12)[](#__codelineno-1-13)const router = (   [](#__codelineno-1-14)  models: Readonly<Record<string, BaseLlm>>,  [](#__codelineno-1-15)  request: LlmRequest,  [](#__codelineno-1-16)  // errorContext is provided when a previously selected model fails  [](#__codelineno-1-17)  errorContext?: { failedKeys: ReadonlySet<string>; lastError: unknown }, [](#__codelineno-1-18)) => {   [](#__codelineno-1-19)  if (!errorContext) {    [](#__codelineno-1-20)    return 'primary'; // Try primary first  [](#__codelineno-1-21)  }  [](#__codelineno-1-22)  if (errorContext.failedKeys.has('primary')) {    [](#__codelineno-1-23)    return 'fallback'; // Fall back if primary failed  [](#__codelineno-1-24)  }  [](#__codelineno-1-25)  return undefined; // No more options, propagate the error [](#__codelineno-1-26)}; [](#__codelineno-1-27)[](#__codelineno-1-28)const routedLlm = new RoutedLlm({   [](#__codelineno-1-29)  models: { primary: primaryModel, fallback: fallbackModel },  [](#__codelineno-1-30)  router, [](#__codelineno-1-31)}); [](#__codelineno-1-32)[](#__codelineno-1-33)// Use RoutedLlm as the model for an LlmAgent [](#__codelineno-1-34)const agent = new LlmAgent({   [](#__codelineno-1-35)  name: 'my_agent',  [](#__codelineno-1-36)  model: routedLlm,  [](#__codelineno-1-37)  instruction: 'You are a helpful assistant.', [](#__codelineno-1-38)}); [](#__codelineno-1-39)[](#__codelineno-1-40)const runner = new InMemoryRunner({ agent, appName: 'my_app' }); [](#__codelineno-1-41)[](#__codelineno-1-42)const session = await runner.sessionService.createSession({   [](#__codelineno-1-43)  appName: 'my_app',  [](#__codelineno-1-44)  userId: 'user_1', [](#__codelineno-1-45)}); [](#__codelineno-1-46)[](#__codelineno-1-47)const run = runner.runAsync({   [](#__codelineno-1-48)  userId: 'user_1',  [](#__codelineno-1-49)  sessionId: session.id,  [](#__codelineno-1-50)  newMessage: { role: 'user', parts: [{ text: 'Hello!' }] }, [](#__codelineno-1-51)}); [](#__codelineno-1-52)[](#__codelineno-1-53)for await (const event of run) {   [](#__codelineno-1-54)  if (event.content?.parts?.[0]?.text) {    [](#__codelineno-1-55)    console.log(event.content.parts[0].text);  [](#__codelineno-1-56)  } [](#__codelineno-1-57)}`

Back to top