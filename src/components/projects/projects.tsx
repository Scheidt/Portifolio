"use client";

import FeatureGrid from "@components/projects/projectCard";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectComponent = () => {
  const { translations } = useLanguage();
  const projetos = translations.projects.items;

  return (
    <FeatureGrid
      items={projetos}
      sectionTitle={translations.projects.sectionTitle}
    />
  );
};

export default ProjectComponent;
