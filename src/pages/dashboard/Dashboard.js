// Import

// Libraries
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
// Styled
// import Sidebar from 'react-sidebar';
import { H1, H3 } from '../../styles/typography';
import { FlexRowCenterCenter } from '../../styles/displayFlex';

// components
import RightSidebar from '../../components/rightSidebar/RightSidebar';

export default function Dashboard() {
  const history = useHistory();
  return (
    <FlexRowCenterCenter>
      <div>
        <H1>Dashboard Test</H1>
        <H3>Welcome! LogIn successful</H3>
        {/* <NavLink to="/dashboard">dashboard</NavLink>
        <NavLink to="/forgot">forgot password</NavLink>
        <NavLink to="/reset">reset password</NavLink>
        <NavLink to="/signup">signup</NavLink>
        <NavLink to="/login">login</NavLink> */}
      </div>
      <div>
        <RightSidebar history={history} />
      </div>
    </FlexRowCenterCenter>
  );
}
