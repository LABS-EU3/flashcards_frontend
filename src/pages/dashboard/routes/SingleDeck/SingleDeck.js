import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import AddCardForm from '../../../../components/addCardForm/AddCardForm';
import TopComponent from './topComponent/TopComponent';
import CardsSection from './cardsSection/CardsSection';
import {
  createDeck,
  fetchTags,
} from '../../../../modules/dashboard/dashboardActions';

import types from '../../../../modules/dashboard/dashboardTypes';

import FancyModal from '../../../../components/modals/CreateResourceModal';

const DeckLibrary = props => {
  const { dashboard, cards } = props;
  const { creatingCard } = dashboard;

  const [opacity, setOpacity] = useState(0);

  const dispatch = useDispatch();

  function toggleCardModal() {
    if (creatingCard) {
      dispatch({ type: types.ON_CARD_CREATION_CANCELLED });
    } else {
      dispatch({ type: types.ON_START_CREATING_CARD });
    }
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }
  return (
    <div>
      <TopComponent />
      <FancyModal
        isOpen={creatingCard}
        afterOpen={afterOpen}
        toggleModal={toggleCardModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <AddCardForm />
      </FancyModal>
      <CardsSection cards={cards || []} />
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
})(DeckLibrary);
