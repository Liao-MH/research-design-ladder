# Experiment Matrix Template

Use this when the user needs concrete experiments, training/fitting objectives, parameter design, or stage-by-stage expected outputs.

## Stage Matrix

| Stage | Purpose | Inputs | Main variables | Fixed controls | Metrics | Expected output | Gate to next stage |
|---|---|---|---|---|---|---|---|
| Stage 0 | Data audit | [data] | [none or data filters] | [ID mapping, split rules] | leakage checks, missingness | frozen manifest | no leakage |
| Stage 1 | Fair comparison | [train/val data] | [methods/models] | [budget, metrics, preprocessing] | technical + class/domain metrics | candidate shortlist | stable candidates |
| Stage 2 | Upper-bound | shortlisted methods | [optimized recipes] | equal search budget | best validation metrics | best configs | selected models |
| Stage 3 | Ablation | selected models | [components removed/added] | same data/selection rules | technical + intermediate metrics | causal component evidence | useful component |
| Stage 4 | Downstream utility | fixed representations | [feature groups/models] | train/val/test protocol | outcome metrics | utility table | beats baseline |
| Stage 5 | Robustness | final models | [seeds/cohorts/subgroups] | locked model selection | CI, external metrics | credibility evidence | stable enough |
| Stage 6 | Interpretation | outputs/errors | [case types] | same evaluation set | qualitative + quantitative | figures and claims | manuscript-ready |

## Fair Comparison Design

Use for the first defensible ranking.

Rules:

- same data split
- same preprocessing
- same augmentation or fitting procedure
- same compute budget
- same initialization policy
- same model-selection metric
- same number of seeds or a declared screening seed
- no prior checkpoint inheritance unless all methods share the same staged protocol

Expected output:

> A fair ranking and a shortlist, not the final claim of absolute superiority.

## Upper-Bound Design

Use after fair screening.

Rules:

- allow method-specific recipes only when justified
- give equal hyperparameter search budget
- document all searched ranges
- select on validation only
- rerun selected settings with multiple seeds
- keep test locked

Expected output:

> Best-effort performance and variance for the strongest candidates.

## Ablation Design

Each ablation should answer one causal question:

```text
What does this component add?
What alternative explanation does this remove?
Which metric should change if the component is useful?
```

Common ablations:

- remove proposed component
- replace with simpler component
- use technical metric selection vs outcome-aware selection
- remove domain-specific features
- remove learned embeddings
- remove clinical/context variables
- change training objective
- change data modality

## Downstream Utility Design

Use feature/model groups that isolate value:

- domain baseline only
- technical model output only
- intermediate representation only
- downstream model only
- combined model
- proposed full framework

For each group, state what it proves if it wins.

## Expected Results Format

For every experiment, write:

```text
Expected positive result:
[what should happen]

Minimal acceptable result:
[what still allows the project to continue]

Failure signal:
[what would invalidate or redirect this stage]

Interpretation:
[what conclusion this result supports]
```
