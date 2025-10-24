import axios from 'axios'

export default async function obtenerListaEventos(codigo_lugar) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const lista_eventos_lugar = await axios.post(`http://localhost:${requestPort}/api/evento/evento-lugar/lista`, { codigo_lugar }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
    return lista_eventos_lugar
  } catch (error) {
    console.log(error.message)
  }
}