import axios from "axios";

export default async function modifyEventToDB(codigo_evento, modifiedEventData) {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/evento/editar/:${codigo_evento}`,
      modifiedEventData,
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