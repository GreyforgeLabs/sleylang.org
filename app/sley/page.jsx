import { SleyShell } from "../components/SleyShell";

const capabilities = [
  {
    title: "Agent-native structural language",
    body: "Sley targets language loops where agents and people share one structure-first workflow. Intent is expressed in auditable form, not brittle prompt patches.",
  },
  {
    title: "Token savings and efficiency",
    body: "By preserving edits as bounded compiler-friendly structure, sessions spend less time reloading context and more time making deterministic progress.",
  },
  {
    title: "Auditable claim evidence",
    body: "The public repository carries the claim criteria, evidence map, machine-readable claim manifest, prior-art source pack, and current release blockers for independent review.",
  },
  {
    title: "May 18 checkpoint",
    body: "The local v1 gate remains green and selected result plus deterministic authority-gate output paths now have broader Sley-owned semantic coverage. Strict self-hosting is still blocked.",
  },
];

export const metadata = {
  title: "Sley (legacy path)",
  description:
    "Sley is Greyforge Labs' agent-native structural programming language for compiler-mediated software change.",
};

export default function SleyScopedHomePage() {
  return (
    <SleyShell
      scope="/sley"
      title="Sley: agent-native structural programming"
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
