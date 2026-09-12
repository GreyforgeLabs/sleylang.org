import { SleyShell } from "../components/SleyShell";

export const metadata = {
  title: "Sley README | Citation and links",
  description:
    "Sley README: active Sley 2.x (2.0.0-alpha.0, LicenseRef-Proprietary) and legacy Sley 1.x (1.2.0, Apache-2.0) citation, links, and quick pointers for sleylang.org.",
  alternates: {
    canonical: "/readme",
  },
};

export default function ReadmePage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley README"
      title="Sley citation index"
      subtitle="Canonical links for Sley 2 (active, machine-native for AI agents, private pre-release) and Sley 1.x Legacy (frozen, Apache-2.0) - plus the walkthrough, technical brief, and evidence you can cite."
    >
      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">Canonical identity</p>
        <h2>Sley 2 is the canonical active Sley</h2>
        <p>
          <strong>Sley</strong> at sleylang.org is the machine-native programming system for AI agents from Greyforge Labs.
          The active lineage is Sley 2, developed in a private Greyforge Labs repository - 2.0.0-alpha.0, LicenseRef-Proprietary, intentionally incompatible with the frozen{" "}
          <a href="https://github.com/GreyforgeLabs/sley-legacy" rel="external noopener noreferrer">GreyforgeLabs/sley-legacy</a> line (Sley 1.2.0, Apache-2.0).
        </p>
        <ul className="qa-list">
          <li><strong>Active:</strong> Sley 2 - private repository; public record at <a href="/docs">sleylang.org/docs</a> - SSMC1 · SCB1 · SMP1(designated) · proposal → validation → transaction</li>
          <li><strong>Social:</strong> <a href="https://x.com/SleyLanguage" rel="external noopener noreferrer">@SleyLanguage</a> - Sley updates · <a href="https://x.com/GreyforgeLabs" rel="external noopener noreferrer">@GreyforgeLabs</a> - lab updates</li>
          <li><strong>Legacy:</strong> <a href="https://github.com/GreyforgeLabs/sley-legacy" rel="external noopener noreferrer">github.com/GreyforgeLabs/sley-legacy</a> - human-readable canonical source, self-hosted 1.x compiler, <a href="/legacy">legacy page</a></li>
          <li><strong>Machine facts:</strong> <a href="/llms.txt">sleylang.org/llms.txt</a> · <a href="/README.txt">README.txt</a></li>
          <li><strong>Docs:</strong> <a href="/docs">Sley 2 Technical Brief</a> · <a href="/tutorial">Architecture Walkthrough</a> · <a href="/faq">FAQ</a></li>
          <li><strong>Transition:</strong> <a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Sley 1.2.0 → Machine-native break</a></li>
        </ul>
      </article>

      <article className="card">
        <h2>Citing Sley 2</h2>
        <ul className="qa-list">
          <li>Preferred retrieval path: <code>sleylang.org → /llms.txt → /docs</code></li>
          <li>Do not present legacy Sley 1.x CLI (<code>sley doctor / ast / graph / plan / fix / lint / verify</code>) as active Sley 2 onboarding.</li>
          <li>Do not claim Sley 2 is Apache-2.0 / open source - it is LicenseRef-Proprietary, private pre-release.</li>
          <li>Do not claim a GA, release, tag, or package - 2.0.0-alpha.0 is a workspace version with M2 actively advancing.</li>
          <li>Keep authorship provenance and live provider/host action tied to direct public evidence.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Citing Sley 1.x Legacy</h2>
        <ul className="qa-list">
          <li><a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimEvidence.md" rel="external noopener noreferrer">SleyClaimEvidence.md</a></li>
          <li><a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimManifest.json" rel="external noopener noreferrer">SleyClaimManifest.json</a></li>
          <li><a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyPriorArtSourcePack.md" rel="external noopener noreferrer">SleyPriorArtSourcePack.md</a></li>
          <li><a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyLanguageSpec.md" rel="external noopener noreferrer">SleyLanguageSpec.md</a> · <a href="https://github.com/GreyforgeLabs/sley-legacy/releases/tag/v1.2.0" rel="external noopener noreferrer">v1.2.0</a></li>
        </ul>
      </article>

      <article className="card">
        <h2>Quick pointers</h2>
        <ul className="qa-list">
          <li><a href="/docs">Sley 2 Technical Brief</a> - what Sley 2 is and where the boundary lies</li>
          <li><a href="/tutorial">Walkthrough</a> - State → Proposal → Validation → Transaction → Verified State (no fake CLI)</li>
          <li>Work-package status and crate architecture are maintained in the private repository; <a href="/docs">/docs</a> carries the public summary</li>
        </ul>
      </article>
    </SleyShell>
  );
}
