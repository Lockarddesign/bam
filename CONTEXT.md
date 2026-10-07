# Context

## Current State

- Dual frontend: React/Vite app at root + Astro static site in `bam-astro/`
- Astro site is the production website at https://buildingandair.com
- React app appears to be a separate tool/prototype using Gemini API
- Client: BAM — institutional HVAC restoration for mission-critical facilities

## Stack

Root (React app):
- React 19.2.1, Vite 6.2.0, Lucide icons
- Gemini API key via env vars
- Dev on port 3000

bam-astro/ (production site):
- Astro 5.17.1, Tailwind CSS 4.2.1, @astrojs/netlify
- Static output with trailing slashes
- SEO uniqueness gate pre-build script
- Sitemap: locations at 0.9 priority, others 0.5
- Netlify image CDN

## Working Rules

- The Astro site in `bam-astro/` is the live production site
- The root React app is a separate tool — do not confuse them
- BAM serves institutions only (hospitals, schools, universities, federal agencies, manufacturers)
- BAM does NOT do residential HVAC
- Do not deploy without explicit approval

## Key Commands

```bash
# Astro site (production)
cd bam-astro && npm run dev
cd bam-astro && npm run build

# React app (tool/prototype)
npm run dev
```

## Important Paths

- `bam-astro/` — production Astro site
- `bam-astro/src/pages/` — all site pages
- `components/` — React app components (root level)
- `assets/` — React app assets (root level)

## Related

- No vault client profile yet — create one if substantive client work begins
- Also see `~/Projects/bam/` and `~/Projects/-FINAL-BAM_LLC/` (likely older versions)
