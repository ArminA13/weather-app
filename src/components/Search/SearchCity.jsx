import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/slices/weatherSlices";

const SearchCity = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      dispatch(fetchWeather(city));
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleChange}
      />
      <button>Search City</button>
    </form>
  );
};

export default SearchCity;
