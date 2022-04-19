import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CityCard from "../Card/CityCard";
import { deleteCity, getWeather, updateCities } from "../getWeather";

import "./home.css";
import "../../App.css";

function Home() {
 const [city, setCity] = useState("");
 const [searchInput] = useState("");
 const [filterCities] = useState([]);
 const [timer, setTimer] = useState(0);
 const weatherSelector = useSelector((state) => state.WeatherInfo);

 const cities = weatherSelector.cities;
 const dispatch = useDispatch();
 const getWeatherInfoAction = (city) => dispatch(getWeather(city));

 useEffect(() => {
  const refreshTimer = setInterval(() => {
   setTimer(timer + 1);
  }, 1000);

  return () => clearInterval(refreshTimer);
 }, [timer]);

 const getWeatherInfo = (e) => {
  e.preventDefault();
  if (city !== "") {
   const x = weatherSelector?.weatherinfolist?.filter((el) => {
    return city.toLocaleLowerCase() === el.weatherDetails.name.toLowerCase();
   });
   if (x.length === 0) {
    getWeatherInfoAction(city);
   }
  }
  setCity("");
 };

 const handleRefresh = () => {
  if (timer >= 5) {
   cities.map((val) => (dispatch(deleteCity(val)), getWeatherInfoAction(val)));
   dispatch(updateCities(cities));
   setTimer(0);
  }
 };

 return (
  <React.Fragment>
   <div className="App">
    <header>
     <h1>Weather App</h1>
    </header>
   </div>

   <main>
    <form>
     <div className="control">
      <input
       type="text"
       name="name"
       placeholder="Enter City Name"
       onChange={(e) => setCity(e.target.value)}
       value={city}
      />
     </div>
     <button className="add" type="submit" onClick={getWeatherInfo}>
      Add
     </button>
    </form>
    <div className="control2">
     <button className="refresh" onClick={handleRefresh}>
      Refresh
     </button>
    </div>

    {searchInput ? (
     <div className="cards">
      {filterCities?.map((city) => (
       <CityCard key={city.id} {...city} />
      ))}
     </div>
    ) : (
     <div className="cards">
      {weatherSelector?.weatherinfolist?.map((city) => (
       <CityCard key={city.id} {...city} />
      ))}
     </div>
    )}
   </main>
  </React.Fragment>
 );
}

export default Home;
