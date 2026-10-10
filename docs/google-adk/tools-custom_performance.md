---
title: "Tool performance - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/performance/
date: 2026-10-10T19:17:02.852Z
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
            -    Tool performance [Tool performance](./)
                
                Table of contents
                
                -   [Build parallel-ready tools](#build-parallel-ready-tools)
                    
                    -   [Example of http web call](#example-of-http-web-call)
                    -   [Example of database call](#example-of-database-call)
                    -   [Example of yielding behavior for long loops](#example-of-yielding-behavior-for-long-loops)
                    -   [Example of thread pools for intensive operations](#example-of-thread-pools-for-intensive-operations)
                    -   [Example of process chunking](#example-of-process-chunking)
                    
                -   [Write parallel-ready prompts and tool descriptions](#write-parallel-ready-prompts-and-tool-descriptions)
                -   [Next steps](#next-steps)
                
            -   [Action confirmations](../confirmation/)
            
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

-   [Build parallel-ready tools](#build-parallel-ready-tools)
    
    -   [Example of http web call](#example-of-http-web-call)
    -   [Example of database call](#example-of-database-call)
    -   [Example of yielding behavior for long loops](#example-of-yielding-behavior-for-long-loops)
    -   [Example of thread pools for intensive operations](#example-of-thread-pools-for-intensive-operations)
    -   [Example of process chunking](#example-of-process-chunking)
    
-   [Write parallel-ready prompts and tool descriptions](#write-parallel-ready-prompts-and-tool-descriptions)
-   [Next steps](#next-steps)

1.  [Home](../..)
2.  [Components](../../get-started/about/)
3.  [Custom Tools](../)
4.  [Function tools](../function-tools/)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/performance.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Increase tool performance with parallel execution[¶](#increase-tool-performance-with-parallel-execution "Permanent link")

Supported in ADKPython v1.10.0

Starting with Agent Development Kit (ADK) version 1.10.0 for Python, the framework attempts to run any agent-requested [function tools](/tools-custom/function-tools/) in parallel. This behavior can significantly improve the performance and responsiveness of your agents, particularly for agents that rely on multiple external APIs or long-running tasks. For example, if you have 3 tools that each take 2 seconds, by running them in parallel, the total execution time will be closer to 2 seconds, instead of 6 seconds. The ability to run tool functions parallel can improve the performance of your agents, particularly in the following scenarios:

-   **Research tasks:** Where the agent collects information from multiple sources before proceeding to the next stage of the workflow.
-   **API calls:** Where the agent accesses several APIs independently, such as searching for available flights using APIs from multiple airlines.
-   **Publishing and communication tasks:** When the agent needs to publish or communicate through multiple, independent channels or multiple recipients.

However, your custom tools must be built with asynchronous execution support to enable this performance improvement. This guide explains how parallel tool execution works in the ADK and how to build your tools to take full advantage of this processing feature.

Warning

Any ADK Tools that use synchronous processing in a set of tool function calls will block other tools from executing in parallel, even if the other tools allow for parallel execution.

## Build parallel-ready tools[¶](#build-parallel-ready-tools "Permanent link")

Enable parallel execution of your tool functions by defining them as asynchronous functions. In Python code, this means using `async def` and `await` syntax which allows the ADK to run them concurrently in an `asyncio` event loop. The following sections show examples of agent tools built for parallel processing and asynchronous operations.

### Example of http web call[¶](#example-of-http-web-call "Permanent link")

The following code example show how to modify the `get_weather()` function to operate asynchronously and allow for parallel execution:

 `[](#__codelineno-0-1) async def get_weather(city: str) -> dict:      [](#__codelineno-0-2)      async with aiohttp.ClientSession() as session:          [](#__codelineno-0-3)          async with session.get(f"http://api.weather.com/{city}") as response:              [](#__codelineno-0-4)              return await response.json()`

### Example of database call[¶](#example-of-database-call "Permanent link")

The following code example show how to write a database calling function to operate asynchronously:

`[](#__codelineno-1-1)async def query_database(query: str) -> list:       [](#__codelineno-1-2)      async with asyncpg.connect("postgresql://...") as conn:          [](#__codelineno-1-3)          return await conn.fetch(query)`

### Example of yielding behavior for long loops[¶](#example-of-yielding-behavior-for-long-loops "Permanent link")

In cases where a tool is processing multiple requests or numerous long-running requests, consider adding yielding code to allow other tools to execute, as shown in the following code sample:

`[](#__codelineno-2-1)async def process_data(data: list) -> dict:       [](#__codelineno-2-2)      results = []      [](#__codelineno-2-3)      for i, item in enumerate(data):          [](#__codelineno-2-4)          processed = await process_item(item)  # Yield point          [](#__codelineno-2-5)          results.append(processed) [](#__codelineno-2-6)          [](#__codelineno-2-7)          # Add periodic yield points for long loops          [](#__codelineno-2-8)          if i % 100 == 0:              [](#__codelineno-2-9)              await asyncio.sleep(0)  # Yield control      [](#__codelineno-2-10)      return {"results": results}`

Important

Use the `asyncio.sleep()` function for pauses to avoid blocking execution of other functions.

### Example of thread pools for intensive operations[¶](#example-of-thread-pools-for-intensive-operations "Permanent link")

When performing processing-intensive functions, consider creating thread pools for better management of available computing resources, as shown in the following example:

`[](#__codelineno-3-1)async def cpu_intensive_tool(data: list) -> dict:       [](#__codelineno-3-2)      loop = asyncio.get_event_loop() [](#__codelineno-3-3)      [](#__codelineno-3-4)      # Use thread pool for CPU-bound work      [](#__codelineno-3-5)      with ThreadPoolExecutor() as executor:          [](#__codelineno-3-6)          result = await loop.run_in_executor(              [](#__codelineno-3-7)              executor,              [](#__codelineno-3-8)              expensive_computation,              [](#__codelineno-3-9)              data          [](#__codelineno-3-10)          )      [](#__codelineno-3-11)      return {"result": result}`

### Example of process chunking[¶](#example-of-process-chunking "Permanent link")

When performing processes on long lists or large amounts of data, consider combining a thread pool technique with dividing up processing into chunks of data, and yielding processing time between the chunks, as shown in the following example:

 `[](#__codelineno-4-1) async def process_large_dataset(dataset: list) -> dict:      [](#__codelineno-4-2)      results = []      [](#__codelineno-4-3)      chunk_size = 1000 [](#__codelineno-4-4)      [](#__codelineno-4-5)      for i in range(0, len(dataset), chunk_size):          [](#__codelineno-4-6)          chunk = dataset[i:i + chunk_size] [](#__codelineno-4-7)          [](#__codelineno-4-8)          # Process chunk in thread pool          [](#__codelineno-4-9)          loop = asyncio.get_event_loop()          [](#__codelineno-4-10)          with ThreadPoolExecutor() as executor:              [](#__codelineno-4-11)              chunk_result = await loop.run_in_executor(                  [](#__codelineno-4-12)                  executor, process_chunk, chunk              [](#__codelineno-4-13)              ) [](#__codelineno-4-14)          [](#__codelineno-4-15)          results.extend(chunk_result) [](#__codelineno-4-16)          [](#__codelineno-4-17)          # Yield control between chunks          [](#__codelineno-4-18)          await asyncio.sleep(0) [](#__codelineno-4-19)      [](#__codelineno-4-20)      return {"total_processed": len(results), "results": results}`

## Write parallel-ready prompts and tool descriptions[¶](#write-parallel-ready-prompts-and-tool-descriptions "Permanent link")

When building prompts for AI models, consider explicitly specifying or hinting that function calls be made in parallel. The following example of an AI prompt directs the model to use tools in parallel:

`[](#__codelineno-5-1)When users ask for multiple pieces of information, always call functions in [](#__codelineno-5-2)parallel. [](#__codelineno-5-3)  [](#__codelineno-5-4)  Examples:  [](#__codelineno-5-5)  - "Get weather for London and currency rate USD to EUR" → Call both functions    [](#__codelineno-5-6)    simultaneously  [](#__codelineno-5-7)  - "Compare cities A and B" → Call get_weather, get_population, get_distance in    [](#__codelineno-5-8)    parallel  [](#__codelineno-5-9)  - "Analyze multiple stocks" → Call get_stock_price for each stock in parallel [](#__codelineno-5-10)  [](#__codelineno-5-11)  Always prefer multiple specific function calls over single complex calls.`

The following example shows a tool function description that hints at more efficient use through parallel execution:

 `[](#__codelineno-6-1) async def get_weather(city: str) -> dict:      [](#__codelineno-6-2)      """Get current weather for a single city. [](#__codelineno-6-3)      [](#__codelineno-6-4)      This function is optimized for parallel execution - call multiple times for different cities. [](#__codelineno-6-5)      [](#__codelineno-6-6)      Args:          [](#__codelineno-6-7)          city: Name of the city, for example: 'London', 'New York' [](#__codelineno-6-8)      [](#__codelineno-6-9)      Returns:          [](#__codelineno-6-10)          Weather data including temperature, conditions, humidity      [](#__codelineno-6-11)      """      [](#__codelineno-6-12)      await asyncio.sleep(2)  # Simulate API call      [](#__codelineno-6-13)      return {"city": city, "temp": 72, "condition": "sunny"}`

## Next steps[¶](#next-steps "Permanent link")

For more information on building Tools for agents and function calling, see [Function Tools](/tools-custom/function-tools/). For more detailed examples of tools that take advantage of parallel processing, see the samples in the [adk-python](https://github.com/google/adk-python/tree/main/contributing/samples/tools/parallel_functions) repository.

Back to top