import React from 'react';

import { Image } from './styles';

import profileImg from '../../assets/user_profile_default.jpg';

const ProfileImage = ({ user }) => {
  return (
    <Image>
      <img src={user.imageUrl || profileImg} alt="profile" />
      <h2>{user.full_name}</h2>
    </Image>
  );
};

export default ProfileImage;
