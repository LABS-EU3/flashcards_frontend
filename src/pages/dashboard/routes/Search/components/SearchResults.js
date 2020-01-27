/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collection,
  CollectionLabel,
  DecksContainer,
} from '../../../styles/DeckLibraryStyles';
import { HR, H2, P } from '../../../../../styles/typography';
import { ON_SELECT_DECK } from '../../../../../modules/dashboard/dashboardTypes';
import { CardsFlex } from '../../../../../components/cards/Cards';

export default function SearchResults({ decks, dispatch }) {
  return (
    <Collection>
      <CollectionLabel>
        <HR />
      </CollectionLabel>
      <DecksContainer>
        {decks.map(d => {
          return (
            <CardsFlex
              onClick={() => {
                dispatch({ type: ON_SELECT_DECK, payload: { ...d } });
              }}
              key={d.deck_id}
              width="46%"
              marginLeft="0"
              marginRight="0"
            >
              <NavLink to={`/dashboard/deck/${d.deck_id}`}>
                <H2 BOLD>{d.deck_name}</H2>
                <P>{d.isPublic ? 'Public' : 'Private'}</P>
              </NavLink>
            </CardsFlex>
          );
        })}
      </DecksContainer>
    </Collection>
  );
}
