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
    a: "Public surface links and llms metadata are maintained on this site, while full release posture is linked from GitHub and OpenForge.",
  },
];

export const metadata = {
  title: "Sley FAQ",
  description: "Claim boundaries and release safety answers for Sley and AI-native structured editing.",
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
