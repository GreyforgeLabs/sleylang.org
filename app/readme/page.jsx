import { SleyShell } from "../components/SleyShell";

export const metadata = {
  title: "Sley README | Start Here",
  description:
    "Public README mirror for Sley: walkthroughs, release posture, and first-step guidance for the world's first AI-native language.",
};

export default function ReadmePage() {
  return (
    <SleyShell
      scope=""
      kicker="Reference"
      title="Sley public summary"
      subtitle="Repository links, public claims, and the structured context for external readers."
    >
      <article className="card">
        <h2>Where to go next</h2>
        <p>
          For source and implementation context: <a href="https://github.com/GreyforgeLabs/sley">GitHub repository</a>.
        </p>
        <p>
          For project curation and discoverability: <a href="https://greyforge.tech/openforge">OpenForge</a> and
          <a href="https://sleylang.org/llms.txt"> llms metadata</a>.
        </p>
        <p>
          Language positioning: the language AI agents want to speak, designed by AI for AI, optimized for token-efficient engineering.
        </p>
      </article>

      <article className="card">
        <h2>Quick start (recommended)</h2>
        <ol className="step-list">
          <li>Confirm release posture and current claims:</li>
          <pre className="code">sley doctor</pre>
          <li>Inspect structure with deterministic output:</li>
          <pre className="code">sley ast --json .</pre>
          <li>Draft your first bounded edit plan:</li>
          <pre className="code">sley plan --json --graft-templates .</pre>
          <li>Run verification before promoting:</li>
          <pre className="code">sley verify --json .</pre>
        </ol>
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
        <h2>Token-efficient claim checklist</h2>
        <ul className="qa-list">
          <li>Prefer compiler-guided structure over raw prompt rewrites.</li>
          <li>Use JSON diagnostics and plans for handoff continuity.</li>
          <li>Verify with explicit checks before each promotion step.</li>
          <li>Keep edit scope small and bounded to reduce churn.</li>
        </ul>
      </article>
    </SleyShell>
  );
}
