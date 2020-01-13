// Libraries
import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import Sidebar from 'react-sidebar';
import { getUserId } from '../../utils/auth';

// components
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
  const { user, getRecentCards } = props;
  // console.log(user);
  console.log(getRecentCards(1));

  // const id = useSelector(props => props.user.credentials.id);
  // const [card, setCard] = useState(getRecentCards(id));
  // const test = dispatch(getRecentCards());
  // const [cards, setCards] = useState([]);

  const getAll = () => {
    const userObj = getUserId();
    console.log(userObj);
    const userId = userObj.subject;
    console.log(userId);
    // const url = `/api/cards/users/${userId}`;
    // console.log(url);
    // getRecentCards(userId).then(u => {
    //   console.log('he', u);
    //   setCards(u);
    // });
  };
  useEffect(() => {
    getAll();
    // const userObj = getUserId();
    //   console.log(userObj);
    //   const userId = userObj.subject;
    // getRecentCards(userId);
  }, []);
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
            width: '100%',
            minWidth: '250px',
          },

          root: {
            width: '25%',
            left: 'none',
          },
        }}
      >
        <div />
      </Sidebar>
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
            <Card
              key={card.title}
              title={card.title}
              category={card.category}
            />
          );
        })}
      </CardsStyled>
    </SidebarBody>
  );
};
