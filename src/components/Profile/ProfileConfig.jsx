import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserDataContext } from "../Profile/UserDataProvider";
import modifyUserData from "../../utils/Profile/modifyUserData";
import modifyUserInterests from "../../utils/Profile/modifyUserInterests";
import intsListWithUserInterests from "../../utils/Interests/intsListWithUserInterests.js";

export default function ProfileConfig() {
  // Datos del usuario
  const { userData, getUserDataFromDB } = useContext(UserDataContext);

  // Estado para almacenar todos los intereses
  const [intereses, setIntereses] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem("profilePicture"));

  async function fetchInterests() {
    const interestsResponse = await intsListWithUserInterests();
    setIntereses(interestsResponse);
  }

  useEffect(() => {
    fetchInterests();
    getToday18YearsBefore();
  }, []);

  useEffect(() => {
    // Obtener la imagen seleccionada del localStorage
    const selectedImage = localStorage.getItem("selectedImage");
    if (selectedImage) {
      setSelectedImage(selectedImage);
    }
  }, []);

  // Función para modificar los intereses seleccionados al hacer click
  function handleEditarIntereses(index) {
    const nuevosIntereses = intereses.slice();
    nuevosIntereses[index].marcado = !nuevosIntereses[index].marcado;
    setIntereses(nuevosIntereses);
  }

  // Enviar los datos a la BD
  async function onSubmit(modifiedUserData) {
    const formData = new FormData();
    const fotoInput = document.getElementById("foto");
    const newUserInterests = intereses.filter((int) => int.marcado);
    if (fotoInput.files.length > 0) {
      formData.append("foto", fotoInput.files[0]);
    }
    for (const key in modifiedUserData) {
      formData.append(key, modifiedUserData[key]);
    }
    if (formData && newUserInterests.length !== 0) {
      try {
        await modifyUserData(formData);

        getUserDataFromDB();

        await modifyUserInterests(newUserInterests);

        window.location.href = "/profile";
        // setTimeout(() => {
        // }, 1500);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  // Función para obtener la fecha de hoy hace 18 años
  function getToday18YearsBefore() {
    let today18YearsBefore = new Date().toISOString().split("T")[0].split("-");
    today18YearsBefore[0] = (today18YearsBefore[0] - 18).toString();
    today18YearsBefore = today18YearsBefore.join("-");
    return today18YearsBefore;
  }

  // Uso de react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleFileChange = (e) => {
    const nombre = e.target.files[0].name;
    const image = URL.createObjectURL(e.target.files[0]);
    localStorage.setItem("selectedImage", image);
    setSelectedImage(image);
  };


  return (
    // Contenedor principal
    <div className="min-h-[89vh] flex items-center justify-center">
      {/* Card completar registro */}
      <div className="pt-10 my-5 pb-4 bg-gray-100 text-gray-500 rounded-3xl shadow-xl max-w-[700px] overflow-hidden flex-grow">
        {/* Título */}
        <h3 className="font-bold text-3xl text-gray-900 text-center mb-7">
          Configuración del perfil
        </h3>

        {/* Inicio del formulario */}
        {userData && (
          <form
            className="grid min-[550px]:grid-cols-2 gap-1 max-w-[650px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
          >
            {/* Foto de perfil */}
            <div className="px-3 text-center col-span-2">
              <label className="text-sm font-semibold px-1">
                Foto de perfil
              </label>
            </div>
            <label
              className="col-span-2 mb-5 w-24 h-24 mx-auto rounded-full relative"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <input
                type="file"
                id="foto"
                capture="capture"
                name="foto"
                onChange={handleFileChange}
                multiple={false}
                className="hidden"
                {...register("foto")}
              />
              <img
                src={selectedImage || profilePicture}
                alt=""
                className="w-24 h-24 mx-auto rounded-full"
              />

              {hovered && (
                <div className="absolute duration-100 top-0 left-0 w-full h-full bg-white bg-opacity-50 flex rounded-full justify-center items-center">
                  <span className="text-gray-800">Editar</span>
                </div>
              )}
            </label>

            {/* Nickname */}
            <div className="px-3 mb-5">
              <label className="text-sm font-semibold px-1">Nickname</label>
              <input
                type="text"
                placeholder="Nickname"
                className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                {...register("nickname", {
                  required: true,
                  value: userData.nickname,
                })}
              />
            </div>

            {/* Género */}
            <div className="px-3 mb-5">
              <label className="text-sm font-semibold px-1">Genero</label>
              <select
                id="gender"
                name="gender"
                className="w-full pl-3 pr-3 py-[11px] bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block"
                {...register("genero", {
                  required: true,
                  value: userData.genero,
                })}
              >
                <option value="m">Hombre</option>
                <option value="f">Mujer</option>
                <option value="o">Otro</option>
              </select>
            </div>

            {/* Nombre */}
            <div className="px-3 mb-5">
              <label className="text-sm font-semibold px-1">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                {...register("nombre", {
                  required: true,
                  value: userData.nombre,
                })}
              />
            </div>

            {/* Apellido */}
            <div className="px-3 mb-5">
              <label className="text-sm font-semibold px-1">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                {...register("apellido", {
                  required: true,
                  value: userData.apellido,
                })}
              />
            </div>

            {/* Ciudad */}
            <div className="px-3 mb-5">
              <label className="text-sm font-semibold px-1">Ciudad</label>
              <select
                className="w-full pl-3 pr-3 py-[11px] bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block"
                {...register("ciudad", {
                  required: true,
                  value: userData.ciudad ? userData.ciudad.codigo_ciudad : null,
                })}
              >
                <option value="111">Tuluá</option>
                <option value="222">Cali</option>
              </select>
            </div>

            {/* Fecha de nacimiento */}
            <div className="px-3 mb-5">
              <label className="text-sm font-semibold px-1">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                disabled={userData.fecha_nacimiento}
                max={getToday18YearsBefore()}
                className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                {...register("fecha_nacimiento", {
                  required: true,
                  value: !userData.fecha_nacimiento
                    ? null
                    : userData.fecha_nacimiento.substring(0, 10),
                })}
              />
            </div>

            {/* Descripción */}
            <div className="px-3 mb-5 min-[550px]:col-span-2">
              <label className="text-sm font-semibold px-1">
                Descripción del perfil (opcional)
              </label>
              <textarea
                placeholder="Descripción"
                className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                {...register("descripcion", {
                  required: false,
                  value: userData.descripcion,
                })}
              />
            </div>

            {/* Intereses */}
            <div className="w-full text-center mb-3 min-[550px]:col-span-2 px-3">
              <label className="font-semibold text-sm px-1">
                Seleciona tus intereses
              </label>
              <div className="border-2 border-gray-400 py-5 rounded-lg w-full mt-1 mb-1 mx-auto flex justify-center flex-wrap">
                {intereses &&
                  intereses.map((elemento, index) => (
                    <span
                      key={elemento.codigo_interes}
                      className={`rounded-full px-2 py-1 my-1 mx-1 cursor-pointer select-none ${elemento.marcado
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-200"
                        }`}
                      onClick={() => handleEditarIntereses(index)}
                    >
                      {elemento.nombre}
                    </span>
                  ))}
              </div>
            </div>

            {/* Botones para modificar y cancelar */}
            <div className="flex flex-col min-[550px]:flex-row min-[550px]:col-span-2 px-3 gap-3">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-10 py-3 font-semibold flex-grow min-[550px]:order-2"
              >
                Guardar
              </button>

              <button
                className="bg-gray-300 rounded-lg px-10 py-3 font-semibold flex-grow min-[550px]:order-1"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/profile";
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
