import React from "react";
import { getWeatherIcon } from "../utils/weatherIcons";
import WeatherForecast from "./WeatherForecast";
import "../styles/WeatherCard.css";
import weatherDescriptions from "../constants/weatherDescriptions";

const WeatherCard = ({ weatherData }) => {
  const currentWeather = weatherData?.current_weather;
  const daily = weatherData?.daily;
  const timezone = weatherData?.timezone;

  const weatherDescription =
    weatherDescriptions[currentWeather?.weathercode] || "Unknown Weather";

  return (
    <div className="weather-card">
      <h2>
        {timezone ? `Weather in ${timezone} Time Zone` : "Weather Information"}
      </h2>
      <div className="current-weather">
        <div className="current-weather-main">
          <span className="temperature">
            {Math.round(currentWeather?.temperature)}°C
          </span>
          <span className="weather-icon">
            {getWeatherIcon(currentWeather?.weathercode)}
          </span>
        </div>
        <p>{weatherDescription}</p>
        <div className="weather-details">
          <p>
            <strong>Low:</strong> {Math.round(daily?.temperature_2m_min[0])}°C
            &nbsp;&nbsp;&nbsp;
            <strong>High:</strong> {Math.round(daily?.temperature_2m_max[0])}°C
          </p>
          <p>
            <strong>Sun Rise:</strong>{" "}
            {new Date(daily?.sunrise[0]).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            &nbsp;&nbsp;&nbsp;
            <strong>Sun Set:</strong>{" "}
            {new Date(daily?.sunset[0]).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>
            <strong>Wind Speed:</strong> {currentWeather?.windspeed} km/h
          </p>
        </div>
      </div>
      <WeatherForecast daily={daily} />
    </div>
  );
};

export default WeatherCard;
