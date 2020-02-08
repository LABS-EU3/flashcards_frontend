// Libraries
import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import { useSelector, useDispatch } from 'react-redux';

import * as g from '../../styles/variables/global';
import LeftSideBar from '../../components/leftSideBar/LeftSideBar';
import {
  DashboardContainer,
  sideBarStyle,
  sideBarRootStyle,
  MainContent,
} from './styles/DashboardStyles';
import { HAMBURGER_CLICKED } from '../../modules/dashboard/dashboardTypes';

export default function DashboardLayout({ children }) {
  const showMenu = useSelector(state => state.dashboard.showMenu);
  const dispatch = useDispatch();

  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
  };

  mql.addListener(mediaQueryChanged);

  return (
    <DashboardContainer>
      <Sidebar
        sidebar={<LeftSideBar />}
        onSetOpen={() => dispatch({ type: HAMBURGER_CLICKED })}
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
