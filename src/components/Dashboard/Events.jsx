import axios from "axios";
import { useState, useEffect } from "react";

export default function Activities() {



  // Estados: 
  // Actividades en la ciudad
  const [eventColumns, setEventColumns] = useState(null);

  // Pestaña activa (eventos o lugares)
  const [activeTab, setActiveTab] = useState('events')

  // Realizar la solicitud al backend al renderizar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Hacer la petición de la información a la base de datos
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.14:5000/data'); // Ruta de la API en el backend
      setEventColumns(response.data); // Almacenar los datos en el estado local
      console.log(response.data)
    } catch (error) {
      console.error('Error al realizar la solicitud al backend:', error);
    }
  };

  function handleEventDetails(event) {
    console.log(event)
  }

  return (
    // Card
    <div className="w-[95%] lg:basis-1/3 border-[1px] border-gray-200 rounded-2xl lg:m-5 lg:ml-1 mt-4 mx-auto flex-shrink flex flex-col shadow-[0_0_31px_-10px_rgba(133,130,133,1)] overflow-hidden">

      {/* Contenedor de botones */}
      <div className="flex w-full font-bold">
        <button className="flex-grow py-[7px] rounded-tl-2xl bg-indigo-500 text-white border-[1px] border-gray-200">
          Eventos
        </button>
        <button className="flex-grow py-1 border-b-[1px] border-gray-200">
          Lugares
        </button>
      </div>

      {/* Lista de eventos */}
      <div className="z-0">
        {/* Mostrar los datos obtenidos del backend */}
        {eventColumns ? (
          <ul>
            {eventColumns.rows.map((column) => (
              <li key={column.codigo_evento} className="hover:cursor-pointer text-gray-800 hover:bg-gray-200  text-center py-2" onClick={handleEventDetails}>
                {column.descripcion}
              </li>
            ))}
          </ul>
        ) : (
          <p className="h-full text-center">No hay eventos para mostrar</p>
        )}
      </div>
      <EventDetails />
    </div>
  )
}

function EventDetails() {
  return (
    <div className="hidden z-[1]">

    </div>
  )
}