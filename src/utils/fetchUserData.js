import axios from "axios";
import { decodeToken } from "react-jwt";

export async function fetchUserData() {
  const id = `${decodeToken(localStorage.getItem('token'))}`
  console.log(id)
  try {
    const userData = await axios.post('http://localhost:5000/api/persona/consultar', { id })
    return userData
  } catch (error) {
    console.log(error.message)
  }
}