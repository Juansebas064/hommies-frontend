import axios from "axios";

export default async function modifyUserData(modifiedUserData) {
  try {
    const response = await axios.put('http://localhost:5000/api/perfil/modificar', modifiedUserData, {
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