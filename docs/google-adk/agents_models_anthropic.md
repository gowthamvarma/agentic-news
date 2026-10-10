---
title: "Claude - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/anthropic/
date: 2026-10-10T19:16:24.764Z
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
        -    Claude [Claude](./)
            
            Table of contents
            
            -   [Python](#python)
            -   [Java](#java)
                
                -   [Get started](#get-started)
                -   [Prerequisites](#prerequisites)
                -   [Example implementation](#example-implementation)
                
            
        -   [Agent Platform hosted](../agent-platform/)
        -   [Apigee AI Gateway](../apigee/)
        -   [Model routing](../routing/)
        -   [OpenAI](../openai/)
        -   [Ollama](../ollama/)
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

-   [Python](#python)
-   [Java](#java)
    
    -   [Get started](#get-started)
    -   [Prerequisites](#prerequisites)
    -   [Example implementation](#example-implementation)
    

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/anthropic.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Claude models for ADK agents[¶](#claude-models-for-adk-agents "Permanent link")

Supported in ADKPython v0.1.0Java v0.2.0

You can use Anthropic's Claude models with ADK in both Python and Java. Choose the path that matches your language and backend below.

## Python[¶](#python "Permanent link")

You can use Claude models from Python in the following ways:

-   **Native, on Agent Platform:** Pass a Claude model string directly; ADK's registry routes it to the `Claude` wrapper. See [Anthropic Claude on Agent Platform](/agents/models/agent-platform/#anthropic-claude).
-   **Direct Anthropic API, via LiteLLM:** Use the `LiteLlm` connector with an Anthropic API key. See [LiteLLM](/agents/models/litellm/#anthropic-thinking-blocks).

## Java[¶](#java "Permanent link")

In Java, you can integrate Claude models directly using an Anthropic API key or an Agent Platform backend with the ADK `Claude` wrapper class. You can also access Claude through Google Cloud Agent Platform services; see [Third-Party Models on Agent Platform](/agents/models/agent-platform/#anthropic-claude).

### Get started[¶](#get-started "Permanent link")

The following code examples show a basic implementation for using Claude models in your agents:

`[](#__codelineno-0-1)public static LlmAgent createAgent() { [](#__codelineno-0-2)  [](#__codelineno-0-3)  AnthropicClient anthropicClient = AnthropicOkHttpClient.builder()      [](#__codelineno-0-4)      .apiKey("ANTHROPIC_API_KEY")      [](#__codelineno-0-5)      .build(); [](#__codelineno-0-6)  [](#__codelineno-0-7)  Claude claudeModel = new Claude(      [](#__codelineno-0-8)      "claude-sonnet-4-6", anthropicClient  [](#__codelineno-0-9)  ); [](#__codelineno-0-10)  [](#__codelineno-0-11)  return LlmAgent.builder()      [](#__codelineno-0-12)      .name("claude_direct_agent")      [](#__codelineno-0-13)      .model(claudeModel)      [](#__codelineno-0-14)      .instruction("You are a helpful AI assistant powered by Anthropic Claude.")      [](#__codelineno-0-15)      .build(); [](#__codelineno-0-16)}`

### Prerequisites[¶](#prerequisites "Permanent link")

-   **Dependencies:** The Java ADK's `com.google.adk.models.Claude` wrapper relies on classes from Anthropic's official Java SDK, typically included as *transitive dependencies*. For more information, see the [Anthropic Java SDK](https://github.com/anthropics/anthropic-sdk-java).
-   **Anthropic API key:** Obtain an API key from Anthropic, and securely manage it using a secret manager.

### Example implementation[¶](#example-implementation "Permanent link")

Instantiate `com.google.adk.models.Claude`, providing the desired Claude model name and an `AnthropicOkHttpClient` configured with your API key. Then, pass the `Claude` instance to your `LlmAgent`, as shown in the following example:

`[](#__codelineno-1-1)import com.anthropic.client.AnthropicClient; [](#__codelineno-1-2)import com.google.adk.agents.LlmAgent; [](#__codelineno-1-3)import com.google.adk.models.Claude; [](#__codelineno-1-4)import com.anthropic.client.okhttp.AnthropicOkHttpClient; // From Anthropic's SDK [](#__codelineno-1-5)[](#__codelineno-1-6)public class DirectAnthropicAgent { [](#__codelineno-1-7)  [](#__codelineno-1-8)  private static final String CLAUDE_MODEL_ID = "claude-sonnet-4-6"; // Or your preferred Claude model [](#__codelineno-1-9)  [](#__codelineno-1-10)  public static LlmAgent createAgent() { [](#__codelineno-1-11)    [](#__codelineno-1-12)    // It's recommended to load sensitive keys from a secure config    [](#__codelineno-1-13)    AnthropicClient anthropicClient = AnthropicOkHttpClient.builder()        [](#__codelineno-1-14)        .apiKey("ANTHROPIC_API_KEY")        [](#__codelineno-1-15)        .build(); [](#__codelineno-1-16)    [](#__codelineno-1-17)    Claude claudeModel = new Claude(        [](#__codelineno-1-18)        CLAUDE_MODEL_ID,        [](#__codelineno-1-19)        anthropicClient    [](#__codelineno-1-20)    ); [](#__codelineno-1-21)    [](#__codelineno-1-22)    return LlmAgent.builder()        [](#__codelineno-1-23)        .name("claude_direct_agent")        [](#__codelineno-1-24)        .model(claudeModel)        [](#__codelineno-1-25)        .instruction("You are a helpful AI assistant powered by Anthropic Claude.")        [](#__codelineno-1-26)        // ... other LlmAgent configurations        [](#__codelineno-1-27)        .build();  [](#__codelineno-1-28)  } [](#__codelineno-1-29)  [](#__codelineno-1-30)  public static void main(String[] args) {    [](#__codelineno-1-31)    try {      [](#__codelineno-1-32)      LlmAgent agent = createAgent();      [](#__codelineno-1-33)      System.out.println("Successfully created direct Anthropic agent: " + agent.name());    [](#__codelineno-1-34)    } catch (IllegalStateException e) {      [](#__codelineno-1-35)      System.err.println("Error creating agent: " + e.getMessage());    [](#__codelineno-1-36)    }  [](#__codelineno-1-37)  } [](#__codelineno-1-38)}`

Back to top