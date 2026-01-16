"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const NAV_ROUTES_STATIC = {
  "en": [
    { label: "About", key: "/about" },
    { label: "Projects", key: "/projects" },
    { label: "Skills", key: "/skills" },
    { label: "Contact", key: "/contact" },
  ],
  "pt-br": [
    { label: "Sobre", key: "/about" },
    { label: "Projetos", key: "/projects" },
    { label: "Habilidades", key: "/skills" },
    { label: "Contato", key: "/contact" },
  ],
};

export const useNavRoutes = () => {
  const { language } = useLanguage();
  return NAV_ROUTES_STATIC[language] || NAV_ROUTES_STATIC["pt-br"];
};
