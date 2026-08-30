import { SleyShell } from "../components/SleyShell";

const walkthroughJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Sley 2 Architecture Walkthrough — State → Proposal → Validation → Transaction → Verified State",
  description:
    "Machine-native lifecycle walkthrough for Sley 2 (2.0.0-alpha.0 pre-release, LicenseRef-Proprietary): verified state root, derived bounded context, proposal-only mutation candidate, deterministic validation, atomic transaction, branch advancement, and deterministic receipts. No stable end-user CLI/API is claimed.",
  totalTime: "PT10M",
  step: [
    { "@type": "HowToStep", name: "Begin from a verified state root", text: "Start from a deterministic StateRoot over immutable SCB1 canonical bytes stored in the content-addressed object store." },
    { "@type": "HowToStep", name: "Derive bounded context", text: "Derive freshly rebuilt index snapshots (SLEYIDX1) and run the four restricted typed queries. Candidates can match only an already-fresh explicit modeled-request rebuild." },
    { "@type": "HowToStep", name: "Construct a proposal-only candidate", text: "Build an immutable digest-trailed SLEYCAN1 candidate from 179 bound descriptors covering 18 entity kinds and 75 fields. The construction checks contiguous ordinals, exact descriptor selection, deterministic creation IDs, and frozen validation-profile identity — but performs no semantic validation." },
    { "@type": "HowToStep", name: "Run deterministic validation", text: "Submit the candidate to the fourteen-phase restricted validator. Pure apply, reference, type, CFG, effect, policy, capability, contract, test, and root judgments run in order; unsupported semantic operations and capability gaps fail closed without mutating state." },
    { "@type": "HowToStep", name: "Commit through the atomic transaction boundary", text: "On success, the engine revalidates at commit time and atomically stages immutable objects, verifies, writes and syncs the receipt, syncs directories, and CAS-advances the fixed head. Failures leave only unreachable objects — never partial accepted state." },
    { "@type": "HowToStep", name: "Advance a native branch ref where authorized", text: "CAS-advance a lowercase-ASCII named ref from its direct parent; deterministic bounded ancestry and coordinated GC maintenance follow." },
    { "@type": "HowToStep", name: "Retain deterministic receipts and evidence", text: "Retain the 19-field transaction and 9-field receipt, observation digests, query responses, and evidence capsule for human acceptance." },
  ],
};

export const metadata = {
  title: "Sley 2 Architecture Walkthrough",
  description:
    "Sley 2 architecture walkthrough: verified state root → bounded derived context → proposal-only SLEYCAN1 candidate → deterministic fourteen-phase validation → atomic transaction → native branch → deterministic receipts. Pre-release 2.0.0-alpha.0; no stable CLI claimed.",
  alternates: {
    canonical: "/tutorial",
  },
};

