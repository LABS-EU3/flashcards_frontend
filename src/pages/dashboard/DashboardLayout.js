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
  // export function DashboardLayout(props) {
  const {
    // user,
    children,
    // logoutUser
  } = props;
  const joba1 = useSelector(state => state.dashboard);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const handleClose = reason => {
  //   if (sidebarOpen === joba1.showMenu) {
  //     return;
  //     // return 'hurayyyyyy';
  //   } else return setSidebarOpen(!sidebarOpen);
  //   // return 'oh nooooo';
  // };

  // console.log('dddd', props);
  const mql = window.matchMedia(`(min-width: ${g.desktopMediaBreak}px)`);

  const [sideBarDocked, setSideBarDocked] = useState(mql.matches);

  const mediaQueryChanged = () => {
    setSideBarDocked(mql.matches);
    setSidebarOpen(false);
  };

  mql.addListener(mediaQueryChanged);

  // const dispatch = useDispatch();
  // const newFun = () => dispatch(setSidebarOpen(!sidebarOpen));

  // function sayHello() {
  //   return 'Hello';
  // }
  // const sendSomething = () =>
  //   dispatch({ type: 'SAYHELLO', payload: 'yyyyyyyy' });
  // setSidebarOpen(() => joba1.showMenu);

  useEffect(() => {
    // console.log('render');
    setSidebarOpen(!sidebarOpen);
  }, [joba1.showMenu]);

  return (
    <DashboardContainer>
      {/* {console.log('///ooottt', joba1.showMenu)} */}
      {/* {console.log('%%%%%%', handleClose())} */}

      <Sidebar
        sidebar={
          <LeftSideBar
          // name={user.credentials.full_name}
          // logoutUser={logoutUser}
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
          {/* <HamburgerButton
            isDocked={sideBarDocked}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Open sidebar
          </HamburgerButton> */}
          {sideBarDocked}
          {children}
        </MainContent>
      </Sidebar>
    </DashboardContainer>
  );
}

// const mapStateToProps = state => {
//   return {
//     jjjj: state.dashboard,
//     tttt: sayHello,
//   };
// };

// export default connect(mapStateToProps, { sayHello })(DashboardLayout);
