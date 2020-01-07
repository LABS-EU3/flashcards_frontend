// Import

// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';

// Styled
import * as c from '../../styles/variables/colours';

export default function SideNav() {
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
        <HamburgerButton onClick={() => setSidebarOpen(true)}>
          Open sidebar
        </HamburgerButton>
      </Sidebar>
    </NavSection>
  );
}

const SideContent = () => {
  return (
    <SidebarBody>
      <b>Some text, yall</b>
    </SidebarBody>
  );
};

const NavSection = styled.nav``;
const SidebarBody = styled.div``;
const HamburgerButton = styled.button`
  display: none;
`;
