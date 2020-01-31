/* eslint-disable max-len */
import React from 'react';
import { MdCollectionsBookmark } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Collection,
  CollectionLabel,
  DecksContainer,
  CardsFlexs,
} from '../../../styles/DeckLibraryStyles';
import { HR, H2, P } from '../../../../../styles/typography';

import { InfoHolder, CardCount } from '../../../../../components/cards/Cards';

export default function SearchResults({ siftedDecks, selectDeck, history }) {
  return (
    <Collection>
      <CollectionLabel>
        <HR />
      </CollectionLabel>
      <DecksContainer>
        {siftedDecks.map((d, index) => {
          return (
            <CardsFlexs
              onClick={() => {
                selectDeck(d);
              }}
              key={`${index + d.deck_id}${d.deck_id}`}
              width="46%"
              marginLeft="0"
              marginRight="0"
            >
              <NavLink to={`/dashboard/deck/${d.deck_id}`} className="navFlex">
                <InfoHolder>
                  <H2 BOLD>{d.deck_name}</H2>
                  {d.tags.map((tag, idx) => (
                    <P key={`${idx + 1}`}>{tag}</P>
                  ))}
                </InfoHolder>

                <CardCount>
                  <P color="grey">30 Cards </P>
                  <button
                    type="button"
                    onClick={() => {
                      history.push('/dashboard/study');
                    }}
                  >
                    <MdCollectionsBookmark
                      size="2em"
                      color="grey"
                      className="studyIcon"
                    />
                  </button>
                </CardCount>
              </NavLink>
            </CardsFlexs>
          );
        })}
      </DecksContainer>
    </Collection>
  );
}
