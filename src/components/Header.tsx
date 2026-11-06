import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoFull from '../assets/logofull.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Detect browser language on mount
    if (!localStorage.getItem('i18nextLng')) {
      const browserLang = navigator.language || navigator.languages[0];
      if (browserLang.startsWith('pl')) {
        i18n.changeLanguage('pl');
      } else {
        i18n.changeLanguage('en');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [i18n]);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isHomePage = location.pathname === '/';

  const navLinkClass = (path: string) =>
    `text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
      isActive(path) ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const langButtonClass = (lng: string) =>
    `text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
      i18n.language === lng ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-paper/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className={`transition-colors duration-300 ${isScrolled ? 'border-b border-line' : 'border-b border-transparent'}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative flex h-16 items-center md:grid md:h-[4.5rem] md:grid-cols-[1fr_auto_1fr]">
          {!isHomePage && (
            <Link to="/" className="z-10 flex shrink-0 items-center md:justify-self-start">
              <img
                src={logoFull}
                alt="Iwona Loureiro"
                className="h-[1.35rem] w-auto max-w-[min(46vw,150px)] object-contain object-left md:h-[1.4rem] md:max-w-[140px] lg:h-[1.7rem] lg:max-w-[190px]"
              />
            </Link>
          )}

          <div className={`flex w-full items-center md:hidden ${!isHomePage ? 'justify-end' : 'justify-start'}`}>
            <button
              className="flex h-8 w-8 shrink-0 flex-col items-center justify-center space-y-1.5"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`block h-px w-5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}></span>
              <span className={`block h-px w-5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}></span>
            </button>
          </div>

          <div className="hidden items-center justify-center md:col-start-2 md:flex">
            <nav className="flex items-center gap-4 lg:gap-8">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className={navLinkClass(link.to)}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-start-3 hidden items-center justify-self-end gap-2 md:flex">
            <button
              className={langButtonClass('en')}
              onClick={() => handleLanguageChange('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-[11px] text-line">/</span>
            <button
              className={langButtonClass('pl')}
              onClick={() => handleLanguageChange('pl')}
              aria-label="Switch to Polish"
            >
              PL
            </button>
          </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-16 border-t border-line bg-paper md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-baseline gap-4 border-b border-line py-4 text-[13px] uppercase tracking-[0.2em] ${
                  isActive(link.to) ? 'text-ink' : 'text-muted'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-6 text-[10px] tracking-[0.18em] text-muted">{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-4">
              <button className={langButtonClass('en')} onClick={() => handleLanguageChange('en')} aria-label="Switch to English">
                EN
              </button>
              <span className="text-[11px] text-line">/</span>
              <button className={langButtonClass('pl')} onClick={() => handleLanguageChange('pl')} aria-label="Switch to Polish">
                PL
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;