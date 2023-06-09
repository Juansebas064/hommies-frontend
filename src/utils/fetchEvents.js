import axios from "axios";

export const fetchEvents = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/evento/consultar'); // Ruta de la API en el backend
    return response.data.rows; // Almacenar los datos en el estado local
  } catch (error) {
    console.error('Error al realizar la solicitud al backend:', error);
  }
};