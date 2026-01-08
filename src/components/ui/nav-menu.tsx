"use client";

import HamburguerMenu from "./hamburguer-menu";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function NavMenu() {
  return <HamburguerMenu items={items} />;
}
