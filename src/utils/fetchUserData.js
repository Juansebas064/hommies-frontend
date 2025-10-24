import axios from "axios";
import { decodeToken } from "react-jwt";
import fetchUserInterestsFromDB from "./Interests/fetchUserInterestsFromDB"
import fetchCityFromDB from "./City/fetchCityFromDB";

export async function fetchUserData() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  const token = localStorage.getItem('token')
  if (token) {
    const { id } = decodeToken(token)
    try {
      const userData = await axios.post(`http://localhost:${requestPort}/api/persona/consultar`, { id })
      const userInterests = await fetchUserInterestsFromDB()
      userData.data['intereses'] = userInterests.data.rows
      const ciudad = await fetchCityFromDB()
      userData.data.ciudad = ciudad[0]
      return userData
    } catch (error) {
      console.log(error.message)
    }
  }
  return null
}