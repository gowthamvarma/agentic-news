# The Solution: Strategic Model Configuration

## Table of Contents

- [Understanding Model Selection](#understanding-model-selection)
  - [Gemini Pro](#gemini-pro)
  - [Gemini Flash](#gemini-flash)
  - [Gap Analysis](#gap-analysis)
- [Core Concepts](#core-concepts)
  - [1. Configuring with GenerateContentConfig](#1-configuring-with-generatecontentconfig)
  - [2. Temperature: Creativity versus Consistency](#2-temperature-creativity-versus-consistency)
  - [3. Safety Settings](#3-safety-settings)
  - [4. Output Tokens and Sampling](#4-output-tokens-and-sampling)
- [Hands-on Example](#hands-on-example)
  - [Step 1: Create the Project](#step-1-create-the-project)
  - [Step 2: Write Optimized Agents](#step-2-write-optimized-agents)
  - [Step 3: Run and Compare](#step-3-run-and-compare)
- [What to Notice](#what-to-notice)
- [Key Takeaways](#key-takeaways)

---

## Understanding Model Selection

> **References:**
> - Gemini API
> - Cost of building and deploying AI models in Agent Platform
> - Generate content with the Gemini API
> - Rule of thumb for model selection

### Gemini Pro

Start with **Gemini Pro** for prototyping and establishing quality baselines:

- **Peak reasoning performance** for complex analysis, multi-step logic, and quality-critical tasks.
- **Maximum context window capacity** for dense documents, extensive codebases, and large-scale inputs.
- **Best for initial development**, ground-truth generation, and defining the ceiling of what is possible.

### Gemini Flash

Optimize with **Gemini Flash** when latency and unit economics are priorities:

- **Significantly faster** time-to-first-token and overall throughput.
- **Substantially lower** operational cost per million tokens.
- **High throughput and massive context windows** suitable for real-time applications.
- **Reliable reasoning** that handles the vast majority of everyday and operational tasks.
- **Ideal for high-volume**, user-facing production deployments.

### Gap Analysis

Perform a gap analysis after evaluating Flash against Pro to measure quality differences against the baseline, fine-tune prompts where necessary, and ensure Flash meets your production acceptance criteria.

---

## Core Concepts

### 1. Configuring with GenerateContentConfig

> **Reference:** ADK docs - Advanced configuration and control
>
> *"generate_content_config (optional): Pass an instance of `google.genai.types.GenerateContentConfig` to control parameters like temperature (randomness), max_output_tokens (response length), top_p, top_k, and safety settings."*
>
> — *ADK docs*

```python
from google.adk.agents import LlmAgent
from google.genai import types

agent = LlmAgent(
    model="gemini-flash-latest",
    name="configured_agent",
    description="Agent configured with customized generation parameters",
    generate_content_config=types.GenerateContentConfig(
        temperature=0.2,        # More deterministic output
        max_output_tokens=250,  # Limit response length
        top_p=0.8,              # Nucleus sampling
        top_k=10                # Top-k sampling
    )
)
```

---

### 2. Temperature: Creativity versus Consistency

Temperature controls randomness in model output.

#### Low temperature (0.0 – 0.3) — Low / Deterministic

```python
factual_config = types.GenerateContentConfig(
    temperature=0.1  # Deterministic
)
# Use for: data extraction, code generation, factual Q&A, JSON schemas
```

#### Medium temperature (0.4 – 1.0) — Moderate / Balanced

```python
balanced_config = types.GenerateContentConfig(
    temperature=0.7  # Balanced
)
# Use for: summarization, customer support, roleplay, general assistance
```

#### High temperature (1.1 – 2.0) — High / Exploratory

```python
creative_config = types.GenerateContentConfig(
    temperature=1.4  # Creative
)
# Use for: creative writing, brainstorming, marketing copy, novel ideas
```

---

### 3. Safety Settings

> **References:**
> - ADK Docs - Advanced configuration and control
> - Safety settings
> - Safety (Responsible AI)

Configure content filtering thresholds for Gemini models:

```python
from google.genai import types

# Strict safety for public-facing agents
strict_config = types.GenerateContentConfig(
    safety_settings=[
        types.SafetySetting(
            category=types.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold=types.HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        ),
        types.SafetySetting(
            category=types.HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold=types.HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        ),
        types.SafetySetting(
            category=types.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold=types.HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        ),
        types.SafetySetting(
            category=types.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold=types.HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
        )
    ]
)
```

#### Safety Thresholds:

- `OFF`: Turns off the configurable safety filter entirely.
- `BLOCK_NONE`: No filtering (not recommended for production).
- `BLOCK_ONLY_HIGH`: Block only high-probability harmful content.
- `BLOCK_MEDIUM_AND_ABOVE`: Block medium and high probability.
- `BLOCK_LOW_AND_ABOVE`: Most strict, blocks even low probability.

> [!NOTE]
> For non-Gemini models (e.g., Claude, GPT via Model Garden / partner endpoints), refer to the specific model provider's documentation for safety configuration options, as the API and parameters differ from Gemini's safety settings. Within Agent Platform, instruction-level safety settings sit beneath platform-managed enterprise guardrails and Agent Gateway policy checks.

---

### 4. Output Tokens and Sampling

Control response length and diversity:

```python
comprehensive_config = types.GenerateContentConfig(
    temperature=0.7,
    max_output_tokens=2000,  # Allow longer responses
    top_p=0.95,              # Consider top 95% of probability mass
    top_k=40                 # Consider top 40 tokens at each step
)

concise_config = types.GenerateContentConfig(
    temperature=0.3,
    max_output_tokens=100,  # Force brief responses
    top_p=0.8,              # More focused sampling
    top_k=10,               # Fewer token choices
    thinking_config=types.ThinkingConfig(thinking_budget=0),  # Turn off thinking tokens
)
```

#### Parameters Explained:

- `max_output_tokens`: Maximum response length (default varies by model).
- `top_p`: Nucleus sampling: consider tokens comprising top P% of probability mass.
- `top_k`: Only sample from the K most likely next tokens.

---

## Hands-on Example

Let’s build two agents optimized for different tasks: one for factual data extraction, one for creative brainstorming.

### Step 1: Create the Project

```bash
adk create model_comparison
cd model_comparison
```

### Step 2: Write Optimized Agents

Replace the contents of `agent.py` with:

```python
"""
Model configuration demonstration showing factual vs creative optimization.
Demonstrates ADK's generate_content_config with different settings on Agent Platform.
"""

from google.adk.agents import LlmAgent
from google.genai import types

# Agent 1: Optimized for Factual Data Extraction
# Uses deterministic temperature (0.1), disables thinking tokens to protect output budget
factual_agent = LlmAgent(
    model="gemini-flash-latest",  # Flash is sufficient for extraction
    name="data_extractor",
    description="Extracts factual information with high consistency",
    instruction="""You are a precise data extractor.

Extract facts exactly as stated. Do not:
- Add information not present in the input
- Make assumptions or inferences
- Use creative language

Be accurate, concise, and deterministic.""",
    generate_content_config=types.GenerateContentConfig(
        temperature=0.1,  # Low/Deterministic (range 0.0 - 2.0)
        max_output_tokens=500,
        top_p=0.8,
        top_k=10,
        # Turn off thinking tokens so the 500 limit applies entirely to visible text
        thinking_config=types.ThinkingConfig(thinking_budget=0),
        safety_settings=[
            types.SafetySetting(
                category=types.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold=types.HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
            )
        ]
    )
)

# Agent 2: Optimized for Creative Brainstorming
# Uses high temperature (>1.0 on Gemini's 0-2 scale) and higher top_p/top_k
creative_agent = LlmAgent(
    model="gemini-pro-latest",  # Pro for superior creativity
    name="creative_brainstormer",
    description="Generates creative ideas and explores possibilities",
    instruction="""You are a creative brainstorming partner.

Generate innovative, diverse, and imaginative ideas. Feel free to:
- Think outside the box
- Combine unexpected concepts
- Explore unconventional approaches

Be creative, varied, and thought-provoking.""",
    generate_content_config=types.GenerateContentConfig(
        temperature=1.3,  # Truly high/creative for Gemini (scale 0.0 - 2.0)
        max_output_tokens=2000,
        top_p=0.95,
        top_k=40,
        safety_settings=[
            types.SafetySetting(
                category=types.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold=types.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
            )
        ]
    )
)

# For adk web, we'll use the factual agent as root_agent
# Switch to creative_agent to test different behavior
root_agent = factual_agent
```

### Step 3: Run and Compare

```bash
adk web
```

#### Test with Factual Agent

Try this prompt:

> Extract key information: "The iPhone 15 Pro was released in September 2023 and starts at $999 for 128GB."

**Expected behavior:**
- Consistent, factual response every time.
- Extracts exactly what’s stated.
- No creative interpretation.
- Same format on repeated prompts.

#### Test with Creative Agent

Change `root_agent = creative_agent` in the code, restart, and try:

> Brainstorm 5 innovative features for a next-generation smartphone.

**Expected behavior:**
- Varied, creative ideas.
- Different responses each time.
- Imaginative suggestions.
- Rich, detailed elaboration.

---

## What to Notice

- **Temperature impact:** Low (`0.1`) enforces deterministic consistency; High (`1.2`–`1.5` on Gemini's `0.0`–`2.0` scale) produces lateral, varied ideation.
- **Model choice:** Pro for quality baseline and complex creativity, Flash for cost optimization.
- **Token limits:** Factual agent capped at 500, creative at 2000.
- **Safety levels:** Stricter for factual, balanced for creative.

---

## Key Takeaways

- **Model selection:** Start with Pro for prototyping and quality baselines, optimize with Flash for cost and speed.
- **Temperature ranges:**
  - `0.0 – 0.3`: Factual, extraction, structured schemas.
  - `0.4 – 1.0`: Balanced chat, summarization, general instruction following.
  - `1.1 – 2.0`: Divergent brainstorming, poetry, and creative ideation.
- **Import from google.genai:** `from google.genai import types`
- **GenerateContentConfig:** Centralizes sampling (`temperature`, `top_p`, `top_k`), resource limits (`max_output_tokens`, `thinking_config`), and safety filters.
- **Safety thresholds:** `BLOCK_LOW_AND_ABOVE` (strictest) down through `BLOCK_ONLY_HIGH`, `BLOCK_NONE`, and `OFF` (disabled).
- **Task-specific optimization:** Configure sampling and reasoning budgets based on task requirements rather than using a single global configuration across all agents.
