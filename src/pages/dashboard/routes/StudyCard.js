/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { H1 } from '../../../styles/typography';

import styled from 'styled-components';
import Ripples from 'react-ripples';

import { rateCard } from '../../../modules/dashboard/dashboardActions';

const StudyCard = ({ card, rateSingeleCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handlerEvent = event => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const scoreCard = score => {
    rateSingeleCard({ deck_id: card.deck_id, card_id: card.id, rating: score });
  };
  return (
    <div className="scene" onClick={handlerEvent}>
      <div className="card">
        {!isFlipped && (
          <div>
            <H1>{card.question}</H1>
          </div>
        )}
        {isFlipped && (
          <div>
            <H1>{card.answer}</H1>
          </div>
        )}
      </div>

      <EmojisCompDiv>
        <Ripples color={'#FAFFDF '}>
          <button
            onClick={() => scoreCard(3)}
            type="button"
            className="emoji btn"
          >
            &#129303;
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
        <Ripples color={'#FAFFDF'}>
          <button
            onClick={() => scoreCard(1)}
            type="button"
            className="emoji btn"
          >
            &#128557;
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

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, { rateSingeleCard: rateCard })(
  StudyCard,
);
