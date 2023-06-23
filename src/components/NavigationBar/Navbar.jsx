import React, { useState } from "react";
import NavbarSearch from "./NavbarSearch";
import NavbarUser from "./NavbarUser";
import HommiesLogo from "../../assets/hommiesPublic.png"

export const Navbar = () => {

  const activePath = window.location.pathname

  return (

    // Contenedor navbar 
    <nav className="bg-gray-800 sticky top-0 z-[9999] flex items-center p-1">

      {/* Contenedor para reducir el ancho máximo de la navbar */}
      {/* <div className="max-w-7xl h-full mx-auto z-50 flex items-center border-2 border-red-500"> */}

      {/* Logo de la app */}
      <img
        className="max-h-[65px] cursor-pointer"
        src={HommiesLogo}
        alt="Hommies"
        onClick={() => window.location.href = '/'}
      />

      {/* Opciones de la navbar */}
      <div className="hidden md:block h-full">  {/* Contenedor que muestra u oculta las opciones */}
        <div className="flex items-center">
          <a
            href="/"
            className={`hover:text-white ${activePath === '/' ? 'text-white bg-gray-700 rounded-md' : 'text-gray-300 rounded-md hover:bg-gray-700'} px-2 py-2 mx-1 text-sm font-medium`}
          >
            Inicio
          </a>

          <a
            href="/dashboard"
            className={`hover:text-white ${activePath === '/dashboard' ? 'text-white bg-gray-700 rounded-md' : 'text-gray-300 rounded-md hover:bg-gray-700'} px-2 py-2 mx-1  text-sm font-medium`}
          >
            Dashboard
          </a>

          <a
            href="/calendar"
            className={`hover:text-white ${activePath === '/calendar' ? 'text-white bg-gray-700 rounded-md' : 'text-gray-300 rounded-md hover:bg-gray-700'} px-2 py-2 mx-1  text-sm font-medium`}
          >
            Calendario
          </a>

          <a
            href="/contact"
            className={`hover:text-white ${activePath === '/contact' ? 'text-white bg-gray-700 rounded-md' : 'text-gray-300 rounded-md hover:bg-gray-700'} px-2 py-2 mx-1  text-sm font-medium`}
          >
            DevTeam
          </a>
        </div>
      </div>
      {/* Fin opciones de la navbar */}


      {/* Barra de búsqueda y foto de perfil */}
      <div className='md:pl-8 flex-grow flex items-center justify-end'>
        <NavbarSearch />
        <NavbarUser />
      </div>


      {/* Botón controles de la navbar en móvil */}
      <button
        type="button"
        className="bg-gray-900 md:hidden flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700"
        aria-expanded="false"
        onClick={() => {
          const mm = document.getElementById('mobile-menu')
          console.log(mm)
          mm.hidden ? mm.hidden = false : mm.hidden = true
        }}
      >
        {/* Icono del botón */}
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* </div> */}


      {/* Ppciones de la navbar en móvil */}
      <div className="bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 z-[500] absolute right-0 left-0 text-center top-[70px]" id="mobile-menu" hidden={true} >
        <a
          href="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Inicio
        </a>

        <a
          href="/dashboard"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Dashboard
        </a>

        <a
          href="/calendar"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Calendario
        </a>

        <a
          href="/contact"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          DevTeam
        </a>
      </div>
    </nav>

  );
};
