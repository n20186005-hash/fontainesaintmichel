'use client';

import React, { useState, type ReactElement } from 'react';
import { useTranslations, useMessages } from 'next-intl';

type AmenityGroup = {
  key: string;
  icon: string;
  name: string;
  summary: string;
  bullets: string[];
};

const ICON_SVG: Record<string, ReactElement> = {
  toilet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3h10v7a5 5 0 01-10 0V3z" />
      <path d="M5 22h14" />
      <path d="M8 8h8" />
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 010 6H9" />
    </svg>
  ),
  restaurant: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 2v7a3 3 0 003 3 3 3 0 003-3V2" />
      <path d="M6 9v13" />
      <path d="M15 2c-1.5 2-2 4.5-2 7s.5 5 2 7v6" />
      <path d="M21 2v20" />
    </svg>
  ),
  hotel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14" />
      <path d="M3 21h18" />
      <path d="M7 10h4M13 10h4M7 14h4M13 14h4M7 18h10" />
    </svg>
  ),
  shopping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2l2 4h8l2-4" />
      <path d="M4 6h16l-1.5 14a2 2 0 01-2 1.8H7.5a2 2 0 01-2-1.8L4 6z" />
    </svg>
  ),
  fuel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 22V6a1 1 0 011-1h7a1 1 0 011 1v16" />
      <path d="M12 10h4a2 2 0 012 2v4a2 2 0 002 2v1h-3" />
      <path d="M18 8l3-3v5" />
      <path d="M5 10h5M5 14h5" />
    </svg>
  ),
};

export default function VisitorAmenitiesSection() {
  const t = useTranslations('visitorAmenities');
  const messages = useMessages() as any;
  const groups: AmenityGroup[] = (messages?.visitorAmenities?.groups || []) as AmenityGroup[];
  const [openKey, setOpenKey] = useState<string | null>(groups[0]?.key ?? null);

  return (
    <section
      id="visitor-amenities"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
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
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {groups.map((g) => {
            const isOpen = openKey === g.key;
            const IconEl = ICON_SVG[g.icon] || ICON_SVG.shopping;
            return (
              <article
                key={g.key}
                id={`amenity-${g.key}`}
                className="rounded-xl overflow-hidden border transition-colors"
                style={{
                  borderColor: isOpen ? 'var(--accent)' : 'var(--border-color)',
                  background: 'var(--bg-secondary)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenKey(isOpen ? null : g.key)}
                  className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`amenity-panel-${g.key}`}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex-shrink-0 transition-colors"
                    style={{
                      background: isOpen
                        ? 'var(--accent)'
                        : 'color-mix(in srgb, var(--accent) 12%, transparent)',
                      color: isOpen ? 'white' : 'var(--accent)',
                    }}
                  >
                    <span className="block w-5 h-5 sm:w-[22px] sm:h-[22px]">{IconEl}</span>
                  </span>
                  <h3
                    className="font-display text-base sm:text-lg font-semibold flex-1 leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {g.name}
                  </h3>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'var(--bg-primary)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-color)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`amenity-panel-${g.key}`}
                  role="region"
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-4 sm:px-5 pb-5 sm:pb-6 border-t"
                      style={{ borderColor: 'var(--border-color)' }}
                    >
                      <p
                        className="pt-4 text-sm sm:text-[0.95rem] leading-relaxed mb-3"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {g.summary}
                      </p>
                      <ul className="space-y-2 mt-4">
                        {g.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 text-sm sm:text-[0.95rem] leading-relaxed">
                            <span
                              className="mt-2 flex-shrink-0 w-[5px] h-[5px] rounded-full"
                              style={{ background: 'var(--accent)' }}
                              aria-hidden
                            />
                            <span style={{ color: 'var(--text-secondary)' }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
