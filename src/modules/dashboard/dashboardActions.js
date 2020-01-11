import {
  ON_BEGIN_PROFILE_FETCH,
  ON_PROFILE_FETCH_FAILED,
  ON_PROFILE_FETCH_SUCCESS,
  ON_DECK_CREATION_CANCELLED,
  ON_DECK_TAGS_FETCH_FAILED,
  ON_START_CREATING_DECK,
  ON_DECK_CREATION_COMPLETE,
  ON_DECK_TAGS_FETCH_SUCCESS,
  ON_START_FETCHING_TAGS,
} from './dashboardTypes';

import { axiosWithAuth } from '../../utils/auth';

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

export const fetchTags = () => dispatch => {
  dispatch({ type: ON_START_FETCHING_TAGS });

  axiosWithAuth()
    .get(`/decks/tags`)
    .then(({ data }) => {
      dispatch({
        type: ON_DECK_TAGS_FETCH_SUCCESS,
        payload: data.tags,
      });
    })
    .catch(err => {
      dispatch({
        type: ON_DECK_TAGS_FETCH_FAILED,
        payload: err.message,
      });
    });
};

export const createDeck = deck => dispatch => {
  dispatch({ type: ON_START_CREATING_DECK });

  axiosWithAuth()
    .post(`/decks/tags`, deck)
    .then(({ data }) => {
      dispatch({
        type: ON_DECK_CREATION_COMPLETE,
        payload: data.deck,
      });
    })
    .catch(err => {
      dispatch({
        type: ON_DECK_CREATION_CANCELLED,
        payload: err.message,
      });
    });
};
