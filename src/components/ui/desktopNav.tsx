"use client";

import { Select, Menu } from "antd";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

interface NavProps {
  items: { label: string; key: string }[];
  currentPath: string;
  onNavigate: (key: string) => void;
}

export const DesktopNav = ({ items, currentPath, onNavigate }: NavProps) => {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="hidden md:flex md:gap-8 flex-1 items-center justify-end">
        <Menu
          mode="horizontal"
          items={items}
          selectedKeys={[currentPath]}
          onClick={(e) => onNavigate(e.key)}
          className="border-none bg-transparent flex-auto justify-end"
        />
      </div>
    );
  }

  return (
    <div className="hidden md:flex md:gap-8 flex-1 items-center justify-end">
      <Menu
        mode="horizontal"
        items={items}
        selectedKeys={[currentPath]}
        onClick={(e) => onNavigate(e.key)}
        className="border-none bg-transparent flex-auto justify-end"
      />

      <Select
        value={language}
        onChange={(value) => setLanguage(value)}
        options={[
          { label: translations.language.en, value: "en" },
          { label: translations.language.ptbr, value: "pt-br" },
        ]}
        className="w-32"
        size="large"
      />
    </div>
  );
};

export default DesktopNav;
