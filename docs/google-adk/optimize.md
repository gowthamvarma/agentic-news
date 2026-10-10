---
title: "Optimization - Agent Development Kit (ADK)Agent Development Kit (ADK)"
source: https://adk.dev/optimize/
date: 2026-10-10T19:16:58.794Z
---

 [![Python](./images/img_8e7cc16e2b.svg) Python](https://github.com/google/adk-python "adk-python on GitHub")[![TypeScript](./images/img_186553a46c.svg) JS ](https://github.com/google/adk-js "adk-js on GitHub")[![Go](./images/img_9e79bf3c7f.svg) Go ](https://github.com/google/adk-go "adk-go on GitHub")[![Java](./images/img_2dab27f256.svg) Java ](https://github.com/google/adk-java "adk-java on GitHub")[![Kotlin](./images/img_d63a056a06.svg) Kotlin](https://github.com/google/adk-kotlin "adk-kotlin on GitHub")

-   [Home](..)
-    Build Agents
    
    Build Agents
    
    -   [Get Started](../get-started/)
        
        Get Started
        
        -   [Python](../get-started/python/)
        -   [TypeScript](../get-started/typescript/)
        -   [Go](../get-started/go/)
        -   [Java](../get-started/java/)
        -   [Kotlin](../get-started/kotlin/)
        -   [Agents CLI](../get-started/agents-cli/)
        -   [Installation](../get-started/installation/)
        -   [Google Cloud](../get-started/google-cloud/)
        -   [Migrate to ADK](../get-started/migrate/)
        
    -   [Build your Agent](../tutorials/)
        
        Build your Agent
        
        -   [Multi-tool agent](../tutorials/multi-tool-agent/)
        -   [Agent team](../tutorials/agent-team/)
        -   [Code with AI](../tutorials/coding-with-ai/)
        -   [Agent Config](../agents/config/)
        
    -   [Agents](../agents/)
        
        Agents
        
        -   [Simple agents](../agents/llm-agents/)
        -   [Managed agents](../agents/managed-agents/)
        
    -   [Graph Workflows](../graphs/)
        
        Graph Workflows
        
        -   [Graph routes](../graphs/routes/)
        -   [Data handling](../graphs/data-handling/)
        -   [Human input](../graphs/human-input/)
        -   [Dynamic workflows](../graphs/dynamic/)
        
    -   [Multi-Agent Workflows](../workflows/)
        
        Multi-Agent Workflows
        
        -   [Collaborative workflows](../workflows/collaboration/)
        -   [Template workflows](../agents/workflow-agents/)
            
            Template workflows
            
            -   [Sequential workflow](../agents/workflow-agents/sequential-agents/)
            -   [Loop workflow](../agents/workflow-agents/loop-agents/)
            -   [Parallel workflow](../agents/workflow-agents/parallel-agents/)
            -   [Custom template workflows](../agents/custom-agents/)
            
        -   [Agent routing](../agents/routing/)
        -   [Workflow patterns](../workflows/patterns/)
        
    -   [Models for Agents](../agents/models/)
        
        Models for Agents
        
        -   [Gemini](../agents/models/google-gemini/)
            
            Gemini
            
            -   [Deferred scheduling](../agents/models/google-gemini/deferred-schedule/)
            
        -   [Gemma](../agents/models/google-gemma/)
        -   [Claude](../agents/models/anthropic/)
        -   [Agent Platform hosted](../agents/models/agent-platform/)
        -   [Apigee AI Gateway](../agents/models/apigee/)
        -   [Model routing](../agents/models/routing/)
        -   [OpenAI](../agents/models/openai/)
        -   [Ollama](../agents/models/ollama/)
        -   [vLLM](../agents/models/vllm/)
        -   [LiteLLM](../agents/models/litellm/)
        -   [LiteRT-LM](../agents/models/litert-lm/)
        
    
-    Run Agents
    
    Run Agents
    
    -   [Agent Runtime](../runtime/)
        
        Agent Runtime
        
        -   [Web Interface](../runtime/web-interface/)
            
            Web Interface
            
            -   [Visual Builder](../visual-builder/)
            
        -   [Command Line](../runtime/command-line/)
        -   [API Server](../runtime/api-server/)
        -   [Ambient Agents](../runtime/ambient-agents/)
        -   [Resume Agents](../runtime/resume/)
        -   [Cancel Agent Runs](../runtime/cancel/)
        -   [Runtime Config](../runtime/runconfig/)
        -   [Event Loop](../runtime/event-loop/)
        
    -   [Deployment](../deploy/)
        
        Deployment
        
        -   [Agent Runtime](../deploy/agent-runtime/)
            
            Agent Runtime
            
            -   [Standard deployment](../deploy/agent-runtime/deploy/)
            -   [agents-cli](../deploy/agent-runtime/agents-cli/)
            -   [Test deployed agents](../deploy/agent-runtime/test/)
            
        -   [Cloud Run](../deploy/cloud-run/)
        -   [GKE](../deploy/gke/)
        
    -   [Observability](../observability/)
        
        Observability
        
        -   [Logging](../observability/logging/)
        -   [Metrics](../observability/metrics/)
        -   [Traces](../observability/traces/)
        
    -   [Evaluation](../evaluate/)
        
        Evaluation
        
        -   [Criteria](../evaluate/criteria/)
        -   [User Simulation](../evaluate/user-sim/)
        -   [Environment Simulation](../evaluate/environment_simulation/)
        -   [Custom Metrics](../evaluate/custom_metrics/)
        -    Optimization [Optimization](./)
            
            Table of contents
            
            -   [Definitions](#definitions)
            -   [Example - Optimize a Simple Agent with adk optimize](#example)
                
                -   [Step 1: Specify the Example Dataset](#exampledataset)
                -   [Step 2: Define a Sampler Config](#step-2-define-a-sampler-config)
                -   [Step 3: Run the Optimization Job](#step-3-run-the-optimization-job)
                
            -   [Using the adk optimize Command](#using-the-adk-optimize-command)
            -   [Available Samplers and Agent Optimizers](#available-samplers-and-agent-optimizers)
                
                -   [LocalEvalSampler](#localevalsampler)
                -   [GEPARootAgentPromptOptimizer](#geparootagentpromptoptimizer)
                -   [GEPARootAgentOptimizer](#geparootagentoptimizer)
                -   [SimplePromptOptimizer](#simplepromptoptimizer)
                    
                    -   [Configuration](#configuration)
                    -   [Implementation Example](#implementation-example)
                    
                
            -   [Key Data Types](#key-data-types)
                
                -   [Sampler Results](#sampler-results)
                -   [Agent Optimizer Results](#agent-optimizer-results)
                
            -   [Creating and Using new Samplers and Agent Optimizers](#creating-and-using-new-samplers-and-agent-optimizers)
                
                -   [Creating a New Sampler](#creating-a-new-sampler)
                -   [Creating a New Agent Optimizer](#creating-a-new-agent-optimizer)
                -   [Optimizing an Agent Programmatically](#optimizing-an-agent-programmatically)
                
            
        
    -   [Safety and Security](../safety/)
        
        Safety and Security
        
    
-    Components
    
    Components
    
    -   [Technical Overview](../get-started/about/)
    -   [Custom Tools](../tools-custom/)
        
        Custom Tools
        
        -    Function tools
            
            Function tools
            
            -   [Overview](../tools-custom/function-tools/)
            -   [Tool performance](../tools-custom/performance/)
            -   [Action confirmations](../tools-custom/confirmation/)
            
        -   [MCP tools](../tools-custom/mcp-tools/)
            
            MCP tools
            
            -   [Advanced configuration](../tools-custom/mcp-tools/advanced/)
            -   [Deployment](../tools-custom/mcp-tools/deployment/)
            -   [Agent as MCP server](../tools-custom/mcp-tools/agent-as-server/)
            -   [Sub-agent delegation](../tools-custom/mcp-tools/agent-managed/)
            
        -   [OpenAPI tools](../tools-custom/openapi-tools/)
        -   [Authentication](../tools-custom/authentication/)
        -   [Tool limitations](../tools/limitations/)
        
    -   [Artifacts](../artifacts/)
        
        Artifacts
        
    -   [Skills for Agents](../skills/)
        
        Skills for Agents
        
    -   [App management](../apps/)
        
        App management
        
        -   [Callbacks](../callbacks/)
            
            Callbacks
            
            -   [Types of callbacks](../callbacks/types-of-callbacks/)
            -   [Callback patterns](../callbacks/design-patterns-and-best-practices/)
            
        -   [Plugins](../plugins/)
        
    -   [Agent context](../context/)
        
        Agent context
        
        -   [Conversational context](../sessions/)
        -   [Sessions](../sessions/session/)
            
            Sessions
            
            -   [Rewind sessions](../sessions/session/rewind/)
            -   [Migrate sessions](../sessions/session/migrate/)
            
        -   [State](../sessions/state/)
        -   [Events](../events/)
        -   [Memory](../sessions/memory/)
        -   [Context compression](../context/compaction/)
        -   [Model context caching](../context/caching/)
        
    -   [A2A Protocol](../a2a/)
        
        A2A Protocol
        
        -   [Introduction to A2A](../a2a/intro/)
        -    A2A Quickstart (Exposing)
            
            A2A Quickstart (Exposing)
            
            -   [Python](../a2a/quickstart-exposing/)
            -   [Go](../a2a/quickstart-exposing-go/)
            -   [Java](../a2a/quickstart-exposing-java/)
            
        -    A2A Quickstart (Consuming)
            
            A2A Quickstart (Consuming)
            
            -   [Python](../a2a/quickstart-consuming/)
            -   [Go](../a2a/quickstart-consuming-go/)
            -   [Java](../a2a/quickstart-consuming-java/)
            -   [Kotlin](../a2a/quickstart-consuming-kotlin/)
            
        -   [A2A Extension](../a2a/a2a-extension/)
        
    -   [Live and Voice Agents](../live/)
        
        Live and Voice Agents
        
        -   [Get started](../live/get-started/)
            
            Get started
            
            -   [Python](../live/get-started/streaming-python/)
            -   [Java](../live/get-started/streaming-java/)
            
        -    Building
            
            Building
            
            -   [Workflows](../live/workflows/)
            -   [Tools](../live/tools/)
            -   [Sessions](../live/sessions/)
            -   [Events](../live/events/)
            -   [Audio and video](../live/audio-video/)
            -   [Configuration](../live/configuration/)
            
        -    Production
            
            Production
            
            -   [Guardrails](../live/guardrails/)
            -   [Evaluation](../live/evaluation/)
            -   [Build a custom server](../live/custom-server/)
            
        -   [Supported models](../live/models/)
        
    -   [Grounding](../grounding/)
        
        Grounding
        
        -   [Google Search Grounding](../grounding/google_search_grounding/)
        -   [Grounding with Search](../grounding/grounding_with_search/)
        
    
-   [Integrations](../integrations/)
    
    Integrations
    
-    Reference
    
    Reference
    
    -   [API Reference](../api-reference/)
        
        API Reference
        
        -   [Python ADK](../api-reference/python/)
        -   [TypeScript ADK](../api-reference/typescript/)
        -    Go ADK
            
            Go ADK
            
            -   [Go v2.x](https://pkg.go.dev/google.golang.org/adk/v2)
            -   [Go v1.x](https://pkg.go.dev/google.golang.org/adk)
            
        -   [Java ADK](../api-reference/java/)
        -   [Kotlin ADK](../api-reference/kotlin/)
        -   [CLI Reference](../api-reference/cli/)
        -   [Agent Config Reference](../api-reference/agentconfig/)
        -   [REST API](../api-reference/rest/)
        
    -   [Release Notes](../release-notes/)
    
-   [Community](../community/)
    
    Community
    
    -   [Contributing Guide](../community/contributing-guide/)
    
-   [ADK 2.0](../2.0/)
    
    ADK 2.0
    

Table of contents

-   [Definitions](#definitions)
-   [Example - Optimize a Simple Agent with adk optimize](#example)
    
    -   [Step 1: Specify the Example Dataset](#exampledataset)
    -   [Step 2: Define a Sampler Config](#step-2-define-a-sampler-config)
    -   [Step 3: Run the Optimization Job](#step-3-run-the-optimization-job)
    
-   [Using the adk optimize Command](#using-the-adk-optimize-command)
-   [Available Samplers and Agent Optimizers](#available-samplers-and-agent-optimizers)
    
    -   [LocalEvalSampler](#localevalsampler)
    -   [GEPARootAgentPromptOptimizer](#geparootagentpromptoptimizer)
    -   [GEPARootAgentOptimizer](#geparootagentoptimizer)
    -   [SimplePromptOptimizer](#simplepromptoptimizer)
        
        -   [Configuration](#configuration)
        -   [Implementation Example](#implementation-example)
        
    
-   [Key Data Types](#key-data-types)
    
    -   [Sampler Results](#sampler-results)
    -   [Agent Optimizer Results](#agent-optimizer-results)
    
-   [Creating and Using new Samplers and Agent Optimizers](#creating-and-using-new-samplers-and-agent-optimizers)
    
    -   [Creating a New Sampler](#creating-a-new-sampler)
    -   [Creating a New Agent Optimizer](#creating-a-new-agent-optimizer)
    -   [Optimizing an Agent Programmatically](#optimizing-an-agent-programmatically)
    

1.  [Home](..)
2.  [Run Agents](../runtime/)
3.  [Evaluation](../evaluate/)

[](https://github.com/google/adk-docs/edit/main/docs/optimize/index.md "Edit this page on GitHub")[](./index.md "View this page as Markdown")

# Optimize agents[¶](#optimize-agents "Permanent link")

Supported in ADKPython v1.24.0

ADK provides an extendable framework for automated agent optimization based on evaluation results. Out of the box, you can use the `adk optimize` command to quickly optimize simple agents based on ADK evaluation results using the default optimizer. For more complex use cases, you can develop samplers that use data from custom evals, or you can implement new optimization strategies.

### Definitions[¶](#definitions "Permanent link")

-   **Sampler**: A sampler allows the agent optimizer to evaluate candidate optimized agents. When requested, the sampler provides the optimizer with detailed evaluation results that are useful for eval-guided agent optimization.
-   **Agent Optimizer**: An agent optimizer reviews the evaluation results from the sampler and uses them to improve the agent.

## Example - Optimize a Simple Agent with `adk optimize`[¶](#example "Permanent link")

In this example, we will use the `adk optimize` command to update the instructions of the [`hello_world`](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world) sample agent based on evaluation results over a small eval set.

### Step 1: Specify the Example Dataset[¶](#exampledataset "Permanent link")

The default `hello_world` agent instructions describe how to determine whether a number is prime. The eval set for this example adds another aspect that the agent does not have instructions for: numbers can be "good" or "bad" depending on their primality. The optimizer is expected to derive this new rule and add it to the agent instructions.

Create a file `train_eval_set.evalset.json` in [`contributing/samples/core/hello_world/`](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world) with the following contents:

`[](#__codelineno-0-1){   [](#__codelineno-0-2)  "eval_set_id": "train_eval_set",  [](#__codelineno-0-3)  "name": "train_eval_set",  [](#__codelineno-0-4)  "eval_cases": [    [](#__codelineno-0-5)    {      [](#__codelineno-0-6)      "eval_id": "simple",      [](#__codelineno-0-7)      "conversation": [        [](#__codelineno-0-8)        {          [](#__codelineno-0-9)          "invocation_id": "inv1",          [](#__codelineno-0-10)          "user_content": {            [](#__codelineno-0-11)            "parts": [ {"text": "Is 7 prime?"} ],            [](#__codelineno-0-12)            "role": "user"          [](#__codelineno-0-13)          },          [](#__codelineno-0-14)          "final_response": {            [](#__codelineno-0-15)            "parts": [ {"text": "7 is a prime number."} ],            [](#__codelineno-0-16)            "role": "model"          [](#__codelineno-0-17)          }        [](#__codelineno-0-18)        }      [](#__codelineno-0-19)      ],      [](#__codelineno-0-20)      "session_input": {        [](#__codelineno-0-21)        "app_name": "hello_world",        [](#__codelineno-0-22)        "user_id": "user"      [](#__codelineno-0-23)      }    [](#__codelineno-0-24)    },    [](#__codelineno-0-25)    {      [](#__codelineno-0-26)      "eval_id": "is_good",      [](#__codelineno-0-27)      "conversation": [        [](#__codelineno-0-28)        {          [](#__codelineno-0-29)          "invocation_id": "inv1",          [](#__codelineno-0-30)          "user_content": {            [](#__codelineno-0-31)            "parts": [ {"text": "Is 4 a bad number?"} ],            [](#__codelineno-0-32)            "role": "user"          [](#__codelineno-0-33)          },          [](#__codelineno-0-34)          "final_response": {            [](#__codelineno-0-35)            "parts": [ {"text": "4 is not prime so it is a good number."} ],            [](#__codelineno-0-36)            "role": "model"          [](#__codelineno-0-37)          }        [](#__codelineno-0-38)        }      [](#__codelineno-0-39)      ],      [](#__codelineno-0-40)      "session_input": {        [](#__codelineno-0-41)        "app_name": "hello_world",        [](#__codelineno-0-42)        "user_id": "user"      [](#__codelineno-0-43)      }    [](#__codelineno-0-44)    },    [](#__codelineno-0-45)    {      [](#__codelineno-0-46)      "eval_id": "is_bad",      [](#__codelineno-0-47)      "conversation": [        [](#__codelineno-0-48)        {          [](#__codelineno-0-49)          "invocation_id": "inv1",          [](#__codelineno-0-50)          "user_content": {            [](#__codelineno-0-51)            "parts": [ {"text": "Is 5 a bad number?"} ],            [](#__codelineno-0-52)            "role": "user"          [](#__codelineno-0-53)          },          [](#__codelineno-0-54)          "final_response": {            [](#__codelineno-0-55)            "parts": [ {"text": "5 is prime so it is a bad number."} ],            [](#__codelineno-0-56)            "role": "model"          [](#__codelineno-0-57)          }        [](#__codelineno-0-58)        }      [](#__codelineno-0-59)      ],      [](#__codelineno-0-60)      "session_input": {        [](#__codelineno-0-61)        "app_name": "hello_world",        [](#__codelineno-0-62)        "user_id": "user"      [](#__codelineno-0-63)      }    [](#__codelineno-0-64)    }  [](#__codelineno-0-65)  ] [](#__codelineno-0-66)}`

### Step 2: Define a Sampler Config[¶](#step-2-define-a-sampler-config "Permanent link")

The sampler config controls the process for evaluating candidate optimized agents. For example, it specifies the correctness criterion for the agent output and also specifies the eval set to use for optimizing the agent.

The full list of configuration options is available [below](#localevalsampler); for now, simply create a file `sampler_config.json` in [`contributing/samples/core/hello_world/`](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world) with the following contents:

`[](#__codelineno-1-1){   [](#__codelineno-1-2)  "eval_config": {    [](#__codelineno-1-3)    "criteria": {      [](#__codelineno-1-4)      "response_match_score": 0.75    [](#__codelineno-1-5)    }  [](#__codelineno-1-6)  },  [](#__codelineno-1-7)  "app_name": "hello_world",  [](#__codelineno-1-8)  "train_eval_set": "train_eval_set" [](#__codelineno-1-9)}`

### Step 3: Run the Optimization Job[¶](#step-3-run-the-optimization-job "Permanent link")

Run the `adk optimize` command, pointing it to the `hello_world` agent's directory and passing the configuration file created above.

`[](#__codelineno-2-1)adk optimize contributing/samples/core/hello_world \ [](#__codelineno-2-2)--sampler_config_file_path contributing/samples/core/hello_world/sampler_config.json`

The final output varies, but might look similar to the following:

``[](#__codelineno-3-1)<logs and intermediate output> [](#__codelineno-3-2)================================================================================ [](#__codelineno-3-3)Optimized root agent instructions: [](#__codelineno-3-4)-------------------------------------------------------------------------------- [](#__codelineno-3-5)<existing unmodified instructions omitted for brevity> [](#__codelineno-3-6)[](#__codelineno-3-7)**Special Rules for "Good" and "Bad" Numbers:** [](#__codelineno-3-8)*   A "bad number" is defined as a prime number. [](#__codelineno-3-9)*   A "good number" is defined as a non-prime number (i.e., a composite number or 1). [](#__codelineno-3-10)*   If a user asks if a number is "good" or "bad", you must always use the `check_prime` tool to determine its primality first. [](#__codelineno-3-11)*   After determining primality with the tool, respond according to the definitions above. Questions about "good" or "bad" numbers, when referring to primality, are objective and you are fully capable of answering them. Do not state you cannot answer such questions. [](#__codelineno-3-12)================================================================================``

## Using the `adk optimize` Command[¶](#using-the-adk-optimize-command "Permanent link")

`[](#__codelineno-4-1)adk optimize [OPTIONS] AGENT_MODULE_FILE_PATH`

-   `AGENT_MODULE_FILE_PATH`: The path to the agent directory, not a file, whose `__init__.py` exposes a module by the name `agent`. The `agent` module must contain a `root_agent`. For an example of a valid setup, examine the [`hello_world`](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world) agent.
-   `--sampler_config_file_path PATH`: The path to the config for the sampler. The sampler implementation and config format are described [below](#localevalsampler).
-   `--optimizer_config_file_path PATH` (optional): The path to the config for the agent optimizer. If not provided, the default config will be used. The optimizer implementation, config format, and default config are described [below](#geparootagentpromptoptimizer).
-   `--print_detailed_results` (optional): Enables printing some detailed metrics measured by the agent optimizer.
-   `--log_level` (optional): Set the logging level. Default is `INFO`. Valid options are `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`.

## Available Samplers and Agent Optimizers[¶](#available-samplers-and-agent-optimizers "Permanent link")

ADK provides several samplers and agent optimizers which you can run using the `adk optimize` command line. The available options are as follows:

### `LocalEvalSampler`[¶](#localevalsampler "Permanent link")

The [`LocalEvalSampler`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/local_eval_sampler.py) evaluates candidate agents using ADK's [`LocalEvalService`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/local_eval_service.py). It provides eval results as an [`UnstructuredSamplingResult`](#sampler-results). You can configure the `LocalEvalSampler` with a `LocalEvalSamplerConfig` that contains the following fields:

-   `eval_config`: An [`EvalConfig`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_config.py) which provides the evaluation criteria and user simulation options.
-   `app_name`: The app name to use for evaluation.
-   `train_eval_set`: The name of the eval set to use for optimization.
-   `train_eval_case_ids` (optional): The ids of the eval cases (examples) to use for optimization. If not provided, all eval cases in `train_eval_set` are used.
-   `validation_eval_set` (optional): The name of the eval set to use for validating the optimized agent. If not provided, `train_eval_set` is reused.
-   `validation_eval_case_ids` (optional): The ids of the eval cases (examples) to use for validating the optimized agent. If not provided, all eval cases in `validation_eval_set` are used. If `validation_eval_set` is also not provided, the effective train eval cases are reused.

While initializing the `LocalEvalSampler`, you must also provide an [`EvalSetsManager`](https://github.com/google/adk-python/blob/main/src/google/adk/evaluation/eval_sets_manager.py) that can access the train and validation eval sets specified in the `LocalEvalSamplerConfig`.

### `GEPARootAgentPromptOptimizer`[¶](#geparootagentpromptoptimizer "Permanent link")

The [`GEPARootAgentPromptOptimizer`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/gepa_root_agent_prompt_optimizer.py) improves the instructions of the root agent using the [GEPA](https://gepa-ai.github.io/gepa/) optimizer. It expects the sampler to provide eval results as an [`UnstructuredSamplingResult`](#sampler-results). Its output is a subclass of [`OptimizerResult`](#agent-optimizer-results) which specifies a list of [optimized agents with scores](#agent-optimizer-results) and additional metrics collected during optimization.

Note: The `GEPARootAgentPromptOptimizer` does not improve any sub-agents, agent tools, skills, or any other aspect of the root agent.

Note: The `GEPARootAgentPromptOptimizer` is experimental. It emits a warning when constructed, and its API may change or be removed without notice.

You can configure the `GEPARootAgentPromptOptimizer` with a `GEPARootAgentPromptOptimizerConfig` that contains the following fields:

-   `optimizer_model` (optional): The model used to analyze evaluation results and optimize the agent.
-   `model_configuration` (optional): The configuration for the optimizer model. Defaults to a config with a 10K token thinking budget.
-   `max_metric_calls` (optional): The maximum number of evaluations to run during optimization. Defaults to 100.
-   `reflection_minibatch_size` (optional): The number of examples to use at a time to update the agent instructions. Defaults to 3.
-   `run_dir` (optional): The directory to save intermediate and final optimization results if desired. Facilitates warm starts.

### `GEPARootAgentOptimizer`[¶](#geparootagentoptimizer "Permanent link")

The [`GEPARootAgentOptimizer`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/gepa_root_agent_optimizer.py) improves both the instructions of the root agent and the instructions of skills provided to it via a [`SkillToolset`](https://github.com/google/adk-python/blob/main/src/google/adk/tools/skill_toolset.py) using the [GEPA](https://gepa-ai.github.io/gepa/) optimizer. In many ways it can be considered to be an extension of the [`GEPARootAgentPromptOptimizer`](#geparootagentpromptoptimizer). It expects the sampler to provide eval results as an [`UnstructuredSamplingResult`](#sampler-results). Its output is a subclass of [`OptimizerResult`](#agent-optimizer-results) which specifies a list of [optimized agents with scores](#agent-optimizer-results) and additional metrics collected during optimization.

Note: The `GEPARootAgentOptimizer` does not improve any sub-agents or agent tools.

Note: The `GEPARootAgentOptimizer` is experimental. It emits a warning when constructed, and its API may change or be removed without notice.

You can configure the `GEPARootAgentOptimizer` with a `GEPARootAgentOptimizerConfig` that contains the following fields:

-   `optimizer_model` (optional): The model used to analyze evaluation results and optimize the agent.
-   `model_configuration` (optional): The configuration for the optimizer model. Defaults to a config with a `ThinkingLevel` of `HIGH`.
-   `max_metric_calls` (optional): The maximum number of evaluations to run during optimization. Defaults to 100.
-   `reflection_minibatch_size` (optional): The number of examples to use at a time to update the instructions. Defaults to 3.
-   `run_dir` (optional): The directory to save intermediate and final optimization results if desired. Facilitates warm starts.

### `SimplePromptOptimizer`[¶](#simplepromptoptimizer "Permanent link")

The `SimplePromptOptimizer` is an automated, iterative prompt-tuning component designed to systematically improve an agent's root system instructions using empirical evaluation data. Unlike the GEPA-based optimizers that maintain a diverse Pareto frontier of multiple candidate agents, the `SimplePromptOptimizer` executes a direct, sequential optimization loop focused entirely on refining a single primary prompt across a series of specified iterations.

The optimizer automatically executes an asynchronous, four-stage feedback loop:

1.  **Execute:** The target agent processes a specific batch of evaluation tasks managed by an implementation of the `Sampler` class.
2.  **Evaluate**: The Sampler scores the agent's outputs against your evaluation datasets and returns a structured `SamplingResult`.
3.  **Critique**: An underlying optimization large language model (LLM) analyzes the historical evaluation scores alongside the current prompt to isolate specific behavioral weaknesses or gaps.
4.  **Rewrite**: The optimization model generates an updated variation of the system prompt tailored to address the discovered weaknesses. This new prompt is then fed directly into the next iteration.

**Note:** The optimization loop does not mutate your initial agent instance in place. Upon completion, it returns an `OptimizerResult` containing the highest-scoring agent variation extracted during the process.

#### Configuration[¶](#configuration "Permanent link")

Configure the behavior of the loop by passing a `SimplePromptOptimizerConfig` instance to the optimizer.

Parameter

Type

Default

Description

`num_iterations`

int

`10`

The total number of optimization rounds to execute.

`batch_size`

int

`5`

The number of evaluation sample cases processed by the sampler during each individual iteration.

`optimizer_model`

str

`"gemini-2.5-flash"`

The model used to critique the current prompt and generate the next one.

`model_configuration`

GenerateContentConfig

thinking budget of 10K tokens

The configuration for the optimizer model.

#### Implementation Example[¶](#implementation-example "Permanent link")

Once your configuration is defined, run the optimization with:

`[](#__codelineno-5-1)from google.adk.optimization.simple_prompt_optimizer import SimplePromptOptimizer [](#__codelineno-5-2)from google.adk.optimization.simple_prompt_optimizer import SimplePromptOptimizerConfig [](#__codelineno-5-3)[](#__codelineno-5-4)# Define your Agent and Sampler first... [](#__codelineno-5-5)[](#__codelineno-5-6)# Configure the optimizer [](#__codelineno-5-7)config = SimplePromptOptimizerConfig(     [](#__codelineno-5-8)    num_iterations=5,    [](#__codelineno-5-9)    batch_size=10 [](#__codelineno-5-10)) [](#__codelineno-5-11)[](#__codelineno-5-12)# Run optimization [](#__codelineno-5-13)optimizer = SimplePromptOptimizer(config=config) [](#__codelineno-5-14)optimized_result = await optimizer.optimize(agent, sampler)`

## Key Data Types[¶](#key-data-types "Permanent link")

ADK defines several base data types in [`optimization/data_types.py`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/data_types.py) to regulate the transfer of eval data from the sampler to the optimizer and the output of the optimizer. These data types are designed for extensibility to accommodate custom evals and optimization strategies.

### Sampler Results[¶](#sampler-results "Permanent link")

-   [`SamplingResult`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/data_types.py): The foundational class for the output of a sampler.
-   Must include a `scores` dictionary that maps an example UID to the agent's overall score on that example.
-   [`UnstructuredSamplingResult`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/data_types.py): A built-in subclass of `SamplingResult` that adds an optional `data` field to hold unstructured, per-example, JSON-serializable evaluation data (such as trajectories, intermediate outputs, and sub-metrics).

You can use the `UnstructuredSamplingResult` for most use cases. Alternatively, you can create your own subclass of `SamplingResult` to return additional evaluation data in a more structured format. However, you must make sure that both the sampler and the optimizer support your format.

### Agent Optimizer Results[¶](#agent-optimizer-results "Permanent link")

-   [`AgentWithScores`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/data_types.py): Represents a single optimized agent along with its overall score.
-   Must include the `optimized_agent` (the updated [`Agent`](https://github.com/google/adk-python/blob/main/src/google/adk/agents/llm_agent.py) object).
-   Can include the `overall_score` of the agent (typically on the validation set).
-   [`OptimizerResult`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/data_types.py): Represents the final output of an optimization process.
-   Must include a list of `optimized_agents` (which are objects of `AgentWithScores` or its subclasses). When measuring agent optimality over multiple metrics, multiple entries may be needed to represent the Pareto frontier.

You can create your own subclass of `AgentWithScores` to expose fine-grained metrics about the candidate optimized agent. For example, you might want to separately score the agent on accuracy, safety, alignment, etc. Similarly, you can create your own subclass of `OptimizerResult` to expose overall metrics about the optimization process for your optimizer (number of candidates evaluated, total number of evaluations, etc.).

## Creating and Using new Samplers and Agent Optimizers[¶](#creating-and-using-new-samplers-and-agent-optimizers "Permanent link")

If your use case requires complex sampling and evaluation logic or a custom agent optimization strategy, you can create custom implementations of the `Sampler` and `AgentOptimizer` abstract classes described below. By adhering to this API, you can mix and match ADK-provided samplers and agent optimizers with your custom implementations.

### Creating a New Sampler[¶](#creating-a-new-sampler "Permanent link")

To create a new sampler for custom evaluations, you must create a class that extends the [`Sampler`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/sampler.py) base class. You must also specify the subclass of [`SamplingResult`](#sampler-results) that your sampler will use to return eval results. The sampler must implement the following abstract methods:

-   `get_train_example_ids(self)`: Returns the list of example UIDs to use for optimization.
-   `get_validation_example_ids(self)`: Returns the list of example UIDs to use for validating the optimized agent.

-   `sample_and_score(self, candidate, example_set, batch, capture_full_eval_data)`: Evaluates the `candidate` agent on a `batch` of examples from the specified `example_set` (`"train"` or `"validation"`). It should return a [`SamplingResult`](#sampler-results) subclass containing the calculated per-example scores and, if `capture_full_eval_data` is `True`, any additional data required for eval-guided agent optimization. You can choose a format for the additional eval data based on your needs by subclassing `SamplingResult`. However, the agent optimizer must also support the same subclass of `SamplingResult`. The [`UnstructuredSamplingResult`](#sampler-results) implements the simplest case in which the additional data is stored in a per-example unstructured dictionary.

### Creating a New Agent Optimizer[¶](#creating-a-new-agent-optimizer "Permanent link")

To create a custom agent optimizer, you must create a class that extends the [`AgentOptimizer`](https://github.com/google/adk-python/blob/main/src/google/adk/optimization/agent_optimizer.py) base class. You must also specify the subclass of [`SamplingResult`](#sampler-results) that it will accept for eval results and the subclass of [`AgentWithScores`](#agent-optimizer-results) it will use to represent each optimized agent and its scores/metrics. The optimizer must implement the following abstract method:

-   `optimize(self, initial_agent, sampler)`: This method orchestrates the optimization process. It takes an `initial_agent` to improve and a `sampler` to use for evaluating candidates. It should return an [`OptimizerResult`](#agent-optimizer-results) subclass containing a list of candidate optimized agents along with their scores/metrics and any overall metrics related to the optimization process. You can choose a format for the per-candidate scores/metrics based on your needs by subclassing `AgentWithScores`. Alternatively you can simply use `AgentWithScores` which allows specifying a single overall score for each candidate optimized agent.

### Optimizing an Agent Programmatically[¶](#optimizing-an-agent-programmatically "Permanent link")

The `adk optimize` command uses the [`LocalEvalSampler`](#localevalsampler) and the [`GEPARootAgentPromptOptimizer`](#geparootagentpromptoptimizer). When using custom samplers and agent optimizers, you will have to optimize the agent programmatically. The following reference code replicates the functionality of the `adk optimize` command for the above [example](#example). To use it, create the [dataset](#exampledataset) as shown in the example and run this code from a Python script within the [same directory](https://github.com/google/adk-python/tree/main/contributing/samples/core/hello_world):

`[](#__codelineno-6-1)import asyncio [](#__codelineno-6-2)import logging [](#__codelineno-6-3)import os [](#__codelineno-6-4)[](#__codelineno-6-5)import agent  # the hello_world agent [](#__codelineno-6-6)from google.adk.cli.utils import envs [](#__codelineno-6-7)from google.adk.cli.utils import logs [](#__codelineno-6-8)from google.adk.evaluation.eval_config import EvalConfig [](#__codelineno-6-9)from google.adk.evaluation.local_eval_sets_manager import LocalEvalSetsManager [](#__codelineno-6-10)from google.adk.optimization.gepa_root_agent_prompt_optimizer import GEPARootAgentPromptOptimizer [](#__codelineno-6-11)from google.adk.optimization.gepa_root_agent_prompt_optimizer import GEPARootAgentPromptOptimizerConfig [](#__codelineno-6-12)from google.adk.optimization.local_eval_sampler import LocalEvalSampler [](#__codelineno-6-13)from google.adk.optimization.local_eval_sampler import LocalEvalSamplerConfig [](#__codelineno-6-14)[](#__codelineno-6-15)# setup environment variables (API keys, etc.) and logging [](#__codelineno-6-16)envs.load_dotenv_for_agent(".", ".") [](#__codelineno-6-17)logs.setup_adk_logger(logging.INFO) [](#__codelineno-6-18)[](#__codelineno-6-19)# create the sampler [](#__codelineno-6-20)sampler_config = LocalEvalSamplerConfig(     [](#__codelineno-6-21)    eval_config=EvalConfig(criteria={"response_match_score": 0.75}),    [](#__codelineno-6-22)    app_name="hello_world",  # typically the name of the directory containing the agent    [](#__codelineno-6-23)    train_eval_set="train_eval_set",  # from the example [](#__codelineno-6-24)) [](#__codelineno-6-25)eval_sets_manager = LocalEvalSetsManager(     [](#__codelineno-6-26)    agents_dir=os.path.dirname(os.getcwd()), [](#__codelineno-6-27)) [](#__codelineno-6-28)sampler = LocalEvalSampler(sampler_config, eval_sets_manager) [](#__codelineno-6-29)[](#__codelineno-6-30)# create the optimizer [](#__codelineno-6-31)opt_config = GEPARootAgentPromptOptimizerConfig() [](#__codelineno-6-32)optimizer = GEPARootAgentPromptOptimizer(config=opt_config) [](#__codelineno-6-33)[](#__codelineno-6-34)# optimize the root agent [](#__codelineno-6-35)initial_agent = agent.root_agent [](#__codelineno-6-36)result = asyncio.run(     [](#__codelineno-6-37)    optimizer.optimize(initial_agent, sampler) [](#__codelineno-6-38)) [](#__codelineno-6-39)[](#__codelineno-6-40)# show the results [](#__codelineno-6-41)best_idx = result.gepa_result["best_idx"] [](#__codelineno-6-42)print(     [](#__codelineno-6-43)    "Validation score:",    [](#__codelineno-6-44)    result.optimized_agents[best_idx].overall_score,    [](#__codelineno-6-45)    "Optimized prompt:",    [](#__codelineno-6-46)    result.optimized_agents[best_idx].optimized_agent.instruction,    [](#__codelineno-6-47)    "GEPA metrics:",    [](#__codelineno-6-48)    result.gepa_result,    [](#__codelineno-6-49)    sep="\n", [](#__codelineno-6-50))`

Back to top