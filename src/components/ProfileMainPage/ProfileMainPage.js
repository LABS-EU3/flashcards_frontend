import React from 'react';

import ProfileBanner from './ProfileBanner';
import ProfileImage from './ProfileImage';
import ProfileMainSection from './ProfileMainSection';

const ProfileMainPage = () => {
  return (
    <div className="profile-main-page">
      <ProfileBanner />
      <ProfileImage />
      <ProfileMainSection />
    </div>
  );
};

export default ProfileMainPage;
