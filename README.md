# sleylang.org

Modern React/Next.js mirror for the Sley public brief.

This repo hosts a production-safe Sley marketing surface for external discovery.
It keeps the private compiler internals out of the public site and keeps the same
claim boundaries as the broader Greyforge ecosystem.

The positioning emphasizes:

- Sley as the world's first AI-native programming language
- "language AI agents want to speak"
- language designed by AI for AI
- token savings through structure-first, context-aware compiler mediation

The mirror also serves the duplicated compatibility path used by existing links:

- `/` and `/sley`
- `/docs.html` and `/docs`
- `/tutorial.html` and `/tutorial`
- `/faq.html` and `/faq`
- `/readme` and `/sley/readme`
- `/llms.txt`

The React routes were added to drop the legacy static-only presentation while
keeping static artifacts (like `.txt` metadata files and legacy `.html` for direct
bookmarks) in place.
