// Import

// Libraries
import React, { useState } from 'react';
import Sidebar from 'react-sidebar';

import * as g from '../../styles/variables/global';
import LeftSideBar from '../../components/leftSideBar/LeftSideBar';
import {
  HamburgerButton,
  DashboardContainer,
  sideBarStyle,
  sideBarRootStyle,
  MainContent,
} from './styles/DashboardStyles';

export default function DashboardLayout(props) {
  const { user, children, logoutUser } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
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
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked={sideBarDocked}
        styles={{
          sidebar: sideBarStyle,
          root: sideBarRootStyle,
        }}
      >
        <MainContent>
          <HamburgerButton
            isDocked={sideBarDocked}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Open sidebar
          </HamburgerButton>

          {children}
        </MainContent>
      </Sidebar>
    </DashboardContainer>
  );
}
