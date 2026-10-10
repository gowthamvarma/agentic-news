---
title: "Ollama - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/ollama/
date: 2026-10-10T19:16:25.688Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../../../get-started/)
        
        Get Started
        
        -   [Python](../../../get-started/python/)
        -   [TypeScript](../../../get-started/typescript/)
        -   [Go](../../../get-started/go/)
        -   [Java](../../../get-started/java/)
        -   [Kotlin](../../../get-started/kotlin/)
        -   [Agents CLI](../../../get-started/agents-cli/)
        -   [Installation](../../../get-started/installation/)
        -   [Google Cloud](../../../get-started/google-cloud/)
        -   [Migrate to ADK](../../../get-started/migrate/)
        
    -   [Build your Agent](../../../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../../../tutorials/multi-tool-agent/)
        -   [Agent team](../../../tutorials/agent-team/)
        -   [Code with AI](../../../tutorials/coding-with-ai/)
        -   [Agent Config](../../config/)
        
    -   [Agents](../../)
        
        Agents
        
        -   [Simple agents](../../llm-agents/)
        -   [Managed agents](../../managed-agents/)
        
    -   [Graph Workflows](../../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../../graphs/routes/)
        -   [Data handling](../../../graphs/data-handling/)
        -   [Human input](../../../graphs/human-input/)
        -   [Dynamic workflows](../../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../../workflows/collaboration/)
        -   [Template workflows](../../workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../../workflow-agents/sequential-agents/)
            -   [Loop workflow](../../workflow-agents/loop-agents/)
            -   [Parallel workflow](../../workflow-agents/parallel-agents/)
            -   [Custom template workflows](../../custom-agents/)
            
        -   [Agent routing](../../routing/)
        -   [Workflow patterns](../../../workflows/patterns/)
        
    -   [Models for Agents](../)
        
        Models for Agents
        
        -   [Gemini](../google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../google-gemini/deferred-schedule/)
            
        -   [Gemma](../google-gemma/)
        -   [Claude](../anthropic/)
        -   [Agent Platform hosted](../agent-platform/)
        -   [Apigee AI Gateway](../apigee/)
        -   [Model routing](../routing/)
        -   [OpenAI](../openai/)
        -    Ollama [Ollama](./)
            
            Table of contents
            
            -   [Get started](#get-started)
            -   [Model choice](#model-choice)
            -   [Use OpenAI provider](#use-openai-provider)
                
                -   [Debugging](#debugging)
                
            
        -   [vLLM](../vllm/)
        -   [LiteLLM](../litellm/)
        -   [LiteRT-LM](../litert-lm/)
        
    
-    Run Agents
    
    Run Agents
    
    -   [Agent Runtime](../../../runtime/)
        
        Agent Runtime
        
        -   [Web Interface](../../../runtime/web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../../../visual-builder/)
            
        -   [Command Line](../../../runtime/command-line/)
        -   [API Server](../../../runtime/api-server/)
        -   [Ambient Agents](../../../runtime/ambient-agents/)
        -   [Resume Agents](../../../runtime/resume/)
        -   [Cancel Agent Runs](../../../runtime/cancel/)
        -   [Runtime Config](../../../runtime/runconfig/)
        -   [Event Loop](../../../runtime/event-loop/)
        
    -   [Deployment](../../../deploy/)
        
        Deployment
        
        -   [Agent Runtime](../../../deploy/agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../../../deploy/agent-runtime/deploy/)
            -   [agents-cli](../../../deploy/agent-runtime/agents-cli/)
            -   [Test deployed agents](../../../deploy/agent-runtime/test/)
            
        -   [Cloud Run](../../../deploy/cloud-run/)
        -   [GKE](../../../deploy/gke/)
        
    -   [Observability](../../../observability/)
        
        Observability
        
        -   [Logging](../../../observability/logging/)
        -   [Metrics](../../../observability/metrics/)
        -   [Traces](../../../observability/traces/)
        
    -   [Evaluation](../../../evaluate/)
        
        Evaluation
        
        -   [Criteria](../../../evaluate/criteria/)
        -   [User Simulation](../../../evaluate/user-sim/)
        -   [Environment Simulation](../../../evaluate/environment_simulation/)
        -   [Custom Metrics](../../../evaluate/custom_metrics/)
        -   [Optimization](../../../optimize/)
        
    -   [Safety and Security](../../../safety/)
        
        Safety and Security
        
    
-    Components
    
    Components
    
    -   [Technical Overview](../../../get-started/about/)
    -   [Custom Tools](../../../tools-custom/)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../../../tools-custom/function-tools/)
            -   [Tool performance](../../../tools-custom/performance/)
            -   [Action confirmations](../../../tools-custom/confirmation/)
            
        -   [MCP tools](../../../tools-custom/mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../../../tools-custom/mcp-tools/advanced/)
            -   [Deployment](../../../tools-custom/mcp-tools/deployment/)
            -   [Agent as MCP server](../../../tools-custom/mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../../../tools-custom/mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../../../tools-custom/openapi-tools/)
        -   [Authentication](../../../tools-custom/authentication/)
        -   [Tool limitations](../../../tools/limitations/)
        
    -   [Artifacts](../../../artifacts/)
        
        Artifacts
        
    -   [Skills for Agents](../../../skills/)
        
        Skills for Agents
        
    -   [App management](../../../apps/)
        
        App management
        
        -   [Callbacks](../../../callbacks/)
            
            Callbacks
            
            -   [Types of callbacks](../../../callbacks/types-of-callbacks/)
            -   [Callback patterns](../../../callbacks/design-patterns-and-best-practices/)
            
        -   [Plugins](../../../plugins/)
        
    -   [Agent context](../../../context/)
        
        Agent context
        
        -   [Conversational context](../../../sessions/)
        -   [Sessions](../../../sessions/session/)
            
            Sessions
            
            -   [Rewind sessions](../../../sessions/session/rewind/)
            -   [Migrate sessions](../../../sessions/session/migrate/)
            
        -   [State](../../../sessions/state/)
        -   [Events](../../../events/)
        -   [Memory](../../../sessions/memory/)
        -   [Context compression](../../../context/compaction/)
        -   [Model context caching](../../../context/caching/)
        
    -   [A2A Protocol](../../../a2a/)
        
        A2A Protocol
        
        -   [Introduction to A2A](../../../a2a/intro/)
        -    A2A Quickstart (Exposing)
            
            A2A Quickstart (Exposing)
            
            -   [Python](../../../a2a/quickstart-exposing/)
            -   [Go](../../../a2a/quickstart-exposing-go/)
            -   [Java](../../../a2a/quickstart-exposing-java/)
            
        -    A2A Quickstart (Consuming)
            
            A2A Quickstart (Consuming)
            
            -   [Python](../../../a2a/quickstart-consuming/)
            -   [Go](../../../a2a/quickstart-consuming-go/)
            -   [Java](../../../a2a/quickstart-consuming-java/)
            -   [Kotlin](../../../a2a/quickstart-consuming-kotlin/)
            
        -   [A2A Extension](../../../a2a/a2a-extension/)
        
    -   [Live and Voice Agents](../../../live/)
        
        Live and Voice Agents
        
        -   [Get started](../../../live/get-started/)
            
            Get started
            
            -   [Python](../../../live/get-started/streaming-python/)
            -   [Java](../../../live/get-started/streaming-java/)
            
        -    Building
            
            Building
            
            -   [Workflows](../../../live/workflows/)
            -   [Tools](../../../live/tools/)
            -   [Sessions](../../../live/sessions/)
            -   [Events](../../../live/events/)
            -   [Audio and video](../../../live/audio-video/)
            -   [Configuration](../../../live/configuration/)
            
        -    Production
            
            Production
            
            -   [Guardrails](../../../live/guardrails/)
            -   [Evaluation](../../../live/evaluation/)
            -   [Build a custom server](../../../live/custom-server/)
            
        -   [Supported models](../../../live/models/)
        
    -   [Grounding](../../../grounding/)
        
        Grounding
        
        -   [Google Search Grounding](../../../grounding/google_search_grounding/)
        -   [Grounding with Search](../../../grounding/grounding_with_search/)
        
    
-   [Integrations](../../../integrations/)
    
    Integrations
    
-    Reference
    
    Reference
    
    -   [API Reference](../../../api-reference/)
        
        API Reference
        
        -   [Python ADK](../../../api-reference/python/)
        -   [TypeScript ADK](../../../api-reference/typescript/)
        -    Go ADK
            
            Go ADK
            
            -   [Go v2.x](https://pkg.go.dev/google.golang.org/adk/v2)
            -   [Go v1.x](https://pkg.go.dev/google.golang.org/adk)
            
        -   [Java ADK](../../../api-reference/java/)
        -   [Kotlin ADK](../../../api-reference/kotlin/)
        -   [CLI Reference](../../../api-reference/cli/)
        -   [Agent Config Reference](../../../api-reference/agentconfig/)
        -   [REST API](../../../api-reference/rest/)
        
    -   [Release Notes](../../../release-notes/)
    
-   [Community](../../../community/)
    
    Community
    
    -   [Contributing Guide](../../../community/contributing-guide/)
    
-   [ADK 2.0](../../../2.0/)
    
    ADK 2.0
    

Table of contents

-   [Get started](#get-started)
-   [Model choice](#model-choice)
-   [Use OpenAI provider](#use-openai-provider)
    
    -   [Debugging](#debugging)
    

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/ollama.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Ollama model host for ADK agents[¶](#ollama-model-host-for-adk-agents "Permanent link")

Supported in ADKPython v0.1.0

[Ollama](https://ollama.com/) is a tool that allows you to host and run open-source models locally. ADK integrates with Ollama-hosted models through the [LiteLLM](/agents/models/litellm/) model connector library.

## Get started[¶](#get-started "Permanent link")

Use the LiteLLM wrapper to create agents with Ollama-hosted models. The following code example shows a basic implementation for using Gemma open models with your agents:

`[](#__codelineno-0-1)root_agent = Agent(     [](#__codelineno-0-2)    model=LiteLlm(model="ollama_chat/gemma3:latest"),    [](#__codelineno-0-3)    name="dice_agent",    [](#__codelineno-0-4)    description=(        [](#__codelineno-0-5)        "hello world agent that can roll a dice of 8 sides and check prime"        [](#__codelineno-0-6)        " numbers."    [](#__codelineno-0-7)    ),    [](#__codelineno-0-8)    instruction="""      [](#__codelineno-0-9)      You roll dice and answer questions about the outcome of the dice rolls.    [](#__codelineno-0-10)    """,    [](#__codelineno-0-11)    tools=[        [](#__codelineno-0-12)        roll_die,        [](#__codelineno-0-13)        check_prime,    [](#__codelineno-0-14)    ], [](#__codelineno-0-15))`

Warning: Use `ollama_chat`interface

Make sure you set the provider `ollama_chat` instead of `ollama`. Using `ollama` can result in unexpected behaviors such as infinite tool call loops and ignoring previous context.

Use `OLLAMA_API_BASE` environment variable

Although you can specify the `api_base` parameter in LiteLLM for generation, as of v1.65.5, the library relies on the environment variable for other API calls. Therefore, you should set the `OLLAMA_API_BASE` environment variable for your Ollama server URL to ensure all requests are routed correctly.

`[](#__codelineno-1-1)export OLLAMA_API_BASE="http://localhost:11434" [](#__codelineno-1-2)adk web`

## Model choice[¶](#model-choice "Permanent link")

If your agent is relying on tools, make sure that you select a model with tool support from [Ollama website](https://ollama.com/search?c=tools). For reliable results, use a model with tool support. You can check tool support for the model using the following command:

`[](#__codelineno-2-1)ollama show mistral-small3.1   [](#__codelineno-2-2)  Model    [](#__codelineno-2-3)    architecture        mistral3    [](#__codelineno-2-4)    parameters          24.0B    [](#__codelineno-2-5)    context length      131072    [](#__codelineno-2-6)    embedding length    5120    [](#__codelineno-2-7)    quantization        Q4_K_M [](#__codelineno-2-8)  [](#__codelineno-2-9)  Capabilities    [](#__codelineno-2-10)    completion    [](#__codelineno-2-11)    vision    [](#__codelineno-2-12)    tools`

You should see **tools** listed under capabilities. You can also look at the template the model is using and tweak it based on your needs.

`[](#__codelineno-3-1)ollama show --modelfile llama3.2 > model_file_to_modify`

For instance, the default template for the above model inherently suggests that the model shall call a function all the time. This may result in an infinite loop of function calls.

`[](#__codelineno-4-1)Given the following functions, please respond with a JSON for a function call [](#__codelineno-4-2)with its proper arguments that best answers the given prompt. [](#__codelineno-4-3)[](#__codelineno-4-4)Respond in the format {"name": function name, "parameters": dictionary of [](#__codelineno-4-5)argument name and its value}. Do not use variables.`

You can swap such prompts with a more descriptive one to prevent infinite tool call loops, for instance:

`[](#__codelineno-5-1)Review the user's prompt and the available functions listed below. [](#__codelineno-5-2)[](#__codelineno-5-3)First, determine if calling one of these functions is the most appropriate way [](#__codelineno-5-4)to respond. A function call is likely needed if the prompt asks for a specific [](#__codelineno-5-5)action, requires external data lookup, or involves calculations handled by the [](#__codelineno-5-6)functions. If the prompt is a general question or can be answered directly, a [](#__codelineno-5-7)function call is likely NOT needed. [](#__codelineno-5-8)[](#__codelineno-5-9)If you determine a function call IS required: Respond ONLY with a JSON object in [](#__codelineno-5-10)the format {"name": "function_name", "parameters": {"argument_name": "value"}}. [](#__codelineno-5-11)Ensure parameter values are concrete, not variables. [](#__codelineno-5-12)[](#__codelineno-5-13)If you determine a function call IS NOT required: Respond directly to the user's [](#__codelineno-5-14)prompt in plain text, providing the answer or information requested. Do not [](#__codelineno-5-15)output any JSON.`

Then you can create a new model with the following command:

`[](#__codelineno-6-1)ollama create llama3.2-modified -f model_file_to_modify`

## Use OpenAI provider[¶](#use-openai-provider "Permanent link")

Alternatively, you can use `openai` as the provider name. This approach requires setting the `OPENAI_API_BASE=http://localhost:11434/v1` and `OPENAI_API_KEY=anything` env variables instead of `OLLAMA_API_BASE`. Note that the `API_BASE` value has *`/v1`* at the end.

`[](#__codelineno-7-1)root_agent = Agent(     [](#__codelineno-7-2)    model=LiteLlm(model="openai/mistral-small3.1"),    [](#__codelineno-7-3)    name="dice_agent",    [](#__codelineno-7-4)    description=(        [](#__codelineno-7-5)        "hello world agent that can roll a dice of 8 sides and check prime"        [](#__codelineno-7-6)        " numbers."    [](#__codelineno-7-7)    ),    [](#__codelineno-7-8)    instruction="""      [](#__codelineno-7-9)      You roll dice and answer questions about the outcome of the dice rolls.    [](#__codelineno-7-10)    """,    [](#__codelineno-7-11)    tools=[        [](#__codelineno-7-12)        roll_die,        [](#__codelineno-7-13)        check_prime,    [](#__codelineno-7-14)    ], [](#__codelineno-7-15))`

`[](#__codelineno-8-1)export OPENAI_API_BASE=http://localhost:11434/v1 [](#__codelineno-8-2)export OPENAI_API_KEY=anything [](#__codelineno-8-3)adk web`

### Debugging[¶](#debugging "Permanent link")

You can see the request sent to the Ollama server by adding the following in your agent code just after imports.

`[](#__codelineno-9-1)import litellm [](#__codelineno-9-2)litellm._turn_on_debug()`

Look for a line like the following:

`[](#__codelineno-10-1)Request Sent from LiteLLM: [](#__codelineno-10-2)curl -X POST \ [](#__codelineno-10-3)http://localhost:11434/api/chat \ [](#__codelineno-10-4)-d '{'model': 'mistral-small3.1', 'messages': [{'role': 'system', 'content': ...`

Back to top