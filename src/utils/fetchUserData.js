import axios from "axios";
import { decodeToken } from "react-jwt";
import fetchUserInterestsFromDB from "./Interests/fetchUserInterestsFromDB"

export async function fetchUserData() {
  const token = localStorage.getItem('token')
  if (token) {
    const { id } = decodeToken(token)
    try {
      const userData = await axios.post('http://localhost:5000/api/persona/consultar', { id })
      const userInterests = await fetchUserInterestsFromDB()
      userData.data['intereses'] = userInterests.data.rows
      return userData
    } catch (error) {
      console.log(error.message)
    }
  }
  return null
}