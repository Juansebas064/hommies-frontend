import axios from "axios";

export default async function anularInscripcionEvento(codigo_evento) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const response = await axios.post(
      `http://localhost:${requestPort}/api/evento/anular-inscripcion`,
      { codigo_evento },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}