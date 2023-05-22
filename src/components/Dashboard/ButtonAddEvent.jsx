export default function ButtonAddEvent({
  isToggled,
  isToggledMarker,
  isToggledDate,
  setIsToggled,
  setIsToggledMarker,
  setIsToggledDate,
  placeName,
  setPlaceName,
  selectedDate,
  setSelectedDate,
  newEventDate,
  setNewEventDate,
}) {
  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (!isToggled) {
      setPlaceName("Selecciona una ubicación");
    }
  };

  const handleToggleMarker = () => {
    setIsToggledMarker(!isToggledMarker);
  };

  const handleToggleDate = () => {
    setIsToggledDate(!isToggledDate);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const setLabelDate = (date) => {
    setNewEventDate(date)
  }

  return (
    <>
      <button
        className="rounded-3xl w-[40px] h-[40px] absolute bottom-4 left-4 z-[400] bg-indigo-600 text-white p-0 text-4xl font-bold hover:scale-125 hover:duration-200"
        onClick={handleToggle}
      >
        +
      </button>

      {isToggled && (
        <div className="rounded-xl w-[350px] h-[350px] absolute bottom-20 left-4 z-[400] bg-gray-200 shadow-md before:duration-200 items-center justify-center px-3 py-1">
          <div className="flex flex-col -mx-3">
            <div className="w-full px-3 mb-4 mt-3 items-center relative">
              <div className="w-full items-center text-center justify-center pb-3">
                <label className="font-semibold text-indigo-700 text-sm shadow-lg shadow-indigo-300">
                  Crear una actividad
                </label>
              </div>

              <label className="mb-2 text-xs font-semibold px-1">
                Nombre del evento
              </label>
              <input
                type="text"
                placeholder="Nombre del evento"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              />
              <label className="mb-2 text-xs font-semibold px-1">
                Ubicación
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder={placeName}
                  className="w-[88%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  disabled={true}
                />
                <button
                  className="relative w-[10%] rounded-md border-2 border-gray-200 outline-none hover:border-indigo-500 focus:border-indigo-500 hover:duration-200"
                  onClick={handleToggleMarker}
                >
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
              <label className="mb-2 text-xs font-semibold px-1">Fecha</label>
              <input
                type="text"
                placeholder={newEventDate}
                className="w-[88%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                disabled={true}
              />
              <button
                className="absolute w-[10%] rounded-md border-2 border-gray-200 outline-none hover:border-indigo-500 focus:border-indigo-500 hover:duration-200"
                onClick={handleToggleDate}
              >
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </button>
              {isToggledDate && (
                <div className="rounded-xl absolute right-10 bottom-10 z-[402] bg-gray-200 shadow-lg items-center justify-center px-3 py-1 border-indigo-200 outline-none border-2">
                  <div className="container mx-auto p-4">
                    <h1 className="text-xs font-bold ">Calendario</h1>
                    <div className="grid grid-cols-7 ">
                      {Array.from({ length: 31 }, (_, index) => index + 1).map(
                        (day) => (
                          <div
                            key={day}
                            className={`border p-2 cursor-pointer ${selectedDate === day
                              ? "bg-blue-500 text-white"
                              : ""
                              }`}
                            onClick={() => handleDateClick(day)}
                          >
                            {day}
                          </div>
                        )
                      )}
                    </div>
                    {selectedDate && (
                      <p className="mt-4">
                        Fecha seleccionada: {formatDate(selectedDate)}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
