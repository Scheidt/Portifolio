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

const { Text, Paragraph, Title } = Typography; 




type SkillData = {
  title: string;
  icon?: React.ReactNode;
  color?: string;
  university?: string[];
  extra?: string;
  tags?: string[];
};

// Skill Card Sub-component
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

export default SkillCard;