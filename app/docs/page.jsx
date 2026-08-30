import { SleyShell } from "../components/SleyShell";

const briefJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Sley 2 Technical Brief — Machine-native programming system",
  description:
    "Typed machine-native program state: SSMC1 canonical form, SCB1 encoding, SMP1 designated interface; immutable objects, deterministic roots, proposal-validated transactions, restricted execution, explicit policy/capability, and native branch ancestry. Bounded pre-release 2.0.0-alpha.0 implementation status.",
  author: { "@type": "Organization", name: "Greyforge Labs", url: "https://greyforge.tech" },
  publisher: { "@type": "Organization", name: "Greyforge Labs", url: "https://greyforge.tech" },
  dateModified: "2026-08-30",
  mainEntityOfPage: "https://sleylang.org/docs",
};

export const metadata = {
  title: "Sley 2 Technical Brief",
  description:
    "Sley 2 Technical Brief: typed machine-native program state (SSMC1/SCB1), immutable objects, deterministic roots, proposal → validation → transaction, semantic checks, bounded execution, policy roots, capability tokens, native branches, and current completion boundary.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley 2 Technical Brief"
      title="Sley 2 Technical Brief"
      subtitle="Typed machine-native program state for machines, with human governance, deterministic identity, and proposal-validated transactions. Active pre-release 2.0.0-alpha.0 — no GA, no tag, no package is claimed."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(briefJsonLd) }} />

      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">What Sley 2 is</p>
        <h2>Typed machine-native program state — not canonical human source</h2>
        <p>
          Sley 2 programs are created, stored, changed, executed, tested, versioned, and exchanged as <strong>typed semantic state</strong>. The canonical program form is <strong>SSMC1</strong>, the
          canonical encoding is <strong>SCB1</strong>, and the designated machine-interface lineage is <strong>SMP1</strong> (architecturally frozen, not claimed implemented). Machines construct and validate state mutations; humans govern
          through projections, inspection, policy, evidence, objectives, and acceptance — without requiring the canonical machine representation itself to be comfortable human source code.
        </p>
        <p>
          <strong>Thesis:</strong> Machines do not write source. They mutate verified program state. <em>Machine Native. Human Governed.</em>
        </p>
        <ul className="qa-list">
          <li>No human-readable canonical source, no source parser, no canonical text format, no conventional formatter, no conventional LSP, no Sley 1.x compatibility — intentionally.</li>
          <li>Human-readable projections, diagnostics, receipts, evidence capsules, and inspection surfaces exist — but they are derived, not canonical.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Representation — SSMC1 / SCB1</h2>
        <p>
          <strong>SSMC1</strong> is the canonical typed entity/opcode schema (frozen by S20-200). <strong>SCB1</strong> is the only canonical byte encoding for objects, roots, transactions, candidates, receipts, packs, and declared protocol payloads — strict, minimal, domain-separated via BLAKE3, with independent oracle conformance (S20-130).
        </p>
        <ul className="qa-list">
          <li>18 entity kinds and 16 primitive classes generate 179 immutable mutation descriptors (exact-manifest codegen, S20-340).</li>
          <li>All 16 ConstData variants, five terminators, and sixteen mutation classes are exercised by independent value/candidate corpora (170 accepted + 22 rejected values; 1 accepted + 14 rejected candidates).</li>
          <li>Low-level ScbValueCursor exposes the frozen primitive decoder without selecting schema or mutation type.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Identity and storage</h2>
        <p>
          Immutable object storage with typed identifiers, schema epochs, deterministic state roots, and uncompressed repository object/root packs (M1 complete: S20-100 through S20-170).
        </p>
        <ul className="qa-list">
          <li>Immutable write/verify/promote, tamper detection, and exact root reconstruction independent of binding order.</li>
          <li>Round-trip import preflights the complete pack before promotion; refs/transactions remain separate until S20-540 clone-equivalent exchange.</li>
          <li>Retention snapshots, dry-run reports, and exclusive-guarded GC preserve all roots/leases (S20-180).</li>
        </ul>
      </article>

      <article className="card">
        <h2>Change lifecycle — proposal → validation → transaction</h2>
        <p><strong>State → Proposal → Validation → Transaction → Verified State</strong></p>
        <ol className="step-list">
          <li><strong>State:</strong> begin from a verified deterministic StateRoot.</li>
          <li><strong>Proposal:</strong> construct a proposal-only SLEYCAN1 candidate from closed host values — 179 discriminants, contiguous ordinals, deterministic creation IDs, frozen validation-profile ID, digest trailer.</li>
          <li><strong>Validation:</strong> fourteen-phase restricted validator owns every outcome (pure apply, reference, type, CFG, effect, policy, capability, contract, test, root judgments).</li>
          <li><strong>Transaction:</strong> durable atomic commit with fresh revalidation, 19-field parent-bound transaction, 9-field receipt, object/receipt-before-head ordering, and fixed-head compare-and-swap.</li>
          <li><strong>Verified State:</strong> new StateRoot with deterministic ancestry and maintenance-coordinated refs.</li>
        </ol>
        <p>Semantic operation entities are explicitly not yet analyzed — candidates within the restricted executable-operation-free subset pass; others fail closed by design.</p>
      </article>

      <article className="card">
        <h2>Semantic checks — the restricted validation profile</h2>
        <ul className="qa-list">
          <li>Deterministic core type checking (S20-210), bounded CFG + value-use validation (S20-220), exact least-fixed-point effect closure + static scope typing (S20-230).</li>
          <li>Restricted epoch-1 contract/test profile with deterministic policy-incomplete planning (S20-240) — six unmodeled entity bodies remain a full-GA blocker.</li>
          <li>Deterministic TypeDef/Function fingerprints, canonical value hash, and exact impact relationships for 12 modeled kinds (S20-250).</li>
          <li>Five-realm rejection and stale-preimage/digest matrices are pinned; Rust consumes Python-produced bytes and exact error codes.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Execution — restricted deterministic VM</h2>
        <p>Sley 2 already contains a bounded deterministic execution path for the implemented semantic subset — not a complete runtime.</p>
        <ul className="qa-list">
          <li>Restricted O0 lowering for all five terminators and three validated Boolean opcodes with exact derived bytes and root/profile-bound cache key (S20-260).</li>
          <li>Deterministic execution with exact Boolean semantics, bounded fuel/value/output/cancellation, and canonical observation digest (S20-270).</li>
          <li>Eight restricted request-owned reference adapter fixtures with exact identity/state/replay/limit/atomicity/transcript rules (S20-280); VM adapter opcodes and live host access remain gaps.</li>
          <li>Restricted execution/test report envelopes that verify observations without claiming persistence, policy finality, or M2 exit (S20-290).</li>
        </ul>
      </article>

      <article className="card">
        <h2>Authority — policy roots and capability tokens</h2>
        <ul className="qa-list">
          <li><strong>Protected policy root:</strong> separately registry-authorized, with opaque principals, principal-specific grants, protected entity bindings, and mandatory test/contract finalization (S20-370). No self-authorization.</li>
          <li><strong>Local capability tokens:</strong> exact root/effect/scope/adapter/budget binding, keyed BLAKE3 authentication, caller-owned replay/budget ledger (S20-380).</li>
          <li>Authorized reference-adapter wrapper enforces fixture atomicity; VM adapter opcodes, candidate admission, and live-runtime authority remain blocked.</li>
          <li>Deterministic authority checks are explicit — no live provider/shell/network/deployment authority is implied.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Versioned state — native branch refs and ancestry</h2>
        <p>
          Native S20-500 refs are landed — not future work. Inspect crate code, tests, and <code>docs/WORK_PACKAGES.md</code> as authority over prose.
        </p>
        <ul className="qa-list">
          <li>Immutable branch origins, lowercase-ASCII names, digest-keyed confined layout, idempotent create, verified mutable refs.</li>
          <li>Compare-and-swap advancement only from direct parent, with exact stale/parent/workspace errors; deterministic bounded ancestry.</li>
          <li>Shared/exclusive GC maintenance ownership with owned-stage recovery and fan-out retries.</li>
          <li>Explicitly <em>not</em> implemented: merge, force-reset, rename, symbolic refs, tags, branch deletion, pack-exchange clone, named-branch candidate commit.</li>
        </ul>
        <p>Evidence: 28 focused native ref tests + 5 verified-revision tests, 64 repository tests, 19 active transaction tests, plus ancestry convergence/cycle/limit adversarial and create/advance & GC races.</p>
      </article>

      <article className="card">
        <h2>Human governance — projections, diagnostics, receipts, evidence</h2>
        <ul className="qa-list">
          <li><strong>Restricted queries:</strong> SLEYIDX1 snapshot + four typed queries over freshly derived snapshots, exact QueryId/response records, hard-fail on omission (S20-310). Nineteen root-backed classes remain blocked.</li>
          <li><strong>Evidence capsule:</strong> restricted complete-query capsule with raw-ID dictionaries and direct-edge tables, fixed no-omission/no-truncation/no-continuation (S20-320). Not the master ContextCapsule.</li>
          <li>Readable projections, diagnostics, receipts, observation digests, and deterministic error behavior — engineering evidence, not formal proof of correctness.</li>
          <li>Independent oracle/conformance fixtures, persistent libFuzzer targets, malformed-input testing, and fail-closed public-safety checks across concerns.</li>
        </ul>
      </article>

      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">Current completion boundary</p>
        <h2>What is implemented · restricted · unfinished · release-blocking</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          <div>
            <h3 style={{ fontSize: "1rem", margin: "0 0 0.5rem" }}>Implemented (bounded)</h3>
            <ul className="qa-list">
              <li>SCB1, SSMC1 schema, identifiers, independent oracle, immutable store, deterministic roots, packs, retention/GC coordination</li>
              <li>Type, CFG, value-use, effect closure, restricted contracts, fingerprints, lowering/VM subset, adapters (fixtures), report envelopes, snapshot/queries/capsules</li>
              <li>Proposal-only candidate construction, 14-phase validator, atomic transactions + receipts, protected policy, capability tokens, native branches</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "1rem", margin: "0 0 0.5rem" }}>Restricted-profile</h3>
            <ul className="qa-list">
              <li>Execution limited to Boolean/terminator subset; contracts limited to epoch-1; queries limited to four complete types over opaque snapshots</li>
              <li>Adapter fixtures only (no live host); policy is registry-authorized but not live-transitioned; transactions are for the operation-free subset</li>
              <li>Branches are native refs without merge/clone/production recovery</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "1rem", margin: "0 0 0.5rem" }}>Unfinished · release-blocking</h3>
            <ul className="qa-list">
              <li>52 opcode families, generics, VM adapter opcodes, live authority, provider/shell/network, SMP1 framing, JSON bridge, CLI protocol</li>
              <li>Complete semantic-operation analysis, full query/capsule surface, production crash-matrix implementation (S20-530: 100-row contract frozen, not implemented)</li>
              <li>S20-710: operator-approved proprietary license text, standards SBOM, release provenance, re-anchored scan, Argus/Vulcan dispositions</li>
              <li>Benchmarks, S20-610 raw-baseline trials, and M6 GA gates — `make v2` remains the authoritative full gate</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: "1rem" }}>
          For exact package detail, see <a href="https://github.com/GreyforgeLabs/sley/blob/main/docs/WORK_PACKAGES.md" rel="external noopener noreferrer">docs/WORK_PACKAGES.md</a> and{" "}
          <a href="https://github.com/GreyforgeLabs/sley/blob/main/ARCHITECTURE.md" rel="external noopener noreferrer">ARCHITECTURE.md</a>. Do not trust prose that disagrees with landed crate code.
        </p>
        <p>
          <strong>Status:</strong> M0 complete · M1 core complete · M2 actively advancing · later release/GA work incomplete. <em>Active pre-release engineering</em> — substantial running implementation, not a research idea; not a released production language.
        </p>
      </article>

      <article className="card">
        <h2>Related surfaces</h2>
        <ul className="qa-list">
          <li><a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">Active Sley 2.x repository</a> — public source (LicenseRef-Proprietary)</li>
          <li><a href="https://github.com/GreyforgeLabs/sley-legacy" rel="external noopener noreferrer">Sley 1.x Legacy</a> — Apache-2.0 frozen line, <a href="/legacy">legacy page</a></li>
          <li><a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Architectural transition Chronicle</a></li>
          <li><a href="https://greyforge.tech/research/sley-machine-native-break-source-note-2026-08-27.md" rel="external noopener noreferrer">Transition source note</a></li>
          <li><a href="/llms.txt">llms.txt</a> — machine discovery</li>
        </ul>
      </article>
    </SleyShell>
  );
}
