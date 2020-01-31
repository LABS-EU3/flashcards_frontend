import React from 'react';
import { useSelector } from 'react-redux';

// import { connect } from 'react-redux';
import RoundedImage from 'react-rounded-image';
// Styled
import '../../App.css';
import {
  MdDashboard,
  MdSettings,
  MdPerson,
  MdContentCopy,
  MdCollectionsBookmark,
  MdPoll,
} from 'react-icons/md';
// assets
import { withRouter } from 'react-router-dom';
import profileDefault from '../../assets/user_profile_default.jpg';

// Styled
import * as c from '../../styles/variables/colours';
import { P, H1, H3 } from '../../styles/typography';
import {
  MenuBox,
  ProfileImageDiv,
  Item,
  SidebarBody,
} from '../../pages/dashboard/styles/DashboardStyles';

import { GrowSpace } from '../../styles/displayFlex';

const LeftSideBar = ({ name }) => {
  const imgUrl = useSelector(state => state.user.credentials.image_url);

  return (
    <SidebarBody>
      <ProfileImageDiv>
        <RoundedImage
          // eslint-disable-next-line max-len
          // image={profileDefault}
          image={imgUrl || profileDefault}
          alt="User's profile"
          imageHeight="100"
          imageWidth="100"
          roundedSize="1"
          roundedColor="#FFF"
        />

        <H1 REGULAR color={c.WHITE}>
          {name}
        </H1>
      </ProfileImageDiv>

      <MenuBox>
        <MenuItem
          img={<MdDashboard size="1.5em" />}
          text="Dashboard"
          route="/dashboard/welcome"
        />
        <MenuItem
          img={<MdPerson size="1.5em" />}
          text="Profile"
          route="/dashboard/profile"
        />
        {/* <MenuItem
          img={<MdAddToPhotos size="1.5em" />}
          text="Add Decks"
          route="/dashboard/add_decks"
        /> */}
        <MenuItem
          img={<MdContentCopy size="1.5em" />}
          text="Deck Library"
          route="/dashboard/library"
        />
        <MenuItem
          img={<MdCollectionsBookmark size="1.5em" />}
          text="Study Mode"
          route="/dashboard/study"
        />
        <MenuItem
          img={<MdPoll size="1.5em" />}
          text="Leaderboard"
          route="/dashboard/leaderboard"
        />

        <GrowSpace />
        <MenuItem
          img={<MdSettings size="1.5em" />}
          text="Settings"
          route="/dashboard/settings"
        />
      </MenuBox>
    </SidebarBody>
  );
};

const MenuItem = ({ img, text, onClick, route = '/' }) => {
  return (
    <Item onClick={onClick || null} to={route} activeClassName="active">
      <H3 WHITE>{img}</H3>
      <P BRAND color={c.WHITE} activeClassName="active">
        {text}
      </P>
    </Item>
  );
};

export default withRouter(LeftSideBar);
