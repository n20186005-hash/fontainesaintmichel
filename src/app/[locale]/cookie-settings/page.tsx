import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/seo';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: messages.cookieSettings.title,
    alternates: buildAlternates(locale, '/cookie-settings'),
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
