import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/slices/weatherSlices";

const WeatherDay = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weatherData);
  console.log(weather);

  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather("Yerevan"));
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>{`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDay;
