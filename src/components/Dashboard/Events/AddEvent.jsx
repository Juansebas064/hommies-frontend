import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (dataJson) => {
    console.log(dataJson);

    await axios
      .post("http://localhost:5000/api/evento/crear", {
        data: dataJson,
      })
      .then((dataJson) => {
        console.log(dataJson.data);

        console.log("Se creó el evento");
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const [selectedNewDate, setSelectedNewDate] = useState();

  const handleDateChange = (event) => {
    setSelectedNewDate(event.target.value);
  };

  const [selectedTimeStart, setSelectedTimeStart] = useState('');

  const handleTimeStartChange = (e) => {
    const { value } = e.target;
    setSelectedTimeStart(value);
  };

  const [selectedTimeEnd, setSelectedTimeEnd] = useState('');

  const handleTimeEndChange = (e) => {
    const { value } = e.target;
    setSelectedTimeEnd(value);
  };
  return (
    <div className="w-full px-3 mb-4 mt-3 items-center relative">
      <div className="w-full items-center text-center justify-center pb-3">
        <label className="font-semibold text-indigo-700 text-sm shadow-lg shadow-indigo-300">
          Crear una actividad
        </label>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 ">
            <label className="mb-2 text-xs font-semibold px-1">
              Nombre del evento
            </label>
          </div>
          <input
            type="text"
            placeholder="Nombre del evento"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            id="inputName"
            {...register("eventName", {
              required: true,
              maxLength: {
                value: 50,
                message: "El evento debe contener como máximo 50 caracteres",
              },
            })}
          />
          {errors.eventName?.type === "required" && (
            <p>Campo nombre es requerido *</p>
          )}
          <label className="mb-2 text-xs font-semibold px-1">Ubicación</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Selecciona una ubicación"
              className="w-[88%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              id="inputUbi"
              {...register("eventUbi", {
                required: true,
              })}
            />
            {errors.eventUbi?.type === "required" && (
              <p>Campo lugar es requerido *</p>
            )}
            <button
              className="relative w-[10%] rounded-md border-2 border-gray-200 outline-none"
              disabled={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
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
              </svg>
            </button>
          </div>
          <label className="mb-2 text-xs font-semibold px-1">Fecha</label>
          <div>
            <input
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-semibold"
              type="date"
              id="start"
              value={selectedNewDate}
              max="2023-12-31"
              onChange={handleDateChange}
              {...register("eventDate", {
                required: true,
              })}
            />
          </div>
          {errors.eventDate?.type === "required" && (
            <p>Campo fecha es requerido *</p>
          )}

          <label className="mb-2 text-xs font-semibold px-1">Hora inicio</label>
          <div className="flex items-center">
            <input
              type="time"
              value={selectedTimeStart}
              onChange={handleTimeStartChange}
              className="w-full px-2 py-1 text-center border border-gray-300 rounded-md focus:outline-none"
              {...register("eventTimeStart", {
                required: true
              })}
            />
          </div>
          {errors.eventTimeStart?.type === "required" && (
            <p>Campo hora inicio es requerido *</p>
          )}

          <label className="mb-2 text-xs font-semibold px-1">Hora fin</label>
          <div className="flex items-center">
            <input
              type="time"
              value={selectedTimeEnd}
              onChange={handleTimeEndChange}
              className="w-full px-2 py-1 text-center border border-gray-300 rounded-md focus:outline-none"
              {...register("eventTimeEnd", {
                required: true
              })}
            />
          </div>
          {errors.eventTimeEnd?.type === "required" && (
            <p>Campo hora fin es requerido *</p>
          )}

          <button
            type="submit"
            className="bg-indigo-500 rounded-xl mt-3 w-1/3 font-bold text-white text-sm hover:w-2/3 hover:duration-100 hover:bg-indigo-700"
          >
            Crear evento
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
