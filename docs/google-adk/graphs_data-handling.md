---
title: "Data handling - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/graphs/data-handling/
date: 2026-10-10T19:16:35.378Z
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
        
    -   [Graph Workflows](../)
        
        Graph Workflows
        
        -   [Graph routes](../routes/)
        -    Data handling [Data handling](./)
            
            Table of contents
            
            -   [Workflow data flow](#workflow-data-flow)
                
                -   [Node output](#node-output)
                -   [Node output: passing structured data](#node-output-passing-structured-data)
                -   [Routing output](#routing-output)
                -   [User-facing messages](#user-facing-messages)
                -   [Session state and state scopes](#session-state-and-state-scopes)
                
            -   [Constrain node data with schemas](#constrain-node-data-with-schemas)
            -   [Access structured data in agents](#access-structured-data-in-agents)
            
        -   [Human input](../human-input/)
        -   [Dynamic workflows](../dynamic/)
        
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

-   [Workflow data flow](#workflow-data-flow)
    
    -   [Node output](#node-output)
    -   [Node output: passing structured data](#node-output-passing-structured-data)
    -   [Routing output](#routing-output)
    -   [User-facing messages](#user-facing-messages)
    -   [Session state and state scopes](#session-state-and-state-scopes)
    
-   [Constrain node data with schemas](#constrain-node-data-with-schemas)
-   [Access structured data in agents](#access-structured-data-in-agents)

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Graph Workflows](../)

[](https://github.com/google/adk-docs/edit/main/docs/graphs/data-handling.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Data handling for agent workflows[¶](#data-handling-for-agent-workflows "Permanent link")

Supported in ADKPython v2.0.0TypeScript v2.0.0Go v2.0.0

Structuring and managing data between agents and graph-based nodes is critical for building reliable processes with ADK. This guide explains data handling within graph-based workflows and collaboration agents, including how information is transmitted and received between graph nodes. It covers the essential parameters for passing data, content, and state, and explains how to implement structured data transfer for both function and agent nodes using data format schemas and specific instruction syntax.

## Workflow data flow[¶](#workflow-data-flow "Permanent link")

Within a graph-based workflow, nodes pass data to downstream steps through events. A step writes its output to a named event field, and the next step receives it as its typed input.

PythonTypeScriptGo

In Python, data is exchanged between graph nodes using ***Events***. The key parameters for node data handling are:

-   **`output`**: Parameter for passing information between *nodes*.
-   **`message`**: Data intended as a response to a user.
-   **`state`**: Data automatically persisted across nodes via ***Events*** throughout an ADK session.

In ADK TypeScript v2.0.0, nodes exchange data through events. The key fields for node data handling are:

-   **`output`**: the value passed to the next node. Return a value directly and ADK wraps it in an event, or set the field explicitly with `createEvent({output})`.
-   **`content`**: a message for the user. The runtime renders this field, but the graph does not pass it to the next node.
-   **`route`**: the routing keys that select which conditional edge to follow.

Session state is separate from the event. A node reads and writes state through `ctx.state`, and the accumulated delta is attached to that node's events. State keys can carry a prefix that controls their lifetime and scope:

Prefix

Scope

`app:`

Shared across all users and sessions for the app

`user:`

Tied to the user, shared across their sessions

`temp:`

Discarded after the current invocation ends

*(none)*

Persists for the lifetime of the session

In ADK Go v2.0.0, the data-passing mechanism depends on which agent style you use:

**workflow package** (`FunctionNode`, `AgentNode`, `DynamicNode`): nodes communicate through `session.Event` fields, mirroring Python closely:

-   **`Event.Output`**: the node's return value, set automatically by the framework when a `FunctionNode` returns a non-`*genai.Content` value. The successor node receives this as its typed `input` parameter.
-   **`Event.Routes`**: routing keys set explicitly by an emitting node to select which conditional edge to follow — the Go equivalent of Python's `Event(route=...)`.
-   **`Event.NodeInfo`**: scheduler metadata (`path`, `MessageAsOutput`, `OutputFor`). Set by the workflow engine; nodes do not set this directly.

**Prebuilt workflow agents** (`sequentialagent`, `parallelagent`, `loopagent`): these agents communicate through session state:

-   **`OutputKey`** on `llmagent.Config`: the framework writes the agent's final text response to `state[OutputKey]` after each turn.
-   **`ctx.Session().State().Set` / `.Get`**: write or read arbitrary values from state inside custom code.
-   **`{key}` in `Instruction`**: the framework substitutes `state["key"]` into the prompt before calling the model.

State keys may carry a prefix that controls their lifetime and scope:

Prefix constant

Prefix string

Scope

`session.KeyPrefixApp`

`"app:"`

Shared across all users and sessions for the app

`session.KeyPrefixUser`

`"user:"`

Tied to the user, shared across their sessions

`session.KeyPrefixTemp`

`"temp:"`

Discarded after the current invocation ends

*(none)*

—

Persists for the lifetime of the session

### Node output[¶](#node-output "Permanent link")

Each step in a workflow produces output for its successor.

PythonTypeScriptGo

Use the ***return*** or ***yield*** syntax to hand off data to the next node:

`[](#__codelineno-0-1)from google.adk import Event [](#__codelineno-0-2)[](#__codelineno-0-3)def my_function_node(node_input: str):     [](#__codelineno-0-4)    output_value = node_input.upper()    [](#__codelineno-0-5)    return Event(output=output_value) # "THE RESULT"`

Use the ***return*** syntax when outputting ***Event*** data that does not require additional processing. When emitting data that requires additional processing, or if you are generating more than one data item, you can use more than one ***yield*** command. Each ***yield*** call adds to a list of data objects on the Event which is passed to the next node of a graph. A ***return*** or ***yield*** command without a parameter passes a `None` value to the next node.

There are three equivalent ways to produce a node's output: return a value directly, return `createEvent({output})`, or yield events from an async generator to stream progress alongside the result.

``[](#__codelineno-1-1)import { createEvent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-1-2)[](#__codelineno-1-3)const returnRawValue = node(   [](#__codelineno-1-4)  (_ctx: NodeContext, nodeInput: string) => nodeInput.toUpperCase(),  [](#__codelineno-1-5)  { name: 'return_raw_value' }, [](#__codelineno-1-6)); [](#__codelineno-1-7)[](#__codelineno-1-8)const returnEventOutput = node(   [](#__codelineno-1-9)  (_ctx: NodeContext, nodeInput: string) =>    [](#__codelineno-1-10)    createEvent({ output: `${nodeInput}!` }),  [](#__codelineno-1-11)  { name: 'return_event_output' }, [](#__codelineno-1-12)); [](#__codelineno-1-13)[](#__codelineno-1-14)const yieldProgressThenOutput = node(   [](#__codelineno-1-15)  async function* (_ctx: NodeContext, nodeInput: string) {    [](#__codelineno-1-16)    yield createEvent({      [](#__codelineno-1-17)      content: { role: 'model', parts: [{ text: 'Working on it...' }] },    [](#__codelineno-1-18)    });    [](#__codelineno-1-19)    yield createEvent({ output: `<<${nodeInput}>>` });  [](#__codelineno-1-20)  },  [](#__codelineno-1-21)  { name: 'yield_progress_then_output' }, [](#__codelineno-1-22)); [](#__codelineno-1-23)[](#__codelineno-1-24)export const rootAgent = new Workflow({   [](#__codelineno-1-25)  name: 'node_output_workflow',  [](#__codelineno-1-26)  edges: [    [](#__codelineno-1-27)    ['START', returnRawValue, returnEventOutput, yieldProgressThenOutput],  [](#__codelineno-1-28)  ], [](#__codelineno-1-29)});``

Caution: emit `output` from one event per execution

A node can yield any number of events carrying `output`, and ADK does not raise an error in this case. Each event overwrites the previous one, and the successor node receives only the final value. Use `content` for progress messages instead.

**workflow package**: a `FunctionNode` simply returns a typed Go value. The framework automatically wraps the return value in a `session.Event` and sets `Event.Output`. The successor node receives this value as its typed `input` parameter — no manual event construction needed:

``[](#__codelineno-2-1)// newEventOutputPipeline demonstrates the primary data-passing mechanism for [](#__codelineno-2-2)// workflow package nodes: a FunctionNode returns a typed Go value, and the [](#__codelineno-2-3)// framework automatically sets event.Output to that value. The successor node [](#__codelineno-2-4)// receives it as its typed `input` parameter. [](#__codelineno-2-5)// [](#__codelineno-2-6)// This mirrors the Python pattern exactly: [](#__codelineno-2-7)// [](#__codelineno-2-8)//  def my_function_node(node_input: str): [](#__codelineno-2-9)//      return Event(output=node_input.upper()) [](#__codelineno-2-10)// [](#__codelineno-2-11)// In Go, the function simply returns the value — no Event construction needed. [](#__codelineno-2-12)func newEventOutputPipeline() (agent.Agent, error) {     [](#__codelineno-2-13)    upperFn := func(_ agent.Context, input string) (string, error) {        [](#__codelineno-2-14)        return strings.ToUpper(input), nil    [](#__codelineno-2-15)    } [](#__codelineno-2-16)    [](#__codelineno-2-17)    suffixFn := func(_ agent.Context, input string) (string, error) {        [](#__codelineno-2-18)        return input + " IS AWESOME!", nil    [](#__codelineno-2-19)    } [](#__codelineno-2-20)    [](#__codelineno-2-21)    nodeA := workflow.NewFunctionNode("upper", upperFn, workflow.NodeConfig{})    [](#__codelineno-2-22)    nodeB := workflow.NewFunctionNode("suffix", suffixFn, workflow.NodeConfig{}) [](#__codelineno-2-23)    [](#__codelineno-2-24)    // workflow.Chain wires START → nodeA → nodeB. The output of nodeA is    [](#__codelineno-2-25)    // delivered as the typed input of nodeB via event.Output.    [](#__codelineno-2-26)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-2-27)        Name:        "event_output_pipeline",        [](#__codelineno-2-28)        Description: "Demonstrates Event.Output data flow between FunctionNodes.",        [](#__codelineno-2-29)        Edges:       workflow.Chain(workflow.Start, nodeA, nodeB),    [](#__codelineno-2-30)    }) [](#__codelineno-2-31)}``

**Prebuilt workflow agents**: use `OutputKey` on `llmagent.Config` to save an agent's text response to session state, then reference it with `{key}` in downstream agents' `Instruction` templates:

`[](#__codelineno-3-1)// newOutputKeyPipeline demonstrates the OutputKey mechanism for the prebuilt [](#__codelineno-3-2)// sequentialagent. When OutputKey is set on an llmagent.Config, the framework [](#__codelineno-3-3)// automatically writes the agent's final text response to session state under [](#__codelineno-3-4)// that key. Downstream agents read it by referencing {key} in their Instruction. [](#__codelineno-3-5)// [](#__codelineno-3-6)// This pattern applies to sequentialagent / parallelagent / loopagent. [](#__codelineno-3-7)// For the workflow package (FunctionNode / AgentNode), use Event.Output instead. [](#__codelineno-3-8)func newOutputKeyPipeline(ctx context.Context, geminiModel model.LLM) (agent.Agent, error) {     [](#__codelineno-3-9)    step1, err := llmagent.New(llmagent.Config{        [](#__codelineno-3-10)        Name:        "step_1",        [](#__codelineno-3-11)        Model:       geminiModel,        [](#__codelineno-3-12)        Description: "Transforms the user's text.",        [](#__codelineno-3-13)        Instruction: "Convert the user's message to uppercase. Output only the transformed text.",        [](#__codelineno-3-14)        OutputKey:   "upper_result",    [](#__codelineno-3-15)    })    [](#__codelineno-3-16)    if err != nil {        [](#__codelineno-3-17)        return nil, fmt.Errorf("step1: %w", err)    [](#__codelineno-3-18)    } [](#__codelineno-3-19)    [](#__codelineno-3-20)    step2, err := llmagent.New(llmagent.Config{        [](#__codelineno-3-21)        Name:        "step_2",        [](#__codelineno-3-22)        Model:       geminiModel,        [](#__codelineno-3-23)        Description: "Reports the transformed text.",        [](#__codelineno-3-24)        Instruction: "The transformed text is: {upper_result}. Report it to the user.",    [](#__codelineno-3-25)    })    [](#__codelineno-3-26)    if err != nil {        [](#__codelineno-3-27)        return nil, fmt.Errorf("step2: %w", err)    [](#__codelineno-3-28)    } [](#__codelineno-3-29)    [](#__codelineno-3-30)    return sequentialagent.New(sequentialagent.Config{        [](#__codelineno-3-31)        AgentConfig: agent.Config{            [](#__codelineno-3-32)            Name:      "output_key_pipeline",            [](#__codelineno-3-33)            SubAgents: []agent.Agent{step1, step2},        [](#__codelineno-3-34)        },    [](#__codelineno-3-35)    }) [](#__codelineno-3-36)}`

### Node output: passing structured data[¶](#node-output-passing-structured-data "Permanent link")

PythonTypeScriptGo

You can pass longer, structured data in a serializable format:

`[](#__codelineno-4-1)def my_function_node_3():     [](#__codelineno-4-2)    yield Event(        [](#__codelineno-4-3)        output={            [](#__codelineno-4-4)            "city_name": "Paris",            [](#__codelineno-4-5)            "city_time": "10:10 AM",        [](#__codelineno-4-6)        },    [](#__codelineno-4-7)    )`

Caution: Event.output limitation

Nodes are only allowed to emit a single ***Event.output*** data payload per execution. This limitation means that while you can use more than one ***yield*** in a node, having two or more ***yield*** commands with an ***Event.output*** results in a runtime error.

The `output` field is not limited to text. Any serializable value is passed to the next node, which receives it as a typed object, with no JSON parsing or state reads required. Attaching an `outputSchema` to the producing node, or an `inputSchema` to the consuming node, makes the contract explicit and validates it at runtime:

``[](#__codelineno-5-1)import { createEvent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-5-2)import { z } from 'zod'; [](#__codelineno-5-3)[](#__codelineno-5-4)const cityInfoSchema = z.object({   [](#__codelineno-5-5)  cityName: z.string(),  [](#__codelineno-5-6)  cityTime: z.string(), [](#__codelineno-5-7)}); [](#__codelineno-5-8)type CityInfo = z.infer<typeof cityInfoSchema>; [](#__codelineno-5-9)[](#__codelineno-5-10)const emitStructuredOutput = node(   [](#__codelineno-5-11)  async function* () {    [](#__codelineno-5-12)    yield createEvent({      [](#__codelineno-5-13)      output: { cityName: 'Paris', cityTime: '10:10 AM' } satisfies CityInfo,    [](#__codelineno-5-14)    });  [](#__codelineno-5-15)  },  [](#__codelineno-5-16)  { name: 'emit_structured_output', outputSchema: cityInfoSchema }, [](#__codelineno-5-17)); [](#__codelineno-5-18)[](#__codelineno-5-19)const consumeStructuredOutput = node(   [](#__codelineno-5-20)  (_ctx: NodeContext, cityInfo: CityInfo) =>    [](#__codelineno-5-21)    `It is ${cityInfo.cityTime} in ${cityInfo.cityName} right now.`,  [](#__codelineno-5-22)  { name: 'consume_structured_output', inputSchema: cityInfoSchema }, [](#__codelineno-5-23)); [](#__codelineno-5-24)[](#__codelineno-5-25)export const rootAgent = new Workflow({   [](#__codelineno-5-26)  name: 'structured_output_workflow',  [](#__codelineno-5-27)  edges: [['START', emitStructuredOutput, consumeStructuredOutput]], [](#__codelineno-5-28)});``

**workflow package**: a `FunctionNode` can return any JSON-serializable Go struct. The framework serializes it into `Event.Output` and deserializes it back into the successor node's typed `input` parameter. There is no single-payload restriction — each node has exactly one typed return value:

``[](#__codelineno-6-1)// newStructuredOutputPipeline shows how to pass a struct from one FunctionNode [](#__codelineno-6-2)// to another. The framework serialises the return value into event.Output and [](#__codelineno-6-3)// deserialises it back into the successor's typed input parameter. [](#__codelineno-6-4)// [](#__codelineno-6-5)// This is the Go equivalent of: [](#__codelineno-6-6)// [](#__codelineno-6-7)//  class CityTime(BaseModel): [](#__codelineno-6-8)//      time_info: str [](#__codelineno-6-9)//      city: str [](#__codelineno-6-10)// [](#__codelineno-6-11)//  def lookup_time_function(city: str): [](#__codelineno-6-12)//      return Event(output=CityTime(time_info="10:10 AM", city=city)) [](#__codelineno-6-13)// [](#__codelineno-6-14)//  def city_report(node_input: CityTime): [](#__codelineno-6-15)//      return Event(output=f"It is {node_input.time_info} in {node_input.city}.") [](#__codelineno-6-16)type CityTime struct {     [](#__codelineno-6-17)    TimeInfo string `json:"time_info"`    [](#__codelineno-6-18)    City     string `json:"city"` [](#__codelineno-6-19)} [](#__codelineno-6-20)[](#__codelineno-6-21)func newStructuredOutputPipeline(ctx context.Context, geminiModel model.LLM) (agent.Agent, error) {     [](#__codelineno-6-22)    lookupTimeFn := func(_ agent.Context, city string) (CityTime, error) {        [](#__codelineno-6-23)        // Simulate looking up the current time in the city.        [](#__codelineno-6-24)        return CityTime{TimeInfo: "10:10 AM", City: city}, nil    [](#__codelineno-6-25)    } [](#__codelineno-6-26)    [](#__codelineno-6-27)    cityReportAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-6-28)        Name:        "city_report_agent",        [](#__codelineno-6-29)        Model:       geminiModel,        [](#__codelineno-6-30)        Description: "Reports the city and current time from the previous node's output.",        [](#__codelineno-6-31)        // When wrapped as an AgentNode, the predecessor's event.Output        [](#__codelineno-6-32)        // is delivered as the agent's user content. The {key} template        [](#__codelineno-6-33)        // syntax is not required — the struct fields are provided inline.        [](#__codelineno-6-34)        Instruction: "Report the city time information you received in a friendly sentence.",    [](#__codelineno-6-35)    })    [](#__codelineno-6-36)    if err != nil {        [](#__codelineno-6-37)        return nil, fmt.Errorf("cityReportAgent: %w", err)    [](#__codelineno-6-38)    } [](#__codelineno-6-39)    [](#__codelineno-6-40)    lookupTimeNode := workflow.NewFunctionNode("lookup_time", lookupTimeFn, workflow.NodeConfig{})    [](#__codelineno-6-41)    cityReportNode, err := workflow.NewAgentNode(cityReportAgent, workflow.NodeConfig{})    [](#__codelineno-6-42)    if err != nil {        [](#__codelineno-6-43)        return nil, fmt.Errorf("NewAgentNode: %w", err)    [](#__codelineno-6-44)    } [](#__codelineno-6-45)    [](#__codelineno-6-46)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-6-47)        Name:      "city_time_pipeline",        [](#__codelineno-6-48)        Edges:     workflow.Chain(workflow.Start, lookupTimeNode, cityReportNode),        [](#__codelineno-6-49)        SubAgents: []agent.Agent{cityReportAgent},    [](#__codelineno-6-50)    }) [](#__codelineno-6-51)}``

**Prebuilt workflow agents**: use multiple `OutputKey` values, one per agent, to store individual fields in session state. Downstream agents read each field independently via `{key}` in their `Instruction`.

### Routing output[¶](#routing-output "Permanent link")

PythonTypeScriptGo

Use the `route` parameter of an ***Event*** to drive conditional edge dispatch:

`[](#__codelineno-7-1)def router(node_input: str):     [](#__codelineno-7-2)    return Event(route="BUG")`

The `route` value is independent of `output`, so one event can both select a branch and forward a payload to it. The `DEFAULT_ROUTE` setting catches any value that no other branch matched:

``[](#__codelineno-8-1)import {   [](#__codelineno-8-2)  createEvent,  [](#__codelineno-8-3)  DEFAULT_ROUTE,  [](#__codelineno-8-4)  node,  [](#__codelineno-8-5)  NodeContext,  [](#__codelineno-8-6)  Workflow, [](#__codelineno-8-7)} from '@google/adk'; [](#__codelineno-8-8)[](#__codelineno-8-9)const router = node(   [](#__codelineno-8-10)  (_ctx: NodeContext, nodeInput: string) =>    [](#__codelineno-8-11)    createEvent({      [](#__codelineno-8-12)      route: /bug|crash|error/i.test(nodeInput) ? 'BUG' : 'OTHER',      [](#__codelineno-8-13)      output: nodeInput,    [](#__codelineno-8-14)    }),  [](#__codelineno-8-15)  { name: 'router' }, [](#__codelineno-8-16)); [](#__codelineno-8-17)[](#__codelineno-8-18)const handleBug = node(   [](#__codelineno-8-19)  (_ctx: NodeContext, nodeInput: string) => `Filed a bug for: ${nodeInput}`,  [](#__codelineno-8-20)  { name: 'handle_bug' }, [](#__codelineno-8-21)); [](#__codelineno-8-22)[](#__codelineno-8-23)const handleAnythingElse = node(   [](#__codelineno-8-24)  (_ctx: NodeContext, nodeInput: string) => `No bug detected in: ${nodeInput}`,  [](#__codelineno-8-25)  { name: 'handle_anything_else' }, [](#__codelineno-8-26)); [](#__codelineno-8-27)[](#__codelineno-8-28)export const rootAgent = new Workflow({   [](#__codelineno-8-29)  name: 'routing_output_workflow',  [](#__codelineno-8-30)  edges: [    [](#__codelineno-8-31)    ['START', router],    [](#__codelineno-8-32)    [      [](#__codelineno-8-33)      router,      [](#__codelineno-8-34)      {        [](#__codelineno-8-35)        BUG: handleBug,        [](#__codelineno-8-36)        [DEFAULT_ROUTE]: handleAnythingElse,      [](#__codelineno-8-37)      },    [](#__codelineno-8-38)    ],  [](#__codelineno-8-39)  ], [](#__codelineno-8-40)});``

**workflow package**: an emitting `FunctionNode` constructs a `session.Event` directly, sets `Event.Routes` to the desired route keys, and sets `Event.Output` to forward the payload to the successor. The workflow engine reads `Event.Routes` at dispatch time to select the matching edge:

`[](#__codelineno-9-1)// classifyAndRoute shows how to set event.Routes alongside event.Output from [](#__codelineno-9-2)// an emitting FunctionNode. The function constructs a session.Event directly, [](#__codelineno-9-3)// sets Routes to select the conditional edge, and sets Output to forward the [](#__codelineno-9-4)// payload to the successor node. [](#__codelineno-9-5)// [](#__codelineno-9-6)// This mirrors the Python pattern: [](#__codelineno-9-7)// [](#__codelineno-9-8)//  def router(node_input: str): [](#__codelineno-9-9)//      return Event(route="BUG") [](#__codelineno-9-10)func classifyAndRoute(ctx agent.Context, msg string, emit func(*session.Event) error) (any, error) {     [](#__codelineno-9-11)    category := classifyMessage(msg) [](#__codelineno-9-12)    [](#__codelineno-9-13)    ev := session.NewEvent(ctx, ctx.InvocationID())    [](#__codelineno-9-14)    ev.Routes = []string{category} // drives edge dispatch    [](#__codelineno-9-15)    ev.Output = msg                // forwarded as typed input to the successor    [](#__codelineno-9-16)    if err := emit(ev); err != nil {        [](#__codelineno-9-17)        return nil, err    [](#__codelineno-9-18)    }    [](#__codelineno-9-19)    return nil, nil // nil suppresses the automatic terminal event [](#__codelineno-9-20)} [](#__codelineno-9-21)[](#__codelineno-9-22)func classifyMessage(msg string) string {     [](#__codelineno-9-23)    switch {    [](#__codelineno-9-24)    case strings.Contains(strings.ToLower(msg), "bug"):        [](#__codelineno-9-25)        return "BUG"    [](#__codelineno-9-26)    case strings.Contains(strings.ToLower(msg), "help"):        [](#__codelineno-9-27)        return "CUSTOMER_SUPPORT"    [](#__codelineno-9-28)    default:        [](#__codelineno-9-29)        return "LOGISTICS"    [](#__codelineno-9-30)    } [](#__codelineno-9-31)} [](#__codelineno-9-32)[](#__codelineno-9-33)func newRoutingPipeline() (agent.Agent, error) {     [](#__codelineno-9-34)    classifyNode := workflow.NewEmittingFunctionNode("classify", classifyAndRoute, workflow.NodeConfig{}) [](#__codelineno-9-35)    [](#__codelineno-9-36)    bugHandler := workflow.NewFunctionNode("bug_handler",        [](#__codelineno-9-37)        func(_ agent.Context, msg string) (string, error) {            [](#__codelineno-9-38)            return "Handling bug: " + msg, nil        [](#__codelineno-9-39)        }, workflow.NodeConfig{}) [](#__codelineno-9-40)    [](#__codelineno-9-41)    supportHandler := workflow.NewFunctionNode("support_handler",        [](#__codelineno-9-42)        func(_ agent.Context, msg string) (string, error) {            [](#__codelineno-9-43)            return "Handling support: " + msg, nil        [](#__codelineno-9-44)        }, workflow.NodeConfig{}) [](#__codelineno-9-45)    [](#__codelineno-9-46)    logisticsHandler := workflow.NewFunctionNode("logistics_handler",        [](#__codelineno-9-47)        func(_ agent.Context, msg string) (string, error) {            [](#__codelineno-9-48)            return "Handling logistics: " + msg, nil        [](#__codelineno-9-49)        }, workflow.NodeConfig{}) [](#__codelineno-9-50)    [](#__codelineno-9-51)    edges := workflow.Concat(        [](#__codelineno-9-52)        workflow.Chain(workflow.Start, classifyNode),        [](#__codelineno-9-53)        []workflow.Edge{            [](#__codelineno-9-54)            {From: classifyNode, To: bugHandler, Route: workflow.StringRoute("BUG")},            [](#__codelineno-9-55)            {From: classifyNode, To: supportHandler, Route: workflow.StringRoute("CUSTOMER_SUPPORT")},            [](#__codelineno-9-56)            {From: classifyNode, To: logisticsHandler, Route: workflow.StringRoute("LOGISTICS")},        [](#__codelineno-9-57)        },    [](#__codelineno-9-58)    )    [](#__codelineno-9-59)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-9-60)        Name:        "routing_pipeline",        [](#__codelineno-9-61)        Description: "Classifies and routes a message using Event.Routes.",        [](#__codelineno-9-62)        Edges:       edges,    [](#__codelineno-9-63)    }) [](#__codelineno-9-64)}`

### User-facing messages[¶](#user-facing-messages "Permanent link")

PythonTypeScriptGo

Use the ***message*** parameter of an ***Event*** to send a response to a user rather than pass data to the next node:

`[](#__codelineno-10-1)async def user_message(node_input: str):   [](#__codelineno-10-2)  """Tell user research process is starting."""  [](#__codelineno-10-3)  yield Event(message="Beginning research process...")`

A message for the user is the event's `content` field. The runtime renders `content`, but the graph does not pass it to the next node. Use `content` for the user and `output` for the next node. A node can emit both by sending two events, where only one carries `output`:

``[](#__codelineno-11-1)import { createEvent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-11-2)[](#__codelineno-11-3)/** Emits a user-facing message: `content`, with no `output`. */ [](#__codelineno-11-4)const message = (text: string) =>   [](#__codelineno-11-5)  createEvent({ content: { role: 'model', parts: [{ text }] } }); [](#__codelineno-11-6)[](#__codelineno-11-7)const userMessage = node(   [](#__codelineno-11-8)  async function* (_ctx: NodeContext, nodeInput: string) {    [](#__codelineno-11-9)    yield message(`Beginning research process for "${nodeInput}"...`);  [](#__codelineno-11-10)  },  [](#__codelineno-11-11)  { name: 'user_message' }, [](#__codelineno-11-12)); [](#__codelineno-11-13)[](#__codelineno-11-14)const research = node(   [](#__codelineno-11-15)  async function* (_ctx: NodeContext) {    [](#__codelineno-11-16)    yield message('Gathering sources...');    [](#__codelineno-11-17)    yield createEvent({ output: ['source-a', 'source-b', 'source-c'] });  [](#__codelineno-11-18)  },  [](#__codelineno-11-19)  { name: 'research' }, [](#__codelineno-11-20)); [](#__codelineno-11-21)[](#__codelineno-11-22)const report = node(   [](#__codelineno-11-23)  (_ctx: NodeContext, sources: string[]) =>    [](#__codelineno-11-24)    `Research complete. ${sources.length} sources: ${sources.join(', ')}.`,  [](#__codelineno-11-25)  { name: 'report' }, [](#__codelineno-11-26)); [](#__codelineno-11-27)[](#__codelineno-11-28)export const rootAgent = new Workflow({   [](#__codelineno-11-29)  name: 'user_message_workflow',  [](#__codelineno-11-30)  edges: [['START', userMessage, research, report]], [](#__codelineno-11-31)});``

**workflow package**: to emit a user-visible message without advancing the node's typed output, set `Event.Content` on an intermediate event emitted via the `emit` callback in an `EmittingFunctionNode`. The terminal return value (or `nil`) controls `Event.Output`.

**Prebuilt workflow agents**: any `llmagent` step automatically emits its model response as a user-facing event. For non-LLM steps, write a custom `Run` function on an `agent.Agent` that yields events whose `LLMResponse.Content` contains the text.

### Session state and state scopes[¶](#session-state-and-state-scopes "Permanent link")

Session state persists data across turns within a session. It is the primary data-sharing mechanism for the prebuilt workflow agents, and is also available inside tools and callbacks regardless of which agent style you use.

PythonTypeScriptGo

Use the ***state*** parameter of an ***Event*** to maintain values across nodes. Nodes can modify state values, and the modified state values are available to downstream nodes:

`[](#__codelineno-12-1)async def init_state_node(attempts: int = 0):   [](#__codelineno-12-2)  yield Event(      [](#__codelineno-12-3)      state={          [](#__codelineno-12-4)          "attempts": attempts,      [](#__codelineno-12-5)      },  [](#__codelineno-12-6)  ) [](#__codelineno-12-7)[](#__codelineno-12-8)async def task_attempt_node(node_input: Content, attempts: int):   [](#__codelineno-12-9)  yield Event(      [](#__codelineno-12-10)      state={          [](#__codelineno-12-11)          "attempts": attempts + 1,      [](#__codelineno-12-12)      },  [](#__codelineno-12-13)  ) [](#__codelineno-12-14)[](#__codelineno-12-15)async def read_state_node(ctx: Context):   [](#__codelineno-12-16)  print(f"attempts state: {ctx.state}") # attempts state: attempts: 1 [](#__codelineno-12-17)[](#__codelineno-12-18)root_agent = Workflow(     [](#__codelineno-12-19)    name="root_agent",    [](#__codelineno-12-20)    edges=[("START", init_state_node, task_attempt_node, read_state_node)], [](#__codelineno-12-21))`

Caution: `state` property data limitations

The state parameter *should not be used to persist large amounts of data* between nodes. Use artifacts or other data persistence mechanisms, such as database Tools, to persist large data resources during the life cycle of a Workflow.

Write state through `ctx.state` rather than returning it. A write is visible to every later node in the same run, and is committed with the writing node's events:

``[](#__codelineno-13-1)import { node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-13-2)[](#__codelineno-13-3)const initStateNode = node(   [](#__codelineno-13-4)  (ctx: NodeContext, nodeInput: string) => {    [](#__codelineno-13-5)    ctx.state.set('topic', nodeInput.trim());    [](#__codelineno-13-6)    ctx.state.set('temp:started_at', new Date().toISOString());    [](#__codelineno-13-7)    ctx.state.set('attempts', 0);  [](#__codelineno-13-8)  },  [](#__codelineno-13-9)  { name: 'init_state_node' }, [](#__codelineno-13-10)); [](#__codelineno-13-11)[](#__codelineno-13-12)const taskAttemptNode = node(   [](#__codelineno-13-13)  (ctx: NodeContext) => {    [](#__codelineno-13-14)    const attempts = ctx.state.get<number>('attempts') ?? 0;    [](#__codelineno-13-15)    ctx.state.set('attempts', attempts + 1);  [](#__codelineno-13-16)  },  [](#__codelineno-13-17)  { name: 'task_attempt_node' }, [](#__codelineno-13-18)); [](#__codelineno-13-19)[](#__codelineno-13-20)const readStateNode = node(   [](#__codelineno-13-21)  (ctx: NodeContext) =>    [](#__codelineno-13-22)    `attempts state: ${ctx.state.get('attempts')} ` +    [](#__codelineno-13-23)    `(topic: ${ctx.state.get('topic')}, ` +    [](#__codelineno-13-24)    `started: ${ctx.state.get('temp:started_at')})`,  [](#__codelineno-13-25)  { name: 'read_state_node' }, [](#__codelineno-13-26)); [](#__codelineno-13-27)[](#__codelineno-13-28)export const rootAgent = new Workflow({   [](#__codelineno-13-29)  name: 'session_state_workflow',  [](#__codelineno-13-30)  edges: [['START', initStateNode, taskAttemptNode, readStateNode]], [](#__codelineno-13-31)});``

Caution: `state` data limitations

Session state is a lightweight key-value store. Do not use it to move large payloads between nodes; use artifacts or a database tool instead. When only the next node needs a value, pass it along the edge as node `output`. Use state when a value must outlive the run, or be read by a tool, a callback, or `{key}` instruction templating.

State is written with `ctx.Session().State().Set(key, value)` and read with `.Get(key)`. The `session` package defines prefix constants that map to the same lifetime scopes as Python's state parameter. This pattern applies to prebuilt workflow agents and to tools and callbacks in any agent style:

`[](#__codelineno-14-1)// stateScopes shows how session-state key prefixes control the lifetime and [](#__codelineno-14-2)// visibility of stored values. This pattern applies to the prebuilt workflow [](#__codelineno-14-3)// agents (sequentialagent / parallelagent / loopagent) and to tools and [](#__codelineno-14-4)// callbacks. For the workflow package (FunctionNode / AgentNode), prefer [](#__codelineno-14-5)// returning values directly via Event.Output. [](#__codelineno-14-6)// [](#__codelineno-14-7)// Available prefixes: [](#__codelineno-14-8)// [](#__codelineno-14-9)//  session.KeyPrefixApp  ("app:")  – shared across all users and sessions [](#__codelineno-14-10)//  session.KeyPrefixUser ("user:") – tied to the user, shared across sessions [](#__codelineno-14-11)//  session.KeyPrefixTemp ("temp:") – discarded after the current invocation [](#__codelineno-14-12)// [](#__codelineno-14-13)// Keys with no prefix persist for the lifetime of the session. [](#__codelineno-14-14)func stateScopes(ctx agent.Context) error {     [](#__codelineno-14-15)    st := ctx.Session().State() [](#__codelineno-14-16)    [](#__codelineno-14-17)    // Session-scoped (no prefix) — persists for the life of this session.    [](#__codelineno-14-18)    if err := st.Set("attempts", 0); err != nil {        [](#__codelineno-14-19)        return fmt.Errorf("state.Set attempts: %w", err)    [](#__codelineno-14-20)    } [](#__codelineno-14-21)    [](#__codelineno-14-22)    // App-scoped — shared across all users and sessions for this app.    [](#__codelineno-14-23)    if err := st.Set(session.KeyPrefixApp+"global_counter", 42); err != nil {        [](#__codelineno-14-24)        return fmt.Errorf("state.Set app:global_counter: %w", err)    [](#__codelineno-14-25)    } [](#__codelineno-14-26)    [](#__codelineno-14-27)    // User-scoped — shared across all sessions belonging to this user.    [](#__codelineno-14-28)    if err := st.Set(session.KeyPrefixUser+"login_count", 1); err != nil {        [](#__codelineno-14-29)        return fmt.Errorf("state.Set user:login_count: %w", err)    [](#__codelineno-14-30)    } [](#__codelineno-14-31)    [](#__codelineno-14-32)    // Temp-scoped — discarded after this invocation ends.    [](#__codelineno-14-33)    if err := st.Set(session.KeyPrefixTemp+"scratch", "ephemeral"); err != nil {        [](#__codelineno-14-34)        return fmt.Errorf("state.Set temp:scratch: %w", err)    [](#__codelineno-14-35)    } [](#__codelineno-14-36)    [](#__codelineno-14-37)    return nil [](#__codelineno-14-38)}`

Caution: state data limitations

Session state is a lightweight key-value store. Do not use it to persist large payloads such as file contents or binary data. Use ADK artifacts or external storage tools instead.

workflow package: prefer Event.Output over state

For the `workflow` package (`FunctionNode`, `AgentNode`, `DynamicNode`), pass data between nodes by returning typed values — the framework sets `Event.Output` automatically. Only use `State().Set` when you need to share values with tools, callbacks, or agent `Instruction` templates.

## Constrain node data with schemas[¶](#constrain-node-data-with-schemas "Permanent link")

You can set input and output data schemas to constrain the data formats accepted and produced by any agent node.

PythonTypeScriptGo

Use `input_schema` and `output_schema` with a class that extends ***BaseModel*** to constrain any agent's input and output:

`[](#__codelineno-15-1)from google.adk import Agent [](#__codelineno-15-2)from pydantic import BaseModel [](#__codelineno-15-3)[](#__codelineno-15-4)class FlightSearchInput(BaseModel):     [](#__codelineno-15-5)    origin: str           # Airport code "SFO"    [](#__codelineno-15-6)    destination: str      # Airport code "CDG"    [](#__codelineno-15-7)    departure_date: date  # date(2026, 3, 15)    [](#__codelineno-15-8)    passengers: int = 1   # Number of passengers [](#__codelineno-15-9)[](#__codelineno-15-10)class FlightSearchOutput(BaseModel):     [](#__codelineno-15-11)    flights: list[Flight]    [](#__codelineno-15-12)    cheapest_price: float [](#__codelineno-15-13)[](#__codelineno-15-14)flight_searcher = Agent(     [](#__codelineno-15-15)    name="flight_searcher",    [](#__codelineno-15-16)    instruction="Search for available flights.",    [](#__codelineno-15-17)    input_schema=FlightSearchInput,    [](#__codelineno-15-18)    output_schema=FlightSearchOutput,    [](#__codelineno-15-19)    tools=[search_flights_api],    [](#__codelineno-15-20)    mode="single_turn",    [](#__codelineno-15-21)    ... [](#__codelineno-15-22)) [](#__codelineno-15-23)[](#__codelineno-15-24)assistant = Agent(     [](#__codelineno-15-25)    name="assistant",    [](#__codelineno-15-26)    instruction="You help users plan trips.",    [](#__codelineno-15-27)    sub_agents=[flight_searcher],    [](#__codelineno-15-28)    ... [](#__codelineno-15-29))`

Schemas are Zod objects or a genai `Schema`. The location of the schema determines its effect:

-   The `LlmAgent.outputSchema` option requires the model to answer in that shape.
-   The `LlmAgent.inputSchema` option applies only when the agent is exposed as a tool. Inside a graph, set the schema that validates a node's input on the node itself, using `node(agent, {inputSchema})`.

Agents in a graph must run in `single_turn` mode, which is the default, or `task` mode.

``[](#__codelineno-16-1)import {   [](#__codelineno-16-2)  FunctionTool,  [](#__codelineno-16-3)  LlmAgent,  [](#__codelineno-16-4)  node,  [](#__codelineno-16-5)  NodeContext,  [](#__codelineno-16-6)  Workflow, [](#__codelineno-16-7)} from '@google/adk'; [](#__codelineno-16-8)import { z } from 'zod'; [](#__codelineno-16-9)[](#__codelineno-16-10)const flightSearchInputSchema = z.object({   [](#__codelineno-16-11)  origin: z.string().describe('Origin airport code, e.g. "SFO".'),  [](#__codelineno-16-12)  destination: z.string().describe('Destination airport code, e.g. "CDG".'),  [](#__codelineno-16-13)  departureDate: z.string().describe('Departure date, e.g. "2026-03-15".'),  [](#__codelineno-16-14)  passengers: z.number().describe('Number of passengers.'), [](#__codelineno-16-15)}); [](#__codelineno-16-16)type FlightSearchInput = z.infer<typeof flightSearchInputSchema>; [](#__codelineno-16-17)[](#__codelineno-16-18)const flightSchema = z.object({   [](#__codelineno-16-19)  carrier: z.string(),  [](#__codelineno-16-20)  flightNumber: z.string(),  [](#__codelineno-16-21)  price: z.number(), [](#__codelineno-16-22)}); [](#__codelineno-16-23)[](#__codelineno-16-24)const flightSearchOutputSchema = z.object({   [](#__codelineno-16-25)  flights: z.array(flightSchema),  [](#__codelineno-16-26)  cheapestPrice: z.number(), [](#__codelineno-16-27)}); [](#__codelineno-16-28)type FlightSearchOutput = z.infer<typeof flightSearchOutputSchema>; [](#__codelineno-16-29)[](#__codelineno-16-30)/** Stands in for a real flight-search API. */ [](#__codelineno-16-31)const searchFlightsApi = new FunctionTool({   [](#__codelineno-16-32)  name: 'search_flights_api',  [](#__codelineno-16-33)  description: 'Searches available flights for a route and date.',  [](#__codelineno-16-34)  parameters: flightSearchInputSchema,  [](#__codelineno-16-35)  execute: ({ origin, destination }) => [    [](#__codelineno-16-36)    {      [](#__codelineno-16-37)      carrier: 'AF',      [](#__codelineno-16-38)      flightNumber: `AF${origin.length}${destination.length}0`,      [](#__codelineno-16-39)      price: 812.4,    [](#__codelineno-16-40)    },    [](#__codelineno-16-41)    {      [](#__codelineno-16-42)      carrier: 'UA',      [](#__codelineno-16-43)      flightNumber: `UA${origin.length}${destination.length}1`,      [](#__codelineno-16-44)      price: 947.0,    [](#__codelineno-16-45)    },  [](#__codelineno-16-46)  ], [](#__codelineno-16-47)}); [](#__codelineno-16-48)[](#__codelineno-16-49)const parseRequest = node(   [](#__codelineno-16-50)  (_ctx: NodeContext, nodeInput: string): FlightSearchInput => {    [](#__codelineno-16-51)    const codes = nodeInput.toUpperCase().match(/\b[A-Z]{3}\b/g) ?? [];    [](#__codelineno-16-52)    const date = nodeInput.match(/\d{4}-\d{2}-\d{2}/)?.[0];    [](#__codelineno-16-53)    const passengers = Number(      [](#__codelineno-16-54)      nodeInput.match(/(\d+)\s*(people|pax|passengers?)/i)?.[1],    [](#__codelineno-16-55)    );    [](#__codelineno-16-56)    return {      [](#__codelineno-16-57)      origin: codes[0] ?? 'SFO',      [](#__codelineno-16-58)      destination: codes[1] ?? 'CDG',      [](#__codelineno-16-59)      departureDate: date ?? '2026-03-15',      [](#__codelineno-16-60)      passengers: Number.isFinite(passengers) ? passengers : 1,    [](#__codelineno-16-61)    };  [](#__codelineno-16-62)  },  [](#__codelineno-16-63)  { name: 'parse_request', outputSchema: flightSearchInputSchema }, [](#__codelineno-16-64)); [](#__codelineno-16-65)[](#__codelineno-16-66)const flightSearcher = new LlmAgent({   [](#__codelineno-16-67)  name: 'flight_searcher',  [](#__codelineno-16-68)  model: 'gemini-flash-latest',  [](#__codelineno-16-69)  mode: 'single_turn',  [](#__codelineno-16-70)  instruction:    [](#__codelineno-16-71)    'Search for available flights with the search_flights_api tool and report ' +    [](#__codelineno-16-72)    'every flight it returns plus the cheapest price.',  [](#__codelineno-16-73)  inputSchema: flightSearchInputSchema,  [](#__codelineno-16-74)  outputSchema: flightSearchOutputSchema,  [](#__codelineno-16-75)  tools: [searchFlightsApi], [](#__codelineno-16-76)}); [](#__codelineno-16-77)[](#__codelineno-16-78)const renderResults = node(   [](#__codelineno-16-79)  (_ctx: NodeContext, results: FlightSearchOutput) =>    [](#__codelineno-16-80)    `Cheapest: $${results.cheapestPrice}\n` +    [](#__codelineno-16-81)    results.flights      [](#__codelineno-16-82)      .map((f) => `  ${f.carrier} ${f.flightNumber} — $${f.price}`)      [](#__codelineno-16-83)      .join('\n'),  [](#__codelineno-16-84)  { name: 'render_results', inputSchema: flightSearchOutputSchema }, [](#__codelineno-16-85)); [](#__codelineno-16-86)[](#__codelineno-16-87)export const rootAgent = new Workflow({   [](#__codelineno-16-88)  name: 'flight_workflow',  [](#__codelineno-16-89)  edges: [    [](#__codelineno-16-90)    [      [](#__codelineno-16-91)      'START',      [](#__codelineno-16-92)      parseRequest,      [](#__codelineno-16-93)      node(flightSearcher, { inputSchema: flightSearchInputSchema }),      [](#__codelineno-16-94)      renderResults,    [](#__codelineno-16-95)    ],  [](#__codelineno-16-96)  ], [](#__codelineno-16-97)});``

**workflow package**: use `workflow.NewAgentNodeTyped[Input, Output]` to attach schemas to an agent node. The generic type parameters are reflected into `*jsonschema.Schema` automatically — no hand-built schema construction needed. The node's `Event.Output` carries the structured result to the successor — no `OutputKey` or state write is needed:

``[](#__codelineno-17-1)// FlightSearchInput is the typed input schema for the flight-search agent node. [](#__codelineno-17-2)// workflow.NewAgentNodeTyped[FlightSearchInput, FlightSearchOutput] reflects [](#__codelineno-17-3)// these structs into *jsonschema.Schema automatically — no hand-built schema [](#__codelineno-17-4)// construction needed. [](#__codelineno-17-5)type FlightSearchInput struct {     [](#__codelineno-17-6)    Origin        string `json:"origin"         jsonschema:"Departure airport code e.g. SFO"`    [](#__codelineno-17-7)    Destination   string `json:"destination"    jsonschema:"Arrival airport code e.g. CDG"`    [](#__codelineno-17-8)    DepartureDate string `json:"departure_date" jsonschema:"Travel date in YYYY-MM-DD format"` [](#__codelineno-17-9)} [](#__codelineno-17-10)[](#__codelineno-17-11)// FlightSearchOutput is the typed output schema for the flight-search agent node. [](#__codelineno-17-12)type FlightSearchOutput struct {     [](#__codelineno-17-13)    CheapestPrice string `json:"cheapest_price" jsonschema:"Cheapest available fare e.g. $450"`    [](#__codelineno-17-14)    FlightCount   string `json:"flight_count"   jsonschema:"Number of matching flights found"` [](#__codelineno-17-15)} [](#__codelineno-17-16)[](#__codelineno-17-17)// newSchemaAgentPipeline demonstrates workflow.NewAgentNodeTyped, which infers [](#__codelineno-17-18)// *jsonschema.Schema from the generic type parameters. This is the Go equivalent [](#__codelineno-17-19)// of Python's: [](#__codelineno-17-20)// [](#__codelineno-17-21)//  flight_searcher = Agent( [](#__codelineno-17-22)//      input_schema=FlightSearchInput, [](#__codelineno-17-23)//      output_schema=FlightSearchOutput, [](#__codelineno-17-24)//      ... [](#__codelineno-17-25)//  ) [](#__codelineno-17-26)// [](#__codelineno-17-27)// The node's event.Output carries the structured result to the successor — [](#__codelineno-17-28)// no OutputKey or state write is needed. [](#__codelineno-17-29)func newSchemaAgentPipeline(ctx context.Context, geminiModel model.LLM) (agent.Agent, error) {     [](#__codelineno-17-30)    flightSearchAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-17-31)        Name:        "flight_searcher",        [](#__codelineno-17-32)        Model:       geminiModel,        [](#__codelineno-17-33)        Description: "Searches for available flights and returns structured results.",        [](#__codelineno-17-34)        Instruction: `You are a flight-search assistant. Respond ONLY with a JSON object.`,    [](#__codelineno-17-35)    })    [](#__codelineno-17-36)    if err != nil {        [](#__codelineno-17-37)        return nil, fmt.Errorf("flightSearchAgent: %w", err)    [](#__codelineno-17-38)    } [](#__codelineno-17-39)    [](#__codelineno-17-40)    synthAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-17-41)        Name:        "trip_assistant",        [](#__codelineno-17-42)        Model:       geminiModel,        [](#__codelineno-17-43)        Description: "Summarises flight search results for the user.",        [](#__codelineno-17-44)        Instruction: `You help users plan trips. Summarise the flight result you received.`,    [](#__codelineno-17-45)    })    [](#__codelineno-17-46)    if err != nil {        [](#__codelineno-17-47)        return nil, fmt.Errorf("synthAgent: %w", err)    [](#__codelineno-17-48)    } [](#__codelineno-17-49)    [](#__codelineno-17-50)    // NewAgentNodeTyped[In, Out] reflects FlightSearchInput and FlightSearchOutput    [](#__codelineno-17-51)    // into *jsonschema.Schema automatically. The node enforces the input schema    [](#__codelineno-17-52)    // and constrains the model reply to the output schema's shape.    [](#__codelineno-17-53)    flightNode, err := workflow.NewAgentNodeTyped[FlightSearchInput, FlightSearchOutput](flightSearchAgent, workflow.NodeConfig{})    [](#__codelineno-17-54)    if err != nil {        [](#__codelineno-17-55)        return nil, fmt.Errorf("flightNode: %w", err)    [](#__codelineno-17-56)    } [](#__codelineno-17-57)    [](#__codelineno-17-58)    synthNode, err := workflow.NewAgentNode(synthAgent, workflow.NodeConfig{})    [](#__codelineno-17-59)    if err != nil {        [](#__codelineno-17-60)        return nil, fmt.Errorf("synthNode: %w", err)    [](#__codelineno-17-61)    } [](#__codelineno-17-62)    [](#__codelineno-17-63)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-17-64)        Name:      "flight_booking_pipeline",        [](#__codelineno-17-65)        Edges:     workflow.Chain(workflow.Start, flightNode, synthNode),        [](#__codelineno-17-66)        SubAgents: []agent.Agent{flightSearchAgent, synthAgent},    [](#__codelineno-17-67)    }) [](#__codelineno-17-68)}``

**Prebuilt workflow agents**: set `InputSchema` and `OutputSchema` on `llmagent.Config`. `OutputSchema` forces the model to reply with a JSON object matching the schema (the agent cannot use tools when `OutputSchema` is set). Use `OutputKey` to save the JSON string to state for downstream agents to reference via `{key}` in their `Instruction`.

## Access structured data in agents[¶](#access-structured-data-in-agents "Permanent link")

PythonTypeScriptGo

Use the curly-brace `{ }` syntax to select properties from the input schema, or `< >` to select a property and also qualify it by the name of the source node:

`[](#__codelineno-18-1)class CityTime(BaseModel):     [](#__codelineno-18-2)    time_info: str  # time information    [](#__codelineno-18-3)    city: str       # city name [](#__codelineno-18-4)[](#__codelineno-18-5)def lookup_time_function(city: str):     [](#__codelineno-18-6)    """Simulate returning the current time in the specified city."""    [](#__codelineno-18-7)    return Event(output=CityTime(time_info='10:10 AM', city=city)) [](#__codelineno-18-8)[](#__codelineno-18-9)city_report_agent = Agent(     [](#__codelineno-18-10)    name="city_report_agent",    [](#__codelineno-18-11)    model="gemini-flash-latest",    [](#__codelineno-18-12)    input_schema=CityTime, [](#__codelineno-18-13)    [](#__codelineno-18-14)    # data selection based on class and parameter    [](#__codelineno-18-15)    # instruction="""    [](#__codelineno-18-16)    #     Return a sentence in the following format:    [](#__codelineno-18-17)    #     It is {CityTime.time_info} in {CityTime.city} right now.    [](#__codelineno-18-18)    # """, [](#__codelineno-18-19)    [](#__codelineno-18-20)    # more restrictive data selection based on source node name    [](#__codelineno-18-21)    instruction="""        [](#__codelineno-18-22)        Return a sentence in the following format:        [](#__codelineno-18-23)        It is <CityTime.time_info from lookup_time_function> in        [](#__codelineno-18-24)        <CityTime.city from lookup_time_function> right now.    [](#__codelineno-18-25)    """, [](#__codelineno-18-26)) [](#__codelineno-18-27)[](#__codelineno-18-28)root_agent = Workflow(     [](#__codelineno-18-29)    name="root_agent",    [](#__codelineno-18-30)    edges=[        [](#__codelineno-18-31)        (START, city_generator_agent, lookup_time_function, city_report_agent)    [](#__codelineno-18-32)    ], [](#__codelineno-18-33))`

Two data-selection forms are available inside an agent instruction:

-   The `{Class.field}` form reads a field from this node's input.
-   The `<Class.field from source_node>` form reads a field from a named predecessor's output. Use this form when several upstream nodes share a field name.

Both forms are distinct from `{state_key}`, which reads session state. The `Class.` prefix is documentation only; resolution uses the field name after the dot.

`[](#__codelineno-19-1)import { LlmAgent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-19-2)import { z } from 'zod'; [](#__codelineno-19-3)[](#__codelineno-19-4)const cityTimeSchema = z.object({   [](#__codelineno-19-5)  timeInfo: z.string().describe('Time information.'),  [](#__codelineno-19-6)  city: z.string().describe('City name.'), [](#__codelineno-19-7)}); [](#__codelineno-19-8)type CityTime = z.infer<typeof cityTimeSchema>; [](#__codelineno-19-9)[](#__codelineno-19-10)const cityGeneratorAgent = new LlmAgent({   [](#__codelineno-19-11)  name: 'city_generator_agent',  [](#__codelineno-19-12)  model: 'gemini-flash-latest',  [](#__codelineno-19-13)  instruction: 'Return the name of a random city. Return only the name.', [](#__codelineno-19-14)}); [](#__codelineno-19-15)[](#__codelineno-19-16)/** Simulates returning the current time in the specified city. */ [](#__codelineno-19-17)const lookupTimeFunction = node(   [](#__codelineno-19-18)  (_ctx: NodeContext, city: string): CityTime => ({    [](#__codelineno-19-19)    timeInfo: '10:10 AM',    [](#__codelineno-19-20)    city: city.trim(),  [](#__codelineno-19-21)  }),  [](#__codelineno-19-22)  { name: 'lookup_time_function', outputSchema: cityTimeSchema }, [](#__codelineno-19-23)); [](#__codelineno-19-24)[](#__codelineno-19-25)const cityReportAgent = new LlmAgent({   [](#__codelineno-19-26)  name: 'city_report_agent',  [](#__codelineno-19-27)  model: 'gemini-flash-latest',  [](#__codelineno-19-28)  instruction:    [](#__codelineno-19-29)    'Return a sentence in the following format: It is ' +    [](#__codelineno-19-30)    '<CityTime.timeInfo from lookup_time_function> in ' +    [](#__codelineno-19-31)    '<CityTime.city from lookup_time_function> right now.', [](#__codelineno-19-32)}); [](#__codelineno-19-33)[](#__codelineno-19-34)export const rootAgent = new Workflow({   [](#__codelineno-19-35)  name: 'root_agent',  [](#__codelineno-19-36)  edges: [    [](#__codelineno-19-37)    [      [](#__codelineno-19-38)      'START',      [](#__codelineno-19-39)      cityGeneratorAgent,      [](#__codelineno-19-40)      lookupTimeFunction,      [](#__codelineno-19-41)      node(cityReportAgent, { inputSchema: cityTimeSchema }),    [](#__codelineno-19-42)    ],  [](#__codelineno-19-43)  ], [](#__codelineno-19-44)});`

In ADK Go v2.0.0, a `FunctionNode` returns a typed struct and the framework serializes it into `Event.Output`. The successor `AgentNode` receives the struct as its user content — the fields are available to the agent's `Instruction` without any `{key}` template syntax. This is the direct equivalent of Python's `input_schema=CityTime` with `{CityTime.time_info}` template placeholders: the struct fields are delivered as typed input rather than looked up by name from state.

``[](#__codelineno-20-1)// newStructuredOutputPipeline shows how to pass a struct from one FunctionNode [](#__codelineno-20-2)// to another. The framework serialises the return value into event.Output and [](#__codelineno-20-3)// deserialises it back into the successor's typed input parameter. [](#__codelineno-20-4)// [](#__codelineno-20-5)// This is the Go equivalent of: [](#__codelineno-20-6)// [](#__codelineno-20-7)//  class CityTime(BaseModel): [](#__codelineno-20-8)//      time_info: str [](#__codelineno-20-9)//      city: str [](#__codelineno-20-10)// [](#__codelineno-20-11)//  def lookup_time_function(city: str): [](#__codelineno-20-12)//      return Event(output=CityTime(time_info="10:10 AM", city=city)) [](#__codelineno-20-13)// [](#__codelineno-20-14)//  def city_report(node_input: CityTime): [](#__codelineno-20-15)//      return Event(output=f"It is {node_input.time_info} in {node_input.city}.") [](#__codelineno-20-16)type CityTime struct {     [](#__codelineno-20-17)    TimeInfo string `json:"time_info"`    [](#__codelineno-20-18)    City     string `json:"city"` [](#__codelineno-20-19)} [](#__codelineno-20-20)[](#__codelineno-20-21)func newStructuredOutputPipeline(ctx context.Context, geminiModel model.LLM) (agent.Agent, error) {     [](#__codelineno-20-22)    lookupTimeFn := func(_ agent.Context, city string) (CityTime, error) {        [](#__codelineno-20-23)        // Simulate looking up the current time in the city.        [](#__codelineno-20-24)        return CityTime{TimeInfo: "10:10 AM", City: city}, nil    [](#__codelineno-20-25)    } [](#__codelineno-20-26)    [](#__codelineno-20-27)    cityReportAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-20-28)        Name:        "city_report_agent",        [](#__codelineno-20-29)        Model:       geminiModel,        [](#__codelineno-20-30)        Description: "Reports the city and current time from the previous node's output.",        [](#__codelineno-20-31)        // When wrapped as an AgentNode, the predecessor's event.Output        [](#__codelineno-20-32)        // is delivered as the agent's user content. The {key} template        [](#__codelineno-20-33)        // syntax is not required — the struct fields are provided inline.        [](#__codelineno-20-34)        Instruction: "Report the city time information you received in a friendly sentence.",    [](#__codelineno-20-35)    })    [](#__codelineno-20-36)    if err != nil {        [](#__codelineno-20-37)        return nil, fmt.Errorf("cityReportAgent: %w", err)    [](#__codelineno-20-38)    } [](#__codelineno-20-39)    [](#__codelineno-20-40)    lookupTimeNode := workflow.NewFunctionNode("lookup_time", lookupTimeFn, workflow.NodeConfig{})    [](#__codelineno-20-41)    cityReportNode, err := workflow.NewAgentNode(cityReportAgent, workflow.NodeConfig{})    [](#__codelineno-20-42)    if err != nil {        [](#__codelineno-20-43)        return nil, fmt.Errorf("NewAgentNode: %w", err)    [](#__codelineno-20-44)    } [](#__codelineno-20-45)    [](#__codelineno-20-46)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-20-47)        Name:      "city_time_pipeline",        [](#__codelineno-20-48)        Edges:     workflow.Chain(workflow.Start, lookupTimeNode, cityReportNode),        [](#__codelineno-20-49)        SubAgents: []agent.Agent{cityReportAgent},    [](#__codelineno-20-50)    }) [](#__codelineno-20-51)}``

For a complete example of this workflow, see [Graph-based agent workflows](/graphs/#get-started).

Back to top