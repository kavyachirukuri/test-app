import React, { useState } from "react";
import LocationForm from "./components/LocationForm";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherData } from "./api/weatherApi";
import "./styles/App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLocationSubmit = async ({ latitude, longitude }) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(latitude, longitude);
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="flex">
        <LocationForm onSubmit={handleLocationSubmit} />

        {loading && <p>Loading...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && weatherData && (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
