import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  height: 600px;
  perspective: 1000px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
  transform: rotateY(180deg);
`;
export const FlipCardBack = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  background-color: white;
  border-radius: 5px;
`;
export const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding: 1%;
  margin: 2%;
`;
export const Main2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  padding: 1%;
  margin: 2%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 50%;
  height: 100px;
  margin-top: 10%;
  background-color: white;
  border-radius: 5px;
`;
