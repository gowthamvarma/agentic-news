# The Problem: One Size Doesn’t Fit All

## Introduction: From default to optimized configuration

In previous modules, you used default model settings:

```python
# From Modules 1-2

# **Note:** Ensure `from google.adk.agents import LlmAgent` is imported

agent = LlmAgent(
    model="gemini-flash-latest",
    name="default_config_agent",
    description="An agent using default model generation parameters",
    instruction="..."
)
```

This works, but uses default settings for everything:

- No control over creativity versus consistency.
- No safety thresholds or enterprise guardrails configured.
- No token limits set.
- Same settings for all tasks (creative writing versus data extraction).

In this module, we’ll learn how to configure models for specific requirements using ADK’s `generate_content_config` on Agent Platform.

### One size doesn’t fit all

Using default settings or the wrong model wastes resources or sacrifices quality:

#### Problem 1: Expensive model for simple tasks

```python
greeting_agent = LlmAgent(
    model="gemini-pro-latest",  # Overkill! Costs significantly more than Flash
    name="greeting_agent",
    description="Greets incoming users",
    instruction="Greet the user warmly"
)
```

#### Problem 2: Wrong temperature for task

```python
factual_agent = LlmAgent(
    model="gemini-flash-latest",
    name="date_extractor",
    description="Extracts specific dates from documents",
    instruction="Extract exact dates from documents"
    # Defaults to general conversational sampling (e.g., 1.0).
    # Factual extraction workloads require low temperature (near 0.0) to minimize variance and hallucinations.
)
```

#### Problem 3: No custom safety or guardrail configuration

```python
public_agent = LlmAgent(
    model="gemini-flash-latest",
    name="customer_support",
    description="Public-facing assistant answering customer questions",
    instruction="Answer customer questions"
    # Uses default safety settings - may not meet enterprise compliance, brand policy, or Agent Gateway requirements
)
```

## The Root Problem

Without strategic configuration, agents either waste money, produce inconsistent results, or fail to meet specific safety, governance, and compliance requirements within Agent Platform.

