"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú en pantallas pequeñas
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[rgba(29,29,29,0.8)] h-20 flex items-center justify-between p-8 fixed w-full z-50">
      <Link href="/">
        <Image src="/LogoPortfolio.svg" alt="Personal logo" width={100} height={60} />
      </Link>

      {/* Icono de menú en pantallas pequeñas */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Menú de navegación */}
      <div className={`md:flex ${isMenuOpen ? "flex-col" : "hidden"} md:flex-row items-center gap-8`}>
        <ul className="flex flex-col md:flex-row gap-8 text-cuartiaryColor p-8 md:p-0">
          <li className="py-4 md:py-0 px-2">
            <Link href="/skills">Habilidades</Link>
          </li>
          <li className="py-4 md:py-0 px-2">
            <Link href="/projects">Proyectos</Link>
          </li>
          <li className="py-4 md:py-0 px-2">
            <Link href="/aboutMe">Sobre Mi</Link>
          </li>
          <li className="py-4 md:py-0 px-2">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
