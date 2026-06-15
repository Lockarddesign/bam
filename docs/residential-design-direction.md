# BAM Residential Silo — Design Direction

**Captured:** 2026-05-13
**Purpose:** Define the visual treatment for `/residential/` pages so the silo reads warm and homeowner facing while staying obviously the same brand as buildingandair.com.

This is a direction doc, not a spec. Hex values and Tailwind tokens proposed here become the starting palette. The build phase will lock them into `tailwind.config` (or the equivalent in Tailwind v4 `@theme`) under a `residential` namespace.

---

## 1. Brand continuity rules

The residential silo is the same brand. Same logo, same wordmark, same Header.astro, same Footer.astro. Only the theme tokens swap.

**Never duplicate Header.astro or Footer.astro.** The residential side reuses the existing components and inherits a different theme through a `mode="residential"` prop (or a `data-mode="residential"` wrapper at the layout level that flips Tailwind utility values via a parent class). All shared components stay shared.

The Header utility row may show a small "Residential" or "Commercial" toggle once both silos are live. The commercial side currently uses navy and mint. Residential leans into a warmer companion palette without abandoning the navy.

---

## 2. Color palette

### Commercial colors (current, locked, do not touch)

These are the canonical commercial tokens from `~/Projects/buildingandair/bam-astro/src/styles/global.css`:

| Token | Hex | Role |
|-------|-----|------|
| `--color-dark` | `#0B1110` | Hero backgrounds, deep institutional surfaces |
| `--color-primary` | `#265A4A` | Navy green, primary brand color, CTAs, accents |
| `--color-mint` | `#A7D7C5` | Brand accent, eyebrow text, line dividers |
| `--color-ice` | `#F7F9F8` | Cool surface background |
| `--color-light-grey` | `#D7DDDA` | Borders, secondary text on dark |
| `--color-slate` | `#5E7A86` | Body text on light surfaces |
| `--color-offwhite` | `#F7F9F8` | Page background |

These stay. Residential adds on top.

### Residential additions (proposed)

Add these as new Tailwind tokens namespaced for residential. Suggested 5 colors:

| Token | Hex | Role |
|-------|-----|------|
| `--color-warm-white` | `#FAF6F1` | Residential page background. Replaces `offwhite`. Slightly warmer cream, reads "home" not "lab." |
| `--color-sage` | `#8FB39A` | Residential primary accent. Softer cousin of `--color-primary`. Use on residential CTAs, headings, accents. Same hue family as the brand navy so the silos clearly come from one brand. |
| `--color-terracotta` | `#C97B5A` | Residential warmth accent. Used sparingly: hero accent shapes, secondary CTAs ("Schedule a Tune Up"), pull quote borders. The hot signal that says "comfort" inside a home. |
| `--color-cream` | `#F0E6D6` | Card backgrounds and section dividers. Reads cozy without going beige. |
| `--color-warm-slate` | `#6F5F55` | Body text on residential pages. Warmer brown gray. Replaces the cool `slate` for residential prose. Keeps readability above 7:1 on warm white. |

Keep `--color-primary` and `--color-dark` available on residential pages for header, footer, and logo. The header still ships in navy. The body shifts to warm white. Sage and terracotta carry the heading and CTA work inside the page.

### How to spec this

In Tailwind v4 `@theme`, add new tokens:

```css
@theme {
  --color-warm-white: #FAF6F1;
  --color-sage: #8FB39A;
  --color-terracotta: #C97B5A;
  --color-cream: #F0E6D6;
  --color-warm-slate: #6F5F55;
}
```

Wrap residential pages in a layout root with `class="residential-mode bg-warm-white text-warm-slate"`. Inside that scope, the existing `bg-offwhite`, `text-slate`, `text-primary` calls in shared components either stay (header, footer) or get overridden by a more specific residential utility class on inner content.

---

## 3. Typography

### Continuity rule

Keep the existing heading font. The commercial site loads Inter Variable as the system font, with display weights bold and black for headings. Do not introduce a second display family. The brand stays Inter.

### Residential weight and size shifts

Commercial uses Inter Black at extreme tracking-tighter on huge hero H1s. Residential softens that.

