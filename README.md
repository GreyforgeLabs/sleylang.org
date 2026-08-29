# sleylang.org

Modern React/Next.js source for the Sley public brief. Repository version:
`1.0.1`.

This repo hosts a production-safe Sley marketing surface for external discovery.
It keeps the private compiler internals out of the public site and keeps the same
claim boundaries as the broader Greyforge ecosystem.

The positioning emphasizes:

- Sley as Greyforge Labs' agent-native structural programming language
- compiler-mediated, human-reviewed software change
- a criteria-bound auditor packet for the world-first category phrase
- bounded structure, verification, and evidence instead of bare marketing claims

The site permanently redirects compatibility paths used by existing links:

- `/` and `/sley`
- `/docs.html` and `/docs`
- `/tutorial.html` and `/tutorial`
- `/faq.html` and `/faq`
- `/readme` and `/sley/readme`
- `/llms.txt`

The React routes are the only editable page source. Static `.txt` metadata
remains in place, permanent redirects preserve legacy `.html` bookmarks, and
the sitemap is generated from the same checked-in route manifest used by tests.

This source repository is authorized for public GitHub visibility. Its
`private: true` package flag prevents accidental npm publication; it does not
describe GitHub visibility. No software license for this site repository is
granted unless an operator-approved license file is added.

## Local verification

Use Node.js 20.9 or newer.

```bash
npm ci
npm run verify
npm audit --omit=dev
```

`verify` runs lint, route/redirect parity, a production build, a live link
crawl, canonical and sitemap checks, a 404 check, and an axe-core accessibility
smoke pass.
