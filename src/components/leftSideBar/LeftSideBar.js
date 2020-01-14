import React from 'react';

// import { connect } from 'react-redux';
import RoundedImage from 'react-rounded-image';
// Styles
import '../../App.css';
import {
  MdDashboard,
  MdAddToPhotos,
  MdSettings,
  MdExitToApp,
  MdPerson,
  MdContentCopy,
} from 'react-icons/md';
// assets
import { withRouter } from 'react-router-dom';
// import icons from '../../assets/icons';
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

const LeftSideBar = ({ name, logoutUser, history }) => {
  // const [activeMenu, setActive] = useState({ active: false });
  // const [color, setColor] = useState('white');
  // console.log(color);

  // const onClick = () => {
  //   console.log('click!');
  //   setColor('black');
  //   console.log(color);
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
          img={<MdDashboard size="1.5em" />}
          text="Dashboard"
          route="/dashboard/dashboard"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <MenuItem
          img={<MdPerson size="1.5em" />}
          text="Profile"
          route="/dashboard/profile"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <MenuItem
          img={<MdAddToPhotos size="1.5em" />}
          text="Add Decks"
          route="/dashboard/add_decks"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <MenuItem
          img={<MdContentCopy size="1.5em" />}
          text="Deck Library"
          route="/dashboard/library"
          // onClick={onClick}
          // active={activeMenu === true ? activeMenu : null}
        />
        <MenuItem
          img={<MdSettings size="1.5em" />}
          text="Settings"
          route="/dashboard/settings"
          // onClick={onClick}
          // active={activeMenu === true ? 'white' : null}
        />
        <GrowSpace />
        <MenuItem
          img={<MdExitToApp size="1.5em" />}
          onClick={onLogout}
          text="Log Out"
          route="/login"
        />
      </MenuBox>
    </SidebarBody>
  );
};

const MenuItem = ({ img, text, onClick, route = '/' }) => {
  // const active = { backgroundColor: 'red', color: 'black' };
  // console.log('tata', active);
  // const [color, setColor] = useState({
  //   backgroundColor: 'black',
  //   color: 'white',
  // });
  //  console.log(color);

  // const handleChange = () => {
  //   console.log('click!');
  //   setColor({
  //     backgroundColor: 'white',
  //     color: 'black',
  //   });
  //   console.log(color);
  // };

  return (
    <Item
      onClick={onClick || null}
      to={route}
      // activeStyle={color}
      activeClassName="active"
      // activeStyle={{
      //   color: 'red !important',
      //   backgroundColor: 'whitesmoke',
      // }}
      // style={active === true ? activeStyle : {}}
      // onclick - trigger colour change
    >
      {/* <img src={img} alt="" /> */}
      {/* <div> */}
      <H3 WHITE>{img}</H3>
      <P BRAND color={c.WHITE} activeClassName="active">
        {/* // onClick={handleChange} */}
        {text}
      </P>
      {/* </div> */}
    </Item>
  );
};

export default withRouter(LeftSideBar);
