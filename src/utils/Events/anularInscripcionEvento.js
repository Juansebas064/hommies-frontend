import axios from "axios";

export default async function anularInscripcionEvento(codigo_evento) {
  try {
    const response = await axios.delete(
      "http://localhost:5000/api/evento/anular-inscripcion",
      { codigo_evento: codigo_evento },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(response.data.message);
    return response;
  } catch (error) {
    console.error(error);
  }
}