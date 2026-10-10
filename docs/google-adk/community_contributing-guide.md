---
title: "Contributing Guide - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/community/contributing-guide/
date: 2026-10-10T19:16:28.505Z
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
    
-   [Community](../)
    
    Community
    
    -    Contributing Guide [Contributing Guide](./)
        
        Table of contents
        
        -   [Join the community](#join-the-community)
        -   [Preparing to contribute](#preparing-to-contribute)
            
            -   [Choose the right repository](#choose-the-right-repository)
            -   [Sign a CLA](#sign-a-cla)
            -   [Review community guidelines](#review-community-guidelines)
            
        -   [How to contribute](#how-to-contribute)
            
            -   [Reporting issues](#reporting-issues-bugs-errors)
            -   [Suggesting enhancements](#suggesting-enhancements)
            -   [Improving documentation](#improving-documentation)
            -   [Writing code](#writing-code)
            -   [Code reviews](#code-reviews)
            
        -   [License](#license)
        -   [Questions?](#questions)
        
    
-   [ADK 2.0](../../2.0/)
    
    ADK 2.0
    

Table of contents

-   [Join the community](#join-the-community)
-   [Preparing to contribute](#preparing-to-contribute)
    
    -   [Choose the right repository](#choose-the-right-repository)
    -   [Sign a CLA](#sign-a-cla)
    -   [Review community guidelines](#review-community-guidelines)
    
-   [How to contribute](#how-to-contribute)
    
    -   [Reporting issues](#reporting-issues-bugs-errors)
    -   [Suggesting enhancements](#suggesting-enhancements)
    -   [Improving documentation](#improving-documentation)
    -   [Writing code](#writing-code)
    -   [Code reviews](#code-reviews)
    
-   [License](#license)
-   [Questions?](#questions)

1.  [Home](../..)
2.  [Community](../)

[](https://github.com/google/adk-docs/edit/main/docs/community/contributing-guide.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Contributing Guide

Thank you for your interest in contributing to Agent Development Kit (ADK)! We welcome contributions to the core frameworks, documentation, and related components, which are listed below.

This guide provides information on how to get involved.

## Join the community[¶](#join-the-community "Permanent link")

-   Want to discuss ADK, ask questions, or talk about all things agents? Head to **[r/agentdevelopmentkit](https://www.reddit.com/r/agentdevelopmentkit/)** on Reddit.
-   Want updates on the monthly community call? Join the **[ADK Community Google Group](https://groups.google.com/g/adk-community)**.
-   Want to file a bug or contribute to the ADK framework? See the sections below for how to find the right repo and get started.

## Preparing to contribute[¶](#preparing-to-contribute "Permanent link")

### Choose the right repository[¶](#choose-the-right-repository "Permanent link")

The ADK project is split across several repositories. Find the right one for your contribution:

Repository

Description

Detailed Guide

[`google/adk-python`](https://github.com/google/adk-python)

Contains the core Python library source code

[`CONTRIBUTING.md`](https://github.com/google/adk-python/blob/main/CONTRIBUTING.md)

[`google/adk-python-community`](https://github.com/google/adk-python-community)

Contains community-contributed tools, integrations, and scripts

[`CONTRIBUTING.md`](https://github.com/google/adk-python-community/blob/main/CONTRIBUTING.md)

[`google/adk-js`](https://github.com/google/adk-js)

Contains the core JavaScript library source code

[`CONTRIBUTING.md`](https://github.com/google/adk-js/blob/main/CONTRIBUTING.md)

[`google/adk-go`](https://github.com/google/adk-go)

Contains the core Go library source code

[`CONTRIBUTING.md`](https://github.com/google/adk-go/blob/main/CONTRIBUTING.md)

[`google/adk-java`](https://github.com/google/adk-java)

Contains the core Java library source code

[`CONTRIBUTING.md`](https://github.com/google/adk-java/blob/main/CONTRIBUTING.md)

[`google/adk-docs`](https://github.com/google/adk-docs)

Contains the source for the documentation site you are currently reading

[`CONTRIBUTING.md`](https://github.com/google/adk-docs/blob/main/CONTRIBUTING.md)

[`google/adk-samples`](https://github.com/google/adk-samples)

Contains sample agents for ADK

[`CONTRIBUTING.md`](https://github.com/google/adk-samples/blob/main/CONTRIBUTING.md)

[`google/adk-web`](https://github.com/google/adk-web)

Contains the source for the `adk web` dev UI

These repositories typically include a `CONTRIBUTING.md` file in the root of their repository with more detailed information on requirements, testing, code review processes, etc. for that particular component.

### Sign a CLA[¶](#sign-a-cla "Permanent link")

Contributions to this project must be accompanied by a [Contributor License Agreement](https://cla.developers.google.com/about) (CLA). You (or your employer) retain the copyright to your contribution; this simply gives us permission to use and redistribute your contributions as part of the project.

If you or your current employer have already signed the Google CLA (even if it was for a different project), you probably don't need to do it again.

Visit [https://cla.developers.google.com/](https://cla.developers.google.com/) to see your current agreements or to sign a new one.

### Review community guidelines[¶](#review-community-guidelines "Permanent link")

This project follows [Google's Open Source Community Guidelines](https://opensource.google/conduct/).

## How to contribute[¶](#how-to-contribute "Permanent link")

There are several ways you can contribute to ADK:

### Reporting issues[¶](#reporting-issues-bugs-errors "Permanent link")

If you find a bug in the framework or an error in the documentation:

-   **Framework Bugs:** Open an issue in [`google/adk-python`](https://github.com/google/adk-python/issues/new), [`google/adk-js`](https://github.com/google/adk-js/issues/new), [`google/adk-go`](https://github.com/google/adk-go/issues/new), or [`google/adk-java`](https://github.com/google/adk-java/issues/new)
-   **Documentation Errors:** [Open an issue in `google/adk-docs` (use bug template)](https://github.com/google/adk-docs/issues/new?template=bug_report.md)

### Suggesting enhancements[¶](#suggesting-enhancements "Permanent link")

Have an idea for a new feature or an improvement to an existing one?

-   **Framework Enhancements:** Open an issue in [`google/adk-python`](https://github.com/google/adk-python/issues/new), [`google/adk-js`](https://github.com/google/adk-js/issues/new), [`google/adk-go`](https://github.com/google/adk-go/issues/new), or [`google/adk-java`](https://github.com/google/adk-java/issues/new)
-   **Documentation Enhancements:** [Open an issue in `google/adk-docs`](https://github.com/google/adk-docs/issues/new)

### Improving documentation[¶](#improving-documentation "Permanent link")

Found a typo, unclear explanation, or missing information? Submit your changes directly:

-   **How:** Submit a Pull Request (PR) with your suggested improvements.
-   **Where:** [Create a Pull Request in `google/adk-docs`](https://github.com/google/adk-docs/pulls)

### Writing code[¶](#writing-code "Permanent link")

Help fix bugs, implement new features or contribute code samples for the documentation:

**How:** Submit a Pull Request (PR) with your code changes.

-   **Python Framework:** [Create a Pull Request in `google/adk-python`](https://github.com/google/adk-python/pulls)
-   **TypeScript Framework:** [Create a Pull Request in `google/adk-js`](https://github.com/google/adk-js/pulls)
-   **Go Framework:** [Create a Pull Request in `google/adk-go`](https://github.com/google/adk-go/pulls)
-   **Java Framework:** [Create a Pull Request in `google/adk-java`](https://github.com/google/adk-java/pulls)
-   **Documentation:** [Create a Pull Request in `google/adk-docs`](https://github.com/google/adk-docs/pulls)

### Code reviews[¶](#code-reviews "Permanent link")

-   All contributions, including those from project members, undergo a review process.
    
-   We use GitHub Pull Requests (PRs) for code submission and review. Please ensure your PR clearly describes the changes you are making.
    

## License[¶](#license "Permanent link")

By contributing, you agree that your contributions will be licensed under the project's [Apache 2.0 License](https://github.com/google/adk-docs/blob/main/LICENSE).

## Questions?[¶](#questions "Permanent link")

If you get stuck or have questions, feel free to open an issue on the relevant repository's issue tracker.

Back to top