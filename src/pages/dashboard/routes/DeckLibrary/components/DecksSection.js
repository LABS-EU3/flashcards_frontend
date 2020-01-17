import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { CardsFlex } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
} from '../../../styles/DeckLibraryStyles';
import * as types from '../../../../../modules/dashboard/dashboardTypes';

const Decks = ({ decks }) => {
  const dispatch = useDispatch();
  return (
    <Collection>
      <CollectionLabel>
        <H1>Decks</H1>
        <HR />
      </CollectionLabel>

      <DecksContainer>
        {decks.map(d => {
          return (
            <CardsFlex
              onClick={() => {
                dispatch({ type: types.ON_SELECT_DECK, payload: { ...d } });
              }}
              key={d.deck_name}
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
};

export default Decks;
