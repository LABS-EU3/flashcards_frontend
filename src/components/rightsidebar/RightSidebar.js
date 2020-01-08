// Libraries
import React, { useState } from 'react';

import { connect } from 'react-redux';

import Sidebar from 'react-sidebar';
import styled from 'styled-components';
import Card from '../cards/Cards';

// styles
import { H1 } from '../../styles/typography';
import { BRAND_FONT } from '../../styles/variables/fonts';

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
            sidebar: {
              background: c.LIGHT_NEUTRAL_COLOR,
              width: '20%',
              minWidth: '260px',
            },
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
      </Image>
      <CardsStyled>
        <StyledStart>
          <H1 BOLD>
            {' '}
            Jump back into
            <div>
              <HR />
            </div>
          </H1>
        </StyledStart>
        {cards.map(card => {
          return (
            // < FlexCardRow>
            <Card key={card.id} title={card.title} category={card.category} />
            // </FlexCardRow>
          );
        })}
      </CardsStyled>
    </SidebarBody>
  );
};
// const NavSection = styled.nav ``;
const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const HamburgerButton = styled.button`
  display: none;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 50%;
  margin-top: -10px;
`;

const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: white;
  // background: linear-gradient(88.85 deg, #d21f3c-6.57%, #ffa98791.86%);
  // background: linear-gradient(
  //   88.85 deg,
  //   rgba(210, 31, 60, 0.5) 38.43 %,
  //   rgba(255, 169, 135, 0.5) 136.86 %
  // );
  width: 100%;
  justify-content: space-evently;
  margin-top: -30px;
  border-radius: 20px 20px 0 0;
  height: 100%;
`;

const StyledStart = styled.div`
  font: ${BRAND_FONT};
  text-align: left;
  justify-content: center;
  margin: 10px 20px 10px 20px;
`;

const HR = styled.hr`
  height: 1px;
  border: 0;
  margin: 0;
  transform: rotate(0.11 deg);
  background: linear-gradient(
    88.85deg,
    rgba(210, 31, 60, 0.5) 38.43%,
    rgba(255, 169, 135, 0.5) 136.86%
  );
`;

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(RightSidebar);
