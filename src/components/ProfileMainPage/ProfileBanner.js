import React from 'react';
import banner from '../../assets/images/rectangle.png';

const ProfileBanner = ({ name }) => {
  return (
    <div className="profile-banner">
      <img src={banner} alt="profile banner" />
      <div className="profile-welcome-message">
        <h2>Welcome {name}!</h2>
      </div>
    </div>
  );
};

export default ProfileBanner;
