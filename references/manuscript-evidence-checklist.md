# Manuscript Evidence Checklist

Use this checklist to evaluate whether a research design is ready for a strong paper, and what evidence is missing.

## Core Claim Check

- Is there one primary claim?
- Is the primary claim more important than a technical score increase?
- Does every main experiment support the primary claim?
- Are secondary and exploratory claims clearly separated?
- Is there a result scenario where the paper still produces insight even if the preferred method is not best?

## Data Integrity Check

- Are data units defined?
- Are correlated units split correctly?
- Is leakage explicitly checked?
- Is the test set locked?
- Is there an external, temporal, site-based, or domain-held-out validation?
- Are inclusion and exclusion rules documented?
- Is missing data handled without leakage?

## Comparison Fairness Check

- Are fair-comparison and upper-bound results separated?
- Does each method receive equal search budget in the relevant table?
- Are initialization, checkpoint inheritance, and resume policies clear?
- Are model-selection metrics predefined?
- Are compute budget and training time reported when relevant?

## Baseline Check

- Is there a naive/simple baseline?
- Is there a domain or clinical baseline?
- Is there a strong modern baseline?
- Is there an ablated proposed method?
- Is there an external published baseline if available?
- Does each baseline rule out a concrete alternative explanation?

## Metric Check

- Are technical metrics separated from outcome metrics?
- Is the primary metric justified?
- Are class-specific or subgroup metrics included when averages can hide failures?
- Are cost, efficiency, calibration, or reliability metrics included when relevant?
- Are confidence intervals reported?

## Statistical Credibility Check

- Are multiple seeds, bootstrap, or resampling used?
- Are confidence intervals reported for main comparisons?
- Are paired tests used when comparing models on the same samples?
- Are confounders adjusted when relevant?
- Is multiple-comparison risk handled or labelled exploratory?
- Is sample size or event count adequate for model complexity?

## Downstream Utility Check

- Does the study connect intermediate representation to downstream value?
- Does the downstream task have a strong baseline?
- Is improvement shown beyond the baseline, not only alone?
- Is the downstream model selected without test leakage?
- Are negative downstream results interpretable?

## Interpretation Check

- Are success cases shown?
- Are failure cases shown?
- Are subgroup or heterogeneity analyses included?
- Is there a plausible mechanism or representation-level explanation?
- Are limitations stated without weakening the main contribution?

## Manuscript Package Check

Required artifacts:

- main study overview figure
- data/split/cohort table
- fair comparison table
- upper-bound or best-effort table
- ablation table
- downstream utility table
- robustness/external validation table
- interpretation or failure-case figure
- reproducibility details

## Version Readiness

Minimum publishable version:

- clean data split
- credible baselines
- main experiments
- primary metric
- basic robustness
- honest limitations

Strong version:

- multiple seeds
- confidence intervals
- ablations
- downstream utility
- subgroup/sensitivity analysis

Top-tier version:

- external validation
- clear method or framework contribution
- strong domain baseline
- robust statistical analysis
- interpretable mechanism
- evidence that technical gains matter for real-world value
