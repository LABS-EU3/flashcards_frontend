/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AddDeckForm from '../../../../components/addDeckForm/AddDeckForm';
import DecksSection from './components/DecksSection';
import TopComponent from './components/TopComponent';
import {
  createDeck,
  fetchTags,
  fetchUserDecks,
  updateAccessTime,
} from '../../../../modules/dashboard/dashboardActions';
import DecksComfirmation from './components/DecksConfirmation';

import * as types from '../../../../modules/dashboard/dashboardTypes';

import FancyModal from '../../../../components/modals/CreateResourceModal';

const DeckLibContainer = styled.div`
  background: transparent;
`;
const DeckLibrary = props => {
  // eslint-disable-next-line no-shadow
  const { dashboard } = props;
  const updateAccess = props.updateAccessTime;

  const fetchDecks = props.fetchUserDecks;
  const { creatingDeck, userDecks, tags, confirmingDeletion } = dashboard;

  const [opacity, setOpacity] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedDecks, setSelectedDecks] = useState([]);

  const dispatch = useDispatch();

  function toggleDeckModal() {
    if (creatingDeck) {
      dispatch({ type: types.ON_DECK_CREATION_CANCELLED });
    } else {
      dispatch({ type: types.ON_START_CREATING_DECK });
    }
  }

  function toggleConfirmationModal() {
    if (confirmingDeletion) {
      dispatch({
        type: types.ON_DELETE_CONFIRMATION_CANCELED,
      });
    } else {
      dispatch({ type: types.ON_START_DELETE_CONFIRMATION });
    }
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

  useEffect(() => {
    fetchDecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode]);

  return (
    <DeckLibContainer>
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
      <FancyModal
        isOpen={confirmingDeletion}
        afterOpen={afterOpen}
        toggleModal={toggleConfirmationModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <DecksComfirmation
          selectedDecks={selectedDecks}
          setIsEditMode={setIsEditMode}
        />
      </FancyModal>

      <DecksSection
        decks={userDecks}
        setIsEditMode={setIsEditMode}
        isEditMode={isEditMode}
        updateAccess={updateAccess}
        selectedDecks={selectedDecks}
        setSelectedDecks={setSelectedDecks}
      />
    </DeckLibContainer>
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
  updateAccessTime,
})(DeckLibrary);
