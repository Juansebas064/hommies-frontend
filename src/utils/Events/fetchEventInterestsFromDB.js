import axios from "axios";

export default async function fetchEventInterestsFromDB(codigo_evento) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const intereses = await axios.post(`http://localhost:${requestPort}/api/evento/intereses/consultar`, { codigo_evento }, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
    return intereses.data.rows
  } catch (error) {
    console.log(error.message)
  }
}