/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Line } from 'rc-progress';
import styled from 'styled-components';

import { H1, HR, H3, P, H2 } from '../../../../styles/typography';
import levelIcon from '../../../../assets/icons/label_important_24px_outlined.svg';
import {
  Image,
  MiddleHolder,
  XPHolder,
  LevelHolder,
  StyledStart,
  CardStyled,
  DashBlackContainer,
} from '../../../../styles/sidebarStyles';
import { CardFooter } from '../../../../components/DashboardCenterBar/styles';
import DashboardCenterBar from '../../../../components/DashboardCenterBar/DashboardCenterBar';
import DashboardRightBar from '../../../../components/DashboardRightBar/DashboardRightBar';
import './styles.css';
import { getCOTD } from '../../../../modules/dashboard/dashboardActions';
import COTD from './components/COTD';
import Card from '../../../../components/cards/Cards';

const WelcomePage = ({ getCardOfTheDay, getRecentDecks, dashboard, user }) => {
  const { cardOfTheDay, recentDecks, userSessions } = dashboard;

  useEffect(() => {
    getCardOfTheDay();
  }, []);

  return (
    <WelcomeStyle>
      <RankingViewed>
        <DashBlackContainer>
          <Image>
            <MiddleHolder>
              <H1>{user.credentials.fullName}!</H1>
              <H3>Ranked #1</H3>
              <XPHolder>
                <Line
                  percent="50"
                  strokelinecolor="red"
                  strokeWidth="4"
                  trailWidth="4"
                  trailColor="#fafafa"
                  strokeColor="#8D99AE"
                  className="pBar2"
                />
                <P className="xp">1000/2000 XP</P>
              </XPHolder>
              <LevelHolder>
                <img src={levelIcon} alt="level icon" />
                <H2>Level 1</H2>
              </LevelHolder>
            </MiddleHolder>
          </Image>
        </DashBlackContainer>
        <DashboardCenterBar
          getRecentDecks={getRecentDecks}
          recentDecks={recentDecks}
        />
      </RankingViewed>
      <COTPlayed>
        <CardStyled>
          <StyledStart>
            <H1 BOLD>
              Last Played
              <div>
                <HR />
              </div>
            </H1>
          </StyledStart>
          {userSessions.length === 0 ? (
            <Text>
              {' '}
              <H2 BOLD>No decks played yet...</H2>
            </Text>
          ) : (
            userSessions.map(deck => {
              return (
                <Card
                  key={deck.deck_id}
                  title={deck.name}
                  public={deck.public}
                  totalCard={deck.cards_left}
                />
              );
            })
          )}
        </CardStyled>
        {cardOfTheDay && (
          <CardFooter>
            <H1>Card of The Day</H1>
            <HR />
            <COTD card={cardOfTheDay} />
          </CardFooter>
        )}
      </COTPlayed>
      <ReleaseNotes>
        <DashboardRightBar />
      </ReleaseNotes>
    </WelcomeStyle>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCardOfTheDay: () => dispatch(getCOTD()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

const Text = styled.div`
  text-align: center;
`;
const RankingViewed = styled.div`
  width: 40%;
`;

const COTPlayed = styled.div`
  width: 40%;
`;

const ReleaseNotes = styled.div`
  width: 20%;
  height: 100%;
`;

const WelcomeStyle = styled.div`
  width: 130%;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;
