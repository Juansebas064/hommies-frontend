import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Circle,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import { Icon } from "leaflet";

export default function MapView() {
  const [markers, setMarkers] = useState([
    {
      key: "001",
      coordinates: [4.073579856688821, -76.19267984380872],
    },
    {
      key: "002",
      coordinates: [4.070518507343204, -76.19021188675627],
    },
    {
      key: "003",
      coordinates: [4.071706654800554, -76.2032169473978],
    },
  ]);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    // Contenedor principal del mapa
    <MapContainer
      center={[4.074862, -76.192516]}
      zoom={17}
      scrollWheelZoom={false}
    >
      {/* Función para pintar los marcadores */}
      {markers.map((marker) => (
        <Marker
          key={marker.key}
          position={[marker.coordinates[0], marker.coordinates[1]]}
          eventHandlers={{
            click: () => {
              console.log("Clicked");
            },
          }}
        />
      ))}
      {/* Posición inicial en el mapa */}
      <Circle center={[4.074862, -76.192516]} radius={20} />
      {/* Atribución */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <button
        className="rounded-3xl w-[40px] h-[40px] absolute bottom-4 left-4 z-[400] bg-indigo-600 text-white p-0 text-4xl font-bold hover:scale-125 hover:duration-200"
        
      >
        +
      </button>

      {isToggled && (
        <div className="rounded-xl w-[350px] h-[350px] absolute bottom-20 left-4 z-[400] bg-gray-200 shadow-md before:duration-200 items-center justify-center px-3 py-1">
          <div className="flex flex-col -mx-3">
            <div className="w-full px-3 mb-4 mt-3 items-center">
              <div className="w-full items-center text-center justify-center pb-3">
                <label className="font-semibold text-indigo-700 text-sm shadow-lg shadow-indigo-300">
                  Crear una actividad
                </label>
              </div>

              <label className="mb-2 text-xs font-semibold px-1">
                Ubicación
              </label>
              <input
                type="text"
                placeholder="Selecciona una ubicación"
                className="w-[90%] px-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              />
              <button className="absolute w-[10%] rounded-md border-2 border-gray-200 outline-none hover:border-indigo-500 focus:border-indigo-500 hover:duration-200" onClick={handleToggle}>
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
          </div>
        </div>
      )}

      <MapEventHandler />
    </MapContainer>
  );
}

function MapEventHandler() {
  const map = useMapEvents({
    click: (e) => {
      console.log(e);
    },
  });
  return null;
}

// import React, { Component } from "react";
// import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
// import L from "leaflet";

// import "leaflet/dist/leaflet.css";

// const icon = L.icon({
//   iconSize: [25, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
//   iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
// });

// function MyComponent({ saveMarkers }) {
//   const map = useMapEvents({
//     click: (e) => {
//       const { lat, lng } = e.latlng;
//       L.marker([lat, lng], { icon }).addTo(map);
//       saveMarkers([lat, lng]);
//     }
//   });
//   return null;
// }

// export default class MyMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       markers: [[40.7, -74]],
//       data: []
//     };
//   }

//   saveMarkers = (newMarkerCoords) => {
//     const data = [...this.state.data, newMarkerCoords];
//     this.setState((prevState) => ({ ...prevState, data }));
//   };

//   render() {
//     return (
//       <div>
//         <MapContainer
//           className="Map"
//           center={{ lat: 40.7, lng: -74 }}
//           zoom={15}
//           scrollWheelZoom={false}
//           style={{ height: "100vh" }}
//         >
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <MyComponent saveMarkers={this.saveMarkers} />
//         </MapContainer>
//       </div>
//     );
//   }
// }
