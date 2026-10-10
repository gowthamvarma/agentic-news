---
title: "Cancel Agent Runs - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/runtime/cancel/
date: 2026-10-10T19:16:59.424Z
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
    
    -   [Agent Runtime](../)
        
        Agent Runtime
        
        -   [Web Interface](../web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../../visual-builder/)
            
        -   [Command Line](../command-line/)
        -   [API Server](../api-server/)
        -   [Ambient Agents](../ambient-agents/)
        -   [Resume Agents](../resume/)
        -    Cancel Agent Runs [Cancel Agent Runs](./)
            
            Table of contents
            
            -   [Get started](#get-started)
            -   [How cancellation propagates](#how-cancellation-propagates)
                
                -   [Behavior on cancellation](#behavior-on-cancellation)
                
            -   [Advanced examples](#advanced-examples)
                
                -   [Cancellation with a timeout](#cancellation-with-a-timeout)
                -   [AbortSignal in custom tools](#abortsignal-in-custom-tools)
                
            
        -   [Runtime Config](../runconfig/)
        -   [Event Loop](../event-loop/)
        
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

-   [Get started](#get-started)
-   [How cancellation propagates](#how-cancellation-propagates)
    
    -   [Behavior on cancellation](#behavior-on-cancellation)
    
-   [Advanced examples](#advanced-examples)
    
    -   [Cancellation with a timeout](#cancellation-with-a-timeout)
    -   [AbortSignal in custom tools](#abortsignal-in-custom-tools)
    

1.  [Home](../..)
2.  [Run Agents](../)
3.  [Agent Runtime](../)

[](https://github.com/google/adk-docs/edit/main/docs/runtime/cancel.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Cancel agent runs[¶](#cancel-agent-runs "Permanent link")

Supported in ADKTypeScript v1.0.0

When an agent run takes too long, encounters changing conditions, or is no longer needed, you may want to cancel it without losing the work already completed. Cancellation in ADK is non-destructive: events already committed to the session remain persisted.

ADK supports graceful cancellation using `AbortController` and `AbortSignal`. Pass an `AbortSignal` to `runner.runAsync()` to cancel the entire invocation at any point in the execution stack, including agent execution, LLM generation, tool execution, and plugin callbacks.

## Get started[¶](#get-started "Permanent link")

Create an `AbortController`, pass its `signal` to `runner.runAsync()`, and call `controller.abort()` when you want to cancel execution:

TypeScript

``[](#__codelineno-0-1)import { Runner, InMemorySessionService, LlmAgent, FunctionTool } from '@google/adk'; [](#__codelineno-0-2)import { z } from 'zod'; [](#__codelineno-0-3)[](#__codelineno-0-4)const getInfo = new FunctionTool({   [](#__codelineno-0-5)  name: 'get_info',  [](#__codelineno-0-6)  description: 'Gets information about a topic.',  [](#__codelineno-0-7)  parameters: z.object({ topic: z.string() }),  [](#__codelineno-0-8)  execute: (args) => ({ result: `Info about ${args.topic}` }), [](#__codelineno-0-9)}); [](#__codelineno-0-10)[](#__codelineno-0-11)const agent = new LlmAgent({   [](#__codelineno-0-12)  name: 'my_agent',  [](#__codelineno-0-13)  model: 'gemini-flash-latest',  [](#__codelineno-0-14)  instruction: 'Always use the get_info tool before answering.',  [](#__codelineno-0-15)  tools: [getInfo], [](#__codelineno-0-16)}); [](#__codelineno-0-17)[](#__codelineno-0-18)const sessionService = new InMemorySessionService(); [](#__codelineno-0-19)const runner = new Runner({ agent, appName: 'my_app', sessionService }); [](#__codelineno-0-20)const session = await sessionService.createSession({ appName: 'my_app', userId: 'user_1' }); [](#__codelineno-0-21)[](#__codelineno-0-22)const controller = new AbortController(); [](#__codelineno-0-23)const run = runner.runAsync({   [](#__codelineno-0-24)  userId: session.userId,  [](#__codelineno-0-25)  sessionId: session.id,  [](#__codelineno-0-26)  newMessage: { role: 'user', parts: [{ text: 'Tell me about quantum computing.' }] },  [](#__codelineno-0-27)  abortSignal: controller.signal, [](#__codelineno-0-28)}); [](#__codelineno-0-29)[](#__codelineno-0-30)let count = 0; [](#__codelineno-0-31)for await (const event of run) {   [](#__codelineno-0-32)  count++;  [](#__codelineno-0-33)  console.log('Event:', event.author);  [](#__codelineno-0-34)  controller.abort(); // Without this, 3+ events; with it, only 1. [](#__codelineno-0-35)} [](#__codelineno-0-36)console.log(`Done. Received ${count} event(s).`);``

## How cancellation propagates[¶](#how-cancellation-propagates "Permanent link")

When you abort the signal, cancellation propagates down through the entire execution stack. Each component checks `abortSignal.aborted` at critical lifecycle points and terminates early when it detects cancellation:

Component

What happens on abort

**Runner**

Stops before session fetch, after plugin callbacks, and within the event streaming loop.

**LlmAgent**

Stops between execution steps, before/after model callbacks, and within response streaming.

**LoopAgent**

Stops between loop iterations and between sub-agent executions.

**ParallelAgent**

Stops when merging results from concurrent sub-agent runs.

**Models (Gemini)**

The signal is passed to the underlying Google GenAI SDK via `config.abortSignal`, cancelling the in-flight HTTP request.

**AgentTool**

Passes the signal to the sub-agent runner and checks for abort after session creation.

**MCPTool**

Passes the signal to the MCP client's `callTool` method.

The `InvocationContext` also registers a listener on the signal that automatically sets `endInvocation = true` when triggered, signaling all components to wind down.

### Behavior on cancellation[¶](#behavior-on-cancellation "Permanent link")

When an `AbortSignal` is triggered, the following applies:

-   **Graceful termination:** The async generator returned by `runner.runAsync()` completes (stops yielding events) without throwing an error.
-   **Committed events persist:** Any events that were already yielded and processed by the Runner before the abort remain committed to the session history.
-   **No partial events:** Events that were in progress but not yet yielded are discarded.
-   **Resource cleanup:** In-flight LLM requests to the Gemini API are cancelled through the SDK's native `AbortSignal` support, freeing network resources.

## Advanced examples[¶](#advanced-examples "Permanent link")

The following examples show additional cancellation patterns beyond the basic `AbortController` usage.

### Cancellation with a timeout[¶](#cancellation-with-a-timeout "Permanent link")

Use `AbortSignal.timeout()` to automatically cancel an agent run after a specified duration. This is useful for enforcing time limits on agent execution.

Using the same agent and runner setup from the get started example, replace everything from `const controller` onwards with:

TypeScript

``[](#__codelineno-1-1)const run = runner.runAsync({   [](#__codelineno-1-2)  userId: session.userId,  [](#__codelineno-1-3)  sessionId: session.id,  [](#__codelineno-1-4)  newMessage: { role: 'user', parts: [{ text: 'Tell me about quantum computing.' }] },  [](#__codelineno-1-5)  abortSignal: AbortSignal.timeout(2_000), // Cancel after 2 seconds [](#__codelineno-1-6)}); [](#__codelineno-1-7)[](#__codelineno-1-8)let count = 0; [](#__codelineno-1-9)for await (const event of run) {   [](#__codelineno-1-10)  count++;  [](#__codelineno-1-11)  console.log('Event:', event.author); [](#__codelineno-1-12)} [](#__codelineno-1-13)console.log(`Done. Received ${count} event(s).`);``

You can also combine a timeout with programmatic cancellation using `AbortSignal.any()`. Using the same setup, replace everything from `const controller` onwards with:

TypeScript

`[](#__codelineno-2-1)const controller = new AbortController(); [](#__codelineno-2-2)[](#__codelineno-2-3)// Cancel on timeout OR programmatically via controller.abort() [](#__codelineno-2-4)// e.g.: cancelButton.addEventListener('click', () => controller.abort()); [](#__codelineno-2-5)const combinedSignal = AbortSignal.any([   [](#__codelineno-2-6)  controller.signal,  [](#__codelineno-2-7)  AbortSignal.timeout(60_000), [](#__codelineno-2-8)]); [](#__codelineno-2-9)[](#__codelineno-2-10)const run = runner.runAsync({   [](#__codelineno-2-11)  userId: session.userId,  [](#__codelineno-2-12)  sessionId: session.id,  [](#__codelineno-2-13)  newMessage: { role: 'user', parts: [{ text: 'Tell me about quantum computing.' }] },  [](#__codelineno-2-14)  abortSignal: combinedSignal, [](#__codelineno-2-15)});`

### AbortSignal in custom tools[¶](#abortsignal-in-custom-tools "Permanent link")

When you pass an `AbortSignal` to `runner.runAsync()`, it is available on `toolContext.abortSignal` inside your custom tools. The following example shows the pattern for checking the abort signal inside a custom tool:

TypeScript

`[](#__codelineno-3-1)import { FunctionTool } from '@google/adk'; [](#__codelineno-3-2)import { z } from 'zod'; [](#__codelineno-3-3)[](#__codelineno-3-4)const fetchItems = async (id: string) => ['item1', 'item2', 'item3']; [](#__codelineno-3-5)const processItem = async (item: string) => ({ processed: item }); [](#__codelineno-3-6)[](#__codelineno-3-7)const longRunningTool = new FunctionTool({   [](#__codelineno-3-8)  name: 'process_data',  [](#__codelineno-3-9)  description: 'Processes data in multiple steps.',  [](#__codelineno-3-10)  parameters: z.object({    [](#__codelineno-3-11)    dataId: z.string(),  [](#__codelineno-3-12)  }),  [](#__codelineno-3-13)  execute: async (args, toolContext) => {    [](#__codelineno-3-14)    const items = await fetchItems(args.dataId); [](#__codelineno-3-15)    [](#__codelineno-3-16)    const results = [];    [](#__codelineno-3-17)    for (const item of items) {      [](#__codelineno-3-18)      // Check the abort signal before each step      [](#__codelineno-3-19)      if (toolContext?.abortSignal?.aborted) {        [](#__codelineno-3-20)        return { status: 'cancelled', processed: results.length };      [](#__codelineno-3-21)      } [](#__codelineno-3-22)      [](#__codelineno-3-23)      results.push(await processItem(item));    [](#__codelineno-3-24)    } [](#__codelineno-3-25)    [](#__codelineno-3-26)    return { status: 'complete', processed: results.length };  [](#__codelineno-3-27)  }, [](#__codelineno-3-28)});`

Back to top