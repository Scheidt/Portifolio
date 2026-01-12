import FeatureGrid from "@components/projects/projectCard";
import { Descriptions } from "antd";
import Title from "antd/es/skeleton/Title";
import { link } from "fs";
import { Tags } from "lucide-react";

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
    Title: "Sistema de Cálculo de Contaminantes REMA",
    description: "Calculadora web para análise de contaminantes ambientais, realizado para o laboratório REMA.",
    tags: ["Javascript", "Next.js", "TypeScript", "ReactHooks", "XLSX"],
    link: "https://github.com/Scheidt/desafio-REMA"
  },
  {
    Title: "Criação, Manipulação e Validação de Chaves Assimétricas",
    description: "Desafio LABSEC - Criação de um sistema em Java para geração, manipulação e validação de chaves assimétricas utilizando a biblioteca BouncyCastle. Adicionalmente, as primeiras 4 questões do Cryptopals",
    tags: ["Java", "BouncyCastle", "Cryptography", "Cybersecurity", "Assimetric Keys"],
    link: "https://github.com/Scheidt/Desafio-Labsec"
  },
  {
    Title: "Classificador Binário com Machine Learning",
    description: "Classificador Binário utilizando dois modelos: Naive Bayes e MLP.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy"],
    link: "https://github.com/Scheidt/Classificador-Binario"
  },
  {
    Title: "Projeto Multitread em GO",
    description: "Projeto desenvolvido em Go para demonstrar conceitos de programação concorrente e multitread.",
    tags: ["GoLang", "Concurrency", "Goroutines", "Channels", "Multithreading"],
    link: "https://github.com/Scheidt/Projeto-Threads-GO"
  },
  {
    Title: "Arvore de Decisão em Python",
    description: "Implementação de uma árvore de decisão do zero em Python, com criação dinâmica com base em Inputs do Usuário.",
    tags: ["Python", "Data Structures", "Algorithms", "Decision Tree"],
    link: "https://github.com/Scheidt/TrabalhoEstruturasArvoreDeDecisao"
  },
  {
    Title: "Array Bidimensional",
    description: "Implementação de um array bidimensional em Python sem o uso de arrays Python, com funcionalidades de inserção, remoção e busca de elementos.",
    tags: ["Python", "Data Structures", "Arrays", "Algorithms"],
    link: "https://github.com/Scheidt/SuperArray"

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