export default function TutorialPage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley 2 Architecture Walkthrough"
      title="The machine-native lifecycle — step by step"
      subtitle="How a verified state becomes a proposed change, then a validated transaction, then a new verified state. Restricted pre-release 2.0.0-alpha.0 — inspected, not installed."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(walkthroughJsonLd) }} />

      <article className="card" style={{ gridColumn: "1 / -1", borderColor: "rgba(251,191,36,0.25)" }}>
        <p className="card-kicker">Pre-release surface</p>
        <h2>The current public surface is an inspectable pre-release implementation, not an installed language release.</h2>
        <p>
          No authorized installable user-facing CLI, package, or GA is claimed. The repository exposes the kernel crates, typed descriptors, candidate proposal APIs, validator, and transaction engine for inspection. Wrappers such as
          <code> sley-cli </code> remain thin machine adapters that delegate all judgment to the kernel — they are not the source of truth. Follow this walkthrough as the architecture, not as a stable end-user API.
        </p>
        <p>
          All seven steps below use only real implemented public-safe operations at <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">GreyforgeLabs/sley</a> (2.0.0-alpha.0, LicenseRef-Proprietary).
        </p>
      </article>

      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">The governed lifecycle</p>
        <h2>State → Proposal → Validation → Transaction → Verified State</h2>
        <p>Every Sley 2 change traverses this boundary — proposal before mutation, validation before commit, human governance before acceptance.</p>
        <ol className="step-list">
          <li>
            <strong>Begin from a verified state root.</strong> Use an immutable deterministic <code>StateRoot</code> derived from SCB1 canonical bytes. Roots are ancestry-independent; bindings are order-independent; packing round-trips the exact root.
          </li>
          <li>
            <strong>Derive the bounded information needed for a change.</strong> Rebuild <code>SLEYIDX1</code> index snapshots and run the four restricted typed queries. Responses contain exact QueryId records, canonically ordered payloads, raw-ID dictionaries, and direct-edge tables with fixed no-omission/no-truncation/no-continuation. Derived state is disposable — it never grants authority.
          </li>
          <li>
            <strong>Construct a proposal-only mutation candidate.</strong> Build a <code>SLEYCAN1</code> candidate from the exact frozen manifest — 179 immutable descriptors over 18 kinds and 75 fields, 16 primitive classes, sixteen mutation payloads, and thirteen record fields — checking contiguous ordinals, deterministic creation IDs, and the frozen validation-profile ID. The construction performs no semantic validation, authority judgment, or state mutation.
          </li>
          <li>
            <strong>Run deterministic validation.</strong> The fourteen-phase restricted validator (S20-360) owns every outcome: pure apply/reference/type/CFG/effect/policy/capability/contract/test/root judgments run in order. Unsupported semantic operation analysis and production fingerprint gaps fail closed; invalid candidates leave capability ledgers unchanged.
          </li>
          <li>
            <strong>Commit through the atomic transaction boundary.</strong> Fresh commit-time revalidation, durable immutable-object and receipt ordering, 19-field parent-bound <code>Transaction</code> and 9-field <code>Receipt</code> with non-cyclic IDs, and one fixed-head CAS. A crash yields old or complete new state — never partial accepted state (19 transaction tests, independent oracle checker, persistent importer fuzz).
          </li>
          <li>
            <strong>Advance a native branch ref where authorized.</strong> Atomic lowercase-ASCII named refs with immutable origin records, verified mutable refs, direct-parent fast-forward CAS, deterministic bounded ancestry, and repo maintenance coordination. No merge, force-reset, tags, or pack-exchange path is exposed.
          </li>
          <li>
            <strong>Retain deterministic receipts and state identity.</strong> Canonical transaction/receipt digests, observation digests, query responses, and restricted evidence capsules provide the evidence humans review to accept or reject the change.
          </li>
        </ol>
      </article>

      <article className="card">
        <h2>What this walkthrough does not do</h2>
        <ul className="qa-list">
          <li>No invented stable CLI — commands like <code>sley doctor</code>, <code>sley ast</code>, <code>sley graph</code>, <code>sley plan</code>, <code>sley fix</code>, <code>sley lint</code>, <code>sley verify</code> are legacy Sley 1.x and do not describe the active Sley 2 product.</li>
          <li>No Rust library calls presented as a stable end-user API.</li>
          <li>No live provider/shell/network/deployment authority is implied — policy roots and capability tokens are deterministic, bounded, and local.</li>
          <li>No SMP1 framing, JSON mapping, or clone-exchange is walked — those are designated future protocol layers.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Where to inspect each step</h2>
        <ul className="qa-list">
          <li>State & storage: <code>sley-store</code>, <code>sley-state-root</code>, <code>sley-repo</code> — see <a href="https://github.com/GreyforgeLabs/sley/tree/main/crates/sley-store" rel="external noopener noreferrer">store</a> &amp; <a href="https://github.com/GreyforgeLabs/sley/tree/main/crates/sley-repo" rel="external noopener noreferrer">repo</a></li>
          <li>Representation: <code>sley-scb1</code> + oracle — <a href="https://github.com/GreyforgeLabs/sley/blob/main/docs/spec/SCB1.md" rel="external noopener noreferrer">SCB1.md</a></li>
          <li>Mutation descriptors & candidates: <code>sley-mutate</code> + <a href="https://github.com/GreyforgeLabs/sley/blob/main/docs/spec/SCB1.md" rel="external noopener noreferrer">S20-340/350/345</a> conformance corpora</li>
          <li>Validation: <code>sley-check</code> + <code>sley-policy</code> — S20-360 fourteen-phase validator</li>
          <li>Transactions & receipts: <code>sley-txn</code> — S20-390 independent oracle & five-boundary fault matrix</li>
          <li>Branches: <code>sley-repo/refs.rs</code> — S20-500 native branch refs</li>
          <li>Queries & capsules: <code>sley-query</code> — S20-310/320 restricted snapshot/query/capsule</li>
          <li>Execution: <code>sley-vm</code> — S20-260/270 restricted lowering & VM</li>
        </ul>
      </article>

      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <h2>Lifecycle diagram — machine acts, human governs</h2>
        <div style={{ display: "grid", gap: "0.7rem" }}>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {[
              "Verified State",
              "Proposal",
              "Validation",
              "Transaction",
              "New Verified State",
            ].map((label, i) => (
              <span
                key={label}
                style={{
                  padding: "0.55rem 0.9rem",
                  borderRadius: "999px",
                  border: i === 1 || i === 2 ? "1px solid rgba(251,191,36,0.4)" : "1px solid rgba(125,211,252,0.3)",
                  background: i === 0 || i === 4 ? "rgba(34,211,238,0.10)" : i === 2 ? "rgba(251,191,36,0.13)" : "rgba(255,255,255,0.05)",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                }}
              >
                {i > 0 ? "→ " : ""}{label}
              </span>
            ))}
          </div>
          <p style={{ color: "var(--muted)", margin: 0 }}>
            Bounded derived context and typed queries inform the proposal; policy roots and capability tokens gate validation; atomic commit + branch CAS publish the result; receipts and capsules provide the evidence people review.
          </p>
        </div>
      </article>

      <article className="card">
        <h2>Next</h2>
        <p>
          Read the <a href="/docs">Sley 2 Technical Brief</a> for representation, identity, checks, execution, authority, and the exact completion boundary — or consult{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/main/docs/WORK_PACKAGES.md" rel="external noopener noreferrer">docs/WORK_PACKAGES.md</a> for every work package.
        </p>
        <p>
          For the frozen human-readable lineage, see <a href="/legacy">Sley 1.x Legacy</a>.
        </p>
      </article>
    </SleyShell>
  );
}
