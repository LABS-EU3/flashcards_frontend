// Imports
// Libraries
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

// Styles
import { HR, H5 } from '../../../../styles/typography';
import { BackArrowButton } from '../../../../styles/buttons';

// Actions
import { CLEAR_RESPONSES } from '../../../../modules/user/userTypes';

// Assets
import BackArrow from '../../../../assets/icons/Arrow 1.svg';

export default function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <BackArrowButton
        onClick={() => {
          dispatch({ type: CLEAR_RESPONSES });
          history.goBack();
        }}
      >
        <img src={`${BackArrow}`} alt="back arrow" />
        <H5>Back</H5>
      </BackArrowButton>
      <HR />
      <h1>Search</h1>
    </div>
  );
}
