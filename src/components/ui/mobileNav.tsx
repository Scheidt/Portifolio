import { useState, useEffect } from "react";
import { Drawer, Button, Menu, Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavProps {
  items: { label: string; key: string }[];
  currentPath: string;
  onNavigate: (key: string) => void;
}

export const MobileNav = ({ items, currentPath, onNavigate }: NavProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (key: string) => {
    onNavigate(key);
    setOpen(false);
  };

  if (!mounted) {
    return (
      <div className="md:hidden flex gap-2 items-center">
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
  }

  return (
    <div className="md:hidden flex gap-2 items-center">
      <Select
        value={language}
        onChange={(value) => setLanguage(value)}
        options={[
          { label: translations.language.en, value: "en" },
          { label: translations.language.ptbr, value: "pt-br" },
        ]}
        className="w-24"
        size="small"
      />
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
