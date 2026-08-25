import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * The single source of truth for which blog posts are live.
 *
 * A post publishes on its own `date`. The comparison happens at build time, so a
 * scheduled post goes live on the first build that runs on or after its date — that
 * is what the Netlify scheduled build is for. Nobody has to flip a flag. See
 * BLOG-PUBLISHING-SCHEDULE.md.
 *
 * `draft: true` hides a post regardless of its date, for anything genuinely
 * unfinished rather than merely scheduled.
 *
 * In `astro dev` every post renders, including future-dated ones, so upcoming
 * posts can be previewed locally before they go live.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const now = Date.now();

  return (await getCollection('blog'))
    .filter((p) => import.meta.env.DEV || (!p.data.draft && p.data.date.getTime() <= now))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
