import { SleyShell } from "../components/SleyShell";

const steps = [
  "Read the project intent and confirm the release boundary before editing any source.",
  "Open public examples and run through the smallest example path first.",
  "Draft changes as small, explicit transformations with clear handoff context.",
  "Run readiness and validation checks and review generated receipts.",
  "Promote stable edits and keep proof artifacts linked in operating notes.",
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
      subtitle="A compact orientation for first-time visitors and operators needing a practical path."
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
          Continue from the docs page and keep the OpenForge listing and releases as the release-time anchor. This keeps public claims
          consistent and avoids overpromising on private internals.
        </p>
      </article>
    </SleyShell>
  );
}
