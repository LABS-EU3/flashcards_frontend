import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StudyMode() {
  return (
    <div>
      <h1>Study Mode</h1>
      <NavLink to="/dashboard/studysession/sessionId">
        Start Study Session
      </NavLink>
    </div>
  );
}
