import axios from "axios";
import fetchPlacesFromDB from "../Places/fetchPlacesFromDB";
import fetchEventInterestsFromDB from "./fetchEventInterestsFromDB";

export default async function fetchEvents() {
  try {
    let eventos = await axios.get('http://localhost:5000/api/evento/obtenerC', {
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

    let intereses = await fetchEventInterestsFromDB()

    eventos.intereses = intereses

    return eventos; // Almacenar los datos en el estado local
  } catch (error) {
    console.error('Error al ejecutar fetchEvents:', error.message);
  }
}