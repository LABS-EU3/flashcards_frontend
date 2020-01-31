/* eslint-disable no-plusplus */
import React, { useState } from 'react';
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

const Decks = ({ decks, isEditMode, setIsEditMode, updateAccess }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedDecks, setSelectedDecks] = useState([]);

  const selectAll = () => {
    const checkboxes = document.getElementsByName('selectThisDeck');
    let i;
    for (i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = 1;
    }
  };

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
              <input
                type="checkbox"
                onClick={() => {
                  selectAll();
                  const deckIds = decks.map(deck => deck.deck_id);
                  setSelectedDecks(deckIds);
                }}
              />
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
                updateAccess(d.deck_id);
              }}
              key={d.deck_id}
              width="46%"
              marginLeft="0"
              marginRight="0"
            >
              {isEditMode && (
                <input
                  type="checkbox"
                  name="selectThisDeck"
                  value={d.deck_id}
                  onChange={() => {
                    selectedDecks.push(d.deck_id);
                    const nonRepeatingIds = selectedDecks.filter(
                      (a, b) => a === b,
                    );
                    setSelectedDecks(nonRepeatingIds);
                    console.log(selectedDecks);
                  }}
                />
              )}
              <NavLink to={`/dashboard/deck/${d.deck_id}`} className="navFlex">
                <InfoHolder>
                  <H2 BOLD>{d.deck_name}</H2>
                  {d.tags[0] !== null ? (
                    d.tags.map((tag, index) => (
                      <P key={`${index + 1}`}>{tag.name}</P>
                    ))
                  ) : (
                    <P>-</P>
                  )}
                </InfoHolder>

                <CardCount>
                  <P color="grey">{d.flashcards.length} Cards </P>
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
