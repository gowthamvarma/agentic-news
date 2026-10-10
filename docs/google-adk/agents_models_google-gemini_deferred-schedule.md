---
title: "Deferred scheduling - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/google-gemini/deferred-schedule/
date: 2026-10-10T19:16:26.227Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../../../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../../../../get-started/)
        
        Get Started
        
        -   [Python](../../../../get-started/python/)
        -   [TypeScript](../../../../get-started/typescript/)
        -   [Go](../../../../get-started/go/)
        -   [Java](../../../../get-started/java/)
        -   [Kotlin](../../../../get-started/kotlin/)
        -   [Agents CLI](../../../../get-started/agents-cli/)
        -   [Installation](../../../../get-started/installation/)
        -   [Google Cloud](../../../../get-started/google-cloud/)
        -   [Migrate to ADK](../../../../get-started/migrate/)
        
    -   [Build your Agent](../../../../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../../../../tutorials/multi-tool-agent/)
        -   [Agent team](../../../../tutorials/agent-team/)
        -   [Code with AI](../../../../tutorials/coding-with-ai/)
        -   [Agent Config](../../../config/)
        
    -   [Agents](../../../)
        
        Agents
        
        -   [Simple agents](../../../llm-agents/)
        -   [Managed agents](../../../managed-agents/)
        
    -   [Graph Workflows](../../../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../../../graphs/routes/)
        -   [Data handling](../../../../graphs/data-handling/)
        -   [Human input](../../../../graphs/human-input/)
        -   [Dynamic workflows](../../../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../../../workflows/collaboration/)
        -   [Template workflows](../../../workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../../../workflow-agents/sequential-agents/)
            -   [Loop workflow](../../../workflow-agents/loop-agents/)
            -   [Parallel workflow](../../../workflow-agents/parallel-agents/)
            -   [Custom template workflows](../../../custom-agents/)
            
        -   [Agent routing](../../../routing/)
        -   [Workflow patterns](../../../../workflows/patterns/)
        
    -   [Models for Agents](../../)
        
        Models for Agents
        
        -   [Gemini](../)
            
            Gemini
            
            -    Deferred scheduling [Deferred scheduling](./)
                
                Table of contents
                
                -   [Get started](#get-started)
                -   [How deferred scheduling works](#how-deferred-scheduling-works)
                -   [Configuration options](#configuration-options)
                -   [Advanced usage](#advanced-usage)
                    
                    -   [Set a client-side deadline](#set-a-client-side-deadline)
                    -   [Request deferred scheduling over HTTP](#request-deferred-scheduling-over-http)
                    
                -   [Limitations](#limitations)
                -   [Troubleshooting](#troubleshooting)
                    
                    -   [ADK ignores the tier and the run still succeeds](#adk-ignores-the-tier-and-the-run-still-succeeds)
                    -   [OpenAI service\_tier field](#openai-service_tier-field)
                    
                -   [Additional resources](#additional-resources)
                
            
        -   [Gemma](../../google-gemma/)
        -   [Claude](../../anthropic/)
        -   [Agent Platform hosted](../../agent-platform/)
        -   [Apigee AI Gateway](../../apigee/)
        -   [Model routing](../../routing/)
        -   [OpenAI](../../openai/)
        -   [Ollama](../../ollama/)
        -   [vLLM](../../vllm/)
        -   [LiteLLM](../../litellm/)
        -   [LiteRT-LM](../../litert-lm/)
        
    
-    Run Agents
    
    Run Agents
    
    -   [Agent Runtime](../../../../runtime/)
        
        Agent Runtime
        
        -   [Web Interface](../../../../runtime/web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../../../../visual-builder/)
            
        -   [Command Line](../../../../runtime/command-line/)
        -   [API Server](../../../../runtime/api-server/)
        -   [Ambient Agents](../../../../runtime/ambient-agents/)
        -   [Resume Agents](../../../../runtime/resume/)
        -   [Cancel Agent Runs](../../../../runtime/cancel/)
        -   [Runtime Config](../../../../runtime/runconfig/)
        -   [Event Loop](../../../../runtime/event-loop/)
        
    -   [Deployment](../../../../deploy/)
        
        Deployment
        
        -   [Agent Runtime](../../../../deploy/agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../../../../deploy/agent-runtime/deploy/)
            -   [agents-cli](../../../../deploy/agent-runtime/agents-cli/)
            -   [Test deployed agents](../../../../deploy/agent-runtime/test/)
            
        -   [Cloud Run](../../../../deploy/cloud-run/)
        -   [GKE](../../../../deploy/gke/)
        
    -   [Observability](../../../../observability/)
        
        Observability
        
        -   [Logging](../../../../observability/logging/)
        -   [Metrics](../../../../observability/metrics/)
        -   [Traces](../../../../observability/traces/)
        
    -   [Evaluation](../../../../evaluate/)
        
        Evaluation
        
        -   [Criteria](../../../../evaluate/criteria/)
        -   [User Simulation](../../../../evaluate/user-sim/)
        -   [Environment Simulation](../../../../evaluate/environment_simulation/)
        -   [Custom Metrics](../../../../evaluate/custom_metrics/)
        -   [Optimization](../../../../optimize/)
        
    -   [Safety and Security](../../../../safety/)
        
        Safety and Security
        
    
-    Components
    
    Components
    
    -   [Technical Overview](../../../../get-started/about/)
    -   [Custom Tools](../../../../tools-custom/)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../../../../tools-custom/function-tools/)
            -   [Tool performance](../../../../tools-custom/performance/)
            -   [Action confirmations](../../../../tools-custom/confirmation/)
            
        -   [MCP tools](../../../../tools-custom/mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../../../../tools-custom/mcp-tools/advanced/)
            -   [Deployment](../../../../tools-custom/mcp-tools/deployment/)
            -   [Agent as MCP server](../../../../tools-custom/mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../../../../tools-custom/mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../../../../tools-custom/openapi-tools/)
        -   [Authentication](../../../../tools-custom/authentication/)
        -   [Tool limitations](../../../../tools/limitations/)
        
    -   [Artifacts](../../../../artifacts/)
        
        Artifacts
        
    -   [Skills for Agents](../../../../skills/)
        
        Skills for Agents
        
    -   [App management](../../../../apps/)
        
        App management
        
        -   [Callbacks](../../../../callbacks/)
            
            Callbacks
            
            -   [Types of callbacks](../../../../callbacks/types-of-callbacks/)
            -   [Callback patterns](../../../../callbacks/design-patterns-and-best-practices/)
            
        -   [Plugins](../../../../plugins/)
        
    -   [Agent context](../../../../context/)
        
        Agent context
        
        -   [Conversational context](../../../../sessions/)
        -   [Sessions](../../../../sessions/session/)
            
            Sessions
            
            -   [Rewind sessions](../../../../sessions/session/rewind/)
            -   [Migrate sessions](../../../../sessions/session/migrate/)
            
        -   [State](../../../../sessions/state/)
        -   [Events](../../../../events/)
        -   [Memory](../../../../sessions/memory/)
        -   [Context compression](../../../../context/compaction/)
        -   [Model context caching](../../../../context/caching/)
        
    -   [A2A Protocol](../../../../a2a/)
        
        A2A Protocol
        
        -   [Introduction to A2A](../../../../a2a/intro/)
        -    A2A Quickstart (Exposing)
            
            A2A Quickstart (Exposing)
            
            -   [Python](../../../../a2a/quickstart-exposing/)
            -   [Go](../../../../a2a/quickstart-exposing-go/)
            -   [Java](../../../../a2a/quickstart-exposing-java/)
            
        -    A2A Quickstart (Consuming)
            
            A2A Quickstart (Consuming)
            
            -   [Python](../../../../a2a/quickstart-consuming/)
            -   [Go](../../../../a2a/quickstart-consuming-go/)
            -   [Java](../../../../a2a/quickstart-consuming-java/)
            -   [Kotlin](../../../../a2a/quickstart-consuming-kotlin/)
            
        -   [A2A Extension](../../../../a2a/a2a-extension/)
        
    -   [Live and Voice Agents](../../../../live/)
        
        Live and Voice Agents
        
        -   [Get started](../../../../live/get-started/)
            
            Get started
            
            -   [Python](../../../../live/get-started/streaming-python/)
            -   [Java](../../../../live/get-started/streaming-java/)
            
        -    Building
            
            Building
            
            -   [Workflows](../../../../live/workflows/)
            -   [Tools](../../../../live/tools/)
            -   [Sessions](../../../../live/sessions/)
            -   [Events](../../../../live/events/)
            -   [Audio and video](../../../../live/audio-video/)
            -   [Configuration](../../../../live/configuration/)
            
        -    Production
            
            Production
            
            -   [Guardrails](../../../../live/guardrails/)
            -   [Evaluation](../../../../live/evaluation/)
            -   [Build a custom server](../../../../live/custom-server/)
            
        -   [Supported models](../../../../live/models/)
        
    -   [Grounding](../../../../grounding/)
        
        Grounding
        
        -   [Google Search Grounding](../../../../grounding/google_search_grounding/)
        -   [Grounding with Search](../../../../grounding/grounding_with_search/)
        
    
-   [Integrations](../../../../integrations/)
    
    Integrations
    
-    Reference
    
    Reference
    
    -   [API Reference](../../../../api-reference/)
        
        API Reference
        
        -   [Python ADK](../../../../api-reference/python/)
        -   [TypeScript ADK](../../../../api-reference/typescript/)
        -    Go ADK
            
            Go ADK
            
            -   [Go v2.x](https://pkg.go.dev/google.golang.org/adk/v2)
            -   [Go v1.x](https://pkg.go.dev/google.golang.org/adk)
            
        -   [Java ADK](../../../../api-reference/java/)
        -   [Kotlin ADK](../../../../api-reference/kotlin/)
        -   [CLI Reference](../../../../api-reference/cli/)
        -   [Agent Config Reference](../../../../api-reference/agentconfig/)
        -   [REST API](../../../../api-reference/rest/)
        
    -   [Release Notes](../../../../release-notes/)
    
-   [Community](../../../../community/)
    
    Community
    
    -   [Contributing Guide](../../../../community/contributing-guide/)
    
-   [ADK 2.0](../../../../2.0/)
    
    ADK 2.0
    

Table of contents

-   [Get started](#get-started)
-   [How deferred scheduling works](#how-deferred-scheduling-works)
-   [Configuration options](#configuration-options)
-   [Advanced usage](#advanced-usage)
    
    -   [Set a client-side deadline](#set-a-client-side-deadline)
    -   [Request deferred scheduling over HTTP](#request-deferred-scheduling-over-http)
    
-   [Limitations](#limitations)
-   [Troubleshooting](#troubleshooting)
    
    -   [ADK ignores the tier and the run still succeeds](#adk-ignores-the-tier-and-the-run-still-succeeds)
    -   [OpenAI service\_tier field](#openai-service_tier-field)
    
-   [Additional resources](#additional-resources)

1.  [Home](../../../..)
2.  [Build Agents](../../../../get-started/)
3.  [Models for Agents](../../)
4.  [Gemini](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/google-gemini/deferred-schedule.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Deferred scheduling with Gemini models[¶](#deferred-scheduling-with-gemini-models "Permanent link")

Supported in ADKPython v2.10.0Preview

Agent workloads have different latency needs. An interactive assistant must answer immediately, but a summarization job, a bulk evaluation run, or a document-processing pipeline can wait for capacity. Deferred scheduling lets ADK agents queue those model calls to run on off-peak capacity instead of competing for interactive capacity.

You can request deferred scheduling per run, using the `service_tier` setting of `RunConfig`. The setting is part of the run configuration rather than the model or the agent, so one agent definition can serve both interactive requests and batch workloads.

Preview: Deferred capacity requires allowlisted access

This Google Cloud feature is a Preview capability, and running requests on deferred capacity requires an allowlist for your Google Cloud project. For more information, see [Autonomous agent scheduling](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/efficiency/autonomous-scheduling).

## Get started[¶](#get-started "Permanent link")

Deferred scheduling requires a Gemini model configured with the Google Cloud for Gemini [Interactions API](../#interactions-api). Set `use_interactions_api=True` on the model, then pass `RunConfig(service_tier=ServiceTier.DEFERRED)` when you run the agent, as shown in the following example:

Python

`[](#__codelineno-0-1)import asyncio [](#__codelineno-0-2)[](#__codelineno-0-3)from google.adk.agents import LlmAgent [](#__codelineno-0-4)from google.adk.agents import RunConfig [](#__codelineno-0-5)from google.adk.apps import App [](#__codelineno-0-6)from google.adk.models import ServiceTier [](#__codelineno-0-7)from google.adk.models.google_llm import Gemini [](#__codelineno-0-8)from google.adk.runners import InMemoryRunner [](#__codelineno-0-9)from google.genai import types [](#__codelineno-0-10)[](#__codelineno-0-11)root_agent = LlmAgent(     [](#__codelineno-0-12)    name='batch_agent',    [](#__codelineno-0-13)    model=Gemini(        [](#__codelineno-0-14)        model='gemini-flash-latest',        [](#__codelineno-0-15)        use_interactions_api=True,  # Required for deferred scheduling    [](#__codelineno-0-16)    ),    [](#__codelineno-0-17)    instruction='Process input documents and produce summaries.', [](#__codelineno-0-18)) [](#__codelineno-0-19)[](#__codelineno-0-20)app = App(name='batch_app', root_agent=root_agent) [](#__codelineno-0-21)runner = InMemoryRunner(app=app) [](#__codelineno-0-22) [](#__codelineno-0-23)[](#__codelineno-0-24)async def main() -> None:   [](#__codelineno-0-25)  session = await runner.session_service.create_session(      [](#__codelineno-0-26)      app_name=app.name,      [](#__codelineno-0-27)      user_id='user_123',      [](#__codelineno-0-28)      session_id='session_456',  [](#__codelineno-0-29)  ) [](#__codelineno-0-30)  [](#__codelineno-0-31)  # Request off-peak capacity for every model call in this run.  [](#__codelineno-0-32)  run_config = RunConfig(service_tier=ServiceTier.DEFERRED) [](#__codelineno-0-33)  [](#__codelineno-0-34)  async for event in runner.run_async(      [](#__codelineno-0-35)      user_id='user_123',      [](#__codelineno-0-36)      session_id=session.id,      [](#__codelineno-0-37)      new_message=types.Content(          [](#__codelineno-0-38)          role='user',          [](#__codelineno-0-39)          parts=[types.Part.from_text(              [](#__codelineno-0-40)              text='Summarize quarterly performance metrics.'          [](#__codelineno-0-41)          )],      [](#__codelineno-0-42)      ),      [](#__codelineno-0-43)      run_config=run_config,  [](#__codelineno-0-44)  ):    [](#__codelineno-0-45)    if event.content and event.content.parts:      [](#__codelineno-0-46)      for part in event.content.parts:        [](#__codelineno-0-47)        if part.text:          [](#__codelineno-0-48)          print(part.text) [](#__codelineno-0-49) [](#__codelineno-0-50)[](#__codelineno-0-51)asyncio.run(main())`

The runner submits the model call, waits for the queued work to finish, and then yields the response event. Your code consumes events exactly as it does for a standard run.

The run appears to hang while it waits

The `run_async()` method yields no events while the request sits in the queue. How long that takes depends on backend load, and ADK applies no upper bound. In a web UI or a terminal, the delay looks like a hang. Show a progress indicator, or set a [client deadline](#set-a-client-side-deadline).

To confirm that the tier took effect, check your application logs for these messages:

Log message

Level

Meaning

`Using service_tier from run_config: deferred`

`DEBUG`

ADK applied the tier to the request.

`Interaction <id> is queued; waiting for the result.`

`INFO`

The backend accepted the work into the queue.

`Interaction <id> reached status completed.`

`INFO`

The result is ready.

`run_config.service_tier=... has no effect for agent <name>`

`WARNING`

ADK dropped the tier. See [Troubleshooting](#troubleshooting).

## How deferred scheduling works[¶](#how-deferred-scheduling-works "Permanent link")

Standard model requests are synchronous. ADK sends the request and the model returns a response on the same connection. When you enable deferred scheduling by setting `ServiceTier.DEFERRED`, ADK marks the request for background execution and the backend queues it, returning an interaction ID immediately instead of a result.

ADK then waits for that result, checking the queued work with exponential backoff and absorbing transient read failures until it reaches a final status. It converts that result to a normal response event and yields it. This loop is internal: it does not surface interaction IDs, and you do not need to write any retrieval code. It does add a few seconds of polling delay on top of the queue wait, so deferred scheduling should not be used for short, latency-sensitive calls.

The following properties of the wait affect how you design your agent:

-   **ADK sets no client-side deadline.** The backend's completion timeout on the interaction is the only bound on the wait. To stop sooner, see [Set a client-side deadline](#set-a-client-side-deadline).
-   **Each model turn queues separately.** In an agent that calls tools, every turn creates its own interaction, so total latency is the sum of every turn's queue wait rather than a single wait for the run.

## Configuration options[¶](#configuration-options "Permanent link")

The `service_tier` setting of `RunConfig` selects the capacity pool for every model call in a run:

Option

Type

Default

Description

`service_tier`

`Optional[ServiceTier \| str]`

`None`

Serving tier for the model calls of this run.

The `ServiceTier` enum defines the following tiers:

-   `ServiceTier.DEFERRED`: Queues the call to run on off-peak capacity. The call waits for room instead of failing when capacity is tight. No other tier changes how ADK executes the request, and it cannot be combined with streaming.
-   `ServiceTier.FLEX`: Best-effort capacity at a lower cost, with no latency guarantee.
-   `ServiceTier.STANDARD`: The default tier.
-   `ServiceTier.PRIORITY`: Reserved capacity for latency-sensitive calls.

Leaving `service_tier` unset omits the field from the request entirely, which is equivalent to `ServiceTier.STANDARD`. The `ServiceTier` enum subclasses `str`, so you can pass a plain string such as `'deferred'` in place of an enum member. The string form also lets you use a tier the backend supports before ADK defines a constant for it.

## Advanced usage[¶](#advanced-usage "Permanent link")

The following sections describe how to bound the wait time for a deferred run with a client-side deadline and how to request deferred scheduling when serving an agent over HTTP.

### Set a client-side deadline[¶](#set-a-client-side-deadline "Permanent link")

A deferred request waits for off-peak capacity, and its duration depends on backend load. To cap the total elapsed time, wrap the run in an `asyncio.timeout()`, which requires Python 3.11 or later:

Python

`[](#__codelineno-1-1)import asyncio [](#__codelineno-1-2)import logging [](#__codelineno-1-3)[](#__codelineno-1-4)from google.adk.agents import RunConfig [](#__codelineno-1-5)from google.adk.models import ServiceTier [](#__codelineno-1-6)from google.genai import types [](#__codelineno-1-7)[](#__codelineno-1-8)logger = logging.getLogger(__name__) [](#__codelineno-1-9)[](#__codelineno-1-10)# Continues from the Get started example, reusing runner and session. [](#__codelineno-1-11)message = types.Content(     [](#__codelineno-1-12)    role='user',    [](#__codelineno-1-13)    parts=[types.Part.from_text(text='Generate a quarterly summary.')], [](#__codelineno-1-14)) [](#__codelineno-1-15)run_config = RunConfig(service_tier=ServiceTier.DEFERRED) [](#__codelineno-1-16)[](#__codelineno-1-17)try:   [](#__codelineno-1-18)  async with asyncio.timeout(300):    [](#__codelineno-1-19)    async for event in runner.run_async(        [](#__codelineno-1-20)        user_id='user_123',        [](#__codelineno-1-21)        session_id=session.id,        [](#__codelineno-1-22)        new_message=message,        [](#__codelineno-1-23)        run_config=run_config,    [](#__codelineno-1-24)    ):      [](#__codelineno-1-25)      if event.content and event.content.parts:        [](#__codelineno-1-26)        for part in event.content.parts:          [](#__codelineno-1-27)          if part.text:            [](#__codelineno-1-28)            print(part.text) [](#__codelineno-1-29)except TimeoutError:   [](#__codelineno-1-30)  logger.error('Deferred run exceeded the 300 second client deadline.')`

Client deadlines do not cancel requests

Timing out stops ADK from polling for the result, but does not stop the backend. The queued request runs to completion and consumes billed usage, and you cannot retrieve its output afterward. Treat a timed-out turn as forfeited, and do not use a client deadline to limit usage.

### Request deferred scheduling over HTTP[¶](#request-deferred-scheduling-over-http "Permanent link")

An agent you serve with `adk api_server` accepts `service_tier` in the request body of the `/run` and `/run_sse` endpoints:

`[](#__codelineno-2-1){   [](#__codelineno-2-2)  "app_name": "batch_app",  [](#__codelineno-2-3)  "user_id": "user_123",  [](#__codelineno-2-4)  "session_id": "session_456",  [](#__codelineno-2-5)  "new_message": {    [](#__codelineno-2-6)    "role": "user",    [](#__codelineno-2-7)    "parts": [{"text": "Summarize batch results."}]  [](#__codelineno-2-8)  },  [](#__codelineno-2-9)  "service_tier": "deferred" [](#__codelineno-2-10)}`

For `/run_sse` requests, you must also set `"streaming": false`. Combining `"service_tier": "deferred"` with `"streaming": true` returns HTTP 422. An HTTP request holds the connection open for the whole queue wait, which makes the hosting platform's request timeout the effective limit on a deferred run:

-   **Raise proxy and ingress timeouts.** Load balancers and ingress controllers close long-running backend connections by default. Check the limits for your platform, such as the [Cloud Run request timeout](https://cloud.google.com/run/docs/configuring/request-timeout), and raise them to cover your expected queue wait.
-   **A client disconnect cancels retrieval, not execution.** When the connection closes, the server cancels its polling task. The queued request still runs and still consumes billed usage, and you lose its output.

For deferred workloads that may wait a long time, deploy to [Agent Runtime](/deploy/agent-runtime/) on Google Cloud Agent Platform instead. Agent Runtime runs the invocation in a managed container and does not hold an HTTP connection open for it.

## Limitations[¶](#limitations "Permanent link")

The following limitations apply to deferred scheduling:

-   **Allowlisted access:** Deferred capacity requires an allowlist for your Google Cloud project.
-   **Gemini and the Interactions API only:** Deferred scheduling works only with a `Gemini` model that sets `use_interactions_api=True`. Any other model, including a custom `BaseLlm` subclass, ignores the tier.
-   **Not compatible with streaming:** Constructing `RunConfig(service_tier=ServiceTier.DEFERRED, streaming_mode=StreamingMode.SSE)` raises a `pydantic.ValidationError`.
-   **`ManagedAgent` class ignores the tier:** It runs its own interaction loop and never reads `service_tier`.
-   **No resumption across restarts:** ADK does not persist in-flight interaction IDs, and offers no way to reattach a run to a queued interaction. If the client process stops, ADK abandons the pending work and the next run creates a new interaction.

## Troubleshooting[¶](#troubleshooting "Permanent link")

The following sections describe some common issues when using deferred scheduling, and how to resolve them.

### ADK ignores the tier and the run still succeeds[¶](#adk-ignores-the-tier-and-the-run-still-succeeds "Permanent link")

If the agent's model is not a `Gemini` instance with `use_interactions_api=True`, ADK drops the tier, logs a warning once per run, and executes the call on standard capacity. The run succeeds, so the log is the only signal:

`[](#__codelineno-3-1)run_config.service_tier=... has no effect for agent <name>: its model does not [](#__codelineno-3-2)use the interactions API, which is the only path with a serving tier. Set [](#__codelineno-3-3)use_interactions_api=True on the model to apply the tier.`

The warning is intentional. In a multi-agent run, only some agents may be on the Interactions API, so an unusable tier warns rather than raises. Search your logs for `has no effect for agent` to find models that need `use_interactions_api=True`.

### OpenAI `service_tier` field[¶](#openai-service_tier-field "Permanent link")

The `OpenAIResponsesLlm` class also has a `service_tier` field. It is an unrelated setting: you set it on the model rather than on the run, and `RunConfig.service_tier` does not feed it. Setting one has no effect on the other.

## Additional resources[¶](#additional-resources "Permanent link")

-   [Gemini Interactions API](../#interactions-api)
-   [Runtime Configuration](/runtime/runconfig/)
-   [Interactions API code sample](https://github.com/google/adk-python/tree/main/contributing/samples/models/interactions_api)

Back to top