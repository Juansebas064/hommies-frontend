import React from 'react'
import MapView from './MapView'
import Activities from './Activities'

export default function Dashboard() {
  return (
    <div className="flex p-0">
      <MapView />
      <Activities />
    </div>
  )
}
