---
title: "Graph routes - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/graphs/routes/
date: 2026-10-10T19:16:36.642Z
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
        
        -    Graph routes [Graph routes](./)
            
            Table of contents
            
            -   [Nodes](#nodes)
            -   [Workflow graphs syntax](#workflow-graphs-syntax)
                
                -   [Route sequences](#route-sequences)
                -   [Route branches and conditional execution](#route-branches-and-conditional-execution)
                
            -   [Parallel tasks: fan out and join paths](#parallel-tasks-fan-out-and-join-paths)
            -   [Nested workflows](#nested-workflows)
                
                -   [Nested workflow data output](#nested-workflow-data-output)
                
            -   [Loop and escalation exit](#loop-and-escalation-exit)
            
        -   [Data handling](../data-handling/)
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

-   [Nodes](#nodes)
-   [Workflow graphs syntax](#workflow-graphs-syntax)
    
    -   [Route sequences](#route-sequences)
    -   [Route branches and conditional execution](#route-branches-and-conditional-execution)
    
-   [Parallel tasks: fan out and join paths](#parallel-tasks-fan-out-and-join-paths)
-   [Nested workflows](#nested-workflows)
    
    -   [Nested workflow data output](#nested-workflow-data-output)
    
-   [Loop and escalation exit](#loop-and-escalation-exit)

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Graph Workflows](../)

[](https://github.com/google/adk-docs/edit/main/docs/graphs/routes.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Build graph routes for agent workflows[¶](#build-graph-routes-for-agent-workflows "Permanent link")

Supported in ADKPython v2.0.0TypeScript v2.0.0Go v2.0.0

Graph-based workflows in ADK define agent logic as a graph of execution nodes and edges, allowing you to build more reliable processes that combine artificial intelligence (AI) reasoning and code logic. These workflows allow you to create logical routes of execution nodes that can encapsulate code functions, AI-powered agents, Tools, and human input. By explicitly mapping out routing logic, this approach allows you to define a specific, step-wise process workflow in code, providing improved precision and reliability over purely prompt-based agents.

![Task graph with conditional routing between nodes](./images/img_1f81a26c68.svg)

**Figure 1.** Visualization of a task graph and the routing code to implement it.

PythonTypeScriptGo

`[](#__codelineno-0-1)root_agent = Workflow(   [](#__codelineno-0-2)  name="routing_workflow",  [](#__codelineno-0-3)  edges=[    [](#__codelineno-0-4)    ("START", process_message, router),    [](#__codelineno-0-5)    (router,      [](#__codelineno-0-6)      {        [](#__codelineno-0-7)        "output-1": response_1,        [](#__codelineno-0-8)        "output-2": response_2,        [](#__codelineno-0-9)        "output-3": response_3,      [](#__codelineno-0-10)      },    [](#__codelineno-0-11)    ),  [](#__codelineno-0-12)  ], [](#__codelineno-0-13))`

`[](#__codelineno-1-1)export const rootAgent = new Workflow({   [](#__codelineno-1-2)  name: 'routing_workflow',  [](#__codelineno-1-3)  edges: [    [](#__codelineno-1-4)    ['START', processMessage, router],    [](#__codelineno-1-5)    [      [](#__codelineno-1-6)      router,      [](#__codelineno-1-7)      {        [](#__codelineno-1-8)        'output-1': response1,        [](#__codelineno-1-9)        'output-2': response2,        [](#__codelineno-1-10)        'output-3': response3,      [](#__codelineno-1-11)      },    [](#__codelineno-1-12)    ],  [](#__codelineno-1-13)  ], [](#__codelineno-1-14)});`

ADK Go v2.0.0 provides the following approach to graph-based workflows:

**Graph engine** (`workflowagent` + `workflow.Edge`): A node-and-edges graph API that maps directly to Python's `Workflow(edges=[...])`. Nodes are defined with `workflow.NewFunctionNode`, `workflow.NewAgentNode`, or `workflow.NewDynamicNode`, edges are declared as `[]workflow.Edge`, and the whole graph is wrapped in a `workflowagent.New` call:

`[](#__codelineno-2-1)edges := workflow.Concat(     [](#__codelineno-2-2)    workflow.Chain(workflow.Start, classifyNode),    [](#__codelineno-2-3)    []workflow.Edge{        [](#__codelineno-2-4)        {From: classifyNode, To: responseA, Route: workflow.StringRoute("output-1")},        [](#__codelineno-2-5)        {From: classifyNode, To: responseB, Route: workflow.StringRoute("output-2")},        [](#__codelineno-2-6)        {From: classifyNode, To: responseC, Route: workflow.StringRoute("output-3")},    [](#__codelineno-2-7)    }, [](#__codelineno-2-8)) [](#__codelineno-2-9)rootAgent, _ := workflowagent.New(workflowagent.Config{     [](#__codelineno-2-10)    Name:  "routing_workflow",    [](#__codelineno-2-11)    Edges: edges, [](#__codelineno-2-12)})`

The advantage of using a graph-based agent workflow is the significant increase in control, predictability, and reliability over prompt-based agents. By defining the overall process workflow in code, you gain more control over how tasks are routed and executed. This structured node definition improves the predictability of agents and enhances reliability for complex tasks that require defined steps and process management.

Get started with graph-based workflows in ADK by checking out [Graph-based agent workflows](/graphs/).

## Nodes[¶](#nodes "Permanent link")

A graph is composed of execution nodes. These *nodes* can be ***Agents***, ADK ***Tools***, human input tasks, or code functions you write. Nodes can take inputs from previously executed nodes, and emit data through ***Event*** objects.

PythonTypeScriptGo

The following shows a simple ***FunctionNode*** that handles text inputs and sends a text output:

`[](#__codelineno-3-1)from google.adk import Event [](#__codelineno-3-2)[](#__codelineno-3-3)def my_function_node(node_input: str):     [](#__codelineno-3-4)    input_text_modified = node_input.upper()    [](#__codelineno-3-5)    return Event(output=input_text_modified)`

In ADK TypeScript v2.0.0, the primary node type is a `FunctionNode`, created by passing a function to `node()`. A handler always takes `(ctx, input)` parameters; ADK does not inject values by parameter name. Returning a value directly wraps it in the event's `output` field. Returning `createEvent({output})` is the explicit form, which you need when you also set `route` or `content`:

``[](#__codelineno-4-1)import {   [](#__codelineno-4-2)  createEvent,  [](#__codelineno-4-3)  node,  [](#__codelineno-4-4)  NodeContext,  [](#__codelineno-4-5)  Workflow,  [](#__codelineno-4-6)  type FunctionNodeHandler, [](#__codelineno-4-7)} from '@google/adk'; [](#__codelineno-4-8)[](#__codelineno-4-9)/** A bare return value: boxed into an event's `output` for you. */ [](#__codelineno-4-10)const myFunctionNode: FunctionNodeHandler<string, string> = (   [](#__codelineno-4-11)  _ctx: NodeContext,  [](#__codelineno-4-12)  nodeInput: string, [](#__codelineno-4-13)) => {   [](#__codelineno-4-14)  const inputTextModified = nodeInput.toUpperCase();  [](#__codelineno-4-15)  return inputTextModified; [](#__codelineno-4-16)}; [](#__codelineno-4-17)[](#__codelineno-4-18)/** The explicit form — identical behaviour, useful when you also set `route`. */ [](#__codelineno-4-19)const myExplicitEventNode = (_ctx: NodeContext, nodeInput: string) =>   [](#__codelineno-4-20)  createEvent({ output: `${nodeInput} IS AWESOME!` }); [](#__codelineno-4-21)[](#__codelineno-4-22)export const rootAgent = new Workflow({   [](#__codelineno-4-23)  name: 'function_node_pipeline',  [](#__codelineno-4-24)  edges: [    [](#__codelineno-4-25)    [      [](#__codelineno-4-26)      'START',      [](#__codelineno-4-27)      node(myFunctionNode, { name: 'my_function_node' }),      [](#__codelineno-4-28)      node(myExplicitEventNode, { name: 'add_suffix' }),    [](#__codelineno-4-29)    ],  [](#__codelineno-4-30)  ], [](#__codelineno-4-31)});``

In ADK Go v2.0.0, the primary node type is `workflow.NewFunctionNode`. A `FunctionNode` wraps a plain Go function: the function returns a typed value, and the framework automatically wraps it in a `session.Event`, setting `event.Output`. The successor node receives this value as its typed `input` parameter — no manual state writes or event construction needed:

`[](#__codelineno-5-1)// newFunctionNodePipeline demonstrates workflow.NewFunctionNode as the primary [](#__codelineno-5-2)// v2 node type. A FunctionNode wraps a plain Go function: the function returns [](#__codelineno-5-3)// a typed value, and the framework automatically wraps it in a session.Event, [](#__codelineno-5-4)// setting event.Output. The successor node receives this value as its typed [](#__codelineno-5-5)// input parameter. [](#__codelineno-5-6)// [](#__codelineno-5-7)// This is the direct Go equivalent of the Python FunctionNode: [](#__codelineno-5-8)// [](#__codelineno-5-9)//  def my_function_node(node_input: str): [](#__codelineno-5-10)//      return Event(output=node_input.upper()) [](#__codelineno-5-11)func newFunctionNodePipeline() (agent.Agent, error) {     [](#__codelineno-5-12)    upperFn := func(_ agent.Context, input string) (string, error) {        [](#__codelineno-5-13)        return strings.ToUpper(input), nil    [](#__codelineno-5-14)    } [](#__codelineno-5-15)    [](#__codelineno-5-16)    suffixFn := func(_ agent.Context, input string) (string, error) {        [](#__codelineno-5-17)        return input + " IS AWESOME!", nil    [](#__codelineno-5-18)    } [](#__codelineno-5-19)    [](#__codelineno-5-20)    // workflow.NewFunctionNode wraps each function as a graph node.    [](#__codelineno-5-21)    // workflow.Chain wires them in order: START → upper → suffix.    [](#__codelineno-5-22)    // The output of upperFn is delivered as the typed input of suffixFn    [](#__codelineno-5-23)    // via event.Output — no session state writes are needed.    [](#__codelineno-5-24)    nodeA := workflow.NewFunctionNode("upper", upperFn, workflow.NodeConfig{})    [](#__codelineno-5-25)    nodeB := workflow.NewFunctionNode("suffix", suffixFn, workflow.NodeConfig{}) [](#__codelineno-5-26)    [](#__codelineno-5-27)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-5-28)        Name:        "function_node_pipeline",        [](#__codelineno-5-29)        Description: "Demonstrates workflow.NewFunctionNode data flow via Event.Output.",        [](#__codelineno-5-30)        Edges:       workflow.Chain(workflow.Start, nodeA, nodeB),    [](#__codelineno-5-31)    }) [](#__codelineno-5-32)}`

For more information about transferring data between nodes, see [Data handling for agent workflows](/graphs/data-handling/).

## Workflow graphs syntax[¶](#workflow-graphs-syntax "Permanent link")

You define a graph by composing workflow agents. This section provides an overview of the common routing patterns.

Caution: Workflow agent limitations

You can add ***LlmAgents*** to graph-based workflows. However, they must be configured for single-turn or task mode. For more information about agent modes, see [Build collaborative agent teams](/workflows/collaboration/#mode-configuration-and-behaviors).

### Route sequences[¶](#route-sequences "Permanent link")

A sequential route runs each node once, in the listed order.

PythonTypeScriptGo

The `edges` array uses the `START` keyword to indicate the beginning of a graph execution, with each listed node executed in sequence:

`[](#__codelineno-6-1)edges=[("START", task_A_node)]  # single node run [](#__codelineno-6-2)edges=[("START",         [](#__codelineno-6-3)        task_A_node,        [](#__codelineno-6-4)        task_B_node,        [](#__codelineno-6-5)        task_C_node)]           # 3 nodes run in order`

An `edges` row that starts with `'START'` runs each listed node once, in order, and passes every node's return value to the next node:

`[](#__codelineno-7-1)edges: [['START', taskANode]]                       // a single node [](#__codelineno-7-2)edges: [['START', taskANode, taskBNode, taskCNode]] // three, in order`

Listing `'START'` in more than one row creates parallel paths instead. For more information, see [fan out and join](#parallel-tasks-fan-out-and-join-paths).

``[](#__codelineno-8-1)import { node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-8-2)[](#__codelineno-8-3)const taskANode = node(   [](#__codelineno-8-4)  (_ctx: NodeContext, nodeInput: string) => `Summary: ${nodeInput.trim()}`,  [](#__codelineno-8-5)  { name: 'task_A_node' }, [](#__codelineno-8-6)); [](#__codelineno-8-7)[](#__codelineno-8-8)const taskBNode = node(   [](#__codelineno-8-9)  (_ctx: NodeContext, summary: string) => summary.toUpperCase(),  [](#__codelineno-8-10)  { name: 'task_B_node' }, [](#__codelineno-8-11)); [](#__codelineno-8-12)[](#__codelineno-8-13)const taskCNode = node(   [](#__codelineno-8-14)  (_ctx: NodeContext, shouted: string) => `${shouted} (done)`,  [](#__codelineno-8-15)  { name: 'task_C_node' }, [](#__codelineno-8-16)); [](#__codelineno-8-17)[](#__codelineno-8-18)export const rootAgent = new Workflow({   [](#__codelineno-8-19)  name: 'sequential_workflow',  [](#__codelineno-8-20)  edges: [['START', taskANode, taskBNode, taskCNode]], [](#__codelineno-8-21)});``

`workflow.Chain(workflow.Start, nodeA, nodeB, nodeC)` wires nodes into a sequential edge slice. Each node's typed return value is forwarded to the next node via `event.Output` — no session state writes needed:

`[](#__codelineno-9-1)// newSequentialNodes builds a two-step sequential workflow using the v2 graph [](#__codelineno-9-2)// engine. workflow.Chain wires the nodes in order; each node's typed return [](#__codelineno-9-3)// value is forwarded to the next node via event.Output. [](#__codelineno-9-4)// [](#__codelineno-9-5)// This is the Go equivalent of: [](#__codelineno-9-6)// [](#__codelineno-9-7)//  edges=[("START", task_A_node, task_B_node)] [](#__codelineno-9-8)func newSequentialNodes() (agent.Agent, error) {     [](#__codelineno-9-9)    // task_A_node: transforms the user's input.    [](#__codelineno-9-10)    taskANode := workflow.NewFunctionNode("task_A_node",        [](#__codelineno-9-11)        func(_ agent.Context, input string) (string, error) {            [](#__codelineno-9-12)            return "Summary: " + strings.TrimSpace(input), nil        [](#__codelineno-9-13)        },        [](#__codelineno-9-14)        workflow.NodeConfig{},    [](#__codelineno-9-15)    ) [](#__codelineno-9-16)    [](#__codelineno-9-17)    // task_B_node: receives task A's output as its typed input and produces    [](#__codelineno-9-18)    // the final result. No session state reads needed.    [](#__codelineno-9-19)    taskBNode := workflow.NewFunctionNode("task_B_node",        [](#__codelineno-9-20)        func(_ agent.Context, summary string) (string, error) {            [](#__codelineno-9-21)            return strings.ToUpper(summary), nil        [](#__codelineno-9-22)        },        [](#__codelineno-9-23)        workflow.NodeConfig{},    [](#__codelineno-9-24)    ) [](#__codelineno-9-25)    [](#__codelineno-9-26)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-9-27)        Name:        "sequential_workflow",        [](#__codelineno-9-28)        Description: "Runs task A then task B in order via workflow.Chain.",        [](#__codelineno-9-29)        Edges:       workflow.Chain(workflow.Start, taskANode, taskBNode),    [](#__codelineno-9-30)    }) [](#__codelineno-9-31)}`

### Route branches and conditional execution[¶](#route-branches-and-conditional-execution "Permanent link")

PythonTypeScriptGo

In Python, branching is handled by a `FunctionNode` that returns an `Event(route=...)` value, which the `edges` dict dispatches to different nodes.

`[](#__codelineno-10-1)from google.adk import Event, Workflow [](#__codelineno-10-2)from google.adk.agents import Agent [](#__codelineno-10-3) [](#__codelineno-10-4)[](#__codelineno-10-5)def router(node_input: str):     [](#__codelineno-10-6)    """Route to task B or C based on node_input."""    [](#__codelineno-10-7)    if condition(node_input):        [](#__codelineno-10-8)        return Event(route="RUN_TASK_C")    [](#__codelineno-10-9)    return Event(route="RUN_TASK_B") [](#__codelineno-10-10)[](#__codelineno-10-11)task_B_node = Agent(name="task_B_agent") # An agent to execute node B [](#__codelineno-10-12)[](#__codelineno-10-13)def task_C_node(node_input: str):     [](#__codelineno-10-14)    """A FunctionNode to execute node C."""    [](#__codelineno-10-15)    return Event(output="Task C completed") [](#__codelineno-10-16)[](#__codelineno-10-17)root_agent = Workflow(     [](#__codelineno-10-18)    name="routing_workflow",    [](#__codelineno-10-19)    edges=[        [](#__codelineno-10-20)        ("START", task_A_node, router),        [](#__codelineno-10-21)        (router,          [](#__codelineno-10-22)          {            [](#__codelineno-10-23)            # "route value": node_to_run            [](#__codelineno-10-24)            "RUN_TASK_B": task_B_node,            [](#__codelineno-10-25)            "RUN_TASK_C": task_C_node,          [](#__codelineno-10-26)          },        [](#__codelineno-10-27)        ),    [](#__codelineno-10-28)    ], [](#__codelineno-10-29))`

Branching requires a node that emits a `route` value, and an edge row that maps each route value to the node that handles it. Route values can be strings, numbers, or booleans. The `DEFAULT_ROUTE` setting matches when no other route on the same source node matches. A branch target can be any node-like value: in this example, `taskBNode` is an `LlmAgent` and `taskCNode` is a function.

`[](#__codelineno-11-1)import {   [](#__codelineno-11-2)  createEvent,  [](#__codelineno-11-3)  LlmAgent,  [](#__codelineno-11-4)  node,  [](#__codelineno-11-5)  NodeContext,  [](#__codelineno-11-6)  Workflow, [](#__codelineno-11-7)} from '@google/adk'; [](#__codelineno-11-8)[](#__codelineno-11-9)const taskANode = node(   [](#__codelineno-11-10)  (_ctx: NodeContext, nodeInput: string) => nodeInput.trim(),  [](#__codelineno-11-11)  { name: 'task_A_node' }, [](#__codelineno-11-12)); [](#__codelineno-11-13)[](#__codelineno-11-14)/** Stands in for an application-specific branch condition. */ [](#__codelineno-11-15)const condition = (nodeInput: string) => /\d/.test(nodeInput); [](#__codelineno-11-16)[](#__codelineno-11-17)/** Routes to task B or C based on nodeInput. */ [](#__codelineno-11-18)const router = node(   [](#__codelineno-11-19)  (_ctx: NodeContext, nodeInput: string) =>    [](#__codelineno-11-20)    condition(nodeInput)      [](#__codelineno-11-21)      ? createEvent({ route: 'RUN_TASK_C', output: nodeInput })      [](#__codelineno-11-22)      : createEvent({ route: 'RUN_TASK_B', output: nodeInput }),  [](#__codelineno-11-23)  { name: 'router' }, [](#__codelineno-11-24)); [](#__codelineno-11-25)[](#__codelineno-11-26)const taskBNode = new LlmAgent({   [](#__codelineno-11-27)  name: 'task_B_agent',  [](#__codelineno-11-28)  model: 'gemini-flash-latest',  [](#__codelineno-11-29)  instruction: 'Answer the user in a single short sentence.', [](#__codelineno-11-30)}); [](#__codelineno-11-31)[](#__codelineno-11-32)const taskCNode = node(() => 'Task C completed', { name: 'task_C_node' }); [](#__codelineno-11-33)[](#__codelineno-11-34)export const rootAgent = new Workflow({   [](#__codelineno-11-35)  name: 'routing_workflow',  [](#__codelineno-11-36)  edges: [    [](#__codelineno-11-37)    ['START', taskANode, router],    [](#__codelineno-11-38)    [      [](#__codelineno-11-39)      router,      [](#__codelineno-11-40)      {        [](#__codelineno-11-41)        RUN_TASK_B: taskBNode,        [](#__codelineno-11-42)        RUN_TASK_C: taskCNode,      [](#__codelineno-11-43)      },    [](#__codelineno-11-44)    ],  [](#__codelineno-11-45)  ], [](#__codelineno-11-46)});`

In ADK Go v2.0.0, conditional dispatch uses the `workflow` graph engine. A node sets `Event.Routes` to one or more string route keys, and each `workflow.Edge` selects its successor using a `workflow.Route` matcher:

-   `workflow.StringRoute("category")` — matches a single string value
-   `workflow.IntRoute(n)` or `workflow.MultiRoute[int]{1, 2, 3}` — matches integer values
-   `workflow.BoolRoute(true)` — matches a boolean value
-   `workflow.Default` — matches when no other route on the same source node matches

The following pattern is the Go equivalent of the Python router:

`[](#__codelineno-12-1)// classifyNode emits an Event with Routes=[]string{"BUG"}, [](#__codelineno-12-2)// ["CUSTOMER_SUPPORT"], or ["LOGISTICS"] based on the message. [](#__codelineno-12-3)edges := workflow.Concat(     [](#__codelineno-12-4)    workflow.Chain(workflow.Start, processMessage, classifyNode),    [](#__codelineno-12-5)    []workflow.Edge{        [](#__codelineno-12-6)        {From: classifyNode, To: bugHandler,       Route: workflow.StringRoute("BUG")},        [](#__codelineno-12-7)        {From: classifyNode, To: supportHandler,   Route: workflow.StringRoute("CUSTOMER_SUPPORT")},        [](#__codelineno-12-8)        {From: classifyNode, To: logisticsHandler, Route: workflow.StringRoute("LOGISTICS")},    [](#__codelineno-12-9)    }, [](#__codelineno-12-10)) [](#__codelineno-12-11)rootAgent, _ := workflowagent.New(workflowagent.Config{     [](#__codelineno-12-12)    Name:  "routing_workflow",    [](#__codelineno-12-13)    Edges: edges, [](#__codelineno-12-14)})`

`workflow.EdgeBuilder` provides a fluent alternative to assembling the `[]workflow.Edge` slice by hand. The builder's `Add`, `AddFanOut`, and `AddFanIn` methods express the same topology with less repetition:

`[](#__codelineno-13-1)eb := workflow.NewEdgeBuilder() [](#__codelineno-13-2)eb.Add(workflow.Start, processMessage) [](#__codelineno-13-3)eb.Add(processMessage, classifyNode) [](#__codelineno-13-4)eb.AddRoute(classifyNode, bugHandler,       workflow.StringRoute("BUG")) [](#__codelineno-13-5)eb.AddRoute(classifyNode, supportHandler,   workflow.StringRoute("CUSTOMER_SUPPORT")) [](#__codelineno-13-6)eb.AddRoute(classifyNode, logisticsHandler, workflow.StringRoute("LOGISTICS")) [](#__codelineno-13-7)[](#__codelineno-13-8)rootAgent, _ := workflowagent.New(workflowagent.Config{     [](#__codelineno-13-9)    Name:  "routing_workflow",    [](#__codelineno-13-10)    Edges: eb.Build(), [](#__codelineno-13-11)})`

For complete, runnable routing examples see: [string routing](https://github.com/google/adk-go/tree/v2/examples/workflow/routing/string), [int / multi-value routing](https://github.com/google/adk-go/tree/v2/examples/workflow/routing/int), and [LLM-driven routing](https://github.com/google/adk-go/tree/v2/examples/workflow/routing/llm).

Prebuilt agents: encoding routing in state

When using `sequentialagent` / `parallelagent` / `loopagent` instead of the graph engine, there is no `Event.Routes` dispatch. Encode the routing decision in session state via `OutputKey` and let downstream agents inspect it in their `Instruction` template, or use a `loopagent` with an `Escalate`\-based exit — see the [loop and escalation example](#loop-and-escalation-exit) below.

## Parallel tasks: fan out and join paths[¶](#parallel-tasks-fan-out-and-join-paths "Permanent link")

You can create graphs that split execution across multiple, parallel nodes, and typically you need to assemble the output of each node for further processing. This task execution pattern has two stages. The workflow first fans out when it starts multiple parallel tasks, and then it re-joins those paths when those tasks are completed before proceeding to the next step.

![Tasks connecting to a JoinNode](./images/img_3223482bd1.svg)

**Figure 2.** The output of parallel task nodes can be assembled and joined before passing results to the next step.

PythonTypeScriptGo

You accomplish the join step by using a ***JoinNode*** object, which waits for each parallel task to complete and then passes the collection of outputs from these nodes to the next node.

`[](#__codelineno-14-1)from google.adk.workflow import JoinNode [](#__codelineno-14-2)[](#__codelineno-14-3)my_join_node = JoinNode(name="my_join_node") [](#__codelineno-14-4)[](#__codelineno-14-5)edges=[     [](#__codelineno-14-6)    ("START", parallel_task_A, my_join_node),    [](#__codelineno-14-7)    ("START", parallel_task_B, my_join_node),    [](#__codelineno-14-8)    ("START", parallel_task_C, my_join_node),    [](#__codelineno-14-9)    (my_join_node, final_task_D), [](#__codelineno-14-10)]`

A `JoinNode` is the fan-in barrier. This logic mechanism waits for every predecessor task to complete, and then passes its successor a record keyed by predecessor node name:

``[](#__codelineno-15-1)import { JoinNode, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-15-2)[](#__codelineno-15-3)const parallelTaskA = node(   [](#__codelineno-15-4)  (_ctx: NodeContext, text: string) => text.toUpperCase(),  [](#__codelineno-15-5)  { name: 'parallel_task_A' }, [](#__codelineno-15-6)); [](#__codelineno-15-7)[](#__codelineno-15-8)const parallelTaskB = node((_ctx: NodeContext, text: string) => text.length, {   [](#__codelineno-15-9)  name: 'parallel_task_B', [](#__codelineno-15-10)}); [](#__codelineno-15-11)[](#__codelineno-15-12)const parallelTaskC = node(   [](#__codelineno-15-13)  (_ctx: NodeContext, text: string) => text.split('').reverse().join(''),  [](#__codelineno-15-14)  { name: 'parallel_task_C' }, [](#__codelineno-15-15)); [](#__codelineno-15-16)[](#__codelineno-15-17)const myJoinNode = new JoinNode({ name: 'my_join_node' }); [](#__codelineno-15-18)[](#__codelineno-15-19)const finalTaskD = node(   [](#__codelineno-15-20)  (_ctx: NodeContext, results: Record<string, unknown>) =>    [](#__codelineno-15-21)    [      [](#__codelineno-15-22)      `Uppercase: ${results['parallel_task_A']}`,      [](#__codelineno-15-23)      `Length:    ${results['parallel_task_B']}`,      [](#__codelineno-15-24)      `Reversed:  ${results['parallel_task_C']}`,    [](#__codelineno-15-25)    ].join('\n'),  [](#__codelineno-15-26)  { name: 'final_task_D' }, [](#__codelineno-15-27)); [](#__codelineno-15-28)[](#__codelineno-15-29)export const rootAgent = new Workflow({   [](#__codelineno-15-30)  name: 'fan_out_workflow',  [](#__codelineno-15-31)  edges: [    [](#__codelineno-15-32)    ['START', parallelTaskA, myJoinNode],    [](#__codelineno-15-33)    ['START', parallelTaskB, myJoinNode],    [](#__codelineno-15-34)    ['START', parallelTaskC, myJoinNode],    [](#__codelineno-15-35)    [myJoinNode, finalTaskD],  [](#__codelineno-15-36)  ], [](#__codelineno-15-37)});``

ADK Go v2.0.0 provides `workflow.NewJoinNode` for true fan-in in the graph engine: fan-out edges from `workflow.Start` (or any shared source node) feed in parallel to the join node, which waits for all of them to complete before emitting a `map[string]any` keyed by predecessor node name to the next node.

`workflow.EdgeBuilder` makes the fan-out / fan-in wiring concise with its dedicated `AddFanOut` and `AddFanIn` helpers (as shown in the [complex workflow example](https://github.com/google/adk-go/tree/v2/examples/workflow/complex)):

`[](#__codelineno-16-1)gatherNode := workflow.NewJoinNode("gather") [](#__codelineno-16-2)[](#__codelineno-16-3)eb := workflow.NewEdgeBuilder() [](#__codelineno-16-4)eb.AddFanOut(workflow.Start, researchNodeA, researchNodeB, researchNodeC) [](#__codelineno-16-5)eb.AddFanIn(gatherNode, researchNodeA, researchNodeB, researchNodeC) [](#__codelineno-16-6)eb.Add(gatherNode, formatNode) [](#__codelineno-16-7)eb.Add(formatNode, synthesisNode) [](#__codelineno-16-8)[](#__codelineno-16-9)rootAgent, _ := workflowagent.New(workflowagent.Config{     [](#__codelineno-16-10)    Name:  "research_pipeline",    [](#__codelineno-16-11)    Edges: eb.Build(), [](#__codelineno-16-12)})`

The following snippet shows the complete fan-out / join pattern using `workflow.NewJoinNode` and `EdgeBuilder.AddFanOut` / `AddFanIn`:

`[](#__codelineno-17-1)// newParallelFanOut builds a fan-out / join workflow using the v2 graph engine. [](#__codelineno-17-2)// Three research nodes run in parallel from Start; workflow.NewJoinNode waits [](#__codelineno-17-3)// for all of them to complete and emits a map[nodeName]output to the format [](#__codelineno-17-4)// node, which assembles the results for a synthesis node. [](#__codelineno-17-5)// [](#__codelineno-17-6)// Graph topology: [](#__codelineno-17-7)// [](#__codelineno-17-8)//  START ─┬─> research_A ──┐ [](#__codelineno-17-9)//         ├─> research_B ──┼─> gather (JoinNode) ─> format ─> synthesis [](#__codelineno-17-10)//         └─> research_C ──┘ [](#__codelineno-17-11)// [](#__codelineno-17-12)// Python equivalent: [](#__codelineno-17-13)// [](#__codelineno-17-14)//  edges=[ [](#__codelineno-17-15)//      ("START", research_A, my_join_node), [](#__codelineno-17-16)//      ("START", research_B, my_join_node), [](#__codelineno-17-17)//      ("START", research_C, my_join_node), [](#__codelineno-17-18)//      (my_join_node, format_node), [](#__codelineno-17-19)//      (format_node, synthesis_node), [](#__codelineno-17-20)//  ] [](#__codelineno-17-21)func newParallelFanOut() (agent.Agent, error) {     [](#__codelineno-17-22)    researchA := workflow.NewFunctionNode("research_A",        [](#__codelineno-17-23)        func(_ agent.Context, _ any) (string, error) {            [](#__codelineno-17-24)            return "Fact about renewable energy.", nil        [](#__codelineno-17-25)        },        [](#__codelineno-17-26)        workflow.NodeConfig{},    [](#__codelineno-17-27)    )    [](#__codelineno-17-28)    researchB := workflow.NewFunctionNode("research_B",        [](#__codelineno-17-29)        func(_ agent.Context, _ any) (string, error) {            [](#__codelineno-17-30)            return "Fact about electric vehicles.", nil        [](#__codelineno-17-31)        },        [](#__codelineno-17-32)        workflow.NodeConfig{},    [](#__codelineno-17-33)    )    [](#__codelineno-17-34)    researchC := workflow.NewFunctionNode("research_C",        [](#__codelineno-17-35)        func(_ agent.Context, _ any) (string, error) {            [](#__codelineno-17-36)            return "Fact about carbon capture.", nil        [](#__codelineno-17-37)        },        [](#__codelineno-17-38)        workflow.NodeConfig{},    [](#__codelineno-17-39)    ) [](#__codelineno-17-40)    [](#__codelineno-17-41)    // workflow.NewJoinNode waits for all predecessors (research_A, research_B,    [](#__codelineno-17-42)    // research_C) to complete and emits a map[nodeName]output to its successor.    [](#__codelineno-17-43)    gatherNode := workflow.NewJoinNode("gather") [](#__codelineno-17-44)    [](#__codelineno-17-45)    // formatNode receives map[string]any from gatherNode and assembles a    [](#__codelineno-17-46)    // combined prompt string.    [](#__codelineno-17-47)    formatNode := workflow.NewFunctionNode("format",        [](#__codelineno-17-48)        func(_ agent.Context, results map[string]any) (string, error) {            [](#__codelineno-17-49)            return fmt.Sprintf("A: %v\nB: %v\nC: %v",                [](#__codelineno-17-50)                results["research_A"],                [](#__codelineno-17-51)                results["research_B"],                [](#__codelineno-17-52)                results["research_C"],            [](#__codelineno-17-53)            ), nil        [](#__codelineno-17-54)        },        [](#__codelineno-17-55)        workflow.NodeConfig{},    [](#__codelineno-17-56)    ) [](#__codelineno-17-57)    [](#__codelineno-17-58)    synthesisNode := workflow.NewFunctionNode("synthesis",        [](#__codelineno-17-59)        func(_ agent.Context, prompt string) (string, error) {            [](#__codelineno-17-60)            return "Combined report: " + prompt, nil        [](#__codelineno-17-61)        },        [](#__codelineno-17-62)        workflow.NodeConfig{},    [](#__codelineno-17-63)    ) [](#__codelineno-17-64)    [](#__codelineno-17-65)    // EdgeBuilder.AddFanOut fans workflow.Start out to all three research nodes.    [](#__codelineno-17-66)    // EdgeBuilder.AddFanIn routes all three research nodes into gatherNode.    [](#__codelineno-17-67)    eb := workflow.NewEdgeBuilder()    [](#__codelineno-17-68)    eb.AddFanOut(workflow.Start, researchA, researchB, researchC)    [](#__codelineno-17-69)    eb.AddFanIn(gatherNode, researchA, researchB, researchC)    [](#__codelineno-17-70)    eb.Add(gatherNode, formatNode)    [](#__codelineno-17-71)    eb.Add(formatNode, synthesisNode) [](#__codelineno-17-72)    [](#__codelineno-17-73)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-17-74)        Name:        "fan_out_workflow",        [](#__codelineno-17-75)        Description: "Parallel research fan-out with JoinNode barrier and synthesis.",        [](#__codelineno-17-76)        Edges:       eb.Build(),    [](#__codelineno-17-77)    }) [](#__codelineno-17-78)}`

Caution: nodes that feed a JoinNode must produce output

A `JoinNode` releases only after all of its predecessor nodes finish. Make sure that every node that feeds a join has an output of its own, and attach a retry configuration to any node that can fail. A predecessor that finishes without an output leaves the join with no value for that branch, and the resulting failure appears downstream, away from the node that caused it.

## Nested workflows[¶](#nested-workflows "Permanent link")

When building more complex workflows, you may want to encapsulate the functionality for specific tasks into reusable workflows. One or more workflow agents can be used as a sub-agent within another workflow agent to accomplish this goal.

![Nested Workflows inside a parent Workflow](./images/img_44ba4c28c9.svg)

**Figure 3.** Nested workflow agents as sub-agents inside a parent workflow.

PythonTypeScriptGo

`[](#__codelineno-18-1)from google.adk import Workflow [](#__codelineno-18-2)[](#__codelineno-18-3)root_agent = Workflow(     [](#__codelineno-18-4)    name="parent_workflow",    [](#__codelineno-18-5)    edges=[       [](#__codelineno-18-6)       ("START", task_A1, router),       [](#__codelineno-18-7)       (router, {            [](#__codelineno-18-8)            "RUN_WORKFLOW_B": workflow_B,            [](#__codelineno-18-9)            "RUN_WORKFLOW_C": workflow_C,            [](#__codelineno-18-10)            },       [](#__codelineno-18-11)       ),    [](#__codelineno-18-12)    ], [](#__codelineno-18-13))`

#### Nested workflow data output[¶](#nested-workflow-data-output "Permanent link")

Output for nested Workflow objects works slightly differently from individual nodes. When the nested workflow completes one of its nodes, it transmits data to the next node in the nested workflow's graph *and* the system bubbles up the Event for that node to the parent workflow for process traceability. When the nested workflow completes the last node in its process, the parent node extracts data from the final leaf nodes and emits it as the output of the nested workflow.

A `Workflow` is itself a node, so you can use one inside another workflow's edges to encapsulate a reusable sub-process:

``[](#__codelineno-19-1)import { createEvent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-19-2)[](#__codelineno-19-3)const taskA1 = node(   [](#__codelineno-19-4)  (_ctx: NodeContext, nodeInput: string) => nodeInput.trim(),  [](#__codelineno-19-5)  {    [](#__codelineno-19-6)    name: 'task_A1',  [](#__codelineno-19-7)  }, [](#__codelineno-19-8)); [](#__codelineno-19-9)[](#__codelineno-19-10)const router = node(   [](#__codelineno-19-11)  (_ctx: NodeContext, text: string) =>    [](#__codelineno-19-12)    createEvent({      [](#__codelineno-19-13)      route: text === text.toUpperCase() ? 'RUN_WORKFLOW_C' : 'RUN_WORKFLOW_B',      [](#__codelineno-19-14)      output: text,    [](#__codelineno-19-15)    }),  [](#__codelineno-19-16)  { name: 'router' }, [](#__codelineno-19-17)); [](#__codelineno-19-18)[](#__codelineno-19-19)/**  [](#__codelineno-19-20) * Upper-cases the first letter of each word. [](#__codelineno-19-21) * [](#__codelineno-19-22) * Unicode-aware on purpose: `\b\w` is ASCII-only, so `ü` never matches — and [](#__codelineno-19-23) * the word boundary it creates before the *next* ASCII letter upper-cases that [](#__codelineno-19-24) * one instead ("strässe" -> "SträSse"). A letter whose uppercase form is more [](#__codelineno-19-25) * than one code point (German `ß` -> "SS") is left alone rather than mangled. [](#__codelineno-19-26) */ [](#__codelineno-19-27)const titleCase = (text: string) =>   [](#__codelineno-19-28)  text.replace(/(^|\P{L})(\p{L})/gu, (_match, sep: string, ch: string) => {    [](#__codelineno-19-29)    const upper = ch.toUpperCase();    [](#__codelineno-19-30)    return sep + ([...upper].length === 1 ? upper : ch);  [](#__codelineno-19-31)  }); [](#__codelineno-19-32)[](#__codelineno-19-33)const workflowB = new Workflow({   [](#__codelineno-19-34)  name: 'workflow_B',  [](#__codelineno-19-35)  edges: [    [](#__codelineno-19-36)    [      [](#__codelineno-19-37)      'START',      [](#__codelineno-19-38)      node((_ctx: NodeContext, text: string) => titleCase(text), {        [](#__codelineno-19-39)        name: 'b_title_case',      [](#__codelineno-19-40)      }),      [](#__codelineno-19-41)      node((_ctx: NodeContext, text: string) => `[B] ${text}`, {        [](#__codelineno-19-42)        name: 'b_frame',      [](#__codelineno-19-43)      }),    [](#__codelineno-19-44)    ],  [](#__codelineno-19-45)  ], [](#__codelineno-19-46)}); [](#__codelineno-19-47)[](#__codelineno-19-48)const workflowC = new Workflow({   [](#__codelineno-19-49)  name: 'workflow_C',  [](#__codelineno-19-50)  edges: [    [](#__codelineno-19-51)    [      [](#__codelineno-19-52)      'START',      [](#__codelineno-19-53)      node((_ctx: NodeContext, text: string) => text.toLowerCase(), {        [](#__codelineno-19-54)        name: 'c_lower_case',      [](#__codelineno-19-55)      }),      [](#__codelineno-19-56)      node((_ctx: NodeContext, text: string) => `[C] ${text}`, {        [](#__codelineno-19-57)        name: 'c_frame',      [](#__codelineno-19-58)      }),    [](#__codelineno-19-59)    ],  [](#__codelineno-19-60)  ], [](#__codelineno-19-61)}); [](#__codelineno-19-62)[](#__codelineno-19-63)export const rootAgent = new Workflow({   [](#__codelineno-19-64)  name: 'parent_workflow',  [](#__codelineno-19-65)  edges: [    [](#__codelineno-19-66)    ['START', taskA1, router],    [](#__codelineno-19-67)    [      [](#__codelineno-19-68)      router,      [](#__codelineno-19-69)      {        [](#__codelineno-19-70)        RUN_WORKFLOW_B: workflowB,        [](#__codelineno-19-71)        RUN_WORKFLOW_C: workflowC,      [](#__codelineno-19-72)      },    [](#__codelineno-19-73)    ],  [](#__codelineno-19-74)  ], [](#__codelineno-19-75)});``

**Nested workflow data output.** While the inner workflow runs, each of its node events bubbles up to the parent for traceability. When it finishes, the output of its terminal node becomes the output of the nested-workflow node.

ADK Go v2.0.0 supports nested workflows in two complementary ways:

**Graph engine** (`workflowagent` + `workflow.Edge`): A `workflowagent` created with `workflowagent.New` is itself an `agent.Agent`, so it can be wrapped with `workflow.NewAgentNode` and used as a node inside another workflow's `edges` slice. The inner workflow runs to completion as a single node from the outer graph's perspective, and its terminal output is emitted as the node output on the outer graph's edge:

`[](#__codelineno-20-1)innerNode, _ := workflow.NewAgentNode(innerWorkflowAgent, workflow.NodeConfig{}) [](#__codelineno-20-2)[](#__codelineno-20-3)outerEdges := workflow.Chain(workflow.Start, outerStepNode, innerNode, finalNode) [](#__codelineno-20-4)rootAgent, _ := workflowagent.New(workflowagent.Config{     [](#__codelineno-20-5)    Name:  "parent_workflow",    [](#__codelineno-20-6)    Edges: outerEdges, [](#__codelineno-20-7)})`

The following snippet shows both the inner and outer graph construction. `workflow.NewAgentNode` wraps the inner `workflowagent` so it can be placed in the outer graph's `workflow.Chain`:

`[](#__codelineno-21-1)// newNestedWorkflows shows how to nest one workflowagent inside another using [](#__codelineno-21-2)// the v2 graph engine. The inner workflowagent is wrapped with [](#__codelineno-21-3)// workflow.NewAgentNode and placed as a node in the outer graph's edge slice. [](#__codelineno-21-4)// From the outer graph's perspective the inner workflow is a single node that [](#__codelineno-21-5)// runs to completion before the edge to finalNode is followed. [](#__codelineno-21-6)// [](#__codelineno-21-7)// Python equivalent: [](#__codelineno-21-8)// [](#__codelineno-21-9)//  root_agent = Workflow( [](#__codelineno-21-10)//      name="parent_workflow", [](#__codelineno-21-11)//      edges=[("START", task_A1, workflow_B, final_node)], [](#__codelineno-21-12)//  ) [](#__codelineno-21-13)func newNestedWorkflows() (agent.Agent, error) {     [](#__codelineno-21-14)    // --- Inner workflow B ---    [](#__codelineno-21-15)    innerStep1 := workflow.NewFunctionNode("inner_step_1",        [](#__codelineno-21-16)        func(_ agent.Context, input string) (string, error) {            [](#__codelineno-21-17)            return "[ES] " + input, nil // simulate translation to Spanish        [](#__codelineno-21-18)        },        [](#__codelineno-21-19)        workflow.NodeConfig{},    [](#__codelineno-21-20)    )    [](#__codelineno-21-21)    innerStep2 := workflow.NewFunctionNode("inner_step_2",        [](#__codelineno-21-22)        func(_ agent.Context, spanish string) (string, error) {            [](#__codelineno-21-23)            return "[EN] " + spanish, nil // simulate translation back to English        [](#__codelineno-21-24)        },        [](#__codelineno-21-25)        workflow.NodeConfig{},    [](#__codelineno-21-26)    ) [](#__codelineno-21-27)    [](#__codelineno-21-28)    // workflowB is a self-contained inner graph.    [](#__codelineno-21-29)    workflowB, err := workflowagent.New(workflowagent.Config{        [](#__codelineno-21-30)        Name:        "workflow_B",        [](#__codelineno-21-31)        Description: "Translates input to Spanish then back to English.",        [](#__codelineno-21-32)        Edges:       workflow.Chain(workflow.Start, innerStep1, innerStep2),    [](#__codelineno-21-33)    })    [](#__codelineno-21-34)    if err != nil {        [](#__codelineno-21-35)        return nil, fmt.Errorf("workflowB: %w", err)    [](#__codelineno-21-36)    } [](#__codelineno-21-37)    [](#__codelineno-21-38)    // --- Outer graph ---    [](#__codelineno-21-39)    taskA1 := workflow.NewFunctionNode("task_A1",        [](#__codelineno-21-40)        func(_ agent.Context, input string) (string, error) {            [](#__codelineno-21-41)            return "Summary: " + strings.TrimSpace(input), nil        [](#__codelineno-21-42)        },        [](#__codelineno-21-43)        workflow.NodeConfig{},    [](#__codelineno-21-44)    ) [](#__codelineno-21-45)    [](#__codelineno-21-46)    finalNode := workflow.NewFunctionNode("final_node",        [](#__codelineno-21-47)        func(_ agent.Context, result string) (string, error) {            [](#__codelineno-21-48)            return "Final: " + result, nil        [](#__codelineno-21-49)        },        [](#__codelineno-21-50)        workflow.NodeConfig{},    [](#__codelineno-21-51)    ) [](#__codelineno-21-52)    [](#__codelineno-21-53)    // workflow.NewAgentNode wraps workflowB so it can be placed as a node    [](#__codelineno-21-54)    // in the outer graph's edges slice.    [](#__codelineno-21-55)    innerNode, err := workflow.NewAgentNode(workflowB, workflow.NodeConfig{})    [](#__codelineno-21-56)    if err != nil {        [](#__codelineno-21-57)        return nil, fmt.Errorf("NewAgentNode(workflowB): %w", err)    [](#__codelineno-21-58)    } [](#__codelineno-21-59)    [](#__codelineno-21-60)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-21-61)        Name:        "parent_workflow",        [](#__codelineno-21-62)        Description: "Runs task_A1 then the nested workflow_B then final_node.",        [](#__codelineno-21-63)        Edges:       workflow.Chain(workflow.Start, taskA1, innerNode, finalNode),        [](#__codelineno-21-64)        SubAgents:   []agent.Agent{workflowB},    [](#__codelineno-21-65)    }) [](#__codelineno-21-66)}`

## Loop and escalation exit[¶](#loop-and-escalation-exit "Permanent link")

A loop repeats a set of steps until a termination condition is met. In Python this is expressed as a back-edge in the `edges` graph that routes back to an earlier node. In ADK Go v2.0.0, the graph engine supports the same pattern directly: add an edge from a downstream node back to an earlier node with a route condition, and the engine re-activates the target node with a fresh lifecycle on each iteration.

PythonTypeScriptGo

`[](#__codelineno-22-1)from google.adk import Event, Workflow [](#__codelineno-22-2) [](#__codelineno-22-3)[](#__codelineno-22-4)def router(node_input: str):     [](#__codelineno-22-5)    """Route to task B or C based on node_input."""    [](#__codelineno-22-6)    if condition(node_input):        [](#__codelineno-22-7)        return Event(route="RUN_TASK_C")    [](#__codelineno-22-8)    return Event(route="RUN_TASK_B") [](#__codelineno-22-9)[](#__codelineno-22-10)root_agent = Workflow(     [](#__codelineno-22-11)    name="routing_workflow",    [](#__codelineno-22-12)    edges=[        [](#__codelineno-22-13)        ("START", task_A_node, router),        [](#__codelineno-22-14)        (router,          [](#__codelineno-22-15)          {            [](#__codelineno-22-16)            "RUN_TASK_B": task_B_node,            [](#__codelineno-22-17)            "RUN_TASK_C": task_C_node,          [](#__codelineno-22-18)          },        [](#__codelineno-22-19)        ),    [](#__codelineno-22-20)    ], [](#__codelineno-22-21))`

A loop is a back-edge: a downstream node routes back to an earlier node, and the engine re-activates that node with a fresh lifecycle on each iteration. The loop exits when the router selects the terminal branch:

``[](#__codelineno-23-1)import { createEvent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-23-2)[](#__codelineno-23-3)interface Draft {   [](#__codelineno-23-4)  topic: string;  [](#__codelineno-23-5)  bullets: string[]; [](#__codelineno-23-6)} [](#__codelineno-23-7)[](#__codelineno-23-8)/** The critic is satisfied once the draft has at least this many bullets. */ [](#__codelineno-23-9)const REQUIRED_BULLETS = 3; [](#__codelineno-23-10)[](#__codelineno-23-11)const seedDraft = node(   [](#__codelineno-23-12)  (_ctx: NodeContext, topic: string): Draft => ({    [](#__codelineno-23-13)    topic: topic.trim(),    [](#__codelineno-23-14)    bullets: [`${topic.trim()} — point 1`],  [](#__codelineno-23-15)  }),  [](#__codelineno-23-16)  { name: 'seed_draft' }, [](#__codelineno-23-17)); [](#__codelineno-23-18)[](#__codelineno-23-19)const critic = node(   [](#__codelineno-23-20)  (_ctx: NodeContext, draft: Draft) =>    [](#__codelineno-23-21)    createEvent({      [](#__codelineno-23-22)      route: draft.bullets.length >= REQUIRED_BULLETS ? 'DONE' : 'REVISE',      [](#__codelineno-23-23)      output: draft,    [](#__codelineno-23-24)    }),  [](#__codelineno-23-25)  { name: 'critic' }, [](#__codelineno-23-26)); [](#__codelineno-23-27)[](#__codelineno-23-28)const refine = node(   [](#__codelineno-23-29)  (_ctx: NodeContext, draft: Draft): Draft => ({    [](#__codelineno-23-30)    ...draft,    [](#__codelineno-23-31)    bullets: [      [](#__codelineno-23-32)      ...draft.bullets,      [](#__codelineno-23-33)      `${draft.topic} — point ${draft.bullets.length + 1}`,    [](#__codelineno-23-34)    ],  [](#__codelineno-23-35)  }),  [](#__codelineno-23-36)  { name: 'refine' }, [](#__codelineno-23-37)); [](#__codelineno-23-38)[](#__codelineno-23-39)const finalize = node(   [](#__codelineno-23-40)  (_ctx: NodeContext, draft: Draft) =>    [](#__codelineno-23-41)    `Approved after ${draft.bullets.length} bullets:\n` +    [](#__codelineno-23-42)    draft.bullets.map((b) => `  • ${b}`).join('\n'),  [](#__codelineno-23-43)  { name: 'finalize' }, [](#__codelineno-23-44)); [](#__codelineno-23-45)[](#__codelineno-23-46)export const rootAgent = new Workflow({   [](#__codelineno-23-47)  name: 'loop_workflow',  [](#__codelineno-23-48)  edges: [    [](#__codelineno-23-49)    ['START', seedDraft, critic],    [](#__codelineno-23-50)    [critic, { REVISE: refine, DONE: finalize }],    [](#__codelineno-23-51)    [refine, critic],  [](#__codelineno-23-52)  ], [](#__codelineno-23-53)});``

The following example uses the graph engine with `workflow.EdgeBuilder`. The critic node returns a verdict, a router node sets `Event.Routes`, and a back-edge from the refiner to the critic creates the loop. When the critic is satisfied it routes to the terminal `done` node instead:

``[](#__codelineno-24-1)// draft carries the working document through the refinement loop. [](#__codelineno-24-2)type draft struct {     [](#__codelineno-24-3)    Text string `json:"text"` [](#__codelineno-24-4)} [](#__codelineno-24-5)[](#__codelineno-24-6)// criticResult is emitted by the critic node with the review verdict and [](#__codelineno-24-7)// optional suggestions. The router reads Verdict to set Event.Routes. [](#__codelineno-24-8)type criticResult struct {     [](#__codelineno-24-9)    Verdict     string `json:"verdict"`     // "REFINE" or "DONE"    [](#__codelineno-24-10)    Suggestions string `json:"suggestions"` // non-empty when Verdict == "REFINE" [](#__codelineno-24-11)} [](#__codelineno-24-12)[](#__codelineno-24-13)// writeDraft is the initial writer node: produces the first draft from the [](#__codelineno-24-14)// user's topic. Its typed return value becomes the input to the critic node [](#__codelineno-24-15)// via Event.Output — no session state writes needed. [](#__codelineno-24-16)func writeDraft(_ agent.Context, topic string) (draft, error) {     [](#__codelineno-24-17)    // In a real workflow this would call an LLM; here we return a stub.    [](#__codelineno-24-18)    return draft{Text: "Draft about " + topic + ": placeholder content."}, nil [](#__codelineno-24-19)} [](#__codelineno-24-20)[](#__codelineno-24-21)// reviewDraft is the critic node: inspects the draft and returns a verdict. [](#__codelineno-24-22)// "DONE" exits the loop; "REFINE" triggers a back-edge to the refiner. [](#__codelineno-24-23)func reviewDraft(_ agent.Context, d draft) (criticResult, error) {     [](#__codelineno-24-24)    // Simulate a critic: approve once the draft contains "improved".    [](#__codelineno-24-25)    if strings.Contains(d.Text, "improved") {        [](#__codelineno-24-26)        return criticResult{Verdict: "DONE"}, nil    [](#__codelineno-24-27)    }    [](#__codelineno-24-28)    return criticResult{        [](#__codelineno-24-29)        Verdict:     "REFINE",        [](#__codelineno-24-30)        Suggestions: "Add more detail and mark the text as improved.",    [](#__codelineno-24-31)    }, nil [](#__codelineno-24-32)} [](#__codelineno-24-33)[](#__codelineno-24-34)// routeVerdict reads the critic's verdict and sets Event.Routes so the [](#__codelineno-24-35)// graph engine dispatches to either the refiner or the done node. [](#__codelineno-24-36)// Returning nil suppresses the automatic terminal event. [](#__codelineno-24-37)func routeVerdict(ctx agent.Context, r criticResult, emit func(*session.Event) error) (any, error) {     [](#__codelineno-24-38)    ev := session.NewEvent(ctx, ctx.InvocationID())    [](#__codelineno-24-39)    ev.Routes = []string{r.Verdict}    [](#__codelineno-24-40)    ev.Output = r // forward the full result to the chosen successor    [](#__codelineno-24-41)    if err := emit(ev); err != nil {        [](#__codelineno-24-42)        return nil, err    [](#__codelineno-24-43)    }    [](#__codelineno-24-44)    return nil, nil [](#__codelineno-24-45)} [](#__codelineno-24-46)[](#__codelineno-24-47)// refineDraft applies the critic's suggestions and returns the improved draft. [](#__codelineno-24-48)// Its output feeds back to the critic node via the back-edge. [](#__codelineno-24-49)func refineDraft(_ agent.Context, r criticResult) (draft, error) {     [](#__codelineno-24-50)    return draft{Text: "improved draft incorporating: " + r.Suggestions}, nil [](#__codelineno-24-51)} [](#__codelineno-24-52)[](#__codelineno-24-53)// reportDone is the terminal node, reached only when the critic is satisfied. [](#__codelineno-24-54)func reportDone(_ agent.Context, r criticResult) (string, error) {     [](#__codelineno-24-55)    return "Refinement complete. Final verdict: " + r.Verdict, nil [](#__codelineno-24-56)} [](#__codelineno-24-57)[](#__codelineno-24-58)// newLoopEscalate builds an iterative document-refinement workflow using the [](#__codelineno-24-59)// graph engine. The critic node emits a route ("REFINE" or "DONE") and the [](#__codelineno-24-60)// engine dispatches to either the refiner (which loops back to the critic via [](#__codelineno-24-61)// a back-edge) or the terminal done node. [](#__codelineno-24-62)// [](#__codelineno-24-63)// Graph topology: [](#__codelineno-24-64)// [](#__codelineno-24-65)//  START → writer → critic → router ─┬─ "REFINE" → refiner ──┐ [](#__codelineno-24-66)//                                     └─ "DONE"   → done       │ [](#__codelineno-24-67)//                   ▲_______________________________┘ (back-edge) [](#__codelineno-24-68)// [](#__codelineno-24-69)// Python equivalent: [](#__codelineno-24-70)// [](#__codelineno-24-71)//  edges=[ [](#__codelineno-24-72)//      ("START", writer_node, critic_node, router), [](#__codelineno-24-73)//      (router, {"REFINE": refiner_node, "DONE": done_node}), [](#__codelineno-24-74)//      (refiner_node, critic_node),  # back-edge creates the loop [](#__codelineno-24-75)//  ] [](#__codelineno-24-76)func newLoopEscalate() (agent.Agent, error) {     [](#__codelineno-24-77)    writerNode := workflow.NewFunctionNode("writer", writeDraft, workflow.NodeConfig{})    [](#__codelineno-24-78)    criticNode := workflow.NewFunctionNode("critic", reviewDraft, workflow.NodeConfig{})    [](#__codelineno-24-79)    routerNode := workflow.NewEmittingFunctionNode("router", routeVerdict, workflow.NodeConfig{})    [](#__codelineno-24-80)    refinerNode := workflow.NewFunctionNode("refiner", refineDraft, workflow.NodeConfig{})    [](#__codelineno-24-81)    doneNode := workflow.NewFunctionNode("done", reportDone, workflow.NodeConfig{}) [](#__codelineno-24-82)    [](#__codelineno-24-83)    // Build the edges. The back-edge from refinerNode to criticNode creates    [](#__codelineno-24-84)    // the loop; the graph engine re-activates criticNode with a fresh    [](#__codelineno-24-85)    // lifecycle on each iteration.    [](#__codelineno-24-86)    eb := workflow.NewEdgeBuilder()    [](#__codelineno-24-87)    eb.Add(workflow.Start, writerNode)    [](#__codelineno-24-88)    eb.Add(writerNode, criticNode)    [](#__codelineno-24-89)    eb.Add(criticNode, routerNode)    [](#__codelineno-24-90)    eb.AddRoute(routerNode, refinerNode, workflow.StringRoute("REFINE"))    [](#__codelineno-24-91)    eb.AddRoute(routerNode, doneNode, workflow.StringRoute("DONE"))    [](#__codelineno-24-92)    eb.AddRoute(refinerNode, criticNode, workflow.Default) // back-edge: loop back for another review [](#__codelineno-24-93)    [](#__codelineno-24-94)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-24-95)        Name:        "iterative_writer",        [](#__codelineno-24-96)        Description: "Writes then iteratively refines a document using a critic/refiner loop.",        [](#__codelineno-24-97)        Edges:       eb.Build(),    [](#__codelineno-24-98)    }) [](#__codelineno-24-99)}``

Caution: unbounded graph cycles

A graph cycle is not bounded automatically. Make sure the exit condition eventually becomes true, or express the iteration as a [dynamic workflow](/graphs/dynamic/#loop-route), where the loop runs in your own code and you control its bound.

Back to top