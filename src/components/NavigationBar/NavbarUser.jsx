import { useContext, useState } from "react";
import { UserDataContext } from "../Profile/UserDataProvider";

function NavbarUser() {
  const { userData } = useContext(UserDataContext)

  const profilePicture = localStorage.getItem('profilePicture') ? localStorage.getItem('profilePicture') : userData ? userData.foto : null

  const isAuth = localStorage.getItem('token')

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium focus:outline-none z-50"
      >
        {!profilePicture ? <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 z-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
          :
          <img src={profilePicture} alt="" className="rounded-full min-w-[45px] min-h-[45px] w-[45px]" />
        }
      </button>

      {isOpen && (
        <>
          {isAuth && (
            <div className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-200 rounded-md shadow-lg">
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:duration-500 z-50"
              >
                Perfil
              </a>
              <a
                href="/login"
                className="block px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-200 hover:duration-500 z-50"
                onClick={() => {
                  localStorage.removeItem('token')
                  localStorage.removeItem('profilePicture')
                }}
              >
                Cerrar sesión
              </a>
            </div>
          )}

          {!isAuth && (
            <div className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-200 rounded-md shadow-lg">
              <a
                href="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:duration-500 z-50"
              >
                Iniciar sesión
              </a>
              <a
                href="/register"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:duration-500 z-50"
              >
                Registrarse
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NavbarUser;
