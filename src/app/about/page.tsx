import Navbar from "@/components/ui/nav-menu";
import HorizontalTimeline from "@/components/about/timeline";
import MinhaFormacao from "@/components/about/minhaformacao";
import OutrosCursos from "@/components/about/outrosCursos";
import Experiencia from "@/components/about/experiencia";
import { colors } from "@/colors";

const About = () => {
  const timelinedata = {
    "2020": "Entrei para o Direito",
    "2022":
      "Percebi que não gostava de Direito, tranquei o curso e entrei para Sistemas da Informação",
    "2023": "Iniciei minha jornada como desenvolvedor Fullstack",
    "2025":
      "Entrei para a Pixel como desenvolvedor Fullstack e para o laboratório REMA como desenvolvedor Backend",
    "2026 e adiante": "Continuar crescendo e aprendendo como desenvolvedor",
  };
  return (
    // Main background
    <div>
      <div>
        <Navbar />
      </div>
      <div className= "!text-black" style={{ background: colors.semantic.background, fontSize: "400%", fontWeight: 700}}>
        Minha Jornada
      </div>
      <div style={{ background: colors.semantic.background, minHeight: "60vh", padding: "100px" }}>
        <HorizontalTimeline data={timelinedata} />
      </div>
      <div>
        <MinhaFormacao />
      </div>
      <div>
        <hr style={{ height: "3px", background: colors.semantic.divider }} />
      </div>
      <div>
        <OutrosCursos />
      </div>
      <div>
        <hr style={{ height: "3px", background: colors.semantic.divider }} />
      </div>
      <div>
        <Experiencia />
      </div>
    </div>
  );
};

export default About;
