import axios from "axios";

export default async function fetchCityFromDB() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const ciudad = await axios.get(`http://localhost:${requestPort}/api/ciudad/obtener`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
    return ciudad.data.rows; // Almacenar los datos en el estado local
  } catch (error) {
    console.error('Error al realizar la solicitud al backend:', error.message);
  }
}