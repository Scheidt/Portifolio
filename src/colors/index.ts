/**
 * Centralized color definitions for the portfolio
 * All components and pages should import colors from this file
 */

// Primary Brand Colors
export const primary = {
  blue: "#2563eb", // blue-600 - main brand color
  blueLight: "#60a5fa", // blue-400
  blueDark: "#1e40af", // blue-800
} as const;

// Gray Scale
export const gray = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
} as const;

// Semantic Colors
export const semantic = {
  white: "#ffffff",
  black: "#000000",
  background: "#f9fafb", // gray-50
  backgroundDark: "#0a0a0a",
  foreground: "#171717",
  foregroundDark: "#ededed",
  border: "#e5e7eb", // gray-200
  borderLight: "#f3f4f6", // gray-100
  divider: "#eee",
} as const;

// Ant Design Colors
export const antd = {
  primary: "#2563eb", // blue-600
  link: "#1677ff",
} as const;

// Technology Brand Colors (for skills/projects)
export const tech = {
  python: "#3776ab",
  react: "#61dbfb",
  postgresql: "#336791",
  golang: "#00add8",
  docker: "#2496ed",
  cpp: "#00599c",
  java: "#ed8b00",
} as const;

// Tailwind Color Mappings (for reference and consistency)
export const tailwind = {
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
} as const;

// Default fallback colors
export const defaults = {
  accent: "#d1d5db", // gray-300
  iconBackground: "#f3f4f6", // gray-100
} as const;

// Export all colors as a single object for convenience
export const colors = {
  primary,
  gray,
  semantic,
  antd,
  tech,
  tailwind,
  defaults,
} as const;
