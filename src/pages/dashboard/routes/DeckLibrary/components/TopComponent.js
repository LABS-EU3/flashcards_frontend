import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { MdAddToPhotos, MdModeEdit, MdSearch } from 'react-icons/md';

import {
  TopComponentDiv,
  LibraryActions,
  IconWithText,
  RedSquare,
} from '../../../styles/DeckLibraryStyles';

import * as types from '../../../../../modules/dashboard/dashboardTypes';

import { H1, H2, Text } from '../../../../../styles/typography';

const TopComponent = ({ setIsEditMode }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const createDeck = () => {
    dispatch({ type: types.ON_START_CREATING_DECK });
  };
  return (
    <TopComponentDiv>
      <H1>Deck Library</H1>
      <LibraryActions>
        <IconLabel
          onClick={() => {
            history.push('/dashboard/search');
          }}
          img={<MdSearch className="icon" />}
          label="Search Library"
        />
        <IconLabel
          onClick={createDeck}
          img={<MdAddToPhotos className="icon" />}
          label="Add Deck"
        />
        <IconLabel
          onClick={() => {
            setIsEditMode(true);
          }}
          img={<MdModeEdit className="icon" />}
          label="Edit Library"
        />
      </LibraryActions>
    </TopComponentDiv>
  );
};

export const IconLabel = ({ img, label, onClick }) => {
  return (
    <IconWithText onClick={onClick || null}>
      <H2>{img}</H2>
      <RedSquare />
      <Text>{label}</Text>
    </IconWithText>
  );
};

export default TopComponent;
