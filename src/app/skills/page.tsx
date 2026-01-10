import React from 'react';
import Navbar from '@/components/ui/nav-menu';
import PortfolioSkills from '@/components/skills/skills';

const ProfileHeaderDark = () => {
  return (
    // Main background
    <div>
      <Navbar/>
      <div>
        <PortfolioSkills/>
      </div>
    </div>
  );
};

export default ProfileHeaderDark;