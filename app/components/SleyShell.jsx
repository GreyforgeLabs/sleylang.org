import Link from "next/link";
import { classifyHref, resolveScopedHref } from "../../lib/routes.mjs";

function ScopeLink({ scope, to, children, className = "" }) {
  if (classifyHref(to) === "external") {
    return (
      <a
        href={to}
        className={className}
        rel="external noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={resolveScopedHref(scope, to)} className={className}>
      {children}
    </Link>
  );
}

export function SleyShell({
  scope = "",
  kicker = "Sley 2 / Machine-native programming",
  title,
  subtitle,
  children,
}) {
  const rootScope = scope || "";

  return (
    <div className="site-shell">
      <header className="topbar">
        <ScopeLink scope={scope} to="/" className="brand">
          Sley
        </ScopeLink>
        <nav aria-label="Primary">
          <ScopeLink scope={rootScope} to="/" className="nav-link">
            Home
          </ScopeLink>
          <ScopeLink scope={rootScope} to="/docs" className="nav-link">
            Architecture
          </ScopeLink>
          <ScopeLink scope={rootScope} to="/tutorial" className="nav-link">
            Walkthrough
          </ScopeLink>
          <ScopeLink scope={rootScope} to="/faq" className="nav-link">
            FAQ
          </ScopeLink>
          <ScopeLink scope={rootScope} to="/legacy" className="nav-link">
            Legacy
          </ScopeLink>
          <ScopeLink scope="" to="https://github.com/GreyforgeLabs/sley" className="nav-link">
            GitHub
          </ScopeLink>
          <ScopeLink scope="" to="https://greyforge.tech" className="nav-link">
            Greyforge
          </ScopeLink>
        </nav>
      </header>

      <main className="content-shell">
        <section className="hero">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <div className="hero-actions">
            <ScopeLink scope={rootScope} to="/tutorial" className="button-primary">
              Start walkthrough
            </ScopeLink>
            <ScopeLink scope={rootScope} to="/docs" className="button-ghost">
              Read documentation
            </ScopeLink>
            <ScopeLink scope={rootScope} to="/faq" className="button-ghost">
              Claim boundaries
            </ScopeLink>
            <ScopeLink scope="" to="https://greyforge.tech/chronicles/sley-120-machine-native-break" className="button-ghost">
              Why 2.x exists
            </ScopeLink>
          </div>
        </section>

        <div className="section-grid">{children}</div>
      </main>

      <footer className="footer">
        <p>© 2026 Greyforge Labs. Sley 2 source is public under LicenseRef-Proprietary · Sley 1.x Legacy is Apache-2.0.</p>
        <p>
          <a href="https://greyforge.tech" rel="external noopener noreferrer">greyforge.tech</a> ·
          <a href="https://greyforge.tech/chronicles/sley-120-machine-native-break" rel="external noopener noreferrer">Transition Chronicle</a> ·
          <a href="https://github.com/GreyforgeLabs/sley" rel="external noopener noreferrer">Active Sley</a> ·
          <a href="/legacy">Legacy</a> ·
          <a href="/llms.txt">llms.txt</a>
        </p>
      </footer>
    </div>
  );
}
