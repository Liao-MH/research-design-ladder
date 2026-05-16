# Intake Checklist

Use this checklist before generating a full research design document.

## Detailed Intake First

Default to detailed user questioning before drafting. The purpose of intake is not to make the agent appear fast; it is to prevent the research design from being built on hidden assumptions that the user would not endorse.

Do not replace missing foundational information with internal inference. Internal inference may be used only to summarize information already provided by the user, inspect explicit files or paths, identify likely options, or explain why a missing decision matters. When the topic name, research object, goal, available resources, method route, evaluation criteria, or target output is missing or ambiguous, ask the user instead of silently filling the gap.

Ask questions in organized batches so the user can answer efficiently. It is acceptable to ask many detailed questions when they materially shape the design, but the questions should be grouped by theme and should allow answers such as "unknown", "not decided", "not applicable", or "please propose options".

## Ask About These Items

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

## Detailed Question Template

Use the user's language. Adapt the wording to the topic, but preserve the level of detail.

```markdown
为了把这个课题写成完整 study design，我需要先把基础设定问清楚。你可以逐条回答；不确定的地方可以写“未定”，我会在后续设计里把它作为待决策点处理。

1. 课题名称或暂定方向是什么？如果还没有标题，请给我 2-3 个关键词。
2. 这个课题属于哪个研究领域或应用场景？它更偏论文、proposal、系统方案、工具开发、理论方法，还是内部研究计划？
3. 你希望这个课题最终证明、构建或回答什么？请区分最核心目标和次要目标。
4. 核心研究问题是什么？如果目前只是一个想法，也请写出你最想知道的判断。
5. 研究对象是什么？例如人群、样本、数据集、模型、系统、文本材料、理论对象、业务流程或用户群体。
6. 目前可用的数据、材料、代码、设备、实验条件、算力、人力或协作资源有哪些？哪些已经确定，哪些只是可能获得？
7. 你倾向的主要方法或技术路线是什么？如果还没有路线，希望我提供哪些候选路线？
8. 是否存在对照组、baseline、比较对象或参考案例？如果没有，我不会强行加入，但需要知道这个课题是否本来就不依赖比较。
9. 这个课题需要实验、仿真、建模、访谈、统计分析、系统开发、理论推导、文献综述，还是多种方式结合？
10. 主要评价标准是什么？例如性能指标、统计显著性、用户接受度、稳定性、可解释性、可部署性、理论严谨性或综述贡献。
11. 目标产出是什么？例如论文、项目方案、工具、系统、报告、grant proposal、study protocol 或可执行开发计划。
12. 目标投稿层级、应用场景或读者是谁？如果没有明确目标，请说明希望偏保守可完成，还是偏高水平发表。
13. 有哪些约束条件？例如时间、样本量、算力、设备、预算、伦理、隐私、数据权限、部署环境、维护成本或合作限制。
14. 是否有已有文件、代码、日志、数据说明、参考文献或旧方案路径需要我读取？
15. 希望 Markdown 输出到哪里？如果当前仓库有 `docs/plans`，我可以默认写入 `docs/plans/YYYY-MM-DD-<topic>-study-design.md`。
```

## When Limited Inference Is Allowed

Use limited inference only in these cases:

- The user has already provided enough information in the prompt, and the task is mainly to organize it.
- The user explicitly says to proceed with assumptions or asks for a quick draft.
- The user provides files, code, logs, datasets, notes, or reference paths that should be read before asking follow-up questions.
- The missing item is minor and can be marked as an explicit placeholder without changing the design structure.

Even in these cases, state what was inferred and why. If an inferred item affects module selection, evaluation logic, feasibility, ethics, or final claim strength, ask the user to confirm before writing the full design.

## If the User Wants Speed

If the user says they do not want to answer detailed questions, proceed with a clearly labeled assumption block. This block should separate confirmed information, inferred information, and unresolved decisions. Do not hide unresolved decisions inside polished prose.

## Intake Summary Pattern

After the user answers, summarize the intake before drafting:

```markdown
Confirmed:
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

Inferred from provided information:
- ...

Open decisions:
- ...

Questions not answered:
- ...
```
