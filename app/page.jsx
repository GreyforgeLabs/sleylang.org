import { SleyShell } from "./components/SleyShell";

const architectureCards = [
  {
    title: "Typed semantic state",
    body: "Programs are SSMC1 typed state, not canonical human source. Canonical form and canonical SCB1 encoding are the source of truth.",
  },
  {
    title: "Deterministic identity",
    body: "Immutable objects and deterministic state roots give every verified state a stable, content-addressed identity; roots are order-independent.",
  },
  {
    title: "Proposal before mutation",
    body: "Machines construct proposal-only mutation candidates — never direct mutation. Every candidate is digest-trailed SLEYCAN1 with exact discriminants.",
  },
  {
    title: "Validation before commit",
    body: "A fourteen-phase restricted validator owns every outcome before the durable atomic transaction commits. Unsupported semantics fail closed.",
  },
  {
    title: "Explicit policy & capability",
    body: "Protected policy roots and BLAKE3-authenticated capability tokens bind root / effect / scope / adapter / budget with deterministic authority.",
  },
  {
    title: "Native versioned state",
    body: "Atomic named branch refs over verified receipts: immutable origin records, CAS advancement, bounded deterministic ancestry. Merge, force-reset, and clone exchange remain gaps.",
  },
  {
    title: "Bounded deterministic execution",
    body: "Restricted O0 lowering and VM for the validated Boolean/terminator subset executes with exact fuel, value, and observation digests. Other opcodes remain fail-closed.",
  },
  {
    title: "Human governance & evidence",
    body: "Readable projections, diagnostics, QueryId-typed queries, evidence capsules, receipts, and deterministic error behavior — machines mutate, people govern.",
  },
];

const implementedNow = [
  "SCB1 canonical encoding with strict primitive cursor and independent oracle",
  "Typed identifiers, schema epochs, immutable object store, deterministic state roots, and root/object pack import",
  "Deterministic core type system, CFG + value-use validation, least-fixed-point effect closure, static scope typing",
  "Restricted epoch-1 contract/test profile with deterministic policy-incomplete planning",
  "Semantic fingerprints for TypeDef/Function and canonical impact relationships for 12 modeled kinds",
  "Restricted O0 lowering + deterministic VM for five terminators and three Boolean opcodes with observation digests",
  "Eight request-owned reference adapter fixtures, report envelopes, SLEYIDX1 snapshot + four typed queries + evidence capsules",
  "Immutable mutation descriptors for 18 entity kinds, proposal-only SLEYCAN1 candidate construction and import/verification (170 accepted + 22 rejected value vectors; 1 accepted + 14 rejected candidate vectors; two-lane persistent fuzz)",
  "Fourteen-phase validator for the executable-operation-free subset with independent result corpus and persistent result-import fuzz",
  "Protected policy roots, local capability tokens, authorized adapter wrapper, and durable atomic transactions with receipts",
  "Native branch refs: atomic lowercase-ASCII named refs, direct-parent CAS, bounded ancestry, GC maintenance coordination",
  "Nine persistent libFuzzer targets covering SCB1, schema, packs, types, CFG, queries, VM, adapters, and candidates — plus bounded S20-700 adversarial slices",
];

const boundaries = [
  "52 opcode signatures, generics, adapters, VM adapter opcodes, live host/policy transitions, sessions, providers, and deployment remain explicit gaps",
  "19 root-backed query classes, truncation/continuation, master ContextCapsule, SMP1 protocol framing, and JSON bridge are deferred (SMP1 is designated, not claimed implemented)",
  "Complete semantic-operation analysis, production fingerprint hardening, and full S20-530 crash-matrix implementation remain gaps",
  "Merge, force-reset, symbolic refs, tags, branch deletion, and clone-equivalent pack exchange are not supported",
  "Public surface is inspectable pre-release, not an installed language release — no GA, tag, package, or production claim",
];

