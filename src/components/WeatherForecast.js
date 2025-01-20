import React from "react";
import "../styles/WeatherForecast.css";
import { formatDate } from "../utils/dateUtils";
import { getWeatherIcon } from "../utils/weatherIcons";
import weatherDescriptions from "../constants/weatherDescriptions";

const WeatherForecast = ({ daily }) => {
  return (
    <div className="weather-forecast">
      <h3>3-Day Weather Forecast</h3>
      <ul className="forecast-list">
        {daily?.time.slice(0, 3).map((date, index) => (
          <li key={index} className="forecast-item">
            <div>
              <p className="date">{index === 0 ? "Today" : formatDate(date)}</p>
              <div className="icon-description">
                <span className="icon">
                  {getWeatherIcon(daily.weathercode[index])}
                </span>
                <span className="description">
                  {weatherDescriptions[daily.weathercode[index]] || "Unknown"}
                </span>
              </div>
            </div>
            <div className="temps">
              <p>
                <span className="temp-range">High:</span>{" "}
                {daily.temperature_2m_max[index]}°C
              </p>
              <p>
                <span className="temp-range">Low:</span>{" "}
                {daily.temperature_2m_min[index]}°C
              </p>
            </div>
            <div className="additional-info">
              <p>
                <span className="sun-timing">Sunrise:</span>{" "}
                {new Date(daily.sunrise[index]).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>
                <span className="sun-timing">Sunset:</span>{" "}
                {new Date(daily.sunset[index]).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
