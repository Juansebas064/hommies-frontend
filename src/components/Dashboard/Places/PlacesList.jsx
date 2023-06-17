import { useContext, useState, useEffect } from "react"
import { PlacesContext } from "./PlacesProvider"
import PlaceDetails from "./PlaceDetails"
import { location } from '../../../utils/svgs'
import dummiePhoto from "../../../assets/HOMMIES.png"


export default function PlacesList() {

  // Lista de lugares
  const { places, fetchPlaces } = useContext(PlacesContext)

  // Mostrar detalles del lugar
  const [selectedPlace, setSelectedPlace] = useState(null)

  function handleShowPlaceDetails(place) {
    setSelectedPlace(place)
  }

  return (
    places ?
      <>
        <div className="relative flex flex-col items-center text-sm lg:px-0 overflow-hidden">
          <ul className="w-full sm:grid sm:grid-cols-2 sm:gap-x-3 lg:block lg:overflow-y-auto h-auto" id="place-list">
            {/* Iterar sobre la lista de lugares */}
            {places.map((lugar) => <PlaceItem lugar={lugar} key={lugar.codigo_lugar} handleShowPlaceDetails={handleShowPlaceDetails} />)}
          </ul>
        </div>
        {/* Detalles del evento al hacer click sobre uno */}
        <PlaceDetails selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      </>
      :
      <div className="flex-grow flex flex-col items-center justify-center text-[30px] min-h-[150px] text-sm">
        <p className="text-center">No hay lugares para mostrar</p>
      </div>
  )

  function PlaceItem({ lugar, handleShowPlaceDetails }) {

    return (
      <li
        className="box-border hover:cursor-pointer text-gray-800 hover:border-indigo-500 border-[2px] overflow-hidden rounded-[20px] border-gray-300 my-3 lg:mx-1 lg:hover:scale-[1.02] lg:transition-transform lg:ease-in-out lg:duration-150 relative min-h-[150px] flex justify-end"
        onClick={() => handleShowPlaceDetails(lugar)}>

        {/* Foto del lugar */}
        {/* https://computing.which.co.uk/hc/article_attachments/360003905180/location.JPG */}
        <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/42/43/ed/place.jpg?w=1200&h=-1&s=1' alt="" className="z-[-1] rounded-[20px] object-cover absolute left-0 right-0" />

        {/* Resumen del lugar */}
        <div className="bg-white flex flex-col justify-center max-w-[50%] flex-grow z-[1] ">

          {/* Nombre del lugar */}
          <p className={`text-base font-bold text-center col-span-2 mb-1`}>
            {`${lugar.nombre}`}
          </p>

          {/* Dirección del lugar */}
          <p className="text-center flex items-center justify-center">
            <span className="align-top">{location(22)}</span>
            {lugar.direccion}
          </p>
          {/* Aforo */}
          <p className="text-center">{lugar.aforo}</p>
        </div>
      </li>
    )
  }
}