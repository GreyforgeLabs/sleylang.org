import { SleyShell } from "../components/SleyShell";

const sections = [
  {
    title: "Core posture",
    body:
      "Sley is built around explicit structure, deterministic plan outputs, and explicit authority gates. The project is intentionally constrained to keep private internals off the public mirror while preserving useful discovery surfaces.",
  },
  {
    title: "Quick entry",
    body:
      "Start with public examples, inspect diagnostics, and move through deterministic readiness signals before each mutation. This is the model for agent-safe, review-safe language workflows.",
  },
  {
    title: "Evidence and boundaries",
    body:
      "Sley surfaces intent and handoff artifacts at each transition so context is carried forward with less churn and fewer repeated assumptions.",
  },
];

export const metadata = {
  title: "Sley Documentation | Public brief",
  description:
    "Sley technical brief: language AI agent ergonomics, token-aware workflows, and structured compiler guidance.",
};

export default function DocsPage() {
  return (
    <SleyShell
      scope=""
      kicker="Documentation brief"
      title="Sley documentation orientation"
      subtitle="Understand what is intentionally public, what is private, and how to evaluate Sley from the outside."
    >
      {sections.map((section) => (
        <article key={section.title} className="card">
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}

      <article className="card">
        <h2>Public claim summary</h2>
        <ul className="qa-list">
          <li>First AI-native language claim: structured edits over unbounded prompts.</li>
          <li>Token-efficiency claim: reduce churn through explicit intent boundaries.</li>
          <li>Safety claim: review-oriented execution at the public edge.</li>
        </ul>
      </article>
    </SleyShell>
  );
}
