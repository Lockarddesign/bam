# Blog Publishing — How Scheduled Posts Go Live

Posts publish by **date**. A post goes live on the first Netlify build that runs on
or after its `date`. Nobody flips a flag and nobody has to remember anything — but it
does depend on a build running, which is why the scheduled build below matters.

The rule lives in one place: `src/utils/posts.ts`. The blog index, the homepage, and
`blog/[slug].astro` all call it, so they cannot drift apart.

## What this means in practice

- A future-dated post has **no page and no sitemap entry**. Hitting its URL returns 404.
- On the first build after its date, the page, the blog index card, and the sitemap
  entry all appear together.
- `draft: true` still hides a post regardless of date. Use it for something genuinely
  unfinished, not for something merely scheduled.
- In `astro dev` **every** post renders, including future-dated ones, so upcoming
  posts can be previewed locally. Dev deliberately differs from production here.

## Required: the Netlify scheduled build

Without a scheduled build, a post sits unpublished until the next time someone pushes
to `main`. **Will sets this up** — it is deploy configuration, not a content change.

In Netlify: **Project configuration → Build & deploy → Build hooks → Add build hook**
(name it `scheduled-publish`, branch `main`), then attach a daily schedule to it.

Recommended cadence is **daily at ~10:00 UTC (6:00 a.m. Eastern)**. Daily rather than
weekly so a post lands on its actual date instead of up to six days late, and early
morning so it is live before anyone looks.

## The BAM Technical Guide series

| Publish date | Guide | File |
| :--- | :--- | :--- |
| 2026-08-25 | 01 — ASHRAE 170 by Room | `ashrae-170-by-room-air-changes-pressure-humidity-filters.md` |
| 2026-09-01 | 02 — Joint Commission PE Chapter | `joint-commission-physical-environment-chapter-2026-hvac.md` |
| 2026-09-08 | 03 — Fire & Smoke Dampers | `fire-and-smoke-damper-inspections-in-hospitals.md` |
| 2026-09-15 | 04 — ASHRAE 62.1 Section 8 | `ashrae-62-1-section-8-operations-and-maintenance-requirements.md` |
| 2026-09-22 | 05 — MERV Ratings in Healthcare | `merv-ratings-in-healthcare-ashrae-170-filter-requirements.md` |
| 2026-09-29 | 06 — Operating Room Humidity | `operating-room-humidity-ashrae-170-cms-waiver.md` |
| 2026-10-06 | 07 — Cleaning in an Occupied Hospital | `cleaning-hvac-systems-in-an-occupied-hospital.md` |

To move a post, change its `date`. That is the whole operation.

## One follow-up after Guide 03 publishes (2026-09-08)

Guide 02 mentions "our fire and smoke damper inspection guide" in its FAQ as plain
text, because Guide 03 has no page until its own date and a link would 404 for a week.
Once Guide 03 is live, link that phrase in
`joint-commission-physical-environment-chapter-2026-hvac.md` to
`/blog/fire-and-smoke-damper-inspections-in-hospitals/`.

## Known display quirk

Post dates render one day earlier than the frontmatter value (a post dated
`2026-08-25` displays as "August 24, 2026"). `toLocaleDateString` renders the
UTC-midnight date in the viewer's local timezone. This predates the guide series and
affects every post on the site. Publishing itself is not affected — the gate compares
timestamps directly. Fixing the display would shift the shown date on every published
post by a day, so it is left alone pending Will's call.
