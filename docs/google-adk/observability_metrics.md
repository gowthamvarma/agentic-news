---
title: "Metrics - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/observability/metrics/
date: 2026-10-10T19:16:58.623Z
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
        
    -   [Observability](../)
        
        Observability
        
        -   [Logging](../logging/)
        -    Metrics [Metrics](./)
            
            Table of contents
            
            -   [Metrics philosophy](#metrics-philosophy)
            -   [Metrics schema](#metrics-schema)
                
                -   [Experimental metrics](#experimental-metrics)
                
            -   [Metrics export setup](#metrics-export-setup)
                
                -   [Metrics export in ADK Web](#metrics-export-in-adk-web)
                    
                    -   [OTLP export](#otlp-export)
                    -   [GCP export](#gcp-export)
                    
                -   [Programmatic metrics export](#programmatic-metrics-export)
                    
                    -   [OTLP export setup](#otlp-export-setup)
                    -   [GCP export setup](#gcp-export-setup)
                    
                -   [Kotlin programmatic setup](#kotlin-programmatic-setup)
                    
                    -   [OTLP export setup](#otlp-export-setup_1)
                    
                
            
        -   [Traces](../traces/)
        
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

-   [Metrics philosophy](#metrics-philosophy)
-   [Metrics schema](#metrics-schema)
    
    -   [Experimental metrics](#experimental-metrics)
    
-   [Metrics export setup](#metrics-export-setup)
    
    -   [Metrics export in ADK Web](#metrics-export-in-adk-web)
        
        -   [OTLP export](#otlp-export)
        -   [GCP export](#gcp-export)
        
    -   [Programmatic metrics export](#programmatic-metrics-export)
        
        -   [OTLP export setup](#otlp-export-setup)
        -   [GCP export setup](#gcp-export-setup)
        
    -   [Kotlin programmatic setup](#kotlin-programmatic-setup)
        
        -   [OTLP export setup](#otlp-export-setup_1)
        
    

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Observability](../)

[](https://github.com/google/adk-docs/edit/main/docs/observability/metrics.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Agent activity metrics[¶](#agent-activity-metrics "Permanent link")

Supported in ADKPython v1.32.0Kotlin v0.1.0

Agent Development Kit (ADK) provides built-in, vendor-neutral metrics collection to help you understand the performance, cost, and usage patterns of your agents. While logs provide a detailed narrative of *what* happened, metrics give you aggregated, quantitative data to answer *how often* and *how fast* things are happening.

## Metrics philosophy[¶](#metrics-philosophy "Permanent link")

ADK's approach to metrics is designed to be lightweight, standardized, and entirely agnostic to your choice of monitoring backend.

-   **OpenTelemetry Semantic Conventions:** ADK implements the OpenTelemetry (OTel) [Semantic Conventions for GenAI](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-metrics.md). This ensures that metrics are recorded under standard, predictable attribute and metric names.
-   **OTLP Wire Format:** ADK emits data using the standard OTLP format, ensuring that your metrics will seamlessly integrate into any OTel-compatible backend (e.g., Prometheus, Datadog, SigNoz, Google Cloud Monitoring).
-   **Cost and Performance Focused:** Metrics are significantly less costly and more performant than logs or traces when performing analytics over large swathes of data. ADK tracks the most critical signals for LLM applications: token consumption, request latency, and tool execution reliability.
-   **Vendor-Neutral Export:** ADK does not lock you into a specific metrics pipeline. You instantiate standard OTel meter providers and export data wherever your infrastructure demands.

* * *

## Metrics schema[¶](#metrics-schema "Permanent link")

When metrics are enabled, ADK automatically instruments the agent's lifecycle, workflow steps, and tool executions based on the OpenTelemetry GenAI Semantic Conventions. The following core metrics are emitted:

Metric Name

Type

Description

Key Attributes (Dimensions)

**`gen_ai.invoke_agent.duration`**

Histogram (seconds)

The total time taken for an agent to process a prompt and return a response.

`gen_ai.agent.name`, `error.type`

**`gen_ai.invoke_workflow.duration`**

Histogram (seconds)

The time taken to run a workflow.

`gen_ai.operation.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only), `error.type`

**`gen_ai.execute_tool.duration`**

Histogram (seconds)

The execution latency of individual tools called by the agent. Useful for spotting slow external APIs.

`gen_ai.agent.name`, `gen_ai.tool.name`, `gen_ai.tool.type`, `error.type`

**`gen_ai.invoke_agent.inference_calls`**

Histogram (count)

The number of inference (model) calls made during one agent invocation.

`gen_ai.agent.name`

**`gen_ai.invoke_agent.tool_calls`**

Histogram (count)

The number of tool calls made during one agent invocation.

`gen_ai.agent.name`

**`gen_ai.client.operation.duration`**

Histogram (seconds)

The latency of a single model `generate_content` call.

`gen_ai.agent.name`, `gen_ai.operation.name`, `gen_ai.provider.name`, `gen_ai.request.model`, `gen_ai.response.model`, `error.type`

**`gen_ai.client.token.usage`**

Histogram (tokens)

Token consumption per model call, split into input and output by `gen_ai.token.type`.

`gen_ai.agent.name`, `gen_ai.operation.name`, `gen_ai.provider.name`, `gen_ai.request.model`, `gen_ai.response.model`, `gen_ai.token.type`

### Experimental metrics[¶](#experimental-metrics "Permanent link")

ADK emits additional telemetry under the `adk.experimental.*` namespace, which covers span attributes as well as the metrics below. Nothing in it is part of an OpenTelemetry semantic convention yet, so names, attributes, and meaning can still change between releases. Explore them freely, and expect to revisit anything long-lived you build on them as the names settle.

The metrics below aggregate token spend and call counts over a whole agent invocation or a whole workflow, the grain above the single model call that `gen_ai.client.*` measures, so you can ask what one turn cost without summing model calls yourself.

They are off by default. To turn them on, set the environment variable:

`[](#__codelineno-0-1)export ADK_EXPERIMENTAL_TELEMETRY=true`

You can also opt in per request, which takes precedence over the environment variable:

`[](#__codelineno-1-1)from google.adk.agents.run_config import RunConfig [](#__codelineno-1-2)from google.adk.telemetry import TelemetryConfig [](#__codelineno-1-3)[](#__codelineno-1-4)run_config = RunConfig(     [](#__codelineno-1-5)    telemetry=TelemetryConfig(adk_experimental_telemetry_opt_in=True) [](#__codelineno-1-6))`

When neither is set, none of the metrics below are recorded.

The eight `invoke_workflow` rows need one more thing: telemetry schema v2, which is the default on Vertex AI Agent Engine and off everywhere else. Set `ADK_TELEMETRY_SCHEMA_VERSION_OPT_IN=2` anywhere else, or those rows stay empty. The `invoke_agent` rows are unaffected, and an app built on the `Workflow` engine records per-node datapoints under either version.

Metric Name

Type

Description

Key Attributes (Dimensions)

**`adk.experimental.invoke_agent.input_tokens`**

Histogram (tokens)

Input (prompt) tokens summed over one agent invocation, including server-side tool results and cached prompt tokens.

`gen_ai.agent.name`

**`adk.experimental.invoke_agent.output_tokens`**

Histogram (tokens)

Output (completion) tokens summed over one agent invocation, including reasoning tokens and the tokens spent emitting tool calls.

`gen_ai.agent.name`

**`adk.experimental.invoke_agent.total_tokens`**

Histogram (tokens)

Input plus output tokens for one agent invocation.

`gen_ai.agent.name`

**`adk.experimental.invoke_agent.cache_read.input_tokens`**

Histogram (tokens)

Input tokens served from a provider-managed cache, summed over one agent invocation.

`gen_ai.agent.name`

**`adk.experimental.invoke_agent.reasoning.output_tokens`**

Histogram (tokens)

Output tokens spent on reasoning (chain-of-thought / extended thinking), summed over one agent invocation.

`gen_ai.agent.name`

**`adk.experimental.invoke_agent.tool.input_tokens`**

Histogram (tokens)

Input tokens from server-side tool results the model fed back to itself within one request, such as code execution or search grounding. Zero for client-side function tools.

`gen_ai.agent.name`

**`adk.experimental.invoke_workflow.input_tokens`**

Histogram (tokens)

The `input_tokens` above, summed across every agent that ran in one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.output_tokens`**

Histogram (tokens)

The `output_tokens` above, summed across every agent that ran in one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.total_tokens`**

Histogram (tokens)

The `total_tokens` above, summed across every agent that ran in one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.cache_read.input_tokens`**

Histogram (tokens)

The `cache_read.input_tokens` above, summed across every agent that ran in one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.reasoning.output_tokens`**

Histogram (tokens)

The `reasoning.output_tokens` above, summed across every agent that ran in one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.tool.input_tokens`**

Histogram (tokens)

The `tool.input_tokens` above, summed across every agent that ran in one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.inference_calls`**

Histogram (count)

The number of inference (model) calls made across one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

**`adk.experimental.invoke_workflow.tool_calls`**

Histogram (count)

The number of tool calls made across one workflow invocation.

`adk.experimental.root_agent.name`, `gen_ai.workflow.name`, `gen_ai.workflow.nested` (nested workflows only)

Warning

A nested workflow records a datapoint of its own, and its totals are also folded into every workflow enclosing it, so summing an `invoke_workflow` metric across all datapoints double counts.

The `gen_ai.workflow.nested` attribute is set only on nested workflows, so excluding it leaves the outermost workflow alone, and that datapoint covers the whole turn. The workflow metrics carry no agent dimension, since a value spanning a whole workflow cannot be attributed to a single agent. They carry two names instead: `gen_ai.workflow.name` joins to `gen_ai.invoke_workflow.duration`, while `adk.experimental.root_agent.name` identifies the app, and the two disagree when a turn enters at a sub-agent.

* * *

## Metrics export setup[¶](#metrics-export-setup "Permanent link")

### Metrics export in ADK Web[¶](#metrics-export-in-adk-web "Permanent link")

If you are running your agent using the `adk web` or `adk api_server` CLI commands, you can configure metrics export.

#### OTLP export[¶](#otlp-export "Permanent link")

To export metrics to an OTLP-compatible backend, set the standard OTel environment variables:

`[](#__codelineno-2-1)export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT="http://your-collector:4318/v1/metrics" [](#__codelineno-2-2)adk web path/to/your/agents_dir`

> **Note:** You can also set the general `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable if you would like to send traces and logs to the same endpoint in addition to metrics.

#### GCP export[¶](#gcp-export "Permanent link")

To enable metrics export to Google Cloud Monitoring, use the `--otel_to_cloud` flag:

`[](#__codelineno-3-1)adk web --otel_to_cloud path/to/your/agents_dir`

### Programmatic metrics export[¶](#programmatic-metrics-export "Permanent link")

You can also configure metrics export programmatically in your application code.

#### OTLP export setup[¶](#otlp-export-setup "Permanent link")

To enable metrics and export them to an OpenTelemetry Collector (or an OTLP-compatible backend) programmatically:

`[](#__codelineno-4-1)from google.adk.telemetry.setup import maybe_set_otel_providers [](#__codelineno-4-2)import os [](#__codelineno-4-3)[](#__codelineno-4-4)os.environ["OTEL_EXPORTER_OTLP_METRICS_ENDPOINT"] = "http://your-collector:4318/v1/metrics" [](#__codelineno-4-5)os.environ["OTEL_SERVICE_NAME"] = "your-adk-agent" [](#__codelineno-4-6)os.environ["OTEL_RESOURCE_ATTRIBUTES"] = "key1=value1,key2=value2" [](#__codelineno-4-7)maybe_set_otel_providers()`

#### GCP export setup[¶](#gcp-export-setup "Permanent link")

To export metrics to Google Cloud Monitoring programmatically, use the OpenTelemetry Google Cloud exporter. Here is an example in Python:

`[](#__codelineno-5-1)from google.adk.telemetry.google_cloud import get_gcp_exporters [](#__codelineno-5-2)from google.adk.telemetry.setup import maybe_set_otel_providers [](#__codelineno-5-3)import os [](#__codelineno-5-4)[](#__codelineno-5-5)gcp_exporters = get_gcp_exporters(   [](#__codelineno-5-6)  enable_cloud_metrics = True, [](#__codelineno-5-7)) [](#__codelineno-5-8)os.environ["OTEL_SERVICE_NAME"] = "your-adk-agent" [](#__codelineno-5-9)os.environ["OTEL_RESOURCE_ATTRIBUTES"] = "key1=value1,key2=value2" [](#__codelineno-5-10)maybe_set_otel_providers([gcp_exporters])`

### Kotlin programmatic setup[¶](#kotlin-programmatic-setup "Permanent link")

In Kotlin, ADK uses the standard `GlobalOpenTelemetry` to manage metrics. Configuring your OpenTelemetry SDK with a `MeterProvider` will enable metric collection.

#### OTLP export setup[¶](#otlp-export-setup_1 "Permanent link")

To enable metrics and export them to an OpenTelemetry Collector, configure the OpenTelemetry SDK with the appropriate metrics exporter:

`[](#__codelineno-6-1)// 1. Configure OpenTelemetry (Traces) [](#__codelineno-6-2)// ADK Kotlin uses GlobalOpenTelemetry to resolve its tracer on the JVM. [](#__codelineno-6-3)val spanExporter = OtlpGrpcSpanExporter.builder().setEndpoint("http://localhost:4317").build() [](#__codelineno-6-4)[](#__codelineno-6-5)val resource =     [](#__codelineno-6-6)    Resource.getDefault()        [](#__codelineno-6-7)        .merge(            [](#__codelineno-6-8)            Resource.create(                [](#__codelineno-6-9)                Attributes.of(AttributeKey.stringKey("service.name"), "my-kotlin-agent"),            [](#__codelineno-6-10)            ),        [](#__codelineno-6-11)        ) [](#__codelineno-6-12)[](#__codelineno-6-13)val tracerProvider =     [](#__codelineno-6-14)    SdkTracerProvider.builder()        [](#__codelineno-6-15)        .addSpanProcessor(BatchSpanProcessor.builder(spanExporter).build())        [](#__codelineno-6-16)        .setResource(resource)        [](#__codelineno-6-17)        .build() [](#__codelineno-6-18)[](#__codelineno-6-19)OpenTelemetrySdk.builder().setTracerProvider(tracerProvider).buildAndRegisterGlobal() [](#__codelineno-6-20)[](#__codelineno-6-21)// 2. Optional: Configure ADK Telemetry behavior [](#__codelineno-6-22)// Enable capturing full message content in traces (use with caution in production) [](#__codelineno-6-23)TelemetryConfig.captureMessageContent = true [](#__codelineno-6-24)[](#__codelineno-6-25)// 3. Initialize Agent and Runner with LoggingPlugin for console output [](#__codelineno-6-26)val agent = LlmAgent(name = "my_agent", model = Gemini(name = "gemini-flash-latest")) [](#__codelineno-6-27)[](#__codelineno-6-28)val runner =     [](#__codelineno-6-29)    InMemoryRunner(        [](#__codelineno-6-30)        App(appName = "my_agent", rootAgent = agent, plugins = listOf(LoggingPlugin())),    [](#__codelineno-6-31)    ) [](#__codelineno-6-32)[](#__codelineno-6-33)// The runner will now automatically emit traces via GlobalOpenTelemetry [](#__codelineno-6-34)// and log activity to the console via the LoggingPlugin. [](#__codelineno-6-35)runner.run(     [](#__codelineno-6-36)    userId = "user123",    [](#__codelineno-6-37)    sessionId = "session456",    [](#__codelineno-6-38)    newMessage = Content.fromText(Role.USER, "Hello!"), [](#__codelineno-6-39))`

Back to top