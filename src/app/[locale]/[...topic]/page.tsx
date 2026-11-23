import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, TOPIC_SLUGS, type TopicSlug } from '@/i18n/routing';
import { buildAlternates, localeUrl } from '@/lib/seo';
import { getTopic, topicLocales, topicPath } from '@/data/topics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';
import type { Metadata } from 'next';

type TopicLocale = (typeof routing.locales)[number];

// Render guide routes directly on Cloudflare instead of requiring a cached prerender.
export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string[] }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const slug = topic.join('/');

  if (!TOPIC_SLUGS.includes(slug) || !routing.locales.includes(locale as TopicLocale) || !topicLocales(slug).includes(locale as TopicLocale)) {
    return {};
  }

  const entry = getTopic(slug);
  if (!entry) return {};
  const content = entry[locale as TopicLocale];

  if (!content) return {};

  return {
    title: content.title,
    description: content.description,
    openGraph: { title: content.title, description: content.description, url: localeUrl(locale, topicPath(slug)), type: 'article' },
    alternates: buildAlternates(locale, topicPath(slug), topicLocales(slug)),
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1 },
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string[] }>;
}) {
  const { locale, topic } = await params;
  const slug = topic.join('/');

  if (!TOPIC_SLUGS.includes(slug as TopicSlug) || !routing.locales.includes(locale as TopicLocale) || !topicLocales(slug).includes(locale as TopicLocale)) {
    notFound();
  }

  const entry = getTopic(slug);
  if (!entry) notFound();

  const content = entry[locale as TopicLocale];
  if (!content) notFound();

  setRequestLocale(locale);

  return (
    <>
      <Header solid />
      <main className="pt-16"><TopicPage slug={slug} /></main>
      <Footer />
    </>
  );
}
