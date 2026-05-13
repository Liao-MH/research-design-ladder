# Research Design Ladder

当前版本：`v1.0.0`

`research-design-ladder` 是一个 Codex skill，用于把早期研究想法提升为面向论文发表的研究设计。它会帮助你从最终论文主张倒推证据链，形成研究问题、可证伪假设、分阶段实验、基线与指标体系、验证计划、预期结果解释矩阵和 manuscript evidence package。

## 仓库简介

**Description:** Codex skill for turning raw research ideas into paper-ready study designs, staged experiments, validation plans, and manuscript evidence packages.

## 适用场景

- 你有一个初步论文想法，但还不确定怎样组织成可发表研究问题。
- 你需要设计实验矩阵、基线、指标、统计验证和稳健性分析。
- 你想把技术比较提升为有明确科学、临床或应用价值的证据链。
- 你需要评估一个研究设计是否具备投稿或审稿说服力。

## 安装

将仓库克隆到 Codex skill 目录：

```bash
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
git clone https://github.com/Liao-MH/research-design-ladder.git "${CODEX_HOME:-$HOME/.codex}/skills/research-design-ladder"
```

如果你已经在本地有该目录，可更新：

```bash
cd "${CODEX_HOME:-$HOME/.codex}/skills/research-design-ladder"
git pull
```

## 使用方式

安装后，在 Codex 中提出类似请求即可触发：

```text
帮我把这个想法设计成一篇可发表论文的研究方案：比较不同基础模型在病理图像预后任务中的价值。
```

也可以指定输出模式：

```text
用 research-design-ladder 给我一个实验矩阵。
```

```text
检查这个研究设计是否达到投稿级别，并指出缺失证据。
```

## 输出能力

- Short Design Diagnosis：快速判断论文角度、贡献类型、主要弱点和下一步行动。
- Full Research Design：完整研究设计，包括研究问题、假设链、证据链、数据设计、模型设计、验证计划和 manuscript package。
- Experiment Matrix：分阶段实验矩阵，明确变量、固定控制、指标、预期输出和进入下一阶段的门槛。
- Review-Readiness Check：基于证据清单检查投稿或审稿说服力。

## 文件结构

```text
research-design-ladder/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── experiment-matrix-template.md
│   ├── framework-template.md
│   └── manuscript-evidence-checklist.md
├── docs/
│   ├── CHANGELOG.md
│   └── DEMANDS.MD
├── DESCRIPTION.md
├── README.md
├── README.en.md
├── VERSION
└── tests/
    └── release-version.test.mjs
```

## 开发与验证

```bash
node tests/release-version.test.mjs
python3 /path/to/skill-creator/scripts/quick_validate.py .
git diff --check
```

其中 `quick_validate.py` 是 Codex 内置 `skill-creator` skill 的校验脚本；请替换为你本机对应的脚本路径。如果校验脚本提示缺少 `PyYAML`，请在隔离的 venv 或 conda 环境中安装依赖，不要直接污染主 Python 环境。

## 维护规则

- 每次发布都更新 `VERSION`、`README.md`、`README.en.md`、`docs/DEMANDS.MD` 和 `docs/CHANGELOG.md`。
- 若修改 `SKILL.md` 的触发说明，需同步检查 `agents/openai.yaml` 是否仍然准确。
- README 是仓库文档；skill 运行时的核心说明仍以 `SKILL.md` 和 `references/` 为准。
