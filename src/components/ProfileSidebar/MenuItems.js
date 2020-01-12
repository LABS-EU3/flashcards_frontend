import React from 'react';
import icons from '../../assets/icons';

const MenuItems = () => {
  return (
    <div className="menu-items">
      <div className="menu-item">
        <img src={icons.DashboardIcon} alt="icon dashboard" />
        <p>Dashboard</p>
      </div>

      <div className="menu-item profile-active">
        <img src={icons.ProfileIcon} alt="icon profile" />
        <p>Profile</p>
      </div>

      <div className="menu-item">
        <img src={icons.AddDecksIcon} alt="icon decks" />
        <p>Add Deck</p>
      </div>

      <div className="menu-item">
        <img src={icons.LibraryIcon} alt="icon decks" />
        <p>Deck Library</p>
      </div>

      <div className="menu-item">
        <img src={icons.SettingsIcon} alt="icon settings" />
        <p>Settings</p>
      </div>

      <div className="menu-item logout-menu">
        <img src={icons.LogoutIcon} alt="icon logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default MenuItems;
