import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="animate-fade-in"
      style={{
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition; 