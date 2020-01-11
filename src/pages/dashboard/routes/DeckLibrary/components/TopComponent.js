import React from 'react';

import {
  TopComponentDiv,
  LibraryActions,
  IconWithText,
} from '../../../styles/DeckLibraryStyles';

import icons from '../../../../../assets/icons';
import { H1 } from '../../../../../styles/typography';

const TopComponent = () => {
  return (
    <TopComponentDiv>
      <H1>Deck Library</H1>
      <LibraryActions>
        <IconLabel img={icons.AddDecksIcon} label="Add Deck" />
        <IconLabel img={icons.LibraryIcon} label="Edit Library" />
      </LibraryActions>
    </TopComponentDiv>
  );
};

export const IconLabel = ({ img, label }) => {
  return (
    <IconWithText>
      <img src={img} alt="" />
      <p>{label}</p>
    </IconWithText>
  );
};

export default TopComponent;
