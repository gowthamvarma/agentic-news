---
title: "Ambient Agents - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/runtime/ambient-agents/
date: 2026-10-10T19:16:59.145Z
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
        -    Ambient Agents [Ambient Agents](./)
            
            Table of contents
            
            -   [Getting results from ambient agents](#getting-results-from-ambient-agents)
            -   [How to build ambient agents](#how-to-build-ambient-agents)
            -   [Using /run](#using-run)
            -   [Using trigger endpoints](#using-trigger-endpoints)
                
                -   [How events are processed](#how-events-are-processed)
                -   [Supported sources](#supported-sources)
                -   [Example agent](#example-agent)
                -   [Enable triggers](#enable-triggers)
                -   [Try it locally](#try-it-locally)
                
            -   [Trigger sources](#trigger-sources)
                
                -   [Parameter mapping](#parameter-mapping)
                -   [Message format](#message-format)
                -   [Pub/Sub](#pubsub)
                    
                    -   [Request format](#request-format)
                    -   [Response](#response)
                    
                -   [Eventarc](#eventarc)
                    
                    -   [Response](#response_1)
                    
                
            -   [Configuration](#configuration)
                
                -   [Concurrency control](#concurrency-control)
                -   [Automatic retry with backoff](#automatic-retry-with-backoff)
                -   [Error handling and disaster recovery](#error-handling-and-disaster-recovery)
                -   [Timeout considerations](#timeout-considerations)
                -   [Session lifecycle](#session-lifecycle)
                
            -   [Deploy](#deploy)
            -   [What's next?](#whats-next)
            
        -   [Resume Agents](../resume/)
        -   [Cancel Agent Runs](../cancel/)
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

-   [Getting results from ambient agents](#getting-results-from-ambient-agents)
-   [How to build ambient agents](#how-to-build-ambient-agents)
-   [Using /run](#using-run)
-   [Using trigger endpoints](#using-trigger-endpoints)
    
    -   [How events are processed](#how-events-are-processed)
    -   [Supported sources](#supported-sources)
    -   [Example agent](#example-agent)
    -   [Enable triggers](#enable-triggers)
    -   [Try it locally](#try-it-locally)
    
-   [Trigger sources](#trigger-sources)
    
    -   [Parameter mapping](#parameter-mapping)
    -   [Message format](#message-format)
    -   [Pub/Sub](#pubsub)
        
        -   [Request format](#request-format)
        -   [Response](#response)
        
    -   [Eventarc](#eventarc)
        
        -   [Response](#response_1)
        
    
-   [Configuration](#configuration)
    
    -   [Concurrency control](#concurrency-control)
    -   [Automatic retry with backoff](#automatic-retry-with-backoff)
    -   [Error handling and disaster recovery](#error-handling-and-disaster-recovery)
    -   [Timeout considerations](#timeout-considerations)
    -   [Session lifecycle](#session-lifecycle)
    
-   [Deploy](#deploy)
-   [What's next?](#whats-next)

1.  [Home](../..)
2.  [Run Agents](../)
3.  [Agent Runtime](../)

[](https://github.com/google/adk-docs/edit/main/docs/runtime/ambient-agents.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Trigger actions with ambient agents[¶](#trigger-actions-with-ambient-agents "Permanent link")

Supported in ADKPython v1.29.0Go v1.1.0

When running an agent workflow, you may want to activate it in response to an event or new data being available, rather than waiting for input from a human. You can configure ADK agents with triggers to respond to events and perform work, known as *ambient agents*. These agents can run as background processes to process data, monitor events, and respond asynchronously without human intervention. You can use ambient agents to:

-   **React to cloud events.** Process a file when it's uploaded to [Cloud Storage](https://cloud.google.com/storage), respond to database changes, or handle audit log entries.
-   **Process messages from a queue.** Analyze incoming support tickets, moderate content, classify documents, or run QA as items arrive.
-   **Run on a schedule.** Generate daily reports, run periodic monitoring checks, or process batch jobs at regular intervals.
-   **Monitor infrastructure.** React to a continuous stream of events across your infrastructure and act on changes autonomously.

## Getting results from ambient agents[¶](#getting-results-from-ambient-agents "Permanent link")

Because ambient agents run without human interaction, you need to route their outputs to a notification channel. Common patterns include:

-   **[Structured logging](../../observability/logging/).** Write JSON logs and configure [Cloud Monitoring](https://cloud.google.com/monitoring/support/notification-options) alerts to notify via email, Slack, or PagerDuty.
-   **[Pub/Sub](https://cloud.google.com/pubsub).** Publish results to a topic for downstream services to consume.
-   **[Application Integration](https://cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email).** Route agent outputs to email, Jira, or other systems.

## How to build ambient agents[¶](#how-to-build-ambient-agents "Permanent link")

ADK provides two approaches:

[`/run`](../api-server/)

Trigger endpoints

**Event sources**

Any (Pub/Sub, webhooks, cron, custom services)

[Cloud Pub/Sub](https://cloud.google.com/pubsub), [Eventarc](https://cloud.google.com/eventarc) ([Standard](https://cloud.google.com/eventarc/standard/docs/overview) and [Advanced](https://cloud.google.com/eventarc/advanced/docs/overview))

**Payload parsing**

You handle it

Automatic (Base64 decoding, CloudEvent parsing)

**Session creation**

Enable `--auto_create_session`

Automatic (one per event)

**Session storage**

Your configured [`SessionService`](../../sessions/session/)

Your configured [`SessionService`](../../sessions/session/)

**Concurrency control**

You handle it

Built-in semaphore with configurable limit

**Retry logic**

You handle it

Exponential backoff with jitter for transient errors

**Best for**

Custom integrations, non-GCP sources

GCP-native event-driven workloads

## Using `/run`[¶](#using-run "Permanent link")

Use the [`/run`](../api-server/) endpoint when you need full control over the integration or are working with non-GCP event sources. Enable `--auto_create_session` so that sessions are created automatically, then connect any HTTP client to call `/run` when events arrive.

`[](#__codelineno-0-1)adk api_server --auto_create_session path/to/your/agent`

This pattern works with any event source that can make an HTTP request.

Example: Processing incoming webhooks

The following [Cloud Run function](https://cloud.google.com/functions/docs/writing/write-event-driven-functions) receives a webhook from an external service (for example, GitHub) and forwards it to your agent:

`[](#__codelineno-1-1)import json [](#__codelineno-1-2)import uuid [](#__codelineno-1-3)[](#__codelineno-1-4)import functions_framework [](#__codelineno-1-5)import requests [](#__codelineno-1-6)[](#__codelineno-1-7)AGENT_URL = "https://my-agent-service-xxxxx.run.app" [](#__codelineno-1-8)[](#__codelineno-1-9)@functions_framework.http [](#__codelineno-1-10)def handle_webhook(request):     [](#__codelineno-1-11)    """Cloud Run function that receives webhooks and forwards to the agent."""    [](#__codelineno-1-12)    payload = request.get_json(silent=True) or {} [](#__codelineno-1-13)    [](#__codelineno-1-14)    requests.post(        [](#__codelineno-1-15)        f"{AGENT_URL}/run",        [](#__codelineno-1-16)        json={            [](#__codelineno-1-17)            "app_name": "my_agent",            [](#__codelineno-1-18)            "user_id": payload.get("account", "webhook-caller"),            [](#__codelineno-1-19)            "session_id": str(uuid.uuid4()),            [](#__codelineno-1-20)            "new_message": {                [](#__codelineno-1-21)                "role": "user",                [](#__codelineno-1-22)                "parts": [{"text": json.dumps(payload)}],            [](#__codelineno-1-23)            },        [](#__codelineno-1-24)        },    [](#__codelineno-1-25)    ) [](#__codelineno-1-26)    [](#__codelineno-1-27)    return ("ok", 200)`
Example: Send an event with curl

`[](#__codelineno-2-1)curl -X POST http://localhost:8000/run \   [](#__codelineno-2-2)  -H "Content-Type: application/json" \  [](#__codelineno-2-3)  -d '{    [](#__codelineno-2-4)    "app_name": "my_agent",    [](#__codelineno-2-5)    "user_id": "webhook-caller",    [](#__codelineno-2-6)    "session_id": "session-123",    [](#__codelineno-2-7)    "new_message": {      [](#__codelineno-2-8)      "role": "user",      [](#__codelineno-2-9)      "parts": [{"text": "{\"order_id\": \"1234\", \"status\": \"new\"}"}]    [](#__codelineno-2-10)    }  [](#__codelineno-2-11)  }'`

## Using trigger endpoints[¶](#using-trigger-endpoints "Permanent link")

Use trigger endpoints when your event sources are Pub/Sub or Eventarc and you want ADK to handle payload parsing, session creation, concurrency, and retries.

### How events are processed[¶](#how-events-are-processed "Permanent link")

Pub/Sub and Eventarc deliver events to your agent as HTTP POST requests. When a trigger endpoint receives an event, it:

1.  **Parses the request** according to the source format (Pub/Sub push message or CloudEvent).
2.  **Decodes the payload.** Base64-encoded message data is decoded and, if possible, parsed as JSON.
3.  **Creates a session** automatically with a generated UUID. Unlike the `/run` endpoint, you do not need to enable `--auto_create_session` — trigger endpoints always create a new session per event.
4.  **Runs your agent** with the decoded event as a user message.
5.  **Returns a status code.** A `200` response tells Pub/Sub or Eventarc that the event was processed successfully. A `500` response signals a failure, and the event source retries delivery based on its retry policy.

### Supported sources[¶](#supported-sources "Permanent link")

Source

Endpoint

Description

**Pub/Sub**

`/apps/{app_name}/trigger/pubsub`

Receives messages from a [Pub/Sub push subscription](https://cloud.google.com/pubsub/docs/push).

**Eventarc**

`/apps/{app_name}/trigger/eventarc`

Receives [CloudEvents](https://cloudevents.io/) delivered by [Eventarc](https://cloud.google.com/eventarc) ([Standard](https://cloud.google.com/eventarc/standard/docs/overview) or [Advanced](https://cloud.google.com/eventarc/advanced/docs/overview)), supporting both structured and binary content modes.

### Example agent[¶](#example-agent "Permanent link")

PythonGo

The following agent processes events from a trigger endpoint. It uses a `parse_event` tool to extract the event data and attributes, then analyzes the contents.

Agent code (`event_processing_agent/agent.py`)

``[](#__codelineno-3-1)import json [](#__codelineno-3-2)[](#__codelineno-3-3)from google.adk.agents import LlmAgent [](#__codelineno-3-4) [](#__codelineno-3-5)[](#__codelineno-3-6)def parse_event(raw_event: str) -> dict:     [](#__codelineno-3-7)    """Parse and extract structured data from a trigger event. [](#__codelineno-3-8)    [](#__codelineno-3-9)    Trigger endpoints deliver events as a JSON string with 'data' and    [](#__codelineno-3-10)    'attributes' fields. This tool extracts those fields so the agent    [](#__codelineno-3-11)    can reason about the event contents.    [](#__codelineno-3-12)    """    [](#__codelineno-3-13)    try:        [](#__codelineno-3-14)        event = json.loads(raw_event)    [](#__codelineno-3-15)    except json.JSONDecodeError as e:        [](#__codelineno-3-16)        return {"error": f"Failed to parse event JSON: {e}"}    [](#__codelineno-3-17)    return {        [](#__codelineno-3-18)        "data": event.get("data"),        [](#__codelineno-3-19)        "attributes": event.get("attributes", {}),    [](#__codelineno-3-20)    } [](#__codelineno-3-21) [](#__codelineno-3-22)[](#__codelineno-3-23)root_agent = LlmAgent(     [](#__codelineno-3-24)    model="gemini-flash-latest",    [](#__codelineno-3-25)    name="event_processor",    [](#__codelineno-3-26)    instruction="""You are an event-processing agent that handles incoming [](#__codelineno-3-27)events from Pub/Sub and Eventarc triggers. [](#__codelineno-3-28)[](#__codelineno-3-29)When you receive an event: [](#__codelineno-3-30)1. Use the `parse_event` tool to extract the event data and attributes. [](#__codelineno-3-31)2. Analyze the event contents and determine what action to take. [](#__codelineno-3-32)3. Summarize what you found and what action you would recommend. [](#__codelineno-3-33)[](#__codelineno-3-34)Be concise and structured in your responses.""",     [](#__codelineno-3-35)    tools=[parse_event], [](#__codelineno-3-36))``

The following agent processes events from a trigger endpoint. It extracts the event data and attributes, then analyzes the contents.

Agent code (`event_processing_agent.go`)

``[](#__codelineno-4-1)import (     [](#__codelineno-4-2)    "context"    [](#__codelineno-4-3)    "log"    [](#__codelineno-4-4)    "os" [](#__codelineno-4-5)    [](#__codelineno-4-6)    "google.golang.org/genai" [](#__codelineno-4-7)    [](#__codelineno-4-8)    "google.golang.org/adk/v2/agent"    [](#__codelineno-4-9)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-4-10)    "google.golang.org/adk/v2/cmd/launcher"    [](#__codelineno-4-11)    "google.golang.org/adk/v2/cmd/launcher/full"    [](#__codelineno-4-12)    "google.golang.org/adk/v2/model/gemini" [](#__codelineno-4-13)) [](#__codelineno-4-14)[](#__codelineno-4-15)func main() {     [](#__codelineno-4-16)    ctx := context.Background() [](#__codelineno-4-17)    [](#__codelineno-4-18)    model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{        [](#__codelineno-4-19)        APIKey: os.Getenv("GOOGLE_API_KEY"),    [](#__codelineno-4-20)    })    [](#__codelineno-4-21)    if err != nil {        [](#__codelineno-4-22)        log.Fatalf("Failed to create model: %v", err)    [](#__codelineno-4-23)    } [](#__codelineno-4-24)    [](#__codelineno-4-25)    a, err := llmagent.New(llmagent.Config{        [](#__codelineno-4-26)        Name:        "event_processor",        [](#__codelineno-4-27)        Model:       model,        [](#__codelineno-4-28)        Description: "Agent to process the events from Pub/Sub and Eventarc triggers.",        [](#__codelineno-4-29)        Instruction: `        [](#__codelineno-4-30)        You are an event-processing agent that handles incoming        [](#__codelineno-4-31)        events from Pub/Sub and Eventarc triggers. [](#__codelineno-4-32)        [](#__codelineno-4-33)        When you receive an event:        [](#__codelineno-4-34)        1. Analyze the event contents and determine what action to take.        [](#__codelineno-4-35)        2. Summarize what you found and what action you would recommend. [](#__codelineno-4-36)        [](#__codelineno-4-37)        Be concise and structured in your responses.`,    [](#__codelineno-4-38)    })    [](#__codelineno-4-39)    if err != nil {        [](#__codelineno-4-40)        log.Fatalf("Failed to create agent: %v", err)    [](#__codelineno-4-41)    } [](#__codelineno-4-42)    [](#__codelineno-4-43)    config := &launcher.Config{        [](#__codelineno-4-44)        AgentLoader: agent.NewSingleLoader(a),    [](#__codelineno-4-45)    } [](#__codelineno-4-46)    [](#__codelineno-4-47)    l := full.NewLauncher()    [](#__codelineno-4-48)    if err = l.Execute(ctx, config, os.Args[1:]); err != nil {        [](#__codelineno-4-49)        log.Fatalf("Run failed: %v\n\n%s", err, l.CommandLineSyntax())    [](#__codelineno-4-50)    } [](#__codelineno-4-51)}``

### Enable triggers[¶](#enable-triggers "Permanent link")

PythonGo

Trigger endpoints are disabled by default. Enable them with the `--trigger_sources` flag:

`[](#__codelineno-5-1)adk api_server --trigger_sources "pubsub,eventarc" path/to/your/agent`

For production deployments, you can enable triggers programmatically in a custom FastAPI entry point:

Deployment entry point (`main.py`)

Python

`[](#__codelineno-6-1)import os [](#__codelineno-6-2)[](#__codelineno-6-3)import uvicorn [](#__codelineno-6-4)from google.adk.cli.fast_api import get_fast_api_app [](#__codelineno-6-5)[](#__codelineno-6-6)AGENT_DIR = os.path.dirname(os.path.abspath(__file__)) [](#__codelineno-6-7)[](#__codelineno-6-8)app = get_fast_api_app(     [](#__codelineno-6-9)    agents_dir=AGENT_DIR,    [](#__codelineno-6-10)    web=False,    [](#__codelineno-6-11)    trigger_sources=["pubsub", "eventarc"], [](#__codelineno-6-12)) [](#__codelineno-6-13)[](#__codelineno-6-14)if __name__ == "__main__":     [](#__codelineno-6-15)    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))`

Trigger endpoints are disabled by default. Enable them with the corresponding trigger flag:

`[](#__codelineno-7-1)go run agent.go web api pubsub eventarc`

### Try it locally[¶](#try-it-locally "Permanent link")

**1\. Start the server with triggers enabled:**

PythonGo

`[](#__codelineno-8-1)adk api_server --trigger_sources "pubsub" event_processing_agent`

`[](#__codelineno-9-1)go run event_processing_agent.go web api pubsub`

**2\. Send a test event:**

`[](#__codelineno-10-1)curl -X POST http://localhost:8000/apps/event_processing_agent/trigger/pubsub \   [](#__codelineno-10-2)  -H "Content-Type: application/json" \  [](#__codelineno-10-3)  -d '{    [](#__codelineno-10-4)    "message": {      [](#__codelineno-10-5)      "data": "eyJvcmRlcl9pZCI6ICIxMjM0IiwgInN0YXR1cyI6ICJuZXcifQ==",      [](#__codelineno-10-6)      "attributes": {"source": "orders-service"}    [](#__codelineno-10-7)    },    [](#__codelineno-10-8)    "subscription": "projects/my-project/subscriptions/orders-sub"  [](#__codelineno-10-9)  }'`

The Base64 value decodes to `{"order_id": "1234", "status": "new"}`.

A successful response:

`[](#__codelineno-11-1){"status": "success"}`

## Trigger sources[¶](#trigger-sources "Permanent link")

### Parameter mapping[¶](#parameter-mapping "Permanent link")

The `/run` endpoint requires you to provide `app_name`, `user_id`, and `session_id`. Trigger endpoints derive these automatically:

Parameter

Source

`app_name`

Extracted from the URL path (`/apps/{app_name}/trigger/...`)

`session_id`

Auto-generated UUID per event

`user_id`

Pub/Sub: the `subscription` field. Eventarc: the `source` or `ce-source` header.

### Message format[¶](#message-format "Permanent link")

All trigger endpoints normalize the incoming event into a consistent JSON structure before passing it to your agent as the user message:

`[](#__codelineno-12-1){   [](#__codelineno-12-2)  "data": "<decoded event payload>",  [](#__codelineno-12-3)  "attributes": {"key": "value"} [](#__codelineno-12-4)}`

-   **`data`**: The decoded event payload. If the original data is JSON, it is parsed into a structured object. Otherwise, it is passed as a plain string.
-   **`attributes`**: Key-value metadata from the event source (for example, Pub/Sub message attributes or CloudEvents headers like `ce-type`, `ce-source`).

Your agent receives this JSON string as the input message and can parse it to extract the data and attributes.

### Pub/Sub[¶](#pubsub "Permanent link")

The Pub/Sub trigger endpoint processes messages from a [Pub/Sub push subscription](https://cloud.google.com/pubsub/docs/push). Use it when your applications or services publish messages to a topic, for example:

-   A support portal publishes incoming tickets for triage and routing.
-   A content pipeline sends documents for classification or moderation.
-   A monitoring service publishes alerts for automated analysis.

#### Request format[¶](#request-format "Permanent link")

Pub/Sub push subscriptions send requests in this format:

`[](#__codelineno-13-1){   [](#__codelineno-13-2)  "message": {    [](#__codelineno-13-3)    "data": "eyJvcmRlcl9pZCI6ICIxMjM0IiwgInN0YXR1cyI6ICJuZXcifQ==",    [](#__codelineno-13-4)    "attributes": {"source": "orders-service"},    [](#__codelineno-13-5)    "messageId": "123456789",    [](#__codelineno-13-6)    "publishTime": "2026-04-08T12:00:00Z"  [](#__codelineno-13-7)  },  [](#__codelineno-13-8)  "subscription": "projects/my-project/subscriptions/my-sub" [](#__codelineno-13-9)}`

The `data` field is Base64-encoded. The trigger endpoint decodes it automatically.

#### Response[¶](#response "Permanent link")

HTTP Status

Meaning

**200**

Event processed successfully. Pub/Sub acknowledges the message.

**400**

Invalid request (malformed Base64 encoding). Message is not retried.

**500**

Processing failed (transient or non-transient agent errors). Pub/Sub retries delivery based on its [retry policy](https://cloud.google.com/pubsub/docs/handling-failures). Configure a [dead-letter queue](https://cloud.google.com/pubsub/docs/dead-letter-topics) to catch messages that fail repeatedly.

### Eventarc[¶](#eventarc "Permanent link")

The Eventarc trigger endpoint processes [CloudEvents](https://cloud.google.com/eventarc/docs/cloudevents) delivered by [Eventarc](https://cloud.google.com/eventarc), both [Standard](https://cloud.google.com/eventarc/standard/docs/overview) and [Advanced](https://cloud.google.com/eventarc/advanced/docs/overview) editions. Use it to react to events across Google Cloud, for example:

-   A file is uploaded to [Cloud Storage](https://cloud.google.com/storage) (classify, summarize, or extract data from documents).
-   A record is written to [BigQuery](https://cloud.google.com/bigquery) (run anomaly detection or generate alerts).
-   An [Audit Log](https://cloud.google.com/logging/docs/audit) entry is created (flag policy violations or suspicious activity).

Both content modes are supported:

-   **Binary content mode** (Eventarc default): CloudEvents attributes are sent as `ce-*` HTTP headers, and the body contains the event data (typically a Pub/Sub message wrapper).
-   **Structured content mode**: All CloudEvents attributes and data are in the JSON body.

Test with curl (structured mode)

`[](#__codelineno-14-1)curl -X POST http://localhost:8000/apps/my_agent/trigger/eventarc \   [](#__codelineno-14-2)  -H "Content-Type: application/json" \  [](#__codelineno-14-3)  -d '{    [](#__codelineno-14-4)    "specversion": "1.0",    [](#__codelineno-14-5)    "type": "google.cloud.storage.object.v1.finalized",    [](#__codelineno-14-6)    "source": "//storage.googleapis.com/projects/my-project",    [](#__codelineno-14-7)    "id": "event-123",    [](#__codelineno-14-8)    "data": {      [](#__codelineno-14-9)      "bucket": "my-bucket",      [](#__codelineno-14-10)      "name": "uploads/document.pdf"    [](#__codelineno-14-11)    }  [](#__codelineno-14-12)  }'`
Test with curl (binary mode)

`[](#__codelineno-15-1)curl -X POST http://localhost:8000/apps/my_agent/trigger/eventarc \   [](#__codelineno-15-2)  -H "Content-Type: application/json" \  [](#__codelineno-15-3)  -H "ce-type: google.cloud.storage.object.v1.finalized" \  [](#__codelineno-15-4)  -H "ce-source: //storage.googleapis.com/projects/my-project" \  [](#__codelineno-15-5)  -H "ce-id: event-456" \  [](#__codelineno-15-6)  -H "ce-specversion: 1.0" \  [](#__codelineno-15-7)  -d '{    [](#__codelineno-15-8)    "message": {      [](#__codelineno-15-9)      "data": "eyJidWNrZXQiOiAibXktYnVja2V0IiwgIm5hbWUiOiAiZG9jLnBkZiJ9",      [](#__codelineno-15-10)      "attributes": {"eventType": "OBJECT_FINALIZE"}    [](#__codelineno-15-11)    },    [](#__codelineno-15-12)    "subscription": "projects/my-project/subscriptions/eventarc-sub"  [](#__codelineno-15-13)  }'`

#### Response[¶](#response_1 "Permanent link")

HTTP Status

Meaning

**200**

Event processed successfully. Eventarc acknowledges delivery.

**500**

Processing failed. Eventarc retries delivery based on its retry policy.

## Configuration[¶](#configuration "Permanent link")

### Concurrency control[¶](#concurrency-control "Permanent link")

Trigger endpoints use a semaphore to limit the number of concurrent agent invocations. This prevents your agent from exceeding your LLM model quota during bursts of events.

PythonGo

Setting

Default

Environment Variable

Max concurrent invocations

10

`ADK_TRIGGER_MAX_CONCURRENT`

Setting

Default

Flag

Max concurrent invocations

10

`--trigger_max_concurrent_runs`

When the concurrency limit is reached, incoming requests are queued and processed as slots become available. Concurrency control is per process. If you deploy multiple Cloud Run instances, each instance maintains its own independent semaphore.

PythonGo

`[](#__codelineno-16-1)# Allow up to 5 concurrent agent invocations [](#__codelineno-16-2)export ADK_TRIGGER_MAX_CONCURRENT=5`

`[](#__codelineno-17-1)go run event_processing_agent.go web api pubsub --trigger_max_concurrent_runs=5`

### Automatic retry with backoff[¶](#automatic-retry-with-backoff "Permanent link")

Trigger endpoints include built-in retry logic for transient errors such as `429 RESOURCE_EXHAUSTED` responses. When a transient error is detected, the request is retried with exponential backoff and jitter.

PythonGo

Setting

Default

Environment Variable

Max retry attempts

3

`ADK_TRIGGER_MAX_RETRIES`

Base backoff delay

1.0s

`ADK_TRIGGER_RETRY_BASE_DELAY`

Max backoff delay

30.0s

`ADK_TRIGGER_RETRY_MAX_DELAY`

Setting

Default

Flag

Max retry attempts

3

`--trigger_max_retries`

Base backoff delay

1.0s

`--trigger_base_delay`

Max backoff delay

30.0s

`--trigger_max_delay`

If all retries are exhausted, the endpoint returns HTTP 500, signaling Pub/Sub or Eventarc to retry delivery at a higher level. Non-transient errors fail immediately without retries.

### Error handling and disaster recovery[¶](#error-handling-and-disaster-recovery "Permanent link")

Disaster recovery for trigger-based workloads is handled by the triggering service, not by ADK:

-   If your agent crashes or returns an error, Pub/Sub or Eventarc does not receive an acknowledgement and automatically redelivers the message.
-   After maximum retries are exhausted, unprocessed messages move to a [dead-letter queue (DLQ)](https://cloud.google.com/pubsub/docs/dead-letter-topics) if configured.
-   Each redelivery creates a new session. Trigger workloads are stateless by design.

### Timeout considerations[¶](#timeout-considerations "Permanent link")

All trigger endpoints process synchronously and wait for your agent to complete before returning a response. This is by design: keeping the HTTP request alive ensures that the hosting infrastructure does not terminate the process while your agent is still working. The synchronous response code (200 or 500) is what allows Pub/Sub and Eventarc to correctly acknowledge success or trigger a retry.

The maximum processing time is governed by the upstream service:

Service

Max Timeout

Pub/Sub push

10 minutes (ack deadline)

Eventarc

10 minutes ([Standard](https://cloud.google.com/eventarc/standard/docs/overview) uses Pub/Sub as transport; [Advanced](https://cloud.google.com/eventarc/advanced/docs/overview) delivers via pipeline)

Trigger endpoints are designed for agents that complete within 10 minutes. This is suitable for processing individual events, running validations, classifying documents, and writing results to downstream services.

Long-running agents

Trigger endpoints are not suitable for agents that take more than 10 minutes to complete. For long-running workloads, use [Pub/Sub pull subscriptions](https://cloud.google.com/pubsub/docs/pull), [Cloud Run Jobs](https://cloud.google.com/run/docs/create-jobs), or a worker pool architecture instead.

### Session lifecycle[¶](#session-lifecycle "Permanent link")

Sessions follow the same pattern as all other ADK entry points. They are created through your configured [`SessionService`](../../sessions/session/). By default, ADK uses `InMemorySessionService`, which makes trigger sessions ephemeral: created per event and discarded after processing.

If you configure a persistent `SessionService` (for example, `DatabaseSessionService`), trigger sessions are stored automatically. This can be useful for auditing, debugging, and post-mortem analysis of event-driven workloads.

## Deploy[¶](#deploy "Permanent link")

The examples below use [Cloud Run](https://cloud.google.com/run) as the deployment target. Cloud Run is currently the recommended platform for deploying ambient agents with trigger endpoints.

Authentication and security

Trigger endpoints are standard HTTP routes within the ADK web server. Authentication and security are enforced at the deployment level, the same as any other ADK endpoint. When deployed with authentication enabled (recommended), all endpoints require valid credentials. GCP services authenticate using [service account](https://cloud.google.com/iam/docs/service-accounts) identities. See each service's documentation for details.

PythonGo

Deploy your agent to Cloud Run with triggers enabled using the `--trigger_sources` flag:

`[](#__codelineno-18-1)adk deploy cloud_run \   [](#__codelineno-18-2)  --project=$GOOGLE_CLOUD_PROJECT \  [](#__codelineno-18-3)  --region=$GOOGLE_CLOUD_LOCATION \  [](#__codelineno-18-4)  --trigger_sources="pubsub,eventarc" \  [](#__codelineno-18-5)  path/to/your/agent`

Deploy your agent to Cloud Run with triggers enabled using the corresponding trigger flag (all the settings are prefixed with trigger type)

`[](#__codelineno-19-1)adk deploy cloud_run \   [](#__codelineno-19-2)  --project=$GOOGLE_CLOUD_PROJECT \  [](#__codelineno-19-3)  --region=$GOOGLE_CLOUD_LOCATION \  [](#__codelineno-19-4)  --pubsub \  [](#__codelineno-19-5)  --pubsub_max_concurrent_runs=5 \  [](#__codelineno-19-6)  --eventarc \  [](#__codelineno-19-7)  --eventarc_max_concurrent_runs=5`

After deployment, connect the appropriate GCP infrastructure to your agent's trigger endpoint:

-   **Pub/Sub**: Create a [push subscription](https://cloud.google.com/pubsub/docs/push) pointing to `/apps/{app_name}/trigger/pubsub`.
-   **Eventarc**: Create an [Eventarc Standard trigger](https://docs.cloud.google.com/eventarc/standard/docs/event-providers-targets) or an [Eventarc Advanced pipeline](https://cloud.google.com/eventarc/advanced/docs/overview) routing to `/apps/{app_name}/trigger/eventarc`.
-   **Cloud Scheduler**: Create a [scheduler job](https://cloud.google.com/scheduler/docs/creating) that publishes to your Pub/Sub topic on a cron schedule.

See [Deploy to Cloud Run](../../deploy/cloud-run/) for full deployment instructions.

## What's next?[¶](#whats-next "Permanent link")

-   Learn how to [deploy your agent to Cloud Run](../../deploy/cloud-run/)
-   Explore [API server endpoints](../api-server/) for interactive agent invocations
-   Use the [Pub/Sub toolset](../../integrations/pubsub/) to give your agent the ability to publish and pull messages

Back to top