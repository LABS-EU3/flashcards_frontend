// update dashboard UI
//
// Import

// Libraries
import React, { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
// slcie data - render only 5 cards
import { useSelector } from 'react-redux';

import * as g from '../../styles/variables/global';
import LeftSideBar from '../../components/leftSideBar/LeftSideBar';
import {
  // HamburgerButton,
  DashboardContainer,
  sideBarStyle,
  sideBarRootStyle,
  MainContent,
} from './styles/DashboardStyles';

export default function DashboardLayout(props) {
  const { user, children, logoutUser } = props;
  const showMenu = useSelector(state => state.dashboard.showMenu);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
  };

  mql.addListener(mediaQueryChanged);

  return (
    <DashboardContainer>
      <Sidebar
        sidebar={
          <LeftSideBar
            name={user.credentials.full_name}
            logoutUser={logoutUser}
          />
        }
        open={showMenu}
        docked={sideBarDocked}
        styles={{
          sidebar: sideBarStyle,
          root: sideBarRootStyle,
        }}
      >
        <MainContent>
          {sideBarDocked}
          {children}
        </MainContent>
      </Sidebar>
    </DashboardContainer>
  );
}
