# The Solution: Built-In Tools

## Production-Ready Capabilities

> **Reference:** ADK Docs — Tools and Integrations for Agents

ADK provides pre-built, production-ready tools for common tasks:

- **Google Search:** Web search with grounding and source citations.
- **Code Execution:** Execute Python code safely in a sandbox.
- **Agent Search on Gemini Enterprise Agent Platform:** Search enterprise documents.
- **RAG Engine on Gemini Enterprise Agent Platform:** Managed Retrieval-Augmented Generation.
- **BigQuery:** Query enterprise data warehouses.
- **Spanner:** Query Cloud Spanner relational databases.
- **Bigtable:** Query NoSQL Bigtable databases.

> **Scope:** This lesson focuses on **Google Search** (real-time information) and **Code Execution** (precise computation).

---

## Core Concepts

### 1. Google Search Tool

> **Reference:** ADK Docs — Google Search
>
> “The `google_search` tool allows the agent to perform web searches using Google Search. The `google_search` tool is only compatible with Gemini 2 models.”
>
> — *ADK Docs*

#### What It Provides
- Real-time web search results.
- Authoritative, up-to-date information beyond model training cutoffs.
- Automatic grounding of responses in external sources.
- Grounding metadata with search suggestions.

#### How to Use

```python
from google.adk.agents import LlmAgent
from google.adk.tools import google_search  # Import built-in tool

search_agent = LlmAgent(
    model="gemini-flash-latest",  # Must use Gemini 2.0 or later
    name="search_agent",
    instruction="You help users find information using web search.",
    tools=[google_search]         # Add Google Search tool
)
```

#### Key Differences from Custom Tools
- **Import instead of define:** `from google.adk.tools import google_search`.
- **Zero plumbing:** ADK manages API authorization, request dispatch, and response formatting.
- **Production-ready:** Maintained, monitored, and optimized by Google.
- **Model requirement:** Requires Gemini 2.0+ models.

#### How Grounding Works
1. Agent identifies that up-to-date or external data is needed.
2. Agent generates an optimized search query.
3. Google Search executes and returns authoritative web content.
4. Agent synthesizes findings into a natural language response.
5. Grounding citations and source links are appended.

> [!IMPORTANT]
> **Mandatory Policy Requirement:** When using Google Search grounding, you **MUST** display search suggestions (`renderedContent`) in your application UI per Google Search usage policies.

```python
# In your application code (outside agent.py)
response = runner.run(...)
if hasattr(response, 'rendered_content') and response.rendered_content:
    # Mandatory policy compliance: display search suggestions in UI
    display_html(response.rendered_content)
```

---

### 2. Code Execution Tool

> **Reference:** ADK Docs — Code Execution
>
> “The `built_in_code_execution` tool enables the agent to execute code, specifically when using Gemini 2 and higher models. This allows the model to perform tasks like calculations, data manipulation, or running small scripts.”
>
> — *ADK Docs*

#### What It Provides
- Safe Python code execution in a secure sandbox.
- Exact arithmetic and deterministic mathematics without LLM approximation.
- Data transformation, array filtering, and string formatting.
- Statistical calculations, formula evaluation, and algorithmic reasoning.

#### How to Use

```python
from google.adk.agents import LlmAgent
from google.adk.code_executors import BuiltInCodeExecutor

code_agent = LlmAgent(
    model="gemini-flash-latest",            # Must use Gemini 2.0 or later
    name="code_agent",
    instruction="You help users with calculations and data processing.",
    code_executor=BuiltInCodeExecutor()     # Configured via code_executor parameter
)
```

> [!NOTE]
> Code execution is configured via the `code_executor` parameter on `LlmAgent`, **not** in the `tools` list.

#### Execution Walkthrough
- **User Query:** *"Calculate the compound interest on $10,000 at 5% annual rate for 10 years"*
- **Agent Workflow:**
  1. Identifies that precise computation is needed.
  2. Generates Python code:
     ```python
     principal = 10000
     rate = 0.05
     time = 10
     amount = principal * (1 + rate) ** time
     interest = amount - principal
     print(f"Interest: {interest:.2f}, Total: {amount:.2f}")
     ```
  3. Executes the code in the sandbox.
  4. Synthesizes output: *"The compound interest is $6,288.95, bringing the total amount to $16,288.95."*

---

### 3. Built-In Tools and Session State (Preview)

Built-in tools integrate seamlessly with session state for context-aware workflows:
- Google Search queries can leverage user location or language from `user:` state namespaces.
- Calculation results from Code Execution can be preserved in state across conversation turns.

```python
# User preference stored in state
session.state["user:preferred_units"] = "metric"

# Agent instruction utilizing state templating
instruction = """
When performing calculations, use {user:preferred_units?imperial} units.
Always use code execution for numerical calculations.
"""
```

---

### 4. Built-In vs. Custom Function Tools

