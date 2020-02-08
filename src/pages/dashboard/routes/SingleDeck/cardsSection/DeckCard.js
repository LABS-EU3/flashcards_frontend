import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import Lightbox from 'react-image-lightbox';
import { H2, P } from '../../../../../styles/typography';

import 'react-image-lightbox/style.css';
import { CardsActions } from '../../../styles/DeckLibraryStyles';
import {
  CardsFlexed,
  DisplayCardFlex,
  TextDiv,
  Images,
  Button,
  IconWithoutTextHover,
} from './styles/deckCardStyles';

export default function DeckCard({ card, handleDelete, handleUpdate }) {
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
}
