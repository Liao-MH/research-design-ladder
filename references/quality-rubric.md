# Quality Rubric

Use this checklist before delivering a generated research design document.

## Structure

- Intake behavior asks detailed foundational questions before drafting unless the user explicitly asks to proceed with assumptions.
- Missing foundational information is not silently replaced by internal inference.
- Opening metadata includes date, status, applicable topic, and core goal.
- The document starts with research positioning before methods.
- Core questions, hypotheses, objectives, or design claims appear before detailed modules.
- The overall architecture explains the route from input to final evidence or deliverable.
- Topic-specific modules replace, rather than copy, the reference document's domain-specific modules.

## Completeness

Each major module should explain:

- purpose;
- design reason;
- design principles;
- concrete workflow;
- inputs and outputs;
- expected results;
- success criteria;
- failure or risk signals;
- notes and boundaries;
- how the module supports the final claim.

The generated document should not feel like a summary, outline, or compressed version unless the user explicitly requested that.

## Adaptive Fit

Check for forced sections. Remove or mark optional if not justified:

- model comparison;
- backbone comparison;
- ablation;
- upper-bound training;
- fair comparison;
- prognosis or survival analysis;
- clinical utility evaluation;
- patient-level split;
- biological interpretation.

If included, each must explain why the topic needs it and which claim it supports.

## Prose Style

The document should resemble the reference's protocol prose:

- medium-length sentences;
- paragraphs usually 2-5 sentences;
- clear "judgment + reason + consequence" rhythm;
- "why -> how -> expected result -> interpretation" progression;
- lists and tables with explanatory lead-in and follow-up prose;
- expected results and risks interpreted in relation to the core claim.

It does not pass if it is dominated by terse fragments such as:

```text
目标：...
方法：...
结果：...
```

## Evidence Logic

- Primary evidence is separated from supporting and exploratory evidence.
- Evaluation criteria match the claim.
- Positive, partial, negative, and ambiguous outcomes are interpreted.
- Minimum and enhanced versions state what level of claim each version can support.
- Risks are written as threats to validity, not isolated warnings.

## File Behavior

- Use the user-specified path when provided.
- Otherwise use `docs/plans/YYYY-MM-DD-<topic>-study-design.md` inside a repository.
- If no safe path exists, ask a concise path question.
- Use a filename-safe topic slug.

## Final Self-Check

Before final response, confirm:

1. The file is full-depth and not compressed for brevity.
2. The structure follows the reference's organization and reasoning rhythm.
3. The prose follows the reference's moderate sentence length and causal progression.
4. The topic-specific modules are adaptive and not mechanical transplants.
5. The document includes staged expected results, success criteria, risk signals, quality control, execution order, version ladder, title options, and final logic chain.
