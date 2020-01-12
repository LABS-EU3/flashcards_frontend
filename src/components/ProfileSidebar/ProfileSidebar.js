import React from 'react';
import ProfileImage from './ProfileImage';
import MenuItems from './MenuItems';

import './styles.css';

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <ProfileImage />
      <MenuItems />
    </div>
  );
};

export default ProfileSidebar;
