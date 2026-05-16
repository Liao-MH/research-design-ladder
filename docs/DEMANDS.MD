# DEMANDS

## v1.1.0 - 2026-05-16

### 用户需求

用户要求把当前已经打磨完成的 `research-design-ladder` skill 更新到 GitHub，并安装到本地 Codex 中，确保之后可以直接通过本地 skill 调用该研究设计文档生成能力。

### 需求拆解

- 将当前本地 skill 内容同步到仓库根目录，使 GitHub 仓库本身成为可安装的 Codex skill。
- 保留 skill-creator 推荐的轻量结构：`SKILL.md` 简洁，详细 intake、结构模板、自适应规则、表达风格和质量检查放入 `references/`。
- 更新 README、英文 README、description、版本文件、需求记录和变更日志，保证仓库可读、可追溯。
- 删除或不再恢复旧版中与当前 skill 目标不一致的 reference 模板，避免把旧版“论文证据链/实验矩阵”误认为当前版本的必要结构。
- 增加或更新验证脚本，检查版本号、关键文件和 skill 元数据。
- 将同一份 skill 安装到本地 Codex skills 目录。
- 推送到 GitHub 远端仓库 `https://github.com/Liao-MH/research-design-ladder.git`。

### 验收标准

- `SKILL.md` 的 skill 名称为 `research-design-ladder`，版本为 `v1.1.0`。
- 仓库包含当前 skill 所需的 `agents/openai.yaml` 和五个 reference 文件。
- README 能让用户快速理解用途、触发方式、输出行为、适用场景和安装方式。
- `node tests/release-version.test.mjs` 通过。
- skill-creator 的 `quick_validate.py` 通过。
- `git diff --check` 通过。
- 本地 Codex 安装目录中存在同步后的 skill 文件。

## v1.0.0 - 2026-05-13

### 用户需求

用户要求将当前文件夹表示的 Codex skill 同步到 GitHub 仓库 `https://github.com/Liao-MH/research-design-ladder`，并添加必要的中文 README、英文 README 和 description。

### 需求拆解

- 添加 `README.md`、`README.en.md`、`DESCRIPTION.md`、`VERSION` 和基础测试。
- 记录初始 skill 仓库文件结构和验证方式。
- 使仓库具备基础 GitHub 发布形态。

### 验收标准

- 初始版本文件齐全。
- 基础版本验证脚本可运行。
- skill 元数据可被 skill-creator 验证脚本识别。
