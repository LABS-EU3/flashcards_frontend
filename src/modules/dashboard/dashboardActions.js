import * as types from './dashboardTypes';

import { axiosWithAuth } from '../../utils/auth';

export const getRecentDecks = () => dispatch => {
  dispatch({ type: types.RECENT_DECKS_START });

  return axiosWithAuth()
    .get(`/decks/access/`)
    .then(({ data }) => {
      dispatch({
        type: types.RECENT_DECKS_SUCCESS,
        payload: data.data,
      });
    })
    .catch(err => {
      dispatch({
        type: types.RECENT_DECKS_FAILED,
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

export const createDeck = (deck, onComplete, onFailed) => dispatch => {
  dispatch({ type: types.ON_START_CREATING_DECK });

  axiosWithAuth()
    .post(`/decks`, deck)
    .then(({ data }) => {
      dispatch({
        type: types.ON_DECK_CREATION_COMPLETE,
        payload: data.deck,
      });
      dispatch(fetchUserDecks());
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
      dispatch({
        type: types.ON_DECK_CARDS_FETCH_SUCCESS,
        payload: data.flashcards,
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
        payload: error.message,
      });
    });
};

export const updateDeck = (
  { deck, deckId },
  onComplete,
  onFailed,
) => dispatch => {
  axiosWithAuth()
    .put(`/decks/${deckId}`, deck)
    .then(() => {
      dispatch({ type: types.ON_DECK_CREATION_COMPLETE });
      dispatch(getSingleDeck(deckId));
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

export const updateCard = (newCard, cardId) => dispatch => {
  axiosWithAuth()
    .put(`/cards/${cardId}`, newCard)
    .then(() => {
      dispatch({ type: types.ON_CARD_CREATION_COMPLETE });
      dispatch(getSingleDeck(newCard.deckId));
    })
    .catch(error => {
      dispatch({
        type: types.ON_CARD_CREATION_CANCELLED,
        payload: error.message,
      });
    });
};

export const clicked = () => dispatch => {
  dispatch({ type: types.HAMBURGER_CLICKED });
};

export const deleteDeck = deckId => dispatch => {
  dispatch({ type: types.ON_START_DELETE_DECK });

  axiosWithAuth()
    .delete(`/decks/${deckId}`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_DELETE_DECK_SUCCESS,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_DELETE_DECK_FAILED,
        payload: error.message,
      });
    });
};

export const fetchSessions = () => dispatch => {
  dispatch({ type: types.ON_START_FETCH_SESSIONS });

  axiosWithAuth()
    .get(`/sessions`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_FETCH_SESSIONS_SUCCESS,
        payload: data.data,
      });
      // eslint-disable-next-line no-use-before-define
      markSessionsComplete(data.data, dispatch);
    })
    .catch(error => {
      dispatch({
        type: types.ON_FETCH_SESSIONS_FAILED,
        payload: error.message,
      });
    });
};

export const fetchSingleSession = id => dispatch => {
  dispatch({ type: types.ON_START_FETCH_SINGLE_SESSION });

  axiosWithAuth()
    .get(`/sessions/${id}`)
    .then(({ data }) => {
      dispatch({
        type: types.ON_FETCH_SINGLE_SESSION_SUCCESS,
        payload: data.session,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_FETCH_SINGLE_SESSION_FAILED,
        payload: error.message,
      });
    });
};

export const startSession = (deckId, onSuccess) => dispatch => {
  dispatch({ type: types.ON_START_CREATE_SESSIONS });

  axiosWithAuth()
    .post(`/sessions`, { deckId })
    .then(({ data }) => {
      dispatch({
        type: types.ON_CREATE_SESSIONS_SUCCESS,
        payload: data.session,
      });
      // dispatch(fetchSessions());
      onSuccess(data.session.id);
    })
    .catch(error => {
      dispatch({
        type: types.ON_CREATE_SESSIONS_FAILED,
        payload: error.response.data.message,
      });
    });
};

// eslint-disable-next-line camelcase
export const rateCard = ({ card_id, session_id, rating }) => dispatch => {
  dispatch({ type: types.ON_START_CARD_RATING });

  axiosWithAuth()
    .post(`/cards/scoring`, { card_id, session_id, rating })
    .then(() => {
      dispatch({
        type: types.ON_CARD_RATING_SUCCESS,
        payload: card_id,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_CARD_RATING_FAILED,
        payload: error.message,
      });
    });
};

export const fetchAllDecks = () => dispatch => {
  dispatch({ type: types.ON_START_GET_ALL_DECKS });

  axiosWithAuth()
    .get('/decks/public')
    .then(({ data }) => {
      dispatch({
        type: types.ON_GET_ALL_DECKS_SUCCESS,
        payload: data.data,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_GET_ALL_DECKS_FAILED,
        payload: error.message,
      });
    });
};

export const getCOTD = () => dispatch => {
  dispatch({ type: types.ON_START_FETCHING_CARD_OF_THE_DAY });
  axiosWithAuth()
    .get('/cards/COTD')
    .then(({ data }) => {
      dispatch({
        type: types.ON_CARD_OF_THE_DAY_FETCH_SUCCESS,
        payload: data.card[0],
      });
    })
    .catch(error => {
      dispatch({
        type: types.ON_CARD_OF_THE_DAY_FETCH_FAILED,
        payload: error.message,
      });
    });
};

export const updateAccessTime = id => dispatch => {
  dispatch({ type: types.ON_START_UPDATE_ACCESS });
  try {
    axiosWithAuth()
      .put(`/decks/access/${id}`)
      .then(() => {
        dispatch({ type: types.ON_UPDATE_ACCESS_SUCCESS });
      });
  } catch (error) {
    dispatch({
      type: types.ON_UPDATE_ACCESS_FAIL,
      payload: error.message,
    });
  }
};

export const getFavoriteTags = () => dispatch => {
  dispatch({ type: types.ON_START_FETCH_FAV_TAGS });
  try {
    axiosWithAuth()
      .get(`/decks/favorite`)
      .then(({ data }) => {
        dispatch({ type: types.ON_FETCH_FAV_TAGS_SUCCESS, payload: data });
      });
  } catch (error) {
    dispatch({
      type: types.ON_FETCH_FAV_TAGS_FAIL,
      payload: error.message,
    });
  }
};

const markSessionsComplete = (sessions, dispatch) => {
  sessions.forEach(async s => {
    if (s.cards_left <= 0) {
      dispatch({ type: types.SESSION_COMPLETE, payload: s.id });
      await axiosWithAuth().put(`/sessions/${s.id}`, { isCompleted: true });
    }
  });
  fetchSessions();
};
