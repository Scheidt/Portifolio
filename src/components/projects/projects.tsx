import FeatureGrid from "@components/projects/projectCard";

const meusDados = [
  {
    Title: "Sistema de Gestão",
    description: "Desenvolvimento de um ERP completo para controle de estoque.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    Title: "App Mobile",
    description: "Interface intuitiva para delivery de comida local.",
    tags: ["React Native", "Firebase"]
  }
];

const ProjectComponent = () => {
    return (
        <FeatureGrid 
            items={meusDados} 
            sectionTitle="Meus Projetos"
            accentColor="#ff5722"
        />
    );
}

export default ProjectComponent;