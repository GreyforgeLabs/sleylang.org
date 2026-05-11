import { SleyShell } from "../components/SleyShell";

const faq = [
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
    a: "Public surface links and llms metadata are maintained on this site. The auditable claim map lives in the public Sley repository at docs/SleyClaimEvidence.md.",
  },
  {
    q: "Can I cite the world-first AI-native language claim?",
    a: "Only with the evidence packet. Sley's canonical public claim is agent-native structural programming for compiler-mediated, human-reviewed software change. The stronger world-first phrase is criteria-bound and should not be used as a bare slogan.",
  },
  {
    q: "Is Sley strictly self-hosted?",
    a: "No. The current public proof is a stage-1 bootstrap with Sley-owned stage-2 semantic modules. Strict self-hosting remains a blocked release claim until parser, checker, runtime, and command semantics execute from Sley source and pass parity tests.",
  },
];

export const metadata = {
  title: "Sley FAQ",
  description: "Claim boundaries and release safety answers for Sley agent-native structural programming.",
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
