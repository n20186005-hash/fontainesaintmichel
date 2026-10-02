import { useTranslations, useLocale } from 'next-intl';
import { TOPIC_SLUGS } from '@/i18n/routing';

export default function TopicExplore() {
  const t = useTranslations('topics');
  const locale = useLocale();

  return (
    <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('exploreTitle')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('exploreLead')}
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPIC_SLUGS.map((slug) => (
            <li key={slug}>
              <a
                href={`/${locale}/${slug}`}
                className="block h-full rounded-xl p-5 transition-shadow hover:shadow-md"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <span
                  className="font-medium flex items-center justify-between gap-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t(`nav.${slug}`)}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
