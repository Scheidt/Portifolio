"use client"; // Required for hooks and Ant Design components

import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation"; // Use Next.js router

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Itens do menu de navegação
  const items = [
    { label: "Home", key: "/" },
    { label: "Sobre", key: "/about" },
    { label: "Projetos", key: "/projects" },
    { label: "Habilidades", key: "/skills" },
    { label: "Contato", key: "/contact" },
  ];

  const handleMenuClick = (e: { key: string }) => {
    router.push(e.key); // Next.js navigation
    onClose(); // Close drawer
  };

  return (
    <nav
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}
    >
      <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="vertical"
          items={items}
          onClick={handleMenuClick}
          style={{ borderRight: "none" }}
        />
      </Drawer>
    </nav>
  );
};

export default Navbar;
