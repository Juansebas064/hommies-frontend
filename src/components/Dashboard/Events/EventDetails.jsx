import getEventStatus from "../../../utils/getEventStatus.js"
import { clockSVG, calendarSVG, close } from "../../../utils/svgs"

export default function EventDetails({ selectedEvent, setSelectedEvent, eventStatus }) {

  if (!selectedEvent) {
    return null
  }

  const status = getEventStatus(selectedEvent.fecha.substring(0, 10), selectedEvent.hora_inicio.substring(0, 5), selectedEvent.hora_final.substring(0, 5))

  return (

    // Cuadro de diálogo modal
    <div className="fixed z-20 bg-[rgba(0,0,0,0.2)] h-full w-full left-0 top-0 overflow-auto flex justify-center items-center">

      {/* Card */}
      <div className="z-30 bg-white rounded-[14px] relative min-w-[250px] max-w-[350px] sm:max-w-[600px] max-h-[50vh] sm:max-h-[60vh] px-3 sm:px-7 flex-grow overflow-auto">

        {/* Botón cerrar */}
        <span
          onClick={() => {
            setSelectedEvent(null)
          }}
          className="text-base font-bold absolute top-2 right-2 rounded-3xl cursor-pointer hover:scale-[0.8] hover:transition-all duration-500 p-1 hover:bg-red-500">
          {close(22)}
        </span>

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
          <p className={
            `${eventStatus[status].color} mb-8 text-center`
          }>
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
            <span className="align-middle">{`${selectedEvent.fecha.substring(0, 10)}`}</span>
          </p>

          {/* Hora del evento */}
          <p className="text-sm text-center lg:text-center">
            <span className="mr-[6px]">{clockSVG(18)}</span>
            <span className="align-end">{`${selectedEvent.hora_inicio.substring(0, 5)} - ${selectedEvent.hora_final.substring(0, 5)}`}</span>
          </p>

        </div>
      </div>
    </div>
  )
}



