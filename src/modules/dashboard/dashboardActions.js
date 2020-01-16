import * as types from './dashboardTypes';

import { axiosWithAuth } from '../../utils/auth';

export const getRecentCards = userId => dispatch => {
  dispatch({ type: types.RECENT_CARDS_START });

  return axiosWithAuth()
    .get(`/api/cards/users/${userId}`)
    .then(({ data }) => {
      dispatch({
        type: types.RECENT_CARDS_SUCCESS,
        payload: data.data.user,
      });
    })
    .catch(err => {
      dispatch({
        type: types.RECENT_CARDS_FAILED,
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
        payload: data.data,
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

export const getSingleDeck = deckId => dispatch => {
  dispatch({ type: types.ON_START_FETCHING_CARDS });

  axiosWithAuth()
    .get(`/decks/${deckId}`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_GET_SINGLE_DECK_SUCCESS,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_GET_SINGLE_DECK_FAILED,
        payload: error.message,
      });
    });
};

export const createCard = card => dispatch => {
  dispatch({ type: types.ON_START_CREATING_CARD });

  axiosWithAuth()
    .post(`/cards`, card)
    .then(() => {
      dispatch({ type: types.ON_CARD_CREATION_COMPLETE });
      dispatch(getSingleDeck(card.deckId));
    })
    .catch(error => {
      dispatch({
        type: types.ON_CARD_CREATION_CANCELLED,
        payload: error.message,
      });
    });
};

export const deleteCard = ({ id: cardId, deck_id: deckId }) => dispatch => {
  dispatch({ type: types.ON_DELETE_CARD_SUCCESS });

  axiosWithAuth()
    .delete(`/cards/${cardId}`)
    .then(() => {
      dispatch(getSingleDeck(deckId));
    })
    .catch(error => {
      dispatch({
        type: types.ON_DELETE_CARD_FAILED,
        pasyload: error.message,
      });
    });
};

export const updateCard = card => dispatch => {
  dispatch({ type: types.ON_UPDATE_CARD_START });

  axiosWithAuth()
    .put(`/cards/${card.id}`, card)
    .then(() => {
      dispatch({ type: types.ON_CARD_UPDATE_SUCCESS });
      dispatch(getSingleDeck(card.deckId));
    })
    .catch(error => {
      dispatch({
        type: types.ON_CARD_UPDATE_CANCELLED,
        payload: error.message,
      });
    });
};
