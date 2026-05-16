import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();

assert.match(version, /^v\d+\.\d+\.\d+$/, "VERSION must use semantic version format vX.Y.Z");

const requiredFiles = [
  "SKILL.md",
  "VERSION",
  "DESCRIPTION.md",
  "README.md",
  "README.en.md",
  "agents/openai.yaml",
  "docs/CHANGELOG.md",
  "docs/DEMANDS.MD",
  "references/adaptation-rules.md",
  "references/document-structure-template.md",
  "references/intake-checklist.md",
  "references/quality-rubric.md",
  "references/style-guide.md",
];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(path.join(root, file)), `${file} must exist`);
}

const removedLegacyReferences = [
  "references/experiment-matrix-template.md",
  "references/framework-template.md",
  "references/manuscript-evidence-checklist.md",
];

for (const file of removedLegacyReferences) {
  assert.ok(!fs.existsSync(path.join(root, file)), `${file} should not be present in v1.1.0`);
}

const skill = fs.readFileSync(path.join(root, "SKILL.md"), "utf8");
assert.ok(skill.includes("name: research-design-ladder"), "SKILL.md must define the canonical skill name");
assert.ok(skill.includes(`Version: ${version}`), "SKILL.md version must match VERSION");
assert.ok(skill.includes("references/intake-checklist.md"), "SKILL.md must point to the intake checklist");
assert.ok(skill.includes("references/adaptation-rules.md"), "SKILL.md must point to adaptation rules");
assert.ok(skill.includes("references/document-structure-template.md"), "SKILL.md must point to the document template");
assert.ok(skill.includes("references/style-guide.md"), "SKILL.md must point to the style guide");
assert.ok(skill.includes("references/quality-rubric.md"), "SKILL.md must point to the quality rubric");

const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const readmeEn = fs.readFileSync(path.join(root, "README.en.md"), "utf8");
const changelog = fs.readFileSync(path.join(root, "docs/CHANGELOG.md"), "utf8");
const demands = fs.readFileSync(path.join(root, "docs/DEMANDS.MD"), "utf8");
const agents = fs.readFileSync(path.join(root, "agents/openai.yaml"), "utf8");

assert.ok(readme.includes(version), "README.md must mention current version");
assert.ok(readmeEn.includes(version), "README.en.md must mention current version");
assert.ok(changelog.includes(`## ${version} - 2026-05-16`), "CHANGELOG.md must include current release entry");
assert.ok(demands.includes(`## ${version} - 2026-05-16`), "DEMANDS.MD must include current demand entry");
assert.ok(agents.includes("Research Design Ladder"), "agents/openai.yaml must expose a display name");
assert.ok(agents.includes("$research-design-ladder"), "agents/openai.yaml default prompt must mention the skill handle");

const adaptationRules = fs.readFileSync(path.join(root, "references/adaptation-rules.md"), "utf8");
assert.ok(adaptationRules.includes("Anti-Transplant Rule"), "adaptation rules must retain the anti-transplant rule");
assert.ok(adaptationRules.includes("System Development"), "adaptation rules must support system development topics");
assert.ok(adaptationRules.includes("Theory or Methodology"), "adaptation rules must support theory or methodology topics");

console.log(`release-version.test.mjs passed for ${version}`);
