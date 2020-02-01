import React, { useState, useEffect } from 'react';

import './studymode.css';
import ReactSearchBox from 'react-search-box';
import { MdCollectionsBookmark, MdKeyboardArrowDown } from 'react-icons/md';
import { Line } from 'rc-progress';
import { H1, H2, H3, P } from '../../../../styles/typography';

import {
  BottomContainer,
  BUTTON,
  Card,
  CardContainer,
  IconButtonWrapper,
  MyHR,
  MLower,
  MasteryContainer,
  RecentlyViewContainer,
  SLower,
  SLowerCardSection,
  SessionContainer,
  StyledLink,
  StyledMyPart,
  TopContainer,
  UpperCardSection,
  Wrapper,
} from './StudyModeStyles';

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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleButtonClick1 = () => {
    setOpen1(!open1);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };
  const handleButtonClick3 = () => {
    setOpen3(!open3);
  };

  const mql = window.matchMedia(`(max-width: 768px)`);
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      window.location.reload();
    }, 1500);
  });

  useEffect(() => {
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen1(!open1) : setOpen1(open1);
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen2(!open2) : setOpen2(open2);
  }, [mql.matches]);

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
        <RecentlyViewContainer>
          <UpperCardSection>
            <H1 lineHeight="1em">Jump back into</H1>
            <IconButtonWrapper rotate={open3} onClick={handleButtonClick3}>
              <MdKeyboardArrowDown
                size="4em"
                color="grey"
                onClick={handleButtonClick3}
                className="material-icons"
              />
            </IconButtonWrapper>
          </UpperCardSection>
          <MyHR />
        </RecentlyViewContainer>

        <SessionContainer>
          <UpperCardSection>
            <H1 lineHeight="1em">Session</H1>
            <IconButtonWrapper rotate={open1} onClick={handleButtonClick1}>
              <MdKeyboardArrowDown
                size="4em"
                color="grey"
                onClick={handleButtonClick1}
                className="material-icons"
              />
            </IconButtonWrapper>
          </UpperCardSection>
          <MyHR />

          <CardContainer className="container">
            <StyledMyPart>
              {open1 &&
                sessions.map((data, index) => {
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
            </StyledMyPart>
          </CardContainer>
        </SessionContainer>

        <MasteryContainer>
          <UpperCardSection>
            <H1 lineHeight="1em">Mastery</H1>
            <IconButtonWrapper rotate={open2} onClick={handleButtonClick2}>
              <MdKeyboardArrowDown
                size="4em"
                color="grey"
                onClick={handleButtonClick2}
                className="material-icons"
              />
            </IconButtonWrapper>
          </UpperCardSection>
          <MyHR />

          <CardContainer className="container">
            {open2 &&
              mastery.map((data, index) => {
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
