import React from 'react';
import menuImage from '../assets/logov.mp4';

const InteractiveMenu: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square">
      {/* Main video container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <video 
          src={menuImage} 
          autoPlay
          muted
          playsInline
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
};

export default InteractiveMenu;