---
title: "Callbacks: Observe, Customize, and Control Agent Behavior - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/callbacks/
date: 2026-10-10T19:16:28.472Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../get-started/)
        
        Get Started
        
        -   [Python](../get-started/python/)
        -   [TypeScript](../get-started/typescript/)
        -   [Go](../get-started/go/)
        -   [Java](../get-started/java/)
        -   [Kotlin](../get-started/kotlin/)
        -   [Agents CLI](../get-started/agents-cli/)
        -   [Installation](../get-started/installation/)
        -   [Google Cloud](../get-started/google-cloud/)
        -   [Migrate to ADK](../get-started/migrate/)
        
    -   [Build your Agent](../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../tutorials/multi-tool-agent/)
        -   [Agent team](../tutorials/agent-team/)
        -   [Code with AI](../tutorials/coding-with-ai/)
        -   [Agent Config](../agents/config/)
        
    -   [Agents](../agents/)
        
        Agents
        
        -   [Simple agents](../agents/llm-agents/)
        -   [Managed agents](../agents/managed-agents/)
        
    -   [Graph Workflows](../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../graphs/routes/)
        -   [Data handling](../graphs/data-handling/)
        -   [Human input](../graphs/human-input/)
        -   [Dynamic workflows](../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../workflows/collaboration/)
        -   [Template workflows](../agents/workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../agents/workflow-agents/sequential-agents/)
            -   [Loop workflow](../agents/workflow-agents/loop-agents/)
            -   [Parallel workflow](../agents/workflow-agents/parallel-agents/)
            -   [Custom template workflows](../agents/custom-agents/)
            
        -   [Agent routing](../agents/routing/)
        -   [Workflow patterns](../workflows/patterns/)
        
    -   [Models for Agents](../agents/models/)
        
        Models for Agents
        
        -   [Gemini](../agents/models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../agents/models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../agents/models/google-gemma/)
        -   [Claude](../agents/models/anthropic/)
        -   [Agent Platform hosted](../agents/models/agent-platform/)
        -   [Apigee AI Gateway](../agents/models/apigee/)
        -   [Model routing](../agents/models/routing/)
        -   [OpenAI](../agents/models/openai/)
        -   [Ollama](../agents/models/ollama/)
        -   [vLLM](../agents/models/vllm/)
        -   [LiteLLM](../agents/models/litellm/)
        -   [LiteRT-LM](../agents/models/litert-lm/)
        
    
-    Run Agents
    
    Run Agents
    
    -   [Agent Runtime](../runtime/)
        
        Agent Runtime
        
        -   [Web Interface](../runtime/web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../visual-builder/)
            
        -   [Command Line](../runtime/command-line/)
        -   [API Server](../runtime/api-server/)
        -   [Ambient Agents](../runtime/ambient-agents/)
        -   [Resume Agents](../runtime/resume/)
        -   [Cancel Agent Runs](../runtime/cancel/)
        -   [Runtime Config](../runtime/runconfig/)
        -   [Event Loop](../runtime/event-loop/)
        
    -   [Deployment](../deploy/)
        
        Deployment
        
        -   [Agent Runtime](../deploy/agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../deploy/agent-runtime/deploy/)
            -   [agents-cli](../deploy/agent-runtime/agents-cli/)
            -   [Test deployed agents](../deploy/agent-runtime/test/)
            
        -   [Cloud Run](../deploy/cloud-run/)
        -   [GKE](../deploy/gke/)
        
    -   [Observability](../observability/)
        
        Observability
        
        -   [Logging](../observability/logging/)
        -   [Metrics](../observability/metrics/)
        -   [Traces](../observability/traces/)
        
    -   [Evaluation](../evaluate/)
        
        Evaluation
        
        -   [Criteria](../evaluate/criteria/)
        -   [User Simulation](../evaluate/user-sim/)
        -   [Environment Simulation](../evaluate/environment_simulation/)
        -   [Custom Metrics](../evaluate/custom_metrics/)
        -   [Optimization](../optimize/)
        
    -   [Safety and Security](../safety/)
        
        Safety and Security
        
    
-    Components
    
    Components
    
    -   [Technical Overview](../get-started/about/)
    -   [Custom Tools](../tools-custom/)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../tools-custom/function-tools/)
            -   [Tool performance](../tools-custom/performance/)
            -   [Action confirmations](../tools-custom/confirmation/)
            
        -   [MCP tools](../tools-custom/mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../tools-custom/mcp-tools/advanced/)
            -   [Deployment](../tools-custom/mcp-tools/deployment/)
            -   [Agent as MCP server](../tools-custom/mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../tools-custom/mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../tools-custom/openapi-tools/)
        -   [Authentication](../tools-custom/authentication/)
        -   [Tool limitations](../tools/limitations/)
        
    -   [Artifacts](../artifacts/)
        
        Artifacts
        
    -   [Skills for Agents](../skills/)
        
        Skills for Agents
        
    -   [App management](../apps/)
        
        App management
        
        -   [Callbacks](./)
            
            Callbacks
            
            -   [Types of callbacks](types-of-callbacks/)
            -   [Callback patterns](design-patterns-and-best-practices/)
            
        -   [Plugins](../plugins/)
        
    -   [Agent context](../context/)
        
        Agent context
        
        -   [Conversational context](../sessions/)
        -   [Sessions](../sessions/session/)
            
            Sessions
            
            -   [Rewind sessions](../sessions/session/rewind/)
            -   [Migrate sessions](../sessions/session/migrate/)
            
        -   [State](../sessions/state/)
        -   [Events](../events/)
        -   [Memory](../sessions/memory/)
        -   [Context compression](../context/compaction/)
        -   [Model context caching](../context/caching/)
        
    -   [A2A Protocol](../a2a/)
        
        A2A Protocol
        
        -   [Introduction to A2A](../a2a/intro/)
        -    A2A Quickstart (Exposing)
            
            A2A Quickstart (Exposing)
            
            -   [Python](../a2a/quickstart-exposing/)
            -   [Go](../a2a/quickstart-exposing-go/)
            -   [Java](../a2a/quickstart-exposing-java/)
            
        -    A2A Quickstart (Consuming)
            
            A2A Quickstart (Consuming)
            
            -   [Python](../a2a/quickstart-consuming/)
            -   [Go](../a2a/quickstart-consuming-go/)
            -   [Java](../a2a/quickstart-consuming-java/)
            -   [Kotlin](../a2a/quickstart-consuming-kotlin/)
            
        -   [A2A Extension](../a2a/a2a-extension/)
        
    -   [Live and Voice Agents](../live/)
        
        Live and Voice Agents
        
        -   [Get started](../live/get-started/)
            
            Get started
            
            -   [Python](../live/get-started/streaming-python/)
            -   [Java](../live/get-started/streaming-java/)
            
        -    Building
            
            Building
            
            -   [Workflows](../live/workflows/)
            -   [Tools](../live/tools/)
            -   [Sessions](../live/sessions/)
            -   [Events](../live/events/)
            -   [Audio and video](../live/audio-video/)
            -   [Configuration](../live/configuration/)
            
        -    Production
            
            Production
            
            -   [Guardrails](../live/guardrails/)
            -   [Evaluation](../live/evaluation/)
            -   [Build a custom server](../live/custom-server/)
            
        -   [Supported models](../live/models/)
        
    -   [Grounding](../grounding/)
        
        Grounding
        
        -   [Google Search Grounding](../grounding/google_search_grounding/)
        -   [Grounding with Search](../grounding/grounding_with_search/)
        
    
