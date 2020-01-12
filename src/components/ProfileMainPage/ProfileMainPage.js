import React from 'react';

import ProfileBanner from './ProfileBanner';
import ProfileImage from './ProfileImage';
import ProfileMainSection from './ProfileMainSection';

const ProfileMainPage = ({ profileData }) => {
  const { fullName } = profileData;
  return (
    <div className="profile-main-page">
      <ProfileBanner name={fullName} />
      <ProfileImage profileData={profileData} />
      <ProfileMainSection profileData={profileData} />
    </div>
  );
};

export default ProfileMainPage;
