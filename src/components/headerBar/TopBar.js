// Import

// Libraries
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Assets
import logo from '../../assets/logo.svg';

const TopBarContainer = styled.div`
  height: 44px;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  padding: 1em;
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      <NavLink to="/">
        <img src={`${logo}`} alt="quickdecks logo" />
      </NavLink>
    </TopBarContainer>
  );
}
