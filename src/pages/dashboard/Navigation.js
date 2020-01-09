// Import

// Libraries
import React, { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
import RoundedImage from 'react-rounded-image';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { fetchProfile } from '../../modules/dashboard/dashboardActions';
// assets
import icons from '../../assets/icons';
import profileDefault from '../../assets/user_profile_default.jpg';

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

function SideNav(props) {
  const { mainContent, user, logoutUser, history } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);

  useEffect(() => {
    // props.fetchProfile();
  }, []);

  return (
    <NavSection>
      <Sidebar
        sidebar={
          <SideContent
            name={user.completed || 'Sherlock Holmes'}
            logoutUser={logoutUser}
            history={history}
          />
        }
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

const SideContent = ({ name, logoutUser, history }) => {
  const onLogout = e => {
    e.preventDefault();
    logoutUser(history);
  };

  return (
    <SidebarBody>
      <ProfileImageDiv>
        <RoundedImage
          // eslint-disable-next-line max-len
          image={profileDefault}
          alt="User's profile"
          imageHeight="150"
          imageWidth="150"
          roundedSize="1"
          roundedColor="#FFF"
        />

        <H1 REGULAR color={c.WHITE}>
          {name}
        </H1>
      </ProfileImageDiv>

      <MenuBox>
        <MenuItem img={icons.DashboardIcon} text="Dashboard" />
        <MenuItem img={icons.ProfileIcon} text="Profile" />
        <MenuItem img={icons.AddDecksIcon} text="Add Decks" />
        <MenuItem img={icons.LibraryIcon} text="Deck Library" />
        <MenuItem img={icons.SettingsIcon} text="Settings" route="/settings" />
        <GrowSpace />
        <MenuItem img={icons.LibraryIcon} onClick={onLogout} text="Log Out" />
      </MenuBox>
    </SidebarBody>
  );
};

const MenuItem = ({ img, text, route = '/', onClick }) => {
  return (
    <Item onClick={onClick || null} to={route}>
      <img src={img} alt="" />
      <P BRAND color={c.WHITE}>
        {text}
      </P>
    </Item>
  );
};

export default withRouter(SideNav);
