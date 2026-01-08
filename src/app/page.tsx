import React from 'react';

const ProfileHeaderDark = () => {
  return (
    // Main background set to black/near-black
    <div className="min-h-screen bg-neutral-950 text-white p-4 md:p-10 font-sans">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Left Section: Picture (1 Unit) */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold mb-4 tracking-tight">Pedro Henrique</h1>
          
          {/* Border changed to white to stand out against black bg */}
          <div className="w-full aspect-square border-4 border-white flex items-center justify-center bg-neutral-900 transition-hover hover:bg-neutral-800">
            <span className="text-xl font-medium text-gray-400">Picture</span>
          </div>
        </div>

        {/* Right Section: About (2 Units) */}
        <div className="md:col-span-2 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-100">Fullstack Developer</h2>
          
          {/* About Box with white border and dark fill */}
          <div className="flex-grow border-2 border-white p-8 bg-neutral-900 rounded-sm shadow-2xl">
            <h3 className="text-xl font-bold mb-4 border-b border-neutral-700 pb-2">About</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate Fullstack Developer with a focus on building scalable web applications. 
              This layout uses a <span className="text-blue-400 font-mono">1:2 ratio</span> grid 
              to balance visual identity with professional depth.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileHeaderDark;