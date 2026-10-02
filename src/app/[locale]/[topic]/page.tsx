import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, TOPIC_SLUGS, type TopicSlug } from '@/i18n/routing';
import { buildAlternates } from '@/lib/seo';
import TopicPage from '@/components/TopicPage';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TOPIC_SLUGS.map((topic) => ({ locale, topic }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;

  if (!TOPIC_SLUGS.includes(topic as TopicSlug)) {
    return {};
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const item = (messages as any)?.topics?.items?.[topic];

  return {
    title: item?.title,
    description: item?.description,
    alternates: buildAlternates(locale, `/${topic}`),
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
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;

  if (!TOPIC_SLUGS.includes(topic as TopicSlug)) {
    notFound();
  }

  setRequestLocale(locale);

  return <TopicPage slug={topic} />;
}
