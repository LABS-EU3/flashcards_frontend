import React from 'react';
import { useDispatch } from 'react-redux';

import {
  TopComponentDiv,
  LibraryActions,
  IconWithText,
} from '../../../styles/DeckLibraryStyles';

import types from '../../../../../modules/dashboard/dashboardTypes';

import icons from '../../../../../assets/icons';
import { H1 } from '../../../../../styles/typography';

const TopComponent = () => {
  const dispatch = useDispatch();

  const createDeck = () => {
    dispatch({ type: types.ON_START_CREATING_DECK });
  };
  return (
    <TopComponentDiv>
      <H1>Deck Library</H1>
      <LibraryActions>
        <IconLabel
          onClick={createDeck}
          img={icons.AddDecksIcon}
          label="Add Deck"
        />
        <IconLabel
          onClick={() => dispatch({ type: types.ON_START_CREATING_CARD })}
          img={icons.LibraryIcon}
          label="Edit Library"
        />
      </LibraryActions>
    </TopComponentDiv>
  );
};

export const IconLabel = ({ img, label, onClick }) => {
  return (
    <IconWithText onClick={onClick || null}>
      <img src={img} alt="" />
      <p>{label}</p>
    </IconWithText>
  );
};

export default TopComponent;