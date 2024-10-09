import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchFiveDaysData from "../../redux/slices/weatherSlices";
import { useEffect } from "react";

const WeatherList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.forecast);

  return <div>WeatherList</div>;
};

export default WeatherList;
