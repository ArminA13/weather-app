import "./App.css";
import SearchCity from "./components/Search/SearchCity";
import WeatherDay from "./components/WeatherDay/WeatherDay";
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
  return (
    <div className="App">
      <SearchCity />
      <WeatherDay />
      <WeatherList />
    </div>
  );
}

export default App;
