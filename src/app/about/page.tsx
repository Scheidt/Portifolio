"use client";

import Experiencia from "@/components/about/experiencia";
import MinhaFormacao from "@/components/about/minhaformacao";
import OutrosCursos from "@/components/about/outrosCursos";
import HorizontalTimeline from "@/components/about/timeline";
import Navbar from "@/components/ui/nav-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { translations } = useLanguage();
  const timelinedata = translations.about.timeline;
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="text-black!"
        style={{ background: "#f9fafb", fontSize: "400%", fontWeight: 700 }}
      >
        {translations.about.title}
      </div>
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