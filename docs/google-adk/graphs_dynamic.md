---
title: "Dynamic workflows - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/graphs/dynamic/
date: 2026-10-10T19:16:35.135Z
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
        -   [Data handling](../data-handling/)
        -   [Human input](../human-input/)
        -    Dynamic workflows [Dynamic workflows](./)
            
            Table of contents
            
            -   [Get started](#get-started)
            -   [Building blocks: nodes and workflows](#building-blocks-nodes-and-workflows)
                
                -   [Nodes](#node)
                -   [Workflows](#workflows)
                
            -   [Data handling](#data-handling)
            -   [Workflow routes](#workflow-routes)
                
                -   [Sequence route](#sequence-route)
                -   [Loop route](#loop-route)
                -   [Parallel execution routes](#parallel-execution-routes)
                
            -   [Human input](#human-input)
            -   [Advanced features](#advanced-features)
                
                -   [Execution IDs](#execution-ids)
                    
                    -   [Custom execution IDs](#custom-execution-ids)
                    
                
            
        
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

-   [Get started](#get-started)
-   [Building blocks: nodes and workflows](#building-blocks-nodes-and-workflows)
    
    -   [Nodes](#node)
    -   [Workflows](#workflows)
    
-   [Data handling](#data-handling)
-   [Workflow routes](#workflow-routes)
    
    -   [Sequence route](#sequence-route)
    -   [Loop route](#loop-route)
    -   [Parallel execution routes](#parallel-execution-routes)
    
-   [Human input](#human-input)
-   [Advanced features](#advanced-features)
    
    -   [Execution IDs](#execution-ids)
        
        -   [Custom execution IDs](#custom-execution-ids)
        
    

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Graph Workflows](../)

[](https://github.com/google/adk-docs/edit/main/docs/graphs/dynamic.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Dynamic agent workflows[¶](#dynamic-agent-workflows "Permanent link")

Supported in ADKPython v2.0.0TypeScript v2.0.0Go v2.0.0

The ADK framework provides a programmatic way to define workflows as a more flexible and powerful alternative to [graph-based workflows](/graphs/). Using a graph-based approach provides a convenient way to compose multi-step, static process structures with workflow nodes. However, if the logic path for your workflow is more complex, with iterative loops or complex branching logic, a graph-based approach may not suit your needs, or may become too unwieldy to manage.

Dynamic workflows in ADK allow you to put aside graph-based path structures and use the full power of your chosen programming language to build workflows. With dynamic workflows, you can create workflows with simple decorators (Python) or constructor functions (Go), invoke workflow nodes as functions, and build complex routing logic. Here are some of the benefits of dynamic workflows in ADK:

-   **Flexible Control Flow:** Define execution order dynamically using loops, conditionals, and recursion which are difficult or impossible to represent in static graphs.
-   **Programmatic Experience:** Use familiar constructs like `while` loops and `async/await` (Python) or `for` loops and `workflow.RunNode` (Go) instead of graph-based routing.
-   **Automatic Checkpointing:** Dynamic workflows track each node execution. Successful sub-nodes are automatically skipped when resuming the workflow, making complex logic durable and resumable by default.
-   **Encapsulation:** Wrap business logic into *parent* nodes that internally compose lower-level nodes, keeping the overall workflow clean and manageable.

## Get started[¶](#get-started "Permanent link")

The following dynamic workflow code example shows how to define a basic workflow containing a single node with a function:

PythonTypeScriptGo

`[](#__codelineno-0-1)from google.adk import Context [](#__codelineno-0-2)from google.adk import Workflow [](#__codelineno-0-3)from google.adk.workflow import node [](#__codelineno-0-4)from typing import Any [](#__codelineno-0-5)[](#__codelineno-0-6)@node(name="hello_node") [](#__codelineno-0-7)def my_node(node_input: Any):     [](#__codelineno-0-8)    return "Hello World" [](#__codelineno-0-9)[](#__codelineno-0-10)# define a dynamic workflow node [](#__codelineno-0-11)@node(rerun_on_resume=True) [](#__codelineno-0-12)async def my_workflow(ctx: Context, node_input: str) -> str:     [](#__codelineno-0-13)    # run_node executes a node and returns its output    [](#__codelineno-0-14)    result = await ctx.run_node(my_node, node_input="hello")    [](#__codelineno-0-15)    return result [](#__codelineno-0-16)[](#__codelineno-0-17)# Run the workflow [](#__codelineno-0-18)root_agent = Workflow(     [](#__codelineno-0-19)    name="root_agent",    [](#__codelineno-0-20)    edges=[("START", my_workflow)], [](#__codelineno-0-21))`

This example uses the [***@node***](#node) annotation for convenience and to keep the written code as simple as possible. This annotation generates wrappers that allow the code to be run in the context of an ADK dynamic workflow.

TypeScript has no `@node` decorator. Use the `node(fn, options)` factory function instead. The `ctx.runNode()` method is the equivalent of `ctx.run_node()`:

`[](#__codelineno-1-1)import { node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-1-2)[](#__codelineno-1-3)const myNode = node(() => 'Hello World', { name: 'hello_node' }); [](#__codelineno-1-4)[](#__codelineno-1-5)const myWorkflow = node(   [](#__codelineno-1-6)  async (ctx: NodeContext, _nodeInput: string) => {    [](#__codelineno-1-7)    const result = await ctx.runNode(myNode, 'hello');    [](#__codelineno-1-8)    return result.output;  [](#__codelineno-1-9)  },  [](#__codelineno-1-10)  { name: 'my_workflow', rerunOnResume: true }, [](#__codelineno-1-11)); [](#__codelineno-1-12)[](#__codelineno-1-13)export const rootAgent = new Workflow({   [](#__codelineno-1-14)  name: 'root_agent',  [](#__codelineno-1-15)  edges: [['START', myWorkflow]], [](#__codelineno-1-16)});`

When you write an orchestrator node, two details affect how you read results and how the workflow behaves after a pause:

-   The `ctx.runNode()` method resolves to a node result, not to the output value. Read the `.output` property to get the value.
-   An orchestrator that calls `ctx.runNode()` must set `rerunOnResume: true`. This setting causes the node body to re-run on resume, so already-finished children are replayed from their checkpoints instead of being executed again.

In Go, `workflow.NewFunctionNode` replaces the `@node` decorator and `workflow.NewDynamicNode` replaces the `@node(rerun_on_resume=True)` async orchestrator. `workflow.RunNode` is the direct equivalent of `ctx.run_node()`. `workflowagent.New` with `workflow.Chain` replaces `Workflow(edges=[...])`.

Resume behaviour after a human-in-the-loop pause is controlled by `NodeConfig.RerunOnResume` — see [Nodes](#node) below for details.

`[](#__codelineno-2-1)// helloNode is a simple FunctionNode that returns "Hello World". [](#__codelineno-2-2)// In Python this would be written as: [](#__codelineno-2-3)// [](#__codelineno-2-4)//  @node(name="hello_node") [](#__codelineno-2-5)//  def my_node(node_input: Any): [](#__codelineno-2-6)//      return "Hello World" [](#__codelineno-2-7)// [](#__codelineno-2-8)// In Go, workflow.NewFunctionNode wraps the same logic with the [](#__codelineno-2-9)// required node interface, inferring input and output types from [](#__codelineno-2-10)// the generic parameters. [](#__codelineno-2-11)var helloNode = workflow.NewFunctionNode("hello_node",     [](#__codelineno-2-12)    func(_ agent.Context, _ string) (string, error) {        [](#__codelineno-2-13)        return "Hello World", nil    [](#__codelineno-2-14)    },    [](#__codelineno-2-15)    workflow.NodeConfig{}, [](#__codelineno-2-16)) [](#__codelineno-2-17)[](#__codelineno-2-18)// myWorkflow is a dynamic orchestrator node. It calls workflow.RunNode [](#__codelineno-2-19)// to schedule helloNode as a child and returns its output. [](#__codelineno-2-20)// In Python this would be: [](#__codelineno-2-21)// [](#__codelineno-2-22)//  @node(rerun_on_resume=True) [](#__codelineno-2-23)//  async def my_workflow(ctx: Context, node_input: str) -> str: [](#__codelineno-2-24)//      result = await ctx.run_node(my_node, node_input="hello") [](#__codelineno-2-25)//      return result [](#__codelineno-2-26)// [](#__codelineno-2-27)// workflow.NewDynamicNode defaults RerunOnResume to &true, matching the [](#__codelineno-2-28)// Python @node(rerun_on_resume=True) behaviour. [](#__codelineno-2-29)var myWorkflow = workflow.NewDynamicNode[string, string]("my_workflow",     [](#__codelineno-2-30)    func(ctx agent.Context, _ string, _ func(*session.Event) error) (string, error) {        [](#__codelineno-2-31)        return workflow.RunNode[string](ctx, helloNode, "hello")    [](#__codelineno-2-32)    },    [](#__codelineno-2-33)    workflow.NodeConfig{}, [](#__codelineno-2-34)) [](#__codelineno-2-35)[](#__codelineno-2-36)func runGetStarted() error {     [](#__codelineno-2-37)    ctx := context.Background() [](#__codelineno-2-38)    [](#__codelineno-2-39)    // workflowagent.New creates an agent.Agent backed by the workflow engine.    [](#__codelineno-2-40)    // workflow.Chain(workflow.Start, myWorkflow) produces the edges slice    [](#__codelineno-2-41)    // equivalent to Python's edges=[("START", my_workflow)].    [](#__codelineno-2-42)    wa, err := workflowagent.New(workflowagent.Config{        [](#__codelineno-2-43)        Name:        "root_agent",        [](#__codelineno-2-44)        Description: "A minimal dynamic workflow.",        [](#__codelineno-2-45)        Edges:       workflow.Chain(workflow.Start, myWorkflow),    [](#__codelineno-2-46)    })    [](#__codelineno-2-47)    if err != nil {        [](#__codelineno-2-48)        return fmt.Errorf("workflowagent.New: %w", err)    [](#__codelineno-2-49)    } [](#__codelineno-2-50)    [](#__codelineno-2-51)    l := full.NewLauncher()    [](#__codelineno-2-52)    return l.Execute(ctx, &launcher.Config{        [](#__codelineno-2-53)        AgentLoader: agent.NewSingleLoader(wa),    [](#__codelineno-2-54)    }, os.Args[1:]) [](#__codelineno-2-55)}`

## Building blocks: nodes and workflows[¶](#building-blocks-nodes-and-workflows "Permanent link")

Nodes and workflows represent the basic building blocks of ADK's dynamic workflows. These types and functions provide the functionality required to wrap your code so it can be integrated into code-based workflows in ADK.

### Nodes[¶](#node "Permanent link")

A dynamic workflow in ADK is composed of *nodes*. A simple version of a usable workflow node wraps a plain function with the metadata required to run within a workflow.

PythonTypeScriptGo

In Python, the ***@node*** annotation generates the node wrapper, keeping boilerplate to a minimum:

`[](#__codelineno-3-1)@node(name="hello_node") [](#__codelineno-3-2)def my_function_node(node_input: Any):     [](#__codelineno-3-3)    return "Hello World"`

The following code snippet shows the equivalent code *without* the ***@node*** annotation:

`[](#__codelineno-4-1)# base function [](#__codelineno-4-2)def my_function_node(node_input: Any):     [](#__codelineno-4-3)    return "Hello World" [](#__codelineno-4-4)[](#__codelineno-4-5)# FunctionNode wrapper with options [](#__codelineno-4-6)success_node = FunctionNode(     [](#__codelineno-4-7)    my_function_node,    [](#__codelineno-4-8)    name="hello",    [](#__codelineno-4-9)    rerun_on_resume=True, [](#__codelineno-4-10))`

Creating the node wrapper code yourself can be useful if you are wrapping functions from an external library, need to create multiple nodes from the same function with different configurations, or if you are managing node references in a registry for advanced orchestration.

There are two ways to build a node: the `node(fn, options)` factory function, and the explicit `new FunctionNode(name, fn, config)` constructor. Use the constructor when you are wrapping a function from another library, need several differently configured nodes from one function, or keep node references in a registry for advanced orchestration.

``[](#__codelineno-5-1)import { FunctionNode, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-5-2)[](#__codelineno-5-3)/** The plain function both node forms wrap. */ [](#__codelineno-5-4)function myFunctionNode(_ctx: NodeContext, nodeInput: unknown): string {   [](#__codelineno-5-5)  return `Hello ${nodeInput ?? 'World'}`; [](#__codelineno-5-6)} [](#__codelineno-5-7)[](#__codelineno-5-8)const helloNode = node(myFunctionNode, { name: 'hello_node' }); [](#__codelineno-5-9)[](#__codelineno-5-10)const successNode = new FunctionNode('hello', myFunctionNode, {   [](#__codelineno-5-11)  rerunOnResume: true, [](#__codelineno-5-12)});``

In this code sample, the most important option is `rerunOnResume`, which controls what happens when a workflow resumes after a human-in-the-loop pause:

-   **`true` (re-entry):** the node body re-runs from the top. Use this setting for any orchestrator that calls `ctx.runNode()`. The body re-executes, and already-completed child activations are skipped automatically.
-   **`false` (handoff, the leaf default):** the resume payload is routed to the node's successor as input, bypassing the interrupted node.

In Go, `workflow.NewFunctionNode[IN, OUT]` wraps a plain function as a workflow node, inferring input and output types from the generic parameters. There is no decorator syntax; the node is a value that you pass as a child to `workflow.RunNode` inside a dynamic orchestrator:

`[](#__codelineno-6-1)// myFunctionNode demonstrates the explicit NewFunctionNode constructor — [](#__codelineno-6-2)// equivalent to wrapping a function in a FunctionNode manually in Python: [](#__codelineno-6-3)// [](#__codelineno-6-4)//  success_node = FunctionNode(my_function_node, name="hello", rerun_on_resume=True) [](#__codelineno-6-5)// [](#__codelineno-6-6)// Creating the node directly (rather than via @node) is useful when you [](#__codelineno-6-7)// need multiple nodes from the same function with different configurations, [](#__codelineno-6-8)// or when wrapping functions from an external library. [](#__codelineno-6-9)var myFunctionNode = workflow.NewFunctionNode("hello",     [](#__codelineno-6-10)    func(_ agent.Context, _ any) (string, error) {        [](#__codelineno-6-11)        return "Hello World", nil    [](#__codelineno-6-12)    },    [](#__codelineno-6-13)    workflow.NodeConfig{}, [](#__codelineno-6-14)) [](#__codelineno-6-15)[](#__codelineno-6-16)// myFormattingNode is a second function node that the dynamic orchestrator [](#__codelineno-6-17)// calls in sequence, mirroring: [](#__codelineno-6-18)// [](#__codelineno-6-19)//  result_formatted = await ctx.run_node(my_formatting_node, node_input=result) [](#__codelineno-6-20)var myFormattingNode = workflow.NewFunctionNode("format",     [](#__codelineno-6-21)    func(_ agent.Context, in string) (string, error) {        [](#__codelineno-6-22)        return fmt.Sprintf("[formatted] %s", in), nil    [](#__codelineno-6-23)    },    [](#__codelineno-6-24)    workflow.NodeConfig{}, [](#__codelineno-6-25))`

`NodeConfig` holds the same options as Python's `@node` arguments. The most important field is `RerunOnResume *bool`, which controls what happens when a workflow resumes after a human-in-the-loop pause:

-   **`&true` (re-entry mode)**: the interrupted node is re-run from the beginning on resume. Use this for dynamic orchestrator nodes that call `workflow.RunNode` in a loop — the body re-executes and already-completed child activations are skipped automatically (checkpointing). This mirrors Python's `@node(rerun_on_resume=True)`.
-   **`&false` (handoff mode)**: the resume payload is routed directly to the node's successor as input, bypassing the interrupted node entirely. Use this for leaf nodes that simply emit a pause event and expect the human response to flow to the next step.
-   **`nil`**: the default depends on node type. `workflow.NewDynamicNode` automatically sets `nil → &true` (re-entry mode), because an orchestrator body must be re-entered on resume to deliver cached child results. `workflow.NewFunctionNode` and other leaf node constructors leave `nil` as-is, which the engine treats as handoff (`&false`). Explicit `&false` is always respected on any node type.

`[](#__codelineno-7-1)// NewDynamicNode: nil RerunOnResume is automatically set to &true. [](#__codelineno-7-2)// Passing &rerun explicitly is equivalent and makes the intent clear. [](#__codelineno-7-3)rerun := true [](#__codelineno-7-4)orchestratorNode := workflow.NewDynamicNode[string, string]("my_workflow",     [](#__codelineno-7-5)    myOrchestratorfn,    [](#__codelineno-7-6)    workflow.NodeConfig{RerunOnResume: &rerun}, // re-entry: node body re-runs on resume [](#__codelineno-7-7)) [](#__codelineno-7-8)[](#__codelineno-7-9)// NewFunctionNode: nil RerunOnResume stays nil → engine treats as handoff. [](#__codelineno-7-10)handoffNode := workflow.NewFunctionNode("leaf_node",     [](#__codelineno-7-11)    myLeafFn,    [](#__codelineno-7-12)    workflow.NodeConfig{}, // nil RerunOnResume → handoff for FunctionNode [](#__codelineno-7-13))`

### Workflows[¶](#workflows "Permanent link")

In an ADK dynamic workflow, you use a dynamic node as the primary orchestrator for nodes. A dynamic node manages running child nodes and the execution logic (order and paths) for those nodes.

PythonTypeScriptGo

`[](#__codelineno-8-1)@node(rerun_on_resume=True) [](#__codelineno-8-2)async def my_workflow(ctx):     [](#__codelineno-8-3)    # run_node executes a node and returns its output    [](#__codelineno-8-4)    result = await ctx.run_node(my_function_node, node_input="Hello")    [](#__codelineno-8-5)    result_formatted = await ctx.run_node(my_formatting_node, node_input=result)    [](#__codelineno-8-6)    return result_formatted [](#__codelineno-8-7)[](#__codelineno-8-8)# Run the workflow [](#__codelineno-8-9)root_agent = Workflow(     [](#__codelineno-8-10)    name="root_agent",    [](#__codelineno-8-11)    edges=[("START", my_workflow)], [](#__codelineno-8-12))`

The orchestrator is an async function that awaits `ctx.runNode()` for each child step. Wrap it as a node with `rerunOnResume: true` and use it as the graph's only edge:

``[](#__codelineno-9-1)const myFormattingNode = node(   [](#__codelineno-9-2)  (_ctx: NodeContext, nodeInput: string) => `>> ${nodeInput.trim()} <<`,  [](#__codelineno-9-3)  { name: 'my_formatting_node' }, [](#__codelineno-9-4)); [](#__codelineno-9-5)[](#__codelineno-9-6)const myWorkflow = node(   [](#__codelineno-9-7)  async (ctx: NodeContext, nodeInput: unknown) => {    [](#__codelineno-9-8)    const greeted = await ctx.runNode(helloNode, nodeInput);    [](#__codelineno-9-9)    const again = await ctx.runNode(successNode, greeted.output);    [](#__codelineno-9-10)    const formatted = await ctx.runNode(myFormattingNode, again.output);    [](#__codelineno-9-11)    return formatted.output;  [](#__codelineno-9-12)  },  [](#__codelineno-9-13)  { name: 'my_workflow', rerunOnResume: true }, [](#__codelineno-9-14)); [](#__codelineno-9-15)[](#__codelineno-9-16)export const rootAgent = new Workflow({   [](#__codelineno-9-17)  name: 'root_agent',  [](#__codelineno-9-18)  edges: [['START', myWorkflow]], [](#__codelineno-9-19)});``

`workflow.NewDynamicNode` creates an orchestrator whose body calls `workflow.RunNode` for each child step. `workflowagent.New` with `workflow.Chain(workflow.Start, myWorkflow)` is the equivalent of `Workflow(edges=[("START", my_workflow)])`:

`[](#__codelineno-10-1)// orchestratorWorkflow is a dynamic node that schedules two children in [](#__codelineno-10-2)// sequence via workflow.RunNode, equivalent to: [](#__codelineno-10-3)// [](#__codelineno-10-4)//  @node(rerun_on_resume=True) [](#__codelineno-10-5)//  async def my_workflow(ctx): [](#__codelineno-10-6)//      result = await ctx.run_node(my_function_node, node_input="Hello") [](#__codelineno-10-7)//      result_formatted = await ctx.run_node(my_formatting_node, node_input=result) [](#__codelineno-10-8)//      return result_formatted [](#__codelineno-10-9)var orchestratorWorkflow = workflow.NewDynamicNode[string, string]("my_workflow",     [](#__codelineno-10-10)    func(ctx agent.Context, _ string, _ func(*session.Event) error) (string, error) {        [](#__codelineno-10-11)        result, err := workflow.RunNode[string](ctx, myFunctionNode, "Hello")        [](#__codelineno-10-12)        if err != nil {            [](#__codelineno-10-13)            return "", err        [](#__codelineno-10-14)        }        [](#__codelineno-10-15)        return workflow.RunNode[string](ctx, myFormattingNode, result)    [](#__codelineno-10-16)    },    [](#__codelineno-10-17)    workflow.NodeConfig{}, [](#__codelineno-10-18))`

## Data handling[¶](#data-handling "Permanent link")

When using dynamic workflows with ADK, passing data is simpler than [graph-based workflows](/graphs/) because `workflow.RunNode` returns the child node's output directly as a typed Go value — eliminating the need to manually read and write session state keys for data transfer.

PythonTypeScriptGo

`[](#__codelineno-11-1)from google.adk import Context [](#__codelineno-11-2)from google.adk.workflow import node [](#__codelineno-11-3)[](#__codelineno-11-4)@node(rerun_on_resume=True) [](#__codelineno-11-5)async def editorial_workflow(ctx: Context, user_request: str):     [](#__codelineno-11-6)    # Agent Node generates output    [](#__codelineno-11-7)    raw_draft = await ctx.run_node(draft_agent, user_request) [](#__codelineno-11-8)    [](#__codelineno-11-9)    # Function Node formats text    [](#__codelineno-11-10)    formatted_text = await ctx.run_node(format_function_node, raw_draft) [](#__codelineno-11-11)    [](#__codelineno-11-12)    return formatted_text`

You can also pass specific data schemas using a defined class and configure input and output schemas, similar to graph-based workflow nodes:

`[](#__codelineno-12-1)from google.adk import Agent [](#__codelineno-12-2)from google.adk import Context [](#__codelineno-12-3)from google.adk.workflow import node [](#__codelineno-12-4)from pydantic import BaseModel [](#__codelineno-12-5)[](#__codelineno-12-6)class CityTime(BaseModel):     [](#__codelineno-12-7)    time_info: str  # time information    [](#__codelineno-12-8)    city: str       # city name [](#__codelineno-12-9)[](#__codelineno-12-10)@node [](#__codelineno-12-11)def city_time_function(city: str):     [](#__codelineno-12-12)    """Simulate returning the current time in a specified city."""    [](#__codelineno-12-13)    return CityTime(time_info="10:10 AM", city=city) [](#__codelineno-12-14)[](#__codelineno-12-15)city_report_agent = Agent(     [](#__codelineno-12-16)    name="city_report_agent",    [](#__codelineno-12-17)    model="gemini-flash-latest",    [](#__codelineno-12-18)    input_schema=CityTime,    [](#__codelineno-12-19)    instruction="""output the data provided by the previous node.""", [](#__codelineno-12-20)) [](#__codelineno-12-21)[](#__codelineno-12-22)@node # workflow node [](#__codelineno-12-23)async def city_workflow(ctx: Context):     [](#__codelineno-12-24)    city_time = await ctx.run_node(city_time_function, "Paris")    [](#__codelineno-12-25)    report_text = await ctx.run_node(city_report_agent, city_time) [](#__codelineno-12-26)    [](#__codelineno-12-27)    return report_text`

The `ctx.runNode()` function returns the child's result directly, so there are no session-state keys to read and write to move a value one step downstream. This function accepts any node-like value, including an `LlmAgent`, without wrapping it in `node()` first:

``[](#__codelineno-13-1)import { LlmAgent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-13-2)[](#__codelineno-13-3)const draftAgent = new LlmAgent({   [](#__codelineno-13-4)  name: 'draft_agent',  [](#__codelineno-13-5)  model: 'gemini-flash-latest',  [](#__codelineno-13-6)  instruction: 'Write a short draft for the user request.', [](#__codelineno-13-7)}); [](#__codelineno-13-8)[](#__codelineno-13-9)const formatFunctionNode = node(   [](#__codelineno-13-10)  (_ctx: NodeContext, rawDraft: string) =>    [](#__codelineno-13-11)    rawDraft      [](#__codelineno-13-12)      .split('\n')      [](#__codelineno-13-13)      .map((line) => line.trim())      [](#__codelineno-13-14)      .filter(Boolean)      [](#__codelineno-13-15)      .map((line) => `| ${line}`)      [](#__codelineno-13-16)      .join('\n'),  [](#__codelineno-13-17)  { name: 'format_function_node' }, [](#__codelineno-13-18)); [](#__codelineno-13-19)[](#__codelineno-13-20)const editorialWorkflow = node(   [](#__codelineno-13-21)  async (ctx: NodeContext, userRequest: string) => {    [](#__codelineno-13-22)    const rawDraft = await ctx.runNode(draftAgent, userRequest); [](#__codelineno-13-23)    [](#__codelineno-13-24)    const formattedText = await ctx.runNode(      [](#__codelineno-13-25)      formatFunctionNode,      [](#__codelineno-13-26)      rawDraft.output,    [](#__codelineno-13-27)    ); [](#__codelineno-13-28)    [](#__codelineno-13-29)    return formattedText.output;  [](#__codelineno-13-30)  },  [](#__codelineno-13-31)  { name: 'editorial_workflow', rerunOnResume: true }, [](#__codelineno-13-32)); [](#__codelineno-13-33)[](#__codelineno-13-34)export const rootAgent = new Workflow({   [](#__codelineno-13-35)  name: 'root_agent',  [](#__codelineno-13-36)  edges: [['START', editorialWorkflow]], [](#__codelineno-13-37)});``

Schemas work the same way as in a graph. Attach them to the nodes you run, as shown in the [sequence route](#sequence-route) section.

In Go, `workflow.NewAgentNode` wraps an `agent.Agent` so it can be invoked via `workflow.RunNode` inside a dynamic orchestrator. The output of each `RunNode` call is returned as a typed value — no session state reads are required:

`[](#__codelineno-14-1)// newDataHandlingWorkflow demonstrates how to pass data between a dynamic [](#__codelineno-14-2)// orchestrator and an LlmAgent-backed node. workflow.NewAgentNode wraps an [](#__codelineno-14-3)// agent.Agent so it can be invoked via workflow.RunNode. [](#__codelineno-14-4)// [](#__codelineno-14-5)// In Python this mirrors: [](#__codelineno-14-6)// [](#__codelineno-14-7)//  city_report_agent = Agent(name="city_report_agent", ...) [](#__codelineno-14-8)//  @node [](#__codelineno-14-9)//  async def city_workflow(ctx: Context): [](#__codelineno-14-10)//      city_time = await ctx.run_node(city_time_function, "Paris") [](#__codelineno-14-11)//      report_text = await ctx.run_node(city_report_agent, city_time) [](#__codelineno-14-12)//      return report_text [](#__codelineno-14-13)func newDataHandlingWorkflow(ctx context.Context) (agent.Agent, error) {     [](#__codelineno-14-14)    model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{})    [](#__codelineno-14-15)    if err != nil {        [](#__codelineno-14-16)        return nil, fmt.Errorf("gemini.NewModel: %w", err)    [](#__codelineno-14-17)    } [](#__codelineno-14-18)    [](#__codelineno-14-19)    // cityTimeNode is a FunctionNode that returns a formatted city-time string.    [](#__codelineno-14-20)    cityTimeNode := workflow.NewFunctionNode("city_time_function",        [](#__codelineno-14-21)        func(_ agent.Context, city string) (string, error) {            [](#__codelineno-14-22)            return fmt.Sprintf("10:10 AM in %s", city), nil        [](#__codelineno-14-23)        },        [](#__codelineno-14-24)        workflow.NodeConfig{},    [](#__codelineno-14-25)    ) [](#__codelineno-14-26)    [](#__codelineno-14-27)    // cityReportAgent is an LlmAgent that receives the city-time string and    [](#__codelineno-14-28)    // produces a human-friendly report.    [](#__codelineno-14-29)    cityReportAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-14-30)        Name:        "city_report_agent",        [](#__codelineno-14-31)        Model:       model,        [](#__codelineno-14-32)        Description: "Reports city time information.",        [](#__codelineno-14-33)        Instruction: "Output the data provided by the previous node in a friendly sentence.",    [](#__codelineno-14-34)    })    [](#__codelineno-14-35)    if err != nil {        [](#__codelineno-14-36)        return nil, fmt.Errorf("llmagent.New (cityReport): %w", err)    [](#__codelineno-14-37)    } [](#__codelineno-14-38)    [](#__codelineno-14-39)    // workflow.NewAgentNode wraps cityReportAgent so it can be called from    [](#__codelineno-14-40)    // inside a dynamic node via workflow.RunNode.    [](#__codelineno-14-41)    cityReportNode, err := workflow.NewAgentNode(cityReportAgent, workflow.NodeConfig{})    [](#__codelineno-14-42)    if err != nil {        [](#__codelineno-14-43)        return nil, fmt.Errorf("workflow.NewAgentNode: %w", err)    [](#__codelineno-14-44)    } [](#__codelineno-14-45)    [](#__codelineno-14-46)    cityWorkflow := workflow.NewDynamicNode[string, string]("city_workflow",        [](#__codelineno-14-47)        func(ctx agent.Context, _ string, _ func(*session.Event) error) (string, error) {            [](#__codelineno-14-48)            cityTime, err := workflow.RunNode[string](ctx, cityTimeNode, "Paris")            [](#__codelineno-14-49)            if err != nil {                [](#__codelineno-14-50)                return "", err            [](#__codelineno-14-51)            }            [](#__codelineno-14-52)            return workflow.RunNode[string](ctx, cityReportNode, cityTime)        [](#__codelineno-14-53)        },        [](#__codelineno-14-54)        workflow.NodeConfig{},    [](#__codelineno-14-55)    ) [](#__codelineno-14-56)    [](#__codelineno-14-57)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-14-58)        Name:      "data_handling_workflow",        [](#__codelineno-14-59)        SubAgents: []agent.Agent{cityReportAgent},        [](#__codelineno-14-60)        Edges:     workflow.Chain(workflow.Start, cityWorkflow),    [](#__codelineno-14-61)    }) [](#__codelineno-14-62)}`

For more information on data handling between workflow nodes, see [Data handling for agent workflows](/graphs/data-handling/).

## Workflow routes[¶](#workflow-routes "Permanent link")

Dynamic workflows in ADK provide more flexibility in terms of routing logic compared to [graph-based workflows](/graphs/), including iterative loops or more complex branching logic. This section describes some of the techniques that you can use for routing.

### Sequence route[¶](#sequence-route "Permanent link")

You can create sequential task processing with dynamic workflows in ADK, just as you can with graph-based workflows.

PythonTypeScriptGo

The following code snippet shows a dynamic workflow with an agent, a function node, and a second agent:

`[](#__codelineno-15-1)@node # workflow node [](#__codelineno-15-2)async def city_workflow(ctx: Context):     [](#__codelineno-15-3)    city = await ctx.run_node(city_generator_agent)    [](#__codelineno-15-4)    city_time = await ctx.run_node(city_time_function, city)    [](#__codelineno-15-5)    report_text = await ctx.run_node(city_report_agent, city_time) [](#__codelineno-15-6)    [](#__codelineno-15-7)    return report_text`

A sequential route awaits `ctx.runNode()` calls one after another. Each call finishes before the next one starts:

`[](#__codelineno-16-1)import { LlmAgent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-16-2)import { z } from 'zod'; [](#__codelineno-16-3)[](#__codelineno-16-4)const cityTimeSchema = z.object({   [](#__codelineno-16-5)  timeInfo: z.string().describe('Time information.'),  [](#__codelineno-16-6)  city: z.string().describe('City name.'), [](#__codelineno-16-7)}); [](#__codelineno-16-8)type CityTime = z.infer<typeof cityTimeSchema>; [](#__codelineno-16-9)[](#__codelineno-16-10)const cityGeneratorAgent = new LlmAgent({   [](#__codelineno-16-11)  name: 'city_generator_agent',  [](#__codelineno-16-12)  model: 'gemini-flash-latest',  [](#__codelineno-16-13)  instruction: 'Return the name of a random city. Return only the name.', [](#__codelineno-16-14)}); [](#__codelineno-16-15)[](#__codelineno-16-16)/** Simulates returning the current time in a specified city. */ [](#__codelineno-16-17)const cityTimeFunction = node(   [](#__codelineno-16-18)  (_ctx: NodeContext, city: string): CityTime => ({    [](#__codelineno-16-19)    timeInfo: '10:10 AM',    [](#__codelineno-16-20)    city: city.trim(),  [](#__codelineno-16-21)  }),  [](#__codelineno-16-22)  { name: 'city_time_function', outputSchema: cityTimeSchema }, [](#__codelineno-16-23)); [](#__codelineno-16-24)[](#__codelineno-16-25)const cityReportAgent = node(   [](#__codelineno-16-26)  new LlmAgent({    [](#__codelineno-16-27)    name: 'city_report_agent',    [](#__codelineno-16-28)    model: 'gemini-flash-latest',    [](#__codelineno-16-29)    instruction: 'Output the data provided by the previous node as a sentence.',  [](#__codelineno-16-30)  }),  [](#__codelineno-16-31)  { inputSchema: cityTimeSchema }, [](#__codelineno-16-32)); [](#__codelineno-16-33)[](#__codelineno-16-34)const cityWorkflow = node(   [](#__codelineno-16-35)  async (ctx: NodeContext) => {    [](#__codelineno-16-36)    const city = await ctx.runNode(cityGeneratorAgent);    [](#__codelineno-16-37)    const cityTime = await ctx.runNode(cityTimeFunction, city.output);    [](#__codelineno-16-38)    const reportText = await ctx.runNode(cityReportAgent, cityTime.output); [](#__codelineno-16-39)    [](#__codelineno-16-40)    return reportText.output;  [](#__codelineno-16-41)  },  [](#__codelineno-16-42)  { name: 'city_workflow', rerunOnResume: true }, [](#__codelineno-16-43)); [](#__codelineno-16-44)[](#__codelineno-16-45)export const rootAgent = new Workflow({   [](#__codelineno-16-46)  name: 'root_agent',  [](#__codelineno-16-47)  edges: [['START', cityWorkflow]], [](#__codelineno-16-48)});`

Call `workflow.RunNode` sequentially inside a `NewDynamicNode` body — each call awaits the child before the next one starts. The [data handling example above](#data-handling) demonstrates exactly this pattern: `cityWorkflow` calls `workflow.RunNode` for `cityTimeNode` and then `cityReportNode` in order, passing each node's typed output to the next.

### Loop route[¶](#loop-route "Permanent link")

For workflows where you want to use an iterative loop for a task, dynamic workflows offer much more flexibility to define the routing logic you need.

PythonTypeScriptGo

The following code example shows how to use dynamic workflows to construct a workflow loop for generating, reviewing, and updating code:

`[](#__codelineno-17-1)from google.adk import Context [](#__codelineno-17-2)from google.adk import Event [](#__codelineno-17-3)from google.adk.agents import LlmAgent [](#__codelineno-17-4)from google.adk.workflow import node [](#__codelineno-17-5)[](#__codelineno-17-6)coder_agent = LlmAgent(     [](#__codelineno-17-7)    name="generator_agent",    [](#__codelineno-17-8)    model="gemini-flash-latest",    [](#__codelineno-17-9)    instruction="Write python code for user request.", [](#__codelineno-17-10)) [](#__codelineno-17-11)[](#__codelineno-17-12)@node(name="lint_reviewer") [](#__codelineno-17-13)async def compile_lint_check(ctx: Context, code: str):     [](#__codelineno-17-14)    # Simulate API call or lint check    [](#__codelineno-17-15)    class Response:        [](#__codelineno-17-16)        findings = ""    [](#__codelineno-17-17)    return Response() [](#__codelineno-17-18)[](#__codelineno-17-19)fixer_agent = LlmAgent(     [](#__codelineno-17-20)    name="fixer_agent",    [](#__codelineno-17-21)    model="gemini-flash-latest",    [](#__codelineno-17-22)    instruction="""Refactor current code {code}.        [](#__codelineno-17-23)        Based on compile & lint review: {findings}""", [](#__codelineno-17-24)) [](#__codelineno-17-25)[](#__codelineno-17-26)@node # workflow node [](#__codelineno-17-27)async def code_workflow(ctx: Context, user_request: str):   [](#__codelineno-17-28)  code = await ctx.run_node(coder_agent, user_request)  [](#__codelineno-17-29)  check_resp = await ctx.run_node(compile_lint_check, code) [](#__codelineno-17-30)  [](#__codelineno-17-31)  while check_resp.findings:    [](#__codelineno-17-32)    yield Event(state={"code": code, "findings": check_resp.findings})    [](#__codelineno-17-33)    code = await ctx.run_node(fixer_agent, {"code": code, "findings": check_resp.findings}) [](#__codelineno-17-34)    [](#__codelineno-17-35)    check_resp = await ctx.run_node(compile_lint_check, code) [](#__codelineno-17-36)  [](#__codelineno-17-37)  yield Event(output=code)`

Dynamic workflows can help keep workflow logic simple by defining an iteration as an ordinary loop rather than a back-edge in a graph. Values are held in local variables, and state is written only where an agent's instruction template needs to read it back. Unlike a graph cycle, the loop is bounded by its loop condition:

``[](#__codelineno-18-1)import { LlmAgent, node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-18-2)[](#__codelineno-18-3)/** Safety bound on the refine loop. */ [](#__codelineno-18-4)const MAX_FIX_ROUNDS = 3; [](#__codelineno-18-5)[](#__codelineno-18-6)const coderAgent = new LlmAgent({   [](#__codelineno-18-7)  name: 'generator_agent',  [](#__codelineno-18-8)  model: 'gemini-flash-latest',  [](#__codelineno-18-9)  instruction: 'Write TypeScript code for the user request. Output code only.', [](#__codelineno-18-10)}); [](#__codelineno-18-11)[](#__codelineno-18-12)/** Simulates a compile / lint pass. Empty findings means "clean". */ [](#__codelineno-18-13)const compileLintCheck = node(   [](#__codelineno-18-14)  (_ctx: NodeContext, code: string) => {    [](#__codelineno-18-15)    const findings: string[] = [];    [](#__codelineno-18-16)    if (!/\/\*\*/.test(code)) {      [](#__codelineno-18-17)      findings.push('every function needs a JSDoc comment');    [](#__codelineno-18-18)    }    [](#__codelineno-18-19)    if (!/\)\s*:\s*\w/.test(code)) {      [](#__codelineno-18-20)      findings.push('add return type annotations');    [](#__codelineno-18-21)    }    [](#__codelineno-18-22)    return { findings: findings.join('; ') };  [](#__codelineno-18-23)  },  [](#__codelineno-18-24)  { name: 'lint_reviewer' }, [](#__codelineno-18-25)); [](#__codelineno-18-26)[](#__codelineno-18-27)const fixerAgent = new LlmAgent({   [](#__codelineno-18-28)  name: 'fixer_agent',  [](#__codelineno-18-29)  model: 'gemini-flash-latest',  [](#__codelineno-18-30)  instruction: `Refactor current code {code}.      [](#__codelineno-18-31)      Based on compile & lint review: {findings}      [](#__codelineno-18-32)      Output code only.`, [](#__codelineno-18-33)}); [](#__codelineno-18-34)[](#__codelineno-18-35)const codeWorkflow = node(   [](#__codelineno-18-36)  async (ctx: NodeContext, userRequest: string) => {    [](#__codelineno-18-37)    let code = (await ctx.runNode(coderAgent, userRequest)).output as string;    [](#__codelineno-18-38)    let checkResp = (await ctx.runNode(compileLintCheck, code)).output as {      [](#__codelineno-18-39)      findings: string;    [](#__codelineno-18-40)    }; [](#__codelineno-18-41)    [](#__codelineno-18-42)    for (let round = 0; checkResp.findings && round < MAX_FIX_ROUNDS; round++) {      [](#__codelineno-18-43)      ctx.state.set('code', code);      [](#__codelineno-18-44)      ctx.state.set('findings', checkResp.findings); [](#__codelineno-18-45)      [](#__codelineno-18-46)      code = (        [](#__codelineno-18-47)        await ctx.runNode(fixerAgent, { code, findings: checkResp.findings })      [](#__codelineno-18-48)      ).output as string;      [](#__codelineno-18-49)      checkResp = (await ctx.runNode(compileLintCheck, code)).output as {        [](#__codelineno-18-50)        findings: string;      [](#__codelineno-18-51)      };    [](#__codelineno-18-52)    } [](#__codelineno-18-53)    [](#__codelineno-18-54)    return code;  [](#__codelineno-18-55)  },  [](#__codelineno-18-56)  { name: 'code_workflow', rerunOnResume: true }, [](#__codelineno-18-57)); [](#__codelineno-18-58)[](#__codelineno-18-59)export const rootAgent = new Workflow({   [](#__codelineno-18-60)  name: 'root_agent',  [](#__codelineno-18-61)  edges: [['START', codeWorkflow]], [](#__codelineno-18-62)});``

In Go, the loop is a plain `for` loop inside the dynamic node body. The lint check node returns an empty string when there are no findings, which signals the loop to exit:

`[](#__codelineno-19-1)// newLoopWorkflow demonstrates an iterative loop inside a dynamic node. [](#__codelineno-19-2)// The orchestrator body uses a plain Go for loop to keep calling the [](#__codelineno-19-3)// lintCheckNode until there are no findings — equivalent to Python's: [](#__codelineno-19-4)// [](#__codelineno-19-5)//  @node [](#__codelineno-19-6)//  async def code_workflow(ctx: Context, user_request: str): [](#__codelineno-19-7)//      code = await ctx.run_node(coder_agent, user_request) [](#__codelineno-19-8)//      check_resp = await ctx.run_node(compile_lint_check, code) [](#__codelineno-19-9)//      while check_resp.findings: [](#__codelineno-19-10)//          code = await ctx.run_node(fixer_agent, ...) [](#__codelineno-19-11)//          check_resp = await ctx.run_node(compile_lint_check, code) [](#__codelineno-19-12)//      return code [](#__codelineno-19-13)func newLoopWorkflow(ctx context.Context) (agent.Agent, error) {     [](#__codelineno-19-14)    model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{})    [](#__codelineno-19-15)    if err != nil {        [](#__codelineno-19-16)        return nil, fmt.Errorf("gemini.NewModel: %w", err)    [](#__codelineno-19-17)    } [](#__codelineno-19-18)    [](#__codelineno-19-19)    coderAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-19-20)        Name:        "generator_agent",        [](#__codelineno-19-21)        Model:       model,        [](#__codelineno-19-22)        Description: "Writes Go code for the user request.",        [](#__codelineno-19-23)        Instruction: "Write Go code for the user request. Output only the code.",        [](#__codelineno-19-24)        OutputKey:   "generated_code",    [](#__codelineno-19-25)    })    [](#__codelineno-19-26)    if err != nil {        [](#__codelineno-19-27)        return nil, fmt.Errorf("llmagent.New (coder): %w", err)    [](#__codelineno-19-28)    } [](#__codelineno-19-29)    [](#__codelineno-19-30)    coderNode, err := workflow.NewAgentNode(coderAgent, workflow.NodeConfig{})    [](#__codelineno-19-31)    if err != nil {        [](#__codelineno-19-32)        return nil, fmt.Errorf("workflow.NewAgentNode (coder): %w", err)    [](#__codelineno-19-33)    } [](#__codelineno-19-34)    [](#__codelineno-19-35)    // lintCheckNode simulates a lint/compile check. It returns an empty    [](#__codelineno-19-36)    // string when there are no findings, signalling the loop to exit.    [](#__codelineno-19-37)    lintCheckNode := workflow.NewFunctionNode("lint_reviewer",        [](#__codelineno-19-38)        func(_ agent.Context, code string) (string, error) {            [](#__codelineno-19-39)            // Simulate a lint check: return findings or empty string when clean.            [](#__codelineno-19-40)            if len(code) < 50 {                [](#__codelineno-19-41)                return "Code is too short; add error handling.", nil            [](#__codelineno-19-42)            }            [](#__codelineno-19-43)            return "", nil // no findings — loop exits        [](#__codelineno-19-44)        },        [](#__codelineno-19-45)        workflow.NodeConfig{},    [](#__codelineno-19-46)    ) [](#__codelineno-19-47)    [](#__codelineno-19-48)    fixerAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-19-49)        Name:        "fixer_agent",        [](#__codelineno-19-50)        Model:       model,        [](#__codelineno-19-51)        Description: "Refactors code based on lint findings.",        [](#__codelineno-19-52)        Instruction: "Refactor the provided code to address the review findings. Output only the improved code.",    [](#__codelineno-19-53)    })    [](#__codelineno-19-54)    if err != nil {        [](#__codelineno-19-55)        return nil, fmt.Errorf("llmagent.New (fixer): %w", err)    [](#__codelineno-19-56)    } [](#__codelineno-19-57)    [](#__codelineno-19-58)    fixerNode, err := workflow.NewAgentNode(fixerAgent, workflow.NodeConfig{})    [](#__codelineno-19-59)    if err != nil {        [](#__codelineno-19-60)        return nil, fmt.Errorf("workflow.NewAgentNode (fixer): %w", err)    [](#__codelineno-19-61)    } [](#__codelineno-19-62)    [](#__codelineno-19-63)    codeWorkflow := workflow.NewDynamicNode[string, string]("code_workflow",        [](#__codelineno-19-64)        func(ctx agent.Context, userRequest string, _ func(*session.Event) error) (string, error) {            [](#__codelineno-19-65)            code, err := workflow.RunNode[string](ctx, coderNode, userRequest)            [](#__codelineno-19-66)            if err != nil {                [](#__codelineno-19-67)                return "", err            [](#__codelineno-19-68)            } [](#__codelineno-19-69)            [](#__codelineno-19-70)            findings, err := workflow.RunNode[string](ctx, lintCheckNode, code)            [](#__codelineno-19-71)            if err != nil {                [](#__codelineno-19-72)                return "", err            [](#__codelineno-19-73)            } [](#__codelineno-19-74)            [](#__codelineno-19-75)            // Loop until the lint check reports no findings.            [](#__codelineno-19-76)            for findings != "" {                [](#__codelineno-19-77)                code, err = workflow.RunNode[string](ctx, fixerNode, code)                [](#__codelineno-19-78)                if err != nil {                    [](#__codelineno-19-79)                    return "", err                [](#__codelineno-19-80)                }                [](#__codelineno-19-81)                findings, err = workflow.RunNode[string](ctx, lintCheckNode, code)                [](#__codelineno-19-82)                if err != nil {                    [](#__codelineno-19-83)                    return "", err                [](#__codelineno-19-84)                }            [](#__codelineno-19-85)            }            [](#__codelineno-19-86)            return code, nil        [](#__codelineno-19-87)        },        [](#__codelineno-19-88)        workflow.NodeConfig{},    [](#__codelineno-19-89)    ) [](#__codelineno-19-90)    [](#__codelineno-19-91)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-19-92)        Name:      "code_pipeline",        [](#__codelineno-19-93)        SubAgents: []agent.Agent{coderAgent, fixerAgent},        [](#__codelineno-19-94)        Edges:     workflow.Chain(workflow.Start, codeWorkflow),    [](#__codelineno-19-95)    }) [](#__codelineno-19-96)}`

### Parallel execution routes[¶](#parallel-execution-routes "Permanent link")

Dynamic workflows in ADK can support parallel execution.

PythonTypeScriptGo

In Python, you can use `asyncio.gather` to build parallel execution:

`[](#__codelineno-20-1)import asyncio [](#__codelineno-20-2)from typing import Any [](#__codelineno-20-3)from google.adk import Context [](#__codelineno-20-4)from google.adk.workflow import BaseNode, node [](#__codelineno-20-5) [](#__codelineno-20-6)[](#__codelineno-20-7)@node(rerun_on_resume=True) [](#__codelineno-20-8)async def parallel_supervisor(     [](#__codelineno-20-9)    ctx: Context, node_input: list[Any], real_node: BaseNode [](#__codelineno-20-10)):     [](#__codelineno-20-11)    """Runs a worker node in parallel for each item in the input list."""    [](#__codelineno-20-12)    tasks = []    [](#__codelineno-20-13)    for item in node_input:        [](#__codelineno-20-14)        # ctx.run_node returns a future. Append instead of awaiting immediately.        [](#__codelineno-20-15)        tasks.append(ctx.run_node(real_node, item)) [](#__codelineno-20-16)    [](#__codelineno-20-17)    # Collect all results in parallel    [](#__codelineno-20-18)    results = await asyncio.gather(*tasks)    [](#__codelineno-20-19)    return results`

Tip: Resuming parallel nodes

The workflow framework ensures that if a dynamic workflow is resumed, only failed or interrupted worker nodes are re-executed, including parallel worker nodes.

The `ctx.runNode()` method returns a promise, so starting every child before awaiting any of them runs the children concurrently, and `Promise.all` collects the results. Run IDs are assigned in call order, so start the children in a synchronous loop to keep the IDs deterministic across a resume:

``[](#__codelineno-21-1)import { node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-21-2)[](#__codelineno-21-3)const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)); [](#__codelineno-21-4)[](#__codelineno-21-5)/** The worker run once per list item. */ [](#__codelineno-21-6)const realNode = node(   [](#__codelineno-21-7)  async (_ctx: NodeContext, item: string) => {    [](#__codelineno-21-8)    await sleep(200);    [](#__codelineno-21-9)    return { item, length: item.length };  [](#__codelineno-21-10)  },  [](#__codelineno-21-11)  { name: 'analyze_item' }, [](#__codelineno-21-12)); [](#__codelineno-21-13)[](#__codelineno-21-14)const parallelSupervisor = node(   [](#__codelineno-21-15)  async (ctx: NodeContext, nodeInput: string) => {    [](#__codelineno-21-16)    const items = nodeInput      [](#__codelineno-21-17)      .split(',')      [](#__codelineno-21-18)      .map((item) => item.trim())      [](#__codelineno-21-19)      .filter(Boolean); [](#__codelineno-21-20)    [](#__codelineno-21-21)    const tasks = items.map((item) => ctx.runNode(realNode, item));    [](#__codelineno-21-22)    const results = await Promise.all(tasks); [](#__codelineno-21-23)    [](#__codelineno-21-24)    return results.map((result) => result.output);  [](#__codelineno-21-25)  },  [](#__codelineno-21-26)  { name: 'parallel_supervisor', rerunOnResume: true }, [](#__codelineno-21-27)); [](#__codelineno-21-28)[](#__codelineno-21-29)const summarize = node(   [](#__codelineno-21-30)  (_ctx: NodeContext, results: Array<{ item: string; length: number }>) =>    [](#__codelineno-21-31)    results.map((r) => `${r.item}: ${r.length} chars`).join('\n'),  [](#__codelineno-21-32)  { name: 'summarize' }, [](#__codelineno-21-33)); [](#__codelineno-21-34)[](#__codelineno-21-35)export const rootAgent = new Workflow({   [](#__codelineno-21-36)  name: 'root_agent',  [](#__codelineno-21-37)  edges: [['START', parallelSupervisor, summarize]], [](#__codelineno-21-38)});``

Tip: prefer the built-in parallel worker

To run one node over each item in a list, use `node(worker, {parallelWorker: true, maxParallelWorkers: 4})`. This option performs the fan-out and bounds concurrency, which defaults to 8. Use the manual approach shown above when you need custom scheduling or partial-failure handling. On resume, only failed or interrupted workers re-execute in both cases.

In Go, `workflow.NewParallelWorker` wraps a child node and runs it concurrently for each element of a list input, collecting results into a single output slice. The `maxConcurrency` parameter caps how many concurrent activations may run simultaneously; `0` means unlimited:

`[](#__codelineno-22-1)// newParallelWorkflow demonstrates parallel execution using [](#__codelineno-22-2)// workflow.NewParallelWorker. The worker node runs a wrapped child node [](#__codelineno-22-3)// concurrently for each element in a list input, collecting results. [](#__codelineno-22-4)// [](#__codelineno-22-5)// This is the Go equivalent of using asyncio.gather in Python: [](#__codelineno-22-6)// [](#__codelineno-22-7)//  @node(rerun_on_resume=True) [](#__codelineno-22-8)//  async def parallel_supervisor(ctx, node_input, real_node): [](#__codelineno-22-9)//      tasks = [ctx.run_node(real_node, item) for item in node_input] [](#__codelineno-22-10)//      results = await asyncio.gather(*tasks) [](#__codelineno-22-11)//      return results [](#__codelineno-22-12)func newParallelWorkflow() (agent.Agent, error) {     [](#__codelineno-22-13)    // workerNode processes a single item. NewParallelWorker will call it    [](#__codelineno-22-14)    // once per element of the list input, concurrently.    [](#__codelineno-22-15)    workerNode := workflow.NewFunctionNode("worker",        [](#__codelineno-22-16)        func(_ agent.Context, item string) (string, error) {            [](#__codelineno-22-17)            return fmt.Sprintf("processed: %s", item), nil        [](#__codelineno-22-18)        },        [](#__codelineno-22-19)        workflow.NodeConfig{},    [](#__codelineno-22-20)    ) [](#__codelineno-22-21)    [](#__codelineno-22-22)    // NewParallelWorker wraps workerNode so it runs concurrently for each    [](#__codelineno-22-23)    // element of a []string input. maxConcurrency=0 means unlimited.    [](#__codelineno-22-24)    parallelWorker, err := workflow.NewParallelWorker(        [](#__codelineno-22-25)        "parallel_supervisor",        [](#__codelineno-22-26)        workerNode,        [](#__codelineno-22-27)        0, // maxConcurrency: 0 = unlimited        [](#__codelineno-22-28)        workflow.NodeConfig{},    [](#__codelineno-22-29)    )    [](#__codelineno-22-30)    if err != nil {        [](#__codelineno-22-31)        return nil, fmt.Errorf("workflow.NewParallelWorker: %w", err)    [](#__codelineno-22-32)    } [](#__codelineno-22-33)    [](#__codelineno-22-34)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-22-35)        Name:        "parallel_workflow",        [](#__codelineno-22-36)        Description: "Runs a worker node in parallel for each item in the input list.",        [](#__codelineno-22-37)        Edges:       workflow.Chain(workflow.Start, parallelWorker),    [](#__codelineno-22-38)    }) [](#__codelineno-22-39)}`

Tip: Resuming parallel nodes

The workflow framework ensures that if a dynamic workflow is resumed, only failed or interrupted worker nodes are re-executed, including parallel worker nodes managed by `NewParallelWorker`.

## Human input[¶](#human-input "Permanent link")

Dynamic workflows in ADK can also include human input or human in the loop (HITL) steps.

PythonTypeScriptGo

You build human input into workflows by yielding a ***RequestInput*** from a node, which pauses the workflow and waits for user input. The following code example shows how to build a human input node and include it in a workflow:

`[](#__codelineno-23-1)from typing import Any [](#__codelineno-23-2)from google.adk import Context [](#__codelineno-23-3)from google.adk.events import RequestInput [](#__codelineno-23-4)from google.adk.workflow import node [](#__codelineno-23-5) [](#__codelineno-23-6)[](#__codelineno-23-7)@node(rerun_on_resume=False) [](#__codelineno-23-8)async def get_user_approval(ctx: Context, node_input: Any):     [](#__codelineno-23-9)    """Yields a RequestInput to pause the workflow and wait for user input."""    [](#__codelineno-23-10)    yield RequestInput(message="Please approve this request (Yes/No)") [](#__codelineno-23-11) [](#__codelineno-23-12)[](#__codelineno-23-13)@node(rerun_on_resume=True) [](#__codelineno-23-14)async def handle_process(ctx: Context, node_input: Any):     [](#__codelineno-23-15)    """The orchestrator calling the interactive step."""    [](#__codelineno-23-16)    user_response = await ctx.run_node(get_user_approval) [](#__codelineno-23-17)    [](#__codelineno-23-18)    if user_response.lower() == "yes":        [](#__codelineno-23-19)        return "Approved"    [](#__codelineno-23-20)    return "Denied"`

Important: Parent nodes with `ctx.run_node`

Parent nodes in dynamic workflows that call `ctx.run_node` must set `rerun_on_resume=True` to handle interruptions properly.

The leaf node returns a `RequestInput` to pause the workflow, and keeps the default `rerunOnResume: false` so the reply becomes its output. The orchestrator that calls it must set `rerunOnResume: true`:

``[](#__codelineno-24-1)import { node, NodeContext, RequestInput, Workflow } from '@google/adk'; [](#__codelineno-24-2)[](#__codelineno-24-3)/**  [](#__codelineno-24-4) * Pauses the workflow and waits for user input. [](#__codelineno-24-5) * [](#__codelineno-24-6) * `rerunOnResume: false` (the default, spelled out here because it is the [](#__codelineno-24-7) * point) is what makes this a one-liner: the reply is handed to the node as [](#__codelineno-24-8) * its output instead of the body running a second time to collect it. [](#__codelineno-24-9) */ [](#__codelineno-24-10)const getUserApproval = node(   [](#__codelineno-24-11)  () => new RequestInput({ message: 'Please approve this request (Yes/No)' }),  [](#__codelineno-24-12)  { name: 'get_user_approval', rerunOnResume: false }, [](#__codelineno-24-13)); [](#__codelineno-24-14)[](#__codelineno-24-15)/** The orchestrator calling the interactive step. */ [](#__codelineno-24-16)const handleProcess = node(   [](#__codelineno-24-17)  async (ctx: NodeContext, nodeInput: unknown) => {    [](#__codelineno-24-18)    const approval = await ctx.runNode(getUserApproval, nodeInput); [](#__codelineno-24-19)    [](#__codelineno-24-20)    if (approval.interruptIds.length > 0) {      [](#__codelineno-24-21)      return undefined;    [](#__codelineno-24-22)    } [](#__codelineno-24-23)    [](#__codelineno-24-24)    const userResponse = String(approval.output ?? '')      [](#__codelineno-24-25)      .trim()      [](#__codelineno-24-26)      .toLowerCase(); [](#__codelineno-24-27)    [](#__codelineno-24-28)    if (userResponse === 'yes') {      [](#__codelineno-24-29)      return 'Approved';    [](#__codelineno-24-30)    }    [](#__codelineno-24-31)    return 'Denied';  [](#__codelineno-24-32)  },  [](#__codelineno-24-33)  { name: 'handle_process', rerunOnResume: true }, [](#__codelineno-24-34)); [](#__codelineno-24-35)[](#__codelineno-24-36)export const rootAgent = new Workflow({   [](#__codelineno-24-37)  name: 'root_agent',  [](#__codelineno-24-38)  edges: [['START', handleProcess]], [](#__codelineno-24-39)});``

Important: check `interruptIds` before deciding

The `ctx.runNode()` method does **not** throw an error when a child node interrupts. It returns normally, with the `interruptIds` property of the result populated and the `output` property still `undefined`. Check `interruptIds` before you use the result. An orchestrator that skips this check treats the missing output as an answer and continues with a value the user never supplied.

In Go, use `workflow.NewEmittingFunctionNode` with `workflow.ResumeOrRequestInput` to implement the re-entry HITL pattern. On the first pass `ResumeOrRequestInput` emits a `session.RequestInput` event and returns `ErrNodeInterrupted`, pausing the workflow. After the human replies, the node is re-run from the top (`RerunOnResume: &true`) and `ResumeOrRequestInput` returns the human's reply directly:

`[](#__codelineno-25-1)// newHITLWorkflow demonstrates the re-entry HITL pattern using [](#__codelineno-25-2)// workflow.ResumeOrRequestInput. On the first pass the node emits a [](#__codelineno-25-3)// RequestInput event and returns ErrNodeInterrupted (pausing the workflow). [](#__codelineno-25-4)// After the human replies, the same node is re-run from the top [](#__codelineno-25-5)// (RerunOnResume=&true) and ResumeOrRequestInput returns the human's reply. [](#__codelineno-25-6)// [](#__codelineno-25-7)// In Python this is equivalent to: [](#__codelineno-25-8)// [](#__codelineno-25-9)//  @node(rerun_on_resume=True) [](#__codelineno-25-10)//  async def get_user_approval(ctx, node_input): [](#__codelineno-25-11)//      yield RequestInput(message="Please approve this request (Yes/No)") [](#__codelineno-25-12)// [](#__codelineno-25-13)//  @node(rerun_on_resume=True) [](#__codelineno-25-14)//  async def handle_process(ctx, node_input): [](#__codelineno-25-15)//      user_response = await ctx.run_node(get_user_approval) [](#__codelineno-25-16)//      if user_response.lower() == "yes": [](#__codelineno-25-17)//          return "Approved" [](#__codelineno-25-18)//      return "Denied" [](#__codelineno-25-19)func newHITLWorkflow() (agent.Agent, error) {     [](#__codelineno-25-20)    rerun := true [](#__codelineno-25-21)    [](#__codelineno-25-22)    // approvalNode pauses on the first pass to ask the user for a Yes/No    [](#__codelineno-25-23)    // approval, then resolves their decision on resume.    [](#__codelineno-25-24)    // workflow.ResumeOrRequestInput handles both phases.    [](#__codelineno-25-25)    approvalNode := workflow.NewEmittingFunctionNode[any, any]("get_user_approval",        [](#__codelineno-25-26)        func(nc agent.Context, _ any, emit func(*session.Event) error) (any, error) {            [](#__codelineno-25-27)            // ResumeOrRequestInput: on first pass, emits the prompt and            [](#__codelineno-25-28)            // returns ErrNodeInterrupted. On re-run after the human replies,            [](#__codelineno-25-29)            // it returns the reply payload directly.            [](#__codelineno-25-30)            reply, err := workflow.ResumeOrRequestInput(nc, emit, session.RequestInput{                [](#__codelineno-25-31)                InterruptID: "user_approval",                [](#__codelineno-25-32)                Message:     "Please approve this request (Yes/No)",            [](#__codelineno-25-33)            })            [](#__codelineno-25-34)            if err != nil {                [](#__codelineno-25-35)                return nil, err            [](#__codelineno-25-36)            } [](#__codelineno-25-37)            [](#__codelineno-25-38)            response, _ := reply.(string)            [](#__codelineno-25-39)            if response == "" {                [](#__codelineno-25-40)                response = "No"            [](#__codelineno-25-41)            }            [](#__codelineno-25-42)            if response == "yes" || response == "Yes" {                [](#__codelineno-25-43)                return "Approved", nil            [](#__codelineno-25-44)            }            [](#__codelineno-25-45)            return "Denied", nil        [](#__codelineno-25-46)        },        [](#__codelineno-25-47)        workflow.NodeConfig{RerunOnResume: &rerun},    [](#__codelineno-25-48)    ) [](#__codelineno-25-49)    [](#__codelineno-25-50)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-25-51)        Name:        "hitl_workflow",        [](#__codelineno-25-52)        Description: "Pauses for user approval before completing a task.",        [](#__codelineno-25-53)        Edges:       workflow.Chain(workflow.Start, approvalNode),    [](#__codelineno-25-54)    }) [](#__codelineno-25-55)}`

## Advanced features[¶](#advanced-features "Permanent link")

Dynamic workflows offer some advanced features designed to handle more complex development scenarios. These capabilities allow for finer control over execution and better integration with existing technical infrastructure.

### Execution IDs[¶](#execution-ids "Permanent link")

The ADK framework generates a deterministic identifier (ID) for child node executions based on the parent ID and a counter. ADK workflows use deterministic IDs for each scheduled node to identify previous results. These IDs are generated based on the order of dynamic node schedules, and are used for checkpointing and to re-run tasks in the correct order in the case of a resumed or re-run workflow.

#### Custom execution IDs[¶](#custom-execution-ids "Permanent link")

In some rare cases, you may need to have stable identifiers, such as when processing a reorderable list. In general, you should avoid this due to the impacts to workflow task retries and process resumes. Specifically, these IDs are used to check node states and skip execution if a node was already run. If you provide custom IDs, make sure they are deterministic for workflow re-runs and logically remain the same for the input.

Warning: Custom execution IDs

Avoid creating custom execution IDs. Since execution IDs are used to determine the execution order of nodes, custom execution IDs can cause problems when the system attempts to re-run those nodes in your workflow.

PythonTypeScriptGo

`[](#__codelineno-26-1)from google.adk import Context [](#__codelineno-26-2)from google.adk.workflow import node [](#__codelineno-26-3)from pydantic import BaseModel [](#__codelineno-26-4)from typing import Any [](#__codelineno-26-5)import asyncio [](#__codelineno-26-6)[](#__codelineno-26-7)class Order(BaseModel):   [](#__codelineno-26-8)  order_id: str  [](#__codelineno-26-9)  cart_items: list[Product] [](#__codelineno-26-10)[](#__codelineno-26-11)@node(rerun_on_resume=True) [](#__codelineno-26-12)async def process_all_orders(ctx: Context, node_input: Any):   [](#__codelineno-26-13)  orders = await get_orders() [](#__codelineno-26-14)  [](#__codelineno-26-15)  process_tasks = []  [](#__codelineno-26-16)  for order in orders:    [](#__codelineno-26-17)    # Use run_id to provide a custom identifier.    [](#__codelineno-26-18)    # Custom run_ids must contain at least one non-numeric character    [](#__codelineno-26-19)    # to avoid collision with auto-generated sequential numeric IDs.    [](#__codelineno-26-20)    task = ctx.run_node(process_order, order, run_id=f"order-{order.order_id}")    [](#__codelineno-26-21)    process_tasks.append(task) [](#__codelineno-26-22)  [](#__codelineno-26-23)  results = await asyncio.gather(*process_tasks)  [](#__codelineno-26-24)  return results`

By default, auto-generated run IDs are sequential integers starting from `"1"` (represented as strings). Custom `run_id` values must contain at least one non-numeric character to avoid collisions with these auto-generated IDs.

Pass a `runId` as a trailing option to `ctx.runNode()`. The ID must contain at least one non-numeric character so it does not collide with the auto-generated sequential IDs:

``[](#__codelineno-27-1)import { node, NodeContext, Workflow } from '@google/adk'; [](#__codelineno-27-2)[](#__codelineno-27-3)interface Order {   [](#__codelineno-27-4)  orderId: string;  [](#__codelineno-27-5)  cartItems: string[]; [](#__codelineno-27-6)} [](#__codelineno-27-7)[](#__codelineno-27-8)/** Stands in for loading orders from a database. */ [](#__codelineno-27-9)async function getOrders(): Promise<Order[]> {   [](#__codelineno-27-10)  return [    [](#__codelineno-27-11)    { orderId: 'a91', cartItems: ['keyboard', 'mouse'] },    [](#__codelineno-27-12)    { orderId: 'b02', cartItems: ['monitor'] },    [](#__codelineno-27-13)    { orderId: 'c73', cartItems: ['dock', 'cable', 'hub'] },  [](#__codelineno-27-14)  ]; [](#__codelineno-27-15)} [](#__codelineno-27-16)[](#__codelineno-27-17)const processOrder = node(   [](#__codelineno-27-18)  (_ctx: NodeContext, order: Order) =>    [](#__codelineno-27-19)    `order ${order.orderId}: ${order.cartItems.length} item(s) shipped`,  [](#__codelineno-27-20)  { name: 'process_order' }, [](#__codelineno-27-21)); [](#__codelineno-27-22)[](#__codelineno-27-23)const processAllOrders = node(   [](#__codelineno-27-24)  async (ctx: NodeContext) => {    [](#__codelineno-27-25)    const orders = await getOrders(); [](#__codelineno-27-26)    [](#__codelineno-27-27)    const processTasks = orders.map((order) =>      [](#__codelineno-27-28)      ctx.runNode(processOrder, order, { runId: `order-${order.orderId}` }),    [](#__codelineno-27-29)    ); [](#__codelineno-27-30)    [](#__codelineno-27-31)    const results = await Promise.all(processTasks);    [](#__codelineno-27-32)    return results.map((result) => result.output).join('\n');  [](#__codelineno-27-33)  },  [](#__codelineno-27-34)  { name: 'process_all_orders', rerunOnResume: true }, [](#__codelineno-27-35)); [](#__codelineno-27-36)[](#__codelineno-27-37)export const rootAgent = new Workflow({   [](#__codelineno-27-38)  name: 'root_agent',  [](#__codelineno-27-39)  edges: [['START', processAllOrders]], [](#__codelineno-27-40)});``

In Go, pass `workflow.WithRunID("order-x")` as a trailing option to `workflow.RunNode`. The ID must contain at least one non-numeric character to avoid collision with the auto-generated sequential counter IDs:

`[](#__codelineno-28-1)// newCustomIDWorkflow demonstrates supplying stable custom run IDs via [](#__codelineno-28-2)// workflow.WithRunID — equivalent to Python's: [](#__codelineno-28-3)// [](#__codelineno-28-4)//  task = ctx.run_node(process_order, order, run_id=f"order-{order.order_id}") [](#__codelineno-28-5)// [](#__codelineno-28-6)// Custom run IDs must contain at least one non-numeric character to avoid [](#__codelineno-28-7)// collision with auto-generated sequential integer IDs. [](#__codelineno-28-8)func newCustomIDWorkflow() (agent.Agent, error) {     [](#__codelineno-28-9)    processOrderNode := workflow.NewFunctionNode("process_order",        [](#__codelineno-28-10)        func(_ agent.Context, orderID string) (string, error) {            [](#__codelineno-28-11)            return fmt.Sprintf("processed order %s", orderID), nil        [](#__codelineno-28-12)        },        [](#__codelineno-28-13)        workflow.NodeConfig{},    [](#__codelineno-28-14)    ) [](#__codelineno-28-15)    [](#__codelineno-28-16)    orders := []string{"ord-001", "ord-002", "ord-003"} [](#__codelineno-28-17)    [](#__codelineno-28-18)    processAllOrders := workflow.NewDynamicNode[any, []string]("process_all_orders",        [](#__codelineno-28-19)        func(ctx agent.Context, _ any, _ func(*session.Event) error) ([]string, error) {            [](#__codelineno-28-20)            results := make([]string, 0, len(orders))            [](#__codelineno-28-21)            for _, orderID := range orders {                [](#__codelineno-28-22)                // WithRunID supplies a stable, deterministic identifier for                [](#__codelineno-28-23)                // each child invocation. IDs must contain at least one                [](#__codelineno-28-24)                // non-numeric character to avoid collision with the                [](#__codelineno-28-25)                // auto-generated sequential counter IDs.                [](#__codelineno-28-26)                result, err := workflow.RunNode[string](                    [](#__codelineno-28-27)                    ctx,                    [](#__codelineno-28-28)                    processOrderNode,                    [](#__codelineno-28-29)                    orderID,                    [](#__codelineno-28-30)                    workflow.WithRunID(fmt.Sprintf("order-%s", orderID)),                [](#__codelineno-28-31)                )                [](#__codelineno-28-32)                if err != nil {                    [](#__codelineno-28-33)                    return nil, fmt.Errorf("process order %s: %w", orderID, err)                [](#__codelineno-28-34)                }                [](#__codelineno-28-35)                results = append(results, result)            [](#__codelineno-28-36)            }            [](#__codelineno-28-37)            return results, nil        [](#__codelineno-28-38)        },        [](#__codelineno-28-39)        workflow.NodeConfig{},    [](#__codelineno-28-40)    ) [](#__codelineno-28-41)    [](#__codelineno-28-42)    return workflowagent.New(workflowagent.Config{        [](#__codelineno-28-43)        Name:        "custom_id_workflow",        [](#__codelineno-28-44)        Description: "Processes orders with stable per-order execution IDs.",        [](#__codelineno-28-45)        Edges:       workflow.Chain(workflow.Start, processAllOrders),    [](#__codelineno-28-46)    }) [](#__codelineno-28-47)}`

Back to top