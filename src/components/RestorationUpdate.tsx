import { useTranslations, useMessages } from 'next-intl';

type TimelineItem = { period: string; name: string; body: string };
type SourceItem = { date: string; body: string; href: string };

export default function RestorationUpdate() {
  const t = useTranslations('restoration');
  const tSeo = useTranslations('seo');
  const messages = useMessages() as any;
  const timeline: TimelineItem[] = (messages?.restoration?.timeline || []) as TimelineItem[];
  const ifYouGo: string[] = (messages?.restoration?.ifYouGoItems || []) as string[];
  const sources: SourceItem[] = (messages?.restoration?.sources || []) as SourceItem[];

  return (
    <section
      id="restoration"
      className="section-padding"
      style={{
        background:
          'linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3 leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('h2')}
        </h2>
        <div className="w-12 h-0.5 mb-7" style={{ background: 'var(--accent)' }} />

        <div
          className="mb-10 p-5 sm:p-6 rounded-xl border-l-4"
          style={{
            borderColor: 'var(--accent)',
            background: 'var(--bg-primary)',
            color: 'var(--text-secondary)',
          }}
          dangerouslySetInnerHTML={{ __html: t('leadIn') }}
        />

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          <h3
            className="md:col-span-3 font-display text-xl sm:text-2xl font-semibold mb-0"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('ifYouGoTitle')}
          </h3>
          {ifYouGo.map((tip, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-dashed relative overflow-hidden"
              style={{
                borderColor: 'var(--border-color)',
                background: 'var(--bg-primary)',
              }}
            >
              <span
                className="absolute top-3 left-4 font-display text-5xl font-black pointer-events-none opacity-[0.08]"
                aria-hidden
                style={{ color: 'var(--accent)' }}
              >
                0{i + 1}
              </span>
              <p
                className="relative z-10 mt-6 leading-relaxed text-sm sm:text-[0.95rem]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tip}
              </p>
            </div>
          ))}
        </div>

        <h3
          className="font-display text-xl sm:text-2xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('timelineTitle')}
        </h3>

        <ol
          className="relative pl-0 sm:pl-2"
          role="list"
          aria-label={t('timelineTitle')}
        >
          <span
            aria-hidden
            className="hidden sm:block absolute left-[23px] top-2 bottom-2 w-px border-l border-dashed"
            style={{ borderColor: 'var(--border-color)' }}
          />
          {timeline.map((item, i) => (
            <li key={i} className="relative sm:pl-16 mb-6 sm:mb-8 last:mb-0">
              <span
                aria-hidden
                className="hidden sm:flex absolute left-0 top-2 w-[46px] h-[46px] rounded-full items-center justify-center"
                style={{
                  border: '1px dashed var(--accent)',
                  background: 'var(--bg-primary)',
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
                    boxShadow:
                      i === 0
                        ? '0 0 0 5px color-mix(in srgb, var(--accent) 15%, transparent)'
                        : undefined,
                  }}
                />
              </span>
              <article
                className="rounded-xl p-5 sm:p-6 h-full"
                style={{
                  background: i === 0 ? 'var(--bg-primary)' : 'var(--bg-primary)',
                  border:
                    i === 0
                      ? '1px solid var(--accent)'
                      : '1px solid var(--border-color)',
                }}
              >
                <p
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-2 tracking-wide"
                  style={{
                    color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
                    background:
                      i === 0
                        ? 'color-mix(in srgb, var(--accent) 10%, transparent)'
                        : 'var(--bg-tertiary)',
                    fontFamily:
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                  }}
                >
                  {item.period}
                </p>
                <h4
                  className="font-display text-lg sm:text-xl font-semibold mb-2 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.name}
                </h4>
                <p
                  className="text-sm sm:text-[0.95rem] leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ol>

        <h3
          className="font-display text-xl sm:text-2xl font-semibold mt-14 mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('sourcesTitle')}
        </h3>
        <ul
          className="space-y-3 rounded-xl p-5 sm:p-6"
          style={{
            background: 'var(--bg-primary)',
            border: '1px dashed var(--border-color)',
          }}
        >
          {sources.map((src, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 text-sm sm:text-[0.95rem]"
            >
              <span
                className="font-medium flex-shrink-0 sm:w-60 whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                }}
              >
                <a
                  href={src.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1"
                  style={{ color: 'var(--accent)' }}
                >
                  {src.date}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>{src.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
