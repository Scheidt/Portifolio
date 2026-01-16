/** biome-ignore-all lint/suspicious/noArrayIndexKey: <data is never edited, therefore there is no need for a robust ID system> */
"use client";

import React from "react";
import { Typography, Divider, Row, Col } from "antd";
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
import { useLanguage } from "@/contexts/LanguageContext";

const { Title, Text } = Typography;

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

// Main Component
const PortfolioComponent: React.FC = () => {
  const { translations } = useLanguage();
  const skillsData = translations.skills;
  const CV_DATA: CVData = {
  header: skillsData.header,
  languages: [
    {
      ...skillsData.languages[0], //Python
      icon: <CodeOutlined />,
      color: "#3776ab",
    },
    {
      ...skillsData.languages[1], // Web & MERN
      icon: <GlobalOutlined />,
      color: "#61dbfb",
    },
    {
      ...skillsData.languages[2], // Databases
      icon: <DatabaseOutlined />,
      color: "#336791",
    },
    {
      ...skillsData.languages[3], // GoLang
      icon: <BlockOutlined />,
      color: "#00add8",
    },
    {
      ...skillsData.languages[4], // Docker
      icon: <RocketOutlined />,
      color: "#2496ed",
    },
    {
      ...skillsData.languages[5], // C++
      icon: <ThunderboltOutlined />,
      color: "#00599c",
    },
    {
      ...skillsData.languages[6], // Java
      icon: <SafetyCertificateOutlined />,
      color: "#ed8b00",
    },
  ],
  competencies: skillsData.competencies,
  };

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
            {skillsData.competenciesTitle}
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
