// Imports

// Types
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  CONFIRM_EMAIL_START,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE,
  CLEAR_COMPLETED,
} from './userTypes';

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {},
  errors: '',
  completed: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        authenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
        authenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
        authenticated: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return initialState;
    case RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case FORGOT_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CONFIRM_EMAIL_START:
      return {
        ...state,
        loading: true,
      };
    case CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case CONFIRM_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default userReducer;
