// Libraries
import React, { useState } from 'react';

import { connect } from 'react-redux';

import Sidebar from 'react-sidebar';
import styled from 'styled-components';
import Card from '../cards/Cards';

// styles
import { H1, H3 } from '../../styles/typography';

// import { FlexColumnCenterCenter } from '../../styles/displayFlex';
import * as c from '../../styles/variables/colours';
import * as g from '../../styles/variables/global';

import img from '../../assets/images/rectangle_20.png';

const userObj = {
  name: 'Anna Winther',
  email: 'anski.anna@gmail.com',
};

const cards = [
  {
    title: 'Organic Compounds',
    category: 'Chemistry',
  },
  {
    title: 'Quantum Mechanics',
    category: 'Physics',
  },
  {
    title: 'Data Structures',
    category: 'Computer Science',
  },
  {
    title: 'Advance Algorithms',
    category: 'Computer Science',
  },
  {
    title: 'OWASP Basics',
    category: 'Computer Science',
  },
];

const RightSidebar = () => {
  // const {
  //     values,
  //     handleChange,
  //     handleBlur,
  //     handleSubmit,
  //     touched,
  //     errors,
  //     user,
  // } = props;
  //   console.log(props);
  //   const [user, setUser] = useState(userObj);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);
  return (
    <div>
      <div>
        <Sidebar
          sidebar={<SideContent />}
          open={sidebarOpen}
          onSetOpen={setSidebarOpen}
          docked
          pullRight
          styles={{
            sidebar: { background: c.LIGHT_NEUTRAL_COLOR, width: '30%' },
            root: { top: '46px' },
          }}
        >
          <HamburgerButton
            isDocked={sideBarDocked}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Open sidebar
          </HamburgerButton>
        </Sidebar>
      </div>
    </div>
  );
};
const SideContent = () => {
  return (
    <SidebarBody>
      <Image>
        {/* <img alt="online test" src={img} /> */}
        <H1> Welcome {userObj.name}!</H1>
        <H3> Jump Back Into... </H3>
      </Image>
      <div>
        {cards.map(card => {
          return (
            // < FlexCardRow>
            <Card key={card.id} title={card.title} category={card.category} />
            // </FlexCardRow>
          );
        })}
      </div>
    </SidebarBody>
  );
};
// const NavSection = styled.nav ``;
const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  align-items: center;
  height: 100%;
`;
const HamburgerButton = styled.button`
  display: none;
`;

const Image = styled.div`
  border: 1px solid black;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 20%;
`;

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(RightSidebar);
