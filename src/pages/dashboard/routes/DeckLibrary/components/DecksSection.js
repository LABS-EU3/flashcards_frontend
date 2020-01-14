import React from 'react';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  DeckCollection,
  DecksContainer,
  DecksLabel,
} from '../../../styles/DeckLibraryStyles';

const Decks = ({ decks }) => {
  return (
    <DeckCollection>
      <DecksLabel>
        <H1>Decks</H1>
        <HR />
      </DecksLabel>

      <DecksContainer>
        {decks.map(d => {
          return (
            <CardsFlex
              key={d.deck_name}
              width="46%"
              marginLeft="0"
              marginRight="0"
            >
              <H2 BOLD>{d.deck_name}</H2>
              <P>{d.isPublic ? 'Public' : 'Private'}</P>
            </CardsFlex>
          );
        })}
      </DecksContainer>
    </DeckCollection>
  );
};

export default Decks;
