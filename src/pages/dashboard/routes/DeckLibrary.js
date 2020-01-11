import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as yup from 'yup';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';

import icons from '../../../assets/icons';
import { H1, HR, H2, P, Text } from '../../../styles/typography';
import { CardsFlex } from '../../../components/cards/Cards';
import { Forms, Input, Label, Select } from '../../../styles/forms';
import * as c from '../../../styles/variables/colours';
import { GrowSpace } from '../../../styles/displayFlex';

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
        <button type="button" onClick={toggleModal}>
          Open modal
        </button>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
        >
          <ModalInner>
            <AddDeckForm />
          </ModalInner>
        </StyledModal>
        <Decks decks={cards} />
      </ModalProvider>
    </div>
  );
};

const Form = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Forms onSubmit={handleSubmit} height="100%">
      <FormContainer>
        <H1>Create Deck</H1>
        <Label>
          <H2>Deck Name</H2>
          {touched.deckName && errors.deckName && (
            <Text color={c.DANGER_COLOR}>{errors.deckName}</Text>
          )}
          <Input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.deckName}
            name="deckName"
            border={
              touched.deckName &&
              errors.deckName &&
              `2px solid ${c.DANGER_COLOR}`
            }
          />
        </Label>

        <Label>
          <H2>Tags</H2>
          {touched.tag && errors.tag && (
            <Text color={c.DANGER_COLOR}>{errors.deckName}</Text>
          )}
          <Select
            placeholder="Add tags to your deck"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tag}
            name="tag"
            border={touched.tag && errors.tag && `2px solid ${c.DANGER_COLOR}`}
          >
            {tags.map(t => (
              <option value={t}>{t}</option>
            ))}
          </Select>
        </Label>

        <GrowSpace flexGrow="2" />

        <button type="submit">Submit</button>
        <GrowSpace flexGrow="1" />
      </FormContainer>
    </Forms>
  );
};

const FormContainer = styled.div`
  text-align: center;
  width: 55%;
  margin: 4% 0;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const validationSchema = yup.object().shape({
  deckName: yup.string().required('Please provide a name for your deck'),
  tag: yup.string(),
});

const AddDeckForm = withFormik({
  mapPropsToValues: () => ({ deckName: '', tag: '' }),
  validationSchema,
  handleSubmit: (values, { /* props, */ setSubmitting }) => {
    setSubmitting(false);
  },
  displayName: 'Create Deck',
})(Form);

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

const TopComponents = () => {
  return (
    <TopComponent>
      <H1>Deck Library</H1>
      <LibraryActions>
        <IconLabel img={icons.AddDecksIcon} label="Add Deck" />
        <IconLabel img={icons.LibraryIcon} label="Edit Library" />
      </LibraryActions>
    </TopComponent>
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
