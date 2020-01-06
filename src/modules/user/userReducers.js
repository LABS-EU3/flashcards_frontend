// Imports

// Types
import {
  LOGIN,
  LOADING,
  SET_ERRORS,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
} from './userTypes';

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {},
  errors: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true,
        errors: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        loading: false,
        authenticated: false,
        errors: false,
      };

    case LOGOUT:
      return initialState;

    case FORGOT_PASSWORD:
      return {
        ...state,
        loading: false,
        authenticated: false,
        errors: false,
      };

    default:
      return state;
  }
};

export default userReducer;
