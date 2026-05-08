import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley FAQ (legacy path)",
  description: "Legacy-path FAQ for Sley.",
};

export default function SleyScopedFaqPage() {
  return (
    <SleyShell
      scope="/sley"
      kicker="Claim boundaries"
      title="Sley FAQ via /sley path"
      subtitle="Compatibility route for legacy links and docs tooling."
    >
      <article className="card">
        <h2>Common question</h2>
        <p>
          The public mirror is intentionally constrained; operational internals remain off the public route, while discovery, claims,
          and official links are maintained.
        </p>
      </article>
    </SleyShell>
  );
}
