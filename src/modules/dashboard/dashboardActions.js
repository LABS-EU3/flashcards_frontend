import {
  ON_BEGIN_PROFILE_FETCH,
  ON_PROFILE_FETCH_FAILED,
  ON_PROFILE_FETCH_SUCCESS,
  RECENT_CARDS_START,
  RECENT_CARDS_SUCCESS,
  RECENT_CARDS_FAILED,
} from './dashboardTypes';

import { axiosWithAuth } from '../../utils/auth';

// eslint-disable-next-line import/prefer-default-export
export const fetchProfile = () => dispactch => {
  dispactch({ type: ON_BEGIN_PROFILE_FETCH });

  axiosWithAuth()
    .get(`/auth/view_profile`)
    .then(({ data }) => {
      dispactch({
        type: ON_PROFILE_FETCH_SUCCESS,
        payload: data.user,
      });
    })
    .catch(err => {
      dispactch({
        type: ON_PROFILE_FETCH_FAILED,
        payload: err,
      });
    });
};

export const getRecentCards = userId => dispatch => {
  dispatch({ type: RECENT_CARDS_START });

  axiosWithAuth()
    .get(`/api/cards/users/${userId}`)
    .then(({ data }) => {
      dispatch({
        type: RECENT_CARDS_SUCCESS,
        payload: data.user,
      });
      console.log(data.user);
    })
    .catch(err => {
      dispatch({
        type: RECENT_CARDS_FAILED,
        payload: err,
      });
    });
};
