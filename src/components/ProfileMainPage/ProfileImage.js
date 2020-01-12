import React from 'react';

import profileImg from '../../assets/user_profile_default.jpg';

const ProfileImage = () => {
  return (
    <div className="profile-image">
      <img src={profileImg} alt="profile" />
      <h2>Zuckerr</h2>
    </div>
  );
};

export default ProfileImage;
