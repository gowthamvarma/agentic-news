---
title: "Traces - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/observability/traces/
date: 2026-10-10T19:16:58.689Z
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
        -   [Metrics](../metrics/)
        -    Traces [Traces](./)
            
            Table of contents
            
            -   [Traces philosophy](#traces-philosophy)
            -   [Traces schema](#traces-schema)
            -   [Traces export setup](#traces-export-setup)
                
                -   [Traces export in ADK Web](#traces-export-in-adk-web)
                    
                    -   [OTLP export](#otlp-export)
                    -   [GCP export](#gcp-export)
                    
                -   [Programmatic traces export](#programmatic-traces-export)
                    
                    -   [OTLP export setup](#otlp-export-setup)
                    -   [GCP export setup](#gcp-export-setup)
                    
                -   [Kotlin programmatic setup](#kotlin-programmatic-setup)
                    
                    -   [OTLP export setup](#otlp-export-setup_1)
                    
                
            
        
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

-   [Traces philosophy](#traces-philosophy)
-   [Traces schema](#traces-schema)
-   [Traces export setup](#traces-export-setup)
    
    -   [Traces export in ADK Web](#traces-export-in-adk-web)
        
        -   [OTLP export](#otlp-export)
        -   [GCP export](#gcp-export)
        
    -   [Programmatic traces export](#programmatic-traces-export)
        
        -   [OTLP export setup](#otlp-export-setup)
        -   [GCP export setup](#gcp-export-setup)
        
    -   [Kotlin programmatic setup](#kotlin-programmatic-setup)
        
        -   [OTLP export setup](#otlp-export-setup_1)
        
    

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Observability](../)

[](https://github.com/google/adk-docs/edit/main/docs/observability/traces.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Agent activity traces[¶](#agent-activity-traces "Permanent link")

Supported in ADKPython v1.17.0Go v1.0.0Kotlin v0.1.0

Agent Development Kit (ADK) provides distributed tracing capabilities to help you visualize the end-to-end journey of a request as it travels through your agent's architecture. While metrics tell you *how long* a process took and logs tell you *what* happened, traces connect these events, showing you exactly *where* the time was spent and the hierarchical relationship between LLM reasoning, tool calls, and external APIs.

## Traces philosophy[¶](#traces-philosophy "Permanent link")

ADK's approach to tracing is built on standard protocols to ensure seamless integration with your existing observability stack.

-   **OpenTelemetry Semantic Conventions:** ADK implements the OpenTelemetry (OTel) [Semantic Conventions for GenAI](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-agent-spans.md). This ensures that trace spans and attributes are recorded under standard, predictable names.
-   **OTLP Wire Format:** ADK emits data using the standard OTLP format, ensuring that your traces will seamlessly integrate into any OTel-compatible backend (e.g., Google Cloud Trace, Jaeger, Grafana Tempo, Datadog).
-   **Hierarchical Visualization:** Traces are organized into "Spans." An agent run is a root span, which contains child spans for LLM operations, which may in turn contain child spans for tool executions. This creates a clear "waterfall" view of the agent's reasoning loop.
-   **Context Propagation:** ADK automatically passes trace context across process boundaries, ensuring that if your agent calls an external microservice via a tool, that service's spans are linked to the agent's root trace.

* * *

## Traces schema[¶](#traces-schema "Permanent link")

When tracing is enabled, ADK automatically instruments key operations following the OpenTelemetry GenAI Semantic Conventions for Agents. A typical trace waterfall includes the following spans:

Span Name

Type

Description

Key Attributes

**[`invoke_agent {agent.name}`](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-agent-spans.md#invoke-agent-client-span)**

Client / Internal Span

Describes GenAI agent invocation over a remote service or locally. Represents the lifecycle of an agent interaction.

`gen_ai.operation.name`, `gen_ai.agent.name`, `gen_ai.agent.description`, `gen_ai.conversation.id`

**[`invoke_workflow {workflow.name}`](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-agent-spans.md#invoke-workflow-span)**

Child Span

Describes the invocation of a multi-step agentic workflow.

`gen_ai.operation.name`, `gen_ai.workflow.name`, `gen_ai.conversation.id`, `gen_ai.workflow.nested` (nested workflows only)

**[`execute_tool {tool.name}`](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-agent-spans.md#execute-tool-span)**

Child Span

Represents the execution of a specific tool or function call requested by the GenAI system.

`gen_ai.operation.name`, `gen_ai.tool.name`, `gen_ai.tool.description`, `gen_ai.tool.type`, `gen_ai.tool.call.id`, `error.type`

**[`generate_content {model.name}`](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-spans.md)**

Internal Span

Represents the invocation of the underlying language model (via the GenAI SDK) to generate content. It tracks the request parameters, response details, and usage metrics.

`gen_ai.operation.name`, `gen_ai.system`, `gen_ai.request.model`, `gen_ai.agent.name`, `gen_ai.conversation.id`, `gen_ai.response.finish_reasons`, `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`

* * *

## Traces export setup[¶](#traces-export-setup "Permanent link")

### Traces export in ADK Web[¶](#traces-export-in-adk-web "Permanent link")

If you are running your agent using the `adk web` or `adk api_server` CLI commands, you can configure trace exports.

#### OTLP export[¶](#otlp-export "Permanent link")

To export traces to an OTLP-compatible backend, set the standard OTel environment variables:

`[](#__codelineno-0-1)export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="http://your-collector:4318/v1/traces" [](#__codelineno-0-2)adk web path/to/your/agents_dir`

> **Note:** You can also set the general `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable if you would like to send metrics and logs to the same endpoint in addition to traces.

#### GCP export[¶](#gcp-export "Permanent link")

To enable trace export to Google Cloud Trace, use the `--otel_to_cloud` flag:

`[](#__codelineno-1-1)adk web --otel_to_cloud path/to/your/agents_dir`

### Programmatic traces export[¶](#programmatic-traces-export "Permanent link")

You can also configure trace export programmatically in your application code.

#### OTLP export setup[¶](#otlp-export-setup "Permanent link")

To enable tracing and export spans to an OpenTelemetry Collector programmatically:

`[](#__codelineno-2-1)from google.adk.telemetry.setup import maybe_set_otel_providers [](#__codelineno-2-2)import os [](#__codelineno-2-3)[](#__codelineno-2-4)os.environ["OTEL_EXPORTER_OTLP_TRACES_ENDPOINT"] = "http://your-collector:4318/v1/traces" [](#__codelineno-2-5)os.environ["OTEL_SERVICE_NAME"] = "your-adk-agent" [](#__codelineno-2-6)os.environ["OTEL_RESOURCE_ATTRIBUTES"] = "key1=value1,key2=value2" [](#__codelineno-2-7)maybe_set_otel_providers()`

#### GCP export setup[¶](#gcp-export-setup "Permanent link")

To export traces to Google Cloud Trace programmatically, use the OpenTelemetry Google Cloud exporter. Here is an example in Python:

`[](#__codelineno-3-1)from google.adk.telemetry.google_cloud import get_gcp_exporters [](#__codelineno-3-2)from google.adk.telemetry.setup import maybe_set_otel_providers [](#__codelineno-3-3)import os [](#__codelineno-3-4)[](#__codelineno-3-5)gcp_exporters = get_gcp_exporters(   [](#__codelineno-3-6)  enable_cloud_tracing = True, [](#__codelineno-3-7)) [](#__codelineno-3-8)os.environ["OTEL_SERVICE_NAME"] = "your-adk-agent" [](#__codelineno-3-9)os.environ["OTEL_RESOURCE_ATTRIBUTES"] = "key1=value1,key2=value2" [](#__codelineno-3-10)maybe_set_otel_providers([gcp_exporters])`

### Kotlin programmatic setup[¶](#kotlin-programmatic-setup "Permanent link")

In Kotlin, ADK automatically uses the `GlobalOpenTelemetry` instance to export traces. You should configure your OpenTelemetry SDK before starting the agent.

#### OTLP export setup[¶](#otlp-export-setup_1 "Permanent link")

To enable tracing and export spans to an OpenTelemetry Collector, configure the OpenTelemetry SDK and register it globally:

`[](#__codelineno-4-1)// 1. Configure OpenTelemetry (Traces) [](#__codelineno-4-2)// ADK Kotlin uses GlobalOpenTelemetry to resolve its tracer on the JVM. [](#__codelineno-4-3)val spanExporter = OtlpGrpcSpanExporter.builder().setEndpoint("http://localhost:4317").build() [](#__codelineno-4-4)[](#__codelineno-4-5)val resource =     [](#__codelineno-4-6)    Resource.getDefault()        [](#__codelineno-4-7)        .merge(            [](#__codelineno-4-8)            Resource.create(                [](#__codelineno-4-9)                Attributes.of(AttributeKey.stringKey("service.name"), "my-kotlin-agent"),            [](#__codelineno-4-10)            ),        [](#__codelineno-4-11)        ) [](#__codelineno-4-12)[](#__codelineno-4-13)val tracerProvider =     [](#__codelineno-4-14)    SdkTracerProvider.builder()        [](#__codelineno-4-15)        .addSpanProcessor(BatchSpanProcessor.builder(spanExporter).build())        [](#__codelineno-4-16)        .setResource(resource)        [](#__codelineno-4-17)        .build() [](#__codelineno-4-18)[](#__codelineno-4-19)OpenTelemetrySdk.builder().setTracerProvider(tracerProvider).buildAndRegisterGlobal() [](#__codelineno-4-20)[](#__codelineno-4-21)// 2. Optional: Configure ADK Telemetry behavior [](#__codelineno-4-22)// Enable capturing full message content in traces (use with caution in production) [](#__codelineno-4-23)TelemetryConfig.captureMessageContent = true [](#__codelineno-4-24)[](#__codelineno-4-25)// 3. Initialize Agent and Runner with LoggingPlugin for console output [](#__codelineno-4-26)val agent = LlmAgent(name = "my_agent", model = Gemini(name = "gemini-flash-latest")) [](#__codelineno-4-27)[](#__codelineno-4-28)val runner =     [](#__codelineno-4-29)    InMemoryRunner(        [](#__codelineno-4-30)        App(appName = "my_agent", rootAgent = agent, plugins = listOf(LoggingPlugin())),    [](#__codelineno-4-31)    ) [](#__codelineno-4-32)[](#__codelineno-4-33)// The runner will now automatically emit traces via GlobalOpenTelemetry [](#__codelineno-4-34)// and log activity to the console via the LoggingPlugin. [](#__codelineno-4-35)runner.run(     [](#__codelineno-4-36)    userId = "user123",    [](#__codelineno-4-37)    sessionId = "session456",    [](#__codelineno-4-38)    newMessage = Content.fromText(Role.USER, "Hello!"), [](#__codelineno-4-39))`

Back to top