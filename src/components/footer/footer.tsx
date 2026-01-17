"use client";

import { Button } from "antd";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();

  const handleDownloadCV = () => {
    const fileName =
      language === "en" ? "CV in English.pdf" : "CV Pedro Henrique Scheidt Prazeres.pdf";
    const link = document.createElement("a");
    link.href = `/pdfs/${encodeURIComponent(fileName)}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonText =
    language === "en"
      ? "Download CV in English"
      : "Baixar CV em português";

  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">
              © 2025 Pedro Henrique Scheidt Prazeres. All rights reserved.
            </p>
          </div>
          <Button
            type="primary"
            icon={<Download size={16} />}
            onClick={handleDownloadCV}
            className="flex items-center gap-2"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </footer>
  );
};
