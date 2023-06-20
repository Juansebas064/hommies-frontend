import { createContext, useState } from "react";

const UserLocationContext = createContext()

function UserLocationProvider({ children }) {

  // Estado para manejar la ubicación del usuario y del mapa
  const [userLocation, setUserLocation] = useState(null)

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  )
}

export { UserLocationContext, UserLocationProvider }