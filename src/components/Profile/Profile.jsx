export default function Profile() {
  return (
    <>
      <div className="py-5 px-10">
        <div className="w-full h-[500px] border-2 border-indigo-400 shadow-2xl rounded-3xl items-center justify-center px-10 py-4">
          <div className="md:flex w-full">
            <div className="w-1/2 h-[460px] rounded-3xl border-2 bg-slate-200 py-5">
              <div className="flex flex-col items-center py-16">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-24 h-24 pt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <p className="text-indigo-500 text-center pt-4 font-bold text-xl">
                  Nombre de usuario
                </p>
                <p className="text-black text-center pt-4 font-bold text-base">
                  Nombre completo
                </p>
                <button className="bg-indigo-500 rounded-xl mt-3 w-1/3 font-bold text-white text-sm hover:w-2/3 hover:duration-100 "
                  onClick={() => window.location.href = '/profile/config'}
                >
                  Editar perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};