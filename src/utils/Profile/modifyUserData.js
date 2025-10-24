import axios from "axios";

export default async function modifyUserData(formData) {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const response = await axios.put(`http://localhost:${requestPort}/api/perfil/modificar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token')
      }
    })

    console.log(response.message)
  } catch (error) {
    console.log(error.message)
  }
}