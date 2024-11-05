import Link from "next/link"
import React from "react"
import Image from "next/image"



const NavBar: React.FC = () => {
  return (
    <nav className='bg-[rgba(29,29,29,0.8)] h-14 pl-8 flex items-center justify-between p-8 fixed w-full z-50'>
      <ul className='md:flex md:bg-none mt-80 md:mt-0 gap-8 pr-8 text-cuartiaryColor p-8 md:p-0 '>
        <li className='md:bg-none  py-4 md:py-0 px-2'>
          <Link href="/skills"> Habilidades</Link>
        </li>
      </ul>
      <ul className='md:flex md:bg-none mt-80 md:mt-0 gap-8 pr-8 text-cuartiaryColor p-8 md:p-0 '>
        <li className='md:bg-none  py-4 md:py-0 px-2'>
          <Link href="/projects">Proyectos</Link>
        </li>
      </ul>
      <Link href="/">
        <Image src="/LogoPortfolio.svg" alt="Personal logo" width={100} height={60}></Image>
      </Link>
      <ul className='md:flex md:bg-none mt-80 md:mt-0 gap-8 pr-8 text-cuartiaryColor p-8 md:p-0 '>
        <li className='md:bg-none  py-4 md:py-0 px-2'>
          <Link href="/aboutMe">Sobre Mi</Link>
        </li>
      </ul>
      <ul className='md:flex md:bg-none mt-80 md:mt-0 gap-8 pr-8 text-cuartiaryColor p-8 md:p-0 '>
        <li className='md:bg-none  py-4 md:py-0 px-2'>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar