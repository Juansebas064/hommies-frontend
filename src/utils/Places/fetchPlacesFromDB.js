import axios from "axios";

export default async function fetchPlacesFromDB() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const lugares = await axios.get(`http://localhost:${requestPort}/api/lugar/consultar`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })

    const nuevosLugares = lugares.data.rows.filter((lugar) => lugar.estado !== 'inactivo')
    return nuevosLugares;
  } catch (error) {
    console.error('Error al realizar la solicitud al backend:', error.message);
  }
}