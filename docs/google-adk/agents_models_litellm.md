---
title: "LiteLLM - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/litellm/
date: 2026-10-10T19:16:25.517Z
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
        -   [vLLM](../vllm/)
        -    LiteLLM [LiteLLM](./)
            
            Table of contents
            
            -   [Setup](#setup)
            -   [Example implementation](#example-implementation)
            -   [Anthropic thinking blocks](#anthropic-thinking-blocks)
            
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
-   [Example implementation](#example-implementation)
-   [Anthropic thinking blocks](#anthropic-thinking-blocks)

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/litellm.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# LiteLLM model connector for ADK agents[¶](#litellm-model-connector-for-adk-agents "Permanent link")

Supported in ADKPython v0.1.0

ADK Python Security Advisory: LiteLLM supply chain compromise

Unauthorized code was identified in LiteLLM versions 1.82.7 and 1.82.8 on PyPI on March 24, 2026. If you use ADK Python with the `eval` or `extensions` extras, update to the latest version of ADK Python immediately. If you installed or upgraded LiteLLM during this period, rotate all secrets and credentials. For details and required actions, refer to the [ADK security advisory](https://github.com/google/adk-python/issues/5005) and [LiteLLM's Security Update: Suspected Supply Chain Incident](https://docs.litellm.ai/blog/security-update-march-2026).

[LiteLLM](https://docs.litellm.ai/) is a Python library that acts as a translation layer for models and model hosting services, providing a standardized, OpenAI-compatible interface to over 100+ LLMs. ADK provides integration through the LiteLLM library, allowing you to access a vast range of LLMs from providers such as OpenAI, Anthropic, Ollama, Mistral, DeepSeek, and Cohere, and many others. You can run open-source models locally or self-host them and integrate them using LiteLLM for operational control, cost savings, privacy, or offline use cases.

You can use the LiteLLM library to access remote or locally hosted AI models:

-   **Remote model host:** Use the `LiteLlm` wrapper class and set it as the `model` parameter of `LlmAgent`.
-   **Local model host:** Use the `LiteLlm` wrapper class configured to point to your local model server. For examples of local model hosting solutions, see the [Ollama](/agents/models/ollama/) or [vLLM](/agents/models/vllm/) documentation.

Windows Encoding with LiteLLM

When using ADK agents with LiteLLM on Windows, you might encounter a `UnicodeDecodeError`. This error occurs because LiteLLM may attempt to read cached files using the default Windows encoding (`cp1252`) instead of UTF-8. Prevent this error by setting the `PYTHONUTF8` environment variable to `1`. This forces Python to use UTF-8 for all file I/O.

**Example (PowerShell):**

`[](#__codelineno-0-1)# Set for the current session [](#__codelineno-0-2)$env:PYTHONUTF8 = "1" [](#__codelineno-0-3)[](#__codelineno-0-4)# Set persistently for the user [](#__codelineno-0-5)[System.Environment]::SetEnvironmentVariable('PYTHONUTF8', '1', [System.EnvironmentVariableTarget]::User)`

## Setup[¶](#setup "Permanent link")

1.  **Install LiteLLM:** ADK requires `litellm>=1.84`.
    
    `[](#__codelineno-1-1)pip install "litellm>=1.84"`
    
2.  **Set Provider API Keys:** Configure API keys as environment variables for the specific providers you intend to use.
    
    -   *Example for OpenAI:*
        
        `[](#__codelineno-2-1)export OPENAI_API_KEY="YOUR_OPENAI_API_KEY"`
        
    -   *Example for Anthropic (non-Agent Platform):*
        
        `[](#__codelineno-3-1)export ANTHROPIC_API_KEY="YOUR_ANTHROPIC_API_KEY"`
        
    -   *Consult the [LiteLLM Providers Documentation](https://docs.litellm.ai/docs/providers) for the correct environment variable names for other providers.*
        

## Example implementation[¶](#example-implementation "Permanent link")

`[](#__codelineno-4-1)from google.adk.agents import LlmAgent [](#__codelineno-4-2)from google.adk.models.lite_llm import LiteLlm [](#__codelineno-4-3)[](#__codelineno-4-4)# --- Example Agent using OpenAI's GPT-4o --- [](#__codelineno-4-5)# (Requires OPENAI_API_KEY) [](#__codelineno-4-6)agent_openai = LlmAgent(     [](#__codelineno-4-7)    model=LiteLlm(model="openai/gpt-4o"), # LiteLLM model string format    [](#__codelineno-4-8)    name="openai_agent",    [](#__codelineno-4-9)    instruction="You are a helpful assistant powered by GPT-4o.",    [](#__codelineno-4-10)    # ... other agent parameters [](#__codelineno-4-11)) [](#__codelineno-4-12)[](#__codelineno-4-13)# --- Example Agent using Anthropic's Claude Haiku (non-Vertex) --- [](#__codelineno-4-14)# (Requires ANTHROPIC_API_KEY) [](#__codelineno-4-15)agent_claude_direct = LlmAgent(     [](#__codelineno-4-16)    model=LiteLlm(model="anthropic/claude-3-haiku-20240307"),    [](#__codelineno-4-17)    name="claude_direct_agent",    [](#__codelineno-4-18)    instruction="You are an assistant powered by Claude Haiku.",    [](#__codelineno-4-19)    # ... other agent parameters [](#__codelineno-4-20))`

## Anthropic thinking blocks[¶](#anthropic-thinking-blocks "Permanent link")

Supported in ADKPython v1.28.0

When you use Anthropic Claude models (such as Claude 3.7 Sonnet) through the `LiteLlm` connector, ADK supports Anthropic's structured reasoning feature, known as "thinking blocks". ADK automatically extracts the `thinking_blocks` and their signatures.

Anthropic requires these signatures to be sent back in multi-turn conversations, and otherwise silently drops thinking after the first turn. ADK rebuilds the `thinking_blocks` with their signatures on each outbound request, so Claude's reasoning is preserved across tool calls and multi-turn interactions without any custom state management on your part.

Back to top