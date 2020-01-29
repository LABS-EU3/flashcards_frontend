// Imports
// Libraries
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

// Styles
import { H5 } from '../../../../styles/typography';
import { BackArrowButton } from '../../../../styles/buttons';

// Actions
import { CLEAR_RESPONSES } from '../../../../modules/user/userTypes';

import { dummyData } from './dummyData';

// Assets
import BackArrow from '../../../../assets/icons/Arrow 1.svg';
import TopSearch from './components/TopSearch';
import SearchResults from './components/SearchResults';

export default function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const decks = dummyData;
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
      <TopSearch />
      <SearchResults decks={decks} dispatch={dispatch} />
    </div>
  );
}
