import React from 'react';
import menuImage from '../assets/menu-image.png';

const InteractiveMenu: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square">
      {/* Main image container */}
      <div className="relative w-full h-full">
        <img 
          src={menuImage} 
          alt="Abstract line drawing" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default InteractiveMenu;