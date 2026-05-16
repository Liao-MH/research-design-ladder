# Research Design Ladder

版本：`v1.1.0`

`research-design-ladder` 是一个 Codex skill，用于把一个新课题、初步想法或实验方向整理成完整的 Markdown 研究设计文档。它的重点不是套用固定实验清单，而是帮助 Codex 先收集和推断课题所需信息，再按照成熟 protocol 的写作节奏生成研究定位、核心问题、总体架构、阶段模块、验证方式、质量控制、风险解释、执行顺序、最小可交付版本和增强版本。

这个 skill 适合你希望得到“类似之前那种完整设计文档”的场景，但它保留的是参考文档的结构风格、论证层次和表达习惯，而不是参考文档里关于模型对比、backbone comparison、消融实验、upper-bound training、fair comparison、prognosis analysis 或 clinical utility evaluation 的具体实验结构。

## 触发方式

在 Codex 中可以用这些说法触发：

- “帮我设计一个课题”
- “生成研究设计文档”
- “把这个想法整理成完整实验方案”
- “帮我写一个 protocol / study design”
- “生成类似之前那种完整设计文档”
- “使用 `$research-design-ladder` 设计这个课题”

## 能生成什么

默认输出是一份完整长文档，而不是摘要、提纲或压缩版。除非你明确要求“简版”“摘要版”或“只给框架”，skill 会要求 Codex 尽可能展开每个章节的细节，并讲清楚每个模块为什么需要、如何执行、产出什么、怎样判断成功、哪些风险会削弱最终结论。

默认文件路径为：

```text
docs/plans/YYYY-MM-DD-<topic>-study-design.md
```

如果当前目录不是代码仓库，或者无法安全判断输出位置，Codex 会询问或建议一个合适路径。

## 自适应设计

skill 会根据课题类型选择真正需要的研究模块。

机器学习课题通常会包含数据与 split、标签定义、模型或方法路线、评估指标、必要 baseline、鲁棒性分析和误差分析。这里的 baseline 只有在它能排除关键替代解释时才会出现，不会作为装饰性章节强行加入。

实验科学课题通常会包含研究对象、样本或材料设计、实验条件、测量指标、统计分析、质量控制和阴性结果解释。只有当课题本身存在实验条件或对照时，才会加入组间比较。

系统开发课题通常会包含用户需求、使用场景、系统架构、模块职责、数据流、状态流、权限模型、测试验收、部署维护和运行风险。非对比型系统设计不会被强行加入消融实验或模型比较。

理论或方法学课题通常会包含问题定义、符号与假设、推导路线、证明检查点、边界情况、反例、toy example、适用范围和理论贡献判断标准。

文献综述或 proposal 通常会包含背景与 gap、研究范围、纳入排除标准、检索或资料策略、主题框架、证据地图、预期贡献和可行性风险。

## 文件结构

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

## 本地安装

如果从 GitHub 安装，可以把仓库内容放入：

```text
~/.codex/skills/research-design-ladder
```

安装后重启 Codex，或开启新会话，让 Codex 重新扫描 skills。

## 验证

仓库提供轻量版本检查：

```bash
node tests/release-version.test.mjs
```

也可以使用 Codex 自带的 skill-creator 验证脚本检查 skill 元数据：

```bash
python /Users/lmh/.codex/skills/.system/skill-creator/scripts/quick_validate.py .
```
