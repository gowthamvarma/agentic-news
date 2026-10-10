---
title: "Tool limitations - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools/limitations/
date: 2026-10-10T19:17:01.401Z
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
        -    Tool limitations [Tool limitations](./)
            
            Table of contents
            
            -   [One tool per agent limitation](#one-tool-one-agent)
                
                -   [Workaround #1: AgentTool.create() method](#workaround-1-agenttoolcreate-method)
                -   [Workaround #2: bypass\_multi\_tools\_limit](#workaround-2-bypass_multi_tools_limit)
                
            
        
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

-   [One tool per agent limitation](#one-tool-one-agent)
    
    -   [Workaround #1: AgentTool.create() method](#workaround-1-agenttoolcreate-method)
    -   [Workaround #2: bypass\_multi\_tools\_limit](#workaround-2-bypass_multi_tools_limit)
    

1.  [Home](../..)
2.  [Components](../../get-started/about/)
3.  [Custom Tools](../../tools-custom/)

[](https://github.com/google/adk-docs/edit/main/docs/tools/limitations.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Limitations for ADK tools[¶](#limitations-for-adk-tools "Permanent link")

Some ADK tools have limitations that can impact how you implement them within an agent workflow. This page lists these tool limitations and workarounds, if available.

## One tool per agent limitation[¶](#one-tool-one-agent "Permanent link")

ONLY for Search in ADK Python v1.15.0 and lower

This limitation only applies to the use of Google Search and Agent Search tools in ADK Python v1.15.0 and lower. ADK Python release v1.16.0 and higher provides a built-in workaround to remove this limitation.

In general, you can use more than one tool in an agent, but use of specific tools within an agent excludes the use of any other tools in that agent. The following ADK Tools can only be used by themselves, without any other tools, in a single agent object:

-   [Code Execution](/integrations/code-execution/) with Gemini API (Note: in TypeScript, this requires Gemini 2.0+ and does not have this limitation)
-   [Google Search](/integrations/google-search/) with Gemini API (Note: limitation only applies to Gemini 1.x models in TypeScript)
-   [Agent Search](/integrations/agent-search/) (Note: currently unavailable in TypeScript)

For example, the following approach that uses one of these tools along with other tools, within a single agent, is ***not supported***:

PythonTypeScriptJavaKotlin

`[](#__codelineno-0-1)root_agent = Agent(     [](#__codelineno-0-2)    name="RootAgent",    [](#__codelineno-0-3)    model="gemini-flash-latest",    [](#__codelineno-0-4)    description="Code Agent",    [](#__codelineno-0-5)    tools=[custom_function],    [](#__codelineno-0-6)    code_executor=BuiltInCodeExecutor() # <-- NOT supported when used with tools [](#__codelineno-0-7))`

`[](#__codelineno-1-1)import {Agent, BuiltInCodeExecutor} from '@google/adk'; [](#__codelineno-1-2)[](#__codelineno-1-3)const rootAgent = new Agent({   [](#__codelineno-1-4)  name: 'RootAgent',  [](#__codelineno-1-5)  model: 'gemini-flash-latest',  [](#__codelineno-1-6)  description: 'Code Agent',  [](#__codelineno-1-7)  tools: [myCustomTool], // Assume myCustomTool is defined  [](#__codelineno-1-8)  codeExecutor: new BuiltInCodeExecutor(), // <-- NOT supported when used with tools [](#__codelineno-1-9)});`

 `[](#__codelineno-2-1) LlmAgent searchAgent =        [](#__codelineno-2-2)        LlmAgent.builder()            [](#__codelineno-2-3)            .model(MODEL_ID)            [](#__codelineno-2-4)            .name("SearchAgent")            [](#__codelineno-2-5)            .instruction("You're a specialist in Google Search")            [](#__codelineno-2-6)            .tools(new GoogleSearchTool(), new YourCustomTool()) // <-- NOT supported            [](#__codelineno-2-7)            .build();`

`[](#__codelineno-3-1)val searchAgent = LlmAgent(     [](#__codelineno-3-2)    name = "SearchAgent",    [](#__codelineno-3-3)    model = Gemini(name = "gemini-flash-latest"),    [](#__codelineno-3-4)    instruction = Instruction("You're a specialist in Google Search"),    [](#__codelineno-3-5)    tools = listOf(GoogleSearchTool(), YourCustomTool()) // <-- NOT supported [](#__codelineno-3-6))`

### Workaround #1: AgentTool.create() method[¶](#workaround-1-agenttoolcreate-method "Permanent link")

Supported in ADKPythonTypeScript (v0.6.1+)JavaKotlin v0.1.0

The following code sample demonstrates how to use multiple built-in tools or how to use built-in tools with other tools by using multiple agents:

PythonTypeScriptJavaKotlin

`[](#__codelineno-4-1)from google.adk.tools.agent_tool import AgentTool [](#__codelineno-4-2)from google.adk.agents import Agent [](#__codelineno-4-3)from google.adk.tools import google_search [](#__codelineno-4-4)from google.adk.code_executors import BuiltInCodeExecutor [](#__codelineno-4-5)[](#__codelineno-4-6)search_agent = Agent(     [](#__codelineno-4-7)    model='gemini-flash-latest',    [](#__codelineno-4-8)    name='SearchAgent',    [](#__codelineno-4-9)    instruction="""    [](#__codelineno-4-10)    You're a specialist in Google Search    [](#__codelineno-4-11)    """,    [](#__codelineno-4-12)    tools=[google_search], [](#__codelineno-4-13)) [](#__codelineno-4-14)coding_agent = Agent(     [](#__codelineno-4-15)    model='gemini-flash-latest',    [](#__codelineno-4-16)    name='CodeAgent',    [](#__codelineno-4-17)    instruction="""    [](#__codelineno-4-18)    You're a specialist in Code Execution    [](#__codelineno-4-19)    """,    [](#__codelineno-4-20)    code_executor=BuiltInCodeExecutor(), [](#__codelineno-4-21)) [](#__codelineno-4-22)root_agent = Agent(     [](#__codelineno-4-23)    name="RootAgent",    [](#__codelineno-4-24)    model="gemini-flash-latest",    [](#__codelineno-4-25)    description="Root Agent",    [](#__codelineno-4-26)    tools=[AgentTool(agent=search_agent), AgentTool(agent=coding_agent)], [](#__codelineno-4-27))`

`[](#__codelineno-5-1)import {Agent, AgentTool, BuiltInCodeExecutor, GOOGLE_SEARCH} from '@google/adk'; [](#__codelineno-5-2)[](#__codelineno-5-3)const searchAgent = new Agent({   [](#__codelineno-5-4)  model: 'gemini-flash-latest',  [](#__codelineno-5-5)  name: 'SearchAgent',  [](#__codelineno-5-6)  instruction: "You're a specialist in Google Search",  [](#__codelineno-5-7)  tools: [GOOGLE_SEARCH], [](#__codelineno-5-8)}); [](#__codelineno-5-9)[](#__codelineno-5-10)const codingAgent = new Agent({   [](#__codelineno-5-11)  model: 'gemini-flash-latest', // Built-in code execution requires Gemini 2.0+ in ADK JS  [](#__codelineno-5-12)  name: 'CodeAgent',  [](#__codelineno-5-13)  instruction: "You're a specialist in Code Execution",  [](#__codelineno-5-14)  codeExecutor: new BuiltInCodeExecutor(), [](#__codelineno-5-15)}); [](#__codelineno-5-16)[](#__codelineno-5-17)const rootAgent = new Agent({   [](#__codelineno-5-18)  name: 'RootAgent',  [](#__codelineno-5-19)  model: 'gemini-flash-latest',  [](#__codelineno-5-20)  description: 'Root Agent',  [](#__codelineno-5-21)  tools: [new AgentTool({agent: searchAgent}), new AgentTool({agent: codingAgent})], [](#__codelineno-5-22)});`

`[](#__codelineno-6-1)import com.google.adk.agents.BaseAgent; [](#__codelineno-6-2)import com.google.adk.agents.LlmAgent; [](#__codelineno-6-3)import com.google.adk.tools.AgentTool; [](#__codelineno-6-4)import com.google.adk.tools.BuiltInCodeExecutionTool; [](#__codelineno-6-5)import com.google.adk.tools.GoogleSearchTool; [](#__codelineno-6-6)import com.google.common.collect.ImmutableList; [](#__codelineno-6-7)[](#__codelineno-6-8)public class NestedAgentApp { [](#__codelineno-6-9)  [](#__codelineno-6-10)  private static final String MODEL_ID = "gemini-flash-latest"; [](#__codelineno-6-11)  [](#__codelineno-6-12)  public static void main(String[] args) { [](#__codelineno-6-13)    [](#__codelineno-6-14)    // Define the SearchAgent    [](#__codelineno-6-15)    LlmAgent searchAgent =        [](#__codelineno-6-16)        LlmAgent.builder()            [](#__codelineno-6-17)            .model(MODEL_ID)            [](#__codelineno-6-18)            .name("SearchAgent")            [](#__codelineno-6-19)            .instruction("You're a specialist in Google Search")            [](#__codelineno-6-20)            .tools(new GoogleSearchTool()) // Instantiate GoogleSearchTool            [](#__codelineno-6-21)            .build(); [](#__codelineno-6-22) [](#__codelineno-6-23)    [](#__codelineno-6-24)    // Define the CodingAgent    [](#__codelineno-6-25)    LlmAgent codingAgent =        [](#__codelineno-6-26)        LlmAgent.builder()            [](#__codelineno-6-27)            .model(MODEL_ID)            [](#__codelineno-6-28)            .name("CodeAgent")            [](#__codelineno-6-29)            .instruction("You're a specialist in Code Execution")            [](#__codelineno-6-30)            .tools(new BuiltInCodeExecutionTool()) // Instantiate BuiltInCodeExecutionTool            [](#__codelineno-6-31)            .build(); [](#__codelineno-6-32)    [](#__codelineno-6-33)    // Define the RootAgent, which uses AgentTool.create() to wrap SearchAgent and CodingAgent    [](#__codelineno-6-34)    BaseAgent rootAgent =        [](#__codelineno-6-35)        LlmAgent.builder()            [](#__codelineno-6-36)            .name("RootAgent")            [](#__codelineno-6-37)            .model(MODEL_ID)            [](#__codelineno-6-38)            .description("Root Agent")            [](#__codelineno-6-39)            .tools(                [](#__codelineno-6-40)                AgentTool.create(searchAgent), // Use create method                [](#__codelineno-6-41)                AgentTool.create(codingAgent)   // Use create method             [](#__codelineno-6-42)             )            [](#__codelineno-6-43)            .build(); [](#__codelineno-6-44)    [](#__codelineno-6-45)    // Note: This sample only demonstrates the agent definitions.    [](#__codelineno-6-46)    // To run these agents, you'd need to integrate them with a Runner and SessionService,    [](#__codelineno-6-47)    // similar to the previous examples.    [](#__codelineno-6-48)    System.out.println("Agents defined successfully:");    [](#__codelineno-6-49)    System.out.println("  Root Agent: " + rootAgent.name());    [](#__codelineno-6-50)    System.out.println("  Search Agent (nested): " + searchAgent.name());    [](#__codelineno-6-51)    System.out.println("  Code Agent (nested): " + codingAgent.name());  [](#__codelineno-6-52)  } [](#__codelineno-6-53)}`

`[](#__codelineno-7-1)// Define the SearchAgent [](#__codelineno-7-2)val searchAgent =     [](#__codelineno-7-3)    LlmAgent(        [](#__codelineno-7-4)        name = "SearchAgent",        [](#__codelineno-7-5)        model = Gemini(name = modelId),        [](#__codelineno-7-6)        instruction = Instruction("You're a specialist in Google Search"),        [](#__codelineno-7-7)        tools = listOf(GoogleSearchTool()),    [](#__codelineno-7-8)    ) [](#__codelineno-7-9)[](#__codelineno-7-10)// Define another agent (e.g., for specialized tasks) [](#__codelineno-7-11)val taskAgent =     [](#__codelineno-7-12)    LlmAgent(        [](#__codelineno-7-13)        name = "TaskAgent",        [](#__codelineno-7-14)        model = Gemini(name = modelId),        [](#__codelineno-7-15)        instruction = Instruction("You're a specialist in performing specific tasks."),    [](#__codelineno-7-16)    ) [](#__codelineno-7-17)[](#__codelineno-7-18)// Define the RootAgent, which uses AgentTool to wrap SearchAgent and TaskAgent [](#__codelineno-7-19)val rootAgent =     [](#__codelineno-7-20)    LlmAgent(        [](#__codelineno-7-21)        name = "RootAgent",        [](#__codelineno-7-22)        model = Gemini(name = modelId),        [](#__codelineno-7-23)        description = "Root Agent",        [](#__codelineno-7-24)        tools =            [](#__codelineno-7-25)            listOf(                [](#__codelineno-7-26)                AgentTool(agent = searchAgent),                [](#__codelineno-7-27)                AgentTool(agent = taskAgent),            [](#__codelineno-7-28)            ),    [](#__codelineno-7-29)    )`

### Workaround #2: bypass\_multi\_tools\_limit[¶](#workaround-2-bypass_multi_tools_limit "Permanent link")

Supported in ADKPythonJavaKotlin v0.1.0

ADK Python has a built-in workaround which bypasses this limitation for `GoogleSearchTool` and `VertexAiSearchTool` (use `bypass_multi_tools_limit=True` to enable it), as shown in the [built\_in\_multi\_tools](https://github.com/google/adk-python/tree/main/contributing/samples/tools/built_in_multi_tools). sample agent.

Warning

Built-in tools cannot be used within a sub-agent, with the exception of `GoogleSearchTool` and `VertexAiSearchTool` in ADK Python because of the workaround mentioned above.

For example, the following approach that uses built-in tools within sub-agents is **not supported**:

PythonTypeScriptJavaKotlin

`[](#__codelineno-8-1)url_context_agent = Agent(     [](#__codelineno-8-2)    model='gemini-flash-latest',    [](#__codelineno-8-3)    name='UrlContextAgent',    [](#__codelineno-8-4)    instruction="""    [](#__codelineno-8-5)    You're a specialist in URL Context    [](#__codelineno-8-6)    """,    [](#__codelineno-8-7)    tools=[url_context], [](#__codelineno-8-8)) [](#__codelineno-8-9)coding_agent = Agent(     [](#__codelineno-8-10)    model='gemini-flash-latest',    [](#__codelineno-8-11)    name='CodeAgent',    [](#__codelineno-8-12)    instruction="""    [](#__codelineno-8-13)    You're a specialist in Code Execution    [](#__codelineno-8-14)    """,    [](#__codelineno-8-15)    code_executor=BuiltInCodeExecutor(), [](#__codelineno-8-16)) [](#__codelineno-8-17)root_agent = Agent(     [](#__codelineno-8-18)    name="RootAgent",    [](#__codelineno-8-19)    model="gemini-flash-latest",    [](#__codelineno-8-20)    description="Root Agent",    [](#__codelineno-8-21)    sub_agents=[        [](#__codelineno-8-22)        url_context_agent,        [](#__codelineno-8-23)        coding_agent    [](#__codelineno-8-24)    ], [](#__codelineno-8-25))`

`[](#__codelineno-9-1)import {Agent, BuiltInCodeExecutor} from '@google/adk'; [](#__codelineno-9-2)[](#__codelineno-9-3)const urlContextAgent = new Agent({   [](#__codelineno-9-4)  model: 'gemini-flash-latest',  [](#__codelineno-9-5)  name: 'UrlContextAgent',  [](#__codelineno-9-6)  instruction: "You're a specialist in URL Context",  [](#__codelineno-9-7)  tools: [myCustomTool], // Assume myCustomTool is defined [](#__codelineno-9-8)}); [](#__codelineno-9-9)[](#__codelineno-9-10)const codingAgent = new Agent({   [](#__codelineno-9-11)  model: 'gemini-flash-latest',  [](#__codelineno-9-12)  name: 'CodeAgent',  [](#__codelineno-9-13)  instruction: "You're a specialist in Code Execution",  [](#__codelineno-9-14)  codeExecutor: new BuiltInCodeExecutor(), [](#__codelineno-9-15)}); [](#__codelineno-9-16)[](#__codelineno-9-17)const rootAgent = new Agent({   [](#__codelineno-9-18)  name: 'RootAgent',  [](#__codelineno-9-19)  model: 'gemini-flash-latest',  [](#__codelineno-9-20)  description: 'Root Agent',  [](#__codelineno-9-21)  subAgents: [urlContextAgent, codingAgent], // NOT supported when sub-agents use built-in tools [](#__codelineno-9-22)});`

`[](#__codelineno-10-1)LlmAgent searchAgent =     [](#__codelineno-10-2)    LlmAgent.builder()        [](#__codelineno-10-3)        .model("gemini-flash-latest")        [](#__codelineno-10-4)        .name("SearchAgent")        [](#__codelineno-10-5)        .instruction("You're a specialist in Google Search")        [](#__codelineno-10-6)        .tools(new GoogleSearchTool())        [](#__codelineno-10-7)        .build(); [](#__codelineno-10-8)[](#__codelineno-10-9)LlmAgent codingAgent =     [](#__codelineno-10-10)    LlmAgent.builder()        [](#__codelineno-10-11)        .model("gemini-flash-latest")        [](#__codelineno-10-12)        .name("CodeAgent")        [](#__codelineno-10-13)        .instruction("You're a specialist in Code Execution")        [](#__codelineno-10-14)        .tools(new BuiltInCodeExecutionTool())        [](#__codelineno-10-15)        .build(); [](#__codelineno-10-16) [](#__codelineno-10-17)[](#__codelineno-10-18)LlmAgent rootAgent =     [](#__codelineno-10-19)    LlmAgent.builder()        [](#__codelineno-10-20)        .name("RootAgent")        [](#__codelineno-10-21)        .model("gemini-flash-latest")        [](#__codelineno-10-22)        .description("Root Agent")        [](#__codelineno-10-23)        .subAgents(searchAgent, codingAgent) // Not supported, as the sub agents use built in tools.        [](#__codelineno-10-24)        .build();`

`[](#__codelineno-11-1)val searchAgent = LlmAgent(     [](#__codelineno-11-2)    model = Gemini(name = "gemini-flash-latest"),    [](#__codelineno-11-3)    name = "SearchAgent",    [](#__codelineno-11-4)    instruction = Instruction("You're a specialist in Google Search"),    [](#__codelineno-11-5)    tools = listOf(GoogleSearchTool()) [](#__codelineno-11-6)) [](#__codelineno-11-7)[](#__codelineno-11-8)val codingAgent = LlmAgent(     [](#__codelineno-11-9)    model = Gemini(name = "gemini-flash-latest"),    [](#__codelineno-11-10)    name = "CodeAgent",    [](#__codelineno-11-11)    instruction = Instruction("You're a specialist in Code Execution")    [](#__codelineno-11-12)    // Kotlin currently doesn't have a BuiltInCodeExecutionTool in core [](#__codelineno-11-13)) [](#__codelineno-11-14) [](#__codelineno-11-15)[](#__codelineno-11-16)val rootAgent = LlmAgent(     [](#__codelineno-11-17)    name = "RootAgent",    [](#__codelineno-11-18)    model = Gemini(name = "gemini-flash-latest"),    [](#__codelineno-11-19)    description = "Root Agent",    [](#__codelineno-11-20)    subAgents = listOf(searchAgent, codingAgent) // Not supported when sub-agents use built-in tools [](#__codelineno-11-21))`

Back to top