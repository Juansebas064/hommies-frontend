/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { PlacesContext } from "./PlacesProvider";
import { UserLocationContext } from "../UserLocationProvider";
import PlaceDetails from "./PlaceDetails";
import { location } from "../../../utils/svgs";

async function fetchImage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al cargar la imagen");
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    throw error;
  }
}

export default function PlacesList() {
  // Ubicación del usuario y el mapa
  const { setUserLocation } = useContext(UserLocationContext);

  // Lista de lugares
  const { places } = useContext(PlacesContext);

  // Mostrar detalles del lugar
  const [selectedPlace, setSelectedPlace] = useState(null);

  function handleShowPlaceDetails(place) {
    setSelectedPlace(place);
  }

  function PlaceItem({ lugar }) {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      if (lugar) {
        const ruta = lugar.foto;
        const imageUrl = `http://localhost:5000/${ruta}`;

        fetchImage(imageUrl)
          .then((url) => setImageSrc(url))
          .catch(() =>
            setImageSrc(
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/42/43/ed/place.jpg?w=1200&h=-1&s=1"
            )
          );
      }
    }, [lugar]);

    if (!lugar) {
      return null; // O puedes mostrar un componente de carga o mensaje de error
    }

    return (
      <li className="box-border text-gray-800 hover:border-indigo-500 border-[2px] overflow-hidden rounded-[20px] border-gray-300 my-3 lg:mx-1 relative h-[170px]">
        {/* Foto del lugar */}
        <div className="basis-[40%] object-cover absolute top-0 bottom-0">
          {imageSrc && (
            <img
              src={imageSrc}
              alt=""
              className="h-full hover:cursor-pointer"
              onClick={() => handleShowPlaceDetails(lugar)}
            />
          )}
        </div>


        {/* Resumen del lugar */}
        <div className="bg-white flex flex-col justify-center z-[1] h-full w-[60%] absolute right-0">
          {/* Nombre del lugar */}
          <p
            className={`text-base font-bold text-center col-span-2 mb-1 hover:cursor-pointer hover:underline `}
            onClick={() => handleShowPlaceDetails(lugar)}
          >
            {`${lugar.nombre}`}
          </p>

          {/* Dirección del lugar */}
          <p className="text-center flex items-center justify-center mx-3">
            <span>
              {location(22)}
              {lugar.direccion}
            </span>
          </p>

          {/* Aforo */}
          <p className="text-center">
            <span className="font-semibold">Aforo:</span> {lugar.aforo}
          </p>

          {/* Botón ver en el mapa */}
          <button
            className="underline my-2 hover:text-indigo-500 p-0"
            onClick={() => {
              setUserLocation({
                coordinates: JSON.parse(lugar.ubicacion),
                zoom: 17,
              });
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Ver en el mapa
          </button>
        </div>
      </li>
    );
  }

  return places ? (
    <>
      <div className="relative flex flex-col items-center text-sm lg:px-0 overflow-hidden mt-[10px]">
        <ul
          className="w-full sm:grid sm:grid-cols-2 sm:gap-x-3 lg:block overflow-y-auto h-auto"
          id="place-list"
        >
          {/* Iterar sobre la lista de lugares */}
          {places.map((lugar) => (
            <PlaceItem
              key={lugar.codigo_lugar}
              lugar={lugar}
              handleShowPlaceDetails={handleShowPlaceDetails}
            />
          ))}
        </ul>
      </div>
      {/* Detalles del evento al hacer click sobre uno */}
      <PlaceDetails
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
    </>
  ) : (
    <div className="flex-grow flex flex-col items-center justify-center text-[30px] min-h-[150px] text-sm">
      <p className="text-center">No hay lugares para mostrar</p>
    </div>
  );
}
