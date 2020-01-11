import {
  ON_BEGIN_PROFILE_FETCH,
  ON_PROFILE_FETCH_SUCCESS,
  ON_PROFILE_FETCH_FAILED,
  ON_DECK_CREATION_CANCELLED,
  ON_DECK_TAGS_FETCH_FAILED,
  ON_START_CREATING_DECK,
  ON_DECK_CREATION_COMPLETE,
  ON_DECK_TAGS_FETCH_SUCCESS,
  ON_START_FETCHING_TAGS,
} from './dashboardTypes';

const initialState = {
  userProfile: {},
  loading: false,
  errors: null,
  creatingDeck: false,
  fetchingTags: false,
  userDecks: [],
  tags: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_BEGIN_PROFILE_FETCH:
      return {
        ...state,
        loading: true,
      };

    case ON_PROFILE_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case ON_PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        loading: true,
        userProfile: action.payload,
      };

    case ON_START_FETCHING_TAGS:
      return { ...state, fetchingTags: true, loading: true };

    case ON_DECK_TAGS_FETCH_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        fetchingTags: false,
        loading: false,
      };

    case ON_DECK_TAGS_FETCH_FAILED:
      return { ...state, fetchingTags: false, loading: false };

    case ON_START_CREATING_DECK:
      return { ...state, creatingDeck: true, loading: true };

    case ON_DECK_CREATION_CANCELLED:
      return { ...state, creatingDeck: false, loading: false };

    case ON_DECK_CREATION_COMPLETE:
      return {
        ...state,
        userDecks: action.payload,
        creatingDeck: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
