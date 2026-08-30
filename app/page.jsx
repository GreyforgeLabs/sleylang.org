import { SleyShell } from "./components/SleyShell";

const capabilities = [
  {
    title: "The completed human-readable line",
    body: "Sley 1.2.0 completes the original architecture in which agents and people share the same readable source surface with deterministic edits and auditable boundaries.",
  },
  {
    title: "Auditable claim evidence",
    body: "The world-first agent-native category claim is treated as a criteria-bound claim. The public repository now carries claim evidence, a machine-readable claim manifest, and a primary-source prior-art packet for independent review.",
  },
  {
    title: "Proof-first editing",
    body: "Planned transformations go through bounded checks and receipts first, so edits are structured for handoff, verification, and review across sessions.",
  },
  {
    title: "Machine-native Sley is active",
    body: "Greyforge has frozen active feature development of the 1.x architecture. Sley 2.x is the active machine-native line where direct human readability of the canonical raw representation is optional and human governance remains required.",
  },
];

const machineFacts = [
  "Sley 1.2.0 is Greyforge Labs' completed agent-native, human-readable structural programming line for compiler-mediated software change.",
  "The v1.2.0 release candidate records 38 targets, 99 report schemas, 187 contract fixtures, 72 corpus cases, 264 integration checks, 11 release-packet checks, and 4 public-release checks.",
  "Greyforge has frozen active feature development of the Sley 1.x architecture. The public Apache-2.0 repository remains available for use, study, extension, experimentation, and forks.",
  "Sley 2.x is the active machine-native lineage at GreyforgeLabs/sley. It keeps human governance while removing direct human readability of the canonical raw representation as a mandatory design constraint.",
  "Compatibility between Sley 1.x and 2.x is not promised.",
  "The public evidence chain is the Sley home, claim evidence, claim manifest, prior-art source pack, FAQ, and Greyforge Labs context.",
  "Sensitive host-facing behavior is modeled through deterministic authority gates rather than implicit live provider, shell, network, secret, deployment, payment, or spend actions.",
];

const proofStats = [
  { label: "release targets", value: "38 / 38" },
  { label: "report schemas", value: "99" },
  { label: "contract fixtures", value: "187 / 187" },
  { label: "integration checks", value: "264 / 264" },
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
    body: "The Sley 1.x workflow plans bounded changes first, then applies only minimal, verified grafts that preserve context and reduce churn.",
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
      "May 27 checkpoint keeps the local v1 gate green",
      "Open claims link includes release posture and current boundaries",
      "GitHub and Chronicles provide the canonical project status",
    ],
  },
];

export const metadata = {
  title: "Sley Legacy 1.2.0 | The completed human-readable line",
  description:
    "Sley 1.2.0 completes Greyforge Labs' open human-readable structural language. Active research has moved to the clean machine-native Sley 2.x architecture.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Sley",
    "agent-native structural programming",
    "compiler-mediated software change",
    "human-reviewed agent edits",
    "deterministic authority gates",
    "May 27 checkpoint",
    "Sley claim evidence",
    "Sley claim manifest",
    "Sley prior-art source pack",
    "Greyforge Labs",
  ],
};

export default function HomePage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley 1.2.0 / architectural transition"
      title="The completed human-readable Sley line"
      subtitle="Sley Legacy preserves the completed 1.x language that people and machines can read together. Active development continues in the intentionally incompatible machine-native Sley 2.x repository."
    >
      {capabilities.map((capability) => (
        <article key={capability.title} className="card">
          <h2>{capability.title}</h2>
          <p>{capability.body}</p>
        </article>
      ))}

      <article className="card machine-card">
        <p className="card-kicker">August 27 release / machine facts</p>
        <h2>Legacy public status</h2>
        <ul className="qa-list fact-list">
          {machineFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <div className="stat-grid" aria-label="Sley public conformance report summary">
          {proofStats.map((stat) => (
            <div key={stat.label} className="stat-pill">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </article>

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

      <article className="card walkthrough-card">
        <p className="card-kicker">structured quickstart</p>
        <h2>5-step public walkthrough</h2>
        <ol className="step-list">
          {quickstart.map((item) => (
            <li key={item.title}>
              <strong>{item.title}:</strong> <code>{item.command}</code>
            </li>
          ))}
        </ol>
      </article>
      <article className="card auditor-card">
        <p className="card-kicker">citation chain</p>
        <h2>Auditor packet</h2>
        <p>
          Review the public evidence map in{" "}
          <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimEvidence.md" rel="external noopener noreferrer">
            Sley Claim Evidence
          </a>
          {", "}
          <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimManifest.json" rel="external noopener noreferrer">
            Sley Claim Manifest
          </a>
          {", and "}
          <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyPriorArtSourcePack.md" rel="external noopener noreferrer">
            Sley Prior-Art Source Pack
          </a>
          . They define the criteria, local audit commands, current blockers, and official-source comparison posture.
        </p>
      </article>
      <article className="card">
        <p className="card-kicker">architectural transition</p>
        <h2>Machine Native. Human Governed.</h2>
        <p>
          Sley 2.x does not require the canonical raw program representation to
          remain comfortable for direct human authorship. People still own
          objectives, constraints, authority, risk, deployment, and acceptance.
        </p>
        <p><a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Read the canonical transition Chronicle</a></p>
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
