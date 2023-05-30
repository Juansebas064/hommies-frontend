import getEventStatus from "../../utils/getEventStatus.js"

export default function EventDetails({ selectedEvent, setSelectedEvent, eventStatus, calendarSVG, clockSVG }) {

  if (!selectedEvent) {
    return null
  }

  return (
    <div className="absolute bg-white text-gray-800 h-full w-full mt-2">
      <div className="relative border-[2px] rounded-[14px] py-6 px-[8px] border-indigo-500 mx-3 mb-5 lg:mx-0 grid grid-cols-2">
        <span
          onClick={() => {
            setSelectedEvent(null)
            document.getElementById('event-list').hidden = false
          }}
          className="text-base font-bold absolute bg-red-500 text-white top-3 right-3 py-[1px] px-[8px] rounded-3xl cursor-pointer hover:bg-red-400">
          X
        </span>
        {/* Nombre del evento */}
        <p className="text-base font-bold text-center col-span-2 mb-1">
          {`${selectedEvent.nombre}`}
        </p>

        {/* Descripción del evento */}
        <p className="text-center col-span-2 mb-6">
          {`${selectedEvent.descripcion}`}
        </p>

        <p className="text-center font-bold">Estado</p>
        <p className="text-center font-bold">Temática</p>

        {/* Estado del evento */}
        <p className={
          `${eventStatus[getEventStatus(selectedEvent.fecha.substring(0, 10), selectedEvent.hora_inicio.substring(0, 5), selectedEvent.hora_final.substring(0, 5))].color} mb-8 text-center`
        }>
          {`● ${eventStatus[getEventStatus(selectedEvent.fecha.substring(0, 10), selectedEvent.hora_inicio.substring(0, 5), selectedEvent.hora_final.substring(0, 5))].text}`}
        </p>
        {/* Temáticas */}
        <p className="text-center">Temática</p>

        <p className="text-center font-bold">Fecha</p>
        <p className="text-center font-bold">Horario</p>

        {/* Fecha del evento */}
        <p className="text-sm text-center lg:text-center">
          <span className="mr-[6px]">{calendarSVG}</span>
          <span className="align-middle">{`${selectedEvent.fecha.substring(0, 10)}`}</span>
        </p>
        {/* Hora del evento */}
        <p className="text-sm text-center lg:text-center">
          <span className="mr-[6px]">{clockSVG}</span>
          <span className="align-end">{`${selectedEvent.hora_inicio.substring(0, 5)} - ${selectedEvent.hora_final.substring(0, 5)}`}</span>
        </p>
      </div>
    </div>
  )
}