"use client";

import { Menu } from "antd";

interface NavProps {
  items: { label: string; key: string }[];
  currentPath: string;
  onNavigate: (key: string) => void;
}

export const DesktopNav = ({ items, currentPath, onNavigate }: NavProps) => (
  <div className="hidden md:block flex-1">
    <Menu
      mode="horizontal"
      items={items}
      selectedKeys={[currentPath]}
      onClick={(e) => onNavigate(e.key)}
      className="border-none bg-transparent flex-auto min-w-[400px] justify-end"
    />
  </div>
);

export default DesktopNav;
