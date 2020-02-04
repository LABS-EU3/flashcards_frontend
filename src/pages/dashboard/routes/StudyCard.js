/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Ripples from 'react-ripples';

import { H2, H1, P } from '../../../styles/typography';
import { rateCard } from '../../../modules/dashboard/dashboardActions';

const StudyCard = ({ card, rateSingleCard, sessionId }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handlerEvent = event => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const scoreCard = score => {
    rateSingleCard({ session_id: sessionId, card_id: card.id, rating: score });
  };
  return (
    <div className="scene" onClick={handlerEvent}>
      <P>❗ Click to flip</P>
      <div className="card">
        {!isFlipped && (
          <ImageCard>
            <H2>Question:</H2>
            {card.image_url_question && (
              <section>
                <img
                  src={card.image_url_question}
                  alt={`${card.question} question`}
                />
              </section>
            )}
            <H1>{card.question}</H1>
          </ImageCard>
        )}
        {isFlipped && (
          <ImageCard>
            <H2>Answer:</H2>
            <section>
              {card.image_url_answer && (
                <img
                  src={card.image_url_answer}
                  alt={`${card.answer} answer`}
                />
              )}
            </section>
            <H1>{card.answer}</H1>
          </ImageCard>
        )}
      </div>
      <EmojisCompDiv>
        <Ripples color={'#FAFFDF'}>
          <button
            onClick={() => scoreCard(1)}
            type="button"
            className="emoji btn"
          >
            &#128557;
          </button>
        </Ripples>
        <Ripples color={'#FAFFDF '}>
          <button
            onClick={() => scoreCard(2)}
            type="button"
            className="emoji btn"
          >
            &#128531;
          </button>
        </Ripples>
        <Ripples color={'#FAFFDF '}>
          <button
            onClick={() => scoreCard(3)}
            type="button"
            className="emoji btn"
          >
            &#129303;
          </button>
        </Ripples>
      </EmojisCompDiv>
    </div>
  );
};

export const EmojisCompDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-decoration: underline;
  }
`;

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, { rateSingleCard: rateCard })(
  StudyCard,
);
