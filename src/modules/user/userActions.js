import axios from 'axios';
import {
  LOADING,
  LOGIN,
  SET_ERRORS,
  LOGOUT,
  RESET_PASSWORD,
} from './userTypes';
import { baseUrl } from '../../config/index';
import { axiosWithAuth } from '../../utils/auth';

export const userLogin = (email, password, history) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/login`, {
      email,
      password,
    })
    .then(({ data }) => {
      dispatch({
        type: LOGIN,
      });
      localStorage.setItem('token', `${data.token}`);
      history.push('/dashboard');
    });
};

export const userSignUp = (userData, history) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/register`, userData)
    .then(() => {
      dispatch(
        userLogin(
          userData.fullName,
          userData.password,
          userData.email,
          history,
        ),
      );
    })
    .catch(errors => {
      dispatch({
        type: SET_ERRORS,
        payload: errors,
      });
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
  history.push('/login');
};

const resetSuccess = res => {
  return {
    type: RESET_PASSWORD,
    payload: res,
  };
};

export const resetPassword = (passwordData, history) => dispatch => {
  axiosWithAuth()
    .post(`/auth/reset_password/:token`, {
      password: passwordData.password,
      confirmPassword: passwordData.confirmPassword,
    })
    .then(res => {
      dispatch(resetSuccess(res.data));
      history.push('/login');
    })
    .catch(errors => {
      dispatch({
        type: SET_ERRORS,
        payload: errors,
      });
    });
};
