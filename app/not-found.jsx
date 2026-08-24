import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell">
      <section className="content-shell">
        <div className="hero">
          <p className="kicker">404 / Record not found</p>
          <h1>This Sley record does not exist.</h1>
          <p className="subtitle">
            The address may have moved, or the requested surface may no longer be public.
          </p>
          <div className="hero-actions">
            <Link href="/" className="button-primary">
              Return to Sley
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
