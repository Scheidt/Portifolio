import React from 'react';
import Navbar from '@/components/ui/nav-menu';
import PortfolioSkills2 from '@/components/skills/skills2';

const ProfileHeaderDark = () => {
  return (
    // Main background
    <div>
      <Navbar/>
      <div>
        <PortfolioSkills2/>
      </div>
    </div>
  );
};

export default ProfileHeaderDark;