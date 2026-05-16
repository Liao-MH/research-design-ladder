# Intake Checklist

Use this checklist before generating a full research design document. Infer first; ask only when the missing information changes the design materially.

## Collect or Infer

- Topic name or direction.
- Research field or application domain.
- Research goal.
- Core research question.
- Research object, population, material, system, method, or theoretical object.
- Available data, materials, code, instruments, experiments, compute, people, or access conditions.
- Main method or technical route.
- Whether controls, baselines, comparison objects, or reference cases exist. If they do not exist, do not invent them unless the topic logically requires them.
- Whether the work needs experiments, simulation, modeling, interviews, statistical analysis, system development, theoretical derivation, literature synthesis, or another route.
- Main evaluation criteria.
- Target output type: paper, project plan, tool, system, report, proposal, protocol, grant, internal plan, or implementation design.
- Target venue tier, user group, decision context, or application scenario.
- Constraints: time, compute, sample size, equipment, budget, ethics, privacy, data permission, staffing, deployment, maintenance, or collaboration.
- Existing file, code, log, dataset, note, or reference paths.
- Expected Markdown output path.

## When to Ask

Ask a concise question only when:

- the research object is ambiguous enough to change the module structure;
- the output type would change the writing mode, such as paper protocol versus internal engineering plan;
- the file path cannot be inferred and file creation is required;
- ethics, data permission, sample size, or resource constraints could invalidate the design;
- a baseline, control, comparison, or evaluation target is central but unspecified.

Do not ask the user to fill the entire checklist before starting. If missing items can be handled as explicit assumptions or placeholders, state the assumptions and proceed.

## Intake Summary Pattern

Use a short internal summary before drafting:

```markdown
Known:
- Topic:
- Field:
- Goal:
- Research object:
- Available resources:
- Method route:
- Evaluation:
- Output type:
- Constraints:
- Existing paths:
- Output path:

Assumptions:
- ...

Open decisions:
- ...
```
