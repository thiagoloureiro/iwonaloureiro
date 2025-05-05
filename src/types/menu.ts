export interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  area: Area;
}