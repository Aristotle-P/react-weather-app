import { GET_LOCATION } from './types';

export const getLocation = newCity => {
  const city = newCity;
  return {
    type: GET_LOCATION,
    payload: city
  };
};
