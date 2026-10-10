---
title: "Cloud Run - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/deploy/cloud-run/
date: 2026-10-10T19:16:29.445Z
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
        
    -   [Deployment](../)
        
        Deployment
        
        -   [Agent Runtime](../agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../agent-runtime/deploy/)
            -   [agents-cli](../agent-runtime/agents-cli/)
            -   [Test deployed agents](../agent-runtime/test/)
            
        -    Cloud Run [Cloud Run](./)
            
            Table of contents
            
            -   [Agent sample](#agent-sample)
            -   [Environment variables](#environment-variables)
            -   [Prerequisites](#prerequisites)
            -   [Secret](#secret)
                
                -   [Cloud Build permissions](#cloud-build-permissions)
                -   [Entry for GOOGLE\_API\_KEY secret](#entry-for-google_api_key-secret)
                -   [Permissions to read](#permissions-to-read)
                
            -   [Deployment payload](#payload)
            -   [Deployment commands](#deployment-commands)
                
                -   [adk CLI](#adk-cli)
                    
                    -   [Setup environment variables](#setup-environment-variables)
                    -   [Command usage](#command-usage)
                        
                        -   [Minimal command](#minimal-command)
                        -   [Full command with optional flags](#full-command-with-optional-flags)
                        -   [Arguments](#arguments)
                        -   [Options](#options)
                        -   [Passing gcloud CLI Arguments](#passing-gcloud-cli-arguments)
                            
                            -   [Syntax example:](#syntax-example)
                            -   [Example:](#example)
                            
                        -   [Authenticated access](#authenticated-access)
                        
                    
                -   [gcloud CLI for Python](#gcloud-cli-for-python)
                    
                    -   [Project structure](#project-structure)
                    -   [Code files](#code-files)
                    -   [Define Multiple Agents](#define-multiple-agents)
                    -   [Deploy using gcloud](#deploy-using-gcloud)
                    
                -   [adk CLI](#adk-cli_1)
                    
                    -   [Set up environment variables](#set-up-environment-variables)
                    -   [Command usage](#command-usage_1)
                        
                        -   [Minimal command](#minimal-command_1)
                        -   [Full command with optional flags](#full-command-with-optional-flags_1)
                        -   [Options](#options_1)
                        -   [Authenticated access](#authenticated-access_1)
                        
                    
                -   [adk CLI](#adk-cli_2)
                    
                    -   [Agent Code Structure](#agent-code-structure)
                    -   [How it Works](#how-it-works)
                    -   [Setup environment variables](#setup-environment-variables_1)
                    -   [Command usage](#command-usage_2)
                        
                        -   [Required](#required)
                        -   [Optional](#optional)
                        -   [Authenticated access](#authenticated-access_2)
                        
                    
                -   [gcloud CLI for Java](#gcloud-cli-for-java)
                    
                    -   [Project Structure](#project-structure_1)
                    -   [Code files](#code-files_1)
                    -   [Deploy using gcloud](#deploy-using-gcloud_1)
                    
                
            -   [Test your agent](#test-your-agent)
                
                -   [UI Testing](#ui-testing)
                -   [API Testing (curl)](#api-testing-curl)
                    
                    -   [Set the application URL](#set-the-application-url)
                    -   [Get an identity token (if needed)](#get-an-identity-token-if-needed)
                    -   [List available apps](#list-available-apps)
                    -   [Create or Update a Session](#create-or-update-a-session)
                    -   [Run the Agent](#run-the-agent)
                    
                
            
        -   [GKE](../gke/)
        
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

-   [Agent sample](#agent-sample)
-   [Environment variables](#environment-variables)
-   [Prerequisites](#prerequisites)
-   [Secret](#secret)
    
    -   [Cloud Build permissions](#cloud-build-permissions)
    -   [Entry for GOOGLE\_API\_KEY secret](#entry-for-google_api_key-secret)
    -   [Permissions to read](#permissions-to-read)
    
-   [Deployment payload](#payload)
-   [Deployment commands](#deployment-commands)
    
    -   [adk CLI](#adk-cli)
        
        -   [Setup environment variables](#setup-environment-variables)
        -   [Command usage](#command-usage)
            
            -   [Minimal command](#minimal-command)
            -   [Full command with optional flags](#full-command-with-optional-flags)
            -   [Arguments](#arguments)
            -   [Options](#options)
            -   [Passing gcloud CLI Arguments](#passing-gcloud-cli-arguments)
                
                -   [Syntax example:](#syntax-example)
                -   [Example:](#example)
                
            -   [Authenticated access](#authenticated-access)
            
        
    -   [gcloud CLI for Python](#gcloud-cli-for-python)
        
        -   [Project structure](#project-structure)
        -   [Code files](#code-files)
        -   [Define Multiple Agents](#define-multiple-agents)
        -   [Deploy using gcloud](#deploy-using-gcloud)
        
    -   [adk CLI](#adk-cli_1)
        
        -   [Set up environment variables](#set-up-environment-variables)
        -   [Command usage](#command-usage_1)
            
            -   [Minimal command](#minimal-command_1)
            -   [Full command with optional flags](#full-command-with-optional-flags_1)
            -   [Options](#options_1)
            -   [Authenticated access](#authenticated-access_1)
            
        
    -   [adk CLI](#adk-cli_2)
        
        -   [Agent Code Structure](#agent-code-structure)
        -   [How it Works](#how-it-works)
        -   [Setup environment variables](#setup-environment-variables_1)
        -   [Command usage](#command-usage_2)
            
            -   [Required](#required)
            -   [Optional](#optional)
            -   [Authenticated access](#authenticated-access_2)
            
        
    -   [gcloud CLI for Java](#gcloud-cli-for-java)
        
        -   [Project Structure](#project-structure_1)
        -   [Code files](#code-files_1)
        -   [Deploy using gcloud](#deploy-using-gcloud_1)
        
    
-   [Test your agent](#test-your-agent)
    
    -   [UI Testing](#ui-testing)
    -   [API Testing (curl)](#api-testing-curl)
        
        -   [Set the application URL](#set-the-application-url)
        -   [Get an identity token (if needed)](#get-an-identity-token-if-needed)
        -   [List available apps](#list-available-apps)
        -   [Create or Update a Session](#create-or-update-a-session)
        -   [Run the Agent](#run-the-agent)
        
    

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Deployment](../)

[](https://github.com/google/adk-docs/edit/main/docs/deploy/cloud-run.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Deploy to Cloud Run[¶](#deploy-to-cloud-run "Permanent link")

Supported in ADKPythonTypeScriptGoJava

[Cloud Run](https://cloud.google.com/run) is a fully managed platform that enables you to run your code directly on top of Google's scalable infrastructure.

To deploy your agent, you can use either the `adk deploy cloud_run` command *(recommended for Python)*, or with `gcloud run deploy` command through Cloud Run.

## Agent sample[¶](#agent-sample "Permanent link")

For each of the commands, we will reference the `Capital Agent` sample defined on the [LLM agent](../../agents/llm-agents/) page. We will assume it's in a directory (eg: `capital_agent`).

To proceed, confirm that your agent code is configured as follows:

PythonTypeScriptGoJava

1.  Agent code is in a file called `agent.py` within your agent directory.
2.  Your agent variable is named `root_agent`.
3.  `__init__.py` is within your agent directory and contains `from . import agent`.
4.  Your `requirements.txt` file is present in the agent directory.

1.  Agent code is in a file called `agent.ts` within your project directory.
2.  Your agent variable is named `rootAgent` and is exported.
3.  Your `package.json` file is present in the agent directory with `@google/adk` and other dependencies.

1.  Your application's entry point (the main package and main() function) is in a single Go file. Using main.go is a strong convention.
2.  Your agent instance is passed to a launcher configuration, typically using agent.NewSingleLoader(yourAgent). The adkgo tool uses this launcher to start your agent with the correct services.
3.  Your go.mod and go.sum files are present in your project directory to manage dependencies.

Refer to the following section for more details. You can also find a [sample app](https://github.com/google/adk-docs/tree/main/examples/go/cloud-run) in the Github repo.

1.  Agent code is in a file called `CapitalAgent.java` within your agent directory.
2.  Your agent variable is global and follows the format `public static final BaseAgent ROOT_AGENT`.
3.  Your agent definition is present in a static class method.

Refer to the following section for more details. You can also find a [sample app](https://github.com/google/adk-docs/tree/main/examples/java/cloud-run) in the Github repo.

## Environment variables[¶](#environment-variables "Permanent link")

Set your environment variables as described in the [Setup and Installation](../../get-started/installation/) guide.

`[](#__codelineno-0-1)export GOOGLE_CLOUD_PROJECT=your-project-id [](#__codelineno-0-2)export GOOGLE_CLOUD_LOCATION=us-central1 # Or your preferred location [](#__codelineno-0-3)export GOOGLE_GENAI_USE_ENTERPRISE=True`

For more information on connecting to Google Cloud from ADK agents, see [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/).

## Prerequisites[¶](#prerequisites "Permanent link")

You should have a Google Cloud project. You need to know your:

1.  Project name, for example: "my-project"
2.  Project location, for example: "us-central1"
3.  Service account, for example: "1234567890-compute@developer.gserviceaccount.com"
4.  GOOGLE\_API\_KEY

You must also have the Google Cloud CLI (`gcloud`) installed.

## Secret[¶](#secret "Permanent link")

Make sure you have created a secret which can be read by your service account.

### Cloud Build permissions[¶](#cloud-build-permissions "Permanent link")

Since the `adk deploy` command uses Google Cloud Build to automate the build process, you must set your default compute service account to have permission to use Cloud Build. The following command example shows how to grant this permission:

`[](#__codelineno-1-1)gcloud projects add-iam-policy-binding [PROJECT_ID] \     [](#__codelineno-1-2)    --member="serviceAccount:[PROJECT_NUMBER]-compute@developer.gserviceaccount.com" \    [](#__codelineno-1-3)    --role="roles/cloudbuild.builds.builder"`

### Entry for GOOGLE\_API\_KEY secret[¶](#entry-for-google_api_key-secret "Permanent link")

You can create your secret manually or use CLI:

`[](#__codelineno-2-1)echo "<<put your GOOGLE_API_KEY here>>" | gcloud secrets create GOOGLE_API_KEY --project=my-project --data-file=-`

### Permissions to read[¶](#permissions-to-read "Permanent link")

You should give appropriate permission for you service account to read this secret.

`[](#__codelineno-3-1)gcloud secrets add-iam-policy-binding GOOGLE_API_KEY --member="serviceAccount:1234567890-compute@developer.gserviceaccount.com" --role="roles/secretmanager.secretAccessor" --project=my-project`

## Deployment payload[¶](#payload "Permanent link")

When you deploy your ADK agent workflow to Google Cloud Run, the following content is uploaded to the service:

-   Your ADK agent code
-   Any dependencies declared in your ADK agent code
-   ADK API server code version used by your agent

The default deployment *does not* include the ADK web user interface libraries, unless you specify it as deployment setting, such as the `--with_ui` option for `adk deploy cloud_run` command.

## Deployment commands[¶](#deployment-commands "Permanent link")

Python - adk CLIPython - gcloud CLITypeScript - adk CLIGo - adkgo CLIJava - gcloud CLI

### adk CLI[¶](#adk-cli "Permanent link")

The `adk deploy cloud_run` command deploys your agent code to Google Cloud Run.

Ensure you have authenticated with Google Cloud: `gcloud auth login` and `gcloud config set project <your-project-id>`.

#### Setup environment variables[¶](#setup-environment-variables "Permanent link")

Optional but recommended: Setting environment variables can make the deployment commands cleaner.

`[](#__codelineno-4-1)# Set your Google Cloud Project ID [](#__codelineno-4-2)export GOOGLE_CLOUD_PROJECT="your-gcp-project-id" [](#__codelineno-4-3)[](#__codelineno-4-4)# Set your desired Google Cloud Location [](#__codelineno-4-5)export GOOGLE_CLOUD_LOCATION="us-central1" # Example location [](#__codelineno-4-6)[](#__codelineno-4-7)# Set the path to your agent code directory [](#__codelineno-4-8)export AGENT_PATH="./capital_agent" # Assuming capital_agent is in the current directory [](#__codelineno-4-9)[](#__codelineno-4-10)# Set a name for your Cloud Run service (optional) [](#__codelineno-4-11)export SERVICE_NAME="capital-agent-service" [](#__codelineno-4-12)[](#__codelineno-4-13)# Set an application name (optional) [](#__codelineno-4-14)export APP_NAME="capital_agent_app"`

#### Command usage[¶](#command-usage "Permanent link")

##### Minimal command[¶](#minimal-command "Permanent link")

`[](#__codelineno-5-1)adk deploy cloud_run \ [](#__codelineno-5-2)--project=$GOOGLE_CLOUD_PROJECT \ [](#__codelineno-5-3)--region=$GOOGLE_CLOUD_LOCATION \ [](#__codelineno-5-4)$AGENT_PATH`

##### Full command with optional flags[¶](#full-command-with-optional-flags "Permanent link")

`[](#__codelineno-6-1)adk deploy cloud_run \ [](#__codelineno-6-2)--project=$GOOGLE_CLOUD_PROJECT \ [](#__codelineno-6-3)--region=$GOOGLE_CLOUD_LOCATION \ [](#__codelineno-6-4)--service_name=$SERVICE_NAME \ [](#__codelineno-6-5)--app_name=$APP_NAME \ [](#__codelineno-6-6)--with_ui \ [](#__codelineno-6-7)$AGENT_PATH`

##### Arguments[¶](#arguments "Permanent link")

-   `AGENT_PATH`: (Required) Positional argument specifying the path to the directory containing your agent's source code, for example: `$AGENT_PATH` or `capital_agent/`. This directory must contain at least an `__init__.py` and your main agent file, for example: `agent.py`.

##### Options[¶](#options "Permanent link")

-   `--project TEXT`: (Required) Your Google Cloud project ID, for example: `$GOOGLE_CLOUD_PROJECT`.
-   `--region TEXT`: (Required) The Google Cloud location for deployment, for example: `$GOOGLE_CLOUD_LOCATION`, `us-central1`.
-   `--allow_origins`: (Optional) A comma-separated list of origins for CORS (Cross-Origin Sharing). To allow a regular expression pattern, prefix the origin with `regex`. For example: `http://localhost:8000,regex:https://.*\.example\.com`.
-   `--service_name TEXT`: (Optional) The name for the Cloud Run service, for example: `$SERVICE_NAME`, defaults to `adk-default-service-name`.
-   `--app_name TEXT`: (Optional) The application name for the ADK API server, for example: `$APP_NAME`. Defaults to the name of the directory specified by `AGENT_PATH`, for example: `capital_agent` if `AGENT_PATH` is `./capital_agent`.
-   `--session_service_uri TEXT`: (Optional) The URI of the session service. If you are using a managed session service via Agent Runtime, pass `agentengine://<agent_engine>`, where `<agent_engine>` is either the resource ID or the full `projects/*/locations/*/reasoningEngines/*` resource name. Other supported forms are `memory://` and any SQLAlchemy database URL, for example: `sqlite://<path>`.
-   `--artifact_service_uri TEXT`: (Optional) The URI of the artifact service, for example: `gs://<bucket_name>` for Cloud Storage, `file://<path>`, or `memory://`.
-   `--memory_service_uri TEXT`: (Optional) The URI of the memory service, for example: `rag://<rag_corpus_id>`, `agentengine://<agent_engine>`, or `memory://`.
-   `--port INTEGER`: (Optional) The port number the ADK API server will listen on within the container. Defaults to 8000.
-   `--with_ui`: (Optional) If included, deploys the ADK dev UI alongside the agent API server. By default, only the API server is deployed.
-   `--temp_folder TEXT`: (Optional) Specifies a directory for storing intermediate files generated during the deployment process. Defaults to a timestamped folder in the system's temporary directory. *(Note: This option is generally not needed unless troubleshooting issues).*
-   `--help`: Show the help message and exit.

When `--session_service_uri` and `--artifact_service_uri` are not set, the deployed container falls back to the in-memory session and artifact services, and sessions and artifacts are lost whenever a Cloud Run instance is recycled. Set both options for any deployment that must retain this data.

##### Passing gcloud CLI Arguments[¶](#passing-gcloud-cli-arguments "Permanent link")

To pass specific gcloud flags through the `adk deploy cloud_run` command, use the double-dash separator (`--`) after the ADK arguments. Any flags (except ADK-managed) following the `--` will be passed directly to the underlying gcloud command.

###### Syntax example:[¶](#syntax-example "Permanent link")

`[](#__codelineno-7-1)adk deploy cloud_run [ADK_FLAGS] -- [GCLOUD_FLAGS]`

###### Example:[¶](#example "Permanent link")

`[](#__codelineno-8-1)adk deploy cloud_run --project=[PROJECT_ID] --region=[REGION] path/to/my_agent    -- --no-allow-unauthenticated --min-instances=2`

##### Authenticated access[¶](#authenticated-access "Permanent link")

During the deployment process, you might be prompted: `Allow unauthenticated invocations to [your-service-name] (y/N)?`.

-   Enter `y` to allow public access to your agent's API endpoint without authentication.
-   Enter `N` (or press Enter for the default) to require authentication, for example: using an identity token as shown in the "Testing your agent" section.

Upon successful execution, the command deploys your agent to Cloud Run and provide the URL of the deployed service.

### gcloud CLI for Python[¶](#gcloud-cli-for-python "Permanent link")

Alternatively, you can deploy using the standard `gcloud run deploy` command with a `Dockerfile`. This method requires more manual setup compared to the `adk` command but offers flexibility, particularly if you want to embed your agent within a custom [FastAPI](https://fastapi.tiangolo.com/) application.

Ensure you have authenticated with Google Cloud (`gcloud auth login` and `gcloud config set project <your-project-id>`).

#### Project structure[¶](#project-structure "Permanent link")

Organize your project files as follows:

`[](#__codelineno-9-1)your-project-directory/ [](#__codelineno-9-2)├── capital_agent/ [](#__codelineno-9-3)│   ├── __init__.py [](#__codelineno-9-4)│   └── agent.py       # Your agent code (see "Agent sample" tab) [](#__codelineno-9-5)├── main.py            # FastAPI application entry point [](#__codelineno-9-6)├── requirements.txt   # Python dependencies [](#__codelineno-9-7)└── Dockerfile         # Container build instructions`

Create the following files (`main.py`, `requirements.txt`, `Dockerfile`) in the root of `your-project-directory/`.

#### Code files[¶](#code-files "Permanent link")

1.  This file sets up the FastAPI application using `get_fast_api_app()` from ADK:
    
    main.py
    
    `[](#__codelineno-10-1)import os [](#__codelineno-10-2)[](#__codelineno-10-3)import uvicorn [](#__codelineno-10-4)from fastapi import FastAPI [](#__codelineno-10-5)from google.adk.cli.fast_api import get_fast_api_app [](#__codelineno-10-6)[](#__codelineno-10-7)# Get the directory where main.py is located [](#__codelineno-10-8)AGENT_DIR = os.path.dirname(os.path.abspath(__file__)) [](#__codelineno-10-9)# Example session service URI, for example, SQLite [](#__codelineno-10-10)# Note: Use 'sqlite+aiosqlite' instead of 'sqlite' because DatabaseSessionService requires an async driver [](#__codelineno-10-11)SESSION_SERVICE_URI = "sqlite+aiosqlite:///./sessions.db" [](#__codelineno-10-12)# Example allowed origins for CORS [](#__codelineno-10-13)ALLOWED_ORIGINS = ["http://localhost", "http://localhost:8080", "*"] [](#__codelineno-10-14)# Set web=True if you intend to serve a web interface, False otherwise [](#__codelineno-10-15)SERVE_WEB_INTERFACE = True [](#__codelineno-10-16)[](#__codelineno-10-17)# Call the function to get the FastAPI app instance [](#__codelineno-10-18)# Ensure the agent directory name ('capital_agent') matches your agent folder [](#__codelineno-10-19)app: FastAPI = get_fast_api_app(     [](#__codelineno-10-20)    agents_dir=AGENT_DIR,    [](#__codelineno-10-21)    session_service_uri=SESSION_SERVICE_URI,    [](#__codelineno-10-22)    allow_origins=ALLOWED_ORIGINS,    [](#__codelineno-10-23)    web=SERVE_WEB_INTERFACE, [](#__codelineno-10-24)) [](#__codelineno-10-25)[](#__codelineno-10-26)# You can add more FastAPI routes or configurations below if needed [](#__codelineno-10-27)# Example: [](#__codelineno-10-28)# @app.get("/hello") [](#__codelineno-10-29)# async def read_root(): [](#__codelineno-10-30)#     return {"Hello": "World"} [](#__codelineno-10-31)[](#__codelineno-10-32)if __name__ == "__main__":     [](#__codelineno-10-33)    # Use the PORT environment variable provided by Cloud Run, defaulting to 8080    [](#__codelineno-10-34)    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))`
    
    *Note: We specify `agent_dir` to the directory `main.py` is in and use `os.environ.get("PORT", 8080)` for Cloud Run compatibility.*
    
2.  List the necessary Python packages:
    
    requirements.txt
    
    `[](#__codelineno-11-1)google-adk [](#__codelineno-11-2)# Add any other dependencies your agent needs`
    
3.  Define the container image:
    
    Dockerfile
    
    `[](#__codelineno-12-1)FROM python:3.13-slim [](#__codelineno-12-2)WORKDIR /app [](#__codelineno-12-3)[](#__codelineno-12-4)COPY requirements.txt . [](#__codelineno-12-5)RUN pip install --no-cache-dir -r requirements.txt [](#__codelineno-12-6)[](#__codelineno-12-7)RUN adduser --disabled-password --gecos "" myuser && \     [](#__codelineno-12-8)    chown -R myuser:myuser /app [](#__codelineno-12-9)[](#__codelineno-12-10)COPY . . [](#__codelineno-12-11)[](#__codelineno-12-12)USER myuser [](#__codelineno-12-13)[](#__codelineno-12-14)ENV PATH="/home/myuser/.local/bin:$PATH" [](#__codelineno-12-15)[](#__codelineno-12-16)CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port $PORT"]`
    

#### Define Multiple Agents[¶](#define-multiple-agents "Permanent link")

You can define and deploy multiple agents within the same Cloud Run instance by creating separate folders in the root of `your-project-directory/`. Each folder represents one agent and must define a `root_agent` in its configuration.

Example structure:

``[](#__codelineno-13-1)your-project-directory/ [](#__codelineno-13-2)├── capital_agent/ [](#__codelineno-13-3)│   ├── __init__.py [](#__codelineno-13-4)│   └── agent.py       # contains `root_agent` definition [](#__codelineno-13-5)├── population_agent/ [](#__codelineno-13-6)│   ├── __init__.py [](#__codelineno-13-7)│   └── agent.py       # contains `root_agent` definition [](#__codelineno-13-8)└── ...``

#### Deploy using `gcloud`[¶](#deploy-using-gcloud "Permanent link")

Navigate to `your-project-directory` in your terminal.

`[](#__codelineno-14-1)gcloud run deploy capital-agent-service \ [](#__codelineno-14-2)--source . \ [](#__codelineno-14-3)--region $GOOGLE_CLOUD_LOCATION \ [](#__codelineno-14-4)--project $GOOGLE_CLOUD_PROJECT \ [](#__codelineno-14-5)--allow-unauthenticated \ [](#__codelineno-14-6)--set-env-vars="GOOGLE_CLOUD_PROJECT=$GOOGLE_CLOUD_PROJECT,GOOGLE_CLOUD_LOCATION=$GOOGLE_CLOUD_LOCATION,GOOGLE_GENAI_USE_ENTERPRISE=$GOOGLE_GENAI_USE_ENTERPRISE" [](#__codelineno-14-7)# Add any other necessary environment variables your agent might need`

-   `capital-agent-service`: The name you want to give your Cloud Run service.
-   `--source .`: Tells gcloud to build the container image from the Dockerfile in the current directory.
-   `--region`: Specifies the deployment region.
-   `--project`: Specifies the GCP project.
-   `--allow-unauthenticated`: Allows public access to the service. Remove this flag for private services.
-   `--set-env-vars`: Passes necessary environment variables to the running container. Ensure you include all variables required by ADK and your agent (like API keys if not using Application Default Credentials).

`gcloud` will build the Docker image, push it to Google Artifact Registry, and deploy it to Cloud Run. Upon completion, it will output the URL of your deployed service.

For a full list of deployment options, see the [`gcloud run deploy` reference documentation](https://cloud.google.com/sdk/gcloud/reference/run/deploy).

### adk CLI[¶](#adk-cli_1 "Permanent link")

The `adk deploy cloud_run` command deploys your agent code to Google Cloud Run.

Ensure you have authenticated with Google Cloud (`gcloud auth login` and `gcloud config set project <your-project-id>`).

#### Set up environment variables[¶](#set-up-environment-variables "Permanent link")

Optional but recommended: Setting environment variables can make the deployment commands cleaner.

`[](#__codelineno-15-1)# Set your Google Cloud Project ID [](#__codelineno-15-2)export GOOGLE_CLOUD_PROJECT="your-gcp-project-id" [](#__codelineno-15-3)[](#__codelineno-15-4)# Set your desired Google Cloud Location [](#__codelineno-15-5)export GOOGLE_CLOUD_LOCATION="us-central1" # Example location [](#__codelineno-15-6)[](#__codelineno-15-7)# Set a name for your Cloud Run service (optional) [](#__codelineno-15-8)export SERVICE_NAME="capital-agent-service"`

#### Command usage[¶](#command-usage_1 "Permanent link")

This deployment command should be run from the directory of your agent code, where your `package.json` file is located.

##### Minimal command[¶](#minimal-command_1 "Permanent link")

`[](#__codelineno-16-1)npx adk deploy cloud_run \ [](#__codelineno-16-2)--project=$GOOGLE_CLOUD_PROJECT \ [](#__codelineno-16-3)--region=$GOOGLE_CLOUD_LOCATION`

##### Full command with optional flags[¶](#full-command-with-optional-flags_1 "Permanent link")

`[](#__codelineno-17-1)npx adk deploy cloud_run \ [](#__codelineno-17-2)--project=$GOOGLE_CLOUD_PROJECT \ [](#__codelineno-17-3)--region=$GOOGLE_CLOUD_LOCATION \ [](#__codelineno-17-4)--service_name=$SERVICE_NAME \ [](#__codelineno-17-5)--with_ui`

##### Options[¶](#options_1 "Permanent link")

-   `--project TEXT`: (Required) Your Google Cloud project ID.
-   `--region TEXT`: (Required) The Google Cloud location for deployment, for example: `$GOOGLE_CLOUD_LOCATION`, `us-central1`.
-   `--service_name TEXT`: (Optional) The name for the Cloud Run service, for example: `$SERVICE_NAME`. Defaults to `adk-default-service-name`.
-   `--port INTEGER`: (Optional) The port number the ADK API server will listen on within the container. Defaults to 8000.
-   `--with_ui`: (Optional) If included, deploys the ADK dev UI alongside the agent API server. By default, only the API server is deployed.
-   `--temp_folder TEXT`: (Optional) Specifies a directory for storing intermediate files generated during the deployment process. Defaults to a timestamped folder in the system's temporary directory. *This option is generally not needed unless troubleshooting issues.*
-   `--help`: Show the help message and exit.

##### Authenticated access[¶](#authenticated-access_1 "Permanent link")

During the deployment process, you might be prompted: `Allow unauthenticated invocations to [your-service-name] (y/N)?`.

-   Enter `y` to allow public access to your agent's API endpoint without authentication.
-   Enter `N` (or press Enter for the default) to require authentication, for example, using an identity token as shown in the "Testing your agent" section.

Upon successful execution, the command deploys your agent to Cloud Run and provides the URL of the deployed service.

### adk CLI[¶](#adk-cli_2 "Permanent link")

The adkgo command is located in the google/adk-go repository under cmd/adkgo. Before using it, you need to build it from the root of the adk-go repository:

`go build ./cmd/adkgo`

The adkgo deploy cloudrun command automates the deployment of your application. You do not need to provide your own Dockerfile.

#### Agent Code Structure[¶](#agent-code-structure "Permanent link")

When using the adkgo tool, your main.go file must use the launcher framework. This is because the tool compiles your code and then runs the resulting executable with specific command-line arguments (like web, api, a2a) to start the required services. The launcher is designed to parse these arguments correctly.

Your main.go should look like this:

main.go

``[](#__codelineno-18-1)// Copyright 2025 Google LLC [](#__codelineno-18-2)// [](#__codelineno-18-3)// Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-18-4)// you may not use this file except in compliance with the License. [](#__codelineno-18-5)// You may obtain a copy of the License at [](#__codelineno-18-6)// [](#__codelineno-18-7)//     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-18-8)// [](#__codelineno-18-9)// Unless required by applicable law or agreed to in writing, software [](#__codelineno-18-10)// distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-18-11)// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-18-12)// See the License for the specific language governing permissions and [](#__codelineno-18-13)// limitations under the License. [](#__codelineno-18-14)[](#__codelineno-18-15)package main [](#__codelineno-18-16)[](#__codelineno-18-17)import (     [](#__codelineno-18-18)    "context"    [](#__codelineno-18-19)    "fmt"    [](#__codelineno-18-20)    "log"    [](#__codelineno-18-21)    "os"    [](#__codelineno-18-22)    "strings" [](#__codelineno-18-23)    [](#__codelineno-18-24)    "google.golang.org/adk/v2/agent"    [](#__codelineno-18-25)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-18-26)    "google.golang.org/adk/v2/cmd/launcher"    [](#__codelineno-18-27)    "google.golang.org/adk/v2/cmd/launcher/full"    [](#__codelineno-18-28)    "google.golang.org/adk/v2/model/gemini"    [](#__codelineno-18-29)    "google.golang.org/adk/v2/tool"    [](#__codelineno-18-30)    "google.golang.org/adk/v2/tool/functiontool"    [](#__codelineno-18-31)    "google.golang.org/genai" [](#__codelineno-18-32)) [](#__codelineno-18-33)[](#__codelineno-18-34)type getCapitalCityArgs struct {     [](#__codelineno-18-35)    Country string `json:"country" jsonschema:"The country for which to find the capital city."` [](#__codelineno-18-36)} [](#__codelineno-18-37)[](#__codelineno-18-38)func getCapitalCity(ctx agent.Context, args getCapitalCityArgs) (string, error) {     [](#__codelineno-18-39)    capitals := map[string]string{        [](#__codelineno-18-40)        "united states": "Washington, D.C.",        [](#__codelineno-18-41)        "canada":        "Ottawa",        [](#__codelineno-18-42)        "france":        "Paris",        [](#__codelineno-18-43)        "japan":         "Tokyo",    [](#__codelineno-18-44)    }    [](#__codelineno-18-45)    capital, ok := capitals[strings.ToLower(args.Country)]    [](#__codelineno-18-46)    if !ok {        [](#__codelineno-18-47)        return "", fmt.Errorf("couldn't find the capital for %s", args.Country)    [](#__codelineno-18-48)    } [](#__codelineno-18-49)    [](#__codelineno-18-50)    return capital, nil [](#__codelineno-18-51)} [](#__codelineno-18-52)[](#__codelineno-18-53)func main() {     [](#__codelineno-18-54)    ctx := context.Background() [](#__codelineno-18-55)    [](#__codelineno-18-56)    model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{        [](#__codelineno-18-57)        APIKey: os.Getenv("GOOGLE_API_KEY"),    [](#__codelineno-18-58)    })    [](#__codelineno-18-59)    if err != nil {        [](#__codelineno-18-60)        log.Fatalf("Failed to create model: %v", err)    [](#__codelineno-18-61)    } [](#__codelineno-18-62)    [](#__codelineno-18-63)    capitalTool, err := functiontool.New(        [](#__codelineno-18-64)        functiontool.Config{            [](#__codelineno-18-65)            Name:        "get_capital_city",            [](#__codelineno-18-66)            Description: "Retrieves the capital city for a given country.",        [](#__codelineno-18-67)        },        [](#__codelineno-18-68)        getCapitalCity,    [](#__codelineno-18-69)    )    [](#__codelineno-18-70)    if err != nil {        [](#__codelineno-18-71)        log.Fatalf("Failed to create function tool: %v", err)    [](#__codelineno-18-72)    } [](#__codelineno-18-73)    [](#__codelineno-18-74)    geoAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-18-75)        Name:        "capital_agent",        [](#__codelineno-18-76)        Model:       model,        [](#__codelineno-18-77)        Description: "Agent to find the capital city of a country.",        [](#__codelineno-18-78)        Instruction: "I can answer your questions about the capital city of a country.",        [](#__codelineno-18-79)        Tools:       []tool.Tool{capitalTool},    [](#__codelineno-18-80)    })    [](#__codelineno-18-81)    if err != nil {        [](#__codelineno-18-82)        log.Fatalf("Failed to create agent: %v", err)    [](#__codelineno-18-83)    } [](#__codelineno-18-84)    [](#__codelineno-18-85)    config := &launcher.Config{        [](#__codelineno-18-86)        AgentLoader: agent.NewSingleLoader(geoAgent),    [](#__codelineno-18-87)    } [](#__codelineno-18-88)    [](#__codelineno-18-89)    l := full.NewLauncher()    [](#__codelineno-18-90)    err = l.Execute(ctx, config, os.Args[1:])    [](#__codelineno-18-91)    if err != nil {        [](#__codelineno-18-92)        log.Fatalf("run failed: %v\n\n%s", err, l.CommandLineSyntax())    [](#__codelineno-18-93)    } [](#__codelineno-18-94)}``

#### How it Works[¶](#how-it-works "Permanent link")

1.  The adkgo tool compiles your main.go into a statically linked binary for Linux.
2.  It generates a Dockerfile that copies this binary into a minimal container.
3.  It uses gcloud to build and deploy this container to Cloud Run.
4.  After deployment, it starts a local proxy that securely connects to your new service.

Ensure you have authenticated with Google Cloud (`gcloud auth login` and `gcloud config set project <your-project-id>`).

#### Setup environment variables[¶](#setup-environment-variables_1 "Permanent link")

Optional but recommended: Setting environment variables can make the deployment commands cleaner.

`[](#__codelineno-19-1)# Set your Google Cloud Project ID [](#__codelineno-19-2)export GOOGLE_CLOUD_PROJECT="your-gcp-project-id" [](#__codelineno-19-3)[](#__codelineno-19-4)# Set your desired Google Cloud Location [](#__codelineno-19-5)export GOOGLE_CLOUD_LOCATION="us-central1" [](#__codelineno-19-6)[](#__codelineno-19-7)# Set the path to your agent's main Go file [](#__codelineno-19-8)export AGENT_PATH="./examples/go/cloud-run/main.go" [](#__codelineno-19-9)[](#__codelineno-19-10)# Set a name for your Cloud Run service [](#__codelineno-19-11)export SERVICE_NAME="capital-agent-service"`

#### Command usage[¶](#command-usage_2 "Permanent link")

`[](#__codelineno-20-1)./adkgo deploy cloudrun \     [](#__codelineno-20-2)    -p $GOOGLE_CLOUD_PROJECT \    [](#__codelineno-20-3)    -r $GOOGLE_CLOUD_LOCATION \    [](#__codelineno-20-4)    -s $SERVICE_NAME \    [](#__codelineno-20-5)    --proxy_port=8081 \    [](#__codelineno-20-6)    --server_port=8080 \    [](#__codelineno-20-7)    -e $AGENT_PATH \    [](#__codelineno-20-8)    --a2a --api --webui`

##### Required[¶](#required "Permanent link")

-   `-p, --project_name`: Your Google Cloud project ID.
-   `-r, --region`: The Google Cloud location for deployment, for example: $GOOGLE\_CLOUD\_LOCATION, us-central1.
-   `-s, --service_name`: The name for the Cloud Run service, for example: $SERVICE\_NAME.
-   `-e, --entry_point_path`: Path to the main Go file containing your agent's source code, for example: $AGENT\_PATH.

##### Optional[¶](#optional "Permanent link")

-   `--proxy_port`: The local port for the authenticating proxy to listen on. Defaults to 8081.
-   `--server_port`: The port number the server will listen on within the Cloud Run container. Defaults to 8080.
-   `--a2a`: If included, enables Agent2Agent communication. Enabled by default.
-   `--a2a_agent_url`: A2A agent card URL as advertised in the public agent card. This flag is only valid when used with the --a2a flag.
-   `--api`: If included, deploys the ADK API server. Enabled by default.
-   `--webui`: If included, deploys the ADK dev UI alongside the agent API server. Enabled by default.
-   `--temp_dir`: Temp directory for build artifacts. Defaults to os.TempDir().
-   `--help`: Show the help message and exit.

##### Authenticated access[¶](#authenticated-access_2 "Permanent link")

The service is deployed with --no-allow-unauthenticated by default.

Upon successful execution, the command deploys your agent to Cloud Run and provide a local URL to access the service through the proxy.

### gcloud CLI for Java[¶](#gcloud-cli-for-java "Permanent link")

You can deploy Java Agents using the standard `gcloud run deploy` command and a `Dockerfile`. This is the current recommended way to deploy Java Agents to Google Cloud Run.

Ensure you are [authenticated](https://cloud.google.com/docs/authentication/gcloud) with Google Cloud. Specifically, run the commands `gcloud auth login` and `gcloud config set project <your-project-id>` from your terminal.

#### Project Structure[¶](#project-structure_1 "Permanent link")

Organize your project files as follows:

`[](#__codelineno-21-1)your-project-directory/ [](#__codelineno-21-2)├── src/ [](#__codelineno-21-3)│   └── main/ [](#__codelineno-21-4)│       └── java/ [](#__codelineno-21-5)│             └── agents/ [](#__codelineno-21-6)│                 ├── capitalagent/ [](#__codelineno-21-7)│                     └── CapitalAgent.java    # Your agent code [](#__codelineno-21-8)├── pom.xml                                    # Java adk and adk-dev dependencies [](#__codelineno-21-9)└── Dockerfile                                 # Container build instructions`

Create the `pom.xml` and `Dockerfile` in the root of your project directory. Your Agent code file (`CapitalAgent.java`) inside a directory as shown above.

#### Code files[¶](#code-files_1 "Permanent link")

1.  This is our Agent definition. This is the same code as present in [LLM agent](../../agents/llm-agents/) with two caveats:
    
    -   The Agent is now initialized as a **global public static final variable**.
        
    -   The definition of the agent can be exposed in a static method or inlined during declaration.
        
    
    See the code for the `CapitalAgent` example in the [examples](https://github.com/google/adk-docs/blob/main/examples/java/cloud-run/src/main/java/agents/capitalagent/CapitalAgent.java) repository.
    
2.  Add the following dependencies and plugin to the pom.xml file.
    
    pom.xml
    
    `[](#__codelineno-22-1)<dependencies>   [](#__codelineno-22-2)  <dependency>     [](#__codelineno-22-3)     <groupId>com.google.adk</groupId>     [](#__codelineno-22-4)     <artifactId>google-adk</artifactId>     [](#__codelineno-22-5)     <version>1.11.0</version>  [](#__codelineno-22-6)  </dependency>  [](#__codelineno-22-7)  <dependency>     [](#__codelineno-22-8)     <groupId>com.google.adk</groupId>     [](#__codelineno-22-9)     <artifactId>google-adk-dev</artifactId>     [](#__codelineno-22-10)     <version>1.11.0</version>  [](#__codelineno-22-11)  </dependency> [](#__codelineno-22-12)</dependencies> [](#__codelineno-22-13)[](#__codelineno-22-14)<plugin>   [](#__codelineno-22-15)  <groupId>org.codehaus.mojo</groupId>  [](#__codelineno-22-16)  <artifactId>exec-maven-plugin</artifactId>  [](#__codelineno-22-17)  <version>3.2.0</version>  [](#__codelineno-22-18)  <configuration>    [](#__codelineno-22-19)    <mainClass>com.google.adk.web.AdkWebServer</mainClass>    [](#__codelineno-22-20)    <classpathScope>compile</classpathScope>  [](#__codelineno-22-21)  </configuration> [](#__codelineno-22-22)</plugin>`
    
3.  Define the container image:
    
    Dockerfile
    
    `[](#__codelineno-23-1)# Use an official Maven image with a JDK. Choose a version appropriate for your project. [](#__codelineno-23-2)FROM maven:3.8-openjdk-17 AS builder [](#__codelineno-23-3)[](#__codelineno-23-4)WORKDIR /app [](#__codelineno-23-5)[](#__codelineno-23-6)COPY pom.xml . [](#__codelineno-23-7)RUN mvn dependency:go-offline -B [](#__codelineno-23-8)[](#__codelineno-23-9)COPY src ./src [](#__codelineno-23-10)[](#__codelineno-23-11)# Expose the port your application will listen on. [](#__codelineno-23-12)# Cloud Run will set the PORT environment variable, which your app should use. [](#__codelineno-23-13)EXPOSE 8080 [](#__codelineno-23-14)[](#__codelineno-23-15)# The command to run your application. [](#__codelineno-23-16)# Use a shell so ${PORT} expands and quote exec.args so agent source-dir is passed correctly. [](#__codelineno-23-17)ENTRYPOINT ["sh", "-c", "mvn compile exec:java \     [](#__codelineno-23-18)    -Dexec.mainClass=com.google.adk.web.AdkWebServer \    [](#__codelineno-23-19)    -Dexec.classpathScope=compile \    [](#__codelineno-23-20)    -Dexec.args='--server.port=${PORT:-8080} --adk.agents.source-dir=target'"]`
    

#### Deploy using `gcloud`[¶](#deploy-using-gcloud_1 "Permanent link")

Navigate to `your-project-directory` in your terminal.

`[](#__codelineno-24-1)gcloud run deploy capital-agent-service \ [](#__codelineno-24-2)--source . \ [](#__codelineno-24-3)--region $GOOGLE_CLOUD_LOCATION \ [](#__codelineno-24-4)--project $GOOGLE_CLOUD_PROJECT \ [](#__codelineno-24-5)--allow-unauthenticated \ [](#__codelineno-24-6)--set-env-vars="GOOGLE_CLOUD_PROJECT=$GOOGLE_CLOUD_PROJECT,GOOGLE_CLOUD_LOCATION=$GOOGLE_CLOUD_LOCATION,GOOGLE_GENAI_USE_ENTERPRISE=$GOOGLE_GENAI_USE_ENTERPRISE" [](#__codelineno-24-7)# Add any other necessary environment variables your agent might need`

-   `capital-agent-service`: The name you want to give your Cloud Run service.
-   `--source .`: Tells gcloud to build the container image from the Dockerfile in the current directory.
-   `--region`: Specifies the deployment region.
-   `--project`: Specifies the GCP project.
-   `--allow-unauthenticated`: Allows public access to the service. Remove this flag for private services.
-   `--set-env-vars`: Passes necessary environment variables to the running container. Ensure you include all variables required by ADK and your agent, such as API keys if not using Application Default Credentials.

`gcloud` will build the Docker image, push it to Google Artifact Registry, and deploy it to Cloud Run. Upon completion, it will output the URL of your deployed service.

For a full list of deployment options, see the [`gcloud run deploy` reference documentation](https://cloud.google.com/sdk/gcloud/reference/run/deploy).

## Test your agent[¶](#test-your-agent "Permanent link")

Once your agent is deployed to Cloud Run, you can interact with it via the deployed UI, if enabled, or directly with its API endpoints using tools like `curl`. You'll need the service URL provided after deployment.

UI TestingAPI Testing (curl)

### UI Testing[¶](#ui-testing "Permanent link")

If you deployed your agent with the UI enabled:

-   **adk CLI:** You included the corresponding flag (`--webui` in Go or `--with_ui` in Python or TypeScript) during deployment.
-   **gcloud CLI:** You set `SERVE_WEB_INTERFACE = True` in your `main.py`.

You can test your agent by simply navigating to the Cloud Run service URL provided after deployment in your web browser.

`[](#__codelineno-25-1)# Example URL format [](#__codelineno-25-2)# https://your-service-name-abc123xyz.a.run.app`

The ADK dev UI allows you to interact with your agent, manage sessions, and view execution details directly in the browser.

To verify your agent is working as intended, you can:

1.  Select your agent from the dropdown menu.
2.  Type a message and verify that you receive an expected response from your agent.

If you experience any unexpected behavior, check the [Cloud Run](https://console.cloud.google.com/run) console logs.

### API Testing (curl)[¶](#api-testing-curl "Permanent link")

You can interact with the agent's API endpoints using tools like `curl`. This is useful for programmatic interaction or if you deployed without the UI.

You'll need the service URL provided after deployment and potentially an identity token for authentication if your service isn't set to allow unauthenticated access.

#### Set the application URL[¶](#set-the-application-url "Permanent link")

Replace the example URL with the actual URL of your deployed Cloud Run service.

`[](#__codelineno-26-1)export APP_URL="YOUR_CLOUD_RUN_SERVICE_URL" [](#__codelineno-26-2)# Example: export APP_URL="https://adk-default-service-name-abc123xyz.a.run.app"`

#### Get an identity token (if needed)[¶](#get-an-identity-token-if-needed "Permanent link")

If your service requires authentication, for example, you didn't use `--allow-unauthenticated` with `gcloud` or answered 'N' to the prompt with `adk`, obtain an identity token.

`[](#__codelineno-27-1)export TOKEN=$(gcloud auth print-identity-token)`

*If your service allows unauthenticated access, you can omit the `-H "Authorization: Bearer $TOKEN"` header from the `curl` commands below.*

#### List available apps[¶](#list-available-apps "Permanent link")

Verify the deployed application name.

`[](#__codelineno-28-1)curl -X GET -H "Authorization: Bearer $TOKEN" $APP_URL/list-apps`

*Adjust the `app_name` in the following commands based on this output if needed. The default is often the agent directory name, for example: `capital_agent`*.

#### Create or Update a Session[¶](#create-or-update-a-session "Permanent link")

Initialize or update the state for a specific user and session. Replace `capital_agent` with your actual app name if different. The values `user_123` and `session_abc` are example identifiers; you can replace them with your desired user and session IDs.

`[](#__codelineno-29-1)curl -X POST -H "Authorization: Bearer $TOKEN" \     [](#__codelineno-29-2)    $APP_URL/apps/capital_agent/users/user_123/sessions/session_abc \    [](#__codelineno-29-3)    -H "Content-Type: application/json" \    [](#__codelineno-29-4)    -d '{"preferred_language": "English", "visit_count": 5}'`

#### Run the Agent[¶](#run-the-agent "Permanent link")

Send a prompt to your agent. Replace `capital_agent` with your app name and adjust the user/session IDs and prompt as needed.

`[](#__codelineno-30-1)curl -X POST -H "Authorization: Bearer $TOKEN" \     [](#__codelineno-30-2)    $APP_URL/run_sse \    [](#__codelineno-30-3)    -H "Content-Type: application/json" \    [](#__codelineno-30-4)    -d '{    [](#__codelineno-30-5)    "app_name": "capital_agent",    [](#__codelineno-30-6)    "user_id": "user_123",    [](#__codelineno-30-7)    "session_id": "session_abc",    [](#__codelineno-30-8)    "new_message": {        [](#__codelineno-30-9)        "role": "user",        [](#__codelineno-30-10)        "parts": [{        [](#__codelineno-30-11)        "text": "What is the capital of Canada?"        [](#__codelineno-30-12)        }]    [](#__codelineno-30-13)    },    [](#__codelineno-30-14)    "streaming": false    [](#__codelineno-30-15)    }'`

-   Set `"streaming": true` if you want to receive Server-Sent Events (SSE).
-   The response will contain the agent's execution events, including the final answer.

Back to top