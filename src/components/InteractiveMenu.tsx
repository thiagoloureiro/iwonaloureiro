import React from 'react';
import menuImage from '../assets/logo.mp4';

const InteractiveMenu: React.FC = () => {
  return (
    <div className="relative flex w-full justify-center">
      <video
        src={menuImage}
        autoPlay
        muted
        playsInline
        className="mx-auto block h-auto max-h-[min(84vh,760px)] w-auto max-w-[min(92vw,56rem)] object-contain [clip-path:inset(0.85%_0_0_0.85%)]"
      />
    </div>
  );
};

export default InteractiveMenu;