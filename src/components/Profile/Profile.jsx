import { useContext, useEffect, useState } from "react";
import EventsList from "../Dashboard/Events/EventsList";
import { fetchUserData } from "../../utils/fetchUserData";
import { UserDataContext } from "./UserDataProvider";

export default function Profile() {

  const { userData, getUserDataFromDB } = useContext(UserDataContext);

  const [nombre, setNombre] = useState("");
  const [nickname, setNickname] = useState("");


  useEffect(() => {
    if (userData) {
      setNombre(userData.nombre + " " + userData.apellido)
      setNickname(userData.nickname)
    }
  }, [userData]);



  return (

    // Contenedor principal
    <div className="flex flex-col lg:flex-row lg:h-[89vh] justify-center">

      {/* Card información del perfil */}
      <div className="basis-[50%] flex items-center justify-center rounded-3xl border-2 border-indigo-400 bg-slate-200 py-5 m-8">

        {/* Información */}
        <div className="flex flex-col items-center py-16">
          <div>
            {/* Foto del usuario */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24 pt-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            {/* Nickname */}
          </div>
          <p className="text-indigo-500 text-center pt-4 font-bold text-xl">
            {nickname}
          </p>
          <p className="text-black text-center pt-4 font-bold text-base">
            {nombre}
          </p>
          <button className="bg-indigo-500 rounded-xl mt-3 px-2 py-1 font-bold text-white text-sm hover:bg-indigo-700"
            onClick={() => window.location.href = '/profile/config'}
          >
            Editar perfil
          </button>
        </div>
      </div>

      {/* Historial de actividades */}
      <div className="px-10 pb-4 text-gray-500 m-8">

        <h3 className="font-bold text-3xl text-gray-900 text-center mb-3">Historial de actividades</h3>
        <p className="text-center">
          Aqui se mostraran los eventos en los que has estado inscrito
        </p>
        <EventsList activeFilter='inscrito' />
      </div>
    </div>
  );
};