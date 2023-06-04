import React, { useState } from "react";
import SiteModalView from "./SiteModalView";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Circle,
  Popup,
} from "react-leaflet";
import ButtonAddEvent from "./ButtonAddEvent";
import { getPlaceName } from "../../utils/placeName.js";


export default function MapView() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Marcadores iniciales (los que el usuario tenga guardados)
  const [markers, setMarkers] = useState([
    {
      key: 1,
      coordinates: [4.073579856688821, -76.19267984380872],
    },
    {
      key: 2,
      coordinates: [4.070518507343204, -76.19021188675627],
    },
    {
      key: 3,
      coordinates: [4.071706654800554, -76.2032169473978],
    },
  ]);

  const [isToggled, setIsToggled] = useState(false);
  const [isToggledMarker, setIsToggledMarker] = useState(false);
  const [isToggledDate, setIsToggledDate] = useState(false);
  const [placeName, setPlaceName] = useState("Selecciona una ubicación");
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEventDate, setNewEventDate] = useState("Selecciona una fecha");

  return (
    // Contenedor principal del mapa
    <div className="lg:basis-[70%] z-0">
      <MapContainer
        center={[4.074862, -76.192516]}
        zoom={17}
        scrollWheelZoom={false}
        className="h-[63vh] lg:h-[89vh] shadow-[10px_10px_22px_-13px_rgba(0,0,0,0.4)]"
      >
        {/* Función para pintar los marcadores */}
        {
          markers.map((marker) => (
            <Marker
              key={marker.key}
              position={[marker.coordinates[0], marker.coordinates[1]]}
            // eventHandlers={{
            //   click: () => {
            //     onclick = { openModal }
            //   },
            // }}
            >
              <Popup>
                <h2 className="text-lg font-bold mb-4 text-center">Informacion del sitio</h2>
                <p className="mb-4">Petición a backend en progreso...</p>
              </Popup>
            </Marker>
          ))
        }
        <SiteModalView isOpen={isModalOpen} onClose={closeModal} />
        {/* Posición inicial en el mapa */}
        <Circle center={[4.074862, -76.192516]} radius={20} />
        {/* Atribución */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Botón para añadir un evento */}
        <ButtonAddEvent isToggled={isToggled} isToggledMarker={isToggledMarker} isToggledDate={isToggledDate} setIsToggledDate={setIsToggledDate} setIsToggled={setIsToggled} setIsToggledMarker={setIsToggledMarker} placeName={placeName} setPlaceName={setPlaceName} selectedDate={selectedDate} setSelectedDate={setSelectedDate} placeNameDate={newEventDate} setPlaceNameDate={setNewEventDate} />
        {/* Componente para actualizar la lista de marcadores */}
        {isToggledMarker && <AddMarker setMarkers={setMarkers} isToggledMarker={isToggledMarker} setIsToggledMarker={setIsToggledMarker} setPlaceName={setPlaceName} />}
      </MapContainer >
    </div>
  );
}

function AddMarker({
  setMarkers,
  isToggledMarker,
  setIsToggledMarker,
  setPlaceName,
}) {
  useMapEvents({
    click: async (e) => {
      console.log(e);
      if (isToggledMarker) {
        setMarkers((previousState) => [
          ...previousState,
          {
            key: previousState[previousState.length - 1].key + 1,
            coordinates: [e.latlng.lat, e.latlng.lng],
          },
        ]);
        setIsToggledMarker(false);
        const placeName = await getPlaceName(e.latlng.lat, e.latlng.lng);
        console.log(placeName);
        setPlaceName(placeName);
      }
    },
  });
}
