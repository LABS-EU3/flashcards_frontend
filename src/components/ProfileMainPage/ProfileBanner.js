import React from 'react';
import banner from '../../assets/images/rectangle.png';

const ProfileBanner = () => {
  return (
    <div className="profile-banner">
      <img src={banner} alt="profile banner" />
      <div className="profile-welcome-message">
        <h2>Welcome Zucker!</h2>
      </div>
    </div>
  );
};

export default ProfileBanner;
