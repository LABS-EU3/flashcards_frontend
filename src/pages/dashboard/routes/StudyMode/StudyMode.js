import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import ReactSearchBox from 'react-search-box';
import { MdCollectionsBookmark, MdKeyboardArrowDown } from 'react-icons/md';
import { Line } from 'rc-progress';
import { H1, H2, H3, P } from '../../../../styles/typography';
import './studymode.css';
import {
  fetchUserDecks,
  fetchSessions,
  startSession,
  getRecentDecks,
} from '../../../../modules/dashboard/dashboardActions';
import * as StyleComponent from './StudyModeStyles';

// dummy data
const gameMode = [
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

const StudyMode = ({
  dashboard,
  fetchDecks,
  getSessions,
  beginSession,
  getRecentUserDecks,
}) => {
  const container = React.createRef();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const { recentDecks } = dashboard;
  const [decks, setDecks] = useState([]);

  const [selectedDeckId, setSelectedDeckId] = useState(0);

  const handleButtonClick1 = () => {
    setOpen1(!open1);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };
  const handleButtonClick3 = () => {
    setOpen3(!open3);
    setDecks(recentDecks);
  };

  const { userDecks, userSessions } = dashboard;

  const deckSearchData = userDecks.map(d => {
    return {
      key: d.deck_id,
      value: d.deck_name,
    };
  });

  const mql = window.matchMedia(`(max-width: 768px)`);

  useEffect(() => {
    fetchDecks();
    getSessions();
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen1(!open1) : setOpen1(open1);
    /* eslint-disable-next-line no-unused-expressions */
    !mql.matches ? setOpen2(!open2) : setOpen2(open2);
    getRecentUserDecks();
    setDecks(recentDecks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <StyleComponent.Wrapper>
      <StyleComponent.TopContainer>
        <H3>Deck</H3>
        <ReactSearchBox
          placeholder="Type the deck name you want to use"
          data={deckSearchData}
          onSelect={item => setSelectedDeckId(item.key)}
        />
        <br />

        <H3>Game Mode</H3>
        <ReactSearchBox placeholder="Regular" data={gameMode} />
        <br />
        <br />
        <br />
        <StyleComponent.BUTTON onClick={() => startStudyMode(selectedDeckId)}>
          <H3 color="white">Start</H3>
        </StyleComponent.BUTTON>
        <P>{dashboard.error}</P>
      </StyleComponent.TopContainer>
      <StyleComponent.BottomContainer>
        <StyleComponent.RecentlyViewContainer>
          <StyleComponent.UpperCardSection>
            <H1 lineHeight="1em">Jump back into</H1>
            <StyleComponent.IconButtonWrapper
              rotate={open3.toString()}
              onClick={handleButtonClick3}
            >
              <MdKeyboardArrowDown
                size="4em"
                color="grey"
                onClick={handleButtonClick3}
                className="material-icons"
              />
            </StyleComponent.IconButtonWrapper>
          </StyleComponent.UpperCardSection>
          <StyleComponent.MyHR />

          <StyleComponent.CardContainer className="container" ref={container}>
            <StyleComponent.StyledMyPart>
              {open3 &&
                decks.map(deck => {
                  return (
                    <StyleComponent.Card
                      to="/dashboard/study"
                      key={deck.deck_id}
                    >
                      <H2>{deck.deck_name}</H2>
                      <StyleComponent.SLowerCardSection>
                        <StyleComponent.SLower>
                          <MdCollectionsBookmark size="2em" color="grey" />
                        </StyleComponent.SLower>
                      </StyleComponent.SLowerCardSection>
                    </StyleComponent.Card>
                  );
                })}
            </StyleComponent.StyledMyPart>
          </StyleComponent.CardContainer>
        </StyleComponent.RecentlyViewContainer>

        <StyleComponent.SessionContainer>
          <StyleComponent.UpperCardSection>
            <H1 lineHeight="1em">Session</H1>
            <StyleComponent.IconButtonWrapper
              rotate={open1.toString()}
              onClick={handleButtonClick1}
            >
              <MdKeyboardArrowDown
                size="4em"
                color="grey"
                onClick={handleButtonClick1}
                className="material-icons"
              />
            </StyleComponent.IconButtonWrapper>
          </StyleComponent.UpperCardSection>
          <StyleComponent.MyHR />

          <StyleComponent.CardContainer className="container">
            <StyleComponent.StyledMyPart>
              {open1 && userSessions.length ? (
                userSessions.map(data => {
                  // Perform some gymnastics to obtain deck name since
                  // it is currently not returned with the response.
                  const deck = userDecks.find(d => d.deck_id === data.deck_id);
                  const deckName = deck ? deck.deck_name : '';
                  return (
                    <StyleComponent.Card
                      to={`/dashboard/studysession/${data.id}`}
                      key={data.deck_id}
                    >
                      <H2>{deckName}</H2>
                      <StyleComponent.SLowerCardSection>
                        <P>{data.mode || 'Regular'} mode</P>
                        <StyleComponent.SLower>
                          <P color="grey">{data.cards_left} Cards left</P>
                          <MdCollectionsBookmark size="2em" color="grey" />
                        </StyleComponent.SLower>
                      </StyleComponent.SLowerCardSection>
                    </StyleComponent.Card>
                  );
                })
              ) : (
                <P>You don&apos;t have any sessions yet</P>
              )}
            </StyleComponent.StyledMyPart>
          </StyleComponent.CardContainer>
        </StyleComponent.SessionContainer>

        <StyleComponent.MasteryContainer>
          <StyleComponent.UpperCardSection>
            <H1 lineHeight="1em">Mastery</H1>
            <StyleComponent.IconButtonWrapper
              rotate={open2.toString()}
              onClick={handleButtonClick2}
            >
              <MdKeyboardArrowDown
                size="4em"
                color="grey"
                onClick={handleButtonClick2}
                className="material-icons"
              />
            </StyleComponent.IconButtonWrapper>
          </StyleComponent.UpperCardSection>
          <StyleComponent.MyHR />

          <StyleComponent.CardContainer className="container">
            {open2 &&
              mastery.map((data, index) => {
                return (
                  <StyleComponent.Card
                    to="/dashboard/study"
                    key={`card-${index + 1}`}
                  >
                    <H2>{data.cardTitle}</H2>
                    <StyleComponent.MLower>
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
                    </StyleComponent.MLower>
                  </StyleComponent.Card>
                );
              })}
          </StyleComponent.CardContainer>
        </StyleComponent.MasteryContainer>
      </StyleComponent.BottomContainer>
    </StyleComponent.Wrapper>
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
  getRecentUserDecks: getRecentDecks,
})(StudyMode);
