import axios from "axios";

export default async function getLocation(search) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=json&limit=1`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
}
