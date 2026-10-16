"""CLI Test Runner for ADK 2.0 News Analyser Agent Fleet.

Executes any of the specialized agents directly via live Gemini models or offline simulation:
    python run_cli.py "NASA Artemis Moon Mission"
    python run_cli.py --agent fact_verifier "Federal court issues injunction on PERM rule"
    python run_cli.py --agent tutor_agent "US Tech Policy Changes"
    python run_cli.py --agent perspective_debate "Nuclear Energy Clean Transition"
    python run_cli.py --agent research_copilot "What are the latest updates on Starship?"
    python run_cli.py --agent timeline_agent "Global Semiconductor Subsidies"
    python run_cli.py --agent scenario_prediction "Central Bank Interest Rate Decisions"
"""

from __future__ import annotations

import argparse
import asyncio
import os
import sys
import time
from pathlib import Path

# Ensure utf-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

# Add project root to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

from shared.config import (
    IS_SIMULATION_MODE,
    MODEL_AGENT_FAST,
    MODEL_REASONING_PRO,
    logger,
)
from shared.plugins.evidence_ledger import EvidenceLedgerPlugin
from shared.plugins.token_tracker import TokenTrackerPlugin
from shared.plugins.news_guardrail import NewsGuardrailPlugin
from shared.simulation import _route_simulation_response

# Agent imports
from news_analyser.agent import root_agent as news_agent
from fact_verifier.agent import root_agent as fact_agent
from tutor_agent.agent import root_agent as tutor_agent_obj
from research_copilot.agent import root_agent as copilot_agent
from perspective_debate.agent import root_agent as debate_agent
from timeline_agent.agent import root_agent as timeline_agent_obj
from scenario_prediction.agent import root_agent as scenario_agent

AGENTS_MAP = {
    "news_analyser": news_agent,
    "fact_verifier": fact_agent,
    "tutor_agent": tutor_agent_obj,
    "research_copilot": copilot_agent,
    "perspective_debate": debate_agent,
    "timeline_agent": timeline_agent_obj,
    "scenario_prediction": scenario_agent,
}


async def run_agent_live(agent_name: str, query: str):
    """Executes the selected agent through the ADK Runner with plugins."""
    target_agent = AGENTS_MAP.get(agent_name, news_agent)
    
    # Instantiate plugins for audit logging and performance telemetry
    evidence_plugin = EvidenceLedgerPlugin()
    token_plugin = TokenTrackerPlugin()
    guardrail_plugin = NewsGuardrailPlugin()

    # Pre-screen prompt with guardrail
    violation = guardrail_plugin.validate_user_prompt(query)
    if violation:
        print(f"\n[GUARDRAIL INTERCEPTION]\n{violation}\n")
        return

    session_service = InMemorySessionService()
    runner = Runner(
        app_name=agent_name,
        agent=target_agent,
        session_service=session_service,
        plugins=[evidence_plugin, token_plugin, guardrail_plugin],
    )

    session = await session_service.create_session(
        app_name=agent_name,
        user_id="cli_investigator",
    )

    user_content = types.Content(
        parts=[types.Part.from_text(text=query)],
        role="user",
    )

    from google.adk.tools.function_tool import _SYNC_CALLABLE_RUNNER
    token = _SYNC_CALLABLE_RUNNER.set(lambda target, args: asyncio.to_thread(target, **args))

    print("Executing agent workflow through Google Gemini...")
    start_time = time.time()
    collected_text = []

    try:
        async for event in runner.run_async(
            user_id="cli_investigator",
            session_id=session.id,
            new_message=user_content,
        ):
            if hasattr(event, "content") and event.content:
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        collected_text.append(part.text)
                        print(part.text, end="", flush=True)
    finally:
        _SYNC_CALLABLE_RUNNER.reset(token)

    elapsed = time.time() - start_time
    print()
    print("-" * 80)
    print(f"Execution completed in {elapsed:.2f}s | Agent: {agent_name} | Model: {getattr(target_agent, 'model', 'Gemini')}")

    # Display evidence citations if recorded
    ledger = evidence_plugin.get_ledger()
    if ledger:
        print(f"\n[Evidence Ledger Audit Trail - {len(ledger)} actions recorded]:")
        for idx, entry in enumerate(ledger[:5], 1):
            print(f"  {idx}. Tool: {entry['tool']} | Args: {entry['args']}")


def main():
    parser = argparse.ArgumentParser(description="Run News Analyser Agent Fleet in CLI")
    parser.add_argument(
        "query",
        nargs="?",
        default="U.S. Administration Halting PERM Program for Tech Companies H-1B",
        help="Topic, headline, or claim to evaluate",
    )
    parser.add_argument(
        "--agent",
        choices=list(AGENTS_MAP.keys()),
        default="news_analyser",
        help="Agent to run (default: news_analyser)",
    )
    parser.add_argument(
        "--force-mock",
        action="store_true",
        help="Force offline simulation even if API key is present",
    )
    args = parser.parse_args()

    use_live = (not IS_SIMULATION_MODE) and (not args.force_mock)
    mode_str = "LIVE (Google Gemini API)" if use_live else "SIMULATION (Dynamic Offline Heuristics)"

    print("=" * 80)
    print(f"ADK 2.0 News Intelligence Runner | Mode: {mode_str}")
    print(f"Selected Agent: {args.agent}")
    print(f"Input Query:    {args.query}")
    print("=" * 80)
    print()

    if use_live:
        try:
            asyncio.run(run_agent_live(args.agent, args.query))
        except Exception as e:
            logger.error("Live execution encountered exception: %s. Engaging dynamic fallback.", e)
            print(f"\n[Notice: Error in live execution ({e}), falling back to dynamic intelligence synthesis]:\n")
            output = _route_simulation_response(args.agent, args.query)
            print(output)
    else:
        output = _route_simulation_response(args.agent, args.query)
        print(output)

    print("=" * 80)
    print("Run completed successfully.")


if __name__ == "__main__":
    main()
