---
title: "Runtime Config - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/runtime/runconfig/
date: 2026-10-10T19:17:00.049Z
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
        -   [Ambient Agents](../ambient-agents/)
        -   [Resume Agents](../resume/)
        -   [Cancel Agent Runs](../cancel/)
        -    Runtime Config [Runtime Config](./)
            
            Table of contents
            
            -   [Manage sessions and context](#manage-sessions-and-context)
            -   [Text response options](#enable-streaming)
            -   [Configure audio and speech](#configure-audio-and-speech)
            -   [Configure live agents](#configure-live-agents)
            -   [Configure runtime limits and debugging](#configure-runtime-limits-and-debugging)
            -   [API reference](#api-reference)
            
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

-   [Manage sessions and context](#manage-sessions-and-context)
-   [Text response options](#enable-streaming)
-   [Configure audio and speech](#configure-audio-and-speech)
-   [Configure live agents](#configure-live-agents)
-   [Configure runtime limits and debugging](#configure-runtime-limits-and-debugging)
-   [API reference](#api-reference)

1.  [Home](../..)
2.  [Run Agents](../)
3.  [Agent Runtime](../)

[](https://github.com/google/adk-docs/edit/main/docs/runtime/runconfig.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Runtime Configuration[¶](#runtime-configuration "Permanent link")

Supported in ADKPython v0.1.0TypeScript v0.2.0Go v0.1.0Java v0.1.0Kotlin v0.1.0

`RunConfig` controls how agents behave at runtime, including streaming mode, speech settings, LLM call limits, and live agent options. Pass a `RunConfig` to `runner.run_async()` or `runner.run_live()` to override default behavior.

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-0-1)from google.adk.agents.run_config import RunConfig, StreamingMode [](#__codelineno-0-2)[](#__codelineno-0-3)config = RunConfig(     [](#__codelineno-0-4)    streaming_mode=StreamingMode.SSE,    [](#__codelineno-0-5)    max_llm_calls=200, [](#__codelineno-0-6)) [](#__codelineno-0-7)[](#__codelineno-0-8)async for event in runner.run_async(     [](#__codelineno-0-9)    ...,    [](#__codelineno-0-10)    run_config=config, [](#__codelineno-0-11)):     [](#__codelineno-0-12)    ...`

`[](#__codelineno-1-1)import { RunConfig, StreamingMode } from '@google/adk'; [](#__codelineno-1-2)[](#__codelineno-1-3)const config: RunConfig = {   [](#__codelineno-1-4)  streamingMode: StreamingMode.SSE,  [](#__codelineno-1-5)  maxLlmCalls: 200, [](#__codelineno-1-6)};`

`[](#__codelineno-2-1)import "google.golang.org/adk/v2/agent" [](#__codelineno-2-2)[](#__codelineno-2-3)config := agent.RunConfig{     [](#__codelineno-2-4)    StreamingMode: agent.StreamingModeSSE, [](#__codelineno-2-5)}`

`[](#__codelineno-3-1)import com.google.adk.agents.RunConfig; [](#__codelineno-3-2)import com.google.adk.agents.RunConfig.StreamingMode; [](#__codelineno-3-3)[](#__codelineno-3-4)RunConfig config = RunConfig.builder()     [](#__codelineno-3-5)    .streamingMode(StreamingMode.SSE)    [](#__codelineno-3-6)    .maxLlmCalls(200)    [](#__codelineno-3-7)    .build();`

`[](#__codelineno-4-1)val config =     [](#__codelineno-4-2)    RunConfig(        [](#__codelineno-4-3)        streamingMode = StreamingMode.SSE,        [](#__codelineno-4-4)        // Cap the LLM calls a single run may make. Defaults to 500.        [](#__codelineno-4-5)        maxLlmCalls = 200,    [](#__codelineno-4-6)    ) [](#__codelineno-4-7)[](#__codelineno-4-8)// Pass it to runner.runAsync [](#__codelineno-4-9)// runner.runAsync(..., runConfig = config)`

## Manage sessions and context[¶](#manage-sessions-and-context "Permanent link")

Supported in ADKPython

For long-running sessions, you can control how much history is loaded and whether the context window is compressed:

-   `get_session_config`: Limits which events are fetched when loading a session. Use `num_recent_events` or `after_timestamp` to avoid loading the full event history on every invocation. These filters limit the loaded view without deleting stored events. New events are appended to the stored history, preserving older events excluded from the loaded view.
-   `context_window_compression`: Enables context window compression for LLM input, useful when sessions approach model context limits.
-   `include_thoughts_from_other_agents`: Controls whether thought parts from other agents are included in the LLM context. Disabled by default.
-   `model_input_context`: A list of `types.Content` added to the LLM request for this invocation only. The runner does not persist it to the session, so you can supply per-turn context without changing the conversation history.

Python

`[](#__codelineno-5-1)from google.adk.agents.run_config import RunConfig [](#__codelineno-5-2)from google.adk.sessions.base_session_service import GetSessionConfig [](#__codelineno-5-3)[](#__codelineno-5-4)config = RunConfig(     [](#__codelineno-5-5)    get_session_config=GetSessionConfig(num_recent_events=50), [](#__codelineno-5-6))`

## Text response options[¶](#enable-streaming "Permanent link")

You can control how an agent responds in text mode, word-by-word as it is generated, or as one full response, with the ***Streaming Mode*** parameter, as described below:

-   **`StreamingMode.NONE`** (default): The runner returns one complete response per turn. Suitable for CLI tools, batch processing, and synchronous workflows.
-   **`StreamingMode.SSE`**: Server-Sent Events streaming. The runner yields partial events as the LLM generates, enabling typewriter-style UIs and real-time chat displays.

There is another setting for the ***Streaming Mode*** parameter which enables bidirectional streaming of data, including voice input and output. This feature requires additional configuration beyond simple agents. For more information about this feature, see [Live and Voice Agents](../../live/).

Set `support_cfc=True` alongside `StreamingMode.SSE` to enable Compositional Function Calling (CFC), which allows the model to dynamically compose and execute function calls. CFC uses the Live API under the hood.

Experimental

CFC support is experimental and its API or behavior may change in future releases.

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-6-1)from google.adk.agents.run_config import RunConfig, StreamingMode [](#__codelineno-6-2)[](#__codelineno-6-3)config = RunConfig(     [](#__codelineno-6-4)    streaming_mode=StreamingMode.SSE,    [](#__codelineno-6-5)    support_cfc=True,    [](#__codelineno-6-6)    max_llm_calls=150, [](#__codelineno-6-7))`

`[](#__codelineno-7-1)import { RunConfig, StreamingMode } from '@google/adk'; [](#__codelineno-7-2)[](#__codelineno-7-3)const config: RunConfig = {     [](#__codelineno-7-4)    streamingMode: StreamingMode.SSE,    [](#__codelineno-7-5)    maxLlmCalls: 150, [](#__codelineno-7-6)};`

`[](#__codelineno-8-1)import "google.golang.org/adk/v2/agent" [](#__codelineno-8-2)[](#__codelineno-8-3)config := agent.RunConfig{     [](#__codelineno-8-4)    StreamingMode: agent.StreamingModeSSE, [](#__codelineno-8-5)}`

`[](#__codelineno-9-1)import com.google.adk.agents.RunConfig; [](#__codelineno-9-2)import com.google.adk.agents.RunConfig.StreamingMode; [](#__codelineno-9-3)[](#__codelineno-9-4)RunConfig config = RunConfig.builder()     [](#__codelineno-9-5)    .streamingMode(StreamingMode.SSE)    [](#__codelineno-9-6)    .maxLlmCalls(150)    [](#__codelineno-9-7)    .build();`

`[](#__codelineno-10-1)// Note: Kotlin currently has no supportCfc equivalent [](#__codelineno-10-2)val streamingConfig =     [](#__codelineno-10-3)    RunConfig(        [](#__codelineno-10-4)        streamingMode = StreamingMode.SSE,        [](#__codelineno-10-5)        maxLlmCalls = 150,    [](#__codelineno-10-6)    )`

## Configure audio and speech[¶](#configure-audio-and-speech "Permanent link")

Supported in ADKPythonTypeScriptJava

For voice-enabled agents, configure speech synthesis, audio transcription, and response modalities.

Live agents

This section covers the audio fields shared across languages. For the full live (`run_live()`) configuration reference — transcription streaming, voice selection, voice activity detection, and proactive/affective dialog — see [Live agent configuration](../../live/configuration/).

-   `speech_config`: Sets the voice and language for speech output (e.g., the "Kore" voice with `en-US`).
-   `response_modalities`: Controls the output format. A session accepts exactly one modality — use `["AUDIO"]` for voice agents and `["TEXT"]` for text-only ones. To get both speech and text, set `["AUDIO"]` and read the text from the output audio transcription.
-   `output_audio_transcription` / `input_audio_transcription`: Enable transcription of audio output from the model and audio input from the user. Both default to `AudioTranscriptionConfig()` in Python.

PythonTypeScriptJava

`[](#__codelineno-11-1)from google.adk.agents.run_config import RunConfig, StreamingMode [](#__codelineno-11-2)from google.genai import types [](#__codelineno-11-3)[](#__codelineno-11-4)config = RunConfig(     [](#__codelineno-11-5)    speech_config=types.SpeechConfig(        [](#__codelineno-11-6)        language_code="en-US",        [](#__codelineno-11-7)        voice_config=types.VoiceConfig(            [](#__codelineno-11-8)            prebuilt_voice_config=types.PrebuiltVoiceConfig(                [](#__codelineno-11-9)                voice_name="Kore"            [](#__codelineno-11-10)            )        [](#__codelineno-11-11)        ),    [](#__codelineno-11-12)    ),    [](#__codelineno-11-13)    response_modalities=["AUDIO"],    [](#__codelineno-11-14)    streaming_mode=StreamingMode.SSE,    [](#__codelineno-11-15)    max_llm_calls=1000, [](#__codelineno-11-16))`

`[](#__codelineno-12-1)import { RunConfig, StreamingMode } from '@google/adk'; [](#__codelineno-12-2)import { Modality } from '@google/genai'; [](#__codelineno-12-3)[](#__codelineno-12-4)const config: RunConfig = {     [](#__codelineno-12-5)    speechConfig: {        [](#__codelineno-12-6)        languageCode: "en-US",        [](#__codelineno-12-7)        voiceConfig: {            [](#__codelineno-12-8)            prebuiltVoiceConfig: {                [](#__codelineno-12-9)                voiceName: "Kore"            [](#__codelineno-12-10)            }        [](#__codelineno-12-11)        },    [](#__codelineno-12-12)    },    [](#__codelineno-12-13)    responseModalities: [Modality.AUDIO],    [](#__codelineno-12-14)    streamingMode: StreamingMode.SSE,    [](#__codelineno-12-15)    maxLlmCalls: 1000, [](#__codelineno-12-16)};`

`[](#__codelineno-13-1)import com.google.adk.agents.RunConfig; [](#__codelineno-13-2)import com.google.adk.agents.RunConfig.StreamingMode; [](#__codelineno-13-3)import com.google.common.collect.ImmutableList; [](#__codelineno-13-4)import com.google.genai.types.Modality; [](#__codelineno-13-5)import com.google.genai.types.PrebuiltVoiceConfig; [](#__codelineno-13-6)import com.google.genai.types.SpeechConfig; [](#__codelineno-13-7)import com.google.genai.types.VoiceConfig; [](#__codelineno-13-8)[](#__codelineno-13-9)RunConfig runConfig =     [](#__codelineno-13-10)    RunConfig.builder()        [](#__codelineno-13-11)        .streamingMode(StreamingMode.SSE)        [](#__codelineno-13-12)        .maxLlmCalls(1000)        [](#__codelineno-13-13)        .responseModalities(ImmutableList.of(new Modality(Modality.Known.AUDIO)))        [](#__codelineno-13-14)        .speechConfig(            [](#__codelineno-13-15)            SpeechConfig.builder()                [](#__codelineno-13-16)                .voiceConfig(                    [](#__codelineno-13-17)                    VoiceConfig.builder()                        [](#__codelineno-13-18)                        .prebuiltVoiceConfig(                            [](#__codelineno-13-19)                            PrebuiltVoiceConfig.builder().voiceName("Kore").build())                        [](#__codelineno-13-20)                        .build())                [](#__codelineno-13-21)                .languageCode("en-US")                [](#__codelineno-13-22)                .build())        [](#__codelineno-13-23)        .build();`

## Configure live agents[¶](#configure-live-agents "Permanent link")

Supported in ADKPythonTypeScriptJava

ADK agents can support [Live and Voice Agents](../../live/) to create interactive agent experiences. You configure agents that support this functionality using the `runner.run_live()` method. Live agent (`run_live()`) sessions add a set of real-time parameters, including `realtime_input_config`, `session_resumption`, `save_live_blob`, `tool_thread_pool_config`, `proactivity`, `enable_affective_dialog`, and more. For more information, see the live agent docs:

-   **[Live agent configuration](../../live/configuration/)**: `RunConfig` reference for live agents.
-   **[Sessions](../../live/sessions/#session-resumption)**: resume and reconnect sessions.
-   **[Configuration: proactivity and affective dialog](../../live/configuration/#proactivity-and-affective-dialog)**: native-audio conversational features and the models that support them.

The `tool_thread_pool_config` setting is an exception: it is a runtime concern rather than a Live API one, so it stays here. It runs tool executions in a background thread pool so the event loop keeps responding to user interruptions. Not all parameters are available in every language. See the [API reference](#api-reference) for language-specific details.

PythonTypeScriptJava

`[](#__codelineno-14-1)from google.adk.agents.run_config import RunConfig, ToolThreadPoolConfig [](#__codelineno-14-2)[](#__codelineno-14-3)config = RunConfig(     [](#__codelineno-14-4)    save_live_blob=True,    [](#__codelineno-14-5)    tool_thread_pool_config=ToolThreadPoolConfig(max_workers=8), [](#__codelineno-14-6))`

Thread pool and the GIL

Thread pools help with blocking I/O and C extensions that release the GIL (e.g. `time.sleep()`, network calls, numpy). They do **not** help with pure Python CPU-bound code since the GIL prevents true parallel execution of Python bytecode.

`[](#__codelineno-15-1)import { RunConfig } from '@google/adk'; [](#__codelineno-15-2)[](#__codelineno-15-3)const config: RunConfig = {     [](#__codelineno-15-4)    enableAffectiveDialog: true,    [](#__codelineno-15-5)    proactivity: {        [](#__codelineno-15-6)        proactiveAudio: true,    [](#__codelineno-15-7)    }, [](#__codelineno-15-8)};`

`[](#__codelineno-16-1)import com.google.adk.agents.RunConfig; [](#__codelineno-16-2)import com.google.genai.types.AvatarConfig; [](#__codelineno-16-3)[](#__codelineno-16-4)RunConfig config = RunConfig.builder()     [](#__codelineno-16-5)    .avatarConfig(        [](#__codelineno-16-6)        AvatarConfig.builder()            [](#__codelineno-16-7)            .avatarName("PREBUILT_AVATAR_ID")            [](#__codelineno-16-8)            .build())    [](#__codelineno-16-9)    .build();`

## Configure runtime limits and debugging[¶](#configure-runtime-limits-and-debugging "Permanent link")

Use these parameters to control runtime guardrails and debugging:

-   `max_llm_calls`: Caps the total number of LLM calls per run (default: 500). Set to 0 or negative for unlimited calls, though this is not recommended for production. Passing your language's largest integer raises an error: `sys.maxsize` in Python, `Int.MAX_VALUE` in Kotlin.
-   `save_input_blobs_as_artifacts`: When `True`, saves input blobs (e.g., uploaded files) as run artifacts for debugging and auditing. Deprecated in Python in favor of `SaveFilesAsArtifactsPlugin`.
-   `custom_metadata`: A `dict[str, Any]` of arbitrary metadata attached to the invocation, useful for tracing or logging.
-   `service_tier`: Selects the serving capacity for the run's model calls. ADK Python only, and applies only to Gemini models that use the Interactions API. `ServiceTier.DEFERRED` queues each model call to run on off-peak capacity and cannot be combined with `StreamingMode.SSE`. See [Deferred scheduling](/agents/models/google-gemini/deferred-schedule/).

## API reference[¶](#api-reference "Permanent link")

For the complete list of fields, types, and defaults, see the API reference for your language:

-   [Python API reference](../../api-reference/python/google-adk.html#google.adk.agents.RunConfig)
-   [TypeScript API reference](../../api-reference/typescript/interfaces/RunConfig.html)
-   [Go API reference](https://pkg.go.dev/google.golang.org/adk/v2/agent#RunConfig)
-   [Java API reference](../../api-reference/java/com/google/adk/agents/RunConfig.html)
-   [Kotlin API reference](../../api-reference/kotlin/google-adk-kotlin-core/com.google.adk.kt.agents/-run-config/)

Back to top