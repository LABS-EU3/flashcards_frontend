import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './studymode.css';

import ReactSearchBox from 'react-search-box';

import { MdCollectionsBookmark } from 'react-icons/md';
import { Line } from 'rc-progress';
import { H1, H2, H3, P } from '../../../../styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 30px;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  width: 95%;
  @media (max-width: 900px) {
    width: 80%;
    flex-direction: column;
  }
`;

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

  /* @media (max-width: 900px) {
    width: 600px;
    flex-direction: row;
  } */
`;

export const SLowerCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-left: -7%; */
`;
export const SLower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  /* margin-left: -7%; */
`;
export const MLower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: -4%;
`;

export const SessionContainer = styled.div`
  align-self: flex-start;
  margin: 10px;
  width: 100%;
`;
export const MasteryContainer = styled.div`
  margin: 10px 10px 10px 20px;
  width: 100%;
`;
export const CardContainer = styled.div``;

export const BUTTON = styled.button`
  height: 40px;
  border: none;
  outline: none;
  background: #ffa987;
  border-radius: 3px;
`;

export const MyHR = styled.hr`
  width: 98%;
  height: 1px;
  margin-left: 0;
  border: 0;
  background: linear-gradient(
    88.85deg,
    rgba(210, 31, 60, 0.5) 38.43%,
    rgba(255, 169, 135, 0.5) 136.86%
  );
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

// dummy data
const dummyData = [
  {
    key: 'john',
    value: 'John Doe',
  },
  {
    key: 'jane',
    value: 'Jane Doe',
  },
  {
    key: 'mary',
    value: 'Mary Phillips',
  },
  {
    key: 'robert',
    value: 'Robert',
  },
  {
    key: 'karius',
    value: 'Karius',
  },
];

const sessions = [
  { deckId: 1, mode: 'Regular', cardTitle: 'Oragnic Compounds', totalCard: 10 },
  { deckId: 4, mode: 'Regular', cardTitle: 'Quantum Mechanics', totalCard: 39 },
];

const mastery = [
  { id: 1, cardTitle: 'Oragnic Compounds', percent: 40 },
  { id: 4, cardTitle: 'Quantum Mechanics', percent: 60 },
  { id: 7, cardTitle: 'Geography', percent: 100 },
];

export default function StudyMode() {
  return (
    <Wrapper>
      <TopContainer>
        <H3>Deck</H3>
        <ReactSearchBox
          placeholder="Type the deck name you want to use"
          data={dummyData}
          callback={record => console.log(record)}
        />
        <br />

        <H3>Game Mode</H3>
        <ReactSearchBox placeholder="Regular" data={dummyData} />
        <br />
        <br />
        <br />

        <BUTTON>
          <StyledLink to="/dashboard/studysession/sessionId">
            <H3 color="white">Start</H3>
          </StyledLink>
        </BUTTON>
      </TopContainer>

      <BottomContainer>
        <SessionContainer>
          <H1 lineHeight="1em">Session</H1>
          <MyHR />

          <CardContainer>
            {sessions.map((data, index) => {
              return (
                /* eslint-disable-next-line react/no-array-index-key */
                <Card key={index}>
                  <H2>{data.cardTitle}</H2>
                  <SLowerCardSection>
                    <P>{data.mode} mode</P>
                    <SLower>
                      <P color="grey">{data.totalCard} Cards left</P>
                      <MdCollectionsBookmark size="2em" color="grey" />
                    </SLower>
                  </SLowerCardSection>
                </Card>
              );
            })}
          </CardContainer>
        </SessionContainer>

        <MasteryContainer>
          <H1 lineHeight="1em"> Mastery</H1>
          <MyHR />

          <CardContainer>
            {mastery.map((data, index) => {
              return (
                /* eslint-disable-next-line react/no-array-index-key */
                <Card key={index}>
                  <H2>{data.cardTitle}</H2>
                  <MLower>
                    <Line
                      percent={data.percent}
                      strokeLineColor="red"
                      strokeWidth="4"
                      trailWidth="4"
                      trailColor="#fafafa"
                      strokeColor="#8D99AE"
                      className="pBar"
                    />
                    <H2>{data.percent} %</H2>
                  </MLower>
                </Card>
              );
            })}
          </CardContainer>
        </MasteryContainer>
      </BottomContainer>
    </Wrapper>
  );
}
