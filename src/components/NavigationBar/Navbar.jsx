import React, { useState } from "react";
import NavbarSearch from "./NavbarSearch";
import NavbarUser from "./NavbarUser";
import HommiesLogo from "../../assets/hommiesPublic.png"

export const Navbar = () => {

  const activePath = window.location.pathname

  return (
    <nav className="bg-gray-800 sticky top-0 left-0 right-0 z-50 min-w-min">
      <div className="max-w-7xl mx-auto px-4 z-10">
        <div className="flex justify-between items-center h-[10vh]">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-14 w-14"
                src={HommiesLogo}
                alt="Hommies"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-3 flex items-baseline flex-shrink">
                <a
                  href="/"
                  className={`hover:text-white ${activePath === '/' ? 'text-white bg-gray-700 rounded-md' : 'text-gray-300 rounded-md hover:bg-gray-700'} px-2 py-2 mx-1  text-sm font-medium`}
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
          </div>
          <div className='md:pl-8 flex items-center flex-grow justify-end'>
            <NavbarSearch />
            <NavbarUser isAuth={true} />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              aria-expanded="false"
              onClick={() => {
                const mm = document.getElementById('mobile-menu')
                console.log(mm)
                mm.hidden ? mm.hidden = false : mm.hidden = true
              }}
            >
              <span className="sr-only">Open main menu</span>
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
              {/* Icono del botón */}
            </button>
          </div>
        </div>
      </div>

      {/* Menú para pantallas pequeñas */}
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-[500]" id="mobile-menu" hidden={true} >
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
