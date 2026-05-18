import { SleyShell } from "./components/SleyShell";

const capabilities = [
  {
    title: "Agent-native structural language",
    body: "Sley is built for structured intent, not brittle prompts. Agents and people share the same source surface with deterministic edits and auditable boundaries.",
  },
  {
    title: "Auditable claim evidence",
    body: "The world-first AI-native category claim is treated as a criteria-bound claim. The public repository now carries claim evidence, a machine-readable claim manifest, and a primary-source prior-art packet for independent review.",
  },
  {
    title: "Proof-first editing",
    body: "Planned transformations go through bounded checks and receipts first, so edits are structured for handoff, verification, and review across sessions.",
  },
  {
    title: "May 18 checkpoint",
    body: "The latest pause checkpoint keeps the local v1 gate green and expands Sley-owned semantic coverage for selected result and deterministic authority-gate output paths. Strict self-hosting remains a blocked release claim.",
  },
];

const quickstart = [
  {
    title: "1) Install and inspect your project",
    command: "sley doctor --json .",
  },
  {
    title: "2) Generate the first structural view",
    command: "sley ast --json main.sley",
  },
  {
    title: "3) Inspect intent and authority",
    command: "sley query --json --kind tasks main.sley",
  },
  {
    title: "4) Draft bounded edits",
    command: "sley plan --json --graft-templates main.sley",
  },
  {
    title: "5) Verify before you promote",
    command: "sley verify --json main.sley",
  },
];

const workflows = [
  {
    title: "Language-first agent editing",
    body: "Plan bounded changes first, then apply only minimal, verified grafts that preserve context and reduce churn.",
    bullets: [
      "Use structured AST, graph slices, and query views to keep edits focused",
      "Prefer `--dry-run` and JSON receipts before write operations",
      "Keep edits explainable to both operators and agents",
    ],
  },
  {
    title: "Token efficiency by design",
    body: "Sley intentionally avoids repeating entire file context every loop.",
    bullets: [
      "Scope checks to one node, task, or symbol slice",
      "Use receipts and next-actions as compact handoff artifacts",
      "Avoid copy-heavy edits by using compiler-guided transformations",
    ],
  },
  {
    title: "Public-safe claims posture",
    body: "Public docs and walkthroughs stay release-safe while surfacing meaningful, reviewable claims.",
    bullets: [
      "Deterministic checks and verifier outputs are machine-readable",
      "May 18 checkpoint keeps the local v1 gate green",
      "Open claims link includes release posture and current boundaries",
      "GitHub and Chronicles provide the canonical project status",
    ],
  },
];

export const metadata = {
  title: "Sley | Agent-native structural programming",
  description:
    "Sley is Greyforge Labs' agent-native structural programming language for compiler-mediated, human-reviewed software change.",
};

export default function HomePage() {
  return (
    <SleyShell
      scope=""
      title="Sley: agent-native structural programming"
      subtitle="Sley is a compiler-aware language for practical software editing where bounded structure, verification, and evidence are first-class design constraints."
    >
      {capabilities.map((capability) => (
        <article key={capability.title} className="card">
          <h2>{capability.title}</h2>
          <p>{capability.body}</p>
        </article>
      ))}

      {workflows.map((section) => (
        <article key={section.title} className="card">
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          <ul className="qa-list">
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}

      <article className="card">
        <h2>5-step public walkthrough</h2>
        <ol className="step-list">
          {quickstart.map((item) => (
            <li key={item.title}>
              <strong>{item.title}:</strong> <code>{item.command}</code>
            </li>
          ))}
        </ol>
      </article>
      <article className="card">
        <h2>Auditor packet</h2>
        <p>
          Review the public evidence map in{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyClaimEvidence.md">
            Sley Claim Evidence
          </a>
          {", "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyClaimManifest.json">
            Sley Claim Manifest
          </a>
          {", and "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyPriorArtSourcePack.md">
            Sley Prior-Art Source Pack
          </a>
          . They define the criteria, local audit commands, current blockers, and official-source comparison posture.
        </p>
      </article>
      <article className="card">
        <h2>Walkthrough focus</h2>
        <ul className="qa-list">
          <li>Keep edits bounded, reviewable, and intention-first.</li>
          <li>Use machine-consumable JSON receipts for downstream handoff and replay.</li>
          <li>Lean on schema-linked diagnostics to keep token churn low.</li>
          <li>Preserve claims boundaries by routing internals through the official repository posture.</li>
        </ul>
      </article>
    </SleyShell>
  );
}
