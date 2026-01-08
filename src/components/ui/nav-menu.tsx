"use client"; // Required for hooks and Ant Design components

import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'; // Use Next.js router

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Menu items configuration
  const items = [
    { label: 'Sobre', key: '/sobre' },
    { label: 'Projetos', key: '/projetos' },
    { label: 'Habilidades', key: '/habilidades' },
    { label: 'Contato', key: '/contato' },
  ];

  const handleMenuClick = (e: { key: string }) => {
    router.push(e.key); // Next.js navigation
    onClose();          // Close drawer
  };

  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
      <Button 
        type="primary" 
        icon={<MenuOutlined />} 
        onClick={showDrawer} 
      />

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        styles={{ body: { padding: 0 } }} // Modern AntD 'styles' prop
      >
        <Menu
          mode="vertical"
          items={items}
          onClick={handleMenuClick}
          style={{ borderRight: 'none' }}
        />
      </Drawer>
    </nav>
  );
};

export default Navbar;