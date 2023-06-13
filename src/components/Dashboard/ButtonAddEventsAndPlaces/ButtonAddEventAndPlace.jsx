import { useState } from "react";
import AddEvent from "./AddEvent";
import AddPlaces from "./AddPlaces";

export default function ButtonAddEventAndPlace({
  isToggled,
  isToggledMarker,
  setIsToggled,
  setIsToggledMarker,
  placeName,
  setPlaceName,
  coord
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

  const [activeTab, setActiveTab] = useState("events");

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

        // Card con los controles y el contenido
        <div className="rounded-xl min-w-[250px] max-h-[40vh] sm:max-h-[50vh] lg:max-h-[60vh] sm:w-[450px] absolute bottom-[15%] left-5 right-5 sm:left-12 z-[9999] bg-gray-200 shadow-md before:duration-200 items-center justify-center px-5 py-1 overflow-y-scroll">
          <div className="flex flex-col -mx-3">

            {/* Contenedor de botones crear evento y crear lugar */}
            <div className="flex h-8 font-bold text-base rounded-[14px] overflow-hidden z-[9999]">
              <button
                className={`flex-grow py-1 border-b-gray-200 z-[9999] ${activeTab === "events"
                  ? "bg-indigo-500 text-white rounded-[14px]"
                  : "bg-gray-200 "
                  }`}
                onClick={() => setActiveTab("events")}
              >
                Crear eventos
              </button>
              <button
                className={`flex-grow py-1 border-b-gray-200 ${activeTab === "places"
                  ? "bg-indigo-500 text-white rounded-[14px]"
                  : "bg-gray-200 "
                  }`}
                onClick={() => setActiveTab("places")}
              >
                Crear lugares
              </button>
            </div>
            <div className="overflow-auto">
              {activeTab == "events" ? (
                <AddEvent setIsToggled={setIsToggled} />
              ) : (
                <AddPlaces
                  handleToggleMarker={handleToggleMarker}
                  placeName={placeName}
                  coord={coord}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
