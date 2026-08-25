# BAM Technical Guide Series — Weekly Publishing Schedule

Seven technical guides supplied by the client, staged for one release per week.

Guide 01 is live. Guides 02–07 are in the repo with `draft: true` and their intended
publish date already set in frontmatter. They are **not** reachable on the live site
while `draft: true` — `src/pages/blog/[slug].astro` filters drafts out of
`getStaticPaths()`, so a draft has no page and no sitemap entry.

## To publish the next guide

1. Branch off latest `main`.
2. Open that week's file below and change `draft: true` → `draft: false`.
3. Commit, push, open a PR. Will merges; Netlify builds on merge.

Nothing else needs to change — the date in frontmatter is already correct.

## Schedule

| Week | Publish date | File | Status |
| :--- | :--- | :--- | :--- |
| 1 | 2026-08-25 | `ashrae-170-by-room-air-changes-pressure-humidity-filters.md` | LIVE |
| 2 | 2026-09-01 | `joint-commission-physical-environment-chapter-2026-hvac.md` | draft |
| 3 | 2026-09-08 | `fire-and-smoke-damper-inspections-in-hospitals.md` | draft |
| 4 | 2026-09-15 | `ashrae-62-1-section-8-operations-and-maintenance-requirements.md` | draft |
| 5 | 2026-09-22 | `merv-ratings-in-healthcare-ashrae-170-filter-requirements.md` | draft |
| 6 | 2026-09-29 | `operating-room-humidity-ashrae-170-cms-waiver.md` | draft |
| 7 | 2026-10-06 | `cleaning-hvac-systems-in-an-occupied-hospital.md` | draft |

## One follow-up when Guide 03 goes live (week 3)

Guide 02 refers to "our fire and smoke damper inspection guide" in its FAQ. That
reference is plain text right now, because Guide 03 does not exist as a page until
week 3 and a link would 404 for a week. When Guide 03 is published, edit
`joint-commission-physical-environment-chapter-2026-hvac.md` and link the phrase to
`/blog/fire-and-smoke-damper-inspections-in-hospitals/`.

## Note on automation

These publish on a manual flip of the `draft` flag, on purpose. Automatic date-based
publishing would need a Netlify scheduled build, which is deployment configuration —
that is Will's call, not a content change.
