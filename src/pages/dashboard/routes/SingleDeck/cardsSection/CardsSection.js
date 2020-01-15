import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
} from '../../../styles/DeckLibraryStyles';
import * as types from '../../../../../modules/dashboard/dashboardTypes';

const Decks = ({ cards, showingAllAnswers }) => {
  return (
    <Collection>
      <CollectionLabel>
        <H1>Cards</H1>
        <HR />
      </CollectionLabel>

      <DecksContainer>
        {cards &&
          cards.map(c => {
            return (
              c && <DeckCard card={c} showingAllAnswers={showingAllAnswers} />
            );
          })}
      </DecksContainer>
    </Collection>
  );
};

const DeckCard = ({ card, showingAllAnswers }) => {
  const [isShowingSingleAnswer, setIsShowingSingleAnswer] = useState(false);
  const dispatch = useDispatch();
  const toggleSingleAnswer = () => {
    if (showingAllAnswers) {
      dispatch({ type: types.TOGGLE_ANSWERS, payload: false });
      setIsShowingSingleAnswer(false);
    } else setIsShowingSingleAnswer(!isShowingSingleAnswer);
  };
  return (
    <CardsFlex
      onClick={toggleSingleAnswer}
      width="46%"
      marginLeft="0"
      marginRight="0"
    >
      <H2 BOLD>{card.question}</H2>
      {showingAllAnswers || isShowingSingleAnswer ? (
        <P>{card.answer}</P>
      ) : (
        <P>####</P>
      )}
    </CardsFlex>
  );
};

export default Decks;
