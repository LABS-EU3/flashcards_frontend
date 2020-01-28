import React from 'react';
import banner from '../../assets/images/rectangle.png';

import { Banner, WelcomeMessage } from './styles';
import { H2 } from '../../styles/typography';

const ProfileBanner = ({ name }) => {
  return (
    <Banner>
      <img src={banner} alt="profile banner" />
      <WelcomeMessage>
        <H2>Welcome {name}!</H2>
      </WelcomeMessage>
    </Banner>
  );
};

export default ProfileBanner;
