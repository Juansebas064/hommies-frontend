import axios from "axios";

export default async function deleteEvent(codigo_evento) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const response = await axios.post(
      `http://localhost:${requestPort}/api/evento/eliminarEvento`,
      { codigo_evento: codigo_evento },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response
  } catch (error) {
    console.error(error);
  }
}