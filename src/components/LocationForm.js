import React, { useState } from "react";
import "../styles/LocationForm.css";

const LocationForm = ({ onSubmit }) => {
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoordinates({ ...coordinates, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(coordinates);
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <label>
        Latitude:
        <input
          type="number"
          name="latitude"
          value={coordinates.latitude}
          onChange={handleChange}
          placeholder="Enter latitude"
          required
        />
      </label>
      <label>
        Longitude:
        <input
          type="number"
          name="longitude"
          value={coordinates.longitude}
          onChange={handleChange}
          placeholder="Enter longitude"
          required
        />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationForm;
