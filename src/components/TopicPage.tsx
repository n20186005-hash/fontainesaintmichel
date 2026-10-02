import { useTranslations, useMessages, useLocale } from 'next-intl';
import { TOPIC_SLUGS } from '@/i18n/routing';
import { BASE_URL, localeUrl } from '@/lib/seo';

type TopicContent = {
  h1: string;
  updated: string;
  lead: string;
  sections: Array<{ heading: string; content: string }>;
  faq: Array<{ question: string; answer: string }>;
};

export default function TopicPage({ slug }: { slug: string }) {
  const locale = useLocale();
  const t = useTranslations('topics');
  const ht = useTranslations('header');
  const messages = useMessages() as any;
  const topic: TopicContent | undefined = messages?.topics?.items?.[slug];
  const homeHref = `/${locale}`;

  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
        <a href={homeHref} className="text-sm" style={{ color: 'var(--accent)' }}>
          {ht('backToHome')}
        </a>
      </div>
    );
  }

  const pageUrl = localeUrl(locale, `/${slug}`);
  const related = TOPIC_SLUGS.filter((s) => s !== slug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('breadcrumbHome'),
        item: localeUrl(locale),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: topic.h1,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (topic.faq || []).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    url: pageUrl,
    headline: topic.h1,
    description: topic.lead,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale,
    dateModified: '2026-10-01',
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#attraction` },
    publisher: { '@id': `${BASE_URL}/#attraction` },
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <nav aria-label="breadcrumb" className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
          <a href={homeHref} className="hover:underline" style={{ color: 'var(--accent)' }}>
            {t('breadcrumbHome')}
          </a>
          <span className="mx-2">/</span>
          <span>{topic.h1}</span>
        </nav>

        <h1
          className="font-display text-3xl sm:text-4xl font-bold mb-3 leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {topic.h1}
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {topic.updated}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <p
          className="text-base sm:text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {topic.lead}
        </p>

        <div className="space-y-10">
          {(topic.sections || []).map((section, i) => (
            <section key={i}>
              <h2
                className="font-display text-xl sm:text-2xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.heading}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {(topic.faq || []).length > 0 && (
          <section className="mt-14">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('faqTitle')}
            </h2>
            <div className="space-y-4">
              {topic.faq.map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl p-5"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <summary
                    className="font-medium cursor-pointer"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.question}
                  </summary>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2
            className="font-display text-xl sm:text-2xl font-semibold mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('relatedTitle')}
          </h2>
          <ul className="space-y-3">
            {related.map((s) => (
              <li key={s}>
                <a
                  href={`/${locale}/${s}`}
                  className="hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <a
            href={homeHref}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {ht('backToHome')}
          </a>
        </div>
      </div>
    </div>
  );
}
