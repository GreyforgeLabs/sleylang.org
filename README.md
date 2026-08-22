# sleylang.org

Modern React/Next.js mirror for the Sley public brief.

This repo hosts a production-safe Sley marketing surface for external discovery.
It keeps the private compiler internals out of the public site and keeps the same
claim boundaries as the broader Greyforge ecosystem.

The positioning emphasizes:

- Sley as Greyforge Labs' agent-native structural programming language
- compiler-mediated, human-reviewed software change
- a criteria-bound auditor packet for the world-first category phrase
- bounded structure, verification, and evidence instead of bare marketing claims

The mirror also serves the duplicated compatibility path used by existing links:

- `/` and `/sley`
- `/docs.html` and `/docs`
- `/tutorial.html` and `/tutorial`
- `/faq.html` and `/faq`
- `/readme` and `/sley/readme`
- `/llms.txt`

The React routes replace the legacy static-only presentation. Static `.txt`
metadata remains in place, and Vercel rewrites preserve legacy `.html`
bookmarks while canonical metadata and the sitemap point to the primary routes.

## Local verification

Use Node.js 20.9 or newer.

```bash
npm ci
npm run verify
npm audit --omit=dev
```

`verify` runs the Next.js Core Web Vitals lint rules before creating the
production build.
