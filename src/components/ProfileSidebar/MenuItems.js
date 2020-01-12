import React from 'react';
import { connect } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';

import { logoutUser } from '../../modules/user/userActions';
import icons from '../../assets/icons';

const MenuItems = ({ logoutUser }) => {
  const history = useHistory();

  const handleClick = () => logoutUser(history);

  return (
    <div className="menu-items">
      <NavLink to="/dashboard" className="menu-item" activeClassName="selected">
        <img
          src={icons.DashboardIcon}
          alt="icon dashboard"
          activeClassName="selected"
        />
        <p>Dashboard</p>
      </NavLink>

      <NavLink to="/profile" className="menu-item" activeClassName="selected">
        <img src={icons.ProfileIcon} alt="icon profile" />
        <p>Profile</p>
      </NavLink>

      <NavLink to="/add-deck" className="menu-item" activeClassName="selected">
        <img src={icons.AddDecksIcon} alt="icon decks" />
        <p>Add Deck</p>
      </NavLink>

      <NavLink to="/library" className="menu-item" activeClassName="selected">
        <img src={icons.LibraryIcon} alt="icon decks" />
        <p>Deck Library</p>
      </NavLink>

      <NavLink to="/settings" className="menu-item" activeClassName="selected">
        <img src={icons.SettingsIcon} alt="icon settings" />
        <p>Settings</p>
      </NavLink>

      <div
        className="menu-item logout-menu"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        <img src={icons.LogoutIcon} alt="icon logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default connect(null, { logoutUser })(MenuItems);
