"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para abrir el menú al pasar el mouse y cerrarlo al salir
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[rgba(29,29,29,0.8)] h-10 flex items-center justify-between p-8 fixed w-full z-50">
      <Link href="/">
        <Image src="/LogoPortfolio.svg" alt="Personal logo" width={100} height={60} />
      </Link>

      {/* Contenedor del botón y menú desplegable */}
      <div
        className="relative md:hidden"
        onMouseEnter={handleMouseEnter} // Abre el menú al pasar el mouse
        onMouseLeave={handleMouseLeave} // Cierra el menú al salir del área
      >
        {/* Icono de menú */}
        <button className="text-white">
          <span className="material-icons">menu</span>
        </button>

        {/* Menú desplegable */}
        <div className={`absolute top-full right-0 w-35 bg-[rgba(29,29,29,0.95)] flex-col item-center gap-4 p-4 rounded-md shadow-lg transition-transform duration-300 ${isMenuOpen ? "flex" : "hidden"}`}>
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
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú en pantallas grandes */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-end md:gap-8 text-cuartiaryColor">
        <Link href="/skills">Habilidades</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/aboutMe">Sobre Mi</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
};

export default NavBar;
