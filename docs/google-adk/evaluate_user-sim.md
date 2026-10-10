---
title: "User Simulation - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/evaluate/user-sim/
date: 2026-10-10T19:16:31.557Z
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
        -    User Simulation [User Simulation](./)
            
            Table of contents
            
            -   [User personas](#user-personas)
            -   [Pre-built Personas](#pre-built-personas)
            -   [Example: Evaluate the hello\_world agent with conversation scenarios](#example-evaluate-the-hello_world-agent-with-conversation-scenarios)
            -   [User simulator configuration](#user-simulator-configuration)
            -   [Custom personas](#custom-personas)
            -   [Generate evaluation cases via user simulation](#generate-evaluation-cases-via-user-simulation)
                
                -   [Command Syntax](#command-syntax)
                -   [Configuration File Format](#configuration-file-format)
                -   [Configuration Fields](#configuration-fields)
                
            -   [Audio user simulation for live agents](#audio-user-simulation-for-live-agents)
            
        -   [Environment Simulation](../environment_simulation/)
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

-   [User personas](#user-personas)
-   [Pre-built Personas](#pre-built-personas)
-   [Example: Evaluate the hello\_world agent with conversation scenarios](#example-evaluate-the-hello_world-agent-with-conversation-scenarios)
-   [User simulator configuration](#user-simulator-configuration)
-   [Custom personas](#custom-personas)
-   [Generate evaluation cases via user simulation](#generate-evaluation-cases-via-user-simulation)
    
    -   [Command Syntax](#command-syntax)
    -   [Configuration File Format](#configuration-file-format)
    -   [Configuration Fields](#configuration-fields)
    
-   [Audio user simulation for live agents](#audio-user-simulation-for-live-agents)

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Evaluation](../)

[](https://github.com/google/adk-docs/edit/main/docs/evaluate/user-sim.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# User simulation[¶](#user-simulation "Permanent link")

Supported in ADKPython v1.18.0

When evaluating conversational agents, it is not always practical to use a fixed set of user prompts, as the conversation can proceed in unexpected ways. For example, if the agent needs the user to supply two values to perform a task, it may ask for those values one at a time or both at once. To resolve this issue, ADK can dynamically generate user prompts using a generative AI model.

To use this feature, you must specify a [`ConversationScenario`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/conversation_scenarios.py) which dictates the user's goals in their conversation with the agent. You may also specify a user persona that you expect the user to adhere to.

A `ConversationScenario` consists of the following components:

-   `starting_prompt`: A fixed initial prompt that the user should use to start the conversation with the agent.
-   `conversation_plan`: A high-level guideline for the goals the user must achieve.
-   `user_persona`: A definition of the user's traits, such as technical expertise or linguistic style.

A sample conversation scenario for the [`hello_world`](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world) agent is shown below:

`[](#__codelineno-0-1){   [](#__codelineno-0-2)  "starting_prompt": "What can you do for me?",  [](#__codelineno-0-3)  "conversation_plan": "Ask the agent to roll a 20-sided die. After you get the result, ask the agent to check if it is prime." [](#__codelineno-0-4)}`

The LLM uses the `conversation_plan`, along with the conversation history, to dynamically generate user prompts.

You can also specify a pre-built `user_persona` in the following manner:

`[](#__codelineno-1-1){   [](#__codelineno-1-2)  "starting_prompt": "What can you do for me?",  [](#__codelineno-1-3)  "conversation_plan": "Ask the agent to roll a 20-sided die. After you get the result, ask the agent to check if it is prime.",  [](#__codelineno-1-4)  "user_persona": "NOVICE" [](#__codelineno-1-5)}`

While the conversation plan dictates what must be accomplished, the persona dictates how the model phrases its queries and reacts to the agent's responses.

## User personas[¶](#user-personas "Permanent link")

Supported in ADKPython v1.26.0

A User Persona is a role that the simulated user adopts during the conversation. It is defined by a set of **behaviors** that dictate how the user interacts with the agent, such as their communication style, how they provide information, and how they react to errors.

A `UserPersona` consists of the following fields:

-   `id`: A unique identifier for the persona.
-   `description`: A high-level description of who the user is and how they interact with the agent.
-   `behaviors`: A list of `UserBehavior` objects that define specific traits.

Each `UserBehavior` includes:

-   `name`: The name of the behavior.
-   `description`: A summary of the expected behavior.
-   `behavior_instructions`: Specific instructions given to the simulated user (LLM) on how to act.
-   `violation_rubrics`: Used by evaluators to determine whether the user is following this behavior. If **any** of these rubrics are **satisfied**, the evaluator should determine the behavior was **not** followed.

## Pre-built Personas[¶](#pre-built-personas "Permanent link")

ADK provides a set of pre-built personas composed of common behaviors. The table below summarizes the behaviors for each persona:

Behavior

**EXPERT** persona

**NOVICE** persona

**EVALUATOR** persona

**Advance**

Detail oriented (proactively provides details)

Goal oriented (waits to be asked for details)

Detail oriented

**Answer**

Relevant questions only

Answer all questions

Relevant questions only

**Correct Agent Inaccuracies**

Yes

No

No

**Troubleshoot Agent Errors**

Once

Never

Never

**Tone**

Professional

Conversational

Conversational

## Example: Evaluate the [`hello_world`](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world) agent with conversation scenarios[¶](#example-evaluate-the-hello_world-agent-with-conversation-scenarios "Permanent link")

To add evaluation cases containing conversation scenarios to a new or existing [`EvalSet`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_set.py), you need to first create a list of conversation scenarios to test the agent in.

Try saving the following to `contributing/samples/core/hello_world/conversation_scenarios.json`:

`[](#__codelineno-2-1){   [](#__codelineno-2-2)  "scenarios": [    [](#__codelineno-2-3)    {      [](#__codelineno-2-4)      "starting_prompt": "What can you do for me?",      [](#__codelineno-2-5)      "conversation_plan": "Ask the agent to roll a 20-sided die. After you get the result, ask the agent to check if it is prime.",      [](#__codelineno-2-6)      "user_persona": "NOVICE"    [](#__codelineno-2-7)    },    [](#__codelineno-2-8)    {      [](#__codelineno-2-9)      "starting_prompt": "Hi, I'm running a tabletop RPG in which prime numbers are bad!",      [](#__codelineno-2-10)      "conversation_plan": "Say that you don't care about the value; you just want the agent to tell you if a roll is good or bad. Once the agent agrees, ask it to roll a 6-sided die. Finally, ask the agent to do the same with 2 20-sided dice.",      [](#__codelineno-2-11)      "user_persona": "EXPERT"    [](#__codelineno-2-12)    }  [](#__codelineno-2-13)  ] [](#__codelineno-2-14)}`

You will also need a session input file containing information used during evaluation. Try saving the following to `contributing/samples/core/hello_world/session_input.json`:

`[](#__codelineno-3-1){   [](#__codelineno-3-2)  "app_name": "hello_world",  [](#__codelineno-3-3)  "user_id": "user" [](#__codelineno-3-4)}`

Then, you can add the conversation scenarios to an `EvalSet`:

`[](#__codelineno-4-1)# (optional) create a new EvalSet [](#__codelineno-4-2)adk eval_set create \   [](#__codelineno-4-3)  contributing/samples/core/hello_world \  [](#__codelineno-4-4)  eval_set_with_scenarios [](#__codelineno-4-5)[](#__codelineno-4-6)# add conversation scenarios to the EvalSet as new eval cases [](#__codelineno-4-7)adk eval_set add_eval_case \   [](#__codelineno-4-8)  contributing/samples/core/hello_world \  [](#__codelineno-4-9)  eval_set_with_scenarios \  [](#__codelineno-4-10)  --scenarios_file contributing/samples/core/hello_world/conversation_scenarios.json \  [](#__codelineno-4-11)  --session_input_file contributing/samples/core/hello_world/session_input.json`

By default, ADK runs evaluations with metrics that require the agent's expected response to be specified. Since that is not the case for a dynamic conversation scenario, we will use an [`EvalConfig`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_config.py) with some alternate supported metrics.

Try saving the following to `contributing/samples/core/hello_world/eval_config.json`:

`[](#__codelineno-5-1){   [](#__codelineno-5-2)  "criteria": {    [](#__codelineno-5-3)    "hallucinations_v1": {      [](#__codelineno-5-4)      "threshold": 0.5,      [](#__codelineno-5-5)      "evaluate_intermediate_nl_responses": true    [](#__codelineno-5-6)    },    [](#__codelineno-5-7)    "safety_v1": {      [](#__codelineno-5-8)      "threshold": 0.8    [](#__codelineno-5-9)    }  [](#__codelineno-5-10)  } [](#__codelineno-5-11)}`

Finally, you can use the `adk eval` command to run the evaluation:

`[](#__codelineno-6-1)adk eval \     [](#__codelineno-6-2)    contributing/samples/core/hello_world \    [](#__codelineno-6-3)    --config_file_path contributing/samples/core/hello_world/eval_config.json \    [](#__codelineno-6-4)    eval_set_with_scenarios \    [](#__codelineno-6-5)    --print_detailed_results`

## User simulator configuration[¶](#user-simulator-configuration "Permanent link")

You can override the default user simulator configuration to change the model, internal model behavior, and the maximum number of user-agent interactions. The below `EvalConfig` shows the default user simulator configuration:

`[](#__codelineno-7-1){   [](#__codelineno-7-2)  "criteria": {    [](#__codelineno-7-3)    # same as before  [](#__codelineno-7-4)  },  [](#__codelineno-7-5)  "user_simulator_config": {    [](#__codelineno-7-6)    "model": "gemini-flash-latest",    [](#__codelineno-7-7)    "model_configuration": {      [](#__codelineno-7-8)      "thinking_config": {        [](#__codelineno-7-9)        "include_thoughts": true,        [](#__codelineno-7-10)        "thinking_budget": 10240      [](#__codelineno-7-11)      }    [](#__codelineno-7-12)    },    [](#__codelineno-7-13)    "max_allowed_invocations": 20,    [](#__codelineno-7-14)    "include_function_calls": false  [](#__codelineno-7-15)  } [](#__codelineno-7-16)}`

-   `model`: The model backing the user simulator.
-   `model_configuration`: A [`GenerateContentConfig`](https://github.com/googleapis/python-genai/blob/6196b1b4251007e33661bb5d7dc27bafee3feefe/google/genai/types.py#L4295) which controls the model behavior.
-   `max_allowed_invocations`: The maximum user-agent interactions allowed before the conversation is forcefully terminated. This should be set to be greater than the longest reasonable user-agent interaction in your `EvalSet`. The initial fixed prompt counts as an invocation. Setting this value to `-1` removes the innovation limit, which is not recommended.
-   `include_function_calls`: Optional. Whether to include function calls and responses in the conversation history prompt given to the user simulator. Defaults to `false`.
-   `custom_instructions`: Optional. Overrides the default instructions for the user simulator. The instruction string must contain the following formatting placeholders using [Jinja](https://jinja.palletsprojects.com/en/stable/templates/#) syntax (*do not substitute values in advance!*):
    -   `{{ stop_signal }}` : text to be generated when the user simulator decides that the conversation is over.
    -   `{{ conversation_plan }}` : the overall plan for the conversation that the user simulator must follow.
    -   `{{ conversation_history }}` : the conversation between the user and the agent so far.
    -   You can also access the `UserPersona` object through the `{{ persona }}` placeholder.

## Custom personas[¶](#custom-personas "Permanent link")

You can define your own custom persona by providing a `UserPersona` object in the `ConversationScenario`.

Example of a custom persona definition:

`[](#__codelineno-8-1){   [](#__codelineno-8-2)  "starting_prompt": "I need help with my account.",  [](#__codelineno-8-3)  "conversation_plan": "Ask the agent to reset your password.",  [](#__codelineno-8-4)  "user_persona": {    [](#__codelineno-8-5)    "id": "IMPATIENT_USER",    [](#__codelineno-8-6)    "description": "A user who is in a rush and gets easily frustrated.",    [](#__codelineno-8-7)    "behaviors": [      [](#__codelineno-8-8)      {        [](#__codelineno-8-9)        "name": "Short responses",        [](#__codelineno-8-10)        "description": "The user should provide very short, sometimes incomplete responses.",        [](#__codelineno-8-11)        "behavior_instructions": [            [](#__codelineno-8-12)            "Keep your responses under 10 words.",            [](#__codelineno-8-13)            "Omit polite phrases."        [](#__codelineno-8-14)        ],        [](#__codelineno-8-15)        "violation_rubrics": [            [](#__codelineno-8-16)            "The user response is over 10 words.",            [](#__codelineno-8-17)            "The user response is overly polite."        [](#__codelineno-8-18)        ]      [](#__codelineno-8-19)      }    [](#__codelineno-8-20)    ]  [](#__codelineno-8-21)  } [](#__codelineno-8-22)}`

## Generate evaluation cases via user simulation[¶](#generate-evaluation-cases-via-user-simulation "Permanent link")

Writing evaluation cases manually can be time-consuming and may not cover all potential failure modes. ADK provides a command to automatically generate diverse and realistic conversation scenarios based on your agent's definition using the Agent Platform Eval SDK.

Prerequisites: Agent Platform Credentials

Generating evaluation cases uses the [Vertex Gen AI Evaluation Service API](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview). You must have a Google Cloud project with the Agent Platform API enabled and valid Application Default Credentials (ADC) configured in your environment.

### Command Syntax[¶](#command-syntax "Permanent link")

`[](#__codelineno-9-1)adk eval_set generate_eval_cases \     [](#__codelineno-9-2)    <AGENT_MODULE_FILE_PATH> \    [](#__codelineno-9-3)    <EVAL_SET_ID> \    [](#__codelineno-9-4)    --user_simulation_config_file=<PATH_TO_CONFIG_FILE>`

### Configuration File Format[¶](#configuration-file-format "Permanent link")

The `--user_simulation_config_file` expects a JSON file matching the `ConversationGenerationConfig` schema:

`[](#__codelineno-10-1){   [](#__codelineno-10-2)  "count": 5,  [](#__codelineno-10-3)  "generation_instruction": "Generate scenarios where the user asks to control home devices under different conditions.",  [](#__codelineno-10-4)  "environment_context": "Available devices: device_1 (Light), device_2 (Thermostat).",  [](#__codelineno-10-5)  "model_name": "gemini-flash-latest" [](#__codelineno-10-6)}`

### Configuration Fields[¶](#configuration-fields "Permanent link")

-   **`count`** (required): The number of conversation scenarios to generate.
-   **`generation_instruction`** (optional): A natural language prompt guiding the specific types of scenarios or goals you want to test.
-   **`environment_context`** (optional): Context describing the backend data or state accessible to the agent's tools. This helps the generator create queries that are grounded in realistic data (e.g., valid device IDs).
-   **`model_name`** (required): The Gemini model used for generation (e.g., `gemini-flash-latest`).

## Audio user simulation for live agents[¶](#audio-user-simulation-for-live-agents "Permanent link")

The user simulator is independent of whether the agent under test is a live (voice) agent, so the same `ConversationScenario` (or a fixed conversation) can drive both text and live evals. For live agents, the simulated user's turns can be synthesized to **audio** and streamed to the agent.

This is configured with the `llm_audio` user simulator in your eval config (`test_config.json`). It wraps the standard text simulator and converts each generated user turn to audio using a text-to-speech model. By default it uses Google Cloud Text-to-Speech (`cloud_tts`); a Gemini TTS model name may be used instead.

`[](#__codelineno-11-1){   [](#__codelineno-11-2)  "criteria": {    [](#__codelineno-11-3)    "tool_trajectory_avg_score": 1.0,    [](#__codelineno-11-4)    "response_match_score": 0.5  [](#__codelineno-11-5)  },  [](#__codelineno-11-6)  "live_model_config": {    [](#__codelineno-11-7)    "timeout_seconds": 300  [](#__codelineno-11-8)  },  [](#__codelineno-11-9)  "user_simulator_config": {    [](#__codelineno-11-10)    "type": "llm_audio",    [](#__codelineno-11-11)    "model": "gemini-2.5-flash",    [](#__codelineno-11-12)    "audio_model": "cloud_tts",    [](#__codelineno-11-13)    "audio_model_configuration": {      [](#__codelineno-11-14)      "speech_config": {        [](#__codelineno-11-15)        "voice_config": {          [](#__codelineno-11-16)          "prebuilt_voice_config": { "voice_name": "en-US-Studio-O" }        [](#__codelineno-11-17)        },        [](#__codelineno-11-18)        "language_code": "en-US"      [](#__codelineno-11-19)      }    [](#__codelineno-11-20)    },    [](#__codelineno-11-21)    "include_text_with_audio": true  [](#__codelineno-11-22)  } [](#__codelineno-11-23)}`

Key fields:

-   `type`: `"llm_audio"` selects the audio user simulator.
-   `audio_model`: `"cloud_tts"` for Google Cloud Text-to-Speech, or a Gemini TTS model name (e.g. `"gemini-2.5-flash-preview-tts"`).
-   `audio_model_configuration.speech_config`: Selects the voice and language.
-   `include_text_with_audio`: Whether the user turn also carries the text part alongside the generated audio.

Live models require live inference

Evaluating a live agent requires live (bidirectional streaming) inference, which is **not** the default. Enable it by adding a `live_model_config` block to your config file. Live API models (e.g. `gemini-*-live-*`) are not served over the unary `generateContent` endpoint that non-live eval uses, so running them without live mode fails.

`use_live` is an internal field set from `live_model_config`; putting it in a config file has no effect.

Using `cloud_tts` requires the `google-cloud-texttospeech` package (included in the `google-adk[eval]` extra) and access to the Cloud Text-to-Speech API.

See the sample at [`contributing/samples/live/non_blocking_tool_agent`](https://github.com/google/adk-python/tree/main/contributing/samples/live/non_blocking_tool_agent) for a complete, runnable live eval configuration.

Back to top