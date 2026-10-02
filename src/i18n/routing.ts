import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'zh'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
  },
});

export type Locale = (typeof routing.locales)[number];

export const TOPIC_SLUGS = [
  'history',
  'restoration',
  'how-to-get-there',
  'place-saint-michel',
  'things-to-do-near-fontaine-saint-michel',
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];
