// Import

// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styled
import { H1 } from '../../styles/typography';

export default function Dashboard() {
  return (
    <div>
      <H1>Dashboard Test</H1>
      <NavLink to="/landing">landing</NavLink>
      <NavLink to="/forgot">forgot password</NavLink>
      <NavLink to="/reset">reset password</NavLink>
      <NavLink to="/signup">signup</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
}
