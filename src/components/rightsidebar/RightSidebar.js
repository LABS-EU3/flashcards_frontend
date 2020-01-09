// Libraries
import React, { useState } from 'react';
// import { connect } from 'react-redux';

// components
import Sidebar from 'react-sidebar';
import Card from '../cards/Cards';

// styles
import { H1, HR } from '../../styles/typography';
import * as g from '../../styles/variables/global';

import {
  SidebarBody,
  Image,
  CardsStyled,
  StyledStart,
  SidebarStyled,
} from '../../styles/sidebarStyles';

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

export default function RightSidebar(props) {
  const { user } = props;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);
  return (
    <SidebarStyled>
      <Sidebar
        sidebar={<SideContent user={user} />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sideBarDocked}
        pullRight
        styles={{
          sidebar: {
            background: 'white',
            width: '25%',
            minWidth: '250px',
          },
        }}
      />
    </SidebarStyled>
  );
}
const SideContent = ({ user }) => {
  return (
    <SidebarBody>
      <Image>
        <H1> Welcome {user.credentials.full_name}!</H1>
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

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//   };
// };
// export default connect(mapStateToProps)(RightSidebar);
