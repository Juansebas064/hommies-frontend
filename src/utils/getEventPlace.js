import axios from "axios";

export const getEventPlace = async (placeId) => {
  const requestPort = import.meta.env.VITE_BACKEND_PORT
  try {
    const eventResponse = await axios.get(`http://localhost:${requestPort}/api/evento/consultar/${eventId}`);
    const eventData = eventResponse.data;
    console.log('EventData:', eventData)

    const lugarId = eventData.lugar;

    const lugarResponse = await axios.get(`http://localhost:${requestPort}/api/lugar/${lugarId}`);
    const lugarData = lugarResponse.data;
    console.log('LugarData:', lugarData)

    const eventoConLugar = {
      ...eventData,
      lugar: lugarData
    };
    console.log('Evento con lugar:', eventoConLugar)

    return eventoConLugar;
  } catch (error) {
    console.error('Error al realizar la solicitud al backend:', error);
    return null;
  }
}