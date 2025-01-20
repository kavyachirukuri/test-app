import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const fetchWeatherData = async (latitude, longitude) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude,
        longitude,
        current: "temperature_2m",
        daily:
          "weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset",
        current_weather: true,
        timezone: "auto",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
