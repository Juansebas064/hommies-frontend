import React from 'react'
import { useState } from 'react';
import MapView from './MapView'
import EventsAndPlaces from './EventsAndPlaces'

export default function Dashboard() {

  // Estados: 
  // Lugares de la ciudad (datos de la bd)
  const [places, setPlaces] = useState(null);

  // Ejecutar fetchPlaces() al renderizar componente
  // useEffect(() => {
  //   fetchPlaces();
  // }, []);

  // Hacer la petición de la información a la base de datos
  // const fetchPlaces = async () => {
  //   try {
  //     const response = await axios.get('Route/to/fetch/places'); // Ruta de la API en el backend
  //     // console.log(response.data)
  //     setPlaces(response.data); // Almacenar los datos en el estado local
  //   } catch (error) {
  //     console.error('Error al realizar la solicitud al backend:', error);
  //   }
  // };

  return (
    <div className="flex flex-col lg:flex-row mx-auto p-0">
      <MapView />
      <EventsAndPlaces />
    </div>
  )
}
