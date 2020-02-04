import styled from 'styled-components';
import img from '../assets/Vector.png';
import * as g from './variables/global';

import { BRAND_FONT } from './variables/fonts';
import { LIGHT_NEUTRAL_COLOR, DARK_NEUTRAL_COLOR } from './variables/colours';

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
  min-height: 23.35em;
  max-height: 23.35em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${LIGHT_NEUTRAL_COLOR};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  h1 {
    text-align: center;
  }
  -webkit-transform: skewY(-16.27deg);
  -moz-transform: skewY(-16.27deg);
  -ms-transform: skewY(-16.27deg);
  -o-transform: skewY(-16.27deg);
  transform: skewY(-16.27deg);
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
  h1 {
    width: 100%;
  }
`;
export const CardStyled = styled(CardsStyled)`
  margin-top: 0;
  border-radius: 0;
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
export const MiddleHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 23.35em;
  max-height: 23.35em;
  -webkit-transform: skewY(16.27deg);
  -moz-transform: skewY(16.27deg);
  -ms-transform: skewY(16.27deg);
  -o-transform: skewY(16.27deg);
  transform: skewY(16.27deg);
  h1 {
    margin-bottom: -1em;
  }
  .pBar2 {
    display: flex;
    width: 100%;
    height: 12px;
    border: 2px solid #8d99ae;
    border-radius: 10px;
  }
`;

export const BlackContainer = styled.div`
  background: ${DARK_NEUTRAL_COLOR};
  width: 100%;
  min-height: 23.35em;
  max-height: 23.35em;
  margin-top: -1em;
  overflow: hidden;
  z-index: -1;
  align-content: center;
`;

export const DashBlackContainer = styled(BlackContainer)`
  border-radius: 10px;
`;

export const XPHolder = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  .xp {
    align-self: flex-end;
  }
`;

export const LevelHolder = styled.div`
  align-self: flex-start;
  display: flex;
`;

export const SectionHolder = styled.div`
  height: 80%;
  width: 100%;
`;
