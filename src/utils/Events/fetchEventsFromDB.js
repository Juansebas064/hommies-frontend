import axios from "axios";
import fetchPlacesFromDB from "../Places/fetchPlacesFromDB";
import fetchEventInterestsFromDB from "./fetchEventInterestsFromDB";

export default async function fetchEvents() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    let eventos = await axios.get(`http://localhost:${requestPort}/api/evento/obtenerC`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });

    eventos = eventos.data.rows

    let lugares = await fetchPlacesFromDB()

    lugares = lugares.reduce((objLugares, lugar) => {
      objLugares[lugar.codigo_lugar] = { ...lugar }
      return objLugares
    }, {})

    eventos = eventos.map((evento) => {
      return {
        ...evento,
        lugar: lugares[`${evento.lugar}`]
      }
    })

    return eventos; // Almacenar los datos en el estado local
  } catch (error) {
    console.error('Error al ejecutar fetchEvents:', error.message);
  }
}