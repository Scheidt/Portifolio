"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/locales/en.json";
import ptbr from "@/locales/ptbr.json";

type Language = "en" | "pt-br";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof en;
}

const translations: Record<Language, typeof en> = {
  en,
  "pt-br": ptbr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>("pt-br");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
