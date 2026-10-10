---
title: "Callback patterns - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/callbacks/design-patterns-and-best-practices/
date: 2026-10-10T19:16:27.730Z
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
        
        -   [Callbacks](../)
            
            Callbacks
            
            -   [Types of callbacks](../types-of-callbacks/)
            -    Callback patterns [Callback patterns](./)
                
                Table of contents
                
                -   [Design Patterns](#design-patterns)
                    
                    -   [1\. Guardrails & Policy Enforcement](#guardrails-policy-enforcement)
                    -   [2\. Dynamic State Management](#dynamic-state-management)
                    -   [3\. Logging and Monitoring](#logging-and-monitoring)
                    -   [4\. Caching](#caching)
                    -   [5\. Request/Response Modification](#request-response-modification)
                    -   [6\. Conditional Skipping of Steps](#conditional-skipping-of-steps)
                    -   [7\. Tool-Specific Actions (Authentication & Summarization Control)](#tool-specific-actions-authentication-summarization-control)
                    -   [8\. Artifact Handling](#artifact-handling)
                    
                -   [Best Practices for Callbacks](#best-practices-for-callbacks)
                    
                    -   [Design Principles](#design-principles)
                    -   [Error Handling](#error-handling)
                    -   [State Management](#state-management)
                    -   [Reliability](#reliability)
                    -   [Testing & Documentation](#testing-documentation)
                    
                
            
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

-   [Design Patterns](#design-patterns)
    
    -   [1\. Guardrails & Policy Enforcement](#guardrails-policy-enforcement)
    -   [2\. Dynamic State Management](#dynamic-state-management)
    -   [3\. Logging and Monitoring](#logging-and-monitoring)
    -   [4\. Caching](#caching)
    -   [5\. Request/Response Modification](#request-response-modification)
    -   [6\. Conditional Skipping of Steps](#conditional-skipping-of-steps)
    -   [7\. Tool-Specific Actions (Authentication & Summarization Control)](#tool-specific-actions-authentication-summarization-control)
    -   [8\. Artifact Handling](#artifact-handling)
    
-   [Best Practices for Callbacks](#best-practices-for-callbacks)
    
    -   [Design Principles](#design-principles)
    -   [Error Handling](#error-handling)
    -   [State Management](#state-management)
    -   [Reliability](#reliability)
    -   [Testing & Documentation](#testing-documentation)
    

1.  [Home](../..)
2.  [Components](../../get-started/about/)
3.  [App management](../../apps/)
4.  [Callbacks](../)

[](https://github.com/google/adk-docs/edit/main/docs/callbacks/design-patterns-and-best-practices.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Design Patterns and Best Practices for Callbacks[¶](#design-patterns-and-best-practices-for-callbacks "Permanent link")

Callbacks offer powerful hooks into the agent lifecycle. Here are common design patterns illustrating how to leverage them effectively in ADK, followed by best practices for implementation.

## Design Patterns[¶](#design-patterns "Permanent link")

These patterns demonstrate typical ways to enhance or control agent behavior using callbacks:

### 1\. Guardrails & Policy Enforcement[¶](#guardrails-policy-enforcement "Permanent link")

**Pattern Overview:** Intercept requests before they reach the LLM or tools to enforce rules.

**Implementation:** - Use `before_model_callback` to inspect the `LlmRequest` prompt - Use `before_tool_callback` to inspect tool arguments - If a policy violation is detected (e.g., forbidden topics, profanity): - Return a predefined response (`LlmResponse` or `dict`/`Map`) to block the operation - Optionally update `context.state` to log the violation

**Example Use Case:** A `before_model_callback` checks `llm_request.contents` for sensitive keywords and returns a standard "Cannot process this request" `LlmResponse` if found, preventing the LLM call.

### 2\. Dynamic State Management[¶](#dynamic-state-management "Permanent link")

**Pattern Overview:** Read from and write to session state within callbacks to make agent behavior context-aware and pass data between steps.

**Implementation:** - Access `callback_context.state` or `tool_context.state` - Modifications (`state['key'] = value`) are automatically tracked in the subsequent `Event.actions.state_delta` - Changes are persisted by the `SessionService`

**Example Use Case:** An `after_tool_callback` saves a `transaction_id` from the tool's result to `tool_context.state['last_transaction_id']`. A later `before_agent_callback` might read `state['user_tier']` to customize the agent's greeting.

### 3\. Logging and Monitoring[¶](#logging-and-monitoring "Permanent link")

**Pattern Overview:** Add detailed logging at specific lifecycle points for observability and debugging.

**Implementation:** - Implement callbacks (e.g., `before_agent_callback`, `after_tool_callback`, `after_model_callback`) - Print or send structured logs containing: - Agent name - Tool name - Invocation ID - Relevant data from the context or arguments

**Example Use Case:** Log messages like `INFO: [Invocation: e-123] Before Tool: search_api - Args: {'query': 'ADK'}`.

### 4\. Caching[¶](#caching "Permanent link")

**Pattern Overview:** Avoid redundant LLM calls or tool executions by caching results.

**Implementation Steps:** 1. **Before Operation:** In `before_model_callback` or `before_tool_callback`: - Generate a cache key based on the request/arguments - Check `context.state` (or an external cache) for this key - If found, return the cached `LlmResponse` or result directly

1.  **After Operation:** If cache miss occurred:
2.  Use the corresponding `after_` callback to store the new result in the cache using the key

**Example Use Case:** `before_tool_callback` for `get_stock_price(symbol)` checks `state[f"cache:stock:{symbol}"]`. If present, returns the cached price; otherwise, allows the API call and `after_tool_callback` saves the result to the state key.

### 5\. Request/Response Modification[¶](#request-response-modification "Permanent link")

**Pattern Overview:** Alter data just before it's sent to the LLM/tool or just after it's received.

**Implementation Options:** - **`before_model_callback`:** Modify `llm_request` (e.g., add system instructions based on `state`) - **`after_model_callback`:** Modify the returned `LlmResponse` (e.g., format text, filter content) - **`before_tool_callback`:** Modify the tool `args` dictionary (or Map in Java) - **`after_tool_callback`:** Modify the `tool_response`, the tool's raw return value (or Map in Java)

**Example Use Case:** `before_model_callback` appends "User language preference: Spanish" to `llm_request.config.system_instruction` if `context.state['lang'] == 'es'`.

### 6\. Conditional Skipping of Steps[¶](#conditional-skipping-of-steps "Permanent link")

**Pattern Overview:** Prevent standard operations (agent run, LLM call, tool execution) based on certain conditions.

**Implementation:** - Return a value from a `before_` callback to skip the normal execution: - `Content` from `before_agent_callback` - `LlmResponse` from `before_model_callback` - `dict` from `before_tool_callback` - The framework interprets this returned value as the result for that step

**Example Use Case:** `before_tool_callback` checks `tool_context.state['api_quota_exceeded']`. If `True`, it returns `{'error': 'API quota exceeded'}`, preventing the actual tool function from running.

### 7\. Tool-Specific Actions (Authentication & Summarization Control)[¶](#tool-specific-actions-authentication-summarization-control "Permanent link")

**Pattern Overview:** Handle actions specific to the tool lifecycle, primarily authentication and controlling LLM summarization of tool results.

**Implementation:** Use `ToolContext` within tool callbacks (`before_tool_callback`, `after_tool_callback`):

-   **Authentication:** Call `tool_context.request_credential(auth_config)` in `before_tool_callback` if credentials are required but not found (e.g., via `tool_context.get_auth_response` or state check). This initiates the auth flow.
-   **Summarization:** Set `tool_context.actions.skip_summarization = True` if the raw dictionary output of the tool should be passed back to the LLM or potentially displayed directly, bypassing the default LLM summarization step.

**Example Use Case:** A `before_tool_callback` for a secure API checks for an auth token in state; if missing, it calls `request_credential`. An `after_tool_callback` for a tool returning structured JSON might set `skip_summarization = True`.

### 8\. Artifact Handling[¶](#artifact-handling "Permanent link")

**Pattern Overview:** Save or load session-related files or large data blobs during the agent lifecycle.

**Implementation:** - **Saving:** Use `await callback_context.save_artifact` / `await tool_context.save_artifact` to store data: - Generated reports - Logs - Intermediate data - **Loading:** Use `await callback_context.load_artifact` / `await tool_context.load_artifact` to retrieve previously stored artifacts - **Tracking:** Changes are tracked via `Event.actions.artifact_delta`

**Example Use Case:** An `after_tool_callback` for a "generate\_report" tool saves the output file using `await tool_context.save_artifact("report.pdf", report_part)`. A `before_agent_callback` might load a configuration artifact using `await callback_context.load_artifact("agent_config.json")`.

## Best Practices for Callbacks[¶](#best-practices-for-callbacks "Permanent link")

### Design Principles[¶](#design-principles "Permanent link")

**Keep Focused:** Design each callback for a single, well-defined purpose (e.g., just logging, just validation). Avoid monolithic callbacks.

**Mind Performance:** Callbacks execute inline within the agent's processing loop, and the loop waits for each one to finish. In Python, declare a callback `async def` when it must `await` something itself, such as `save_artifact`; ADK awaits it. Either way, avoid long-running or blocking operations, such as network calls or heavy computation. Offload if necessary, but be aware this adds complexity.

### Error Handling[¶](#error-handling "Permanent link")

**Handle Errors Gracefully:** - Use `try...except/catch` blocks within your callback functions - Log errors appropriately - Decide if the agent invocation should halt or attempt recovery - Don't let callback errors crash the entire process

### State Management[¶](#state-management "Permanent link")

**Manage State Carefully:** - Be deliberate about reading from and writing to `context.state` - Changes are immediately visible within the *current* invocation and persisted at the end of the event processing - Use specific state keys rather than modifying broad structures to avoid unintended side effects - Consider using state prefixes (`State.APP_PREFIX`, `State.USER_PREFIX`, `State.TEMP_PREFIX`) for clarity, especially with persistent `SessionService` implementations

### Reliability[¶](#reliability "Permanent link")

**Consider Idempotency:** If a callback performs actions with external side effects (e.g., incrementing an external counter), design it to be idempotent (safe to run multiple times with the same input) if possible, to handle potential retries in the framework or your application.

### Testing & Documentation[¶](#testing-documentation "Permanent link")

**Test Thoroughly:** - Unit test your callback functions using mock context objects - Perform integration tests to ensure callbacks function correctly within the full agent flow

**Ensure Clarity:** - Use descriptive names for your callback functions - Add clear docstrings explaining their purpose, when they run, and any side effects (especially state modifications)

**Use Correct Context Type:** Use the context type your SDK documents for the hook you are implementing. In Python, a unified `Context` type supersedes `CallbackContext` and `ToolContext`, so prefer `Context` for new code; the older names remain for backward compatibility and you may still encounter them in existing code. See [Context objects](../../context/) for the full set of context types.

By applying these patterns and best practices, you can effectively use callbacks to create more robust, observable, and customized agent behaviors in ADK.

Back to top