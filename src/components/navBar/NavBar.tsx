"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmpire, setIsEmpire] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleIconClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsEmpire(!isEmpire);
      setIsSpinning(false);
    }, 1500);
  };


  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[rgba(29,29,29,0.8)] h-10 flex items-center justify-between p-8 fixed w-full z-50">
      <button
        onClick={handleIconClick}
        className={`transition-transform duration-500 ${isSpinning ? "animate-spin-fast" : ""}`}
      >
        <Image
          src={isEmpire ? "/Empire.svg" : "/OrderJedi.svg"}
          alt="Personal logo"
          width={60}
          height={60}
        />
      </button>

      <Link href="/">
        <Image src="/LogoPortfolio.svg" alt="Personal logo" width={100} height={60} />
      </Link>


      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Icono de menú */}
        <button className="text-white">
          <span className="material-icons">Menu</span>
        </button>

        {/* Menú desplegable */}
        <div
          className={`absolute top-full right-0 w-35 bg-[rgba(29,29,29,0.95)] flex-col gap-4 p-4 rounded-md shadow-lg transition-transform duration-300 ${isMenuOpen ? "flex" : "hidden"
            }`}
        >
          <ul className="flex flex-col gap-4 text-cuartiaryColor">
            <li>
              <Link href="/skills">Habilidades</Link>
            </li>
            <li>
              <Link href="/projects">Proyectos</Link>
            </li>
            <li>
              <Link href="/aboutMe">Sobre Mi</Link>
            </li>
            <li>
              <Link href="/contactMe">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
