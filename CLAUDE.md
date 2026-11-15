# ozelserkan.com — personal academic website

This repository is Serkan Özel's personal academic website, published with GitHub Pages at https://ozelserkan.com (see `CNAME`). It is bilingual: Turkish and English.

The GitHub repository is https://github.com/serkanozeltx/ozelserkan.com (public, branch `main`). Commits use the GitHub no-reply email set in this repo's local git config, so the personal email stays out of the public history.

Serkan wants to learn how the site works, not only receive it. When you make a technical choice or change, explain briefly what you did and why, in plain language.

## Design

- Read `design/README.md` before designing or writing any page, and follow it: colours, fonts, spacing, the pattern motif, and the components.
- Take every value from `design/tokens.css` (CSS custom properties). Don't hard-code colours, fonts or sizes, and don't introduce new ones. If the design needs something the system lacks, propose a change to the design system first.
- Reuse the component classes in `design/components/components.css` and the guidelines in `design/components/*.md`.
- Both light and dark themes must work. Check text contrast in both.

## Voice and content

- First person, plain, sentence case, short but substantive. No emoji, no exclamation marks, no superlatives.
- Turkish and English are equals: every page exists in both, with the same structure. Keep Turkish characters (ğ, ş, ı, İ, ö, ü, ç).
- Use only facts Serkan provides (CV, publication list, bios, his messages). Never invent citations, DOIs, dates, titles, roles or numbers. If something is missing, ask.
- Photos: only ones Serkan supplies.

## Sources outside this repo

- The CV folder lives outside the repository. Serkan adds it to a session with `/add-dir <path>`. Read from it freely, but copy into the repo only what should be public (for example the final CV PDF). Drafts and private files never go into the repo: it is public.

## Way of working

1. Agree on a page's purpose and content first.
2. Then design it (a preview Serkan can look at).
3. Then build it, commit with a clear message, and push only when Serkan says so.

Keep the two lists below up to date as decisions are made.

## Sitemap (draft — to be agreed)

- Home — who I am in one sentence, current focus, featured projects, latest publications
- About — bio, education, awards
- Research — main areas and the questions behind them
- Publications — by year, with filters
- Projects — ÇÖL, TÜBİTAK 1001, NSF early number study, Day of AI Türkiye, MATTE4005
- Teaching & PD — courses, teacher professional development, advising
- Service — editorial roles, curriculum work
- Contact — and CV download

## Open decisions

- Site technology: plain HTML/CSS (no build step, easiest to learn) or a static site generator (for example Eleventy or Jekyll, which make bilingual pages and a BibTeX publication list easier). Discuss before building.
- URL structure for the two languages (for example `/` Turkish and `/en/` English, or the other way round).
- Publication data source: BibTeX export from Google Scholar or ORCID.
- DNS setup for ozelserkan.com pointing to GitHub Pages.
