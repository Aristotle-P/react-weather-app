import { GET_WEATHER } from './types';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = () => async dispatch => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=${API_KEY}`
  );
  dispatch({
    type: GET_WEATHER,
    payload: res.data
  });
};
