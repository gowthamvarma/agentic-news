---
title: "Agent routing - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/routing/
date: 2026-10-10T19:16:24.652Z
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
        -   [Agent Config](../config/)
        
    -   [Agents](../)
        
        Agents
        
        -   [Simple agents](../llm-agents/)
        -   [Managed agents](../managed-agents/)
        
    -   [Graph Workflows](../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../graphs/routes/)
        -   [Data handling](../../graphs/data-handling/)
        -   [Human input](../../graphs/human-input/)
        -   [Dynamic workflows](../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../workflows/collaboration/)
        -   [Template workflows](../workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../workflow-agents/sequential-agents/)
            -   [Loop workflow](../workflow-agents/loop-agents/)
            -   [Parallel workflow](../workflow-agents/parallel-agents/)
            -   [Custom template workflows](../custom-agents/)
            
        -    Agent routing [Agent routing](./)
            
            Table of contents
            
            -   [How routing works](#how-routing-works)
            -   [Basic usage](#basic-usage)
            -   [Fallback on error](#fallback-on-error)
            -   [Planning mode](#planning-mode)
            -   [Auto-routing by complexity](#auto-routing-by-complexity)
            
        -   [Workflow patterns](../../workflows/patterns/)
        
    -   [Models for Agents](../models/)
        
        Models for Agents
        
        -   [Gemini](../models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../models/google-gemma/)
        -   [Claude](../models/anthropic/)
        -   [Agent Platform hosted](../models/agent-platform/)
        -   [Apigee AI Gateway](../models/apigee/)
        -   [Model routing](../models/routing/)
        -   [OpenAI](../models/openai/)
        -   [Ollama](../models/ollama/)
        -   [vLLM](../models/vllm/)
        -   [LiteLLM](../models/litellm/)
        -   [LiteRT-LM](../models/litert-lm/)
        
    
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

-   [How routing works](#how-routing-works)
-   [Basic usage](#basic-usage)
-   [Fallback on error](#fallback-on-error)
-   [Planning mode](#planning-mode)
-   [Auto-routing by complexity](#auto-routing-by-complexity)

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Multi-Agent Workflows](../../workflows/)

[](https://github.com/google/adk-docs/edit/main/docs/agents/routing.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Route between agents[¶](#route-between-agents "Permanent link")

Supported in ADKTypeScript v1.0.0Experimental

Experimental

Agent routing is experimental and may change in future releases. We welcome your [feedback](https://github.com/google/adk-js/issues/new?template=feature_request.md)!

When building agents for different tasks, you can define a routing function that selects which one handles each invocation at runtime. `RoutedAgent` provides this capability, enabling agent fallback on error, A/B testing, planning modes, and auto-routing by input complexity. If the selected agent fails before producing any output, the routing function is called again with error context so it can select a fallback.

`RoutedAgent` is different from [workflow agents](../workflow-agents/) like `SequentialAgent` or `ParallelAgent`, which orchestrate multiple agents in a fixed pattern, and from [LLM-driven delegation](/agents/custom-agents/#delegation), where the LLM decides which agent to hand off to. With `RoutedAgent`, you write an explicit routing function that selects **one** agent per invocation. For model-level routing, see [Model routing](../models/routing/).

## How routing works[¶](#how-routing-works "Permanent link")

Both `RoutedAgent` and [`RoutedLlm`](../models/routing/) are powered by a shared routing utility that handles selection and failover.

The router function receives the map of available agents and the current context, and returns the key of the agent to run. It can be synchronous or async:

TypeScript

`[](#__codelineno-0-1)type AgentRouter = (   [](#__codelineno-0-2)  agents: Readonly<Record<string, BaseAgent>>,  [](#__codelineno-0-3)  context: InvocationContext,  [](#__codelineno-0-4)  errorContext?: { failedKeys: ReadonlySet<string>; lastError: unknown }, [](#__codelineno-0-5)) => Promise<string | undefined> | string | undefined;`

**The `agents` parameter** accepts either a `Record<string, BaseAgent>` with explicit keys, or an array of agents. If an array is provided, each agent's `name` property is used as its key.

**Failover behavior:**

-   The router is first called without `errorContext` to make the initial selection.
-   If the selected agent throws an error **before yielding any events**, the router is called again with `errorContext` containing `failedKeys` and `lastError`.
-   If the selected agent throws an error **after yielding events**, the error propagates directly without retry, because partial results have already been emitted.
-   A key that has already been tried cannot be re-selected. If the router returns a previously failed key, the error propagates.
-   If the router returns `undefined`, routing stops and the last error is thrown.

## Basic usage[¶](#basic-usage "Permanent link")

Create multiple agents, define a router function that returns a key, and wrap them in a `RoutedAgent`. The following example routes between two agents based on an external configuration value that can change between invocations:

TypeScript

`[](#__codelineno-1-1)import { LlmAgent, RoutedAgent, InMemoryRunner } from '@google/adk'; [](#__codelineno-1-2)[](#__codelineno-1-3)const agentA = new LlmAgent({   [](#__codelineno-1-4)  name: 'agent_a',  [](#__codelineno-1-5)  model: 'gemini-flash-latest',  [](#__codelineno-1-6)  instruction: 'You are Agent A. Always identify yourself as Agent A.', [](#__codelineno-1-7)}); [](#__codelineno-1-8)[](#__codelineno-1-9)const agentB = new LlmAgent({   [](#__codelineno-1-10)  name: 'agent_b',  [](#__codelineno-1-11)  model: 'gemini-flash-latest',  [](#__codelineno-1-12)  instruction: 'You are Agent B. Always identify yourself as Agent B.', [](#__codelineno-1-13)}); [](#__codelineno-1-14)[](#__codelineno-1-15)// External configuration that can change at runtime [](#__codelineno-1-16)const config = { selectedAgent: 'agent_a' }; [](#__codelineno-1-17)[](#__codelineno-1-18)const routedAgent = new RoutedAgent({   [](#__codelineno-1-19)  name: 'my_routed_agent',  [](#__codelineno-1-20)  agents: { agent_a: agentA, agent_b: agentB },  [](#__codelineno-1-21)  router: () => config.selectedAgent, [](#__codelineno-1-22)}); [](#__codelineno-1-23)[](#__codelineno-1-24)const runner = new InMemoryRunner({   [](#__codelineno-1-25)  agent: routedAgent,  [](#__codelineno-1-26)  appName: 'my_app', [](#__codelineno-1-27)}); [](#__codelineno-1-28)[](#__codelineno-1-29)const session = await runner.sessionService.createSession({   [](#__codelineno-1-30)  appName: 'my_app',  [](#__codelineno-1-31)  userId: 'user_1', [](#__codelineno-1-32)}); [](#__codelineno-1-33)[](#__codelineno-1-34)const run = runner.runAsync({   [](#__codelineno-1-35)  userId: 'user_1',  [](#__codelineno-1-36)  sessionId: session.id,  [](#__codelineno-1-37)  newMessage: { role: 'user', parts: [{ text: 'Who are you?' }] }, [](#__codelineno-1-38)}); [](#__codelineno-1-39)[](#__codelineno-1-40)for await (const event of run) {   [](#__codelineno-1-41)  if (event.content?.parts?.[0]?.text) {    [](#__codelineno-1-42)    console.log(event.content.parts[0].text);  [](#__codelineno-1-43)  } [](#__codelineno-1-44)}`

Change `config.selectedAgent` to `'agent_b'` before the next invocation to route to a different agent.

## Fallback on error[¶](#fallback-on-error "Permanent link")

When an agent fails, the router is called again with `errorContext` so it can select a fallback. Failover only applies if the agent fails before yielding any events (see [How routing works](#how-routing-works)). The following example checks `errorContext.failedKeys` to avoid re-selecting the failed agent:

TypeScript

`[](#__codelineno-2-1)import {   [](#__codelineno-2-2)  BaseAgent,  [](#__codelineno-2-3)  InvocationContext,  [](#__codelineno-2-4)  LlmAgent,  [](#__codelineno-2-5)  RoutedAgent, [](#__codelineno-2-6)} from '@google/adk'; [](#__codelineno-2-7)[](#__codelineno-2-8)const primaryAgent = new LlmAgent({   [](#__codelineno-2-9)  name: 'primary',  [](#__codelineno-2-10)  model: 'gemini-flash-latest',  [](#__codelineno-2-11)  instruction: 'You are the primary agent.', [](#__codelineno-2-12)}); [](#__codelineno-2-13)[](#__codelineno-2-14)const fallbackAgent = new LlmAgent({   [](#__codelineno-2-15)  name: 'fallback',  [](#__codelineno-2-16)  model: 'gemini-pro-latest',  [](#__codelineno-2-17)  instruction: 'You are the fallback agent.', [](#__codelineno-2-18)}); [](#__codelineno-2-19)[](#__codelineno-2-20)const router = (   [](#__codelineno-2-21)  agents: Readonly<Record<string, BaseAgent>>,  [](#__codelineno-2-22)  context: InvocationContext,  [](#__codelineno-2-23)  // errorContext is provided when a previously selected agent fails  [](#__codelineno-2-24)  errorContext?: { failedKeys: ReadonlySet<string>; lastError: unknown }, [](#__codelineno-2-25)) => {   [](#__codelineno-2-26)  if (!errorContext) {    [](#__codelineno-2-27)    return 'primary'; // Try primary first  [](#__codelineno-2-28)  }  [](#__codelineno-2-29)  if (errorContext.failedKeys.has('primary')) {    [](#__codelineno-2-30)    return 'fallback'; // Fall back if primary failed  [](#__codelineno-2-31)  }  [](#__codelineno-2-32)  return undefined; // No more options, propagate the error [](#__codelineno-2-33)}; [](#__codelineno-2-34)[](#__codelineno-2-35)const routedAgent = new RoutedAgent({   [](#__codelineno-2-36)  name: 'my_routed_agent',  [](#__codelineno-2-37)  agents: { primary: primaryAgent, fallback: fallbackAgent },  [](#__codelineno-2-38)  router, [](#__codelineno-2-39)});`

## Planning mode[¶](#planning-mode "Permanent link")

A router can read any external state to select between agents with different instructions, models, and tools. This lets you implement a planning mode where the agent switches behavior dynamically. For example, a basic agent might have read and write tools, while a planning agent is restricted to read-only access and uses a more powerful model for analysis.

The following example shows a different `RoutedAgent` configuration. See [basic usage](#basic-usage) for the full runner setup.

TypeScript

``[](#__codelineno-3-1)import {   [](#__codelineno-3-2)  FunctionTool,  [](#__codelineno-3-3)  LlmAgent,  [](#__codelineno-3-4)  RoutedAgent, [](#__codelineno-3-5)} from '@google/adk'; [](#__codelineno-3-6)import { z } from 'zod'; [](#__codelineno-3-7)[](#__codelineno-3-8)const readFileTool = new FunctionTool({   [](#__codelineno-3-9)  name: 'read_file',  [](#__codelineno-3-10)  description: 'Reads content from a file.',  [](#__codelineno-3-11)  parameters: z.object({ filePath: z.string() }),  [](#__codelineno-3-12)  execute: (args) => ({ content: `Contents of ${args.filePath}` }), [](#__codelineno-3-13)}); [](#__codelineno-3-14)[](#__codelineno-3-15)const writeFileTool = new FunctionTool({   [](#__codelineno-3-16)  name: 'write_file',  [](#__codelineno-3-17)  description: 'Writes content to a file.',  [](#__codelineno-3-18)  parameters: z.object({ filePath: z.string(), content: z.string() }),  [](#__codelineno-3-19)  execute: (args) => ({ result: `Wrote to ${args.filePath}` }), [](#__codelineno-3-20)}); [](#__codelineno-3-21)[](#__codelineno-3-22)const basicAgent = new LlmAgent({   [](#__codelineno-3-23)  name: 'basic',  [](#__codelineno-3-24)  model: 'gemini-flash-latest',  [](#__codelineno-3-25)  instruction: 'You are a basic assistant. Use tools to help the user.',  [](#__codelineno-3-26)  tools: [readFileTool, writeFileTool], [](#__codelineno-3-27)}); [](#__codelineno-3-28)[](#__codelineno-3-29)const planningAgent = new LlmAgent({   [](#__codelineno-3-30)  name: 'planning',  [](#__codelineno-3-31)  model: 'gemini-flash-latest',  [](#__codelineno-3-32)  instruction: 'You are a planning expert. Analyze carefully. You can only read files.',  [](#__codelineno-3-33)  tools: [readFileTool], [](#__codelineno-3-34)}); [](#__codelineno-3-35)[](#__codelineno-3-36)// Toggle this to switch between basic and planning agents [](#__codelineno-3-37)let planningMode = false; [](#__codelineno-3-38)[](#__codelineno-3-39)const routedAgent = new RoutedAgent({   [](#__codelineno-3-40)  name: 'my_routed_agent',  [](#__codelineno-3-41)  agents: { basic: basicAgent, planning: planningAgent },  [](#__codelineno-3-42)  router: () => (planningMode ? 'planning' : 'basic'), [](#__codelineno-3-43)});``

Set `planningMode = true` before an invocation to route to the planning agent with its restricted tool set and different instructions.

## Auto-routing by complexity[¶](#auto-routing-by-complexity "Permanent link")

The router function can call a lightweight classifier model to categorize input and route to different agents accordingly. Because the router can be async, you can make LLM calls inside it before selecting an agent.

The following example shows a different `RoutedAgent` configuration. See [basic usage](#basic-usage) for the full runner setup.

TypeScript

``[](#__codelineno-4-1)import {   [](#__codelineno-4-2)  BaseAgent,  [](#__codelineno-4-3)  Gemini,  [](#__codelineno-4-4)  InvocationContext,  [](#__codelineno-4-5)  LlmAgent,  [](#__codelineno-4-6)  RoutedAgent, [](#__codelineno-4-7)} from '@google/adk'; [](#__codelineno-4-8)[](#__codelineno-4-9)const simpleAgent = new LlmAgent({   [](#__codelineno-4-10)  name: 'simple',  [](#__codelineno-4-11)  model: 'gemini-flash-latest',  [](#__codelineno-4-12)  instruction: 'You are a simple assistant for basic questions.', [](#__codelineno-4-13)}); [](#__codelineno-4-14)[](#__codelineno-4-15)const complexAgent = new LlmAgent({   [](#__codelineno-4-16)  name: 'complex',  [](#__codelineno-4-17)  model: 'gemini-pro-latest',  [](#__codelineno-4-18)  instruction: 'You are an expert assistant for complex analysis.', [](#__codelineno-4-19)}); [](#__codelineno-4-20)[](#__codelineno-4-21)// Lightweight model to classify input complexity [](#__codelineno-4-22)const classifierModel = new Gemini({ model: 'gemini-flash-latest' }); [](#__codelineno-4-23)[](#__codelineno-4-24)const router = async (   [](#__codelineno-4-25)  agents: Readonly<Record<string, BaseAgent>>,  [](#__codelineno-4-26)  context: InvocationContext, [](#__codelineno-4-27)) => {   [](#__codelineno-4-28)  // Extract the user's input text  [](#__codelineno-4-29)  const text = context.userContent?.parts?.[0]?.text || '';  [](#__codelineno-4-30)  if (!text) return 'simple'; [](#__codelineno-4-31)  [](#__codelineno-4-32)  const prompt =    [](#__codelineno-4-33)    `Classify this request as 'simple' or 'complex'. ` +    [](#__codelineno-4-34)    `Reply with ONLY that word.\nRequest: "${text}"`; [](#__codelineno-4-35)  [](#__codelineno-4-36)  const generator = classifierModel.generateContentAsync({    [](#__codelineno-4-37)    contents: [{ role: 'user', parts: [{ text: prompt }] }],    [](#__codelineno-4-38)    toolsDict: {},    [](#__codelineno-4-39)    liveConnectConfig: {},  [](#__codelineno-4-40)  }); [](#__codelineno-4-41)  [](#__codelineno-4-42)  let classification = '';  [](#__codelineno-4-43)  for await (const resp of generator) {    [](#__codelineno-4-44)    if (resp.content?.parts?.[0]?.text) {      [](#__codelineno-4-45)      classification += resp.content.parts[0].text;    [](#__codelineno-4-46)    }  [](#__codelineno-4-47)  } [](#__codelineno-4-48)  [](#__codelineno-4-49)  return classification.toLowerCase().includes('complex')    [](#__codelineno-4-50)    ? 'complex'    [](#__codelineno-4-51)    : 'simple'; [](#__codelineno-4-52)}; [](#__codelineno-4-53)[](#__codelineno-4-54)const routedAgent = new RoutedAgent({   [](#__codelineno-4-55)  name: 'my_routed_agent',  [](#__codelineno-4-56)  agents: { simple: simpleAgent, complex: complexAgent },  [](#__codelineno-4-57)  router, [](#__codelineno-4-58)});``

Back to top