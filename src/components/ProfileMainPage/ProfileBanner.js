import React from 'react';
import banner from '../../assets/images/rectangle.png';

import { Banner, WelcomeMessage } from './styles';
import { H1 } from '../../styles/typography';

const ProfileBanner = ({ name }) => {
  return (
    <Banner>
      <img src={banner} alt="profile banner" />
      <WelcomeMessage>
        <H1>Welcome {name}!</H1>
      </WelcomeMessage>
    </Banner>
  );
};

export default ProfileBanner;
