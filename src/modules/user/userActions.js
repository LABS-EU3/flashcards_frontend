import axios from 'axios';
import { LOADING, LOGIN, SET_ERRORS, LOGOUT } from './userTypes';

const baseUrl = process.env.REACT_APP_BASE_URL;

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
