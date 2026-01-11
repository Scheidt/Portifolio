"use client";

import React from "react";
import { Card, Tag, Typography, Row, Col } from "antd";
import { ProjectOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// 1. DEFINIÇÃO DA INTERFACE
interface GenericItem {
  Title: string;
  description: string;
  tags?: string[];
}

interface FeatureGridProps {
  items: GenericItem[];
  sectionTitle?: string;
  accentColor?: string;
}

// 2. COMPONENTE DE CARTÃO INDIVIDUAL
const InfoCard: React.FC<{ item: GenericItem; color: string }> = ({ item, color }) => (
  <Card
    hoverable
    className="h-full border-t-4 shadow-sm"
    style={{ borderTopColor: color }}
  >
    <div className="flex items-center mb-4">
      <div
        className="p-2 rounded-lg mr-3 text-xl flex items-center justify-center"
        style={{ backgroundColor: `${color}15`, color: color }}
      >
        <ProjectOutlined />
      </div>
      <Title level={4} style={{ margin: 0 }}>
        {item.Title}
      </Title>
    </div>

    <div className="mb-3">
      <Text
        type="secondary"
        className="text-[10px] uppercase font-bold block mb-1 tracking-wider"
      >
        Descrição
      </Text>
      <Paragraph className="text-sm text-gray-600 leading-relaxed m-0">
        {item.description}
      </Paragraph>
    </div>

    {item.tags && item.tags.length > 0 && (
      <div className="mt-4 pt-2 border-t border-gray-50">
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
  </Card>
);

// 3. COMPONENTE PRINCIPAL (O Grid que recebe a lista)
const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  items, 
  sectionTitle = "Projetos e Experiências",
  accentColor = "#1890ff" // Azul padrão do AntD
}) => {
  return (
    <div className="w-full">
      {sectionTitle && (
        <Title level={3} className="mb-8 flex items-center gap-2 text-gray-800 uppercase tracking-tight">
          {sectionTitle}
        </Title>
      )}
      
      <Row gutter={[24, 24]}>
        {items.map((item, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <InfoCard item={item} color={accentColor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureGrid;