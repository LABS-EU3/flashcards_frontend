import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import AddDeckForm from '../../../../components/addDeckForm/AddDeckForm';
import DecksSection from './components/DecksSection';
import TopComponent from './components/TopComponent';
import {
  createDeck,
  fetchTags,
  fetchUserDecks,
} from '../../../../modules/dashboard/dashboardActions';

import * as types from '../../../../modules/dashboard/dashboardTypes';

import FancyModal from '../../../../components/modals/CreateResourceModal';

const DeckLibrary = props => {
  const { dashboard } = props;
  // eslint-disable-next-line react/destructuring-assignment
  const fetchDecks = props.fetchUserDecks;
  const { creatingDeck, userDecks, tags } = dashboard;

  const [opacity, setOpacity] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useDispatch();

  function toggleDeckModal() {
    if (creatingDeck) {
      dispatch({ type: types.ON_DECK_CREATION_CANCELLED });
    } else {
      dispatch({ type: types.ON_START_CREATING_DECK });
    }
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  return (
    <div>
      <TopComponent setIsEditMode={setIsEditMode} />
      <FancyModal
        isOpen={creatingDeck}
        afterOpen={afterOpen}
        toggleModal={toggleDeckModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <AddDeckForm tags={tags} />
      </FancyModal>

      <DecksSection
        decks={userDecks}
        setIsEditMode={setIsEditMode}
        isEditMode={isEditMode}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {
  createDeck,
  fetchTags,
  fetchUserDecks,
})(DeckLibrary);
