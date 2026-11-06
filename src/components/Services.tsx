import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from './PageHeader';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    { title: t('services.consultation'), description: t('services.consultationDesc') },
    { title: t('services.concept'), description: t('services.conceptDesc') },
    { title: t('services.detailed'), description: t('services.detailedDesc') },
    { title: t('services.supervision'), description: t('services.supervisionDesc') },
  ];

  return (
    <div className="px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader index="02" title={t('services.title')}>
          {t('services.description')}
        </PageHeader>

        <div className="border-t border-line">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <p className="text-[13px] tracking-[0.22em] text-muted md:col-span-2 md:pt-2">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display text-3xl leading-none text-ink md:col-span-4 md:text-4xl">
                {service.title}
              </h2>
              <p className="text-[15px] font-light leading-relaxed text-muted md:col-span-6">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl text-ink md:text-5xl">{t('services.ctaTitle')}</h2>
            <p className="mt-3 max-w-md text-[15px] font-light text-muted">{t('services.ctaDesc')}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            {t('services.ctaBtn')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
