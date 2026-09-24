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

## Automatic publishing and verification

GitHub Actions `.github/workflows/deploy.yml` rebuilds and deploys main daily at
11:17 UTC (7:17 a.m. Eastern daylight time / 6:17 a.m. Eastern standard time).
GitHub may delay scheduled jobs; publication occurs when the deployment completes.
No computer needs to stay awake for the production build.

Only posts on main with `draft: false` and a reached date publish. Keep unapproved
copy in draft. Scheduling does not authorize an agent to rewrite client copy.

Hermes job `11510497a12e` (BAM scheduled blog verification) checks hourly on Will's
Mac using `~/.hermes/scripts/bam_blog_check.py`. After noon UTC, it verifies due
pages and their blog-index/sitemap entries. If a due article is missing and no
build is active, it dispatches the existing production workflow at most once per
UTC day. It never edits article files, dates, or draft flags. Status is saved at
`~/.hermes/bam-blog-monitor/status.json`.

A Codex follow-up in this thread checks daily at 9:15 a.m. Eastern and reports
missing posts, verification errors, or an inactive Hermes gateway. Local checks
require the Mac and apps to be running; scheduled GitHub publication is independent.

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
Guides 06 and 07 retain their original future publication dates. The scheduled rebuild and Hermes verification are now configured.

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
