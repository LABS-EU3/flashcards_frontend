import { LOGIN, LOADING, SET_ERRORS, LOGOUT } from './userTypes';

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {},
  errors: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;