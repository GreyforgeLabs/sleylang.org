import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley Tutorial (legacy path)",
  description: "Legacy-path walkthrough for Sley under /sley.",
  alternates: {
    canonical: "/tutorial",
  },
  robots: {
    index: false,
    follow: true,
  },
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
      <article className="card">
        <h2>Legacy-path quickstart</h2>
        <pre className="code">
{`# Read public surface
sley doctor

# View structure
sley ast

# Confirm policy and safety
sley lint
sley verify`}
        </pre>
      </article>
    </SleyShell>
  );
}
