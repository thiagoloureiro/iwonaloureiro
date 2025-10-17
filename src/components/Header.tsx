import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useTranslation } from 'react-i18next';

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Mobile layout */}
          <div className="md:hidden flex justify-start items-center w-full">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex justify-center items-center w-full relative">
            {location.pathname !== '/' && (
              <Link to="/" className="absolute left-0 flex items-center">
                <img src={logo} alt="Iwona Loureiro Studio Logo" className="h-16 w-auto" />
              </Link>
            )}
            
            <nav className="flex space-x-8 items-center">
            <Link to="/" className={`text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:underline hover:underline-offset-4 ${
              isActive('/') ? 'text-gray-900 scale-105 underline underline-offset-4' : 'text-gray-600 hover:text-gray-900'
            }`}>
              {t('nav.home')}
            </Link>
            <Link to="/projects" className={`text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:underline hover:underline-offset-4 ${
              isActive('/projects') ? 'text-gray-900 scale-105 underline underline-offset-4' : 'text-gray-600 hover:text-gray-900'
            }`}>
              {t('nav.projects')}
            </Link>
            <Link to="/services" className={`text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:underline hover:underline-offset-4 ${
              isActive('/services') ? 'text-gray-900 scale-105 underline underline-offset-4' : 'text-gray-600 hover:text-gray-900'
            }`}>
              {t('nav.services')}
            </Link>
            <Link to="/about" className={`text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:underline hover:underline-offset-4 ${
              isActive('/about') ? 'text-gray-900 scale-105 underline underline-offset-4' : 'text-gray-600 hover:text-gray-900'
            }`}>
              {t('nav.about')}
            </Link>
            <Link to="/contact" className={`text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:underline hover:underline-offset-4 ${
              isActive('/contact') ? 'text-gray-900 scale-105 underline underline-offset-4' : 'text-gray-600 hover:text-gray-900'
            }`}>
              {t('nav.contact')}
            </Link>
            </nav>
            
            {/* Language switcher - Desktop */}
            <div className="absolute right-0 flex items-center space-x-2">
            <button
              className={`text-sm uppercase transition-all duration-300 hover:scale-105 ${i18n.language === 'en' ? 'font-bold underline text-gray-900 scale-105' : 'text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-4'}`}
              onClick={() => handleLanguageChange('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-gray-400">/</span>
            <button
              className={`text-sm uppercase transition-all duration-300 hover:scale-105 ${i18n.language === 'pl' ? 'font-bold underline text-gray-900 scale-105' : 'text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-4'}`}
              onClick={() => handleLanguageChange('pl')}
              aria-label="Switch to Polish"
            >
              PL
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                isActive('/') ? 'text-gray-900 font-bold bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/projects" 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                isActive('/projects') ? 'text-gray-900 font-bold bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              to="/services" 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                isActive('/services') ? 'text-gray-900 font-bold bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/about" 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                isActive('/about') ? 'text-gray-900 font-bold bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/contact" 
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                isActive('/contact') ? 'text-gray-900 font-bold bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            
            {/* Language switcher - Mobile */}
            <div className="px-6 py-3 border-t border-gray-200 mt-2">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Language:</span>
                <button
                  className={`text-sm uppercase transition-all duration-300 ${i18n.language === 'en' ? 'font-bold text-gray-900' : 'text-gray-600'}`}
                  onClick={() => handleLanguageChange('en')}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span className="text-gray-400">/</span>
                <button
                  className={`text-sm uppercase transition-all duration-300 ${i18n.language === 'pl' ? 'font-bold text-gray-900' : 'text-gray-600'}`}
                  onClick={() => handleLanguageChange('pl')}
                  aria-label="Switch to Polish"
                >
                  PL
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;