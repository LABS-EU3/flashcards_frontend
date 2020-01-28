import React from 'react';
import { useDispatch } from 'react-redux';

import { MdDelete, MdAddToPhotos, MdEdit } from 'react-icons/md';

import {
  TopComponentDiv,
  LibraryActions,
  IconWithText,
  RedSquare,
} from '../../../styles/DeckLibraryStyles';

import * as types from '../../../../../modules/dashboard/dashboardTypes';

import { H1, H2, Text } from '../../../../../styles/typography';

const TopComponent = ({ deckName }) => {
  const dispatch = useDispatch();
  const createDeck = () => {
    dispatch({ type: types.ON_START_CREATING_CARD });
  };

  const editDeck = () => {
    dispatch({ type: types.ON_START_EDITING_DECK });
    dispatch({ type: types.ON_START_CREATING_DECK });
  };

  const deleteDeck = () => {
    dispatch({ type: types.ON_START_DELETE_CONFIRMATION });
  };

  return (
    <TopComponentDiv>
      <H1>{deckName}</H1>
      <LibraryActions>
        <IconWithText onClick={createDeck}>
          <H2>
            <MdAddToPhotos className="icon" />
          </H2>
          <RedSquare />
          <Text>Add Card</Text>
        </IconWithText>
        <IconWithText onClick={editDeck}>
          <H2>
            <MdEdit className="icon" />
          </H2>
          <RedSquare />
          <Text>Edit Deck</Text>
        </IconWithText>
        <IconWithText onClick={deleteDeck}>
          <H2>
            <MdDelete className="icon" />
          </H2>
          <RedSquare />
          <Text>Delete Deck</Text>
        </IconWithText>
      </LibraryActions>
    </TopComponentDiv>
  );
};

export default TopComponent;
