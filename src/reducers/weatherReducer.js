import { GET_WEATHER } from '../actions/types';

const initialState = {
  currentWeather: [
    {
      city: 'New York City',
      state: 'New York',
      temp: 32
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
