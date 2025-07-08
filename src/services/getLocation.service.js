import axios from "axios";

export default async function getLocation(search) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=json&limit=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
}
