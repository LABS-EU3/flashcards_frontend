// Import

// Libraries
import axios from 'axios';

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
  CLEAR_RESPONSES,
} from './userTypes';

// Configs
import { baseUrl } from '../../config/index';

// Utils
import { axiosWithAuth, setToken, clearLocalStorage } from '../../utils/auth';

export const userLogin = (userData, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${baseUrl}/auth/login`, userData)
    .then(({ data }) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.data.user,
      });
      // console.log(data.data.user);
      setToken(data.data.token);
      dispatch({ type: CLEAR_RESPONSES });
      history.push('/dashboard/welcome');
    })
    .catch(errors => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const userSignUp = (userData, history) => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(`${baseUrl}/auth/register`, userData)
    .then(({ data }) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: data.user });
      setToken(data.data.token);
      dispatch({ type: CLEAR_RESPONSES });
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const logoutUser = history => dispatch => {
  dispatch({ type: LOGOUT_START });
  clearLocalStorage();
  dispatch({ type: LOGOUT_SUCCESS });
  dispatch({ type: CLEAR_RESPONSES });
  history.push('/login');
};

export const resetPassword = (token, passwordData, history) => dispatch => {
  dispatch({ type: RESET_PASSWORD_START });
  axios
    .post(`${baseUrl}/auth/reset_password/${token}`, {
      password: passwordData.password,
      confirmPassword: passwordData.confirmPassword,
    })
    .then(res => {
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: res.data });
      dispatch({ type: CLEAR_RESPONSES });
      history.push('/login');
    })
    .catch(errors => {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const forgotPassword = emailData => dispatch => {
  dispatch({ type: FORGOT_PASSWORD_START });
  axiosWithAuth()
    .post(`/auth/forgot_password`, {
      email: emailData.email,
    })
    .then(res => {
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data });
    })
    .catch(errors => {
      dispatch({
        type: FORGOT_PASSWORD_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const emailConfirmation = (token, history) => dispatch => {
  dispatch({ type: CONFIRM_EMAIL_START });
  axios
    .post(`${baseUrl}/auth/confirm_email`, {
      token,
    })
    .then(({ data }) => {
      dispatch({
        type: CONFIRM_EMAIL_SUCCESS,
      });
      setToken(data.token);
      dispatch({ type: CLEAR_RESPONSES });
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: CONFIRM_EMAIL_FAILURE,
        payload: errors.response.data.message,
      });
    });
};
