import axios from "axios";

export default async function fetchPlacesFromDB() {
  try {
    const lugares = await axios.get('http://localhost:5000/api/lugar/consultar', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
    return lugares.data.rows; // Almacenar los datos en el estado local
  } catch (error) {
    console.error('Error al realizar la solicitud al backend:', error.message);
  }
};