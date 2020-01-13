import React from 'react';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  DecksLabel,
} from '../../../styles/DeckLibraryStyles';

const Decks = ({ cards }) => {
  return (
    <Collection>
      <DecksLabel>
        <H1>Decks</H1>
        <HR />
      </DecksLabel>

      <DecksContainer>
        {cards.map(c => {
          return (
            <CardsFlex width="46%" marginLeft="0" marginRight="0">
              <H2 BOLD>{c.title}</H2>
              <P>{c.category}</P>
            </CardsFlex>
          );
        })}
      </DecksContainer>
    </Collection>
  );
};

export default Decks;
