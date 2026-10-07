# Claude Adapter

Read `CONTEXT.md` for current state and working rules.

## Claude-Specific Notes

- Production site is in `bam-astro/`, not the root React app
- No vault client profile exists yet
- BAM = institutional HVAC only, never residential
- Other BAM-related directories exist in Projects (bam/, -FINAL-BAM_LLC/) — bam-live is the active one

## Guardrails

- Do not deploy without explicit approval
- Always use Tailwind in the Astro site, never hand-rolled CSS
