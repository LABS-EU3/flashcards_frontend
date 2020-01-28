import styled from 'styled-components';
import img from '../assets/images/rectangle_20.png';
import * as g from './variables/global';

import { BRAND_FONT } from './variables/fonts';

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  overflow: hidden;
`;

export const SidebarStyled = styled.div`
  @media (min-width: ${g.phoneMediaBreak}px) {
    display: none;
    @media (min-width: ${g.desktopMediaBreak}px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-height: 50%;
  min-height: 35vh;
  margin-top: -1em;
  h1 {
    text-align: center;
  }
`;

export const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: white;
  width: 100%;
  justify-content: space-evenly;
  margin-top: -4em;
  border-radius: 20px 20px 0 0;
  max-height: 80%;
`;

export const StyledStart = styled.div`
  font: ${BRAND_FONT};
  text-align: left;
  justify-content: center;
  margin: 1em 2em 1em 2em;
`;

export const IconButtonWrapper = styled.div`
  float: right;
  position: relative;
  top: 0.25em;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate ? `rotate(180deg)` : '')};
`;

export const ViewedCardsStyled = styled(CardsStyled)`
  margin-top: 0em;
`;
