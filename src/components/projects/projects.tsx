import FeatureGrid from "@components/projects/projectCard";
import { link } from "fs";

/*
interface ProjectItem {
  Title: string;
  description: string;
  tags?: string[];
  color?: string;
  link: string;
}
*/


const projetos = [
  {
    Title: "Sistema de Gestão",
    description: "Desenvolvimento de um ERP completo para controle de estoque.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: ""
  },
  {
    Title: "App Mobile",
    description: "Interface intuitiva para delivery de comida local.",
    tags: ["React Native", "Firebase"],
    link: ""
  }
];

const ProjectComponent = () => {
    return (
        <FeatureGrid 
            items={projetos} 
            sectionTitle="Meus Projetos"
            accentColor="#ff5722"
        />
    );
}

export default ProjectComponent;