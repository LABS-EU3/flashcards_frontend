import {
  ON_BEGIN_PROFILE_FETCH,
  ON_PROFILE_FETCH_FAILED,
  ON_PROFILE_FETCH_SUCCESS,
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
