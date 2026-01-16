import FeatureGrid from "@components/projects/projectCard";
import translations from "@/locales/ptbr.json";

const projetos = translations.projects.items;

const ProjectComponent = () => {
  return (
    <FeatureGrid
      items={projetos}
      sectionTitle={translations.projects.sectionTitle}
    />
  );
};

export default ProjectComponent;
