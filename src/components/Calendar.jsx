import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Calendar() {
  // const requestPort = process.env.VITE_BACKEND_PORT

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios.get(`http://localhost:${requestPort}/asd`, {
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
    <div className='lg:h-[89vh]'>
      {localStorage.getItem('token') ?
        <div>
          <p>{message}</p>
          <p>¡Sesión iniciada!</p>
        </div>
        :
        <div>
          <p>{message}</p>
          <p>Sesión no iniciada :c</p>
        </div>}
    </div>
  );
}

export default Calendar;
