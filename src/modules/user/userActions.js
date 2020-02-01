// Import

// Libraries
import axios from 'axios';

// Types
import * as types from './userTypes';

// Configs
import { baseUrl } from '../../config/index';

// Utils
import { axiosWithAuth, setToken, clearLocalStorage } from '../../utils/auth';

export const userLogin = (userData, history) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${baseUrl}/auth/login`, userData)
    .then(({ data }) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: data.data.user,
      });
      setToken(data.data.token);
      dispatch({ type: types.CLEAR_RESPONSES });
      history.push('/dashboard/welcome');
    })
    .catch(errors => {
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const userSignUp = (userData, history) => dispatch => {
  dispatch({ type: types.SIGNUP_START });
  axios
    .post(`${baseUrl}/auth/register`, userData)
    .then(res => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.data.user });
      setToken(res.data.data.token);
      history.push('/dashboard/welcome');
      dispatch({ type: types.CLEAR_RESPONSES });
    })
    .catch(errors => {
      dispatch({
        type: types.SIGNUP_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const logoutUser = history => dispatch => {
  dispatch({ type: types.LOGOUT_START });
  clearLocalStorage();
  dispatch({ type: types.LOGOUT_SUCCESS });
  dispatch({ type: types.CLEAR_RESPONSES });
  history.push('/login');
};

export const resetPassword = (token, passwordData, history) => dispatch => {
  dispatch({ type: types.RESET_PASSWORD_START });
  axios
    .post(`${baseUrl}/auth/reset_password/${token}`, {
      password: passwordData.password,
      confirmPassword: passwordData.confirmPassword,
    })
    .then(res => {
      dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: res.data });
      dispatch({ type: types.CLEAR_RESPONSES });
      history.push('/login');
    })
    .catch(errors => {
      dispatch({
        type: types.RESET_PASSWORD_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const forgotPassword = emailData => dispatch => {
  dispatch({ type: types.FORGOT_PASSWORD_START });
  axiosWithAuth()
    .post(`/auth/forgot_password`, {
      email: emailData.email,
    })
    .then(res => {
      dispatch({ type: types.FORGOT_PASSWORD_SUCCESS, payload: res.data });
    })
    .catch(errors => {
      dispatch({
        type: types.FORGOT_PASSWORD_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const emailConfirmation = (token, history) => dispatch => {
  dispatch({ type: types.CONFIRM_EMAIL_START });
  axios
    .post(`${baseUrl}/auth/confirm_email`, {
      token,
    })
    .then(({ data }) => {
      dispatch({
        type: types.CONFIRM_EMAIL_SUCCESS,
      });
      setToken(data.token);
      dispatch({ type: types.CLEAR_RESPONSES });
      history.push('/dashboard');
    })
    .catch(errors => {
      dispatch({
        type: types.CONFIRM_EMAIL_FAILURE,
        payload: errors.response.data.message,
      });
    });
};
export const fetchProfile = () => dispatch => {
  dispatch({ type: types.ON_BEGIN_PROFILE_FETCH });
  axiosWithAuth()
    .get(`/auth/view_profile`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_PROFILE_FETCH_SUCCESS,
        payload: data.user,
      });
    })
    .catch(err => {
      dispatch({
        type: types.ON_PROFILE_FETCH_FAILED,
        payload: err,
      });
    });
};

export const googleAuthorized = (token, history) => dispatch => {
  dispatch({ type: types.GOOGLE_AUTH_START });
  axios
    .post(`${baseUrl}/auth/google/${token}`)
    .then(({ data }) => {
      dispatch({
        type: types.GOOGLE_AUTH_SUCCESS,
        payload: data.data.user,
      });
      setToken(token);
      dispatch({ type: types.CLEAR_RESPONSES });
      history.push('/dashboard/welcome');
    })
    .catch(errors => {
      dispatch({
        type: types.GOOGLE_AUTH_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const managePassword = passwordData => dispatch => {
  dispatch({ type: types.MANAGE_PASSWORD_START });

  axiosWithAuth()
    .post(`${baseUrl}/auth/update_password`, {
      oldPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
      confirmPassword: passwordData.confirmNewPAssword,
    })
    .then(res => {
      dispatch({ type: types.MANAGE_PASSWORD_SUCCESS, payload: res.data });
      dispatch({ type: types.CLEAR_RESPONSES });
    })
    .catch(errors => {
      dispatch({
        type: types.MANAGE_PASSWORD_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const manageAccount = password => dispatch => {
  dispatch({ type: types.DELETE_USER_ACCOUNT_START });

  axiosWithAuth()
    .delete(`${baseUrl}/users`, { data: password })
    .then(res => {
      dispatch({ type: types.DELETE_USER_ACCOUNT_SUCCESS, payload: res.data });
      dispatch({ type: types.CLEAR_RESPONSES });
    })
    .catch(errors => {
      dispatch({
        type: types.DELETE_USER_ACCOUNT_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const submitHelpCenterMsg = feedback => dispatch => {
  dispatch({ type: types.SUBMIT_FEEDBACK_START });

  axiosWithAuth()
    .post(`${baseUrl}/feedback`, { feedback: feedback.values.feedback })
    .then(res => {
      dispatch({ type: types.SUBMIT_FEEDBACK_SUCCESS, payload: res.data });
      dispatch({ type: types.CLEAR_RESPONSES });
    })
    .catch(errors => {
      dispatch({
        type: types.SUBMIT_FEEDBACK_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const uploadProfileImg = imageUrl => dispatch => {
  dispatch({ type: types.UPLOAD_PROFILE_IMAGE_START });

  axiosWithAuth()
    .post(`${baseUrl}/auth/uploadProfile_img`, {
      imageUrl,
    })
    .then(res => {
      dispatch({ type: types.UPLOAD_PROFILE_IMAGE_SUCCESS, payload: res.data });
      dispatch({ type: types.CLEAR_RESPONSES });
    })
    .catch(errors => {
      dispatch({
        type: types.UPLOAD_PROFILE_IMAGE_FAILURE,
        payload: errors.response.data.message,
      });
    });
};

export const manageProfile = updatedData => dispatch => {
  dispatch({ type: types.UPDATE_USER_PROFILE_START });

  axiosWithAuth()
    .put(`${baseUrl}/users/updateprofile`, {
      fullName: updatedData.fullName,
    })
    .then(res => {
      dispatch({ type: types.UPDATE_USER_PROFILE_SUCCESS, payload: res.data });
      dispatch({ type: types.CLEAR_RESPONSES });
    })
    .catch(errors => {
      dispatch({
        type: types.UPDATE_USER_PROFILE_FAILURE,
        payload: errors.response.data.message,
      });
    });
};
