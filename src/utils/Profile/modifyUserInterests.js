import axios from "axios";

export default async function modifyUserInterests(modifiedInterests) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const response = await axios.post(`http://localhost:${requestPort}/api/persona/intereses/modificar`, modifiedInterests, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
    console.log(response.message)

  } catch (error) {
    console.log(error.message)
  }
}