---
title: "Session State Management using Firestore - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/integrations/firestore-session-service/
date: 2026-10-10T19:16:47.665Z
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
        
    
-   [Integrations](../)
    
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

-   [Use cases](#use-cases)
-   [Prerequisites](#prerequisites)
-   [Install dependencies](#install-dependencies)
    
    -   [Maven](#maven)
    -   [Gradle](#gradle)
    
-   [Example: Agent with Firestore Session Management](#example-agent-with-firestore-session-management)
-   [Configuration](#configuration)
    
    -   [Environment-Specific Configuration](#environment-specific-configuration)
    
-   [Resources](#resources)

[](https://github.com/google/adk-docs/edit/main/docs/integrations/firestore-session-service.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Session State Management using Firestore[¶](#session-state-management-using-firestore "Permanent link")

Supported in ADKJava

[Google Cloud Firestore](https://cloud.google.com/firestore) is a flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development. ADK provides a native integration for managing persistent agent session states using Firestore, allowing continuous multi-turn conversations without losing conversation history.

## Use cases[¶](#use-cases "Permanent link")

-   **Customer Support Agents**: Maintain context across long-running support tickets, allowing the agent to remember past troubleshooting steps and preferences across multiple sessions.
-   **Personalized Assistants**: Build agents that accumulate knowledge about the user over time, personalizing future interactions based on historical conversations.
-   **Multi-modal Workflows**: Seamlessly handle complex use cases involving images, videos, and audio alongside text conversations, leveraging the built-in GCS artifact storage.
-   **Enterprise Chatbots**: Deploy highly reliable, conversational AI applications with production-grade persistence suitable for large-scale enterprise environments.

## Prerequisites[¶](#prerequisites "Permanent link")

-   A [Google Cloud Project](https://cloud.google.com/) with Firestore enabled
-   A [Firestore database](https://cloud.google.com/firestore/native/docs/create-database-server-client-library) in your Google Cloud Project
-   Appropriate [Google Cloud credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) configured in your environment

## Install dependencies[¶](#install-dependencies "Permanent link")

Note

Use the same version for both `google-adk` and `google-adk-firestore-session-service` to guarantee compatibility. The examples below use `1.11.0`; check for the latest ADK version and use it in both dependencies.

Add the following dependencies to your `pom.xml` (Maven) or `build.gradle` (Gradle):

### Maven[¶](#maven "Permanent link")

`[](#__codelineno-0-1)<dependencies>     [](#__codelineno-0-2)    <!-- ADK Core -->    [](#__codelineno-0-3)    <dependency>        [](#__codelineno-0-4)        <groupId>com.google.adk</groupId>        [](#__codelineno-0-5)        <artifactId>google-adk</artifactId>        [](#__codelineno-0-6)        <version>1.11.0</version>    [](#__codelineno-0-7)    </dependency>    [](#__codelineno-0-8)    <!-- Firestore Session Service -->    [](#__codelineno-0-9)    <dependency>        [](#__codelineno-0-10)        <groupId>com.google.adk</groupId>        [](#__codelineno-0-11)        <artifactId>google-adk-firestore-session-service</artifactId>        [](#__codelineno-0-12)        <version>1.11.0</version>    [](#__codelineno-0-13)    </dependency> [](#__codelineno-0-14)</dependencies>`

### Gradle[¶](#gradle "Permanent link")

`[](#__codelineno-1-1)dependencies {     [](#__codelineno-1-2)    // ADK Core    [](#__codelineno-1-3)    implementation 'com.google.adk:google-adk:1.11.0'    [](#__codelineno-1-4)    // Firestore Session Service    [](#__codelineno-1-5)    implementation 'com.google.adk:google-adk-firestore-session-service:1.11.0' [](#__codelineno-1-6)}`

## Example: Agent with Firestore Session Management[¶](#example-agent-with-firestore-session-management "Permanent link")

Use `FirestoreDatabaseRunner` to encapsulate your agent and Firestore-backed session management. Here is a complete example of setting up a simple assistant agent that remembers conversation context across turns using a custom session ID.

`[](#__codelineno-2-1)import com.google.adk.agents.BaseAgent; [](#__codelineno-2-2)import com.google.adk.agents.LlmAgent; [](#__codelineno-2-3)import com.google.adk.agents.RunConfig; [](#__codelineno-2-4)import com.google.adk.runner.FirestoreDatabaseRunner; [](#__codelineno-2-5)import com.google.cloud.firestore.Firestore; [](#__codelineno-2-6)import com.google.cloud.firestore.FirestoreOptions; [](#__codelineno-2-7)import io.reactivex.rxjava3.core.Flowable; [](#__codelineno-2-8)import java.util.Map; [](#__codelineno-2-9)import com.google.adk.sessions.FirestoreSessionService; [](#__codelineno-2-10)import com.google.adk.sessions.Session; [](#__codelineno-2-11)import com.google.adk.tools.Annotations.Schema; [](#__codelineno-2-12)import com.google.adk.tools.FunctionTool; [](#__codelineno-2-13)import com.google.genai.types.Content; [](#__codelineno-2-14)import com.google.genai.types.Part; [](#__codelineno-2-15)import com.google.adk.events.Event; [](#__codelineno-2-16)import java.util.Scanner; [](#__codelineno-2-17)import static java.nio.charset.StandardCharsets.UTF_8; [](#__codelineno-2-18)[](#__codelineno-2-19)public class YourAgentApplication { [](#__codelineno-2-20)    [](#__codelineno-2-21)    public static void main(String[] args) {        [](#__codelineno-2-22)        System.out.println("Starting YourAgentApplication..."); [](#__codelineno-2-23)        [](#__codelineno-2-24)        RunConfig runConfig = RunConfig.builder().build();        [](#__codelineno-2-25)        String appName = "hello-time-agent"; [](#__codelineno-2-26)        [](#__codelineno-2-27)        BaseAgent timeAgent = initAgent(); [](#__codelineno-2-28)        [](#__codelineno-2-29)        // Initialize Firestore        [](#__codelineno-2-30)        FirestoreOptions firestoreOptions = FirestoreOptions.getDefaultInstance();        [](#__codelineno-2-31)        Firestore firestore = firestoreOptions.getService(); [](#__codelineno-2-32)        [](#__codelineno-2-33)        // Use FirestoreDatabaseRunner to persist session state        [](#__codelineno-2-34)        FirestoreDatabaseRunner runner = new FirestoreDatabaseRunner(                [](#__codelineno-2-35)                timeAgent,                [](#__codelineno-2-36)                appName,                [](#__codelineno-2-37)                firestore        [](#__codelineno-2-38)        ); [](#__codelineno-2-39)        [](#__codelineno-2-40)        // Create a new session or load an existing one        [](#__codelineno-2-41)        Session session = new FirestoreSessionService(firestore)                [](#__codelineno-2-42)                .createSession(appName, "user1234", null, "12345")                [](#__codelineno-2-43)                .blockingGet(); [](#__codelineno-2-44)        [](#__codelineno-2-45)        // Start interactive CLI        [](#__codelineno-2-46)        try (Scanner scanner = new Scanner(System.in, UTF_8)) {            [](#__codelineno-2-47)            while (true) {                [](#__codelineno-2-48)                System.out.print("\\nYou > ");                [](#__codelineno-2-49)                String userInput = scanner.nextLine();                [](#__codelineno-2-50)                if ("quit".equalsIgnoreCase(userInput)) {                    [](#__codelineno-2-51)                    break;                [](#__codelineno-2-52)                } [](#__codelineno-2-53)                [](#__codelineno-2-54)                Content userMsg = Content.fromParts(Part.fromText(userInput));                [](#__codelineno-2-55)                Flowable<Event> events = runner.runAsync(session.userId(), session.id(), userMsg, runConfig); [](#__codelineno-2-56)                [](#__codelineno-2-57)                System.out.print("\\nAgent > ");                [](#__codelineno-2-58)                events.blockingForEach(event -> {                    [](#__codelineno-2-59)                    if (event.finalResponse()) {                        [](#__codelineno-2-60)                        System.out.println(event.stringifyContent());                    [](#__codelineno-2-61)                    }                [](#__codelineno-2-62)                });            [](#__codelineno-2-63)            }        [](#__codelineno-2-64)        }    [](#__codelineno-2-65)    } [](#__codelineno-2-66)    [](#__codelineno-2-67)    /** Mock tool implementation */    [](#__codelineno-2-68)    @Schema(description = "Get the current time for a given city")    [](#__codelineno-2-69)    public static Map<String, String> getCurrentTime(        [](#__codelineno-2-70)        @Schema(name = "city", description = "Name of the city to get the time for") String city) {        [](#__codelineno-2-71)        return Map.of(            [](#__codelineno-2-72)            "city", city,            [](#__codelineno-2-73)            "time", "The time is 10:30am."        [](#__codelineno-2-74)        );    [](#__codelineno-2-75)    } [](#__codelineno-2-76)    [](#__codelineno-2-77)    private static BaseAgent initAgent() {        [](#__codelineno-2-78)        return LlmAgent.builder()            [](#__codelineno-2-79)            .name("hello-time-agent")            [](#__codelineno-2-80)            .description("Tells the current time in a specified city")            [](#__codelineno-2-81)            .instruction("""                [](#__codelineno-2-82)                You are a helpful assistant that tells the current time in a city.                [](#__codelineno-2-83)                Use the 'getCurrentTime' tool for this purpose.                [](#__codelineno-2-84)                """)            [](#__codelineno-2-85)            .model("gemini-flash-latest")            [](#__codelineno-2-86)            .tools(FunctionTool.create(YourAgentApplication.class, "getCurrentTime"))            [](#__codelineno-2-87)            .build();    [](#__codelineno-2-88)    } [](#__codelineno-2-89)}`

## Configuration[¶](#configuration "Permanent link")

Note

The Firestore Session Service supports properties file configuration. This allows you to easily target a dedicated Firestore database and define custom collection names for storing your agent session data.

You can customize your ADK application to use the Firestore session service by providing your own Firestore property settings, otherwise the library will use the default settings.

### Environment-Specific Configuration[¶](#environment-specific-configuration "Permanent link")

The library prioritizes environment-specific property files over the default settings using the following resolution order:

1.  **Environment Variable Override**: It first checks for an environment variable named `env`. If this variable is set (e.g., `env=dev`), it will attempt to load a properties file matching the template: `adk-firestore-{env}.properties` (e.g., `adk-firestore-dev.properties`).
2.  **Default Fallback**: If the `env` variable is not set, or the environment-specific file cannot be found, the library defaults to loading `adk-firestore.properties`.

Sample Property Settings:

`[](#__codelineno-3-1)# Firestore collection name for storing session data [](#__codelineno-3-2)firebase.root.collection.name=adk-session [](#__codelineno-3-3)# Google Cloud Storage bucket name for artifact storage [](#__codelineno-3-4)gcs.adk.bucket.name=your-gcs-bucket-name [](#__codelineno-3-5)# stop words for keyword extraction [](#__codelineno-3-6)keyword.extraction.stopwords=a,about,above,after,again,against,all,am,an,and,any,are,aren't,as,at,be,because,been,before,being,below,between,both,but,by,can't,cannot,could,couldn't,did,didn't,do,does,doesn't,doing,don't,down,during,each,few,for,from,further,had,hadn't,has,hasn't,have,haven't,having,he,he'd,he'll,he's,her,here,here's,hers,herself,him,himself,his,how,i,i'd,i'll,i'm,i've,if,in,into,is`

Important

`FirestoreDatabaseRunner` requires the `gcs.adk.bucket.name` property to be defined. This is because the runner internally initializes the `GcsArtifactService` to handle multi-modal artifact storage. If this property is missing or empty, the application will throw a `RuntimeException` during startup. This is used for storing artifacts like images, videos, audio files, etc. that are generated or processed by the agent.

## Resources[¶](#resources "Permanent link")

-   [Firestore Session Service](https://github.com/google/adk-java/tree/main/contrib/firestore-session-service): Source code for the Firestore Session Service.
-   [Spring Boot Google ADK + Firestore Example](https://github.com/mohan-ganesh/spring-boot-google-adk-firestore): An example project demonstrating how to build a Java-based Google ADK agent application using Cloud Firestore for session management.
-   [Firestore Session Service - DeepWiki](https://deepwiki.com/google/adk-java/4.3-firestore-session-service): Detailed description of Firestore integration in the Google ADK for Java.

Back to top