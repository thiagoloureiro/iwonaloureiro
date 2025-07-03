import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 font-['Inter']">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
       
            </div>
          </div>
        
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm font-light">© 2025 Iwona Loureiro - ILStudio. All rights reserved.</p>
          </div>
   
        </div>
      </div>
    </footer>
  );
};

export default Footer;