/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Line } from 'rc-progress';
import styled from 'styled-components';
import { MdAddToPhotos, MdContentCopy } from 'react-icons/md';
import { useHistory } from 'react-router';
import * as g from '../../../../styles/variables/global';
import { H1, HR, H3, P, H2 } from '../../../../styles/typography';
import levelIcon from '../../../../assets/icons/label_important_24px_outlined.svg';
import {
  Image,
  MiddleHolder,
  XPHolder,
  LevelHolder,
  CardStyled,
  DashBlackContainer,
} from '../../../../styles/sidebarStyles';
import DashboardMiddle from '../../../../components/DashboardCenterBar/DashboardMiddle';
import { CardFooter } from '../../../../components/DashboardCenterBar/styles';
import DashboardCenterBar from '../../../../components/DashboardCenterBar/DashboardCenterBar';
import DashboardRightBar from '../../../../components/DashboardRightBar/DashboardRightBar';
import './styles.css';
import { getCOTD } from '../../../../modules/dashboard/dashboardActions';
import COTD from './components/COTD';
import AddDeckForm from '../../../../components/addDeckForm/AddDeckForm';
import FancyModal from '../../../../components/modals/CreateResourceModal';
import * as types from '../../../../modules/dashboard/dashboardTypes';
import { IconLabel } from '../DeckLibrary/components/TopComponent';

const WelcomePage = ({ getCardOfTheDay, dashboard, user }) => {
  const {
    cardOfTheDay,
    recentDecks,
    userSessions,
    creatingDeck,
    tags,
  } = dashboard;

  // const { creatingDeck, userDecks, tags, confirmingDeletion } = dashboard;
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  function toggleDeckModal() {
    if (creatingDeck) {
      dispatch({ type: types.ON_DECK_CREATION_CANCELLED });
    } else {
      dispatch({ type: types.ON_START_CREATING_DECK });
    }
  }

  const createDeck = () => {
    dispatch({ type: types.ON_START_CREATING_DECK });
  };

  const viewDecks = () => {
    history.push('/dashboard/library');
  };

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

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
        <MobileDIv>
          <FancyModal
            isOpen={creatingDeck}
            afterOpen={afterOpen}
            toggleModal={toggleDeckModal}
            opacity={opacity}
            backgroundProps={{ opacity }}
          >
            <AddDeckForm tags={tags} />
          </FancyModal>
          <IconLabel
            onClick={createDeck}
            img={<MdAddToPhotos />}
            label="Add Deck"
          />
          <IconLabel
            onClick={viewDecks}
            img={<MdContentCopy />}
            label="View Decks"
          />
        </MobileDIv>
        <DashboardCenterBar recentDecks={recentDecks} />
      </RankingViewed>
      <COTPlayed>
        <CardStyled>
          <DashboardMiddle userSessions={userSessions} />
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

const MobileDIv = styled.div`
  @media (min-width: ${g.phoneMediaBreak}px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    justify-content: space-evenly;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    display: none;
  }
`;

const RankingViewed = styled.div`
  width: 40%;
  @media (min-width: ${g.phoneMediaBreak}px) {
    width: 100%;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    width: 40%;
    background: transparent;
  }
`;

const COTPlayed = styled.div`
  width: 40%;
  @media (min-width: ${g.phoneMediaBreak}px) {
    width: 100%;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    width: 40%;
    background: transparent;
  }
`;

const ReleaseNotes = styled.div`
  width: 20%;
  height: 100%;
  @media (min-width: ${g.phoneMediaBreak}px) {
    width: 100%;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    width: 20%;
    background: transparent;
  }
`;

const WelcomeStyle = styled.div`
  width: 130%;
  display: flex;
  flex-direction: row;
  margin-left: 10px;

  @media (min-width: ${g.phoneMediaBreak}px) {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    margin-left: 0;
  }
  @media (min-width: ${g.desktopMediaBreak}px) {
    width: 130%;
    background: transparent;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
  }
`;
