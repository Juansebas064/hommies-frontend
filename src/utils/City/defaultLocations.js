const locations = {
  111: {
    coordinates: [4.0864122, -76.1909629],
    zoom: 14
  },
  222: {
    coordinates: [3.4348269, -76.5041975],
    zoom: 13
  }
}

export default function defaultLocations(codigo_ciudad) {

  return locations[codigo_ciudad]
}