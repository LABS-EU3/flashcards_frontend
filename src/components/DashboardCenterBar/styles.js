import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 98%;
  height: 60px;
  margin-top: 5%;
  padding-left: 2%;
  padding-bottom: 2%;
  background-color: white;
  border-radius: 5px;
`;

export const SLowerCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SLower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`;

export const FlipCardInner = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -30px;
`;

export const HRDiv = styled.div`
  margin: 40px 0 0 0;
`;
export const Container = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  color: black;
  background-color: white;
  border-radius: 5px;
`;

export const Title = styled.div`
  font-size: 1.1rem;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5em;
  padding: 2.5em;
  background: #fff;
  margin-top: 1em;
  font-size: 1.2rem;
`;
