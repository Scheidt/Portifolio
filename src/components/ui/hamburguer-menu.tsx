"use client";

import { useState } from "react";

type Item = { label: string; href: string };

interface Props {
  items: Item[];
  className?: string;
}

export default function HamburguerMenu({ items, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }} className={className}>
      <button
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((s) => !s)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: 24,
            height: 2,
            background: "#000",
            margin: 4,
            display: "block",
            transition: "transform 0.2s, opacity 0.2s",
            transform: open ? "rotate(45deg) translate(4px,4px)" : "none",
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: "#000",
            margin: 4,
            display: "block",
            transition: "opacity 0.15s",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: "#000",
            margin: 4,
            display: "block",
            transition: "transform 0.2s",
            transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none",
          }}
        />
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: open ? "block" : "none",
          position: "absolute",
          top: 56,
          left: 0,
          background: "#fff",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          borderRadius: 8,
          minWidth: 160,
          zIndex: 50,
        }}
      >
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "10px 16px", color: "#000", textDecoration: "none" }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
