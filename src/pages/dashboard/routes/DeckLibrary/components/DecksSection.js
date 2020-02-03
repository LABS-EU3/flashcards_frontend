/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
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
    const checkbox = document.getElementsByClassName(`selectall`);
    if (checkbox[0].checked === false) {
      for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        setSelectedDecks([]);
      }
    } else {
      for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        const deckIds = decks.map(deck => deck.deck_id);
        setSelectedDecks(deckIds);
      }
    }
  };

  const selectThisDeck = d => {
    const checkbox = document.getElementsByClassName(`input-${d.deck_id}`);
    if (checkbox[0].checked === true) {
      const foundDeck = selectedDecks.find(() => d.deck_id);
      if (foundDeck === undefined) {
        setSelectedDecks([...selectedDecks, d.deck_id]);
      }
    } else {
      const foundDeck = selectedDecks.find(() => d.deck_id);
      if (foundDeck !== undefined) {
        const newSelectedDecks = selectedDecks.filter(
          deck => deck !== d.deck_id,
        );
        setSelectedDecks(newSelectedDecks);
      }
    }
  };

  useEffect(() => {
    console.log(selectedDecks);
  }, [selectedDecks]);

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
                className="selectall"
                onClick={() => {
                  selectAll();
                }}
              />
              <P>Select All</P>
            </SelectAll>

            <H2>
              <MdDelete
                className="delete-icon"
                onClick={() => {
                  console.log(selectedDecks);
                }}
              />
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
                  className={`input-${d.deck_id}`}
                  value={d.deck_id}
                  onChange={() => {
                    selectThisDeck(d);
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
                  <P color="grey">
                    {d.flashcards[0] === null ? 0 : d.flashcards.length} Cards
                  </P>
                  <button
                    type="button"
                    onClick={() => {
                      history.push(`/dashboard/study/${d.deck_id}`);
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
