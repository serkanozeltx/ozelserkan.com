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
- When building a page turns up something missing from or conflicting with the CV, add it to `00_START_HERE/CV_Pending_Updates.md` in the CV folder (not in this repo). `CV_Update_Prompt.md` next to it is the prompt for applying those updates later.

## Way of working

1. Agree on a page's purpose and content first.
2. Then design it (a preview Serkan can look at).
3. Then build it, commit with a clear message, and push only when Serkan says so.

Keep the lists below up to date as decisions are made.

## Sitemap (draft — to be agreed)

The agreed contents of each page, item by item, are in `notes/content-plan.md`.


- Home — who I am in one sentence, current focus, featured projects, latest publications
- About — bio, education, awards
- Research — main areas and the questions behind them
- Publications — by year, with filters
- Projects — Research, Practice and Consultancy groups; ÇÖL (the lab) stands apart from them
- Teaching & PD — Boğaziçi courses (current code with the earlier PRED code), teacher professional development, advising
- Press — from the CV's press appearances (own page or a section of About: to decide)
- Service — editorial roles, curriculum work
- Contact — and CV download

## Decisions

- Site technology: Eleventy (decided 2026-11-16). Shared layouts keep the Turkish and English pages identical in structure, and publications come from one data file. The output is plain HTML using `design/tokens.css` and `design/components/components.css`, with no front-end framework. GitHub Actions builds and publishes the site. Local preview: `npx @11ty/eleventy --serve`. Jekyll was ruled out because the Mac's system Ruby (2.6) is too old, and plain HTML because headers and publication lists would be copied across 16+ pages.
- URL structure (decided 2026-11-16): each language has its own folder, `/tr/` and `/en/`, as equals. `ozelserkan.com/` is a small page that sends visitors to the language their browser prefers, with plain "Türkçe" and "English" links for when JavaScript is off. Every page carries `hreflang` links to its other-language version.
- Page addresses use each language's own words, in lowercase ASCII: `/tr/yayinlar/` and `/en/publications/`. This is the one place Turkish characters are dropped (`hakkimda`, not `hakkımda`), because browsers turn them into codes like `%C4%B1` in shared links. All page text keeps them. Each page's front matter has a shared key (for example `publications`) that pairs it with its other-language version for the language toggle.
- Proposed addresses, to confirm as each page is agreed: About `/tr/hakkimda/` `/en/about/`; Research `/tr/arastirma/` `/en/research/`; Publications `/tr/yayinlar/` `/en/publications/`; Projects `/tr/projeler/` `/en/projects/`; Teaching & PD `/tr/ogretim/` `/en/teaching/`; Service `/tr/hizmet/` `/en/service/`; Contact `/tr/iletisim/` `/en/contact/`.
- Contact and affiliation facts (confirmed 2026-11-16): email `ozels@bogazici.edu.tr` (the CV's `ozels@boun.edu.tr` is outdated); office phone +90 212 359 6592 is shown; the centre is "Center for Educational Technology and Research (ET UYGAR)". Graduate advisees are listed by name on Teaching & PD.
- Publication data (decided 2026-11-16): the CV is the master list. ORCID (0000-0001-9772-052X), OpenAlex and CrossRef are used to check it; Scopus (56576457900), Web of Science ResearcherID (A-1509-2013) and Google Scholar appear as profile links. Differences go to the CV pending-updates log, never straight onto the site.

## Open decisions

- DNS setup for ozelserkan.com pointing to GitHub Pages.
