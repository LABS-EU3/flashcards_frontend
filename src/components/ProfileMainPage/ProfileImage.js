import React from 'react';
import RoundedImage from 'react-rounded-image';

import { Image } from './styles';

import profileImg from '../../assets/user_profile_default.jpg';

import { H1 } from '../../styles/typography';

const ProfileImage = ({ user }) => {
  return (
    <Image>
      <RoundedImage
        // eslint-disable-next-line max-len
        image={user.image_url || profileImg}
        alt="User's profile"
        imageHeight="100"
        imageWidth="100"
        roundedSize="1"
        roundedColor="#FFF"
      />
      <H1 WHITE>{user.full_name}</H1>
    </Image>
  );
};

export default ProfileImage;
