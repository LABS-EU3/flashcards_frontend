import {
  ON_BEGIN_PROFILE_FETCH,
  ON_PROFILE_FETCH_SUCCESS,
  ON_PROFILE_FETCH_FAILED,
} from './dashboardTypes';

const initialState = {
  userProfile: {},
  loading: false,
  errors: null,
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

    default:
      return state;
  }
};

export default dashboardReducer;
