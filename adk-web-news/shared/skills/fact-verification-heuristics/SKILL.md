---
name: fact-verification-heuristics
description: Professional International Fact-Checking Network (IFCN) verification principles and logical fallacy detection heuristics for agentic news analysis.
---

# Fact Verification Heuristics Skill

## 1. Principles of Verification (IFCN Code of Principles)
1. **Commitment to Nonpartisanship and Fairness**: Assess claims using the same evidentiary standards regardless of political affiliation or ideological perspective.
2. **Commitment to Standards and Transparency of Sources**: Prioritize primary sources (government gazettes, audited balance sheets, peer-reviewed studies, signed treaties). Always link or cite direct source passages.
3. **Commitment to Transparency of Methodology**: Explicitly state the verification method:
   - Numerical comparison against baseline statistics
   - Cross-referencing against primary documentation
   - Causal audit (distinguishing correlation from causation)
4. **Commitment to Open and Honest Corrections**: When evidence is incomplete or ambiguous, flag confidence as `< 0.70` and status as `UNVERIFIED` rather than asserting false certainty.

## 2. Common Fallacies to Identify in News Reporting
- **Cherry-Picking (Card Stacking)**: Highlighting one isolated statistic while concealing macro trends.
- **False Equivalence**: Presenting two opposing arguments as equally supported by evidence when the consensus heavily favors one.
- **Equivocation / Shifting Definitions**: Conflating "pledged aid" with "disbursed aid", or "gross commitments" with "new appropriations".
- **Post Hoc Ergo Propter Hoc**: Asserting that because Event B occurred after Policy A, Policy A caused Event B without controlling for external variables.
- **Anonymous Source Over-Reliance**: Elevating unsourced leaks to established facts without corroborating on-the-record statements.

## 3. Claim Categorization Matrix
| Category | Definition | Verification Standard |
| :--- | :--- | :--- |
| **Factual Assertion** | Concrete statement regarding dates, amounts, attendees, or occurrences. | Binary verification against primary sources. |
| **Statistical Claim** | Quantitative measurement, percentage, or index. | Verify denominator, time interval, and baseline. |
| **Causal Claim** | Assertion that X caused Y. | Examine counterfactuals, confounding factors, and expert consensus. |
| **Forward Projection** | Prediction of future outcomes. | Evaluate forecasting methodology and assumption plausibility. |
| **Value Judgment** | Subjective moral or aesthetic opinion. | Classify as framing/opinion; do not verify as empirical truth. |
