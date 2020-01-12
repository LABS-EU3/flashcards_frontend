import React from 'react';

import profileImg from '../../assets/user_profile_default.jpg';

const ProfileImage = ({ profileData }) => {
  const { fullName, imageUrl } = profileData;
  return (
    <div className="profile-image">
      <img src={imageUrl || profileImg} alt="profile" />
      <h2>{fullName}</h2>
    </div>
  );
};

export default ProfileImage;
