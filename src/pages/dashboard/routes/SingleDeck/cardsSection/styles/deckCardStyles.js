import styled from 'styled-components';
import { CardsFlex } from '../../../../../../components/cards/Cards';
import { IconWithoutText } from '../../../../styles/DeckLibraryStyles';

export const IconWithoutTextHover = styled(IconWithoutText)`
  h2 {
    visibility: hidden;
    position: absolute;
  }
`;

export const CardsFlexed = styled(CardsFlex)`
  display: flex;
  height: 280px;
  width: 46%;
  margin-left: 0;
  margin-right: 0;
  padding: 1em;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  width: inherit;
  align-items: center;
  margin-top: 10px;
  height: 100%;

  h2 {
    max-width: 80%;
    max-height: 70%;
  }
`;

export const DisplayCardFlex = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: bottom;
  width: 70%;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  height: 50px;
  margin-bottom: 10%;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background: white;
    border: 1px solid #e0e0e0;
  }
`;
