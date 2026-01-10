"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { NAV_ROUTES } from "@components/routes";
import { MobileNav } from "@ui/mobileNav";

const DesktopNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    /* CHANGE: Removed 'fixed' and 'top-0'. 
       The nav now occupies its own space in the document flow.
    */
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand / Logo */}
        <div 
          className="text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleNavigation('/')}
        >
          BRAND
        </div>

        {/* Desktop View (Standard Flow) */}
        <DesktopNav 
          items={NAV_ROUTES} 
          currentPath={pathname} 
          onNavigate={handleNavigation} 
        />

        {/* Mobile View (Hamburger) */}
        <MobileNav 
          items={NAV_ROUTES} 
          currentPath={pathname} 
          onNavigate={handleNavigation} 
        />
      </div>
    </nav>
  );
};

export default DesktopNav;