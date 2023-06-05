import { useState, useEffect } from "react";
import EventsList from "./Events/EventsList";
import PlacesList from "./Places/PlacesList";
import EventsFilters from "./Events/EventsFilters";
import { fetchEvents } from "../../utils/fetchEvents";

export default function EventsAndPlaces() {

  // Estados: 
  // Actividades en la ciudad (datos de la bd)
  // const [events, setEvents] = useState(null);

  // Pestaña activa (eventos o lugares)
  const [activeTab, setActiveTab] = useState('events')

  // Filtro activo
  const [activeFilter, setActiveFilter] = useState('todos')
  // Fin declaración estados


  // Funciones del componente:
  // Hacer la petición de la información de eventos a la base de datos con fetchEvents()
  // useEffect(() => {
  //   async function eventsResponse() {
  //     const eventsResponse = await fetchEvents()
  //     setEvents(eventsResponse)
  //   }
  //   eventsResponse()
  // }, []);
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
            < EventsList activeFilter={activeFilter} />
          </>
          :
          <PlacesList />
      }
    </div >
  )

}

