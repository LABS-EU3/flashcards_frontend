import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Form, Formik, Field } from 'formik';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';

import icons from '../../../assets/icons';
import { H1, HR, H2, P } from '../../../styles/typography';
import { CardsFlex } from '../../../components/cards/Cards';

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

const DeckLibrary = () => {
  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${props => props.opacity};
    transition: opacity ease 200ms;
  `;
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
      <ModalProvider backgroundComponent={FadingBackground}>
        <TopComponents />
        {/* <FancyModalButton /> */}
        <button type="button" onClick={toggleModal}>
          Open modal
        </button>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          // beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
        >
          <ModalInner>
            <CreateDeckForm />
          </ModalInner>
        </StyledModal>
        <Decks decks={cards} />
      </ModalProvider>
    </div>
  );
};

const ModalInner = styled.div`
  height: 90%;
  width: 100%;
  background: white;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledModal = Modal.styled`
  width: 50%;
  height: 85%;
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(88.92deg, #D21F3C -6.57%, #FFA987 91.86%);
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const initialValues = {
  deckName: '',
  tags: [],
};

const tags = [
  'Accounting & Finance',
  'Aeronautical & Manufacturing Engineering',
  'Agriculture & Forestry',
  'American Studies',
  'Anatomy & Physiology',
  'Anthropology',
];

const CreateDeckForm = () => {
  return (
    <DeckForm>
      <H1>Deck Form</H1>
      <Formik onSubmit={() => {}} initialValues={initialValues}>
        {() => (
          <Form>
            <P>Deck Name</P>
            <Field name="deckName" type="text" />

            <P>Tags</P>
            <Field name="tags" as="select">
              {tags.map(t => (
                <option value={t}>{t}</option>
              ))}
            </Field>
          </Form>
        )}
      </Formik>
    </DeckForm>
  );
};

const DeckForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
  }

  select {
    width: 86%;
    height: 30px;
  }
`;

const TopComponents = () => {
  return (
    // <ModalProvider backgroundComponent={FadingBackground}>
    <TopComponent>
      <H1>Deck Library</H1>
      <LibraryActions>
        <IconLabel img={icons.AddDecksIcon} label="Add Deck" />
        <IconLabel img={icons.LibraryIcon} label="Edit Library" />
      </LibraryActions>
    </TopComponent>
    // </ModalProvider>
  );
};

const IconLabel = ({ img, label }) => {
  return (
    <IconWithText>
      <img src={img} alt="" />
      <p>{label}</p>
    </IconWithText>
  );
};

const Decks = ({ decks }) => {
  return (
    <DeckCollection>
      <DecksLabel>
        <H1>Decks</H1>
        <HR />
      </DecksLabel>

      <DecksContainer>
        {decks.map(d => {
          return (
            <CardsFlex width="46%" marginLeft="0" marginRight="0">
              <H2 BOLD>{d.title}</H2>
              <P>{d.category}</P>
            </CardsFlex>
          );
        })}
      </DecksContainer>
    </DeckCollection>
  );
};

const DecksLabel = styled.div`
  width: 46%;
`;

const DeckCollection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
`;

const DecksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IconWithText = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: orange;
  }

  img {
    height: 24px;
    width: 24px;

    margin: 10px 0;
  }
`;

const TopComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LibraryActions = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  background: white;
  border-radius: 8px;
  margin: 16px 0;
`;

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {})(DeckLibrary);
