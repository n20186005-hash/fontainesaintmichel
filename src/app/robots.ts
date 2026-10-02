import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { BASE_URL } from '@/lib/seo';

const LEGAL_PATHS = ['/privacy-policy', '/terms-of-service', '/cookie-settings'];

export default function robots(): MetadataRoute.Robots {
  const disallow = routing.locales.flatMap((locale) =>
    LEGAL_PATHS.map((path) => `/${locale}${path}`)
  );

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow,
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
