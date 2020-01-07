// Import

// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';

// Styled
import * as c from '../../styles/variables/colours';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <DashboardSection>
      {/* <H1>Dashboard Test</H1>
      <H3>Welcome! LogIn successful</H3>
      <NavLink to="/dashboard">dashboard</NavLink>
      <NavLink to="/forgot">forgot password</NavLink>
      <NavLink to="/reset">reset password</NavLink>
      <NavLink to="/signup">signup</NavLink>
      <NavLink to="/login">login</NavLink> */}

      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked
        styles={{
          sidebar: { background: c.DARK_NEUTRAL_COLOR },
          root: { top: '46px' },
        }}
      >
        <HamburgerButton onClick={() => setSidebarOpen(true)}>
          Open sidebar
        </HamburgerButton>
      </Sidebar>
    </DashboardSection>
  );
}

const DashboardSection = styled.nav``;
const HamburgerButton = styled.button`
  display: none;
`;
