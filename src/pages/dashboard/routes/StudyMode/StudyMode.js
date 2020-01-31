import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './studymode.css';
import ReactSearchBox from 'react-search-box';
import { MdCollectionsBookmark, MdKeyboardArrowDown } from 'react-icons/md';
import { Line } from 'rc-progress';
import { NavLink } from 'react-router-dom';
import { H1, H2, H3, P } from '../../../../styles/typography';
import {
  fetchUserDecks,
  fetchSessions,
  startSession,
} from '../../../../modules/dashboard/dashboardActions';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  margin-top: 30px;
  @media (max-width: 900px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  width: 95%;
  @media (min-width: 1500px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const Card = styled(NavLink)`
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

export const UpperCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SLowerCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SLower = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;

export const MLower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: -4%;
`;

export const RecentlyViewContainer = styled.div`
  margin: 10px 10px 10px 20px;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SessionContainer = styled.div`
  align-self: flex-start;
  margin: 10px 10px 10px 5px;
  width: 100%;
`;

export const MasteryContainer = styled.div`
  margin: 10px 10px 10px 20px;
  width: 100%;
`;

export const CardContainer = styled.div`
  /* display: none; */
`;

const StyledMyPart = styled(CardContainer).attrs({
  className: 'container',
})`
  &.container {
    /* display: none; */
  }
`;

export const BUTTON = styled.button`
  height: 40px;
  border: none;
  outline: none;
  background: #ffa987;
  border-radius: 3px;
  cursor: pointer;
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

const IconButtonWrapper = styled.div`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate ? `rotate(180deg)` : '')};
`;

// dummy data
const dummyData = [
  {
    key: '1',
    value: 'Regular',
  },
  {
    key: '2',
    value: 'Extreme',
  },
  {
    key: '3',
    value: 'Insane',
  },
];

const mastery = [
  { id: 1, cardTitle: 'Oragnic Compounds', percent: 40 },
  { id: 4, cardTitle: 'Quantum Mechanics', percent: 60 },
  { id: 7, cardTitle: 'Geography', percent: 100 },
];

const StudyMode = ({ dashboard, fetchDecks, getSessions, beginSession }) => {
  const container = React.createRef();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  // const handleClickOutside = event => {
  //   if (container.current && !container.current.contains(event.target)) {
  //     setOpen(false);
  //   }
  // };

  const [selectedDeckId, setSelectedDeckId] = useState(0);

  const handleButtonClick1 = () => {
    setOpen1(!open1);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };
  const handleButtonClick3 = () => {
    setOpen3(!open3);
  };
  // document.addEventListener('mousedown', handleClickOutside);
  // document.removeEventListener('mousedown', handleClickOutside);

  const { userDecks, userSessions } = dashboard;

  const deckSearchData = userDecks.map(d => {
    return {
      key: d.deck_id,
      value: d.deck_name,
    };
  });

  const mql = window.matchMedia(`(max-width: 768px)`);
  let resizeTimeout;
  // eslint-disable-next-line func-names
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    // eslint-disable-next-line func-names
    resizeTimeout = setTimeout(function() {
      window.location.reload();
    }, 1500);
  });

  useEffect(() => {
    fetchDecks();
    getSessions();
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen1(!open1) : setOpen1(open1);
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen2(!open2) : setOpen2(open2);
  }, [mql.matches]);

  const history = useHistory();
  const startStudyMode = deckId => {
    if (deckId > 0) {
      beginSession(deckId, sessionId => {
        history.push(`/dashboard/studysession/${sessionId}`);
      });
    }
  };

  return (
    <Wrapper>
      <TopContainer>
        <H3>Deck</H3>
        <ReactSearchBox
          placeholder="Type the deck name you want to use"
          data={deckSearchData}
          onSelect={item => setSelectedDeckId(item.key)}
        />
        <br />

        <H3>Game Mode</H3>
        <ReactSearchBox placeholder="Regular" data={dummyData} />
        <br />
        <br />
        <br />

        <BUTTON onClick={() => startStudyMode(selectedDeckId)}>
          <H3 color="white">Start</H3>
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

          <CardContainer className="container" ref={container}>
            <StyledMyPart>
              {open1 &&
                userSessions.map(data => {
                  // Perform some gymnastics to obtain deck name since
                  // it is currently not returned with the response.
                  const deck = userDecks.find(d => d.deck_id === data.deck_id);
                  const deckName = deck ? deck.deck_name : '';
                  return (
                    <Card
                      to={`/dashboard/studysession/${data.id}`}
                      key={data.deck_id}
                    >
                      <H2>{deckName}</H2>
                      <SLowerCardSection>
                        <P>{data.mode || 'Regular'} mode</P>
                        <SLower>
                          <P color="grey">{data.cards_left} Cards left</P>
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

          <CardContainer className="container" ref={container}>
            {open2 &&
              mastery.map((data, index) => {
                return (
                  /* eslint-disable-next-line react/no-array-index-key */
                  <Card to="/dashboard/study" key={index}>
                    <H2>{data.cardTitle}</H2>
                    <MLower>
                      <Line
                        percent={data.percent}
                        strokelinecolor="red"
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
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {
  fetchDecks: fetchUserDecks,
  beginSession: startSession,
  getSessions: fetchSessions,
})(StudyMode);
