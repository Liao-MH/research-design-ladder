# Adaptation Rules

The reference document provides the organizational rhythm and reasoning style, not a fixed experiment recipe. Preserve the style of structured research design while replacing topic-specific modules with the modules required by the new topic.

## Universal Skeleton

Every full design should include:

- opening metadata: date, status, applicable topic, core goal;
- research positioning;
- core research questions and hypotheses, objectives, or design claims;
- overall research architecture;
- topic-specific modules or stages;
- validation, quality control, and credibility checks;
- risk control and result interpretation logic;
- execution order;
- minimum deliverable version and enhanced versions;
- possible titles;
- final logic chain.

## Topic Types

### Experimental Science

Use modules such as study object, inclusion/exclusion logic, material/sample design, experimental groups or conditions, measurement indicators, statistical analysis, quality control, expected results, and null-result interpretation. Only include group comparison when the topic actually has experimental conditions or controls.

### Machine Learning or Computational Study

Use modules such as data sources, unit hierarchy, split policy, leakage checks, annotation/label definition, model/training protocol, metrics, baseline strategy when relevant, robustness analysis, error analysis, and external or temporal validation. Baselines should explain what they rule out; they should not be inserted as decorative requirements.

### System Development

Use modules such as user needs, use cases, system architecture, module responsibilities, data flow, state flow, permission model, testing and acceptance standards, deployment, monitoring, maintenance, migration, and operational risks. Do not force ablation or model comparison into a non-comparative system design.

### Theory or Methodology

Use modules such as problem definition, notation, assumptions, method route, derivation plan, proof checkpoints, boundary cases, counterexamples, toy examples, applicability limits, and criteria for theoretical contribution. Comparisons should appear only when they clarify the method's boundary or contribution.

### Literature Review or Proposal

Use modules such as background and gap, review scope, inclusion/exclusion criteria, search or source strategy, screening logic, thematic framework, evidence map, expected contribution, project feasibility, and risks of broad scope or weak synthesis.

## Anti-Transplant Rule

Do not mechanically add:

- model comparison;
- backbone comparison;
- ablation experiment;
- upper-bound training;
- fair-comparison protocol;
- prognosis analysis;
- clinical utility evaluation;
- patient-level split;
- survival modeling;
- biological interpretation.

If any of these appears, explicitly state why the new topic needs it and which claim it supports. If the topic does not need it, replace it with the topic's real evidence-producing module.

## Module Selection Test

For each proposed module, ask:

1. What research question, objective, or design claim does this module support?
2. What input does it require?
3. What output does it produce?
4. What success criterion makes the output usable?
5. What failure signal would weaken, stop, or redirect the study?

Remove or mark optional any module that cannot answer these questions.
