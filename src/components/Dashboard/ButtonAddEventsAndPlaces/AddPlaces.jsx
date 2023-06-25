/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PlacesContext } from "../Places/PlacesProvider";
import { UserDataContext } from "../../Profile/UserDataProvider";

const AddPlaces = ({ handleToggleMarker, placeName, markerAux, setMarkerAux, setIsToggled }) => {
  const { fetchPlaces } = useContext(PlacesContext)

  const { userData } = useContext(UserDataContext)

  const [nombreCiudad, setNombreCiudad] = useState("");
  const [codigoCiudad, setCodigoCiudad] = useState("");

  useEffect(() => {
    if (userData.ciudad) {
      setNombreCiudad(userData.ciudad.nombre);
      setCodigoCiudad(userData.ciudad.codigo_ciudad);
    }
  }, [userData]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (dataJson) => {


    const formData = new FormData();

    // Agregar los valores de los campos ocultos al objeto FormData
    formData.append("direccion", placeName);
    formData.append("ciudad", codigoCiudad);
    formData.append("ubicacion", JSON.stringify(markerAux));

    const fotoInput = document.getElementById("foto");
    if (fotoInput.files.length > 0) {
      formData.append("foto", fotoInput.files[0]);
    }

    // Agregar los demás valores del formulario al objeto FormData
    for (const key in dataJson) {
      formData.append(key, dataJson[key]);
    }


    if (formData) {
      try {
        await fetch("http://localhost:5000/api/lugar/crear", {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          body: formData,
        });
        setMarkerAux(null)
        await fetchPlaces()
        setIsToggled(false)
      } catch (error) {
        console.error(error);
      }
    }
  };

  return userData ? (
    <div className="w-full px-3 mb-4 mt-3 items-center relative">
      <div className="w-full items-center text-center justify-center pb-3">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
            id="nombre"
            name="nombre"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>Campo nombre es requerido *</p>
          )}
          <label className="mb-2 text-xs font-semibold px-1">Dirección</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Selecciona una dirección"
              className="w-[88%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              disabled={true}
              value={placeName}
              id="direccion"
            />

            <button
              className="relative w-[10%] rounded-md border-2 border-gray-200 outline-none hover:border-indigo-500 focus:border-indigo-500 hover:duration-200"
              onClick={(e) => {
                e.preventDefault()
                handleToggleMarker()
              }}
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
              id="aforo"
              name="aforo"
              {...register("aforo", {
                required: true,
              })}
            />
            {errors.aforo?.type === "required" && (
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
            id="descripcion"
            name="descripcion"
            {...register("descripcion", {
              required: true,
            })}
          />
          {errors.descripcion?.type === "required" && (
            <p>Campo descripción es requerido *</p>
          )}

          <label className="mb-3 mt-3 text-xs font-semibold px-1">Ciudad</label>
          <input
            type="text"
            disabled={true}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            id="inputName"
            value={nombreCiudad}
          />


          <label className="mb-3 mt-3 text-xs font-semibold px-1">Imagen</label>
          <input
            type="file"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            id="foto"
            name="foto"
            multiple={false}
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
  ) : (
    <></>
  );
};

export default AddPlaces;
