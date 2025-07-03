import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

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
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Iwona Loureiro Studio Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/projects" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              {t('nav.projects')}
            </Link>
            <Link to="/services" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              {t('nav.services')}
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>
          {/* Simple language switcher */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              className={`text-sm uppercase transition-colors ${i18n.language === 'en' ? 'font-bold underline text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => handleLanguageChange('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-gray-400">/</span>
            <button
              className={`text-sm uppercase transition-colors ${i18n.language === 'pl' ? 'font-bold underline text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => handleLanguageChange('pl')}
              aria-label="Switch to Polish"
            >
              PL
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;