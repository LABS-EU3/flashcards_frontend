import React from 'react';
import ProfileImage from './ProfileImage';
import MenuItems from './MenuItems';

import './styles.css';

const ProfileSidebar = ({ profileData }) => {
  return (
    <div className="profile-sidebar">
      <ProfileImage profileData={profileData} />
      <MenuItems />
    </div>
  );
};

export default ProfileSidebar;
