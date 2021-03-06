// Import

// Libraries
import styled from 'styled-components';

// Colours
import * as c from './variables/colours';

export const Button = styled.button`
  text-align: center;
  border-radius: 3px;
  border: none;
  width: 100%;
  margin: 1em 0em 1em 0em;
  box-shadow: 0px 4px 4px rgba(210, 31, 60, 0.03);
  background: linear-gradient(81.25deg, #d21f3c -48.43%, #ffa987 169.92%);
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
  }
  &:not([disabled]) {
    cursor: pointer;
  }
`;
export const Button2 = styled.button`
  text-align: center;
  border-radius: 3px;
  border: 1px solid #f6f1f0;
  outline: none;
  width: 100%;
  margin: 1em 0em 1em 0em;
  box-shadow: 0px 4px 4px rgba(210, 31, 60, 0.03);
  background: #ffffff;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
  }
  &:not([disabled]) {
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  text-align: center;
  border-radius: 3px;
  border: 3px solid #444140;
  outline: none;
  width: 100%;
  margin: 5em 0em 1em 0em;
  box-shadow: 0px 4px 4px rgba(210, 31, 60, 0.03);
  background: #ffffff;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
  }
  &:not([disabled]) {
    cursor: pointer;
  }
`;

export const GoogleButton = styled(Button)`
  background: #ffffff;
  border: 1px solid ${c.LIGHT_NEUTRAL_COLOR};
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  img {
    height: 2.5em;
  }
`;

export const LineButton = styled.button`
  text-align: center;
  background: #ffffff;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 1em 0em 1em 0em;
  width: 100%;
  border: 3px solid ${c.PRIMARY_POP_COLOR};
  box-shadow: 0px 4px 4px rgba(210, 31, 60, 0.03);
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
    h3 {
      color: ${c.WHITE};
    }
  }
  &:not([disabled]) {
    cursor: pointer;
  }
`;

export const BackArrowButton = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 2em;
  &:not([disabled]) {
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
  }
  z-index: 1;
`;
