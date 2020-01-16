import React from 'react';

import { Image } from './styles.js';

import profileImg from '../../assets/user_profile_default.jpg';

const ProfileImage = ({ profileData }) => {
  const { fullName, imageUrl } = profileData;
  return (
    <Image>
      <img src={imageUrl || profileImg} alt="profile" />
      <h2>{fullName}</h2>
    </Image>
  );
};

export default ProfileImage;
