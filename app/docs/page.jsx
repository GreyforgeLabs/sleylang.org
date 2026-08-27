import { SleyShell } from "../components/SleyShell";

const sections = [
  {
    title: "What Sley is for",
    body:
      "Sley 1.x is a compiler-oriented language surface for people and agents who need readable source, bounded edits, and strong evidence. Use 1.2.0 when your workflow values reproducibility, scope control, explicit planning, and direct human inspection.",
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
      "Public release posture, the 1.x feature freeze, the Sley 2.x architectural break, and release notes are surfaced through the Sley source pack, Greyforge OpenForge, and Greyforge Chronicles. Those are the stable sources for claims and public links.",
    bullets: [
      "Read `/chronicles/sley-120-machine-native-break` on greyforge.tech",
      "Track OpenForge repo posture from the same source chain",
      "Use llms.txt for crawler-facing summary and links",
    ],
  },
];

export const metadata = {
  title: "Sley Documentation | Public brief",
  description:
    "Sley technical brief: agent-native structural programming, bounded workflows, and compiler-mediated evidence.",
  alternates: {
    canonical: "/docs",
  },
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
          <li>Sley 1.2.0 completes the agent-native, human-readable 1.x architecture.</li>
          <li>Greyforge has frozen active 1.x feature development while keeping the Apache-2.0 repository public.</li>
          <li>Sley 2.x is a clean machine-native line. Human governance remains required, but readability of the canonical raw representation is optional.</li>
          <li>Compatibility, migration tooling, release timing, and unreleased 2.x mechanisms are not promised.</li>
          <li>World-first category claim: cite only with the public evidence packet, claim manifest, and prior-art source pack.</li>
          <li>Release claim: v1.2.0 is a public Linux x86_64 release candidate with unsigned provenance, not a production promotion.</li>
          <li>Verified release inventory: 38 targets, 99 schemas, 187 contract fixtures, 72 corpus cases, 264 integration checks, 11 release-packet checks, and 4 public-release checks.</li>
        </ul>
        <p><a href="https://greyforge.tech/chronicles/sley-120-machine-native-break">Architectural transition Chronicle</a></p>
        <p>
          Evidence packet:{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyClaimEvidence.md">
            docs/SleyClaimEvidence.md
          </a>
        </p>
        <p>
          Claim manifest:{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyClaimManifest.json">
            docs/SleyClaimManifest.json
          </a>
        </p>
        <p>
          Prior-art source pack:{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyPriorArtSourcePack.md">
            docs/SleyPriorArtSourcePack.md
          </a>
        </p>
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
          The Sley 1.2.0 onboarding path is intentionally conservative: confirm baseline checks, generate structured reports, and only then
          promote deeper edits after lint and verify pass.
        </p>
      </article>
    </SleyShell>
  );
}
