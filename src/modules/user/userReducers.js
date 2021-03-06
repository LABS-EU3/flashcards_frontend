// Imports

// Types
import * as types from './userTypes';

const initialState = {
  loading: false,
  authenticated: false,
  rankings: [],
  credentials: {},
  errors: null,
  completed: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
        authenticated: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
        authenticated: true,
        credentials: action.payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
        authenticated: true,
        credentials: action.payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    case types.RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.FORGOT_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.CONFIRM_EMAIL_START:
      return {
        ...state,
        loading: true,
      };
    case types.CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.CONFIRM_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.CLEAR_RESPONSES:
      return {
        ...state,
        completed: false,
        errors: null,
      };
    case types.ON_BEGIN_PROFILE_FETCH:
      return {
        ...state,
        loading: true,
      };
    case types.ON_PROFILE_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.ON_PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      };
    case types.GOOGLE_AUTH_START:
      return {
        ...state,
        loading: true,
        authenticated: false,
      };
    case types.GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
        authenticated: true,
        credentials: action.payload,
      };
    case types.GOOGLE_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.MANAGE_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case types.MANAGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.MANAGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.DELETE_USER_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_RANKS_START:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.DELETE_USER_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.SUBMIT_FEEDBACK_START:
      return {
        ...state,
        loading: true,
      };
    case types.SUBMIT_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.SUBMIT_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.UPLOAD_PROFILE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.UPLOAD_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.FETCH_RANKS_SUCCESS:
      return {
        ...state,
        loading: false,
        rankings: action.payload || [],
      };
    case types.FETCH_RANKS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case types.UPDATE_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        completed: true,
      };
    case types.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
