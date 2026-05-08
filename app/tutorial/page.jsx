import { SleyShell } from "../components/SleyShell";

const steps = [
  "Read the public release boundary first, then open README and official docs links.",
  "Run a quick readiness check with `sley doctor` and review output scope.",
  "Explore the smallest example path before any deeper API or runtime change.",
  "Draft edits as explicit transformations and keep each handoff bounded by receipts.",
  "Promote only stable actions after lint/check/verify pass on public surfaces.",
];

export const metadata = {
  title: "Sley Public Tutorial",
  description:
    "A public walkthrough for onboarding operators and agents to the Sley AI-native workflow.",
};

export default function TutorialPage() {
  return (
    <SleyShell
      scope=""
      kicker="Public walkthrough"
      title="Get started with the Sley public workflow"
      subtitle="A practical first run for AI-native structured editing and token-efficient handoffs."
    >
      <article className="card">
        <h2>Step-by-step</h2>
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>
      <article className="card">
        <h2>Sample intent sketch</h2>
        <pre className="code">
{`language Sley:
  project        -> explicit_contract
  intent         -> bounded_plan
  edit           -> compiler_checked_mutation
  authority      -> declared_capability
  verify         -> deterministic_receipt`}
        </pre>
      </article>
      <article className="card">
        <h2>Next actions</h2>
        <p>
          Continue from the docs page and use OpenForge + release links as your anchor. This keeps public claims consistent while
          minimizing repeated context and overpromising.
        </p>
      </article>
      <article className="card">
        <h2>Public CLI walk</h2>
        <pre className="code">
{`# Prepare and validate
sley doctor
sley lint

# Inspect structural view
sley ast

# Plan edits as bounded transitions
sley plan .  # path to project scope

# Verify before sharing
sley verify`}
        </pre>
      </article>
    </SleyShell>
  );
}
