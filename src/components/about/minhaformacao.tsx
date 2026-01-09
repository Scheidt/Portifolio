"use client";

import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

const MinhaFormacao = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[16, 24]}>
          <Col xs={24} md={8}>
            <Title 
              level={2} 
              className="!text-3xl !font-bold !m-0 !text-black"
            >
              Minha Formação
            </Title>
          </Col>

          <Col xs={24} md={16}>
            <div className="ml-[20%]">
              <ul className="list-none p-0 m-0 space-y-2 text-gray-800 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>Fiz ensino médio no Colégio Energia entre os anos de 2016 e 2019.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>Segui para o Cursinho preparatório Gaia no primeiro semestre de 2020.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>Em 2020.2 entrei como bolsista para o curso de Direito na Unisul, o qual não completei.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>Em 2022.1 entrei para Sistemas de Informação na UFSC.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">-</span>
                  <span>Minha formação em Sistemas da Informação está prevista para Julho de 2026.</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MinhaFormacao;