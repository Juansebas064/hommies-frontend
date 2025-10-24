import axios from "axios"
import fetchAllPlacesFromDB from "./fetchAllPlacesFromDB"

export default async function fetchAllEventsFromDB() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    let allEvents = await axios.get(`http://localhost:${requestPort}/api/navbar/get/lista`, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })

    allEvents = allEvents.data.rows

    let allPlaces = await fetchAllPlacesFromDB()

    allPlaces = allPlaces.reduce((objLugares, lugar) => {
      objLugares[lugar.codigo_lugar] = { ...lugar }
      return objLugares
    }, {})

    allEvents = allEvents.map((evento) => {
      return {
        ...evento,
        lugar: allPlaces[`${evento.lugar}`]
      }
    })

    return allEvents
  } catch (error) {
    console.log(error.message)
  }
}