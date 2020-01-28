import React from 'react';

import { Image } from './styles';

import profileImg from '../../assets/user_profile_default.jpg';
import { H2 } from '../../styles/typography';

const ProfileImage = ({ user }) => {
  return (
    <Image>
      <img src={user.imageUrl || profileImg} alt="profile" />
      <H2>{user.full_name}</H2>
    </Image>
  );
};

export default ProfileImage;
