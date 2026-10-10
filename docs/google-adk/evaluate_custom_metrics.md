---
title: "Custom Metrics - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/evaluate/custom_metrics/
date: 2026-10-10T19:16:31.058Z
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
        
        -   [Criteria](../criteria/)
        -   [User Simulation](../user-sim/)
        -   [Environment Simulation](../environment_simulation/)
        -    Custom Metrics [Custom Metrics](./)
            
            Table of contents
            
            -   [Custom Metrics for Agent Evaluation](#custom-metrics-for-agent-evaluation)
            -   [Define a Custom Metric](#define-a-custom-metric)
                
                -   [Example](#example)
                    
                    -   [Async Metric](#async-metric)
                    
                
            -   [Use a Custom Metric](#use-a-custom-metric)
                
                -   [Example EvalConfig](#example-evalconfig)
                -   [Providing Metric Information](#providing-metric-information)
                
            
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

-   [Custom Metrics for Agent Evaluation](#custom-metrics-for-agent-evaluation)
-   [Define a Custom Metric](#define-a-custom-metric)
    
    -   [Example](#example)
        
        -   [Async Metric](#async-metric)
        
    
-   [Use a Custom Metric](#use-a-custom-metric)
    
    -   [Example EvalConfig](#example-evalconfig)
    -   [Providing Metric Information](#providing-metric-information)
    

1.  [Home](../..)
2.  [Run Agents](../../runtime/)
3.  [Evaluation](../)

[](https://github.com/google/adk-docs/edit/main/docs/evaluate/custom_metrics.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Custom Metrics

## Custom Metrics for Agent Evaluation[¶](#custom-metrics-for-agent-evaluation "Permanent link")

Supported in ADKPython v1.18.0

If you require specialized metrics tailored to your specific use cases or domains that are not covered by built-in options, you can define your own custom metrics.

## Define a Custom Metric[¶](#define-a-custom-metric "Permanent link")

A custom metric is a Python function that evaluates an agent's performance on a given evaluation case and returns an [`EvaluationResult`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/evaluator.py). The function receives the [`EvalMetric`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_metrics.py), the list of [`Invocation`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_case.py) objects produced by the agent during the evaluation run, and optionally, a list of expected invocations or a [`ConversationScenario`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_case.py) as defined in the eval case.

Each `Invocation` object represents a single turn of interaction between the user and the agent, and contains information such as tool trajectory, intermediate responses, and final response for that turn.

Your custom metric function must have the following signature:

`[](#__codelineno-0-1)from typing import Optional [](#__codelineno-0-2)from google.adk.evaluation.eval_case import Invocation [](#__codelineno-0-3)from google.adk.evaluation.eval_metrics import EvalMetric [](#__codelineno-0-4)from google.adk.evaluation.conversation_scenarios import ConversationScenario [](#__codelineno-0-5)from google.adk.evaluation.evaluator import EvaluationResult [](#__codelineno-0-6)[](#__codelineno-0-7)def my_custom_metric_function(     [](#__codelineno-0-8)    eval_metric: EvalMetric,    [](#__codelineno-0-9)    actual_invocations: list[Invocation],    [](#__codelineno-0-10)    expected_invocations: Optional[list[Invocation]],    [](#__codelineno-0-11)    conversation_scenario: Optional[ConversationScenario], [](#__codelineno-0-12)) -> EvaluationResult:   [](#__codelineno-0-13)  ...`

The function should return an `EvaluationResult` object with the `overall_score`, `overall_eval_status`, and `per_invocation_results` fields populated.

### Example[¶](#example "Permanent link")

Here is a simple example of a custom metric that checks if the agent's final response in each turn matches the expected final response exactly.

`[](#__codelineno-1-1)import statistics [](#__codelineno-1-2)from typing import Optional [](#__codelineno-1-3)[](#__codelineno-1-4)from google.adk.evaluation.conversation_scenarios import ConversationScenario [](#__codelineno-1-5)from google.adk.evaluation.eval_case import Invocation [](#__codelineno-1-6)from google.adk.evaluation.eval_metrics import EvalMetric [](#__codelineno-1-7)from google.adk.evaluation.eval_metrics import EvalStatus [](#__codelineno-1-8)from google.adk.evaluation.evaluator import EvaluationResult, PerInvocationResult [](#__codelineno-1-9)[](#__codelineno-1-10)def check_final_response_exact_match(     [](#__codelineno-1-11)    eval_metric: EvalMetric,    [](#__codelineno-1-12)    actual_invocations: list[Invocation],    [](#__codelineno-1-13)    expected_invocations: Optional[list[Invocation]],    [](#__codelineno-1-14)    conversation_scenario: Optional[ConversationScenario], [](#__codelineno-1-15)) -> EvaluationResult:   [](#__codelineno-1-16)  """Checks if the final response of the first turn matches the expected  [](#__codelineno-1-17)  response."""  [](#__codelineno-1-18)  if not expected_invocations:    [](#__codelineno-1-19)    return EvaluationResult(overall_score=0.0, overall_eval_status=EvalStatus.NOT_EVALUATED) [](#__codelineno-1-20)  [](#__codelineno-1-21)  per_invocation_results = [] [](#__codelineno-1-22)  [](#__codelineno-1-23)  for actual, expected in zip(actual_invocations, expected_invocations):    [](#__codelineno-1-24)    actual_final_response = "".join([part.text for part in actual.final_response.parts])    [](#__codelineno-1-25)    expected_final_response = "".join([part.text for part in expected.final_response.parts])    [](#__codelineno-1-26)    score = 1.0 if actual_final_response == expected_final_response else 0.0    [](#__codelineno-1-27)    eval_status = EvalStatus.PASSED if score else EvalStatus.FAILED    [](#__codelineno-1-28)    invocation_result = PerInvocationResult(        [](#__codelineno-1-29)        actual_invocation=actual,        [](#__codelineno-1-30)        expected_invocation=expected,        [](#__codelineno-1-31)        score=score,        [](#__codelineno-1-32)        eval_status=eval_status    [](#__codelineno-1-33)    )    [](#__codelineno-1-34)    per_invocation_results.append(invocation_result) [](#__codelineno-1-35)  [](#__codelineno-1-36)  average_score = statistics.mean(result.score for result in per_invocation_results) [](#__codelineno-1-37)  [](#__codelineno-1-38)  threshold = eval_metric.criterion.threshold  [](#__codelineno-1-39)  overall_eval_status = (    [](#__codelineno-1-40)    EvalStatus.PASSED if average_score >= threshold else EvalStatus.FAILED  [](#__codelineno-1-41)  )  [](#__codelineno-1-42)  return EvaluationResult(      [](#__codelineno-1-43)      overall_score=average_score,      [](#__codelineno-1-44)      overall_eval_status=overall_eval_status,      [](#__codelineno-1-45)      per_invocation_results=per_invocation_results,  [](#__codelineno-1-46)  )`

#### Async Metric[¶](#async-metric "Permanent link")

If your custom metric needs to make asynchronous calls, such as calling an API, you can define it as an `async` function.

The following is an example of a custom metric function that uses a fake async profanity checker API to check if the agent response contains profanity.

`[](#__codelineno-2-1)import asyncio [](#__codelineno-2-2)import statistics [](#__codelineno-2-3)from typing import Optional [](#__codelineno-2-4)[](#__codelineno-2-5)from google.adk.evaluation.conversation_scenarios import ConversationScenario [](#__codelineno-2-6)from google.adk.evaluation.eval_case import Invocation [](#__codelineno-2-7)from google.adk.evaluation.eval_metrics import EvalMetric [](#__codelineno-2-8)from google.adk.evaluation.eval_metrics import EvalStatus [](#__codelineno-2-9)from google.adk.evaluation.evaluator import EvaluationResult, PerInvocationResult [](#__codelineno-2-10)[](#__codelineno-2-11)class ProfanityChecker:   [](#__codelineno-2-12)  """A fake profanity checker that mimics an async API.""" [](#__codelineno-2-13)  [](#__codelineno-2-14)  async def check(self, text: str) -> bool:    [](#__codelineno-2-15)    """Returns True if profanity is detected, False otherwise."""    [](#__codelineno-2-16)    await asyncio.sleep(0.01)    [](#__codelineno-2-17)    return "profanity" in text.lower() [](#__codelineno-2-18)[](#__codelineno-2-19)profanity_checker = ProfanityChecker() [](#__codelineno-2-20)[](#__codelineno-2-21)async def check_for_profanity(     [](#__codelineno-2-22)    eval_metric: EvalMetric,    [](#__codelineno-2-23)    actual_invocations: list[Invocation],    [](#__codelineno-2-24)    expected_invocations: Optional[list[Invocation]],    [](#__codelineno-2-25)    conversation_scenario: Optional[ConversationScenario], [](#__codelineno-2-26)) -> EvaluationResult:   [](#__codelineno-2-27)  """Checks if the agent response contains profanity using a fake async API."""  [](#__codelineno-2-28)  per_invocation_results = [] [](#__codelineno-2-29)  [](#__codelineno-2-30)  for invocation in actual_invocations:    [](#__codelineno-2-31)    agent_response = "".join(part.text for part in invocation.final_response.parts)    [](#__codelineno-2-32)    has_profanity = await profanity_checker.check(agent_response)    [](#__codelineno-2-33)    score = 0.0 if has_profanity else 1.0    [](#__codelineno-2-34)    eval_status = EvalStatus.FAILED if has_profanity else EvalStatus.PASSED [](#__codelineno-2-35)    [](#__codelineno-2-36)    invocation_result = PerInvocationResult(        [](#__codelineno-2-37)        actual_invocation=invocation,        [](#__codelineno-2-38)        score=score,        [](#__codelineno-2-39)        eval_status=eval_status    [](#__codelineno-2-40)    )    [](#__codelineno-2-41)    per_invocation_results.append(invocation_result) [](#__codelineno-2-42)  [](#__codelineno-2-43)  scores = [      [](#__codelineno-2-44)      result.score      [](#__codelineno-2-45)      for result in per_invocation_results      [](#__codelineno-2-46)      if result.eval_status != EvalStatus.NOT_EVALUATED  [](#__codelineno-2-47)  ] [](#__codelineno-2-48)  [](#__codelineno-2-49)  average_score = statistics.mean(scores) [](#__codelineno-2-50)  [](#__codelineno-2-51)  threshold = eval_metric.criterion.threshold  [](#__codelineno-2-52)  overall_eval_status = (      [](#__codelineno-2-53)      EvalStatus.PASSED if average_score >= threshold else EvalStatus.FAILED  [](#__codelineno-2-54)  )  [](#__codelineno-2-55)  return EvaluationResult(      [](#__codelineno-2-56)      overall_score=average_score,      [](#__codelineno-2-57)      overall_eval_status=overall_eval_status,      [](#__codelineno-2-58)      per_invocation_results=per_invocation_results,  [](#__codelineno-2-59)  )`

## Use a Custom Metric[¶](#use-a-custom-metric "Permanent link")

To use your custom metric in an evaluation run with `adk eval`, you need to specify it in your `EvalConfig` JSON file.

1.  Add your custom metric as one of the eval `criteria`. The key is your metric name, and the value is the passing threshold.
2.  Add a `custom_metrics` object to `EvalConfig`. Inside this object, add an entry for each custom metric, where the key is the metric name (matching the one in `criteria`) and the value is an object containing `code_config`.
3.  The `code_config` object should contain a `name` field with a string representing the Python import path to your custom metric function, in the format `my.module.my_function`.

### Example `EvalConfig`[¶](#example-evalconfig "Permanent link")

Assuming your `check_final_response_exact_match` function is defined in `my_agent.metrics.py`, your `EvalConfig` might look like this:

`[](#__codelineno-3-1){   [](#__codelineno-3-2)  "criteria": {    [](#__codelineno-3-3)    "my_check_final_response_exact_match": {      [](#__codelineno-3-4)      "threshold": 0.8    [](#__codelineno-3-5)    },    [](#__codelineno-3-6)    "tool_trajectory_avg_score": {      [](#__codelineno-3-7)      "threshold": 1.0    [](#__codelineno-3-8)    }  [](#__codelineno-3-9)  },  [](#__codelineno-3-10)  "custom_metrics": {    [](#__codelineno-3-11)    "my_check_final_response_exact_match": {      [](#__codelineno-3-12)      "code_config": {        [](#__codelineno-3-13)        "name": "my_agent.metrics.check_final_response_exact_match"      [](#__codelineno-3-14)      }    [](#__codelineno-3-15)    }  [](#__codelineno-3-16)  } [](#__codelineno-3-17)}`

With this configuration, when you run `adk eval --config_file_path=<path_to_this_config>`, ADK will execute `check_final_response_exact_match` for each eval case, and check if the returned score is >= 0.8 to mark the `my_check_final_response_exact_match` criterion as passed or failed.

### Providing Metric Information[¶](#providing-metric-information "Permanent link")

You can optionally provide metadata about your custom metric, such as its description and value range, by adding a [`MetricInfo`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_metrics.py#L369) object within your custom metric definition in `EvalConfig`. If `metric_info` is not provided, ADK will use default values (`min_value`\=0.0, `max_value`\=1.0).

This information can be used by ADK tools for display and result aggregation purposes.

Here is an example of providing `metric_info` for a custom metric that returns a score between -1.0 and 1.0:

`[](#__codelineno-4-1){   [](#__codelineno-4-2)  "criteria": {    [](#__codelineno-4-3)    "my_metric": {      [](#__codelineno-4-4)      "threshold": 0.5    [](#__codelineno-4-5)    }  [](#__codelineno-4-6)  },  [](#__codelineno-4-7)  "custom_metrics": {    [](#__codelineno-4-8)    "my_metric": {      [](#__codelineno-4-9)      "code_config": {        [](#__codelineno-4-10)        "name": "my_agent.metrics.my_metric_function"      [](#__codelineno-4-11)      },      [](#__codelineno-4-12)      "metric_info": {        [](#__codelineno-4-13)        "metric_name": "my_metric",        [](#__codelineno-4-14)        "description": "This metric evaluates XYZ and returns a score between -1.0 and 1.0.",        [](#__codelineno-4-15)        "metric_value_info": {          [](#__codelineno-4-16)          "interval": {            [](#__codelineno-4-17)            "min_value": -1.0,            [](#__codelineno-4-18)            "max_value": 1.0          [](#__codelineno-4-19)          }        [](#__codelineno-4-20)        }      [](#__codelineno-4-21)      }    [](#__codelineno-4-22)    }  [](#__codelineno-4-23)  } [](#__codelineno-4-24)}`

Back to top