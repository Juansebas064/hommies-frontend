import axios from "axios";
import { useState, useEffect } from "react";
import EventsList from "./Events/EventsList";
import PlacesList from "./Places/PlacesList";

export default function EventsAndPlaces() {

  // Estados: 
  // Actividades en la ciudad (datos de la bd)
  const [events, setEvents] = useState(null);

  // Pestaña activa (eventos o lugares)
  const [activeTab, setActiveTab] = useState('events')
  // Fin declaración estados


  // Ejecutar fetchEvents() al renderizar componente
  useEffect(() => {
    fetchEvents();
  }, []);

  // Hacer la petición de la información a la base de datos
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/evento/consultar'); // Ruta de la API en el backend
      console.log(response.data)
      setEvents(response.data); // Almacenar los datos en el estado local
    } catch (error) {
      console.error('Error al realizar la solicitud al backend:', error);
    }
  };

  

  return (
    // Card
    <div className="w-[95%] lg:basis-1/3 lg:mr-[30px] lg:my-[30px] lg:ml-1 mt-4 mx-auto flex-shrink flex flex-col justify-center bg-transparent">

      {/* Contenedor de botones */}
      <div className="flex mx-3 lg:w-full lg:mx-0 mt-3 lg:mt-0 font-bold rounded-[14px] overflow-hidden text-sm">

        {/* Botón eventos */}
        <button className={`flex-grow py-[12px] border-b-gray-200 ${activeTab === 'events' ? 'bg-indigo-500 text-white' : 'bg-gray-200 '}`} onClick={() => setActiveTab('events')}>
          Eventos
        </button>

        {/* Botón lugares */}
        <button className={`flex-grow py-[12px] border-b-gray-200 ${activeTab === 'places' ? 'bg-indigo-500 text-white' : 'bg-gray-200 '}`} onClick={() => setActiveTab('places')}>
          Lugares
        </button>
      </div>

      {
        // Sección de lista de eventos / lista de lugares
        activeTab == 'events' ?
          <div className="relative flex-grow flex flex-col items-center text-sm py-2 mb-4">
            {/* Mostrar los datos obtenidos del backend */}
            {events ?
              // Panel de eventos
              <EventsList events={events} />
              :
              // Panel de lugares
              <PlacesList />
            }
          </div>
          :
          <div className="flex-grow flex flex-col items-center justify-center text-[30px] min-h-[150px] text-sm">
            <p className="text-center">En progreso...</p>
          </div>
      }

    </div >
  )
}
