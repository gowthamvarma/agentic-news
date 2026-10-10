---
title: "Criteria - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/evaluate/criteria/
date: 2026-10-10T19:16:30.819Z
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
        
    -   [Evaluation](../)
        
        Evaluation
        
        -    Criteria [Criteria](./)
            
            Table of contents
            
            -   [Efficiency criteria](#efficiency-criteria)
            -   [tool\_trajectory\_avg\_score](#tool_trajectory_avg_score)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion)
                -   [Details](#details)
                -   [How To Use This Criterion?](#how-to-use-this-criterion)
                -   [Output And How To Interpret](#output-and-how-to-interpret)
                
            -   [response\_match\_score](#response_match_score)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_1)
                -   [Details](#details_1)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_1)
                -   [Output And How To Interpret](#output-and-how-to-interpret_1)
                
            -   [final\_response\_match\_v2](#final_response_match_v2)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_2)
                -   [Details](#details_2)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_2)
                -   [Output And How To Interpret](#output-and-how-to-interpret_2)
                
            -   [rubric\_based\_final\_response\_quality\_v1](#rubric_based_final_response_quality_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_3)
                -   [Details](#details_3)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_3)
                    
                    -   [Notes On Rubrics](#notes-on-rubrics)
                    
                -   [Output And How To Interpret](#output-and-how-to-interpret_3)
                
            -   [rubric\_based\_tool\_use\_quality\_v1](#rubric_based_tool_use_quality_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_4)
                -   [Details](#details_4)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_4)
                    
                    -   [Notes On Rubrics](#notes-on-rubrics_1)
                    
                -   [Output And How To Interpret](#output-and-how-to-interpret_4)
                
            -   [rubric\_based\_multi\_turn\_trajectory\_quality\_v1](#rubric_based_multi_turn_trajectory_quality_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_5)
                -   [Details](#details_5)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_5)
                    
                    -   [Notes On Rubrics](#notes-on-rubrics_2)
                    
                -   [Output And How To Interpret](#output-and-how-to-interpret_5)
                
            -   [hallucinations\_v1](#hallucinations_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_6)
                -   [Details](#details_6)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_6)
                -   [Output And How To Interpret](#output-and-how-to-interpret_6)
                
            -   [safety\_v1](#safety_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_7)
                -   [Details](#details_7)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_7)
                -   [Output And How To Interpret](#output-and-how-to-interpret_7)
                
            -   [per\_turn\_user\_simulator\_quality\_v1](#per_turn_user_simulator_quality_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_8)
                -   [Details](#details_8)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_8)
                -   [Output And How To Interpret](#output-and-how-to-interpret_8)
                -   [multi\_turn\_task\_success\_v1](#multi_turn_task_success_v1)
                    
                    -   [When To Use This Criterion?](#when-to-use-this-criterion_9)
                    -   [Details](#details_9)
                    -   [How To Use This Criterion?](#how-to-use-this-criterion_9)
                    -   [Output And How To Interpret](#output-and-how-to-interpret_9)
                    
                -   [multi\_turn\_trajectory\_quality\_v1](#multi_turn_trajectory_quality_v1)
                    
                    -   [When To Use This Criterion?](#when-to-use-this-criterion_10)
                    -   [Details](#details_10)
                    -   [How To Use This Criterion?](#how-to-use-this-criterion_10)
                    -   [Output And How To Interpret](#output-and-how-to-interpret_10)
                    
                -   [multi\_turn\_tool\_use\_quality\_v1](#multi_turn_tool_use_quality_v1)
                    
                    -   [When To Use This Criterion?](#when-to-use-this-criterion_11)
                    -   [Details](#details_11)
                    -   [How To Use This Criterion?](#how-to-use-this-criterion_11)
                    -   [Output And How To Interpret](#output-and-how-to-interpret_11)
                    
                
            -   [tool\_call\_count\_v1](#tool_call_count_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_12)
                -   [Details](#details_12)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_12)
                -   [Output And How To Interpret](#output-and-how-to-interpret_12)
                
            -   [inference\_call\_count\_v1](#inference_call_count_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_13)
                -   [Details](#details_13)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_13)
                -   [Output And How To Interpret](#output-and-how-to-interpret_13)
                
            -   [token\_usage\_v1](#token_usage_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_14)
                -   [Details](#details_14)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_14)
                -   [Output And How To Interpret](#output-and-how-to-interpret_14)
                
            -   [invocation\_duration\_v1](#invocation_duration_v1)
                
                -   [When To Use This Criterion?](#when-to-use-this-criterion_15)
                -   [Details](#details_15)
                -   [How To Use This Criterion?](#how-to-use-this-criterion_15)
                -   [Output And How To Interpret](#output-and-how-to-interpret_15)
                
            
        -   [User Simulation](../user-sim/)
        -   [Environment Simulation](../environment_simulation/)
        -   [Custom Metrics](../custom_metrics/)
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

-   [Efficiency criteria](#efficiency-criteria)
-   [tool\_trajectory\_avg\_score](#tool_trajectory_avg_score)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion)
    -   [Details](#details)
    -   [How To Use This Criterion?](#how-to-use-this-criterion)
    -   [Output And How To Interpret](#output-and-how-to-interpret)
    
-   [response\_match\_score](#response_match_score)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_1)
    -   [Details](#details_1)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_1)
    -   [Output And How To Interpret](#output-and-how-to-interpret_1)
    
-   [final\_response\_match\_v2](#final_response_match_v2)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_2)
    -   [Details](#details_2)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_2)
    -   [Output And How To Interpret](#output-and-how-to-interpret_2)
    
-   [rubric\_based\_final\_response\_quality\_v1](#rubric_based_final_response_quality_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_3)
    -   [Details](#details_3)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_3)
        
        -   [Notes On Rubrics](#notes-on-rubrics)
        
    -   [Output And How To Interpret](#output-and-how-to-interpret_3)
    
-   [rubric\_based\_tool\_use\_quality\_v1](#rubric_based_tool_use_quality_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_4)
    -   [Details](#details_4)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_4)
        
        -   [Notes On Rubrics](#notes-on-rubrics_1)
        
    -   [Output And How To Interpret](#output-and-how-to-interpret_4)
    
-   [rubric\_based\_multi\_turn\_trajectory\_quality\_v1](#rubric_based_multi_turn_trajectory_quality_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_5)
    -   [Details](#details_5)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_5)
        
        -   [Notes On Rubrics](#notes-on-rubrics_2)
        
    -   [Output And How To Interpret](#output-and-how-to-interpret_5)
    
-   [hallucinations\_v1](#hallucinations_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_6)
    -   [Details](#details_6)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_6)
    -   [Output And How To Interpret](#output-and-how-to-interpret_6)
    
-   [safety\_v1](#safety_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_7)
    -   [Details](#details_7)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_7)
    -   [Output And How To Interpret](#output-and-how-to-interpret_7)
    
-   [per\_turn\_user\_simulator\_quality\_v1](#per_turn_user_simulator_quality_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_8)
    -   [Details](#details_8)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_8)
    -   [Output And How To Interpret](#output-and-how-to-interpret_8)
    -   [multi\_turn\_task\_success\_v1](#multi_turn_task_success_v1)
        
        -   [When To Use This Criterion?](#when-to-use-this-criterion_9)
        -   [Details](#details_9)
        -   [How To Use This Criterion?](#how-to-use-this-criterion_9)
        -   [Output And How To Interpret](#output-and-how-to-interpret_9)
        
    -   [multi\_turn\_trajectory\_quality\_v1](#multi_turn_trajectory_quality_v1)
        
        -   [When To Use This Criterion?](#when-to-use-this-criterion_10)
        -   [Details](#details_10)
        -   [How To Use This Criterion?](#how-to-use-this-criterion_10)
        -   [Output And How To Interpret](#output-and-how-to-interpret_10)
        
    -   [multi\_turn\_tool\_use\_quality\_v1](#multi_turn_tool_use_quality_v1)
        
        -   [When To Use This Criterion?](#when-to-use-this-criterion_11)
        -   [Details](#details_11)
        -   [How To Use This Criterion?](#how-to-use-this-criterion_11)
        -   [Output And How To Interpret](#output-and-how-to-interpret_11)
        
    
-   [tool\_call\_count\_v1](#tool_call_count_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_12)
    -   [Details](#details_12)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_12)
    -   [Output And How To Interpret](#output-and-how-to-interpret_12)
    
-   [inference\_call\_count\_v1](#inference_call_count_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_13)
    -   [Details](#details_13)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_13)
    -   [Output And How To Interpret](#output-and-how-to-interpret_13)
    
-   [token\_usage\_v1](#token_usage_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_14)
    -   [Details](#details_14)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_14)
    -   [Output And How To Interpret](#output-and-how-to-interpret_14)
    
-   [invocation\_duration\_v1](#invocation_duration_v1)
    
    -   [When To Use This Criterion?](#when-to-use-this-criterion_15)
    -   [Details](#details_15)
    -   [How To Use This Criterion?](#how-to-use-this-criterion_15)
    -   [Output And How To Interpret](#output-and-how-to-interpret_15)
    

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Evaluation](../)

[](https://github.com/google/adk-docs/edit/main/docs/evaluate/criteria.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Evaluation Criteria[¶](#evaluation-criteria "Permanent link")

Supported in ADKPython

This page outlines the evaluation criteria provided by ADK to assess agent performance, including tool use trajectory, response quality, and safety.

Criterion

Description

Reference-Based

Requires Rubrics

LLM-as-a-Judge

Supports [User Simulation](../user-sim/)

`tool_trajectory_avg_score`

Exact match of tool call trajectory

Yes

No

No

No

`response_match_score`

ROUGE-1 similarity to reference response

Yes

No

No

No

`response_evaluation_score`

Vertex AI coherence score for the agent response

Yes

No

Yes

No

`final_response_match_v2`

LLM-judged semantic match to reference response

Yes

No

Yes

No

`rubric_based_final_response_quality_v1`

LLM-judged final response quality based on custom rubrics

No

Yes

Yes

Yes

`rubric_based_tool_use_quality_v1`

LLM-judged tool usage quality based on custom rubrics

No

Yes

Yes

Yes

`rubric_based_multi_turn_trajectory_quality_v1`

LLM-judged multi-turn trajectory quality based on custom rubrics

No

Yes

Yes

Yes

`hallucinations_v1`

LLM-judged groundedness of agent response against context

No

No

Yes

Yes

`safety_v1`

Safety/harmlessness of agent response

No

No

Yes

Yes

`per_turn_user_simulator_quality_v1`

LLM-judged user simulator quality

No

No

Yes

Yes

`multi_turn_task_success_v1`

Evaluates if agent achieves goal(s) of conversation

No

No

Yes

Yes

`multi_turn_trajectory_quality_v1`

Evaluates the overall trajectory of the conversation

No

No

Yes

Yes

`multi_turn_tool_use_quality_v1`

Evaluates function calls made during a conversation

No

No

Yes

Yes

## Efficiency criteria[¶](#efficiency-criteria "Permanent link")

The following four criteria measure how expensive an agent is to run. They differ from other criteria in a few ways. They are *informational* in that they report a value, but never pass or fail an eval case, and their status is always `INFORMATIONAL`. They are also *always on*, in that they are reported for every eval without appearing in `EvalConfig`, and cannot be turned off. There is nothing to configure on them, and a threshold set on one is rejected rather than ignored, so a config never carries a dead setting.

Criterion

What it reports

Unit

`tool_call_count_v1`

Number of tool calls the agent made

count

`inference_call_count_v1`

Number of model calls the agent made

count

`token_usage_v1`

Tokens consumed by the model in an invocation

tokens

`invocation_duration_v1`

Wall-clock time an invocation took

seconds

The four are documented individually below, after the quality criteria.

## tool\_trajectory\_avg\_score[¶](#tool_trajectory_avg_score "Permanent link")

This criterion compares the sequence of tools called by the agent against a list of expected calls and computes an average score based on one of the match types: `EXACT`, `IN_ORDER`, or `ANY_ORDER`.

#### When To Use This Criterion?[¶](#when-to-use-this-criterion "Permanent link")

This criterion is ideal for scenarios where agent correctness depends on tool calls. Depending on how strictly tool calls need to be followed, you can choose from one of three match types: `EXACT`, `IN_ORDER`, and `ANY_ORDER`.

This metric is particularly valuable for:

-   **Regression testing:** Ensuring that agent updates do not unintentionally alter tool call behavior for established test cases.
-   **Workflow validation:** Verifying that agents correctly follow predefined workflows that require specific API calls in a specific order.
-   **High-precision tasks:** Evaluating tasks where slight deviations in tool parameters or call order can lead to significantly different or incorrect outcomes.

Use `EXACT` match when you need to enforce a specific tool execution path and consider any deviation—whether in tool name, arguments, or order—as a failure.

Use `IN_ORDER` match when you want to ensure certain key tool calls occur in a specific order, but allow for other tool calls to happen in between. This option is useful in assuring if certain key actions or tool calls occur and in certain order, leaving some scope for other tools calls to happen as well.

Use `ANY_ORDER` match when you want to ensure certain key tool calls occur, but do not care about their order, and allow for other tool calls to happen in between. This criteria is helpful for cases where multiple tool calls about the same concept occur, like your agent issues 5 search queries. You don't really care the order in which the search queries are issued, till they occur.

#### Details[¶](#details "Permanent link")

For each invocation that is being evaluated, this criterion compares the list of tool calls produced by the agent against the list of expected tool calls using one of three match types. If the tool calls match based on the selected match type, a score of 1.0 is awarded for that invocation, otherwise the score is 0.0. The final value is the average of these scores across all invocations in the eval case.

The comparison can be done using one of following match types:

-   **`EXACT`**: Requires a perfect match between the actual and expected tool calls, with no extra or missing tool calls.
-   **`IN_ORDER`**: Requires all tool calls from the expected list to be present in the actual list, in the same order, but allows for other tool calls to appear in between.
-   **`ANY_ORDER`**: Requires all tool calls from the expected list to be present in the actual list, in any order, and allows for other tool calls to appear in between.

#### How To Use This Criterion?[¶](#how-to-use-this-criterion "Permanent link")

By default, `tool_trajectory_avg_score` uses `EXACT` match type. You can specify just a threshold for this criterion in `EvalConfig` under the `criteria` dictionary for `EXACT` match type. The value should be a float between 0.0 and 1.0, which represents the minimum acceptable score for the eval case to pass. If you expect tool trajectories to match exactly in all invocations, you should set the threshold to 1.0.

Example `EvalConfig` entry for `EXACT` match:

`[](#__codelineno-0-1){   [](#__codelineno-0-2)  "criteria": {    [](#__codelineno-0-3)    "tool_trajectory_avg_score": 1.0  [](#__codelineno-0-4)  } [](#__codelineno-0-5)}`

Or you could specify the `match_type` explicitly:

`[](#__codelineno-1-1){   [](#__codelineno-1-2)  "criteria": {    [](#__codelineno-1-3)    "tool_trajectory_avg_score": {      [](#__codelineno-1-4)      "threshold": 1.0,      [](#__codelineno-1-5)      "match_type": "EXACT"    [](#__codelineno-1-6)    }  [](#__codelineno-1-7)  } [](#__codelineno-1-8)}`

If you want to use `IN_ORDER` or `ANY_ORDER` match type, you can specify it via `match_type` field along with threshold.

Example `EvalConfig` entry for `IN_ORDER` match:

`[](#__codelineno-2-1){   [](#__codelineno-2-2)  "criteria": {    [](#__codelineno-2-3)    "tool_trajectory_avg_score": {      [](#__codelineno-2-4)      "threshold": 1.0,      [](#__codelineno-2-5)      "match_type": "IN_ORDER"    [](#__codelineno-2-6)    }  [](#__codelineno-2-7)  } [](#__codelineno-2-8)}`

Example `EvalConfig` entry for `ANY_ORDER` match:

`[](#__codelineno-3-1){   [](#__codelineno-3-2)  "criteria": {    [](#__codelineno-3-3)    "tool_trajectory_avg_score": {      [](#__codelineno-3-4)      "threshold": 1.0,      [](#__codelineno-3-5)      "match_type": "ANY_ORDER"    [](#__codelineno-3-6)    }  [](#__codelineno-3-7)  } [](#__codelineno-3-8)}`

#### Output And How To Interpret[¶](#output-and-how-to-interpret "Permanent link")

The output is a score between 0.0 and 1.0, where 1.0 indicates a perfect match between actual and expected tool trajectories for all invocations, and 0.0 indicates a complete mismatch for all invocations. Higher scores are better. A score below 1.0 means that for at least one invocation, the agent's tool call trajectory deviated from the expected one.

## response\_match\_score[¶](#response_match_score "Permanent link")

This criterion evaluates if agent's final response matches a golden/expected final response using Rouge-1.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_1 "Permanent link")

Use this criterion when you need a quantitative measure of how closely the agent's output matches the expected output in terms of content overlap.

### Details[¶](#details_1 "Permanent link")

ROUGE-1 specifically measures the overlap of unigrams (single words) between the system-generated text (candidate summary) and the a reference text. It essentially checks how many individual words from the reference text are present in the candidate text. To learn more, see details on [ROUGE-1](https://github.com/google-research/google-research/tree/master/rouge).

### How To Use This Criterion?[¶](#how-to-use-this-criterion_1 "Permanent link")

You can specify a threshold for this criterion in `EvalConfig` under the `criteria` dictionary. The value should be a float between 0.0 and 1.0, which represents the minimum acceptable score for the eval case to pass.

Example `EvalConfig` entry:

`[](#__codelineno-4-1){   [](#__codelineno-4-2)  "criteria": {    [](#__codelineno-4-3)    "response_match_score": 0.8  [](#__codelineno-4-4)  } [](#__codelineno-4-5)}`

### Output And How To Interpret[¶](#output-and-how-to-interpret_1 "Permanent link")

Value range for this criterion is \[0,1\], with values closer to 1 more desirable.

## final\_response\_match\_v2[¶](#final_response_match_v2 "Permanent link")

This criterion evaluates if the agent's final response matches a golden/expected final response using LLM as a judge.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_2 "Permanent link")

Use this criterion when you need to evaluate the correctness of an agent's final response against a reference, but require flexibility in how the answer is presented. It is suitable for cases where different phrasings or formats are acceptable, as long as the core meaning and information match the reference. This criterion is a good choice for evaluating question-answering, summarization, or other generative tasks where semantic equivalence is more important than exact lexical overlap, making it a more sophisticated alternative to `response_match_score`.

### Details[¶](#details_2 "Permanent link")

This criterion uses a Large Language Model (LLM) as a judge to determine if the agent's final response is semantically equivalent to the provided reference response. It is designed to be more flexible than lexical matching metrics (like `response_match_score`), as it focuses on whether the agent's response contains the correct information, while tolerating differences in formatting, phrasing, or the inclusion of additional correct details.

For each invocation, the criterion prompts a judge LLM to rate the agent's response as "valid" or "invalid" compared to the reference. This is repeated multiple times for robustness (configurable via `num_samples`), and a majority vote determines if the invocation receives a score of 1.0 (valid) or 0.0 (invalid). The final criterion score is the fraction of invocations deemed valid across the entire eval case.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_2 "Permanent link")

This criterion uses `LlmAsAJudgeCriterion`, allowing you to configure the evaluation threshold, the judge model, and the number of samples per invocation.

Example `EvalConfig` entry:

`[](#__codelineno-5-1){   [](#__codelineno-5-2)  "criteria": {    [](#__codelineno-5-3)    "final_response_match_v2": {      [](#__codelineno-5-4)      "threshold": 0.8,      [](#__codelineno-5-5)      "judge_model_options": {        [](#__codelineno-5-6)        "judge_model": "gemini-flash-latest",        [](#__codelineno-5-7)        "num_samples": 5      [](#__codelineno-5-8)      }    [](#__codelineno-5-9)    }  [](#__codelineno-5-10)  } [](#__codelineno-5-11)}`

### Output And How To Interpret[¶](#output-and-how-to-interpret_2 "Permanent link")

The criterion returns a score between 0.0 and 1.0. A score of 1.0 means the LLM judge considered the agent's final response to be valid for all invocations, while a score closer to 0.0 indicates that many responses were judged as invalid when compared to the reference responses. Higher values are better.

## rubric\_based\_final\_response\_quality\_v1[¶](#rubric_based_final_response_quality_v1 "Permanent link")

This criterion assesses the quality of an agent's final response against a user-defined set of rubrics using LLM as a judge.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_3 "Permanent link")

Use this criterion when you need to evaluate aspects of response quality that go beyond simple correctness or semantic equivalence with a reference. It is ideal for assessing nuanced attributes like tone, style, helpfulness, or adherence to specific conversational guidelines defined in your rubrics. This criterion is particularly useful when no single reference response exists, or when quality depends on multiple subjective factors.

### Details[¶](#details_3 "Permanent link")

This criterion provides a flexible way to evaluate response quality based on specific criteria that you define as rubrics. For example, you could define rubrics to check if a response is concise, if it correctly infers user intent, or if it avoids jargon.

The criterion uses an LLM-as-a-judge to evaluate the agent's final response against each rubric, producing a `yes` (1.0) or `no` (0.0) verdict for each. Like other LLM-based metrics, it samples the judge model multiple times per invocation and uses a majority vote to determine the score for each rubric in that invocation. The overall score for an invocation is the average of its rubric scores. The final criterion score for the eval case is the average of these overall scores across all invocations.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_3 "Permanent link")

This criterion uses `RubricsBasedCriterion`, which requires a list of rubrics to be provided in the `EvalConfig`. Each rubric should be defined with a unique ID and its content.

Example `EvalConfig` entry:

`[](#__codelineno-6-1){   [](#__codelineno-6-2)  "criteria": {    [](#__codelineno-6-3)    "rubric_based_final_response_quality_v1": {      [](#__codelineno-6-4)      "threshold": 0.8,      [](#__codelineno-6-5)      "judge_model_options": {        [](#__codelineno-6-6)        "judge_model": "gemini-flash-latest",        [](#__codelineno-6-7)        "num_samples": 5      [](#__codelineno-6-8)      },      [](#__codelineno-6-9)      "rubrics": [        [](#__codelineno-6-10)        {          [](#__codelineno-6-11)          "rubric_id": "conciseness",          [](#__codelineno-6-12)          "rubric_content": {            [](#__codelineno-6-13)            "text_property": "The agent's response is direct and to the point."          [](#__codelineno-6-14)          }        [](#__codelineno-6-15)        },        [](#__codelineno-6-16)        {          [](#__codelineno-6-17)          "rubric_id": "intent_inference",          [](#__codelineno-6-18)          "rubric_content": {            [](#__codelineno-6-19)            "text_property": "The agent's response accurately infers the user's underlying goal from ambiguous queries."          [](#__codelineno-6-20)          }        [](#__codelineno-6-21)        }      [](#__codelineno-6-22)      ]    [](#__codelineno-6-23)    }  [](#__codelineno-6-24)  } [](#__codelineno-6-25)}`

Rubrics can also be attached per-case via `EvalCase.rubrics`. Unlike criterion-level rubrics, these are filtered by `type`. Only entries whose `type` matches this criterion's expected value (`"FINAL_RESPONSE_QUALITY"`) are merged into the effective rubric set:

`[](#__codelineno-7-1){   [](#__codelineno-7-2)  "eval_id": "case_01",  [](#__codelineno-7-3)  "conversation": [ ... ],  [](#__codelineno-7-4)  "rubrics": [    [](#__codelineno-7-5)    {      [](#__codelineno-7-6)      "rubric_id": "no_speculative_pricing",      [](#__codelineno-7-7)      "rubric_content": {        [](#__codelineno-7-8)        "text_property": "The agent's final response does not fabricate prices for products it did not look up."      [](#__codelineno-7-9)      },      [](#__codelineno-7-10)      "type": "FINAL_RESPONSE_QUALITY"    [](#__codelineno-7-11)    }  [](#__codelineno-7-12)  ] [](#__codelineno-7-13)}`

The merged rubric list passed to the judge is the union of the criterion-level list above and any type-matching entries from `EvalCase.rubrics`.

#### Notes On Rubrics[¶](#notes-on-rubrics "Permanent link")

-   The effective rubric list **must be non-empty**, otherwise `RubricBasedEvaluator` raises a `ValueError` at evaluation time. The criterion-level list on `EvalConfig.criteria["rubric_based_final_response_quality_v1"].rubrics` may be left empty as long as the eval cases supply type-matching rubrics.
-   Rubrics on `EvalCase.rubrics` are *additive* on top of the criterion-level list, not a replacement. The effective rubric set passed to the judge is the union of both.
-   Rubrics supplied per-case via `EvalCase.rubrics` are filtered by `type`: only those whose `type` is `"FINAL_RESPONSE_QUALITY"` are merged in. Criterion-level rubrics in `EvalConfig` are **not** filtered by `type`.

### Output And How To Interpret[¶](#output-and-how-to-interpret_3 "Permanent link")

The criterion outputs an overall score between 0.0 and 1.0, where 1.0 indicates that the agent's responses satisfied all rubrics across all invocations, and 0.0 indicates that no rubrics were satisfied. The results also include detailed per-rubric scores for each invocation. Higher values are better.

## rubric\_based\_tool\_use\_quality\_v1[¶](#rubric_based_tool_use_quality_v1 "Permanent link")

This criterion assesses the quality of an agent's tool usage against a user-defined set of rubrics using LLM as a judge.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_4 "Permanent link")

Use this criterion when you need to evaluate *how* an agent uses tools, rather than just *if* the final response is correct. It is ideal for assessing whether the agent selected the right tool, used the correct parameters, or followed a specific sequence of tool calls. This is useful for validating agent reasoning processes, debugging tool-use errors, and ensuring adherence to prescribed workflows, especially in cases where multiple tool-use paths could lead to a similar final answer but only one path is considered correct.

### Details[¶](#details_4 "Permanent link")

This criterion provides a flexible way to evaluate tool usage based on specific rules that you define as rubrics. For example, you could define rubrics to check if a specific tool was called, if its parameters were correct, or if tools were called in a particular order.

The criterion uses an LLM-as-a-judge to evaluate the agent's tool calls and responses against each rubric, producing a `yes` (1.0) or `no` (0.0) verdict for each. Like other LLM-based metrics, it samples the judge model multiple times per invocation and uses a majority vote to determine the score for each rubric in that invocation. The overall score for an invocation is the average of its rubric scores. The final criterion score for the eval case is the average of these overall scores across all invocations.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_4 "Permanent link")

This criterion uses `RubricsBasedCriterion`, which requires a list of rubrics to be provided in the `EvalConfig`. Each rubric should be defined with a unique ID and its content, describing a specific aspect of tool use to evaluate.

Example `EvalConfig` entry:

`[](#__codelineno-8-1){   [](#__codelineno-8-2)  "criteria": {    [](#__codelineno-8-3)    "rubric_based_tool_use_quality_v1": {      [](#__codelineno-8-4)      "threshold": 1.0,      [](#__codelineno-8-5)      "judge_model_options": {        [](#__codelineno-8-6)        "judge_model": "gemini-flash-latest",        [](#__codelineno-8-7)        "num_samples": 5      [](#__codelineno-8-8)      },      [](#__codelineno-8-9)      "rubrics": [        [](#__codelineno-8-10)        {          [](#__codelineno-8-11)          "rubric_id": "geocoding_called",          [](#__codelineno-8-12)          "rubric_content": {            [](#__codelineno-8-13)            "text_property": "The agent calls the GeoCoding tool before calling the GetWeather tool."          [](#__codelineno-8-14)          }        [](#__codelineno-8-15)        },        [](#__codelineno-8-16)        {          [](#__codelineno-8-17)          "rubric_id": "getweather_called",          [](#__codelineno-8-18)          "rubric_content": {            [](#__codelineno-8-19)            "text_property": "The agent calls the GetWeather tool with coordinates derived from the user's location."          [](#__codelineno-8-20)          }        [](#__codelineno-8-21)        }      [](#__codelineno-8-22)      ]    [](#__codelineno-8-23)    }  [](#__codelineno-8-24)  } [](#__codelineno-8-25)}`

Rubrics can also be attached per-case via `EvalCase.rubrics`. Unlike criterion-level rubrics, these are filtered by `type`. Only entries whose `type` matches this criterion's expected value (`"TOOL_USE_QUALITY"`) are merged into the effective rubric set:

`[](#__codelineno-9-1){   [](#__codelineno-9-2)  "eval_id": "case_01",  [](#__codelineno-9-3)  "conversation": [ ... ],  [](#__codelineno-9-4)  "rubrics": [    [](#__codelineno-9-5)    {      [](#__codelineno-9-6)      "rubric_id": "no_pricing_tool_when_not_asked",      [](#__codelineno-9-7)      "rubric_content": {        [](#__codelineno-9-8)        "text_property": "The agent does not call the pricing tool in this case, since the user only asked about availability."      [](#__codelineno-9-9)      },      [](#__codelineno-9-10)      "type": "TOOL_USE_QUALITY"    [](#__codelineno-9-11)    }  [](#__codelineno-9-12)  ] [](#__codelineno-9-13)}`

The merged rubric list passed to the judge is the union of the criterion-level list above and any type-matching entries from `EvalCase.rubrics`.

#### Notes On Rubrics[¶](#notes-on-rubrics_1 "Permanent link")

-   The effective rubric list **must be non-empty**, otherwise `RubricBasedEvaluator` raises a `ValueError` at evaluation time. The criterion-level list on `EvalConfig.criteria["rubric_based_tool_use_quality_v1"].rubrics` may be left empty as long as the eval cases supply type-matching rubrics.
-   Rubrics on `EvalCase.rubrics` are *additive* on top of the criterion-level list, not a replacement. The effective rubric set passed to the judge is the union of both.
-   Rubrics supplied per-case via `EvalCase.rubrics` are filtered by `type`: only those whose `type` is `"TOOL_USE_QUALITY"` are merged in. Criterion-level rubrics in `EvalConfig` are **not** filtered by `type`.

### Output And How To Interpret[¶](#output-and-how-to-interpret_4 "Permanent link")

The criterion outputs an overall score between 0.0 and 1.0, where 1.0 indicates that the agent's tool usage satisfied all rubrics across all invocations, and 0.0 indicates that no rubrics were satisfied. The results also include detailed per-rubric scores for each invocation. Higher values are better.

## rubric\_based\_multi\_turn\_trajectory\_quality\_v1[¶](#rubric_based_multi_turn_trajectory_quality_v1 "Permanent link")

This criterion assesses the quality of an agent's behavior across an entire multi-turn conversation against a user-defined set of rubrics using an LLM as a judge.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_5 "Permanent link")

Use this criterion when you need to evaluate aspects of an agent's *trajectory* across a multi-turn conversation — for example how the agent corrects course after late disclosure of context, balances helpfulness with safety, or follows domain-specific conversational guidelines — rather than only its single-turn final response. Unlike `multi_turn_trajectory_quality_v1`, which delegates to the Agent Platform Eval SDK and assesses trajectory along generic axes, this criterion lets you specify custom yes/no rubrics tailored to your domain.

### Details[¶](#details_5 "Permanent link")

This criterion accumulates the full dialogue history across the conversation (user turns, agent turns, and tool interactions) and performs a single LLM-based evaluation against each rubric you provide. For each rubric, the judge produces a `yes` (1.0) or `no` (0.0) verdict that reflects the agent's cumulative behavior across all turns. The first N-1 turns of the eval case are marked `NOT_EVALUATED`, and the final turn carries the aggregate score. Like other LLM-based metrics, the judge is sampled multiple times per invocation and aggregated using a majority vote.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_5 "Permanent link")

This criterion uses `RubricsBasedCriterion`. Provide your rubrics on the `EvalConfig` entry; rubrics carried on individual `EvalCase` entries are added on top of the criterion-level list and filtered by `type` (see notes below).

Example `EvalConfig` entry:

`[](#__codelineno-10-1){   [](#__codelineno-10-2)  "criteria": {    [](#__codelineno-10-3)    "rubric_based_multi_turn_trajectory_quality_v1": {      [](#__codelineno-10-4)      "threshold": 0.7,      [](#__codelineno-10-5)      "judge_model_options": {        [](#__codelineno-10-6)        "judge_model": "gemini-flash-latest",        [](#__codelineno-10-7)        "num_samples": 5      [](#__codelineno-10-8)      },      [](#__codelineno-10-9)      "rubrics": [        [](#__codelineno-10-10)        {          [](#__codelineno-10-11)          "rubric_id": "elicits_individual_factors",          [](#__codelineno-10-12)          "rubric_content": {            [](#__codelineno-10-13)            "text_property": "The agent asks about individual factors (age, prior conditions, current medication) before giving any individualized advice."          [](#__codelineno-10-14)          }        [](#__codelineno-10-15)        },        [](#__codelineno-10-16)        {          [](#__codelineno-10-17)          "rubric_id": "corrects_after_late_disclosure",          [](#__codelineno-10-18)          "rubric_content": {            [](#__codelineno-10-19)            "text_property": "When the user discloses risk-relevant information late in the conversation, the agent revisits and corrects earlier advice rather than leaving it standing."          [](#__codelineno-10-20)          }        [](#__codelineno-10-21)        }      [](#__codelineno-10-22)      ]    [](#__codelineno-10-23)    }  [](#__codelineno-10-24)  } [](#__codelineno-10-25)}`

Rubrics can also be attached per-case via `EvalCase.rubrics`. Unlike criterion-level rubrics, these are filtered by `type`. Only entries whose `type` matches this criterion's expected value (`"TRAJECTORY_QUALITY"`) are merged into the effective rubric set:

`[](#__codelineno-11-1){   [](#__codelineno-11-2)  "eval_id": "case_01",  [](#__codelineno-11-3)  "conversation": [ ... ],  [](#__codelineno-11-4)  "rubrics": [    [](#__codelineno-11-5)    {      [](#__codelineno-11-6)      "rubric_id": "checks_interactions_before_recommending",      [](#__codelineno-11-7)      "rubric_content": {        [](#__codelineno-11-8)        "text_property": "Given this case's disclosed medication history, the agent checks for drug interactions before finalizing any recommendation."      [](#__codelineno-11-9)      },      [](#__codelineno-11-10)      "type": "TRAJECTORY_QUALITY"    [](#__codelineno-11-11)    }  [](#__codelineno-11-12)  ] [](#__codelineno-11-13)}`

The merged rubric list passed to the judge is the union of the criterion-level list above and any type-matching entries from `EvalCase.rubrics`.

#### Notes On Rubrics[¶](#notes-on-rubrics_2 "Permanent link")

-   The effective rubric list **must be non-empty**, otherwise `RubricBasedEvaluator` raises a `ValueError` at evaluation time. The criterion-level list on `EvalConfig.criteria["rubric_based_multi_turn_trajectory_quality_v1"].rubrics` may be left empty as long as the eval cases supply type-matching rubrics.
-   Rubrics on `EvalCase.rubrics` are *additive* on top of the criterion-level list, not a replacement. The effective rubric set passed to the judge is the union of both.
-   Rubrics supplied per-case via `EvalCase.rubrics` are filtered by `type`: only those whose `type` is `"TRAJECTORY_QUALITY"` are merged in. Criterion-level rubrics in `EvalConfig` are **not** filtered by `type`.

### Output And How To Interpret[¶](#output-and-how-to-interpret_5 "Permanent link")

The criterion outputs an overall score between 0.0 and 1.0, where 1.0 indicates that the agent's trajectory satisfied all rubrics, and 0.0 indicates that no rubrics were satisfied. The results also include detailed per-rubric scores. Higher values are better.

## hallucinations\_v1[¶](#hallucinations_v1 "Permanent link")

This criterion assesses whether a model response contains any false, contradictory, or unsupported claims.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_6 "Permanent link")

Use this criterion to ensure the agent's response is grounded in the provided context (e.g., tool outputs, user query, instructions) and does not contain hallucinations.

### Details[¶](#details_6 "Permanent link")

This criterion assesses whether a model response contains any false, contradictory, or unsupported claims based on context that includes developer instructions, user prompt, tool definitions, and tool invocations and their results. It uses LLM-as-a-judge and follows a two-step process:

1.  **Segmenter**: Segments the agent response into individual sentences.
2.  **Sentence Validator**: Evaluates each segmented sentence against the provided context for grounding. Each sentence is labeled as `supported`, `unsupported`, `contradictory`, `disputed` or `not_applicable`.

The metric computes an Accuracy Score: the percentage of sentences that are `supported` or `not_applicable`. By default, only the final response is evaluated. If `evaluate_intermediate_nl_responses` is set to true in the criterion, intermediate natural language responses from agents are also evaluated.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_6 "Permanent link")

This criterion uses `HallucinationsCriterion`, allowing you to configure the evaluation threshold, the judge model, the number of samples per invocation and whether to evaluate intermediate natural language responses.

Example `EvalConfig` entry:

`[](#__codelineno-12-1){   [](#__codelineno-12-2)  "criteria": {    [](#__codelineno-12-3)    "hallucinations_v1": {      [](#__codelineno-12-4)      "threshold": 0.8,      [](#__codelineno-12-5)      "judge_model_options": {        [](#__codelineno-12-6)        "judge_model": "gemini-flash-latest"      [](#__codelineno-12-7)      },      [](#__codelineno-12-8)      "evaluate_intermediate_nl_responses": true    [](#__codelineno-12-9)    }  [](#__codelineno-12-10)  } [](#__codelineno-12-11)}`

### Output And How To Interpret[¶](#output-and-how-to-interpret_6 "Permanent link")

The criterion returns a score between 0.0 and 1.0. A score of 1.0 means all sentences in agent's response are grounded in the context, while a score closer to 0.0 indicates that many sentences are false, contradictory, or unsupported. Higher values are better.

## safety\_v1[¶](#safety_v1 "Permanent link")

This criterion evaluates the safety (harmlessness) of an Agent's Response.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_7 "Permanent link")

This criterion should be used when you need to ensure that agent responses comply with safety guidelines and do not produce harmful or inappropriate content. It is essential for user-facing applications or any system where response safety is a priority.

### Details[¶](#details_7 "Permanent link")

This criterion assesses whether the agent's response contains any harmful content, such as hate speech, harassment, or dangerous information. Unlike other metrics implemented natively within ADK, `safety_v1` delegates the evaluation to the Agent Platform Eval SDK.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_7 "Permanent link")

Using this criterion requires a Google Cloud Project. You must have `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` environment variables set, typically in an `.env` file in your agent's directory, for the Agent Platform SDK to function correctly. For more information on connecting to Google Cloud from ADK agents, see [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/).

You can specify a threshold for this criterion in `EvalConfig` under the `criteria` dictionary. The value should be a float between 0.0 and 1.0, representing the minimum safety score for a response to be considered passing.

Example `EvalConfig` entry:

`[](#__codelineno-13-1){   [](#__codelineno-13-2)  "criteria": {    [](#__codelineno-13-3)    "safety_v1": 0.8  [](#__codelineno-13-4)  } [](#__codelineno-13-5)}`

### Output And How To Interpret[¶](#output-and-how-to-interpret_7 "Permanent link")

The criterion returns a score between 0.0 and 1.0. Scores closer to 1.0 indicate that the response is safe, while scores closer to 0.0 indicate potential safety issues.

## per\_turn\_user\_simulator\_quality\_v1[¶](#per_turn_user_simulator_quality_v1 "Permanent link")

This criterion evaluates whether a user simulator is faithful to a conversation plan and persona.

#### When To Use This Criterion?[¶](#when-to-use-this-criterion_8 "Permanent link")

Use this criterion when you need to evaluate a user simulator in a multi-turn conversation. It is designed to assess whether the simulator follows the conversation plan and persona defined in the `ConversationScenario`.

#### Details[¶](#details_8 "Permanent link")

This criterion determines whether the a user simulator follows a defined `ConversationScenario` in a multi-turn conversation.

For the first turn, this criterion checks if user simulator response matches the `starting_prompt` in the `ConversationScenario`. For subsequent turns, it uses LLM-as-a-judge to evaluate if the user response follows the `conversation_plan` and `user_persona` in the `ConversationScenario`. To check adherence to the persona, we use the `violation_rubrics` specified in the `UserPersona`.

#### How To Use This Criterion?[¶](#how-to-use-this-criterion_8 "Permanent link")

This criterion allows you to configure the evaluation threshold, the judge model and the number of samples per invocation. The criterion also lets you specify a `stop_signal`, which signals the LLM judge that the conversation was completed. For best results, use the stop signal in `LlmBackedUserSimulator`.

Example `EvalConfig` entry:

`[](#__codelineno-14-1){   [](#__codelineno-14-2)  "criteria": {    [](#__codelineno-14-3)    "per_turn_user_simulator_quality_v1": {      [](#__codelineno-14-4)      "threshold": 1.0,      [](#__codelineno-14-5)      "judge_model_options": {        [](#__codelineno-14-6)        "judge_model": "gemini-flash-latest",        [](#__codelineno-14-7)        "num_samples": 5      [](#__codelineno-14-8)      },      [](#__codelineno-14-9)      "stop_signal": "</finished>"    [](#__codelineno-14-10)    }  [](#__codelineno-14-11)  } [](#__codelineno-14-12)}`

#### Output And How To Interpret[¶](#output-and-how-to-interpret_8 "Permanent link")

The criterion returns a score between 0.0 and 1.0, representing the fraction of turns in which the user simulator's response was judged to be valid according to the conversation scenario. A score of 1.0 indicates that the simulator behaved as expected in all turns, while a score closer to 0.0 indicates that the simulator deviated in many turns. Higher values are better.

### multi\_turn\_task\_success\_v1[¶](#multi_turn_task_success_v1 "Permanent link")

This criterion evaluates if the agent achieved the goal or goals of the conversation.

#### When To Use This Criterion?[¶](#when-to-use-this-criterion_9 "Permanent link")

Use this criterion when you want to measure the overall success of a multi-turn conversation in achieving its intended objectives. It focuses on the final outcome rather than the specific steps taken to reach it.

#### Details[¶](#details_9 "Permanent link")

This criterion takes into account all the turns of the multi-turn conversation to determine if the task was successfully completed. It delegates the evaluation to the Agent Platform Eval SDK.

#### How To Use This Criterion?[¶](#how-to-use-this-criterion_9 "Permanent link")

Using this criterion requires a Google Cloud Project. You must have `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` environment variables set, typically in an `.env` file in your agent's directory, for the Agent Platform SDK to function correctly. For more information on connecting to Google Cloud from ADK agents, see [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/).

You can specify a threshold for this criterion in `EvalConfig` under the `criteria` dictionary. The value should be a float between 0.0 and 1.0, representing the minimum score for the conversation to be considered a success.

Example `EvalConfig` entry:

`[](#__codelineno-15-1){   [](#__codelineno-15-2)  "criteria": {    [](#__codelineno-15-3)    "multi_turn_task_success_v1": 0.8  [](#__codelineno-15-4)  } [](#__codelineno-15-5)}`

#### Output And How To Interpret[¶](#output-and-how-to-interpret_9 "Permanent link")

The criterion returns a score between 0.0 and 1.0. Scores closer to 1.0 indicate that the task was successfully achieved, while scores closer to 0.0 indicate failure to achieve the goals.

### multi\_turn\_trajectory\_quality\_v1[¶](#multi_turn_trajectory_quality_v1 "Permanent link")

This criterion evaluates the overall trajectory of the conversation.

#### When To Use This Criterion?[¶](#when-to-use-this-criterion_10 "Permanent link")

This metric is different from `multi_turn_task_success_v1`, in the sense that task success only concerns itself with whether the goal was achieved or not. How that was achieved is not its concern. This metric, on the other hand, evaluates the path or trajectory that the agent took to achieve the goal. Use this criterion when you care about the efficiency, effectiveness, and logic of the steps taken during the conversation.

#### Details[¶](#details_10 "Permanent link")

This criterion is a reference-free metric that assesses the quality of the interaction trajectory across multiple turns. It delegates the evaluation to the Agent Platform Eval SDK.

#### How To Use This Criterion?[¶](#how-to-use-this-criterion_10 "Permanent link")

Using this criterion requires a Google Cloud Project. You must have `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` environment variables set, typically in an `.env` file in your agent's directory, for the Agent Platform SDK to function correctly. For more information on connecting to Google Cloud from ADK agents, see [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/).

You can specify a threshold for this criterion in `EvalConfig` under the `criteria` dictionary. The value should be a float between 0.0 and 1.0, representing the minimum trajectory quality score to be considered passing.

Example `EvalConfig` entry:

`[](#__codelineno-16-1){   [](#__codelineno-16-2)  "criteria": {    [](#__codelineno-16-3)    "multi_turn_trajectory_quality_v1": 0.8  [](#__codelineno-16-4)  } [](#__codelineno-16-5)}`

#### Output And How To Interpret[¶](#output-and-how-to-interpret_10 "Permanent link")

The criterion returns a score between 0.0 and 1.0. Scores closer to 1.0 indicate a high-quality trajectory, while scores closer to 0.0 indicate a poor or inefficient trajectory.

### multi\_turn\_tool\_use\_quality\_v1[¶](#multi_turn_tool_use_quality_v1 "Permanent link")

This criterion evaluates the function calls made during a multi-turn conversation.

#### When To Use This Criterion?[¶](#when-to-use-this-criterion_11 "Permanent link")

Use this criterion to specifically assess the quality, relevance, and correctness of tool or function calls made by the agent across multiple turns of a conversation. It's useful for debugging agent capabilities such as whether the agent knows when and how to select proper tools in complex, multi-step workflows.

#### Details[¶](#details_11 "Permanent link")

This metric is reference-free and evaluates the function calling behavior without requiring a golden trajectory. It delegates the evaluation to the Vertex AI General AI Eval SDK.

#### How To Use This Criterion?[¶](#how-to-use-this-criterion_11 "Permanent link")

Using this criterion requires a Google Cloud Project. You must have `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` environment variables set, typically in an `.env` file in your agent's directory, for the Agent Platform SDK to function correctly. For more information on connecting to Google Cloud from ADK agents, see [Connect to Google Cloud and Agent Platform](/get-started/google-cloud/).

You can specify a threshold for this criterion in `EvalConfig` under the `criteria` dictionary. The value should be a float between 0.0 and 1.0, representing the minimum tool use quality score to be considered passing.

Example `EvalConfig` entry:

`[](#__codelineno-17-1){   [](#__codelineno-17-2)  "criteria": {    [](#__codelineno-17-3)    "multi_turn_tool_use_quality_v1": 0.8  [](#__codelineno-17-4)  } [](#__codelineno-17-5)}`

#### Output And How To Interpret[¶](#output-and-how-to-interpret_11 "Permanent link")

The criterion returns a score between 0.0 and 1.0. Scores closer to 1.0 indicate excellent tool usage throughout the conversation, while scores closer to 0.0 indicate poor tool usage.

## tool\_call\_count\_v1[¶](#tool_call_count_v1 "Permanent link")

This criterion reports the number of tool (function) calls the agent made.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_12 "Permanent link")

You do not need to enable it. Use it to see whether a change made the agent call more tools than before -- for example after editing an instruction or swapping a model.

### Details[¶](#details_12 "Permanent link")

The count is derived per invocation from the agent's tool call trajectory. The value reported for the eval case is the average across its invocations, and the per-invocation counts are reported alongside it.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_12 "Permanent link")

Nothing to configure. Supplying a threshold is an error rather than a no-op.

### Output And How To Interpret[¶](#output-and-how-to-interpret_12 "Permanent link")

A non-negative number; lower means fewer tool calls. It never passes or fails, so it does not affect the eval case's status.

## inference\_call\_count\_v1[¶](#inference_call_count_v1 "Permanent link")

This criterion reports the number of inference (model) calls the agent made.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_13 "Permanent link")

You do not need to enable it. Use it as a proxy for how many reasoning steps or retries a turn took; a jump usually means the agent is looping or re-planning. Read alongside `token_usage_v1` it separates the two ways a turn gets expensive: more calls, or a larger context per call.

### Details[¶](#details_13 "Permanent link")

Every model response recorded for an invocation counts as one call, including the one that produced the final response. The value reported for the eval case is the average across its invocations.

An eval invocation spans a whole turn, and every sub-agent that runs during that turn shares its invocation id, so the count covers the whole turn rather than any one agent.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_13 "Permanent link")

Nothing to configure. Supplying a threshold is an error rather than a no-op.

### Output And How To Interpret[¶](#output-and-how-to-interpret_13 "Permanent link")

A non-negative number; lower means fewer model calls. Reports no value (n/a) when the run did not capture model-call data.

## token\_usage\_v1[¶](#token_usage_v1 "Permanent link")

This criterion reports the tokens consumed by the model across an invocation.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_14 "Permanent link")

You do not need to enable it. Use it to catch a change that leaves quality flat while moving token spend -- a longer instruction, a model swap, or a thinking budget change.

### Details[¶](#details_14 "Permanent link")

The token counts reported by each model call are summed per invocation, and the value reported for the eval case is the average across its invocations.

The score is the total. Every token count is reported alongside it as a breakdown, and the counts nest, each containing the ones under it:

`[](#__codelineno-18-1)total_tokens   [](#__codelineno-18-2)  input_tokens    [](#__codelineno-18-3)    prompt_tokens      [](#__codelineno-18-4)      cached_tokens    [](#__codelineno-18-5)    tool_use_tokens  [](#__codelineno-18-6)  output_tokens    [](#__codelineno-18-7)    candidates_tokens    [](#__codelineno-18-8)    reasoning_tokens`

The `total_tokens` value is derived from `input_tokens` plus `output_tokens` rather than taken from the backend's own reported total, so it always agrees with the breakdown.

A count reads n/a, never 0, when the backend did not report it.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_14 "Permanent link")

Nothing to configure. Supplying a threshold is an error rather than a no-op. To track one count in particular -- reasoning tokens, say -- read it from the breakdown in the CLI output or from `token_usage_details` in the result JSON.

### Output And How To Interpret[¶](#output-and-how-to-interpret_14 "Permanent link")

A non-negative number of tokens; lower means fewer tokens used. Reports no value (n/a) when the model backend does not report usage metadata -- Vertex AI and AI Studio Gemini report it; support varies across other backends.

## invocation\_duration\_v1[¶](#invocation_duration_v1 "Permanent link")

This criterion reports the wall-clock seconds an invocation took.

### When To Use This Criterion?[¶](#when-to-use-this-criterion_15 "Permanent link")

You do not need to enable it. Use it to see how long a turn takes end to end, keeping in mind that it is a single measurement and moves with model-server load -- compare distributions across runs rather than two individual numbers.

### Details[¶](#details_15 "Permanent link")

The duration is measured while the agent runs, from the user message going in to the last event coming out, so it includes the final model call, tool execution and post-processing. The user simulator's own turnaround is excluded: that is the eval harness's cost, not the agent's. Values are rounded to milliseconds. The value reported for the eval case is the average across its invocations.

It is measured rather than derived from event timestamps, which cannot give the answer: an event is stamped when it is constructed, which for a model call is before the request is sent, so a span between such stamps omits the last call entirely.

An eval invocation spans a whole turn, and every sub-agent that runs during that turn shares its invocation id, so the duration covers the whole turn rather than any one agent.

### How To Use This Criterion?[¶](#how-to-use-this-criterion_15 "Permanent link")

Nothing to configure. Supplying a threshold is an error rather than a no-op.

### Output And How To Interpret[¶](#output-and-how-to-interpret_15 "Permanent link")

A duration in seconds; lower is faster. Reports no value (n/a) when the eval did not perform the inference itself, for example when the invocations were read back from a stored session.

To judge whether a change actually made the agent slower, read `inference_call_count_v1` and the token counts alongside it: those are deterministic for a given input and model, so a real change moves them, while wall-clock time moves on its own.

Back to top