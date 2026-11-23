import type { MetadataRoute } from 'next';
import { routing, TOPIC_SLUGS } from '@/i18n/routing';
import { getTopic, topicLocales, topicPath } from '@/data/topics';
import { getNearbyPlace } from '@/data/nearby-directory';
import { buildLanguageAlternates, localeUrl } from '@/lib/seo';

const LAST_MODIFIED = new Date('2026-10-01T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Language home pages
  routing.locales.forEach((locale) => {
    entries.push({
      url: localeUrl(locale),
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: locale === 'en' ? 1 : 0.8,
      alternates: { languages: buildLanguageAlternates() },
    });
  });

  const updatedNearby = new Date('2026-11-23T00:00:00Z');

  // Topic pages — only list locales that actually have content for each topic.
  TOPIC_SLUGS.forEach((slug) => {
    const entry = getTopic(slug);
    if (!entry) return;
    const locales = topicLocales(slug);
    locales.forEach((locale) => {
      entries.push({
        url: localeUrl(locale, topicPath(slug)),
        lastModified: slug === 'nearby' || getNearbyPlace(slug)?.visit ? updatedNearby : LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.8 : 0.6,
        alternates: { languages: buildLanguageAlternates(topicPath(slug), locales) },
      });
    });
  });

  return entries;
}
