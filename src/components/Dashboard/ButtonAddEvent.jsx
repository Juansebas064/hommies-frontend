import Datepicker from "tailwind-datepicker-react"
import { useState } from "react";
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
  
  
  const [currentDate, setCurrentDate] = useState("");

  const setDate = () => {
    var tempDate = new Date()
    var year =+ tempDate.getFullYear().toLocaleString();
    var month =+ tempDate.getDate().toLocaleString();
    var day =+ tempDate.getDay().toLocaleString();

    return year+"-"+month+"-"+day
 
  }
  
  
  const optionsDatepick = {
    title: "Selecciona una fecha",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-200 dark:bg-gray-200",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-300",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Anterior</span>,
      next: () => <span>Siguiente</span>,
    },
    datepickerClassNames: "top-4 z-[405] bg-gray-200 ",
    defaultDate: new Date("2023-01-01"),
    language: "en",
  }

  const [show, setShow] = useState(false)
	const handleChangeDate = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}

  const setLabelDate = (date) => {
    setNewEventDate(date);
  };

  const sendForm = () => {};

  return (
    <>
      <button
        className="rounded-3xl w-[40px] h-[40px] absolute bottom-4 left-4 z-[400] bg-indigo-600 text-white p-0 text-4xl font-bold hover:scale-125 transition-transform ease-in-out duration-500"
        onClick={handleToggle}
      >
        <svg
          fill="#ffffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-183.73 -183.73 826.78 826.78"
          xmlSpace="preserve"
          stroke="#ffffff"
          strokeWidth="45.9325"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193 c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181 c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267 V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282 C441.339,189.487,459.308,207.471,459.319,229.668z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
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
                id="inputName"
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
                  id="inputUbi"
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
              <div>
                    < Datepicker options={optionsDatepick} onChange={handleChangeDate} show={show} setShow={handleClose} className="bg-gray-200" />
                </div>
              {/*
              <input
                type="text"
                placeholder=""
                className="w-[88%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                disabled={true}
                id="inputDate"
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
      */}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
