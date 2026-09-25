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

## Final two authorized releases

There are only two remaining scheduled publications:

- September 29, 2026: Operating Room Humidity.
- October 6, 2026: Cleaning HVAC Systems in an Occupied Hospital.

`.github/workflows/blog-releases.yml` dispatches the existing production workflow
at 11:17 UTC (7:17 a.m. Eastern) on each date. It checks the exact 2026 date, waits
for a successful deployment, and verifies the live article. It disables itself
after the October 6 release; no daily builds or ongoing Hermes checks are configured.
GitHub may delay a scheduled run, so the time is a target rather than a guarantee.

A Codex follow-up runs twice, on those Tuesdays at 8 a.m. Eastern, verifies the
article and notifies Will with its live link for review. Publication is already
authorized and does not wait for another approval. If the build failed, the
follow-up may retry once and then report the actual result. App notifications
require Codex to run; the GitHub releases do not depend on Will's Mac being awake.

Both remaining titles, introductions, and full article bodies were compared to
Travis's original Basecamp PDFs on September 24. Copy is unchanged; PDF line wraps,
repeated table headers, and list/table numbering are presentation differences.

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

### September 24, 2026 review status

Guides 02, 03, and 04 were reviewed against Travis's original PDFs and approved
for publication. Guide 05 was also reviewed against Travis's original PDF and
approved for publication on September 24; its September 22 date is preserved.
Its title, introduction, and complete article body match the original, with only
web formatting differences. No factual or editorial rewrites were made.
Guides 06 and 07 retain their original future publication dates. The two dated releases above replace the previous daily rebuild and hourly Hermes checks.

## One follow-up after Guide 03 publishes (2026-09-08): RESOLVED 2026-09-25

Guide 02 now links the phrase to Guide 03. Every guide also shows a "Technical Guide Series" box (`src/components/GuideSeries.astro`, order in `src/data/guideSeries.ts`): published guides link, scheduled ones show their date. Add new guides to `guideSeries.ts`.


Guide 02 mentions "our fire and smoke damper inspection guide" in its FAQ as plain
text, because Guide 03 has no page until its own date and a link would 404 for a week.
Once Guide 03 is live, link that phrase in
`joint-commission-physical-environment-chapter-2026-hvac.md` to
`/blog/fire-and-smoke-damper-inspections-in-hospitals/`.

## Known display quirk: RESOLVED 2026-09-25

Dates now render with `timeZone: 'UTC'`, so every post shows its exact frontmatter date.


Post dates render one day earlier than the frontmatter value (a post dated
`2026-08-25` displays as "August 24, 2026"). `toLocaleDateString` renders the
UTC-midnight date in the viewer's local timezone. This predates the guide series and
affects every post on the site. Publishing itself is not affected — the gate compares
timestamps directly. Fixing the display would shift the shown date on every published
post by a day, so it is left alone pending Will's call.
