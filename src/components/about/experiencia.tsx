/** biome-ignore-all lint/suspicious/noArrayIndexKey: <data is never edited, therefore there is no need for a robust ID system> */
"use client";

import { Col, Row, Typography } from "antd";
import translations from "@/locales/ptbr.json";

const { Title, Text } = Typography;

const Experiencia = () => {
  const experiencias = translations.about.experiencia.items;

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[16, 32]}>
          {/* Título: 1/3 à esquerda */}
          <Col xs={24} md={8}>
            <Title level={2} className="text-3xl! font-bold! m-0! text-black!">
              {translations.about.experiencia.title}
            </Title>
          </Col>

          {/* Conteúdo: 2/3 à direita c/ offset de 1/5 */}
          <Col xs={24} md={16}>
            <div className="md:ml-[20%]">
              <div className="space-y-8">
                {experiencias.map((exp: any, index: number) => (
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
                      {exp.detalhes.map((detalhe: string, indx: number) => (
                        <li key={indx} className="flex items-start">
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
