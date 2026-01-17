"use client";

import { Typography } from "antd";
import Experiencia from "@/components/about/experiencia";
import MinhaFormacao from "@/components/about/minhaformacao";
import OutrosCursos from "@/components/about/outrosCursos";
import HorizontalTimeline from "@/components/about/timeline";
import { useLanguage } from "@/contexts/LanguageContext";

const { Title } = Typography;

const About = () => {
  const { translations } = useLanguage();
  const timelinedata = translations.about.timeline;
  return (
    <div>
      <header className="p-8 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <Title level={2} className="flex items-center gap-3" style={{ margin: 0 }}>
            <span className="bg-blue-600 w-2 h-8 rounded-full block" />
            {translations.about.title}
          </Title>
        </div>
      </header>
      <div
        style={{ background: "#f9fafb", minHeight: "60vh", padding: "100px" }}
      >
        <HorizontalTimeline data={timelinedata} />
      </div>
      <div>
        <MinhaFormacao />
      </div>
      <div>
        <hr style={{ height: "3px", background: "#eee" }} />
      </div>
      <div>
        <OutrosCursos />
      </div>
      <div>
        <hr style={{ height: "3px", background: "#eee" }} />
      </div>
      <div>
        <Experiencia />
      </div>
    </div>
  );
};

export default About;