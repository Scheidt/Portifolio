"use client";

import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const OutrosCursos = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[16, 24]} align="top">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 16, order: 1 }}>
            <div className="ml-[20%]">
              <ul className="list-none p-0 m-0 space-y-2 text-gray-800 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>Curso de programação em python - Udemy (cursando)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>
                    (2020) Curso de Resolução de Conflitos - Corte Catarinense
                    de Mediação e Arbitragem
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>
                    Curso de linguagem Japonesa (3 anos) - Associação Nipo
                    Catarinense
                  </span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }}>
            <Title
              level={2}
              className="text-3xl! font-bold! m-0! text-black! md:text-right"
            >
              Outros Cursos
            </Title>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OutrosCursos;
