import styled from 'styled-components';
import * as g from '../../../styles/variables/global';

export const FlipCardInner = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -30px;
`;

export const Container = styled.div`
  background-color: transparent;
  background: whitesmoke;
  width: 100%;
  height: 600px;
  perspective: 1000px;
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

export const HRDiv = styled.div`
  margin: 40px 0 0 0;
`;

export const FlipCardBack = styled.div`
  padding-top: 30px;
  margin: 30px auto 0 auto;
  text-align: -webkit-center;
  width: 90%;
  height: 100%;
  font-size: ${16}px;
  color: black;
  @media (min-width: ${g.phoneMediaBreak}px) {
    font-size: ${13}px;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    font-size: ${14}px;
  }
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
  width: 60%;
  height: 120px;
  margin-top: 5%;
  background-color: white;
  border-radius: 5px;
`;
