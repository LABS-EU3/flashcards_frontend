// Import
// import { clicked } from '../../modules/dashboard/dashboardActions';
// Styled

// Libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdReorder } from 'react-icons/md';
import { HAMBURGER_CLICKED } from '../../modules/dashboard/dashboardTypes';

// Assets
import logo from '../../assets/logo.svg';

const TopBarContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  height: 44px;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  padding: 1em;
`;
const HambuggerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;
  @media (min-width: 767px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;
  }
`;

export default function TopBar() {
  const dispatch = useDispatch();

  return (
    <TopBarContainer>
      <HambuggerWrapper>
        <MdReorder
          onClick={() => {
            dispatch({ type: HAMBURGER_CLICKED });
          }}
          size="2.8em"
          color="#D21F3C"
        />
      </HambuggerWrapper>
      <LogoWrapper>
        <NavLink to="/">
          <img src={`${logo}`} alt="quickdecks logo" />
        </NavLink>
      </LogoWrapper>
    </TopBarContainer>
  );
}
