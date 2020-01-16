import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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

import useAction from '../../../../../utils/useAction';

import * as action from '../../../../../modules/dashboard/dashboardActions';

const TopComponent = ({ deckName, deckId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const createDeck = () => {
    dispatch({ type: types.ON_START_CREATING_CARD });
  };

  const showAllAnswers = () => {
    dispatch({ type: types.TOGGLE_ANSWERS });
  };
  const deleteDeck = useAction(action.deleteDeck);

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
        <IconWithText onClick={null}>
          <H2>
            <MdEdit />
          </H2>
          <Text>Edit Deck</Text>
        </IconWithText>
        <IconWithText
          onClick={async () => {
            await deleteDeck(deckId);
            await history.push('/dashboard/library');
          }}
        >
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
