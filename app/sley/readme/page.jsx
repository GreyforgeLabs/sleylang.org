import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley README (legacy path)",
  description:
    "Legacy-path Sley summary for getting started, walkthroughs, and first-command onboarding from external bookmarks.",
  alternates: {
    canonical: "/readme",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SleyScopedReadmePage() {
  return (
    <SleyShell
      scope="/sley"
      kicker="Reference"
      title="Sley public summary (legacy path)"
      subtitle="Compatibility path for /sley/readme and external bookmarks."
    >
      <article className="card">
        <h2>Canonical links</h2>
        <p>
          <a href="https://github.com/GreyforgeLabs/sley">GitHub</a> ·
          <a href="https://greyforge.tech/openforge">OpenForge</a>
        </p>
      </article>

      <article className="card">
        <h2>Compatibility quickstart</h2>
        <ol className="step-list">
          <li>Check release posture and tool status: <code>sley doctor</code></li>
          <li>Generate structure: <code>sley ast --json .</code></li>
          <li>Prepare safe edit plan: <code>sley plan --json --graft-templates .</code></li>
          <li>Validate before promote: <code>sley verify --json .</code></li>
        </ol>
      </article>

      <article className="card">
        <h2>Why this route exists</h2>
        <p>
          This compatibility mirror keeps old links working while preserving the modern
          public claim surface on the root Sley pages.
        </p>
      </article>
    </SleyShell>
  );
}
