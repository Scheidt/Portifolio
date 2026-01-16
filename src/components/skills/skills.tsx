/** biome-ignore-all lint/suspicious/noArrayIndexKey: <data is never edited, therefore there is no need for a robust ID system> */
"use client";

import React from "react";
import { Card, Tag, Typography, Divider, Row, Col } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  BlockOutlined,
} from "@ant-design/icons"; 
import SkillCard from "./skillCard";

const { Title, Text, Paragraph } = Typography;

// Types
type SkillData = {
  title: string;
  icon?: React.ReactNode;
  color?: string;
  university?: string[];
  extra?: string;
  tags?: string[];
};

type CVData = {
  header: { title: string; subtitle: string };
  languages: SkillData[];
  competencies: string[];
};

// Centralized Data Dicts
const CV_DATA: CVData = {
  header: {
    title: "Linguagens de Programação",
    subtitle: "Stack técnica e formação acadêmica aplicada.",
  },
  languages: [
    {
      title: "Python",
      icon: <CodeOutlined />,
      color: "#3776ab",
      university: [
        "Programação Orientada a Objetos",
        "Desenvolvimento de Sistemas OO",
        "Organização e Arquitetura de Computadores",
      ],
      extra: "100 Days of Code: The Complete Python Pro Bootcamp (Udemy)",
      tags: ["Pandas", "Matplotlib", "Statsmodels", "Seaborn"],
    },
    {
      title: "Web & MERN",
      icon: <GlobalOutlined />,
      color: "#61dbfb",
      university: [
        "Programação para Web",
        "Desenvolvimento de Sistemas Móveis e Embarcados",
      ],
      extra: "The Complete 2023 Web Development Bootcamp (Udemy)",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "MERN",
        "Next.js",
        "React",
        "Node.js",
        "Ant Design",
        "Better Auth",
      ],
    },
    {
      title: "Bancos de Dados",
      icon: <DatabaseOutlined />,
      color: "#336791",
      university: [
        "Bancos de Dados 1",
        "Bancos de Dados 2",
        "Bancos de Dados 3",
        "Tópicos Especiais em Gerência de Dados",
      ],
      tags: [
        "SQL",
        "NoSQL",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Neo4j",
        "Prisma",
      ],
    },
    {
      title: "GoLang",
      icon: <BlockOutlined />,
      color: "#00add8",
      university: ["Programação Paralela e Distribuída"],
    },
    {
      title: "Docker",
      icon: <RocketOutlined />,
      color: "#2496ed",
      extra: "Containerização e Orquestração",
    },
    {
      title: "C++",
      icon: <ThunderboltOutlined />,
      color: "#00599c",
      university: [
        "Sistemas Operacionais",
        "Programação paralela e multicomputadores",
        "Desenvolvimento de Sistemas Móveis e Embarcados",
        "Introdução a Compiladores",
      ],
    },
    {
      title: "Java",
      icon: <SafetyCertificateOutlined />,
      color: "#ed8b00",
      university: [
        "Programação Orientada a Objetos",
        "Desenvolvimento de Sistemas OO",
        "Segurança de Dados",
      ],
      extra: "Bouncy Castle - Chaves assimétricas, Assinaturas digitais",
    },
  ],
  competencies: [
    "Experiência com programação orientada a objetos e padrão MVC",
    "Experiência com monitoração (Zabbix e OpMon)",
    "Experiência com programação multithread concorrente",
    "Experiência com Docker e containerização",
    "Experiência com desenvolvimento web (front-end e back-end)",
    "Experiência com bancos de dados relacionais",
    "Experiência com Sistemas de autenticação e permissão de usuários",
    "Experiência com Git e GitHub",
    "Conhecimento em algoritmos e estruturas de dados",
    "Conhecimento em design patterns",
    "Conhecimento em testes unitários e TDD",
    "Conhecimento sobre SCRUM e Agile",
    "Conhecimento de BPM",
    "Conhecimentos de segurança de dados",
    "Japonês N5",
    "Inglês nativo",
  ],
};


// Main Component
const PortfolioComponent: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Dynamic Header */}
        <header className="mb-12">
          <Title level={2} className="flex items-center gap-3">
            <span className="bg-blue-600 w-2 h-8 rounded-full block" />
            {CV_DATA.header.title}
          </Title>
          <Text className="text-lg text-gray-500">
            {CV_DATA.header.subtitle}
          </Text>
        </header>

        {/* Language Grid */}
        <Row gutter={[24, 24]}>
          {CV_DATA.languages.map((lang: SkillData, langIndex: number) => (
            <Col xs={24} sm={12} lg={8} key={langIndex}>
              <SkillCard data={lang} />
            </Col>
          ))}
        </Row>

        <Divider className="my-16" />

        {/* Competency Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Title
            level={3}
            className="mb-8 flex items-center gap-2 text-gray-800"
          >
            COMPETÊNCIAS
          </Title>
          <Row gutter={[40, 20]}>
            {CV_DATA.competencies.map((skill: string, compIndex: number) => (
              <Col xs={24} md={12} key={compIndex}>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors" />
                  <Text className="text-[15px] text-gray-600 group-hover:text-gray-900 transition-colors">
                    {skill}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </div>
  );
};

export default PortfolioComponent;
