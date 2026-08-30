import { SleyShell } from "../components/SleyShell";

export const metadata = {
  title: "Sley 1.x Legacy — The completed human-readable line",
  description:
    "Sley 1.x Legacy is the frozen, complete human-readable structural line (v1.2.0 RC, Apache-2.0). Self-hosted 1.x compiler, 99 report schemas, 187 contract fixtures, 72 corpus cases, 264 integration checks. Intentionally incompatible with machine-native Sley 2.x.",
  alternates: {
    canonical: "/legacy",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sley 1.x still available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sley 1.x is the completed, frozen human-readable lineage at GreyforgeLabs/sley-legacy under Apache-2.0. v1.2.0 is its final release-candidate boundary (Linux x86_64, unsigned provenance). It remains available for historical use, compatibility, study, experimentation, forks, and existing users.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sley 1.x compatible with Sley 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Sley 1.x and Sley 2.x are intentionally incompatible lineages. No migration promise or source compatibility is claimed. See the architectural transition Chronicle.",
      },
    },
  ],
};

export default function LegacyPage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley 1.x Legacy / Apache-2.0"
      title="Sley 1.x Legacy"
      subtitle="The completed human-readable line — frozen, self-hosted, and preserved. Sley 1.2.0 is the final 1.x release-candidate boundary. Active development now lives in the intentionally incompatible machine-native Sley 2.x lineage."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">Legacy lineage · frozen · Apache-2.0</p>
        <h2>Sley 1.x is complete — and stays open</h2>
        <ul className="qa-list">
          <li><strong>1.x is frozen:</strong> no active feature development on the human-readable architecture.</li>
          <li><strong>v1.2.0</strong> is the final/current legacy release-candidate boundary — Linux x86_64, unsigned provenance, not a production promotion.</li>
          <li><strong>Human-readable canonical source</strong> is the 1.x review projection; <strong>self-hosted 1.x compiler</strong> owns parser, checker, lint, runtime, bootstrap, and report semantics in Sley source.</li>
          <li><strong>License:</strong> Apache-2.0 — confined to the Sley 1.x Legacy lineage. Active Sley 2 is LicenseRef-Proprietary.</li>
          <li><strong>Original workflow:</strong> structural inspection (AST, graph slices, queries), planned edits, deterministic receipts, and authority gates — the structural, agent-native workflow that Sley 1.x proved.</li>
          <li><strong>Compatibility:</strong> intentionally incompatible with machine-native Sley 2.x. No migration tooling is promised.</li>
        </ul>
      </article>

      <article className="card machine-card">
        <p className="card-kicker">Release-candidate proof surface</p>
        <h2>v1.2.0 release evidence — auditor packet</h2>
        <ul className="qa-list fact-list">
          <li>38 release targets · 99 report schemas · 187 contract fixtures · 72 corpus cases · 264 integration checks · 11 release-packet checks · 4 public-release checks</li>
          <li>Self-hosted compiler exercised through the verification surface; public shell wraps that language-owned core into a practical local command surface</li>
          <li>Sensitive host-facing behavior through deterministic authority gates — not implicit live provider/shell/network/secret/payment actions</li>
        </ul>
        <div className="stat-grid">
          <div className="stat-pill"><strong>38 / 38</strong><span>release targets</span></div>
          <div className="stat-pill"><strong>99</strong><span>report schemas</span></div>
          <div className="stat-pill"><strong>187 / 187</strong><span>contract fixtures</span></div>
          <div className="stat-pill"><strong>264 / 264</strong><span>integration checks</span></div>
        </div>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <a className="button-primary" href="https://github.com/GreyforgeLabs/sley-legacy" rel="external noopener noreferrer">
            Legacy repository
          </a>
          <a className="button-ghost" href="https://github.com/GreyforgeLabs/sley-legacy/releases/tag/v1.2.0" rel="external noopener noreferrer">
            v1.2.0 release
          </a>
          <a className="button-ghost" href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimEvidence.md" rel="external noopener noreferrer">
            Claim evidence
          </a>
        </div>
        <ul className="qa-list" style={{ marginTop: "1rem" }}>
          <li>
            <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimManifest.json" rel="external noopener noreferrer">Claim manifest</a>
          </li>
          <li>
            <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyPriorArtSourcePack.md" rel="external noopener noreferrer">Prior-art source pack</a>
          </li>
          <li>
            <a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Sley 1.2 transition Chronicle</a>
          </li>
          <li>
            <a href="https://sleylang.org/sley-1-2-release-candidate-source-note-2026-08-26.md" rel="external noopener noreferrer">Release-candidate source note (via mirror)</a>
          </li>
          <li>
            <a href="https://greyforge.tech/research/sley-machine-native-break-source-note-2026-08-27.md" rel="external noopener noreferrer">Transition source note</a>
          </li>
        </ul>
      </article>

      <article className="card">
        <h2>When to use Sley 1.x Legacy</h2>
        <ul className="qa-list">
          <li>Historical compatibility, study, experimentation, forks, or community-led legacy upgrades</li>
          <li>Verification-friendly structural workflows with human-readable canonical source</li>
          <li>Any lane where the self-hosted 1.x compiler and existing v1 gate are the desired boundary</li>
        </ul>
      </article>

      <article className="card">
        <h2>When to use active Sley 2</h2>
        <ul className="qa-list">
          <li>New work that needs machine-native typed state, deterministic roots, and proposal-validated transactions</li>
          <li>Lanes requiring explicit policy/capability and native branch ancestry over verified receipts</li>
          <li>Active pre-release engineering — inspect the <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">public source</a> directly; no GA or package is claimed</li>
        </ul>
        <p>
          <a href="/docs">Sley 2 technical brief</a> · <a href="/tutorial">Architecture walkthrough</a> · <a href="/faq">Sley 2 FAQ</a>
        </p>
      </article>

      <article className="card">
        <p className="card-kicker">Citation boundary</p>
        <h2>How to cite Sley 1.x</h2>
        <p>
          Pair strong category or historical claims with the public evidence packet, language specification, contract reference, release record, and primary-source comparison packet. Do not use the{" "}
          world-first agent-native phrase as a bare slogan — it is criteria-bound.
        </p>
        <ul className="qa-list">
          <li>
            <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimEvidence.md" rel="external noopener noreferrer">SleyClaimEvidence.md</a>
          </li>
          <li>
            <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyClaimManifest.json" rel="external noopener noreferrer">SleyClaimManifest.json</a>
          </li>
          <li>
            <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyPriorArtSourcePack.md" rel="external noopener noreferrer">SleyPriorArtSourcePack.md</a>
          </li>
          <li>
            <a href="https://github.com/GreyforgeLabs/sley-legacy/blob/public/docs/SleyLanguageSpec.md" rel="external noopener noreferrer">SleyLanguageSpec.md</a>
          </li>
        </ul>
      </article>
    </SleyShell>
  );
}
