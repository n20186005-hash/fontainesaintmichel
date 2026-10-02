import type { MetadataRoute } from 'next';
import { routing, TOPIC_SLUGS } from '@/i18n/routing';
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

  // Long-tail topic pages (legal / utility pages are intentionally excluded)
  TOPIC_SLUGS.forEach((slug) => {
    routing.locales.forEach((locale) => {
      entries.push({
        url: localeUrl(locale, `/${slug}`),
        lastModified: LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: locale === 'en' ? 0.8 : 0.6,
        alternates: { languages: buildLanguageAlternates(`/${slug}`) },
      });
    });
  });

  return entries;
}
