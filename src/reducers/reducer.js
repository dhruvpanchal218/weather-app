import { combineReducers } from "redux";
import weatherInfo from "./weatherReducer";
import { deleteCity } from "../components/getWeather";

//combine reducers
const reducers = combineReducers({
 WeatherInfo: weatherInfo,
 deleteCity: deleteCity,
});

export default reducers;
