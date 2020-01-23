import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './studymode.css';

import ReactSearchBox from 'react-search-box';

import { MdCollectionsBookmark } from 'react-icons/md';
// import { Line } from 'rc-progress';
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
const data = [
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

export default function StudyMode() {
  return (
    <Wrapper>
      <TopContainer>
        <H3>Deck</H3>
        <ReactSearchBox
          placeholder="Type the deck name you want to use"
          data={data}
          callback={record => console.log(record)}
        />
        <br />

        <H3>Game Mode</H3>
        <ReactSearchBox placeholder="Regular" data={data} />
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
            {sessions.map(sdata => {
              return (
                <Card key={sdata.data}>
                  <H2>{sdata.cardTitle}</H2>

                  <P>{sdata.mode} mode</P>

                  <P color="grey">{sdata.totalCard} Cards left</P>
                  <MdCollectionsBookmark size="2em" color="grey" />
                </Card>
              );
            })}
          </CardContainer>
        </SessionContainer>

        <MasteryContainer>
          <H1 lineHeight="1em"> Mastery</H1>
          <MyHR />

          <CardContainer>
            {sessions.map(mdata => {
              return <Card key={mdata.data}>{mdata} </Card>;
            })}
          </CardContainer>
        </MasteryContainer>
      </BottomContainer>
    </Wrapper>
  );
}
