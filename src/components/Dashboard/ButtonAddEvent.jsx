export default function ButtonAddEvent({ isToggled, isToggledMarker, setIsToggled, setIsToggledMarker, placeName, setPlaceName }) {
  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (!isToggled) {
      setPlaceName("Selecciona una ubicación")
    }
  };

  const handleToggleMarker = () => {
    setIsToggledMarker(!isToggledMarker);
  };
  return (
    <>
      <button
        className="rounded-3xl w-[40px] h-[40px] absolute bottom-4 left-4 z-[400] bg-indigo-600 text-white p-0 text-4xl font-bold hover:scale-125 hover:duration-200"
        onClick={handleToggle}
      >
        +
      </button>

      {
        isToggled && (
          <div className="rounded-xl w-[350px] h-[350px] absolute bottom-20 left-4 z-[400] bg-gray-200 shadow-md before:duration-200 items-center justify-center px-3 py-1">
            <div className="flex flex-col -mx-3">
              <div className="w-full px-3 mb-4 mt-3 items-center">
                <div className="w-full items-center text-center justify-center pb-3">
                  <label className="font-semibold text-indigo-700 text-sm shadow-lg shadow-indigo-300">
                    Crear una actividad
                  </label>
                </div>

                <label className="mb-2 text-xs font-semibold px-1">
                  Ubicación
                </label>
                <input
                  type="text"
                  placeholder={placeName}
                  className="w-[90%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  disabled={true}
                />
                <button className="absolute w-[10%] rounded-md border-2 border-gray-200 outline-none hover:border-indigo-500 focus:border-indigo-500 hover:duration-200" onClick={handleToggleMarker}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}