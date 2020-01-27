import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
// import * as g from '../../../../../styles/variables/global';
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
  // const [image, setImage] = useState('');
  const [open, setOpen] = useState(false);
  const [imagePop, setImagePop] = useState('');
  // const [answerImage, setAnswerImage] = useState('');
  const dispatch = useDispatch();
  const toggleSingleAnswer = () => {
    if (showingAllAnswers) {
      dispatch({ type: types.TOGGLE_ANSWERS, payload: false });
      setIsShowingSingleAnswer(false);
    } else setIsShowingSingleAnswer(!isShowingSingleAnswer);
  };
  const toggleImage = () => {
    setOpen(true);
    if (card.image_url_question) {
      setImagePop(card.image_url_question);
    } else {
      setImagePop(card.image_url_answer);
    }
  };

  const toggleClose = () => {
    setOpen(false);
  };
  // const handleShowingImage = () => {
  //   setImage(card.image_url_question);
  // };
  return (
    <CardsFlex
      onClick={toggleSingleAnswer}
      width="46%"
      height="175px"
      marginLeft="0"
      marginRight="0"
    >
      <DisplayCardFlex>
        <TextDiv>
          <H2 BOLD>{card.question}</H2>
          {card.image_url_question || card.image_url_answer ? (
            <div>
              <button type="button" onClick={() => toggleImage()}>
                View image
              </button>
              {open && (
                <Lightbox
                  mainSrc={imagePop}
                  onCloseRequest={() => toggleClose()}
                />
              )}
            </div>
          ) : (
            // <Image src={card.image_url_question} alt="question" />
            <p />
          )}
          {/* {card.image_url_answer ? (
                  <div>
              <button type="button" onClick={() => toggleImage()}>
                View Image Answer
              </button>
              {open && (
                <Lightbox
                  mainSrc={answerImage}
                  onCloseRequest={() => toggleClose()}
                />
              )}
            </div>
                // <Image src={card.image_url_answer} alt="answer" />
              ) : (
                <p />
              )} */}
          {showingAllAnswers || isShowingSingleAnswer ? (
            <div>
              <P>{card.answer}</P>
            </div>
          ) : (
            <P>####</P>
          )}
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
          {/* <button
            type="button"
            onClick={() => {
              handleShowingImage();
            }}
          >
            Show image
          </button> */}
        </CardsActions>
      </DisplayCardFlex>
    </CardsFlex>
  );
};

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self; center;
  width: inherit;
  align-items: center;

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

// const Image = styled.img`
//   height: 100px;
//   max-width: 100%;
//   overflow: hidden;

//   &:hover {
//     transform: scale(6);
//     overflow: hidden;
//     max-width: 120px;
//     align-items: center;
//     display: block;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     margin-top: -80px;
//     margin-left: -50px;
//     // opacity: 0.6;
//     // padding-left: 20%;
//     // width: 100%;
//   }
// `;

export default Decks;
