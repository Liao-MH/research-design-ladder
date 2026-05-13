---
name: research-design-ladder
description: Use when designing, reframing, or stress-testing a publishable research project from an initial idea. Trigger for requests about paper design, study design, research proposal structure, experiment planning, benchmark design, clinical/translational validation, hypotheses, baselines, metrics, ablation plans, expected results, risk analysis, or turning a technical comparison into a manuscript-ready evidence chain.
---

# Research Design Ladder

## Purpose

Turn a raw research idea into a paper-oriented study design. The core move is to lift the idea from "what experiments can we run?" to "what evidence chain would convince reviewers that this work answers an important scientific, clinical, or application-level question?"

Use this skill to produce Markdown research plans, proposal outlines, experiment matrices, manuscript evidence packages, or reusable study-design templates.

## Core Principle

Always design from the final claim backward:

```text
Final claim
<- validation needed
<- outcome evidence needed
<- intermediate representation or mechanism needed
<- model/intervention comparison needed
<- data and split integrity needed
```

Do not let the plan become only a list of experiments. Each experiment must support a named claim, hypothesis, stage gate, or risk check.

## Workflow

### 1. Restate the Raw Idea

Briefly restate what the user wants to study. Preserve their domain terms.

Then identify the starting type:

- model or method comparison
- new method or framework
- new data modality
- prediction or prognosis task
- benchmark/resource study
- mechanistic or biological discovery
- translational or clinical utility study
- hybrid of the above

### 2. Elevate the Research Question

Rewrite the raw idea as a higher-level publishable question.

Use this transformation:

```text
Technical variable
-> representation or mechanism difference
-> downstream value
-> validation/generalization
-> publishable claim
```

Example pattern:

```text
Raw idea: Compare several backbones.
Elevated question: Do different foundation backbones produce representations that differ in clinically meaningful downstream utility, not merely technical scores?
```

### 3. Classify Contribution Type

Name the likely contribution shape:

- Method: a new algorithm, training strategy, model, or framework
- Benchmark: a systematic comparison that yields insight
- Translational: evidence of real-world, clinical, or operational value
- Mechanistic: explanation of a biological, behavioral, or system mechanism
- Resource: dataset, annotation, tool, protocol, or evaluation standard
- Hybrid: a deliberate mix, such as Benchmark + Translational + Light Method

State which contribution should be primary and which should be supporting.

### 4. Build Research Questions

Split questions into:

- Primary research question: the single claim the paper must prove
- Secondary questions: support and explain the primary result
- Exploratory questions: useful but not required for the main claim

Keep the primary question narrow enough to test.

### 5. Build the Hypothesis Chain

Write hypotheses that can be falsified. Prefer this structure:

```text
H1: The technical variable changes an intermediate representation.
H2: The intermediate representation changes downstream performance or utility.
H3: The downstream gain remains after relevant baselines or confounders.
H4: The finding is stable across splits, seeds, cohorts, or sensitivity checks.
```

Each hypothesis must map to at least one experiment.

### 6. Build the Evidence Chain

Create a chain from input to final claim:

```text
Input/Data
-> Model/Intervention
-> Intermediate representation
-> Derived biomarker/mechanism/system signal
-> Downstream outcome
-> Validation
-> Claim
```

If any link is missing, mark it as a design gap.

### 7. Split the Study into Stages

Use staged design rather than a giant experiment grid.

Default stages:

```text
Stage 0: Data audit, task definition, and leakage control
Stage 1: Fair comparison under a unified protocol
Stage 2: Best-effort or upper-bound optimization
Stage 3: Ablations and mechanism checks
Stage 4: Downstream task or clinical/application utility
Stage 5: Robustness, external validation, and statistical credibility
Stage 6: Interpretation, failure analysis, and manuscript evidence package
```

For each stage, specify:

- purpose
- inputs
- variables being tested
- fixed controls
- expected output artifacts
- expected results
- stage gate for moving forward
- risk signals and failure modes

### 8. Separate Fair Comparison from Upper Bound

Never mix these two tables:

- Fair comparison: same data, budget, initialization policy, augmentations, metrics, and selection rules
- Upper-bound comparison: each method may use a reasonable optimized recipe, but search budget must be equal and documented

Make clear which results support fairness and which support maximum potential.

### 9. Define Baselines and Controls

Include at least these baseline classes when applicable:

- naive or simple baseline
- domain or clinical baseline
- strong modern baseline
- ablated version of the proposed approach
- upper-bound or oracle baseline, if reasonable
- external published baseline, if available

Explain what each baseline rules out.

### 10. Define Metric Hierarchy

Separate metrics into:

- Technical metrics: direct model/task performance
- Intermediate metrics: representation, mechanism, biomarker, or feature quality
- Outcome metrics: final scientific, clinical, or application value

Do not let technical metrics alone justify high-level claims.

### 11. Define Validation and Statistics

Include the credibility checks relevant to the domain:

- patient/user/group-level split if data units are correlated
- no train/validation/test leakage
- test set not used for tuning
- multiple seeds or resampling
- confidence intervals
- external validation, temporal validation, or held-out-domain validation
- sensitivity analyses
- confounder adjustment
- missing data plan
- censoring handling for survival tasks
- multiple-comparison handling for broad exploratory analyses

### 12. Write Expected Results and Interpretation Matrix

Do not only define ideal results. Also define how to interpret non-ideal outcomes:

```text
If A improves technical metrics and outcome metrics: what does it support?
If A improves technical metrics but not outcome metrics: what does it mean?
If A improves outcome metrics without improving technical metrics: what insight emerges?
If results only hold internally: what limitation remains?
If the baseline wins: what can still be learned?
```

This makes the study resilient and prevents "all or nothing" framing.

### 13. Produce the Manuscript Evidence Package

End with a concrete paper package:

- proposed title directions
- main claim and subclaims
- required figures
- required tables
- main experiments
- ablations
- robustness checks
- failure analyses
- minimum publishable version
- strong version
- top-tier version

## Output Modes

Choose the output mode based on the user's request.

### Short Design Diagnosis

Use when the user asks whether an idea is publishable or worth doing. Output:

- elevated research question
- likely contribution type
- strongest paper angle
- major weaknesses
- next 3 actions

### Full Research Design

Use when the user asks for a complete design. Read `references/framework-template.md` and output a full Markdown plan.

### Experiment Matrix

Use when the user asks what experiments to run. Read `references/experiment-matrix-template.md` and output staged experiments with variables, controls, metrics, and expected results.

### Review-Readiness Check

Use when the user asks whether the design is strong enough for a venue. Read `references/manuscript-evidence-checklist.md` and evaluate missing evidence.

## Artifact Instructions

When asked to create a file, create a Markdown file in the user-specified location. If the user is working inside a repository and gives no location, prefer `docs/plans/YYYY-MM-DD-<topic>-research-design.md`.

Write in the user's language unless they ask otherwise. Use concrete placeholders only when information is genuinely unavailable, and label assumptions explicitly.
