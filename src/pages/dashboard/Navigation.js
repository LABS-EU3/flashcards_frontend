// Import

// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';

// Styled
import * as c from '../../styles/variables/colours';

export default function SideNav({ mainContent }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <NavSection>
      <Sidebar
        sidebar={<SideContent />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked
        styles={{
          sidebar: { background: c.DARK_NEUTRAL_COLOR, width: '20%' },
          root: { top: '46px' },
        }}
      >
        <div>
          <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            Open sidebar
          </HamburgerButton>

          {mainContent}
        </div>
      </Sidebar>
    </NavSection>
  );
}

const SideContent = () => {
  return (
    <SidebarBody>
      <img
        // eslint-disable-next-line max-len
        src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198-300x300.jpg"
        alt="User's profile"
      />
    </SidebarBody>
  );
};

const NavSection = styled.nav``;
const SidebarBody = styled.div``;
const HamburgerButton = styled.button`
  /* display: none; */
`;
