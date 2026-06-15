# BAM Residential Silo — Design Handoff (Saeed)

**From:** Will / Lockard Design Co
**Branch:** `feature/residential-launch`
**Status:** Local build complete, NOT live. Your job is design polish, not launch.
**Last updated:** 2026-06-15

---

## 0. Your mission in one line

Take the residential section that is already built and make it look like the commercial site, just a lighter version. Improve the design. Do not change the copy, the services, or the structure of the business offering. Do not deploy anything.

---

## 1. The one design instruction: "commercial, but lighter"

The commercial site (the live buildingandair.com pages: home, services, industries, locations, about, contact) is the quality bar. The residential silo should feel like the **same brand and same design system**, just a **lighter, warmer, more homeowner facing** version of it.

What "lighter" means concretely:

- **Same layouts, same components, same section rhythm** as commercial. Same hero composition, same card geometry, same FAQ pattern, same CTA block, same map section. Do not invent a new design language.
- **Swap the heavy institutional surfaces for light ones.** Commercial leans on deep dark backgrounds (`--color-dark` `#0B1110`) and dense navy green (`--color-primary` `#265A4A`). Residential should lean on **white and soft cream backgrounds, more whitespace, lighter sage green accents, softer shadows.** Airy, not heavy.
- **Keep the brand anchors.** Same logo, same wordmark, same `Header.astro`, same `Footer.astro`. The residential look comes from the theme tokens, not from new components.
- The residential theme tokens already exist in the build (`res-` prefixed utilities, a sage green palette, cream borders). Refine and tighten those. You are improving an existing direction, not starting from scratch.

The full design direction (palette, brand continuity rules, the do-not-duplicate rule) is in `docs/residential-design-direction.md` in this repo. Read it first.

---

## 2. Where to work

This is a normal Astro project. You work in the repo, on the `feature/residential-launch` branch.

```bash
git clone https://github.com/lockarddesignco/bam.git
cd bam
git checkout feature/residential-launch
cd bam-astro
npm install
npm run dev      # local preview at http://localhost:4321
```

Commit and push to `feature/residential-launch` as you go. **Do not push to `main`. Do not deploy.** Will handles all deploys manually. Pushing this branch does not touch the live site (Netlify only builds from `main`), so you are safe to push your work in progress here.

The residential pages live under:

- `bam-astro/src/pages/residential/index.astro` — the hub
- `bam-astro/src/pages/residential/[slug].astro` — the 5 service pages
- `bam-astro/src/pages/residential/locations/[city].astro` — the city pages
- `bam-astro/src/layouts/ResidentialLayout.astro`
- `bam-astro/src/config/site.config.ts` — all residential content lives here as data
- `bam-astro/src/styles/global.css` — theme tokens (commercial + residential)
- `bam-astro/src/components/Header.astro` and `Footer.astro` — shared, has the commercial / residential audience toggle

---

## 3. Hard guardrails (do not break these)

1. **Tailwind only. No hand written CSS.** Use Tailwind utilities. The only exception is the theme tokens already defined in `global.css`.
2. **No em dashes, no en dashes, no hyphens in any visible copy.** The client asked for this directly. Write compound terms open: "whole home duct cleaning," "NADCA certified," "one year guarantee," "after hours," "indoor air quality." If a sentence wants a dash, rewrite it with a comma, a period, or restructure. This applies to anything a visitor reads.
3. **Never duplicate `Header.astro` or `Footer.astro`.** Residential reuses the shared components. Theme tokens swap, components do not.
4. **Use the exact client copy.** Do not rewrite, paraphrase, or invent marketing copy. The wording is the client's. You are designing around it. If copy genuinely needs to change for layout, flag it to Will, do not change it yourself.
5. **Every section fits within one viewport height where the commercial site does.** Hero (headline, subhead, CTA, and the lead form) sits above the fold on a single screen. Match the commercial behavior.
6. **Person and family photos never crop heads.** Use `object-[center_top]` on `object-cover` containers.
7. **Do not touch the commercial side.** Only the `/residential/` pages, the residential theme tokens, and the shared components where the residential toggle lives.
8. **Do not deploy. Do not push to main.** Handoff only.

---

## 4. What is already built (page inventory)

The silo was built and then reworked on 2026-06-04 to match the owner's real answers. It is functional and uses real copy. Your job is to make it look as polished as the commercial site.

