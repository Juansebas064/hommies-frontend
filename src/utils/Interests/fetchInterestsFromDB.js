import axios from "axios";

export default async function fetchInterestsFromDB() {
  try {
    const interests = await axios.get('http://localhost:5000/api/intereses/consultar')
    return interests
  } catch (error) {
    console.log(error.message)
  }
}