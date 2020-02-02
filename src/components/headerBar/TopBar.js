// Import
// import { clicked } from '../../modules/dashboard/dashboardActions';
// Styled

// Libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdReorder } from 'react-icons/md';
import { HAMBURGER_CLICKED } from '../../modules/dashboard/dashboardTypes';

// components
import SearchBox from '../SearchBox/SearchBox';

// Assets
import logo from '../../assets/logo.svg';

import { getToken } from '../../utils/auth';

const TopBarContainer = styled.div`
  background: #ffffff;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  height: 44px;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  padding: 1em;
  z-index: 999;
`;
const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;
  z-index: 999;
  @media (min-width: 767px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;
`;

export default function TopBar() {
  const dispatch = useDispatch();
  const { credentials } = useSelector(state => state.user);

  return (
    <TopBarContainer>
      {credentials && credentials.id ? (
        <HamburgerWrapper>
          <MdReorder
            onClick={() => {
              dispatch({ type: HAMBURGER_CLICKED });
            }}
            size="2.8em"
            color="#D21F3C"
          />
        </HamburgerWrapper>
      ) : null}

      <LogoWrapper>
        <NavLink to="/dashboard/welcome">
          <img src={`${logo}`} alt="quickdecks logo" />
        </NavLink>
      </LogoWrapper>
      {getToken() ? <SearchBox /> : null}
    </TopBarContainer>
  );
}
