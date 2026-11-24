import { useLocale } from 'next-intl';
import { TOPIC_SLUGS } from '@/i18n/routing';
import { topicLinkLabel } from '@/data/topics';
import { nearbyCopy } from '@/data/nearby-directory';

export default function TopicExplore() {
  const locale = useLocale() as 'en' | 'fr' | 'zh';
  const nearbyText = nearbyCopy(locale);

  const items = TOPIC_SLUGS.flatMap((slug) => {
    const nav = topicLinkLabel(slug, locale);
    return nav ? [{ slug, nav }] : [];
  });

  return (
    <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {nearbyText.guideHeading}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {nearbyText.guideDescription}
        </p>

        <a href={`/${locale}/nearby`} className="inline-flex rounded-xl px-5 py-4 mb-8 font-semibold hover:underline" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--accent)' }}>
          {nearbyText.directory}
        </a>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ slug, nav }) => (
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
                  {nav}
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
