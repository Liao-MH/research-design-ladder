# Style Guide

Use this guide to reproduce the reference document's expression habits without copying its concrete experiments.

## Depth Rule

Default to a full-length document. Do not compress the file for word count, token count, or chat brevity. If the document is long, write it to disk and keep the chat response short.

Each important section should explain:

- what problem or decision the section addresses;
- why it matters for the final claim;
- what design choice is recommended;
- what input and output are involved;
- what result is expected;
- what would count as success;
- what failure signal would weaken or redirect the study;
- how the result should be interpreted.

## Reference-Like Expression Habits

The reference document's style is stable and protocol-like. It usually does not write slogans or compressed notes. It uses a moderate sentence length, short-to-medium paragraphs, and causal transitions.

Prefer these patterns:

1. **Weak framing -> stronger framing**
   - "这个课题不应只被设计成 A。因为如果主线只是 A，贡献容易显得 B。更有潜力的定位是 C。"

2. **Judgment + reason + consequence**
   - "这一阶段不应直接追求最高分，因为早期同时引入过多变量会掩盖真正的设计差异。预期结果应是一组可解释的候选方案，而不是立即确定最终最优方案。"

3. **Not A, but B**
   - "真正重要的问题不是单一指标是否提高，而是这些输出是否能转化为支撑核心主张的稳定证据。"

4. **If-result-then-interpretation**
   - "如果结果只在内部数据上成立，则结论应限制为内部流程优化；如果结果在外部验证中仍保持方向一致，才可以支撑更强的泛化主张。"

5. **Risk as claim threat**
   - "如果这一点无法控制，后续结果即使分数较高，也不能被解释为对核心主张的有效支持。"

6. **Recommendation with boundary**
   - "建议优先采用 A，因为它能减少 B；但如果 C 不成立，则应把 A 视为探索性设计。"

## Sentence and Paragraph Rules

- Use medium-length sentences. Avoid very short slogan-like fragments and avoid very long sentences with many nested clauses.
- Each sentence should usually express one core judgment, reason, or consequence.
- Paragraphs should usually contain 2-5 sentences.
- Use connectors such as "因此", "因为", "如果", "但", "相反", "这意味着", "换言之", "在这种情况下", "由此可以判断".
- Write "目的 / 原因 / 注意 / 预期结果 / 风险信号" in the reference rhythm, but do not reduce them to labels.

Avoid:

```text
目标：提升性能。方法：比较模型。结果：选择最佳模型。
```

Prefer:

```text
这一阶段的目标不是直接追求最高分，而是先判断哪些方案值得进入后续更昂贵的验证流程。这样设计的原因是，早期如果同时引入过多训练策略和增强模块，方案差异会被流程差异掩盖。预期结果是得到一组可解释的候选方案，而不是立即确定最终最优方案。
```

Avoid:

```text
本研究具有重要意义，可推动领域发展。
```

Prefer:

```text
这个课题的价值不在于单独证明某个模型分数更高，而在于判断模型输出是否能转化为更稳定的下游证据。如果最终结果只停留在单一指标提升，论文贡献会偏工程化；如果能进一步说明这些输出如何支持核心研究主张，课题的说服力会明显增强。
```

## Lists and Tables

Lists and tables are useful, but they should not replace reasoning.

- Introduce each important list or table with a paragraph explaining why it is needed.
- Make list items explanatory, not just keywords.
- After a table, explain how it should be read and what decision it supports.
- If a section is mostly bullets, add prose that explains the causal relation among the bullets.

## Tone

Use a mature protocol tone. Do not write marketing copy, inflated claims, or vague field-level praise. The writing should be clear, executable, and explicit about boundaries.
