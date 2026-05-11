import { SleyShell } from "../components/SleyShell";

const steps = [
  "Read the public release boundary first, then open `/readme` and `/docs` for scope and constraints.",
  "Run a baseline posture check with `sley doctor --json .` and capture the context.",
  "Inspect the smallest relevant slice with `sley ast --json .` and `sley graph --json --slice <node-id> .`",
  "Draft edits with structure-first plans using `sley plan --json --graft-templates .`",
  "Dry-run repair candidates before write operations using `sley fix --json --kind <kind> --dry-run .`",
  "Promote only stable actions after `sley lint --json .` and `sley verify --json .`.",
];

export const metadata = {
  title: "Sley Public Tutorial",
  description:
    "A public walkthrough for onboarding operators and agents to the Sley structural workflow.",
};

export default function TutorialPage() {
  return (
    <SleyShell
      scope=""
      kicker="Public walkthrough"
      title="Get started with the Sley public workflow"
      subtitle="A practical first run for structural editing, bounded verification, and compact handoffs."
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
        <pre className="code">{`language Sley:
  project        -> explicit_contract
  intent         -> bounded_plan
  edit           -> compiler_checked_mutation
  authority      -> declared_capability
  verify         -> deterministic_receipt`}
        </pre>
      </article>

      <article className="card">
        <h2>Hands-on walkthrough</h2>
        <pre className="code">{`# 1) Baseline checks
sley doctor --json .

# 2) Understand shape and flow
sley ast --json .
sley graph --json --slice <node-id> .

# 3) Build a bounded edit plan
sley plan --json --graft-templates .

# 4) Dry-run repairs and re-verify
sley fix --json --kind add_module_declaration --dry-run .
sley lint --json .
sley verify --json .`}</pre>
      </article>

      <article className="card">
        <h2>Next actions</h2>
        <p>
          Continue from the docs page and use OpenForge + release links as your anchor. This keeps public claims consistent while
          minimizing repeated context and overpromising.
        </p>
      </article>
    </SleyShell>
  );
}
