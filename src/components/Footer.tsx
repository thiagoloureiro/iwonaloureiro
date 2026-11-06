import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted">IL Studio</p>
        <p className="text-[12px] font-light text-muted">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
