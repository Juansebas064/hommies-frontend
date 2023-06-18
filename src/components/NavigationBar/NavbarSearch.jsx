import React, { useState } from "react";

function NavbarSearch() {

  return (
    <div className="flex relative flex-grow md:max-w-xs ml-1">
      <svg
        className="absolute self-center ml-3 h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Buscar..."
        className="pl-10 pr-4 py-2 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"

      />
    </div>
  );
}

export default NavbarSearch;
