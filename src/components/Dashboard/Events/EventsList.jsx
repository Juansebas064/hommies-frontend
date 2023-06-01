import { useState } from "react";
import getEventStatus from "../../../utils/getEventStatus"
import { clockSVG, calendarSVG } from "../../../utils/svgs"
import EventDetails from "./EventDetails";


export default function EventsList({ events }) {

  // Estados: 
  // Mostrar detalles del evento
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Detalles del evento al hacer click sobre él
  function handleShowEventDetails(evento) {
    document.getElementById('event-list').hidden = true
    setSelectedEvent(evento)
  }

  // Clases y texto para mostrar los estados de los eventos
  const eventStatus = {
    past: {
      text: 'Terminado',
      color: 'text-gray-500'
    },
    ongoing: {
      text: 'En progreso',
      color: 'text-green-500'
    },
    not_started: {
      text: 'Sin empezar',
      color: 'text-blue-500'
    }
  }

  return (
    <>
      <ul className="w-full sm:grid sm:grid-cols-2 lg:block" id="event-list">
        {events.rows.map((evento) => (
          <li
            key={evento.codigo_evento}
            className="hover:cursor-pointer hover:border-indigo-500 text-gray-800 border-[2px] rounded-[14px] border-gray-300 py-3 px-[8px] my-3 mx-3 lg:mx-1 lg:hover:scale-[1.03] lg:transition-transform lg:ease-in-out lg:duration-150 grid grid-cols-2"
            onClick={() => handleShowEventDetails(evento)}>
            {/* Nombre del evento */}
            <p className="text-base font-bold text-center col-span-2 mb-1">
              {`${evento.nombre}`}
            </p>
            {/* Estado del evento */}
            <p className={
              `${eventStatus[getEventStatus(evento.fecha.substring(0, 10), evento.hora_inicio.substring(0, 5), evento.hora_final.substring(0, 5))].color} mb-1 text-center`
            }>
              {`● ${eventStatus[getEventStatus(evento.fecha.substring(0, 10), evento.hora_inicio.substring(0, 5), evento.hora_final.substring(0, 5))].text}`}
            </p>
            {/* Temáticas */}
            <p className="text-center">Temáticas</p>
            {/* Fecha del evento */}
            <p className="text-sm text-center lg:text-center">
              <span className="mr-[6px]">{calendarSVG(20)}</span>
              <span className="align-middle">{`${evento.fecha.substring(0, 10)}`}</span>
            </p>
            {/* Hora del evento */}
            <p className="text-sm text-center lg:text-center">
              <span className="mr-[6px]">{clockSVG(20)}</span>
              <span className="align-end">{`${evento.hora_inicio.substring(0, 5)} - ${evento.hora_final.substring(0, 5)}`}</span>
            </p>
          </li>
        ))}
      </ul>
      {/* Detalles del evento al hacer click sobre uno */}
      <EventDetails selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} eventStatus={eventStatus} calendarSVG={calendarSVG} clockSVG={clockSVG} />
    </>
  )
}
