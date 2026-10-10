---
title: "agents-cli - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/deploy/agent-runtime/agents-cli/
date: 2026-10-10T19:16:29.911Z
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
        -   [Agent Config](../../../agents/config/)
        
    -   [Agents](../../../agents/)
        
        Agents
        
        -   [Simple agents](../../../agents/llm-agents/)
        -   [Managed agents](../../../agents/managed-agents/)
        
    -   [Graph Workflows](../../../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../../../graphs/routes/)
        -   [Data handling](../../../graphs/data-handling/)
        -   [Human input](../../../graphs/human-input/)
        -   [Dynamic workflows](../../../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../../../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../../../workflows/collaboration/)
        -   [Template workflows](../../../agents/workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../../../agents/workflow-agents/sequential-agents/)
            -   [Loop workflow](../../../agents/workflow-agents/loop-agents/)
            -   [Parallel workflow](../../../agents/workflow-agents/parallel-agents/)
            -   [Custom template workflows](../../../agents/custom-agents/)
            
        -   [Agent routing](../../../agents/routing/)
        -   [Workflow patterns](../../../workflows/patterns/)
        
    -   [Models for Agents](../../../agents/models/)
        
        Models for Agents
        
        -   [Gemini](../../../agents/models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../../../agents/models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../../../agents/models/google-gemma/)
        -   [Claude](../../../agents/models/anthropic/)
        -   [Agent Platform hosted](../../../agents/models/agent-platform/)
        -   [Apigee AI Gateway](../../../agents/models/apigee/)
        -   [Model routing](../../../agents/models/routing/)
        -   [OpenAI](../../../agents/models/openai/)
        -   [Ollama](../../../agents/models/ollama/)
        -   [vLLM](../../../agents/models/vllm/)
        -   [LiteLLM](../../../agents/models/litellm/)
        -   [LiteRT-LM](../../../agents/models/litert-lm/)
        
    
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
        
    -   [Deployment](../../)
        
        Deployment
        
        -   [Agent Runtime](../)
            
            Agent Runtime
            
            -   [Standard deployment](../deploy/)
            -    agents-cli [agents-cli](./)
                
                Table of contents
                
                -   [Prerequisites](#prerequisites-ad)
                -   [Prepare your ADK project](#prepare-ad)
                -   [Connect to your Google Cloud project](#connect-ad)
                -   [Deploy your ADK project](#deploy-ad)
                -   [Changes to your ADK project](#adk-agents-cli-changes)
                -   [Test deployed agents](#test-deployed-agents)
                
            -   [Test deployed agents](../test/)
            
        -   [Cloud Run](../../cloud-run/)
        -   [GKE](../../gke/)
        
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

-   [Prerequisites](#prerequisites-ad)
-   [Prepare your ADK project](#prepare-ad)
-   [Connect to your Google Cloud project](#connect-ad)
-   [Deploy your ADK project](#deploy-ad)
-   [Changes to your ADK project](#adk-agents-cli-changes)
-   [Test deployed agents](#test-deployed-agents)

1.  [Home](../../..)
2.  [Run Agents](../../../runtime/)
3.  [Deployment](../../)
4.  [Agent Runtime](../)

[](https://github.com/google/adk-docs/edit/main/docs/deploy/agent-runtime/agents-cli.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Deploy to Agent Runtime with Agents CLI[¶](#deploy-to-agent-runtime-with-agents-cli "Permanent link")

Supported in ADKPythonGo v1.2.0

This deployment procedure describes how to perform a deployment using [Agents CLI in Agent Platform](https://google.github.io/agents-cli/) and the ADK. Deploying to Agent Runtime via Agents CLI provides an accelerated path to a production-ready environment. Agents CLI automatically configures Google Cloud resources, CI/CD pipelines, and Infrastructure-as-Code (Terraform) to support the entire development lifecycle. As a best practice, always ensure you review the generated configurations to align with your organization’s security and compliance standards before production deployment.

This deployment guide uses Agents CLI to apply a project template to your existing project, add deployment artifacts, and prepare your agent project for deployment. These instructions show you how to use Agents CLI to provision a Google Cloud project with services needed for deploying your ADK project, as follows:

-   [Prerequisites](#prerequisites-ad): Set up Google Cloud project, IAM permissions, and install required software.
-   [Prepare your ADK project](#prepare-ad): Modify your existing ADK project files to get ready for deployment.
-   [Connect to your Google Cloud project](#connect-ad): Connect your development environment to Google Cloud and your Google Cloud project.
-   [Deploy your ADK project](#deploy-ad): Provision required services in your Google Cloud project and upload your ADK project code.

For information on testing a deployed agent, see [Test deployed agent](../test/). For more information on using Agents CLI and its command line tools, see the [CLI reference](https://google.github.io/agents-cli/cli/) and [Guide](https://google.github.io/agents-cli/).

### Prerequisites[¶](#prerequisites-ad "Permanent link")

You need the following resources configured to use this deployment path:

-   **Google Cloud Project and Permissions**: A Google Cloud project with [billing enabled](https://cloud.google.com/billing/docs/how-to/modify-project). You can use an existing project or create a new one. You must have one of the following IAM roles assigned within this project:
    -   **Agent Platform User role** — sufficient to deploy an agent to Agent Runtime.
    -   **Owner role** — required for the full production setup (Terraform infrastructure provisioning, CI/CD pipelines, IAM configuration).

Note

An empty project is recommended to avoid conflicts with existing resources. For new projects, see [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

-   **Python Environment**: A Python version supported by [Agents CLI](https://google.github.io/agents-cli/guide/getting-started/).
-   **uv Tool:** Manage Python development environment and running agents-cli tools. For installation details, see [Install uv](https://docs.astral.sh/uv/getting-started/installation/).
-   **Google Cloud CLI tool**: The gcloud command line interface. For installation details, see [Google Cloud Command Line Interface](https://cloud.google.com/sdk/docs/install).
-   **Make tool**: Build automation tool. This tool is part of most Unix-based systems, for installation details, see the [Make tool](https://www.gnu.org/software/make/) documentation.

### Prepare your ADK project[¶](#prepare-ad "Permanent link")

When you deploy an ADK project to Agent Runtime, you need some additional files to support the deployment operation. The following Agents CLI command backs up your project and then adds files to your project for deployment purposes.

These instructions assume you have an existing ADK project that you are modifying for deployment. If you do not have an ADK project, or want to use a test project, complete one of the [Get started](/get-started/) guides, which creates an agent project. The following instructions use the `my_agent` project as an example.

To prepare your ADK project for deployment to Agent Runtime:

1.  In a terminal window of your development environment, navigate to the **parent directory** that contains your agent folder. For example, if your project structure is:
    
    `[](#__codelineno-0-1)your-project-directory/ [](#__codelineno-0-2)├── my_agent/ [](#__codelineno-0-3)│   ├── __init__.py [](#__codelineno-0-4)│   ├── agent.py [](#__codelineno-0-5)│   └── .env`
    
    Navigate to `your-project-directory/`
    
2.  Run the Agents CLI `scaffold enhance` command to add the files required for deployment into your project.
    
    `[](#__codelineno-1-1)agents-cli scaffold enhance --deployment-target agent_runtime`
    
3.  Follow the instructions from the Agents CLI tool. In general, you can accept the default answers to all questions. However for the **GCP region**, option, make sure you select one of the [supported regions](https://docs.cloud.google.com/agent-builder/locations#supported-regions-agent-engine) for Agent Runtime.
    

When you successfully complete this process, the tool shows the following message:

`[](#__codelineno-2-1)> Success! Your agent project is ready.`

Note

The Agents CLI tool may show a reminder to connect to Google Cloud while running, but that connection is *not required* at this stage.

For more information about the changes Agents CLI makes to your ADK project, see [Changes to your ADK project](#adk-agents-cli-changes).

### Connect to your Google Cloud project[¶](#connect-ad "Permanent link")

Before you deploy your ADK project, you must connect to Google Cloud and your project. After logging into your Google Cloud account, you should verify that your deployment target project is visible from your account and that it is configured as your current project.

To connect to Google Cloud and list your project:

1.  In a terminal window of your development environment, login to your Google Cloud account:
    
    `[](#__codelineno-3-1)gcloud auth application-default login`
    
2.  Set your target project using the Google Cloud Project ID:
    
    `[](#__codelineno-4-1)gcloud config set project your-project-id-xxxxx`
    
3.  Verify your Google Cloud target project is set:
    
    `[](#__codelineno-5-1)gcloud config get-value project`
    

Once you have successfully connected to Google Cloud and set your Cloud Project ID, you are ready to deploy your ADK project files to Agent Runtime.

### Deploy your ADK project[¶](#deploy-ad "Permanent link")

When using Agents CLI, you deploy using the `agents-cli deploy` command. This command builds a container from your agent code, pushes it to a registry, and deploys it to Agent Runtime in the hosted environment.

Important

*Make sure your Google Cloud target deployment project is set as your* **current project** *before performing these steps*. The `agents-cli deploy` command uses your currently set Google Cloud project when it performs a deployment. For information on setting and checking your current project, see [Connect to your Google Cloud project](#connect-ad).

To deploy your ADK project to Agent Runtime in your Google Cloud project:

1.  In a terminal window, navigate to your agent project directory (e.g., `your-project-directory/`).
    
2.  Deploy your agent code to the Google Cloud development environment:
    
    `[](#__codelineno-6-1)agents-cli deploy`
    
    The command reads your `deployment_target` from `pyproject.toml` and deploys to the configured target (Agent Runtime, Cloud Run, or GKE).
    
3.  (Optional) To enable observability features like prompt-response logging and content logs, provision the telemetry infrastructure:
    
    `[](#__codelineno-7-1)agents-cli infra single-project`
    
    For more details, see the [Observability Guide](https://google.github.io/agents-cli/guide/observability/).
    

Once this process completes successfully, you should be able to interact with the agent running on Google Cloud Agent Runtime. For details on testing the deployed agent, see [Test deployed agent](/deploy/agent-runtime/test/).

### Changes to your ADK project[¶](#adk-agents-cli-changes "Permanent link")

The Agents CLI tools add more files to your project for deployment. The procedure below backs up your existing project files before modifying them. This guide uses the [multi\_tool\_agent](https://github.com/google/adk-docs/tree/main/examples/python/snippets/get-started/multi_tool_agent) project as a reference example. The original project has the following file structure to start with:

`[](#__codelineno-8-1)my_agent/ [](#__codelineno-8-2)├─ __init__.py [](#__codelineno-8-3)├─ agent.py [](#__codelineno-8-4)└─ .env`

After running the Agents CLI scaffold enhance command to add Agent Runtime deployment information, the new structure is as follows:

`[](#__codelineno-9-1)my-agent/ [](#__codelineno-9-2)├─ app/                 # Core application code [](#__codelineno-9-3)│   ├─ agent.py         # Main agent logic [](#__codelineno-9-4)│   ├─ agent_engine_app.py # Agent Runtime application logic [](#__codelineno-9-5)│   └─ utils/           # Utility functions and helpers [](#__codelineno-9-6)├─ .cloudbuild/         # CI/CD pipeline configurations for Google Cloud Build [](#__codelineno-9-7)├─ deployment/          # Infrastructure and deployment scripts [](#__codelineno-9-8)├─ notebooks/           # Jupyter notebooks for prototyping and evaluation [](#__codelineno-9-9)├─ tests/               # Unit, integration, and load tests [](#__codelineno-9-10)├─ Makefile             # Makefile for common commands [](#__codelineno-9-11)├─ GEMINI.md            # AI-assisted development guide [](#__codelineno-9-12)└─ pyproject.toml       # Project dependencies and configuration`

See the *README.md* file in your updated ADK project folder for more information. For more information on using Agents CLI, see the [Agents CLI documentation](https://google.github.io/agents-cli/).

## Test deployed agents[¶](#test-deployed-agents "Permanent link")

After completing deployment of your ADK agent you should test the workflow in its new hosted environment. For more information on testing an ADK agent deployed to Agent Runtime, see [Test deployed agents in Agent Runtime](/deploy/agent-runtime/test/).

Back to top