import axios from "axios";

export default async function deleteEvent(codigo_evento) {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/evento/eliminarEvento",
      { codigo_evento: codigo_evento },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(response.data.message);
    return response
  } catch (error) {
    console.error(error);
  }
}