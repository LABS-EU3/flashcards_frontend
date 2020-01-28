import React from 'react';

import { Image } from './styles';

import profileImg from '../../assets/user_profile_default.jpg';
import { H1 } from '../../styles/typography';

const ProfileImage = ({ user }) => {
  return (
    <Image>
      <img src={user.imageUrl || profileImg} alt="profile" />
      <H1 WHITE>{user.full_name}</H1>
    </Image>
  );
};

export default ProfileImage;
