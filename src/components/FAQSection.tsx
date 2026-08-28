'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';

type FaqItem = { question: string; answer: string };

export default function FAQSection() {
  const t = useTranslations('faq');
  const tSeo = useTranslations('seo');
  const messages = useMessages() as any;
  const items: FaqItem[] = (messages?.faq?.items || []) as FaqItem[];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-xl border overflow-hidden transition-colors"
                style={{
                  borderColor: 'var(--border-color)',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span
                    className="font-display text-base sm:text-lg font-semibold leading-relaxed"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      background: isOpen ? 'var(--accent)' : 'var(--bg-secondary)',
                      color: isOpen ? 'white' : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-5 sm:px-6 pb-5 sm:pb-6 text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 mt-16"
          style={{ color: 'var(--text-primary)' }}
        >
          {tSeo('h2Landmarks')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
      </div>
    </section>
  );
}
