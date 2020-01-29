// Libraries
import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Line } from 'rc-progress';

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
} from '../../styles/sidebarStyles';

import levelIcon from '../../assets/icons/label_important_24px_outlined.svg';

const cards = [
  {
    title: 'Organic Compounds',
    category: 'Chemistry',
    totalCard: 30,
  },
  {
    title: 'Quantum Mechanics',
    category: 'Physics',
    totalCard: 40,
  },
  {
    title: 'Data Structures',
    category: 'Computer Science',
    totalCard: 320,
  },
  {
    title: 'Advance Algorithms',
    category: 'Computer Science',
    totalCard: 70,
  },
  {
    title: 'OWASP Basics',
    category: 'Computer Science',
    totalCard: 100,
  },
];

export default function RightSidebar(props) {
  const { user } = props;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);
  return (
    <SidebarStyled>
      <Sidebar
        sidebar={<SideContent user={user} />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sideBarDocked}
        pullRight
        styles={{
          sidebar: {
            background: 'white',
            width: '100%',
            minWidth: '3em',
          },

          root: {
            width: '25%',
            left: 'none',
          },
        }}
      >
        <div />
      </Sidebar>
    </SidebarStyled>
  );
}
const SideContent = ({ user }) => {
  const [openLastPlayed, setOpenLastPlayed] = useState(false);
  const [openRecentlyViewed, setOpenRecentlyViewed] = useState(true);

  const handleButtonClickLastPlayed = () => {
    setOpenLastPlayed(!openLastPlayed);
  };
  const handleButtonClickRecentlyViewed = () => {
    setOpenRecentlyViewed(!openRecentlyViewed);
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
                strokeLineColor="red"
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
      <CardsStyled>
        <StyledStart>
          <H1 BOLD>
            {' '}
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
        {openLastPlayed &&
          cards.map(card => {
            return (
              <Card
                key={card.title}
                title={card.title}
                category={card.category}
                totalCard={card.totalCard}
              />
            );
          })}
      </CardsStyled>
      <ViewedCardsStyled>
        <StyledStart>
          <H1 BOLD>
            {' '}
            Recently Viewed
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
        {openRecentlyViewed &&
          cards.map(card => {
            return (
              <Card
                key={card.title}
                title={card.title}
                category={card.category}
                totalCard={card.totalCard}
              />
            );
          })}
      </ViewedCardsStyled>
    </SidebarBody>
  );
};
