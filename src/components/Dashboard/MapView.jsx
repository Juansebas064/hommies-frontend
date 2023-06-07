import React, { useState } from "react";
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

  const [coord, setCoord] = useState(null)


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
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            position={[marker.coordinates[0], marker.coordinates[1]]}
            // eventHandlers={{
            //   click: () => {
            //     onclick = { openModal }
            //   },
            // }}
          >
            <Popup >
              <div className="w-full h-auto flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">
                    Informacion del sitio
                  </h2>
                  <p className="mb-4">Petición a backend en progreso...</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Posición inicial en el mapa */}
        <Circle center={[4.074862, -76.192516]} radius={20} />
        {/* Atribución */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Botón para añadir un evento */}
        <ButtonAddEvent
          isToggled={isToggled}
          isToggledMarker={isToggledMarker}
          isToggledDate={isToggledDate}
          setIsToggledDate={setIsToggledDate}
          setIsToggled={setIsToggled}
          setIsToggledMarker={setIsToggledMarker}
          placeName={placeName}
          setPlaceName={setPlaceName}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          placeNameDate={newEventDate}register
          setPlaceNameDate={setNewEventDate}
          coord={coord}
        />
        {/* Componente para actualizar la lista de marcadores */}
        {isToggledMarker && (
          <AddMarker
            setMarkers={setMarkers}
            isToggledMarker={isToggledMarker}
            setIsToggledMarker={setIsToggledMarker}
            setPlaceName={setPlaceName}
            setCoord={setCoord}
          />
        )}
      </MapContainer>
    </div>
  );
}

function AddMarker({
  setMarkers,
  isToggledMarker,
  setIsToggledMarker,
  setPlaceName,
  setCoord,
}) {
  useMapEvents({
    click: async (e) => {
      const coord = [e.latlng.lat, e.latlng.lng];
      console.log(e);
      if (isToggledMarker) {
        setMarkers((previousState) => [
          ...previousState,
          {
            key: previousState[previousState.length - 1].key + 1,
            coordinates: coord,
          },
        ]);
        setIsToggledMarker(false);
        const placeName = await getPlaceName(e.latlng.lat, e.latlng.lng);
        console.log(placeName);
        setPlaceName(placeName);
        setCoord(coord);
      }
    },
  });
}
