import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAction from '../../../../utils/useAction';
import * as action from '../../../../modules/user/userActions';

export default function Settings() {
  const logoutUser = useAction(action.logoutUser);
  const history = useHistory();
  const onLogout = e => {
    e.preventDefault();
    logoutUser(history);
  };
  return (
    <div>
      <h1>Settings</h1>
      <NavLink to="/login" onClick={onLogout}>
        Logout
      </NavLink>
    </div>
  );
}
