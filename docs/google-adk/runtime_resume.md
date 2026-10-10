---
title: "Resume Agents - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/runtime/resume/
date: 2026-10-10T19:16:59.856Z
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
        -    Resume Agents [Resume Agents](./)
            
            Table of contents
            
            -   [Add resumable configuration](#add-resumable-configuration)
            -   [Resume a stopped workflow](#resume-a-stopped-workflow)
            -   [How it works](#how-it-works)
            -   [Add resume to custom Agents](#custom-agents)
            
        -   [Cancel Agent Runs](../cancel/)
        -   [Runtime Config](../runconfig/)
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

-   [Add resumable configuration](#add-resumable-configuration)
-   [Resume a stopped workflow](#resume-a-stopped-workflow)
-   [How it works](#how-it-works)
-   [Add resume to custom Agents](#custom-agents)

1.  [Home](../..)
2.  [Run Agents](../)
3.  [Agent Runtime](../)

[](https://github.com/google/adk-docs/edit/main/docs/runtime/resume.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Resume stopped agents[¶](#resume-stopped-agents "Permanent link")

Supported in ADKPython v1.16.0Kotlin v0.1.0

An ADK agent's execution can be interrupted by various factors including dropped network connections, power failure, or a required external system going offline. The Resume feature of ADK allows an agent workflow to pick up where it left off, avoiding the need to restart the entire workflow. In ADK Python 1.16 and higher, you can configure an ADK workflow to be resumable, so that it tracks the execution of workflow and then allows you to resume it after an unexpected interruption.

This guide explains how to configure your ADK agent workflow to be resumable. If you use Custom Agents, you can update them to be resumable. For more information, see [Add resume to custom Agents](#custom-agents).

## Add resumable configuration[¶](#add-resumable-configuration "Permanent link")

Enable the Resume function for an agent workflow by applying a Resumability configuration to the App object of your ADK workflow, as shown in the following code example:

PythonKotlin

`[](#__codelineno-0-1)app = App(     [](#__codelineno-0-2)    name='my_resumable_agent',    [](#__codelineno-0-3)    root_agent=root_agent,    [](#__codelineno-0-4)    # Set the resumability config to enable resumability.    [](#__codelineno-0-5)    resumability_config=ResumabilityConfig(        [](#__codelineno-0-6)        is_resumable=True,    [](#__codelineno-0-7)    ), [](#__codelineno-0-8))`

`[](#__codelineno-1-1)val runner =     [](#__codelineno-1-2)    InMemoryRunner(        [](#__codelineno-1-3)        app =            [](#__codelineno-1-4)            App(                [](#__codelineno-1-5)                appName = "my_resumable_agent",                [](#__codelineno-1-6)                rootAgent = rootAgent,                [](#__codelineno-1-7)                resumabilityConfig = ResumabilityConfig(isResumable = true),            [](#__codelineno-1-8)            ),        [](#__codelineno-1-9)        sessionService = InMemorySessionService(),    [](#__codelineno-1-10)    )`

Caution: Long Running Functions, Confirmations, Authentication

For agents that use [Long Running Functions](/tools-custom/function-tools/#long-run-tool), [Confirmations](/tools-custom/confirmation/), or [Authentication](/tools-custom/authentication/) requiring user input, adding a resumable confirmation changes how these features operate. For more information, see the documentation for those features.

Note: Custom Agents

Resume is not supported by default for Custom Agents. You must update the agent code for a Custom Agent to support the Resume feature. For information on modifying Custom Agents to support incremental resume functionality, see [Add resume to custom Agents](#custom-agents).

## Resume a stopped workflow[¶](#resume-a-stopped-workflow "Permanent link")

When an ADK workflow stops execution you can resume the workflow using a command containing the Invocation ID for the workflow instance, which can be found in the [Event](/events/#understanding-and-using-events) history of the workflow. Make sure the ADK API server is running, in case it was interrupted or powered off, and then run the following command to resume the workflow, as shown in the following API request example.

`[](#__codelineno-2-1)# restart the API server if needed: [](#__codelineno-2-2)adk api_server my_resumable_agent/ [](#__codelineno-2-3)[](#__codelineno-2-4)# resume the agent: [](#__codelineno-2-5)curl -X POST http://localhost:8000/run_sse \  [](#__codelineno-2-6) -H "Content-Type: application/json" \ [](#__codelineno-2-7) -d '{   [](#__codelineno-2-8)   "app_name": "my_resumable_agent",   [](#__codelineno-2-9)   "user_id": "u_123",   [](#__codelineno-2-10)   "session_id": "s_abc",   [](#__codelineno-2-11)   "invocation_id": "invocation-123" [](#__codelineno-2-12) }'`

You can also resume a workflow using the Runner object Run Async method, as shown below:

PythonKotlin

`[](#__codelineno-3-1)async for event in runner.run_async(user_id='u_123', session_id='s_abc',     [](#__codelineno-3-2)    invocation_id='invocation-123'):  [](#__codelineno-3-3)  print(event) [](#__codelineno-3-4)[](#__codelineno-3-5)# When new_message is set to a function response, [](#__codelineno-3-6)# we are trying to resume a long running function.`

`[](#__codelineno-4-1)fun resumeAgent(runner: InMemoryRunner) =     [](#__codelineno-4-2)    runBlocking {        [](#__codelineno-4-3)        runner            [](#__codelineno-4-4)            .runAsync(                [](#__codelineno-4-5)                userId = "user123",                [](#__codelineno-4-6)                sessionId = "session456",                [](#__codelineno-4-7)                invocationId = "previous-invocation-id",            [](#__codelineno-4-8)            ).collect { event ->                [](#__codelineno-4-9)                // resume execution from previous state            [](#__codelineno-4-10)            }    [](#__codelineno-4-11)    }`

Note

Resuming a workflow from the ADK Web user interface or using the ADK command line (CLI) tool is not currently supported.

## How it works[¶](#how-it-works "Permanent link")

The Resume feature works by logging completed Agent workflow tasks, including incremental steps using [Events](/events/) and [Event Actions](/events/#detecting-actions-and-side-effects). tracking completion of agent tasks within a resumable workflow. If a workflow is interrupted and then later restarted, the system resumes the workflow by setting the completion state of each agent. If an agent did not complete, the workflow system reinstates any completed Events for that agent, and restarts the workflow from the partially completed state. For multi-agent workflows, the specific resume behavior varies, based on the multi-agent classes in your workflow, as described below:

-   **Sequential Agent**: Reads the current\_sub\_agent from its saved state to find the next sub-agent to run in the sequence.
-   **Loop Agent**: Uses the current\_sub\_agent and times\_looped values to continue the loop from the last completed iteration and sub-agent.
-   **Parallel Agent**: Determines which sub-agents have already completed and only runs those that have not finished.

Event logging includes results from Tools which successfully returned a result. So if an agent successfully executed Function Tools A and B, and then failed during execution of tool C, the system reinstates the results from the tools A and B, and resumes the workflow by re-running the tool C request.

Caution: Tool execution behavior

When resuming a workflow with Tools, the Resume feature ensures that the Tools in an agent are run ***at least once***, and may run more than once when resuming a workflow. If your agent uses Tools where duplicate runs would have a negative impact, such as purchases, you should modify the Tool to check for and prevent duplicate runs.

Note: Workflow modification with Resume not supported

Do not modify a stopped agent workflow before resuming it. For example adding or removing agents from workflow that has stopped and then resuming that workflow is not supported.

## Add resume to custom Agents[¶](#custom-agents "Permanent link")

Custom agents have specific implementation requirements in order to support resumability. You must decide on and define workflow steps within your custom agent which produce a result which can be preserved before handing off to the next step of processing. The following steps outline how to modify a Custom Agent to support a workflow Resume.

-   **Create CustomAgentState class**: Extend the BaseAgentState to create an object that preserves the state of your agent.
    -   **Optionally, create WorkFlowStep class**: If your custom agent has sequential steps, consider creating a WorkFlowStep list object that defines the discrete, savable steps of the agent.
-   **Add initial agent state:** Modify your agent's async run function to set the initial state of your agent.
-   **Add agent state checkpoints**: Modify your agent's async run function to generate and save the agent state for each completed step of the agent's overall task.
-   **Add end of agent status to track agent state:** Modify your agent's async run function to include an `end_of_agent=True` status upon successful completion of the agent's full task.

The following example shows the required code modifications to the example StoryFlowAgent class shown in the [Custom Agents](/agents/custom-agents/#full-code-example) guide:

`[](#__codelineno-5-1)class WorkflowStep(int, Enum):  [](#__codelineno-5-2) INITIAL_STORY_GENERATION = 1 [](#__codelineno-5-3) CRITIC_REVISER_LOOP = 2 [](#__codelineno-5-4) POST_PROCESSING = 3 [](#__codelineno-5-5) CONDITIONAL_REGENERATION = 4 [](#__codelineno-5-6)[](#__codelineno-5-7)# Extend BaseAgentState [](#__codelineno-5-8)[](#__codelineno-5-9)class StoryFlowAgentState(BaseAgentState):   [](#__codelineno-5-10)  step: WorkflowStep [](#__codelineno-5-11)[](#__codelineno-5-12)# In the StoryFlowAgent class, replace the existing run implementation with: [](#__codelineno-5-13)[](#__codelineno-5-14)@override [](#__codelineno-5-15)async def _run_async_impl(     [](#__codelineno-5-16)    self, ctx: InvocationContext [](#__codelineno-5-17)) -> AsyncGenerator[Event, None]:     [](#__codelineno-5-18)    """    [](#__codelineno-5-19)    Implements the custom orchestration logic for the story workflow.    [](#__codelineno-5-20)    Uses the instance attributes assigned by Pydantic (e.g., self.story_generator).    [](#__codelineno-5-21)    """    [](#__codelineno-5-22)    agent_state = self._load_agent_state(ctx, StoryFlowAgentState) [](#__codelineno-5-23)    [](#__codelineno-5-24)    if agent_state is None:      [](#__codelineno-5-25)      # Record the start of the agent      [](#__codelineno-5-26)      agent_state = StoryFlowAgentState(step=WorkflowStep.INITIAL_STORY_GENERATION)      [](#__codelineno-5-27)      ctx.set_agent_state(self.name, agent_state=agent_state)      [](#__codelineno-5-28)      yield self._create_agent_state_event(ctx) [](#__codelineno-5-29)    [](#__codelineno-5-30)    next_step = agent_state.step    [](#__codelineno-5-31)    logger.info(f"[{self.name}] Starting story generation workflow.") [](#__codelineno-5-32)    [](#__codelineno-5-33)    # Step 1. Initial Story Generation    [](#__codelineno-5-34)    if next_step <= WorkflowStep.INITIAL_STORY_GENERATION:      [](#__codelineno-5-35)      logger.info(f"[{self.name}] Running StoryGenerator...")      [](#__codelineno-5-36)      async for event in self.story_generator.run_async(ctx):          [](#__codelineno-5-37)          yield event [](#__codelineno-5-38)      [](#__codelineno-5-39)      # Check if story was generated before proceeding      [](#__codelineno-5-40)      if "current_story" not in ctx.session.state or not ctx.session.state[          [](#__codelineno-5-41)          "current_story"      [](#__codelineno-5-42)      ]:          [](#__codelineno-5-43)          return  # Stop processing if initial story failed [](#__codelineno-5-44)    [](#__codelineno-5-45)    agent_state = StoryFlowAgentState(step=WorkflowStep.CRITIC_REVISER_LOOP)    [](#__codelineno-5-46)    ctx.set_agent_state(self.name, agent_state=agent_state)    [](#__codelineno-5-47)    yield self._create_agent_state_event(ctx) [](#__codelineno-5-48)    [](#__codelineno-5-49)    # Step 2. Critic-Reviser Loop    [](#__codelineno-5-50)    if next_step <= WorkflowStep.CRITIC_REVISER_LOOP:      [](#__codelineno-5-51)      logger.info(f"[{self.name}] Running CriticReviserLoop...")      [](#__codelineno-5-52)      async for event in self.loop_agent.run_async(ctx):          [](#__codelineno-5-53)          logger.info(              [](#__codelineno-5-54)              f"[{self.name}] Event from CriticReviserLoop: "              [](#__codelineno-5-55)              f"{event.model_dump_json(indent=2, exclude_none=True)}"          [](#__codelineno-5-56)          )          [](#__codelineno-5-57)          yield event [](#__codelineno-5-58)    [](#__codelineno-5-59)    agent_state = StoryFlowAgentState(step=WorkflowStep.POST_PROCESSING)    [](#__codelineno-5-60)    ctx.set_agent_state(self.name, agent_state=agent_state)    [](#__codelineno-5-61)    yield self._create_agent_state_event(ctx) [](#__codelineno-5-62)    [](#__codelineno-5-63)    # Step 3. Sequential Post-Processing (Grammar and Tone Check)    [](#__codelineno-5-64)    if next_step <= WorkflowStep.POST_PROCESSING:      [](#__codelineno-5-65)      logger.info(f"[{self.name}] Running PostProcessing...")      [](#__codelineno-5-66)      async for event in self.sequential_agent.run_async(ctx):          [](#__codelineno-5-67)          logger.info(              [](#__codelineno-5-68)              f"[{self.name}] Event from PostProcessing: "              [](#__codelineno-5-69)              f"{event.model_dump_json(indent=2, exclude_none=True)}"          [](#__codelineno-5-70)          )          [](#__codelineno-5-71)          yield event [](#__codelineno-5-72)    [](#__codelineno-5-73)    agent_state = StoryFlowAgentState(step=WorkflowStep.CONDITIONAL_REGENERATION)    [](#__codelineno-5-74)    ctx.set_agent_state(self.name, agent_state=agent_state)    [](#__codelineno-5-75)    yield self._create_agent_state_event(ctx) [](#__codelineno-5-76)    [](#__codelineno-5-77)    # Step 4. Tone-Based Conditional Logic    [](#__codelineno-5-78)    if next_step <= WorkflowStep.CONDITIONAL_REGENERATION:      [](#__codelineno-5-79)      tone_check_result = ctx.session.state.get("tone_check_result")      [](#__codelineno-5-80)      if tone_check_result == "negative":          [](#__codelineno-5-81)          logger.info(f"[{self.name}] Tone is negative. Regenerating story...")          [](#__codelineno-5-82)          async for event in self.story_generator.run_async(ctx):              [](#__codelineno-5-83)              logger.info(                  [](#__codelineno-5-84)                  f"[{self.name}] Event from StoryGenerator (Regen): "                  [](#__codelineno-5-85)                  f"{event.model_dump_json(indent=2, exclude_none=True)}"              [](#__codelineno-5-86)              )              [](#__codelineno-5-87)              yield event      [](#__codelineno-5-88)      else:          [](#__codelineno-5-89)          logger.info(f"[{self.name}] Tone is not negative. Keeping current story.") [](#__codelineno-5-90)    [](#__codelineno-5-91)    logger.info(f"[{self.name}] Workflow finished.")    [](#__codelineno-5-92)    ctx.set_agent_state(self.name, end_of_agent=True)    [](#__codelineno-5-93)    yield self._create_agent_state_event(ctx)`

Back to top