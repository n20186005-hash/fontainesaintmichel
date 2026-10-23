import { useLocale } from 'next-intl';
import { BASE_URL, localeUrl } from '@/lib/seo';
import { getTopic, topicLocales, topicPath } from '@/data/topics';

type TopicContent = {
  h1: string;
  updated: string;
  lead: string;
  sections: Array<{ heading: string; content: string }>;
  faq: Array<{ question: string; answer: string }>;
  nav: string;
  related?: string[];
};

export default function TopicPage({ slug }: { slug: string }) {
  const locale = useLocale() as 'en' | 'fr' | 'zh';
  const entry = getTopic(slug);
  const topic: TopicContent | undefined = entry?.[locale] ?? entry?.en;

  if (!topic) {
    return null;
  }

  const pageUrl = localeUrl(locale, topicPath(slug));
  const related = (topic.related ?? []).filter((s) => s !== slug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Fontaine Saint-Michel',
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
    publisher: { '@id': `${BASE_URL}/#organization` },
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
          <a href={`/${locale}`} className="hover:underline" style={{ color: 'var(--accent)' }}>
            Fontaine Saint-Michel
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
              FAQs
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

        {related.length > 0 && (
          <section className="mt-14">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              Related guides
            </h2>
            <ul className="space-y-3">
              {related.map((s) => {
                const relEntry = getTopic(s);
                const relContent = relEntry?.[locale] ?? relEntry?.en;
                if (!relContent) return null;
                return (
                  <li key={s}>
                    <a
                      href={`/${locale}/${s}`}
                      className="hover:underline"
                      style={{ color: 'var(--accent)' }}
                    >
                      {relContent.nav}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Fontaine Saint-Michel
          </a>
        </div>
      </div>
    </div>
  );
}
