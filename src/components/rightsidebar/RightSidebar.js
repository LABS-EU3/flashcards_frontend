// Libraries
import React, { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Line } from 'rc-progress';
import styled from 'styled-components';

// components
import Card from '../cards/Cards';

// styles
import { H1, HR, H3, P, H2 } from '../../styles/typography';
import * as g from '../../styles/variables/global';
import {
  SidebarBody,
  Image,
  CardsStyled,
  StyledStart,
  SidebarStyled,
  IconButtonWrapper,
  ViewedCardsStyled,
  MiddleHolder,
  BlackContainer,
  XPHolder,
  LevelHolder,
  SectionHolder,
} from '../../styles/sidebarStyles';

import levelIcon from '../../assets/icons/label_important_24px_outlined.svg';

export default function RightSidebar(props) {
  // console.log(props);
  const { user, getRecentDecks, dashboard, fetchSessions, location } = props;
  const { recentDecks, userSessions } = dashboard;
  const [decks, setDecks] = useState([]);
  const [viewedDecks, setViewedDecks] = useState([]);
  const onGetRecentDecks = () => {
    setDecks(userSessions);
  };
  const onGetRecentViewedDecks = () => {
    setViewedDecks(recentDecks);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);

  useEffect(() => {
    getRecentDecks();
    fetchSessions();
    setViewedDecks(recentDecks);
    setDecks(userSessions);
  }, []);

  return (
    <SidebarStyled>
      <Sidebar
        sidebar={
          <SideContent
            user={user}
            onGetRecentDecks={onGetRecentDecks}
            decks={decks}
            viewedDecks={viewedDecks}
            onGetRecentViewedDecks={onGetRecentViewedDecks}
          />
        }
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sideBarDocked}
        pullright
        styles={
          location.pathname === '/dashboard/welcome'
            ? {
                sidebar: {
                  display: 'none',
                },

                root: {
                  width: 'none',
                  left: 'none',
                },
              }
            : {
                sidebar: {
                  background: 'white',
                  width: '100%',
                  minWidth: '3em',
                },

                root: {
                  width: '25%',
                  left: 'none',
                },
              }
        }
      >
        <div />
      </Sidebar>
    </SidebarStyled>
  );
}
const SideContent = ({
  user,
  decks,
  viewedDecks,
  onGetRecentDecks,
  onGetRecentViewedDecks,
}) => {
  const [openLastPlayed, setOpenLastPlayed] = useState(false);
  const [openRecentlyViewed, setOpenRecentlyViewed] = useState(false);
  const handleButtonClickLastPlayed = () => {
    setOpenLastPlayed(!openLastPlayed);
    onGetRecentDecks();
  };
  const handleButtonClickRecentlyViewed = () => {
    setOpenRecentlyViewed(!openRecentlyViewed);
    onGetRecentViewedDecks();
  };

  return (
    <SidebarBody>
      <BlackContainer>
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
      </BlackContainer>
      <SectionHolder>
        <CardsStyled>
          <StyledStart>
            <H1 BOLD>
              Last Played
              <IconButtonWrapper
                rotate={openLastPlayed}
                onClick={handleButtonClickLastPlayed}
              >
                <MdKeyboardArrowDown
                  size="1.15em"
                  color="grey"
                  onClick={handleButtonClickLastPlayed}
                />
              </IconButtonWrapper>
              <div>
                <HR />
              </div>
            </H1>
          </StyledStart>
          {decks.length === 0 && openLastPlayed ? (
            <Text>
              {' '}
              <H2 BOLD>No decks played yet...</H2>
            </Text>
          ) : (
            openLastPlayed &&
            decks.map(deck => {
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
        </CardsStyled>
        <ViewedCardsStyled>
          <StyledStart>
            <H1 BOLD>
              Last Viewed
              <IconButtonWrapper
                rotate={openRecentlyViewed}
                onClick={handleButtonClickRecentlyViewed}
              >
                <MdKeyboardArrowDown
                  size="1.15em"
                  color="grey"
                  onClick={handleButtonClickRecentlyViewed}
                />
              </IconButtonWrapper>
              <div>
                <HR />
              </div>
            </H1>
          </StyledStart>
          {viewedDecks.length === 0 && openRecentlyViewed ? (
            <Text>
              {' '}
              <H2 BOLD>No decks viewed yet...</H2>
            </Text>
          ) : (
            openRecentlyViewed &&
            viewedDecks.map(deck => {
              return (
                <Card
                  key={deck.deck_id}
                  title={deck.deck_name}
                  public={deck.public}
                  totalCard={deck.cards_left}
                />
              );
            })
          )}
        </ViewedCardsStyled>
      </SectionHolder>
    </SidebarBody>
  );
};

const Text = styled.div`
  text-align: center;
`;
