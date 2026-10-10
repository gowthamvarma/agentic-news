---
title: "vLLM - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/vllm/
date: 2026-10-10T19:16:26.042Z
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
        -   [Ollama](../ollama/)
        -    vLLM [vLLM](./)
            
            Table of contents
            
            -   [Setup](#setup)
            -   [Integration Example](#integration-example)
            
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

-   [Setup](#setup)
-   [Integration Example](#integration-example)

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/vllm.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# vLLM model host for ADK agents[¶](#vllm-model-host-for-adk-agents "Permanent link")

Supported in ADKPython v0.1.0

Tools such as [vLLM](https://github.com/vllm-project/vllm) allow you to host models efficiently and serve them as an OpenAI-compatible API endpoint. You can use vLLM models through the [LiteLLM](/agents/models/litellm/) library for Python.

## Setup[¶](#setup "Permanent link")

1.  **Deploy Model:** Deploy your chosen model using vLLM (or a similar tool). Note the API base URL (e.g., `https://your-vllm-endpoint.run.app/v1`).
    -   *Important for ADK Tools:* When deploying, ensure the serving tool supports and enables OpenAI-compatible tool/function calling. For vLLM, this might involve flags like `--enable-auto-tool-choice` and potentially a specific `--tool-call-parser`, depending on the model. Refer to the vLLM documentation on Tool Use.
2.  **Authentication:** Determine how your endpoint handles authentication (e.g., API key, bearer token).

## Integration Example[¶](#integration-example "Permanent link")

The following example shows how to use a vLLM endpoint with ADK agents.

`[](#__codelineno-0-1)import subprocess [](#__codelineno-0-2)from google.adk.agents import LlmAgent [](#__codelineno-0-3)from google.adk.models.lite_llm import LiteLlm [](#__codelineno-0-4)[](#__codelineno-0-5)# --- Example Agent using a Gemma 4 model hosted on a vLLM endpoint --- [](#__codelineno-0-6)[](#__codelineno-0-7)# Endpoint URL provided by your vLLM deployment [](#__codelineno-0-8)api_base_url = "https://your-vllm-endpoint.run.app/v1" [](#__codelineno-0-9)[](#__codelineno-0-10)# Model name as recognized by *your* vLLM endpoint configuration [](#__codelineno-0-11)model_name_at_endpoint = "hosted_vllm/google/gemma-4-E4B-it" # Example from vllm_test.py [](#__codelineno-0-12)[](#__codelineno-0-13)# Authentication (Example: using gcloud identity token for a Cloud Run deployment) [](#__codelineno-0-14)# Adapt this based on your endpoint's security [](#__codelineno-0-15)try:     [](#__codelineno-0-16)    gcloud_token = subprocess.check_output(        [](#__codelineno-0-17)        ["gcloud", "auth", "print-identity-token", "-q"]    [](#__codelineno-0-18)    ).decode().strip()    [](#__codelineno-0-19)    auth_headers = {"Authorization": f"Bearer {gcloud_token}"} [](#__codelineno-0-20)except Exception as e:     [](#__codelineno-0-21)    print(f"Warning: Could not get gcloud token - {e}. Endpoint might be unsecured or require different auth.")    [](#__codelineno-0-22)    auth_headers = None # Or handle error appropriately [](#__codelineno-0-23)[](#__codelineno-0-24)agent_vllm = LlmAgent(     [](#__codelineno-0-25)    model=LiteLlm(        [](#__codelineno-0-26)        model=model_name_at_endpoint,        [](#__codelineno-0-27)        api_base=api_base_url,        [](#__codelineno-0-28)        # This extra_body values specific to Gemma 4.        [](#__codelineno-0-29)        extra_body={            [](#__codelineno-0-30)            "chat_template_kwargs": {                [](#__codelineno-0-31)                "enable_thinking": True # Enable thinking            [](#__codelineno-0-32)            },            [](#__codelineno-0-33)            "skip_special_tokens": False # Should be set to False        [](#__codelineno-0-34)        },        [](#__codelineno-0-35)        # Pass authentication headers if needed        [](#__codelineno-0-36)        extra_headers=auth_headers,        [](#__codelineno-0-37)        # Alternatively, if endpoint uses an API key:        [](#__codelineno-0-38)        # api_key="YOUR_ENDPOINT_API_KEY"    [](#__codelineno-0-39)    ),    [](#__codelineno-0-40)    name="vllm_agent",    [](#__codelineno-0-41)    instruction="You are a helpful assistant running on a self-hosted vLLM endpoint.",    [](#__codelineno-0-42)    # ... other agent parameters [](#__codelineno-0-43))`

Back to top