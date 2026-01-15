"use client";

import { useRouter, usePathname } from "next/navigation";
import { DesktopNav } from "@ui/desktopNav";
import { MobileNav } from "@ui/mobileNav";
import { NAV_ROUTES } from "@/components/routes";

const Navbar = () => {
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
        <button
          type="button"
          className="text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-0 p-0"
          onClick={() => handleNavigation("/")}
          aria-label="Go to home"
        >
          HOME
        </button>

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

export default Navbar;
