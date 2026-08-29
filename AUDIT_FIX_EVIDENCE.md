# GitHub Audit Remediation Evidence

Version: `1.0.1`

## GF-AUD-046

Next App Router pages are canonical. Hand-maintained static HTML and duplicate
`app/sley` page sources were removed. Legacy root, `.html`, `/sley`, metadata,
and asset URLs are explicit permanent redirects sourced from `lib/routes.mjs`.
The production smoke suite verifies redirects, canonical links, 404 behavior,
and that every discovered internal link resolves.

## GF-AUD-047

`app/sitemap.js` generates sitemap entries from the route manifest. Unit tests
enforce route/sitemap parity, alias uniqueness, normalized scope joins, and
invalid-link fixtures. The production suite crawls built pages, verifies
external anchor semantics, and runs axe-core against every indexable HTML route.
