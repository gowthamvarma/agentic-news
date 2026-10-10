---
title: "Test deployed agents - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/deploy/agent-runtime/test/
date: 2026-10-10T19:16:30.338Z
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
            -   [agents-cli](../agents-cli/)
            -    Test deployed agents [Test deployed agents](./)
                
                Table of contents
                
                -   [View deployed agent in Cloud Console](#view-deployed-agent-in-cloud-console)
                -   [Find Google Cloud project information](#find-google-cloud-project-information)
                -   [Test using REST calls](#test-using-rest-calls)
                    
                    -   [Check connection to agent](#check-connection-to-agent)
                    -   [Send an agent request](#send-an-agent-request)
                    
                -   [Test using Python](#test-using-python)
                    
                    -   [Create a remote session](#create-a-remote-session)
                        
                        -   [Send queries to your remote agent](#send-queries-to-your-remote-agent)
                        
                    -   [Sending Multimodal Queries](#sending-multimodal-queries)
                    
                -   [Clean up deployments](#clean-up-deployments)
                
            
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

-   [View deployed agent in Cloud Console](#view-deployed-agent-in-cloud-console)
-   [Find Google Cloud project information](#find-google-cloud-project-information)
-   [Test using REST calls](#test-using-rest-calls)
    
    -   [Check connection to agent](#check-connection-to-agent)
    -   [Send an agent request](#send-an-agent-request)
    
-   [Test using Python](#test-using-python)
    
    -   [Create a remote session](#create-a-remote-session)
        
        -   [Send queries to your remote agent](#send-queries-to-your-remote-agent)
        
    -   [Sending Multimodal Queries](#sending-multimodal-queries)
    
-   [Clean up deployments](#clean-up-deployments)

1.  [Home](../../..)
2.  [Run Agents](../../../runtime/)
3.  [Deployment](../../)
4.  [Agent Runtime](../)

[](https://github.com/google/adk-docs/edit/main/docs/deploy/agent-runtime/test.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Test deployed agents in Agent Runtime[¶](#test-deployed-agents-in-agent-runtime "Permanent link")

Supported in ADKPythonGo v1.2.0

These instructions explain how to test an ADK agent deployed to the [Agent Runtime](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview) runtime environment. Before using these instructions, you need to have completed the deployment of your agent to the Agent Runtime runtime environment using one of the [available methods](/deploy/agent-runtime/). This guide shows you how to view, interact, and test your deployed agent through the Google Cloud Console, and interact with the agent using REST API calls or the Agent Platform SDK for Python.

## View deployed agent in Cloud Console[¶](#view-deployed-agent-in-cloud-console "Permanent link")

To view your deployed agent in the Cloud Console:

-   Navigate to the Agent Runtime page in the Google Cloud Console: [https://console.cloud.google.com/vertex-ai/agents/agent-engines](https://console.cloud.google.com/vertex-ai/agents/agent-engines)

This page lists all deployed agents in your currently selected Google Cloud project. If you do not see your agent listed, make sure you have your target project selected in Google Cloud Console. For more information on selecting an existing Google Cloud project, see [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects).

## Find Google Cloud project information[¶](#find-google-cloud-project-information "Permanent link")

You need the address and resource identification for your project (`PROJECT_ID`, `LOCATION_ID`, `RESOURCE_ID`) to be able to test your deployment. You can use Cloud Console or the `gcloud` command line tool to find this information.

Agent Platform express mode API key

If you are using Agent Platform express mode, you can skip this step and use your API key.

To find your project information with Google Cloud Console:

1.  In the Google Cloud Console, navigate to the Agent Runtime page: [https://console.cloud.google.com/vertex-ai/agents/agent-engines](https://console.cloud.google.com/vertex-ai/agents/agent-engines)
    
2.  Choose the instance you want to view.
    
3.  At the top of the page, select **Copy query URL**, which should be in this format:
    
    `https://$(LOCATION_ID)-aiplatform.googleapis.com/v1/projects/$(PROJECT_ID)/locations/$(LOCATION_ID)/reasoningEngines/$(RESOURCE_ID):query`
    

To find your project information with the `gcloud` command line tool:

1.  In your development environment, make sure you are authenticated to Google Cloud and run the following command to list your project:
    
    `[](#__codelineno-0-1)gcloud projects list`
    
2.  With the Project ID you used for deployment, run this command to get the additional details:
    
    `[](#__codelineno-1-1)gcloud asset search-all-resources \     [](#__codelineno-1-2)    --scope=projects/$(PROJECT_ID) \    [](#__codelineno-1-3)    --asset-types='aiplatform.googleapis.com/ReasoningEngine' \    [](#__codelineno-1-4)    --format="table(name,assetType,location,reasoning_engine_id)"`
    

## Test using REST calls[¶](#test-using-rest-calls "Permanent link")

A simple way to interact with your deployed agent in Agent Runtime is to use REST calls with the `curl` tool. This section describes how to check your connection to the agent and also to test processing of a request by the deployed agent.

### Check connection to agent[¶](#check-connection-to-agent "Permanent link")

You can check your connection to the running agent using the **Query URL** available in the Agent Runtime section of the Cloud Console. This check does not execute the deployed agent, but returns information about the agent.

To send a REST call and get a response from deployed agent:

-   In a terminal window of your development environment, build a request and execute it:
    
    Google Cloud ProjectAgent Platform express mode
    
    `[](#__codelineno-2-1)curl -X GET \     [](#__codelineno-2-2)    -H "Authorization: Bearer $(gcloud auth print-access-token)" \    [](#__codelineno-2-3)    "https://$(LOCATION_ID)-aiplatform.googleapis.com/v1/projects/$(PROJECT_ID)/locations/$(LOCATION_ID)/reasoningEngines"`
    
    `[](#__codelineno-3-1)curl -X GET \     [](#__codelineno-3-2)    -H "x-goog-api-key:YOUR-EXPRESS-MODE-API-KEY" \    [](#__codelineno-3-3)    "https://aiplatform.googleapis.com/v1/reasoningEngines"`
    

If your deployment was successful, this request responds with a list of valid requests and expected data formats.

Remove `:query` parameter for connection URL

If you use the **Query URL** available in the Agent Runtime section of the Cloud Console, make sure to remove the `:query` parameter from end of the address.

Access for agent connections

This connection test requires the calling user has a valid access token for the deployed agent. When testing from other environments, make sure the calling user has access to connect to the agent in your Google Cloud project.

### Send an agent request[¶](#send-an-agent-request "Permanent link")

When getting responses from your agent project, you must first create a session, receive a Session ID, and then send your requests using that Session ID. This process is described in the following instructions.

To test interaction with the deployed agent via REST:

1.  In a terminal window of your development environment, create a session by building a request using this template:
    
    Google Cloud ProjectAgent Platform express mode
    
    `[](#__codelineno-4-1)curl \     [](#__codelineno-4-2)    -H "Authorization: Bearer $(gcloud auth print-access-token)" \    [](#__codelineno-4-3)    -H "Content-Type: application/json" \    [](#__codelineno-4-4)    https://$(LOCATION_ID)-aiplatform.googleapis.com/v1/projects/$(PROJECT_ID)/locations/$(LOCATION_ID)/reasoningEngines/$(RESOURCE_ID):query \    [](#__codelineno-4-5)    -d '{"class_method": "async_create_session", "input": {"user_id": "u_123"},}'`
    
    `[](#__codelineno-5-1)curl \     [](#__codelineno-5-2)    -H "x-goog-api-key:YOUR-EXPRESS-MODE-API-KEY" \    [](#__codelineno-5-3)    -H "Content-Type: application/json" \    [](#__codelineno-5-4)    https://aiplatform.googleapis.com/v1/reasoningEngines/$(RESOURCE_ID):query \    [](#__codelineno-5-5)    -d '{"class_method": "async_create_session", "input": {"user_id": "u_123"},}'`
    
2.  In the response from the previous command, extract the created **Session ID** from the **id** field:
    
    `[](#__codelineno-6-1){     [](#__codelineno-6-2)    "output": {        [](#__codelineno-6-3)        "userId": "u_123",        [](#__codelineno-6-4)        "lastUpdateTime": 1757690426.337745,        [](#__codelineno-6-5)        "state": {},        [](#__codelineno-6-6)        "id": "4857885913439920384", # Session ID        [](#__codelineno-6-7)        "appName": "9888888855577777776",        [](#__codelineno-6-8)        "events": []    [](#__codelineno-6-9)    } [](#__codelineno-6-10)}`
    
3.  In a terminal window of your development environment, send a message to your agent by building a request using this template and the Session ID created in the previous step:
    
    Google Cloud ProjectAgent Platform express mode
    
    `[](#__codelineno-7-1)curl \ [](#__codelineno-7-2)-H "Authorization: Bearer $(gcloud auth print-access-token)" \ [](#__codelineno-7-3)-H "Content-Type: application/json" \ [](#__codelineno-7-4)https://$(LOCATION_ID)-aiplatform.googleapis.com/v1/projects/$(PROJECT_ID)/locations/$(LOCATION_ID)/reasoningEngines/$(RESOURCE_ID):streamQuery?alt=sse -d '{ [](#__codelineno-7-5)"class_method": "async_stream_query", [](#__codelineno-7-6)"input": {     [](#__codelineno-7-7)    "user_id": "u_123",    [](#__codelineno-7-8)    "session_id": "4857885913439920384",    [](#__codelineno-7-9)    "message": "Hey whats the weather in new york today?", [](#__codelineno-7-10)} [](#__codelineno-7-11)}'`
    
    `[](#__codelineno-8-1)curl \ [](#__codelineno-8-2)-H "x-goog-api-key:YOUR-EXPRESS-MODE-API-KEY" \ [](#__codelineno-8-3)-H "Content-Type: application/json" \ [](#__codelineno-8-4)https://aiplatform.googleapis.com/v1/reasoningEngines/$(RESOURCE_ID):streamQuery?alt=sse -d '{ [](#__codelineno-8-5)"class_method": "async_stream_query", [](#__codelineno-8-6)"input": {     [](#__codelineno-8-7)    "user_id": "u_123",    [](#__codelineno-8-8)    "session_id": "4857885913439920384",    [](#__codelineno-8-9)    "message": "Hey whats the weather in new york today?", [](#__codelineno-8-10)} [](#__codelineno-8-11)}'`
    

This request should generate a response from your deployed agent code in JSON format. For more information about interacting with a deployed ADK agent in Agent Runtime using REST calls, see [Manage deployed agents](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/manage/overview#console) and [Use an Agent Development Kit agent](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/use/adk) in the Agent Runtime documentation.

## Test using Python[¶](#test-using-python "Permanent link")

You can use Python code for more sophisticated and repeatable testing of your agent deployed in Agent Runtime. These instructions describe how to create a session with the deployed agent, and then send a request to the agent for processing.

### Create a remote session[¶](#create-a-remote-session "Permanent link")

Use the `remote_app` object to create a connection to a deployed, remote agent:

`[](#__codelineno-9-1)# If you are in a new script or used the ADK CLI to deploy, you can connect like this: [](#__codelineno-9-2)# remote_app = agent_engines.get("your-agent-resource-name") [](#__codelineno-9-3)remote_session = await remote_app.async_create_session(user_id="u_456") [](#__codelineno-9-4)print(remote_session)`

Expected output for `create_session` (remote):

`[](#__codelineno-10-1){'events': [], [](#__codelineno-10-2)'user_id': 'u_456', [](#__codelineno-10-3)'state': {}, [](#__codelineno-10-4)'id': '7543472750996750336', [](#__codelineno-10-5)'app_name': '7917477678498709504', [](#__codelineno-10-6)'last_update_time': 1743683353.030133}`

The `id` value is the session ID, and `app_name` is the resource ID of the deployed agent on Agent Runtime.

#### Send queries to your remote agent[¶](#send-queries-to-your-remote-agent "Permanent link")

`[](#__codelineno-11-1)async for event in remote_app.async_stream_query(     [](#__codelineno-11-2)    user_id="u_456",    [](#__codelineno-11-3)    session_id=remote_session["id"],    [](#__codelineno-11-4)    message="whats the weather in new york", [](#__codelineno-11-5)):     [](#__codelineno-11-6)    print(event)`

Expected output for `async_stream_query` (remote):

`[](#__codelineno-12-1){'parts': [{'function_call': {'id': 'af-f1906423-a531-4ecf-a1ef-723b05e85321', 'args': {'city': 'new york'}, 'name': 'get_weather'}}], 'role': 'model'} [](#__codelineno-12-2){'parts': [{'function_response': {'id': 'af-f1906423-a531-4ecf-a1ef-723b05e85321', 'name': 'get_weather', 'response': {'status': 'success', 'report': 'The weather in New York is sunny with a temperature of 25 degrees Celsius (41 degrees Fahrenheit).'}}}], 'role': 'user'} [](#__codelineno-12-3){'parts': [{'text': 'The weather in New York is sunny with a temperature of 25 degrees Celsius (41 degrees Fahrenheit).'}], 'role': 'model'}`

For more information about interacting with a deployed ADK agent in Agent Runtime, see [Manage deployed agents](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/manage/overview) and [Use a Agent Development Kit agent](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/use/adk) in the Agent Runtime documentation.

### Sending Multimodal Queries[¶](#sending-multimodal-queries "Permanent link")

To send multimodal queries (e.g., including images) to your agent, you can construct the `message` parameter of `async_stream_query` with a list of `types.Part` objects. Each part can be text or an image.

To include an image, you can use `types.Part.from_uri`, providing a Google Cloud Storage (GCS) URI for the image.

`[](#__codelineno-13-1)from google.genai import types [](#__codelineno-13-2)[](#__codelineno-13-3)image_part = types.Part.from_uri(     [](#__codelineno-13-4)    file_uri="gs://cloud-samples-data/generative-ai/image/scones.jpg",    [](#__codelineno-13-5)    mime_type="image/jpeg", [](#__codelineno-13-6)) [](#__codelineno-13-7)text_part = types.Part.from_text(     [](#__codelineno-13-8)    text="What is in this image?", [](#__codelineno-13-9)) [](#__codelineno-13-10)[](#__codelineno-13-11)async for event in remote_app.async_stream_query(     [](#__codelineno-13-12)    user_id="u_456",    [](#__codelineno-13-13)    session_id=remote_session["id"],    [](#__codelineno-13-14)    message=[text_part, image_part], [](#__codelineno-13-15)):     [](#__codelineno-13-16)    print(event)`

Note

While the underlying communication with the model may involve Base64 encoding for images, the recommended and supported method for sending image data to an agent deployed on Agent Runtime is by providing a GCS URI.

## Clean up deployments[¶](#clean-up-deployments "Permanent link")

If you have performed deployments as tests, it is a good practice to clean up your cloud resources after you have finished. You can delete the deployed Agent Runtime instance to avoid any unexpected charges on your Google Cloud account.

`[](#__codelineno-14-1)remote_app.delete(force=True)`

The `force=True` parameter also deletes any child resources that were generated from the deployed agent, such as sessions. You can also delete your deployed agent via the [Agent Runtime UI](https://console.cloud.google.com/vertex-ai/agents/agent-engines) on Google Cloud.

Back to top