import axios from 'axios'

export default async function fetchEventUser(codigo_evento) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const lista_participantes = await axios.post(`http://localhost:${requestPort}/api/evento/participantes`, { codigo_evento }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
    return lista_participantes
  } catch (error) {
    console.log(error.message)
  }
}