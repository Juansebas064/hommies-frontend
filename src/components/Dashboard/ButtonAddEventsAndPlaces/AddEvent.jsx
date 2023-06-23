/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { EventsContext } from "../Events/EventsProvider";
import ConfirmacionEventoCreado from "../../VentanaModal"
import { PlacesContext } from "../Places/PlacesProvider";
import { buttonExpand } from "../../../utils/svgs";

const AddEvent = ({ setIsToggled }) => {

  // Lista de lugares para registrarlos en el evento
  const { places } = useContext(PlacesContext)

  // Importar la función para actualizar lista de eventos una vez creado
  const { fetchEvents } = useContext(EventsContext)

  // Variable para mostrar confirmación de evento creado en un 
  const [confirmacionEventoCreado, setConfirmacionEventoCreado] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (datosNuevoEvento) => {

    if (datosNuevoEvento.lugar) {
      await axios.post("http://localhost:5000/api/evento/agregar", datosNuevoEvento, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      })
        .then(async (response) => {
          console.log(response.data.message)
          await fetchEvents()
          setConfirmacionEventoCreado(true)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      {confirmacionEventoCreado && <ConfirmacionEventoCreado estado={confirmacionEventoCreado} cambiarEstado={setIsToggled}>
        <h1 className="text-center m-6 text-sm font-semibold">Evento creado satisfactoriamente</h1>
      </ConfirmacionEventoCreado>}
      <div className="w-full px-3 mb-4 mt-3 items-center relative">
        <div className="w-full items-center text-center justify-center pb-3">
          <h1 className="font-semibold text-indigo-700 text-base shadow-lg shadow-indigo-300 my-7 w-fit text-center mx-auto">
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
              rows={3}
              className="w-full mb-2 text-sm px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
              {...register("descripcion", {
                required: true,
              })}
            />
            {errors.descripcion?.type === "required" && (
              <p className="mb-3">Campo descripcion es requerido *</p>
            )}
            {/* Lugar y fecha */}
            <div className="flex items-center justify-between mb-2">

              {/* Lugar */}
              <div className="basis-[50%] mr-2">
                <label className="text-sm font-semibold">Lugar</label>
                <div className="relative overflow-visible border-0 bg-transparent">

                  {/* Campo para ingresar el lugar */}
                  <input
                    id="campo-lugar"
                    type="search"
                    autoComplete="off"
                    onKeyUp={(event) => {
                      // setTextoCampoLugar(event.target.value.toLowerCase())
                      if (event.key === 'Escape') {
                        document.getElementById('lista-lugares').style.display = 'none'
                      } else {
                        const listaLugares = document.getElementById('lista-lugares')
                        listaLugares.style.display = 'block'
                        const textSearch = event.target.value.toLowerCase()
                        const places = listaLugares.getElementsByTagName('li')

                        for (let i = 0; i < places.length; i++) {
                          if (places[i].textContent.toLowerCase().includes(textSearch)) {
                            places[i].style.display = 'block'
                          } else {
                            places[i].style.display = 'none'
                          }
                        }
                      }
                    }}
                    onClick={() => {
                      document.getElementById('lista-lugares').style.display = 'block'
                    }}
                    placeholder="Buscar..."
                    className="text-sm w-full px-4 py-2 rounded-lg border-2 border-gray-200 mr-2 focus:border-indigo-500 focus:border-2"
                  />

                  {/* Botón para desplegar la lista */}
                  <button type="button" id="boton-lugar"
                    className="absolute top-[50%] -translate-y-1/2 right-[7px] bg-white rounded-lg border-[2px] border-gray-300"
                    onKeyUp={(event) => {
                      if (event.key === 'Escape') {
                        document.getElementById('lista-lugares').style.display = 'none'
                      }
                    }}
                    onClick={() => {
                      const lista = document.getElementById('lista-lugares')
                      lista.style.display = lista.style.display === 'block' ? 'none' : 'block';
                    }}
                    {...register("lugar", {
                      required: true,
                    })}
                  >
                    {buttonExpand(28)}
                  </button>

                  {/* Lista de lugares */}
                  <ul id="lista-lugares" className="hidden absolute top-[100%] right-1 left-1 bg-white rounded-lg border-[1px] border-indigo-500 px-3 max-h-[130.5px] overflow-y-auto">
                    {
                      places.map((place, index) => (
                        <li
                          key={place.codigo_lugar}
                          className={`text-gray-800 ${index === places.length - 1 ? 'border-b-[0px]' : 'border-b-[2px]'} border-gray-30000 whitespace-nowrap text-sm text-left overflow-hidden overflow-ellipsis py-2 px-1 cursor-pointer hover:text-indigo-600`}
                          onClick={() => {
                            const lugar = document.getElementById('campo-lugar')
                            lugar.value = place.nombre
                            document.getElementById('boton-lugar').value = place.codigo_lugar
                            document.getElementById('lista-lugares').style.display = 'none'
                          }}
                        >
                          {place.nombre}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                {errors.lugar && (
                  <p className="mb-3">{errors.message}</p>
                )}
              </div>

              {/* Fecha */}
              <div className="basis-[50%] ml-2 flex-shrink">
                <label className="text-sm font-semibold px-1">Fecha</label>
                <input
                  className="w-full px-[6px] py-2 rounded-lg border-2 border-gray-200 text-sm focus:border-indigo-500"
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
            <div className="flex items-center justify-between px-0">
              {/* Hora de inicio */}
              <div className="mr-2">
                <label className="mb-2 text-sm font-semibold">Hora inicio</label>
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
              onClick={() => console.log(document.getElementById('campo-lugar').value)}
            >
              Crear evento
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
