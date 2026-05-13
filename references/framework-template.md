# Full Research Design Template

Use this template when the user requests a complete paper-oriented research design. Adapt headings to the domain, but preserve the evidence-chain logic.

## 1. Project Title

Provide 3-5 possible titles. Prefer titles that name the scientific or application value, not only the technique.

## 2. Raw Idea and Elevated Framing

State:

- the user's raw idea
- why the raw framing may be too technical, narrow, or benchmark-like
- the elevated research question
- the final value the study should prove

Use this structure:

```text
Raw idea:
[technical comparison or method]

Elevated question:
[technical variable] -> [representation/mechanism] -> [downstream value] -> [validated claim]
```

## 3. Contribution Type

Classify the project as one or more:

- Method
- Benchmark
- Translational/Application
- Mechanistic
- Resource

Then state:

- primary contribution
- secondary contribution
- what the paper should not overclaim

## 4. Research Questions

Include:

- Primary research question
- Secondary research questions
- Exploratory questions

Keep exploratory questions separate from required claims.

## 5. Hypotheses

Write H1-Hn. Each hypothesis should be testable and mapped to experiments.

Recommended pattern:

```text
H1: [technical intervention] changes [intermediate representation].
H2: [intermediate representation] improves [downstream outcome].
H3: The gain remains after [baseline/confounder/control].
H4: The finding is robust across [seed/split/cohort/domain/time].
```

## 6. Evidence Chain

Represent the chain as text or Mermaid:

```text
Input/Data
-> Model/Intervention
-> Intermediate representation
-> Derived mechanism/biomarker/system signal
-> Downstream outcome
-> Validation
-> Claim
```

After the chain, list any weak or missing links.

## 7. Data Design

Cover:

- data sources
- data unit hierarchy, such as patient-slide-tile or user-session-event
- annotation or label source
- target/outcome definition
- train/validation/test/external split
- leakage risks
- missing data
- inclusion/exclusion criteria
- sample size and effective event/sample count

Expected result:

> A reproducible manifest and split protocol.

## 8. Model or Intervention Design

Cover:

- methods/models/interventions compared
- fixed components
- variable components
- initialization policy
- training or fitting objective
- fair-comparison protocol
- upper-bound protocol
- compute or resource budget

State clearly when different methods may use different optimized recipes.

## 9. Study Stages

For each stage, include:

- purpose
- inputs
- variables
- fixed controls
- procedure
- metrics
- expected result
- stage gate
- failure signals

Default stages:

1. Data audit and protocol freeze
2. Fair comparison
3. Upper-bound optimization
4. Ablation/mechanism analysis
5. Downstream utility evaluation
6. Robustness/external validation
7. Interpretation and manuscript packaging

## 10. Baselines and Controls

Include:

- naive baseline
- domain baseline
- strong modern baseline
- ablated proposed method
- oracle/upper-bound baseline if appropriate
- published reference baseline if available

For each baseline, state what it rules out.

## 11. Metrics

Separate:

- technical metrics
- intermediate representation or mechanism metrics
- downstream outcome metrics
- cost or efficiency metrics
- interpretability or usability metrics

State the primary metric and why it is primary.

## 12. Validation and Statistical Plan

Cover:

- seed or resampling plan
- confidence intervals
- hypothesis tests
- external or temporal validation
- subgroup analysis
- sensitivity analysis
- confounder adjustment
- multiple-comparison handling
- calibration or reliability if relevant

## 13. Expected Results

For each stage, state:

- expected positive result
- minimally acceptable result
- failure signal
- how the result affects the next stage

## 14. Interpretation Matrix

Include scenarios:

- technical metric improves, outcome improves
- technical metric improves, outcome does not improve
- technical metric does not improve, outcome improves
- method fails internally
- method works internally but not externally
- baseline wins

For each scenario, state what can still be learned.

## 15. Risks and Mitigations

Include:

- data leakage
- insufficient sample or event count
- label noise
- confounding
- overfitting
- unfair comparison
- metric mismatch
- missing external validation
- computational bottlenecks
- negative or ambiguous results

## 16. Manuscript Evidence Package

Define:

- main claim
- subclaims
- figures
- tables
- supplementary experiments
- failure-case panels
- reproducibility artifacts

## 17. Minimum, Strong, and Top-Tier Versions

Define:

- minimum publishable version
- strong version
- top-tier version

For each, list required experiments and evidence.
