import { defineRouting } from 'next-intl/routing';
import { ALL_TOPIC_SLUGS } from '@/data/topics';

export const routing = defineRouting({
  locales: ['en', 'fr', 'zh'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
  },
});

export type Locale = (typeof routing.locales)[number];

/** All 40 topic slugs (5 repaired pages + 35 new). Single source: src/data/topics.ts. */
export const TOPIC_SLUGS = ALL_TOPIC_SLUGS as readonly string[];

export type TopicSlug = string;
