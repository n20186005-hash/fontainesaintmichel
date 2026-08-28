'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const MAPS_SHARE_URL = 'https://maps.app.goo.gl/34Ufnj4GUV4RybQx7';

const govtUrlMap: Record<string, string> = {
  fr: 'https://www.visitparisregion.com/fr',
  en: 'https://www.visitparisregion.com/en',
  zh: 'https://www.visitparisregion.com/cn',
};

export default function NoticeBanner() {
  const t = useTranslations('noticeBanner');
  const locale = useLocale();
  const govtUrl = govtUrlMap[locale] || govtUrlMap.en;

  return (
    <section
      aria-label="Restoration status banner"
      className="relative w-full text-sm overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
        borderBottom: '1px dashed var(--border-color)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, currentColor 0.6px, transparent 0.7px), radial-gradient(circle at 75% 70%, currentColor 0.5px, transparent 0.6px)",
          backgroundSize: '18px 18px, 22px 22px',
          color: 'var(--text-primary)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1 flex-shrink-0 text-xs font-medium tracking-wide"
              style={{
                border: '1px dashed var(--accent)',
                color: 'var(--accent)',
                background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <circle cx="12" cy="16" r="0.8" fill="currentColor" stroke="none" />
              </svg>
              <span className="uppercase tracking-[0.12em]">{t('label')}</span>
            </span>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold flex-shrink-0"
              style={{
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent)',
                }}
                aria-hidden
              />
              {t('statusPill')}
            </div>
            <p
              className="leading-snug min-w-0"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('summary')}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 flex-shrink-0">
            <a
              href={MAPS_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors"
              style={{
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                background: 'var(--bg-primary)',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t('ctaMaps')}
            </a>
            <a
              href={govtUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-white transition-colors"
              style={{ background: 'var(--accent)' }}
            >
              {t('ctaTourism')}
              <svg
                width="12"
                height="12"
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
          </div>
        </div>
      </div>
    </section>
  );
}
