import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 font-['Inter']">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <span className="text-2xl font-semibold tracking-tight">Curves</span>
              <p className="text-gray-600 max-w-xs">
                Minimalist design with maximum impact. Explore the simplicity of curves.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Branding</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Strategy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 shrink-0" />
                <span className="text-gray-600">hello@curves.design</span>
              </div>
              <p className="text-gray-600">
                123 Design Street<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm font-light">© 2024 Iwona Loureiro. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Terms</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;