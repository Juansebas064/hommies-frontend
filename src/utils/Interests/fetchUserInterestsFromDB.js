import axios from "axios";

export default async function fetchUserInterestsFromDB() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const userInterests = await axios.get(`http://localhost:${requestPort}/api/persona/intereses/consultar`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    return userInterests
  } catch (error) {
    console.log(error.message)
  }
}