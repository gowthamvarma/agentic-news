---
title: "Environment Simulation - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/evaluate/environment_simulation/
date: 2026-10-10T19:16:31.329Z
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
        
    -   [Evaluation](../)
        
        Evaluation
        
        -   [Criteria](../criteria/)
        -   [User Simulation](../user-sim/)
        -    Environment Simulation [Environment Simulation](./)
            
            Table of contents
            
            -   [How it works](#how-it-works)
            -   [Integration](#integration)
                
                -   [Using as a callback](#using-as-a-callback)
                -   [Using as a plugin](#using-as-a-plugin)
                
            -   [Configuration reference](#configuration-reference)
                
                -   [EnvironmentSimulationConfig](#environmentsimulationconfig)
                -   [ToolSimulationConfig](#toolsimulationconfig)
                -   [InjectionConfig](#injectionconfig)
                -   [InjectedError](#injectederror)
                -   [MockStrategy](#mockstrategy)
                
            -   [Injection mode](#injection-mode)
                
                -   [Injecting errors](#injecting-errors)
                -   [Injecting fixed responses](#injecting-fixed-responses)
                -   [Conditional injection with argument matching](#conditional-injection-with-argument-matching)
                -   [Probabilistic injection](#probabilistic-injection)
                -   [Injecting latency](#injecting-latency)
                -   [Combining multiple injection configs](#combining-multiple-injection-configs)
                
            -   [Mock strategy mode](#mock-strategy-mode)
                
                -   [Providing environment data](#providing-environment-data)
                -   [Providing tracing data](#providing-tracing-data)
                
            -   [Mixing injections and mock strategy](#mixing-injections-and-mock-strategy)
            
        -   [Custom Metrics](../custom_metrics/)
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

-   [How it works](#how-it-works)
-   [Integration](#integration)
    
    -   [Using as a callback](#using-as-a-callback)
    -   [Using as a plugin](#using-as-a-plugin)
    
-   [Configuration reference](#configuration-reference)
    
    -   [EnvironmentSimulationConfig](#environmentsimulationconfig)
    -   [ToolSimulationConfig](#toolsimulationconfig)
    -   [InjectionConfig](#injectionconfig)
    -   [InjectedError](#injectederror)
    -   [MockStrategy](#mockstrategy)
    
-   [Injection mode](#injection-mode)
    
    -   [Injecting errors](#injecting-errors)
    -   [Injecting fixed responses](#injecting-fixed-responses)
    -   [Conditional injection with argument matching](#conditional-injection-with-argument-matching)
    -   [Probabilistic injection](#probabilistic-injection)
    -   [Injecting latency](#injecting-latency)
    -   [Combining multiple injection configs](#combining-multiple-injection-configs)
    
-   [Mock strategy mode](#mock-strategy-mode)
    
    -   [Providing environment data](#providing-environment-data)
    -   [Providing tracing data](#providing-tracing-data)
    
-   [Mixing injections and mock strategy](#mixing-injections-and-mock-strategy)

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Evaluation](../)

[](https://github.com/google/adk-docs/edit/main/docs/evaluate/environment_simulation.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Environment simulation for evaluations[¶](#environment-simulation-for-evaluations "Permanent link")

Supported in ADKPython v1.24.0

When evaluating agents that rely on external dependencies — such as APIs, databases, or third-party services — running those tools live during testing can be slow, costly, or unreliable. The **Environment Simulator** lets you safely intercept these tool calls during agent execution and replace them with controlled, deterministic responses, without modifying the agent itself. This approach can fill a critical gap in the agent improvement loop, allowing you to create hermetic, offline test runs that isolate your agent logic for reliable scoring.

Overall, this feature lets you:

-   Test how an agent handles API errors or edge-case responses.
-   Run evaluations offline, without access to live backends.
-   Generate realistic mock responses automatically using an LLM.
-   Produce reproducible test runs by seeding probabilistic injections.

The Environment Simulation integrates with ADK's tool execution pipeline via the [`before_tool_callback`](/callbacks/types-of-callbacks/#tool-execution-callbacks) hook or the [plugin system](/plugins/), so no changes to your agent code are required.

`[](#__codelineno-0-1)The Environment Simulation is an experimental feature. Its API may change in future [](#__codelineno-0-2)releases.`

## How it works[¶](#how-it-works "Permanent link")

While [User Simulation](/evaluate/user-sim/) drives the conversation forward, Environment Simulation provides the stable backend. At a high level, the Environment Simulator sits between your agent and its tools. When the agent calls a tool, the simulator intercepts the call and decides whether to return a synthetic response — either a predefined injection or an LLM-generated mock — or to let the real tool execute.

The decision logic follows this order for each configured tool:

1.  **Injection configs** are checked first, in order. If a matching injection is found (based on argument matching and probability), its error or response is returned immediately.
2.  **Mock strategy** is used as a fallback if no injection config applies. The simulator calls an LLM to generate a realistic response based on the tool's schema and any stateful context.
3.  **No-op** is returned (`None`) if the tool is not in the simulator config, allowing the real tool to execute normally.

## Integration[¶](#integration "Permanent link")

The `EnvironmentSimulationFactory` class provides two integration points:

-   `create_callback()` — Returns an async callable suitable for use as a `before_tool_callback` on any `LlmAgent`.
-   `create_plugin()` — Returns an `EnvironmentSimulationPlugin` instance that integrates with the ADK plugin system.

### Using as a callback[¶](#using-as-a-callback "Permanent link")

The following example shows how to create an environment simulation as one of the adk agent callbacks.

`[](#__codelineno-1-1)from google.adk.agents import LlmAgent [](#__codelineno-1-2)from google.adk.tools.environment_simulation import EnvironmentSimulationFactory [](#__codelineno-1-3)from google.adk.tools.environment_simulation.environment_simulation_config import (     [](#__codelineno-1-4)    EnvironmentSimulationConfig,    [](#__codelineno-1-5)    InjectedError,    [](#__codelineno-1-6)    InjectionConfig,    [](#__codelineno-1-7)    ToolSimulationConfig, [](#__codelineno-1-8)) [](#__codelineno-1-9)[](#__codelineno-1-10)config = EnvironmentSimulationConfig(     [](#__codelineno-1-11)    tool_simulation_configs=[        [](#__codelineno-1-12)        ToolSimulationConfig(            [](#__codelineno-1-13)            tool_name="get_user_profile",            [](#__codelineno-1-14)            injection_configs=[                [](#__codelineno-1-15)                InjectionConfig(                    [](#__codelineno-1-16)                    injected_error=InjectedError(                        [](#__codelineno-1-17)                        injected_http_error_code=503,                        [](#__codelineno-1-18)                        error_message="Service temporarily unavailable.",                    [](#__codelineno-1-19)                    )                [](#__codelineno-1-20)                )            [](#__codelineno-1-21)            ],        [](#__codelineno-1-22)        )    [](#__codelineno-1-23)    ] [](#__codelineno-1-24)) [](#__codelineno-1-25)[](#__codelineno-1-26)agent = LlmAgent(     [](#__codelineno-1-27)    name="my_agent",    [](#__codelineno-1-28)    model="gemini-flash-latest",    [](#__codelineno-1-29)    tools=[get_user_profile],    [](#__codelineno-1-30)    before_tool_callback=EnvironmentSimulationFactory.create_callback(config), [](#__codelineno-1-31))`

### Using as a plugin[¶](#using-as-a-plugin "Permanent link")

The following example shows how to create environment simulation as an ADK agent plugin.

`[](#__codelineno-2-1)from google.adk.apps import App [](#__codelineno-2-2)from google.adk.tools.environment_simulation import EnvironmentSimulationFactory [](#__codelineno-2-3)from google.adk.tools.environment_simulation.environment_simulation_config import (     [](#__codelineno-2-4)    EnvironmentSimulationConfig,    [](#__codelineno-2-5)    MockStrategy,    [](#__codelineno-2-6)    ToolSimulationConfig, [](#__codelineno-2-7)) [](#__codelineno-2-8)[](#__codelineno-2-9)config = EnvironmentSimulationConfig(     [](#__codelineno-2-10)    tool_simulation_configs=[        [](#__codelineno-2-11)        ToolSimulationConfig(            [](#__codelineno-2-12)            tool_name="search_products",            [](#__codelineno-2-13)            mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC,        [](#__codelineno-2-14)        )    [](#__codelineno-2-15)    ] [](#__codelineno-2-16)) [](#__codelineno-2-17)[](#__codelineno-2-18)app = App(     [](#__codelineno-2-19)    name="my_app",    [](#__codelineno-2-20)    root_agent=my_agent,    [](#__codelineno-2-21)    plugins=[EnvironmentSimulationFactory.create_plugin(config)], [](#__codelineno-2-22))`

## Configuration reference[¶](#configuration-reference "Permanent link")

You can configure the Environment Simulator with a set of dataclasses. The following sections provide a detailed reference for each configuration object.

### `EnvironmentSimulationConfig`[¶](#environmentsimulationconfig "Permanent link")

The top-level configuration object.

Field

Type

Default

Description

`tool_simulation_configs`

`List[ToolSimulationConfig]`

required

One entry per tool to simulate. Must not be empty, and tool names must be unique.

`simulation_model`

`str`

`"gemini-flash-latest"`

The LLM used for tool connection analysis and mock response generation.

`simulation_model_configuration`

`GenerateContentConfig`

thinking enabled

LLM generation config for internal simulator calls.

`environment_data`

`str \| None`

`None`

Optional environment context (e.g., a JSON database snapshot) passed to mock strategies to generate more realistic responses.

`tracing`

`str \| None`

`None`

Tracing data (e.g., a prior agent run trace in JSON string format) to provide historical context.

### `ToolSimulationConfig`[¶](#toolsimulationconfig "Permanent link")

Defines how a single named tool should be simulated.

Field

Type

Default

Description

`tool_name`

`str`

required

Must match the tool's registered name exactly.

`injection_configs`

`List[InjectionConfig]`

`[]`

Zero or more injection configs, checked in order before the mock strategy.

`mock_strategy_type`

`MockStrategy`

`MOCK_STRATEGY_UNSPECIFIED`

Fallback strategy when no injection is triggered.

### `InjectionConfig`[¶](#injectionconfig "Permanent link")

Controls a single synthetic response that can be injected into a tool call. Exactly one of `injected_error` or `injected_response` must be set.

Field

Type

Default

Description

`injected_error`

`InjectedError \| None`

`None`

Error to return (mutually exclusive with `injected_response`).

`injected_response`

`Dict[str, Any] \| None`

`None`

Fixed response dict to return (mutually exclusive with `injected_error`).

`injection_probability`

`float`

`1.0`

Probability `[0.0, 1.0]` that this injection fires.

`match_args`

`Dict[str, Any] \| None`

`None`

If set, the injection only fires when the tool's arguments contain all key-value pairs in `match_args`.

`injected_latency_seconds`

`float`

`0.0`

Artificial delay (≤ 120 s) added before returning the injection result.

`random_seed`

`int \| None`

`None`

Seed for the probability check, enabling deterministic injection behavior.

### `InjectedError`[¶](#injectederror "Permanent link")

Defines an HTTP-style error response.

Field

Type

Description

`injected_http_error_code`

`int`

HTTP status code to surface as

: : : `"error_code"` in the tool response. :

`error_message`

`str`

Human-readable message surfaced as

: : : `"error_message"` in the tool response. :

### `MockStrategy`[¶](#mockstrategy "Permanent link")

Enum controlling how the simulator generates responses when no injection fires.

Value

Description

`MOCK_STRATEGY_TOOL_SPEC`

Uses the tool's schema and stateful context to

: : prompt an LLM to generate a realistic response. :

`MOCK_STRATEGY_TRACING`

*(Deprecated)* Please use

: : `MOCK_STRATEGY_TOOL_SPEC` with tracing input. :

## Injection mode[¶](#injection-mode "Permanent link")

Use injection configs to test specific failure or edge-case scenarios. Injections are evaluated in list order; the first one whose `match_args` criteria are met (and whose probability check passes) is applied.

### Injecting errors[¶](#injecting-errors "Permanent link")

The following example shows how to inject errors with specific error code and error message to the agent.

`[](#__codelineno-3-1)from google.adk.tools.environment_simulation.environment_simulation_config import (     [](#__codelineno-3-2)    InjectedError,    [](#__codelineno-3-3)    InjectionConfig,    [](#__codelineno-3-4)    ToolSimulationConfig, [](#__codelineno-3-5)) [](#__codelineno-3-6)[](#__codelineno-3-7)ToolSimulationConfig(     [](#__codelineno-3-8)    tool_name="charge_payment",    [](#__codelineno-3-9)    injection_configs=[        [](#__codelineno-3-10)        InjectionConfig(            [](#__codelineno-3-11)            injected_error=InjectedError(                [](#__codelineno-3-12)                injected_http_error_code=402,                [](#__codelineno-3-13)                error_message="Payment declined.",            [](#__codelineno-3-14)            )        [](#__codelineno-3-15)        )    [](#__codelineno-3-16)    ], [](#__codelineno-3-17))`

The agent will receive `{"error_code": 402, "error_message": "Payment declined."}` instead of a real tool result, allowing you to evaluate how the agent handles payment failures.

### Injecting fixed responses[¶](#injecting-fixed-responses "Permanent link")

Use the following InjectionConfig to specify a success response with fixed response payload.

`[](#__codelineno-4-1)InjectionConfig(     [](#__codelineno-4-2)    injected_response={"status": "ok", "order_id": "ORD-9999"} [](#__codelineno-4-3))`

### Conditional injection with argument matching[¶](#conditional-injection-with-argument-matching "Permanent link")

Use `match_args` to inject only when specific arguments are passed.

`[](#__codelineno-5-1)InjectionConfig(     [](#__codelineno-5-2)    match_args={"item_id": "ITEM-404"},    [](#__codelineno-5-3)    injected_error=InjectedError(        [](#__codelineno-5-4)        injected_http_error_code=404,        [](#__codelineno-5-5)        error_message="Item not found.",    [](#__codelineno-5-6)    ), [](#__codelineno-5-7))`

Here, the error is injected only when the tool is called with `item_id="ITEM-404"`. All other calls pass through to the next injection config or to the mock strategy.

### Probabilistic injection[¶](#probabilistic-injection "Permanent link")

Set `injection_probability` to a value between `0.0` and `1.0` to simulate flaky behavior. For reproducible test runs, pin the random outcome with `random_seed`.

`[](#__codelineno-6-1)InjectionConfig(     [](#__codelineno-6-2)    injection_probability=0.3,    [](#__codelineno-6-3)    random_seed=42,    [](#__codelineno-6-4)    injected_error=InjectedError(        [](#__codelineno-6-5)        injected_http_error_code=500,        [](#__codelineno-6-6)        error_message="Internal server error.",    [](#__codelineno-6-7)    ), [](#__codelineno-6-8))`

### Injecting latency[¶](#injecting-latency "Permanent link")

Use `injected_latency_seconds` to simulate slow backend responses, useful for testing timeout handling or user experience under degraded conditions.

`[](#__codelineno-7-1)InjectionConfig(     [](#__codelineno-7-2)    injected_latency_seconds=5.0,    [](#__codelineno-7-3)    injected_response={"result": "slow but successful"}, [](#__codelineno-7-4))`

### Combining multiple injection configs[¶](#combining-multiple-injection-configs "Permanent link")

Multiple injection configs on a single tool are checked in order. You can combine them to test multiple scenarios:

`[](#__codelineno-8-1)ToolSimulationConfig(     [](#__codelineno-8-2)    tool_name="get_inventory",    [](#__codelineno-8-3)    injection_configs=[        [](#__codelineno-8-4)        # Always fail for a specific out-of-stock item        [](#__codelineno-8-5)        InjectionConfig(            [](#__codelineno-8-6)            match_args={"sku": "OOS-001"},            [](#__codelineno-8-7)            injected_response={"quantity": 0, "available": False},        [](#__codelineno-8-8)        ),        [](#__codelineno-8-9)        # Randomly fail 20% of the time for all other items        [](#__codelineno-8-10)        InjectionConfig(            [](#__codelineno-8-11)            injection_probability=0.2,            [](#__codelineno-8-12)            random_seed=7,            [](#__codelineno-8-13)            injected_error=InjectedError(                [](#__codelineno-8-14)                injected_http_error_code=503,                [](#__codelineno-8-15)                error_message="Inventory service unavailable.",            [](#__codelineno-8-16)            ),        [](#__codelineno-8-17)        ),    [](#__codelineno-8-18)    ], [](#__codelineno-8-19))`

## Mock strategy mode[¶](#mock-strategy-mode "Permanent link")

When you want the simulator to generate plausible responses automatically — rather than returning hand-crafted values — use `MOCK_STRATEGY_TOOL_SPEC`.

The simulator uses an LLM to:

1.  Analyze the schemas of all tools the agent has access to, and identify *stateful dependencies* between them (e.g., a `create_order` tool produces an `order_id` that `get_order` consumes).
2.  Track a **state store** of IDs and resources created during the session.
3.  Generate a response that is consistent with the tool's schema and the current state — returning a 404-style error if a consuming tool requests a resource that was never created.

`[](#__codelineno-9-1)from google.adk.tools.environment_simulation.environment_simulation_config import (     [](#__codelineno-9-2)    EnvironmentSimulationConfig,    [](#__codelineno-9-3)    MockStrategy,    [](#__codelineno-9-4)    ToolSimulationConfig, [](#__codelineno-9-5)) [](#__codelineno-9-6)[](#__codelineno-9-7)config = EnvironmentSimulationConfig(     [](#__codelineno-9-8)    tool_simulation_configs=[        [](#__codelineno-9-9)        ToolSimulationConfig(            [](#__codelineno-9-10)            tool_name="create_order",            [](#__codelineno-9-11)            mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC,        [](#__codelineno-9-12)        ),        [](#__codelineno-9-13)        ToolSimulationConfig(            [](#__codelineno-9-14)            tool_name="get_order",            [](#__codelineno-9-15)            mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC,        [](#__codelineno-9-16)        ),        [](#__codelineno-9-17)        ToolSimulationConfig(            [](#__codelineno-9-18)            tool_name="cancel_order",            [](#__codelineno-9-19)            mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC,        [](#__codelineno-9-20)        ),    [](#__codelineno-9-21)    ] [](#__codelineno-9-22))`

With this config, the simulator will automatically generate an `order_id` when `create_order` is mocked, and use it to return consistent results (or a not-found error) when `get_order` or `cancel_order` are subsequently called.

### Providing environment data[¶](#providing-environment-data "Permanent link")

Pass domain-specific context through `environment_data` to make mock responses more realistic. This can be a JSON string representing a snapshot of your database or any structured context the LLM should use when generating responses.

`[](#__codelineno-10-1)import json [](#__codelineno-10-2)[](#__codelineno-10-3)db_snapshot = {     [](#__codelineno-10-4)    "products": [        [](#__codelineno-10-5)        {"id": "P-001", "name": "Wireless Headphones", "price": 79.99, "stock": 12},        [](#__codelineno-10-6)        {"id": "P-002", "name": "USB-C Hub", "price": 34.99, "stock": 0},    [](#__codelineno-10-7)    ],    [](#__codelineno-10-8)    "warehouse_location": "US-WEST-2", [](#__codelineno-10-9)} [](#__codelineno-10-10)[](#__codelineno-10-11)config = EnvironmentSimulationConfig(     [](#__codelineno-10-12)    tool_simulation_configs=[        [](#__codelineno-10-13)        ToolSimulationConfig(            [](#__codelineno-10-14)            tool_name="search_products",            [](#__codelineno-10-15)            mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC,        [](#__codelineno-10-16)        ),    [](#__codelineno-10-17)    ],    [](#__codelineno-10-18)    environment_data=json.dumps(db_snapshot), [](#__codelineno-10-19))`

The LLM will use this data to return product names, prices, and stock levels that match your domain, rather than generating arbitrary placeholder values.

### Providing tracing data[¶](#providing-tracing-data "Permanent link")

Feed traces generated in the agent to be mocked through `tracing` to make mock responses more realistic.

`[](#__codelineno-11-1)import json [](#__codelineno-11-2)[](#__codelineno-11-3)agent_traces = [     [](#__codelineno-11-4)    {        [](#__codelineno-11-5)        "invocation_id": "inv-001",        [](#__codelineno-11-6)        "user_content": {"role": "user", "parts": [{"text": "Search for high-end headphones"}]},        [](#__codelineno-11-7)        "intermediate_data": {            [](#__codelineno-11-8)            "tool_uses": [                [](#__codelineno-11-9)                {                    [](#__codelineno-11-10)                    "name": "search_products",                    [](#__codelineno-11-11)                    "args": {"query": "high-end headphones"},                    [](#__codelineno-11-12)                    "response": {"products": [{"id": "P-123", "name": "Premium Wireless ANC Headphones"}]}                [](#__codelineno-11-13)                }            [](#__codelineno-11-14)            ]        [](#__codelineno-11-15)        }    [](#__codelineno-11-16)    } [](#__codelineno-11-17)] [](#__codelineno-11-18)[](#__codelineno-11-19)config = EnvironmentSimulationConfig(     [](#__codelineno-11-20)    tool_simulation_configs=[        [](#__codelineno-11-21)        ToolSimulationConfig(            [](#__codelineno-11-22)            tool_name="search_products",            [](#__codelineno-11-23)            mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC,        [](#__codelineno-11-24)        ),    [](#__codelineno-11-25)    ],    [](#__codelineno-11-26)    tracing=json.dumps(agent_traces), [](#__codelineno-11-27))`

The LLM will use this data to return product names, prices, and stock levels that match your domain, rather than generating arbitrary placeholder values.

## Mixing injections and mock strategy[¶](#mixing-injections-and-mock-strategy "Permanent link")

Injection configs and a mock strategy can be combined on the same tool. Injections are always checked first; the mock strategy fires only when no injection applies.

`[](#__codelineno-12-1)ToolSimulationConfig(     [](#__codelineno-12-2)    tool_name="send_notification",    [](#__codelineno-12-3)    injection_configs=[        [](#__codelineno-12-4)        # Always fail for a known-bad recipient        [](#__codelineno-12-5)        InjectionConfig(            [](#__codelineno-12-6)            match_args={"recipient_id": "INVALID"},            [](#__codelineno-12-7)            injected_error=InjectedError(                [](#__codelineno-12-8)                injected_http_error_code=400,                [](#__codelineno-12-9)                error_message="Invalid recipient.",            [](#__codelineno-12-10)            ),        [](#__codelineno-12-11)        ),    [](#__codelineno-12-12)    ],    [](#__codelineno-12-13)    # For all other recipients, generate a plausible success response    [](#__codelineno-12-14)    mock_strategy_type=MockStrategy.MOCK_STRATEGY_TOOL_SPEC, [](#__codelineno-12-15))`

Back to top