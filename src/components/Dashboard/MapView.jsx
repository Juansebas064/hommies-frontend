/* eslint-disable react/prop-types */
import { useEffect, useState, useContext, useRef, createContext } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Circle,
  Popup,
} from "react-leaflet";
import ButtonAddEventAndPlace from "./ButtonAddEventsAndPlaces/ButtonAddEventAndPlace"
import { getPlaceName } from "../../utils/placeName.js";
import { UserDataContext } from "../Profile/UserDataProvider";
import { PlacesContext } from "../Dashboard/Places/PlacesProvider"
import { UserLocationContext } from "./UserLocationProvider";
import location from '../../assets/location.svg'
import newLocation from '../../assets/new-location.svg'


export default function MapView() {

  // Usar el mapa como un objeto
  const map = useRef(null)

  // Guardar la ubicacion de un lugar temporalmente mientras se crea
  const [markerAux, setMarkerAux] = useState(null)

  // Ubicación del usuario y el mapa
  const { userLocation, setUserLocation } = useContext(UserLocationContext)

  // Datos del usuario para sacar la ciudad
  const { userData } = useContext(UserDataContext)

  // Lugares
  const { places } = useContext(PlacesContext)


  // Ajustar la ubicación al cargar la información del usuario
  useEffect(() => {
    if (userData) {
      setUserLocation({
        coordinates: defaultLocations[userData.ciudad].coordinates,
        zoom: defaultLocations[userData.ciudad].zoom
      })
    }
  }, [userData]);


  const [isToggled, setIsToggled] = useState(false);
  const [isToggledMarker, setIsToggledMarker] = useState(false);
  const [isToggledDate, setIsToggledDate] = useState(false);
  const [placeName, setPlaceName] = useState("Selecciona una ubicación");
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEventDate, setNewEventDate] = useState("Selecciona una fecha");

  return (

    // Contenedor principal del mapa
    <div className="lg:basis-[70%] relative">
      {userLocation && (
        <MapContainer
          key={`${userLocation.coordinates[0]}-${userLocation.coordinates[1]}-${userLocation.zoom}`}
          ref={map}
          center={userLocation.coordinates}
          zoom={userLocation.zoom}
          scrollWheelZoom={false}
          className="h-[63vh] lg:h-[89vh] shadow-[10px_10px_22px_-13px_rgba(0,0,0,0.4)]"
        >
          {/* Función para pintar los marcadores */}
          {places && places.map((place) => (
            <Marker
              key={place.codigo_lugar}
              position={JSON.parse(place.ubicacion)}
              // eslint-disable-next-line no-undef
              icon={L.icon({
                iconUrl: location,
                iconSize: [42, 42],
              })}
            // eventHandlers={{
            //   click: () => {
            //     onclick = {  }
            //   },
            // }}
            >
              <Popup >
                <div className="h-auto z-50 max-w-[300px]">
                  <h1 className="text-lg font-bold text-center mt-4">
                    {place.nombre}
                  </h1>
                  <p className="text-sm">{place.descripcion}</p>
                  <p className="text-sm"><span className="font-bold">Aforo: </span> {place.aforo}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Pintar temporalmente un marcador cuando se crea un lugar */}
          {markerAux &&
            <Marker
              key={'marker-aux'}
              position={markerAux}
              // eslint-disable-next-line no-undef
              icon={L.icon({
                iconUrl: newLocation,
                iconSize: [42, 42],
              })}>
            </Marker>
          }

          {/* Posición inicial en el mapa */}
          {/* <Circle center={[4.074862, -76.192516]} radius={20} /> */}
          {/* Atribución */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Componente para añadir un lugar en una ubicación donde el usuario dé click */}
          {isToggledMarker && (
            <AddMarker
              isToggledMarker={isToggledMarker}
              setIsToggledMarker={setIsToggledMarker}
              setPlaceName={setPlaceName}
              setMarkerAux={setMarkerAux}
            />
          )}
        </MapContainer>

      )}
      {/* Botón para añadir un evento */}
      <ButtonAddEventAndPlace
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
        placeNameDate={newEventDate} register
        setPlaceNameDate={setNewEventDate}
        coord={markerAux}
        setMarkerAux={setMarkerAux}
        map={map}
      />
    </div>
  );
}

function AddMarker({
  isToggledMarker,
  setIsToggledMarker,
  setPlaceName,
  setMarkerAux,
}) {

  useMapEvents({
    click: async (e) => {
      if (isToggledMarker) {
        const coord = [e.latlng.lat, e.latlng.lng];
        setMarkerAux(coord)
        setIsToggledMarker(false);
        const placeName = await getPlaceName(e.latlng.lat, e.latlng.lng);
        setPlaceName(placeName);
      }
    },
  });
}

// Ubicaciones predeterminadas de acuerdo a la ciudad para centrar el mapa
const defaultLocations = {
  111: {
    coordinates: [4.0864122, -76.1909629],
    zoom: 14
  },
  222: {
    coordinates: [3.4348269, -76.5041975],
    zoom: 12
  }
}