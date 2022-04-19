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
    <h4 style={{ color: "#F2B138" }}>Weather Details</h4>
    <p>
     {city.weatherDetails?.name}-<span>{city.weatherDetails?.sys.country}</span>
    </p>

    <h2>{Math.floor(city.weatherDetails.main?.temp - 273.15)}&deg;</h2>
    <p>{city.weatherDetails.weather[0]?.description}</p>

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
