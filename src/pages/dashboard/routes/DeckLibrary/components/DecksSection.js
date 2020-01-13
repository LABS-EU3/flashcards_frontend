import React from 'react';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
} from '../../../styles/DeckLibraryStyles';

const Decks = ({ decks }) => {
  return (
    <Collection>
      <CollectionLabel>
        <H1>Decks</H1>
        <HR />
      </CollectionLabel>

      <DecksContainer>
        {decks.map(d => {
          return (
            <CardsFlex width="46%" marginLeft="0" marginRight="0">
              <H2 BOLD>{d.name}</H2>
              <P>{`isPublic: ${d.public}`}</P>
            </CardsFlex>
          );
        })}
      </DecksContainer>
    </Collection>
  );
};

export default Decks;
