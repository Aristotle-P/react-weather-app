import { GET_WEATHER } from '../actions/types';

const initialState = {
  currentWeather: [
    {
      temp: 32,
      weather: 'cloudy',
      humidity: '90%',
      pressure: '27 in'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state
      };
    default:
      return state;
  }
}
