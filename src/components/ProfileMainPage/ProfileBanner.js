import React from 'react';
import banner from '../../assets/images/rectangle.png';

import { Banner, WelcomeMessage } from './styles.js';

const ProfileBanner = ({ name }) => {
  return (
    <Banner>
      <img src={banner} alt="profile banner" />
      <WelcomeMessage>
        <h2>Welcome {name}!</h2>
      </WelcomeMessage>
    </Banner>
  );
};

export default ProfileBanner;
