import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import { H1, HR, H2, P } from '../../../../../styles/typography';
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

const Decks = ({ cards, deleteCard, showingAllAnswers }) => {
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
      <CollectionLabel>
        <H1>Cards</H1>
        <HR />
      </CollectionLabel>

      <DecksContainer>
        {cards &&
          cards.map(card => {
            return (
              card && (
                <DeckCard
                  key={card.id}
                  card={card}
                  showingAllAnswers={showingAllAnswers}
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

const DeckCard = ({ card, showingAllAnswers, handleDelete, handleUpdate }) => {
  const [isShowingSingleAnswer, setIsShowingSingleAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [questionImage, setQuestionImage] = useState('');
  const [answerImage, setAnswerImage] = useState('');
  const dispatch = useDispatch();

  const toggleSingleAnswer = () => {
    if (showingAllAnswers) {
      dispatch({ type: types.TOGGLE_ANSWERS, payload: false });
      setIsShowingSingleAnswer(false);
    } else setIsShowingSingleAnswer(!isShowingSingleAnswer);
  };

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
    <CardsFlex
      onClick={toggleSingleAnswer}
      height="280px"
      width="46%"
      marginLeft="0"
      marginRight="0"
    >
      <DisplayCardFlex>
        <TextDiv>
          <H2 BOLD>{card.question}</H2>
          {showingAllAnswers || isShowingSingleAnswer ? (
            <div>
              <P>{card.answer}</P>
            </div>
          ) : (
            <P>####</P>
          )}

          <Images>
            <div>
              <Button
                type="button"
                disabled={!card.image_url_question}
                onClick={() => toggleImageQuestion(true)}
              >
                {' '}
                View Question image
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
                {' '}
                View Answer image
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
          <IconWithoutText
            onClick={() => {
              handleDelete(card);
            }}
          >
            <H2>
              <MdDelete />
            </H2>
          </IconWithoutText>
          <IconWithoutText
            onClick={() => {
              handleUpdate(card);
            }}
          >
            <H2>
              <MdEdit />
            </H2>
          </IconWithoutText>
        </CardsActions>
      </DisplayCardFlex>
    </CardsFlex>
  );
};

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
  justify-content: space-evenly;
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
