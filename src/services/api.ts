import Axios from "axios";

const BASE_URL = "https://api.openweathermap.org";

export const appid = process.env.REACT_APP_WEATHER_APP_ID;

const api = Axios.create({
  baseURL: BASE_URL,
});

export default api;