| Dimension | Built-In Tools | Custom Function Tools |
| :--- | :--- | :--- |
| **Setup** | Import and configure | Write Python function + docstrings |
| **Maintenance** | Maintained & updated by Google | Maintained by your team |
| **Optimization** | Built-in token and context optimization | Developer manages response size |
| **Customization** | Pre-packaged parameters | Fully customizable logic and APIs |
| **Examples** | `google_search`, `BuiltInCodeExecutor` | `calculate_shipping`, `get_capital_city` |
| **Best For** | Common capabilities (search, math, RAG) | Proprietary business rules and private databases |

---

### 5. Architectural Limitations and Multi-Agent Patterns

> [!WARNING]
> In standard single-agent configurations, built-in tools cannot be mixed freely with custom function tools, nor can multiple built-in tools be attached to the same single agent.

```python
# ❌ UNSUPPORTED in basic single-agent configuration: Mixing built-in & custom tools
root_agent = LlmAgent(
    model="gemini-flash-latest",
    tools=[google_search, my_custom_tool]
)

# ❌ UNSUPPORTED in basic single-agent configuration: Multiple built-in tools
root_agent = LlmAgent(
    model="gemini-flash-latest",
    tools=[google_search],
    code_executor=BuiltInCodeExecutor()
)
```

**Recommended Solution:** Decouple capabilities across specialized agents using multi-agent architectures (covered in future orchestration modules), or use the Python SDK's `bypass_multi_tools_limit=True` flag where applicable.

---

## Hands-On Examples

### Example 1: Research Assistant with Google Search

#### Step 1: Create Project
```bash
adk create research_assistant
cd research_assistant
```

#### Step 2: Agent Implementation (`agent.py`)
```python
"""
Research Assistant Agent
Demonstrates ADK's Google Search built-in tool for real-time information.

Reference: https://adk.dev/integrations/google-search/
"""

from google.adk.agents import LlmAgent
from google.adk.tools import google_search

root_agent = LlmAgent(
    model="gemini-flash-latest",  # Must use Gemini 2.0+
    name="research_assistant",
    description="Helps users research topics using Google Search.",
    instruction="""
    You are a research assistant that helps users find accurate, up-to-date information.

    Your approach:
    1. When users ask questions requiring current information, use Google Search
    2. Base your answers on the search results
    3. Cite sources when providing information
    4. If search results are insufficient, acknowledge limitations

    Always prioritize accuracy over speculation. If you're unsure, say so.
    """,
    tools=[google_search]
)
```

#### Step 3: Run and Test
```bash
adk web
```

#### Test Scenarios
1. **Current Events:** *"What are the latest developments in renewable energy?"* → Performs web search, returns real-time developments with citations.
2. **Factual Verification:** *"Who is the current CEO of Microsoft?"* → Grounded query returns verified factual answer.
3. **Comparative Analysis:** *"Compare electric vehicles and hydrogen fuel cell vehicles"* → Synthesizes multi-source search results into a structured comparison.

---

### Example 2: Math Assistant with Code Execution

#### Step 1: Create Project
```bash
adk create math_assistant
cd math_assistant
```

#### Step 2: Agent Implementation (`agent.py`)
```python
"""
Math Assistant Agent
Demonstrates ADK's Code Execution built-in tool for calculations.

Reference: https://adk.dev/integrations/code-execution/
"""

from google.adk.agents import LlmAgent
from google.adk.code_executors import BuiltInCodeExecutor

root_agent = LlmAgent(
    model="gemini-flash-latest",  # Must use Gemini 2.0+
    name="math_assistant",
    description="Helps users with mathematical calculations and analysis.",
    instruction="""
    You are a math assistant that helps users with calculations and mathematical analysis.

    Your capabilities:
    1. When users ask for calculations, use code execution for precision
    2. Show your work by explaining the calculation steps
    3. Verify results by running the code
    4. Handle complex mathematical operations (statistics, algebra, etc.)

    Always use code execution for numerical calculations to ensure accuracy.
    """,
    code_executor=BuiltInCodeExecutor()
)
```

#### Step 3: Run and Test
```bash
adk web
```

#### Test Scenarios
1. **Simple Calculation:** *"Calculate 15% tip on a $87.50 bill"* → Computes `87.50 * 0.15 = 13.125` → `$13.13`.
2. **Compound Interest:** *"What's the compound interest on $5,000 invested at 6% annual rate for 8 years, compounded monthly?"* → Generates script, executes monthly formula, and outputs exact total.
3. **Statistical Analysis:** *"Calculate the average, median, and standard deviation of: 12, 15, 18, 20, 22, 25, 28, 30"* → Runs Python statistics library and outputs verified values.

---

## Key Takeaways

- **Built-in tools** offer zero-boilerplate, production-grade integrations maintained directly by ADK.
- **`google_search`** enables web grounding and citations, requiring Gemini 2.0+ and UI display of suggestions.
- **`BuiltInCodeExecutor`** provides deterministic code execution via the `code_executor` parameter.
- Basic configurations restrict agents to a single built-in capability; multi-agent patterns should be used to combine search, code execution, and custom tools.
