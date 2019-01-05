import { GET_WEATHER } from '../actions/types';

const initialState = {
  currentWeather: {},
  weatherConditions: [],
  wind: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        currentWeather: action.payload.main,
        weatherConditions: action.payload.weather,
        wind: action.payload.wind
      };
    default:
      return state;
  }
}
