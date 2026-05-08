import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley Tutorial (legacy path)",
  description: "Legacy-path walkthrough for Sley under /sley.",
};

export default function SleyScopedTutorialPage() {
  return (
    <SleyShell
      scope="/sley"
      kicker="Public walkthrough"
      title="Sley walkthrough via /sley path"
      subtitle="This route keeps old links working while serving the modern React surface."
    >
      <article className="card">
        <h2>Starter sequence</h2>
        <ol className="step-list">
          <li>Inspect public claim boundaries first.</li>
          <li>Review scope and readiness expectations.</li>
          <li>Run checks where possible, then promote proven edits.</li>
        </ol>
      </article>
    </SleyShell>
  );
}
