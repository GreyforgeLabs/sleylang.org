import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley Docs (legacy path)",
  description: "Legacy-path documentation view for Sley on /sley/docs.",
};

export default function SleyScopedDocsPage() {
  return (
    <SleyShell
      scope="/sley"
      kicker="Documentation brief"
      title="Sley documentation orientation"
      subtitle="Compatibility mirror for /sley/docs with the same modern public claim surface."
    >
      <article className="card">
        <h2>Navigation</h2>
        <p>From this route, you can open tutorial and FAQ under the same compatibility path.</p>
      </article>
      <article className="card">
        <h2>Core posture</h2>
        <p>
          Sley is structured for explicit intent, deterministic planning, and explicit authority gates. This remains the same
          contract across both root and /sley routes.
        </p>
      </article>
    </SleyShell>
  );
}
