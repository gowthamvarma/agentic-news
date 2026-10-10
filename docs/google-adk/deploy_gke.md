---
title: "GKE - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/deploy/gke/
date: 2026-10-10T19:16:30.537Z
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
            
        -   [Cloud Run](../cloud-run/)
        -    GKE [GKE](./)
            
            Table of contents
            
            -   [Set environment variables](#set-environment-variables)
            -   [Enable APIs and permissions](#enable-apis-and-permissions)
            -   [Deployment payload](#payload)
            -   [Deployment options](#deployment-options)
            -   [Option 1: Manual deployment using gcloud and kubectl](#option-1-manual-deployment-using-gcloud-and-kubectl)
                
                -   [Create a GKE cluster](#create-a-gke-cluster)
                -   [Create your agent](#create-your-agent)
                -   [Code files](#code-files)
                -   [Build the container image](#build-the-container-image)
                -   [Configure Kubernetes service account for Agent Platform](#configure-kubernetes-service-account-for-agent-platform)
                -   [Create the Kubernetes manifest files](#create-the-kubernetes-manifest-files)
                -   [Deploy the Application](#deploy-the-application)
                
            -   [Option 2: Automated Deployment using adk deploy gke](#option-2-automated-deployment-using-adk-deploy-gke)
                
                -   [Prerequisites](#prerequisites)
                -   [Configure Workload Identity for Agent Platform](#configure-workload-identity-for-agent-platform)
                -   [The deploy gke Command](#the-deploy-gke-command)
                    
                    -   [Syntax](#syntax)
                    
                -   [Arguments & options](#arguments-options)
                -   [How it works](#how-it-works)
                -   [Example of use](#example-of-use)
                -   [Verify your deployment](#verify-your-deployment)
                
            -   [Test your agent](#test-your-agent)
                
                -   [UI Testing](#ui-testing)
                -   [API Testing (curl)](#api-testing-curl)
                    
                    -   [Set the application URL](#set-the-application-url)
                    -   [List available apps](#list-available-apps)
                    -   [Create or Update a Session](#create-or-update-a-session)
                    -   [Run the Agent](#run-the-agent)
                    
                
            -   [Troubleshooting](#troubleshooting)
                
                -   [403 Permission Denied for Gemini's models](#403-permission-denied-for-geminis-models)
                -   [404 or Not Found response](#404-or-not-found-response)
                -   [Attempt to write a readonly database](#attempt-to-write-a-readonly-database)
                -   [Insufficient Permission to Stream Logs ERROR: (gcloud.builds.submit)](#insufficient-permission-to-stream-logs-error-gcloudbuildssubmit)
                -   [Gemini models not supported in Live Api](#gemini-models-not-supported-in-live-api)
                
            -   [Cleanup](#cleanup)
            
        
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

-   [Set environment variables](#set-environment-variables)
-   [Enable APIs and permissions](#enable-apis-and-permissions)
-   [Deployment payload](#payload)
-   [Deployment options](#deployment-options)
-   [Option 1: Manual deployment using gcloud and kubectl](#option-1-manual-deployment-using-gcloud-and-kubectl)
    
    -   [Create a GKE cluster](#create-a-gke-cluster)
    -   [Create your agent](#create-your-agent)
    -   [Code files](#code-files)
    -   [Build the container image](#build-the-container-image)
    -   [Configure Kubernetes service account for Agent Platform](#configure-kubernetes-service-account-for-agent-platform)
    -   [Create the Kubernetes manifest files](#create-the-kubernetes-manifest-files)
    -   [Deploy the Application](#deploy-the-application)
    
-   [Option 2: Automated Deployment using adk deploy gke](#option-2-automated-deployment-using-adk-deploy-gke)
    
    -   [Prerequisites](#prerequisites)
    -   [Configure Workload Identity for Agent Platform](#configure-workload-identity-for-agent-platform)
    -   [The deploy gke Command](#the-deploy-gke-command)
        
        -   [Syntax](#syntax)
        
    -   [Arguments & options](#arguments-options)
    -   [How it works](#how-it-works)
    -   [Example of use](#example-of-use)
    -   [Verify your deployment](#verify-your-deployment)
    
-   [Test your agent](#test-your-agent)
    
    -   [UI Testing](#ui-testing)
    -   [API Testing (curl)](#api-testing-curl)
        
        -   [Set the application URL](#set-the-application-url)
        -   [List available apps](#list-available-apps)
        -   [Create or Update a Session](#create-or-update-a-session)
        -   [Run the Agent](#run-the-agent)
        
    
-   [Troubleshooting](#troubleshooting)
    
    -   [403 Permission Denied for Gemini's models](#403-permission-denied-for-geminis-models)
    -   [404 or Not Found response](#404-or-not-found-response)
    -   [Attempt to write a readonly database](#attempt-to-write-a-readonly-database)
    -   [Insufficient Permission to Stream Logs ERROR: (gcloud.builds.submit)](#insufficient-permission-to-stream-logs-error-gcloudbuildssubmit)
    -   [Gemini models not supported in Live Api](#gemini-models-not-supported-in-live-api)
    
-   [Cleanup](#cleanup)

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Deployment](../)

[](https://github.com/google/adk-docs/edit/main/docs/deploy/gke.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Deploy to Google Kubernetes Engine (GKE)[¶](#deploy-to-google-kubernetes-engine-gke "Permanent link")

Supported in ADK Python Go

[GKE](https://cloud.google.com/gke) is the Google Cloud managed Kubernetes service. It allows you to deploy and manage containerized applications using Kubernetes.

To deploy your agent you will need to have a Kubernetes cluster running on GKE. You can create a cluster using the Google Cloud Console or the `gcloud` command line tool.

The following example shows you how to deploy a simple agent to GKE. The Python agent is a FastAPI application that uses `Gemini Flash` as the LLM. The Go agent uses the ADK launcher and a statically-linked binary in a minimal container. You can use Agent Platform or AI Studio as the LLM provider with the environment variable `GOOGLE_GENAI_USE_ENTERPRISE`.

## Set environment variables[¶](#set-environment-variables "Permanent link")

Set the variables as described in the [Setup and Installation](../../get-started/installation/) guide. You will also need to install the `kubectl` command line tool. You can find instructions to do so in the [Google Kubernetes Engine Documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl).

`[](#__codelineno-0-1)export GOOGLE_CLOUD_PROJECT=your-project-id # Your GCP project ID [](#__codelineno-0-2)export GOOGLE_CLOUD_LOCATION=us-central1 # Or your preferred location [](#__codelineno-0-3)export GOOGLE_GENAI_USE_ENTERPRISE=true # Set to true if using Agent Platform [](#__codelineno-0-4)export GOOGLE_CLOUD_PROJECT_NUMBER=$(gcloud projects describe \   [](#__codelineno-0-5)  --format json $GOOGLE_CLOUD_PROJECT | jq -r ".projectNumber")`

If you don't have jq installed, you can use the following command to get the project number:

`[](#__codelineno-1-1)gcloud projects describe $GOOGLE_CLOUD_PROJECT`

And copy the project number from the output.

`[](#__codelineno-2-1)export GOOGLE_CLOUD_PROJECT_NUMBER=YOUR_PROJECT_NUMBER`

## Enable APIs and permissions[¶](#enable-apis-and-permissions "Permanent link")

-   Ensure you have authenticated with Google Cloud (`gcloud auth login` and `gcloud config set project <your-project-id>`).
-   Enable the necessary APIs for your project. You can do this using the `gcloud` command line tool.

`[](#__codelineno-3-1)gcloud services enable \     [](#__codelineno-3-2)    container.googleapis.com \    [](#__codelineno-3-3)    artifactregistry.googleapis.com \    [](#__codelineno-3-4)    cloudbuild.googleapis.com \    [](#__codelineno-3-5)    aiplatform.googleapis.com`

Grant necessary roles to the default compute engine service account required by the `gcloud builds submit` command.

`[](#__codelineno-4-1)ROLES_TO_ASSIGN=(     [](#__codelineno-4-2)    "roles/artifactregistry.writer"    [](#__codelineno-4-3)    "roles/storage.objectViewer"    [](#__codelineno-4-4)    "roles/logging.viewer"    [](#__codelineno-4-5)    "roles/logging.logWriter" [](#__codelineno-4-6)) [](#__codelineno-4-7)[](#__codelineno-4-8)for ROLE in "${ROLES_TO_ASSIGN[@]}"; do     [](#__codelineno-4-9)    gcloud projects add-iam-policy-binding "${GOOGLE_CLOUD_PROJECT}" \        [](#__codelineno-4-10)        --member="serviceAccount:${GOOGLE_CLOUD_PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \        [](#__codelineno-4-11)        --role="${ROLE}" [](#__codelineno-4-12)done`

## Deployment payload[¶](#payload "Permanent link")

When you deploy your ADK agent workflow to the Google Cloud GKE, the following content is uploaded to the service:

-   Your ADK agent code
-   Any dependencies declared in your ADK agent code
-   ADK API server code version used by your agent

The default deployment *does not* include the ADK web user interface libraries, unless you specify it as deployment setting, such as the `--with_ui` option for `adk deploy gke` command.

## Deployment options[¶](#deployment-options "Permanent link")

You can deploy your agent to GKE either **manually using Kubernetes manifests** or **automatically using the `adk deploy gke` command**. Choose the approach that best suits your workflow.

## Option 1: Manual deployment using gcloud and kubectl[¶](#option-1-manual-deployment-using-gcloud-and-kubectl "Permanent link")

### Create a GKE cluster[¶](#create-a-gke-cluster "Permanent link")

You can create a GKE cluster using the `gcloud` command line tool. This example creates an Autopilot cluster named `adk-cluster` in the `us-central1` region.

If you're creating a GKE Standard cluster

Make sure [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) is enabled. Workload Identity is enabled by default in an AutoPilot cluster.

`[](#__codelineno-5-1)gcloud container clusters create-auto adk-cluster \     [](#__codelineno-5-2)    --location=$GOOGLE_CLOUD_LOCATION \    [](#__codelineno-5-3)    --project=$GOOGLE_CLOUD_PROJECT`

After creating the cluster, you need to connect to it using `kubectl`. This command configures `kubectl` to use the credentials for your new cluster.

`[](#__codelineno-6-1)gcloud container clusters get-credentials adk-cluster \     [](#__codelineno-6-2)    --location=$GOOGLE_CLOUD_LOCATION \    [](#__codelineno-6-3)    --project=$GOOGLE_CLOUD_PROJECT`

### Create your agent[¶](#create-your-agent "Permanent link")

Use the `capital_agent` example defined on the [LLM agents](../../agents/llm-agents/) page as a reference.

PythonGo

Organize your project files as follows:

`[](#__codelineno-7-1)your-project-directory/ [](#__codelineno-7-2)├── capital_agent/ [](#__codelineno-7-3)│   ├── __init__.py [](#__codelineno-7-4)│   └── agent.py       # Your agent code [](#__codelineno-7-5)├── main.py            # FastAPI application entry point [](#__codelineno-7-6)├── requirements.txt   # Python dependencies [](#__codelineno-7-7)└── Dockerfile         # Container build instructions`

Organize your project files as follows:

`[](#__codelineno-8-1)your-project-directory/ [](#__codelineno-8-2)├── main.go       # Agent code and launcher entry point [](#__codelineno-8-3)├── go.mod        # Go module definition [](#__codelineno-8-4)├── go.sum        # Go module checksums [](#__codelineno-8-5)└── Dockerfile    # Container build instructions`

### Code files[¶](#code-files "Permanent link")

PythonGo

Create the following files (`main.py`, `requirements.txt`, `Dockerfile`, `capital_agent/agent.py`, `capital_agent/__init__.py`) in the root of `your-project-directory/`.

1.  This is the Capital Agent example inside the `capital_agent` directory
    
    capital\_agent/agent.py
    
    `[](#__codelineno-9-1)from google.adk.agents import LlmAgent  [](#__codelineno-9-2)[](#__codelineno-9-3)# Define a tool function [](#__codelineno-9-4)def get_capital_city(country: str) -> str:   [](#__codelineno-9-5)  """Retrieves the capital city for a given country."""  [](#__codelineno-9-6)  # Replace with actual logic (e.g., API call, database lookup)  [](#__codelineno-9-7)  capitals = {"france": "Paris", "japan": "Tokyo", "canada": "Ottawa"}  [](#__codelineno-9-8)  return capitals.get(country.lower(), f"Sorry, I don't know the capital of {country}.") [](#__codelineno-9-9)[](#__codelineno-9-10)# Add the tool to the agent [](#__codelineno-9-11)capital_agent = LlmAgent(     [](#__codelineno-9-12)    model="gemini-flash-latest",    [](#__codelineno-9-13)    name="capital_agent", #name of your agent    [](#__codelineno-9-14)    description="Answers user questions about the capital city of a given country.",    [](#__codelineno-9-15)    instruction="""You are an agent that provides the capital city of a country... (previous instruction text)""",    [](#__codelineno-9-16)    tools=[get_capital_city] # Provide the function directly [](#__codelineno-9-17)) [](#__codelineno-9-18)[](#__codelineno-9-19)# ADK will discover the root_agent instance [](#__codelineno-9-20)root_agent = capital_agent`
    
    Mark your directory as a python package
    
    capital\_agent/\_\_init\_\_.py
    
    `[](#__codelineno-10-1)from . import agent`
    
2.  This file sets up the FastAPI application using `get_fast_api_app()` from ADK:
    
    main.py
    
    `[](#__codelineno-11-1)import os [](#__codelineno-11-2)[](#__codelineno-11-3)import uvicorn [](#__codelineno-11-4)from fastapi import FastAPI [](#__codelineno-11-5)from google.adk.cli.fast_api import get_fast_api_app [](#__codelineno-11-6)[](#__codelineno-11-7)# Get the directory where main.py is located [](#__codelineno-11-8)AGENT_DIR = os.path.dirname(os.path.abspath(__file__)) [](#__codelineno-11-9)# Example session service URI (e.g., SQLite) [](#__codelineno-11-10)# Note: Use 'sqlite+aiosqlite' instead of 'sqlite' because DatabaseSessionService requires an async driver [](#__codelineno-11-11)SESSION_SERVICE_URI = "sqlite+aiosqlite:///./sessions.db" [](#__codelineno-11-12)# Example allowed origins for CORS [](#__codelineno-11-13)ALLOWED_ORIGINS = ["http://localhost", "http://localhost:8080", "*"] [](#__codelineno-11-14)# Set web=True if you intend to serve a web interface, False otherwise [](#__codelineno-11-15)SERVE_WEB_INTERFACE = True [](#__codelineno-11-16)[](#__codelineno-11-17)# Call the function to get the FastAPI app instance [](#__codelineno-11-18)# Ensure the agent directory name ('capital_agent') matches your agent folder [](#__codelineno-11-19)app: FastAPI = get_fast_api_app(     [](#__codelineno-11-20)    agents_dir=AGENT_DIR,    [](#__codelineno-11-21)    session_service_uri=SESSION_SERVICE_URI,    [](#__codelineno-11-22)    allow_origins=ALLOWED_ORIGINS,    [](#__codelineno-11-23)    web=SERVE_WEB_INTERFACE, [](#__codelineno-11-24)) [](#__codelineno-11-25)[](#__codelineno-11-26)if __name__ == "__main__":     [](#__codelineno-11-27)    # Use the PORT environment variable provided by Cloud Run, defaulting to 8080    [](#__codelineno-11-28)    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))`
    
    *Note: We specify `agent_dir` to the directory `main.py` is in and use `os.environ.get("PORT", 8080)` for Cloud Run compatibility.*
    
3.  List the necessary Python packages:
    
    requirements.txt
    
    `[](#__codelineno-12-1)google-adk [](#__codelineno-12-2)# Add any other dependencies your agent needs`
    
4.  Define the container image:
    
    Dockerfile
    
    `[](#__codelineno-13-1)FROM python:3.13-slim [](#__codelineno-13-2)WORKDIR /app [](#__codelineno-13-3)[](#__codelineno-13-4)COPY requirements.txt . [](#__codelineno-13-5)RUN pip install --no-cache-dir -r requirements.txt [](#__codelineno-13-6)[](#__codelineno-13-7)RUN adduser --disabled-password --gecos "" myuser && \     [](#__codelineno-13-8)    chown -R myuser:myuser /app [](#__codelineno-13-9)[](#__codelineno-13-10)COPY . . [](#__codelineno-13-11)[](#__codelineno-13-12)USER myuser [](#__codelineno-13-13)[](#__codelineno-13-14)ENV PATH="/home/myuser/.local/bin:$PATH" [](#__codelineno-13-15)[](#__codelineno-13-16)CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port $PORT"]`
    

Create the following files in the root of `your-project-directory/`.

1.  Define the agent and embed the ADK launcher. The launcher handles the `web`, `api`, and `webui` subcommands that start the REST API server and web interface:
    
    main.go
    
    ``[](#__codelineno-14-1)package main [](#__codelineno-14-2)[](#__codelineno-14-3)import (     [](#__codelineno-14-4)    "context"    [](#__codelineno-14-5)    "fmt"    [](#__codelineno-14-6)    "log"    [](#__codelineno-14-7)    "os"    [](#__codelineno-14-8)    "strings" [](#__codelineno-14-9)    [](#__codelineno-14-10)    "google.golang.org/adk/v2/agent"    [](#__codelineno-14-11)    "google.golang.org/adk/v2/agent/llmagent"    [](#__codelineno-14-12)    "google.golang.org/adk/v2/cmd/launcher"    [](#__codelineno-14-13)    "google.golang.org/adk/v2/cmd/launcher/full"    [](#__codelineno-14-14)    "google.golang.org/adk/v2/model/gemini"    [](#__codelineno-14-15)    "google.golang.org/adk/v2/tool"    [](#__codelineno-14-16)    "google.golang.org/adk/v2/tool/functiontool"    [](#__codelineno-14-17)    "google.golang.org/genai" [](#__codelineno-14-18)) [](#__codelineno-14-19)[](#__codelineno-14-20)type getCapitalCityArgs struct {     [](#__codelineno-14-21)    Country string `json:"country" jsonschema:"The country to look up."` [](#__codelineno-14-22)} [](#__codelineno-14-23)[](#__codelineno-14-24)func getCapitalCity(_ agent.Context, args getCapitalCityArgs) (string, error) {     [](#__codelineno-14-25)    capitals := map[string]string{        [](#__codelineno-14-26)        "france":  "Paris",        [](#__codelineno-14-27)        "japan":   "Tokyo",        [](#__codelineno-14-28)        "canada":  "Ottawa",    [](#__codelineno-14-29)    }    [](#__codelineno-14-30)    capital, ok := capitals[strings.ToLower(args.Country)]    [](#__codelineno-14-31)    if !ok {        [](#__codelineno-14-32)        return "", fmt.Errorf("capital not found for %s", args.Country)    [](#__codelineno-14-33)    }    [](#__codelineno-14-34)    return capital, nil [](#__codelineno-14-35)} [](#__codelineno-14-36)[](#__codelineno-14-37)func main() {     [](#__codelineno-14-38)    ctx := context.Background() [](#__codelineno-14-39)    [](#__codelineno-14-40)    model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{        [](#__codelineno-14-41)        APIKey: os.Getenv("GOOGLE_API_KEY"),    [](#__codelineno-14-42)    })    [](#__codelineno-14-43)    if err != nil {        [](#__codelineno-14-44)        log.Fatalf("Failed to create model: %v", err)    [](#__codelineno-14-45)    } [](#__codelineno-14-46)    [](#__codelineno-14-47)    capitalTool, err := functiontool.New(        [](#__codelineno-14-48)        functiontool.Config{            [](#__codelineno-14-49)            Name:        "get_capital_city",            [](#__codelineno-14-50)            Description: "Retrieves the capital city for a given country.",        [](#__codelineno-14-51)        },        [](#__codelineno-14-52)        getCapitalCity,    [](#__codelineno-14-53)    )    [](#__codelineno-14-54)    if err != nil {        [](#__codelineno-14-55)        log.Fatalf("Failed to create tool: %v", err)    [](#__codelineno-14-56)    } [](#__codelineno-14-57)    [](#__codelineno-14-58)    capitalAgent, err := llmagent.New(llmagent.Config{        [](#__codelineno-14-59)        Name:        "capital_agent",        [](#__codelineno-14-60)        Model:       model,        [](#__codelineno-14-61)        Description: "Answers questions about capital cities.",        [](#__codelineno-14-62)        Instruction: "You are an agent that provides the capital city of a country.",        [](#__codelineno-14-63)        Tools:       []tool.Tool{capitalTool},    [](#__codelineno-14-64)    })    [](#__codelineno-14-65)    if err != nil {        [](#__codelineno-14-66)        log.Fatalf("Failed to create agent: %v", err)    [](#__codelineno-14-67)    } [](#__codelineno-14-68)    [](#__codelineno-14-69)    config := &launcher.Config{        [](#__codelineno-14-70)        AgentLoader: agent.NewSingleLoader(capitalAgent),    [](#__codelineno-14-71)    } [](#__codelineno-14-72)    [](#__codelineno-14-73)    l := full.NewLauncher()    [](#__codelineno-14-74)    if err = l.Execute(ctx, config, os.Args[1:]); err != nil {        [](#__codelineno-14-75)        log.Fatalf("Run failed: %v\n\n%s", err, l.CommandLineSyntax())    [](#__codelineno-14-76)    } [](#__codelineno-14-77)}``
    
    To use Agent Platform instead of AI Studio, set `genai.ClientConfig` to use the Agent Platform backend:
    
    `[](#__codelineno-15-1)model, err := gemini.NewModel(ctx, "gemini-flash-latest", &genai.ClientConfig{     [](#__codelineno-15-2)    Backend:  genai.BackendVertexAI,    [](#__codelineno-15-3)    Project:  os.Getenv("GOOGLE_CLOUD_PROJECT"),    [](#__codelineno-15-4)    Location: os.Getenv("GOOGLE_CLOUD_LOCATION"), [](#__codelineno-15-5)})`
    
2.  Define the container image. Go compiles to a self-contained static binary, so the container uses a minimal distroless base image — no runtime dependencies or package manager required:
    
    Dockerfile
    
    `[](#__codelineno-16-1)# Stage 1: Build the Go binary [](#__codelineno-16-2)FROM golang:1.25 AS builder [](#__codelineno-16-3)WORKDIR /app [](#__codelineno-16-4)[](#__codelineno-16-5)COPY go.mod go.sum ./ [](#__codelineno-16-6)RUN go mod download [](#__codelineno-16-7)[](#__codelineno-16-8)COPY . . [](#__codelineno-16-9)# Compile a statically linked Linux/amd64 binary [](#__codelineno-16-10)RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \     [](#__codelineno-16-11)    go build -ldflags="-s -w" -o capital_agent . [](#__codelineno-16-12)[](#__codelineno-16-13)# Stage 2: Copy the binary into a minimal runtime image [](#__codelineno-16-14)FROM gcr.io/distroless/static-debian12 [](#__codelineno-16-15)COPY --from=builder /app/capital_agent /app/capital_agent [](#__codelineno-16-16)EXPOSE 8080 [](#__codelineno-16-17)[](#__codelineno-16-18)# Start the API server and web UI [](#__codelineno-16-19)CMD ["/app/capital_agent", "web", "-port", "8080", "api", "webui"]`
    

### Build the container image[¶](#build-the-container-image "Permanent link")

You need to create a Google Artifact Registry repository to store your container images. You can do this using the `gcloud` command line tool.

`[](#__codelineno-17-1)gcloud artifacts repositories create adk-repo \     [](#__codelineno-17-2)    --repository-format=docker \    [](#__codelineno-17-3)    --location=$GOOGLE_CLOUD_LOCATION \    [](#__codelineno-17-4)    --description="ADK repository"`

Build the container image and push it to Artifact Registry:

PythonGo

Use Cloud Build to build and push the image directly from your source directory:

`[](#__codelineno-18-1)gcloud builds submit \     [](#__codelineno-18-2)    --tag $GOOGLE_CLOUD_LOCATION-docker.pkg.dev/$GOOGLE_CLOUD_PROJECT/adk-repo/adk-agent:latest \    [](#__codelineno-18-3)    --project=$GOOGLE_CLOUD_PROJECT \    [](#__codelineno-18-4)    .`

The multi-stage Dockerfile handles compilation inside the builder stage, so you can use Cloud Build without needing a local Go toolchain:

`[](#__codelineno-19-1)gcloud builds submit \     [](#__codelineno-19-2)    --tag $GOOGLE_CLOUD_LOCATION-docker.pkg.dev/$GOOGLE_CLOUD_PROJECT/adk-repo/adk-agent:latest \    [](#__codelineno-19-3)    --project=$GOOGLE_CLOUD_PROJECT \    [](#__codelineno-19-4)    .`

Alternatively, compile the binary locally and build a smaller image without the multi-stage Dockerfile — useful if you already have Go installed:

`[](#__codelineno-20-1)# Cross-compile for linux/amd64 [](#__codelineno-20-2)CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o capital_agent . [](#__codelineno-20-3)[](#__codelineno-20-4)# Build and push the image [](#__codelineno-20-5)docker build -t $GOOGLE_CLOUD_LOCATION-docker.pkg.dev/$GOOGLE_CLOUD_PROJECT/adk-repo/adk-agent:latest . [](#__codelineno-20-6)docker push $GOOGLE_CLOUD_LOCATION-docker.pkg.dev/$GOOGLE_CLOUD_PROJECT/adk-repo/adk-agent:latest`

Verify the image is built and pushed to the Artifact Registry:

`[](#__codelineno-21-1)gcloud artifacts docker images list \   [](#__codelineno-21-2)  $GOOGLE_CLOUD_LOCATION-docker.pkg.dev/$GOOGLE_CLOUD_PROJECT/adk-repo \  [](#__codelineno-21-3)  --project=$GOOGLE_CLOUD_PROJECT`

### Configure Kubernetes service account for Agent Platform[¶](#configure-kubernetes-service-account-for-agent-platform "Permanent link")

If your agent uses Agent Platform, you need to create a Kubernetes service account with the necessary permissions. This example creates a service account named `adk-agent-sa` and binds it to the `Agent Platform User` role.

Skip if using AI Studio

If you are using AI Studio and accessing the model with an API key you can skip this step.

`[](#__codelineno-22-1)kubectl create serviceaccount adk-agent-sa`

`[](#__codelineno-23-1)PROJECT_ID=${GOOGLE_CLOUD_PROJECT} [](#__codelineno-23-2)PROJECT_NUM=${GOOGLE_CLOUD_PROJECT_NUMBER} [](#__codelineno-23-3)IAM_URL="principal://[iam.googleapis.com/projects/$](https://iam.googleapis.com/projects/$){PROJECT_NUM}" [](#__codelineno-23-4)WIP="locations/global/workloadIdentityPools/${PROJECT_ID}.svc.id.goog" [](#__codelineno-23-5)SA="subject/ns/default/sa/adk-agent-sa" [](#__codelineno-23-6)[](#__codelineno-23-7)gcloud projects add-iam-policy-binding projects/${PROJECT_ID} \     [](#__codelineno-23-8)    --role=roles/aiplatform.user \    [](#__codelineno-23-9)    --member="${IAM_URL}/${WIP}/${SA}" \    [](#__codelineno-23-10)    --condition=None`

### Create the Kubernetes manifest files[¶](#create-the-kubernetes-manifest-files "Permanent link")

Create a Kubernetes deployment manifest file named `deployment.yaml` in your project directory. This file defines how to deploy your application on GKE.

deployment.yaml

`[](#__codelineno-24-1)cat <<  EOF > deployment.yaml [](#__codelineno-24-2)apiVersion: apps/v1 [](#__codelineno-24-3)kind: Deployment [](#__codelineno-24-4)metadata:   [](#__codelineno-24-5)  name: adk-agent [](#__codelineno-24-6)spec:   [](#__codelineno-24-7)  replicas: 1  [](#__codelineno-24-8)  selector:    [](#__codelineno-24-9)    matchLabels:      [](#__codelineno-24-10)      app: adk-agent  [](#__codelineno-24-11)  template:    [](#__codelineno-24-12)    metadata:      [](#__codelineno-24-13)      labels:        [](#__codelineno-24-14)        app: adk-agent    [](#__codelineno-24-15)    spec:      [](#__codelineno-24-16)      serviceAccount: adk-agent-sa      [](#__codelineno-24-17)      containers:      [](#__codelineno-24-18)      - name: adk-agent        [](#__codelineno-24-19)        imagePullPolicy: Always        [](#__codelineno-24-20)        image: $GOOGLE_CLOUD_LOCATION-docker.pkg.dev/$GOOGLE_CLOUD_PROJECT/adk-repo/adk-agent:latest        [](#__codelineno-24-21)        resources:          [](#__codelineno-24-22)          limits:            [](#__codelineno-24-23)            memory: "128Mi"            [](#__codelineno-24-24)            cpu: "500m"            [](#__codelineno-24-25)            ephemeral-storage: "128Mi"          [](#__codelineno-24-26)          requests:            [](#__codelineno-24-27)            memory: "128Mi"            [](#__codelineno-24-28)            cpu: "500m"            [](#__codelineno-24-29)            ephemeral-storage: "128Mi"        [](#__codelineno-24-30)        ports:        [](#__codelineno-24-31)        - containerPort: 8080        [](#__codelineno-24-32)        env:          [](#__codelineno-24-33)          - name: PORT            [](#__codelineno-24-34)            value: "8080"          [](#__codelineno-24-35)          - name: GOOGLE_CLOUD_PROJECT            [](#__codelineno-24-36)            value: $GOOGLE_CLOUD_PROJECT          [](#__codelineno-24-37)          - name: GOOGLE_CLOUD_LOCATION            [](#__codelineno-24-38)            value: $GOOGLE_CLOUD_LOCATION          [](#__codelineno-24-39)          - name: GOOGLE_GENAI_USE_ENTERPRISE            [](#__codelineno-24-40)            value: "$GOOGLE_GENAI_USE_ENTERPRISE"          [](#__codelineno-24-41)          # If using AI Studio, set GOOGLE_GENAI_USE_ENTERPRISE to false and set the following:          [](#__codelineno-24-42)          # - name: GOOGLE_API_KEY          [](#__codelineno-24-43)          #   value: $GOOGLE_API_KEY          [](#__codelineno-24-44)          # Add any other necessary environment variables your agent might need [](#__codelineno-24-45)--- [](#__codelineno-24-46)apiVersion: v1 [](#__codelineno-24-47)kind: Service [](#__codelineno-24-48)metadata:   [](#__codelineno-24-49)  name: adk-agent [](#__codelineno-24-50)spec:          [](#__codelineno-24-51)  type: LoadBalancer  [](#__codelineno-24-52)  ports:    [](#__codelineno-24-53)    - port: 80      [](#__codelineno-24-54)      targetPort: 8080  [](#__codelineno-24-55)  selector:    [](#__codelineno-24-56)    app: adk-agent [](#__codelineno-24-57)EOF`

### Deploy the Application[¶](#deploy-the-application "Permanent link")

Deploy the application using the `kubectl` command line tool. This command applies the deployment and service manifest files to your GKE cluster.

`[](#__codelineno-25-1)kubectl apply -f deployment.yaml`

After a few moments, you can check the status of your deployment using:

`[](#__codelineno-26-1)kubectl get pods -l=app=adk-agent`

This command lists the pods associated with your deployment. You should see a pod with a status of `Running`.

Once the pod is running, you can check the status of the service using:

`[](#__codelineno-27-1)kubectl get service adk-agent`

If the output shows a `External IP`, it means your service is accessible from the internet. It may take a few minutes for the external IP to be assigned. You can get the external IP address of your service using:

`[](#__codelineno-28-1)kubectl get svc adk-agent -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'`

## Option 2: Automated Deployment using `adk deploy gke`[¶](#option-2-automated-deployment-using-adk-deploy-gke "Permanent link")

Python only

The `adk deploy gke` command is available for Python only. Go does not have an equivalent CLI command. Go agents must be deployed using the manual approach described in [Option 1](#option-1-manual-deployment-using-gcloud-and-kubectl).

ADK provides a CLI command to streamline GKE deployment. This avoids the need to manually build images, write Kubernetes manifests, or push to Artifact Registry.

#### Prerequisites[¶](#prerequisites "Permanent link")

Before you begin, ensure you have the following set up:

1.  **A running GKE cluster:** You need an active Kubernetes cluster on Google Cloud.
    
2.  **Required CLIs:**
    
    -   **`gcloud` CLI:** The Google Cloud CLI must be installed, authenticated, and configured to use your target project. Run `gcloud auth login` and `gcloud config set project [YOUR_PROJECT_ID]`.
    -   **kubectl:** The Kubernetes CLI must be installed to deploy the application to your cluster.
3.  **Enabled Google Cloud APIs:** Make sure the following APIs are enabled in your Google Cloud project:
    
    -   Kubernetes Engine API (`container.googleapis.com`)
    -   Cloud Build API (`cloudbuild.googleapis.com`)
    -   Container Registry API (`containerregistry.googleapis.com`)
4.  **Required IAM Permissions:** The user or Compute Engine default service account running the command needs, at a minimum, the following roles:
    
5.  **Kubernetes Engine Developer** (`roles/container.developer`): To interact with the GKE cluster.
    
6.  **Storage Object Viewer** (`roles/storage.objectViewer`): To allow Cloud Build to download the source code from the Cloud Storage bucket where gcloud builds submit uploads it.
    
7.  **Artifact Registry Create on Push Writer** (`roles/artifactregistry.createOnPushWriter`): To allow Cloud Build to push the built container image to Artifact Registry. This role also permits the on-the-fly creation of the special gcr.io repository within Artifact Registry if needed on the first push.
    
8.  **Logs Writer** (`roles/logging.logWriter`): To allow Cloud Build to write build logs to Cloud Logging.
    

### Configure Workload Identity for Agent Platform[¶](#configure-workload-identity-for-agent-platform "Permanent link")

If your agent uses Agent Platform, the workload running in your cluster needs permission to call the Agent Platform API. Unlike the manual path, `adk deploy gke` generates a manifest that uses the `default` Kubernetes service account in the `default` namespace. Grant the `Agent Platform User` role to that service account through Workload Identity so the agent can access models such as Gemini.

Skip if using AI Studio

If you are using AI Studio and accessing the model with an API key you can skip this step.

`[](#__codelineno-29-1)gcloud projects add-iam-policy-binding projects/${GOOGLE_CLOUD_PROJECT} \     [](#__codelineno-29-2)    --role=roles/aiplatform.user \    [](#__codelineno-29-3)    --member=principal://iam.googleapis.com/projects/${GOOGLE_CLOUD_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${GOOGLE_CLOUD_PROJECT}.svc.id.goog/subject/ns/default/sa/default \    [](#__codelineno-29-4)    --condition=None`

If you are using a Google Cloud project and skip this step, the agent's pods start successfully, but requests to the model fail with a `403 PERMISSION_DENIED` error when verifying your deployment.

### The `deploy gke` Command[¶](#the-deploy-gke-command "Permanent link")

The command takes the path to your agent and parameters specifying the target GKE cluster.

#### Syntax[¶](#syntax "Permanent link")

`[](#__codelineno-30-1)adk deploy gke [OPTIONS] AGENT_PATH`

### Arguments & options[¶](#arguments-options "Permanent link")

Argument

Description

Required

AGENT\_PATH

The local file path to your agent's root directory.

Yes

\--project

The Google Cloud Project ID where your GKE cluster is located.

Yes

\--cluster\_name

The name of your GKE cluster.

Yes

\--region

The Google Cloud region of your cluster (e.g., us-central1).

Yes

\--service\_type

The type of Kubernetes service to create. Accepts `ClusterIP` (default) or `LoadBalancer`.

No

\--with\_ui

Deploys both the agent's back-end API and a companion front-end user interface.

No

\--log\_level

Sets the logging level for the deployment process. Options: debug, info, warning, error, critical.

No

### How it works[¶](#how-it-works "Permanent link")

When you run the `adk deploy gke` command, the ADK performs the following steps automatically:

-   **Containerization:** It builds a Docker container image from your agent's source code.
-   **Image Push:** It tags the container image and pushes it to your project's Artifact Registry.
-   **Manifest Generation:** It dynamically generates the necessary Kubernetes manifest files (a `Deployment` and a `Service`).
-   **Cluster Deployment:** It applies these manifests to your specified GKE cluster, which triggers the following:

The `Deployment` instructs GKE to pull the container image from Artifact Registry and run it in one or more Pods.

The `Service` creates a stable network endpoint for your agent. It defaults to a `ClusterIP` service, which is only accessible within the cluster. To expose your agent to the internet with a public IP address, you must specify `--service_type=LoadBalancer`.

### Example of use[¶](#example-of-use "Permanent link")

Here is a practical example of deploying an agent located at `~/agents/multi_tool_agent/` to a GKE cluster named test.

`[](#__codelineno-31-1)adk deploy gke \     [](#__codelineno-31-2)    --project myproject \    [](#__codelineno-31-3)    --cluster_name test \    [](#__codelineno-31-4)    --region us-central1 \    [](#__codelineno-31-5)    --with_ui \    [](#__codelineno-31-6)    --log_level info \    [](#__codelineno-31-7)    ~/agents/multi_tool_agent/`

### Verify your deployment[¶](#verify-your-deployment "Permanent link")

If you used `adk deploy gke`, verify the deployment using `kubectl`:

-   **Check the Pods:** Ensure your agent's pods are in the Running state.

`[](#__codelineno-32-1)kubectl get pods`

You should see output like `adk-default-service-name-xxxx-xxxx ... 1/1 Running` in the default namespace.

-   **Find the External IP:** Get the public IP address for your agent's service.

`[](#__codelineno-33-1)kubectl get service`

By default, the service type is `ClusterIP`, and `EXTERNAL-IP` is `<none>`.

`[](#__codelineno-34-1)NAME                       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE [](#__codelineno-34-2)adk-default-service-name   ClusterIP   10.12.1.2       <none>        80/TCP    2m`

To test your agent, you can use port-forwarding:

`[](#__codelineno-35-1)kubectl port-forward svc/adk-default-service-name 8080:80`

You can then access your agent at `http://localhost:8080`.

If you deployed with `--service_type=LoadBalancer`, it may take a few minutes for an external IP to be assigned. Once the `EXTERNAL-IP` is available, you can navigate to it to interact with your agent. ![alt text](./images/img_0c813170d0.png)

## Test your agent[¶](#test-your-agent "Permanent link")

Once your agent is deployed to GKE, you can interact with it via the deployed UI (if enabled) or directly with its API endpoints using tools like `curl`. You'll need the service URL provided after deployment.

UI TestingAPI Testing (curl)

### UI Testing[¶](#ui-testing "Permanent link")

If you deployed your agent with the UI enabled:

You can test your agent by simply navigating to the kubernetes service URL in your web browser.

The ADK dev UI allows you to interact with your agent, manage sessions, and view execution details directly in the browser.

To verify your agent is working as intended, you can:

1.  Select your agent from the dropdown menu.
2.  Type a message and verify that you receive an expected response from your agent.

If you experience any unexpected behavior, check the pod logs for your agent using:

`[](#__codelineno-36-1)kubectl logs -l app=adk-agent`

### API Testing (curl)[¶](#api-testing-curl "Permanent link")

You can interact with the agent's API endpoints using tools like `curl`. This is useful for programmatic interaction or if you deployed without the UI.

#### Set the application URL[¶](#set-the-application-url "Permanent link")

`[](#__codelineno-37-1)export APP_URL=$(kubectl get service adk-agent -o jsonpath='{.status.loadBalancer.ingress[0].ip}')`

Go: API path prefix

The Go ADK server serves all REST endpoints under the `/api` path prefix by default. Prepend `/api` to every path in the examples below when testing a Go deployment. For example:

Python

Go

`$APP_URL/list-apps`

`$APP_URL/api/list-apps`

`$APP_URL/apps/…`

`$APP_URL/api/apps/…`

`$APP_URL/run_sse`

`$APP_URL/api/run_sse`

The prefix can be changed at startup with `-path_prefix` on the `api` subcommand, e.g. `CMD ["/app/capital_agent", "web", "-port", "8080", "api", "-path_prefix", ""]` removes the prefix entirely.

#### List available apps[¶](#list-available-apps "Permanent link")

Verify the deployed application name.

`[](#__codelineno-38-1)curl -X GET $APP_URL/list-apps`

*(Adjust the `app_name` in the following commands based on this output if needed. The default is often the agent directory name, e.g., `capital_agent`)*.

#### Create or Update a Session[¶](#create-or-update-a-session "Permanent link")

Initialize or update the state for a specific user and session. Replace `capital_agent` with your actual app name if different.

`[](#__codelineno-39-1)curl -X POST \     [](#__codelineno-39-2)    $APP_URL/apps/capital_agent/users/user_123/sessions/session_abc \    [](#__codelineno-39-3)    -H "Content-Type: application/json" \    [](#__codelineno-39-4)    -d '{"preferred_language": "English", "visit_count": 5}'`

#### Run the Agent[¶](#run-the-agent "Permanent link")

Send a prompt to your agent. Replace `capital_agent` with your app name and adjust the user/session IDs and prompt as needed.

Go: JSON field names are camelCase

The Python ADK REST API uses `snake_case` field names in the JSON request body (e.g. `app_name`, `user_id`, `new_message`). The Go ADK REST API uses `camelCase` (e.g. `appName`, `userId`, `newMessage`). Use the correct format for your deployment language.

PythonGo

`[](#__codelineno-40-1)curl -X POST $APP_URL/run_sse \     [](#__codelineno-40-2)    -H "Content-Type: application/json" \    [](#__codelineno-40-3)    -d '{    [](#__codelineno-40-4)    "app_name": "capital_agent",    [](#__codelineno-40-5)    "user_id": "user_123",    [](#__codelineno-40-6)    "session_id": "session_abc",    [](#__codelineno-40-7)    "new_message": {        [](#__codelineno-40-8)        "role": "user",        [](#__codelineno-40-9)        "parts": [{        [](#__codelineno-40-10)        "text": "What is the capital of Canada?"        [](#__codelineno-40-11)        }]    [](#__codelineno-40-12)    },    [](#__codelineno-40-13)    "streaming": false    [](#__codelineno-40-14)    }'`

`[](#__codelineno-41-1)curl -X POST $APP_URL/api/run_sse \     [](#__codelineno-41-2)    -H "Content-Type: application/json" \    [](#__codelineno-41-3)    -d '{    [](#__codelineno-41-4)    "appName": "capital_agent",    [](#__codelineno-41-5)    "userId": "user_123",    [](#__codelineno-41-6)    "sessionId": "session_abc",    [](#__codelineno-41-7)    "newMessage": {        [](#__codelineno-41-8)        "role": "user",        [](#__codelineno-41-9)        "parts": [{        [](#__codelineno-41-10)        "text": "What is the capital of Canada?"        [](#__codelineno-41-11)        }]    [](#__codelineno-41-12)    },    [](#__codelineno-41-13)    "streaming": false    [](#__codelineno-41-14)    }'`

-   Set `"streaming": true` if you want to receive Server-Sent Events (SSE).
-   The response will contain the agent's execution events, including the final answer.

## Troubleshooting[¶](#troubleshooting "Permanent link")

These are some common issues you might encounter when deploying your agent to GKE:

### 403 Permission Denied for Gemini's models[¶](#403-permission-denied-for-geminis-models "Permanent link")

This usually means that the Kubernetes service account does not have the necessary permission to access the Agent Platform API. Ensure that you have created the service account and bound it to the `Agent Platform User` role as described in the [Configure Kubernetes Service Account for Agent Platform](#configure-kubernetes-service-account-for-agent-platform) section. If you deployed with `adk deploy gke`, bind the `default` service account instead, as described in the [Configure Workload Identity for Agent Platform](#configure-workload-identity-for-agent-platform) section. If you are using AI Studio, ensure that you have set the `GOOGLE_API_KEY` environment variable in the deployment manifest and it is valid.

### 404 or Not Found response[¶](#404-or-not-found-response "Permanent link")

This usually means there is an error in your request. Check the application logs to diagnose the problem.

`[](#__codelineno-42-1)export POD_NAME=$(kubectl get pod -l app=adk-agent -o jsonpath='{.items[0].metadata.name}') [](#__codelineno-42-2)kubectl logs $POD_NAME`

### Attempt to write a readonly database[¶](#attempt-to-write-a-readonly-database "Permanent link")

Python only

This error applies to Python deployments that use SQLite for session storage. Go deployments use an in-memory session service by default and are not affected by this issue.

You might see there is no session id created in the UI and the agent does not respond to any messages. This is usually caused by the SQLite database being read-only. This can happen if you run the agent locally and then create the container image which copies the SQLite database into the container. The database is then read-only in the container.

`[](#__codelineno-43-1)sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) attempt to write a readonly database [](#__codelineno-43-2)[SQL: UPDATE app_states SET state=?, update_time=CURRENT_TIMESTAMP WHERE app_states.app_name = ?]`

To fix this issue, you can either:

Delete the SQLite database file from your local machine before building the container image. This will create a new SQLite database when the container is started.

`[](#__codelineno-44-1)rm -f sessions.db`

or (recommended) you can add a `.dockerignore` file to your project directory to exclude the SQLite database from being copied into the container image.

.dockerignore

`[](#__codelineno-45-1)sessions.db`

Build the container image and deploy the application again.

### Insufficient Permission to Stream Logs `ERROR: (gcloud.builds.submit)`[¶](#insufficient-permission-to-stream-logs-error-gcloudbuildssubmit "Permanent link")

This error can occur when you don't have sufficient permissions to stream build logs, or your VPC-SC security policy restricts access to the default logs bucket. To check the progress of the build, follow the link provided in the error message or navigate to the Cloud Build page in the Google Cloud Console.

You can also verify the image was built and pushed to the Artifact Registry using the command under the [Build the container image](#build-the-container-image) section.

### Gemini models not supported in Live Api[¶](#gemini-models-not-supported-in-live-api "Permanent link")

When using the ADK Dev UI for your deployed agent, text-based chat works, but voice (e.g., clicking the microphone button) fail. You might see a `websockets.exceptions.ConnectionClosedError` in the pod logs indicating that your model is "not supported in the live api".

This error occurs because the agent is configured with a model (like `gemini-flash-latest` in the example) that does not support the Gemini Live API. The Live API is required for real-time, bidirectional streaming of audio and video.

## Cleanup[¶](#cleanup "Permanent link")

To delete the GKE cluster and all associated resources, run:

`[](#__codelineno-46-1)gcloud container clusters delete adk-cluster \     [](#__codelineno-46-2)    --location=$GOOGLE_CLOUD_LOCATION \    [](#__codelineno-46-3)    --project=$GOOGLE_CLOUD_PROJECT`

To delete the Artifact Registry repository, run:

`[](#__codelineno-47-1)gcloud artifacts repositories delete adk-repo \     [](#__codelineno-47-2)    --location=$GOOGLE_CLOUD_LOCATION \    [](#__codelineno-47-3)    --project=$GOOGLE_CLOUD_PROJECT`

You can also delete the project if you no longer need it. This will delete all resources associated with the project, including the GKE cluster, Artifact Registry repository, and any other resources you created.

`[](#__codelineno-48-1)gcloud projects delete $GOOGLE_CLOUD_PROJECT`

Back to top