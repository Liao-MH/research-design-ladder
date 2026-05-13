import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFileSync(join(repoRoot, path), "utf8");

const version = read("VERSION").trim();

if (!/^v\d+\.\d+\.\d+$/.test(version)) {
  throw new Error(`VERSION must use semantic format vX.Y.Z, got: ${version}`);
}

const versionedFiles = [
  "README.md",
  "README.en.md",
  "DESCRIPTION.md",
  "docs/DEMANDS.MD",
  "docs/CHANGELOG.md",
];

for (const path of versionedFiles) {
  const content = read(path);
  if (!content.includes(version)) {
    throw new Error(`${path} must include current version ${version}`);
  }
}

const skill = read("SKILL.md");
const frontmatterMatch = skill.match(/^---\n([\s\S]*?)\n---\n/);

if (!frontmatterMatch) {
  throw new Error("SKILL.md must start with YAML frontmatter.");
}

const frontmatterKeys = frontmatterMatch[1]
  .split("\n")
  .map((line) => line.split(":")[0].trim())
  .filter(Boolean);

const allowedKeys = new Set(["name", "description"]);
for (const key of frontmatterKeys) {
  if (!allowedKeys.has(key)) {
    throw new Error(`SKILL.md frontmatter contains unsupported key: ${key}`);
  }
}

if (!frontmatterMatch[1].includes("name: research-design-ladder")) {
  throw new Error("SKILL.md frontmatter must name the skill research-design-ladder.");
}

if (!frontmatterMatch[1].includes("description:")) {
  throw new Error("SKILL.md frontmatter must include a description.");
}

const openaiYaml = read("agents/openai.yaml");
for (const required of ["display_name:", "short_description:", "default_prompt:"]) {
  if (!openaiYaml.includes(required)) {
    throw new Error(`agents/openai.yaml must include ${required}`);
  }
}

console.log(`release-version.test.mjs passed for ${version}`);
