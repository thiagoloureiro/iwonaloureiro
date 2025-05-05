import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: 'top-curve',
    label: 'Projects',
    path: '/projects',
    area: { x: 23, y: 24, width: 20, height: 20 }
  },
  {
    id: 'top-right-curve',
    label: 'About Me',
    path: '/about',
    area: { x: 47, y: 24, width: 17, height: 17 }
  },
  {
    id: 'right-curve',
    label: 'Services',
    path: '/services',
    area: { x: 25.5, y: 48, width: 15, height: 13 }
  },
 
  {
    id: 'right-bottom-curve',
    label: 'Contact',
    path: '/contact',
    area: { x: 59.3, y: 60, width: 15, height: 15 }
  }
];