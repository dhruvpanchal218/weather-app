import axios from "axios";

export const getWeather = (city, country) => async (dispatch) => {
 const API_KEY = "321ee1ad03b871b57f2ae439781bfceb";
 await axios
  .get(
   `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
  )
  .then((res) => {
   dispatch({ type: "GET_WEATHER", payload: res.data });
  })
  .catch((error) =>
   dispatch(
    { type: "GET_WEATHER_DATA_ERROR", payload: "loading error!" },
    alert("Please write a valid city name")
   )
  );
};

export const deleteCity = (id) => (dispatch) => {
 dispatch({
  type: "DELETE_CITY",
  payload: id,
 });
};

export const updateCities = (city) => (dispatch) => {
 dispatch({
  type: "UPDATE_WEATHER",
  payload: city,
 });
};