-   [Integrations](../integrations/)
    
    Integrations
    
-    Reference
    
    Reference
    
    -   [API Reference](../api-reference/)
        
        API Reference
        
        -   [Python ADK](../api-reference/python/)
        -   [TypeScript ADK](../api-reference/typescript/)
        -    Go ADK
            
            Go ADK
            
            -   [Go v2.x](https://pkg.go.dev/google.golang.org/adk/v2)
            -   [Go v1.x](https://pkg.go.dev/google.golang.org/adk)
            
        -   [Java ADK](../api-reference/java/)
        -   [Kotlin ADK](../api-reference/kotlin/)
        -   [CLI Reference](../api-reference/cli/)
        -   [Agent Config Reference](../api-reference/agentconfig/)
        -   [REST API](../api-reference/rest/)
        
    -   [Release Notes](../release-notes/)
    
-   [Community](../community/)
    
    Community
    
    -   [Contributing Guide](../community/contributing-guide/)
    
-   [ADK 2.0](../2.0/)
    
    ADK 2.0
    

Table of contents

-   [The Callback Mechanism: Interception and Control](#the-callback-mechanism-interception-and-control)

1.  [Home](..)
2.  [Components](../get-started/about/)
3.  [App management](../apps/)
4.  [Callbacks](./)

[](https://github.com/google/adk-docs/edit/main/docs/callbacks/index.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Callbacks: Observe, Customize, and Control Agent Behavior[¶](#callbacks-observe-customize-and-control-agent-behavior "Permanent link")

Supported in ADKPython v0.1.0TypeScript v0.2.0Go v0.1.0Java v0.1.0Kotlin v0.1.0

Callbacks are a cornerstone feature of ADK, providing a powerful mechanism to hook into an agent's execution process. They allow you to observe, customize, and even control the agent's behavior at specific, predefined points without modifying the core ADK framework code.

**What are they?** In essence, callbacks are standard functions that you define. You then associate these functions with an agent when you create it. The ADK framework automatically calls your functions at key stages, letting you observe or intervene. Think of it like checkpoints during the agent's process:

-   **Before the agent starts its main work on a request, and after it finishes:** When you ask an agent to do something (e.g., answer a question), it runs its internal logic to figure out the response.
-   The `Before Agent` callback executes *right before* this main work begins for that specific request.
-   The `After Agent` callback executes *right after* the agent has finished all its steps for that request and has prepared the final result, but just before the result is returned.
-   This "main work" encompasses the agent's *entire* process for handling that single request. This might involve deciding to call an LLM, actually calling the LLM, deciding to use a tool, using the tool, processing the results, and finally putting together the answer. These callbacks essentially wrap the whole sequence from receiving the input to producing the final output for that one interaction.
-   **Before sending a request to, or after receiving a response from, the Large Language Model (LLM):** These callbacks (`Before Model`, `After Model`) allow you to inspect or modify the data going to and coming from the LLM specifically.
-   **Before executing a tool (like a Python function or another agent) or after it finishes:** Similarly, `Before Tool` and `After Tool` callbacks give you control points specifically around the execution of tools invoked by the agent.

![intro_components.png](./images/img_433758da02.png)

**Why use them?** Callbacks unlock significant flexibility and enable advanced agent capabilities:

-   **Observe & Debug:** Log detailed information at critical steps for monitoring and troubleshooting.
-   **Customize & Control:** Modify data flowing through the agent (like LLM requests or tool results) or even bypass certain steps entirely based on your logic.
-   **Implement Guardrails:** Enforce safety rules, validate inputs/outputs, or prevent disallowed operations.
-   **Manage State:** Read or dynamically update the agent's session state during execution.
-   **Integrate & Enhance:** Trigger external actions (API calls, notifications) or add features like caching.

Tip

When implementing security guardrails and policies, use ADK Plugins for better modularity and flexibility than Callbacks. For more details, see [Callbacks and Plugins for Security Guardrails](/safety/#callbacks-and-plugins-for-security-guardrails).

**How are they added:**

Code

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-0-1)from google.adk.agents import LlmAgent [](#__codelineno-0-2)from google.adk.agents.callback_context import CallbackContext [](#__codelineno-0-3)from google.adk.models import LlmResponse, LlmRequest [](#__codelineno-0-4)from typing import Optional [](#__codelineno-0-5)[](#__codelineno-0-6)# --- Define your callback function --- [](#__codelineno-0-7)def my_before_model_logic(     [](#__codelineno-0-8)    callback_context: CallbackContext, llm_request: LlmRequest [](#__codelineno-0-9)) -> Optional[LlmResponse]:     [](#__codelineno-0-10)    print(f"Callback running before model call for agent: {callback_context.agent_name}")    [](#__codelineno-0-11)    # ... your custom logic here ...    [](#__codelineno-0-12)    return None # Allow the model call to proceed [](#__codelineno-0-13)[](#__codelineno-0-14)# --- Register it during Agent creation --- [](#__codelineno-0-15)my_agent = LlmAgent(     [](#__codelineno-0-16)    name="MyCallbackAgent",    [](#__codelineno-0-17)    model="gemini-2.0-flash", # Or your desired model    [](#__codelineno-0-18)    instruction="Be helpful.",    [](#__codelineno-0-19)    # Other agent parameters...    [](#__codelineno-0-20)    before_model_callback=my_before_model_logic # Pass the function here [](#__codelineno-0-21))`

``[](#__codelineno-1-1)import { LlmAgent, InMemoryRunner, Context, LlmRequest, LlmResponse, Event, isFinalResponse } from '@google/adk'; [](#__codelineno-1-2)import { createUserContent } from "@google/genai"; [](#__codelineno-1-3)import type { Content } from "@google/genai"; [](#__codelineno-1-4)[](#__codelineno-1-5)const MODEL_NAME = "gemini-2.5-flash"; [](#__codelineno-1-6)const APP_NAME = "basic_callback_app"; [](#__codelineno-1-7)const USER_ID = "test_user_basic"; [](#__codelineno-1-8)const SESSION_ID = "session_basic_001"; [](#__codelineno-1-9) [](#__codelineno-1-10)[](#__codelineno-1-11)// --- Define your callback function --- [](#__codelineno-1-12)function myBeforeModelLogic({   [](#__codelineno-1-13)  context,  [](#__codelineno-1-14)  request, [](#__codelineno-1-15)}: {   [](#__codelineno-1-16)  context: Context;  [](#__codelineno-1-17)  request: LlmRequest; [](#__codelineno-1-18)}): LlmResponse | undefined {   [](#__codelineno-1-19)  console.log(    [](#__codelineno-1-20)    `Callback running before model call for agent: ${context.agentName}`  [](#__codelineno-1-21)  );  [](#__codelineno-1-22)  // ... your custom logic here ...  [](#__codelineno-1-23)  return undefined; // Allow the model call to proceed [](#__codelineno-1-24)} [](#__codelineno-1-25)[](#__codelineno-1-26)// --- Register it during Agent creation --- [](#__codelineno-1-27)const myAgent = new LlmAgent({   [](#__codelineno-1-28)  name: "MyCallbackAgent",  [](#__codelineno-1-29)  model: MODEL_NAME,  [](#__codelineno-1-30)  instruction: "Be helpful.",  [](#__codelineno-1-31)  beforeModelCallback: myBeforeModelLogic, [](#__codelineno-1-32)});``

`[](#__codelineno-2-1)package main [](#__codelineno-2-2)[](#__codelineno-2-3)import (     [](#__codelineno-2-4)    "context"    [](#__codelineno-2-5)    "fmt"    [](#__codelineno-2-6)    "log"    [](#__codelineno-2-7)    "strings" [](#__codelineno-2-8)    [](#__codelineno-2-9)    "google.golang.org/adk/v2/agent"    [](#__codelineno-2-10)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-2-11)    "google.golang.org/adk/v2/model"    [](#__codelineno-2-12)    "google.golang.org/adk/v2/model/gemini"    [](#__codelineno-2-13)    "google.golang.org/adk/v2/runner"    [](#__codelineno-2-14)    "google.golang.org/adk/v2/session"    [](#__codelineno-2-15)    "google.golang.org/genai" [](#__codelineno-2-16)) [](#__codelineno-2-17) [](#__codelineno-2-18) [](#__codelineno-2-19)[](#__codelineno-2-20)// onBeforeModel is a callback function that gets triggered before an LLM call. [](#__codelineno-2-21)func onBeforeModel(ctx agent.Context, req *model.LLMRequest) (*model.LLMResponse, error) {     [](#__codelineno-2-22)    log.Println("--- onBeforeModel Callback Triggered ---")    [](#__codelineno-2-23)    log.Printf("Model Request to be sent: %v\n", req)    [](#__codelineno-2-24)    // Returning nil allows the default LLM call to proceed.    [](#__codelineno-2-25)    return nil, nil [](#__codelineno-2-26)} [](#__codelineno-2-27)[](#__codelineno-2-28)func runBasicExample() {     [](#__codelineno-2-29)    const (        [](#__codelineno-2-30)        appName = "CallbackBasicApp"        [](#__codelineno-2-31)        userID  = "test_user_123"    [](#__codelineno-2-32)    )    [](#__codelineno-2-33)    ctx := context.Background()    [](#__codelineno-2-34)    geminiModel, err := gemini.NewModel(ctx, modelName, &genai.ClientConfig{})    [](#__codelineno-2-35)    if err != nil {        [](#__codelineno-2-36)        log.Fatalf("Failed to create model: %v", err)    [](#__codelineno-2-37)    } [](#__codelineno-2-38)    [](#__codelineno-2-39)    // Register the callback function in the agent configuration.    [](#__codelineno-2-40)    agentCfg := llmagent.Config{        [](#__codelineno-2-41)        Name:                 "SimpleAgent",        [](#__codelineno-2-42)        Model:                geminiModel,        [](#__codelineno-2-43)        BeforeModelCallbacks: []llmagent.BeforeModelCallback{onBeforeModel},    [](#__codelineno-2-44)    }    [](#__codelineno-2-45)    simpleAgent, err := llmagent.New(agentCfg)    [](#__codelineno-2-46)    if err != nil {        [](#__codelineno-2-47)        log.Fatalf("Failed to create agent: %v", err)    [](#__codelineno-2-48)    } [](#__codelineno-2-49)    [](#__codelineno-2-50)    sessionService := session.InMemoryService()    [](#__codelineno-2-51)    r, err := runner.New(runner.Config{        [](#__codelineno-2-52)        AppName:        appName,        [](#__codelineno-2-53)        Agent:          simpleAgent,        [](#__codelineno-2-54)        SessionService: sessionService,    [](#__codelineno-2-55)    })    [](#__codelineno-2-56)    if err != nil {        [](#__codelineno-2-57)        log.Fatalf("Failed to create runner: %v", err)    [](#__codelineno-2-58)    }`

`[](#__codelineno-3-1)import com.google.adk.agents.CallbackContext; [](#__codelineno-3-2)import com.google.adk.agents.Callbacks; [](#__codelineno-3-3)import com.google.adk.agents.LlmAgent; [](#__codelineno-3-4)import com.google.adk.models.LlmRequest; [](#__codelineno-3-5)import java.util.Optional; [](#__codelineno-3-6)[](#__codelineno-3-7)public class AgentWithBeforeModelCallback { [](#__codelineno-3-8)  [](#__codelineno-3-9)  public static void main(String[] args) {    [](#__codelineno-3-10)    // --- Define your callback logic ---    [](#__codelineno-3-11)    Callbacks.BeforeModelCallbackSync myBeforeModelLogic =        [](#__codelineno-3-12)        (CallbackContext callbackContext, LlmRequest llmRequest) -> {          [](#__codelineno-3-13)          System.out.println(              [](#__codelineno-3-14)              "Callback running before model call for agent: " + callbackContext.agentName());          [](#__codelineno-3-15)          // ... your custom logic here ... [](#__codelineno-3-16)          [](#__codelineno-3-17)          // Return Optional.empty() to allow the model call to proceed,          [](#__codelineno-3-18)          // similar to returning None in the Python example.          [](#__codelineno-3-19)          // If you wanted to return a response and skip the model call,          [](#__codelineno-3-20)          // you would return Optional.of(yourLlmResponse).          [](#__codelineno-3-21)          return Optional.empty();        [](#__codelineno-3-22)        }; [](#__codelineno-3-23)    [](#__codelineno-3-24)    // --- Register it during Agent creation ---    [](#__codelineno-3-25)    LlmAgent myAgent =        [](#__codelineno-3-26)        LlmAgent.builder()            [](#__codelineno-3-27)            .name("MyCallbackAgent")            [](#__codelineno-3-28)            .model("gemini-2.0-flash") // Or your desired model            [](#__codelineno-3-29)            .instruction("Be helpful.")            [](#__codelineno-3-30)            // Other agent parameters...            [](#__codelineno-3-31)            .beforeModelCallbackSync(myBeforeModelLogic) // Pass the callback implementation here            [](#__codelineno-3-32)            .build();  [](#__codelineno-3-33)  } [](#__codelineno-3-34)}`

`[](#__codelineno-4-1)val agent =     [](#__codelineno-4-2)    LlmAgent(        [](#__codelineno-4-3)        name = "callback_agent",        [](#__codelineno-4-4)        model = Gemini(name = "gemini-flash-latest"),        [](#__codelineno-4-5)        beforeAgentCallbacks =            [](#__codelineno-4-6)            listOf(                [](#__codelineno-4-7)                BeforeAgentCallback { context ->                    [](#__codelineno-4-8)                    println("Before Agent Callback triggered")                    [](#__codelineno-4-9)                    CallbackChoice.Continue(context.eventActions)                [](#__codelineno-4-10)                },            [](#__codelineno-4-11)            ),        [](#__codelineno-4-12)        afterAgentCallbacks =            [](#__codelineno-4-13)            listOf(                [](#__codelineno-4-14)                AfterAgentCallback { context ->                    [](#__codelineno-4-15)                    println("After Agent Callback triggered")                    [](#__codelineno-4-16)                    CallbackChoice.Continue(Unit)                [](#__codelineno-4-17)                },            [](#__codelineno-4-18)            ),        [](#__codelineno-4-19)        beforeModelCallbacks =            [](#__codelineno-4-20)            listOf(                [](#__codelineno-4-21)                BeforeModelCallback { context, request ->                    [](#__codelineno-4-22)                    println("Before Model Callback triggered")                    [](#__codelineno-4-23)                    CallbackChoice.Continue(request)                [](#__codelineno-4-24)                },            [](#__codelineno-4-25)            ),        [](#__codelineno-4-26)        afterModelCallbacks =            [](#__codelineno-4-27)            listOf(                [](#__codelineno-4-28)                AfterModelCallback { context, response ->                    [](#__codelineno-4-29)                    println("After Model Callback triggered")                    [](#__codelineno-4-30)                    response                [](#__codelineno-4-31)                },            [](#__codelineno-4-32)            ),        [](#__codelineno-4-33)        beforeToolCallbacks =            [](#__codelineno-4-34)            listOf(                [](#__codelineno-4-35)                BeforeToolCallback { context, tool, args ->                    [](#__codelineno-4-36)                    println("Before Tool Callback triggered for ${tool.name}")                    [](#__codelineno-4-37)                    CallbackChoice.Continue(args)                [](#__codelineno-4-38)                },            [](#__codelineno-4-39)            ),        [](#__codelineno-4-40)        afterToolCallbacks =            [](#__codelineno-4-41)            listOf(                [](#__codelineno-4-42)                AfterToolCallback { context, tool, args, result ->                    [](#__codelineno-4-43)                    println("After Tool Callback triggered for ${tool.name}")                    [](#__codelineno-4-44)                    result                [](#__codelineno-4-45)                },            [](#__codelineno-4-46)            ),    [](#__codelineno-4-47)    )`

## The Callback Mechanism: Interception and Control[¶](#the-callback-mechanism-interception-and-control "Permanent link")

When the ADK framework encounters a point where a callback can run (e.g., just before calling the LLM), it checks if you provided a corresponding callback function for that agent. If you did, the framework executes your function.

**Context is Key:** Your callback function isn't called in isolation. The framework provides special **context objects** (`CallbackContext` or `ToolContext`) as arguments. These objects contain vital information about the current state of the agent's execution, including the invocation details, session state, and potentially references to services like artifacts or memory. You use these context objects to understand the situation and interact with the framework. (See the dedicated "Context Objects" section for full details).

**Controlling the Flow (The Core Mechanism):** The most powerful aspect of callbacks lies in how their **return value** influences the agent's subsequent actions. This is how you intercept and control the execution flow:

1.  **`return None` (Allow Default Behavior):**
    
    -   The specific return type can vary depending on the language. In Java, the equivalent return type is `Optional.empty()`. In Kotlin, it is `CallbackChoice.Continue(value)` (for `before_*` callbacks) or returning the original object (for `after_*` callbacks). Refer to the API documentation for language specific guidance.
    -   This is the standard way to signal that your callback has finished its work (e.g., logging, inspection, minor modifications to input arguments) and that the ADK agent should **proceed with its normal operation**.
    -   For `before_*` callbacks (`before_agent`, `before_model`, `before_tool`), returning `None` means the next step in the sequence occurs, whether that step is running the agent logic, calling the LLM, or executing the tool.
    -   For `after_*` callbacks (`after_agent`, `after_model`, `after_tool`), returning `None` leaves the result just produced untouched, whether that result is the agent's output, the LLM's response, or the tool's result. In Python, returning that result back instead of `None` is not equivalent for `after_agent_callback`: ADK emits a second event carrying the same content.
2.  **`return <Specific Object>` (Override Default Behavior):**
    
    -   Returning a *specific type of object* (instead of signaling "Continue") is how you **override** the ADK agent's default behavior. In Kotlin, this is achieved by returning `CallbackChoice.Break(value)` (for `before_*` callbacks) or a replacement object (for `after_*` callbacks). The framework will use the object you return and *skip* the step that would normally follow or *replace* the result that was just generated.
    -   **`before_agent_callback` → `Content`**: Skips the agent's main execution logic. The returned `Content` object is immediately treated as the agent's final output for this turn. Useful for handling simple requests directly or enforcing access control.
    -   **`before_model_callback` → `LlmResponse`**: Skips the call to the external Large Language Model. The returned `LlmResponse` object is processed as if it were the actual response from the LLM. Ideal for implementing input guardrails, prompt validation, or serving cached responses.
    -   **`before_tool_callback` → Python: `dict`, Kotlin: `Map<String, Any>`**: Skips the execution of the actual tool function (or sub-agent). The returned `dict` or `Map` is used as the result of the tool call, which is then passed back to the LLM. The behavior allows for validating tool arguments, applying policy restrictions, or returning mocked/cached tool results.
    -   **`after_agent_callback` → `Content`**: *Appends* the returned `Content` as an additional event after the output the agent's run logic already produced. It does not replace that output; use `after_model_callback` to change a model response.
    -   **`after_model_callback` → `LlmResponse`**: *Replaces* the `LlmResponse` received from the LLM. Useful for sanitizing outputs, adding standard disclaimers, or modifying the LLM's response structure.
    -   **`after_tool_callback` → Python: `dict`, Kotlin: `Map<String, Any>`**: *Replaces* the result returned by the tool. Allows for post-processing or standardization of tool outputs before they are sent back to the LLM.

**Conceptual Code Example (Guardrail):**

This example demonstrates the common pattern for a guardrail using `before_model_callback`.

Code

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-5-1)# Copyright 2025 Google LLC [](#__codelineno-5-2)# [](#__codelineno-5-3)# Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-5-4)# you may not use this file except in compliance with the License. [](#__codelineno-5-5)# You may obtain a copy of the License at [](#__codelineno-5-6)# [](#__codelineno-5-7)#     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-5-8)# [](#__codelineno-5-9)# Unless required by applicable law or agreed to in writing, software [](#__codelineno-5-10)# distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-5-11)# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-5-12)# See the License for the specific language governing permissions and [](#__codelineno-5-13)# limitations under the License. [](#__codelineno-5-14)[](#__codelineno-5-15)from google.adk.agents import LlmAgent [](#__codelineno-5-16)from google.adk.agents.callback_context import CallbackContext [](#__codelineno-5-17)from google.adk.models import LlmResponse, LlmRequest [](#__codelineno-5-18)from google.adk.runners import Runner [](#__codelineno-5-19)from typing import Optional [](#__codelineno-5-20)from google.genai import types  [](#__codelineno-5-21)from google.adk.sessions import InMemorySessionService [](#__codelineno-5-22)[](#__codelineno-5-23)GEMINI_2_FLASH="gemini-2.0-flash" [](#__codelineno-5-24)[](#__codelineno-5-25)# --- Define the Callback Function --- [](#__codelineno-5-26)def simple_before_model_modifier(     [](#__codelineno-5-27)    callback_context: CallbackContext, llm_request: LlmRequest [](#__codelineno-5-28)) -> Optional[LlmResponse]:     [](#__codelineno-5-29)    """Inspects/modifies the LLM request or skips the call."""    [](#__codelineno-5-30)    agent_name = callback_context.agent_name    [](#__codelineno-5-31)    print(f"[Callback] Before model call for agent: {agent_name}") [](#__codelineno-5-32)    [](#__codelineno-5-33)    # Inspect the last user message in the request contents    [](#__codelineno-5-34)    last_user_message = ""    [](#__codelineno-5-35)    if llm_request.contents and llm_request.contents[-1].role == 'user':         [](#__codelineno-5-36)         if llm_request.contents[-1].parts:            [](#__codelineno-5-37)            last_user_message = llm_request.contents[-1].parts[0].text    [](#__codelineno-5-38)    print(f"[Callback] Inspecting last user message: '{last_user_message}'") [](#__codelineno-5-39)    [](#__codelineno-5-40)    # --- Modification Example ---    [](#__codelineno-5-41)    # Add a prefix to the system instruction    [](#__codelineno-5-42)    original_instruction = llm_request.config.system_instruction or types.Content(role="system", parts=[])    [](#__codelineno-5-43)    prefix = "[Modified by Callback] "    [](#__codelineno-5-44)    # Ensure system_instruction is Content and parts list exists    [](#__codelineno-5-45)    if not isinstance(original_instruction, types.Content):         [](#__codelineno-5-46)         # Handle case where it might be a string (though config expects Content)         [](#__codelineno-5-47)         original_instruction = types.Content(role="system", parts=[types.Part(text=str(original_instruction))])    [](#__codelineno-5-48)    if not original_instruction.parts:        [](#__codelineno-5-49)        original_instruction.parts.append(types.Part(text="")) # Add an empty part if none exist [](#__codelineno-5-50)    [](#__codelineno-5-51)    # Modify the text of the first part    [](#__codelineno-5-52)    modified_text = prefix + (original_instruction.parts[0].text or "")    [](#__codelineno-5-53)    original_instruction.parts[0].text = modified_text    [](#__codelineno-5-54)    llm_request.config.system_instruction = original_instruction    [](#__codelineno-5-55)    print(f"[Callback] Modified system instruction to: '{modified_text}'") [](#__codelineno-5-56)    [](#__codelineno-5-57)    # --- Skip Example ---    [](#__codelineno-5-58)    # Check if the last user message contains "BLOCK"    [](#__codelineno-5-59)    if "BLOCK" in last_user_message.upper():        [](#__codelineno-5-60)        print("[Callback] 'BLOCK' keyword found. Skipping LLM call.")        [](#__codelineno-5-61)        # Return an LlmResponse to skip the actual LLM call        [](#__codelineno-5-62)        return LlmResponse(            [](#__codelineno-5-63)            content=types.Content(                [](#__codelineno-5-64)                role="model",                [](#__codelineno-5-65)                parts=[types.Part(text="LLM call was blocked by before_model_callback.")],            [](#__codelineno-5-66)            )        [](#__codelineno-5-67)        )    [](#__codelineno-5-68)    else:        [](#__codelineno-5-69)        print("[Callback] Proceeding with LLM call.")        [](#__codelineno-5-70)        # Return None to allow the (modified) request to go to the LLM        [](#__codelineno-5-71)        return None [](#__codelineno-5-72) [](#__codelineno-5-73)[](#__codelineno-5-74)# Create LlmAgent and Assign Callback [](#__codelineno-5-75)my_llm_agent = LlmAgent(         [](#__codelineno-5-76)        name="ModelCallbackAgent",        [](#__codelineno-5-77)        model=GEMINI_2_FLASH,        [](#__codelineno-5-78)        instruction="You are a helpful assistant.", # Base instruction        [](#__codelineno-5-79)        description="An LLM agent demonstrating before_model_callback",        [](#__codelineno-5-80)        before_model_callback=simple_before_model_modifier # Assign the function here [](#__codelineno-5-81)) [](#__codelineno-5-82)[](#__codelineno-5-83)APP_NAME = "guardrail_app" [](#__codelineno-5-84)USER_ID = "user_1" [](#__codelineno-5-85)SESSION_ID = "session_001" [](#__codelineno-5-86)[](#__codelineno-5-87)# Session and Runner [](#__codelineno-5-88)async def setup_session_and_runner():     [](#__codelineno-5-89)    session_service = InMemorySessionService()    [](#__codelineno-5-90)    session = await session_service.create_session(app_name=APP_NAME, user_id=USER_ID, session_id=SESSION_ID)    [](#__codelineno-5-91)    runner = Runner(agent=my_llm_agent, app_name=APP_NAME, session_service=session_service)    [](#__codelineno-5-92)    return session, runner [](#__codelineno-5-93) [](#__codelineno-5-94)[](#__codelineno-5-95)# Agent Interaction [](#__codelineno-5-96)async def call_agent_async(query):     [](#__codelineno-5-97)    content = types.Content(role='user', parts=[types.Part(text=query)])    [](#__codelineno-5-98)    session, runner = await setup_session_and_runner()    [](#__codelineno-5-99)    events = runner.run_async(user_id=USER_ID, session_id=SESSION_ID, new_message=content) [](#__codelineno-5-100)    [](#__codelineno-5-101)    async for event in events:        [](#__codelineno-5-102)        if event.is_final_response():            [](#__codelineno-5-103)            final_response = event.content.parts[0].text            [](#__codelineno-5-104)            print("Agent Response: ", final_response) [](#__codelineno-5-105)[](#__codelineno-5-106)# Note: In Colab, you can directly use 'await' at the top level. [](#__codelineno-5-107)# If running this code as a standalone Python script, you'll need to use asyncio.run() or manage the event loop. [](#__codelineno-5-108)await call_agent_async("write a joke on BLOCK")`

``[](#__codelineno-6-1)/**  [](#__codelineno-6-2) * Copyright 2025 Google LLC [](#__codelineno-6-3) * [](#__codelineno-6-4) * Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-6-5) * you may not use this file except in compliance with the License. [](#__codelineno-6-6) * You may obtain a copy of the License at [](#__codelineno-6-7) * [](#__codelineno-6-8) *     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-6-9) * [](#__codelineno-6-10) * Unless required by applicable law or agreed to in writing, software [](#__codelineno-6-11) * distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-6-12) * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-6-13) * See the License for the specific language governing permissions and [](#__codelineno-6-14) * limitations under the License. [](#__codelineno-6-15) */ [](#__codelineno-6-16)[](#__codelineno-6-17)import { LlmAgent, InMemoryRunner, Context, isFinalResponse } from '@google/adk'; [](#__codelineno-6-18)import { createUserContent } from "@google/genai"; [](#__codelineno-6-19)[](#__codelineno-6-20)const MODEL_NAME = "gemini-2.5-flash"; [](#__codelineno-6-21)const APP_NAME = "before_model_callback_app"; [](#__codelineno-6-22)const USER_ID = "test_user_before_model"; [](#__codelineno-6-23)const SESSION_ID_BLOCK = "session_block_model_call"; [](#__codelineno-6-24)const SESSION_ID_NORMAL = "session_normal_model_call"; [](#__codelineno-6-25)[](#__codelineno-6-26)// --- Define the Callback Function --- [](#__codelineno-6-27)function simpleBeforeModelModifier({   [](#__codelineno-6-28)  context,  [](#__codelineno-6-29)  request, [](#__codelineno-6-30)}: {   [](#__codelineno-6-31)  context: Context;  [](#__codelineno-6-32)  request: any; [](#__codelineno-6-33)}): any | undefined {   [](#__codelineno-6-34)  console.log(`[Callback] Before model call for agent: ${context.agentName}`); [](#__codelineno-6-35)  [](#__codelineno-6-36)  // Inspect the last user message in the request contents  [](#__codelineno-6-37)  const lastUserMessage = request.contents?.at(-1)?.parts?.[0]?.text ?? "";  [](#__codelineno-6-38)  console.log(`[Callback] Inspecting last user message: '${lastUserMessage}'`); [](#__codelineno-6-39)  [](#__codelineno-6-40)  // --- Modification Example ---  [](#__codelineno-6-41)  // Add a prefix to the system instruction.  [](#__codelineno-6-42)  // We create a deep copy to avoid modifying the original agent's config object.  [](#__codelineno-6-43)  const modifiedConfig = JSON.parse(JSON.stringify(request.config));  [](#__codelineno-6-44)  const originalInstructionText =    [](#__codelineno-6-45)    modifiedConfig.systemInstruction?.parts?.[0]?.text ?? "";  [](#__codelineno-6-46)  const prefix = "[Modified by Callback] ";  [](#__codelineno-6-47)  modifiedConfig.systemInstruction = {    [](#__codelineno-6-48)    role: "system",    [](#__codelineno-6-49)    parts: [{ text: prefix + originalInstructionText }],  [](#__codelineno-6-50)  };  [](#__codelineno-6-51)  request.config = modifiedConfig; // Assign the modified config back to the request  [](#__codelineno-6-52)  console.log(    [](#__codelineno-6-53)    `[Callback] Modified system instruction to: '${modifiedConfig.systemInstruction.parts[0].text}'`  [](#__codelineno-6-54)  ); [](#__codelineno-6-55)  [](#__codelineno-6-56)  // --- Skip Example ---  [](#__codelineno-6-57)  // Check if the last user message contains "BLOCK"  [](#__codelineno-6-58)  if (lastUserMessage.toUpperCase().includes("BLOCK")) {    [](#__codelineno-6-59)    console.log("[Callback] 'BLOCK' keyword found. Skipping LLM call.");    [](#__codelineno-6-60)    // Return an LlmResponse to skip the actual LLM call    [](#__codelineno-6-61)    return {      [](#__codelineno-6-62)      content: {        [](#__codelineno-6-63)        role: "model",        [](#__codelineno-6-64)        parts: [          [](#__codelineno-6-65)          { text: "LLM call was blocked by the before_model_callback." },        [](#__codelineno-6-66)        ],      [](#__codelineno-6-67)      },    [](#__codelineno-6-68)    };  [](#__codelineno-6-69)  } [](#__codelineno-6-70)  [](#__codelineno-6-71)  console.log("[Callback] Proceeding with LLM call.");  [](#__codelineno-6-72)  // Return undefined to allow the (modified) request to go to the LLM  [](#__codelineno-6-73)  return undefined; [](#__codelineno-6-74)} [](#__codelineno-6-75)[](#__codelineno-6-76)// --- Create LlmAgent and Assign Callback --- [](#__codelineno-6-77)const myLlmAgent = new LlmAgent({   [](#__codelineno-6-78)  name: "ModelCallbackAgent",  [](#__codelineno-6-79)  model: MODEL_NAME,  [](#__codelineno-6-80)  instruction: "You are a helpful assistant.", // Base instruction  [](#__codelineno-6-81)  description: "An LLM agent demonstrating before_model_callback",  [](#__codelineno-6-82)  beforeModelCallback: simpleBeforeModelModifier, // Assign the function here [](#__codelineno-6-83)}); [](#__codelineno-6-84)[](#__codelineno-6-85)// --- Agent Interaction Logic --- [](#__codelineno-6-86)async function callAgentAndPrint(   [](#__codelineno-6-87)  runner: InMemoryRunner,  [](#__codelineno-6-88)  query: string,  [](#__codelineno-6-89)  sessionId: string [](#__codelineno-6-90)) {   [](#__codelineno-6-91)  console.log(`\n>>> Calling Agent with query: "${query}"`); [](#__codelineno-6-92)  [](#__codelineno-6-93)  let finalResponseContent = "No final response received.";  [](#__codelineno-6-94)  const events = runner.runAsync({ userId: USER_ID, sessionId, newMessage: createUserContent(query) }); [](#__codelineno-6-95)  [](#__codelineno-6-96)  for await (const event of events) {    [](#__codelineno-6-97)    if (isFinalResponse(event) && event.content?.parts?.length) {      [](#__codelineno-6-98)      finalResponseContent = event.content.parts        [](#__codelineno-6-99)        .map((part: { text?: string }) => part.text ?? "")        [](#__codelineno-6-100)        .join("");    [](#__codelineno-6-101)    }  [](#__codelineno-6-102)  }  [](#__codelineno-6-103)  console.log("<<< Agent Response: ", finalResponseContent); [](#__codelineno-6-104)} [](#__codelineno-6-105)[](#__codelineno-6-106)// --- Run Interactions --- [](#__codelineno-6-107)async function main() {   [](#__codelineno-6-108)  const runner = new InMemoryRunner({ agent: myLlmAgent, appName: APP_NAME }); [](#__codelineno-6-109)  [](#__codelineno-6-110)  // Scenario 1: The callback will find "BLOCK" and skip the model call  [](#__codelineno-6-111)  await runner.sessionService.createSession({    [](#__codelineno-6-112)    appName: APP_NAME,    [](#__codelineno-6-113)    userId: USER_ID,    [](#__codelineno-6-114)    sessionId: SESSION_ID_BLOCK,  [](#__codelineno-6-115)  });  [](#__codelineno-6-116)  await callAgentAndPrint(    [](#__codelineno-6-117)    runner,    [](#__codelineno-6-118)    "write a joke about BLOCK",    [](#__codelineno-6-119)    SESSION_ID_BLOCK  [](#__codelineno-6-120)  ); [](#__codelineno-6-121)  [](#__codelineno-6-122)  // Scenario 2: The callback will modify the instruction and proceed  [](#__codelineno-6-123)  await runner.sessionService.createSession({    [](#__codelineno-6-124)    appName: APP_NAME,    [](#__codelineno-6-125)    userId: USER_ID,    [](#__codelineno-6-126)    sessionId: SESSION_ID_NORMAL,  [](#__codelineno-6-127)  });  [](#__codelineno-6-128)  await callAgentAndPrint(runner, "write a short poem", SESSION_ID_NORMAL); [](#__codelineno-6-129)} [](#__codelineno-6-130)[](#__codelineno-6-131)main();``

`[](#__codelineno-7-1)package main [](#__codelineno-7-2)[](#__codelineno-7-3)import (     [](#__codelineno-7-4)    "context"    [](#__codelineno-7-5)    "fmt"    [](#__codelineno-7-6)    "log"    [](#__codelineno-7-7)    "strings" [](#__codelineno-7-8)    [](#__codelineno-7-9)    "google.golang.org/adk/v2/agent"    [](#__codelineno-7-10)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-7-11)    "google.golang.org/adk/v2/model"    [](#__codelineno-7-12)    "google.golang.org/adk/v2/model/gemini"    [](#__codelineno-7-13)    "google.golang.org/adk/v2/runner"    [](#__codelineno-7-14)    "google.golang.org/adk/v2/session"    [](#__codelineno-7-15)    "google.golang.org/genai" [](#__codelineno-7-16)) [](#__codelineno-7-17) [](#__codelineno-7-18) [](#__codelineno-7-19)[](#__codelineno-7-20)// onBeforeModelGuardrail is a callback that inspects the LLM request. [](#__codelineno-7-21)// If it contains a forbidden topic, it blocks the request and returns a [](#__codelineno-7-22)// predefined response. Otherwise, it allows the request to proceed. [](#__codelineno-7-23)func onBeforeModelGuardrail(ctx agent.Context, req *model.LLMRequest) (*model.LLMResponse, error) {     [](#__codelineno-7-24)    log.Println("--- onBeforeModelGuardrail Callback Triggered ---") [](#__codelineno-7-25)    [](#__codelineno-7-26)    // Inspect the request content for forbidden topics.    [](#__codelineno-7-27)    for _, content := range req.Contents {        [](#__codelineno-7-28)        for _, part := range content.Parts {            [](#__codelineno-7-29)            if strings.Contains(part.Text, "finance") {                [](#__codelineno-7-30)                log.Println("Forbidden topic 'finance' detected. Blocking LLM call.")                [](#__codelineno-7-31)                // By returning a non-nil response, we override the default behavior                [](#__codelineno-7-32)                // and prevent the actual LLM call.                [](#__codelineno-7-33)                return &model.LLMResponse{                    [](#__codelineno-7-34)                    Content: &genai.Content{                        [](#__codelineno-7-35)                        Parts: []*genai.Part{{Text: "I'm sorry, but I cannot discuss financial topics."}},                        [](#__codelineno-7-36)                        Role:  "model",                    [](#__codelineno-7-37)                    },                [](#__codelineno-7-38)                }, nil            [](#__codelineno-7-39)            }        [](#__codelineno-7-40)        }    [](#__codelineno-7-41)    } [](#__codelineno-7-42)    [](#__codelineno-7-43)    log.Println("No forbidden topics found. Allowing LLM call to proceed.")    [](#__codelineno-7-44)    // Returning nil allows the default LLM call to proceed.    [](#__codelineno-7-45)    return nil, nil [](#__codelineno-7-46)} [](#__codelineno-7-47)[](#__codelineno-7-48)func runGuardrailExample() {     [](#__codelineno-7-49)    const (        [](#__codelineno-7-50)        appName = "GuardrailApp"        [](#__codelineno-7-51)        userID  = "test_user_456"    [](#__codelineno-7-52)    )    [](#__codelineno-7-53)    ctx := context.Background()    [](#__codelineno-7-54)    geminiModel, err := gemini.NewModel(ctx, modelName, &genai.ClientConfig{})    [](#__codelineno-7-55)    if err != nil {        [](#__codelineno-7-56)        log.Fatalf("Failed to create model: %v", err)    [](#__codelineno-7-57)    } [](#__codelineno-7-58)    [](#__codelineno-7-59)    agentCfg := llmagent.Config{        [](#__codelineno-7-60)        Name:                 "ChatAgent",        [](#__codelineno-7-61)        Model:                geminiModel,        [](#__codelineno-7-62)        BeforeModelCallbacks: []llmagent.BeforeModelCallback{onBeforeModelGuardrail},    [](#__codelineno-7-63)    }    [](#__codelineno-7-64)    chatAgent, err := llmagent.New(agentCfg)    [](#__codelineno-7-65)    if err != nil {        [](#__codelineno-7-66)        log.Fatalf("Failed to create agent: %v", err)    [](#__codelineno-7-67)    } [](#__codelineno-7-68)    [](#__codelineno-7-69)    sessionService := session.InMemoryService()    [](#__codelineno-7-70)    r, err := runner.New(runner.Config{        [](#__codelineno-7-71)        AppName:        appName,        [](#__codelineno-7-72)        Agent:          chatAgent,        [](#__codelineno-7-73)        SessionService: sessionService,    [](#__codelineno-7-74)    })    [](#__codelineno-7-75)    if err != nil {        [](#__codelineno-7-76)        log.Fatalf("Failed to create runner: %v", err)    [](#__codelineno-7-77)    }`

`[](#__codelineno-8-1)import com.google.adk.agents.CallbackContext; [](#__codelineno-8-2)import com.google.adk.agents.LlmAgent; [](#__codelineno-8-3)import com.google.adk.events.Event; [](#__codelineno-8-4)import com.google.adk.models.LlmRequest; [](#__codelineno-8-5)import com.google.adk.models.LlmResponse; [](#__codelineno-8-6)import com.google.adk.runner.InMemoryRunner; [](#__codelineno-8-7)import com.google.adk.sessions.Session; [](#__codelineno-8-8)import com.google.genai.types.Content; [](#__codelineno-8-9)import com.google.genai.types.GenerateContentConfig; [](#__codelineno-8-10)import com.google.genai.types.Part; [](#__codelineno-8-11)import io.reactivex.rxjava3.core.Flowable; [](#__codelineno-8-12)import java.util.ArrayList; [](#__codelineno-8-13)import java.util.List; [](#__codelineno-8-14)import java.util.Optional; [](#__codelineno-8-15)import java.util.stream.Collectors; [](#__codelineno-8-16)[](#__codelineno-8-17)public class BeforeModelGuardrailExample { [](#__codelineno-8-18)  [](#__codelineno-8-19)  private static final String MODEL_ID = "gemini-2.0-flash";  [](#__codelineno-8-20)  private static final String APP_NAME = "guardrail_app";  [](#__codelineno-8-21)  private static final String USER_ID = "user_1"; [](#__codelineno-8-22)  [](#__codelineno-8-23)  public static void main(String[] args) {    [](#__codelineno-8-24)    BeforeModelGuardrailExample example = new BeforeModelGuardrailExample();    [](#__codelineno-8-25)    example.defineAgentAndRun("Tell me about quantum computing. This is a test.");  [](#__codelineno-8-26)  } [](#__codelineno-8-27)  [](#__codelineno-8-28)  // --- Define your callback logic ---  [](#__codelineno-8-29)  // Looks for the word "BLOCK" in the user prompt and blocks the call to LLM if found.  [](#__codelineno-8-30)  // Otherwise the LLM call proceeds as usual.  [](#__codelineno-8-31)  public Optional<LlmResponse> simpleBeforeModelModifier(      [](#__codelineno-8-32)      CallbackContext callbackContext, LlmRequest llmRequest) {    [](#__codelineno-8-33)    System.out.println("[Callback] Before model call for agent: " + callbackContext.agentName()); [](#__codelineno-8-34)    [](#__codelineno-8-35)    // Inspect the last user message in the request contents    [](#__codelineno-8-36)    String lastUserMessageText = "";    [](#__codelineno-8-37)    List<Content> requestContents = llmRequest.contents();    [](#__codelineno-8-38)    if (requestContents != null && !requestContents.isEmpty()) {      [](#__codelineno-8-39)      Content lastContent = requestContents.get(requestContents.size() - 1);      [](#__codelineno-8-40)      if (lastContent.role().isPresent() && "user".equals(lastContent.role().get())) {        [](#__codelineno-8-41)        lastUserMessageText =            [](#__codelineno-8-42)            lastContent.parts().orElse(List.of()).stream()                [](#__codelineno-8-43)                .flatMap(part -> part.text().stream())                [](#__codelineno-8-44)                .collect(Collectors.joining(" ")); // Concatenate text from all parts      [](#__codelineno-8-45)      }    [](#__codelineno-8-46)    }    [](#__codelineno-8-47)    System.out.println("[Callback] Inspecting last user message: '" + lastUserMessageText + "'"); [](#__codelineno-8-48)    [](#__codelineno-8-49)    String prefix = "[Modified by Callback] ";    [](#__codelineno-8-50)    GenerateContentConfig currentConfig =        [](#__codelineno-8-51)        llmRequest.config().orElse(GenerateContentConfig.builder().build());    [](#__codelineno-8-52)    Optional<Content> optOriginalSystemInstruction = currentConfig.systemInstruction(); [](#__codelineno-8-53)    [](#__codelineno-8-54)    Content conceptualModifiedSystemInstruction;    [](#__codelineno-8-55)    if (optOriginalSystemInstruction.isPresent()) {      [](#__codelineno-8-56)      Content originalSystemInstruction = optOriginalSystemInstruction.get();      [](#__codelineno-8-57)      List<Part> originalParts =          [](#__codelineno-8-58)          new ArrayList<>(originalSystemInstruction.parts().orElse(List.of()));      [](#__codelineno-8-59)      String originalText = ""; [](#__codelineno-8-60)      [](#__codelineno-8-61)      if (!originalParts.isEmpty()) {        [](#__codelineno-8-62)        Part firstPart = originalParts.get(0);        [](#__codelineno-8-63)        if (firstPart.text().isPresent()) {          [](#__codelineno-8-64)          originalText = firstPart.text().get();        [](#__codelineno-8-65)        }        [](#__codelineno-8-66)        originalParts.set(0, Part.fromText(prefix + originalText));      [](#__codelineno-8-67)      } else {        [](#__codelineno-8-68)        originalParts.add(Part.fromText(prefix));      [](#__codelineno-8-69)      }      [](#__codelineno-8-70)      conceptualModifiedSystemInstruction =          [](#__codelineno-8-71)          originalSystemInstruction.toBuilder().parts(originalParts).build();    [](#__codelineno-8-72)    } else {      [](#__codelineno-8-73)      conceptualModifiedSystemInstruction =          [](#__codelineno-8-74)          Content.builder()              [](#__codelineno-8-75)              .role("system")              [](#__codelineno-8-76)              .parts(List.of(Part.fromText(prefix)))              [](#__codelineno-8-77)              .build();    [](#__codelineno-8-78)    } [](#__codelineno-8-79)    [](#__codelineno-8-80)    // This demonstrates building a new LlmRequest with the modified config.    [](#__codelineno-8-81)    llmRequest =        [](#__codelineno-8-82)        llmRequest.toBuilder()            [](#__codelineno-8-83)            .config(                [](#__codelineno-8-84)                currentConfig.toBuilder()                    [](#__codelineno-8-85)                    .systemInstruction(conceptualModifiedSystemInstruction)                    [](#__codelineno-8-86)                    .build())            [](#__codelineno-8-87)            .build(); [](#__codelineno-8-88)    [](#__codelineno-8-89)    System.out.println(        [](#__codelineno-8-90)        "[Callback] Conceptually modified system instruction is: '"            [](#__codelineno-8-91)            + llmRequest.config().get().systemInstruction().get().parts().get().get(0).text().get()); [](#__codelineno-8-92)    [](#__codelineno-8-93)    // --- Skip Example ---    [](#__codelineno-8-94)    // Check if the last user message contains "BLOCK"    [](#__codelineno-8-95)    if (lastUserMessageText.toUpperCase().contains("BLOCK")) {      [](#__codelineno-8-96)      System.out.println("[Callback] 'BLOCK' keyword found. Skipping LLM call.");      [](#__codelineno-8-97)      LlmResponse skipResponse =          [](#__codelineno-8-98)          LlmResponse.builder()              [](#__codelineno-8-99)              .content(                  [](#__codelineno-8-100)                  Content.builder()                      [](#__codelineno-8-101)                      .role("model")                      [](#__codelineno-8-102)                      .parts(                          [](#__codelineno-8-103)                          List.of(                              [](#__codelineno-8-104)                              Part.builder()                                  [](#__codelineno-8-105)                                  .text("LLM call was blocked by before_model_callback.")                                  [](#__codelineno-8-106)                                  .build()))                      [](#__codelineno-8-107)                      .build())              [](#__codelineno-8-108)              .build();      [](#__codelineno-8-109)      return Optional.of(skipResponse);    [](#__codelineno-8-110)    }    [](#__codelineno-8-111)    System.out.println("[Callback] Proceeding with LLM call.");    [](#__codelineno-8-112)    // Return Optional.empty() to allow the (modified) request to go to the LLM    [](#__codelineno-8-113)    return Optional.empty();  [](#__codelineno-8-114)  } [](#__codelineno-8-115)  [](#__codelineno-8-116)  public void defineAgentAndRun(String prompt) {    [](#__codelineno-8-117)    // --- Create LlmAgent and Assign Callback ---    [](#__codelineno-8-118)    LlmAgent myLlmAgent =        [](#__codelineno-8-119)        LlmAgent.builder()            [](#__codelineno-8-120)            .name("ModelCallbackAgent")            [](#__codelineno-8-121)            .model(MODEL_ID)            [](#__codelineno-8-122)            .instruction("You are a helpful assistant.") // Base instruction            [](#__codelineno-8-123)            .description("An LLM agent demonstrating before_model_callback")            [](#__codelineno-8-124)            .beforeModelCallbackSync(this::simpleBeforeModelModifier) // Assign the callback here            [](#__codelineno-8-125)            .build(); [](#__codelineno-8-126)    [](#__codelineno-8-127)    // Session and Runner    [](#__codelineno-8-128)    InMemoryRunner runner = new InMemoryRunner(myLlmAgent, APP_NAME);    [](#__codelineno-8-129)    // InMemoryRunner automatically creates a session service. Create a session using the service    [](#__codelineno-8-130)    Session session = runner.sessionService().createSession(APP_NAME, USER_ID).blockingGet();    [](#__codelineno-8-131)    Content userMessage =        [](#__codelineno-8-132)        Content.fromParts(Part.fromText(prompt)); [](#__codelineno-8-133)    [](#__codelineno-8-134)    // Run the agent    [](#__codelineno-8-135)    Flowable<Event> eventStream = runner.runAsync(USER_ID, session.id(), userMessage); [](#__codelineno-8-136)    [](#__codelineno-8-137)    // Stream event response    [](#__codelineno-8-138)    eventStream.blockingForEach(        [](#__codelineno-8-139)        event -> {          [](#__codelineno-8-140)          if (event.finalResponse()) {            [](#__codelineno-8-141)            System.out.println(event.stringifyContent());          [](#__codelineno-8-142)          }        [](#__codelineno-8-143)        });  [](#__codelineno-8-144)  } [](#__codelineno-8-145)}`

`[](#__codelineno-9-1)val guardrailCallback =     [](#__codelineno-9-2)    BeforeModelCallback { context, request ->        [](#__codelineno-9-3)        val userQuery = request.contents.lastOrNull()?.parts?.firstOrNull()?.text ?: "" [](#__codelineno-9-4)        [](#__codelineno-9-5)        if (userQuery.contains("sensitive info", ignoreCase = true)) {            [](#__codelineno-9-6)            println("Guardrail triggered: Sensitive information requested.")            [](#__codelineno-9-7)            CallbackChoice.Break(                [](#__codelineno-9-8)                LlmResponse(                    [](#__codelineno-9-9)                    content =                        [](#__codelineno-9-10)                        Content(                            [](#__codelineno-9-11)                            role = Role.MODEL,                            [](#__codelineno-9-12)                            parts =                                [](#__codelineno-9-13)                                listOf(                                    [](#__codelineno-9-14)                                    Part(                                        [](#__codelineno-9-15)                                        text = "I'm sorry, I cannot provide sensitive information.",                                    [](#__codelineno-9-16)                                    ),                                [](#__codelineno-9-17)                                ),                        [](#__codelineno-9-18)                        ),                [](#__codelineno-9-19)                ),            [](#__codelineno-9-20)            )        [](#__codelineno-9-21)        } else {            [](#__codelineno-9-22)            CallbackChoice.Continue(request)        [](#__codelineno-9-23)        }    [](#__codelineno-9-24)    }`

By understanding this mechanism of returning `None` versus returning specific objects, you can precisely control the agent's execution path, making callbacks an essential tool for building sophisticated and reliable agents with ADK.

Back to top