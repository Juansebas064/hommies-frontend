import { createContext, useEffect, useState } from "react";
import fetchCityFromDB from "../../utils/City/fetchCityFromDB";

const UserLocationContext = createContext()

function UserLocationProvider({ children }) {

  // Estado para manejar la ubicación del usuario y del mapa
  const [userLocation, setUserLocation] = useState(null)

  const [ciudad, setCiudad] = useState(null)

  async function fetchCity(){
    const ciudad = await fetchCityFromDB()
    setCiudad(ciudad);
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      fetchCity()
    }
  }, [])

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation , ciudad , fetchCity}}>
      {children}
    </UserLocationContext.Provider>
  )
}

export { UserLocationContext, UserLocationProvider }