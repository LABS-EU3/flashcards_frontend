// Import

// Styled

// Libraries
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdReorder } from 'react-icons/md';
import { useDispatch } from 'react-redux';
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
`;

export default function TopBar() {
  const dispatch = useDispatch();

  return (
    <TopBarContainer>
      <HambuggerWrapper>
        <MdReorder
          onClick={() => {
            dispatch({ type: 'HAMBURGER_CLICKED' });
          }}
          size="2.8em"
          color="#f44336"
        />
      </HambuggerWrapper>
      <HambuggerWrapper>
        <NavLink to="/">
          <img src={`${logo}`} alt="quickdecks logo" />
        </NavLink>
      </HambuggerWrapper>
    </TopBarContainer>
  );
}
