import { SleyShell } from "../components/SleyShell";

const faq = [
  {
    q: "Is Sley 1.x still active?",
    a: "Sley 1.2.0 is the completed human-readable 1.x architecture. Greyforge has frozen active 1.x feature development, but the Apache-2.0 repository remains public for use, study, extension, experimentation, and forks.",
  },
  {
    q: "Is Sley 2.x compatible with Sley 1.x?",
    a: "Compatibility is not promised. Sley 2.x is a clean machine-native lineage rather than an ordinary incremental upgrade. Reuse is allowed, but source compatibility, migration tooling, and implementation continuity are not current commitments.",
  },
  {
    q: "Does machine-native mean people lose control?",
    a: "No. Human governance remains required. People own objectives, constraints, authority, policy, risk, deployment, and acceptance. Sley 2.x changes only the assumption that people must directly consume the canonical raw program representation.",
  },
  {
    q: "Is Sley a standalone runtime yet?",
    a: "The public posture is intentionally constrained. Sley is presented as a language layer with explicit boundaries around private runtime capabilities.",
  },
  {
    q: "Will I reduce token spend with Sley workflows?",
    a: "The gain comes from bounded context and repeated structure reuse instead of repeated raw rewrites. Token efficiency depends on structured planning and handoff discipline.",
  },
  {
    q: "Where are standards and claims maintained?",
    a: "Public surface links and llms metadata are maintained on this site. The auditable claim map lives in the public Sley repository at docs/SleyClaimEvidence.md, the machine-readable manifest lives at docs/SleyClaimManifest.json, and official-source comparison lives in docs/SleyPriorArtSourcePack.md.",
  },
  {
    q: "Can I cite the world-first agent-native language claim?",
    a: "Only with the evidence packet, claim manifest, and prior-art source pack. Sley's canonical public claim is agent-native structural programming for compiler-mediated, human-reviewed software change. The stronger world-first phrase is criteria-bound and should not be used as a bare slogan.",
  },
  {
    q: "Is Sley strictly self-hosted?",
    a: "The Sley 1.2.0 public release evidence describes a self-hosted compiler whose parser, checker, lint, runtime, bootstrap, and report semantics are owned in Sley source. Use the release, claim-evidence packet, and current repository gates for the exact proof boundary.",
  },
];

export const metadata = {
  title: "Sley FAQ",
  description: "Claim boundaries for Sley 1.2.0, the 1.x feature freeze, and the clean machine-native Sley 2.x architecture.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <SleyShell
      scope=""
      kicker="Claim boundaries"
      title="Sley FAQ"
      subtitle="Public boundaries and release posture for external readers and operators."
    >
      {faq.map((item) => (
        <article key={item.q} className="card">
          <h2>{item.q}</h2>
          <p>{item.a}</p>
        </article>
      ))}
    </SleyShell>
  );
}
