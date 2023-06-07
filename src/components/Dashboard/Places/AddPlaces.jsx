import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddPlaces = ({ handleToggleMarker, placeName, coord}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (dataJson) => {
    console.log(dataJson);

    await axios
      .post("http://localhost:5000/api/lugar/crear", {
        data: dataJson,
      })
      .then((dataJson) => {
        console.log(dataJson.data);

        console.log("Se creó el lugar");
      })

      .catch((error) => {
        console.error(error);
      });
  };


  const [value, setValue] = useState("")

  const changeValue = () => {
    setValue(coord)
  }

  const [valueDir, setValueDir] = useState("")

  const changeValueDir = () => {
    setValueDir(placeName)
  }


  return (
    <div className="w-full px-3 mb-4 mt-3 items-center relative">
      <div className="w-full items-center text-center justify-center pb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="mb-3 font-semibold text-indigo-700 text-sm shadow-lg shadow-indigo-300">
              Crear un lugar
            </label>
          </div>
          <label className="mb-3 mt-3 text-xs font-semibold px-1">
            Nombre del lugar
          </label>
          <input
            type="text"
            placeholder="Nombre del lugar"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            id="inputName"
            {...register("placeName", {
              required: true,
            })}
          />
          {errors.placeName?.type === "required" && (
            <p>Campo nombre es requerido *</p>
          )}
          <label className="mb-2 text-xs font-semibold px-1">Dirección</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Selecciona una dirección"
              className="w-[88%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              disabled={true}
              value={valueDir}
              id="inputUbi"
              {...register("placeUbi", {
                required: true,
              })}
              
            />
            {errors.placeUbi?.type === "required" && (
              <p>Campo dirección es requerido *</p>
            )}
            <button
              className="relative w-[10%] rounded-md border-2 border-gray-200 outline-none hover:border-indigo-500 focus:border-indigo-500 hover:duration-200"
              onClick={handleToggleMarker}
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

          <label className="mb-2 text-xs font-semibold px-1">Aforo</label>
          <div className="flex items-center">
            <input
              type="number"
              placeholder="Ingresa el numero de personas maximo"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              id="inputCapacity"
              onClick={changeValue}
              {...register("placeCapacity", {
                required: true,
              })}
            />
            {errors.placeCapacity?.type === "required" && (
              <p>Campo aforo es requerido *</p>
            )}
          </div>

          <label className="mb-3 mt-3 text-xs font-semibold px-1">
            Descripción
          </label>
          <input
            type="text"
            placeholder="Descripción del lugar"
            className="w-full h-12 px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            id="inputName"
            {...register("placeInfo", {
              required: true,
            })}
          />
          {errors.placeInfo?.type === "required" && (
            <p>Campo descripción es requerido *</p>
          )}

          <label className="mb-3 mt-3 text-xs font-semibold px-1">
            Ciudad
          </label>
          <input
            type="text"
            placeholder="Ciudad del lugar"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            id="inputName"
            {...register("placeCity", {
              required: true,
            })}
          />
          {errors.placeCity?.type === "required" && (
            <p>Campo ciudad es requerido *</p>
          )}
          <input
            type="text"
            placeholder="Coords"
            className="hidden w-full px-4 py-2 rounded-lg border-2 text-xs border-gray-200 outline-none focus:border-indigo-500"
            id="inputName"
            value={value}
            {...register("placeCoords", {
              required:true
            })}  
          />
          



          <button
            type="submit"
            className="bg-indigo-500 rounded-xl mt-3 w-1/3 font-bold text-white text-sm hover:w-2/3 hover:duration-100 hover:bg-indigo-700"
          >
            Crear lugar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlaces;
