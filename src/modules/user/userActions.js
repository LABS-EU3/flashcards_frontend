// Import

// Libraries
import axios from 'axios';

// Types
import {
  LOADING,
  LOGIN,
  SET_ERRORS,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
} from './userTypes';

// Configs
import { baseUrl } from '../../config/index';

// Utils
import { axiosWithAuth } from '../../utils/auth';

export const userLogin = (userData, history) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/login`, userData)
    .then(({ data }) => {
      dispatch({
        type: LOGIN,
      });
      localStorage.setItem('token', `${data.data.token}`);
      history.push('/dashboard');
      dispatch({
        type: SET_ERRORS,
        payload: '',
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERRORS,
        payload: errors.response.data.message,
      });
    });
};

export const userSignUp = (userData, history) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/register`, userData)
    .then(({ data }) => {
      localStorage.setItem('token', `${data.data.token}`);
      history.push('/dashboard');
      dispatch({
        type: SET_ERRORS,
        payload: '',
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERRORS,
        payload: errors.response.data.message,
      });
    });
};

export const logoutUser = history => dispatch => {
  dispatch({ type: LOADING });
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
  history.push('/login');
};

export const resetPassword = (token, passwordData, history) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/reset_password/${token}`, {
      password: passwordData.password,
      confirmPassword: passwordData.confirmPassword,
    })
    .then(res => {
      dispatch({ type: RESET_PASSWORD, payload: res.data });
      history.push('/login');
      dispatch({
        type: SET_ERRORS,
        payload: '',
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERRORS,
        payload: errors.response.data.message,
      });
    });
};

export const forgotPassword = emailData => dispatch => {
  axiosWithAuth()
    .post(`/auth/forgot_password`, {
      email: emailData.email,
    })
    .then(res => {
      dispatch({ type: FORGOT_PASSWORD, payload: res.data });
      dispatch({
        type: SET_ERRORS,
        payload: '',
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERRORS,
        payload: errors.response.data.message,
      });
    });
};
