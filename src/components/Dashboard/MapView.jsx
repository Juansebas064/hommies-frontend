import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView() {
  return (
    <MapContainer center={[4.074862, - 76.192516]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}