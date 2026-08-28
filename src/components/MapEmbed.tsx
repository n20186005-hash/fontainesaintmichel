import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4669.409167083769!2d2.3437736000000005!3d48.8532372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671de255fbf33%3A0xbb48b3d09fcc48c4!2sFontaine%20Saint-Michel!5e1!3m2!1szh-CN!2s!4v1787896831185!5m2!1szh-CN!2s';
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/34Ufnj4GUV4RybQx7';

export default function MapEmbed() {
  const t = useTranslations('mapSection');
  const tSeo = useTranslations('seo');
  const locale = useLocale();

  const govtUrlMap: Record<string, string> = {
    fr: 'https://www.visitparisregion.com/fr',
    en: 'https://www.visitparisregion.com/en',
    zh: 'https://www.visitparisregion.com/cn',
  };
  const govtUrl = govtUrlMap[locale] || govtUrlMap.en;

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {tSeo('h2Location')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div
          className="map-container relative rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--map-border)' }}
        >
          <iframe
            src={MAPS_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps - Fontaine Saint-Michel, Paris"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a
            href={MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div
          className="mt-10 p-5 sm:p-6 rounded-xl border border-dashed text-sm"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--bg-tertiary)',
            color: 'var(--text-secondary)',
          }}
          dangerouslySetInnerHTML={{ __html: tSeo('govtTourismText') }}
        />
      </div>
    </section>
  );
}
