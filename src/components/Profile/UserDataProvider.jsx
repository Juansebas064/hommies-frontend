import { createContext, useState, useEffect } from "react"
import { fetchUserData } from "../../utils/fetchUserData"

// Creación del contexto
const UserDataContext = createContext()


function UserDataProvider({ children }) {

  // Estado para guardar la información del usuario
  const [userData, setUserData] = useState(null)

  // Consultar la información del usuario en la bd 
  async function getUserDataFromDB() {
    try {
      const response = await fetchUserData()
      setUserData(response.data)
      console.log('Ejecutada')
    } catch (error) {
      console.log('Ejecutada con error')
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