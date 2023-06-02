import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-gray-100">
              Hommies
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-100">
              Red social de eventos.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-600 px-0.5 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <svg width="40" height="40" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </button>
              
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-indigo-200 text-sm font-bold mb-2">
                  ENLACES DE INTERES
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-100 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://youtu.be/fPaUyJ4oDyc?t=36"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    >
                      Desarrollo
                    </a>
                  </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 border-blueGray-300">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-100 font-semibold py-1">
                Copyright © 2023. Proyecto creado por - Grupo 3 - Desarrollo de Software 1.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
