import React, { useState } from 'react';
import { useNavigate } from '../hooks/useNavigate';
import NavItem from './NavItem';
import { menuItems } from '../data/menuItems';
import menuImage from '../assets/menu-image.png';

const InteractiveMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { navigateTo } = useNavigate();

  const handleMouseEnter = (id: string) => {
    setActiveItem(id);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square">
      {/* Main image container */}
      <div className="relative w-full h-full">
        <img 
          src={menuImage} 
          alt="Abstract line drawing" 
          className="w-full h-full object-contain"
        />
        
        {/* Clickable areas */}
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            path={item.path}
            area={item.area}
            label={item.label}
            isActive={activeItem === item.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
        ))}
      </div>

      {/* Menu item label display */}
      <div className="absolute bottom-4 left-0 w-full text-center transition-opacity duration-300 pointer-events-none">
        {activeItem && (
          <span className="text-2xl font-light tracking-wider">
            {menuItems.find(item => item.id === activeItem)?.label}
          </span>
        )}
      </div>
    </div>
  );
};

export default InteractiveMenu;