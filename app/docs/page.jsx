import { SleyShell } from "../components/SleyShell";

const sections = [
  {
    title: "What Sley is for",
    body:
      "Sley is a language surface for people and agents who want edits to be auditable at the same time they are fast. The public project shows what is intentionally shared, with heavy emphasis on structured intent over prompt-only workflows.",
  },
  {
    title: "Quick start",
    body:
      "If you want the shortest path, install the public binary, run `sley doctor`, and then open `docs/AgentQuickstart.md` from the source repo for a practical first edit flow.",
    code: `# 1) Sanity-check the language surface
sley doctor

# 2) Open the public docs and walkthrough
sley tutorial`,
  },
  {
    title: "Language-first workflow",
    body:
      "Sley prefers explicit task declarations, typed task calls, schema-linked JSON reports, and deterministic plan outputs. This keeps token pressure low by preserving edit structure instead of re-explaining intent on every cycle.",
  },
  {
    title: "Hands-on walkthrough",
    body:
      "From a fresh checkout, begin with release-boundary checks, then run readiness commands in this sequence. Each stage emits JSON artifacts intended for deterministic comparison across handoffs.",
    code: `# Step 1: baseline health
sley doctor

# Step 2: inspect structure
sley ast --json .

# Step 3: inspect planned edits
sley plan --json --graft-templates .

# Step 4: lock behavior with verification
sley verify --json .`,
  },
  {
    title: "Evidence and safety boundaries",
    body:
      "Every public-facing route points to bounded claims and open references only. Internal runtime specifics remain intentionally omitted from the public mirror until release posture and doctrine allow a wider public reveal.",
  },
  {
    title: "Operational references",
    body:
      "Public release posture, benchmark posture, and release notes are surfaced through Greyforge OpenForge and Greyforge Chronicles. Those are the stable sources for claims and public links.",
  },
];

export const metadata = {
  title: "Sley Documentation | Public brief",
  description:
    "Sley technical brief: language AI agent ergonomics, token-aware workflows, and structured compiler guidance.",
};

export default function DocsPage() {
  return (
    <SleyShell
      scope=""
      kicker="Documentation brief"
      title="Sley documentation orientation"
      subtitle="Understand what is intentionally public, what is private, and how to evaluate Sley from the outside."
    >
      {sections.map((section) => (
        <article key={section.title} className="card">
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.code && <pre className="code">{section.code}</pre>}
        </article>
      ))}

      <article className="card">
        <h2>Public claim summary</h2>
        <ul className="qa-list">
          <li>First AI-native language claim: structured edits over unbounded prompts.</li>
          <li>Token-efficiency claim: reduce churn through explicit intent boundaries.</li>
          <li>Safety claim: review-oriented execution at the public edge.</li>
        </ul>
      </article>
      <article className="card">
        <h2>Release-friendly onboarding</h2>
        <p>
          The easiest onboarding path is intentionally conservative: confirm baseline checks, generate structured reports, and only then
          promote deeper edits after lint and verify pass.
        </p>
      </article>
    </SleyShell>
  );
}
