import axios from "axios"

export default async function fetchAllPlacesFromDB() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const allPlaces = await axios.get(`http://localhost:${requestPort}/api/lugar/listar`, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })

    return allPlaces.data.rows
  } catch (error) {
    console.log(error.message)
  }
}