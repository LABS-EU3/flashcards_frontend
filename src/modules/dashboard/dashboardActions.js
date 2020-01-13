import types from './dashboardTypes';

import { axiosWithAuth } from '../../utils/auth';

export const fetchProfile = () => dispactch => {
  dispactch({ type: types.ON_BEGIN_PROFILE_FETCH });

  axiosWithAuth()
    .get(`/auth/view_profile`)
    .then(({ data }) => {
      dispactch({
        type: types.ON_PROFILE_FETCH_SUCCESS,
        payload: data.user,
      });
    })
    .catch(err => {
      dispactch({
        type: types.ON_PROFILE_FETCH_FAILED,
        payload: err,
      });
    });
};

export const fetchTags = () => dispatch => {
  dispatch({ type: types.ON_START_FETCHING_TAGS });

  axiosWithAuth()
    .get(`/decks/tags`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_DECK_TAGS_FETCH_SUCCESS,
        payload: data.tags,
      });
    })
    .catch(err => {
      dispatch({
        type: types.ON_DECK_TAGS_FETCH_FAILED,
        payload: err.message,
      });
    });
};

export const createDeck = (deck, onComplete, onFailed) => dispatch => {
  dispatch({ type: types.ON_START_CREATING_DECK });

  axiosWithAuth()
    .post(`/decks`, deck)
    .then(({ data }) => {
      dispatch({
        type: types.ON_DECK_CREATION_COMPLETE,
        payload: data.deck,
      });
      if (onComplete) onComplete();
    })
    .catch(err => {
      dispatch({
        type: types.ON_DECK_CREATION_CANCELLED,
        payload: err.message,
      });

      if (onFailed) onFailed();
    });
};

export const fetchUserDecks = () => dispatch => {
  dispatch({ type: types.ON_START_FETCHING_DECKS });

  axiosWithAuth()
    .get('/decks')
    .then(({ data }) => {
      dispatch({
        type: types.ON_GET_DECKS_COMPLETE,
        payload: data.decks,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_GET_DECKS_CANCELLED,
        payload: error.message,
      });
    });
};

export const clearTags = () => dispatch => {
  dispatch({ type: types.CLEAR_SELECTED_TAGS });
};
