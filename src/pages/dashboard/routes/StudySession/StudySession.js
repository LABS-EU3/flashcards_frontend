import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Line } from 'rc-progress';

import styled from 'styled-components';
import { H2, P } from '../../../../styles/typography';
import './studysession.css';

const dummyData = [
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
  height: 100%;
`;

export const TopCompDiv = styled.div`
  text-align: center;
  margin: 30px auto;
`;

export const EmojisCompDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2.5% auto;
  padding-top: 1%;
  padding-bottom: 5%;
  background: #ffffff;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);

  @media (max-width: 840px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 400px;
  margin-top: 2%;
  background: #ffffff;
  border: 1px solid #f6f1f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
  text-align: center;

  &:first-child {
    background: rgba(255, 169, 135, 0.5);
  }
  @media (min-width: 2000px) {
    width: 600px;
  }
  @media (max-width: 1050px) {
    width: 278px;
  }
`;

export const MLower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  width: 90%;
  margin: 5% auto auto auto;
`;

export default function CarouselComponent() {
  /* eslint-disable */
  return (
    <Container>
      <TopCompDiv>
        <CardContainer>
          <Carousel showThumbs={false} swipeable>
            {dummyData.map((data, index) => {
              return (
                <Card key={`${data.id}`}>
                  <H2>{index + 1}</H2>
                  <H2>{data.name}</H2>
                  <P>
                    {data.score} <br /> Points
                  </P>
                </Card>
              );
            })}
          </Carousel>
        </CardContainer>
        <EmojisCompDiv>
          <span class="emoji">&#129303;</span>
          <span class="emoji">&#128531;</span>
          <span class="emoji">&#128557;</span>
        </EmojisCompDiv>

        <MLower>
          <H2>Organic Compounds</H2>
          <Line
            percent={50}
            strokeLineColor="red"
            strokeWidth="4"
            trailWidth="4"
            trailColor="#fafafa"
            strokeColor="#FFA987"
            className="pBar2"
          />
          <H2>15/30 Cards</H2>
        </MLower>
      </TopCompDiv>
    </Container>
  );
}
