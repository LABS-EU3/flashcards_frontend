/* eslint-disable */
import React from 'react';
import Ripples from 'react-ripples';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Line } from 'rc-progress';

import StudyCard from '../StudyCard';

import styled from 'styled-components';
import { H2 } from '../../../../styles/typography';
import './studysession.css';

const dummyData = [
  { id: 1, Question: 'Happiness', score: 10, Answer: 'my answer1' },
  { id: 4, Question: 'Chinwe', score: 9, Answer: 'my answer2' },
  { id: 8, Question: 'Bobby', score: 8, Answer: 'my answer3' },
  { id: 100, Question: 'Alex', score: 7, Answer: 'my answer4' },
  { id: 10, Question: 'Jane', score: 6, Answer: 'my answer5' },
  { id: 30, Question: 'Tade', score: 5, Answer: 'my answer6' },
  { id: 14, Question: 'Miracle', score: 4, Answer: 'my answer7' },
  { id: 7, Question: 'Peace', score: 3, Answer: 'my answer8' },
  { id: 25, Question: 'Joy', score: 2, Answer: 'my answer9' },
  { id: 2, Question: 'Alex', score: 1, Answer: 'my answer10' },
];

export const Container = styled.div`
  background-color: transparent;
  background: white;
  width: 100%;
  height: 100%;
  /* margin: 0 auto; */
`;

export const TopCompDiv = styled.div`
  display: flex;
  text-align: center;
  margin: 30px auto;
`;

export const BottomCompDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
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
  height: 300px;
  margin: 2% auto 0 auto;
  background: #ffffff;

  @media (min-width: 2000px) {
    width: 600px;
  }
  @media (max-width: 1050px) {
    width: 278px;
  }
  @media (max-width: 840px) {
    width: 90%;
  }
`;

export const MLower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 5% auto auto auto;
`;

export default function CarouselComponent() {
  return (
    <Container>
      <TopCompDiv>
        <CardContainer>
          <Carousel showThumbs={false} swipeable>
            {dummyData.map((data, index) => {
              return <StudyCard key={index} card={data} />;
            })}
          </Carousel>
        </CardContainer>
      </TopCompDiv>

      <BottomCompDiv>
        <EmojisCompDiv>
          <Ripples color={'#FAFFDF '}>
            <button type="button" className="emoji btn">
              &#129303;
            </button>
          </Ripples>
          <Ripples color={'#FAFFDF '}>
            <button type="button" className="emoji btn">
              &#128531;
            </button>
          </Ripples>
          <Ripples color={'#FAFFDF'}>
            <button type="button" className="emoji btn">
              &#128557;
            </button>
          </Ripples>
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
          <h2 className="bottomh2">15/30 Cards</h2>
        </MLower>
      </BottomCompDiv>
    </Container>
  );
}
