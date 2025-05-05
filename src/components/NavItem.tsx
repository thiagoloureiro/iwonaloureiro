import React from 'react';
import { Area } from '../types/menu';

interface NavItemProps {
  id: string;
  path: string;
  area: Area;
  label: string;
  isActive: boolean;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  onClick: (path: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  path,
  area,
  label,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  // Calculate styles based on the area coordinates
  const style = {
    left: `${area.x}%`,
    top: `${area.y}%`,
    width: `${area.width}%`,
    height: `${area.height}%`,
  };

  return (
    <button
      className="absolute border-0 bg-transparent p-0"
      style={style}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(path)}
      aria-label={label}
    >
      <div className="w-full h-full flex items-center justify-center">
        <span 
          style={{
            color: isActive ? '#000000' : '#f3f4f6',
            transition: 'all 0.3s ease',
            fontWeight: isActive ? '600' : '400'
          }}
          className="text-sm whitespace-nowrap"
        >
          {label}
        </span>
      </div>
    </button>
  );
};

export default NavItem;