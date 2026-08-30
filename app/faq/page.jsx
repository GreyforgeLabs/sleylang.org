import { SleyShell } from "../components/SleyShell";

const faq = [
  {
    q: "What is Sley?",
    a: "Sley is Greyforge Labs' programming-system lineage. The canonical domain is sleylang.org. Active Sley is the machine-native Sley 2.x lineage at GreyforgeLabs/sley; the frozen human-readable Sley 1.x lineage lives at GreyforgeLabs/sley-legacy and is preserved under /legacy.",
  },
  {
    q: "What is Sley 2?",
    a: "Sley 2 is the active machine-native lineage in which programs are created, stored, changed, executed, tested, versioned, and exchanged as typed semantic state. Its canonical form is SSMC1, its canonical encoding is SCB1, and its designated machine-interface lineage is SMP1. Machines mutate verified state; humans govern through projections, inspection, policy, evidence, objectives, and acceptance.",
  },
  {
    q: "Is Sley 2 a programming language or a programming system?",
    a: "A programming system. The kernel is a narrow Rust validator/executor of immutable SSMC1 objects, but the full system spans storage, derivation, mutation, policy, transactions, refs, queries, execution, and exchange — not just syntax.",
  },
  {
    q: "Why doesn't Sley 2 use canonical source text?",
    a: "Human readability is no longer a mandatory design constraint for the canonical raw representation. This gives freedom to optimize for machine determinism, validated mutation, and governance. People govern via readable projections, diagnostics, receipts, and evidence — not by authoring canonical bytes.",
  },
  {
    q: "Can humans still inspect Sley programs?",
    a: "Yes. Readable projections, inspectors, visualizers, typed queries, diagnostics, receipts, observation digests, and evidence capsules are explicit derived surfaces. The canonical bytes are not required to be comfortable human source.",
  },
  {
    q: "What are SSMC1 and SCB1?",
    a: "SSMC1 is the canonical typed entity/opcode schema (frozen; 18 entity kinds). SCB1 is the only canonical byte encoding for objects, roots, transactions, candidates, receipts, packs, and declared protocol payloads — strict, minimal, domain-separated via BLAKE3, with an independent oracle that agrees byte-for-byte.",
  },
  {
    q: "What is SMP1?",
    a: "SMP1 is the designated machine-interface lineage (handshake/methods/errors). It is architecturally frozen as a spec but not claimed implemented. The current public-safe implementation does not expose live SMP1 framing, JSON bridge, or CLI protocol.",
  },
  {
    q: "How does a machine change a Sley 2 program?",
    a: "Through State → Proposal → Validation → Transaction → Verified State: begin from a verified StateRoot, derive bounded snapshot/query context, build a proposal-only SLEYCAN1 candidate from 179 bound descriptors, submit to the fourteen-phase validator, and atomically commit a 19-field parent-bound transaction with a 9-field receipt.",
  },
  {
    q: 'What does "proposal before mutation" mean?',
    a: "Machines never mutate state directly. They construct immutable, digest-trailed SLEYCAN1 candidates that check contiguous ordinals, exact descriptor selection, deterministic creation IDs, and the frozen validation-profile identity. Only the validator-owned plan can later be considered for commit — and only after fresh revalidation.",
  },
  {
    q: "Does Sley 2 have deterministic program identity?",
    a: "Yes. Immutable SCB1 bytes yield content-addressed ObjectIds; order-independent bindings yield deterministic StateRoots; varied read sizes and sufficient memory ceilings produce identical archives in compatibility evidence; candidates and receipts use distinct digest domains and deterministic creation IDs.",
  },
  {
    q: "Does Sley 2 execute programs today?",
    a: "In a restricted, deterministic profile: O0 lowering for five terminators and three Boolean opcodes, with exact derived bytes, bounded fuel/value/output/cancellation, and canonical observation digests. The other 52 opcode signatures, generics, and VM adapter opcodes remain fail-closed gaps.",
  },
  {
    q: "Does Sley 2 have version control?",
    a: "Native named branch refs are landed: immutable origin records, lowercase-ASCII names on digest-keyed paths, verified mutable refs, idempotent create, direct-parent fast-forward CAS with deterministic bounded ancestry, and coordinated GC maintenance. Not supported: merge, force-reset, tags, symbolic refs, branch deletion, and clone-equivalent pack exchange.",
  },
  {
    q: "Is Sley 2 open source?",
    a: "No. The Sley 2 source repository at GreyforgeLabs/sley is public and inspectable, but the current workspace declares LicenseRef-Proprietary. Public source visibility is not the same as an open-source license. Sley 1.x Legacy remains the Apache-2.0 lineage.",
  },
  {
    q: "Is Sley 1.x still available?",
    a: "Yes. See /legacy and GreyforgeLabs/sley-legacy. v1.2.0 is the frozen final 1.x release-candidate boundary (self-hosted 1.x compiler, 99 report schemas, 187 contract fixtures, 72 corpus cases, 264 integration checks). Sley 1.x and Sley 2.x are intentionally incompatible.",
  },
  {
    q: "Is Sley 2 compatible with Sley 1.x?",
    a: "No. The lineages are intentionally incompatible. No compatibility promise, migration tooling, or source continuity is claimed. Reuse is allowed, but assisted upgrades are not a current commitment.",
  },
  {
    q: "Is Sley 2 released?",
    a: "No. 2.0.0-alpha.0 is a workspace/source version in active pre-release engineering — not a GitHub release, tag, package, or GA. Operator-approved proprietary license text, a standards SBOM, release provenance, a history re-anchor, and final Argus/Vulcan dispositions remain mandatory S20-710 blockers.",
  },
  {
    q: "What is unfinished?",
    a: "Category-level: complete semantic-operation analysis; full query/capsule/truncation surface; live host/provider/shell/network authority; SMP1 framing + JSON/CLI protocol; merge/clone exchange; production S20-530 crash-recovery implementation (100-row contract frozen, not yet passing); benchmark trials; and M6 GA gates. See docs/WORK_PACKAGES.md for exact package status.",
  },
];

const sleyFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata = {
  title: "Sley 2 FAQ — Architecture, Release, and Boundaries",
  description:
    "Sley 2 FAQ: machine-native program state, SSMC1/SCB1/SMP1, proposal → validation → transaction, deterministic identity, restricted execution, native branch refs, LicenseRef-Proprietary vs Apache-2.0 legacy, 2.0.0-alpha.0 pre-release boundaries, and the intentionally incompatible 1.x lineage.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <SleyShell
      scope=""
      kicker="Sley 2 FAQ"
      title="Sley 2 FAQ"
      subtitle="What Sley 2 is, how machines change it, how humans govern it, and where the pre-release boundary lies — in sync with public source at GreyforgeLabs/sley."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sleyFaqJsonLd) }} />
      {faq.map((item) => (
        <article key={item.q} className="card">
          <h2>{item.q}</h2>
          <p>{item.a}</p>
        </article>
      ))}
      <article className="card" style={{ gridColumn: "1 / -1" }}>
        <p className="card-kicker">Related surfaces</p>
        <h2>Go deeper</h2>
        <ul className="qa-list">
          <li><a href="/docs">Sley 2 Technical Brief</a> — representation, checks, execution, authority, branches, completion boundary</li>
          <li><a href="/tutorial">Architecture Walkthrough</a> — State → Proposal → Validation → Transaction → Verified State</li>
          <li><a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">Active Sley 2.x repository</a> — public source, LicenseRef-Proprietary, 2.0.0-alpha.0</li>
          <li><a href="/legacy">Sley 1.x Legacy</a> — frozen Apache-2.0 1.2.0, intentionally incompatible</li>
          <li><a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Transition Chronicle</a> — why the break</li>
          <li><a href="/llms.txt">llms.txt</a> — machine discovery</li>
        </ul>
      </article>
    </SleyShell>
  );
}
