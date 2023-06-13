import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { EventsContext } from "../Events/EventsProvider";

const AddEvent = ({ setIsToggled }) => {

  const { fetchEvents } = useContext(EventsContext)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (datosNuevoEvento) => {

    await axios.post("http://localhost:5000/api/evento/agregar", datosNuevoEvento, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then(async (response) => {
        console.log(response);
        fetchEvents()
        setIsToggled(false)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full px-3 mb-4 mt-3 items-center relative">
      <div className="w-full items-center text-center justify-center pb-3">
        <h1 className="font-semibold text-indigo-700 text-base shadow-lg shadow-indigo-300 mb-6 w-fit text-center mx-auto">
          Crear un evento
        </h1>

        {/* Inicio del formulario */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Nombre del evento */}
          <label className="text-sm font-semibold px-1">
            Nombre del evento
          </label>

          <input
            className={`w-full px-4 py-2 mb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm`}
            placeholder="Nombre del evento"
            {...register('nombre', {
              required: true,
            })}
          />
          {errors.nombre && (
            <p className="mb-3">{errors.nombre.message} *</p>
          )}

          {/* Descripción */}
          <label className="mb-2 text-sm font-semibold px-1">Descripción</label>
          <textarea
            type="text"
            placeholder="Descripcion del evento"
            className="w-full mb-2 text-sm px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            {...register("descripcion", {
              required: true,
            })}
          />
          {errors.descripcion?.type === "required" && (
            <p className="mb-3">Campo descripcion es requerido *</p>
          )}

          {/* Lugar y fecha */}
          <div className="flex items-center justify-between mb-2">

            <div className="flex-shrink">
              {/* Lugar */}
              <label className="text-sm font-semibold">Lugar</label>
              <input
                type="text"
                placeholder="Escribe un lugar"
                className="text-sm px-4 py-2 rounded-lg border-2 mr-2 border-gray-200 outline-none focus:border-indigo-500"
                {...register("lugar", {
                  required: true,
                })}
              />
              {errors.lugar?.type === "required" && (
                <p className="mb-3">Campo lugar es requerido *</p>
              )}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg> */}
            </div>

            {/* Fecha */}
            <div className="flex-grow">
              <label className="text-sm font-semibold px-1">Fecha</label>
              <input
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 text-sm focus:border-indigo-500"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                max="2023-12-31"
                {...register("fecha", {
                  required: true
                })}
              />
              {errors.eventDate?.type === "required" && (
                <p className="mb-3">Campo fecha es requerido *</p>
              )}
            </div>
          </div>


          {/* Hora de inicio y hora final */}

          <div className="flex items-center justify-between">

            {/* Hora de inicio */}
            <div className="mr-2">
              <label className="mb-2 text-sm font-semibold px-1">Hora inicio</label>
              <input
                type="text"
                placeholder="Hora de inicio"
                className="w-full px-4 py-2 text-center border border-gray-300 rounded-md focus:outline-none text-sm"
                {...register("hora_inicio", {
                  required: true,
                  pattern: {
                    value: /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/,
                    message: 'Formato de hora de inicio no válido'
                  }
                })}
              />
              {errors.hora_inicio?.type === "required" && (
                <p>Campo hora inicio es requerido *</p>
              )}
            </div>

            {/* Hora final */}
            <div className="ml-2">
              <label className="mb-2 text-sm font-semibold px-1">Hora final</label>
              <input
                type="text"
                placeholder="Hora final"
                className="w-full px-4 py-2 text-center border border-gray-300 rounded-md focus:outline-none text-sm"
                {...register("hora_final", {
                  required: true,
                  pattern: {
                    value: /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/,
                    message: 'Formato de hora de inicio no válido'
                  }
                })}
              />
              {errors.hora_final?.type === "required" && (
                <p>Campo hora inicio es requerido *</p>
              )}
            </div>
          </div>

          {/* Botón crear evento */}
          <button
            type="submit"
            className="bg-indigo-500 rounded-3xl mt-5 py-2 px-3 font-bold text-white text-sm hover:w hover:duration-100 hover:bg-indigo-700"
          >
            Crear evento
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
