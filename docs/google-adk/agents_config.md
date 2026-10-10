---
title: "Agent Config - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/agents/config/
date: 2026-10-10T19:16:23.921Z
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
        -    Agent Config [Agent Config](./)
            
            Table of contents
            
            -   [Get started](#get-started)
                
                -   [Setup](#setup)
                -   [Build an agent](#build-an-agent)
                -   [Run the agent](#run-the-agent)
                -   [Run programmatically](#run-programmatically)
                
            -   [Example configs](#example-configs)
                
                -   [Built-in tool example](#built-in-tool-example)
                -   [Custom tool example](#custom-tool-example)
                -   [Sub-agents example](#sub-agents-example)
                
            -   [Deploy agent configs](#deploy-agent-configs)
            -   [Known limitations](#known-limitations)
            -   [Next steps](#next-steps)
            
        
    -   [Agents](../)
        
        Agents
        
        -   [Simple agents](../llm-agents/)
        -   [Managed agents](../managed-agents/)
        
    -   [Graph Workflows](../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../graphs/routes/)
        -   [Data handling](../../graphs/data-handling/)
        -   [Human input](../../graphs/human-input/)
        -   [Dynamic workflows](../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../workflows/collaboration/)
        -   [Template workflows](../workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../workflow-agents/sequential-agents/)
            -   [Loop workflow](../workflow-agents/loop-agents/)
            -   [Parallel workflow](../workflow-agents/parallel-agents/)
            -   [Custom template workflows](../custom-agents/)
            
        -   [Agent routing](../routing/)
        -   [Workflow patterns](../../workflows/patterns/)
        
    -   [Models for Agents](../models/)
        
        Models for Agents
        
        -   [Gemini](../models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../models/google-gemma/)
        -   [Claude](../models/anthropic/)
        -   [Agent Platform hosted](../models/agent-platform/)
        -   [Apigee AI Gateway](../models/apigee/)
        -   [Model routing](../models/routing/)
        -   [OpenAI](../models/openai/)
        -   [Ollama](../models/ollama/)
        -   [vLLM](../models/vllm/)
        -   [LiteLLM](../models/litellm/)
        -   [LiteRT-LM](../models/litert-lm/)
        
    
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

-   [Get started](#get-started)
    
    -   [Setup](#setup)
    -   [Build an agent](#build-an-agent)
    -   [Run the agent](#run-the-agent)
    -   [Run programmatically](#run-programmatically)
    
-   [Example configs](#example-configs)
    
    -   [Built-in tool example](#built-in-tool-example)
    -   [Custom tool example](#custom-tool-example)
    -   [Sub-agents example](#sub-agents-example)
    
-   [Deploy agent configs](#deploy-agent-configs)
-   [Known limitations](#known-limitations)
-   [Next steps](#next-steps)

1.  [Home](../..)
2.  [Build Agents](../../get-started/)
3.  [Build your Agent](../../tutorials/)

[](https://github.com/google/adk-docs/edit/main/docs/agents/config.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Build agents with Agent Config[¶](#build-agents-with-agent-config "Permanent link")

Supported in ADKPython v1.11.0Java v0.3.0Go v0.3.0Experimental

The ADK Agent Config feature lets you build an ADK workflow without writing code. An Agent Config uses a YAML format text file with a brief description of the agent, allowing just about anyone to assemble and run an ADK agent. The following is a simple example of a basic Agent Config definition:

`[](#__codelineno-0-1)name: assistant_agent [](#__codelineno-0-2)model: gemini-flash-latest [](#__codelineno-0-3)description: A helper agent that can answer users' questions. [](#__codelineno-0-4)instruction: You are an agent to help answer users' various questions.`

You can use Agent Config files to build more complex agents which can incorporate Functions, Tools, Sub-Agents, and more. This page describes how to build and run ADK workflows with the Agent Config feature. For detailed information on the syntax and settings supported by the Agent Config format, see the [Agent Config syntax reference](/api-reference/agentconfig/).

Experimental

The Agent Config feature is experimental and has some [known limitations](#known-limitations). We welcome your [feedback](https://github.com/google/adk-python/issues/new?template=feature_request.md&labels=agent%20config)!

## Get started[¶](#get-started "Permanent link")

This section describes how to set up and start building agents with the ADK and the Agent Config feature, including installation setup, building an agent, and running your agent.

### Setup[¶](#setup "Permanent link")

You need to install the Google Agent Development Kit libraries, and provide an access key for a generative AI model such as Gemini API. This section provides details on what you must install and configure before you can run agents with the Agent Config files.

Note

The Agent Config feature currently only supports Gemini models. For more information about additional; functional restrictions, see [Known limitations](#known-limitations).

To set up ADK for use with Agent Config:

1.  Install the ADK Python libraries by following the [Installation](/get-started/installation/#python) instructions. *Python is currently required.* For more information, see the [Known limitations](#known-limitations).
2.  Verify that ADK is installed by running the following command in your terminal:
    
    `adk --version`
    
    This command should show the ADK version you have installed.
    

Tip

If the `adk` command fails to run and the version is not listed in step 2, make sure your Python environment is active. Execute `source .venv/bin/activate` in your terminal on Mac and Linux. For other platform commands, see the [Installation](/get-started/installation/#python) page.

### Build an agent[¶](#build-an-agent "Permanent link")

You build an agent with Agent Config using the `adk create` command to create the project files for an agent, and then editing the `root_agent.yaml` file it generates for you.

To create an ADK project for use with Agent Config:

1.  In your terminal window, run the following command to create a config-based agent:
    
    `adk create --type=config my_agent`
    
    This command generates a `my_agent/` folder, containing a `root_agent.yaml` file and an `.env` file.
    
2.  In the `my_agent/.env` file, set environment variables for your agent to access generative AI models and other services:
    
    1.  For Gemini model access through Google API, add a line to the file with your API key:
        
        `GOOGLE_GENAI_USE_ENTERPRISE=0 GOOGLE_API_KEY=<your-Google-Gemini-API-key>`
        
        You can get an API key from the Google AI Studio [API Keys](https://aistudio.google.com/app/apikey) page.
        
    2.  For Gemini model access through Google Cloud, add these lines to the file:
        
        `GOOGLE_GENAI_USE_ENTERPRISE=1 GOOGLE_CLOUD_PROJECT=<your_gcp_project> GOOGLE_CLOUD_LOCATION=us-central1`
        
        For information on creating a Cloud Project, see the Google Cloud docs for [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects). For more information on connecting to Google Cloud from ADK agents, see [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/).
        
3.  Using text editor, edit the Agent Config file `my_agent/root_agent.yaml`, as shown below:
    

`[](#__codelineno-1-1)# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json [](#__codelineno-1-2)name: assistant_agent [](#__codelineno-1-3)model: gemini-flash-latest [](#__codelineno-1-4)description: A helper agent that can answer users' questions. [](#__codelineno-1-5)instruction: You are an agent to help answer users' various questions.`

You can discover more configuration options for your `root_agent.yaml` agent configuration file by referring to the ADK [samples repository](https://github.com/search?q=repo%3Agoogle%2Fadk-python+path%3A%2F%5Econtributing%5C%2Fsamples%5C%2F%2F+.yaml&type=code) or the [Agent Config syntax](/api-reference/agentconfig/) reference.

### Run the agent[¶](#run-the-agent "Permanent link")

Once you have completed editing your Agent Config, you can run your agent using the web interface, command line terminal execution, or API server mode.

To run your Agent Config-defined agent:

1.  In your terminal, navigate to the `my_agent/` directory containing the `root_agent.yaml` file.
2.  Type one of the following commands to run your agent:
    -   `adk web` - Run web UI interface for your agent.
    -   `adk run` - Run your agent in the terminal without a user interface.
    -   `adk api_server` - Run your agent as a service that can be used by other applications.

For more information on the ways to run your agent, see [Agent Runtime](/runtime/#ways-to-run-agents). For more information about the ADK command line options, see the [ADK CLI reference](/api-reference/cli/).

### Run programmatically[¶](#run-programmatically "Permanent link")

You can also bypass the CLI and dynamically load and execute a configuration-based agent directly in your code. The utility loads the configuration and instantiates the proper agent class (such as `LlmAgent`) transparently as a `BaseAgent` subclass.

PythonJava

`[](#__codelineno-2-1)import asyncio [](#__codelineno-2-2)from google.adk.agents import config_agent_utils [](#__codelineno-2-3)from google.adk.runners import Runner [](#__codelineno-2-4)[](#__codelineno-2-5)async def main():     [](#__codelineno-2-6)    # Load the agent directly from the YAML config file    [](#__codelineno-2-7)    agent = config_agent_utils.from_config("my_agent/root_agent.yaml")    [](#__codelineno-2-8)    # ... [](#__codelineno-2-9)[](#__codelineno-2-10)if __name__ == "__main__":     [](#__codelineno-2-11)    asyncio.run(main())`

`[](#__codelineno-3-1)import com.google.adk.agents.BaseAgent; [](#__codelineno-3-2)import com.google.adk.agents.ConfigAgentUtils; [](#__codelineno-3-3)[](#__codelineno-3-4)public class AgentApp {     [](#__codelineno-3-5)    public static void main(String[] args) throws Exception {        [](#__codelineno-3-6)        // Load the agent directly from the YAML config file        [](#__codelineno-3-7)        BaseAgent agent = ConfigAgentUtils.fromConfig("my_agent/root_agent.yaml");        [](#__codelineno-3-8)        // ...    [](#__codelineno-3-9)    } [](#__codelineno-3-10)}`

## Example configs[¶](#example-configs "Permanent link")

This section shows examples of Agent Config files to get you started building agents. For additional and more complete examples, see the ADK [samples repository](https://github.com/search?q=repo%3Agoogle%2Fadk-python+path%3A%2F%5Econtributing%5C%2Fsamples%5C%2F%2F+root_agent.yaml&type=code).

### Built-in tool example[¶](#built-in-tool-example "Permanent link")

The following example uses a built-in ADK tool function for using google search to provide functionality to the agent. This agent automatically uses the search tool to reply to user requests.

`[](#__codelineno-4-1)# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json [](#__codelineno-4-2)name: search_agent [](#__codelineno-4-3)model: gemini-flash-latest [](#__codelineno-4-4)description: 'an agent whose job it is to perform Google search queries and answer questions about the results.' [](#__codelineno-4-5)instruction: You are an agent whose job is to perform Google search queries and answer questions about the results. [](#__codelineno-4-6)tools:   [](#__codelineno-4-7)  - name: google_search`

For more details, see the full code for this sample in the [ADK sample repository](https://github.com/google/adk-python/blob/main/contributing/samples/tools/tool_builtin_config/root_agent.yaml).

### Custom tool example[¶](#custom-tool-example "Permanent link")

The following example uses a custom tool built with Python code and listed in the `tools:` section of the config file. The agent uses this tool to check if a list of numbers provided by the user are prime numbers.

`[](#__codelineno-5-1)# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json [](#__codelineno-5-2)agent_class: LlmAgent [](#__codelineno-5-3)model: gemini-flash-latest [](#__codelineno-5-4)name: prime_agent [](#__codelineno-5-5)description: Handles checking if numbers are prime. [](#__codelineno-5-6)instruction: |   [](#__codelineno-5-7)  You are responsible for checking whether numbers are prime.  [](#__codelineno-5-8)  When asked to check primes, you must call the check_prime tool with a list of integers.  [](#__codelineno-5-9)  Never attempt to determine prime numbers manually.  [](#__codelineno-5-10)  Return the prime number results to the root agent. [](#__codelineno-5-11)tools:   [](#__codelineno-5-12)  - name: ma_llm.check_prime`

For more details, see the full code for this sample in the [ADK sample repository](https://github.com/google/adk-python/blob/main/contributing/samples/multi_agent/multi_agent_llm_config/prime_agent.yaml).

### Sub-agents example[¶](#sub-agents-example "Permanent link")

The following example shows an agent defined with two sub-agents in the `sub_agents:` section, and an example tool in the `tools:` section of the config file. This agent determines what the user wants, and delegates to one of the sub-agents to resolve the request. The sub-agents are defined using Agent Config YAML files.

`[](#__codelineno-6-1)# yaml-language-server: $schema=https://raw.githubusercontent.com/google/adk-python/refs/heads/main/src/google/adk/agents/config_schemas/AgentConfig.json [](#__codelineno-6-2)agent_class: LlmAgent [](#__codelineno-6-3)model: gemini-flash-latest [](#__codelineno-6-4)name: root_agent [](#__codelineno-6-5)description: Learning assistant that provides tutoring in code and math. [](#__codelineno-6-6)instruction: |   [](#__codelineno-6-7)  You are a learning assistant that helps students with coding and math questions. [](#__codelineno-6-8)  [](#__codelineno-6-9)  You delegate coding questions to the code_tutor_agent and math questions to the math_tutor_agent. [](#__codelineno-6-10)  [](#__codelineno-6-11)  Follow these steps:  [](#__codelineno-6-12)  1. If the user asks about programming or coding, delegate to the code_tutor_agent.  [](#__codelineno-6-13)  2. If the user asks about math concepts or problems, delegate to the math_tutor_agent.  [](#__codelineno-6-14)  3. Always provide clear explanations and encourage learning. [](#__codelineno-6-15)sub_agents:   [](#__codelineno-6-16)  - config_path: code_tutor_agent.yaml  [](#__codelineno-6-17)  - config_path: math_tutor_agent.yaml`

For more details, see the full code for this sample in the [ADK sample repository](https://github.com/google/adk-python/blob/main/contributing/samples/multi_agent/multi_agent_basic_config/root_agent.yaml).

## Deploy agent configs[¶](#deploy-agent-configs "Permanent link")

You can deploy Agent Config agents with [Cloud Run](/deploy/cloud-run/) and [Agent Runtime](/deploy/agent-runtime/), using the same procedure as code-based agents. For more information on how to prepare and deploy Agent Config-based agents, see the [Cloud Run](/deploy/cloud-run/) and [Agent Runtime](/deploy/agent-runtime/) deployment guides.

## Known limitations[¶](#known-limitations "Permanent link")

The Agent Config feature is experimental and includes the following limitations:

-   **Model support:** Only Gemini models are currently supported. Integration with third-party models is in progress.
-   **Programming language:** The Agent Config feature currently supports Python and Java code for tools and other functionality requiring programming code.
-   **ADK Tool support:** The following ADK tools are supported by the Agent Config feature, but *not all tools are fully supported*:
    -   `google_search`
    -   `google_maps_grounding`
    -   `load_artifacts`
    -   `url_context`
    -   `exit_loop`
    -   `preload_memory`
    -   `get_user_choice`
    -   `enterprise_web_search`
    -   `load_web_page`: Requires a fully-qualified path to access web pages.
    -   `AgentTool`: Allows an agent to call another agent.
    -   `LongRunningFunctionTool`: Supports long-running functions.
    -   `McpToolset`: Connects to Model Context Protocol (MCP) servers.
    -   `ExampleTool`: Provides example-based few-shot learning for tools.
-   **Agent Type Support:** The `LangGraphAgent` and `A2aAgent` types are not yet supported.
-   **Agent Search:** The `VertexAiSearchTool` is currently supported in Python and Java Agent Configs.

## Next steps[¶](#next-steps "Permanent link")

For ideas on what to build, see the [sample agent configs](https://github.com/search?q=repo:google/adk-python+path:/%5Econtributing%5C/samples%5C//+root_agent.yaml&type=code) in the `adk-python` repository. For detailed information on the syntax and settings supported by the Agent Config format, see the [Agent Config syntax reference](/api-reference/agentconfig/).

Back to top