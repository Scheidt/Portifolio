"use client";

import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Experiencia = () => {
  const experiencias = [
    {
      periodo: "10/2021 - 02/2022",
      instituicao: "Corte Catarinense de Mediação e Arbitragem",
      detalhes: [
        "Área de atuação: Auxiliar Financeiro/ Administrativo / Documentação",
        "Atividade: Estágio"
      ]
    },
    {
      periodo: "04/2023 - 08/2023",
      instituicao: "Federação das Indústrias de Santa Catarina (FIESC)",
      detalhes: [
        "Área de atuação: Monitoração e SLA",
        "Atividade: Estágio"
      ]
    },
    {
      periodo: "02/2025 - 10/2025",
      instituicao: "Laboratório de Robótica (UFSC)",
      detalhes: [
        "Área de atuação: Desenvolvimento de IA",
        "Atividade: Bolsista"
      ]
    },
    {
      periodo: "10/2025 - atualmente",
      instituicao: "Pixel Soluções Digitais (UFSC)",
      detalhes: [
        "Área de atuação: Desenvolvimento Fullstack",
        "Atividade: Voluntário"
      ]
    },
    {
      periodo: "10/2025 - atualmente",
      instituicao: "Laboratório REMA (UFSC)",
      detalhes: [
        "Área de atuação: Desenvolvimento Backend",
        "Atividade: Bolsista"
      ]
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[16, 32]}>
          {/* Título: Ocupa 1/3 (8 colunas) à esquerda */}
          <Col xs={24} md={8}>
            <Title 
              level={2} 
              className="!text-3xl !font-bold !m-0 !text-black"
            >
              Experiência
            </Title>
          </Col>

          {/* Conteúdo: Ocupa 2/3 (16 colunas) à direita com offset de 1/5 */}
          <Col xs={24} md={16}>
            <div className="md:ml-[20%]">
              <div className="space-y-8">
                {experiencias.map((exp, index) => (
                  <div key={index} className="flex flex-col">
                    {/* Linha principal com bullet point */}
                    <div className="flex items-start mb-2">
                      <span className="mr-3 text-gray-400 text-xl">•</span>
                      <Text className="text-lg font-semibold text-gray-800 leading-tight">
                        {exp.periodo}: {exp.instituicao}
                      </Text>
                    </div>
                    
                    {/* Sub-tópicos com indentação */}
                    <ul className="list-none p-0 m-0 ml-8 space-y-1">
                      {exp.detalhes.map((detalhe, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-gray-400 text-lg">○</span>
                          <Text className="text-gray-600 text-base italic">
                            {detalhe}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Experiencia;