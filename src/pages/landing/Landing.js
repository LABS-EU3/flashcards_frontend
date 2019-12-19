// Import

// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styled
import { H1 } from '../../styles/typography';

export default function Landing() {
  return (
    <div>
      <H1>Landing Test</H1>
      <NavLink to="/dashboard">dashboard</NavLink>
      <NavLink to="/forgot">forgot password</NavLink>
      <NavLink to="/reset">reset password</NavLink>
      <NavLink to="/signup">signup</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
}
