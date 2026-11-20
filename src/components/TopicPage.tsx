import { useLocale } from 'next-intl';
import { BASE_URL, localeUrl } from '@/lib/seo';
import { getTopic, topicLocales, topicPath } from '@/data/topics';
import { getNearbyPlace, nearbyCopy, nearbyMapQuery, NEARBY_PLACES } from '@/data/nearby-directory';

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
  const nearbyPlace = getNearbyPlace(slug);
  const nearbyText = nearbyCopy(locale);
  const mapQuery = nearbyMapQuery(slug);
  const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Fontaine Saint-Michel, Paris')}&destination=${encodeURIComponent(mapQuery)}&travelmode=walking`;
  const related = (topic.related ?? []).filter(
    (s) => s !== slug && topicLocales(s).includes(locale),
  );

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

        {(nearbyPlace || slug === 'nearby') && (
          <div className="space-y-5 mb-12">
            <section className="rounded-xl p-5 sm:p-6" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{nearbyText.manager}</h2>
              {nearbyPlace?.operator ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {nearbyPlace.operator.name[locale]} · <a href={nearbyPlace.operator.url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>{nearbyText.verified}</a>
                </p>
              ) : <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{nearbyText.pending}</p>}
            </section>

            <section>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{nearbyText.walk}</h2>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline" style={{ color: 'var(--accent)' }}>{nearbyText.map}</a>
              </div>
              <iframe title={`${topic.h1} map`} src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-64 rounded-xl" style={{ border: '1px solid var(--border-color)' }} />
            </section>

            <section className="rounded-xl p-5 sm:p-6" aria-label={nearbyText.image} style={{ background: 'linear-gradient(135deg, var(--bg-secondary), var(--card-bg))', border: '1px dashed var(--border-color)' }}>
              <h2 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{nearbyText.image}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{nearbyText.imageNote}</p>
            </section>
            {slug !== 'nearby' && <a href={`/${locale}/nearby`} className="inline-block text-sm underline" style={{ color: 'var(--accent)' }}>{nearbyText.directory}</a>}
          </div>
        )}

        {slug === 'nearby' && (
          <section className="mb-14" aria-label={nearbyText.directory}>
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>{nearbyText.directory}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {NEARBY_PLACES.map((place) => (
                <li key={place.slug}>
                  <a href={`/${locale}/nearby/${place.slug}`} className="block rounded-lg p-4 hover:underline" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--accent)' }}>{place.name[locale]}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

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
              {nearbyText.faqTitle}
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
              {nearbyText.relatedTitle}
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
            {nearbyText.back}
          </a>
        </div>
      </div>
    </div>
  );
}
