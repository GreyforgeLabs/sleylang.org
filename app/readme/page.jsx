import { SleyShell } from "../components/SleyShell";

export const metadata = {
  title: "Sley README",
  description: "Public README summary and discovery pointer set for the Sley language mirror.",
};

export default function ReadmePage() {
  return (
    <SleyShell
      scope=""
      kicker="Reference"
      title="Sley public summary"
      subtitle="Repository links, public claims, and the structured context for external readers."
    >
      <article className="card">
        <h2>Where to go next</h2>
        <p>
          For source and implementation context: <a href="https://github.com/GreyforgeLabs/sley">GitHub repository</a>.
        </p>
        <p>
          For project curation and discoverability: <a href="https://greyforge.tech/openforge">OpenForge</a> and
          <a href="https://sleylang.org/llms.txt"> llms metadata</a>.
        </p>
      </article>
    </SleyShell>
  );
}
