import React from 'react';
import { useDispatch } from 'react-redux';
import {
  MdDelete,
  MdAddToPhotos,
  MdEdit,
  MdRemoveRedEye,
} from 'react-icons/md';

import {
  TopComponentDiv,
  LibraryActions,
  IconWithText,
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

  const showAllAnswers = () => {
    dispatch({ type: types.TOGGLE_ANSWERS });
  };

  return (
    <TopComponentDiv>
      <H1>{deckName}</H1>
      <LibraryActions>
        <IconWithText onClick={createDeck}>
          <H2>
            <MdAddToPhotos />
          </H2>
          <Text>Add Card</Text>
        </IconWithText>
        <IconWithText onClick={editDeck}>
          <H2>
            <MdEdit />
          </H2>
          <Text>Edit Deck</Text>
        </IconWithText>
        <IconWithText onClick={null}>
          <H2>
            <MdDelete />
          </H2>
          <Text>Delete Deck</Text>
        </IconWithText>
        <IconWithText onClick={showAllAnswers}>
          <H2>
            <MdRemoveRedEye />
          </H2>
          <Text>Show Answers</Text>
        </IconWithText>
      </LibraryActions>
    </TopComponentDiv>
  );
};

export default TopComponent;
