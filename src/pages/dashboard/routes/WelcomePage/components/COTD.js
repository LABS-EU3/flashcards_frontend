import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import {
  DisplayCardFlex,
  TextDiv,
  Images,
  Button,
} from '../../SingleDeck/cardsSection/styles/deckCardStyles';
import { P, H2 } from '../../../../../styles/typography';
import { COTDWrapper } from '../styles/COTDStyles';

export default function COTD({ card }) {
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
    <COTDWrapper>
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
      </DisplayCardFlex>
    </COTDWrapper>
  );
}
