import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Calendar() {

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:5000/asd", {
  //     withCredentials: true
  //   })
  //     .then(response => {
  //       setMessage(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    localStorage.getItem('token') ?
      <div>
        <p>{message}</p>
        <p>¡Sesión iniciada!</p>
      </div>
      :
      <div>
        <p>{message}</p>
        <p>Sesión no iniciada :c</p>
      </div>
  );
}

export default Calendar;
