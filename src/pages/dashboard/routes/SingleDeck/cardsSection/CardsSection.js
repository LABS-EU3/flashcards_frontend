import React from 'react';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
} from '../../../styles/DeckLibraryStyles';

const Decks = ({ cards, deleteCard }) => {
  // console.log(cards);

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
              <CardsFlex width="46%" marginLeft="0" marginRight="0">
                <H2 BOLD>{card.question}</H2>
                <P>{card.answer}</P>
                <button
                  onClick={() => {
                    handleDelete(card);
                  }}
                  type="button"
                >
                  Delete
                </button>
              </CardsFlex>
            );
          })}
      </DecksContainer>
    </Collection>
  );
};

export default Decks;
