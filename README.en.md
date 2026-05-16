# Research Design Ladder

Version: `v1.2.0`

`research-design-ladder` is a Codex skill for turning a new research topic, early idea, or experimental direction into a full Markdown study design document. Its purpose is not to reuse a fixed experiment checklist. It helps Codex collect or infer the required context first, then write a protocol-style document with research positioning, core questions, overall architecture, staged modules, validation, quality control, risk interpretation, execution order, minimum deliverable, enhanced versions, title options, and final logic chain.

The skill preserves the reference document's structure style, argumentative rhythm, risk-warning pattern, staged expected-result writing, and moderate sentence-length expression habits. It does not mechanically copy the reference document's concrete experiment structure, such as model comparison, backbone comparison, ablation, upper-bound training, fair comparison, prognosis analysis, or clinical utility evaluation.

Starting from `v1.2.0`, the intake stage defaults to detailed user questioning rather than internal inference. Codex should infer only when the user explicitly asks for a fast draft, has already provided sufficient information, or supplies file paths to inspect. Inferred items and unresolved decisions must be labeled before drafting.

## Triggers

Use it in Codex with prompts such as:

- "帮我设计一个课题"
- "生成研究设计文档"
- "把这个想法整理成完整实验方案"
- "帮我写一个 protocol / study design"
- "生成类似之前那种完整设计文档"
- "Use `$research-design-ladder` for this topic"

## Output

The default output is a complete long-form Markdown document, not a summary or compressed outline. Unless the user explicitly asks for a short version, summary, or framework only, the skill instructs Codex to expand each section with concrete reasoning, execution steps, expected outputs, success criteria, failure signals, and how each module supports the final claim.

Before drafting, the skill asks detailed intake questions about the topic, field, goal, research question, object, available resources, method route, baseline or control status, study mode, evaluation criteria, target output, application scenario, constraints, existing paths, and output path. The user can answer "unknown", "not applicable", or "please propose options"; those answers become explicit open decisions rather than hidden assumptions.

Default output path:

```text
docs/plans/YYYY-MM-DD-<topic>-study-design.md
```

If the current directory is not a repository, or if a safe output location cannot be inferred, Codex should ask for or propose a suitable path.

## Adaptive Design

The skill selects modules according to the topic type.

Machine learning studies may include data and split policy, label definition, model or method route, metrics, justified baselines, robustness analysis, and error analysis. Baselines appear only when they rule out a relevant alternative explanation.

Experimental science studies may include study object, sample or material design, experimental conditions, measurement indicators, statistical analysis, quality control, and null-result interpretation. Group comparison appears only when the topic actually has groups, controls, or conditions.

System development studies may include user needs, use cases, system architecture, module responsibilities, data flow, state flow, permission model, testing and acceptance criteria, deployment, maintenance, and operational risks. Non-comparative system design should not receive forced ablation or model-comparison sections.

Theory or methodology studies may include problem definition, notation and assumptions, derivation route, proof checkpoints, boundary cases, counterexamples, toy examples, applicability limits, and criteria for theoretical contribution.

Literature review or proposal work may include background and gap, scope, inclusion/exclusion criteria, search or source strategy, screening logic, thematic framework, evidence map, expected contribution, feasibility, and risks of broad scope or weak synthesis.

## Repository Layout

```text
.
├── SKILL.md
├── VERSION
├── agents/
│   └── openai.yaml
├── references/
│   ├── adaptation-rules.md
│   ├── document-structure-template.md
│   ├── intake-checklist.md
│   ├── quality-rubric.md
│   └── style-guide.md
├── docs/
│   ├── CHANGELOG.md
│   └── DEMANDS.MD
└── tests/
    └── release-version.test.mjs
```

## Local Installation

Install the repository contents into:

```text
~/.codex/skills/research-design-ladder
```

Restart Codex, or start a new session, so the local skills index can be refreshed.

## Validation

Run the lightweight release check:

```bash
node tests/release-version.test.mjs
```

You can also validate the skill metadata with Codex's skill-creator script:

```bash
python /Users/lmh/.codex/skills/.system/skill-creator/scripts/quick_validate.py .
```
