import React from 'react';
import profileImg from '../../assets/user_profile_default.jpg';

const ProfileImage = () => {
  return (
    <div className="sidebar-profile-image">
      <img src={profileImg} alt="user profile" />
      <h3>Zuccker</h3>
    </div>
  );
};

export default ProfileImage;