| Element | Commercial pattern | Residential pattern |
|---------|--------------------|---------------------|
| H1 | `text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]` | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal leading-tight`. No uppercase. Sentence case. Lighter weight (bold not black). |
| H2 | `text-3xl md:text-5xl font-black uppercase` | `text-2xl md:text-4xl font-semibold` |
| H3 | `font-bold tracking-widest text-xs uppercase` | `font-semibold text-base normal-case` |
| Eyebrow | `text-[10px] font-bold uppercase tracking-[0.3em] text-mint` | `text-xs font-semibold uppercase tracking-[0.2em] text-sage` |
| Body | `text-lg font-light text-slate leading-relaxed` | `text-base md:text-lg font-normal text-warm-slate leading-[1.7]`. Slightly heavier body weight, more generous line height. |

More whitespace. Commercial sections sit at `py-24` to `py-28`. Residential should breathe wider: `py-16` to `py-24` for content sections, with bigger inter-paragraph gaps.

Less uppercase. Commercial leans heavy on UPPERCASE TRACKING WIDE. Residential rarely uppercases anything except small eyebrow labels. Sentence case wins for hero headlines and section heads.

Tighter line measure. Cap residential body paragraphs at `max-w-2xl` for readability rather than the wider `max-w-3xl` to `max-w-4xl` blocks used on commercial pages.

---

## 4. Photography direction

### Use

- Warm interiors of single family homes. Living rooms with afternoon light, kitchens, finished basements with mechanicals visible.
- A homeowner and a technician at a thermostat or in a basement, mid conversation. Trust, not transaction.
- A clean white residential split system or condenser on a side yard. Lawn, fence, siding visible.
- Family photos: parents and kids on a couch, baby in a nursery (IAQ angle), a senior in a kitchen.
- Hands and tools: gloved hand replacing a filter, multimeter on a thermostat wire, a service truck logo with a residential driveway in the background.
- Snow or summer heat context shots: ice on a heat pump, sun on a roof. Seasonal urgency without scare tactics.

### Avoid

- Cooling towers on rooftops.
- Rooftop AHUs, RTUs, chiller plants.
- Industrial mechanical rooms, water treatment skids, large pipe galleries.
- People in PPE, hard hats, hi vis vests.
- Joint Commission, hospital, K-12, government, lab imagery.
- Anything that reads "facility manager." Residential customers shop on comfort, trust, and price, not compliance.
- Stock photo cliches: stock smiling family in matching outfits, exaggerated dramatic thumbs up. Aim for natural, candid, slightly imperfect.

### Composition rules

- Soft light, not high contrast. Golden hour, north light, warm bulb interiors.
- Wider crops, more environment. Commercial uses tight close ups on equipment. Residential pulls back to show the room.
- People at eye level, not boss shots from above. Trust signals.
- Faces visible. If a person is in the frame, do not crop the head. Aligns with feedback rule on `object-[center_top]` cropping for portraits.

---

## 5. Component patterns

### Hero

Commercial hero: full bleed dark background, animated grid, mint pulse dot, uppercase tracking heavy H1 in white, two CTAs (REQUEST SITE VISIT + Call BAM Now).

Residential hero pattern:

- Background: warm cream surface or a soft photo of a home interior at low opacity. NOT the dark navy hero.
- Two column layout on desktop: H1 plus subhead plus CTA on the left, hero photo on the right. Stacks on mobile, photo above headline.
- H1 in sentence case, sage or warm slate text on warm white background. Lighter weight (bold, not black).
- Single primary CTA in sage with white text: "Get a Free Estimate." Secondary text link "or call (570) 900-5827" beneath.
- No pulse dot, no animated grid. Replace with one soft accent shape (terracotta arc, sage half circle) behind the H1.
- Trust strip directly under the hero: "Family run. Pine Grove based. Serving Schuylkill County homeowners since 2020." or whatever the owner confirms.

### Section rhythm

Commercial alternates dark and ice sections heavily, with hard hairline dividers and corner brackets.

Residential alternates `warm-white` and `cream`, with no hard dividers. Soft transitions, generous padding, occasional terracotta horizontal rule (small, centered, 64px wide).

### Card style

Commercial cards: square corners, hairline 1px borders, tight padding, uppercase labels, dense data inside.

Residential cards: rounded corners (`rounded-2xl`), no border, light cream background, generous padding (`p-6 md:p-8`), one icon at top, one short heading sentence case, two or three lines of body text, optional secondary link in sage.

### Imagery treatment

Commercial photos: low opacity overlay, navy gradient, monochromatic feel.

Residential photos: full color, no overlay, slight inner shadow or rounded corners. Photos are the comfort signal, do not desaturate them.

### Iconography

Keep the same Lucide-style line icons used commercial side. Switch stroke color from `currentColor` mapped to navy or mint to sage and terracotta. Same icon vocabulary, different colors. Brand continuity.

### CTAs

Primary residential CTA: solid sage background, white text, rounded-md, sentence case, friendly verb.

Secondary CTA: outline terracotta, terracotta text, rounded-md.

Commercial CTAs are uppercase, square corners, navy. Residential CTAs are sentence case, soft rounded, sage. Different enough to feel residential. Same enough to feel like the same site.

---

## 6. CTA voice

Commercial site uses: "Request a Site Visit", "Validate Portfolio Alignment", "Schedule Site Scout", "Call BAM Now."

Residential CTAs should sound like a homeowner inviting a technician over for a quote.

Proposed pattern bank (6 patterns):

1. **Get a Free Estimate.** Default hero CTA on residential hub and service pages.
2. **Schedule a Tune Up.** Maintenance pages, seasonal banners.
3. **Book a Repair.** Repair-focused service pages (AC repair, furnace repair).
4. **Talk to a Tech Today.** Inbound phone-call CTA, paired with the phone number. Friendly, low pressure.
5. **See Financing Options.** Install pages where Wisetack or similar is offered. Confirm with owner first.
6. **Get a Same-Day Visit.** Emergency or after-hours service page. Only use if BAM is actually willing to commit to same-day.

Voice rules for residential CTA copy:

- Sentence case, friendly verbs.
- Never "Request" (too formal). Prefer "Get," "Book," "Schedule," "Talk to."
- Never "Validate" or "Portfolio." That is commercial speak.
- Lead with the benefit ("Get a Free Estimate"), not the process ("Submit Inquiry").
- Pair CTA buttons with a phone number link below in friendly format: "or call (570) 900-5827."

---

## 7. Component reuse rule (critical)

Never duplicate Header.astro or Footer.astro. Period. The residential side imports the same components.

How the theme swap works in practice:

1. Add a `mode` prop to `BaseLayout.astro` defaulting to "commercial."
2. When `mode="residential"`, the layout wraps its content in `<div class="residential-mode">`.
3. Tailwind utility overrides inside `.residential-mode` flip background, body text, and accent tokens. Header and Footer stay rendered in their commercial color scheme so the brand wordmark is consistent in the chrome.
4. The hero, section bodies, cards, and CTAs all sit inside `.residential-mode` and pick up the residential tokens.

The result: one Header, one Footer, one logo, one phone number system, two visual moods inside the body content.

If a future commercial component needs a residential variant (e.g. a CTA card pattern that has to look warmer), build it as a `mode`-aware component instead of forking the file. Mode aware is the rule for everything below the chrome.
