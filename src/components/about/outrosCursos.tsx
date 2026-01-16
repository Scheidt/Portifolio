/** biome-ignore-all lint/suspicious/noArrayIndexKey: <data is never edited, therefore there is no need for a robust ID system> */
"use client";

import { Col, Row, Typography } from "antd";
import translations from "@/locales/ptbr.json";

const { Title } = Typography;

const OutrosCursos = () => {
  const outrosCursos = translations.about.outrosCursos;
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[16, 24]} align="top">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 16, order: 1 }}>
            <div className="ml-[20%]">
              <ul className="list-none p-0 m-0 space-y-2 text-gray-800 text-lg leading-relaxed">
                {outrosCursos.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }}>
            <Title
              level={2}
              className="text-3xl! font-bold! m-0! text-black! md:text-right"
            >
              {outrosCursos.title}
            </Title>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OutrosCursos;
