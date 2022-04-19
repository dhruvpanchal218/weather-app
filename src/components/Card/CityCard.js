import { deleteCity } from "../getWeather";
import { useDispatch } from "react-redux";

//import weatherIcons from "../Icons";
import "./card.css";

const CityCard = (city) => {
 const dispatch = useDispatch();

 const handleDelete = () => {
  dispatch(deleteCity(city.weatherDetails.name));
 };

 let details = "";
 if (city.weatherDetails && city.weatherDetails.hasOwnProperty("coord")) {
  details = (
   <div className="details">
    <div className="top">
     <div>
      <p>{city.weatherDetails?.name}</p>
     </div>
     <div>
      <h1>{Math.floor(city.weatherDetails.main?.temp - 273.15)}&deg;</h1>
     </div>
     <div className="description">
      <p>{city.weatherDetails.weather[0]?.description}</p>
     </div>
    </div>

    <div className="bottom">
     <div>
      <p>{Math.floor(city.weatherDetails.main?.feels_like - 273.15)}&deg;</p>
      <p>Feels Like</p>
     </div>
     <div>
      <p>{city.weatherDetails.main?.humidity}%</p>
      <p>Humidity</p>
     </div>
     <div>
      <p>{Math.floor(city.weatherDetails.wind?.speed)} MPH</p>
      <p>Wind Speed</p>
     </div>
    </div>

    <i
     className="far fa-trash-alt"
     onClick={() => handleDelete(city.weatherDetails.name)}
    ></i>
   </div>
  );
 }

 return <div>{details}</div>;
};

export default CityCard;
