"use client";

import React from 'react';
import { Card, Tag, Typography, Divider, Row, Col, Space } from 'antd';
import { 
  CodeOutlined, 
  DatabaseOutlined, 
  GlobalOutlined, 
  SafetyCertificateOutlined, 
  RocketOutlined, 
  ThunderboltOutlined,
  BlockOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const SkillCard = ({ title, icon, university, extra, tags, color }) => (
  <Card 
    hoverable 
    className="h-full border-t-4 shadow-sm" 
    style={{ borderTopColor: color }}
  >
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-lg mr-3`} style={{ backgroundColor: `${color}15`, color: color }}>
        {icon}
      </div>
      <Title level={4} style={{ margin: 0 }}>{title}</Title>
    </div>

    {university && (
      <div className="mb-3">
        <Text type="secondary" className="text-xs uppercase font-bold block mb-1">Formação Acadêmica</Text>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {university.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    )}

    {extra && (
      <div className="mb-3">
        <Text type="secondary" className="text-xs uppercase font-bold block mb-1">Cursos & Especializações</Text>
        <Paragraph className="text-sm italic text-gray-700">{extra}</Paragraph>
      </div>
    )}

    {tags && (
      <div className="mt-auto pt-2">
        {tags.map(tag => <Tag color="blue" key={tag} className="mb-1">{tag}</Tag>)}
      </div>
    )}
  </Card>
);

const PortfolioSkills = () => {
  const languages = [
    {
      title: 'Python',
      icon: <CodeOutlined className="text-xl" />,
      color: '#3776ab',
      university: ['Programação Orientada a Objetos', 'Desenvolvimento de Sistemas OO'],
      extra: '100 Days of Code: The Complete Python Pro Bootcamp (Udemy)',
      tags: ['Pandas', 'Matplotlib', 'Statsmodels', 'Seaborn']
    },
    {
      title: 'Web & MERN',
      icon: <GlobalOutlined className="text-xl" />,
      color: '#61dbfb',
      university: ['Programação para Web'],
      extra: 'The Complete 2023 Web Development Bootcamp (Udemy)',
      tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node']
    },
    {
      title: 'C++',
      icon: <ThunderboltOutlined className="text-xl" />,
      color: '#00599c',
      university: ['Sistemas Operacionais', 'Programação Paralela e Multicomputadores'],
    },
    {
      title: 'PostgreSQL',
      icon: <DatabaseOutlined className="text-xl" />,
      color: '#336791',
      university: ['Bancos de Dados 1'],
    },
    {
      title: 'Java Security',
      icon: <SafetyCertificateOutlined className="text-xl" />,
      color: '#ed8b00',
      extra: 'Bouncy Castle: Chaves Assimétricas e Assinaturas Digitais',
    },
    {
      title: 'GoLang & Cloud',
      icon: <BlockOutlined className="text-xl" />,
      color: '#00add8',
      extra: 'Curso à parte e Docker',
      tags: ['Docker', 'Go']
    }
  ];

  const coreCompetencies = [
    "Experiência com OOP e Padrão MVC",
    "Monitoração com Zabbix e OpMon",
    "Programação Multithread Concorrente",
    "Metodologias Ágeis (SCRUM)",
    "Conhecimento de BPM (Business Process Management)",
    "Segurança de Dados"
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <Title level={2} className="flex items-center">
            <RocketOutlined className="mr-3 text-blue-600" /> 
            Linguagens de Programação
          </Title>
          <Text className="text-lg text-gray-500">Stack técnica e formação acadêmica aplicada.</Text>
        </header>

        <Row gutter={[24, 24]}>
          {languages.map((lang, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <SkillCard {...lang} />
            </Col>
          ))}
        </Row>

        <Divider className="my-12" />

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Title level={3} className="mb-6">Competências & Especialidades</Title>
          <Row gutter={[32, 16]}>
            {coreCompetencies.map((skill, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <Text strong className="text-gray-700">{skill}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </div>
  );
};

export default PortfolioSkills;