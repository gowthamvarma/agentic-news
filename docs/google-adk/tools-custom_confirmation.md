---
title: "Action confirmations - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/confirmation/
date: 2026-10-10T19:17:02.408Z
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
    -   [Custom Tools](../)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../function-tools/)
            -   [Tool performance](../performance/)
            -    Action confirmations [Action confirmations](./)
                
                Table of contents
                
                -   [Boolean confirmation](#boolean-confirmation)
                    
                    -   [Require confirmation function](#require-confirmation-function)
                    
                -   [Advanced confirmation](#advanced-confirmation)
                    
                    -   [Confirmation definition](#confirmation-definition)
                    
                -   [Remote confirmation with REST API](#remote-response)
                -   [Known limitations](#known-limitations)
                -   [Next steps](#next-steps)
                
            
        -   [MCP tools](../mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../mcp-tools/advanced/)
            -   [Deployment](../mcp-tools/deployment/)
            -   [Agent as MCP server](../mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../openapi-tools/)
        -   [Authentication](../authentication/)
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

-   [Boolean confirmation](#boolean-confirmation)
    
    -   [Require confirmation function](#require-confirmation-function)
    
-   [Advanced confirmation](#advanced-confirmation)
    
    -   [Confirmation definition](#confirmation-definition)
    
-   [Remote confirmation with REST API](#remote-response)
-   [Known limitations](#known-limitations)
-   [Next steps](#next-steps)

1.  [Home](../..)
2.  [Components](../../get-started/about/)
3.  [Custom Tools](../)
4.  [Function tools](../function-tools/)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/confirmation.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Get action confirmation for ADK Tools[¶](#get-action-confirmation-for-adk-tools "Permanent link")

Supported in ADKPython v1.14.0TypeScript v0.2.0Go v0.3.0Kotlin v0.1.0Experimental

Some agent workflows require confirmation for decision making, verification, security, or general oversight. In these cases, you want to get a response from a human or supervising system before proceeding with a workflow. The *Tool Confirmation* feature in the Agent Development Kit (ADK) allows an ADK Tool to pause its execution and interact with a user or other system for confirmation or to gather structured data before proceeding. You can use Tool Confirmation with an ADK Tool in the following ways:

-   **[Boolean Confirmation](#boolean-confirmation):** You can configure a tool with a confirmation flag or provider. This option pauses the tool for a yes or no confirmation response.
-   **[Advanced Confirmation](#advanced-confirmation):** For scenarios requiring structured data responses, you can configure a tool with a text prompt to explain the confirmation and an expected response.

Experimental

The Tool Confirmation feature is experimental and has some [known limitations](#known-limitations). We welcome your [feedback](https://github.com/google/adk-python/issues/new?template=feature_request.md&labels=tool%20confirmation)!

You can configure how a request is communicated to a user, and the system can also use [remote responses](#remote-response) sent via the ADK server's REST API. When using the confirmation feature with the ADK web user interface, the agent workflow displays a dialog box to the user to request input, as shown in Figure 1:

![Screenshot of default user interface for tool confirmation](./images/img_11df0b4eb5.png)

**Figure 1.** Example confirmation response request dialog box using an advanced, tool response implementation.

The following sections describe how to use this feature for the confirmation scenarios. For a complete code sample, see the [human\_tool\_confirmation](https://github.com/google/adk-python/blob/fc90ce968f114f84b14829f8117797a4c256d710/contributing/samples/human_tool_confirmation/agent.py) example. There are additional ways to incorporate human input into your agent workflow, for more details, see the [Human-in-the-loop](/workflows/patterns/#human-in-the-loop) agent pattern.

## Boolean confirmation[¶](#boolean-confirmation "Permanent link")

When your tool only requires a simple `yes` or `no` from the user, you can append a confirmation step. In Python, Go, and Java, you can enable this by wrapping the tool with the `FunctionTool` class and setting the `require_confirmation` parameter (or equivalent) to `True`. In Kotlin, you set `requireConfirmation = true` on the tool function's `@Tool` annotation. In TypeScript, you implement this logic manually within the `execute` function using the `ToolContext`.

The following examples show how to enable boolean confirmation:

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-0-1)root_agent = Agent(     [](#__codelineno-0-2)    # ...    [](#__codelineno-0-3)    tools = [        [](#__codelineno-0-4)        # Set require_confirmation to True to require user confirmation        [](#__codelineno-0-5)        # for the tool call.        [](#__codelineno-0-6)        FunctionTool(reimburse, require_confirmation=True),    [](#__codelineno-0-7)    ],    [](#__codelineno-0-8)    # ... [](#__codelineno-0-9)) [](#__codelineno-0-10)[](#__codelineno-0-11)# This implementation method requires minimal code, but is limited to simple [](#__codelineno-0-12)# approvals from the user or confirming system. For a complete example of this [](#__codelineno-0-13)# approach, see the following code sample for a more detailed example: [](#__codelineno-0-14)# https://github.com/google/adk-python/blob/main/contributing/samples/hitl/human_tool_confirmation/agent.py`

Note

ADK for TypeScript currently requires manual implementation of confirmation logic within the tool's `execute` function.

``[](#__codelineno-1-1)/**  [](#__codelineno-1-2) * A reimbursement tool with dynamic confirmation logic. [](#__codelineno-1-3) */ [](#__codelineno-1-4)export const reimburseTool = new FunctionTool({   [](#__codelineno-1-5)  name: 'reimburse',  [](#__codelineno-1-6)  description: 'Reimburse an amount. Large amounts (>1000) require manager approval.',  [](#__codelineno-1-7)  parameters: z.object({    [](#__codelineno-1-8)    amount: z.coerce.number().describe('The amount to reimburse.'),  [](#__codelineno-1-9)  }),  [](#__codelineno-1-10)  execute: async ({amount}, toolContext) => {    [](#__codelineno-1-11)    // 1. Check if we already have a confirmed response.    [](#__codelineno-1-12)    if (toolContext?.toolConfirmation?.confirmed) {      [](#__codelineno-1-13)      const isLarge = amount > 1000;      [](#__codelineno-1-14)      return {        [](#__codelineno-1-15)        status: 'SUCCESS',        [](#__codelineno-1-16)        message: isLarge          [](#__codelineno-1-17)          ? `Large reimbursement of ${amount} approved by manager and processed.`          [](#__codelineno-1-18)          : `Reimbursement of ${amount} has been successfully processed.`,      [](#__codelineno-1-19)      };    [](#__codelineno-1-20)    } [](#__codelineno-1-21)    [](#__codelineno-1-22)    // 2. Request a tool confirmation.    [](#__codelineno-1-23)    const isLarge = amount > 1000;    [](#__codelineno-1-24)    toolContext?.requestConfirmation({      [](#__codelineno-1-25)      hint: isLarge        [](#__codelineno-1-26)        ? `The amount ${amount} exceeds the $1000 limit and requires manager approval.`        [](#__codelineno-1-27)        : `Do you want to reimburse ${amount}?`,      [](#__codelineno-1-28)      payload: {amount},    [](#__codelineno-1-29)    }); [](#__codelineno-1-30)    [](#__codelineno-1-31)    // 3. Return a status that tells the agent we are waiting.    [](#__codelineno-1-32)    // Note: The model won't see this until the turn resumes after confirmation.    [](#__codelineno-1-33)    return {      [](#__codelineno-1-34)      status: isLarge ? 'AWAITING_MANAGER_APPROVAL' : 'AWAITING_CONFIRMATION',      [](#__codelineno-1-35)      message: 'This request requires approval to proceed.',    [](#__codelineno-1-36)    };  [](#__codelineno-1-37)  }, [](#__codelineno-1-38)}); [](#__codelineno-1-39)[](#__codelineno-1-40)export const rootAgent = new LlmAgent({   [](#__codelineno-1-41)  name: 'Finance_Assistant',  [](#__codelineno-1-42)  model: 'gemini-flash-latest',  [](#__codelineno-1-43)  instruction: `You are a Finance Assistant.  [](#__codelineno-1-44)  - You MUST use the 'reimburse' tool for ALL reimbursement requests.  [](#__codelineno-1-45)  - MANDATORY: Every tool call MUST be accompanied by a text response in the same message.  [](#__codelineno-1-46)  - THRESHOLD LOGIC:    [](#__codelineno-1-47)    - For amounts <= 1000: Say "I am initiating the reimbursement request for [amount]. Please confirm it to proceed."    [](#__codelineno-1-48)    - For amounts > 1000: Say "I am initiating the reimbursement request for [amount]. Since this exceeds $1000, manager approval is required. Please confirm the request to submit it for review."  [](#__codelineno-1-49)  - EXAMPLES:    [](#__codelineno-1-50)    User: "Reimburse me $45"    [](#__codelineno-1-51)    Model: "I am initiating the reimbursement request for 45. Please confirm it to proceed." [Tool Call: reimburse(amount=45)] [](#__codelineno-1-52)    [](#__codelineno-1-53)    User: "Reimburse me $2500"    [](#__codelineno-1-54)    Model: "I am initiating the reimbursement request for 2500. Since this exceeds $1000, manager approval is required. Please confirm the request to submit it for review." [Tool Call: reimburse(amount=2500)]  [](#__codelineno-1-55)  - If the user provides a currency symbol (like $), ignore it and pass only the number to the tool.  [](#__codelineno-1-56)  - In the Web UI, the user will see a 'Confirm' button. In the terminal, the user should simulate a confirmation response.`,  [](#__codelineno-1-57)  tools: [reimburseTool], [](#__codelineno-1-58)});``

`[](#__codelineno-2-1)reimburseTool, _ := functiontool.New(functiontool.Config{     [](#__codelineno-2-2)    Name:        "reimburse",    [](#__codelineno-2-3)    Description: "Reimburse an amount",    [](#__codelineno-2-4)    // Set RequireConfirmation to true to require user confirmation    [](#__codelineno-2-5)    // for the tool call.    [](#__codelineno-2-6)    RequireConfirmation: true, [](#__codelineno-2-7)}, func(ctx agent.Context, args ReimburseArgs) (ReimburseResult, error) {     [](#__codelineno-2-8)    // actual implementation    [](#__codelineno-2-9)    return ReimburseResult{Status: "ok"}, nil [](#__codelineno-2-10)}) [](#__codelineno-2-11)[](#__codelineno-2-12)rootAgent, _ := llmagent.New(llmagent.Config{     [](#__codelineno-2-13)    // ...    [](#__codelineno-2-14)    Tools: []tool.Tool{reimburseTool}, [](#__codelineno-2-15)})`

`[](#__codelineno-3-1)LlmAgent rootAgent = LlmAgent.builder()     [](#__codelineno-3-2)    // ...    [](#__codelineno-3-3)    .tools(        [](#__codelineno-3-4)        // Set requireConfirmation to true to require user confirmation        [](#__codelineno-3-5)        // for the tool call.        [](#__codelineno-3-6)        FunctionTool.create(myClassInstance, "reimburse", true)    [](#__codelineno-3-7)    )    [](#__codelineno-3-8)    // ...    [](#__codelineno-3-9)    .build();`

`[](#__codelineno-4-1)class ReimbursementTools {     [](#__codelineno-4-2)    /** Reimburse an amount. */    [](#__codelineno-4-3)    @Tool(requireConfirmation = true) // Pause for user confirmation before every call.    [](#__codelineno-4-4)    fun reimburse(        [](#__codelineno-4-5)        @Param("The amount to reimburse.") amount: Int,    [](#__codelineno-4-6)    ): Map<String, Any?> = mapOf("status" to "ok", "reimbursedAmount" to amount) [](#__codelineno-4-7)} [](#__codelineno-4-8)[](#__codelineno-4-9)val reimbursementAgent =     [](#__codelineno-4-10)    LlmAgent(        [](#__codelineno-4-11)        name = "reimbursement_agent",        [](#__codelineno-4-12)        model = Gemini(name = "gemini-flash-latest"),        [](#__codelineno-4-13)        tools = ReimbursementTools().generatedTools(),    [](#__codelineno-4-14)    )`

### Require confirmation function[¶](#require-confirmation-function "Permanent link")

You can modify the behavior of the confirmation requirement by using a function that returns a boolean response based on the tool's input. In TypeScript, this is handled by adding conditional logic to your `execute` function. In Kotlin, the `@Tool` annotation's flag is a compile-time constant, so the conditional logic goes inside the tool function.

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-5-1)async def confirmation_threshold(     [](#__codelineno-5-2)    amount: int, tool_context: ToolContext [](#__codelineno-5-3)) -> bool:   [](#__codelineno-5-4)  """Returns true if the amount is greater than 1000."""  [](#__codelineno-5-5)  return amount > 1000 [](#__codelineno-5-6)[](#__codelineno-5-7)root_agent = Agent(     [](#__codelineno-5-8)    # ...    [](#__codelineno-5-9)    tools = [        [](#__codelineno-5-10)        # Pass the threshold function to dynamically require confirmation        [](#__codelineno-5-11)        FunctionTool(reimburse, require_confirmation=confirmation_threshold),    [](#__codelineno-5-12)    ],    [](#__codelineno-5-13)    # ... [](#__codelineno-5-14))`

`[](#__codelineno-6-1)/*    [](#__codelineno-6-2)  Note: In TypeScript, dynamic threshold logic is implemented  [](#__codelineno-6-3)  directly within the tool's 'execute' function as shown above. [](#__codelineno-6-4)*/`

`[](#__codelineno-7-1)reimburseTool, _ := functiontool.New(functiontool.Config{     [](#__codelineno-7-2)    Name:        "reimburse",    [](#__codelineno-7-3)    Description: "Reimburse an amount",    [](#__codelineno-7-4)    // RequireConfirmationProvider allows for dynamic determination    [](#__codelineno-7-5)    // of whether user confirmation is needed.    [](#__codelineno-7-6)    RequireConfirmationProvider: func(args ReimburseArgs) bool {        [](#__codelineno-7-7)        return args.Amount > 1000    [](#__codelineno-7-8)    }, [](#__codelineno-7-9)}, func(ctx agent.Context, args ReimburseArgs) (ReimburseResult, error) {     [](#__codelineno-7-10)    // actual implementation    [](#__codelineno-7-11)    return ReimburseResult{Status: "ok"}, nil [](#__codelineno-7-12)})`

`[](#__codelineno-8-1)// In ADK Java, dynamic threshold confirmation logic is evaluated directly [](#__codelineno-8-2)// inside the tool logic using the ToolContext rather than via a lambda parameter. [](#__codelineno-8-3)public Map<String, Object> reimburse(     [](#__codelineno-8-4)    @Schema(name="amount") int amount, ToolContext toolContext) { [](#__codelineno-8-5)  [](#__codelineno-8-6)  // 1. Dynamic threshold check  [](#__codelineno-8-7)  if (amount > 1000) {    [](#__codelineno-8-8)    Optional<ToolConfirmation> toolConfirmation = toolContext.toolConfirmation();    [](#__codelineno-8-9)    if (toolConfirmation.isEmpty()) {       [](#__codelineno-8-10)       toolContext.requestConfirmation("Amount > 1000 requires approval.");       [](#__codelineno-8-11)       return Map.of("status", "Pending manager approval.");    [](#__codelineno-8-12)    } else if (!toolConfirmation.get().confirmed()) {       [](#__codelineno-8-13)       return Map.of("status", "Reimbursement rejected.");    [](#__codelineno-8-14)    }  [](#__codelineno-8-15)  } [](#__codelineno-8-16)  [](#__codelineno-8-17)  // 2. Proceed with actual tool logic  [](#__codelineno-8-18)  return Map.of("status", "ok", "reimbursedAmount", amount); [](#__codelineno-8-19)} [](#__codelineno-8-20)[](#__codelineno-8-21)LlmAgent rootAgent = LlmAgent.builder()     [](#__codelineno-8-22)    // ...    [](#__codelineno-8-23)    .tools(        [](#__codelineno-8-24)        // No requireConfirmation flag is set because the custom threshold        [](#__codelineno-8-25)        // logic is already handled inside the method!        [](#__codelineno-8-26)        FunctionTool.create(this, "reimburse")    [](#__codelineno-8-27)    )    [](#__codelineno-8-28)    // ...    [](#__codelineno-8-29)    .build();`

`[](#__codelineno-9-1)class ReimbursementTools {     [](#__codelineno-9-2)    /** Reimburse an amount, requiring manager approval above a threshold. */    [](#__codelineno-9-3)    @Tool    [](#__codelineno-9-4)    fun reimburse(        [](#__codelineno-9-5)        context: ToolContext,        [](#__codelineno-9-6)        @Param("The amount to reimburse.") amount: Int,    [](#__codelineno-9-7)    ): Map<String, Any?> {        [](#__codelineno-9-8)        // The @Tool annotation's requireConfirmation flag is a compile-time constant,        [](#__codelineno-9-9)        // so the threshold is evaluated here using the ToolContext instead.        [](#__codelineno-9-10)        if (amount > 1000) {            [](#__codelineno-9-11)            val confirmation = context.toolConfirmation            [](#__codelineno-9-12)            if (confirmation == null) {                [](#__codelineno-9-13)                context.requestConfirmation(hint = "Amount > 1000 requires approval.")                [](#__codelineno-9-14)                // Return an intermediate status while the confirmation is pending.                [](#__codelineno-9-15)                return mapOf("status" to "Pending manager approval.")            [](#__codelineno-9-16)            }            [](#__codelineno-9-17)            if (!confirmation.confirmed) {                [](#__codelineno-9-18)                return mapOf("status" to "Reimbursement rejected.")            [](#__codelineno-9-19)            }        [](#__codelineno-9-20)        }        [](#__codelineno-9-21)        return mapOf("status" to "ok", "reimbursedAmount" to amount)    [](#__codelineno-9-22)    } [](#__codelineno-9-23)}`

Note

The `@Tool` annotation's `requireConfirmation` flag is a compile-time constant, so a threshold is evaluated inside the tool using the `ToolContext`, as in ADK Java.

## Advanced confirmation[¶](#advanced-confirmation "Permanent link")

When a tool confirmation requires more details for the user or a more complex response, use a tool\_confirmation implementation. This approach extends the `ToolContext` object to add a text description of the request for the user and allows for more complex response data. When implementing tool confirmation this way, you can pause a tool's execution, request specific information, and then resume the tool with the provided data.

This confirmation flow has a request stage where the system assembles and sends an input request human response, and a response stage where the system receives and processes the returned data.

### Confirmation definition[¶](#confirmation-definition "Permanent link")

When creating a Tool with advanced confirmation, use the `Tool Context Request Confirmation` method with `hint` and `payload` parameters:

-   `hint`: Descriptive message that explains what is needed from the user.
-   `payload`: The structure of the data you expect in return. This must be serializable into a JSON-formatted string.

For a complete example of this approach, see the [human\_tool\_confirmation](https://github.com/google/adk-python/blob/fc90ce968f114f84b14829f8117797a4c256d710/contributing/samples/human_tool_confirmation/agent.py) code sample. Keep in mind that the agent workflow tool execution pauses while a confirmation is obtained. After confirmation is received, you can access the confirmation response in the `tool_confirmation.payload` object and then proceed with the execution of the workflow.

The following code shows an example implementation for a tool that processes time off requests for an employee:

PythonTypeScriptGoJavaKotlin

`[](#__codelineno-10-1)def request_time_off(days: int, tool_context: ToolContext):     [](#__codelineno-10-2)    """Request day off for the employee."""    [](#__codelineno-10-3)    # ...    [](#__codelineno-10-4)    tool_confirmation = tool_context.tool_confirmation    [](#__codelineno-10-5)    if not tool_confirmation:        [](#__codelineno-10-6)        tool_context.request_confirmation(            [](#__codelineno-10-7)            hint=(                [](#__codelineno-10-8)                'Please approve or reject the tool call request_time_off() by'                [](#__codelineno-10-9)                ' responding with a FunctionResponse with an expected'                [](#__codelineno-10-10)                ' ToolConfirmation payload.'            [](#__codelineno-10-11)            ),            [](#__codelineno-10-12)            payload={                [](#__codelineno-10-13)                'approved_days': 0,            [](#__codelineno-10-14)            },        [](#__codelineno-10-15)        )        [](#__codelineno-10-16)        # Return intermediate status indicating that the tool is waiting for        [](#__codelineno-10-17)        # a confirmation response:        [](#__codelineno-10-18)        return {'status': 'Manager approval is required.'} [](#__codelineno-10-19)    [](#__codelineno-10-20)    approved_days = tool_confirmation.payload['approved_days']    [](#__codelineno-10-21)    approved_days = min(approved_days, days)    [](#__codelineno-10-22)    if approved_days == 0:        [](#__codelineno-10-23)        return {'status': 'The time off request is rejected.', 'approved_days': 0}    [](#__codelineno-10-24)    return {        [](#__codelineno-10-25)        'status': 'ok',        [](#__codelineno-10-26)        'approved_days': approved_days,    [](#__codelineno-10-27)    }`

``[](#__codelineno-11-1)/**  [](#__codelineno-11-2) * A tool that requests time off for an employee. [](#__codelineno-11-3) * It uses the Advanced Confirmation pattern to request manager approval. [](#__codelineno-11-4) */ [](#__codelineno-11-5)export const requestTimeOffTool = new FunctionTool({   [](#__codelineno-11-6)  name: 'request_time_off',  [](#__codelineno-11-7)  description: 'Request days off for the employee.',  [](#__codelineno-11-8)  parameters: z.object({    [](#__codelineno-11-9)    days: z.number().describe('The number of days requested.'),  [](#__codelineno-11-10)  }),  [](#__codelineno-11-11)  execute: async ({days}, toolContext) => {    [](#__codelineno-11-12)    const confirmation = toolContext?.toolConfirmation; [](#__codelineno-11-13)    [](#__codelineno-11-14)    if (!confirmation) {      [](#__codelineno-11-15)      // Step 1: Request confirmation with a payload      [](#__codelineno-11-16)      toolContext?.requestConfirmation({        [](#__codelineno-11-17)        hint:          [](#__codelineno-11-18)          'Please approve or reject the tool call request_time_off() by ' +          [](#__codelineno-11-19)          'responding with a FunctionResponse with an expected ' +          [](#__codelineno-11-20)          'ToolConfirmation payload.',        [](#__codelineno-11-21)        payload: {          [](#__codelineno-11-22)          approved_days: 0,        [](#__codelineno-11-23)        },      [](#__codelineno-11-24)      }); [](#__codelineno-11-25)      [](#__codelineno-11-26)      // Return a descriptive status to the agent      [](#__codelineno-11-27)      return {        [](#__codelineno-11-28)        status: 'PENDING_MANAGER_APPROVAL',        [](#__codelineno-11-29)        message: `A request for ${days} days is pending manager approval.`,      [](#__codelineno-11-30)      };    [](#__codelineno-11-31)    } [](#__codelineno-11-32)    [](#__codelineno-11-33)    // Step 2: Process the confirmation response    [](#__codelineno-11-34)    if (!confirmation.confirmed) {      [](#__codelineno-11-35)      return {        [](#__codelineno-11-36)        status: 'CANCELLED',        [](#__codelineno-11-37)        message: 'The request was cancelled by the user.',      [](#__codelineno-11-38)      };    [](#__codelineno-11-39)    } [](#__codelineno-11-40)    [](#__codelineno-11-41)    let approvedDays = (confirmation.payload as any)['approved_days'] as number;    [](#__codelineno-11-42)    approvedDays = Math.min(approvedDays, days); [](#__codelineno-11-43)    [](#__codelineno-11-44)    if (approvedDays === 0) {      [](#__codelineno-11-45)      return {        [](#__codelineno-11-46)        status: 'REJECTED',        [](#__codelineno-11-47)        message: 'The time off request was rejected by the manager.',        [](#__codelineno-11-48)        approved_days: 0,      [](#__codelineno-11-49)      };    [](#__codelineno-11-50)    } [](#__codelineno-11-51)    [](#__codelineno-11-52)    return {      [](#__codelineno-11-53)      status: 'SUCCESS',      [](#__codelineno-11-54)      message: `The request for ${days} days was approved (Total approved: ${approvedDays}).`,      [](#__codelineno-11-55)      approved_days: approvedDays,    [](#__codelineno-11-56)    };  [](#__codelineno-11-57)  }, [](#__codelineno-11-58)}); [](#__codelineno-11-59)[](#__codelineno-11-60)export const rootAgent = new LlmAgent({   [](#__codelineno-11-61)  name: 'HR_Assistant',  [](#__codelineno-11-62)  model: 'gemini-flash-latest',  [](#__codelineno-11-63)  instruction: `You are an HR Assistant.  [](#__codelineno-11-64)  1. Use the 'request_time_off' tool to help employees with leave requests.  [](#__codelineno-11-65)  2. MANDATORY: Every tool call MUST be accompanied by a text response in the same message.  [](#__codelineno-11-66)  3. EXAMPLE:     [](#__codelineno-11-67)     User: "I want 5 days off"     [](#__codelineno-11-68)     Model: "I am initiating your leave request for 5 days. Management approval is required, so please confirm this request." [Tool Call: request_time_off(days=5)]  [](#__codelineno-11-69)  4. In the terminal, if they want to 'confirm', tell them to simulate a confirmation response.  [](#__codelineno-11-70)  5. Once confirmed, the system will automatically provide the result of the approval.`,  [](#__codelineno-11-71)  tools: [requestTimeOffTool], [](#__codelineno-11-72)});``

`[](#__codelineno-12-1)func requestTimeOff(ctx agent.Context, args RequestTimeOffArgs) (map[string]any, error) {     [](#__codelineno-12-2)    confirmation := ctx.ToolConfirmation()    [](#__codelineno-12-3)    if confirmation == nil {        [](#__codelineno-12-4)        ctx.RequestConfirmation(            [](#__codelineno-12-5)            "Please approve or reject the tool call requestTimeOff() by "+            [](#__codelineno-12-6)            "responding with a FunctionResponse with an expected "+            [](#__codelineno-12-7)            "ToolConfirmation payload.",            [](#__codelineno-12-8)            map[string]any{"approved_days": 0},        [](#__codelineno-12-9)        )        [](#__codelineno-12-10)        return map[string]any{"status": "Manager approval is required."}, nil    [](#__codelineno-12-11)    } [](#__codelineno-12-12)    [](#__codelineno-12-13)    payload := confirmation.Payload.(map[string]any)    [](#__codelineno-12-14)    // Values in map[string]any from JSON are float64 by default in Go    [](#__codelineno-12-15)    approvedDays := int(payload["approved_days"].(float64))    [](#__codelineno-12-16)    approvedDays = min(approvedDays, args.Days) [](#__codelineno-12-17)    [](#__codelineno-12-18)    if approvedDays == 0 {        [](#__codelineno-12-19)        return map[string]any{"status": "The time off request is rejected.", "approved_days": 0}, nil    [](#__codelineno-12-20)    } [](#__codelineno-12-21)    [](#__codelineno-12-22)    return map[string]any{        [](#__codelineno-12-23)        "status": "ok",        [](#__codelineno-12-24)        "approved_days": approvedDays,    [](#__codelineno-12-25)    }, nil [](#__codelineno-12-26)}`

`[](#__codelineno-13-1)public Map<String, Object> requestTimeOff(     [](#__codelineno-13-2)    @Schema(name="days") int days,    [](#__codelineno-13-3)    ToolContext toolContext) {    [](#__codelineno-13-4)    // Request day off for the employee.    [](#__codelineno-13-5)    // ...    [](#__codelineno-13-6)    Optional<ToolConfirmation> toolConfirmation = toolContext.toolConfirmation();    [](#__codelineno-13-7)    if (toolConfirmation.isEmpty()) {        [](#__codelineno-13-8)        toolContext.requestConfirmation(            [](#__codelineno-13-9)            "Please approve or reject the tool call requestTimeOff() by " +            [](#__codelineno-13-10)            "responding with a FunctionResponse with an expected " +            [](#__codelineno-13-11)            "ToolConfirmation payload.",            [](#__codelineno-13-12)            Map.of("approved_days", 0)        [](#__codelineno-13-13)        );        [](#__codelineno-13-14)        // Return intermediate status indicating that the tool is waiting for        [](#__codelineno-13-15)        // a confirmation response:        [](#__codelineno-13-16)        return Map.of("status", "Manager approval is required.");    [](#__codelineno-13-17)    } [](#__codelineno-13-18)    [](#__codelineno-13-19)    Map<String, Object> payload = (Map<String, Object>) toolConfirmation.get().payload();    [](#__codelineno-13-20)    int approvedDays = (int) payload.get("approved_days");    [](#__codelineno-13-21)    approvedDays = Math.min(approvedDays, days); [](#__codelineno-13-22)    [](#__codelineno-13-23)    if (approvedDays == 0) {        [](#__codelineno-13-24)        return Map.of("status", "The time off request is rejected.", "approved_days", 0);    [](#__codelineno-13-25)    } [](#__codelineno-13-26)    [](#__codelineno-13-27)    return Map.of(        [](#__codelineno-13-28)        "status", "ok",        [](#__codelineno-13-29)        "approved_days", approvedDays    [](#__codelineno-13-30)    ); [](#__codelineno-13-31)}`

`[](#__codelineno-14-1)class TimeOffTools {     [](#__codelineno-14-2)    /** Request day off for the employee. */    [](#__codelineno-14-3)    @Tool    [](#__codelineno-14-4)    fun requestTimeOff(        [](#__codelineno-14-5)        context: ToolContext,        [](#__codelineno-14-6)        @Param("The number of days requested.") days: Int,    [](#__codelineno-14-7)    ): Map<String, Any?> {        [](#__codelineno-14-8)        val confirmation = context.toolConfirmation        [](#__codelineno-14-9)        if (confirmation == null) {            [](#__codelineno-14-10)            context.requestConfirmation(                [](#__codelineno-14-11)                hint =                    [](#__codelineno-14-12)                    "Please approve or reject the tool call requestTimeOff() by responding " +                        [](#__codelineno-14-13)                        "with a FunctionResponse with an expected ToolConfirmation payload.",                [](#__codelineno-14-14)                payload = mapOf("approved_days" to 0),            [](#__codelineno-14-15)            )            [](#__codelineno-14-16)            // Return an intermediate status indicating that the tool is waiting for            [](#__codelineno-14-17)            // a confirmation response:            [](#__codelineno-14-18)            return mapOf("status" to "Manager approval is required.")        [](#__codelineno-14-19)        } [](#__codelineno-14-20)        [](#__codelineno-14-21)        // The payload comes back decoded from JSON, so the number may arrive as any        [](#__codelineno-14-22)        // Number subtype. Read it through Number rather than casting straight to Int.        [](#__codelineno-14-23)        val payload = confirmation.payload as? Map<*, *>        [](#__codelineno-14-24)        val approvedDays =            [](#__codelineno-14-25)            minOf((payload?.get("approved_days") as? Number)?.toInt() ?: 0, days)        [](#__codelineno-14-26)        if (approvedDays == 0) {            [](#__codelineno-14-27)            return mapOf("status" to "The time off request is rejected.", "approved_days" to 0)        [](#__codelineno-14-28)        }        [](#__codelineno-14-29)        return mapOf("status" to "ok", "approved_days" to approvedDays)    [](#__codelineno-14-30)    } [](#__codelineno-14-31)}`

## Remote confirmation with REST API[¶](#remote-response "Permanent link")

If there is no active user interface for a human confirmation of an agent workflow, you can handle the confirmation through a command-line interface or by routing it through another channel like email or a chat application. To confirm the tool call, the user or calling application needs to send a `FunctionResponse` event with the tool confirmation data.

You can send the request to the ADK API server's `/run` or `/run_sse` endpoint, or directly to the ADK runner. The following example uses a `curl` command to send the confirmation to the `/run_sse` endpoint:

 `[](#__codelineno-15-1) curl -X POST http://localhost:8000/run_sse \ [](#__codelineno-15-2) -H "Content-Type: application/json" \ [](#__codelineno-15-3) -d '{    [](#__codelineno-15-4)    "app_name": "human_tool_confirmation",    [](#__codelineno-15-5)    "user_id": "user",    [](#__codelineno-15-6)    "session_id": "7828f575-2402-489f-8079-74ea95b6a300",    [](#__codelineno-15-7)    "new_message": {        [](#__codelineno-15-8)        "parts": [            [](#__codelineno-15-9)            {                [](#__codelineno-15-10)                "function_response": {                    [](#__codelineno-15-11)                    "id": "adk-13b84a8c-c95c-4d66-b006-d72b30447e35",                    [](#__codelineno-15-12)                    "name": "adk_request_confirmation",                    [](#__codelineno-15-13)                    "response": {                        [](#__codelineno-15-14)                        "confirmed": true,                        [](#__codelineno-15-15)                        "payload": {                            [](#__codelineno-15-16)                            "approved_days": 5                        [](#__codelineno-15-17)                        }                    [](#__codelineno-15-18)                    }                [](#__codelineno-15-19)                }            [](#__codelineno-15-20)            }        [](#__codelineno-15-21)        ],        [](#__codelineno-15-22)        "role": "user"    [](#__codelineno-15-23)    } [](#__codelineno-15-24)}'`

A REST-based response for a confirmation must meet the following requirements:

-   The `id` in the `function_response` should match the `function_call_id` from the `adk_request_confirmation` `FunctionCall` event.
-   The `name` should be `adk_request_confirmation`.
-   The `response` object contains the `confirmed` status and any additional `payload` data.
    
    Note: Confirmation with Resume feature
    
    If your ADK agent workflow is configured with the [Resume](/runtime/resume/) feature, you also must include the Invocation ID (`invocation_id`) parameter with the confirmation response. The Invocation ID you provide must be the same invocation that generated the confirmation request, otherwise the system starts a new invocation with the confirmation response. If your agent uses the Resume feature, consider including the Invocation ID as a parameter with your confirmation request, so it can be included with the response. For more details on using the Resume feature, see [Resume stopped agents](/runtime/resume/).
    

## Known limitations[¶](#known-limitations "Permanent link")

The tool confirmation feature has the following limitations:

-   [DatabaseSessionService](/api-reference/python/google-adk.html#google.adk.sessions.DatabaseSessionService) is not supported by this feature.
-   [VertexAiSessionService](/api-reference/python/google-adk.html#google.adk.sessions.VertexAiSessionService) is not supported by this feature.

## Next steps[¶](#next-steps "Permanent link")

For more information on building ADK tools for agent workflows, see [Function tools](/tools-custom/function-tools/).

Back to top