import React from "react";

const Footer = () => {
  return (
    // Contenedor del footer
    <footer className="absoulte bottom-0 bg-gray-800 p-2 py-6 ">

      {/* Contenedor para limitar el ancho del contenido del footer */}
      <div className="flex justify-center min-[506px]:justify-between flex-wrap min-[824px]:flex-nowrap items-center text-left lg:text-left w-full "> {/* [&>div]:border-2 [&>ul]:border-2 */}

        {/* Contenedor título de la app y logo de GitHub */}
        <div className="flex items-center px-4 flex-shrink-0 text-center min-[506px]:text-left">
          <div className="inline-block">
            <h4 className="text-3xl fonat-semibold text-gray-100">
              Hommies
            </h4>
            <h5 className="text-lg text-gray-100">
              Red social de eventos.
            </h5>
          </div>
          <button
            className="bg-white text-lightBlue-600 px-[2.6px] pb-[2px] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mx-2"
            type="button"
          >
            <svg 
            width="40" 
            height="40" 
            role="img" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </button>
        </div>

        {/* Derechos de autor */}
        <div className="text-sm text-center w-full text-gray-100 font-semibold mx-5 flex-shrink order-last min-[824px]:order-[2] mt-6 min-[824px]:my-0">
          Copyright © 2023. Proyecto creado por - Grupo 3 - Desarrollo de Software 1.
        </div>

        {/* Enlaces de interés */}
        <ul className="text-center min-[824px]:text-right flex-shrink-0 order-2 min-[824px]:order-[3] mt-6 min-[506px]:mt-0 mr-3">
          <li className="uppercase text-indigo-200 text-sm font-bold">
            ENLACES DE INTERES
          </li>
          <li>
            <a
              className="text-gray-100 hover:text-gray-400 font-semibold text-sm"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-100 hover:text-gray-400 font-semibold block text-sm"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              Desarrollo
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
