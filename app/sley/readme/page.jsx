import { SleyShell } from "../../components/SleyShell";

export const metadata = {
  title: "Sley README (legacy path)",
  description: "Legacy-path README summary for Sley.",
};

export default function SleyScopedReadmePage() {
  return (
    <SleyShell
      scope="/sley"
      kicker="Reference"
      title="Sley public summary (legacy path)"
      subtitle="Compatibility path for /sley/readme and external bookmarks."
    >
      <article className="card">
        <h2>Canonical links</h2>
        <p>
          <a href="https://github.com/GreyforgeLabs/sley">GitHub</a> ·
          <a href="https://greyforge.tech/openforge">OpenForge</a>
        </p>
      </article>
    </SleyShell>
  );
}
