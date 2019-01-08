import { GET_WEATHER, GET_LOCATION, POST_ERROR } from './types';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = city => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    );
    dispatch({
      type: GET_WEATHER,
      payload: res.data
    });
    dispatch({
      type: GET_LOCATION,
      payload: city
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: `Sorry, I can't locate that city`
    });
  }
};