export const metadata = {
  title: "Sley 2 — Machine-native programming",
  description:
    "Sley 2 is Greyforge Labs' active machine-native programming system. Machines mutate typed verified program state; humans govern through projections, policy, and evidence. 2.0.0-alpha.0 source-visible pre-release (LicenseRef-Proprietary), intentionally incompatible with the Apache-2.0 Sley 1.x Legacy lineage.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Sley",
    "Sley 2",
    "machine-native programming",
    "machine-native programming system",
    "typed semantic program state",
    "SSMC1",
    "SCB1",
    "SMP1",
    "deterministic program representation",
    "Proposal Validation Transaction",
    "Greyforge Labs",
  ],
};

export default function HomePage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley 2 / Machine-native programming"
      title="Programming state for machines. Governance for people."
      subtitle="Machines do not write source. They mutate verified program state. Sley 2 is Greyforge Labs' active, intentionally incompatible machine-native lineage — typed semantic state with proposal → validation → transaction and explicit human governance."
    >
      <article className="card" style={{ gridColumn: "1 / -1", borderColor: "rgba(34,211,238,0.28)" }}>
        <p className="card-kicker">Active lineage · pre-release engineering</p>
        <h2>Sley 2 — the canonical Sley</h2>
        <p>
          The canonical site is <strong>sleylang.org</strong> and the canonical active repository is{" "}
          <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">
            GreyforgeLabs/sley
          </a>
          . Current workspace/source version: <code>2.0.0-alpha.0</code> — a workspace pre-release, not a released product, GitHub release, package, or GA.
          Public source visibility is <code>LicenseRef-Proprietary</code>, not an open-source license.
        </p>
        <p>
          <strong>Machine Native. Human Governed.</strong> The canonical raw program representation is intentionally not required to be comfortable human source. Humans govern
          through projections, inspection, policy roots, capability tokens, objectives, constraints, receipts, and acceptance — not by authoring canonical bytes.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.9rem" }}>
          <a className="button-primary" href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">
            Inspect active Sley 2.x
          </a>
          <a className="button-ghost" href="/docs">
            Read technical brief
          </a>
          <a className="button-ghost" href="/tutorial">
            Walkthrough
          </a>
          <a className="button-ghost" href="/legacy">
            Sley 1.x Legacy
          </a>
        </div>
        <ul className="qa-list" style={{ marginTop: "1rem" }}>
          <li>
            <strong>Active:</strong> <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">GreyforgeLabs/sley</a> — SSMC1 canonical form · SCB1 canonical encoding · SMP1 designated interface · 2.0.0-alpha.0 · LicenseRef-Proprietary
          </li>
          <li>
            <strong>Legacy:</strong> <a href="https://github.com/GreyforgeLabs/sley-legacy" rel="external noopener noreferrer">GreyforgeLabs/sley-legacy</a> — Sley 1.2.0 frozen · human-readable canonical source · self-hosted 1.x compiler · Apache-2.0
          </li>
          <li>
            <strong>Transition:</strong> <a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Sley 1.2.0 → Machine-native break Chronicle</a> ·{" "}
            <a href="https://greyforge.tech/research/sley-machine-native-break-source-note-2026-08-27.md" rel="external noopener noreferrer">source note</a>
          </li>
        </ul>
      </article>

      <article className="card" style={{ gridColumn: "1 / -1", background: "rgba(251,191,36,0.08)" }}>
        <p className="card-kicker">Current phase</p>
        <h2>Active pre-release engineering — not research, not GA</h2>
        <p>
          M0 is complete. M1 core (SCB1, identifiers, independent oracle, epochs, immutable store, deterministic roots, root/object packs) is complete. M2 is advancing — deterministic type, CFG, effects, restricted contracts, fingerprints, lowering, VM, adapters, and policy now have bounded implementations for the supported subset. Full-GA semantics, complete operation analysis, and release hardening remain incomplete. See{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/main/docs/WORK_PACKAGES.md" rel="external noopener noreferrer">docs/WORK_PACKAGES.md</a> for the exact DAG.
        </p>
      </article>

      {architectureCards.map((card) => (
        <article key={card.title} className="card">
          <h2>{card.title}</h2>
          <p>{card.body}</p>
        </article>
      ))}

      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">State → Proposal → Validation → Transaction → Verified State</p>
        <h2>How a machine changes a Sley 2 program</h2>
        <ol className="step-list">
          <li><strong>Verified state root</strong> — begin from a deterministic StateRoot over immutable canonical bytes.</li>
          <li><strong>Derive bounded context</strong> — derive freshly rebuilt snapshots and typed queries; candidates match only an already-fresh explicit modeled-request rebuild.</li>
          <li><strong>Proposal-only candidate</strong> — build an immutable digest-trailed SLEYCAN1 candidate from 179 bound descriptors; no semantic validation yet.</li>
          <li><strong>Deterministic validation</strong> — fourteen-phase validator owns every outcome; unsupported semantic operations and insufficient capability fail closed.</li>
          <li><strong>Atomic transaction</strong> — commit-time revalidation, durable object + receipt ordering, and one fixed-head compare-and-swap promotion.</li>
          <li><strong>Advance a branch</strong> — named ref CAS from direct parent, deterministic ancestry, coordinated maintenance.</li>
          <li><strong>Retain receipts & evidence</strong> — canonical receipts, observation digests, query responses, and evidence capsules for acceptance.</li>
        </ol>
        <p style={{ marginTop: "0.8rem", color: "var(--muted)", fontSize: "0.9rem" }}>
          The current public surface is an inspectable pre-release implementation, not an installed language release. No stable end-user CLI/API is claimed beyond thin machine wrappers that delegate all judgment to the kernel.
        </p>
      </article>

      <article className="card machine-card">
        <p className="card-kicker">Implemented now / 2.0.0-alpha.0</p>
        <h2>What Sley 2 already contains — bounded, deterministic, and evidenced</h2>
        <ul className="qa-list fact-list">
          {implementedNow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="stat-grid" aria-label="Sley 2 implementation evidence">
          <div className="stat-pill"><strong>SSMC1 / SCB1 / SMP1(designated)</strong><span>canonical identities</span></div>
          <div className="stat-pill"><strong>18 kinds · 75 fields</strong><span>mutation descriptors</span></div>
          <div className="stat-pill"><strong>14 phases</strong><span>restricted validator</span></div>
          <div className="stat-pill"><strong>19-field txn · 9-field receipt</strong><span>atomic commit</span></div>
        </div>
      </article>

      <article className="card">
        <p className="card-kicker">Boundaries</p>
        <h2>What Sley 2 is intentionally not — yet</h2>
        <ul className="qa-list">
          {boundaries.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Full-GA blockers remain: six unmodeled entity bodies, unsupported opcode families, trunk truncated query coverage, master capsule, live provider/shell/network authority, and complete S20-530 recovery implementation. See the{" "}
          <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">repository</a> for exact status.
        </p>
      </article>

      <article className="card">
        <p className="card-kicker">Sley 1.x Legacy — preserved</p>
        <h2>Looking for human-readable Sley 1.2?</h2>
        <p>
          Sley 1.2 completes the human-readable structural line — self-hosted compiler, 99 report schemas, 187 contract fixtures, 72 corpus cases, 264 integration checks. It remains
          frozen and available under Apache-2.0.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
          <a className="button-ghost" href="/legacy">Open legacy page</a>
          <a className="button-ghost" href="https://github.com/GreyforgeLabs/sley-legacy" rel="external noopener noreferrer">Legacy GitHub</a>
          <a href="https://github.com/GreyforgeLabs/sley-legacy/releases/tag/v1.2.0" rel="external noopener noreferrer">v1.2.0 release</a>
        </div>
      </article>

      <article className="card auditor-card">
        <p className="card-kicker">Repository vs docs</p>
        <h2>Documentation drift note</h2>
        <p>
          The root README still describes named branches as future work, but code evidence proves S20-500 native refs (CAS, ancestry) are landed. Prefer crate code, tests, and <code>docs/WORK_PACKAGES.md</code> over prose when they disagree. Other known divergences: SMP1 is architecturally designated but not claimed implemented.
        </p>
        <p>
          <a href="https://github.com/GreyforgeLabs/sley/blob/main/docs/WORK_PACKAGES.md" rel="external noopener noreferrer">Work-package DAG</a> ·
          <a href="https://github.com/GreyforgeLabs/sley/blob/main/ARCHITECTURE.md" rel="external noopener noreferrer">Architecture</a> ·
          <a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Transition Chronicle</a>
        </p>
      </article>
    </SleyShell>
  );
}
