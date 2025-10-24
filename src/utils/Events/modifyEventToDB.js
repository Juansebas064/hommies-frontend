import axios from "axios";

export default async function modifyEventToDB(codigo_evento, modifiedEventData) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const response = await axios.put(
      `http://localhost:${requestPort}/api/evento/editar/:${codigo_evento}`,
      modifiedEventData,
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