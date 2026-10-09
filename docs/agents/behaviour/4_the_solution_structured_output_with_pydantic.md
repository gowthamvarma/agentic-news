# The Solution: Structured Output with Pydantic

## Table of Contents

- [Enforcing JSON with `output_schema`](#enforcing-json-with-output_schema)
- [Core Concepts](#core-concepts)
  - [1. Defining Schemas with Pydantic](#1-defining-schemas-with-pydantic)
  - [2. Using `output_schema` in Agents](#2-using-output_schema-in-agents)
  - [3. Storing Results with `output_key`](#3-storing-results-with-output_key)
  - [Important Note About Multi-Agent Workflows](#important-note-about-multi-agent-workflows)
  - [4. Complex Schemas](#4-complex-schemas)
  - [Important: Schema Completeness](#important-schema-completeness)
- [Hands-on Example](#hands-on-example)
  - [Step 1: Create the Project](#step-1-create-the-project)
  - [Step 2: Write the Agent with Structured Output](#step-2-write-the-agent-with-structured-output)
  - [Step 3: Run and Test](#step-3-run-and-test)
  - [What to Notice](#what-to-notice)
- [Key Takeaways](#key-takeaways)

---

## Enforcing JSON with `output_schema`

> **Reference:** ADK docs — Structuring data

According to ADK documentation, use Pydantic `BaseModel` to define the exact structure you need:

```python
from google.adk.agents import LlmAgent
from pydantic import BaseModel, Field

class ProductInfo(BaseModel):
    product_name: str = Field(description="The name of the product")
    price: float = Field(description="The price in USD")
    storage: str = Field(description="The storage capacity")

structured_agent = LlmAgent(
    model="gemini-flash-latest",
    name="structured_product_agent",
    description="Extracts product information and enforces strict JSON output",
    instruction="""Extract product information and respond with JSON.
Format: {"product_name": "name", "price": 999.99, "storage": "256GB"}""",
    output_schema=ProductInfo  # Enforces this exact structure
)
```

> *"output_schema (optional): Define a schema representing the desired output structure. If set, the agent’s final response must be a JSON string conforming to this schema."*
>
> — *ADK docs*

Under the hood, Agent Platform leverages native model-level constrained decoding (controlled generation) to enforce schema compliance.

---

## Core Concepts

> **Reference:** ADK docs — Structure data input and output

### 1. Defining Schemas with Pydantic

Create a Pydantic model that represents your desired output:

```python
from pydantic import BaseModel, Field

class CapitalOutput(BaseModel):
    capital: str = Field(description="The capital of the country")
```

#### Key Points:

- **Must inherit from `BaseModel`:** You cannot use Python dictionaries or plain classes.
- **Typed fields:** Each field has a type (`str`, `float`, `int`, `bool`, etc.).
- **Field descriptions:** Use `Field(description=...)` to help the LLM understand each field.
- **Pass the class itself:** Pass the class itself to `output_schema`, not an instance: `output_schema=CapitalOutput`.

> [!IMPORTANT]
> According to ADK documentation, *"The input and output schema is typically a Pydantic BaseModel."* You must define your schema as a Pydantic class—dictionaries like `{"name": "string"}` will not work.

---

### 2. Using `output_schema` in Agents

> **Reference:** ADK Docs — Structuring Data

Apply the schema to your agent:

```python
structured_agent = LlmAgent(
    model="gemini-flash-latest",
    name="capital_finder",
    description="Returns country capital information in a structured schema",
    instruction="""You are a Capital Information Agent.
Given a country, respond ONLY with a JSON object containing the capital.
Format: {"capital": "capital_name"}""",
    output_schema=CapitalOutput  # Enforce JSON output
)
```

#### What This Does:

- The agent must return JSON matching the schema.
- Invalid responses fail validation automatically (`pydantic.ValidationError`).
- Your code gets guaranteed structure.

---

### 3. Storing Results with `output_key`

> **Reference:** ADK Docs — `output_key`

Save the agent’s response to session state for later use:

```python
structured_agent = LlmAgent(
    model="gemini-flash-latest",
    name="capital_extractor",
    description="Extracts and writes country capital to session state",
    instruction="Extract capital city as JSON",
    output_schema=CapitalOutput,
    output_key="found_capital"  # Store in session.state["found_capital"]
)
```

> *"output_key (optional): Provide a string key. If set, the text content of the agent’s final response will be automatically saved to the session’s state dictionary under this key."*
>
> — *ADK docs*

#### Use Cases:

- **Inter-agent data sharing:** Passing data between agents in workflows.
- **State & Persistence:** Storing extracted information for later processing or persistence in Agent Platform Memory Bank.
- **Pipelines:** Building multi-step pipelines.

---

### Important Note About Multi-Agent Workflows

While this module shows `output_schema` on the `root_agent`, structured output is equally valuable for intermediate sub-agents in multi-agent workflows (covered in Course 5). When you have multiple agents working together, using `output_schema` on sub-agents ensures consistent data format when passing information between agents.

For example:

```python
# Sub-agent extracts structured data
extraction_agent = LlmAgent(
    model="gemini-flash-latest",
    name="data_extractor",
    description="Sub-agent extracting product specifications",
    output_schema=ProductInfo,  # Structured output for next agent
    output_key="extracted_data"
)

# Another agent uses that structured data
analysis_agent = LlmAgent(
    model="gemini-flash-latest",
    name="data_analyzer",
    description="Sub-agent analyzing extracted product specifications",
    instruction="Analyze the product data found in session state under extracted_data."
    # Receives structured data from extraction_agent via session state
)
```

You can use structured output at any agent level—root or intermediate—depending on where you need guaranteed data formats.

---

### 4. Complex Schemas

Build more sophisticated structures:

```python
from pydantic import BaseModel, Field
from typing import List, Optional

class ProductDetails(BaseModel):
    name: str = Field(description="Product name")
    price: float = Field(description="Price in USD")
    storage_options: List[str] = Field(description="Available storage capacities")
    in_stock: bool = Field(description="Whether the product is in stock")
    discount: Optional[float] = Field(default=None, description="Discount percentage if any")

product_agent = LlmAgent(
    model="gemini-flash-latest",
    name="product_detail_agent",
    description="Extracts detailed product specifications including inventory and discounts",
    instruction="""Extract complete product information as JSON.
Include: name, price, storage_options (list), in_stock (boolean), and discount (if mentioned).""",
    output_schema=ProductDetails
)
```

#### Supported Types:

- **Basic:** `str`, `int`, `float`, `bool`
- **Collections:** `List[T]`, `Dict[str, T]`
- **Optional:** `Optional[T]` for nullable fields
- **Nested:** Other `BaseModel` classes

---

### Important: Schema Completeness

The schema defines the exact output structure. The LLM will only include fields you define in your Pydantic `BaseModel`. If you need nested objects like metadata, errors, or pagination in your output, you must explicitly define them all in the schema:

```python
from pydantic import BaseModel, Field
from typing import List, Dict, Any

class ApiResponse(BaseModel):
    status: str = Field(description="success, error, or partial")
    status_code: int = Field(description="HTTP status code")
    data: Dict[str, Any] = Field(description="Main response data")
    metadata: Dict[str, Any] = Field(description="Request metadata")  # Must define to appear
    errors: List[str] = Field(default=[], description="Error messages if any")

# Without 'metadata' in the schema, the model won't include it in output
# The schema is a contract—only defined fields appear in responses
```

This ensures you get exactly the structure you need, nothing more, nothing less.

---

## Hands-on Example

Let’s build a complete product extraction agent with structured output.

### Step 1: Create the Project

```bash
adk create product_extractor
cd product_extractor
```

### Step 2: Write the Agent with Structured Output

Replace the contents of `agent.py` with:

```python
"""
Product extraction agent with structured JSON output.
Demonstrates ADK's output_schema with Pydantic BaseModel on Agent Platform.
"""

from google.adk.agents import LlmAgent
from pydantic import BaseModel, Field

# Step 1: Define the output structure with Pydantic
class ProductInfo(BaseModel):
    product_name: str = Field(description="The full name of the product")
    price: float = Field(description="The price in USD")
    storage: str = Field(description="Storage capacity (e.g., '256GB')")
    color: str = Field(default="Not specified", description="Product color if mentioned")

# Step 2: Create agent with output_schema
root_agent = LlmAgent(
    model="gemini-flash-latest",
    name="product_extractor",
    description="Extracts product information from user messages and returns structured JSON",
    instruction="""You are a Product Information Extractor.

Your task:
- Read the user's message about a product
- Extract: product_name, price, storage, and color (if mentioned)
- Respond ONLY with valid JSON matching this format:

{
  "product_name": "product name here",
  "price": 999.99,
  "storage": "256GB",
  "color": "Space Black"
}

Rules:
- price must be a number (no dollar signs)
- storage must include unit (GB, TB)
- If color not mentioned, use "Not specified"
- Output ONLY the JSON, no explanation text""",
    output_schema=ProductInfo,      # Enforce this exact structure
    output_key="extracted_product"  # Store result in session state
)
```

### Step 3: Run and Test

```bash
adk web
```

Visit [http://localhost:8000](http://localhost:8000) and test these inputs:

#### Test 1: Complete Information

- **User Input:** `"I want the iPhone 15 Pro with 256GB in Space Black for $999"`
- **Expected JSON Output:**

```json
{
  "product_name": "iPhone 15 Pro",
  "price": 999.0,
  "storage": "256GB",
  "color": "Space Black"
}
```

#### Test 2: Missing Color

- **User Input:** `"Samsung Galaxy S24 with 512GB, costs $1199"`
- **Expected JSON Output:**

```json
{
  "product_name": "Samsung Galaxy S24",
  "price": 1199.0,
  "storage": "512GB",
  "color": "Not specified"
}
```

#### Test 3: Different Format

- **User Input:** `"Get me a MacBook Pro 1TB, price is $2499"`
- **Expected JSON Output:**

```json
{
  "product_name": "MacBook Pro",
  "price": 2499.0,
  "storage": "1TB",
  "color": "Not specified"
}
```

### What to Notice:

- **Always valid JSON:** Output is always valid JSON.
- **Deterministic schema:** Same structure every time.
- **Graceful defaults:** Missing fields get default values.
- **Easy to parse:** Clean and predictable to consume downstream.

---

## Key Takeaways

- **Controlled Generation:** `output_schema` enforces structured JSON output using Pydantic `BaseModel` via Agent Platform controlled generation.
- **Pass the class (not an instance):** `output_schema=ProductInfo`.
- **State Persistence:** `output_key` stores results in session state for workflow integration and persistence in Memory Bank.
- **Decouple logic from structure:** Use instructions to specify extraction rules and intent, while relying entirely on `output_schema` to enforce format, types, and defaults.
- **Automatic validation:** Invalid responses are rejected via Pydantic validation (`pydantic.ValidationError`).
- **Field descriptions:** Use `Field(description=...)` to help the LLM understand each field's purpose.
