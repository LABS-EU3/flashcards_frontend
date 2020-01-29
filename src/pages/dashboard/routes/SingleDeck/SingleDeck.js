import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import AddCardForm from '../../../../components/addCardForm/AddCardForm';
import AddDeckForm from '../../../../components/addDeckForm/AddDeckForm';
import TopComponent from './topComponent/TopComponent';
import CardsSection from './cardsSection/CardsSection';
import {
  getSingleDeck,
  deleteCard,
} from '../../../../modules/dashboard/dashboardActions';

import * as types from '../../../../modules/dashboard/dashboardTypes';

import FancyModal from '../../../../components/modals/CreateResourceModal';
import { BackArrowButton } from '../../../../styles/buttons';
import { H5 } from '../../../../styles/typography';

import BackArrow from '../../../../assets/icons/Arrow 1.svg';
import DeleteConfirmation from './deleteConfirmation/DeleteConfirmation';

const SingleDeck = props => {
  const { dashboard, match } = props;
  const { creatingCard, selectedDeck, confirmingDeletion } = dashboard;
  const { creatingDeck, tags } = dashboard;

  const [opacity, setOpacity] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  function toggleCardModal() {
    if (creatingCard) {
      dispatch({ type: types.ON_CARD_CREATION_CANCELLED });
    } else {
      dispatch({ type: types.ON_START_CREATING_CARD });
    }
  }

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

  const { deckId } = match.params;
  useEffect(() => {
    props.getSingleDeck(deckId);
  }, []);

  return (
    <div>
      <BackArrowButton
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={`${BackArrow}`} alt="back arrow" />
        <H5>Back</H5>
      </BackArrowButton>
      <TopComponent
        deckId={deckId}
        deckName={dashboard.selectedDeck.deck_name}
      />
      <FancyModal
        isOpen={creatingCard}
        afterOpen={afterOpen}
        toggleModal={toggleCardModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <AddCardForm deckId={deckId} />
      </FancyModal>

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
        <DeleteConfirmation deckId={deckId} />
      </FancyModal>
      <CardsSection
        cards={selectedDeck.flashcards}
        // eslint-disable-next-line react/destructuring-assignment
        deleteCard={props.deleteCard}
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
  getSingleDeck,
  deleteCard,
})(SingleDeck);
