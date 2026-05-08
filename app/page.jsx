import { SleyShell } from "./components/SleyShell";

const capabilities = [
  {
    title: "AI-native language, designed by AI for AI",
    body: "Sley is built for structured intent, not brittle prompts. Agents and people share the same source surface with deterministic edits and auditable boundaries.",
  },
  {
    title: "Token savings and efficiency",
    body: "By replacing repeated prompt restatement with structured edits and planner receipts, teams reduce token churn and keep context focused on intent.",
  },
  {
    title: "Proof-first editing",
    body: "Planned transformations go through bounded checks and receipts first, so edits are structured for handoff, verification, and review across sessions.",
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
    title: "Language-first AI editing",
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
      "Open claims link includes release posture and current boundaries",
      "GitHub and Chronicles provide the canonical project status",
    ],
  },
];

export const metadata = {
  title: "Sley | The Language AI Agents Want to Speak",
  description:
    "Sley is the world's first AI-native programming language, designed by AI for AI, and optimized for token savings through compiler-guided context control.",
};

export default function HomePage() {
  return (
    <SleyShell
      scope=""
      title="Sley: the language AI agents want to speak"
      subtitle="Sley is a compiler-aware AI-native language for practical software editing where token pressure is a first-class design constraint."
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
