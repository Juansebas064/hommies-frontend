import { useContext, useEffect, useState } from "react";
import VentanaModal from "../../VentanaModal.jsx";
import obtenerListaEventos from "../../../utils/Places/obtenerListaEventos.js";

export default function EventDetails({ selectedPlace, setSelectedPlace }) {
  // Verificación para no mostrarse en caso de no haber evento seleccionado
  if (!selectedPlace) {
    return null;
  }

  // Lista de eventos de un lugar
  const [listaEventos, setListaEventos] = useState(null);

  // Obtener lista de eventos de un lugar
  async function obtenerListaEventosLugar() {
    const listaEventos = await obtenerListaEventos(selectedPlace.codigo_lugar);
    setListaEventos(listaEventos.data.rows);
  }

  useEffect(() => {
    obtenerListaEventosLugar();
  }, []);

  return (
    // Cuadro de diálogo modal
    <VentanaModal estado={selectedPlace} cambiarEstado={setSelectedPlace}>

      {/* Contenido del lugar */}

      {/* Nombre del lugar */}
      <p className={`text-xl font-bold text-center col-span-2 mb-3 mt-3 cursor-text`}>
        {selectedPlace.nombre}
      </p>

      {/* Descripción del lugar */}
      <p className={`text-center resize-none overflow-y-scroll h-auto col-span-2 mb-3 px-3 cursor-text`}>
        {selectedPlace.descripcion}
      </p>

      {/* Lista de eventos */}
      <details className="block w-[240px] max-w-[240px] min-w-[150px] p-1 mt-5 mb-3 mx-auto border-[1px] border-indigo-500 rounded-lg col-span-2 cursor-pointer">
        <summary>Eventos en este lugar</summary>
        {listaEventos === null ? (
          <div>No hay eventos en este lugar</div>
        ) : (
          listaEventos.map((evento, index) => (
            <div key={index}>{evento.nombre}</div>
          ))
        )}
      </details>
    </VentanaModal>
  );
}
