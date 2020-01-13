import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import AddDeckForm from '../../../../components/addDeckForm/AddDeckForm';
import DecksSection from './components/DecksSection';
import TopComponent from './components/TopComponent';
import {
  createDeck,
  fetchTags,
} from '../../../../modules/dashboard/dashboardActions';

import types from '../../../../modules/dashboard/dashboardTypes';

import FancyModal from '../../../../components/modals/CreateResourceModal';

const cards = [
  {
    title: 'Organic Compounds',
    category: 'Chemistry',
  },
  {
    title: 'Quantum Mechanics',
    category: 'Physics',
  },
  {
    title: 'Data Structures',
    category: 'Computer Science',
  },
  {
    title: 'Advance Algorithms',
    category: 'Computer Science',
  },
  {
    title: 'OWASP Basics',
    category: 'Computer Science',
  },
  {
    title: 'Organic Compounds',
    category: 'Chemistry',
  },
  {
    title: 'Quantum Mechanics',
    category: 'Physics',
  },
  {
    title: 'Data Structures',
    category: 'Computer Science',
  },
  {
    title: 'Advance Algorithms',
    category: 'Computer Science',
  },
  {
    title: 'OWASP Basics',
    category: 'Computer Science',
  },
];

const tags = [
  '',
  'Accounting & Finance',
  'Aeronautical & Manufacturing Engineering',
  'Agriculture & Forestry',
  'American Studies',
  'Anatomy & Physiology',
  'Anthropology',
];

const DeckLibrary = props => {
  const { dashboard } = props;
  const { creatingDeck, creatingCard } = dashboard;

  const [opacity, setOpacity] = useState(0);

  const dispatch = useDispatch();

  function toggleDeckModal() {
    if (creatingDeck) {
      dispatch({ type: types.ON_DECK_CREATION_CANCELLED });
    } else {
      dispatch({ type: types.ON_START_CREATING_DECK });
    }
  }

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
        isOpen={creatingDeck}
        afterOpen={afterOpen}
        toggleModal={toggleDeckModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <AddDeckForm tags={tags} />
      </FancyModal>

      <FancyModal
        isOpen={creatingCard}
        afterOpen={afterOpen}
        toggleModal={toggleCardModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <AddDeckForm tags={tags} />
      </FancyModal>
      <DecksSection decks={cards} />
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