- **Hub** `/residential/` — hero with lead form, services overview, trust section, reviews, FAQ, bottom CTA, map.
- **5 service pages** `/residential/[slug]/`:
  - whole home duct cleaning
  - indoor air quality
  - dryer vent cleaning
  - air sampling
  - maintenance plans (this one carries the Good / Better / Best tiers)
- **City pages** `/residential/locations/[city]/` — Pottsville, Orwigsburg, Hegins.
- Header has a commercial / residential audience toggle. Footer has a residential strip. Schema components are wired (you do not need to touch these).

Forms on the residential pages are wired as Netlify forms already. **Do not change form field names or form names.** Those are coordinated with the client's backend separately (Will owns that). If you restyle a form, keep every `name="..."` attribute exactly as it is.

---

## 5. Content source of truth (use this exact copy, do not invent)

These are the client's verbatim answers from 2026-06-04. The build already reflects them. Use them as the reference so you never fill a design with placeholder text.

**Service area:** Schuylkill County only, roughly a 50 mile radius. Towns to win: Pottsville, Orwigsburg, Hegins, and other established Schuylkill County areas. No excluded zips.

**Services (5 only):** whole home duct cleaning (NADCA standard), indoor air quality, dryer vent cleaning, air sampling, preventive maintenance plans. **No installs. No repairs. Ever.** Do not design anything that implies they sell or replace equipment.

**The differentiator (lead with this):** the only NADCA certified company in Schuylkill County. They bring commercial grade restoration and IAQ discipline into homes: source removal, HEPA containment, encapsulation, lab verified air sampling, NADCA supervised work. The focus is preventive maintenance that lowers utility costs and extends equipment life, not selling new systems.

**Homeowner feeling (use this as the residential hero angle):**
> From secure federal facilities to hospital surgical suites to your living room, the care never changes, only the address.

**Maintenance plans (Good / Better / Best, annual):**
- **GOOD, Air Handler Cleaning:** clean and sanitize the air handler, replace filter, HEPA clean supply diffusers and return grilles, run a system performance check, provide a closeout report.
- **BETTER, Whole System Cleaning (no encapsulation):** everything in Good, plus whole home duct source removal and cleaning under negative pressure with true HEPA at 99.97 percent at 0.3 micron, using air rake and rotary brush.
- **BEST, Total IAQ Care:** everything in Better, plus IAQ 8000 encapsulation of internally lined ductwork and air and surface sampling with third party lab analysis.
- Add ons: dryer vent cleaning and air sampling. A fall maintenance opt in discount is available.

**Trust signals:** 20 plus combined years of field experience. NADCA certification only (do not list other certs). One year workmanship guarantee plus a written statement of cleanliness.

**Brand:** just "Building and Air" everywhere. No sub brand.

**Reviews:** all three current Google reviews are from residential customers. Feature all three.

**Photos:** the client says residential job photos are in the shared Google Drive media folder. The current build may still use stock in places. Where you can, design so real photos drop in cleanly. Do not hard bake stock framing that would break when real photos arrive. (Will or Saeed pull the real photos from the Drive folder.)

---

## 6. Open inputs (do not invent these)

These are waiting on the client. Design around them, leave clean placeholders, do not make up values.

- **Maintenance plan pricing per tier.** The Good / Better / Best inclusions are final. The dollar prices are TBD. Design the pricing layout so prices drop in later.
- **Real residential photos.** In the Drive media folder per the client. Swap stock for real where available.

---

## 7. NOT your job (Will owns these)

So nothing falls through the cracks, these are explicitly off your plate:

- Merging `main` into this branch (a backend forms forwarder lives on `main` and needs to come over before launch). Will does this.
- Aligning the residential form field names with the client's CRM. Will coordinates this with the client. You just keep the field names unchanged.
- Deploying. Will deploys, manually, after review. You never deploy.
- Final copy approval and any copy edits. Will and the client own copy.

---

## 8. Definition of done

- The 5 service pages, the hub, and the 3 city pages all look like polished, lighter versions of the commercial site.
- Consistent section rhythm, spacing, and width with commercial.
- Light, airy, warm. Same brand, lighter weight.
- No em dashes, no en dashes, no hyphens in any visible copy.
- Tailwind only. Shared header and footer intact. No new components duplicating the header or footer.
- Hero and every section behave like the commercial site on viewport fit.
- Real copy throughout, no placeholder marketing text. Pricing and photo placeholders are clean and obvious.
- Pushed to `feature/residential-launch`. Nothing deployed.

Questions go to Will. Thanks Saeed.
