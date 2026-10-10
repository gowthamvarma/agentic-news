---
title: "Google Cloud - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/get-started/google-cloud/
date: 2026-10-10T19:16:32.918Z
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
        -   [Agents CLI](../agents-cli/)
        -   [Installation](../installation/)
        -    Google Cloud [Google Cloud](./)
            
            Table of contents
            
            -   [Setup Google Cloud Agent Platform](#setup-google-cloud-agent-platform)
            -   [Google Cloud authentication options](#google-cloud-authentication-options)
                
                -   [User credentials for local development](#user-credentials)
                -   [Service account for production](#service-account)
                -   [Agent Platform express mode for testing](#express-mode)
                
            -   [Google Cloud hosted models](#google-cloud-hosted-models)
            -   [Additional Google Cloud services connections](#additional-google-cloud-services-connections)
            
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

-   [Setup Google Cloud Agent Platform](#setup-google-cloud-agent-platform)
-   [Google Cloud authentication options](#google-cloud-authentication-options)
    
    -   [User credentials for local development](#user-credentials)
    -   [Service account for production](#service-account)
    -   [Agent Platform express mode for testing](#express-mode)
    
-   [Google Cloud hosted models](#google-cloud-hosted-models)
-   [Additional Google Cloud services connections](#additional-google-cloud-services-connections)

1.  [Home](../..)
2.  [Build Agents](../)
3.  [Get Started](../)

[](https://github.com/google/adk-docs/edit/main/docs/get-started/google-cloud.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Connect to Google Cloud and Agent Platform[¶](#connect-to-google-cloud-and-agent-platform "Permanent link")

This guide explains how to connect and authenticate your ADK agents with Google Cloud Platform (GCP) services, models running on Google Cloud Agent Platform, and Agent Platform services.

## Setup Google Cloud Agent Platform[¶](#setup-google-cloud-agent-platform "Permanent link")

Before attempting to connect an agent with Google Cloud or Agent Platform services, make sure you have completed the following prerequisites:

-   Google Cloud Project with the **Agent Platform API** (`aiplatform.googleapis.com`) enabled.
-   Install the [gcloud CLI](https://cloud.google.com/sdk/docs/install) tool.

## Google Cloud authentication options[¶](#google-cloud-authentication-options "Permanent link")

You have a few options for authentication when connecting your ADK agent to Google Cloud, as described in the table below.

Method

Best Used For

Authentication Mechanism

Environment

[**User Credentials**](#user-credentials)

Local development and testing

Application Default Credentials via `gcloud`

Local workstation

[**Service Account**](#service-account)

Production deployment and CI/CD

Google IAM Service Account Key / Workload Identity

Google Cloud (Agent Runtime, Cloud Run, GKE) or external servers

[**Express Mode**](#express-mode)

Rapid prototyping and testing

API Key

Local or cloud environments

[**Agent Identity**](/integrations/agent-identity)

Production deployment and CI/CD

Google IAM Service Account Key / Workload Identity

Google Cloud (Agent Runtime, Cloud Run, GKE)

Warning: Protect your credentials

User credentials, service account credentials, and API keys are highly sensitive. Never commit credential files or keys directly to your codebase. Whenever possible use secure secret managers such as [Google Cloud Agent Identity](/integrations/agent-identity/), [Google Cloud Secret Manager](https://cloud.google.com/security/products/secret-manager) or other similar products.

### User credentials for local development[¶](#user-credentials "Permanent link")

Connect to Google Cloud with user credentials authentication method working with local development environments.

1.  Authenticate your local workstation using Application Default Credentials (ADC) *before* running your ADK agent application:
    
    `[](#__codelineno-0-1)gcloud auth application-default login`
    
2.  Set your environment variables to enable Agent Platform and specify your project details:
    
    .env fileTerminal
    
    `[](#__codelineno-1-1)# Add to ADK code project but NOT source control [](#__codelineno-1-2)GOOGLE_GENAI_USE_ENTERPRISE=TRUE [](#__codelineno-1-3)GOOGLE_CLOUD_PROJECT=your-project-id [](#__codelineno-1-4)GOOGLE_CLOUD_LOCATION=cloud-location   # example: us-central1`
    
    `[](#__codelineno-2-1)export GOOGLE_GENAI_USE_ENTERPRISE=TRUE [](#__codelineno-2-2)export GOOGLE_CLOUD_PROJECT="your-project-id" [](#__codelineno-2-3)export GOOGLE_CLOUD_LOCATION="cloud-location"   # example: us-central1`
    

`GOOGLE_GENAI_USE_ENTERPRISE` was previously `GOOGLE_GENAI_USE_VERTEXAI`

These variable names are equivalent and do the same thing. If you set `GOOGLE_GENAI_USE_ENTERPRISE` and your agent does not connect to Agent Platform, you're on an older ADK version. Use `GOOGLE_GENAI_USE_VERTEXAI` instead, or update to a newer version of ADK.

### Service account for production[¶](#service-account "Permanent link")

When deploying to secure hosted environments, use a service account for connection authentication:

1.  Create a [Service Account](https://docs.cloud.google.com/iam/docs/service-account-overview) and grant it the `Agent Platform User` role.
2.  Provide the credentials to your agent application according to your deployment strategy:
    -   **Deployed on Google Cloud (Agent Runtime, Cloud Run, GKE):** The environment automatically provides the credentials. No key file configuration is necessary.
    -   **Running externally:** Generate a [service account key file](https://cloud.google.com/iam/docs/keys-create-delete#console) (`.json`) and configure the `GOOGLE_APPLICATION_CREDENTIALS` environment variable:
        
        `[](#__codelineno-3-1)export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-key.json"`
        

Workload Identity option

Instead of the key file, you can also authenticate the service account using [Workload Identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity).

### Agent Platform express mode for testing[¶](#express-mode "Permanent link")

Express Mode offers a simplified, API-key-based setup for prototyping without full gcloud authentication.

1.  Sign up for [express mode](https://console.cloud.google.com/expressmode) to get an API key.
2.  Set the following environment variables:
    
    .env fileTerminal
    
    `[](#__codelineno-4-1)# Add to ADK code project but NOT source control [](#__codelineno-4-2)GOOGLE_GENAI_USE_ENTERPRISE=TRUE [](#__codelineno-4-3)GOOGLE_GENAI_API_KEY=PASTE_YOUR_ACTUAL_EXPRESS_MODE_API_KEY_HERE`
    
    `[](#__codelineno-5-1)export GOOGLE_GENAI_USE_ENTERPRISE=TRUE [](#__codelineno-5-2)export GOOGLE_GENAI_API_KEY="PASTE_YOUR_EXPRESS_MODE_API_KEY_HERE"`
    

## Google Cloud hosted models[¶](#google-cloud-hosted-models "Permanent link")

Google Cloud Agent Platform hosts a wide array of AI models you can connect to your ADK agents, including Gemini models, third-party AI models, open weight models, and models custom-tuned for your organization. Once you have connected your ADK agent to Google Cloud and Agent Platform, you have access to AI models to fit your application requirements. Check out these resources to explore and find the model that's right for your project:

-   Get more information about using [Gemini models](/agents/models/google-gemini/) with ADK agents.
-   Explore third party and custom model options in [Agent Platform hosted models](/agents/models/agent-platform/) for use with ADK agents.
-   Find available models and model IDs from Google Cloud in the [Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/google-models) documentation.

## Additional Google Cloud services connections[¶](#additional-google-cloud-services-connections "Permanent link")

Many Google Cloud services provide ADK integrations with authentication helpers for accessing GCP APIs or resources with an ADK agent. For more information, see the following pages:

-   [Google Cloud Application Integration](/integrations/application-integration/)
-   [BigQuery Toolset](/integrations/bigquery/)
-   [BigQuery Agent Analytics](/integrations/bigquery-agent-analytics/)
-   [Data Agent](/integrations/data-agent/)
-   [Model Armor](/integrations/model-armor/)

Back to top