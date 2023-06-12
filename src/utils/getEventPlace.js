import axios from "axios";

export const getEventPlace = async (eventId) => {
    try {
        const eventResponse = await axios.get(`http://localhost:5000/api/evento/consultar/${eventId}`);
        const eventData = eventResponse.data;
    
        const lugarId = eventData.lugar;
    
        const lugarResponse = await axios.get(`http://localhost:5000/api/lugar/${lugarId}`);
        const lugarData = lugarResponse.data;
    
        const eventoConLugar = {
          ...eventData,
          lugar: lugarData
        };
    
        return eventoConLugar;
      } catch (error) {
        console.error('Error al realizar la solicitud al backend:', error);
        return null;
      }
}