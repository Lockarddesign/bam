import { defineCollection, z } from 'astro:content';

/* ─── Services ────────────────────────────────────────────── */

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['core', 'specialty']),
    shortDescription: z.string(),
    icon: z.string(),
    heroImage: z.string().optional(),

    diagnostics: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    }),

    protocol: z.object({
      title: z.string(),
      description: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          details: z.array(z.string()),
        })
      ),
    }),

    roi: z.object({
      stat1: z.object({ label: z.string(), value: z.string() }),
      stat2: z.object({ label: z.string(), value: z.string() }),
      description: z.string(),
    }),

    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),

    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
  }),
});

/* ─── Industries ──────────────────────────────────────────── */

const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    heroImage: z.string().optional(),

    challenges: z.object({
      heading: z.string(),
      introText: z.string(),
      cards: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
      sidebarQuote: z.object({
        text: z.string(),
        author: z.string(),
        role: z.string(),
      }),
    }),

    capabilities: z.object({
      heading: z.string(),
      subhead: z.string(),
      cards: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    }),

    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

/* ─── Locations ───────────────────────────────────────────── */

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    state: z.string(),
    type: z.enum(['state', 'metro']),
    city: z.string(),
    zip: z.string(),
    county: z.string().optional(),
    primary: z.boolean().default(false),
    priority: z.number().min(1).max(40),
    heroHeading: z.string().optional(),
    lat: z.number(),
    lng: z.number(),
    nearbyAreas: z.array(z.string()).optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .min(3, 'Each location page needs at least 3 unique FAQs'),
  }),
});

/* ─── Blog ────────────────────────────────────────────────── */

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    author: z.string().optional(),
    image: z.string().optional(),
    video: z.string().optional(),
  }),
});

export const collections = { services, industries, locations, blog };
