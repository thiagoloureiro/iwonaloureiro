import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from './PageHeader';

const LINKEDIN_URL = 'https://www.linkedin.com/in/iwona-loureiro-b9ba4b3b/';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <PageHeader index="04" title={t('contact.title')}>
            {t('contact.intro')}
          </PageHeader>
        </div>

        <div className="border-t border-line lg:col-span-6 lg:col-start-7">
          <p className="border-b border-line py-5 text-[11px] uppercase tracking-[0.28em] text-muted">
            {t('contact.infoTitle')}
          </p>
          <a
            href="mailto:il.studio@outlook.com"
            className="group flex items-baseline justify-between gap-6 border-b border-line py-7"
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted">{t('contact.emailLabel')}</span>
            <span className="text-right font-display text-2xl text-ink transition-colors group-hover:text-muted sm:text-3xl">
              il.studio@outlook.com
            </span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between gap-6 border-b border-line py-7"
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted">{t('contact.linkedinLabel')}</span>
            <span className="text-right font-display text-2xl text-ink transition-colors group-hover:text-muted sm:text-3xl">
              {t('contact.linkedinLinkText')}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
