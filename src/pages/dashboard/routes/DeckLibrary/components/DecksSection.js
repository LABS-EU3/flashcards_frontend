import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdCollectionsBookmark, MdDelete } from 'react-icons/md';

import { H1, HR, H2, P } from '../../../../../styles/typography';
import { InfoHolder, CardCount } from '../../../../../components/cards/Cards';
import {
  Collection,
  DecksContainer,
  CollectionLabel,
  CardsFlexs,
  EditControls,
  EditModeHolder,
  SelectAll,
} from '../../../styles/DeckLibraryStyles';
import * as types from '../../../../../modules/dashboard/dashboardTypes';

const Decks = ({ decks, isEditMode, setIsEditMode }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Collection>
      <EditControls>
        <CollectionLabel>
          <H1>Decks</H1>
          <HR />
        </CollectionLabel>
        {isEditMode && (
          <EditModeHolder>
            <SelectAll>
              <input type="checkbox" />
              <P>Select All</P>
            </SelectAll>
            <H2>
              <MdDelete />
            </H2>

            <button
              type="button"
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              <P>Done</P>
            </button>
          </EditModeHolder>
        )}
      </EditControls>
      <DecksContainer>
        {decks.map(d => {
          return (
            <CardsFlexs
              onClick={() => {
                dispatch({ type: types.ON_SELECT_DECK, payload: { ...d } });
              }}
              key={d.deck_id}
              width="46%"
              marginLeft="0"
              marginRight="0"
            >
              {isEditMode && <input type="checkbox" />}
              <NavLink to={`/dashboard/deck/${d.deck_id}`} className="navFlex">
                <InfoHolder>
                  <H2 BOLD>{d.deck_name}</H2>
                  <P>Tags</P>
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
};

export default Decks;
