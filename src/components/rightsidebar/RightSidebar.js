// Libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

// components
import Sidebar from 'react-sidebar';
import Card from '../cards/Cards';

// styles
import { H1, HR } from '../../styles/typography';
import * as g from '../../styles/variables/global';

import {
  SidebarBody,
  HamburgerButton,
  Image,
  CardsStyled,
  StyledStart,
} from './styles/sidebarStyles';

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
              background: 'white',
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
            <Card key={card.id} title={card.title} category={card.category} />
          );
        })}
      </CardsStyled>
    </SidebarBody>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(RightSidebar);
