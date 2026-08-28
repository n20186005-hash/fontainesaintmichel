import { useTranslations, useMessages } from 'next-intl';

type LandmarkItem = { name: string; desc: string; type: string };
type LandmarkCluster = { name: string; walking: string; items: LandmarkItem[] };

export default function NearbyLandmarksSection() {
  const t = useTranslations('nearbyLandmarks');
  const messages = useMessages() as any;
  const clusters: LandmarkCluster[] = (messages?.nearbyLandmarks?.clusters || []) as LandmarkCluster[];

  return (
    <section
      id="nearby-landmarks"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('h2')}
        </h2>
        <p className="mb-8 max-w-3xl" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-12" style={{ background: 'var(--accent)' }} />

        <div className="space-y-12 sm:space-y-16">
          {clusters.map((c, cIdx) => (
            <article
              key={cIdx}
              aria-labelledby={`cluster-${cIdx}`}
              className="relative"
            >
              <header className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-dashed pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <span
                    aria-hidden
                    className="block font-display text-xs tracking-[0.2em] uppercase mb-1"
                    style={{ color: 'var(--accent)' }}
                  >
                    Cluster 0{cIdx + 1}
                  </span>
                  <h3
                    id={`cluster-${cIdx}`}
                    className="font-display text-xl sm:text-2xl font-semibold leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {c.name}
                  </h3>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium self-start sm:self-auto"
                  style={{
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-primary)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {c.walking}
                </span>
              </header>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                {c.items.map((it, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 sm:p-6 h-full transition-colors"
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4
                        className="font-display text-base sm:text-lg font-semibold leading-snug"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {it.name}
                      </h4>
                      <span
                        className="flex-shrink-0 text-[10px] sm:text-[11px] font-medium rounded px-2 py-0.5 tracking-wide uppercase"
                        style={{
                          color: 'var(--accent)',
                          background:
                            'color-mix(in srgb, var(--accent) 10%, transparent)',
                          border: '1px dashed color-mix(in srgb, var(--accent) 40%, transparent)',
                        }}
                      >
                        {it.type}
                      </span>
                    </div>
                    <p
                      className="text-sm sm:text-[0.95rem] leading-relaxed mt-3"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {it.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
