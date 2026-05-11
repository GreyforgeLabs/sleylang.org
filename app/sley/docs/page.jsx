import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley Docs (legacy path)",
  description: "Legacy-path documentation view for Sley on /sley/docs.",
};

export default function SleyScopedDocsPage() {
  return (
    <SleyShell
      scope="/sley"
      kicker="Documentation brief"
      title="Sley documentation orientation"
      subtitle="Compatibility mirror for /sley/docs with the same modern public claim surface."
    >
      <article className="card">
        <h2>Navigation</h2>
        <p>
          Use this compatibility surface exactly as you did before:
          <a href="/sley/tutorial"> tutorial</a>, <a href="/sley/faq"> FAQ</a>.
        </p>
      </article>
      <article className="card">
        <h2>Public claim summary</h2>
        <ul className="qa-list">
          <li>Engineered for AI-assisted execution with reduced token rework.</li>
          <li>Deterministic plan surfaces and reviewable edit handoffs.</li>
          <li>Bounded public claims with a machine-readable claim manifest and controlled private boundaries.</li>
        </ul>
      </article>
      <article className="card">
        <h2>Suggested first steps</h2>
        <ol className="step-list">
          <li>Read the docs brief and release boundary.</li>
          <li>Run `sley doctor` for readiness.</li>
          <li>Follow the full tutorial and verify checks before promotion.</li>
        </ol>
      </article>
    </SleyShell>
  );
}
