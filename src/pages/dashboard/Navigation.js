// Import

// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import RoundedImage from 'react-rounded-image';

// assets
import AddDecksIcon from '../../assets/icons/add_deck_icon.svg';
import DashboardIcon from '../../assets/icons/dashboard_icon_outlined.svg';
import LibraryIcon from '../../assets/icons/library_icon_outlined.svg';
import ProfileIcon from '../../assets/icons/profile_icon_outlined.svg';
import SettingsIcon from '../../assets/icons/settings_24px_outlined.svg';

// Styled
import * as c from '../../styles/variables/colours';
import { P, H1 } from '../../styles/typography';

export default function SideNav({ mainContent }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <NavSection>
      <Sidebar
        sidebar={<SideContent name="Zuckerr" />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked
        styles={{
          sidebar: { background: c.DARK_NEUTRAL_COLOR, width: '20%' },
          root: { top: '46px' },
        }}
      >
        <div>
          <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            Open sidebar
          </HamburgerButton>

          {mainContent}
        </div>
      </Sidebar>
    </NavSection>
  );
}

const SideContent = ({ name }) => {
  return (
    <SidebarBody>
      <ProfileImageDiv>
        <RoundedImage
          // eslint-disable-next-line max-len
          image="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198-300x300.jpg"
          alt="User's profile"
          imageHeight="150"
          imageWidth="150"
        />

        <H1 REGULAR color={c.WHITE}>
          {name}
        </H1>
      </ProfileImageDiv>

      <MenuBox>
        <MenuItem img={DashboardIcon} text="Dashboard" />
        <MenuItem img={ProfileIcon} text="Profile" />
        <MenuItem img={AddDecksIcon} text="Add Decks" />
        <MenuItem img={LibraryIcon} text="Deck Library" />
        <GrowSpace />
        <MenuItem img={SettingsIcon} text="Settings" />
      </MenuBox>
    </SidebarBody>
  );
};

const NavSection = styled.nav``;
const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* margin: 10px 0; */
`;
const ProfileImageDiv = styled.div`
  margin-top: 35px;
  text-align: center;
`;
const HamburgerButton = styled.button`
  /* display: none; */
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;

const MenuItem = ({ img, text, route = '/' }) => {
  return (
    <Item to={route}>
      <img src={img} alt="" />
      <P BRAND color={c.WHITE}>
        {text}
      </P>
    </Item>
  );
};

const Item = styled(NavLink)`
  display: flex;
  padding: 15px 40px;
  /* margin: 0 20px; */
  justify-content: start;

  &:nth-child(6) {
    margin-bottom: 20px;
  }

  p {
    margin-left: 14px;
  }
`;

const GrowSpace = styled.div`
  flex-grow: 1;
`;
