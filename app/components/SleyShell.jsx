import Link from "next/link";

function scopeAware(scope, path) {
  if (!scope || scope === "/") {
    return path;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  if (path === "/") {
    return scope;
  }

  return `${scope}${path}`;
}

function ScopeLink({ scope, to, children, className = "" }) {
  return (
    <Link href={scopeAware(scope, to)} className={className}>
      {children}
    </Link>
  );
}

export function SleyShell({
  scope = "",
  kicker = "Agent-native structural language",
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
            Docs
          </ScopeLink>
          <ScopeLink scope={rootScope} to="/tutorial" className="nav-link">
            Tutorial
          </ScopeLink>
          <ScopeLink scope={rootScope} to="/faq" className="nav-link">
            FAQ
          </ScopeLink>
          <ScopeLink scope="" to="https://github.com/GreyforgeLabs/sley" className="nav-link">
            GitHub
          </ScopeLink>
          <ScopeLink scope="" to="https://greyforge.tech/openforge" className="nav-link">
            OpenForge
          </ScopeLink>
          <ScopeLink scope="" to="https://greyforge.tech/chronicles/sley-120-machine-native-break" className="nav-link">
            Transition
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
        <p>© 2026 Greyforge Labs. Sley is open source under Apache-2.0.</p>
        <p>
          <a href="https://greyforge.tech">greyforge.tech</a> ·
          <a href="https://greyforge.tech/chronicles">Chronicles</a> ·
          <a href="https://x.com/GreyforgeLabs">X</a> ·
          <a href="/llms.txt">llms.txt</a>
        </p>
      </footer>
    </div>
  );
}
