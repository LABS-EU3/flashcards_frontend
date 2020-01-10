import {
  ON_BEGIN_PROFILE_FETCH,
  ON_PROFILE_FETCH_SUCCESS,
  ON_PROFILE_FETCH_FAILED,
  RECENT_CARDS_START,
  RECENT_CARDS_SUCCESS,
  RECENT_CARDS_FAILED,
} from './dashboardTypes';

const initialState = {
  userProfile: {},
  loading: false,
  errors: null,
  recentCards: {},
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

    case RECENT_CARDS_START:
      return {
        ...state,
        loading: true,
      };

    case RECENT_CARDS_SUCCESS:
      return {
        ...state,
        loading: true,
        recentCards: action.payload,
      };

    case RECENT_CARDS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
