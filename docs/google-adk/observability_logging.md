---
title: "Logging - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/observability/logging/
date: 2026-10-10T19:16:58.274Z
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
        
        -    Logging [Logging](./)
            
            Table of contents
            
            -   [Logging philosophy](#logging-philosophy)
            -   [Logging schema](#logging-schema)
                
                -   [Structured GenAI logs](#structured-genai-logs)
                -   [Log levels (Python)](#log-levels-python)
                
            -   [Logging in ADK Web](#logging-in-adk-web)
                
                -   [Logging level in ADK Web](#logging-level-in-adk-web)
                -   [Capture prompt content in ADK Web](#capture-prompt-content-in-adk-web)
                -   [OTLP export in ADK Web](#otlp-export-in-adk-web)
                -   [GCP export setup in ADK Web](#gcp-export-setup-in-adk-web)
                
            -   [Programmatic setup](#programmatic-setup)
                
                -   [Logging level](#logging-level)
                -   [Capture prompt content](#capture-prompt-content)
                -   [OTLP export](#otlp-export)
                -   [GCP export setup](#gcp-export-setup)
                
            -   [Activity logging with plugins](#activity-logging-with-plugins)
                
                -   [Console logging with LoggingPlugin](#console-logging-with-loggingplugin)
                -   [Full debug capture to a file with DebugLoggingPlugin](#full-debug-capture-to-a-file-with-debugloggingplugin)
                
            -   [Understanding log output](#understanding-log-output)
                
                -   [Sample Python log entry](#sample-python-log-entry)
                -   [Debugging example](#debugging-example)
                
            
        -   [Metrics](../metrics/)
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

-   [Logging philosophy](#logging-philosophy)
-   [Logging schema](#logging-schema)
    
    -   [Structured GenAI logs](#structured-genai-logs)
    -   [Log levels (Python)](#log-levels-python)
    
-   [Logging in ADK Web](#logging-in-adk-web)
    
    -   [Logging level in ADK Web](#logging-level-in-adk-web)
    -   [Capture prompt content in ADK Web](#capture-prompt-content-in-adk-web)
    -   [OTLP export in ADK Web](#otlp-export-in-adk-web)
    -   [GCP export setup in ADK Web](#gcp-export-setup-in-adk-web)
    
-   [Programmatic setup](#programmatic-setup)
    
    -   [Logging level](#logging-level)
    -   [Capture prompt content](#capture-prompt-content)
    -   [OTLP export](#otlp-export)
    -   [GCP export setup](#gcp-export-setup)
    
-   [Activity logging with plugins](#activity-logging-with-plugins)
    
    -   [Console logging with LoggingPlugin](#console-logging-with-loggingplugin)
    -   [Full debug capture to a file with DebugLoggingPlugin](#full-debug-capture-to-a-file-with-debugloggingplugin)
    
-   [Understanding log output](#understanding-log-output)
    
    -   [Sample Python log entry](#sample-python-log-entry)
    -   [Debugging example](#debugging-example)
    

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Observability](../)

[](https://github.com/google/adk-docs/edit/main/docs/observability/logging.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Agent activity logging[¶](#agent-activity-logging "Permanent link")

Supported in ADKPython v0.1.0Go v0.1.0Kotlin v0.1.0

Agent Development Kit (ADK) provides flexible and powerful logging capabilities to monitor agent behavior and debug issues effectively.

## Logging philosophy[¶](#logging-philosophy "Permanent link")

ADK's approach to logging is to provide detailed diagnostic information without being overly verbose by default. It is designed to be configured by the application developer, allowing you to tailor the log output to your specific needs, whether in a development or production environment.

-   **Standard Library Integration:** ADK uses the standard logging facilities of the host language (e.g., Python's `logging` module, Go's `log` package).
-   **Structured GenAI Logging:** ADK uses OpenTelemetry to log structured events for GenAI requests and responses, allowing for advanced monitoring and debugging in cloud environments.
-   **User-Configured:** While ADK provides defaults and integration with its CLI tools, it is ultimately the responsibility of the application developer to configure logging to suit their specific environment.

## Logging schema[¶](#logging-schema "Permanent link")

ADK emits logs using standard library facilities and structured GenAI events via OpenTelemetry.

### Structured GenAI logs[¶](#structured-genai-logs "Permanent link")

Structured GenAI logs emitted via OpenTelemetry follow the [Semantic Conventions for GenAI](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-events.md).

By default prompt content is elided in logs for security. You can enable prompt logging using environment variables or programmatic configuration. See [Capture prompt content](#capture-prompt-content-in-adk-web) for `adk web`, and [Capture prompt content programmatically](#capture-prompt-content) for setup in code.

### Log levels (Python)[¶](#log-levels-python "Permanent link")

The following table describes what is logged at different levels in Python when using the standard logger:

Level

Description

Type of Information Logged

**`DEBUG`**

**Crucial for debugging.** The most verbose level for fine-grained diagnostic information.

-   **Full LLM Prompts:** The complete request sent to the language model, including system instructions, history, and tools.
-   Detailed API responses from services.
-   Internal state transitions and variable values.

**`INFO`**

General information about the agent's lifecycle.

-   Agent initialization and startup.
-   Session creation and deletion events.
-   Execution of a tool, including its name and arguments.

**`WARNING`**

Indicates a potential issue or deprecated feature use. The agent continues to function, but attention may be required.

-   Use of deprecated methods or parameters.
-   Non-critical errors that the system recovered from.

**`ERROR`**

A serious error that prevented an operation from completing.

-   Failed API calls to external services (e.g., LLM, Session Service).
-   Unhandled exceptions during agent execution.
-   Configuration errors.

Note

It is recommended to use `INFO` or `WARNING` in production environments. Only enable `DEBUG` when actively troubleshooting an issue, as `DEBUG` logs can be very verbose and may contain sensitive information.

## Logging in ADK Web[¶](#logging-in-adk-web "Permanent link")

When running agents using the ADK's `adk web`, `adk api_server`, `adk deploy cloud_run` and `adk deploy gke` commands, you can control the log verbosity or destination.

### Logging level in ADK Web[¶](#logging-level-in-adk-web "Permanent link")

To start the web server with `DEBUG` level logging, run:

`[](#__codelineno-0-1)adk web --log_level DEBUG path/to/your/agents_dir`

The available log levels for the `--log_level` option are: `DEBUG`, `INFO` (default), `WARNING`, `ERROR`, `CRITICAL`.

### Capture prompt content in ADK Web[¶](#capture-prompt-content-in-adk-web "Permanent link")

By default a prompt content is elided in logs for security. You can enable prompt logging using the environment variable:

`[](#__codelineno-1-1)export OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT=true`

The available values for this variable are: `NO_CONTENT`, `EVENT_ONLY`, `SPAN_ONLY`, and `SPAN_AND_EVENT`. A boolean `true` or `1` means `EVENT_ONLY`, which records content on the emitted log events; any value outside these four falls back to `NO_CONTENT`. To record content on the inference span, `SPAN_ONLY` and `SPAN_AND_EVENT` also require `OTEL_SEMCONV_STABILITY_OPT_IN=gen_ai_latest_experimental`.

Warning

The `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT` setting logs the full content of user prompts and agent responses. This is useful for debugging but may capture sensitive data or PII. In production, set this to false or ensure you have appropriate data handling policies in place.

### OTLP export in ADK Web[¶](#otlp-export-in-adk-web "Permanent link")

To export logs to an OTLP-compatible backend, set the standard OTel environment variables:

`[](#__codelineno-2-1)export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT="http://your-collector:4318/v1/logs" [](#__codelineno-2-2)adk web path/to/your/agents_dir`

Note

You can also set the general `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable if you would like to send metrics and traces to the same endpoint in addition to logs.

### GCP export setup in ADK Web[¶](#gcp-export-setup-in-adk-web "Permanent link")

You can enable GCP export using the `--otel_to_cloud` flag:

`[](#__codelineno-3-1)adk web --otel_to_cloud path/to/your/agents_dir`

## Programmatic setup[¶](#programmatic-setup "Permanent link")

Programmatic setup configures the underlying logging framework and OpenTelemetry exporters from your own code, for system-level diagnostics and production observability. ADK uses the following logging facilities:

-   **Python:** ADK uses the standard `logging` module and OpenTelemetry for structured GenAI logs.
-   **Go:** ADK uses the `google.golang.org/adk/v2/telemetry` package for OpenTelemetry configuration, and the standard `log` package for general events, which it writes to `stderr` by default.
-   **Kotlin:** ADK uses standard JVM logging facilities, defaulting to Flogger, and OpenTelemetry for structured GenAI logs.

### Logging level[¶](#logging-level "Permanent link")

You can set the logging level for your ADK agent using standard logging controls, as follows:

PythonGoKotlin

To enable detailed logging, including `DEBUG` level messages, add the following to the top of your script:

`[](#__codelineno-4-1)import logging [](#__codelineno-4-2)[](#__codelineno-4-3)logging.basicConfig(     [](#__codelineno-4-4)    level=logging.DEBUG,    [](#__codelineno-4-5)    format='%(asctime)s - %(levelname)s - %(name)s - %(message)s' [](#__codelineno-4-6))`

General events (such as server startup or HTTP requests) are logged using the standard Go `log` package and written to `stderr` by default.

ADK uses standard JVM logging facilities (defaulting to Flogger). Configure your JVM logger backend, such as `java.util.logging` or SLF4J, to adjust log verbosity.

### Capture prompt content[¶](#capture-prompt-content "Permanent link")

PythonGoKotlin

You can enable full prompt logging programmatically by setting an environment variable:

`[](#__codelineno-5-1)import os [](#__codelineno-5-2)[](#__codelineno-5-3)os.environ["OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT"] = "true"`

To scope content capture to a single run instead of the whole process, set `RunConfig.telemetry` rather than the environment variable:

`[](#__codelineno-6-1)from google.adk.agents.run_config import RunConfig [](#__codelineno-6-2)from google.adk.telemetry import ContentCapturingMode, TelemetryConfig [](#__codelineno-6-3)[](#__codelineno-6-4)run_config = RunConfig(     [](#__codelineno-6-5)    telemetry=TelemetryConfig(        [](#__codelineno-6-6)        capture_message_content=ContentCapturingMode.SPAN_AND_EVENT,    [](#__codelineno-6-7)    ), [](#__codelineno-6-8))`

You can enable full prompt logging when initializing telemetry by exporting `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT=true`:

`[](#__codelineno-7-1)package main [](#__codelineno-7-2)[](#__codelineno-7-3)import (     [](#__codelineno-7-4)    "context"    [](#__codelineno-7-5)    "os" [](#__codelineno-7-6)    [](#__codelineno-7-7)    "google.golang.org/adk/v2/telemetry" [](#__codelineno-7-8)) [](#__codelineno-7-9)[](#__codelineno-7-10)func main() {     [](#__codelineno-7-11)    ctx := context.Background() [](#__codelineno-7-12)    [](#__codelineno-7-13)    // Enable GenAI message content capture via the OpenTelemetry environment variable    [](#__codelineno-7-14)    os.Setenv("OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT", "true") [](#__codelineno-7-15)    [](#__codelineno-7-16)    tp, err := telemetry.New(ctx)    [](#__codelineno-7-17)    if err != nil {        [](#__codelineno-7-18)        // handle error    [](#__codelineno-7-19)    }    [](#__codelineno-7-20)    defer tp.Shutdown(ctx)    [](#__codelineno-7-21)    tp.SetGlobalOtelProviders() [](#__codelineno-7-22)}`

You can enable full prompt logging by configuring the global `TelemetryConfig`:

`[](#__codelineno-8-1)// Enable full prompt and response logging [](#__codelineno-8-2)TelemetryConfig.captureMessageContent = true`

### OTLP export[¶](#otlp-export "Permanent link")

PythonGoKotlin

To export logs to an OpenTelemetry Collector (or an OTLP-compatible backend) programmatically:

`[](#__codelineno-9-1)from google.adk.telemetry.setup import maybe_set_otel_providers [](#__codelineno-9-2)import os [](#__codelineno-9-3)[](#__codelineno-9-4)os.environ["OTEL_EXPORTER_OTLP_LOGS_ENDPOINT"] = "http://your-collector:4318/v1/logs" [](#__codelineno-9-5)os.environ["OTEL_SERVICE_NAME"] = "your-adk-agent" [](#__codelineno-9-6)os.environ["OTEL_RESOURCE_ATTRIBUTES"] = "key1=value1,key2=value2" [](#__codelineno-9-7)maybe_set_otel_providers()`

To export logs to an OTLP-compatible backend, configure the standard OpenTelemetry environment variables, such as `OTEL_EXPORTER_OTLP_ENDPOINT` or `OTEL_EXPORTER_OTLP_LOGS_ENDPOINT`. The ADK telemetry package uses these settings automatically when initialized.

ADK Kotlin's OpenTelemetry integration emits **traces only** — it registers no `LoggerProvider`, so there is no OTLP log export. Application logs go to your JVM logging backend. To configure trace export, see the [Traces](../traces/) documentation.

### GCP export setup[¶](#gcp-export-setup "Permanent link")

PythonGoKotlin

To export logs to Google Cloud Logging programmatically, use the OpenTelemetry Google Cloud exporter. Here is an example in Python:

`[](#__codelineno-10-1)from google.adk.telemetry.google_cloud import get_gcp_exporters [](#__codelineno-10-2)from google.adk.telemetry.setup import maybe_set_otel_providers [](#__codelineno-10-3)import os [](#__codelineno-10-4)[](#__codelineno-10-5)gcp_exporters = get_gcp_exporters(   [](#__codelineno-10-6)  enable_cloud_logging = True, [](#__codelineno-10-7)) [](#__codelineno-10-8)os.environ["OTEL_SERVICE_NAME"] = "your-adk-agent" [](#__codelineno-10-9)os.environ["OTEL_RESOURCE_ATTRIBUTES"] = "key1=value1,key2=value2" [](#__codelineno-10-10)maybe_set_otel_providers([gcp_exporters])`

To export logs to Google Cloud Logging, use the `WithOtelToCloud` option:

`[](#__codelineno-11-1)package main [](#__codelineno-11-2)[](#__codelineno-11-3)import (     [](#__codelineno-11-4)    "context"    [](#__codelineno-11-5)    "google.golang.org/adk/v2/telemetry" [](#__codelineno-11-6)) [](#__codelineno-11-7)[](#__codelineno-11-8)func main() {     [](#__codelineno-11-9)    ctx := context.Background()    [](#__codelineno-11-10)    tp, err := telemetry.New(ctx,        [](#__codelineno-11-11)        telemetry.WithOtelToCloud(true),    [](#__codelineno-11-12)    )    [](#__codelineno-11-13)    if err != nil {        [](#__codelineno-11-14)        // handle error    [](#__codelineno-11-15)    }    [](#__codelineno-11-16)    defer tp.Shutdown(ctx)    [](#__codelineno-11-17)    tp.SetGlobalOtelProviders() [](#__codelineno-11-18)}`

If using the Go launcher, you can also enable GCP export via the CLI flag:

`[](#__codelineno-12-1)go run main.go web -otel_to_cloud`

ADK Kotlin emits no OpenTelemetry log records, so there is nothing for Cloud Logging to receive; application logs go to your JVM logging backend. ADK Kotlin **traces** can be sent to Google Cloud by pointing a standard OTLP exporter at `telemetry.googleapis.com` — see [OTLP with Google Cloud](https://cloud.google.com/stackdriver/docs/otlp/overview) for the required credentials, quota project and `roles/telemetry.writer` grant.

## Activity logging with plugins[¶](#activity-logging-with-plugins "Permanent link")

ADK provides built-in plugins that capture agent activity, including user messages, model requests and responses, tool calls, and (with `DebugLoggingPlugin`) session state. These plugins require no changes to your agent logic.

### Console logging with `LoggingPlugin`[¶](#console-logging-with-loggingplugin "Permanent link")

To print structured activity logs to the console during execution, attach `LoggingPlugin` to your `App`:

PythonGoKotlin

`[](#__codelineno-13-1)from google.adk.apps import App [](#__codelineno-13-2)from google.adk.plugins import LoggingPlugin [](#__codelineno-13-3)[](#__codelineno-13-4)app = App(     [](#__codelineno-13-5)    name="my_app",    [](#__codelineno-13-6)    root_agent=root_agent,    [](#__codelineno-13-7)    plugins=[LoggingPlugin()], [](#__codelineno-13-8))`

`[](#__codelineno-14-1)package main [](#__codelineno-14-2)[](#__codelineno-14-3)import (     [](#__codelineno-14-4)    "context"    [](#__codelineno-14-5)    "log"    [](#__codelineno-14-6)    "os" [](#__codelineno-14-7)    [](#__codelineno-14-8)    "google.golang.org/adk/v2/agent"    [](#__codelineno-14-9)    "google.golang.org/adk/v2/cmd/launcher"    [](#__codelineno-14-10)    "google.golang.org/adk/v2/cmd/launcher/full"    [](#__codelineno-14-11)    "google.golang.org/adk/v2/plugin"    [](#__codelineno-14-12)    "google.golang.org/adk/v2/plugin/loggingplugin"    [](#__codelineno-14-13)    "google.golang.org/adk/v2/runner" [](#__codelineno-14-14)) [](#__codelineno-14-15)[](#__codelineno-14-16)func main() {     [](#__codelineno-14-17)    ctx := context.Background()    [](#__codelineno-14-18)    logPlugin := loggingplugin.MustNew("logging_plugin") [](#__codelineno-14-19)    [](#__codelineno-14-20)    config := &launcher.Config{        [](#__codelineno-14-21)        AgentLoader: agent.NewSingleLoader(rootAgent),        [](#__codelineno-14-22)        PluginConfig: runner.PluginConfig{            [](#__codelineno-14-23)            Plugins: []*plugin.Plugin{logPlugin},        [](#__codelineno-14-24)        },    [](#__codelineno-14-25)    } [](#__codelineno-14-26)    [](#__codelineno-14-27)    l := full.NewLauncher()    [](#__codelineno-14-28)    if err := l.Execute(ctx, config, os.Args[1:]); err != nil {        [](#__codelineno-14-29)        log.Fatalf("run failed: %v", err)    [](#__codelineno-14-30)    } [](#__codelineno-14-31)}`

`[](#__codelineno-15-1)// Use the LoggingPlugin for structured activity logging to the console [](#__codelineno-15-2)val runner =     [](#__codelineno-15-3)    InMemoryRunner(        [](#__codelineno-15-4)        App(appName = agent.name, rootAgent = agent, plugins = listOf(LoggingPlugin())),    [](#__codelineno-15-5)    )`

### Full debug capture to a file with `DebugLoggingPlugin`[¶](#full-debug-capture-to-a-file-with-debugloggingplugin "Permanent link")

Supported in ADKPython v1.23.0Kotlin v0.6.0

To record complete interaction data as human-readable YAML appended to `adk_debug.yaml` rather than truncated console output, use `DebugLoggingPlugin`:

PythonKotlin

`[](#__codelineno-16-1)from google.adk.apps import App [](#__codelineno-16-2)from google.adk.plugins import DebugLoggingPlugin [](#__codelineno-16-3)[](#__codelineno-16-4)app = App(     [](#__codelineno-16-5)    name="my_app",    [](#__codelineno-16-6)    root_agent=root_agent,    [](#__codelineno-16-7)    plugins=[        [](#__codelineno-16-8)        DebugLoggingPlugin(            [](#__codelineno-16-9)            output_path="adk_debug.yaml",            [](#__codelineno-16-10)            include_session_state=True,            [](#__codelineno-16-11)            include_system_instruction=True,        [](#__codelineno-16-12)        ),    [](#__codelineno-16-13)    ], [](#__codelineno-16-14))`

`[](#__codelineno-17-1)// includeSystemInstruction = false logs has_system_instruction, not the instruction text [](#__codelineno-17-2)val debugPlugin = DebugLoggingPlugin(includeSystemInstruction = false) [](#__codelineno-17-3)val debugRunner =     [](#__codelineno-17-4)    InMemoryRunner(        [](#__codelineno-17-5)        App(appName = agent.name, rootAgent = agent, plugins = listOf(debugPlugin)),    [](#__codelineno-17-6)    )`

Warning

The output file holds raw prompts, tool arguments, and session state. Although ADK automatically redacts credentials and `temp:`\-scoped state keys in Python, treat the output file as sensitive.

## Understanding log output[¶](#understanding-log-output "Permanent link")

### Sample Python log entry[¶](#sample-python-log-entry "Permanent link")

`[](#__codelineno-18-1)2025-07-08 11:22:33,456 - DEBUG - google_adk.google.adk.models.google_llm - LLM Request: contents { ... }`

Log Segment

Format Specifier

Meaning

`2025-07-08 11:22:33,456`

`%(asctime)s`

Timestamp

`DEBUG`

`%(levelname)s`

Severity level

`google_adk.google.adk.models.google_llm`

`%(name)s`

Logger name (the module that produced the log)

`LLM Request: contents { ... }`

`%(message)s`

The actual log message

By reading the logger name, you can immediately pinpoint the source of the log and understand its context within the agent's architecture. ADK loggers are named `google_adk.` followed by the module's fully-qualified name, so every ADK logger is a child of the `google_adk` logger. Configure them as a group with `logging.getLogger("google_adk")`.

### Debugging example[¶](#debugging-example "Permanent link")

After enabling `DEBUG` logging (see [Logging level](#logging-level) above), run your agent and look for messages from the `google_adk.google.adk.models.google_llm` logger. The output shows the full LLM request and response:

`[](#__codelineno-19-1)2025-07-10 15:26:13,778 - DEBUG - google_adk.google.adk.models.google_llm - [](#__codelineno-19-2)LLM Request: [](#__codelineno-19-3)----------------------------------------------------------- [](#__codelineno-19-4)System Instruction:       [](#__codelineno-19-5)      You roll dice and answer questions about the outcome of the dice rolls.      [](#__codelineno-19-6)      ... [](#__codelineno-19-7)----------------------------------------------------------- [](#__codelineno-19-8)Contents: [](#__codelineno-19-9){"parts":[{"text":"Roll a 6 sided dice"}],"role":"user"} [](#__codelineno-19-10){"parts":[{"function_call":{"args":{"sides":6},"name":"roll_die"}}],"role":"model"} [](#__codelineno-19-11){"parts":[{"function_response":{"name":"roll_die","response":{"result":2}}}],"role":"user"} [](#__codelineno-19-12)----------------------------------------------------------- [](#__codelineno-19-13)Functions: [](#__codelineno-19-14)roll_die: {'sides': {'type': <Type.INTEGER: 'INTEGER'>}} [](#__codelineno-19-15)check_prime: {'nums': {'items': {'type': <Type.INTEGER: 'INTEGER'>}, 'type': <Type.ARRAY: 'ARRAY'>}} [](#__codelineno-19-16)----------------------------------------------------------- [](#__codelineno-19-17)2025-07-10 15:26:14,309 - INFO - google_adk.google.adk.models.google_llm - [](#__codelineno-19-18)LLM Response: [](#__codelineno-19-19)----------------------------------------------------------- [](#__codelineno-19-20)Text: [](#__codelineno-19-21)I have rolled a 6 sided die, and the result is 2. [](#__codelineno-19-22)...`

From this output you can verify:

-   Is the system instruction correct?
-   Is the conversation history (`user` and `model` turns) accurate?
-   Are the correct tools being provided to the model?
-   Are the tools correctly called by the model?
-   How long it takes for the model to respond?

Back to top