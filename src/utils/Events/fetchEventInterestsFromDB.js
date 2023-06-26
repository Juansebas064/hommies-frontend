import axios from "axios";

export default async function fetchEventInterestsFromDB(codigo_evento) {
  try {
    const intereses = await axios.post('http://localhost:5000/api/evento/intereses/consultar', { codigo_evento }, {
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