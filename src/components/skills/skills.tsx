"use client";

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
import { colors } from "@/colors";

const { Title, Text, Paragraph } = Typography;

// 1. TYPES
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

// 2. DICIONÁRIO DE DADOS (Configuração Centralizada)
const CV_DATA: CVData = {
  header: {
    title: "Linguagens de Programação",
    subtitle: "Stack técnica e formação acadêmica aplicada.",
  },
  languages: [
    {
      title: "Python",
      icon: <CodeOutlined />,
      color: colors.tech.python,
      university: [
        "Programação Orientada a Objetos",
        "Desenvolvimento de Sistemas OO",
      ],
      extra: "100 Days of Code: The Complete Python Pro Bootcamp (Udemy)",
      tags: ["Pandas", "Matplotlib", "Statsmodels", "Seaborn"],
    },
    {
      title: "Web & MERN",
      icon: <GlobalOutlined />,
      color: colors.tech.react,
      university: ["Programação para Web"],
      extra: "The Complete 2023 Web Development Bootcamp (Udemy)",
      tags: ["HTML", "CSS", "JavaScript", "MERN"],
    },
    {
      title: "PostgreSQL",
      icon: <DatabaseOutlined />,
      color: colors.tech.postgresql,
      university: [
        "Bancos de Dados 1",
        "Bancos de Dados 2",
        "Bancos de Dados 3",
        "Tópicos Especiais em Gerência de Dados",
      ],
    },
    {
      title: "GoLang",
      icon: <BlockOutlined />,
      color: colors.tech.golang,
      extra: "Curso à parte",
    },
    {
      title: "Docker",
      icon: <RocketOutlined />,
      color: colors.tech.docker,
      extra: "Containerização e Orquestração",
    },
    {
      title: "C++",
      icon: <ThunderboltOutlined />,
      color: colors.tech.cpp,
      university: [
        "Sistemas Operacionais",
        "Programação paralela e multicomputadores",
      ],
    },
    {
      title: "Java",
      icon: <SafetyCertificateOutlined />,
      color: colors.tech.java,
      extra: "Bouncy Castle - Chaves assimétricas, Assinaturas digitais",
    },
  ],
  competencies: [
    "Experiência com programação orientada a objetos e padrão MVC",
    "Experiência com monitoração (Zabbix e OpMon)",
    "Experiência com programação multithread concorrente",
    "Conhecimento sobre SCRUM e Agile",
    "Conhecimento de BPM",
    "Conhecimentos de segurança de dados",
  ],
};






// 2. SUB-COMPONENTE DE UI (Apresentação)
const SkillCard: React.FC<{ data: SkillData }> = ({ data }) => (
  <Card
    hoverable
    className="h-full border-t-4 shadow-sm"
    style={{ borderTopColor: data.color }}
  >
    <div className="flex items-center mb-4">
      <div
        className="p-2 rounded-lg mr-3 text-xl flex items-center justify-center"
        style={{ backgroundColor: `${data.color}15`, color: data.color }}
      >
        {data.icon}
      </div>
      <Title level={4} style={{ margin: 0 }}>
        {data.title}
      </Title>
    </div>

    {data.university && (
      <div className="mb-3">
        <Text
          type="secondary"
          className="text-[10px] uppercase font-bold block mb-1 tracking-wider"
        >
          Aulas da Faculdade
        </Text>
        <ul className="list-disc list-inside text-sm text-gray-600 leading-relaxed">
          {data.university.map((item: string, uniIndex: number) => (
            <li key={uniIndex}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {data.extra && (
      <div className="mb-3">
        <Text
          type="secondary"
          className="text-[10px] uppercase font-bold block mb-1 tracking-wider"
        >
          Curso Adicional
        </Text>
        <Paragraph className="text-sm italic text-gray-700 m-0">
          {data.extra}
        </Paragraph>
      </div>
    )}

    {data.tags && (
      <div className="mt-4 pt-2 border-t border-gray-50">
        {data.tags.map((tag: string) => (
          <Tag
            color="default"
            key={tag}
            className="mb-1 rounded-full border-gray-200 text-gray-500"
          >
            {tag}
          </Tag>
        ))}
      </div>
    )}
  </Card>
);

// 3. COMPONENTE PRINCIPAL
const PortfolioComponent: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Dinâmico */}
        <header className="mb-12">
          <Title level={2} className="flex items-center gap-3">
            <span className="w-2 h-8 rounded-full block" style={{ backgroundColor: colors.primary.blue }} />
            {CV_DATA.header.title}
          </Title>
          <Text className="text-lg text-gray-500">
            {CV_DATA.header.subtitle}
          </Text>
        </header>

        {/* Grid de Linguagens */}
        <Row gutter={[24, 24]}>
          {CV_DATA.languages.map((lang: SkillData, langIndex: number) => (
            <Col xs={24} sm={12} lg={8} key={langIndex}>
              <SkillCard data={lang} />
            </Col>
          ))}
        </Row>

        <Divider className="my-16" />

        {/* Seção de Competências */}
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
                  <div 
                    className="mt-1.5 w-2 h-2 rounded-full transition-colors group-hover:bg-blue-600" 
                    style={{ 
                      backgroundColor: colors.tailwind.blue[400],
                    }}
                  />
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
