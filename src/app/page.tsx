import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/nav-menu";
import pfp from "@/images/pfp.jpg";

const TEXT = {
  name: "Pedro Henrique Scheidt Prazeres",
  pictureAlt: "Picture",
  title: "Desenvolvedor Fullstack",
  aboutHeading: "Meu Perfil",
  aboutDesc:
    "Programador fullstack apaixonado por criar soluções digitais e por segurança digital aplicada. Busco sempre inovar e entregar produtos de alta qualidade.",
};

const ProfileHeaderDark = () => {
  return (
    // Main background
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-10 font-sans">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Left: Name + Picture 1 Unit*/}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold mb-4 tracking-tight">
              {TEXT.name}
            </h1>
            <div className="w-full aspect-square border-4 border-blue-600 flex items-center justify-center bg-white transition-hover hover:bg-gray-50 overflow-hidden">
              <Image
                src={pfp}
                alt={TEXT.pictureAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: 2 Units*/}
          <div className="md:col-span-2 flex flex-col">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-800">
              {TEXT.title}
            </h2>

            {/* About Box with blue border and white fill */}
            <div className="flex-grow border-2 border-blue-600 p-8 bg-white rounded-sm shadow-2xl">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">
                {TEXT.aboutHeading}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {TEXT.aboutDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderDark;
