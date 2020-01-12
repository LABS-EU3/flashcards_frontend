import React from 'react';
import profileImg from '../../assets/user_profile_default.jpg';

const ProfileImage = ({ profileData }) => {
  const { imageUrl, fullName } = profileData;
  return (
    <div className="sidebar-profile-image">
      <img src={imageUrl || profileImg} alt="user profile" />
      <h3>{fullName}</h3>
    </div>
  );
};

export default ProfileImage;
