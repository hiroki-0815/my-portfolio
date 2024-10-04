"use client";

import Link from "next/link";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  const handleScrollToSection = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed z-10 top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link
          href="#home"
          className={`nav-item ${
            activeLink === "Home" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleScrollToSection("home")}
        >
          Home
        </Link>
        <Link
          href="#projects"
          className={`nav-item ${
            activeLink === "Projects" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleScrollToSection("projects")}
        >
          Projects
        </Link>
        <Link
          href="#about"
          className={`nav-item ${
            activeLink === "About" ? "bg-white text-gray-900" : ""
          }`}
          onClick={() => handleScrollToSection("about")}
        >
          About
        </Link>
      </nav>
    </div>
  );
};
