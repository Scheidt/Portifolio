import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const MobileNav = ({ items, currentPath, onNavigate }: NavProps) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (key: string) => {
    onNavigate(key);
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button 
        type="text" 
        icon={<MenuOutlined className="text-xl" />} 
        onClick={() => setOpen(true)} 
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="vertical"
          items={items}
          selectedKeys={[currentPath]}
          onClick={(e) => handleLinkClick(e.key)}
          className="border-none"
        />
      </Drawer>
    </div>
  );
};

export default MobileNav;