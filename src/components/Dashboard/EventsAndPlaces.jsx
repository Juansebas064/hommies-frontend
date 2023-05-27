import axios from "axios";
import { useState, useEffect } from "react";

export default function EventsAndPlaces() {

  // Estados: 
  // Actividades en la ciudad
  const [events, setEvents] = useState(null);

  // Pestaña activa (eventos o lugares)
  const [activeTab, setActiveTab] = useState('events')

  // Realizar la solicitud al backend al renderizar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Hacer la petición de la información a la base de datos
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/evento/consultar'); // Ruta de la API en el backend
      console.log(response.data)
      setEvents(response.data); // Almacenar los datos en el estado local
    } catch (error) {
      console.error('Error al realizar la solicitud al backend:', error);
    }
  };

  function handleEventDetails(event) {
    console.log(event)
  }

  return (
    // Card
    <div className="w-[95%] lg:basis-1/3 lg:mr-[30px] lg:my-[30px] lg:ml-1 mt-4 mx-auto flex-shrink flex flex-col justify-center bg-transparent">

      {/* Contenedor de botones */}
      <div className="flex mx-3 lg:w-full lg:mx-0 mt-3 lg:mt-0 font-bold rounded-[14px] overflow-hidden text-sm">
        <button className={`flex-grow py-[12px] border-b-gray-200 ${activeTab === 'events' ? 'bg-indigo-500 text-white' : 'bg-gray-200 '}`} onClick={() => setActiveTab('events')}>
          Eventos
        </button>
        <button className={`flex-grow py-[12px] border-b-gray-200 ${activeTab === 'places' ? 'bg-indigo-500 text-white' : 'bg-gray-200 '}`} onClick={() => setActiveTab('places')}>
          Lugares
        </button>
      </div>

      {
        // Lista de eventos o de lugares
        activeTab == 'events' ?
          <div className="flex-grow flex flex-col items-center text-sm py-2">
            {/* Mostrar los datos obtenidos del backend */}
            {events ? (
              <ul className="w-full sm:grid sm:grid-cols-2 lg:block">
                {events.rows.map((column) => (
                  <li
                    key={column.codigo_evento}
                    className="hover:cursor-pointer hover:border-indigo-500 text-gray-800 border-[2px] rounded-[14px] border-gray-300 p-[8px] my-3 mx-3 lg:mx-1 lg:hover:scale-[1.03] lg:transition-transform lg:ease-in-out lg:duration-150 grid grid-cols-2"
                    onClick={handleEventDetails}>

                    <p className="text-base font-bold text-center col-span-2 mb-1">
                      {`${column.nombre}`}
                    </p>
                    <p className="text-center col-span-2 mb-3 overflow-clip">
                      {`Estado...`}
                    </p>
                    <p className="text-sm text-center lg:text-center">
                      <span className="mr-[6px]">{calendarSVG}</span>
                      <span className="align-middle">{`${column.fecha.substring(0, 10)}`}</span>
                    </p>
                    <p className="text-sm text-center lg:text-center">
                      <span className="mr-[6px]">{clockSVG}</span>
                      <span className="align-end">{`${column.hora_inicio.substring(0, 5)} - ${column.hora_final.substring(0, 5)}`}</span>
                    </p>


                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No hay eventos para mostrar</p>
            )}
          </div>
          :
          <div className="flex-grow flex flex-col items-center justify-center text-[30px] min-h-[150px] text-sm">
            <p className="text-center">En progreso...</p>
          </div>
      }

      <EventDetails />
    </div >
  )
}

function EventDetails() {

  return (
    <div className="hidden">

    </div>
  )
}

const calendarSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 inline"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
    />
  </svg>
)

const clockSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 100 100"
    strokeWidth={1.5}
    className="inline "
  >
    <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="7" />
    <line x1="50" y1="55" x2="50" y2="20" stroke="#000" strokeWidth="7" />
    <line x1="48" y1="55" x2="75" y2="55" stroke="#000" strokeWidth="7" />
  </svg>
)