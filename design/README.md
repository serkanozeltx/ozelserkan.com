# Design system — Serkan Özel

A copy of the design system at https://claude.ai/artifact/X33CGfyvoSPNX6QcSqt8fa, kept here so the site is self-contained. If the two ever differ, update this folder deliberately and note what changed.

A personal academic identity for Serkan Özel: a home page, CV, publication list and project pages, in Turkish and English. Scholarly but warm, quiet enough to let the work lead. The one idea it carries is the repeating pattern — the subject of much of the research — shown as an AB-AB row of discs and squares with the next one left open.

## Voice

- Write in the first person, plainly: "I study how young children learn mathematics", not "Dr. Özel's research focuses on…".
- Sentence case everywhere, including headings and buttons: "Current projects", "Download CV".
- Short and substantive. One idea per paragraph; cut anything the reader already knows.
- Turkish and English are equals. Every page exists in both; the toggle in `SiteHeader` switches between them. Don't mix languages inside one sentence. Keep Turkish characters (ğ, ş, ı, İ, ö, ü, ç) — never transliterate.
- Name institutions and funders exactly: "Boğaziçi University", "TÜBİTAK 1001", "MIT RAISE".
- No emoji, no exclamation marks, no superlatives ("world-leading", "cutting-edge").

## Colour

- Ground is `paper`; cards and the header sit on `paper-raised`; the footer and code on `paper-sunken`.
- Set all text in `ink`; dates, venues and captions in `ink-muted`.
- `strait` is the brand colour. Use it for links, the one primary button per view, and the discs of the pattern mark. Text on a `strait` fill is `on-strait`.
- `clay` is the accent. Use it for the current navigation item, the squares of the pattern mark, and at most one emphasis per view. Text on a `clay` fill is `on-clay`.
- `ochre` is decorative only — cover blocks, illustrations, a highlighted bar in a chart. Never set text in it.
- Tags take a `-soft` tint with `ink` or matching-colour text: `strait-soft` for research areas, `clay-soft` for roles, `ochre-soft` for "new".
- Separate list items with a 1px `hairline` rule. Borders of controls use `line-strong`.
- Keyboard focus: a 2px solid `focus` outline at 2px offset, on every interactive element.
- Both themes are complete. Choose colours only by token so the dark theme follows.

## Type

- Headings and reading text are serif (`--font-serif`, Newsreader); interface text is sans (`--font-sans`, IBM Plex Sans); DOIs, code and pattern notation are mono (`--font-mono`, IBM Plex Mono). All three are free on Google Fonts and cover Turkish.
- `display` appears once, on the home page hero. Page titles are `h1`, sections `h2`, item titles `h3`.
- Open each page with one `lede` paragraph, then `body`. Keep reading text within `measure`.
- `eyebrow` labels a title with its funder, type or year; it is uppercased by CSS — type it in normal case.
- Numbers in tables and lists use the sans with `font-variant-numeric: tabular-nums`.

## Space and layout

- Spacing comes from the `space-*` steps only. Cards pad `space-6`; grids gap `space-8`; sections are `space-16` apart on desktop and `space-12` on mobile.
- The page grid is centred and capped at `page-max`; text columns at `measure`.
- Corners are nearly square: `radius-sm` for buttons, tags and cards, `radius-md` for images. `radius-pill` is reserved for the language toggle and the pattern mark.
- No shadows. Depth comes from `paper-raised` on `paper` and a `hairline` border.
- No motion beyond a 120ms colour change on hover.

## The pattern motif

- The mark is four units — disc, square, disc, square — and a fifth left as a dashed outline: "what comes next?". Use `design/logos/so-mark.svg` on light grounds and `design/logos/so-mark-dark.svg` on dark.
- Discs are `strait`, squares `clay`. Keep the order; never rotate, recolour or add units.
- As a background device, repeat the AB unit in one row or one column, at a `space-*` pitch, in tokens' colours. One pattern per view.
- Next to the mark, set the name in `h3` serif, `ink`: "Serkan Özel". There is no separate wordmark file.

## Imagery

- Use real photographs of the lab, classrooms and materials. Children's faces appear only with consent and are never the hero.
- Diagrams and charts use `strait`, `clay` and `ochre` in that order, on `paper`.

## Iconography

- The system has no icon set of its own. Prefer words: "PDF", "DOI", "Slides". Where an icon is needed (external link, download, email), use a 1.5px stroke outline set such as Lucide at 16–20px, coloured `ink-muted` or `strait`. This is a recommendation, not a brand asset.

## Files in this folder

- `tokens.json` — the source of every colour, font, spacing, radius and layout value.
- `tokens.css` — the same values as CSS custom properties (light, dark, and automatic dark via `prefers-color-scheme`), plus a class per type style (`.h1`, `.body`, `.eyebrow`…). Link it on every page.
- `components/components.css` — styles for the reference components (`so-btn`, `so-tag`, `so-pub`, `so-card`, `so-header`). Reuse these class names when building pages in plain HTML.
- `components/<Name>.md` — guidelines for SiteHeader, Button, Tag, Publication, ProjectCard.
- `components/components.react.js` — the same components as React (`window.SO`), kept for reference; the site does not have to use React.
- `logos/` — the pattern mark for light and dark grounds.
