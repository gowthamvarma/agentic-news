---
title: "Authentication - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/tools-custom/authentication/
date: 2026-10-10T19:17:02.768Z
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
            -   [Tool performance](../performance/)
            -   [Action confirmations](../confirmation/)
            
        -   [MCP tools](../mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../mcp-tools/advanced/)
            -   [Deployment](../mcp-tools/deployment/)
            -   [Agent as MCP server](../mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../openapi-tools/)
        -    Authentication [Authentication](./)
            
            Table of contents
            
            -   [Authentication and credential management](#authentication-and-credential-management)
                
                -   [Recommended: Authentication manager services](#authentication-manager)
                -   [Self-managed authentication](#self-managed-authentication)
                -   [Secrets manager services](#secrets-manager)
                -   [Local encrypted secrets storage](#local-encrypted-secrets-storage)
                -   [In-memory secrets](#in-memory-secrets)
                
            -   [Framework components](#framework-components)
                
                -   [Supported initial credential types](#supported-initial-credential-types)
                
            -   [Tools and integrations quick guide](#tools-and-integrations-quick-guide)
            -   [Build agentic applications with authenticated tools](#build-agentic-applications-with-authenticated-tools)
                
                -   [Configure tools with authentication](#configure-tools-with-authentication)
                    
                    -   [Use OpenAPI-based toolsets](#use-openapi-based-toolsets)
                    -   [Use Google API toolsets](#use-google-api-toolsets)
                    -   [Use ID token](#use-id-token)
                        
                        -   [Configuration](#configuration)
                        -   [Key takeaways](#key-takeaways)
                        -   [ServiceAccount configuration parameters](#serviceaccount-configuration-parameters)
                        
                    -   [Use external access tokens](#use-external-access-tokens)
                    -   [Authentication request flow](#authentication-request-flow)
                    
                -   [Authenticate at a toolset level](#authenticate-at-a-toolset-level)
                    
                    -   [How to enable it](#how-to-enable-it)
                    
                -   [Handle the interactive OAuth/OIDC flow (client-side)](#handle-the-interactive-oauthoidc-flow-client-side)
                
            -   [Build custom tools (FunctionTool) requiring authentication](#build-custom-tools-functiontool-requiring-authentication)
                
                -   [Prerequisites](#prerequisites)
                -   [Authentication Logic within the Tool Function](#authentication-logic-within-the-tool-function)
                
            
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

-   [Authentication and credential management](#authentication-and-credential-management)
    
    -   [Recommended: Authentication manager services](#authentication-manager)
    -   [Self-managed authentication](#self-managed-authentication)
    -   [Secrets manager services](#secrets-manager)
    -   [Local encrypted secrets storage](#local-encrypted-secrets-storage)
    -   [In-memory secrets](#in-memory-secrets)
    
-   [Framework components](#framework-components)
    
    -   [Supported initial credential types](#supported-initial-credential-types)
    
-   [Tools and integrations quick guide](#tools-and-integrations-quick-guide)
-   [Build agentic applications with authenticated tools](#build-agentic-applications-with-authenticated-tools)
    
    -   [Configure tools with authentication](#configure-tools-with-authentication)
        
        -   [Use OpenAPI-based toolsets](#use-openapi-based-toolsets)
        -   [Use Google API toolsets](#use-google-api-toolsets)
        -   [Use ID token](#use-id-token)
            
            -   [Configuration](#configuration)
            -   [Key takeaways](#key-takeaways)
            -   [ServiceAccount configuration parameters](#serviceaccount-configuration-parameters)
            
        -   [Use external access tokens](#use-external-access-tokens)
        -   [Authentication request flow](#authentication-request-flow)
        
    -   [Authenticate at a toolset level](#authenticate-at-a-toolset-level)
        
        -   [How to enable it](#how-to-enable-it)
        
    -   [Handle the interactive OAuth/OIDC flow (client-side)](#handle-the-interactive-oauthoidc-flow-client-side)
    
-   [Build custom tools (FunctionTool) requiring authentication](#build-custom-tools-functiontool-requiring-authentication)
    
    -   [Prerequisites](#prerequisites)
    -   [Authentication Logic within the Tool Function](#authentication-logic-within-the-tool-function)
    

1.  [Home](../..)
2.  [Components](../../get-started/about/)
3.  [Custom Tools](../)

[](https://github.com/google/adk-docs/edit/main/docs/tools-custom/authentication.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Authenticating with tools[¶](#authenticating-with-tools "Permanent link")

Supported in ADKPython v0.1.0

The tools and services you use within ADK agents may require access to protected resources, such as user data in email or calendar applications, or sales records in databases. Getting access to these resources typically requires an authentication process that includes credentials and access keys which must be carefully managed and protected. The requirements for managing authentication data can also change if you are running your agent locally or deploying it to a hosted service. If multiple users, with potentially different access permissions, are interacting with the agent, this creates another layer of authentication management requirements.

WARNING: Credential storage and security risks

Storing sensitive credentials such as access tokens and especially refresh tokens directly in the session state can pose security risks depending on your session storage backend, your ***SessionService*** implementation, and overall application security posture. Carefully consider how you manage credentials in ADK agents before deploying them for general use.

## Authentication and credential management[¶](#authentication-and-credential-management "Permanent link")

There are several ways to manage authentication and credentials in ADK agents. Each of these methods carries some amount of risk, so you should carefully consider which approach best serves your application and customers.

### Recommended: Authentication manager services[¶](#authentication-manager "Permanent link")

When deploying agents to production hosted environments, your agent's ability to properly authenticate to restricted tools and services becomes more challenging and more important to properly manage. This authentication challenge can become even more complicated when users of your agent have varying levels of access to restricted tools and data.

Rather than writing code to handle the authentication process and credential management for various tools used by your agent, use an *authentication manager* service that manages *both* for you. This service should handle the storage of keys and secrets, as well as the acquisition, management, and storage of OAuth access or refresh tokens. Learn more about [Agent Identity integration](/integrations/agent-identity/) with ADK.

### Self-managed authentication[¶](#self-managed-authentication "Permanent link")

If you decide to manage your own authentication process with ADK helper functions and your own code, consider these recommendations:

-   **API keys and client secrets:** For any API keys and client secrets used inside ADK code, when running on a local compute environment use a local `.env` file excluded from version control. When your agent is hosted or otherwise in a production environment, use a secrets manager. For more details on secrets managers, see the [next section](#secrets-manager).
-   **Interactive authentication:** When using interactive three-legged auth (3LO) OAuth or OpenID Connect (OIDC) for authentication to tools, write a service on the client application to acquire, manage access, and refresh tokens. Make sure to store these tokens against an authenticated user identifier in an encrypted database.

### Secrets manager services[¶](#secrets-manager "Permanent link")

For production environments, if you are not using an [authentication manager](#authentication-manager) service, you should store credentials in a dedicated secret manager service to protect that data. With this approach, a secret manager securely stores the credentials for any tools or services accessed by the agent as needed, and those secrets are not resident in agent's operating memory. For example, a custom ADK Tool using this method would have only short-lived access tokens or secure references in session memory, and retrieve longer-lived refresh tokens from the secrets manager when needed. When selecting a secrets manager, consider services from well-established providers, such as [Google Cloud Secret Manager](https://cloud.google.com/security/products/secret-manager) or other secret management services.

### Local encrypted secrets storage[¶](#local-encrypted-secrets-storage "Permanent link")

For agent applications that are less security sensitive, keeping credentials in local, encrypted storage can be a viable option. Consider using dedicated local secrets storage system or encrypting the data in a local database using a robust encryption library, and then managing the encryption keys securely using a key management service. Take care to only keep short-lived access tokens in operating memory and access long-lived credentials and refresh tokens from encrypted local storage only when needed.

### In-memory secrets[¶](#in-memory-secrets "Permanent link")

This method *should only be used in the early development* and testing of your agent. With this approach, credentials are stored in the current ***InMemorySessionService*** instance. The data exists only in session memory and is not persisted. However, you should carefully consider the risks of using this method based on how long an agent session may last, who has access to the agent, and the security of the environment where the agent is running.

## Framework components[¶](#framework-components "Permanent link")

Within the ADK framework, the ***AuthScheme*** and ***AuthCredential*** are the key components for handling authentication methods and managing credential data:

-   ***AuthScheme***: Defines *how* an API expects authentication credentials, such as an API Key in a header or an OAuth 2.0 Bearer token. ADK supports the same types of authentication schemes as OpenAPI 3.0 and uses specific classes for credential types, including ***APIKey***, ***HTTPBearer***, ***OAuth2***, and ***OpenIdConnectWithConfig***. For more details on each OpenAPI credential type, see [OpenAPI doc: Authentication](https://swagger.io/docs/specification/v3_0/authentication/).
    
-   ***AuthCredential***: Holds the *initial* information needed to *start* the authentication process, such as your application's OAuth Client ID or Secret, or an API key value. An instance of this class includes an **auth\_type**, such as `API_KEY`, `OAUTH2`, `SERVICE_ACCOUNT`, specifying the credential type.
    

The general authentication flow involves providing these details when configuring a tool. ADK then attempts to automatically exchange the initial credential, such as an access token, before the tool makes an API call. For flows requiring user interaction, including OAuth consent, ADK triggers a specific interactive process with your ***Agent Client*** application.

### Supported initial credential types[¶](#supported-initial-credential-types "Permanent link")

-   **API\_KEY:** Provides simple key-value authentication, which usually requires no authentication exchange.
-   **HTTP:** Provides Basic Auth which is not recommended and may not be supported for exchange, or already obtained Bearer tokens. Bearer tokens do not require an authentication exchange.
-   **OAUTH2:** Provides standard OAuth 2.0 authentication flows, and requires configuration with client ID, secret, and scopes. This method often triggers an interactive flow for user consent.
-   **OPEN\_ID\_CONNECT:** Provides authentication based on OpenID Connect. Similar to OAuth2, this type often requires configuration and user interaction.
-   **SERVICE\_ACCOUNT:** Provides Google Cloud Service Account credentials as a JSON key or Application Default Credentials. This type typically exchanges a Bearer token.

## Tools and integrations quick guide[¶](#tools-and-integrations-quick-guide "Permanent link")

Here is a quick guide to authentication for key ADK toolsets:

-   [***RestApiTool***](/tools-custom/openapi-tools/): Set `auth_scheme` and `auth_credential` during initialization
-   [***OpenAPIToolset***](/tools-custom/openapi-tools/): Set `auth_scheme` and `auth_credential` during initialization
-   [***APIHubToolset***](/integrations/apigee-api-hub/): Set `auth_scheme` and `auth_credential` during initialization, *if* the API requires authentication.
-   [***ApplicationIntegrationToolset***](/integrations/application-integration/): Set `auth_scheme` and `auth_credential` during initialization, *if* the API requires authentication.
-   [***GoogleApiToolSet***](https://github.com/google/adk-python/blob/main/src/google/adk/tools/google_api_tool/google_api_toolset.py): Use this toolset's specific authentication method.

For more authentication details for other pre-built tools and integrations see the [ADK Integrations](/integrations) catalog.

* * *

## Build agentic applications with authenticated tools[¶](#build-agentic-applications-with-authenticated-tools "Permanent link")

This section focuses on using pre-existing tools (like those from `RestApiTool/ OpenAPIToolset`, `APIHubToolset`, `GoogleApiToolSet`) that require authentication within your agentic application. Your main responsibility is configuring the tools and handling the client-side part of interactive authentication flows (if required by the tool).

### Configure tools with authentication[¶](#configure-tools-with-authentication "Permanent link")

When adding an authenticated tool to your agent, you need to provide its required `AuthScheme` and your application's initial `AuthCredential`.

You can configure authentication differently depending on your toolset type, OpenAPI-based or Google API toolsets, and, for services protected by Cloud IAM, whether the service needs an ID token instead of an access token. The following subsections cover each case.

#### Use OpenAPI-based toolsets[¶](#use-openapi-based-toolsets "Permanent link")

Pass the scheme and credential during toolset initialization. The toolset applies them to all generated tools. Here are few ways to create tools with authentication in ADK.

API KeyOAuth2Service AccountOpenID connect

Create a tool requiring an API Key.

`[](#__codelineno-0-1)from google.adk.tools.openapi_tool.auth.auth_helpers import token_to_scheme_credential [](#__codelineno-0-2)from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset [](#__codelineno-0-3)[](#__codelineno-0-4)auth_scheme, auth_credential = token_to_scheme_credential(     [](#__codelineno-0-5)    "apikey", "query", "apikey", "YOUR_API_KEY_STRING" [](#__codelineno-0-6)) [](#__codelineno-0-7)sample_api_toolset = OpenAPIToolset(     [](#__codelineno-0-8)    spec_str="...",  # Fill this with an OpenAPI spec string    [](#__codelineno-0-9)    spec_str_type="yaml",    [](#__codelineno-0-10)    auth_scheme=auth_scheme,    [](#__codelineno-0-11)    auth_credential=auth_credential, [](#__codelineno-0-12))`

Create a tool requiring OAuth2.

`[](#__codelineno-1-1)from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset [](#__codelineno-1-2)from fastapi.openapi.models import OAuth2 [](#__codelineno-1-3)from fastapi.openapi.models import OAuthFlowAuthorizationCode [](#__codelineno-1-4)from fastapi.openapi.models import OAuthFlows [](#__codelineno-1-5)from google.adk.auth import AuthCredential [](#__codelineno-1-6)from google.adk.auth import AuthCredentialTypes [](#__codelineno-1-7)from google.adk.auth import OAuth2Auth [](#__codelineno-1-8)[](#__codelineno-1-9)auth_scheme = OAuth2(     [](#__codelineno-1-10)    flows=OAuthFlows(        [](#__codelineno-1-11)        authorizationCode=OAuthFlowAuthorizationCode(            [](#__codelineno-1-12)            authorizationUrl="https://accounts.google.com/o/oauth2/auth",            [](#__codelineno-1-13)            tokenUrl="https://oauth2.googleapis.com/token",            [](#__codelineno-1-14)            scopes={                [](#__codelineno-1-15)                "https://www.googleapis.com/auth/calendar": "calendar scope"            [](#__codelineno-1-16)            },        [](#__codelineno-1-17)        )    [](#__codelineno-1-18)    ) [](#__codelineno-1-19)) [](#__codelineno-1-20)auth_credential = AuthCredential(     [](#__codelineno-1-21)    auth_type=AuthCredentialTypes.OAUTH2,    [](#__codelineno-1-22)    oauth2=OAuth2Auth(        [](#__codelineno-1-23)        client_id=YOUR_OAUTH_CLIENT_ID,        [](#__codelineno-1-24)        client_secret=YOUR_OAUTH_CLIENT_SECRET    [](#__codelineno-1-25)    ), [](#__codelineno-1-26)) [](#__codelineno-1-27)[](#__codelineno-1-28)calendar_api_toolset = OpenAPIToolset(     [](#__codelineno-1-29)    spec_str=google_calendar_openapi_spec_str, # Fill this with an openapi spec    [](#__codelineno-1-30)    spec_str_type='yaml',    [](#__codelineno-1-31)    auth_scheme=auth_scheme,    [](#__codelineno-1-32)    auth_credential=auth_credential, [](#__codelineno-1-33))`

Create a tool requiring Service Account.

`[](#__codelineno-2-1)from google.adk.tools.openapi_tool.auth.auth_helpers import service_account_dict_to_scheme_credential [](#__codelineno-2-2)from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset [](#__codelineno-2-3)[](#__codelineno-2-4)service_account_cred = json.loads(service_account_json_str) [](#__codelineno-2-5)auth_scheme, auth_credential = service_account_dict_to_scheme_credential(     [](#__codelineno-2-6)    config=service_account_cred,    [](#__codelineno-2-7)    scopes=["https://www.googleapis.com/auth/cloud-platform"], [](#__codelineno-2-8)) [](#__codelineno-2-9)sample_toolset = OpenAPIToolset(     [](#__codelineno-2-10)    spec_str=sa_openapi_spec_str, # Fill this with an openapi spec    [](#__codelineno-2-11)    spec_str_type='json',    [](#__codelineno-2-12)    auth_scheme=auth_scheme,    [](#__codelineno-2-13)    auth_credential=auth_credential, [](#__codelineno-2-14))`

Create a tool requiring OpenID connect.

`[](#__codelineno-3-1)from google.adk.auth.auth_schemes import OpenIdConnectWithConfig [](#__codelineno-3-2)from google.adk.auth.auth_credential import AuthCredential, AuthCredentialTypes, OAuth2Auth [](#__codelineno-3-3)from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset [](#__codelineno-3-4)[](#__codelineno-3-5)auth_scheme = OpenIdConnectWithConfig(     [](#__codelineno-3-6)    authorization_endpoint=OAUTH2_AUTH_ENDPOINT_URL,    [](#__codelineno-3-7)    token_endpoint=OAUTH2_TOKEN_ENDPOINT_URL,    [](#__codelineno-3-8)    scopes=['openid', 'YOUR_OAUTH_SCOPES'] [](#__codelineno-3-9)) [](#__codelineno-3-10)auth_credential = AuthCredential(     [](#__codelineno-3-11)    auth_type=AuthCredentialTypes.OPEN_ID_CONNECT,    [](#__codelineno-3-12)    oauth2=OAuth2Auth(        [](#__codelineno-3-13)        client_id="...",        [](#__codelineno-3-14)        client_secret="...",    [](#__codelineno-3-15)    ) [](#__codelineno-3-16)) [](#__codelineno-3-17)[](#__codelineno-3-18)userinfo_toolset = OpenAPIToolset(     [](#__codelineno-3-19)    spec_str=content, # Fill in an actual spec    [](#__codelineno-3-20)    spec_str_type='yaml',    [](#__codelineno-3-21)    auth_scheme=auth_scheme,    [](#__codelineno-3-22)    auth_credential=auth_credential, [](#__codelineno-3-23))`

#### Use Google API toolsets[¶](#use-google-api-toolsets "Permanent link")

These toolsets often have dedicated configuration methods.

Tip: For how to create a Google OAuth Client ID & Secret, see this guide: [Get your Google API Client ID](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#get_your_google_api_client_id)

`[](#__codelineno-4-1)# Example: Configuring Google Calendar Tools [](#__codelineno-4-2)from google.adk.tools.google_api_tool import CalendarToolset [](#__codelineno-4-3)[](#__codelineno-4-4)client_id = "YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com" [](#__codelineno-4-5)client_secret = "YOUR_GOOGLE_OAUTH_CLIENT_SECRET" [](#__codelineno-4-6)[](#__codelineno-4-7)calendar_toolset = CalendarToolset() [](#__codelineno-4-8)[](#__codelineno-4-9)# Use the specific configure method for this toolset type [](#__codelineno-4-10)calendar_toolset.configure_auth(     [](#__codelineno-4-11)    client_id=client_id, client_secret=client_secret [](#__codelineno-4-12)) [](#__codelineno-4-13)[](#__codelineno-4-14)# agent = LlmAgent(..., tools=[calendar_toolset])`

#### Use ID token[¶](#use-id-token "Permanent link")

If your agent calls a restricted service, for example a private Cloud Run or Cloud Function, the agent needs to prove your identity, not just your permissions. If you are calling a service that is accessed using Cloud IAM, you should use an ID token.

-   **Access Token (Default)**: It calls Google APIs (Drive, BigQuery). Think of it as your keycard.
    
-   **ID Token**: It calls your own services secured by IAM. Think of it as your passport.
    

##### Configuration[¶](#configuration "Permanent link")

To implement ID token authentication, configure your ServiceAccount with the following parameters, ensuring you specify the target service's URL as the `audience`.

`[](#__codelineno-5-1)from google.adk.auth.auth_credential import ServiceAccount [](#__codelineno-5-2)from google.adk.tools.openapi_tool.auth.auth_helpers import service_account_scheme_credential [](#__codelineno-5-3)from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset [](#__codelineno-5-4)[](#__codelineno-5-5)# Configure the ServiceAccount to use ID token authentication. [](#__codelineno-5-6)# Replace <YOUR_AUDIENCE_URL> with the URL of the service you are calling. [](#__codelineno-5-7)sa_config = ServiceAccount(     [](#__codelineno-5-8)    use_default_credential=True,    [](#__codelineno-5-9)    use_id_token=True,    [](#__codelineno-5-10)    audience="<YOUR_AUDIENCE_URL>", [](#__codelineno-5-11)) [](#__codelineno-5-12)[](#__codelineno-5-13)auth_scheme, auth_credential = service_account_scheme_credential(sa_config) [](#__codelineno-5-14)[](#__codelineno-5-15)sample_toolset = OpenAPIToolset(     [](#__codelineno-5-16)    spec_str=sa_openapi_spec_str, # Fill this with an OpenAPI spec    [](#__codelineno-5-17)    spec_str_type="json",    [](#__codelineno-5-18)    auth_scheme=auth_scheme,    [](#__codelineno-5-19)    auth_credential=auth_credential, [](#__codelineno-5-20))`

Troubleshooting authentication errors

If you receive an authentication error, verify that your service account has the 'Cloud Run Invoker' or equivalent role on the target service.

##### Key takeaways[¶](#key-takeaways "Permanent link")

-   **Audience Requirement**: The `audience` is a security feature that binds the token to a specific destination, preventing it from being "replayed" against other services.
    
-   **No Auto-Refresh**: Unlike standard OAuth2 access tokens for users, service-account ID tokens are fetched at the time of the request. They do not auto-refresh on a background timer.
    
-   **The Flow**: You define the intent and ADK handles the handshake, fetches the token from Google's auth servers, and injects it into your outgoing HTTP headers.
    

##### ServiceAccount configuration parameters[¶](#serviceaccount-configuration-parameters "Permanent link")

-   `service_account_credential` (Optional): Provide the path or dict for your service account JSON key file. Use this if you are running locally or outside of Google Cloud.
    
-   `use_default_credential` (Optional): Set to True to use Application Default Credentials (ADC). Recommended if your agent is already running within Google Cloud, for example on Cloud Run or Cloud Functions, as it avoids the need for local key files.
    
-   `use_id_token` (Required for IAM): Set to True to enable ID token-based authentication. This switches the ADK from requesting an Access Token, for Google APIs, to an ID Token, for your own IAM-secured services.
    
-   `audience` (Required if use\_id\_token=True): The URL of the service you are calling, for example, `https://my-service.run.app`. This is a security binding that ensures the token is valid only for that specific destination.
    
-   `scopes` (Optional): Use it only when requesting Access Tokens for Google Cloud APIs, like Drive or BigQuery. You do not need to set this if you are using ID tokens for private service authentication.
    

Pair `use_id_token` with `audience`

Always use `use_id_token=True` and `audience` together. If you provide one without the other, the ADK will raise an error to prevent accidental misconfiguration.

#### Use external access tokens[¶](#use-external-access-tokens "Permanent link")

The `external_access_token_key` feature allows your agent to use an existing access token provided by the runtime environment, such as a token provided by a frontend application, instead of starting a new authentication flow. When configured, the credential manager skips standard OAuth flows. Instead, retrieves the key in the agent's `tool_context.state` and directly uses the token for authentication. The use of this configuration parameter is mutually exclusive, and cannot include `credentials`, `client_id`, `client_secret`, or scopes parameters in the same configuration block.

Set the key on the credentials configuration of the toolset you are using. The following example uses BigQuery:

`[](#__codelineno-6-1)from google.adk.integrations.bigquery import BigQueryCredentialsConfig [](#__codelineno-6-2)[](#__codelineno-6-3)# Configure the toolset to look for "my_frontend_token" in the session state [](#__codelineno-6-4)credentials_config = BigQueryCredentialsConfig(     [](#__codelineno-6-5)    # Do not hardcode authentication keys in production code    [](#__codelineno-6-6)    external_access_token_key="my_frontend_token" [](#__codelineno-6-7))`

#### Authentication request flow[¶](#authentication-request-flow "Permanent link")

This diagram visualizes the end-to-end authentication handshake, tracing the path from the initial user query to the point where the ADK captures a credential request, handles the redirection flow, and retries the tool call once authorized.

![Authentication](./images/img_dc9ca1276f.svg)

### Authenticate at a toolset level[¶](#authenticate-at-a-toolset-level "Permanent link")

Supported in ADKPython v1.24.0

Instead of authenticating each tool individually, you can authenticate an entire suite of tools at once at the Toolset level. Under the hood, the `BaseLlmFlow` automatically checks your `BaseToolset` for authentication requirements *before* it even lists or executes any tools; it does this by checking the toolset's `get_auth_config()` method. If your toolset returns an `AuthConfig` object and the session doesn't already have the required credentials, the ADK framework performs the following steps:

1.  **Pause execution:** Safely halts the current flow.
2.  **Request credentials:** Issues an `adk_request_credential` event to the client, similar to the interactive flow detailed in [Handle the interactive OAuth/OIDC flow](#handle-the-interactive-oauthoidc-flow-client-side).

This approach gives you a single, centralized place to define auth requirements for a group of related tools. The framework handles the authentication procedure, ensuring the necessary credentials are resolved before your agent accesses tools in the toolset.

#### How to enable it[¶](#how-to-enable-it "Permanent link")

To set this up, override the `get_auth_config()` method in your custom `BaseToolset` subclass:

`[](#__codelineno-7-1)from google.adk.auth import AuthConfig [](#__codelineno-7-2)from google.adk.tools.base_toolset import BaseToolset [](#__codelineno-7-3) [](#__codelineno-7-4)[](#__codelineno-7-5)class MyAuthenticatedToolset(BaseToolset):   [](#__codelineno-7-6)  async def get_tools(      [](#__codelineno-7-7)      self, readonly_context: Optional[ReadonlyContext] = None  [](#__codelineno-7-8)  ) -> list[BaseTool]:    [](#__codelineno-7-9)    # ADK resolves the credential from get_auth_config() before calling this,    [](#__codelineno-7-10)    # so the tools you return here can rely on it.    [](#__codelineno-7-11)    return []  # Replace with the tools in your toolset. [](#__codelineno-7-12)    [](#__codelineno-7-13)    return AuthConfig(        [](#__codelineno-7-14)        auth_scheme=auth_scheme,        [](#__codelineno-7-15)        raw_auth_credential=auth_credential,    [](#__codelineno-7-16)    )`

### Handle the interactive OAuth/OIDC flow (client-side)[¶](#handle-the-interactive-oauthoidc-flow-client-side "Permanent link")

If a tool requires user login/consent (typically OAuth 2.0 or OIDC), the ADK framework pauses execution and signals your ***Agent Client*** application. There are two cases:

-   ***Agent Client*** application runs the agent directly (via `runner.run_async`) in the same process. e.g. UI backend, CLI app, or Spark job etc.
-   ***Agent Client*** application interacts with ADK's fastapi server via `/run` or `/run_sse` endpoint. While ADK's fastapi server could be setup on the same server or different server as ***Agent Client*** application

The second case is a special case of first case, because `/run` or `/run_sse` endpoint also invokes `runner.run_async`. The only differences are:

-   Whether to call a python function to run the agent (first case) or call a service endpoint to run the agent (second case).
-   Whether the result events are in-memory objects (first case) or serialized json string in http response (second case).

Below sections focus on the first case and you should be able to map it to the second case very straightforward. We will also describe some differences to handle for the second case if necessary.

Here's the step-by-step process for your client application:

**Step 1: Run Agent & Detect Auth Request**

-   Initiate the agent interaction using `runner.run_async`.
-   Iterate through the yielded events.
-   Look for a specific function call event whose function call has a special name: `adk_request_credential`. This event signals that user interaction is needed. You can use helper functions to identify this event and extract necessary information. (For the second case, the logic is similar. You deserialize the event from the http response).

`[](#__codelineno-8-1)# runner = Runner(...) [](#__codelineno-8-2)# session = await session_service.create_session(...) [](#__codelineno-8-3)# content = types.Content(...) # User's initial query [](#__codelineno-8-4)[](#__codelineno-8-5)print("\nRunning agent...") [](#__codelineno-8-6)events_async = runner.run_async(     [](#__codelineno-8-7)    session_id=session.id, user_id='user', new_message=content [](#__codelineno-8-8)) [](#__codelineno-8-9)[](#__codelineno-8-10)auth_request_function_call_id, auth_config = None, None [](#__codelineno-8-11)[](#__codelineno-8-12)async for event in events_async:     [](#__codelineno-8-13)    # Use helper to check for the specific auth request event    [](#__codelineno-8-14)    if (auth_request_function_call := get_auth_request_function_call(event)):        [](#__codelineno-8-15)        print("--> Authentication required by agent.")        [](#__codelineno-8-16)        # Store the ID needed to respond later        [](#__codelineno-8-17)        if not (auth_request_function_call_id := auth_request_function_call.id):            [](#__codelineno-8-18)            raise ValueError(f'Cannot get function call id from function call: {auth_request_function_call}')        [](#__codelineno-8-19)        # Get the AuthConfig containing the auth_uri etc.        [](#__codelineno-8-20)        auth_config = get_auth_config(auth_request_function_call)        [](#__codelineno-8-21)        break # Stop processing events for now, need user interaction [](#__codelineno-8-22)[](#__codelineno-8-23)if not auth_request_function_call_id:     [](#__codelineno-8-24)    print("\nAuth not required or agent finished.")    [](#__codelineno-8-25)    # return # Or handle final response if received`

*Helper functions `helpers.py`:*

`[](#__codelineno-9-1)from google.adk.events import Event [](#__codelineno-9-2)from google.adk.auth import AuthConfig # Import necessary type [](#__codelineno-9-3)from google.genai import types [](#__codelineno-9-4)[](#__codelineno-9-5)def get_auth_request_function_call(event: Event) -> types.FunctionCall:     [](#__codelineno-9-6)    # Get the special auth request function call from the event    [](#__codelineno-9-7)    if not event.content or not event.content.parts:        [](#__codelineno-9-8)        return    [](#__codelineno-9-9)    for part in event.content.parts:        [](#__codelineno-9-10)        if (            [](#__codelineno-9-11)            part            [](#__codelineno-9-12)            and part.function_call            [](#__codelineno-9-13)            and part.function_call.name == 'adk_request_credential'            [](#__codelineno-9-14)            and event.long_running_tool_ids            [](#__codelineno-9-15)            and part.function_call.id in event.long_running_tool_ids        [](#__codelineno-9-16)        ): [](#__codelineno-9-17)            [](#__codelineno-9-18)            return part.function_call [](#__codelineno-9-19)[](#__codelineno-9-20)def get_auth_config(auth_request_function_call: types.FunctionCall) -> AuthConfig:     [](#__codelineno-9-21)    # Extracts the AuthConfig object from the arguments of the auth request function call    [](#__codelineno-9-22)    if not auth_request_function_call.args or not (auth_config := auth_request_function_call.args.get('authConfig')):        [](#__codelineno-9-23)        raise ValueError(f'Cannot get auth config from function call: {auth_request_function_call}')    [](#__codelineno-9-24)    if isinstance(auth_config, dict):        [](#__codelineno-9-25)        auth_config = AuthConfig.model_validate(auth_config)    [](#__codelineno-9-26)    elif not isinstance(auth_config, AuthConfig):        [](#__codelineno-9-27)        raise ValueError(f'Cannot get auth config {auth_config} is not an instance of AuthConfig.')    [](#__codelineno-9-28)    return auth_config`

**Step 2: Redirect User for Authorization**

-   Get the authorization URL (`auth_uri`) from the `auth_config` extracted in the previous step.
-   **Crucially, append your application's** redirect\_uri as a query parameter to this `auth_uri`. This `redirect_uri` must be pre-registered with your OAuth provider (e.g., [Google Cloud Console](https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred), [Okta admin panel](https://developer.okta.com/docs/guides/sign-into-web-app-redirect/spring-boot/main/#create-an-app-integration-in-the-admin-console)).
-   Direct the user to this complete URL (e.g., open it in their browser).

`[](#__codelineno-10-1)# (Continuing after detecting auth needed) [](#__codelineno-10-2)[](#__codelineno-10-3)if auth_request_function_call_id and auth_config:     [](#__codelineno-10-4)    # Get the base authorization URL from the AuthConfig    [](#__codelineno-10-5)    base_auth_uri = auth_config.exchanged_auth_credential.oauth2.auth_uri [](#__codelineno-10-6)    [](#__codelineno-10-7)    if base_auth_uri:        [](#__codelineno-10-8)        redirect_uri = 'http://localhost:8000/callback' # MUST match your OAuth client app config        [](#__codelineno-10-9)        # Append redirect_uri (use urlencode in production)        [](#__codelineno-10-10)        auth_request_uri = base_auth_uri + f'&redirect_uri={redirect_uri}'        [](#__codelineno-10-11)        # Now you need to redirect your end user to this auth_request_uri or ask them to open this auth_request_uri in their browser        [](#__codelineno-10-12)        # This auth_request_uri should be served by the corresponding auth provider and the end user should login and authorize your application to access their data        [](#__codelineno-10-13)        # And then the auth provider will redirect the end user to the redirect_uri you provided        [](#__codelineno-10-14)        # Next step: Get this callback URL from the user (or your web server handler)    [](#__codelineno-10-15)    else:         [](#__codelineno-10-16)         print("ERROR: Auth URI not found in auth_config.")         [](#__codelineno-10-17)         # Handle error`

**Step 3. Handle the Redirect Callback (Client):**

-   Your application must have a mechanism (e.g., a web server route at the `redirect_uri`) to receive the user after they authorize the application with the provider.
-   The provider redirects the user to your `redirect_uri` and appends an `authorization_code` (and potentially `state`, `scope`) as query parameters to the URL.
-   Capture the **full callback URL** from this incoming request.
-   (This step happens outside the main agent execution loop, in your web server or equivalent callback handler.)

**Step 4. Send Authentication Result Back to ADK (Client):**

-   Once you have the full callback URL (containing the authorization code), retrieve the `auth_request_function_call_id` and the `auth_config` object saved in Client Step 1.
-   Set the captured callback URL in the `exchanged_auth_credential.oauth2.auth_response_uri` field. Also ensure `exchanged_auth_credential.oauth2.redirect_uri` contains the redirect URI you used.
-   Create a `types.Content` object containing a `types.Part` with a `types.FunctionResponse`.
    -   Set `name` to `"adk_request_credential"`. (Note: This is a special name for ADK to proceed with authentication. Do not use other names.)
    -   Set `id` to the `auth_request_function_call_id` you saved.
    -   Set `response` to the *serialized* (e.g., `.model_dump()`) updated `AuthConfig` object.
-   Call `runner.run_async` **again** for the same session, passing this `FunctionResponse` content as the `new_message`.

`[](#__codelineno-11-1)# (Continuing after user interaction) [](#__codelineno-11-2)    [](#__codelineno-11-3)    # Simulate getting the callback URL (e.g., from user paste or web handler)    [](#__codelineno-11-4)    auth_response_uri = await get_user_input(        [](#__codelineno-11-5)        f'Paste the full callback URL here:\n> '    [](#__codelineno-11-6)    )    [](#__codelineno-11-7)    auth_response_uri = auth_response_uri.strip() # Clean input [](#__codelineno-11-8)    [](#__codelineno-11-9)    if not auth_response_uri:        [](#__codelineno-11-10)        print("Callback URL not provided. Aborting.")        [](#__codelineno-11-11)        return [](#__codelineno-11-12)    [](#__codelineno-11-13)    # Update the received AuthConfig with the callback details    [](#__codelineno-11-14)    auth_config.exchanged_auth_credential.oauth2.auth_response_uri = auth_response_uri    [](#__codelineno-11-15)    # Also include the redirect_uri used, as the token exchange might need it    [](#__codelineno-11-16)    auth_config.exchanged_auth_credential.oauth2.redirect_uri = redirect_uri [](#__codelineno-11-17)    [](#__codelineno-11-18)    # Construct the FunctionResponse Content object    [](#__codelineno-11-19)    auth_content = types.Content(        [](#__codelineno-11-20)        role='user', # Role can be 'user' when sending a FunctionResponse        [](#__codelineno-11-21)        parts=[            [](#__codelineno-11-22)            types.Part(                [](#__codelineno-11-23)                function_response=types.FunctionResponse(                    [](#__codelineno-11-24)                    id=auth_request_function_call_id,       # Link to the original request                    [](#__codelineno-11-25)                    name='adk_request_credential', # Special framework function name                    [](#__codelineno-11-26)                    response=auth_config.model_dump() # Send back the *updated* AuthConfig                [](#__codelineno-11-27)                )            [](#__codelineno-11-28)            )        [](#__codelineno-11-29)        ],    [](#__codelineno-11-30)    ) [](#__codelineno-11-31)    [](#__codelineno-11-32)    # --- Resume Execution ---    [](#__codelineno-11-33)    print("\nSubmitting authentication details back to the agent...")    [](#__codelineno-11-34)    events_async_after_auth = runner.run_async(        [](#__codelineno-11-35)        session_id=session.id,        [](#__codelineno-11-36)        user_id='user',        [](#__codelineno-11-37)        new_message=auth_content, # Send the FunctionResponse back    [](#__codelineno-11-38)    ) [](#__codelineno-11-39)    [](#__codelineno-11-40)    # --- Process Final Agent Output ---    [](#__codelineno-11-41)    print("\n--- Agent Response after Authentication ---")    [](#__codelineno-11-42)    async for event in events_async_after_auth:        [](#__codelineno-11-43)        # Process events normally, expecting the tool call to succeed now        [](#__codelineno-11-44)        print(event) # Print the full event for inspection`

Note: Authorization response with Resume feature

If your ADK agent workflow is configured with the [Resume](/runtime/resume/) feature, you also must include the Invocation ID (`invocation_id`) parameter with the authorization response. The Invocation ID you provide must be the same invocation that generated the authorization request, otherwise the system starts a new invocation with the authorization response. If your agent uses the Resume feature, consider including the Invocation ID as a parameter with your authorization request, so it can be included with the authorization response. For more details on using the Resume feature, see [Resume stopped agents](/runtime/resume/).

**Step 5: ADK Handles Token Exchange & Tool Retry and gets Tool result**

-   ADK receives the `FunctionResponse` for `adk_request_credential`.
-   It uses the information in the updated `AuthConfig` (including the callback URL containing the code) to perform the OAuth **token exchange** with the provider's token endpoint, obtaining the access token (and possibly refresh token).
-   ADK internally makes these tokens available by setting them in the session state.
-   ADK **automatically retries** the original tool call (the one that initially failed due to missing auth).
-   This time, the tool finds the valid tokens (via `tool_context.get_auth_response()`) and successfully executes the authenticated API call.
-   The agent receives the actual result from the tool and generates its final response to the user.

* * *

The sequence diagram of auth response flow, where the ***Agent Client*** sends back the auth response and ADK retries the tool, is as follows:

![Authentication](./images/img_e7b10417ea.svg)

## Build custom tools (`FunctionTool`) requiring authentication[¶](#build-custom-tools-functiontool-requiring-authentication "Permanent link")

This section focuses on implementing the authentication logic *inside* your custom Python function when creating a new ADK Tool. We will implement a `FunctionTool` as an example.

### Prerequisites[¶](#prerequisites "Permanent link")

Your function signature *must* include [`tool_context: ToolContext`](../#tool-context). ADK automatically injects this object, providing access to state and auth mechanisms.

`[](#__codelineno-12-1)from google.adk.tools import FunctionTool, ToolContext [](#__codelineno-12-2)from typing import Dict [](#__codelineno-12-3)[](#__codelineno-12-4)def my_authenticated_tool_function(param1: str, ..., tool_context: ToolContext) -> dict:     [](#__codelineno-12-5)    # ... your logic ...    [](#__codelineno-12-6)    pass [](#__codelineno-12-7)[](#__codelineno-12-8)my_tool = FunctionTool(func=my_authenticated_tool_function)`

### Authentication Logic within the Tool Function[¶](#authentication-logic-within-the-tool-function "Permanent link")

Implement the following steps inside your function:

**Step 1: Check for Cached & Valid Credentials:**

Inside your tool function, first check if valid credentials (e.g., access/refresh tokens) are already stored from a previous run in this session. Credentials for the current sessions should be stored in `tool_context.invocation_context.session.state` (a dictionary of state) Check existence of existing credentials by checking `tool_context.invocation_context.session.state.get(credential_name, None)`.

`[](#__codelineno-13-1)from google.oauth2.credentials import Credentials [](#__codelineno-13-2)from google.auth.transport.requests import Request [](#__codelineno-13-3)[](#__codelineno-13-4)# Inside your tool function [](#__codelineno-13-5)TOKEN_CACHE_KEY = "my_tool_tokens" # Choose a unique key [](#__codelineno-13-6)SCOPES = ["scope1", "scope2"] # Define required scopes [](#__codelineno-13-7)[](#__codelineno-13-8)creds = None [](#__codelineno-13-9)cached_token_info = tool_context.state.get(TOKEN_CACHE_KEY) [](#__codelineno-13-10)if cached_token_info:     [](#__codelineno-13-11)    try:        [](#__codelineno-13-12)        creds = Credentials.from_authorized_user_info(cached_token_info, SCOPES)        [](#__codelineno-13-13)        if not creds.valid and creds.expired and creds.refresh_token:            [](#__codelineno-13-14)            creds.refresh(Request())            [](#__codelineno-13-15)            tool_context.state[TOKEN_CACHE_KEY] = json.loads(creds.to_json()) # Update cache        [](#__codelineno-13-16)        elif not creds.valid:            [](#__codelineno-13-17)            creds = None # Invalid, needs re-auth            [](#__codelineno-13-18)            tool_context.state[TOKEN_CACHE_KEY] = None    [](#__codelineno-13-19)    except Exception as e:        [](#__codelineno-13-20)        print(f"Error loading/refreshing cached creds: {e}")        [](#__codelineno-13-21)        creds = None        [](#__codelineno-13-22)        tool_context.state[TOKEN_CACHE_KEY] = None [](#__codelineno-13-23)[](#__codelineno-13-24)if creds and creds.valid:     [](#__codelineno-13-25)    # Skip to Step 5: Make Authenticated API Call    [](#__codelineno-13-26)    pass [](#__codelineno-13-27)else:     [](#__codelineno-13-28)    # Proceed to Step 2...    [](#__codelineno-13-29)    pass`

**Step 2: Check for Auth Response from Client**

-   If Step 1 didn't yield valid credentials, check if the client just completed the interactive flow by calling `exchanged_credential = tool_context.get_auth_response()`.
-   This returns the updated `exchanged_credential` object sent back by the client (containing the callback URL in `auth_response_uri`).

`[](#__codelineno-14-1)# Use auth_scheme and auth_credential configured in the tool. [](#__codelineno-14-2)# exchanged_credential: AuthCredential | None [](#__codelineno-14-3)[](#__codelineno-14-4)exchanged_credential = tool_context.get_auth_response(AuthConfig(   [](#__codelineno-14-5)  auth_scheme=auth_scheme,  [](#__codelineno-14-6)  raw_auth_credential=auth_credential, [](#__codelineno-14-7))) [](#__codelineno-14-8)# If exchanged_credential is not None, then there is already an exchanged credential from the auth response. [](#__codelineno-14-9)if exchanged_credential:    [](#__codelineno-14-10)   # ADK exchanged the access token already for us        [](#__codelineno-14-11)        access_token = exchanged_credential.oauth2.access_token        [](#__codelineno-14-12)        refresh_token = exchanged_credential.oauth2.refresh_token        [](#__codelineno-14-13)        creds = Credentials(            [](#__codelineno-14-14)            token=access_token,            [](#__codelineno-14-15)            refresh_token=refresh_token,            [](#__codelineno-14-16)            token_uri=auth_scheme.flows.authorizationCode.tokenUrl,            [](#__codelineno-14-17)            client_id=auth_credential.oauth2.client_id,            [](#__codelineno-14-18)            client_secret=auth_credential.oauth2.client_secret,            [](#__codelineno-14-19)            scopes=list(auth_scheme.flows.authorizationCode.scopes.keys()),        [](#__codelineno-14-20)        )    [](#__codelineno-14-21)    # Cache the token in session state and call the API, skip to step 5`

**Step 3: Initiate Authentication Request**

If no valid credentials (Step 1.) and no auth response (Step 2.) are found, the tool needs to start the OAuth flow. Define the AuthScheme and initial AuthCredential and call `tool_context.request_credential()`. Return a response indicating authorization is needed.

`[](#__codelineno-15-1)# Use auth_scheme and auth_credential configured in the tool. [](#__codelineno-15-2)  [](#__codelineno-15-3)  tool_context.request_credential(AuthConfig(    [](#__codelineno-15-4)    auth_scheme=auth_scheme,    [](#__codelineno-15-5)    raw_auth_credential=auth_credential,  [](#__codelineno-15-6)  ))  [](#__codelineno-15-7)  return {'pending': true, 'message': 'Awaiting user authentication.'} [](#__codelineno-15-8)[](#__codelineno-15-9)# By setting request_credential, ADK detects a pending authentication event. It pauses execution and ask end user to login.`

**Step 4: Exchange Authorization Code for Tokens**

ADK automatically generates oauth authorization URL and presents it to your ***Agent Client*** application. your ***Agent Client*** application should follow the same way described in [Build agentic applications with authenticated tools](#build-agentic-applications-with-authenticated-tools) to redirect the user to the authorization URL (with `redirect_uri` appended). Once a user completes the login flow, ADK extracts the authentication callback url from ***Agent Client*** applications, automatically parses the auth code, and generates auth token. At the next Tool call, `tool_context.get_auth_response` in step 2 will contain a valid credential to use in subsequent API calls.

**Step 5: Cache Obtained Credentials**

After successfully obtaining the token from ADK (Step 2) or if the token is still valid (Step 1), **immediately store** the new `Credentials` object in `tool_context.state` (serialized, e.g., as JSON) using your cache key.

`[](#__codelineno-16-1)# Inside your tool function, after obtaining 'creds' (either refreshed or newly exchanged) [](#__codelineno-16-2)# Cache the new/refreshed tokens [](#__codelineno-16-3)tool_context.state[TOKEN_CACHE_KEY] = json.loads(creds.to_json()) [](#__codelineno-16-4)print(f"DEBUG: Cached/updated tokens under key: {TOKEN_CACHE_KEY}") [](#__codelineno-16-5)# Proceed to Step 6 (Make API Call)`

**Step 6: Make Authenticated API Call**

-   Once you have a valid `Credentials` object (`creds` from Step 1 or Step 4), use it to make the actual call to the protected API using the appropriate client library (e.g., `googleapiclient`, `requests`). Pass the `credentials=creds` argument.
-   Include error handling, especially for `HttpError` 401/403, which might mean the token expired or was revoked between calls. If you get such an error, consider clearing the cached token (`tool_context.state.pop(...)`) and potentially returning the `auth_required` status again to force re-authentication.

`[](#__codelineno-17-1)# Inside your tool function, using the valid 'creds' object [](#__codelineno-17-2)# Ensure creds is valid before proceeding [](#__codelineno-17-3)if not creds or not creds.valid:    [](#__codelineno-17-4)   return {"status": "error", "error_message": "Cannot proceed without valid credentials."} [](#__codelineno-17-5)[](#__codelineno-17-6)try:    [](#__codelineno-17-7)   service = build("calendar", "v3", credentials=creds) # Example   [](#__codelineno-17-8)   api_result = service.events().list(...).execute()   [](#__codelineno-17-9)   # Proceed to Step 7 [](#__codelineno-17-10)except Exception as e:    [](#__codelineno-17-11)   # Handle API errors (e.g., check for 401/403, maybe clear cache and re-request auth)   [](#__codelineno-17-12)   print(f"ERROR: API call failed: {e}")   [](#__codelineno-17-13)   return {"status": "error", "error_message": f"API call failed: {e}"}`

**Step 7: Return Tool Result**

-   After a successful API call, process the result into a dictionary format that is useful for the LLM.
-   **Crucially, include a** along with the data.

`[](#__codelineno-18-1)# Inside your tool function, after successful API call     [](#__codelineno-18-2)    processed_result = [...] # Process api_result for the LLM    [](#__codelineno-18-3)    return {"status": "success", "data": processed_result}`

Full Code

Tools and AgentAgent CLIHelperSpec

tools\_and\_agent.py

``[](#__codelineno-19-1)# Copyright 2026 Google LLC [](#__codelineno-19-2)# [](#__codelineno-19-3)# Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-19-4)# you may not use this file except in compliance with the License. [](#__codelineno-19-5)# You may obtain a copy of the License at [](#__codelineno-19-6)# [](#__codelineno-19-7)#     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-19-8)# [](#__codelineno-19-9)# Unless required by applicable law or agreed to in writing, software [](#__codelineno-19-10)# distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-19-11)# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-19-12)# See the License for the specific language governing permissions and [](#__codelineno-19-13)# limitations under the License. [](#__codelineno-19-14)[](#__codelineno-19-15)import os [](#__codelineno-19-16)[](#__codelineno-19-17)from google.adk.auth.auth_schemes import OpenIdConnectWithConfig [](#__codelineno-19-18)from google.adk.auth.auth_credential import AuthCredential, AuthCredentialTypes, OAuth2Auth [](#__codelineno-19-19)from google.adk.tools.openapi_tool.openapi_spec_parser.openapi_toolset import OpenAPIToolset [](#__codelineno-19-20)from google.adk.agents.llm_agent import LlmAgent [](#__codelineno-19-21)[](#__codelineno-19-22)# --- Authentication Configuration --- [](#__codelineno-19-23)# This section configures how the agent will handle authentication using OpenID Connect (OIDC), [](#__codelineno-19-24)# often layered on top of OAuth 2.0. [](#__codelineno-19-25)[](#__codelineno-19-26)# Define the Authentication Scheme using OpenID Connect. [](#__codelineno-19-27)# This object tells the ADK *how* to perform the OIDC/OAuth2 flow. [](#__codelineno-19-28)# It requires details specific to your Identity Provider (IDP), like Google OAuth, Okta, Auth0, etc. [](#__codelineno-19-29)# Note: Replace the example Okta URLs and credentials with your actual IDP details. [](#__codelineno-19-30)# All following fields are required, and available from your IDP. [](#__codelineno-19-31)auth_scheme = OpenIdConnectWithConfig(     [](#__codelineno-19-32)    # The URL of the IDP's authorization endpoint where the user is redirected to log in.    [](#__codelineno-19-33)    authorization_endpoint="https://your-endpoint.okta.com/oauth2/v1/authorize",    [](#__codelineno-19-34)    # The URL of the IDP's token endpoint where the authorization code is exchanged for tokens.    [](#__codelineno-19-35)    token_endpoint="https://your-token-endpoint.okta.com/oauth2/v1/token",    [](#__codelineno-19-36)    # The scopes (permissions) your application requests from the IDP.    [](#__codelineno-19-37)    # 'openid' is standard for OIDC. 'profile' and 'email' request user profile info.    [](#__codelineno-19-38)    scopes=['openid', 'profile', "email"] [](#__codelineno-19-39)) [](#__codelineno-19-40)[](#__codelineno-19-41)# Define the Authentication Credentials for your specific application. [](#__codelineno-19-42)# This object holds the client identifier and secret that your application uses [](#__codelineno-19-43)# to identify itself to the IDP during the OAuth2 flow. [](#__codelineno-19-44)# !! SECURITY WARNING: Avoid hardcoding secrets in production code. !! [](#__codelineno-19-45)# !! Use environment variables or a secret management system instead. !! [](#__codelineno-19-46)auth_credential = AuthCredential(   [](#__codelineno-19-47)  auth_type=AuthCredentialTypes.OPEN_ID_CONNECT,  [](#__codelineno-19-48)  oauth2=OAuth2Auth(    [](#__codelineno-19-49)    client_id="CLIENT_ID",    [](#__codelineno-19-50)    client_secret="CLIENT_SECRET",  [](#__codelineno-19-51)  ) [](#__codelineno-19-52)) [](#__codelineno-19-53) [](#__codelineno-19-54)[](#__codelineno-19-55)# --- Toolset Configuration from OpenAPI Specification --- [](#__codelineno-19-56)# This section defines a sample set of tools the agent can use, configured with Authentication [](#__codelineno-19-57)# from steps above. [](#__codelineno-19-58)# This sample set of tools use endpoints protected by Okta and requires an OpenID Connect flow [](#__codelineno-19-59)# to acquire end user credentials. [](#__codelineno-19-60)with open(os.path.join(os.path.dirname(__file__), 'spec.yaml'), 'r') as f:     [](#__codelineno-19-61)    spec_content = f.read() [](#__codelineno-19-62)[](#__codelineno-19-63)userinfo_toolset = OpenAPIToolset(    [](#__codelineno-19-64)   spec_str=spec_content,   [](#__codelineno-19-65)   spec_str_type='yaml',   [](#__codelineno-19-66)   # ** Crucially, associate the authentication scheme and credentials with these tools. **   [](#__codelineno-19-67)   # This tells the ADK that the tools require the defined OIDC/OAuth2 flow.   [](#__codelineno-19-68)   auth_scheme=auth_scheme,   [](#__codelineno-19-69)   auth_credential=auth_credential, [](#__codelineno-19-70)) [](#__codelineno-19-71)[](#__codelineno-19-72)# --- Agent Configuration --- [](#__codelineno-19-73)# Configure and create the main LLM Agent. [](#__codelineno-19-74)root_agent = LlmAgent(     [](#__codelineno-19-75)    model='gemini-2.0-flash',    [](#__codelineno-19-76)    name='enterprise_assistant',    [](#__codelineno-19-77)    instruction='Help user integrate with multiple enterprise systems, including retrieving user information which may require authentication.',    [](#__codelineno-19-78)    tools=[userinfo_toolset], [](#__codelineno-19-79)) [](#__codelineno-19-80)[](#__codelineno-19-81)# --- Ready for Use --- [](#__codelineno-19-82)# The `root_agent` is now configured with tools protected by OIDC/OAuth2 authentication. [](#__codelineno-19-83)# When the agent attempts to use one of these tools, the ADK framework will automatically [](#__codelineno-19-84)# trigger the authentication flow defined by `auth_scheme` and `auth_credential` [](#__codelineno-19-85)# if valid credentials are not already available in the session. [](#__codelineno-19-86)# The subsequent interaction flow would guide the user through the login process and handle [](#__codelineno-19-87)# token exchanging, and automatically attach the exchanged token to the endpoint defined in [](#__codelineno-19-88)# the tool.``

agent\_cli.py

``[](#__codelineno-20-1)# Copyright 2026 Google LLC [](#__codelineno-20-2)# [](#__codelineno-20-3)# Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-20-4)# you may not use this file except in compliance with the License. [](#__codelineno-20-5)# You may obtain a copy of the License at [](#__codelineno-20-6)# [](#__codelineno-20-7)#     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-20-8)# [](#__codelineno-20-9)# Unless required by applicable law or agreed to in writing, software [](#__codelineno-20-10)# distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-20-11)# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-20-12)# See the License for the specific language governing permissions and [](#__codelineno-20-13)# limitations under the License. [](#__codelineno-20-14)[](#__codelineno-20-15)import asyncio [](#__codelineno-20-16)from dotenv import load_dotenv [](#__codelineno-20-17)from google.adk.artifacts.in_memory_artifact_service import InMemoryArtifactService [](#__codelineno-20-18)from google.adk.runners import Runner [](#__codelineno-20-19)from google.adk.sessions import InMemorySessionService [](#__codelineno-20-20)from google.genai import types [](#__codelineno-20-21)[](#__codelineno-20-22)from .helpers import is_pending_auth_event, get_function_call_id, get_function_call_auth_config, get_user_input [](#__codelineno-20-23)from .tools_and_agent import root_agent [](#__codelineno-20-24)[](#__codelineno-20-25)load_dotenv() [](#__codelineno-20-26)[](#__codelineno-20-27)agent = root_agent [](#__codelineno-20-28)[](#__codelineno-20-29)async def async_main():   [](#__codelineno-20-30)  """  [](#__codelineno-20-31)  Main asynchronous function orchestrating the agent interaction and authentication flow.  [](#__codelineno-20-32)  """  [](#__codelineno-20-33)  # --- Step 1: Service Initialization ---  [](#__codelineno-20-34)  # Use in-memory services for session and artifact storage (suitable for demos/testing).  [](#__codelineno-20-35)  session_service = InMemorySessionService()  [](#__codelineno-20-36)  artifacts_service = InMemoryArtifactService() [](#__codelineno-20-37)  [](#__codelineno-20-38)  # Create a new user session to maintain conversation state.  [](#__codelineno-20-39)  session = await session_service.create_session(      [](#__codelineno-20-40)      state={},  # Optional state dictionary for session-specific data      [](#__codelineno-20-41)      app_name='my_app', # Application identifier      [](#__codelineno-20-42)      user_id='user' # User identifier  [](#__codelineno-20-43)  ) [](#__codelineno-20-44)  [](#__codelineno-20-45)  # --- Step 2: Initial User Query ---  [](#__codelineno-20-46)  # Define the user's initial request.  [](#__codelineno-20-47)  query = 'Show me my user info'  [](#__codelineno-20-48)  print(f"user: {query}") [](#__codelineno-20-49)  [](#__codelineno-20-50)  # Format the query into the Content structure expected by the ADK Runner.  [](#__codelineno-20-51)  content = types.Content(role='user', parts=[types.Part(text=query)]) [](#__codelineno-20-52)  [](#__codelineno-20-53)  # Initialize the ADK Runner  [](#__codelineno-20-54)  runner = Runner(      [](#__codelineno-20-55)      app_name='my_app',      [](#__codelineno-20-56)      agent=agent,      [](#__codelineno-20-57)      artifact_service=artifacts_service,      [](#__codelineno-20-58)      session_service=session_service,  [](#__codelineno-20-59)  ) [](#__codelineno-20-60)  [](#__codelineno-20-61)  # --- Step 3: Send Query and Handle Potential Auth Request ---  [](#__codelineno-20-62)  print("\nRunning agent with initial query...")  [](#__codelineno-20-63)  events_async = runner.run_async(      [](#__codelineno-20-64)      session_id=session.id, user_id='user', new_message=content  [](#__codelineno-20-65)  ) [](#__codelineno-20-66)  [](#__codelineno-20-67)  # Variables to store details if an authentication request occurs.  [](#__codelineno-20-68)  auth_request_event_id, auth_config = None, None [](#__codelineno-20-69)  [](#__codelineno-20-70)  # Iterate through the events generated by the first run.  [](#__codelineno-20-71)  async for event in events_async:    [](#__codelineno-20-72)    # Check if this event is the specific 'adk_request_credential' function call.    [](#__codelineno-20-73)    if is_pending_auth_event(event):      [](#__codelineno-20-74)      print("--> Authentication required by agent.")      [](#__codelineno-20-75)      auth_request_event_id = get_function_call_id(event)      [](#__codelineno-20-76)      auth_config = get_function_call_auth_config(event)      [](#__codelineno-20-77)      # Once the auth request is found and processed, exit this loop.      [](#__codelineno-20-78)      # We need to pause execution here to get user input for authentication.      [](#__codelineno-20-79)      break [](#__codelineno-20-80) [](#__codelineno-20-81)  [](#__codelineno-20-82)  # If no authentication request was detected after processing all events, exit.  [](#__codelineno-20-83)  if not auth_request_event_id or not auth_config:      [](#__codelineno-20-84)      print("\nAuthentication not required for this query or processing finished.")      [](#__codelineno-20-85)      return # Exit the main function [](#__codelineno-20-86)  [](#__codelineno-20-87)  # --- Step 4: Manual Authentication Step (Simulated OAuth 2.0 Flow) ---  [](#__codelineno-20-88)  # This section simulates the user interaction part of an OAuth 2.0 flow.  [](#__codelineno-20-89)  # In a real web application, this would involve browser redirects. [](#__codelineno-20-90)  [](#__codelineno-20-91)  # Define the Redirect URI. This *must* match one of the URIs registered  [](#__codelineno-20-92)  # with the OAuth provider for your application. The provider sends the user  [](#__codelineno-20-93)  # back here after they approve the request.  [](#__codelineno-20-94)  redirect_uri = 'http://localhost:8000/dev-ui' # Example for local development [](#__codelineno-20-95)  [](#__codelineno-20-96)  # Construct the Authorization URL that the user must visit.  [](#__codelineno-20-97)  # This typically includes the provider's authorization endpoint URL,  [](#__codelineno-20-98)  # client ID, requested scopes, response type (e.g., 'code'), and the redirect URI.  [](#__codelineno-20-99)  # Here, we retrieve the base authorization URI from the AuthConfig provided by ADK  [](#__codelineno-20-100)  # and append the redirect_uri.  [](#__codelineno-20-101)  # NOTE: A robust implementation would use urlencode and potentially add state, scope, etc.  [](#__codelineno-20-102)  auth_request_uri = (      [](#__codelineno-20-103)      auth_config.exchanged_auth_credential.oauth2.auth_uri      [](#__codelineno-20-104)      + f'&redirect_uri={redirect_uri}' # Simple concatenation; ensure correct query param format  [](#__codelineno-20-105)  ) [](#__codelineno-20-106)  [](#__codelineno-20-107)  print("\n--- User Action Required ---")  [](#__codelineno-20-108)  # Prompt the user to visit the authorization URL, log in, grant permissions,  [](#__codelineno-20-109)  # and then paste the *full* URL they are redirected back to (which contains the auth code).  [](#__codelineno-20-110)  auth_response_uri = await get_user_input(      [](#__codelineno-20-111)      f'1. Please open this URL in your browser to log in:\n   {auth_request_uri}\n\n'      [](#__codelineno-20-112)      f'2. After successful login and authorization, your browser will be redirected.\n'      [](#__codelineno-20-113)      f'   Copy the *entire* URL from the browser\'s address bar.\n\n'      [](#__codelineno-20-114)      f'3. Paste the copied URL here and press Enter:\n\n> '  [](#__codelineno-20-115)  ) [](#__codelineno-20-116)  [](#__codelineno-20-117)  # --- Step 5: Prepare Authentication Response for the Agent ---  [](#__codelineno-20-118)  # Update the AuthConfig object with the information gathered from the user.  [](#__codelineno-20-119)  # The ADK framework needs the full response URI (containing the code)  [](#__codelineno-20-120)  # and the original redirect URI to complete the OAuth token exchange process internally.  [](#__codelineno-20-121)  auth_config.exchanged_auth_credential.oauth2.auth_response_uri = auth_response_uri  [](#__codelineno-20-122)  auth_config.exchanged_auth_credential.oauth2.redirect_uri = redirect_uri [](#__codelineno-20-123)  [](#__codelineno-20-124)  # Construct a FunctionResponse Content object to send back to the agent/runner.  [](#__codelineno-20-125)  # This response explicitly targets the 'adk_request_credential' function call  [](#__codelineno-20-126)  # identified earlier by its ID.  [](#__codelineno-20-127)  auth_content = types.Content(      [](#__codelineno-20-128)      role='user',      [](#__codelineno-20-129)      parts=[          [](#__codelineno-20-130)          types.Part(              [](#__codelineno-20-131)              function_response=types.FunctionResponse(                  [](#__codelineno-20-132)                  # Crucially, link this response to the original request using the saved ID.                  [](#__codelineno-20-133)                  id=auth_request_event_id,                  [](#__codelineno-20-134)                  # The special name of the function call we are responding to.                  [](#__codelineno-20-135)                  name='adk_request_credential',                  [](#__codelineno-20-136)                  # The payload containing all necessary authentication details.                  [](#__codelineno-20-137)                  response=auth_config.model_dump(),              [](#__codelineno-20-138)              )          [](#__codelineno-20-139)          )      [](#__codelineno-20-140)      ],  [](#__codelineno-20-141)  ) [](#__codelineno-20-142)  [](#__codelineno-20-143)  # --- Step 6: Resume Execution with Authentication ---  [](#__codelineno-20-144)  print("\nSubmitting authentication details back to the agent...")  [](#__codelineno-20-145)  # Run the agent again, this time providing the `auth_content` (FunctionResponse).  [](#__codelineno-20-146)  # The ADK Runner intercepts this, processes the 'adk_request_credential' response  [](#__codelineno-20-147)  # (performs token exchange, stores credentials), and then allows the agent  [](#__codelineno-20-148)  # to retry the original tool call that required authentication, now succeeding with  [](#__codelineno-20-149)  # a valid access token embedded.  [](#__codelineno-20-150)  events_async = runner.run_async(      [](#__codelineno-20-151)      session_id=session.id,      [](#__codelineno-20-152)      user_id='user',      [](#__codelineno-20-153)      new_message=auth_content, # Provide the prepared auth response  [](#__codelineno-20-154)  ) [](#__codelineno-20-155)  [](#__codelineno-20-156)  # Process and print the final events from the agent after authentication is complete.  [](#__codelineno-20-157)  # This stream now contain the actual result from the tool (e.g., the user info).  [](#__codelineno-20-158)  print("\n--- Agent Response after Authentication ---")  [](#__codelineno-20-159)  async for event in events_async:    [](#__codelineno-20-160)    print(event) [](#__codelineno-20-161) [](#__codelineno-20-162)[](#__codelineno-20-163)if __name__ == '__main__':   [](#__codelineno-20-164)  asyncio.run(async_main())``

helpers.py

``[](#__codelineno-21-1)# Copyright 2025 Google LLC [](#__codelineno-21-2)# [](#__codelineno-21-3)# Licensed under the Apache License, Version 2.0 (the "License"); [](#__codelineno-21-4)# you may not use this file except in compliance with the License. [](#__codelineno-21-5)# You may obtain a copy of the License at [](#__codelineno-21-6)# [](#__codelineno-21-7)#     http://www.apache.org/licenses/LICENSE-2.0 [](#__codelineno-21-8)# [](#__codelineno-21-9)# Unless required by applicable law or agreed to in writing, software [](#__codelineno-21-10)# distributed under the License is distributed on an "AS IS" BASIS, [](#__codelineno-21-11)# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. [](#__codelineno-21-12)# See the License for the specific language governing permissions and [](#__codelineno-21-13)# limitations under the License. [](#__codelineno-21-14)[](#__codelineno-21-15)from google.adk.auth import AuthConfig [](#__codelineno-21-16)from google.adk.events import Event [](#__codelineno-21-17)import asyncio [](#__codelineno-21-18)[](#__codelineno-21-19)# --- Helper Functions --- [](#__codelineno-21-20)async def get_user_input(prompt: str) -> str:   [](#__codelineno-21-21)  """  [](#__codelineno-21-22)  Asynchronously prompts the user for input in the console. [](#__codelineno-21-23)  [](#__codelineno-21-24)  Uses asyncio's event loop and run_in_executor to avoid blocking the main  [](#__codelineno-21-25)  asynchronous execution thread while waiting for synchronous `input()`. [](#__codelineno-21-26)  [](#__codelineno-21-27)  Args:    [](#__codelineno-21-28)    prompt: The message to display to the user. [](#__codelineno-21-29)  [](#__codelineno-21-30)  Returns:    [](#__codelineno-21-31)    The string entered by the user.  [](#__codelineno-21-32)  """  [](#__codelineno-21-33)  loop = asyncio.get_event_loop()  [](#__codelineno-21-34)  # Run the blocking `input()` function in a separate thread managed by the executor.  [](#__codelineno-21-35)  return await loop.run_in_executor(None, input, prompt) [](#__codelineno-21-36) [](#__codelineno-21-37)[](#__codelineno-21-38)def is_pending_auth_event(event: Event) -> bool:   [](#__codelineno-21-39)  """  [](#__codelineno-21-40)  Checks if an ADK Event represents a request for user authentication credentials. [](#__codelineno-21-41)  [](#__codelineno-21-42)  The ADK framework emits a specific function call ('adk_request_credential')  [](#__codelineno-21-43)  when a tool requires authentication that hasn't been previously satisfied. [](#__codelineno-21-44)  [](#__codelineno-21-45)  Args:    [](#__codelineno-21-46)    event: The ADK Event object to inspect. [](#__codelineno-21-47)  [](#__codelineno-21-48)  Returns:    [](#__codelineno-21-49)    True if the event is an 'adk_request_credential' function call, False otherwise.  [](#__codelineno-21-50)  """  [](#__codelineno-21-51)  # Safely checks nested attributes to avoid errors if event structure is incomplete.  [](#__codelineno-21-52)  return (      [](#__codelineno-21-53)      event.content      [](#__codelineno-21-54)      and event.content.parts      [](#__codelineno-21-55)      and event.content.parts[0] # Assuming the function call is in the first part      [](#__codelineno-21-56)      and event.content.parts[0].function_call      [](#__codelineno-21-57)      # The specific function name indicating an auth request from the ADK framework.      [](#__codelineno-21-58)      and event.content.parts[0].function_call.name == 'adk_request_credential'  [](#__codelineno-21-59)  ) [](#__codelineno-21-60) [](#__codelineno-21-61)[](#__codelineno-21-62)def get_function_call_id(event: Event) -> str:   [](#__codelineno-21-63)  """  [](#__codelineno-21-64)  Extracts the unique ID of the function call from an ADK Event. [](#__codelineno-21-65)  [](#__codelineno-21-66)  This ID is crucial for correlating a function *response* back to the specific  [](#__codelineno-21-67)  function *call* that the agent initiated to request for auth credentials. [](#__codelineno-21-68)  [](#__codelineno-21-69)  Args:    [](#__codelineno-21-70)    event: The ADK Event object containing the function call. [](#__codelineno-21-71)  [](#__codelineno-21-72)  Returns:    [](#__codelineno-21-73)    The unique identifier string of the function call. [](#__codelineno-21-74)  [](#__codelineno-21-75)  Raises:    [](#__codelineno-21-76)    ValueError: If the function call ID cannot be found in the event structure.                [](#__codelineno-21-77)                (Corrected typo from `contents` to `content` below)  [](#__codelineno-21-78)  """  [](#__codelineno-21-79)  # Navigate through the event structure to find the function call ID.  [](#__codelineno-21-80)  if (      [](#__codelineno-21-81)      event      [](#__codelineno-21-82)      and event.content      [](#__codelineno-21-83)      and event.content.parts      [](#__codelineno-21-84)      and event.content.parts[0] # Use content, not contents      [](#__codelineno-21-85)      and event.content.parts[0].function_call      [](#__codelineno-21-86)      and event.content.parts[0].function_call.id  [](#__codelineno-21-87)  ):    [](#__codelineno-21-88)    return event.content.parts[0].function_call.id  [](#__codelineno-21-89)  # If the ID is missing, raise an error indicating an unexpected event format.  [](#__codelineno-21-90)  raise ValueError(f'Cannot get function call id from event {event}') [](#__codelineno-21-91) [](#__codelineno-21-92)[](#__codelineno-21-93)def get_function_call_auth_config(event: Event) -> AuthConfig:   [](#__codelineno-21-94)  """  [](#__codelineno-21-95)  Extracts the authentication configuration details from an 'adk_request_credential' event. [](#__codelineno-21-96)  [](#__codelineno-21-97)  Client should use this AuthConfig to necessary authentication details (like OAuth codes and state)  [](#__codelineno-21-98)  and sent it back to the ADK to continue OAuth token exchanging. [](#__codelineno-21-99)  [](#__codelineno-21-100)  Args:    [](#__codelineno-21-101)    event: The ADK Event object containing the 'adk_request_credential' call. [](#__codelineno-21-102)  [](#__codelineno-21-103)  Returns:    [](#__codelineno-21-104)    An AuthConfig object populated with details from the function call arguments. [](#__codelineno-21-105)  [](#__codelineno-21-106)  Raises:    [](#__codelineno-21-107)    ValueError: If the 'auth_config' argument cannot be found in the event.                [](#__codelineno-21-108)                (Corrected typo from `contents` to `content` below)  [](#__codelineno-21-109)  """  [](#__codelineno-21-110)  if (      [](#__codelineno-21-111)      event      [](#__codelineno-21-112)      and event.content      [](#__codelineno-21-113)      and event.content.parts      [](#__codelineno-21-114)      and event.content.parts[0] # Use content, not contents      [](#__codelineno-21-115)      and event.content.parts[0].function_call      [](#__codelineno-21-116)      and event.content.parts[0].function_call.args      [](#__codelineno-21-117)      and event.content.parts[0].function_call.args.get('auth_config')  [](#__codelineno-21-118)  ):    [](#__codelineno-21-119)    # Reconstruct the AuthConfig object using the dictionary provided in the arguments.    [](#__codelineno-21-120)    # The ** operator unpacks the dictionary into keyword arguments for the constructor.    [](#__codelineno-21-121)    return AuthConfig(          [](#__codelineno-21-122)          **event.content.parts[0].function_call.args.get('auth_config')      [](#__codelineno-21-123)      )  [](#__codelineno-21-124)  raise ValueError(f'Cannot get auth config from event {event}')``

`[](#__codelineno-22-1)openapi: 3.0.1 [](#__codelineno-22-2)info: [](#__codelineno-22-3)title: Okta User Info API [](#__codelineno-22-4)version: 1.0.0 [](#__codelineno-22-5)description: |-    [](#__codelineno-22-6)   API to retrieve user profile information based on a valid Okta OIDC Access Token.   [](#__codelineno-22-7)   Authentication is handled via OpenID Connect with Okta. [](#__codelineno-22-8)contact:    [](#__codelineno-22-9)   name: API Support   [](#__codelineno-22-10)   email: support@example.com # Replace with actual contact if available [](#__codelineno-22-11)servers: [](#__codelineno-22-12)- url: <substitute with your server name>    [](#__codelineno-22-13)   description: Production Environment [](#__codelineno-22-14)paths: [](#__codelineno-22-15)/okta-jwt-user-api:    [](#__codelineno-22-16)   get:      [](#__codelineno-22-17)      summary: Get Authenticated User Info      [](#__codelineno-22-18)      description: |-      [](#__codelineno-22-19)      Fetches profile details for the user      [](#__codelineno-22-20)      operationId: getUserInfo      [](#__codelineno-22-21)      tags:      [](#__codelineno-22-22)      - User Profile      [](#__codelineno-22-23)      security:      [](#__codelineno-22-24)      - okta_oidc:            [](#__codelineno-22-25)            - openid            [](#__codelineno-22-26)            - email            [](#__codelineno-22-27)            - profile      [](#__codelineno-22-28)      responses:      [](#__codelineno-22-29)      '200':         [](#__codelineno-22-30)         description: Successfully retrieved user information.         [](#__codelineno-22-31)         content:            [](#__codelineno-22-32)            application/json:            [](#__codelineno-22-33)            schema:               [](#__codelineno-22-34)               type: object               [](#__codelineno-22-35)               properties:                  [](#__codelineno-22-36)                  sub:                  [](#__codelineno-22-37)                  type: string                  [](#__codelineno-22-38)                  description: Subject identifier for the user.                  [](#__codelineno-22-39)                  example: "abcdefg"                  [](#__codelineno-22-40)                  name:                  [](#__codelineno-22-41)                  type: string                  [](#__codelineno-22-42)                  description: Full name of the user.                  [](#__codelineno-22-43)                  example: "Example LastName"                  [](#__codelineno-22-44)                  locale:                  [](#__codelineno-22-45)                  type: string                  [](#__codelineno-22-46)                  description: User's locale, e.g., en-US or en_US.                  [](#__codelineno-22-47)                  example: "en_US"                  [](#__codelineno-22-48)                  email:                  [](#__codelineno-22-49)                  type: string                  [](#__codelineno-22-50)                  format: email                  [](#__codelineno-22-51)                  description: User's primary email address.                  [](#__codelineno-22-52)                  example: "username@example.com"                  [](#__codelineno-22-53)                  preferred_username:                  [](#__codelineno-22-54)                  type: string                  [](#__codelineno-22-55)                  description: Preferred username of the user (often the email).                  [](#__codelineno-22-56)                  example: "username@example.com"                  [](#__codelineno-22-57)                  given_name:                  [](#__codelineno-22-58)                  type: string                  [](#__codelineno-22-59)                  description: Given name (first name) of the user.                  [](#__codelineno-22-60)                  example: "Example"                  [](#__codelineno-22-61)                  family_name:                  [](#__codelineno-22-62)                  type: string                  [](#__codelineno-22-63)                  description: Family name (last name) of the user.                  [](#__codelineno-22-64)                  example: "LastName"                  [](#__codelineno-22-65)                  zoneinfo:                  [](#__codelineno-22-66)                  type: string                  [](#__codelineno-22-67)                  description: User's timezone, e.g., America/Los_Angeles.                  [](#__codelineno-22-68)                  example: "America/Los_Angeles"                  [](#__codelineno-22-69)                  updated_at:                  [](#__codelineno-22-70)                  type: integer                  [](#__codelineno-22-71)                  format: int64 # Using int64 for Unix timestamp                  [](#__codelineno-22-72)                  description: Timestamp when the user's profile was last updated (Unix epoch time).                  [](#__codelineno-22-73)                  example: 1743617719                  [](#__codelineno-22-74)                  email_verified:                  [](#__codelineno-22-75)                  type: boolean                  [](#__codelineno-22-76)                  description: Indicates if the user's email address has been verified.                  [](#__codelineno-22-77)                  example: true               [](#__codelineno-22-78)               required:                  [](#__codelineno-22-79)                  - sub                  [](#__codelineno-22-80)                  - name                  [](#__codelineno-22-81)                  - locale                  [](#__codelineno-22-82)                  - email                  [](#__codelineno-22-83)                  - preferred_username                  [](#__codelineno-22-84)                  - given_name                  [](#__codelineno-22-85)                  - family_name                  [](#__codelineno-22-86)                  - zoneinfo                  [](#__codelineno-22-87)                  - updated_at                  [](#__codelineno-22-88)                  - email_verified      [](#__codelineno-22-89)      '401':         [](#__codelineno-22-90)         description: Unauthorized. The provided Bearer token is missing, invalid, or expired.         [](#__codelineno-22-91)         content:            [](#__codelineno-22-92)            application/json:            [](#__codelineno-22-93)            schema:               [](#__codelineno-22-94)               $ref: '#/components/schemas/Error'      [](#__codelineno-22-95)      '403':         [](#__codelineno-22-96)         description: Forbidden. The provided token does not have the required scopes or permissions to access this resource.         [](#__codelineno-22-97)         content:            [](#__codelineno-22-98)            application/json:            [](#__codelineno-22-99)            schema:               [](#__codelineno-22-100)               $ref: '#/components/schemas/Error' [](#__codelineno-22-101)components: [](#__codelineno-22-102)securitySchemes:    [](#__codelineno-22-103)   okta_oidc:      [](#__codelineno-22-104)      type: openIdConnect      [](#__codelineno-22-105)      description: Authentication via Okta using OpenID Connect. Requires a Bearer Access Token.      [](#__codelineno-22-106)      openIdConnectUrl: https://your-endpoint.okta.com/.well-known/openid-configuration [](#__codelineno-22-107)schemas:    [](#__codelineno-22-108)   Error:      [](#__codelineno-22-109)      type: object      [](#__codelineno-22-110)      properties:      [](#__codelineno-22-111)      code:         [](#__codelineno-22-112)         type: string         [](#__codelineno-22-113)         description: An error code.      [](#__codelineno-22-114)      message:         [](#__codelineno-22-115)         type: string         [](#__codelineno-22-116)         description: A human-readable error message.      [](#__codelineno-22-117)      required:         [](#__codelineno-22-118)         - code         [](#__codelineno-22-119)         - message`

Back to top