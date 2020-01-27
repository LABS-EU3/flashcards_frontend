import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  MdDelete,
  MdEdit,
  MdRemoveRedEye,
  // MdQuestionAnswer,
  MdRadio,
} from 'react-icons/md';
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
  IconWithText,
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
      backgroundImage={card.image_url_question}
      width="46%"
      height="175px"
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
            {card.image_url_question ? (
              <Test>
                {/* <IconWithText onClick={() => toggleImageQuestion(true)}>
                  <H2>
                    <MdRemoveRedEye />
                  </H2>
                </IconWithText> */}
                <IconLabel
                  onClick={() => toggleImageQuestion(true)}
                  img={<MdRemoveRedEye />}
                  label="View Question image"
                />
                {isOpen && (
                  <Lightbox
                    mainSrc={questionImage}
                    onCloseRequest={() => toggleDone()}
                  />
                )}
              </Test>
            ) : (
              <IconLabel img={<MdRemoveRedEye />} label="Set Question image" />
            )}
            {card.image_url_answer ? (
              <Test>
                {/* <IconWithoutText onClick={() => toggleImageAnswer(true)}>
                  <H2>
                    <MdQuestionAnswer />
                  </H2>
                   <IconLabel
                  onClick={() => toggleImageQuestion(true)}
                  label="View Question image"
                />
                </IconWithoutText> */}
                <IconLabel
                  onClick={() => toggleImageAnswer(true)}
                  img={<MdRadio />}
                  label="View Answer image"
                />
                {isOpen && (
                  <Lightbox
                    mainSrc={answerImage}
                    onCloseRequest={() => toggleDone()}
                  />
                )}
              </Test>
            ) : (
              <IconLabel
                // onClick={() => ()}
                img={<MdRadio />}
                label="Set Answer image"
              />
            )}
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

export const IconLabel = ({ img, label, onClick }) => {
  return (
    <IconWithText onClick={onClick || null}>
      {img}
      {/* <img scr={img} alt="question" /> */}
      <p>{label}</p>
    </IconWithText>
  );
};
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: inherit;
  align-items: center;
  margin-top: 30px;

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
  align-items: center;
  width: 70%;
  margin-top: 30px;
`;

const Test = styled.div``;
export default Decks;
