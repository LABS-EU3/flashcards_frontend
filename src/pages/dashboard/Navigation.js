// Import

// Libraries
import React, { useState } from 'react';
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
import * as g from '../../styles/variables/global';
import { P, H1 } from '../../styles/typography';
import {
  GrowSpace,
  HamburgerButton,
  MenuBox,
  NavSection,
  ProfileImageDiv,
  Item,
  SidebarBody,
  sideBarStyle,
  sideBarRootStyle,
} from './styles/NavigationStyles';

export default function SideNav({ mainContent }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);

  return (
    <NavSection>
      <Sidebar
        sidebar={<SideContent name="Zuckerr" />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sideBarDocked}
        styles={{
          sidebar: sideBarStyle,
          root: sideBarRootStyle,
        }}
      >
        <div>
          <HamburgerButton
            isDocked={sideBarDocked}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
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
