import { useContext, useEffect, useState } from "react";
import getEventStatus from "../../../utils/getEventStatus.js";
import { clockSVG, calendarSVG, close, ellipsis } from "../../../utils/svgs";
import { UserDataContext } from "../../Profile/UserDataProvider.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function EventDetails({
  selectedEvent,
  setSelectedEvent,
  eventStatus,
  updateEvents
}) {

  // Verificación para no mostrarse en caso de no haber evento seleccionado
  if (!selectedEvent) {
    return null;
  }

  // Variable para actualizar el estado del evento (en progreso, terminado, sin empezar) si es modificado
  const [status, setStatus] = useState(() => handleEventStatus())

  // Abrir o cerrar el menú del propietario del evento
  const [ownerMenu, setOwnerMenu] = useState(false);

  // id del usuario para verificar si es el propietario
  const { userData } = useContext(UserDataContext)
  const id = userData.id

  const [isOwner, setIsOwner] = useState(selectedEvent.creador === id)

  // Determinar si se está modificando un evento
  const [modifyingEvent, setModifyingEvent] = useState(false)

  // Uso de react-hook-form 
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  // Cambiar el estado del evento
  function handleEventStatus() {
    const showStatus = eventStatus[getEventStatus(
      selectedEvent.fecha.substring(0, 10),
      selectedEvent.hora_inicio.substring(0, 5),
      selectedEvent.hora_final.substring(0, 5)
    )]
    return showStatus
  }

  useEffect(() => {
    console.log(selectedEvent)
    setStatus(() => handleEventStatus())
  }, [selectedEvent])

  // Restablecer el contenido de los inputs
  const handleReset = () => {
    reset({
      nombre: selectedEvent.nombre,
      descripcion: selectedEvent.descripcion,
      fecha: selectedEvent.fecha.substring(0, 10),
      hora_inicio: selectedEvent.hora_inicio.substring(0, 5),
      hora_final: selectedEvent.hora_final.substring(0, 5)
    })
  };

  // Función para enviar el evento a la bd
  async function onSubmit(modifiedEventData) {
    try {
      const response = await axios.put(`http://localhost:5000/api/evento/editar/:${selectedEvent.codigo_evento}`, modifiedEventData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      })
      setModifyingEvent(false)
      updateEvents()
      modifiedEventData = { ...selectedEvent, ...modifiedEventData }
      setSelectedEvent({ ...modifiedEventData })
    } catch (error) {
      console.log(error.message)
    }
  }


  async function deleteEvent() {
    console.log('Deleted')
  }


  return (
    // Cuadro de diálogo modal
    <div className="fixed z-[9999] bg-[rgba(0,0,0,0.2)] h-full w-full left-0 top-0 overflow-auto flex justify-center items-center">

      {/* Card */}
      <div className="z-[9999] bg-white rounded-[14px] relative min-w-[250px] max-w-[370px] sm:max-w-[470px] max-h-[70vh] sm:max-h-[70vh] px-3 sm:px-7 flex-grow overflow-auto">
        {/* Botón cerrar */}
        <span
          onClick={() => {
            setSelectedEvent(null);
          }}
          className="text-base font-bold absolute top-2 right-2 rounded-3xl cursor-pointer hover:scale-[0.8] hover:transition-all duration-500 p-1 hover:bg-red-500"
        >
          {close(22)}
        </span>

        {/* Menú del propietario del evento */}
        {isOwner &&
          <span
            onClick={() => {
              setOwnerMenu(!ownerMenu);
            }}
            className="text-base font-bold absolute top-2 left-2 rounded-3xl cursor-pointer hover:scale-[0.8] hover:transition-all duration-500 p-1 hover:bg-indigo-400"
          >
            {ellipsis(26)}
          </span>
        }

        {/* Opciones del menú del propietario */}
        {ownerMenu && (
          <div className="absolute top-7 left-4 z-50 mt-2 bg-white divide-y divide-gray-200 rounded-md shadow-lg overflow-hidden">
            <button className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-indigo-400 hover:duration-500 z-50"
              onClick={() => {
                setModifyingEvent(!modifyingEvent)
                setOwnerMenu(!ownerMenu)
                if (modifyingEvent) {
                  handleReset()
                }
              }}
            >
              {modifyingEvent ? 'Cancelar' : 'Modificar'}

            </button>
            <button className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-red-600 hover:duration-500 hover:text-white z-50" onClick={deleteEvent}>
              Eliminar
            </button>
          </div>
        )}

        {/* Contenido del evento */}
        <form className="py-6 px-[8px] grid grid-cols-2" onSubmit={handleSubmit(onSubmit)}>

          {/* Nombre del evento */}
          <input
            className={`text-xl font-bold text-center col-span-2 mb-3 mt-3 cursor-text ${modifyingEvent ? 'border-gray-300 border-[1px] rounded-md' : 'border-0'}`}
            placeholder="Nombre del evento"
            disabled={!modifyingEvent}
            {...register('nombre', {
              required: true,
              value: selectedEvent.nombre
            })}
          />
          {errors.nombre?.type === 'required' && <p>Campo nombre es requerido *</p>}

          {/* Descripción del evento */}
          <textarea
            className={`text-center overflow-y-scroll h-auto col-span-2 mb-3 px-3 cursor-text ${modifyingEvent ? 'border-gray-300 border-[1px] rounded-md' : 'border-0'}`}
            disabled={!modifyingEvent}
            placeholder="Descripción del evento"
            rows={selectedEvent.descripcion.length < 75 ? 2 : 3}
            {...register('descripcion', {
              required: true,
              value: selectedEvent.descripcion
            })}
          />
          {errors.descripcion?.type === 'required' && <p>Campo descripción es requerido *</p>}

          {/* Encabezados */}
          <p className="text-center font-bold">Estado</p>
          <p className="text-center font-bold">Temática</p>

          {/* Estado del evento */}
          <p className={`${status.color} mb-8 text-center`}>
            {`● ${status.text}`}
          </p>

          {/* Temáticas */}
          <p className="text-center">Temáticas</p>

          {/* Encabezados */}
          <p className="text-center font-bold">Fecha</p>
          <p className="text-center font-bold">Horario</p>

          {/* Fecha del evento */}
          <p className="text-sm text-center lg:text-center">
            {!modifyingEvent && <span className="mr-[6px]">{calendarSVG(20)}</span>}
            <input
              type="date"
              className={`align-middle relative ${modifyingEvent ? 'border-gray-300 border-[1px] rounded-md' : 'border-0'}`}
              min={new Date().toISOString().split("T")[0]}
              disabled={!modifyingEvent}
              {...register('fecha', {
                required: true,
                value: selectedEvent.fecha.substring(0, 10),
              })}
            />
          </p>

          {/* Hora del evento */}
          <p className="text-sm text-center lg:text-center">

            <span className="mr-[6px]">{clockSVG(18)}</span>

            {/* Hora de inicio */}
            <span className="align-end">
              <input
                className={`w-12 text-center col-span-2 mb-3 cursor-text ${modifyingEvent ? 'border-gray-300 border-[1px] rounded-md' : 'border-0'}`}
                placeholder="00:00"
                disabled={!modifyingEvent}
                {...register('hora_inicio', {
                  required: true,
                  value: selectedEvent.hora_inicio.substring(0, 5),
                  pattern: {
                    value: /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/,
                    message: 'Formato de hora de inicio no válido'
                  }
                })}
              />
              {' - '}
              {/* Hora final */}
              <input
                className={`w-12 text-center col-span-2 mb-3 cursor-text ${modifyingEvent ? 'border-gray-300 border-[1px] rounded-md' : 'border-0'}`}
                placeholder="00:00"
                disabled={!modifyingEvent}
                {...register('hora_final', {
                  required: true,
                  value: selectedEvent.hora_final.substring(0, 5),
                  pattern: {
                    value: /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/,
                    message: 'Formato de hora final no válido'
                  }
                })}
              />
            </span>
          </p>

          {
            errors.hora_inicio &&
            <p className="col-span-2 text-center">
              {errors.hora_inicio.message}
            </p>
          }

          {
            errors.hora_final &&
            <p className="col-span-2 text-center">
              {errors.hora_final.message}
            </p>
          }

          {/* Botón guardar evento editado*/}
          {modifyingEvent &&
            <button className="my-2 rounded-3xl mx-auto font-bold text-white text-center bg-indigo-500 col-span-2 hover:bg-indigo-700 py-2 px-3" type="submit">
              Guardar
            </button>
          }

          {/* Lista de participantes */}
          <details className="block w-[240px] max-w-[240px] min-w-[150px] p-1 mt-5 mb-3 mx-auto border-[1px] border-indigo-500 rounded-lg col-span-2 cursor-pointer">
            <summary>Participantes</summary>
            <p>Smith</p>
            <p>Casariz</p>
          </details>

          {/* Botón unirse al evento */}
          <button className="rounded-3xl mx-auto my-3 font-bold text-white text-center bg-indigo-500 col-span-2 hover:bg-indigo-700 py-2 px-3">
            Quiero unirme
          </button>
        </form>
      </div>

    </div >

  );
}
