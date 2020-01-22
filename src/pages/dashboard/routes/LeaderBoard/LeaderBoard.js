import React from 'react';

import styled from 'styled-components';
import { H1, H2, P, HR } from '../../../../styles/typography';

const ranking = [
  { id: 1, name: 'Happiness', score: 10 },
  { id: 4, name: 'Chinwe', score: 9 },
  { id: 8, name: 'Bobby', score: 8 },
  { id: 100, name: 'Alex', score: 7 },
  { id: 10, name: 'Jane', score: 6 },
  { id: 30, name: 'Tade', score: 5 },
  { id: 14, name: 'Miracle', score: 4 },
  { id: 7, name: 'Peace', score: 3 },
  { id: 25, name: 'Joy', score: 2 },
  { id: 2, name: 'Alex', score: 1 },
];
export const Container = styled.div`
  background-color: transparent;
  background: white;
  width: 100%;
`;

export const TopCompDiv = styled.div`
  text-align: center;
  margin: 30px auto;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 278px;
  height: 53px;
  margin-top: 2%;
  background: #ffffff;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
`;

export default function LeaderBoard() {
  return (
    <Container>
      <TopCompDiv>
        <H1 lineHeight="1em">Rankings</H1>
        <HR width="65%" />
      </TopCompDiv>

      <CardContainer>
        {ranking.map((anObjectMapped, index) => {
          return (
            <Card key={`${anObjectMapped.id}`}>
              <H2>{index + 1}</H2>
              <H2>{anObjectMapped.name}</H2>
              <P>{anObjectMapped.score} points</P>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
}