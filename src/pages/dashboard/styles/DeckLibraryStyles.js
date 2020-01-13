import styled from 'styled-components';

export const DecksLabel = styled.div`
  width: 46%;
  height: 100%;
`;

export const DeckCollection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 3%;
`;

export const DecksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
`;

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
`;
