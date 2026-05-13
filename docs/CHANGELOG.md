# CHANGELOG

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
