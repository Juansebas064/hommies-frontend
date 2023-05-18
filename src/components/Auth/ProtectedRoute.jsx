import React from 'react'
import { Navigate , Outlet} from 'react-router-dom'

const ProtectedRoute = () => {
  
    let isLogged = false;
    
  if (!isLogged){
    return <Navigate to="/"/>
  }
  
  return (
    <Outlet/>
  )
}

export default ProtectedRoute