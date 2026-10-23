import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, TOPIC_SLUGS, type TopicSlug } from '@/i18n/routing';
import { buildAlternates } from '@/lib/seo';
import { getTopic, topicLocales, topicPath } from '@/data/topics';
import TopicPage from '@/components/TopicPage';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TOPIC_SLUGS.map((topic) => ({ locale, topic: topic.split('/') }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string[] }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const slug = topic.join('/');

  if (!TOPIC_SLUGS.includes(slug)) {
    return {};
  }

  const entry = getTopic(slug);
  if (!entry) return {};
  if (locale !== 'zh' && !entry.zh && locale === 'zh') return {};
  const content = entry[locale as 'en' | 'fr' | 'zh'] ?? entry.en;

  return {
    title: content.title,
    description: content.description,
    alternates: buildAlternates(locale, topicPath(slug), topicLocales(entry)),
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

  if (!TOPIC_SLUGS.includes(slug as TopicSlug)) {
    notFound();
  }

  const entry = getTopic(slug);
  if (!entry) notFound();

  const content = entry[locale as 'en' | 'fr' | 'zh'] ?? entry.en;
  if (!content) notFound();

  setRequestLocale(locale);

  return <TopicPage slug={slug} />;
}
