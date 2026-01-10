import React from "react";
import Navbar from "@/components/ui/nav-menu";

const TEXT = {
  name: "Pedro Henrique Scheidt Prazeres",
  pictureAlt: "Picture",
  title: "Fullstack Developer",
  aboutHeading: "About",
  aboutParaPart1:
    "Passionate Fullstack Developer with a focus on building scalable web applications. This layout uses a",
  aboutParaPart2: " grid to balance visual identity with professional depth.",
  ratio: "1:2 ratio",
};

const ProfileHeaderDark = () => {
  return (
    // Main background
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-neutral-950 text-white p-4 md:p-10 font-sans">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Left: Name + Picture 1 Unit*/}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold mb-4 tracking-tight">{TEXT.name}</h1>
            <div className="w-full aspect-square border-4 border-white flex items-center justify-center bg-neutral-900 transition-hover hover:bg-neutral-800">
              <span className="text-xl font-medium text-gray-400">{TEXT.pictureAlt}</span>
            </div>
          </div>

          {/* Right: 2 Units*/}
          <div className="md:col-span-2 flex flex-col">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-100">{TEXT.title}</h2>

            {/* About Box with white border and dark fill */}
            <div className="flex-grow border-2 border-white p-8 bg-neutral-900 rounded-sm shadow-2xl">
              <h3 className="text-xl font-bold mb-4 border-b border-neutral-700 pb-2">{TEXT.aboutHeading}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {TEXT.aboutParaPart1}{" "}
                <span className="text-blue-400 font-mono">{TEXT.ratio}</span>
                {TEXT.aboutParaPart2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderDark;
