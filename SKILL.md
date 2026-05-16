---
name: research-design-ladder
description: Use when the user asks to design a research topic, generate a research design document, turn an idea into a complete experimental plan, write a protocol or study design, or says "帮我设计一个课题", "生成研究设计文档", "把这个想法整理成完整实验方案", "帮我写一个 protocol / study design", or "生成类似之前那种完整设计文档".
---

# Research Design Ladder

Version: v1.2.0

## Purpose

Generate full-length Markdown research design documents for new topics. Preserve the reference document's structure style, argument rhythm, risk-warning pattern, staged expected-result writing, and stable protocol-like prose, while replacing the reference's concrete TLS/GC/backbone/prognosis experiment structure with modules that fit the new topic.

The default output is a complete long document, not a summary or compressed outline. Only produce a brief version when the user explicitly asks for a short version, summary, or framework only.

## Workflow

1. Gather context with `references/intake-checklist.md`.
   - Ask detailed intake questions before drafting, especially for foundational research information.
   - Do not replace missing foundational information with internal inference; use inference only to summarize what the user already provided, inspect explicit file paths, or offer clearly labeled options.
   - If the user asks to proceed without answering, document assumptions and mark unresolved decisions explicitly.
   - If the user wants a file and gives no path, use the default file behavior below.

2. Select adaptive modules with `references/adaptation-rules.md`.
   - Match the design to the topic type: experimental science, machine learning, system development, theory/methodology, literature review, proposal, or a hybrid.
   - Do not force model comparison, backbone comparison, ablation, upper-bound training, fair comparison, prognosis analysis, clinical utility evaluation, patient-level split, or survival modeling unless the topic actually needs them.

3. Draft the document using `references/document-structure-template.md` and `references/style-guide.md`.
   - Follow the reference rhythm: explain why the topic matters, then explain how the study should be designed, then explain what results would mean.
   - Write each major module with purpose, design reason, design principles, concrete workflow, inputs and outputs, expected results, success criteria, failure/risk signals, and notes.
   - Use medium-length, connected sentences. Avoid terse note fragments and avoid overlong academic sentences with too many nested clauses.
   - Use lists and tables for scanability, but surround them with explanatory prose.

4. Write the output file.
   - Default inside a repository: `docs/plans/YYYY-MM-DD-<topic>-study-design.md`.
   - If `docs/plans` does not exist in a repository and the user asked for file creation, create it.
   - If the current directory is not a repository and no path is supplied, ask for an output path or propose a suitable local path.

5. Validate with `references/quality-rubric.md`.
   - Confirm the document is full-depth, adaptive, coherent, and written in the reference-like protocol style.
   - Confirm the concrete modules are not transplanted from the reference document unless they are genuinely relevant.

## Output Rules

- Write in the user's language unless requested otherwise.
- Prefer a complete Markdown file over a long chat response.
- Do not shorten sections due to word or token concerns; if needed, continue writing the file in multiple passes.
- Explicitly distinguish main tasks, support tasks, and optional enhancements.
- State which results support the core claim and which results are exploratory.
- Include minimum deliverable, strong/enhanced version, possible titles, and final logic chain.
- Make risks actionable by stating why each risk threatens the claim, how to detect it, and how the conclusion should change if it occurs.
