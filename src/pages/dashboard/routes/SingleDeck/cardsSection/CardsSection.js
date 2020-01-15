import React from 'react';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
} from '../../../styles/DeckLibraryStyles';

const Decks = ({ cards }) => {
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
              <CardsFlex width="46%" marginLeft="0" marginRight="0">
                <H2 BOLD>{c.question}</H2>
                <P>{c.answer}</P>
              </CardsFlex>
            );
          })}
      </DecksContainer>
    </Collection>
  );
};

export default Decks;
