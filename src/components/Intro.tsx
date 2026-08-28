import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tSeo = useTranslations('seo');
  const tOff = useTranslations('officialManagement');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {tSeo('h2About')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <nav
          aria-label="Breadcrumb"
          className="mb-6 p-4 rounded-lg border border-dashed text-sm tracking-wide"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            letterSpacing: '0.02em',
          }}
        >
          <span className="opacity-80">{tSeo('breadcrumb')}</span>
        </nav>

        <div
          className="text-lg leading-relaxed mb-6 p-6 rounded-xl border-l-4"
          style={{
            borderColor: 'var(--accent)',
            background: 'var(--bg-tertiary)',
            color: 'var(--text-secondary)',
          }}
          dangerouslySetInnerHTML={{ __html: tSeo('firstParagraph') }}
        />

        <div className="mb-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-200">
          <p className="text-sm md:text-base font-medium flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-0.5 flex-shrink-0">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {t('notice')}
          </p>
        </div>

        <p
          className="text-lg leading-relaxed mb-12 whitespace-pre-wrap"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        <div
          className="mb-12 text-lg leading-relaxed p-6 rounded-xl border border-dashed"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
          }}
          dangerouslySetInnerHTML={{ __html: tSeo('nearbyLandmarks') }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h3>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
