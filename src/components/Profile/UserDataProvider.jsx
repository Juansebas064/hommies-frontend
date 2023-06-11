import { createContext, useState, useEffect } from "react"
import { fetchUserData } from "../../utils/fetchUserData"

// Creación del contexto
const UserDataContext = createContext()


function UserDataProvider({ children }) {

  // Estado para guardar la información del usuario
  const [userData, setUserData] = useState(null)

  // Consultar la información del usuario en la bd 
  async function getUserDataFromDB() {
    const response = await fetchUserData()
    if (response) {
      setUserData(response.data)
      localStorage.setItem('profilePicture', response.data.foto ? response.data.foto : 'https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif')
    }
  }

  // Ejecutar la función al cargar el componente
  useEffect(() => {
    getUserDataFromDB()
  }, [])

  return (
    <UserDataContext.Provider value={{ userData, getUserDataFromDB }}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext, UserDataProvider }