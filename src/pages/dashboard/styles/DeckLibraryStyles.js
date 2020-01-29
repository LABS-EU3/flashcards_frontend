import styled from 'styled-components';
import * as g from '../../../styles/variables/global';

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
  background: none;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  }
`;

export const IconWithoutText = styled(IconWithText)`
  align-items: flex-end;

  &:hover {
    cursor: pointer;
    background: none;
  }
`;

// export const ImageIcons = styled(IconWithText)`
//   // background: red;
//   // padding-bottom: 20px;

//   &:hover {
//     cursor: pointer;
//     background: none;
//   }
// `;

export const TopComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
