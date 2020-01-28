import styled from 'styled-components';
import * as g from '../../../styles/variables/global';
import { CardsFlex } from '../../../components/cards/Cards';
import { DARK_NEUTRAL_COLOR } from '../../../styles/variables/colours';

export const CollectionLabel = styled.div`
  width: 46%;
`;

export const Collection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
`;

export const DecksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${g.desktopMediaBreak}px) {
    justify-content: center;
  }
`;

export const IconWithText = styled.button`
  padding: 1em;
  background: none;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    position: absolute;
    top: 4em;
  }
  &:hover {
    cursor: pointer;
    background: orange;
  }

  img {
    height: 24px;
    width: 24px;
    margin: 10px 0;
  }

  @media (max-width: ${g.desktopMediaBreak}px) {
    h2 {
      line-height: 1.3em;
    }
    .icon {
      position: absolute;
      top: 6.25em;
    }
  }
`;

export const IconWithoutText = styled(IconWithText)`
  align-items: flex-end;

  &:hover {
    cursor: pointer;
    background: none;
  }
`;

export const TopComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 5em;
  }
`;

export const LibraryActions = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  background: white;
  border-radius: 8px;
  margin: 16px 0;

  @media (max-width: ${g.desktopMediaBreak}px) {
    width: 90%;
  }
`;

export const CardsActions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const RedSquare = styled.div`
  width: 1em;
  height: 1em;
  background: rgba(210, 31, 60, 0.5);
  border-radius: 3px;
  margin-bottom: 2em;
`;

export const CardsFlexs = styled(CardsFlex)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
  input {
    margin-right: 1em;
  }
`;

export const EditControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditModeHolder = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
  button {
    border-radius: 3px;
    text-decoration: none;
    background: inherit;
    border: 1px solid ${DARK_NEUTRAL_COLOR};
  }
`;

export const SelectAll = styled.div`
  display: flex;
`;
