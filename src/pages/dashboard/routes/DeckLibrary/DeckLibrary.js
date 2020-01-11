import React, { useState } from 'react';
import { connect } from 'react-redux';

import AddDeckForm from '../../../../components/addDeckForm/AddDeckForm';
import DecksSection from './components/DecksSection';
import TopComponent from './components/TopComponent';

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

const DeckLibrary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }
  return (
    <div>
      <TopComponent />
      <button type="button" onClick={toggleModal}>
        Open modal
      </button>
      <FancyModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        toggleModal={toggleModal}
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

export default connect(mapStateToProps, {})(DeckLibrary);
