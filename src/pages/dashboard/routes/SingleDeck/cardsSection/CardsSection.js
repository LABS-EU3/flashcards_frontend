import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import { HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import 'react-image-lightbox/style.css';

import {
  Collection,
  DecksContainer,
  CollectionLabel,
  IconWithoutText,
  CardsActions,
} from '../../../styles/DeckLibraryStyles';
import * as types from '../../../../../modules/dashboard/dashboardTypes';
import { DARK_NEUTRAL_COLOR } from '../../../../../styles/variables/colours';
import { Input } from '../../../../../styles/forms';
import { NavSearch, Search } from '../../../../../components/SearchBox/styles';

const TopHolder = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${DARK_NEUTRAL_COLOR};
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const CardSearch = styled(Search)`
  padding: 0em;
  position: relative;
  border: none;
  right: 0;
  top: 0em;
  max-width: 50em;
  min-width: 25em;
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  input {
    width: 150%;
    height: 25%;
  }
  .searchLink {
    position: relative;
    bottom: 2em;
    left: 5em;
  }
  @media (max-width: 768px) {
    align-items: center;
    align-self: center;
    input {
      display: block;
      margin-bottom: 3em;
    }
    .searchLink {
      position: relative;
      bottom: 2em;
      left: 5em;
    }
  }
`;

const Decks = ({ cards, deleteCard }) => {
  const dispatch = useDispatch();

  const handleDelete = card => {
    deleteCard(card);
  };

  const handleUpdate = card => {
    dispatch({ type: types.ON_START_CREATING_CARD });
    dispatch({ type: types.ON_UPDATE_CARD_START, payload: card });
  };

  return (
    <Collection>
      <TopHolder>
        <CollectionLabel>
          <HR />
        </CollectionLabel>
        <CardSearch>
          <NavSearch>
            <Input type="text" name="q" placeholder="Search deck" />
          </NavSearch>

          <FaSearch size={15} className="searchLink" />
        </CardSearch>
      </TopHolder>

      <DecksContainer>
        {cards &&
          cards.map(card => {
            return (
              card && (
                <DeckCard
                  key={card.id}
                  card={card}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              )
            );
          })}
      </DecksContainer>
    </Collection>
  );
};

const DeckCard = ({ card, handleDelete, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [questionImage, setQuestionImage] = useState('');
  const [answerImage, setAnswerImage] = useState('');

  const toggleImageQuestion = () => {
    setIsOpen(true);
    setQuestionImage(card.image_url_question);
    setAnswerImage('');
  };

  const toggleImageAnswer = () => {
    setIsOpen(true);
    setQuestionImage('');
    setAnswerImage(card.image_url_answer);
  };
  const toggleDone = () => {
    setIsOpen(false);
    setQuestionImage('');
    setAnswerImage('');
  };

  return (
    <CardsFlexed>
      <DisplayCardFlex>
        <TextDiv>
          <H2 BOLD>{card.question}</H2>

          <P>{card.answer}</P>

          <Images>
            <div>
              <Button
                type="button"
                disabled={!card.image_url_question}
                onClick={() => toggleImageQuestion(true)}
              >
                Question Image
              </Button>
              {isOpen && (
                <Lightbox
                  mainSrc={questionImage || answerImage}
                  onCloseRequest={() => toggleDone()}
                />
              )}
            </div>
            <div>
              <Button
                type="button"
                disabled={!card.image_url_answer}
                onClick={() => toggleImageAnswer(true)}
              >
                Answer Image
              </Button>
              {isOpen && (
                <Lightbox
                  mainSrc={answerImage || questionImage}
                  onCloseRequest={() => toggleDone()}
                />
              )}
            </div>
          </Images>
        </TextDiv>
        <CardsActions>
          <IconWithoutTextHover
            onClick={() => {
              handleDelete(card);
            }}
            className="hover"
          >
            <H2>
              <MdDelete />
            </H2>
          </IconWithoutTextHover>
          <IconWithoutTextHover
            onClick={() => {
              handleUpdate(card);
            }}
            className="hover"
          >
            <H2>
              <MdEdit />
            </H2>
          </IconWithoutTextHover>
        </CardsActions>
      </DisplayCardFlex>
    </CardsFlexed>
  );
};

const IconWithoutTextHover = styled(IconWithoutText)`
  h2 {
    visibility: hidden;
    position: absolute;
  }
`;

const CardsFlexed = styled(CardsFlex)`
  display: flex;
  height: 280px;
  width: 46%;
  margin-left: 0;
  margin-right: 0;
  padding: 1em;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  width: inherit;
  align-items: center;
  margin-top: 10px;
  height: 100%;

  h2 {
    max-width: 80%;
    max-height: 70%;
  }
`;

const DisplayCardFlex = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: bottom;
  width: 70%;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  height: 50px;
  margin-bottom: 10%;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background: white;
    border: 1px solid #e0e0e0;
  }
`;
export default Decks;
