import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Iwona Loureiro Studio Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link to="/services" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;