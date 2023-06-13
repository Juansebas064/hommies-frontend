import { useContext, useEffect, useState } from "react";
import getEventStatus from "../../../utils/getEventStatus.js";
import { clockSVG, calendarSVG, close, ellipsis } from "../../../utils/svgs";
import { UserDataContext } from "../../Profile/UserDataProvider.jsx";
import { useForm } from "react-hook-form";
import EventOwnerMenu from "./EventMenuOwner.jsx";
import deleteEventFromDB from "../../../utils/Events/deleteEventFromDB.js";
import modifyEventToDB from "../../../utils/Events/modifyEventToDB.js";
import VentanaModal from "../../VentanaModal.jsx";


export default function EventDetails({
  selectedEvent,
  setSelectedEvent,
  eventStatus,
  updateEvents,
}) {
  // Verificación para no mostrarse en caso de no haber evento seleccionado
  if (!selectedEvent) {
    return null;
  }

  // Variable para actualizar el estado del evento (en progreso, terminado, sin empezar) si es modificado
  const [status, setStatus] = useState(() => handleEventStatus());

  // Abrir o cerrar el menú del propietario del evento
  const [ownerMenu, setOwnerMenu] = useState(false);

  // Se consulta el usuario para obtener la id
  const { userData } = useContext(UserDataContext);

  // Se verifica si el usuario es el propietario del evento
  const [isOwner, setIsOwner] = useState(selectedEvent.creador === userData.id);

  // Determinar si se está modificando un evento
  const [modifyingEvent, setModifyingEvent] = useState(false);

  // Uso de react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Cambiar el estado del evento
  function handleEventStatus() {
    const showStatus =
      eventStatus[
      getEventStatus(
        selectedEvent.fecha.substring(0, 10),
        selectedEvent.hora_inicio.substring(0, 5),
        selectedEvent.hora_final.substring(0, 5)
      )
      ];
    return showStatus;
  }

  useEffect(() => {
    setStatus(() => handleEventStatus());
  }, [selectedEvent]);


  // Restablecer el contenido de los inputs
  const handleReset = () => {
    reset({
      nombre: selectedEvent.nombre,
      descripcion: selectedEvent.descripcion,
      fecha: selectedEvent.fecha.substring(0, 10),
      hora_inicio: selectedEvent.hora_inicio.substring(0, 5),
      hora_final: selectedEvent.hora_final.substring(0, 5),
    });
  };

  // Función para enviar el evento a la bd
  async function modifyEvent(modifiedEventData) {
    try {
      const response = await modifyEventToDB(selectedEvent.codigo_evento, modifiedEventData)
      setModifyingEvent(false);
      updateEvents();
      modifiedEventData = {
        ...selectedEvent,
        ...modifiedEventData
      };
      setSelectedEvent({
        ...modifiedEventData
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Funcion para borrar un evento
  async function deleteEvent() {
    try {
      response = await deleteEventFromDB(selectedEvent.codigo_evento)

      console.log(response.data.message); // Mensaje de éxito o error del backend

      // Realizar cualquier otra acción necesaria después de eliminar el evento, como actualizar la lista de eventos
      updateEvents();
      setSelectedEvent(null);
    } catch (error) {
      console.error(error)
    }
  }

  return (

    // Cuadro de diálogo modal
    <VentanaModal estado={selectedEvent} cambiarEstado={setSelectedEvent} >
      {/* Menú del propietario del evento */}
      {selectedEvent.creador === userData.id && <EventOwnerMenu ownerMenu={ownerMenu} setOwnerMenu={setOwnerMenu} modifyingEvent={modifyingEvent} setModifyingEvent={setModifyingEvent} handleReset={handleReset} deleteEvent={deleteEvent} />}

      {/* Contenido del evento */}
      <form
        className="py-6 px-[8px] grid grid-cols-2"
        onSubmit={handleSubmit(modifyEvent)}
      >
        {/* Nombre del evento */}
        <input
          className={`text-xl font-bold text-center col-span-2 mb-3 mt-3 cursor-text ${modifyingEvent
            ? "border-gray-300 border-[1px] rounded-md"
            : "border-0"
            }`}
          placeholder="Nombre del evento"
          disabled={!modifyingEvent}
          {...register("nombre", {
            required: true,
            value: selectedEvent.nombre,
          })}
        />
        {errors.nombre?.type === "required" && (
          <p>Campo nombre es requerido *</p>
        )}

        {/* Descripción del evento */}
        <textarea
          className={`text-center overflow-y-scroll h-auto col-span-2 mb-3 px-3 cursor-text ${modifyingEvent
            ? "border-gray-300 border-[1px] rounded-md"
            : "border-0"
            }`}
          disabled={!modifyingEvent}
          placeholder="Descripción del evento"
          rows={selectedEvent.descripcion.length < 75 ? 2 : 3}
          {...register("descripcion", {
            required: true,
            value: selectedEvent.descripcion,
          })}
        />
        {errors.descripcion?.type === "required" && (
          <p>Campo descripción es requerido *</p>
        )}

        {/* ----------------------------------------------- */}

        {/* Encabezado estado del evento */}
        <p className="text-center font-bold">Estado</p>
        {/* Encabezado temáticas del evento */}
        <p className="text-center font-bold">Temática</p>

        {/* Estado del evento */}
        <p className={`${status.color} mb-8 text-center`}>{`● ${status.text}`}</p>
        {/* Temáticas */}
        <p className="text-center">Temáticas</p>

        {/* ----------------------------------------------- */}

        {/* Encabezado fecha */}
        <p className="text-center font-bold">Fecha</p>
        {/* Encabezado horario */}
        <p className="text-center font-bold">Horario</p>

        {/* Fecha del evento */}
        <p className="text-sm text-center lg:text-center">
          {!modifyingEvent && (
            <span className="mr-[6px]">{calendarSVG(20)}</span>
          )}
          <input
            type="date"
            className={`align-middle relative ${modifyingEvent
              ? "border-gray-300 border-[1px] rounded-md"
              : "border-0"
              }`}
            min={new Date().toISOString().split("T")[0]}
            disabled={!modifyingEvent}
            {...register("fecha", {
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
              className={`w-12 text-center col-span-2 mb-3 cursor-text ${modifyingEvent
                ? "border-gray-300 border-[1px] rounded-md"
                : "border-0"
                }`}
              placeholder="00:00"
              disabled={!modifyingEvent}
              {...register("hora_inicio", {
                required: true,
                value: selectedEvent.hora_inicio.substring(0, 5),
                pattern: {
                  value: /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/,
                  message: "Formato de hora de inicio no válido",
                },
              })}
            />
            {" - "}
            {/* Hora final */}
            <input
              className={`w-12 text-center col-span-2 mb-3 cursor-text ${modifyingEvent
                ? "border-gray-300 border-[1px] rounded-md"
                : "border-0"
                }`}
              placeholder="00:00"
              disabled={!modifyingEvent}
              {...register("hora_final", {
                required: true,
                value: selectedEvent.hora_final.substring(0, 5),
                pattern: {
                  value: /([0-1]?[0-9]|2[0-3]):[0-5][0-9]/,
                  message: "Formato de hora final no válido",
                },
              })}
            />
          </span>
        </p>

        {/* ----------------------------------------------- */}

        {/*Encabezado lugar del evento */}
        <p className="text-center font-bold col-span-2">Lugar</p>
        {/* Lugar del evento */}
        <p className="text-sm text-center lg:text-center col-span-2">
          <span className="mr-[6px]"> { } </span>
        </p>
        <p className="text-sm text-center lg:text-center col-span-2">
          <span className="mr-[6px]">{ }</span>
        </p>

        {errors.hora_inicio && (
          <p className="col-span-2 text-center"> {errors.hora_inicio.message}</p>
        )}
        {errors.hora_final && (
          <p className="col-span-2 text-center"> {errors.hora_final.message}</p>
        )}

        {/* ----------------------------------------------- */}

        {/* Botón guardar evento editado*/}
        {modifyingEvent && (
          <button
            className="my-2 rounded-3xl mx-auto font-bold text-white text-center bg-indigo-500 col-span-2 hover:bg-indigo-700 py-2 px-3"
            type="submit">
            Guardar
          </button>
        )}

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
    </VentanaModal>
  );
}
