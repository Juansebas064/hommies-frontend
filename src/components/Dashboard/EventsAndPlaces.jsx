import axios from "axios";
import { useState, useEffect } from "react";
import EventsList from "./Events/EventsList";
import PlacesList from "./Places/PlacesList";
import EventsFilters from "./Events/EventsFilters";

export default function EventsAndPlaces() {

  // Estados: 
  // Actividades en la ciudad (datos de la bd)
  const [events, setEvents] = useState(null);

  // Pestaña activa (eventos o lugares)
  const [activeTab, setActiveTab] = useState('events')

  // Filtro activo
  const [activeFilter, setActiveFilter] = useState('todos')
  // Fin declaración estados


  // Funciones del componente:
  // Hacer la petición de la información de eventos a la base de datos
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://192.168.1.16:5000/api/evento/consultar'); // Ruta de la API en el backend
      console.log(response.data.rows)
      setEvents(response.data.rows); // Almacenar los datos en el estado local
    } catch (error) {
      console.error('Error al realizar la solicitud al backend:', error);
    }
  };

  // Ejecutar fetchEvents() al renderizar componente
  useEffect(() => {
    fetchEvents();
  }, []);
  // Fin funciones del componente

  return (
    // Card
    <div className="lg:basis-[30%] lg:pb-3 lg:h-[89vh] px-3 mx-3 mt-7 lg:mt-0 lg:pt-4 flex flex-col justify-start bg-transparent overflow-hidden">

      {/* Contenedor de botones */}
      <div className="flex lg:w-full lg:mx-0 font-bold rounded-[14px] overflow-hidden text-sm h-[45px]">

        {/* Botón eventos */}
        <button className={`flex-grow border-b-gray-200 ${activeTab === 'events' ? 'bg-indigo-500 text-white' : 'bg-gray-200 '}`} onClick={() => setActiveTab('events')}>
          Eventos
        </button>

        {/* Botón lugares */}
        <button className={`flex-grow border-b-gray-200 ${activeTab === 'places' ? 'bg-indigo-500 text-white' : 'bg-gray-200 '}`} onClick={() => setActiveTab('places')}>
          Lugares
        </button>
      </div>

      {
        // Sección de lista de eventos / lista de lugares
        activeTab == 'events' ?
          <>
            {/* Controles de filtrado */}
            <EventsFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            {/* Contenedor eventos */}
            <div className="relative flex flex-col items-center text-sm lg:px-0 overflow-hidden">
              {events ?
                /* Panel de eventos */
                < EventsList events={events} activeFilter={activeFilter} />
                :
                <div className="flex-grow flex flex-col items-center justify-center text-[30px] min-h-[150px] text-sm">
                  <p className="text-center">No hay eventos para mostrar</p>
                </div>
              }
            </div>
          </>
          :
          <PlacesList />
      }

    </div >
  )
}

