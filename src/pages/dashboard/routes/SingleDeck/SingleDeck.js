import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

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

const SingleDeck = props => {
  const { dashboard, match } = props;
  const { creatingCard, selectedDeck, showingAnswers } = dashboard;
  const { creatingDeck, tags } = dashboard;

  const [opacity, setOpacity] = useState(0);

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
      <TopComponent deckId={deckId} deckName={dashboard.selectedDeck.name} />
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
      <CardsSection
        cards={selectedDeck.flashcards}
        showingAllAnswers={showingAnswers}
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
