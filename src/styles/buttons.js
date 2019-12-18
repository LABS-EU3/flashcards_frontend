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
  box-shadow: 0px 4px 4px rgba(210, 31, 60, 0.03);
  background: linear-gradient(81.25deg, #d21f3c -48.43%, #ffa987 169.92%);
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01);
    background: ${c.PRIMARY_POP_COLOR};
  }
`;

export const LineButton = styled.button`
  text-align: center;
  background: #ffffff;
  border-radius: 3px;
  box-sizing: border-box;
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
`;
