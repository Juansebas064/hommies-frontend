import { useEffect, useState } from "react";
import getEventStatus from "../../../utils/getEventStatus"
import { clockSVG, calendarSVG } from "../../../utils/svgs"
import EventDetails from "./EventDetails";
import { fetchEvents } from "../../../utils/fetchEvents";


export default function EventsList({ activeFilter }) {

  // Estados: 
  // Mostrar detalles del evento
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Estado para eventos
  const [events, setEvents] = useState(null)

  // Lista de eventos filtrada
  const [filteredEvents, setFilteredEvents] = useState(null)
  // Fin declaración de estados


  // Funciones y utilidades
  // Detalles del evento al hacer click sobre él
  function handleShowEventDetails(evento) {
    setSelectedEvent(evento)
  }

  // Crear lista de eventos filtrada
  function createFilteredEventsList() {
    if (activeFilter !== 'todos') {
      if (['terminado', 'en_progreso', 'sin_empezar'].includes(activeFilter)) {
        const filteredList = events.filter((evento) => (
          getEventStatus(evento.fecha.substring(0, 10), evento.hora_inicio.substring(0, 5), evento.hora_final.substring(0, 5)) === activeFilter
        ))
        setFilteredEvents(filteredList)
      }
    } else {
      setFilteredEvents(events)
    }
  }

  // La lista filtrada se creará cuando se actualice el estado activeFilter
  useEffect(() => {
    createFilteredEventsList()
  }, [events, activeFilter])

  useEffect(() => {
    async function eventsResponse() {
      const eventsResponse = await fetchEvents()
      setEvents(eventsResponse)
      setFilteredEvents(eventsResponse)
    }
    eventsResponse()
  }, []);

  return (
    events ?
      <>
        <div className="relative flex flex-col items-center text-sm lg:px-0 overflow-hidden">
          <ul className="w-full sm:grid sm:grid-cols-2 sm:gap-x-3 lg:block lg:overflow-y-auto h-auto" id="event-list">
            {filteredEvents.map((evento) => <EventItem evento={evento} key={evento.codigo_evento} handleShowEventDetails={handleShowEventDetails} />)}
          </ul>
        </div>
        {/* Detalles del evento al hacer click sobre uno */}
        <EventDetails selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} eventStatus={eventStatus} />
      </>
      :
      <div className="flex-grow flex flex-col items-center justify-center text-[30px] min-h-[150px] text-sm">
        <p className="text-center">No hay eventos para mostrar</p>
      </div>
  )
}

function EventItem({ evento, handleShowEventDetails }) {

  // Variable para guardar estado del evento
  const status = getEventStatus(evento.fecha.substring(0, 10), evento.hora_inicio.substring(0, 5), evento.hora_final.substring(0, 5))

  return (
    <li
      className="hover:cursor-pointer text-gray-800 hover:outline-indigo-500 outline outline-offset-[-4px] outline-[2px] rounded-[20px] outline-gray-300 py-3 px-[8px] my-3 lg:mx-1 lg:hover:scale-[1.02] lg:transition-transform lg:ease-in-out lg:duration-150 grid grid-cols-2"
      onClick={() => handleShowEventDetails(evento)}>
      {/* Nombre del evento */}
      <p className="text-base font-bold text-center col-span-2 mb-1">
        {`${evento.nombre}`}
      </p>
      {/* Estado del evento */}
      <p className={
        `${eventStatus[status].color} mb-1 text-center`
      }>
        {`● ${eventStatus[status].text}`}
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
        <span className="mr-[6px] align-baseline">{clockSVG(18)}</span>
        <span className="align-baseline">{`${evento.hora_inicio.substring(0, 5)} - ${evento.hora_final.substring(0, 5)}`}</span>
      </p>
    </li>
  )
}

// Clases y texto para mostrar los estados de los eventos
const eventStatus = {
  terminado: {
    text: 'Terminado',
    color: 'text-gray-500'
  },
  en_progreso: {
    text: 'En progreso',
    color: 'text-green-500'
  },
  sin_empezar: {
    text: 'Sin empezar',
    color: 'text-blue-500'
  }
}