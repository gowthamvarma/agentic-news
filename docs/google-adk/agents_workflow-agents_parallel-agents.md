---
title: "Parallel workflow - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/workflow-agents/parallel-agents/
date: 2026-10-10T19:16:27.163Z
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
        -   [Template workflows](../)
            
            Template workflows
            
            -   [Sequential workflow](../sequential-agents/)
            -   [Loop workflow](../loop-agents/)
            -    Parallel workflow [Parallel workflow](./)
                
                Table of contents
                
                -   [How it works](#how-it-works)
                -   [Independent Execution and State Management](#independent-execution-and-state-management)
                -   [Full Example: Parallel Web Research](#full-example-parallel-web-research)
                
            -   [Custom template workflows](../../custom-agents/)
            
        -   [Agent routing](../../routing/)
        -   [Workflow patterns](../../../workflows/patterns/)
        
    -   [Models for Agents](../../models/)
        
        Models for Agents
        
        -   [Gemini](../../models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../../models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../../models/google-gemma/)
        -   [Claude](../../models/anthropic/)
        -   [Agent Platform hosted](../../models/agent-platform/)
        -   [Apigee AI Gateway](../../models/apigee/)
        -   [Model routing](../../models/routing/)
        -   [OpenAI](../../models/openai/)
        -   [Ollama](../../models/ollama/)
        -   [vLLM](../../models/vllm/)
        -   [LiteLLM](../../models/litellm/)
        -   [LiteRT-LM](../../models/litert-lm/)
        
    
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

-   [How it works](#how-it-works)
-   [Independent Execution and State Management](#independent-execution-and-state-management)
-   [Full Example: Parallel Web Research](#full-example-parallel-web-research)

1.  [Home](../../..)
2.  [Build Agents](../../../get-started/)
3.  [Multi-Agent Workflows](../../../workflows/)
4.  [Template workflows](../)

[](https://github.com/google/adk-docs/edit/main/docs/agents/workflow-agents/parallel-agents.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Parallel template workflow agent[¶](#parallel-template-workflow-agent "Permanent link")

Supported in ADKPython v0.1.0TypeScript v0.2.0Go v0.1.0Java v0.2.0

The ***ParallelAgent*** class is a [template workflow](/agents/workflow-agents/) agent that executes its sub-agents concurrently. This execution strategy can dramatically speed up workflows where two or more tasks can be performed independently. For scenarios prioritizing speed and involving independent, resource-intensive tasks, this templated workflow facilitates parallel execution, which can significantly reduce overall processing time. When using this workflow type, it is important that each sub-agent can operate without depending on the other sub-agents. This workflow type is particularly beneficial for operations like multi-source data retrieval or heavy computations, where parallelization yields substantial performance gains.

As with other templated workflows, the execution of a ***ParallelAgent*** object is not controlled by an AI model, and is deterministic in how it executes its sub-agents. The sub-agents specified in the parallel execution set may or may not utilize AI models, but the overall execution of those sub-agents is ultimately managed by the ***ParallelAgent*** object you define.

Alternative: graph-based workflows

Starting in ADK 2.0 for Python and Go, templated workflows have been superseded

by more flexible workflow structures, including [graph-based workflows](/graphs/) and [dynamic workflows](/graphs/dynamic/).

### How it works[¶](#how-it-works "Permanent link")

When the `ParallelAgent`'s `run_async()` method is called:

1.  **Concurrent Execution:** It initiates the `run_async()` method of *each* sub-agent present in the `sub_agents` list *concurrently*. This means all the agents start running at (approximately) the same time.
2.  **Independent Branches:** Each sub-agent operates in its own execution branch. There is ***no* automatic sharing of conversation history or state between these branches** during execution.
3.  **Result Collection:** The `ParallelAgent` manages the parallel execution and, typically, provides a way to access the results from each sub-agent after they have completed (e.g., through a list of results or events). The order of results may not be deterministic.

### Independent Execution and State Management[¶](#independent-execution-and-state-management "Permanent link")

It's *crucial* to understand that sub-agents within a `ParallelAgent` run independently. If you *need* communication or data sharing between these agents, you must implement it explicitly. Possible approaches include:

-   **Shared `InvocationContext`:** You could pass a shared `InvocationContext` object to each sub-agent. This object could act as a shared data store. However, you'd need to manage concurrent access to this shared context carefully (e.g., using locks) to avoid race conditions.
-   **External State Management:** Use an external database, message queue, or other mechanism to manage shared state and facilitate communication between agents.
-   **Post-Processing:** Collect results from each branch, and then implement logic to coordinate data afterwards.

![Parallel Agent](./images/img_7ce9aa9f9b.png)

### Full Example: Parallel Web Research[¶](#full-example-parallel-web-research "Permanent link")

Imagine researching multiple topics simultaneously:

1.  **Researcher Agent 1:** An `LlmAgent` that researches "renewable energy sources."
2.  **Researcher Agent 2:** An `LlmAgent` that researches "electric vehicle technology."
3.  **Researcher Agent 3:** An `LlmAgent` that researches "carbon capture methods."
    
    `[](#__codelineno-0-1)ParallelAgent(sub_agents=[ResearcherAgent1, ResearcherAgent2, ResearcherAgent3])`
    

These research tasks are independent. Using a `ParallelAgent` allows them to run concurrently, potentially reducing the total research time significantly compared to running them sequentially. The results from each agent would be collected separately after they finish.

Full Code

PythonTypeScriptGoJava

 `[](#__codelineno-1-1) from google.adk.agents.parallel_agent import ParallelAgent [](#__codelineno-1-2) from google.adk.agents.llm_agent import LlmAgent [](#__codelineno-1-3) from google.adk.agents.sequential_agent import SequentialAgent [](#__codelineno-1-4) from google.adk.tools import google_search [](#__codelineno-1-5) [](#__codelineno-1-6) # --- Constants --- [](#__codelineno-1-7) GEMINI_MODEL = "gemini-2.5-flash" [](#__codelineno-1-8) [](#__codelineno-1-9) # --- 1. Define Researcher Sub-Agents (to run in parallel) --- [](#__codelineno-1-10) # Researcher 1: Renewable Energy [](#__codelineno-1-11) researcher_agent_1 = LlmAgent(     [](#__codelineno-1-12)     name="RenewableEnergyResearcher",     [](#__codelineno-1-13)     model=GEMINI_MODEL,     [](#__codelineno-1-14)     instruction="""     [](#__codelineno-1-15)     You are an AI Research Assistant specializing in energy.     [](#__codelineno-1-16)     Research the latest advancements in 'renewable energy sources'.     [](#__codelineno-1-17)     Use the Google Search tool provided.     [](#__codelineno-1-18)     Summarize your key findings concisely (1-2 sentences).     [](#__codelineno-1-19)     Output *only* the summary.     [](#__codelineno-1-20)     """,     [](#__codelineno-1-21)     description="Researches renewable energy sources.",     [](#__codelineno-1-22)     tools=[google_search],     [](#__codelineno-1-23)     # Store result in state for the merger agent     [](#__codelineno-1-24)     output_key="renewable_energy_result" [](#__codelineno-1-25) ) [](#__codelineno-1-26) [](#__codelineno-1-27) # Researcher 2: Electric Vehicles [](#__codelineno-1-28) researcher_agent_2 = LlmAgent(     [](#__codelineno-1-29)     name="EVResearcher",     [](#__codelineno-1-30)     model=GEMINI_MODEL,     [](#__codelineno-1-31)     instruction="""     [](#__codelineno-1-32)     You are an AI Research Assistant specializing in transportation.     [](#__codelineno-1-33)     Research the latest developments in 'electric vehicle technology'.     [](#__codelineno-1-34)     Use the Google Search tool provided.     [](#__codelineno-1-35)     Summarize your key findings concisely (1-2 sentences).     [](#__codelineno-1-36)     Output *only* the summary.     [](#__codelineno-1-37)     """,     [](#__codelineno-1-38)     description="Researches electric vehicle technology.",     [](#__codelineno-1-39)     tools=[google_search],     [](#__codelineno-1-40)     # Store result in state for the merger agent     [](#__codelineno-1-41)     output_key="ev_technology_result" [](#__codelineno-1-42) ) [](#__codelineno-1-43) [](#__codelineno-1-44) # Researcher 3: Carbon Capture [](#__codelineno-1-45) researcher_agent_3 = LlmAgent(     [](#__codelineno-1-46)     name="CarbonCaptureResearcher",     [](#__codelineno-1-47)     model=GEMINI_MODEL,     [](#__codelineno-1-48)     instruction="""     [](#__codelineno-1-49)     You are an AI Research Assistant specializing in climate solutions.     [](#__codelineno-1-50)     Research the current state of 'carbon capture methods'.     [](#__codelineno-1-51)     Use the Google Search tool provided.     [](#__codelineno-1-52)     Summarize your key findings concisely (1-2 sentences).     [](#__codelineno-1-53)     Output *only* the summary.     [](#__codelineno-1-54)     """,     [](#__codelineno-1-55)     description="Researches carbon capture methods.",     [](#__codelineno-1-56)     tools=[google_search],     [](#__codelineno-1-57)     # Store result in state for the merger agent     [](#__codelineno-1-58)     output_key="carbon_capture_result" [](#__codelineno-1-59) ) [](#__codelineno-1-60) [](#__codelineno-1-61) # --- 2. Create the ParallelAgent (Runs researchers concurrently) --- [](#__codelineno-1-62) # This agent orchestrates the concurrent execution of the researchers. [](#__codelineno-1-63) # It finishes once all researchers have completed and stored their results in state. [](#__codelineno-1-64) parallel_research_agent = ParallelAgent(     [](#__codelineno-1-65)     name="ParallelWebResearchAgent",     [](#__codelineno-1-66)     sub_agents=[researcher_agent_1, researcher_agent_2, researcher_agent_3],     [](#__codelineno-1-67)     description="Runs multiple research agents in parallel to gather information." [](#__codelineno-1-68) ) [](#__codelineno-1-69) [](#__codelineno-1-70) # --- 3. Define the Merger Agent (Runs *after* the parallel agents) --- [](#__codelineno-1-71) # This agent takes the results stored in the session state by the parallel agents [](#__codelineno-1-72) # and synthesizes them into a single, structured response with attributions. [](#__codelineno-1-73) merger_agent = LlmAgent(     [](#__codelineno-1-74)     name="SynthesisAgent",     [](#__codelineno-1-75)     model=GEMINI_MODEL,  # Or potentially a more powerful model if needed for synthesis     [](#__codelineno-1-76)     instruction="""     [](#__codelineno-1-77)     You are an AI Assistant responsible for combining research findings into a structured report. [](#__codelineno-1-78)     [](#__codelineno-1-79)     Your primary task is to synthesize the following research summaries, clearly attributing findings to their source areas. Structure your response using headings for each topic. Ensure the report is coherent and integrates the key points smoothly. [](#__codelineno-1-80)     [](#__codelineno-1-81)     **Crucially: Your entire response MUST be grounded *exclusively* on the information provided in the 'Input Summaries' below. Do NOT add any external knowledge, facts, or details not present in these specific summaries.** [](#__codelineno-1-82)     [](#__codelineno-1-83)     **Input Summaries:** [](#__codelineno-1-84)     [](#__codelineno-1-85)     *   **Renewable Energy:**         [](#__codelineno-1-86)         {renewable_energy_result} [](#__codelineno-1-87)     [](#__codelineno-1-88)     *   **Electric Vehicles:**         [](#__codelineno-1-89)         {ev_technology_result} [](#__codelineno-1-90)     [](#__codelineno-1-91)     *   **Carbon Capture:**         [](#__codelineno-1-92)         {carbon_capture_result} [](#__codelineno-1-93)     [](#__codelineno-1-94)     **Output Format:** [](#__codelineno-1-95)     [](#__codelineno-1-96)     ## Summary of Recent Sustainable Technology Advancements [](#__codelineno-1-97)     [](#__codelineno-1-98)     ### Renewable Energy Findings     [](#__codelineno-1-99)     (Based on RenewableEnergyResearcher's findings)     [](#__codelineno-1-100)     [Synthesize and elaborate *only* on the renewable energy input summary provided above.] [](#__codelineno-1-101)     [](#__codelineno-1-102)     ### Electric Vehicle Findings     [](#__codelineno-1-103)     (Based on EVResearcher's findings)     [](#__codelineno-1-104)     [Synthesize and elaborate *only* on the EV input summary provided above.] [](#__codelineno-1-105)     [](#__codelineno-1-106)     ### Carbon Capture Findings     [](#__codelineno-1-107)     (Based on CarbonCaptureResearcher's findings)     [](#__codelineno-1-108)     [Synthesize and elaborate *only* on the carbon capture input summary provided above.] [](#__codelineno-1-109)     [](#__codelineno-1-110)     ### Overall Conclusion     [](#__codelineno-1-111)     [Provide a brief (1-2 sentence) concluding statement that connects *only* the findings presented above.] [](#__codelineno-1-112)     [](#__codelineno-1-113)     Output *only* the structured report following this format. Do not include introductory or concluding phrases outside this structure, and strictly adhere to using only the provided input summary content.     [](#__codelineno-1-114)     """,     [](#__codelineno-1-115)     description="Combines research findings from parallel agents into a structured, cited report, strictly grounded on provided inputs.",     [](#__codelineno-1-116)     # No tools needed for merging     [](#__codelineno-1-117)     # No output_key needed here, as its direct response is the final output of the sequence [](#__codelineno-1-118) ) [](#__codelineno-1-119) [](#__codelineno-1-120) [](#__codelineno-1-121) # --- 4. Create the SequentialAgent (Orchestrates the overall flow) --- [](#__codelineno-1-122) # This is the main agent that will be run. It first executes the ParallelAgent [](#__codelineno-1-123) # to populate the state, and then executes the MergerAgent to produce the final output. [](#__codelineno-1-124) sequential_pipeline_agent = SequentialAgent(     [](#__codelineno-1-125)     name="ResearchAndSynthesisPipeline",     [](#__codelineno-1-126)     # Run parallel research first, then merge     [](#__codelineno-1-127)     sub_agents=[parallel_research_agent, merger_agent],     [](#__codelineno-1-128)     description="Coordinates parallel research and synthesizes the results." [](#__codelineno-1-129) ) [](#__codelineno-1-130) [](#__codelineno-1-131) root_agent = sequential_pipeline_agent`

 ``[](#__codelineno-2-1) // Part of agent.ts --> Follow https://adk.dev/get-started/ to learn the setup [](#__codelineno-2-2) // --- 1. Define Researcher Sub-Agents (to run in parallel) --- [](#__codelineno-2-3) [](#__codelineno-2-4) const researchTools = [GOOGLE_SEARCH]; [](#__codelineno-2-5) [](#__codelineno-2-6) // Researcher 1: Renewable Energy [](#__codelineno-2-7) const researcherAgent1 = new LlmAgent({     [](#__codelineno-2-8)     name: "RenewableEnergyResearcher",     [](#__codelineno-2-9)     model: GEMINI_MODEL,     [](#__codelineno-2-10)     instruction: `You are an AI Research Assistant specializing in energy. [](#__codelineno-2-11) Research the latest advancements in 'renewable energy sources'. [](#__codelineno-2-12) Use the Google Search tool provided. [](#__codelineno-2-13) Summarize your key findings concisely (1-2 sentences). [](#__codelineno-2-14) Output *only* the summary. [](#__codelineno-2-15) `,     [](#__codelineno-2-16)     description: "Researches renewable energy sources.",     [](#__codelineno-2-17)     tools: researchTools,     [](#__codelineno-2-18)     // Store result in state for the merger agent     [](#__codelineno-2-19)     outputKey: "renewable_energy_result" [](#__codelineno-2-20) }); [](#__codelineno-2-21) [](#__codelineno-2-22) // Researcher 2: Electric Vehicles [](#__codelineno-2-23) const researcherAgent2 = new LlmAgent({     [](#__codelineno-2-24)     name: "EVResearcher",     [](#__codelineno-2-25)     model: GEMINI_MODEL,     [](#__codelineno-2-26)     instruction: `You are an AI Research Assistant specializing in transportation. [](#__codelineno-2-27) Research the latest developments in 'electric vehicle technology'. [](#__codelineno-2-28) Use the Google Search tool provided. [](#__codelineno-2-29) Summarize your key findings concisely (1-2 sentences). [](#__codelineno-2-30) Output *only* the summary. [](#__codelineno-2-31) `,     [](#__codelineno-2-32)     description: "Researches electric vehicle technology.",     [](#__codelineno-2-33)     tools: researchTools,     [](#__codelineno-2-34)     // Store result in state for the merger agent     [](#__codelineno-2-35)     outputKey: "ev_technology_result" [](#__codelineno-2-36) }); [](#__codelineno-2-37) [](#__codelineno-2-38) // Researcher 3: Carbon Capture [](#__codelineno-2-39) const researcherAgent3 = new LlmAgent({     [](#__codelineno-2-40)     name: "CarbonCaptureResearcher",     [](#__codelineno-2-41)     model: GEMINI_MODEL,     [](#__codelineno-2-42)     instruction: `You are an AI Research Assistant specializing in climate solutions. [](#__codelineno-2-43) Research the current state of 'carbon capture methods'. [](#__codelineno-2-44) Use the Google Search tool provided. [](#__codelineno-2-45) Summarize your key findings concisely (1-2 sentences). [](#__codelineno-2-46) Output *only* the summary. [](#__codelineno-2-47) `,     [](#__codelineno-2-48)     description: "Researches carbon capture methods.",     [](#__codelineno-2-49)     tools: researchTools,     [](#__codelineno-2-50)     // Store result in state for the merger agent     [](#__codelineno-2-51)     outputKey: "carbon_capture_result" [](#__codelineno-2-52) }); [](#__codelineno-2-53) [](#__codelineno-2-54) // --- 2. Create the ParallelAgent (Runs researchers concurrently) --- [](#__codelineno-2-55) // This agent orchestrates the concurrent execution of the researchers. [](#__codelineno-2-56) // It finishes once all researchers have completed and stored their results in state. [](#__codelineno-2-57) const parallelResearchAgent = new ParallelAgent({     [](#__codelineno-2-58)     name: "ParallelWebResearchAgent",     [](#__codelineno-2-59)     subAgents: [researcherAgent1, researcherAgent2, researcherAgent3],     [](#__codelineno-2-60)     description: "Runs multiple research agents in parallel to gather information." [](#__codelineno-2-61) }); [](#__codelineno-2-62) [](#__codelineno-2-63) // --- 3. Define the Merger Agent (Runs *after* the parallel agents) --- [](#__codelineno-2-64) // This agent takes the results stored in the session state by the parallel agents [](#__codelineno-2-65) // and synthesizes them into a single, structured response with attributions. [](#__codelineno-2-66) const mergerAgent = new LlmAgent({     [](#__codelineno-2-67)     name: "SynthesisAgent",     [](#__codelineno-2-68)     model: GEMINI_MODEL,  // Or potentially a more powerful model if needed for synthesis     [](#__codelineno-2-69)     instruction: `You are an AI Assistant responsible for combining research findings into a structured report. [](#__codelineno-2-70) [](#__codelineno-2-71) Your primary task is to synthesize the following research summaries, clearly attributing findings to their source areas. Structure your response using headings for each topic. Ensure the report is coherent and integrates the key points smoothly. [](#__codelineno-2-72) [](#__codelineno-2-73) **Crucially: Your entire response MUST be grounded *exclusively* on the information provided in the 'Input Summaries' below. Do NOT add any external knowledge, facts, or details not present in these specific summaries.** [](#__codelineno-2-74) [](#__codelineno-2-75) **Input Summaries:** [](#__codelineno-2-76) [](#__codelineno-2-77) *   **Renewable Energy:**     [](#__codelineno-2-78)     {renewable_energy_result} [](#__codelineno-2-79) [](#__codelineno-2-80) *   **Electric Vehicles:**     [](#__codelineno-2-81)     {ev_technology_result} [](#__codelineno-2-82) [](#__codelineno-2-83) *   **Carbon Capture:**     [](#__codelineno-2-84)     {carbon_capture_result} [](#__codelineno-2-85) [](#__codelineno-2-86) **Output Format:** [](#__codelineno-2-87) [](#__codelineno-2-88) ## Summary of Recent Sustainable Technology Advancements [](#__codelineno-2-89) [](#__codelineno-2-90) ### Renewable Energy Findings [](#__codelineno-2-91) (Based on RenewableEnergyResearcher's findings) [](#__codelineno-2-92) [Synthesize and elaborate *only* on the renewable energy input summary provided above.] [](#__codelineno-2-93) [](#__codelineno-2-94) ### Electric Vehicle Findings [](#__codelineno-2-95) (Based on EVResearcher's findings) [](#__codelineno-2-96) [Synthesize and elaborate *only* on the EV input summary provided above.] [](#__codelineno-2-97) [](#__codelineno-2-98) ### Carbon Capture Findings [](#__codelineno-2-99) (Based on CarbonCaptureResearcher's findings) [](#__codelineno-2-100) [Synthesize and elaborate *only* on the carbon capture input summary provided above.] [](#__codelineno-2-101) [](#__codelineno-2-102) ### Overall Conclusion [](#__codelineno-2-103) [Provide a brief (1-2 sentence) concluding statement that connects *only* the findings presented above.] [](#__codelineno-2-104) [](#__codelineno-2-105) Output *only* the structured report following this format. Do not include introductory or concluding phrases outside this structure, and strictly adhere to using only the provided input summary content. [](#__codelineno-2-106) `,     [](#__codelineno-2-107)     description: "Combines research findings from parallel agents into a structured, cited report, strictly grounded on provided inputs.",     [](#__codelineno-2-108)     // No tools needed for merging     [](#__codelineno-2-109)     // No output_key needed here, as its direct response is the final output of the sequence [](#__codelineno-2-110) }); [](#__codelineno-2-111) [](#__codelineno-2-112) [](#__codelineno-2-113) // --- 4. Create the SequentialAgent (Orchestrates the overall flow) --- [](#__codelineno-2-114) // This is the main agent that will be run. It first executes the ParallelAgent [](#__codelineno-2-115) // to populate the state, and then executes the MergerAgent to produce the final output. [](#__codelineno-2-116) const rootAgent = new SequentialAgent({     [](#__codelineno-2-117)     name: "ResearchAndSynthesisPipeline",     [](#__codelineno-2-118)     // Run parallel research first, then merge     [](#__codelineno-2-119)     subAgents: [parallelResearchAgent, mergerAgent],     [](#__codelineno-2-120)     description: "Coordinates parallel research and synthesizes the results." [](#__codelineno-2-121) });``

    ``[](#__codelineno-3-1)    model, err := gemini.NewModel(ctx, modelName, &genai.ClientConfig{})    [](#__codelineno-3-2)    if err != nil {        [](#__codelineno-3-3)        return fmt.Errorf("failed to create model: %v", err)    [](#__codelineno-3-4)    } [](#__codelineno-3-5)    [](#__codelineno-3-6)    // --- 1. Define Researcher Sub-Agents (to run in parallel) ---    [](#__codelineno-3-7)    researcher1, err := llmagent.New(llmagent.Config{        [](#__codelineno-3-8)        Name:  "RenewableEnergyResearcher",        [](#__codelineno-3-9)        Model: model,        [](#__codelineno-3-10)        Instruction: `You are an AI Research Assistant specializing in energy. [](#__codelineno-3-11) Research the latest advancements in 'renewable energy sources'. [](#__codelineno-3-12) Use the Google Search tool provided. [](#__codelineno-3-13) Summarize your key findings concisely (1-2 sentences). [](#__codelineno-3-14) Output *only* the summary.`,        [](#__codelineno-3-15)        Description: "Researches renewable energy sources.",        [](#__codelineno-3-16)        OutputKey:   "renewable_energy_result",    [](#__codelineno-3-17)    })    [](#__codelineno-3-18)    if err != nil {        [](#__codelineno-3-19)        return err    [](#__codelineno-3-20)    }    [](#__codelineno-3-21)    researcher2, err := llmagent.New(llmagent.Config{        [](#__codelineno-3-22)        Name:  "EVResearcher",        [](#__codelineno-3-23)        Model: model,        [](#__codelineno-3-24)        Instruction: `You are an AI Research Assistant specializing in transportation. [](#__codelineno-3-25) Research the latest developments in 'electric vehicle technology'. [](#__codelineno-3-26) Use the Google Search tool provided. [](#__codelineno-3-27) Summarize your key findings concisely (1-2 sentences). [](#__codelineno-3-28) Output *only* the summary.`,        [](#__codelineno-3-29)        Description: "Researches electric vehicle technology.",        [](#__codelineno-3-30)        OutputKey:   "ev_technology_result",    [](#__codelineno-3-31)    })    [](#__codelineno-3-32)    if err != nil {        [](#__codelineno-3-33)        return err    [](#__codelineno-3-34)    }    [](#__codelineno-3-35)    researcher3, err := llmagent.New(llmagent.Config{        [](#__codelineno-3-36)        Name:  "CarbonCaptureResearcher",        [](#__codelineno-3-37)        Model: model,        [](#__codelineno-3-38)        Instruction: `You are an AI Research Assistant specializing in climate solutions. [](#__codelineno-3-39) Research the current state of 'carbon capture methods'. [](#__codelineno-3-40) Use the Google Search tool provided. [](#__codelineno-3-41) Summarize your key findings concisely (1-2 sentences). [](#__codelineno-3-42) Output *only* the summary.`,        [](#__codelineno-3-43)        Description: "Researches carbon capture methods.",        [](#__codelineno-3-44)        OutputKey:   "carbon_capture_result",    [](#__codelineno-3-45)    })    [](#__codelineno-3-46)    if err != nil {        [](#__codelineno-3-47)        return err    [](#__codelineno-3-48)    } [](#__codelineno-3-49)    [](#__codelineno-3-50)    // --- 2. Create the ParallelAgent (Runs researchers concurrently) ---    [](#__codelineno-3-51)    parallelResearchAgent, err := parallelagent.New(parallelagent.Config{        [](#__codelineno-3-52)        AgentConfig: agent.Config{            [](#__codelineno-3-53)            Name:        "ParallelWebResearchAgent",            [](#__codelineno-3-54)            Description: "Runs multiple research agents in parallel to gather information.",            [](#__codelineno-3-55)            SubAgents:   []agent.Agent{researcher1, researcher2, researcher3},        [](#__codelineno-3-56)        },    [](#__codelineno-3-57)    })    [](#__codelineno-3-58)    if err != nil {        [](#__codelineno-3-59)        return fmt.Errorf("failed to create parallel agent: %v", err)    [](#__codelineno-3-60)    } [](#__codelineno-3-61)    [](#__codelineno-3-62)    // --- 3. Define the Merger Agent (Runs *after* the parallel agents) ---    [](#__codelineno-3-63)    synthesisAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-3-64)        Name:  "SynthesisAgent",        [](#__codelineno-3-65)        Model: model,        [](#__codelineno-3-66)        Instruction: `You are an AI Assistant responsible for combining research findings into a structured report. [](#__codelineno-3-67) Your primary task is to synthesize the following research summaries, clearly attributing findings to their source areas. Structure your response using headings for each topic. Ensure the report is coherent and integrates the key points smoothly. [](#__codelineno-3-68) **Crucially: Your entire response MUST be grounded *exclusively* on the information provided in the 'Input Summaries' below. Do NOT add any external knowledge, facts, or details not present in these specific summaries.** [](#__codelineno-3-69) **Input Summaries:** [](#__codelineno-3-70) [](#__codelineno-3-71) *   **Renewable Energy:**     [](#__codelineno-3-72)     {renewable_energy_result} [](#__codelineno-3-73) [](#__codelineno-3-74) *   **Electric Vehicles:**     [](#__codelineno-3-75)     {ev_technology_result} [](#__codelineno-3-76) [](#__codelineno-3-77) *   **Carbon Capture:**     [](#__codelineno-3-78)     {carbon_capture_result} [](#__codelineno-3-79) [](#__codelineno-3-80) **Output Format:** [](#__codelineno-3-81) [](#__codelineno-3-82) ## Summary of Recent Sustainable Technology Advancements [](#__codelineno-3-83) [](#__codelineno-3-84) ### Renewable Energy Findings [](#__codelineno-3-85) (Based on RenewableEnergyResearcher's findings) [](#__codelineno-3-86) [Synthesize and elaborate *only* on the renewable energy input summary provided above.] [](#__codelineno-3-87) [](#__codelineno-3-88) ### Electric Vehicle Findings [](#__codelineno-3-89) (Based on EVResearcher's findings) [](#__codelineno-3-90) [Synthesize and elaborate *only* on the EV input summary provided above.] [](#__codelineno-3-91) [](#__codelineno-3-92) ### Carbon Capture Findings [](#__codelineno-3-93) (Based on CarbonCaptureResearcher's findings) [](#__codelineno-3-94) [Synthesize and elaborate *only* on the carbon capture input summary provided above.] [](#__codelineno-3-95) [](#__codelineno-3-96) ### Overall Conclusion [](#__codelineno-3-97) [Provide a brief (1-2 sentence) concluding statement that connects *only* the findings presented above.] [](#__codelineno-3-98) [](#__codelineno-3-99) Output *only* the structured report following this format. Do not include introductory or concluding phrases outside this structure, and strictly adhere to using only the provided input summary content.`,        [](#__codelineno-3-100)        Description: "Combines research findings from parallel agents into a structured, cited report, strictly grounded on provided inputs.",    [](#__codelineno-3-101)    })    [](#__codelineno-3-102)    if err != nil {        [](#__codelineno-3-103)        return fmt.Errorf("failed to create synthesis agent: %v", err)    [](#__codelineno-3-104)    } [](#__codelineno-3-105)    [](#__codelineno-3-106)    // --- 4. Create the SequentialAgent (Orchestrates the overall flow) ---    [](#__codelineno-3-107)    pipeline, err := sequentialagent.New(sequentialagent.Config{        [](#__codelineno-3-108)        AgentConfig: agent.Config{            [](#__codelineno-3-109)            Name:        "ResearchAndSynthesisPipeline",            [](#__codelineno-3-110)            Description: "Coordinates parallel research and synthesizes the results.",            [](#__codelineno-3-111)            SubAgents:   []agent.Agent{parallelResearchAgent, synthesisAgent},        [](#__codelineno-3-112)        },    [](#__codelineno-3-113)    })    [](#__codelineno-3-114)    if err != nil {        [](#__codelineno-3-115)        return fmt.Errorf("failed to create sequential agent pipeline: %v", err)    [](#__codelineno-3-116)    }``

 `[](#__codelineno-4-1) import com.google.adk.agents.LlmAgent; [](#__codelineno-4-2) import com.google.adk.agents.ParallelAgent; [](#__codelineno-4-3) import com.google.adk.agents.SequentialAgent; [](#__codelineno-4-4) import com.google.adk.events.Event; [](#__codelineno-4-5) import com.google.adk.runner.InMemoryRunner; [](#__codelineno-4-6) import com.google.adk.sessions.Session; [](#__codelineno-4-7) import com.google.adk.tools.GoogleSearchTool; [](#__codelineno-4-8) import com.google.genai.types.Content; [](#__codelineno-4-9) import com.google.genai.types.Part; [](#__codelineno-4-10) import io.reactivex.rxjava3.core.Flowable; [](#__codelineno-4-11) [](#__codelineno-4-12) public class ParallelResearchPipeline { [](#__codelineno-4-13)   [](#__codelineno-4-14)   private static final String APP_NAME = "parallel_research_app";   [](#__codelineno-4-15)   private static final String USER_ID = "research_user_01";   [](#__codelineno-4-16)   private static final String GEMINI_MODEL = "gemini-2.0-flash"; [](#__codelineno-4-17)   [](#__codelineno-4-18)   // Assume google_search is an instance of the GoogleSearchTool   [](#__codelineno-4-19)   private static final GoogleSearchTool googleSearchTool = new GoogleSearchTool(); [](#__codelineno-4-20)   [](#__codelineno-4-21)   public static void main(String[] args) {     [](#__codelineno-4-22)     String query = "Summarize recent sustainable tech advancements.";     [](#__codelineno-4-23)     SequentialAgent sequentialPipelineAgent = initAgent();     [](#__codelineno-4-24)     runAgent(sequentialPipelineAgent, query);   [](#__codelineno-4-25)   } [](#__codelineno-4-26)   [](#__codelineno-4-27)   public static SequentialAgent initAgent() {     [](#__codelineno-4-28)     // --- 1. Define Researcher Sub-Agents (to run in parallel) ---     [](#__codelineno-4-29)     // Researcher 1: Renewable Energy     [](#__codelineno-4-30)     LlmAgent researcherAgent1 = LlmAgent.builder()         [](#__codelineno-4-31)         .name("RenewableEnergyResearcher")         [](#__codelineno-4-32)         .model(GEMINI_MODEL)         [](#__codelineno-4-33)         .instruction("""                     [](#__codelineno-4-34)                     You are an AI Research Assistant specializing in energy.                     [](#__codelineno-4-35)                     Research the latest advancements in 'renewable energy sources'.                     [](#__codelineno-4-36)                     Use the Google Search tool provided.                     [](#__codelineno-4-37)                     Summarize your key findings concisely (1-2 sentences).                     [](#__codelineno-4-38)                     Output *only* the summary.                     [](#__codelineno-4-39)                     """)         [](#__codelineno-4-40)         .description("Researches renewable energy sources.")         [](#__codelineno-4-41)         .tools(googleSearchTool)         [](#__codelineno-4-42)         .outputKey("renewable_energy_result") // Store result in state         [](#__codelineno-4-43)         .build(); [](#__codelineno-4-44)     [](#__codelineno-4-45)     // Researcher 2: Electric Vehicles     [](#__codelineno-4-46)     LlmAgent researcherAgent2 = LlmAgent.builder()         [](#__codelineno-4-47)         .name("EVResearcher")         [](#__codelineno-4-48)         .model(GEMINI_MODEL)         [](#__codelineno-4-49)         .instruction("""                     [](#__codelineno-4-50)                     You are an AI Research Assistant specializing in transportation.                     [](#__codelineno-4-51)                     Research the latest developments in 'electric vehicle technology'.                     [](#__codelineno-4-52)                     Use the Google Search tool provided.                     [](#__codelineno-4-53)                     Summarize your key findings concisely (1-2 sentences).                     [](#__codelineno-4-54)                     Output *only* the summary.                     [](#__codelineno-4-55)                     """)         [](#__codelineno-4-56)         .description("Researches electric vehicle technology.")         [](#__codelineno-4-57)         .tools(googleSearchTool)         [](#__codelineno-4-58)         .outputKey("ev_technology_result") // Store result in state         [](#__codelineno-4-59)         .build(); [](#__codelineno-4-60)     [](#__codelineno-4-61)     // Researcher 3: Carbon Capture     [](#__codelineno-4-62)     LlmAgent researcherAgent3 = LlmAgent.builder()         [](#__codelineno-4-63)         .name("CarbonCaptureResearcher")         [](#__codelineno-4-64)         .model(GEMINI_MODEL)         [](#__codelineno-4-65)         .instruction("""                     [](#__codelineno-4-66)                     You are an AI Research Assistant specializing in climate solutions.                     [](#__codelineno-4-67)                     Research the current state of 'carbon capture methods'.                     [](#__codelineno-4-68)                     Use the Google Search tool provided.                     [](#__codelineno-4-69)                     Summarize your key findings concisely (1-2 sentences).                     [](#__codelineno-4-70)                     Output *only* the summary.                     [](#__codelineno-4-71)                     """)         [](#__codelineno-4-72)         .description("Researches carbon capture methods.")         [](#__codelineno-4-73)         .tools(googleSearchTool)         [](#__codelineno-4-74)         .outputKey("carbon_capture_result") // Store result in state         [](#__codelineno-4-75)         .build(); [](#__codelineno-4-76)     [](#__codelineno-4-77)     // --- 2. Create the ParallelAgent (Runs researchers concurrently) ---     [](#__codelineno-4-78)     // This agent orchestrates the concurrent execution of the researchers.     [](#__codelineno-4-79)     // It finishes once all researchers have completed and stored their results in state.     [](#__codelineno-4-80)     ParallelAgent parallelResearchAgent =         [](#__codelineno-4-81)         ParallelAgent.builder()             [](#__codelineno-4-82)             .name("ParallelWebResearchAgent")             [](#__codelineno-4-83)             .subAgents(researcherAgent1, researcherAgent2, researcherAgent3)             [](#__codelineno-4-84)             .description("Runs multiple research agents in parallel to gather information.")             [](#__codelineno-4-85)             .build(); [](#__codelineno-4-86)     [](#__codelineno-4-87)     // --- 3. Define the Merger Agent (Runs *after* the parallel agents) ---     [](#__codelineno-4-88)     // This agent takes the results stored in the session state by the parallel agents     [](#__codelineno-4-89)     // and synthesizes them into a single, structured response with attributions.     [](#__codelineno-4-90)     LlmAgent mergerAgent =         [](#__codelineno-4-91)         LlmAgent.builder()             [](#__codelineno-4-92)             .name("SynthesisAgent")             [](#__codelineno-4-93)             .model(GEMINI_MODEL)             [](#__codelineno-4-94)             .instruction(                 [](#__codelineno-4-95)                 """                       [](#__codelineno-4-96)                       You are an AI Assistant responsible for combining research findings into a structured report.                       [](#__codelineno-4-97)                       Your primary task is to synthesize the following research summaries, clearly attributing findings to their source areas. Structure your response using headings for each topic. Ensure the report is coherent and integrates the key points smoothly.                       [](#__codelineno-4-98)                       **Crucially: Your entire response MUST be grounded *exclusively* on the information provided in the 'Input Summaries' below. Do NOT add any external knowledge, facts, or details not present in these specific summaries.**                       [](#__codelineno-4-99)                       **Input Summaries:** [](#__codelineno-4-100)                       [](#__codelineno-4-101)                       *   **Renewable Energy:**                           [](#__codelineno-4-102)                           {renewable_energy_result} [](#__codelineno-4-103)                       [](#__codelineno-4-104)                       *   **Electric Vehicles:**                           [](#__codelineno-4-105)                           {ev_technology_result} [](#__codelineno-4-106)                       [](#__codelineno-4-107)                       *   **Carbon Capture:**                           [](#__codelineno-4-108)                           {carbon_capture_result} [](#__codelineno-4-109)                       [](#__codelineno-4-110)                       **Output Format:** [](#__codelineno-4-111)                       [](#__codelineno-4-112)                       ## Summary of Recent Sustainable Technology Advancements [](#__codelineno-4-113)                       [](#__codelineno-4-114)                       ### Renewable Energy Findings                       [](#__codelineno-4-115)                       (Based on RenewableEnergyResearcher's findings)                       [](#__codelineno-4-116)                       [Synthesize and elaborate *only* on the renewable energy input summary provided above.] [](#__codelineno-4-117)                       [](#__codelineno-4-118)                       ### Electric Vehicle Findings                       [](#__codelineno-4-119)                       (Based on EVResearcher's findings)                       [](#__codelineno-4-120)                       [Synthesize and elaborate *only* on the EV input summary provided above.] [](#__codelineno-4-121)                       [](#__codelineno-4-122)                       ### Carbon Capture Findings                       [](#__codelineno-4-123)                       (Based on CarbonCaptureResearcher's findings)                       [](#__codelineno-4-124)                       [Synthesize and elaborate *only* on the carbon capture input summary provided above.] [](#__codelineno-4-125)                       [](#__codelineno-4-126)                       ### Overall Conclusion                       [](#__codelineno-4-127)                       [Provide a brief (1-2 sentence) concluding statement that connects *only* the findings presented above.] [](#__codelineno-4-128)                       [](#__codelineno-4-129)                       Output *only* the structured report following this format. Do not include introductory or concluding phrases outside this structure, and strictly adhere to using only the provided input summary content.                       [](#__codelineno-4-130)                       """)             [](#__codelineno-4-131)             .description(                 [](#__codelineno-4-132)                 "Combines research findings from parallel agents into a structured, cited report, strictly grounded on provided inputs.")             [](#__codelineno-4-133)             // No tools needed for merging             [](#__codelineno-4-134)             // No output_key needed here, as its direct response is the final output of the sequence             [](#__codelineno-4-135)             .build(); [](#__codelineno-4-136)     [](#__codelineno-4-137)     // --- 4. Create the SequentialAgent (Orchestrates the overall flow) ---     [](#__codelineno-4-138)     // This is the main agent that will be run. It first executes the ParallelAgent     [](#__codelineno-4-139)     // to populate the state, and then executes the MergerAgent to produce the final output.     [](#__codelineno-4-140)     SequentialAgent sequentialPipelineAgent =         [](#__codelineno-4-141)         SequentialAgent.builder()             [](#__codelineno-4-142)             .name("ResearchAndSynthesisPipeline")             [](#__codelineno-4-143)             // Run parallel research first, then merge             [](#__codelineno-4-144)             .subAgents(parallelResearchAgent, mergerAgent)             [](#__codelineno-4-145)             .description("Coordinates parallel research and synthesizes the results.")             [](#__codelineno-4-146)             .build(); [](#__codelineno-4-147)     [](#__codelineno-4-148)     return sequentialPipelineAgent;   [](#__codelineno-4-149)   } [](#__codelineno-4-150)   [](#__codelineno-4-151)   public static void runAgent(SequentialAgent sequentialPipelineAgent, String query) {     [](#__codelineno-4-152)     // Create an InMemoryRunner     [](#__codelineno-4-153)     InMemoryRunner runner = new InMemoryRunner(sequentialPipelineAgent, APP_NAME);     [](#__codelineno-4-154)     // InMemoryRunner automatically creates a session service. Create a session using the service     [](#__codelineno-4-155)     Session session = runner.sessionService().createSession(APP_NAME, USER_ID).blockingGet();     [](#__codelineno-4-156)     Content userMessage = Content.fromParts(Part.fromText(query)); [](#__codelineno-4-157)     [](#__codelineno-4-158)     // Run the agent     [](#__codelineno-4-159)     Flowable<Event> eventStream = runner.runAsync(USER_ID, session.id(), userMessage); [](#__codelineno-4-160)     [](#__codelineno-4-161)     // Stream event response     [](#__codelineno-4-162)     eventStream.blockingForEach(         [](#__codelineno-4-163)         event -> {           [](#__codelineno-4-164)           if (event.finalResponse()) {             [](#__codelineno-4-165)             System.out.printf("Event Author: %s \n Event Response: %s \n\n\n", event.author(), event.stringifyContent());           [](#__codelineno-4-166)           }         [](#__codelineno-4-167)         });   [](#__codelineno-4-168)   } [](#__codelineno-4-169) }`

Back to top