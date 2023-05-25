import React from 'react'
import MapView from './MapView'
import Activities from './Events'

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto p-0">
      <MapView />
      <Activities />
    </div>
  )
}
