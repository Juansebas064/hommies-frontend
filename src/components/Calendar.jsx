import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Calendar() {
  
  const [message, setMessage] = useState("");


  const haveToken = localStorage.getItem('token');




  if(haveToken == null) {


     
  return (
    <div>
      <p>no has iniciado sesion perro hp</p>
      <p>juas juas juas</p>
    </div>
  );


  }else {

  useEffect(() => {
    axios.get("http://localhost:5000/asd", {

      withCredentials: true

    })
    
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  
  return (
    <div>
      <p>{message}</p>
      <p>Pagina Privada</p>
    </div>
  );

  }
}

export default Calendar;
