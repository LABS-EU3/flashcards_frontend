import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdDelete, MdEdit } from 'react-icons/md';
import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
  IconWithoutText,
  CardsActions,
} from '../../../styles/DeckLibraryStyles';
import * as types from '../../../../../modules/dashboard/dashboardTypes';

const Decks = ({ cards, deleteCard, showingAllAnswers }) => {
  const handleDelete = card => {
    deleteCard(card);
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
                />
              )
            );
          })}
      </DecksContainer>
    </Collection>
  );
};

const DeckCard = ({ card, showingAllAnswers, handleDelete }) => {
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
        <IconWithoutText>
          <H2>
            <MdEdit />
          </H2>
        </IconWithoutText>
      </CardsActions>
    </CardsFlex>
  );
};

export default Decks;
