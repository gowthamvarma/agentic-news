---
title: "Agents CLI - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/get-started/agents-cli/
date: 2026-10-10T19:16:32.426Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](../..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../)
        
        Get Started
        
        -   [Python](../python/)
        -   [TypeScript](../typescript/)
        -   [Go](../go/)
        -   [Java](../java/)
        -   [Kotlin](../kotlin/)
        -    Agents CLI [Agents CLI](./)
            
            Table of contents
            
            -   [Installation](#installation)
            -   [Authenticate](#authenticate)
            -   [Build your agent](#build-your-agent)
            -   [Run your agent](#run-your-agent)
            -   [Next: Evaluate and deploy your agent](#next-evaluate-and-deploy-your-agent)
            
        -   [Installation](../installation/)
        -   [Google Cloud](../google-cloud/)
        -   [Migrate to ADK](../migrate/)
        
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
    
    -   [Technical Overview](../about/)
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

-   [Installation](#installation)
-   [Authenticate](#authenticate)
-   [Build your agent](#build-your-agent)
-   [Run your agent](#run-your-agent)
-   [Next: Evaluate and deploy your agent](#next-evaluate-and-deploy-your-agent)

1.  [Home](../..)
2.  [Build Agents](../)
3.  [Get Started](../)

[](https://github.com/google/adk-docs/edit/main/docs/get-started/agents-cli.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Agents CLI Quickstart for ADK[¶](#agents-cli-quickstart-for-adk "Permanent link")

This guide shows you how to get up and running with Agent Development Kit (ADK) using Agents CLI. You can use the Agents CLI tool set with coding agents like Antigravity, Claude Code, and Codex to build, evaluate, and deploy ADK agents. For more information, see the [Agents CLI](https://google.github.io/agents-cli/) documentation. Before you start, make sure you have the following installed:

-   Python 3.11 or later: Agents CLI supports ADK agents in Python
-   The [`uv`](https://docs.astral.sh/uv/getting-started/installation/) tool to manage environments and dependencies
-   [Node.js](https://nodejs.org/en/download), for installing the skills
-   Coding agent such as [Antigravity](https://antigravity.google/), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), or [Codex](https://github.com/openai/codex)

If you want to deploy ADK agents to services like Google Cloud, make sure the following tools are also installed:

-   [Google Cloud CLI](https://cloud.google.com/sdk/docs/install)
-   [Terraform](https://developer.hashicorp.com/terraform/downloads)

## Installation[¶](#installation "Permanent link")

Install Agents CLI by running the following command. This step installs the `agents-cli` command, the ADK Python packages, and the ADK skills into any coding agents already on your machine:

`[](#__codelineno-0-1)uvx google-agents-cli setup`

Alternative installation methods

**pipx:**

`[](#__codelineno-1-1)pipx install google-agents-cli && agents-cli setup`

**pip:**

`[](#__codelineno-2-1)pip install google-agents-cli && agents-cli setup`

**Skills only:**

`[](#__codelineno-3-1)npx skills add google/agents-cli`

The installation command is the only one you have to run yourself. Once installed, you can use your coding agent to build and run an ADK agent.

## Authenticate[¶](#authenticate "Permanent link")

Agents CLI needs credentials for a generative AI API to run your agents. The simplest option is a Gemini API key from Google AI Studio. Create a key on the [API Keys](https://aistudio.google.com/app/apikey) page, then after you scaffold a project in the next step, open its `.env` file and set:

Update: .env

`[](#__codelineno-4-1)GEMINI_API_KEY=YOUR_API_KEY`

Comment out the three `GOOGLE_CLOUD_*` lines in the same file so the SDK uses your key instead of Vertex AI.

Using Google Cloud Agent Platform instead

If you already have a Google Cloud project, Agents CLI picks up your Application Default Credentials:

`[](#__codelineno-5-1)gcloud auth application-default login`

Make sure the `GOOGLE_CLOUD_*` lines in the generated `.env` file are uncommented and set them to your project identifiers. For more information on connecting to Google Cloud services and projects with ADK, see the [Google Cloud setup guide](/get-started/google-cloud/) for ADK.

## Build your agent[¶](#build-your-agent "Permanent link")

Open your coding agent and confirm it can see the skills:

AntigravityClaude CodeCodex

`[](#__codelineno-6-1)antigravity            # launch from your IDE or terminal [](#__codelineno-6-2)# then verify the Agents CLI skills are listed in your environment`

`[](#__codelineno-7-1)claude [](#__codelineno-7-2)/skills                # expect google-agents-cli-* entries in the list`

`[](#__codelineno-8-1)codex [](#__codelineno-8-2)/skills                # expect google-agents-cli-* entries in the list`

Using other coding agents

Agents CLI works with any coding agent that supports [skills](https://agentskills.io/what-are-skills). Most agents list them through a `/skills` command or a settings panel.

Then tell the coding agent what you want to build:

Coding agent prompt

`[](#__codelineno-9-1)Use agents-cli to build an agent that turns long text into short [](#__codelineno-9-2)bullet-point summaries`

Your coding agent activates the `google-agents-cli-workflow` and `google-agents-cli-scaffold` skills, asks clarifying questions about the tools your agent calls, the inputs and outputs you expect, and the success criteria to evaluate against, and then scaffolds the project.

Next, your coding agent uses the `google-agents-cli-adk-code` skill to write your agent into `app/agent.py`. You end up with a working project with the agent code, tests, and an eval dataset in the following file structure:

`[](#__codelineno-10-1)my-agent/     [](#__codelineno-10-2)    app/        [](#__codelineno-10-3)        agent.py                # main agent code        [](#__codelineno-10-4)        fast_api_app.py         # server, telemetry, and routes        [](#__codelineno-10-5)        app_utils/              # session and artifact services    [](#__codelineno-10-6)    tests/        [](#__codelineno-10-7)        eval/                   # evaluation datasets and metrics        [](#__codelineno-10-8)        integration/            # end-to-end agent tests        [](#__codelineno-10-9)        unit/    [](#__codelineno-10-10)    pyproject.toml              # project config and dependencies    [](#__codelineno-10-11)    agents-cli-manifest.yaml    # Agents CLI configuration    [](#__codelineno-10-12)    Dockerfile                  # container image for deployment    [](#__codelineno-10-13)    GEMINI.md                   # project guidance for coding agents    [](#__codelineno-10-14)    .env                        # API keys or project IDs`

Use this project structure when you plan to test, evaluate, and deploy an agent. If you want a create single-file agent for learning ADK, use the `adk create` command instead.

## Run your agent[¶](#run-your-agent "Permanent link")

Ask your coding agent to start the local playground, or run it yourself:

`[](#__codelineno-11-1)agents-cli playground`

This command starts the ADK web interface with hot reload, so your changes are reflected in the project as you edit. You can access the playground at (http://localhost:8080). Select the agent at the upper left corner and paste in a few paragraphs of text. The agent replies with a short bullet-point summary.

## Next: Evaluate and deploy your agent[¶](#next-evaluate-and-deploy-your-agent "Permanent link")

Now that you have Agents CLI installed and your first agent running, you can evaluate and deploy it with your coding agent using instructions like the following:

-   ***"Write evals for this agent and run them"*** to [evaluate your agent](https://google.github.io/agents-cli/guide/evaluation/) against the success criteria you set when you scoped it. Your coding agent grades the results, groups the failures by cause, and tunes the agent's instructions until it passes
-   ***"Deploy this to Cloud Run"*** to [deploy your agent](/deploy/agent-runtime/agents-cli/) to Agent Runtime, Cloud Run, or GKE.
-   ***"Set up observability infrastructure for my agent"*** to add prompt-response logging and content logs.

For the full walkthrough, including evaluation, deployment, and observability, see the Agents CLI [Tutorial: Build your first agent](https://google.github.io/agents-cli/guide/quickstart-tutorial/).

Back to top