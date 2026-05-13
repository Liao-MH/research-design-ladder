# Research Design Ladder

Current version: `v1.0.0`

`research-design-ladder` is a Codex skill for turning early research ideas into paper-oriented study designs. It works backward from the final manuscript claim to the required evidence chain, then helps produce research questions, falsifiable hypotheses, staged experiments, baselines, metrics, validation plans, expected-result interpretation matrices, and manuscript evidence packages.

## Repository Description

**Description:** Codex skill for turning raw research ideas into paper-ready study designs, staged experiments, validation plans, and manuscript evidence packages.

## When To Use

- You have an early paper idea but need a sharper publishable research question.
- You need an experiment matrix, baselines, metrics, statistical validation, or robustness checks.
- You want to elevate a technical comparison into a scientific, clinical, or application-level evidence chain.
- You need to assess whether a study design is convincing enough for submission or review.

## Installation

Clone this repository into your Codex skills directory:

```bash
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
git clone https://github.com/Liao-MH/research-design-ladder.git "${CODEX_HOME:-$HOME/.codex}/skills/research-design-ladder"
```

If the directory already exists locally, update it with:

```bash
cd "${CODEX_HOME:-$HOME/.codex}/skills/research-design-ladder"
git pull
```

## Usage

After installation, ask Codex something like:

```text
Use this idea to design a publishable research project: compare different foundation models for pathology-image prognosis.
```

You can also request a specific output mode:

```text
Use research-design-ladder to create an experiment matrix.
```

```text
Check whether this research design is submission-ready and identify missing evidence.
```

## Output Modes

- Short Design Diagnosis: a compact assessment of the paper angle, contribution type, major weaknesses, and next actions.
- Full Research Design: a full plan with research questions, hypothesis chain, evidence chain, data design, model design, validation plan, and manuscript package.
- Experiment Matrix: staged experiments with variables, fixed controls, metrics, expected outputs, and gates.
- Review-Readiness Check: a manuscript evidence audit for submission or review strength.

## Repository Layout

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

## Development And Validation

```bash
node tests/release-version.test.mjs
python3 /path/to/skill-creator/scripts/quick_validate.py .
git diff --check
```

`quick_validate.py` is bundled with Codex's system `skill-creator` skill. Replace the path with the matching local script path. If the script reports a missing `PyYAML` dependency, install it in an isolated venv or conda environment rather than the main Python environment.

## Maintenance Rules

- Update `VERSION`, `README.md`, `README.en.md`, `docs/DEMANDS.MD`, and `docs/CHANGELOG.md` for every release.
- If the trigger description in `SKILL.md` changes, verify that `agents/openai.yaml` still describes the skill accurately.
- README files are repository documentation. The runtime skill instructions remain centered in `SKILL.md` and `references/`.
