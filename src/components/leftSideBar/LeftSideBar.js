import React from 'react';

// import { connect } from 'react-redux';
import RoundedImage from 'react-rounded-image';

// import { fetchProfile } from '../../../modules/dashboard/dashboardActions';
// assets
import { withRouter } from 'react-router-dom';
import icons from '../../assets/icons';
import profileDefault from '../../assets/user_profile_default.jpg';
// Styled
import * as c from '../../styles/variables/colours';
import { P, H1 } from '../../styles/typography';
import {
  MenuBox,
  ProfileImageDiv,
  Item,
  SidebarBody,
} from '../../pages/dashboard/styles/DashboardStyles';

import { GrowSpace } from '../../styles/displayFlex';

const LeftSideBar = ({ name, logoutUser, history }) => {
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
        <MenuItem
          img={icons.LibraryIcon}
          text="Deck Library"
          route="/dashboard/library"
        />
        <MenuItem img={icons.SettingsIcon} text="Settings" />
        <GrowSpace />
        <MenuItem img={icons.LogoutIcon} onClick={onLogout} text="Log Out" />
      </MenuBox>
    </SidebarBody>
  );
};

const MenuItem = ({ img, text, onClick, route = '/' }) => {
  return (
    <Item onClick={onClick || null} to={route}>
      <img src={img} alt="" />
      <P BRAND color={c.WHITE}>
        {text}
      </P>
    </Item>
  );
};

export default withRouter(LeftSideBar);
