import axios from "axios";

export default async function fetchInterestsFromDB() {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const interests = await axios.get(`http://localhost:${requestPort}/api/intereses/consultar`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    return interests
  } catch (error) {
    console.log(error.message)
  }
}