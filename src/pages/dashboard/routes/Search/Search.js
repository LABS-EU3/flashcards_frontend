// Imports
// Libraries
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

// Styles
import { H5 } from '../../../../styles/typography';
import { BackArrowButton } from '../../../../styles/buttons';

// Actions
import { CLEAR_RESPONSES } from '../../../../modules/user/userTypes';
import { fetchAllDecks } from '../../../../modules/dashboard/dashboardActions';

// Assets
import BackArrow from '../../../../assets/icons/Arrow 1.svg';
import TopSearch from './components/TopSearch';
import SearchResults from './components/SearchResults';
import { ON_SELECT_DECK } from '../../../../modules/dashboard/dashboardTypes';

function Search({ dashboard, getAllDecks, selectDeck, goBack }) {
  const { allDecks, siftedDecks } = dashboard;
  const history = useHistory();

  useEffect(() => {
    getAllDecks();
  }, [getAllDecks]);
  return (
    <div>
      <BackArrowButton
        onClick={() => {
          goBack();
          history.goBack();
        }}
      >
        <img src={`${BackArrow}`} alt="back arrow" />
        <H5>Back</H5>
      </BackArrowButton>
      <TopSearch decks={allDecks} />
      <SearchResults
        siftedDecks={siftedDecks}
        selectDeck={selectDeck}
        history={history}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllDecks: () => dispatch(fetchAllDecks()),
    selectDeck: d => dispatch({ type: ON_SELECT_DECK, payload: { ...d } }),
    goBack: () => dispatch({ type: CLEAR_RESPONSES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
