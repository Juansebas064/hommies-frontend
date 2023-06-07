import { useState } from "react";
import getEventStatus from "../../../utils/getEventStatus.js";
import { clockSVG, calendarSVG, close, ellipsis } from "../../../utils/svgs";

export default function EventDetails({
  selectedEvent,
  setSelectedEvent,
  eventStatus,
}) {
  if (!selectedEvent) {
    return null;
  }

  const status = getEventStatus(
    selectedEvent.fecha.substring(0, 10),
    selectedEvent.hora_inicio.substring(0, 5),
    selectedEvent.hora_final.substring(0, 5)
  );

  const [modifyEvent, setModifyEvent] = useState(false);

  return (
    // Cuadro de diálogo modal
    <div className="fixed z-20 bg-[rgba(0,0,0,0.2)] h-full w-full left-0 top-0 overflow-auto flex justify-center items-center">
      {/* Card */}
      <div className="z-30 bg-white rounded-[14px] relative min-w-[250px] max-w-[350px] sm:max-w-[600px] max-h-[50vh] sm:max-h-[60vh] px-3 sm:px-7 flex-grow overflow-auto">
        {/* Botón cerrar */}
        <span
          onClick={() => {
            setSelectedEvent(null);
          }}
          className="text-base font-bold absolute top-2 right-2 rounded-3xl cursor-pointer hover:scale-[0.8] hover:transition-all duration-500 p-1 hover:bg-red-500"
        >
          {close(22)}
        </span>

        <span
          onClick={() => {
            setModifyEvent(!modifyEvent);
          }}
          className="text-base font-bold absolute top-2 left-2 rounded-3xl cursor-pointer hover:scale-[0.8] hover:transition-all duration-500 p-1 hover:bg-indigo-400"
        >
          {ellipsis(26)}
        </span>

        {modifyEvent && (
          <div className="absolute top-7 left-4 z-50 mt-2 bg-white divide-y divide-gray-200 rounded-md shadow-lg overflow-hidden">
            <button className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-indigo-400 hover:duration-500 z-50">
              Modificar
            </button>
            <button className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-red-600 hover:duration-500 hover:text-white z-50">
              Eliminar
            </button>
          </div>
        )}



        {/* Contenido del evento */}
        <div className="py-6 px-[8px] grid grid-cols-2">
          {/* Nombre del evento */}
          <p className="text-lg font-bold text-center col-span-2 mb-3">
            {`${selectedEvent.nombre}`}
          </p>

          {/* Descripción del evento */}
          <p className="text-center col-span-2 mb-6">
            {`${selectedEvent.descripcion}`}
          </p>

          {/* Encabezados */}
          <p className="text-center font-bold">Estado</p>
          <p className="text-center font-bold">Temática</p>

          {/* Estado del evento */}
          <p className={`${eventStatus[status].color} mb-8 text-center`}>
            {`● ${eventStatus[status].text}`}
          </p>

          {/* Temáticas */}
          <p className="text-center">Temáticas</p>

          {/* Encabezados */}
          <p className="text-center font-bold">Fecha</p>
          <p className="text-center font-bold">Horario</p>

          {/* Fecha del evento */}
          <p className="text-sm text-center lg:text-center">
            <span className="mr-[6px]">{calendarSVG(20)}</span>
            <span className="align-middle">{`${selectedEvent.fecha.substring(
              0,
              10
            )}`}</span>
          </p>

          {/* Hora del evento */}
          <p className="text-sm text-center lg:text-center">
            <span className="mr-[6px]">{clockSVG(18)}</span>
            <span className="align-end">{`${selectedEvent.hora_inicio.substring(
              0,
              5
            )} - ${selectedEvent.hora_final.substring(0, 5)}`}</span>
          </p>


          <button className="flex h-12 font-bold text-white rounded-3xl mt-6 bg-indigo-500 flex-grow items-center text-center justify-center overflow-auto col-span-2 hover:h-15 hover:bg-indigo-400" onClick>
          Quiero unirme
          </button>

        </div>

        <details className="block w-full max-w-xs mx-auto mb-7 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <summary>¿Buscas a alguien?</summary>
              <p>Smith</p>
              <p>Casariz</p>
        </details>
        </div>

        

      </div>
    
  );
}
