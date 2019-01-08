import { GET_LOCATION, POST_ERROR } from '../actions/types';

const initialState = {
  location: {
    city: '',
    errors: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        city: action.payload,
        errors: ''
      };
    case POST_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
