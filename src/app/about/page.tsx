"use client";

import Navbar from "@/components/ui/nav-menu";
import HorizontalTimeline from "@/components/about/timeline";
import MinhaFormacao from "@/components/about/minhaformacao";
import OutrosCursos from "@/components/about/outrosCursos";
import Experiencia from "@/components/about/experiencia";
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
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <div>
        <OutrosCursos />
      </div>
      <div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <div>
        <Experiencia />
      </div>
    </div>
  );
};

export default About;
