import { SleyShell } from "../components/SleyShell";

const sections = [
  {
    title: "What Sley is for",
    body:
      "Sley is a compiler-oriented language surface for people and AI operators who need fast edits with strong evidence. Use it when your workflow values reproducibility, scope control, and explicit planning over ad-hoc text patching.",
    bullets: [
      "Language-level boundaries for authority and side-effects",
      "Deterministic planning and edit receipts for machine handoff",
      "Token-aware workflows where context stays scoped and reviewable",
    ],
  },
  {
    title: "Quick start",
    body:
      "Use this shortest path for a first successful loop with low context overhead.",
    code: `# 1) Sanity-check the language surface
sley doctor --json .

# 2) Inspect structure and graph intent
sley ast --json main.sley
sley graph --json --slice <node-id> main.sley`,
    command: "sley tutorial",
  },
  {
    title: "Public command surface",
    body:
      "The public API is oriented around checks, graph views, and verified edit planning. Use JSON outputs by default so tools can compare receipts across hands.",
    bullets: [
      "sley ast",
      "sley graph",
      "sley query",
      "sley lint",
      "sley plan",
      "sley verify",
      "sley doctor",
    ],
  },
  {
    title: "Language-first workflow",
    body:
      "Sley prefers explicit task declarations, typed task calls, schema-linked JSON reports, and deterministic plan outputs. This keeps token pressure low by preserving edit structure instead of re-explaining intent on every cycle.",
    bullets: [
      "Scope every operation to the smallest valid edit slice",
      "Read diagnostics before mutation",
      "Use `--dry-run` mode for repair previews",
    ],
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
    bullets: [
      "Source and docs links are canonical: GitHub, OpenForge, and sleylang.org",
      "Protected implementation details stay off the public brief",
      "Verification artifacts stay the compatibility boundary for external review",
    ],
  },
  {
    title: "Operational references",
    body:
      "Public release posture, benchmark posture, and release notes are surfaced through Greyforge OpenForge and Greyforge Chronicles. Those are the stable sources for claims and public links.",
    bullets: [
      "Read `/chronicles/sley-zjx-agent-native-stack` on greyforge.tech",
      "Track OpenForge repo posture from the same source chain",
      "Use llms.txt for crawler-facing summary and links",
    ],
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
      title="Sley Documentation"
      subtitle="A practical public orientation: what you can use today, what the language optimizes for, and how to onboard safely."
    >
      {sections.map((section) => (
        <article key={section.title} className="card">
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.code && <pre className="code">{section.code}</pre>}
          {section.command && <p>Starter page: <a href="/tutorial">Sley tutorial</a></p>}
          {section.bullets && (
            <ul className="qa-list">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
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
        <h2>Walkthrough map</h2>
        <ol className="step-list">
          <li>
            Read this brief and <a href="/tutorial">the walkthrough</a> before any edits.
          </li>
          <li>
            Verify baseline posture: <code>sley doctor --json .</code>
          </li>
          <li>
            Inspect structure and graph slices before planning: <code>sley ast --json .</code> and <code>sley graph --json --slice &lt;node-id&gt; .</code>
          </li>
          <li>
            Produce structured plans and only then promote: <code>sley plan --json --graft-templates .</code>
          </li>
          <li>
            Validate again with <code>sley verify --json .</code> and move forward only if checks pass.
          </li>
        </ol>
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
