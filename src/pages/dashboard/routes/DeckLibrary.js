import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import icons from '../../../assets/icons';

const DeckLibrary = () => {
  return (
    <div>
      <TopComponents />
    </div>
  );
};

const TopComponents = () => {
  return (
    <TopComponent>
      <IconLabel img={icons.AddDecksIcon} label="Add Deck" />
      <IconLabel img={icons.LibraryIcon} label="Add Deck" />
    </TopComponent>
  );
};

const IconLabel = ({ img, label }) => {
  return (
    <IconWithText>
      <img src={img} alt="" />
      <p>{label}</p>
    </IconWithText>
  );
};

const IconWithText = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 24px;
    width: 24px;

    margin: 10px 0;
  }
`;

const TopComponent = styled.div`
  display: flex;
`;

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {})(DeckLibrary);
