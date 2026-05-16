# CHANGELOG

## v1.1.0 - 2026-05-16

### 用户需求

用户要求把当前已经打磨完成的 `research-design-ladder` skill 更新到 GitHub，并安装到本地 Codex 中。当前版本需要体现前几轮 dry run 后形成的要求：默认生成不压缩的完整长文档，保留参考文档的组织结构、论证节奏和中等句长表达习惯，同时避免把模型对比、backbone comparison、消融实验、upper-bound training、fair comparison、prognosis analysis 或 clinical utility evaluation 当作所有课题的固定章节。

### 已做改动

- 版本号升级到 `v1.1.0`。
- 将本地已打磨的 skill 内容同步到仓库根目录，包括 `SKILL.md`、`agents/openai.yaml` 和五个 `references/` 文件。
- 更新 `README.md` 和 `README.en.md`，说明 skill 的触发方式、输出行为、自适应模块、安装路径和验证方式。
- 更新 `DESCRIPTION.md`，补充 GitHub description 建议和中英文摘要。
- 更新 `docs/DEMANDS.MD`，将本次“更新到 GitHub 并安装到本地 Codex”的需求记录为最新版本需求。
- 更新 `tests/release-version.test.mjs`，校验版本一致性、关键 skill 文件、reference 文件、agents 配置和旧 reference 文件清理状态。
- 不再恢复旧版中与当前目标不一致的 reference 文件，避免旧版实验矩阵或论文证据链模板干扰当前自适应研究设计文档生成逻辑。

### 影响文件

- `DESCRIPTION.md`
- `README.md`
- `README.en.md`
- `SKILL.md`
- `VERSION`
- `agents/openai.yaml`
- `docs/CHANGELOG.md`
- `docs/DEMANDS.MD`
- `references/adaptation-rules.md`
- `references/document-structure-template.md`
- `references/intake-checklist.md`
- `references/quality-rubric.md`
- `references/style-guide.md`
- `tests/release-version.test.mjs`
- `references/experiment-matrix-template.md`（移除）
- `references/framework-template.md`（移除）
- `references/manuscript-evidence-checklist.md`（移除）

### 验证结果

已执行：

```bash
node tests/release-version.test.mjs
/tmp/research-design-ladder-validate-venv/bin/python /Users/lmh/.codex/skills/.system/skill-creator/scripts/quick_validate.py .
git diff --check
```

验证结果：

- `node tests/release-version.test.mjs` 通过，输出 `release-version.test.mjs passed for v1.1.0`。
- `quick_validate.py` 通过，输出 `Skill is valid!`。
- `git diff --check` 通过。
- 本地安装目录 `/Users/lmh/.codex/skills/research-design-ladder` 已同步为 `v1.1.0`，并通过 `quick_validate.py` 验证。
- 兼容目录 `/Users/lmh/.codex/skills/research-design-document-writer` 已同步为同一份 `v1.1.0` 内容，避免本地重复 skill 目录出现版本不一致。

## v1.0.0 - 2026-05-13

### 用户需求

用户要求将当前文件夹表示的 Codex skill 同步到 GitHub 仓库 `https://github.com/Liao-MH/research-design-ladder`，并添加必要的中文 README、英文 README 和 description。

### 已做改动

- 将本次初始同步版本号设为 `v1.0.0`。
- 添加中文仓库文档 `README.md`，说明 skill 用途、安装方式、使用示例、输出模式、文件结构和验证命令。
- 添加英文仓库文档 `README.en.md`，提供对应的英文说明。
- 添加 `DESCRIPTION.md`，记录建议用于 GitHub 仓库简介的 description 以及中英文摘要。
- 添加 `VERSION`，集中记录当前发布版本。
- 添加 `docs/DEMANDS.MD`，结构化记录本次开发需求、边界和验收标准。
- 添加 `tests/release-version.test.mjs`，校验版本号格式、关键文档版本一致性和 skill 元数据基础结构。

### 影响文件

- `.gitignore`
- `DESCRIPTION.md`
- `README.md`
- `README.en.md`
- `SKILL.md`
- `VERSION`
- `agents/openai.yaml`
- `docs/CHANGELOG.md`
- `docs/DEMANDS.MD`
- `references/experiment-matrix-template.md`
- `references/framework-template.md`
- `references/manuscript-evidence-checklist.md`
- `tests/release-version.test.mjs`

### 验证结果

已执行：

```bash
node tests/release-version.test.mjs
/tmp/research-design-ladder-validate-venv/bin/python /Users/lmh/.codex/skills/.system/skill-creator/scripts/quick_validate.py .
git diff --check
```

验证结果：

- `node tests/release-version.test.mjs` 通过，输出 `release-version.test.mjs passed for v1.0.0`。
- 系统 Python 和 Codex bundled Python 均缺少 `PyYAML`；已按环境隔离要求在 `/tmp/research-design-ladder-validate-venv` 创建临时 venv 并安装 `PyYAML`。
- `quick_validate.py` 通过，输出 `Skill is valid!`。
- `git diff --check` 通过。
