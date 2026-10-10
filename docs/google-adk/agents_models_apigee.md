---
title: "Apigee AI Gateway - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/models/apigee/
date: 2026-10-10T19:16:25.066Z
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
        -    Apigee AI Gateway [Apigee AI Gateway](./)
            
            Table of contents
            
            -   [Implementation example](#implementation-example)
            -   [Compatibility with OpenAI](#compatibility-with-openai)
                
                -   [Implementation example](#implementation-example_1)
                
            
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

-   [Implementation example](#implementation-example)
-   [Compatibility with OpenAI](#compatibility-with-openai)
    
    -   [Implementation example](#implementation-example_1)
    

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Models for Agents](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/models/apigee.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Apigee AI Gateway for ADK agents[¶](#apigee-ai-gateway-for-adk-agents "Permanent link")

Supported in ADKPython v1.18.0Java v0.4.0

[Apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee) provides a powerful [AI Gateway](https://cloud.google.com/solutions/apigee-ai), transforming how you manage and govern your generative AI model traffic. By exposing your AI model endpoint (like Agent Platform or the Gemini API) through an Apigee proxy, you immediately gain enterprise-grade capabilities:

-   **Model Safety:** Implement security policies like Model Armor for threat protection.
    
-   **Traffic Governance:** Enforce Rate Limiting and Token Limiting to manage costs and prevent abuse.
    
-   **Performance:** Improve response times and efficiency using Semantic Caching and advanced model routing.
    
-   **Monitoring & Visibility:** Get granular monitoring, analysis, and auditing of all your AI requests.
    

The `ApigeeLlm` wrapper is designed for use with Agent Platform and the Gemini API (generateContent). We are continually expanding support for other models and interfaces. For OpenAI compatible models, including self-hosted or other providers, use the `CompletionsHTTPClient` to route traffic through your Apigee proxy.

## Implementation example[¶](#implementation-example "Permanent link")

Integrate Apigee's governance into your agent's workflow by instantiating the `ApigeeLlm` wrapper object and pass it to an `LlmAgent` or other agent type.

PythonJava

`[](#__codelineno-0-1)from google.adk.agents import LlmAgent [](#__codelineno-0-2)from google.adk.models.apigee_llm import ApigeeLlm [](#__codelineno-0-3)[](#__codelineno-0-4)# Instantiate the ApigeeLlm wrapper [](#__codelineno-0-5)model = ApigeeLlm(     [](#__codelineno-0-6)    # Specify the Apigee route to your model. For more info, check out the ApigeeLlm documentation (https://github.com/google/adk-python/tree/main/contributing/samples/models/hello_world_apigeellm).    [](#__codelineno-0-7)    model="apigee/gemini-flash-latest",    [](#__codelineno-0-8)    # The proxy URL of your deployed Apigee proxy including the base path    [](#__codelineno-0-9)    proxy_url=f"https://{APIGEE_PROXY_URL}",    [](#__codelineno-0-10)    # Pass necessary authentication/authorization headers (like an API key)    [](#__codelineno-0-11)    custom_headers={"foo": "bar"},    [](#__codelineno-0-12)    # Optional: Pass google-auth credentials if the proxy requires additional OAuth scopes    [](#__codelineno-0-13)    # credentials=my_credentials [](#__codelineno-0-14)) [](#__codelineno-0-15)[](#__codelineno-0-16)# Pass the configured model wrapper to your LlmAgent [](#__codelineno-0-17)agent = LlmAgent(     [](#__codelineno-0-18)    model=model,    [](#__codelineno-0-19)    name="my_governed_agent",    [](#__codelineno-0-20)    instruction="You are a helpful assistant powered by Gemini and governed by Apigee.",    [](#__codelineno-0-21)    # ... other agent parameters [](#__codelineno-0-22))`

`[](#__codelineno-1-1)import com.google.adk.agents.LlmAgent; [](#__codelineno-1-2)import com.google.adk.models.ApigeeLlm; [](#__codelineno-1-3)import com.google.common.collect.ImmutableMap; [](#__codelineno-1-4)[](#__codelineno-1-5)ApigeeLlm apigeeLlm =         [](#__codelineno-1-6)        ApigeeLlm.builder()            [](#__codelineno-1-7)            .modelName("apigee/gemini-flash-latest") // Specify the Apigee route to your model. For more info, check out the ApigeeLlm documentation            [](#__codelineno-1-8)            .proxyUrl(APIGEE_PROXY_URL) //The proxy URL of your deployed Apigee proxy including the base path            [](#__codelineno-1-9)            .customHeaders(ImmutableMap.of("foo", "bar")) //Pass necessary authentication/authorization headers (like an API key)            [](#__codelineno-1-10)            .build(); [](#__codelineno-1-11)LlmAgent agent =     [](#__codelineno-1-12)    LlmAgent.builder()        [](#__codelineno-1-13)        .model(apigeeLlm)        [](#__codelineno-1-14)        .name("my_governed_agent")        [](#__codelineno-1-15)        .description("my_governed_agent")        [](#__codelineno-1-16)        .instruction("You are a helpful assistant powered by Gemini and governed by Apigee.")        [](#__codelineno-1-17)        // tools will be added next        [](#__codelineno-1-18)        .build();`

With this configuration, every API call from your agent will be routed through Apigee first, where all necessary policies (security, rate limiting, logging) are executed before the request is securely forwarded to the underlying AI model endpoint. For a full code example using the Apigee proxy, see [Hello World Apigee LLM](https://github.com/google/adk-python/tree/main/contributing/samples/models/hello_world_apigeellm).

## Compatibility with OpenAI[¶](#compatibility-with-openai "Permanent link")

The `CompletionsHTTPClient` is a generic HTTP client designed for compatibility with the OpenAI API format. It allows you to route requests through proxies (such as Apigee) that expect standard OpenAI-compatible `/chat/completions` endpoints, rather than native Gemini or Vertex AI protocols. This client handles:

-   **Payload construction**: Converts LlmRequest objects into the format required by OpenAI-compatible APIs.
-   **Response handling**: Manages streaming and non-streaming responses from the proxy.
-   **Reliability**: Uses `tenacity` to retry non-streaming requests, but only when you pass `retry_options=types.HttpRetryOptions(...)` to the constructor. By default each request is attempted once, and streaming requests are never retried.
-   **Normalization**: Parses responses and streaming chunks into the standard format expected by the rest of the ADK framework.

### Implementation example[¶](#implementation-example_1 "Permanent link")

`[](#__codelineno-2-1)import asyncio [](#__codelineno-2-2)from google.adk.models.apigee_llm import CompletionsHTTPClient [](#__codelineno-2-3)from google.adk.models.llm_request import LlmRequest [](#__codelineno-2-4)from google.genai import types [](#__codelineno-2-5)[](#__codelineno-2-6)async def test_client():     [](#__codelineno-2-7)    # 1. Initialize the client    [](#__codelineno-2-8)    client = CompletionsHTTPClient(        [](#__codelineno-2-9)        base_url="https://your-apigee-proxy-url.com/v1",        [](#__codelineno-2-10)        headers={"Authorization": "Bearer YOUR_API_KEY"}    [](#__codelineno-2-11)    ) [](#__codelineno-2-12)    [](#__codelineno-2-13)    # 2. Construct a minimal request    [](#__codelineno-2-14)    request = LlmRequest(        [](#__codelineno-2-15)        model="gpt-4o",  # Replace with your target model ID        [](#__codelineno-2-16)        contents=[types.Content(role="user", parts=[types.Part.from_text(text="Hello!")])]    [](#__codelineno-2-17)    ) [](#__codelineno-2-18)    [](#__codelineno-2-19)    # 3. Execute a non-streaming generation    [](#__codelineno-2-20)    async for response in client.generate_content_async(request, stream=False):        [](#__codelineno-2-21)        if response.content and response.content.parts:            [](#__codelineno-2-22)            print(f"Response: {response.content.parts[0].text}") [](#__codelineno-2-23)[](#__codelineno-2-24)if __name__ == "__main__":     [](#__codelineno-2-25)    asyncio.run(test_client())`

Back to top