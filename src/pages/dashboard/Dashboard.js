// Import

// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
// Styled
import { H1, H3 } from '../../styles/typography';

// components
import RightSidebar from '../../components/rightsidebar/RightSidebar';

export default function Dashboard() {
  const history = useHistory();
  return (
    <div>
      <div>
        <H1>Dashboard Test</H1>
        <H3>Welcome! LogIn successful</H3>
        <NavLink to="/dashboard">dashboard</NavLink>
        <NavLink to="/forgot">forgot password</NavLink>
        <NavLink to="/reset">reset password</NavLink>
        <NavLink to="/signup">signup</NavLink>
        <NavLink to="/login">login</NavLink>
      </div>
      <div>
        <RightSidebar history={history} />
      </div>
    </div>
  );
}
