import { SleyShell } from "./components/SleyShell";

const capabilities = [
  {
    title: "Designed by AI for AI",
    body: "Sley targets language loops where agents and people share one structure-first workflow. Intent is expressed in auditable form, not brittle prompt patches.",
  },
  {
    title: "Token savings and efficiency",
    body: "By preserving edits as bounded compiler-friendly structure, sessions spend less time reloading context and more time making deterministic progress.",
  },
  {
    title: "Proof-first editing",
    body: "Planned edits route through explicit checks and readiness surfaces so edits are bounded, reviewable, and safe to hand across operator/model sessions.",
  },
];

const quickstart = [
  {
    title: "1) Read the launch posture",
    command: "# Start from the public claims boundary before editing",
  },
  {
    title: "2) Run baseline readiness checks",
    command: "sley doctor",
  },
  {
    title: "3) Inspect your structure",
    command: "sley ast --json main.sley",
  },
  {
    title: "4) Plan and verify edits",
    command: "sley plan --graft-templates main.sley",
  },
  {
    title: "5) Verify before promotion",
    command: "sley verify --json main.sley",
  },
];

export const metadata = {
  title: "Sley | the language AI agents want to speak",
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
          <li>Use JSON outputs for machine-consumable receipts and downstream handoffs.</li>
          <li>Lean on schema-linked diagnostics to keep token churn low.</li>
          <li>Preserve claims boundaries by routing internals through the official repository posture.</li>
        </ul>
      </article>
    </SleyShell>
  );
}
