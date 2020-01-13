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
  // const [activeMenu, setActive] = useState({ active: false });

  // const onClick = MenuItem => {
  //   console.log('click!');
  //   // const color = active === MenuItem ? 'white' : 'black';
  //   // console.log(active);
  //   setActive({ active: true });
  //   console.log(MenuItem);
  // };

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
        <MenuItem
          img={icons.DashboardIcon}
          text="Dashboard"
          route="/dashboard/dashboard"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <MenuItem
          img={icons.ProfileIcon}
          text="Profile"
          route="/dashboard/profile"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <MenuItem
          img={icons.AddDecksIcon}
          text="Add Decks"
          route="/dashboard/add_decks"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <MenuItem
          img={icons.LibraryIcon}
          text="Deck Library"
          route="/dashboard/library"
          // onClick={onClick}
          // active={activeMenu === true ? activeMenu : null}
        />
        <MenuItem
          img={icons.SettingsIcon}
          text="Settings"
          route="/dashboard/settings"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <GrowSpace />
        <MenuItem
          img={icons.LogoutIcon}
          onClick={onLogout}
          text="Log Out"
          route="/login"
        />
      </MenuBox>
    </SidebarBody>
  );
};

const MenuItem = ({ img, text, onClick, route = '/' }) => {
  // const active = { backgroundColor: 'white', color: 'black' };
  // console.log('tata', active);
  return (
    <Item
      onClick={onClick || null}
      to={route}
      // activeStyle={active}
      activeStyle={{
        // fontWeight: 'bold',
        color: 'red',
        backgroundColor: 'whitesmoke',
      }}
      // style={active === true ? activeStyle : {}}
    >
      <img src={img} alt="" />
      <P
        BRAND
        color={c.WHITE}
        // activeStyle={{
        //   color: 'red',
        // }}
      >
        {text}
      </P>
    </Item>
  );
};

export default withRouter(LeftSideBar);
