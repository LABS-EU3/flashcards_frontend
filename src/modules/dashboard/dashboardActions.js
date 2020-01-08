import {
  ON_BEGIN_PROFILE_FETCH,
  //   ON_PROFILE_FETCH_FAILED,
  //   ON_PROFILE_FETCH_SUCCESS,
} from './dashboardTypes';

import { baseUrl } from '../../config/index';

import { axiosWithAuth } from '../../utils/auth';

// eslint-disable-next-line import/prefer-default-export
export const fetchProfile = () => dispactch => {
  dispactch({ type: ON_BEGIN_PROFILE_FETCH });

  axiosWithAuth()
    .get(`${baseUrl}/view_profile`)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};
