import styled from 'styled-components';
// eslint-disable-next-line max-len
import { CardsFlexed } from '../../SingleDeck/cardsSection/styles/deckCardStyles';
import * as g from '../../../../../styles/variables/global';

export const COTDWrapper = styled(CardsFlexed)`
  width: 100%;

  @media (min-width: ${g.phoneMediaBreak}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 30px;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 0;
  }
`;

export const DivWrapper = styled.div``;
