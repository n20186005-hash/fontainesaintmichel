import { routing } from '@/i18n/routing';

export const DOMAIN_NAME = 'fontainesaintmichel.com';
export const BASE_URL = `https://${DOMAIN_NAME}`;
export const DEFAULT_LOCALE = 'en';
export const HERO_IMAGE = `${BASE_URL}/gallery/fontaine-saint-michel-paris-1.jpg`;
export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/34Ufnj4GUV4RybQx7';
export const PARIS_CITY_URL = 'https://www.paris.fr/';

const HREFLANG_MAP: Record<string, string> = {
  en: 'en',
  fr: 'fr',
  zh: 'zh-Hans',
};

/** Absolute, self-referencing URL for a locale + path (path must start with "/"). */
export function localeUrl(locale: string, path = ''): string {
  return `${BASE_URL}/${locale}${path}`;
}

/** hreflang map for a given path; x-default always points at the English version. */
export function buildLanguageAlternates(path = ''): Record<string, string> {
  const languages: Record<string, string> = {};
  routing.locales.forEach((locale) => {
    languages[HREFLANG_MAP[locale] ?? locale] = localeUrl(locale, path);
  });
  languages['x-default'] = localeUrl(DEFAULT_LOCALE, path);
  return languages;
}

/** Metadata alternates block shared by every indexable page. */
export function buildAlternates(locale: string, path = '') {
  return {
    canonical: localeUrl(locale, path),
    languages: buildLanguageAlternates(path),
  };
}

/** Legal / utility pages: noindex,follow so crawl budget stays on travel content. */
export function buildNoIndexAlternates(locale: string, path = '') {
  return {
    canonical: localeUrl(locale, path),
    languages: buildLanguageAlternates(path),
  };
}
