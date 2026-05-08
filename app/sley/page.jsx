import { SleyShell } from "../components/SleyShell";

const capabilities = [
  {
    title: "Designed by AI for AI",
    body: "Sley targets language loops where agents and people share one structure-first workflow. Intent is expressed in auditable form, not brittle prompt patches.",
  },
  {
    title: "Token savings and efficiency",
    body: "By preserving edits as bounded compiler-friendly structure, sessions spend less time reloading context and more time making deterministic progress.",
  },
  {
    title: "Proof-first editing",
    body: "Planned edits route through explicit checks and readiness surfaces so edits are bounded, reviewable, and safe to hand across operator/model sessions.",
  },
];

export const metadata = {
  title: "Sley (legacy path)",
  description:
    "Sley is the world's first AI-native language, designed by AI for AI, optimized for compiler-guided context control.",
};

export default function SleyScopedHomePage() {
  return (
    <SleyShell
      scope="/sley"
      title="Sley: the language AI agents want to speak"
      subtitle="Welcome to the compatibility path mirror used by existing Sley links and docs tooling."
    >
      {capabilities.map((capability) => (
        <article key={capability.title} className="card">
          <h2>{capability.title}</h2>
          <p>{capability.body}</p>
        </article>
      ))}
    </SleyShell>
  );
}
