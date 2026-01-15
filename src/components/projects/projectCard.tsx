"use client";

import React from "react";
import { Card, Tag, Typography, Row, Col } from "antd";
import { GithubOutlined, DeploymentUnitOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

// Tipagem de Interface
interface ProjectItem {
  Title: string;
  description: string;
  tags?: string[];
  color?: string;
  link: string;
}

interface ProjectGridProps {
  items: ProjectItem[];
  sectionTitle?: string;
}

// Card individual
const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const hasColor = !!item.color;
  const accentColor = item.color || "#d1d5db"; // Se não houver cor, usar cinza padrão

  return (
    <Card
      hoverable
      className="h-full shadow-sm"
      style={{
        // Linha decorativa condicional
        borderTop: hasColor ? `4px solid ${item.color}` : "none",
      }}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "24px",
        },
      }}
    >
      {/* Header: Ícone e Título */}
      <div className="flex items-center mb-4">
        <div
          className="p-2 rounded-lg mr-3 text-xl flex items-center justify-center"
          style={{
            backgroundColor: hasColor ? `${item.color}15` : "#f3f4f6",
            color: accentColor,
          }}
        >
          <DeploymentUnitOutlined />
        </div>
        <Title level={4} style={{ margin: 0 }}>
          {item.Title}
        </Title>
      </div>

      {/* Descrição */}
      <div className="mb-3 flex-grow">
        <Text
          type="secondary"
          className="text-[10px] uppercase font-bold block mb-1 tracking-wider"
        >
          Descrição do Projeto
        </Text>
        <Paragraph className="text-sm text-gray-600 leading-relaxed m-0">
          {item.description}
        </Paragraph>
      </div>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-4 mb-4 pt-2 border-t border-gray-50">
          {item.tags.map((tag) => (
            <Tag
              key={tag}
              color="default"
              className="mb-1 rounded-full border-gray-200 text-gray-500"
            >
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {/* Footer: Link do Github */}
      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2">
        <GithubOutlined style={{ color: hasColor ? item.color : "#4b5563" }} />
        <Link
          href={item.link}
          target="_blank"
          style={{ color: hasColor ? item.color : "#1677ff" }}
          className="text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Link para o repositório
        </Link>
      </div>
    </Card>
  );
};

// Controlador de Card Grid
const ProjectGrid: React.FC<ProjectGridProps> = ({
  items,
  sectionTitle = "Projetos e Repositórios",
}) => {
  return (
    <div className="w-full">
      {sectionTitle && (
        <header className="mb-10">
          <Title level={2} className="flex items-center gap-3">
            <span className="bg-blue-600 w-2 h-8 rounded-full block" />
            {sectionTitle}
          </Title>
        </header>
      )}

      <Row gutter={[24, 24]}>
        {items.map((item, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <ProjectCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectGrid;
