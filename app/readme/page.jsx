import { SleyShell } from "../components/SleyShell";

export const metadata = {
  title: "Sley README | Start Here",
  description:
    "Public README mirror for Sley: walkthroughs, release posture, and first-step guidance for agent-native structural programming.",
  alternates: {
    canonical: "/readme",
  },
};

export default function ReadmePage() {
  return (
    <SleyShell
      scope=""
      kicker="Reference"
      title="Sley public summary"
      subtitle="Everything you need to start quickly: links, walkthroughs, and token-efficient workflow posture."
    >
      <article className="card">
        <h2>Start here</h2>
        <p>Welcome to the public Sley brief. This site is intentionally focused on practical onboarding and public-safe claim boundaries.</p>
        <ul className="qa-list">
          <li>
            <strong>Core repository:</strong>{" "}
            <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">github.com/GreyforgeLabs/sley</a>
          </li>
          <li>
            <strong>Project discovery:</strong>{" "}
            <a href="https://greyforge.tech/openforge" rel="external noopener noreferrer">greyforge.tech/openforge</a>
          </li>
          <li>
            <strong>Crawler index:</strong> <a href="https://sleylang.org/llms.txt" rel="external noopener noreferrer">sleylang.org/llms.txt</a>
          </li>
          <li>
            <strong>Claim evidence:</strong>{" "}
            <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyClaimEvidence.md" rel="external noopener noreferrer">docs/SleyClaimEvidence.md</a>
          </li>
          <li>
            <strong>Claim manifest:</strong>{" "}
            <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyClaimManifest.json" rel="external noopener noreferrer">docs/SleyClaimManifest.json</a>
          </li>
          <li>
            <strong>Prior-art source pack:</strong>{" "}
            <a href="https://github.com/GreyforgeLabs/sley/blob/public/docs/SleyPriorArtSourcePack.md" rel="external noopener noreferrer">docs/SleyPriorArtSourcePack.md</a>
          </li>
        </ul>
      </article>

      <article className="card">
        <h2>Quick start (recommended)</h2>
        <ol className="step-list">
          <li>
            Confirm release posture and current claims:
            <pre className="code">sley doctor --json .</pre>
          </li>
          <li>
            Inspect structure with deterministic output:
            <pre className="code">sley ast --json .</pre>
          </li>
          <li>
            Inspect graph scope before editing:
            <pre className="code">sley graph --json --slice &lt;node-id&gt; .</pre>
          </li>
          <li>
            Draft your first bounded edit plan:
            <pre className="code">sley plan --json --graft-templates .</pre>
          </li>
          <li>
            Run lint and verification before promoting:
            <pre className="code">sley lint --json .</pre>
            <pre className="code">sley verify --json .</pre>
          </li>
          <li>
            Run a dry-run repair when needed:
            <pre className="code">sley fix --json --kind add_module_declaration --dry-run .</pre>
          </li>
        </ol>
      </article>

      <article className="card">
        <h2>Hands-on sample session</h2>
        <pre className="code">{`# 1) baseline posture
sley doctor --json .

# 2) shape and graph views
sley ast --json .
sley graph --json --slice <node-id> .

# 3) plan and lint
sley plan --json --graft-templates .
sley lint --json .

# 4) verify and close
sley verify --json .
`}</pre>
      </article>

      <article className="card">
        <h2>Walkthrough surfaces</h2>
        <p>
          <a href="/tutorial">Public Tutorial</a> ·
          <a href="/docs">Technical Brief</a> ·
          <a href="/faq">FAQ</a> ·
          <a href="/sley">Structured Surface</a>
        </p>
      </article>

      <article className="card">
        <h2>Token efficiency checklist</h2>
        <ul className="qa-list">
          <li>Prefer compiler-guided structure over raw prompt rewrites.</li>
          <li>Use JSON diagnostics and plans for handoff continuity.</li>
          <li>Verify with explicit checks before each promotion step.</li>
          <li>Keep edit scope small and bounded to reduce churn.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Brand position</h2>
        <p>
          Sley is an agent-native structural programming language for compiler-mediated,
          human-reviewed software change. The world-first category claim is documented
          as a criteria-bound auditor packet and official-source comparison pack, not a bare slogan.
        </p>
      </article>
    </SleyShell>
  );
}
