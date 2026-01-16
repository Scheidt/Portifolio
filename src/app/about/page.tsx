import Navbar from "@/components/ui/nav-menu";
import HorizontalTimeline from "@/components/about/timeline";
import MinhaFormacao from "@/components/about/minhaformacao";
import OutrosCursos from "@/components/about/outrosCursos";
import Experiencia from "@/components/about/experiencia";

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
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="text-black!"
        style={{ background: "#f9fafb", fontSize: "400%", fontWeight: 700 }}
      >
        Minha Jornada
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
