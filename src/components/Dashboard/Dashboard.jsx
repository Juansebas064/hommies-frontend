import React, { useContext, useEffect } from 'react'
import MapView from './MapView'
import EventsAndPlaces from './EventsAndPlaces'
import { EventsContext } from './Events/EventsProvider'
import { PlacesContext } from './Places/PlacesProvider'

export default function Dashboard() {
  const { fetchEvents } = useContext(EventsContext)
  const { fetchPlaces } = useContext(PlacesContext)

  useEffect(() => {
    fetchEvents()
    fetchPlaces()
  }, [])

  return (
    <div className="flex flex-col lg:flex-row w-full p-0 h-full mx-auto">
      <MapView />
      <EventsAndPlaces />
    </div>
  )
}
